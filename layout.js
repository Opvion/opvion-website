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
          ${navLink('problem.html', 'Problem', 'problem')}
          ${navLink('solution.html', 'Solution', 'solution')}
          ${navLink('why-us.html', 'Why Us', 'why-us')}
          ${navLink('pricing.html', 'Pricing', 'pricing')}
          ${navLink('features.html', 'Features', 'features')}
          <li><a href="contact.html" class="btn-nav${page === 'contact' ? ' is-active' : ''}">Get Early Access</a></li>
        </ul>
        <button class="hamburger" id="hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
      <div class="mobile-menu" id="mobileMenu">
        ${mobileLink('problem.html', 'Problem', 'problem')}
        ${mobileLink('solution.html', 'Solution', 'solution')}
        ${mobileLink('why-us.html', 'Why Us', 'why-us')}
        ${mobileLink('pricing.html', 'Pricing', 'pricing')}
        ${mobileLink('features.html', 'Features', 'features')}
        ${mobileLink('contact.html', 'Get Early Access', 'contact', 'btn-mobile')}
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
            <a href="solution.html">How it works</a>
            <a href="features.html">Features</a>
            <a href="pricing.html">Pricing</a>
          </div>
          <div class="footer-col">
            <h5>Company</h5>
            <a href="problem.html">Our Story</a>
            <a href="contact.html">Contact</a>
          </div>
          <div class="footer-col">
            <h5>Legal</h5>
            <a href="#" class="modal-trigger" data-modal="modalPrivacy">Privacy Policy</a>
            <a href="#" class="modal-trigger" data-modal="modalTerms">Terms of Service</a>
            <a href="#" class="modal-trigger" data-modal="modalGDPR">GDPR</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 Opvion. All rights reserved.</span>
        <span>Built in Europe 🇪🇺 · Data stays in Germany 🔒</span>
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
                <div class="feature-row"><div class="fr-icon">🏦</div><div class="fr-body"><h5>Bank Account Connection</h5><p>Link your accounts via Plaid (US/UK) or TrueLayer (EU) — transactions sync automatically so you never enter them manually again.</p></div></div>
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
                <div class="feature-row"><div class="fr-icon">🤖</div><div class="fr-body"><h5>AI Spending Analytics <span class="badge-soon">Coming Soon</span></h5><p>Personalised insights, anomaly detection, budget forecasting, and natural language queries — all processed in Germany, never shared outside the EU.</p></div></div>
                <div class="feature-row"><div class="fr-icon">💳</div><div class="fr-body"><h5>Credit Tracker <span class="badge-soon">Coming Soon</span></h5><p>Track credit card balances, utilisation, and repayments alongside your full financial picture.</p></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- MODAL: Privacy Policy -->
    <div class="modal-overlay" id="modalPrivacy" role="dialog" aria-modal="true" aria-labelledby="modalPrivacyTitle">
      <div class="modal-card">
        <button class="modal-close" aria-label="Close">&times;</button>
        <h2 id="modalPrivacyTitle">Privacy Policy</h2>
        <div class="modal-body">
          <p><em>Last updated: April 2026</em></p>
          <h3>1. Data Controller</h3>
          <p>Opvion is the data controller for all personal data collected through this website and our application. For any privacy-related enquiries, contact us at <strong>prayag.sharma@esmt.berlin</strong>.</p>
          <h3>2. Data We Collect</h3>
          <ul>
            <li><strong>Account data:</strong> name and email address you provide when joining the waitlist or creating an account.</li>
            <li><strong>Financial data:</strong> bank account information, transactions, and investment holdings you connect via open banking providers (Plaid and TrueLayer).</li>
            <li><strong>Usage data:</strong> anonymised analytics about how you use the application (pages visited, features used, session duration).</li>
          </ul>
          <h3>3. Legal Basis for Processing</h3>
          <ul>
            <li><strong>Contract performance (Art. 6(1)(b) GDPR):</strong> processing your account and financial data to provide the Opvion service.</li>
            <li><strong>Legitimate interest (Art. 6(1)(f) GDPR):</strong> anonymised usage analytics to improve the product.</li>
            <li><strong>Consent (Art. 6(1)(a) GDPR):</strong> AI-powered spending analytics — this feature requires your explicit opt-in and can be withdrawn at any time.</li>
          </ul>
          <h3>4. Data Storage & Transfers</h3>
          <p>All data is stored on servers located in Germany. We do not transfer personal data outside the European Economic Area. Your financial data is encrypted at rest and in transit.</p>
          <h3>5. Data Retention</h3>
          <ul>
            <li>Account and financial data: retained for the duration of your subscription plus 2 years after account closure.</li>
            <li>Usage analytics: retained for 90 days in anonymised form.</li>
            <li>Waitlist data: retained until 6 months after the public launch, then deleted unless you create an account.</li>
          </ul>
          <h3>6. Your Rights Under GDPR</h3>
          <p>You have the right to: access your data, correct inaccurate data, request erasure, request restriction of processing, receive a copy of your data (portability), object to processing, and withdraw consent at any time without affecting prior lawful processing.</p>
          <p>To exercise any of these rights, email <strong>prayag.sharma@esmt.berlin</strong>. We will respond within 30 days.</p>
          <h3>7. Complaints</h3>
          <p>You have the right to lodge a complaint with the German supervisory authority: <strong>Bundesbeauftragter für den Datenschutz und die Informationsfreiheit (BfDI)</strong>, Graurheindorfer Str. 153, 53117 Bonn.</p>
          <h3>8. Cookies</h3>
          <p>We use only strictly necessary session cookies required for the application to function. We do not use advertising or third-party tracking cookies.</p>
          <h3>9. Changes to This Policy</h3>
          <p>We may update this policy as the product evolves. We will notify registered users of any material changes by email at least 14 days before they take effect.</p>
        </div>
      </div>
    </div>

    <!-- MODAL: Terms of Service -->
    <div class="modal-overlay" id="modalTerms" role="dialog" aria-modal="true" aria-labelledby="modalTermsTitle">
      <div class="modal-card">
        <button class="modal-close" aria-label="Close">&times;</button>
        <h2 id="modalTermsTitle">Terms of Service</h2>
        <div class="modal-body">
          <p><em>Last updated: April 2026</em></p>
          <h3>1. Acceptance of Terms</h3>
          <p>By accessing or using Opvion, you agree to be bound by these Terms of Service. If you do not agree, please do not use the service.</p>
          <h3>2. Description of Service</h3>
          <p>Opvion is a personal financial aggregation platform that consolidates your bank accounts, investment portfolios, and spending data in one place. Opvion does <strong>not</strong> provide financial advice, investment recommendations, or regulated financial services. All information is provided for informational purposes only.</p>
          <h3>3. User Obligations</h3>
          <ul>
            <li>You must be at least 18 years old to use Opvion.</li>
            <li>You agree to provide accurate and truthful information.</li>
            <li>You are responsible for maintaining the security of your account credentials.</li>
            <li>You may not use Opvion for any unlawful purpose or in violation of any applicable regulations.</li>
          </ul>
          <h3>4. Subscriptions & Billing</h3>
          <p>Paid plans are billed monthly or annually. You may cancel your subscription at any time; cancellation takes effect at the end of the current billing period. We reserve the right to change pricing with 30 days' notice.</p>
          <h3>5. Intellectual Property</h3>
          <p>All content, branding, and software comprising Opvion are the exclusive property of Opvion. You may not reproduce, distribute, or create derivative works without prior written consent.</p>
          <h3>6. Limitation of Liability</h3>
          <p>To the maximum extent permitted by applicable law, Opvion shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service, including any inaccuracies in financial data provided by third-party open banking providers.</p>
          <h3>7. Termination</h3>
          <p>We may suspend or terminate your access if you violate these terms. You may delete your account at any time, and your data will be removed in accordance with our Privacy Policy.</p>
          <h3>8. Governing Law</h3>
          <p>These Terms of Service are governed by the laws of the Federal Republic of Germany. Any disputes shall be subject to the exclusive jurisdiction of the courts of Germany.</p>
          <h3>9. Contact</h3>
          <p>For any questions about these terms, contact us at <strong>prayag.sharma@esmt.berlin</strong>.</p>
        </div>
      </div>
    </div>

    <!-- MODAL: GDPR & Data Rights -->
    <div class="modal-overlay" id="modalGDPR" role="dialog" aria-modal="true" aria-labelledby="modalGDPRTitle">
      <div class="modal-card">
        <button class="modal-close" aria-label="Close">&times;</button>
        <h2 id="modalGDPRTitle">GDPR &amp; Your Data Rights</h2>
        <div class="modal-body">
          <p>Under the General Data Protection Regulation (GDPR), you have a comprehensive set of rights regarding your personal data. Here is a plain-language summary of those rights and how to exercise them.</p>
          <h3>Right of Access (Art. 15)</h3>
          <p>You can request a copy of all personal data we hold about you, along with information about how it is processed.</p>
          <h3>Right to Rectification (Art. 16)</h3>
          <p>If any of your data is inaccurate or incomplete, you can ask us to correct it.</p>
          <h3>Right to Erasure — "Right to be Forgotten" (Art. 17)</h3>
          <p>You can request that we delete your personal data when it is no longer necessary for the purposes for which it was collected, or if you withdraw your consent.</p>
          <h3>Right to Restriction of Processing (Art. 18)</h3>
          <p>You can ask us to pause processing your data in certain circumstances — for example, while you contest its accuracy.</p>
          <h3>Right to Data Portability (Art. 20)</h3>
          <p>You can receive your personal data in a structured, machine-readable format (JSON or CSV) and transfer it to another service.</p>
          <h3>Right to Object (Art. 21)</h3>
          <p>You can object to the processing of your data where we rely on legitimate interest as our legal basis. We will stop processing unless we can demonstrate compelling legitimate grounds.</p>
          <h3>Right to Withdraw Consent (Art. 7)</h3>
          <p>Where processing is based on your consent (e.g., AI analytics), you can withdraw that consent at any time without affecting the lawfulness of prior processing.</p>
          <h3>How to Submit a Request</h3>
          <p>Email <strong>prayag.sharma@esmt.berlin</strong> with the subject line "GDPR Data Request" and specify which right you wish to exercise. We will acknowledge your request within 72 hours and respond fully within <strong>30 days</strong>.</p>
          <h3>Right to Lodge a Complaint</h3>
          <p>If you are unsatisfied with our response, you have the right to lodge a complaint with the German data protection authority:</p>
          <p><strong>Bundesbeauftragter für den Datenschutz und die Informationsfreiheit (BfDI)</strong><br />
          Graurheindorfer Str. 153, 53117 Bonn, Germany<br />
          poststelle@bfdi.bund.de</p>
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
