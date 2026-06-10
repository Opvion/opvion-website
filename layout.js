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

  const navHTML = `
    <nav id="navbar">
      <div class="nav-inner">
        <a href="index.html" class="logo">
          <img src="opvion-logo.svg" alt="Opvion Logo" class="logo-icon" width="48" height="48">
          <span class="wordmark">Opvion</span>
        </a>
        <ul class="nav-links">
          ${navLink('why-us.html', 'Why Us', 'why-us')}
          ${navLink('pricing.html', 'Pricing', 'pricing')}
          ${navLink('features.html', 'Features', 'features')}
          ${navLink('security.html', 'Security', 'security')}
          <li><a href="index.html#contact" class="btn-nav">Get Early Access</a></li>
        </ul>
        <button class="hamburger" id="hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
      <div class="mobile-menu" id="mobileMenu">
        ${mobileLink('why-us.html', 'Why Us', 'why-us')}
        ${mobileLink('pricing.html', 'Pricing', 'pricing')}
        ${mobileLink('features.html', 'Features', 'features')}
        ${mobileLink('security.html', 'Security', 'security')}
        <a href="index.html#contact" class="btn-mobile">Get Early Access</a>
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
        <span>Built in Europe 🇪🇺 · Data stays in the EU 🔒</span>
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
})();
