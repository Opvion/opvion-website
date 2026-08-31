// ── Nav scroll effect
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });
}

// ── Mobile menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

// ── Scroll reveal (fires once when element enters viewport on its page)
const revealEls = document.querySelectorAll(
  'section h2, .problem-card, .feature-item, ' +
  '.pricing-card, .roadmap-step, .hero-badge, ' +
  '.section-sub, .strength-card, .contact-left, .contact-form, ' +
  '.whyus-list, .whyus-panel'
);
revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const siblings = [...entry.target.parentElement.querySelectorAll('.reveal')];
      const idx = siblings.indexOf(entry.target);
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, idx * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
revealEls.forEach(el => observer.observe(el));

// Fallback: reveal any reveal-elements already on-screen at load
// (on subpages the section is immediately visible, so the observer's
// threshold + animation timing can leave them invisible)
window.addEventListener('load', () => {
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('visible');
    }
  });
});

// ── Testimonial ticker (seamless infinite marquee)
(() => {
  const wrap = document.querySelector('.reactions-ticker-wrap');
  const track = document.getElementById('reactionsTicker');
  const baseSet = track && track.querySelector('.reactions-set');
  if (!wrap || !track || !baseSet) return;

  const PIXELS_PER_SECOND = 35;

  function layout() {
    track.querySelectorAll('.reactions-set').forEach((set, i) => {
      if (i > 0) set.remove();
    });

    const setWidth = baseSet.getBoundingClientRect().width;
    if (!setWidth) return;

    const minWidth = wrap.getBoundingClientRect().width * 2;
    let currentWidth = setWidth;
    while (currentWidth < minWidth) {
      track.appendChild(baseSet.cloneNode(true));
      currentWidth += setWidth;
    }

    track.style.setProperty('--marquee-distance', `${setWidth}px`);
    track.style.setProperty('--marquee-duration', `${setWidth / PIXELS_PER_SECOND}s`);
  }

  layout();

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(layout, 200);
  });
})();

// ── Hero orbit coins: build the stacked-ring edge that gives each
// spinning circle real coin thickness instead of vanishing to a line
(() => {
  const dots = document.querySelectorAll('.orbit-dot');
  if (!dots.length) return;

  const RING_COUNT = 14;

  function buildEdge(dot) {
    const edge = dot.querySelector('.coin-edge');
    const size = dot.offsetWidth;
    if (!edge || !size) return;

    const t = parseFloat(getComputedStyle(dot).getPropertyValue('--coin-t')) || size * 0.13;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < RING_COUNT; i++) {
      const z = -t / 2 + (t * i) / (RING_COUNT - 1);
      const ring = document.createElement('span');
      ring.className = 'coin-edge-ring' + (i % 2 ? ' coin-edge-ring--dark' : '');
      ring.style.transform = `translateZ(${z.toFixed(2)}px)`;
      frag.appendChild(ring);
    }
    edge.replaceChildren(frag);
  }

  function buildAll() { dots.forEach(buildEdge); }
  buildAll();

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(buildAll, 200);
  });
})();

// ── Why Opvion tabbed list (why-us.html)
(() => {
  const list = document.querySelector('.whyus-list');
  if (!list) return;

  const items = list.querySelectorAll('.whyus-item');
  const contentItems = document.querySelectorAll('.whyus-content-item');

  list.addEventListener('click', (e) => {
    const btn = e.target.closest('.whyus-item');
    if (!btn) return;
    const index = btn.dataset.index;

    items.forEach(item => {
      const active = item === btn;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-selected', active ? 'true' : 'false');
    });
    contentItems.forEach(content => {
      content.classList.toggle('is-active', content.dataset.index === index);
    });
  });
})();

// ── Disposable email blocklist
const BLOCKED_DOMAINS = new Set([
  'mailinator.com', 'guerrillamail.com', 'guerrillamail.info', 'guerrillamail.net',
  'guerrillamail.org', 'guerrillamail.de', 'guerrillamail.biz', 'sharklasers.com',
  'guerrillamailblock.com', 'grr.la', 'spam4.me', 'trashmail.com', 'trashmail.at',
  'trashmail.io', 'trashmail.me', 'trashmail.net', 'trashmail.xyz', 'throwaway.email',
  'tempmail.com', 'tempmail.net', 'tempmail.org', 'temp-mail.org', 'temp-mail.io',
  'dispostable.com', 'yopmail.com', 'yopmail.fr', 'cool.fr.nf', 'jetable.fr.nf',
  'spamgourmet.com', 'spamgourmet.net', 'spamgourmet.org', 'spamex.com',
  'mailnesia.com', 'mailnull.com', 'maildrop.cc', 'discard.email',
  'fakeinbox.com', 'fakeinbox.net', 'filzmail.com', 'getnada.com',
  'crazymailing.com', 'throwam.com', 'mailscrap.com', 'superrito.com',
  'spamfree24.org', 'okumail.com', 'drdrb.com', '10minutemail.com', '10minutemail.net',
  'guerillamail.com', 'mailtemp.net', 'tempr.email', 'mytemp.email', 'tempinbox.com',
  'throwam.com', 'trashmail.io', 'mailnull.com', 'getairmail.com', 'spamhereplease.com',
  'mailsac.com', 'fakemailz.com', 'tempmailaddress.com', 'mailnew.com', 'tempail.com'
]);

// ── Waitlist form (contact page only)
const form = document.getElementById('waitlistForm');
if (form) {
  const btnText = document.getElementById('btnText');
  const formSuccess = document.getElementById('formSuccess');
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('emailError');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const emailVal = emailInput.value.trim();
    const domain = (emailVal.split('@')[1] || '').toLowerCase();
    if (BLOCKED_DOMAINS.has(domain)) {
      emailError.classList.remove('hidden');
      emailInput.focus();
      return;
    }
    emailError.classList.add('hidden');

    const originalBtnText = btnText.textContent;
    btnText.textContent = 'Sending...';
    const submitBtn = form.querySelector('.btn-submit');
    submitBtn.disabled = true;

    try {
      const resp = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (resp.ok) {
        form.querySelectorAll('input:not([type=hidden]), select, textarea').forEach(el => el.value = '');
        submitBtn.style.display = 'none';
        formSuccess.classList.remove('hidden');
      } else {
        btnText.textContent = originalBtnText;
        submitBtn.disabled = false;
        alert('Something went wrong. Please try again or email us directly at prayag.sharma@esmt.berlin');
      }
    } catch {
      btnText.textContent = originalBtnText;
      submitBtn.disabled = false;
      alert('Network error. Please check your connection and try again.');
    }
  });

  emailInput.addEventListener('input', () => emailError.classList.add('hidden'));
}

// ── Modal system
function openModal(id) {
  const m = document.getElementById(id);
  if (!m) return;
  m.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModalEl(overlayEl) {
  overlayEl.classList.remove('active');
  document.body.style.overflow = '';
}

document.querySelectorAll('.modal-trigger').forEach(trigger => {
  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    openModal(trigger.dataset.modal);
  });
});

document.querySelectorAll('.modal-close').forEach(btn => {
  btn.addEventListener('click', () => closeModalEl(btn.closest('.modal-overlay')));
});

document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModalEl(overlay);
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.active').forEach(closeModalEl);
  }
});
