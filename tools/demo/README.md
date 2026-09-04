# The interactive demo at `/demo/`

The demo is the real portfolio tracker — [`Opvion/wealth-tracker-B2B`][repo],
branch `feat-b2c-pro-demo` — built to run **without its backend**.

That app is FastAPI + SQLAlchemy + SQLite with live Plaid syncing. This site is
static on Cloudflare Pages, which can't run Python. So the frontend is built
against JSON captured from a real backend sync instead of a live API: every
figure a visitor sees came off the actual service, but nothing is running.

## What that changes

| | Live app | This demo |
|---|---|---|
| Login | `admin@admin.com` / `admin` | none — opens straight on Overview |
| Data | live Plaid sync (~20s on first load) | captured fixtures, instant |
| Currency | all 16 | EUR, USD, GBP (the three captured) |
| Writes | sync, import, manual entry | refused with an explanatory error |
| Theme | light by default | dark, to match the site it's entered from |

Everything else — pages, charts, filters, per-lot drilldowns, the benchmark, the
Ask AI panel — is the real app's own code.

## Rebuilding after the app changes

```sh
./tools/build-demo.sh                    # rebuild from the pinned branch
DEMO_REF=some-other-branch ./tools/build-demo.sh
```

This rebuilds the frontend around the fixtures already in `demo/fixtures/`. It
applies four overlays, each of which **fails the build if it no longer matches
upstream** rather than silently producing a broken demo:

1. `tools/demo/api.ts` replaces `src/services/api.ts` — the fixture adapter.
2. `BrowserRouter` gets a `basename`, since the app mounts at `/demo/`.
3. The theme default flips to dark.
4. Five cache keys gain the display currency — see the bug note below.

## Recapturing the data

Only needed when the app's API shape or the demo portfolio changes:

```sh
git clone -b feat-b2c-pro-demo https://github.com/Opvion/wealth-tracker-B2B.git
cd wealth-tracker-B2B && cp .env.example .env      # blank Plaid keys are fine
python3 -m venv .venv && .venv/bin/pip install -r backend/requirements.txt
(cd backend && ../.venv/bin/uvicorn app.main:app --port 8000)

python3 tools/capture-demo-fixtures.py             # writes demo-fixtures/
```

The committed `data/opvion.db` already holds a synced portfolio, so no Plaid
credentials are needed for the read endpoints the demo uses. Copy the result
over `demo/fixtures/` and rebuild.

## Upstream bug this build patches around

Switching display currency leaves **Holdings, allocation, risk and the
benchmark** showing the previous currency's numbers under the new symbol.
`useCachedResource` only refetches when its key changes, and `clearCache()`
empties the store without notifying mounted consumers — so any view whose key
omits the currency never reloads. Overview and Spending already fold the
currency into their keys; those four don't.

`tools/build-demo.sh` applies that same convention to the four. **The fix is
still needed in the app repo** — this only stops the marketing demo from
showing it. The real fix is either adding `:${user?.display_currency}` to those
keys, or making `clearCache()` notify mounted consumers so it invalidates them
the way its name implies.

[repo]: https://github.com/Opvion/wealth-tracker-B2B
