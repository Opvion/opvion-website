// Shared layout: injects nav, footer, and modals into every page.
// Each page sets <body data-page="hero|problem|solution|competition|pricing|contact">
// and has <div id="nav-mount"></div>, <div id="footer-mount"></div>, <div id="modals-mount"></div>.

(function () {
  const page = document.body.dataset.page || '';

  const navLink = (href, label, key, extraClass = '') => {
    const active = key === page ? ' is-active' : '';
    return `<li><a href="${href}" class="${extraClass}${active}">${label}</a></li>`;
  };

  const mobileLink = (href, label, key, extraClass = '') => {
    const active = key === page ? ' is-active' : '';
    return `<a href="${href}" class="${extraClass}${active}">${label}</a>`;
  };

  const personalActive = (page === 'pricing' || page === 'features' || page === 'why-us') ? ' is-active' : '';
  const businessActive = (page === 'business' || page === 'features-business' || page === 'pricing-business') ? ' is-active' : '';

  const businessPages = new Set(['business', 'features-business', 'pricing-business']);
  const ctaHref = businessPages.has(page) ? 'business.html#contact' : 'index.html#contact';
  const ctaLabel = businessPages.has(page) ? 'Request a Demo' : 'Get Early Access';

  const navHTML = `
    <nav id="navbar">
      <div class="nav-inner">
        <a href="index.html" class="logo">
          <img src="opvion-logo.svg" alt="Opvion Logo" class="logo-icon" width="48" height="48">
          <span class="wordmark">Opvion</span>
        </a>
        <ul class="nav-links">
          <li class="nav-dropdown-wrap">
            <button class="nav-dropdown-trigger${personalActive}" aria-expanded="false" aria-haspopup="true">
              Personal
              <svg class="nav-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
            <div class="nav-dropdown" role="menu">
              <a href="why-us.html" class="nav-dropdown-item${page === 'why-us' ? ' is-active' : ''}" role="menuitem">
                <span>
                  <strong>Why Us</strong>
                  <em>What makes Opvion different</em>
                </span>
              </a>
              <a href="features.html" class="nav-dropdown-item${page === 'features' ? ' is-active' : ''}" role="menuitem">
                <span>
                  <strong>Features</strong>
                  <em>Everything Opvion can do</em>
                </span>
              </a>
              <a href="pricing.html" class="nav-dropdown-item${page === 'pricing' ? ' is-active' : ''}" role="menuitem">
                <span>
                  <strong>Pricing</strong>
                  <em>Plans &amp; early access perks</em>
                </span>
              </a>
            </div>
          </li>
          <li class="nav-dropdown-wrap">
            <button class="nav-dropdown-trigger${businessActive}" aria-expanded="false" aria-haspopup="true">
              Business
              <svg class="nav-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
            <div class="nav-dropdown" role="menu">
              <a href="business.html" class="nav-dropdown-item${page === 'business' ? ' is-active' : ''}" role="menuitem">
                <span>
                  <strong>Why Us</strong>
                  <em>Why firms choose Opvion</em>
                </span>
              </a>
              <a href="features-business.html" class="nav-dropdown-item${page === 'features-business' ? ' is-active' : ''}" role="menuitem">
                <span>
                  <strong>Features</strong>
                  <em>Institutional analytics in full detail</em>
                </span>
              </a>
              <a href="pricing-business.html" class="nav-dropdown-item${page === 'pricing-business' ? ' is-active' : ''}" role="menuitem">
                <span>
                  <strong>Pricing</strong>
                  <em>Request a demo &amp; get a quote</em>
                </span>
              </a>
            </div>
          </li>
          ${navLink('security.html', 'Security', 'security')}
          <li><a href="${ctaHref}" class="btn-nav">${ctaLabel}</a></li>
        </ul>
        <button class="hamburger" id="hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
      <div class="mobile-menu" id="mobileMenu">
        <div class="mobile-group">
          <span class="mobile-group-label">Personal</span>
          ${mobileLink('why-us.html', 'Why Us', 'why-us', 'mobile-sub ')}
          ${mobileLink('features.html', 'Features', 'features', 'mobile-sub ')}
          ${mobileLink('pricing.html', 'Pricing', 'pricing', 'mobile-sub ')}
        </div>
        <div class="mobile-group">
          <span class="mobile-group-label">Business</span>
          <a href="business.html" class="mobile-sub ${page === 'business' ? 'is-active' : ''}">Why Us</a>
          <a href="features-business.html" class="mobile-sub ${page === 'features-business' ? 'is-active' : ''}">Features</a>
          <a href="pricing-business.html" class="mobile-sub ${page === 'pricing-business' ? 'is-active' : ''}">Pricing</a>
        </div>
        ${mobileLink('security.html', 'Security', 'security')}
        <a href="${ctaHref}" class="btn-mobile">${ctaLabel}</a>
      </div>
    </nav>
  `;

  const footerHTML = `
    <footer>
      <div class="container footer-inner">
        <div class="footer-brand">
          <span class="logo">
            <img src="opvion-logo.svg" alt="Opvion Logo" class="logo-icon" width="40" height="40">
            <span class="wordmark">Opvion</span>
          </span>
          <p>One place for your complete financial picture.</p>
        </div>
        <div class="footer-links">
          <div class="footer-col">
            <h5>Product</h5>
            <a href="index.html#solution">How it works</a>
            <a href="features.html">Features</a>
            <a href="pricing.html">Pricing</a>
            <a href="business.html">Opvion Business</a>
          </div>
          <div class="footer-col">
            <h5>Company</h5>
            <a href="index.html#problem">Our Story</a>
            <a href="index.html#contact">Contact</a>
          </div>
          <div class="footer-col">
            <h5>Legal</h5>
            <a href="privacy.html">Privacy Policy</a>
            <a href="terms.html">Terms of Service</a>
            <a href="gdpr.html">GDPR</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 Opvion. All rights reserved.</span>
        <span>Built in Europe · Data stays in the EU</span>
      </div>
    </footer>
  `;

  const modalsHTML = `
    <!-- MODAL: Features Comparison -->
    <div class="modal-overlay" id="modalFeatures" role="dialog" aria-modal="true" aria-labelledby="modalFeaturesTitle">
      <div class="modal-card modal-card--wide">
        <button class="modal-close" aria-label="Close">&times;</button>
        <h2 id="modalFeaturesTitle">Compare Plans</h2>
        <div class="modal-body modal-body--features">
          <div class="features-grid">
            <div class="features-plan-block">
              <div class="features-plan-header">
                <div class="features-plan-name">Free</div>
                <div class="features-plan-price">€0<span>/mo</span></div>
                <div class="features-plan-tag">Great for getting started</div>
              </div>
              <div class="features-list">
                <div class="feature-row"><div class="fr-icon">📊</div><div class="fr-body"><h5>Spending Tracker</h5><p>Manually log every transaction and get a clear view of where your money goes each month.</p></div></div>
                <div class="feature-row"><div class="fr-icon">🥧</div><div class="fr-body"><h5>Spending Analytics</h5><p>Category breakdowns, monthly trends, and income vs expense summaries — all in one dashboard.</p></div></div>
                <div class="feature-row"><div class="fr-icon">✏️</div><div class="fr-body"><h5>Manual Transaction Entry</h5><p>Add cash payments, transfers, and any transaction your bank won't report — with custom categories.</p></div></div>
                <div class="feature-row"><div class="fr-icon">💱</div><div class="fr-body"><h5>Multi-Currency Support</h5><p>View your finances in any of 19+ European currencies with accurate symbol and decimal formatting.</p></div></div>
              </div>
            </div>
            <div class="features-plan-block">
              <div class="features-plan-header basic-header">
                <div class="features-plan-name">Basic</div>
                <div class="features-plan-price">€5.99<span>/mo</span></div>
                <div class="features-plan-tag">Everything in Free, plus:</div>
              </div>
              <div class="features-list">
                <div class="feature-row"><div class="fr-icon">🏦</div><div class="fr-body"><h5>Bank Account Connection</h5><p>Link your accounts via our open banking partners — transactions sync automatically so you never enter them manually again.</p></div></div>
                <div class="feature-row"><div class="fr-icon">🔄</div><div class="fr-body"><h5>Auto Transaction Sync</h5><p>Real-time or on-demand sync from all your connected banks. Transactions are categorised automatically on import.</p></div></div>
                <div class="feature-row"><div class="fr-icon">📈</div><div class="fr-body"><h5>Net Worth Tracking</h5><p>Assets vs liabilities across all accounts in one number, with historical tracking so you can see your wealth grow over time.</p></div></div>
                <div class="feature-row"><div class="fr-icon">🏛️</div><div class="fr-body"><h5>300+ European Banks Supported</h5><p>N26, Revolut, Wise, Sparkasse, Deutsche Bank, DKB, BNP Paribas, Santander, ING, Monzo, Barclays and many more.</p></div></div>
              </div>
            </div>
            <div class="features-plan-block pro-block">
              <div class="features-plan-header pro-header">
                <div class="features-plan-badge">Most Popular</div>
                <div class="features-plan-name">Pro</div>
                <div class="features-plan-price">€14.99<span>/mo</span></div>
                <div class="features-plan-tag">Everything in Basic, plus:</div>
              </div>
              <div class="features-list">
                <div class="feature-row"><div class="fr-icon">📉</div><div class="fr-body"><h5>Investment Portfolio Tracker</h5><p>Track stocks, ETFs, crypto, bonds, private equity, and alternative assets — all in one portfolio view with live prices.</p></div></div>
                <div class="feature-row"><div class="fr-icon">🔴</div><div class="fr-body"><h5>Live Market Prices</h5><p>Real-time stock and ETF prices via Yahoo Finance. Live crypto prices via CoinGecko. Positions update every 30 seconds.</p></div></div>
                <div class="feature-row"><div class="fr-icon">📆</div><div class="fr-body"><h5>Historical FX Rates</h5><p>The only tracker that applies daily mid-market FX rates retroactively — so your portfolio's performance is accurate at any point in time, not just today.</p></div></div>
                <div class="feature-row"><div class="fr-icon">🤖</div><div class="fr-body"><h5>AI Spending Analytics <span class="badge-soon">Coming Soon</span></h5><p>Personalised insights, anomaly detection, budget forecasting, and natural language queries — all processed in the European Union, never shared outside the EU.</p></div></div>
                <div class="feature-row"><div class="fr-icon">💳</div><div class="fr-body"><h5>Credit Tracker <span class="badge-soon">Coming Soon</span></h5><p>Track credit card balances, utilisation, and repayments alongside your full financial picture.</p></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  `;

  const navMount = document.getElementById('nav-mount');
  const footerMount = document.getElementById('footer-mount');
  const modalsMount = document.getElementById('modals-mount');
  if (navMount) navMount.outerHTML = navHTML;
  if (footerMount) footerMount.outerHTML = footerHTML;
  if (modalsMount) modalsMount.outerHTML = modalsHTML;

  // ── Dropdown toggle (click + keyboard) ──────────────
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.nav-dropdown-trigger');
    const wrap = e.target.closest('.nav-dropdown-wrap');
    // Close all open dropdowns when clicking outside
    document.querySelectorAll('.nav-dropdown-wrap.open').forEach(el => {
      if (el !== wrap) {
        el.classList.remove('open');
        const btn = el.querySelector('.nav-dropdown-trigger');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      }
    });
    if (trigger) {
      const parent = trigger.closest('.nav-dropdown-wrap');
      const isOpen = parent.classList.toggle('open');
      trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      e.stopPropagation();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.nav-dropdown-wrap.open').forEach(el => {
        el.classList.remove('open');
        const btn = el.querySelector('.nav-dropdown-trigger');
        if (btn) { btn.setAttribute('aria-expanded', 'false'); btn.focus(); }
      });
    }
  });
})();
