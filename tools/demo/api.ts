/**
 * Demo build of the API client.
 *
 * Overlays frontend/src/services/api.ts when the interactive demo is built for
 * the marketing site (see tools/build-demo.sh). Same exported surface as the
 * real client — `api`, `getToken`, `setToken` — so no component knows the
 * difference; only the transport changes.
 *
 * Instead of talking to FastAPI, an axios adapter answers every GET from a
 * static fixture captured from a real backend sync. Fixtures live next to the
 * built app under `fixtures/`, one JSON file per (currency, route) pair, so
 * only what a page actually asks for gets downloaded.
 *
 * The demo is read-only: anything that would mutate server state is refused
 * with an explanatory error rather than silently pretending to succeed.
 */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import manifest from './demo-manifest.json'

const FIXTURES = `${import.meta.env.BASE_URL}fixtures/`
const CURRENCY_KEY = 'opvion.demo.currency'
const TOKEN_KEY = 'opvion.token'

const routes: Record<string, string> = manifest.routes
const currencies: string[] = manifest.currencies

/**
 * Shown wherever the demo can't do something. The app already surfaces
 * `detail` from a failed call in its own message UI, so putting the invitation
 * here covers every write path — sync, connect, remove, import, MFA, export —
 * without touching any of those components.
 */
const READ_ONLY =
  'The demo runs on a fixed sample portfolio, so it is read-only. Connecting, syncing and ' +
  'editing are part of the full app.'

export const api = axios.create({ baseURL: '/api' })

/** The demo is always signed in — there is no server to hold a session. */
export function getToken(): string | null {
  return 'demo'
}

export function setToken(token: string | null) {
  if (token) localStorage.setItem(TOKEN_KEY, token)
  else localStorage.removeItem(TOKEN_KEY)
}

function currentCurrency(): string {
  const stored = localStorage.getItem(CURRENCY_KEY)
  return stored && currencies.includes(stored) ? stored : currencies[0]
}

function respond(data: unknown, config: AxiosRequestConfig, status = 200): AxiosResponse {
  return { data, status, statusText: '', headers: {}, config: config as never, request: {} } as AxiosResponse
}

/**
 * Announce a refusal in the corner of the screen.
 *
 * Not every write handler in the app catches — `syncAll`, for one, has a
 * `finally` but no `catch`, so a rejected call there would leave the button
 * spinning down with nothing said. Showing it from here covers every write
 * path whether or not its component handles the error, and needs no React,
 * so it can live entirely in this overlay.
 */
export function announce(message: string) {
  const ID = 'demo-refusal'
  document.getElementById(ID)?.remove()
  const el = document.createElement('div')
  el.id = ID
  el.setAttribute('role', 'status')
  el.style.cssText = [
    'position:fixed', 'z-index:9999', 'right:16px', 'bottom:16px', 'max-width:340px',
    'padding:14px 16px', 'border-radius:14px', 'font:500 13px/1.55 Inter,system-ui,sans-serif',
    'color:#f7f9fc', 'background:#171c2b', 'border:1px solid rgba(127,150,255,.4)',
    'box-shadow:0 20px 45px -18px rgba(0,0,0,.8)',
  ].join(';')
  const text = document.createElement('span')
  text.textContent = message
  const link = document.createElement('a')
  link.href = '/#contact'
  link.textContent = 'Get early access'
  link.style.cssText = 'display:inline-block;margin-top:8px;color:#7f96ff;font-weight:700;text-decoration:none'
  el.append(text, document.createElement('br'), link)
  document.body.appendChild(el)
  setTimeout(() => el.remove(), 7000)
}

function refuse(config: AxiosRequestConfig, message: string): Promise<never> {
  announce(message)
  const err: Record<string, unknown> = new Error(message)
  err.response = respond({ detail: message }, config, 403)
  err.config = config
  err.isAxiosError = true
  return Promise.reject(err)
}

const fixtureCache = new Map<string, Promise<unknown>>()

function loadFixture(key: string): Promise<unknown> {
  let hit = fixtureCache.get(key)
  if (!hit) {
    hit = fetch(`${FIXTURES}${key}.json`).then((r) => {
      if (!r.ok) throw new Error(`missing fixture ${key}`)
      return r.json()
    })
    fixtureCache.set(key, hit)
  }
  return hit
}

/**
 * Resolve a request URL to a fixture key. Falls back to the same route without
 * an `on=` date, so the FX page's historical lookups answer with the captured
 * reference rates instead of failing on a date that was never captured.
 */
function resolve(url: string, currency: string): string | undefined {
  const exact = routes[`${currency}|${url}`]
  if (exact) return exact
  const undated = url.replace(/([?&])on=[^&]*&?/, '$1').replace(/[?&]$/, '')
  return routes[`${currency}|${undated}`]
}

api.defaults.adapter = async (config) => {
  const url = config.url || ''
  const method = (config.method || 'get').toLowerCase()
  const currency = currentCurrency()

  if (method === 'post') {
    // Signing back in after a sign-out: any credentials are accepted, because
    // there is nothing behind this to authenticate against.
    if (url === '/auth/login' || url === '/auth/register') {
      return respond({ access_token: 'demo', token_type: 'bearer', mfa_required: false }, config)
    }
    if (url === '/auth/currency') {
      const next = (config.data ? JSON.parse(config.data as string) : {}).display_currency
      if (!currencies.includes(next)) {
        return refuse(
          config,
          `${next} isn't one of the currencies captured for this demo.`,
        )
      }
      localStorage.setItem(CURRENCY_KEY, next)
      const me = (await loadFixture(resolve('/auth/me', next)!)) as Record<string, unknown>
      return respond({ ...me, display_currency: next }, config)
    }
    return refuse(config, READ_ONLY)
  }

  if (method !== 'get') {
    return refuse(config, READ_ONLY)
  }

  const key = resolve(url, currency)
  if (!key) {
    const err: Record<string, unknown> = new Error(`No demo fixture for ${url}`)
    err.response = respond({ detail: 'Not captured in the demo.' }, config, 404)
    err.config = config
    err.isAxiosError = true
    return Promise.reject(err)
  }

  const data = (await loadFixture(key)) as unknown
  // The captured /auth/me carries whatever currency was active at capture time.
  if (url === '/auth/me') {
    return respond({ ...(data as object), display_currency: currency }, config)
  }
  // Only the currencies actually captured can be offered.
  if (url === '/fx/currencies') {
    return respond(currencies, config)
  }
  return respond(data, config)
}
