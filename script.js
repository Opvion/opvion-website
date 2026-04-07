// ── Nav scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ── Mobile menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// ── Scroll reveal
const revealEls = document.querySelectorAll(
  'section h2, .problem-card, .feature-item, .market-card, .region-card, ' +
  '.pricing-card, .team-card, .roadmap-step, .market-stats, .hero-badge, ' +
  '.section-sub, .comparison-table, .contact-left, .contact-form'
);

revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger siblings
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

// ── Waitlist form
const form = document.getElementById('waitlistForm');
const btnText = document.getElementById('btnText');
const formSuccess = document.getElementById('formSuccess');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  btnText.textContent = 'Joining...';
  form.querySelector('.btn-submit').disabled = true;

  // Simulate submission (replace with real endpoint / Formspree / Netlify Forms)
  setTimeout(() => {
    form.querySelectorAll('input, select, textarea').forEach(el => el.value = '');
    form.querySelector('.btn-submit').style.display = 'none';
    formSuccess.classList.remove('hidden');
  }, 1000);
});

// ── Smooth active nav highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.id;
    }
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--text)' : '';
  });
});
