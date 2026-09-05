#!/usr/bin/env bash
# Rebuild the interactive demo at /demo/ from the portfolio-tracker app.
#
# The app is a full-stack FastAPI + React project living in a private repo; this
# site is static. So we build its frontend against captured fixtures instead of
# a live backend — see tools/demo/api.ts, which overlays the real API client.
#
# Fixtures are captured separately by tools/capture-demo-fixtures.py against a
# locally running backend; this script only rebuilds the frontend around the
# fixtures already committed in demo/fixtures/.
#
#   ./tools/build-demo.sh              # build from the pinned commit
#   DEMO_REF=some-branch ./tools/build-demo.sh
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
REPO="https://github.com/Opvion/wealth-tracker-B2C.git"
REF="${DEMO_REF:-$(cat "$ROOT/tools/demo/PINNED_REF")}"
WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT

echo "▶ Cloning $REPO @ $REF"
git clone --quiet --depth 1 --branch "$REF" "$REPO" "$WORK/app"

cd "$WORK/app/frontend"

# Overlay the fixture-backed API client, its manifest, and the demo notices.
cp "$ROOT/tools/demo/api.ts" src/services/api.ts
cp "$ROOT/demo/fixtures/manifest.json" src/services/demo-manifest.json
cp "$ROOT/tools/demo/DemoUpsell.tsx" src/components/DemoUpsell.tsx

# Surfaces that can't work without a backend: sign-out becomes a way back to
# the marketing site, provider connection becomes an invitation to sign up,
# and the currency list says why it's short. Each asserts, so an upstream
# rename fails the build instead of quietly dropping the change.
python3 "$ROOT/tools/demo/patch-ui.py"

# The app mounts at /demo/, not the domain root, so the router needs a basename.
perl -0pi -e 's{<BrowserRouter>}{<BrowserRouter basename={import.meta.env.BASE_URL}>}' src/main.tsx
grep -q 'basename=' src/main.tsx || { echo "✗ could not patch BrowserRouter basename"; exit 1; }

# The app ships light-first; the demo is entered from a dark marketing page, so
# it opens dark. Visitors can still toggle. Presentation only — no app logic.
perl -0pi -e "s{\Q(localStorage.getItem(KEY) as Theme) || 'light'\E}{(localStorage.getItem(KEY) as Theme) || 'dark'}" src/contexts/ThemeContext.tsx
grep -q "|| 'dark'" src/contexts/ThemeContext.tsx || { echo "✗ could not patch theme default"; exit 1; }

# --- UPSTREAM BUG, patched here so the demo doesn't show it -----------------
# Switching display currency leaves Holdings, allocation, risk and the
# benchmark showing the previous currency's figures under the new symbol.
# useCachedResource only refetches when its key changes, and clearCache()
# empties the store without notifying mounted consumers — so views whose key
# omits the currency never reload. Overview and Spending already fold the
# currency into their keys; these four don't. This applies that same existing
# convention. THE SAME FIX IS STILL NEEDED IN wealth-tracker-B2C.
patch_key() {  # file, literal-old, literal-new
  # Both sides go through the environment: perl would otherwise interpolate
  # the ${...} in these template-literal keys as its own variables.
  OLD="$2" NEW="$3" perl -0pi -e 's{\Q$ENV{OLD}\E}{$ENV{NEW}}' "$1"
  grep -qF "$3" "$1" || { echo "✗ cache-key patch failed in $1 — did upstream change?"; exit 1; }
}
patch_key src/pages/Holdings.tsx    'holdings:${user?.tier}`'    'holdings:${user?.tier}:${user?.display_currency}`'
patch_key src/pages/Holdings.tsx    'allocation:${dimension}`'   'allocation:${dimension}:${user?.display_currency}`'
patch_key src/pages/Performance.tsx 'risk:${user?.tier}`'        'risk:${user?.tier}:${user?.display_currency}`'
patch_key src/pages/Performance.tsx 'benchmark:${user?.tier}:${index}:${range}`' 'benchmark:${user?.tier}:${index}:${range}:${user?.display_currency}`'
patch_key src/pages/Holdings.tsx    'benchmark:${user?.tier}:holdings:${range}:${dimension}:${slice ?? '"'"'all'"'"'}`' 'benchmark:${user?.tier}:holdings:${range}:${dimension}:${slice ?? '"'"'all'"'"'}:${user?.display_currency}`'

echo "▶ Installing frontend dependencies"
npm ci --silent --no-audit --no-fund

echo "▶ Building"
npx vite build --base=/demo/ --outDir dist

echo "▶ Publishing to demo/"
# Keep the captured fixtures; replace everything else.
find "$ROOT/demo" -mindepth 1 -maxdepth 1 ! -name fixtures -exec rm -rf {} +
cp -R dist/. "$ROOT/demo/"

echo "✓ Built $REF into demo/"
