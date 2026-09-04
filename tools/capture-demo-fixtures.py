import hashlib, json, os, shutil, subprocess, sys, urllib.request, urllib.error

API = 'http://127.0.0.1:8000'
CURRENCIES = ['EUR', 'USD', 'GBP']
OUT = 'demo-fixtures'

RANGES = ['1M', '3M', '6M', '1Y', '2Y', '5Y', 'ALL']
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
    PATHS += [f'/analytics/net-worth-history?range={r}',
              f'/portfolio/benchmark?range={r}',
              f'/portfolio/benchmark?index=SPY&range={r}']
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


def key(cur, path):
    return hashlib.sha1(f'{cur}|{path}'.encode()).hexdigest()[:16]

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
            k = key(cur, p)
            with open(f'{OUT}/{k}.json', 'w') as f:
                json.dump(scrub(json.loads(body)), f, separators=(',', ':'))
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
