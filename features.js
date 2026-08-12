// ─── Features page interactions ─────────────────────────
// Scroll-triggered reveals for visuals + bullets, hover popups, and a counter.

(() => {
  const isMobile = () => window.matchMedia('(max-width: 900px)').matches;

  // ── Animate visuals when their block enters viewport
  const visualObs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fv-visible');
      }
    });
  }, { threshold: 0.25 });
  document.querySelectorAll('.feature-visual').forEach((el) => visualObs.observe(el));

  // ── Stagger-reveal each bullet as the sticky text comes into view
  const bulletObs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const items = entry.target.querySelectorAll('.feature-bullets li');
      items.forEach((li, i) => {
        setTimeout(() => li.classList.add('fb-visible'), i * 110);
      });
      bulletObs.unobserve(entry.target);
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('.feature-sticky').forEach((el) => bulletObs.observe(el));

  // ── Counter animation for the wealth ring
  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10) || 0;
      const dur = 1600;
      const start = performance.now();
      const fmt = (n) => '€' + Math.round(n).toLocaleString('en-US');
      const tick = (now) => {
        const t = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = fmt(target * eased);
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      counterObs.unobserve(el);
    });
  }, { threshold: 0.4 });
  document.querySelectorAll('[data-target]').forEach((el) => counterObs.observe(el));

  // ── Hover popup (desktop only)
  const popup = document.getElementById('featurePopup');
  if (popup) {
    let activeLi = null;

    const showPopup = (li, e) => {
      if (isMobile()) return;
      const text = li.dataset.popup;
      if (!text) return;
      popup.textContent = text;
      popup.hidden = false;
      requestAnimationFrame(() => {
        const pw = popup.offsetWidth;
        const ph = popup.offsetHeight;
        const pad = 14;
        let x = e.clientX + 18;
        let y = e.clientY + 18;
        if (x + pw + pad > window.innerWidth) x = e.clientX - pw - 18;
        if (y + ph + pad > window.innerHeight) y = e.clientY - ph - 18;
        popup.style.left = x + 'px';
        popup.style.top = y + 'px';
        popup.classList.add('fp-visible');
      });
    };
    const hidePopup = () => {
      popup.classList.remove('fp-visible');
      activeLi = null;
      setTimeout(() => { if (!activeLi) popup.hidden = true; }, 160);
    };

    document.querySelectorAll('.feature-bullets li[data-popup]').forEach((li) => {
      li.addEventListener('mouseenter', (e) => { activeLi = li; showPopup(li, e); });
      li.addEventListener('mousemove', (e) => { if (activeLi === li) showPopup(li, e); });
      li.addEventListener('mouseleave', hidePopup);
    });

    window.addEventListener('scroll', () => { if (activeLi) hidePopup(); }, { passive: true });
  }

  // ── Carousel dot sync (scroll-linked active dot) ──────────────
  const carouselWrap = document.querySelector('.carousel-wrap');
  const carouselTrack = document.querySelector('.carousel-track');
  const dots = document.querySelectorAll('.carousel-dot');
  if (carouselWrap && carouselTrack && dots.length) {
    const cards = Array.from(carouselTrack.children);
    const setActive = () => {
      const wrapMid = carouselWrap.scrollLeft + carouselWrap.clientWidth / 2;
      let closest = 0;
      let closestDist = Infinity;
      cards.forEach((card, i) => {
        const mid = card.offsetLeft - carouselTrack.offsetLeft + card.offsetWidth / 2;
        const dist = Math.abs(mid - wrapMid);
        if (dist < closestDist) { closestDist = dist; closest = i; }
      });
      dots.forEach((d, i) => d.classList.toggle('is-active', i === closest));
    };
    carouselWrap.addEventListener('scroll', () => requestAnimationFrame(setActive), { passive: true });
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        const card = cards[i];
        if (card) carouselWrap.scrollTo({ left: card.offsetLeft - carouselTrack.offsetLeft, behavior: 'smooth' });
      });
    });
    setActive();
  }
})();
