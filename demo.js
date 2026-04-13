// ════════════════════════════════════════════════════════
//  MOCK DATA  (ported from spending-tracker/dev mockData.ts)
// ════════════════════════════════════════════════════════
const MOCK = {

  financialSummary: {
    totalAssets:       520000,
    totalLiabilities:  285500,
    netWorth:          234500,
  },

  accounts: [
    { id: '1', name: 'Main Account',   institution: 'Erste Bank',        type: 'checking',    balance:   4250.80 },
    { id: '2', name: 'Savings Account',institution: 'Raiffeisen',        type: 'savings',     balance:  18750.00 },
    { id: '3', name: 'Revolut',        institution: 'Revolut',           type: 'checking',    balance:   1280.45 },
    { id: '4', name: 'Daily Account',  institution: 'N26',               type: 'checking',    balance:    890.20 },
    { id: '5', name: 'Travel Rewards', institution: 'American Express',  type: 'credit_card', balance:  -2340.60 },
    { id: '6', name: 'Brokerage',      institution: 'Fidelity',          type: 'investment',  balance: 125000.00 },
  ],

  transactions: [
    { id:  1, name: 'Monthly Salary',           date: '2025-01-30', category: 'Income',        amount:  5500,   merchant: 'Employer GmbH',    isRecurring: true  },
    { id:  2, name: 'Apartment Rent',            date: '2025-01-28', category: 'Housing',       amount: -1200,   merchant: 'Wiener Wohnen',    isRecurring: true  },
    { id:  3, name: 'Billa Supermarkt',          date: '2025-01-27', category: 'Food',          amount:  -85.40, merchant: 'Billa',            isRecurring: false },
    { id:  4, name: 'Netflix',                   date: '2025-01-26', category: 'Entertainment', amount:  -15.99, merchant: 'Netflix',          isRecurring: true  },
    { id:  5, name: 'Vapiano Restaurant',         date: '2025-01-25', category: 'Food',          amount:  -42.50, merchant: 'Vapiano',          isRecurring: false },
    { id:  6, name: 'Wien Energie',              date: '2025-01-24', category: 'Utilities',     amount:  -78.30, merchant: 'Wien Energie',     isRecurring: true  },
    { id:  7, name: 'Freelance Project',         date: '2025-01-23', category: 'Income',        amount:  1200,   merchant: 'Client AG',        isRecurring: false },
    { id:  8, name: 'Uber',                      date: '2025-01-22', category: 'Transport',     amount:  -18.70, merchant: 'Uber',             isRecurring: false },
    { id:  9, name: 'dm Drogerie',               date: '2025-01-21', category: 'Healthcare',    amount:  -32.10, merchant: 'dm',               isRecurring: false },
    { id: 10, name: 'Amazon.de',                 date: '2025-01-20', category: 'Other',         amount:  -67.80, merchant: 'Amazon',           isRecurring: false },
    { id: 11, name: 'Coffee Rocks Café',         date: '2025-01-19', category: 'Food',          amount:   -4.50, merchant: 'Coffee Rocks',     isRecurring: false },
  ],

  spendingByCategory: [
    { name: 'Housing',       amount: 1200, color: '#3182CE' },
    { name: 'Food',          amount:  420, color: '#38B2AC' },
    { name: 'Other',         amount:  185, color: '#718096' },
    { name: 'Transport',     amount:  180, color: '#4C51BF' },
    { name: 'Entertainment', amount:   95, color: '#ED8936' },
    { name: 'Utilities',     amount:   78, color: '#D69E2E' },
    { name: 'Healthcare',    amount:   65, color: '#E53E3E' },
  ],

  portfolioAllocation: [
    { name: 'Stocks',      value: 75000, color: '#3182CE' },
    { name: 'Bonds',       value: 25000, color: '#4C51BF' },
    { name: 'Cash',        value: 12500, color: '#38B2AC' },
    { name: 'Real Estate', value: 12500, color: '#ED8936' },
  ],

  investmentPositions: [
    { ticker: 'BTC',  name: 'Bitcoin',              position: '0.28 BTC', value:  62200, pnl:  4200 },
    { ticker: 'EXXT', name: 'iShares MSCI World',   position: '150 units',value:  22000, pnl:  3100 },
    { ticker: 'CNDX', name: 'Nasdaq 100 ETF',       position: '80 units', value:  15500, pnl:  2800 },
    { ticker: 'EIMI', name: 'Emerging Markets ETF',  position: '200 units',value:   8000, pnl:  -400 },
    { ticker: 'MEUD', name: 'Euro Stoxx 600',        position: '100 units',value:   6500, pnl:   320 },
    { ticker: 'NEXO', name: 'Nexo Token',            position: '500 units',value:   2800, pnl:  -150 },
    { ticker: 'SOL',  name: 'Solana',               position: '10 units', value:   1700, pnl:   890 },
  ],

  netWorthHistory: {
    labels: ['Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan'],
    values: [195000,198500,202000,199500,205000,210000,215500,218000,222000,228500,231000,234500],
  },

};

// ════════════════════════════════════════════════════════
//  CURRENCY
// ════════════════════════════════════════════════════════
const RATES   = { EUR: 1, USD: 1.08, GBP: 0.85 };
const SYMBOLS = { EUR: '€', USD: '$', GBP: '£' };
let currency = 'EUR';

/** Format a EUR value in the active currency */
function fmt(eurAmount, opts = {}) {
  const val = eurAmount * RATES[currency];
  const sym = SYMBOLS[currency];
  const abs = Math.abs(val);
  const neg = val < 0;
  const prefix = neg ? '−' : (opts.sign && val > 0 ? '+' : '');
  if (opts.compact && abs >= 1000) {
    return prefix + sym + (abs / 1000).toFixed(1) + 'k';
  }
  const decimals = opts.noDecimals ? 0 : 2;
  return prefix + sym + abs.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

// ════════════════════════════════════════════════════════
//  CATEGORY META
// ════════════════════════════════════════════════════════
const CAT_EMOJI = {
  Income:        '💰',
  Housing:       '🏠',
  Food:          '🍽️',
  Transport:     '🚗',
  Entertainment: '🎬',
  Utilities:     '⚡',
  Healthcare:    '💊',
  Other:         '📦',
};

const CAT_COLORS = {
  Income:        { bg: '#d1fae5', text: '#065f46' },
  Housing:       { bg: '#dbeafe', text: '#1d4ed8' },
  Food:          { bg: '#fef3c7', text: '#92400e' },
  Transport:     { bg: '#e0e7ff', text: '#3730a3' },
  Entertainment: { bg: '#fff7ed', text: '#9a3412' },
  Utilities:     { bg: '#fef9c3', text: '#713f12' },
  Healthcare:    { bg: '#fee2e2', text: '#991b1b' },
  Other:         { bg: '#f1f5f9', text: '#475569' },
};

const ACCOUNT_EMOJI = {
  checking:    '💳',
  savings:     '🏦',
  investment:  '📈',
  credit_card: '💳',
};

// ════════════════════════════════════════════════════════
//  ANIMATED COUNTER
// ════════════════════════════════════════════════════════
function animateCounter(el, targetEur, duration = 950) {
  const target = targetEur * RATES[currency];
  const start  = performance.now();
  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased    = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const current  = target * eased;
    const sym      = SYMBOLS[currency];
    el.textContent = sym + Math.round(current).toLocaleString('en-US');
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = sym + Math.round(target).toLocaleString('en-US');
  }
  requestAnimationFrame(step);
}

// ════════════════════════════════════════════════════════
//  CHART INSTANCES
// ════════════════════════════════════════════════════════
const charts = {};

function initNetworthChart() {
  if (charts.networth) return;
  const ctx = document.getElementById('networthChart');
  if (!ctx) return;

  charts.networth = new Chart(ctx, {
    type: 'line',
    data: {
      labels: MOCK.netWorthHistory.labels,
      datasets: [{
        data: MOCK.netWorthHistory.values.map(v => v * RATES[currency]),
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59,130,246,0.08)',
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: '#3b82f6',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointHoverRadius: 6,
        borderWidth: 2.5,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => '  ' + fmt(ctx.raw / RATES[currency]),
          },
        },
      },
      scales: {
        y: {
          grid: { color: '#f1f5f9' },
          border: { display: false },
          ticks: {
            color: '#94a3b8',
            callback: v => SYMBOLS[currency] + (v / 1000).toFixed(0) + 'k',
          },
        },
        x: {
          grid: { display: false },
          border: { display: false },
          ticks: { color: '#94a3b8' },
        },
      },
    },
  });
}

function initSpendingChart() {
  if (charts.spending) return;
  const ctx = document.getElementById('spendingChart');
  if (!ctx) return;

  const sorted = [...MOCK.spendingByCategory].sort((a, b) => b.amount - a.amount);

  charts.spending = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: sorted.map(c => c.name),
      datasets: [{
        data: sorted.map(c => c.amount * RATES[currency]),
        backgroundColor: sorted.map(c => c.color),
        borderRadius: 6,
        borderSkipped: false,
      }],
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => '  ' + fmt(ctx.raw / RATES[currency]),
          },
        },
      },
      scales: {
        x: {
          grid: { color: '#f1f5f9' },
          border: { display: false },
          ticks: {
            color: '#94a3b8',
            callback: v => SYMBOLS[currency] + v.toLocaleString(),
          },
        },
        y: {
          grid: { display: false },
          border: { display: false },
          ticks: { color: '#475569', font: { weight: '600' } },
        },
      },
    },
  });
}

function initAllocationChart() {
  if (charts.allocation) return;
  const ctx = document.getElementById('allocationChart');
  if (!ctx) return;

  charts.allocation = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: MOCK.portfolioAllocation.map(a => a.name),
      datasets: [{
        data: MOCK.portfolioAllocation.map(a => a.value * RATES[currency]),
        backgroundColor: MOCK.portfolioAllocation.map(a => a.color),
        borderRadius: 8,
        borderSkipped: false,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => '  ' + fmt(ctx.raw / RATES[currency]),
          },
        },
      },
      scales: {
        y: {
          grid: { color: '#f1f5f9' },
          border: { display: false },
          ticks: {
            color: '#94a3b8',
            callback: v => SYMBOLS[currency] + (v / 1000).toFixed(0) + 'k',
          },
        },
        x: {
          grid: { display: false },
          border: { display: false },
          ticks: { color: '#475569', font: { weight: '600' } },
        },
      },
    },
  });
}

function updateChartCurrency() {
  if (charts.networth) {
    charts.networth.data.datasets[0].data = MOCK.netWorthHistory.values.map(v => v * RATES[currency]);
    charts.networth.options.scales.y.ticks.callback = v => SYMBOLS[currency] + (v / 1000).toFixed(0) + 'k';
    charts.networth.update('none');
  }
  if (charts.spending) {
    const sorted = [...MOCK.spendingByCategory].sort((a, b) => b.amount - a.amount);
    charts.spending.data.datasets[0].data = sorted.map(c => c.amount * RATES[currency]);
    charts.spending.options.scales.x.ticks.callback = v => SYMBOLS[currency] + v.toLocaleString();
    charts.spending.update('none');
  }
  if (charts.allocation) {
    charts.allocation.data.datasets[0].data = MOCK.portfolioAllocation.map(a => a.value * RATES[currency]);
    charts.allocation.options.scales.y.ticks.callback = v => SYMBOLS[currency] + (v / 1000).toFixed(0) + 'k';
    charts.allocation.update('none');
  }
}

// ════════════════════════════════════════════════════════
//  RENDER — ACCOUNTS
// ════════════════════════════════════════════════════════
function renderAccounts() {
  const el = document.getElementById('accountsList');
  el.innerHTML = MOCK.accounts.map(acc => {
    const neg = acc.balance < 0;
    const badgeClass = 'badge-' + acc.type;
    const label = acc.type.replace('_', ' ');
    return `
      <div class="account-row">
        <div class="account-icon">${ACCOUNT_EMOJI[acc.type] || '💳'}</div>
        <div>
          <div class="account-name">${acc.name}</div>
          <div class="account-inst">${acc.institution}</div>
        </div>
        <span class="account-badge ${badgeClass}">${label}</span>
        <div class="account-balance ${neg ? 'negative' : ''}" data-eur="${acc.balance}">
          ${fmt(acc.balance)}
        </div>
      </div>
    `;
  }).join('');
}

// ════════════════════════════════════════════════════════
//  RENDER — RECENT TRANSACTIONS (dashboard)
// ════════════════════════════════════════════════════════
function renderRecentTx() {
  const el = document.getElementById('recentTxList');
  el.innerHTML = MOCK.transactions.slice(0, 5).map(tx => {
    const income  = tx.amount > 0;
    const dateStr = new Date(tx.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const amtCls  = income ? 'income' : 'expense';
    const prefix  = income ? '+' : '';
    const recurringBadge = tx.isRecurring ? '<span class="recurring-badge">↻ Recurring</span>' : '';
    return `
      <div class="tx-row">
        <div class="tx-emoji">${CAT_EMOJI[tx.category] || '📦'}</div>
        <div style="flex:1;min-width:0">
          <div class="tx-name">${tx.name}</div>
          <div class="tx-meta">${dateStr} &middot; ${tx.category} ${recurringBadge}</div>
        </div>
        <div class="tx-amount ${amtCls}" data-eur="${tx.amount}">
          ${prefix}${fmt(tx.amount)}
        </div>
      </div>
    `;
  }).join('');
}

// ════════════════════════════════════════════════════════
//  RENDER — FULL TRANSACTION TABLE (spending)
// ════════════════════════════════════════════════════════
let txFilter = 'all';

function renderTxTable() {
  const wrap     = document.getElementById('txTableWrap');
  const filtered = txFilter === 'all'
    ? MOCK.transactions
    : MOCK.transactions.filter(t => t.category === txFilter);

  if (!filtered.length) {
    wrap.innerHTML = '<div class="no-results">No transactions for this category.</div>';
    return;
  }

  const rows = filtered.map(tx => {
    const income  = tx.amount > 0;
    const prefix  = income ? '+' : '';
    const amtCls  = income ? 'income-amt' : 'expense-amt';
    const dateStr = new Date(tx.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const cc      = CAT_COLORS[tx.category] || CAT_COLORS['Other'];
    const recurBadge = tx.isRecurring
      ? '<span class="recurring-badge" style="margin-left:4px">↻</span>' : '';
    return `
      <tr>
        <td>${dateStr}</td>
        <td>
          <div class="tx-name-cell">
            <span>${CAT_EMOJI[tx.category] || '📦'}</span>
            <span>${tx.name}</span>
            ${recurBadge}
          </div>
        </td>
        <td>
          <span class="cat-badge" style="background:${cc.bg};color:${cc.text}">
            ${tx.category}
          </span>
        </td>
        <td>${tx.merchant}</td>
        <td class="text-right ${amtCls}" data-eur="${tx.amount}">
          ${prefix}${fmt(tx.amount)}
        </td>
      </tr>
    `;
  }).join('');

  wrap.innerHTML = `
    <table class="tx-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Transaction</th>
          <th>Category</th>
          <th>Merchant</th>
          <th class="text-right">Amount</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

// ════════════════════════════════════════════════════════
//  RENDER — INVESTMENT POSITIONS
// ════════════════════════════════════════════════════════
function renderPositions() {
  const el = document.getElementById('positionsTable');
  const rows = MOCK.investmentPositions.map(pos => {
    const gain   = pos.pnl >= 0;
    const pnlCls = gain ? 'pnl-pos' : 'pnl-neg';
    const prefix = gain ? '+' : '';
    const cost   = pos.value - pos.pnl;
    const pct    = cost > 0 ? ((pos.pnl / cost) * 100).toFixed(1) : '0.0';
    return `
      <tr>
        <td>
          <div class="ticker">${pos.ticker}</div>
          <div class="pos-name">${pos.name}</div>
        </td>
        <td>${pos.position}</td>
        <td class="text-right" data-eur="${pos.value}">${fmt(pos.value, { noDecimals: true })}</td>
        <td class="text-right ${pnlCls}" data-eur="${pos.pnl}">
          ${prefix}${fmt(pos.pnl, { noDecimals: true })}
        </td>
        <td class="text-right ${pnlCls}">
          ${prefix}${pct}%
        </td>
      </tr>
    `;
  }).join('');

  el.innerHTML = `
    <table class="pos-table">
      <thead>
        <tr>
          <th>Asset</th>
          <th>Position</th>
          <th class="text-right">Value</th>
          <th class="text-right">P&amp;L</th>
          <th class="text-right">Return</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

// ════════════════════════════════════════════════════════
//  UPDATE ALL CURRENCY VALUES IN DOM
// ════════════════════════════════════════════════════════
function updateAllCurrencyValues() {
  // Static data-eur elements
  document.querySelectorAll('[data-eur]').forEach(el => {
    const eur    = parseFloat(el.dataset.eur);
    const income = el.classList.contains('income') || el.classList.contains('income-amt');
    const prefix = income && eur > 0 ? '+' : '';
    el.textContent = prefix + fmt(eur);
  });

  // Big counters (no decimals)
  const sym = SYMBOLS[currency];
  const nw  = MOCK.financialSummary.netWorth * RATES[currency];
  const as  = MOCK.financialSummary.totalAssets * RATES[currency];
  const li  = MOCK.financialSummary.totalLiabilities * RATES[currency];

  document.getElementById('heroNetWorth').textContent  = sym + Math.round(nw).toLocaleString('en-US');
  document.getElementById('dashAssets').textContent    = sym + Math.round(as).toLocaleString('en-US');
  document.getElementById('dashLiabilities').textContent = sym + Math.round(li).toLocaleString('en-US');
  document.getElementById('dashNetWorth').textContent  = sym + Math.round(nw).toLocaleString('en-US');

  // Re-render dynamic lists
  renderAccounts();
  renderRecentTx();
  renderTxTable();
  renderPositions();
}

// ════════════════════════════════════════════════════════
//  TAB SWITCHING
// ════════════════════════════════════════════════════════
function switchTab(tabName) {
  // Update nav button states
  document.querySelectorAll('.nav-item, .mobile-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });

  // Show/hide panels
  ['dashboard', 'spending', 'portfolio'].forEach(t => {
    const panel = document.getElementById('tab-' + t);
    if (panel) panel.style.display = t === tabName ? 'flex' : 'none';
  });

  // Lazy chart init + re-render
  if (tabName === 'spending') {
    initSpendingChart();
    renderTxTable();
  }
  if (tabName === 'portfolio') {
    initAllocationChart();
    renderPositions();
  }
}

// ════════════════════════════════════════════════════════
//  CURRENCY SWITCHING
// ════════════════════════════════════════════════════════
function switchCurrency(curr) {
  currency = curr;
  document.querySelectorAll('.curr-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.currency === curr);
  });
  updateAllCurrencyValues();
  updateChartCurrency();
}

// ════════════════════════════════════════════════════════
//  NET WORTH HISTORY TOGGLE
// ════════════════════════════════════════════════════════
let historyOpen = false;

function toggleHistory() {
  historyOpen = !historyOpen;
  const card = document.getElementById('networthChartCard');
  const btn  = document.getElementById('historyBtn');
  card.style.display = historyOpen ? 'block' : 'none';
  btn.innerHTML = historyOpen ? 'Hide History &#9650;' : 'View History &#9660;';
  if (historyOpen) {
    initNetworthChart();
    // Let the DOM paint before resizing
    setTimeout(() => { if (charts.networth) charts.networth.resize(); }, 60);
  }
}

// ════════════════════════════════════════════════════════
//  INIT
// ════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {

  // Ensure correct initial panel states
  ['dashboard', 'spending', 'portfolio'].forEach(t => {
    const p = document.getElementById('tab-' + t);
    if (p) {
      p.style.display      = t === 'dashboard' ? 'flex' : 'none';
      p.style.flexDirection = 'column';
      p.style.gap           = '16px';
    }
  });

  // Render static content
  renderAccounts();
  renderRecentTx();
  renderTxTable();
  renderPositions();

  // Animate the hero counter on load
  setTimeout(() => {
    animateCounter(document.getElementById('heroNetWorth'),   MOCK.financialSummary.netWorth);
    animateCounter(document.getElementById('dashAssets'),     MOCK.financialSummary.totalAssets, 900);
    animateCounter(document.getElementById('dashLiabilities'),MOCK.financialSummary.totalLiabilities, 900);
    animateCounter(document.getElementById('dashNetWorth'),   MOCK.financialSummary.netWorth, 900);
  }, 150);

  // Tab buttons (sidebar + mobile)
  document.querySelectorAll('[data-tab]').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  // Currency buttons (sidebar + mobile — all share .curr-btn + data-currency)
  document.querySelectorAll('.curr-btn').forEach(btn => {
    btn.addEventListener('click', () => switchCurrency(btn.dataset.currency));
  });

  // History toggle
  document.getElementById('historyBtn').addEventListener('click', toggleHistory);

  // Transaction category filters
  document.querySelectorAll('#txFilters .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      txFilter = btn.dataset.filter;
      document.querySelectorAll('#txFilters .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderTxTable();
    });
  });

});
