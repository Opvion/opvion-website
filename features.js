// ─── Features page interactions ─────────────────────────
// Card carousel: dot pagination synced to scroll position, prev/next buttons,
// and a slow endless auto-scroll (paused on hover / manual interaction).

(() => {
  const rail = document.getElementById('rail');
  if (!rail) return;

  const originalCards = Array.from(rail.children);
  const dotsWrap = document.getElementById('dots');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  originalCards.forEach((_, i) => {
    const b = document.createElement('button');
    b.className = i === 0 ? 'on' : '';
    b.setAttribute('aria-label', 'Card ' + (i + 1));
    b.addEventListener('click', () => {
      pause();
      originalCards[i].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
      resumeAfterIdle();
    });
    dotsWrap.appendChild(b);
  });
  const dots = Array.from(dotsWrap.children);

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
        const i = originalCards.indexOf(entry.target);
        if (i === -1) return;
        dots.forEach((d) => d.classList.remove('on'));
        dots[i].classList.add('on');
      }
    });
  }, { root: rail, threshold: [0.6] });
  originalCards.forEach((c) => io.observe(c));

  // ── Duplicate the set once so the auto-scroll can loop seamlessly.
  const clones = originalCards.map((c) => {
    const clone = c.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    clone.setAttribute('tabindex', '-1');
    rail.appendChild(clone);
    return clone;
  });

  let loopWidth = 0;
  const measureLoop = () => {
    loopWidth = clones[0].offsetLeft - originalCards[0].offsetLeft;
  };
  measureLoop();
  window.addEventListener('resize', measureLoop);

  // ── Slow endless auto-scroll
  // rail.scrollLeft rounds to whole pixels, so a sub-pixel increment must be
  // accumulated separately or it gets truncated back to the same integer every frame.
  let playing = !reduceMotion;
  let pos = 0;
  let resumeTimer = null;
  const SPEED = 0.2; // px per frame, ~12px/s

  const pause = () => { playing = false; if (resumeTimer) clearTimeout(resumeTimer); };
  const resumeAfterIdle = () => {
    if (reduceMotion) return;
    if (resumeTimer) clearTimeout(resumeTimer);
    resumeTimer = setTimeout(() => {
      pos = rail.scrollLeft;
      playing = true;
    }, 2200);
  };

  const tick = () => {
    if (playing && loopWidth > 0) {
      pos += SPEED;
      if (pos >= loopWidth) pos -= loopWidth;
      rail.scrollLeft = pos;
    }
    requestAnimationFrame(tick);
  };
  if (!reduceMotion) requestAnimationFrame(tick);

  rail.addEventListener('mouseenter', pause);
  rail.addEventListener('mouseleave', resumeAfterIdle);
  rail.addEventListener('pointerdown', pause);
  rail.addEventListener('pointerup', resumeAfterIdle);
  rail.addEventListener('touchstart', pause, { passive: true });
  rail.addEventListener('touchend', resumeAfterIdle);

  const step = (d) => {
    pause();
    rail.scrollBy({ left: d * (originalCards[0].getBoundingClientRect().width + 20), behavior: 'smooth' });
    resumeAfterIdle();
  };
  document.getElementById('prev').addEventListener('click', () => step(-1));
  document.getElementById('next').addEventListener('click', () => step(1));
})();
