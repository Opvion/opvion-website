#!/usr/bin/env python3
"""Demo-only UI edits, applied by tools/build-demo.sh inside the cloned app.

Run from the app's `frontend/` directory. Every edit asserts on its anchor, so
if upstream renames or restructures one of these, the build stops with a clear
message instead of silently shipping a demo that still offers a control which
cannot work.

Three surfaces need it:

  Sidebar          There is no session to end, and the visitor came from the
                   marketing site — so "Sign out" becomes a way back to it.
  Accounts         Provider connection needs a live backend. The tile is
                   replaced by an invitation rather than left there dead.
  CurrencySelector Only the captured currencies are switchable; the list says
                   so instead of looking arbitrarily short.

Everything else the demo can't do is a write, and those are already covered by
the refusal message in tools/demo/api.ts, which the app surfaces itself.
"""
import io
import sys


def edit(path, fn):
    src = io.open(path, encoding="utf-8").read()
    out = fn(src)
    io.open(path, "w", encoding="utf-8").write(out)
    print(f"  patched {path}")


def need(condition, message):
    if not condition:
        sys.exit(f"✗ {message} — did upstream change?")


def sidebar(s):
    old = """        <button onClick={logout} className="nav-item w-full hover:text-negative">
          <LogOut size={17} />
          Sign out
        </button>"""
    new = """        <a href="/" className="nav-item w-full">
          <LogOut size={17} className="rotate-180" />
          Return to website
        </a>"""
    need(old in s, "sign-out button not found in Sidebar.tsx")
    s = s.replace(old, new)
    # `logout` is now unused, which the build treats as an error.
    need("const { user, logout } = useAuth()" in s, "Sidebar auth destructure not found")
    return s.replace("const { user, logout } = useAuth()", "const { user } = useAuth()")


def accounts(s):
    start = '        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">\n'
    end = "        </div>\n\n        {connections.length > 0 && ("
    need(start in s and end in s, "provider tile bounds not found in Accounts.tsx")
    i, j = s.index(start), s.index(end)
    need(i < j, "provider tile bounds out of order in Accounts.tsx")
    card = """        <DemoUpsell title="Connect your own accounts">
          This demo runs on a fixed sample portfolio, so account connections are switched off.
          The full app links banks, brokers and crypto wallets through open banking and keeps
          them in sync automatically.
        </DemoUpsell>

"""
    s = s[:i] + card + s[j + len("        </div>\n\n"):]

    # usePlaidLink injects https://cdn.plaid.com/.../link-initialize.js on
    # mount, so the demo would call a third party on every page load for a flow
    # nothing can start any more — and name the provider in devtools however
    # carefully the copy avoids it. Dropping the hook is also what removes
    # react-plaid-link from the bundle, since this is its only import.
    hook = """  const { open, ready } = usePlaidLink({
    token: linkToken,
    onSuccess: (publicToken) => onPlaidSuccess(publicToken),
    onExit: () => setLinkToken(null),
  })

  useEffect(() => {
    if (linkToken && ready) open()
  }, [linkToken, ready, open])

"""
    need(hook in s, "usePlaidLink block not found in Accounts.tsx")
    s = s.replace(hook, "")
    imp = "import { usePlaidLink } from 'react-plaid-link'\n"
    need(imp in s, "react-plaid-link import not found in Accounts.tsx")
    s = s.replace(imp, "")

    # The two handlers the hook and the tile used to call. Unreachable now, but
    # they carry the provider's name as a string literal into the bundle.
    starter = """  const startPlaid = async () => {
    setMessage('')
    linkMode.current = 'new'
    const { data } = await api.post('/link/token?provider=plaid')
    setLinkToken(data.link_token)
  }

"""
    need(starter in s, "startPlaid not found in Accounts.tsx")
    s = s.replace(starter, "")
    a = s.index("  const onPlaidSuccess = useCallback(")
    b = s.index("  }, [])\n\n", a) + len("  }, [])\n\n")
    need(a < b, "onPlaidSuccess bounds not found in Accounts.tsx")
    s = s[:a] + s[b:]

    anchor = "import { Account, Connection, ProviderInfo } from '../types'"
    need(anchor in s, "Accounts.tsx type import not found")
    return s.replace(anchor, anchor + "\nimport { DemoUpsell } from '../components/DemoUpsell'")


def currency_selector(s):
    old = """          })}
        </div>
      )}"""
    new = """          })}
          <DemoNote>
            The demo carries three of the 16 supported currencies, converted at the ECB rate
            captured on each transaction's own date.
          </DemoNote>
        </div>
      )}"""
    need(old in s, "currency dropdown tail not found in CurrencySelector.tsx")
    s = s.replace(old, new, 1)
    anchor = "import { useCurrency } from '../contexts/CurrencyContext'"
    need(anchor in s, "CurrencySelector currency import not found")
    return s.replace(anchor, anchor + "\nimport { DemoNote } from './DemoUpsell'", 1)


edit("src/components/Sidebar.tsx", sidebar)
edit("src/pages/Accounts.tsx", accounts)
edit("src/components/CurrencySelector.tsx", currency_selector)
