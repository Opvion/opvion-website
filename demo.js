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

  spendingPeriods: {
    day: [
      { name: 'Housing',       amount:   39.7, color: '#3182CE' },
      { name: 'Food',          amount:   18.5, color: '#38B2AC' },
      { name: 'Transport',     amount:    8.2, color: '#4C51BF' },
      { name: 'Other',         amount:    6.1, color: '#718096' },
      { name: 'Entertainment', amount:    3.2, color: '#ED8936' },
      { name: 'Utilities',     amount:    2.6, color: '#D69E2E' },
      { name: 'Healthcare',    amount:    2.1, color: '#E53E3E' },
    ],
    week: [
      { name: 'Housing',       amount:  277,   color: '#3182CE' },
      { name: 'Food',          amount:   98,   color: '#38B2AC' },
      { name: 'Other',         amount:   43,   color: '#718096' },
      { name: 'Transport',     amount:   42,   color: '#4C51BF' },
      { name: 'Entertainment', amount:   22,   color: '#ED8936' },
      { name: 'Utilities',     amount:   18,   color: '#D69E2E' },
      { name: 'Healthcare',    amount:   15,   color: '#E53E3E' },
    ],
    month: [
      { name: 'Housing',       amount: 1200,   color: '#3182CE' },
      { name: 'Food',          amount:  420,   color: '#38B2AC' },
      { name: 'Other',         amount:  185,   color: '#718096' },
      { name: 'Transport',     amount:  180,   color: '#4C51BF' },
      { name: 'Entertainment', amount:   95,   color: '#ED8936' },
      { name: 'Utilities',     amount:   78,   color: '#D69E2E' },
      { name: 'Healthcare',    amount:   65,   color: '#E53E3E' },
    ],
    year: [
      { name: 'Housing',       amount: 14400,  color: '#3182CE' },
      { name: 'Food',          amount:  5040,  color: '#38B2AC' },
      { name: 'Other',         amount:  2220,  color: '#718096' },
      { name: 'Transport',     amount:  2160,  color: '#4C51BF' },
      { name: 'Entertainment', amount:  1140,  color: '#ED8936' },
      { name: 'Utilities',     amount:   936,  color: '#D69E2E' },
      { name: 'Healthcare',    amount:   780,  color: '#E53E3E' },
    ],
    max: [
      { name: 'Housing',       amount: 43200,  color: '#3182CE' },
      { name: 'Food',          amount: 15120,  color: '#38B2AC' },
      { name: 'Other',         amount:  6660,  color: '#718096' },
      { name: 'Transport',     amount:  6480,  color: '#4C51BF' },
      { name: 'Entertainment', amount:  3420,  color: '#ED8936' },
      { name: 'Utilities',     amount:  2808,  color: '#D69E2E' },
      { name: 'Healthcare',    amount:  2340,  color: '#E53E3E' },
    ],
  },

  portfolioAllocation: [
    { name: 'Stocks',      value: 75000, color: '#3182CE' },
    { name: 'Bonds',       value: 25000, color: '#4C51BF' },
    { name: 'Cash',        value: 12500, color: '#38B2AC' },
    { name: 'Real Estate', value: 12500, color: '#ED8936' },
  ],

  wealthAllocation: [
    { name: 'Cash & Savings', value: 24281.45,  color: '#3b82f6' },
    { name: 'Investments',    value: 125000,    color: '#7c3aed' },
    { name: 'Real Estate',    value: 370718.55, color: '#f59e0b' },
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
//  THEME
// ════════════════════════════════════════════════════════
function updateChartTheme() {
  const dark = document.body.classList.contains('dark');
  const gridColor = dark ? '#334155' : '#f1f5f9';
  if (charts.networth) {
    charts.networth.options.scales.y.grid.color = gridColor;
    charts.networth.update('none');
  }
  if (charts.spending) {
    charts.spending.options.scales.x.grid.color = gridColor;
    charts.spending.options.scales.y.ticks.color = dark ? '#f1f5f9' : '#1e293b';
    charts.spending.update('none');
  }
  if (charts.allocation) {
    charts.allocation.options.scales.y.grid.color = gridColor;
    charts.allocation.update('none');
  }
}

function applyTheme(dark) {
  document.body.classList.toggle('dark', dark);
  document.getElementById('themeIcon').textContent  = dark ? '☀️' : '🌙';
  document.getElementById('themeLabel').textContent = dark ? 'Light Mode' : 'Dark Mode';
  updateChartTheme();
}

// ════════════════════════════════════════════════════════
//  CURRENCY
// ════════════════════════════════════════════════════════
const RATES   = { EUR: 1, USD: 1.08, GBP: 0.85 };
const SYMBOLS = { EUR: '€', USD: '$', GBP: '£' };
let currency = 'EUR';
let spendingPeriod = 'month';
let spendingView   = 'bar';

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

function getSpendingData() {
  return [...MOCK.spendingPeriods[spendingPeriod]].sort((a, b) => b.amount - a.amount);
}

function updateSpendingChart() {
  const data = getSpendingData();
  if (charts.spending) {
    charts.spending.data.labels = data.map(c => c.name);
    charts.spending.data.datasets[0].data = data.map(c => c.amount * RATES[currency]);
    charts.spending.data.datasets[0].backgroundColor = data.map(c => c.color);
    charts.spending.options.scales.x.ticks.callback = v => SYMBOLS[currency] + v.toLocaleString();
    charts.spending.update();
  }
  if (charts.spendingPie) {
    charts.spendingPie.data.labels = data.map(c => c.name);
    charts.spendingPie.data.datasets[0].data = data.map(c => c.amount * RATES[currency]);
    charts.spendingPie.data.datasets[0].backgroundColor = data.map(c => c.color);
    charts.spendingPie.update();
  }
}

function switchSpendingPeriod(period) {
  spendingPeriod = period;
  document.querySelectorAll('#spendingPeriodToggle .filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.period === period);
  });
  updateSpendingChart();
}

function switchSpendingView(view) {
  spendingView = view;
  document.querySelectorAll('#spendingViewToggle .filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === view);
  });
  document.getElementById('spendingBarWrap').style.display = view === 'bar' ? 'block' : 'none';
  document.getElementById('spendingPieWrap').style.display = view === 'pie' ? 'block' : 'none';
  if (view === 'pie') initSpendingPieChart();
}

function initSpendingPieChart() {
  if (charts.spendingPie) return;
  const ctx = document.getElementById('spendingPieChart');
  if (!ctx) return;
  const data = getSpendingData();
  charts.spendingPie = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: data.map(c => c.name),
      datasets: [{
        data: data.map(c => c.amount * RATES[currency]),
        backgroundColor: data.map(c => c.color),
        borderWidth: 2,
        borderColor: '#ffffff',
        hoverOffset: 6,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '55%',
      plugins: {
        legend: {
          display: true,
          position: 'right',
          labels: {
            color: '#475569',
            font: { size: 11, weight: '600' },
            boxWidth: 10,
            padding: 12,
          },
        },
        tooltip: {
          callbacks: {
            label: ctx => {
              const raw = ctx.raw;
              const total = ctx.dataset.data.reduce((a, b) => a + b, 0);
              const pct = ((raw / total) * 100).toFixed(1);
              return '  ' + fmt(raw / RATES[currency]) + '  (' + pct + '%)';
            },
          },
        },
      },
    },
  });
}

function initSpendingChart() {
  if (charts.spending) return;
  const ctx = document.getElementById('spendingChart');
  if (!ctx) return;

  const sorted = getSpendingData();

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
          ticks: {
            font: { weight: '600' },
            color: document.body.classList.contains('dark') ? '#f1f5f9' : '#1e293b',
          },
        },
      },
    },
  });
}

function initWealthPieChart() {
  if (charts.wealthPie) return;
  const ctx = document.getElementById('wealthPieChart');
  if (!ctx) return;

  charts.wealthPie = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: MOCK.wealthAllocation.map(a => a.name),
      datasets: [{
        data: MOCK.wealthAllocation.map(a => a.value * RATES[currency]),
        backgroundColor: MOCK.wealthAllocation.map(a => a.color),
        borderWidth: 2,
        borderColor: '#ffffff',
        hoverOffset: 6,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '62%',
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => {
              const raw = ctx.raw;
              const total = ctx.dataset.data.reduce((a, b) => a + b, 0);
              const pct = ((raw / total) * 100).toFixed(1);
              return '  ' + fmt(raw / RATES[currency]) + '  (' + pct + '%)';
            },
          },
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
  if (charts.spending || charts.spendingPie) {
    updateSpendingChart();
  }
  if (charts.allocation) {
    charts.allocation.data.datasets[0].data = MOCK.portfolioAllocation.map(a => a.value * RATES[currency]);
    charts.allocation.options.scales.y.ticks.callback = v => SYMBOLS[currency] + (v / 1000).toFixed(0) + 'k';
    charts.allocation.update('none');
  }
  if (charts.wealthPie) {
    charts.wealthPie.data.datasets[0].data = MOCK.wealthAllocation.map(a => a.value * RATES[currency]);
    charts.wealthPie.update('none');
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
let txFilter        = 'all';
let txColDateFrom   = null;   // 'YYYY-MM-DD' or null
let txColDateTo     = null;   // 'YYYY-MM-DD' or null
let txColCategories = [];     // [] = all; else restricted list
let txColMerchants  = [];     // [] = all; else restricted list
let _openColDrop    = null;   // { col, el }

function closeColDropdown() {
  if (_openColDrop) { _openColDrop.el.remove(); _openColDrop = null; }
}

function openColDropdown(col, thEl) {
  // Toggle same column closed
  if (_openColDrop) {
    const same = _openColDrop.col === col;
    closeColDropdown();
    if (same) return;
  }
  const rect = thEl.getBoundingClientRect();
  const el   = document.createElement('div');
  el.className = 'col-dropdown';
  el.addEventListener('click', e => e.stopPropagation());

  if (col === 'date') {
    el.innerHTML = `
      <div class="col-dropdown-title">Filter by date range</div>
      <div class="col-dropdown-date-row">
        <div>
          <div class="col-dropdown-date-label">From</div>
          <input type="date" id="cdFrom" value="${txColDateFrom || ''}">
        </div>
        <div>
          <div class="col-dropdown-date-label">To</div>
          <input type="date" id="cdTo" value="${txColDateTo || ''}">
        </div>
      </div>
      <div class="col-dd-actions">
        <button class="col-dd-clear" id="cdClear">Clear</button>
        <button class="col-dd-apply" id="cdApply">Apply</button>
      </div>`;
    el.querySelector('#cdApply').addEventListener('click', () => {
      txColDateFrom = el.querySelector('#cdFrom').value || null;
      txColDateTo   = el.querySelector('#cdTo').value   || null;
      closeColDropdown(); renderTxTable();
    });
    el.querySelector('#cdClear').addEventListener('click', () => {
      txColDateFrom = null; txColDateTo = null;
      closeColDropdown(); renderTxTable();
    });

  } else if (col === 'cat') {
    const allCats = [...new Set(MOCK.transactions.map(t => t.category))].sort();
    const allChecked = txColCategories.length === 0;
    const rows = allCats.map(c => {
      const chk = allChecked || txColCategories.includes(c) ? 'checked' : '';
      return `<label class="col-check-row"><input type="checkbox" value="${c}" ${chk}><span>${c}</span></label>`;
    }).join('');
    el.innerHTML = `
      <div class="col-dropdown-title">Filter by category</div>
      <label class="col-check-row col-check-all" id="ccAll">
        <input type="checkbox" id="ccAllChk" ${allChecked ? 'checked' : ''}><span>All</span>
      </label>
      <div class="col-check-divider"></div>
      <div class="col-dropdown-check-list" id="ccList">${rows}</div>
      <div class="col-dd-actions">
        <button class="col-dd-clear" id="ccClear">Clear</button>
        <button class="col-dd-apply" id="ccApply">Apply</button>
      </div>`;
    const ccAllChk = el.querySelector('#ccAllChk');
    const ccList   = el.querySelector('#ccList');
    ccAllChk.addEventListener('change', () => {
      ccList.querySelectorAll('input').forEach(i => { i.checked = ccAllChk.checked; });
    });
    ccList.addEventListener('change', () => {
      const total   = ccList.querySelectorAll('input').length;
      const checked = ccList.querySelectorAll('input:checked').length;
      ccAllChk.checked       = checked === total;
      ccAllChk.indeterminate = checked > 0 && checked < total;
    });
    el.querySelector('#ccApply').addEventListener('click', () => {
      const sel = [...el.querySelectorAll('#ccList input:checked')].map(i => i.value);
      txColCategories = sel.length === allCats.length ? [] : sel;
      closeColDropdown(); renderTxTable();
    });
    el.querySelector('#ccClear').addEventListener('click', () => {
      txColCategories = [];
      closeColDropdown(); renderTxTable();
    });

  } else if (col === 'merchant') {
    const allM = [...new Set(MOCK.transactions.map(t => t.merchant))].sort();
    const allChecked = txColMerchants.length === 0;
    const rows = allM.map(m => {
      const chk = allChecked || txColMerchants.includes(m) ? 'checked' : '';
      return `<label class="col-check-row"><input type="checkbox" value="${m}" ${chk}><span>${m}</span></label>`;
    }).join('');
    el.innerHTML = `
      <div class="col-dropdown-title">Filter by merchant</div>
      <label class="col-check-row col-check-all" id="cmAll">
        <input type="checkbox" id="cmAllChk" ${allChecked ? 'checked' : ''}><span>All</span>
      </label>
      <div class="col-check-divider"></div>
      <div class="col-dropdown-check-list" id="cmList">${rows}</div>
      <div class="col-dd-actions">
        <button class="col-dd-clear" id="cmClear">Clear</button>
        <button class="col-dd-apply" id="cmApply">Apply</button>
      </div>`;
    const cmAllChk = el.querySelector('#cmAllChk');
    const cmList   = el.querySelector('#cmList');
    cmAllChk.addEventListener('change', () => {
      cmList.querySelectorAll('input').forEach(i => { i.checked = cmAllChk.checked; });
    });
    cmList.addEventListener('change', () => {
      const total   = cmList.querySelectorAll('input').length;
      const checked = cmList.querySelectorAll('input:checked').length;
      cmAllChk.checked       = checked === total;
      cmAllChk.indeterminate = checked > 0 && checked < total;
    });
    el.querySelector('#cmApply').addEventListener('click', () => {
      const sel = [...el.querySelectorAll('#cmList input:checked')].map(i => i.value);
      txColMerchants = sel.length === allM.length ? [] : sel;
      closeColDropdown(); renderTxTable();
    });
    el.querySelector('#cmClear').addEventListener('click', () => {
      txColMerchants = [];
      closeColDropdown(); renderTxTable();
    });
  }

  // Position below the th, keep inside viewport
  el.style.left = Math.min(rect.left, window.innerWidth - 230) + 'px';
  el.style.top  = (rect.bottom + 4) + 'px';
  document.body.appendChild(el);
  _openColDrop = { col, el };
}

function renderTxTable() {
  const wrap = document.getElementById('txTableWrap');

  // 1. Apply category pill filter
  let filtered = txFilter === 'all'
    ? MOCK.transactions
    : MOCK.transactions.filter(t => t.category === txFilter);

  // 2. Apply column header filters
  if (txColDateFrom) {
    const from = new Date(txColDateFrom);
    filtered = filtered.filter(t => new Date(t.date) >= from);
  }
  if (txColDateTo) {
    const to = new Date(txColDateTo);
    to.setHours(23, 59, 59, 999);
    filtered = filtered.filter(t => new Date(t.date) <= to);
  }
  if (txColCategories.length > 0) {
    filtered = filtered.filter(t => txColCategories.includes(t.category));
  }
  if (txColMerchants.length > 0) {
    filtered = filtered.filter(t => txColMerchants.includes(t.merchant));
  }

  if (!filtered.length) {
    wrap.innerHTML = '<div class="no-results">No transactions match your filters.</div>';
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

  const dateAct = (txColDateFrom || txColDateTo) ? ' th-filter--active' : '';
  const catAct  = txColCategories.length > 0     ? ' th-filter--active' : '';
  const mchAct  = txColMerchants.length > 0      ? ' th-filter--active' : '';

  wrap.innerHTML = `
    <table class="tx-table">
      <thead>
        <tr>
          <th class="th-filter${dateAct}" id="thDate">Date <span class="th-chevron">▾</span></th>
          <th>Transaction</th>
          <th class="th-filter${catAct}"  id="thCat">Category <span class="th-chevron">▾</span></th>
          <th class="th-filter${mchAct}"  id="thMerchant">Merchant <span class="th-chevron">▾</span></th>
          <th class="text-right">Amount</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;

  document.getElementById('thDate').addEventListener('click', e => {
    e.stopPropagation();
    openColDropdown('date', e.currentTarget);
  });
  document.getElementById('thCat').addEventListener('click', e => {
    e.stopPropagation();
    openColDropdown('cat', e.currentTarget);
  });
  document.getElementById('thMerchant').addEventListener('click', e => {
    e.stopPropagation();
    openColDropdown('merchant', e.currentTarget);
  });
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
  const sel = document.getElementById('currencySelect');
  if (sel) sel.value = curr;
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

  // Init dashboard pie chart
  initWealthPieChart();

  // Apply dark mode by default
  applyTheme(true);

  // Theme toggle
  document.getElementById('themeToggle').addEventListener('click', () => {
    applyTheme(!document.body.classList.contains('dark'));
  });

  // Tab buttons (sidebar + mobile)
  document.querySelectorAll('[data-tab]').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  // Currency select (sidebar)
  document.getElementById('currencySelect').addEventListener('change', e => switchCurrency(e.target.value));

  // Currency buttons (mobile — .curr-btn + data-currency)
  document.querySelectorAll('.curr-btn').forEach(btn => {
    btn.addEventListener('click', () => switchCurrency(btn.dataset.currency));
  });

  // History toggle
  document.getElementById('historyBtn').addEventListener('click', toggleHistory);

  // Spending period + view toggle
  document.querySelectorAll('#spendingPeriodToggle .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => switchSpendingPeriod(btn.dataset.period));
  });
  document.querySelectorAll('#spendingViewToggle .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => switchSpendingView(btn.dataset.view));
  });

  // Add Category button
  document.getElementById('addCategoryBtn').addEventListener('click', () => {
    const name = prompt('Enter new category name:');
    if (!name || !name.trim()) return;
    const trimmed = name.trim();
    // Add filter button
    const bar = document.getElementById('txFilters');
    const btn = document.createElement('button');
    btn.className = 'filter-btn';
    btn.dataset.filter = trimmed;
    btn.textContent = trimmed;
    btn.addEventListener('click', () => {
      txFilter = trimmed;
      document.querySelectorAll('#txFilters .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderTxTable();
    });
    bar.insertBefore(btn, document.getElementById('addCategoryBtn'));
  });

  // Add Transaction button (demo — shows a brief toast)
  document.getElementById('addTransactionBtn').addEventListener('click', () => {
    const toast = document.createElement('div');
    toast.textContent = 'Add Transaction — coming in the full app!';
    Object.assign(toast.style, {
      position: 'fixed', bottom: '24px', left: '50%', transform: 'translateX(-50%)',
      background: '#2563eb', color: '#fff', padding: '10px 22px',
      borderRadius: '99px', fontSize: '0.82rem', fontWeight: '600',
      zIndex: '9999', boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
      opacity: '1', transition: 'opacity 0.4s',
    });
    document.body.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 400); }, 2200);
  });

  // Transaction category filters
  document.querySelectorAll('#txFilters .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      txFilter = btn.dataset.filter;
      document.querySelectorAll('#txFilters .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderTxTable();
    });
  });

  // Close column filter dropdown when clicking outside
  document.addEventListener('click', () => closeColDropdown());

});
