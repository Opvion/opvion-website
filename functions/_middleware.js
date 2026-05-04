// Cloudflare Pages middleware — HTTP Basic Auth gate for the entire site.
// Credentials are read from encrypted environment variables configured in
// Cloudflare Pages → Settings → Environment variables:
//   BASIC_AUTH_USER
//   BASIC_AUTH_PASS
// If either is missing the site is left open (so a misconfigured deploy
// doesn't lock you out).

const REALM = 'Opvion preview';

function unauthorized() {
  return new Response('Authentication required.', {
    status: 401,
    headers: {
      'WWW-Authenticate': `Basic realm="${REALM}", charset="UTF-8"`,
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

// Constant-time string comparison to avoid timing attacks.
function safeEqual(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

export const onRequest = async ({ request, env, next }) => {
  const expectedUser = env.BASIC_AUTH_USER;
  const expectedPass = env.BASIC_AUTH_PASS;

  // Fail open if env vars aren't set — prevents accidentally locking
  // yourself out of the site if the secrets get cleared.
  if (!expectedUser || !expectedPass) return next();

  const header = request.headers.get('Authorization') || '';
  if (!header.startsWith('Basic ')) return unauthorized();

  let decoded;
  try {
    decoded = atob(header.slice(6));
  } catch {
    return unauthorized();
  }

  const idx = decoded.indexOf(':');
  if (idx < 0) return unauthorized();
  const user = decoded.slice(0, idx);
  const pass = decoded.slice(idx + 1);

  if (safeEqual(user, expectedUser) && safeEqual(pass, expectedPass)) {
    return next();
  }
  return unauthorized();
};
