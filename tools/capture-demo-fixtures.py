import hashlib, json, os, shutil, subprocess, sys, urllib.request, urllib.error

# Point this at the capture backend. Must be `demo_terms:app`, not
# `app.main:app` — see tools/demo/demo_terms.py.
API = os.environ.get('OPVION_CAPTURE_API', 'http://127.0.0.1:8000')
# Every currency the backend can convert between, so the demo's switcher is
# the real one rather than a sample of it.
CURRENCIES = ['EUR', 'USD', 'GBP', 'CHF', 'SEK', 'NOK', 'DKK', 'PLN',
              'CZK', 'HUF', 'RON', 'ISK', 'TRY', 'JPY', 'CAD', 'AUD']
OUT = 'demo-fixtures'

RANGES = ['1M', '3M', '6M', '1Y', '2Y', '5Y', 'ALL']
# The benchmark keys the app's index picker actually offers — BENCHMARKS in
# backend/app/services/market_data_service.py. Capturing anything else leaves
# every request from the Performance page unanswered: the app opens on SPX, so
# an `index=SPY` fixture is a route nothing ever asks for.
INDEXES = ['SPX', 'MSCI_WORLD', 'MSCI_EUROPE', 'NASDAQ', 'ACWI']
INST = 'First%20Platypus%20Bank'

PATHS = [
    '/auth/me', '/auth/provisioning',
    '/accounts', '/accounts/connections', '/accounts/debts',
    '/analytics/accounts', '/analytics/wealth',
    '/portfolio/holdings', '/portfolio/lots', '/portfolio/risk',
    '/fx/currencies', '/link/providers',
    '/transactions?limit=500', '/transactions?limit=60',
    '/transactions?scope=household&limit=500',
    f'/transactions?scope=household&limit=500&institution={INST}',
    '/portfolio/allocation',
]
PATHS += [f'/portfolio/allocation?by={d}' for d in ('asset_class', 'account', 'currency', 'sector')]
for r in RANGES:
    # The bare route is what Holdings asks for; the Performance page always
    # names an index.
    PATHS += [f'/analytics/net-worth-history?range={r}',
              f'/portfolio/benchmark?range={r}']
    PATHS += [f'/portfolio/benchmark?index={i}&range={r}' for i in INDEXES]
for m in (3, 6, 12):
    PATHS += [f'/analytics/spending?months={m}',
              f'/analytics/spending?months={m}&institution={INST}']
PATHS += [f'/fx/rates?base={c}' for c in CURRENCIES]

def req(path, token, method='GET', body=None):
    r = urllib.request.Request(API + path, method=method)
    r.add_header('Authorization', f'Bearer {token}')
    data = None
    if body is not None:
        data = json.dumps(body).encode(); r.add_header('Content-Type', 'application/json')
    try:
        with urllib.request.urlopen(r, data, timeout=60) as f:
            return f.status, f.read()
    except urllib.error.HTTPError as e:
        return e.code, e.read()

def login():
    r = urllib.request.Request(API + '/auth/login', method='POST')
    r.add_header('Content-Type', 'application/json')
    with urllib.request.urlopen(r, json.dumps({'email': 'admin@admin.com', 'password': 'admin'}).encode()) as f:
        return json.load(f)['access_token']

# The provider behind the sandbox portfolio is an implementation detail the
# marketing demo shouldn't advertise, and it names a third party on every
# account row. Renamed to plain financial labels on the way in, so recapturing
# can't quietly put it back.
RENAMES = {
    'Plaid Checking': 'Everyday Checking',
    'Plaid Saving': 'Savings',
    'Plaid Money Market': 'Money Market',
    'Plaid Cash Management': 'Cash Management',
    'Plaid CD': 'Certificate of Deposit',
    'Plaid Business Credit Card': 'Business Credit Card',
    'Plaid Credit Card': 'Credit Card',
    'Plaid Student Loan': 'Student Loan',
    'Plaid Mortgage': 'Mortgage',
    'Plaid 401k': '401(k)',
    'Plaid IRA': 'IRA',
    'Plaid HSA': 'HSA',
    'plaid': 'open banking',
    'Plaid': 'Open banking',
}


def scrub(node):
    """Rewrite provider-branded display strings anywhere in a response."""
    if isinstance(node, dict):
        return {k: scrub(v) for k, v in node.items()}
    if isinstance(node, list):
        return [scrub(v) for v in node]
    if isinstance(node, str):
        return RENAMES.get(node, node)
    return node


def key(payload: bytes) -> str:
    """Name each file after its content, so responses that don't vary by
    currency — the account list, the currency list, provisioning state — are
    stored once and shared by every route that returns them."""
    return hashlib.sha1(payload).hexdigest()[:16]

shutil.rmtree(OUT, ignore_errors=True); os.makedirs(OUT)
token = login()
manifest, failures = {}, []
for cur in CURRENCIES:
    code, _ = req('/auth/currency', token, 'POST', {'display_currency': cur})
    if code != 200:
        print(f'!! could not switch to {cur}: {code}'); sys.exit(1)
    for p in PATHS:
        code, body = req(p, token)
        if code == 200:
            payload = json.dumps(scrub(json.loads(body)), separators=(',', ':')).encode()
            k = key(payload)
            path_out = f'{OUT}/{k}.json'
            if not os.path.exists(path_out):
                with open(path_out, 'wb') as f:
                    f.write(payload)
            manifest[f'{cur}|{p}'] = k
        else:
            failures.append((cur, p, code))
    print(f'{cur}: {sum(1 for m in manifest if m.startswith(cur+"|"))} ok')
req('/auth/currency', token, 'POST', {'display_currency': 'EUR'})
with open(f'{OUT}/manifest.json', 'w') as f:
    json.dump({'currencies': CURRENCIES, 'routes': manifest}, f, separators=(',', ':'))
print('failures:', failures)
size = sum(os.path.getsize(f'{OUT}/{f}') for f in os.listdir(OUT))
print(f'{len(manifest)} fixtures, {size/1024/1024:.1f} MB raw')
