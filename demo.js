// ════════════════════════════════════════════════════════
//  MOCK DATA  (ported from spending-tracker/dev mockData.ts)
// ════════════════════════════════════════════════════════
const MOCK = {

  financialSummary: {
    totalAssets:       520000,
    totalLiabilities:  233360,
    netWorth:          286640,
  },

  accounts: [
    { id: 'acc-revolut',       name: 'Personal EUR',      institution: 'Revolut',        categories: ['bank_account', 'crypto_account'], balance:   1280.45 },
    { id: 'acc-wise',          name: 'Multi-Currency',    institution: 'Wise',           categories: ['bank_account'],                    balance:   5420.10 },
    { id: 'acc-commerz',       name: 'Girokonto',         institution: 'Commerzbank',    categories: ['bank_account'],                    balance:   3640.55 },
    { id: 'acc-sparkasse',     name: 'Savings Plus',      institution: 'Sparkasse',      categories: ['bank_account'],                    balance:  12750.00 },
    { id: 'acc-n26',           name: 'Daily Account',     institution: 'N26',            categories: ['bank_account'],                    balance:    890.20 },
    { id: 'acc-brokerage',     name: 'Brokerage Account', institution: 'Fidelity',       categories: ['investment_account'],              balance:  10750.00 },
    { id: 'acc-ibkr',          name: 'Global Stocks',     institution: 'IBKR',           categories: ['investment_account'],              balance:  27438.50 },
    { id: 'acc-traderepublic', name: 'ETF Savings',       institution: 'Trade Republic', categories: ['investment_account'],              balance:  63413.00 },
    { id: 'acc-realestate',    name: 'Berlin Apartment',  institution: 'Real Estate',    categories: ['real_estate'],                     balance: 265000.00 },
    { id: 'acc-car',           name: 'BMW 3 Series',      institution: 'Vehicle',        categories: ['vehicle'],                         balance:  18500.00 },
  ],

  transactions: [
    { id:  1, name: 'Monthly Salary',           date: '2025-01-30', category: 'Income',        amount:  5500,   merchant: 'Employer GmbH',    isRecurring: true,  accountId: 'acc-commerz'   },
    { id:  2, name: 'Apartment Rent',           date: '2025-01-28', category: 'Housing',       amount: -1200,   merchant: 'Wiener Wohnen',    isRecurring: true,  accountId: 'acc-commerz'   },
    { id:  3, name: 'Billa Supermarkt',         date: '2025-01-27', category: 'Food',          amount:  -85.40, merchant: 'Billa',            isRecurring: false, accountId: 'acc-revolut'   },
    { id:  4, name: 'Netflix',                  date: '2025-01-26', category: 'Entertainment', amount:  -15.99, merchant: 'Netflix',          isRecurring: true,  accountId: 'acc-wise'      },
    { id:  5, name: 'Vapiano Restaurant',       date: '2025-01-25', category: 'Food',          amount:  -42.50, merchant: 'Vapiano',          isRecurring: false, accountId: 'acc-revolut'   },
    { id:  6, name: 'Wien Energie',             date: '2025-01-24', category: 'Utilities',     amount:  -78.30, merchant: 'Wien Energie',     isRecurring: true,  accountId: 'acc-sparkasse' },
    { id:  7, name: 'Freelance Project',        date: '2025-01-23', category: 'Income',        amount:  1200,   merchant: 'Client AG',        isRecurring: false, accountId: 'acc-wise'      },
    { id:  8, name: 'Uber',                     date: '2025-01-22', category: 'Transport',     amount:  -18.70, merchant: 'Uber',             isRecurring: false, accountId: 'acc-revolut'   },
    { id:  9, name: 'dm Drogerie',              date: '2025-01-21', category: 'Healthcare',    amount:  -32.10, merchant: 'dm',               isRecurring: false, accountId: 'acc-n26'       },
    { id: 10, name: 'Amazon.de',                date: '2025-01-20', category: 'Other',         amount:  -67.80, merchant: 'Amazon',           isRecurring: false, accountId: 'acc-wise'      },
    { id: 11, name: 'Coffee Rocks Cafe',        date: '2025-01-19', category: 'Food',          amount:   -4.50, merchant: 'Coffee Rocks',     isRecurring: false, accountId: 'acc-revolut'   },
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

  // Derived at runtime from investmentPositions (see aggregation helpers).

  yearlyReturns: [
    { year: '2019', value:   9.2 },
    { year: '2020', value:  13.8 },
    { year: '2021', value:  18.4 },
    { year: '2022', value:  -7.3 },
    { year: '2023', value:  16.2 },
    { year: '2024', value:  11.5 },
  ],

  wealthAllocation: [
    { name: 'Cash & Savings', value: 24281.45,  color: '#3b82f6' },
    { name: 'Investments',    value: 125000,    color: '#7c3aed' },
    { name: 'Real Estate',    value: 370718.55, color: '#f59e0b' },
  ],

  investmentPositions: [
    // Binance (crypto exchange)
    { ticker: 'BTC',  name: 'Bitcoin',             assetType: 'crypto',      provider: 'binance',       qty: 0.28,  buyPrice: 207142.86, currentPrice: 222142.86, value: 62200, pnl:  4200, dayChangePct:  1.82 },
    { ticker: 'ETH',  name: 'Ethereum',            assetType: 'crypto',      provider: 'binance',       qty: 2.6,   buyPrice:   2750.00, currentPrice:   3050.00, value:  7930, pnl:   780, dayChangePct:  1.10 },
    { ticker: 'BNB',  name: 'BNB',                 assetType: 'crypto',      provider: 'binance',       qty: 8,     buyPrice:    280.00, currentPrice:    320.00, value:  2560, pnl:   320, dayChangePct:  0.45 },

    // Lightyear (EU broker)
    { ticker: 'EXXT', name: 'iShares MSCI World',  assetType: 'etf',         provider: 'lightyear',     qty: 150,   buyPrice:    126.00, currentPrice:    146.67, value: 22000, pnl:  3100, dayChangePct:  0.45 },
    { ticker: 'CNDX', name: 'Nasdaq 100 ETF',      assetType: 'etf',         provider: 'lightyear',     qty: 80,    buyPrice:    158.75, currentPrice:    193.75, value: 15500, pnl:  2800, dayChangePct:  1.12 },
    { ticker: 'MEUD', name: 'Euro Stoxx 600',      assetType: 'etf',         provider: 'lightyear',     qty: 100,   buyPrice:     61.80, currentPrice:     65.00, value:  6500, pnl:   320, dayChangePct:  0.21 },
    { ticker: 'VUSA', name: 'Vanguard S&P 500',    assetType: 'etf',         provider: 'lightyear',     qty: 35,    buyPrice:     95.00, currentPrice:    110.20, value:  3857, pnl:   532, dayChangePct:  0.62 },
    { ticker: 'TSLA', name: 'Tesla Inc.',          assetType: 'stock',       provider: 'lightyear',     qty: 18,    buyPrice:    215.00, currentPrice:    248.50, value:  4473, pnl:   603, dayChangePct: -1.45 },

    // Coinbase (crypto exchange)
    { ticker: 'EIMI', name: 'Emerging Markets ETF',assetType: 'etf',         provider: 'coinbase',      qty: 200,   buyPrice:     42.00, currentPrice:     40.00, value:  8000, pnl:  -400, dayChangePct: -0.68 },
    { ticker: 'ETH',  name: 'Ethereum',            assetType: 'crypto',      provider: 'coinbase',      qty: 1.4,   buyPrice:   2700.00, currentPrice:   3050.00, value:  4270, pnl:   490, dayChangePct:  1.05 },
    { ticker: 'USDC', name: 'USD Coin',            assetType: 'cash',        provider: 'coinbase',      qty: 1800,  buyPrice:      0.92, currentPrice:      0.92, value:  1656, pnl:     0, dayChangePct:  0.00 },

    // Nexo (crypto yield)
    { ticker: 'NEXO', name: 'Nexo Token',          assetType: 'crypto',      provider: 'nexo',          qty: 500,   buyPrice:      5.90, currentPrice:      5.60, value:  2800, pnl:  -150, dayChangePct: -2.10 },
    { ticker: 'ETH',  name: 'Ethereum',            assetType: 'crypto',      provider: 'nexo',          qty: 0.85,  buyPrice:   2900.00, currentPrice:   3050.00, value:  2592, pnl:   127, dayChangePct:  1.20 },
    { ticker: 'USDT', name: 'Tether',              assetType: 'cash',        provider: 'nexo',          qty: 1500,  buyPrice:      0.92, currentPrice:      0.92, value:  1380, pnl:     0, dayChangePct:  0.00 },

    // Phantom (Solana wallet)
    { ticker: 'SOL',  name: 'Solana',              assetType: 'crypto',      provider: 'phantom',       qty: 10,    buyPrice:     81.00, currentPrice:    170.00, value:  1700, pnl:   890, dayChangePct:  3.45 },
    { ticker: 'JUP',  name: 'Jupiter',             assetType: 'crypto',      provider: 'phantom',       qty: 850,   buyPrice:      0.78, currentPrice:      0.92, value:   782, pnl:   119, dayChangePct:  2.40 },
    { ticker: 'JTO',  name: 'Jito',                assetType: 'crypto',      provider: 'phantom',       qty: 250,   buyPrice:      2.10, currentPrice:      2.85, value:   712, pnl:   187, dayChangePct: -0.85 },

    // IBKR (global broker)
    { ticker: 'AAPL', name: 'Apple Inc.',          assetType: 'stock',       provider: 'ibkr',          qty: 45,    buyPrice:    150.00, currentPrice:    220.50, value:  9922.5, pnl: 3172.5, dayChangePct:  0.85 },
    { ticker: 'MSFT', name: 'Microsoft Corp.',     assetType: 'stock',       provider: 'ibkr',          qty: 30,    buyPrice:    310.00, currentPrice:    415.20, value: 12456, pnl:  3156, dayChangePct: -0.15 },
    { ticker: 'GOOGL',name: 'Alphabet Inc.',       assetType: 'stock',       provider: 'ibkr',          qty: 22,    buyPrice:    132.00, currentPrice:    158.40, value:  3485, pnl:   581, dayChangePct:  0.55 },
    { ticker: 'NVDA', name: 'Nvidia Corp.',        assetType: 'stock',       provider: 'ibkr',          qty: 28,    buyPrice:    280.00, currentPrice:    410.00, value: 11480, pnl:  3640, dayChangePct:  1.65 },
    { ticker: 'USD',  name: 'US Dollar Cash',      assetType: 'cash',        provider: 'ibkr',          qty: 5500,  buyPrice:      0.90, currentPrice:      0.92, value:  5060, pnl:   110, dayChangePct:  0.10 },

    // Trade Republic (EU broker)
    { ticker: 'IBON', name: 'Govt Bond ETF',       assetType: 'bond',        provider: 'traderepublic', qty: 250,   buyPrice:     98.50, currentPrice:    102.10, value: 25525, pnl:   900, dayChangePct:  0.05 },
    { ticker: 'VWCE', name: 'Vanguard All-World',  assetType: 'etf',         provider: 'traderepublic', qty: 320,   buyPrice:     95.00, currentPrice:    118.40, value: 37888, pnl:  7488, dayChangePct:  0.35 },
    { ticker: 'ASML', name: 'ASML Holding',        assetType: 'stock',       provider: 'traderepublic', qty: 8,     buyPrice:    580.00, currentPrice:    720.00, value:  5760, pnl:  1120, dayChangePct: -0.42 },
    { ticker: 'SAP',  name: 'SAP SE',              assetType: 'stock',       provider: 'traderepublic', qty: 22,    buyPrice:    130.00, currentPrice:    165.00, value:  3630, pnl:   770, dayChangePct:  0.28 },

    // Sparkasse (bank)
    { ticker: 'EUR',  name: 'Euro Cash',           assetType: 'cash',        provider: 'sparkasse',     qty: 12000, buyPrice:      1.00, currentPrice:      1.00, value: 12000, pnl:     0, dayChangePct:  0.00 },
    { ticker: 'FDEP', name: 'Fixed Deposit',       assetType: 'cash',        provider: 'sparkasse',     qty: 4500,  buyPrice:      1.00, currentPrice:      1.00, value:  4500, pnl:     0, dayChangePct:  0.00 },
    { ticker: 'DBND', name: 'German Bund 10Y',     assetType: 'bond',        provider: 'sparkasse',     qty: 60,    buyPrice:     95.00, currentPrice:     98.50, value:  5910, pnl:   210, dayChangePct:  0.05 },

    // Fidelity (commodities & funds)
    { ticker: 'GOLD', name: 'Physical Gold',       assetType: 'commodity',   provider: 'fidelity',      qty: 5,     buyPrice:   1800.00, currentPrice:   2150.00, value: 10750, pnl:  1750, dayChangePct:  0.40 },
    { ticker: 'SLV',  name: 'Physical Silver',     assetType: 'commodity',   provider: 'fidelity',      qty: 60,    buyPrice:     22.00, currentPrice:     28.50, value:  1710, pnl:   390, dayChangePct: -0.35 },
    { ticker: 'FXAIX',name: 'Fidelity 500 Index',  assetType: 'etf',         provider: 'fidelity',      qty: 25,    buyPrice:    145.00, currentPrice:    178.00, value:  4450, pnl:   825, dayChangePct:  0.48 },

    // Real estate
    { ticker: 'PROP', name: 'Berlin Apartment',    assetType: 'real_estate', provider: 'real_estate',   qty: 1,     buyPrice: 240000.00, currentPrice: 265000.00, value: 265000, pnl: 25000, dayChangePct:  0.00 },
    { ticker: 'MUC',  name: 'Munich Apartment',    assetType: 'real_estate', provider: 'real_estate',   qty: 1,     buyPrice:  95000.00, currentPrice: 105000.00, value: 105000, pnl: 10000, dayChangePct:  0.00 },
  ],

  netWorthHistory: {
    labels: ['Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan'],
    values: [247000,252000,257000,254000,261000,267000,273000,277000,281000,284500,286000,286640],
  },

  // Credit cards: revolving credit lines with utilisation
  creditCards: [
    { id: 'cc1', name: 'American Express Gold',  type: 'credit_card', issuer: 'Amex',         used:  1850.00, limit:  5000, interestRate: 19.99, minimumPayment:  60, dueDate: '2026-05-15' },
    { id: 'cc2', name: 'Visa Cashback',          type: 'credit_card', issuer: 'Commerzbank',  used:   720.40, limit:  2500, interestRate: 17.49, minimumPayment:  35, dueDate: '2026-05-08' },
    { id: 'cc3', name: 'Travel Mastercard',      type: 'credit_card', issuer: 'N26',          used:  2940.00, limit:  3500, interestRate: 21.99, minimumPayment:  85, dueDate: '2026-05-22' },
  ],

  // Installment debts: amortising loans with start/end dates
  debts: [
    { id: 'd1', name: 'Berlin Apartment Mortgage', type: 'mortgage',      lender: 'Sparkasse Berlin', principal: 240000, currentBalance: 198400, interestRate: 3.10, minimumPayment: 1180, dueDate: '2026-05-01', startDate: '2020-06-01', endDate: '2050-06-01' },
    { id: 'd2', name: 'BMW 3 Series Loan',         type: 'auto_loan',     lender: 'Santander',        principal:  28000, currentBalance:  16800, interestRate: 4.20, minimumPayment:  420, dueDate: '2026-05-05', startDate: '2023-03-15', endDate: '2028-03-15' },
    { id: 'd3', name: 'Education Loan',            type: 'student_loan',  lender: 'KfW',              principal:  18000, currentBalance:   9200, interestRate: 2.40, minimumPayment:  165, dueDate: '2026-05-10', startDate: '2019-09-01', endDate: '2027-09-01' },
    { id: 'd4', name: 'Personal Line of Credit',   type: 'personal_loan', lender: 'Revolut',          principal:   7000, currentBalance:   3450, interestRate: 8.90, minimumPayment:  120, dueDate: '2026-05-18', startDate: '2024-01-10', endDate: '2027-01-10' },
  ],

};

// Rebuild portfolio aggregates from the current positions so summary cards,
// provider tabs, and allocation charts always stay in sync.
function derivePortfolioModel() {
  const typeMeta = {
    stock:       { name: 'Stocks',      color: '#3182CE' },
    etf:         { name: 'ETFs',        color: '#4C51BF' },
    crypto:      { name: 'Crypto',      color: '#F59E0B' },
    bond:        { name: 'Bonds',       color: '#38B2AC' },
    cash:        { name: 'Cash',        color: '#10B981' },
    real_estate: { name: 'Real Estate', color: '#EC4899' },
    commodity:   { name: 'Commodities', color: '#D97706' },
  };

  // Distinct, accessible palette for individual holdings within a provider.
  const tickerPalette = [
    '#3B82F6', '#8B5CF6', '#F59E0B', '#10B981', '#EF4444',
    '#06B6D4', '#EC4899', '#D97706', '#6366F1', '#14B8A6',
    '#F43F5E', '#84CC16',
  ];

  const byProviderType = {};
  const byProviderPositions = {};
  let totalValue = 0;
  let totalPnl = 0;
  let dayGain = 0;

  MOCK.investmentPositions.forEach(pos => {
    const provider = pos.provider || 'unknown';
    const type = pos.assetType || 'other';
    const value = Number(pos.value) || 0;
    const pnl = Number(pos.pnl) || 0;
    const dayPct = Number(pos.dayChangePct) || 0;

    if (!byProviderType[provider]) byProviderType[provider] = {};
    byProviderType[provider][type] = (byProviderType[provider][type] || 0) + value;

    if (!byProviderPositions[provider]) byProviderPositions[provider] = [];
    byProviderPositions[provider].push({ pos, value });

    totalValue += value;
    totalPnl += pnl;
    dayGain += value * (dayPct / 100);
  });

  function bucketToAllocation(bucket) {
    return Object.entries(bucket)
      .map(([type, value]) => {
        const meta = typeMeta[type] || { name: type, color: '#94A3B8' };
        return { name: meta.name, value: Math.round(value), color: meta.color };
      })
      .sort((a, b) => b.value - a.value);
  }

  function positionsToAllocation(entries) {
    return entries
      .slice()
      .sort((a, b) => b.value - a.value)
      .map((entry, idx) => ({
        name: entry.pos.name || entry.pos.ticker,
        ticker: entry.pos.ticker,
        value: Math.round(entry.value),
        color: tickerPalette[idx % tickerPalette.length],
      }));
  }

  const providerAllocations = {};
  const aggregatedBucket = {};
  Object.entries(byProviderType).forEach(([provider, bucket]) => {
    providerAllocations[provider] = positionsToAllocation(byProviderPositions[provider] || []);
    Object.entries(bucket).forEach(([type, value]) => {
      aggregatedBucket[type] = (aggregatedBucket[type] || 0) + value;
    });
  });

  const portfolioAllocation = bucketToAllocation(aggregatedBucket);
  providerAllocations.aggregated = portfolioAllocation;

  const investedCost = totalValue - totalPnl;
  const totalGainPct = investedCost > 0 ? (totalPnl / investedCost) * 100 : 0;
  const dayGainPct = totalValue > 0 ? (dayGain / totalValue) * 100 : 0;

  MOCK.portfolioAllocation = portfolioAllocation;
  MOCK.providerAllocations = providerAllocations;
  MOCK.portfolioSummary = {
    totalValue: Math.round(totalValue),
    dayGain: Math.round(dayGain),
    dayGainPct,
    totalGain: Math.round(totalPnl),
    totalGainPct,
  };
}

derivePortfolioModel();
// ════════════════════════════════════════════════════════
//  THEME
// ════════════════════════════════════════════════════════
function updateChartTheme() {
  const dark = document.body.classList.contains('dark');
  const gridColor = dark ? 'rgba(148,163,184,0.24)' : '#f1f5f9';
  const axisTextColor = dark ? '#f1f5f9' : '#1e293b';
  const mutedTextColor = dark ? '#94a3b8' : '#64748b';
  const tooltipBg = dark ? 'rgba(15,23,42,0.96)' : 'rgba(15,23,42,0.9)';
  const tooltipBorder = dark ? '#334155' : '#e2e8f0';
  const pieBorder = dark ? '#0f172a' : '#ffffff';

  const applyTooltipTheme = chart => {
    if (!chart || !chart.options || !chart.options.plugins || !chart.options.plugins.tooltip) return;
    chart.options.plugins.tooltip.backgroundColor = tooltipBg;
    chart.options.plugins.tooltip.titleColor = '#f8fafc';
    chart.options.plugins.tooltip.bodyColor = '#f8fafc';
    chart.options.plugins.tooltip.borderColor = tooltipBorder;
    chart.options.plugins.tooltip.borderWidth = 1;
  };

  if (charts.networth) {
    charts.networth.options.scales.y.grid.color = gridColor;
    charts.networth.options.scales.y.ticks.color = mutedTextColor;
    charts.networth.options.scales.x.ticks.color = mutedTextColor;
    charts.networth.data.datasets[0].pointBorderColor = pieBorder;
    applyTooltipTheme(charts.networth);
    charts.networth.update('none');
  }

  if (charts.spending) {
    charts.spending.options.scales.x.grid.color = gridColor;
    charts.spending.options.scales.x.ticks.color = mutedTextColor;
    charts.spending.options.scales.y.ticks.color = axisTextColor;
    applyTooltipTheme(charts.spending);
    charts.spending.update('none');
  }

  if (charts.spendingPie) {
    charts.spendingPie.data.datasets[0].borderColor = pieBorder;
    charts.spendingPie.options.plugins.legend.labels.color = mutedTextColor;
    applyTooltipTheme(charts.spendingPie);
    charts.spendingPie.update('none');
  }

  if (charts.wealthPie) {
    charts.wealthPie.data.datasets[0].borderColor = pieBorder;
    applyTooltipTheme(charts.wealthPie);
    charts.wealthPie.update('none');
  }

  if (charts.allocation) {
    charts.allocation.data.datasets[0].borderColor = pieBorder;
    applyTooltipTheme(charts.allocation);
    charts.allocation.update('none');
  }

  if (charts.perf) {
    charts.perf.options.scales.y.grid.color = gridColor;
    charts.perf.options.scales.y.ticks.color = mutedTextColor;
    charts.perf.options.scales.x.ticks.color = mutedTextColor;
    applyTooltipTheme(charts.perf);
    charts.perf.update('none');
  }

  if (charts.yearly) {
    charts.yearly.options.scales.y.grid.color = gridColor;
    charts.yearly.options.scales.y.ticks.color = mutedTextColor;
    charts.yearly.options.scales.x.ticks.color = mutedTextColor;
    applyTooltipTheme(charts.yearly);
    charts.yearly.update('none');
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
const FALLBACK_RATES = {
  EUR: 1,       USD: 1.08,    GBP: 0.85,    CHF: 0.95,
  SEK: 11.20,   NOK: 11.55,   DKK: 7.46,    PLN: 4.28,
  CZK: 25.10,   HUF: 388.0,   RON: 4.97,    RSD: 117.2,
  TRY: 34.90,   CAD: 1.47,    AUD: 1.65,    NZD: 1.78,
  JPY: 161.5,   CNY: 7.82,    HKD: 8.42,    SGD: 1.45,
  INR: 90.20,   AED: 3.97,    SAR: 4.05,    ZAR: 20.30,
  BRL: 5.48,    MXN: 18.60,
};
let RATES = { ...FALLBACK_RATES };

const FX_CACHE_KEY    = 'opvion-fx-rates-v1';
const FX_CACHE_TTL_MS = 12 * 60 * 60 * 1000;        // 12 hours
const FX_ENDPOINT     = 'https://open.er-api.com/v6/latest/EUR';

function applyFreshRates(fresh) {
  const merged = { ...FALLBACK_RATES };
  Object.keys(FALLBACK_RATES).forEach(code => {
    if (typeof fresh[code] === 'number' && isFinite(fresh[code]) && fresh[code] > 0) {
      merged[code] = fresh[code];
    }
  });
  merged.EUR = 1;
  RATES = merged;
}

async function loadExchangeRates() {
  // 1. Serve from cache when fresh
  try {
    const raw = localStorage.getItem(FX_CACHE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.rates && parsed.timestamp
          && (Date.now() - parsed.timestamp) < FX_CACHE_TTL_MS) {
        applyFreshRates(parsed.rates);
        return { source: 'cache', asOf: parsed.asOf || null };
      }
    }
  } catch { /* ignore bad cache */ }

  // 2. Fetch live rates
  try {
    const resp = await fetch(FX_ENDPOINT);
    if (!resp.ok) throw new Error('fx fetch status ' + resp.status);
    const data = await resp.json();
    if (!data || data.result === 'error' || !data.rates) throw new Error('fx payload invalid');

    applyFreshRates(data.rates);
    try {
      localStorage.setItem(FX_CACHE_KEY, JSON.stringify({
        timestamp: Date.now(),
        asOf:      data.time_last_update_utc || null,
        rates:     data.rates,
      }));
    } catch { /* quota / private mode — OK to skip */ }
    return { source: 'live', asOf: data.time_last_update_utc || null };
  } catch {
    // Fall back silently — hardcoded RATES stay in effect
    return { source: 'fallback', asOf: null };
  }
}
const SYMBOLS = {
  EUR: '€',     USD: '$',     GBP: '£',     CHF: 'Fr',
  SEK: 'kr',    NOK: 'kr',    DKK: 'kr',    PLN: 'zł',
  CZK: 'Kč',   HUF: 'Ft',    RON: 'lei',   RSD: 'din',
  TRY: '₺',     CAD: '$',     AUD: '$',     NZD: '$',
  JPY: '¥',     CNY: '¥',     HKD: '$',     SGD: '$',
  INR: '₹',     AED: 'د.إ',   SAR: '﷼',    ZAR: 'R',
  BRL: 'R$',    MXN: '$',
};
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
  bank_account:       '🏦',
  investment_account: '📈',
  crypto_account:     '₿',
  real_estate:        '🏠',
  vehicle:            '🚗',
};

function getAccountById(accountId) {
  return MOCK.accounts.find(acc => acc.id === accountId) || null;
}

function getAccountLabel(accountId) {
  const account = getAccountById(accountId);
  if (!account) return 'Unknown account';
  return account.institution + ' - ' + account.name;
}

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

  updateChartTheme();
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
  renderSpendingPieSide();
}

const SPENDING_PERIOD_LABEL = {
  day:   'Today',
  week:  'This week',
  month: 'This month',
  year:  'This year',
  max:   'All time',
};

function renderSpendingPieSide() {
  const legendEl = document.getElementById('spendingPieLegend');
  if (!legendEl) return;

  const data = getSpendingData();
  const totalEur = data.reduce((s, c) => s + c.amount, 0);
  const denom = totalEur || 1;

  legendEl.innerHTML = data.map(c => {
    const pct = ((c.amount / denom) * 100).toFixed(1);
    return `
      <div class="breakdown-row">
        <span class="dot" style="background:${c.color}"></span>
        <span class="sp-name">${c.name}</span>
        <span class="sp-amount ml-auto" data-eur="${c.amount}">${fmt(c.amount, { noDecimals: true })}</span>
        <span class="sp-pct">${pct}%</span>
      </div>
    `;
  }).join('');

  const totalEl = document.getElementById('pieTotalSpend');
  const totalSubEl = document.getElementById('pieTotalSpendSub');
  const topEl = document.getElementById('pieTopCat');
  const topSubEl = document.getElementById('pieTopCatSub');
  if (totalEl) totalEl.textContent = fmt(totalEur, { noDecimals: true });
  if (totalSubEl) totalSubEl.textContent = SPENDING_PERIOD_LABEL[spendingPeriod] || '';

  const top = data[0];
  if (top && topEl && topSubEl) {
    const topPct = ((top.amount / denom) * 100).toFixed(1);
    topEl.textContent = top.name;
    topSubEl.textContent = `${fmt(top.amount, { noDecimals: true })} · ${topPct}%`;
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
  document.getElementById('spendingPieWrap').style.display = view === 'pie' ? 'grid' : 'none';
  if (view === 'pie') {
    initSpendingPieChart();
    renderSpendingPieSide();
    // Chart.js needs a resize hint after the panel becomes visible
    setTimeout(() => { if (charts.spendingPie) charts.spendingPie.resize(); }, 60);
  }
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

  renderSpendingPieSide();
  updateChartTheme();
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

  updateChartTheme();
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

  updateChartTheme();
}

let activeProvider = 'aggregated';
let perfPeriod     = '1Y';

function getActiveAllocation() {
  return MOCK.providerAllocations[activeProvider] || MOCK.portfolioAllocation;
}

function initAllocationChart() {
  const ctx = document.getElementById('allocationChart');
  if (!ctx) return;
  const data = getActiveAllocation();

  if (charts.allocation) {
    charts.allocation.data.labels = data.map(a => a.name);
    charts.allocation.data.datasets[0].data = data.map(a => a.value * RATES[currency]);
    charts.allocation.data.datasets[0].backgroundColor = data.map(a => a.color);
    charts.allocation.update('none');
    renderAllocationLegend();
    updateChartTheme();
    return;
  }

  charts.allocation = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: data.map(a => a.name),
      datasets: [{
        data: data.map(a => a.value * RATES[currency]),
        backgroundColor: data.map(a => a.color),
        borderColor: '#ffffff',
        borderWidth: 2,
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
              const total = ctx.dataset.data.reduce((a, b) => a + b, 0) || 1;
              const pct   = ((ctx.raw / total) * 100).toFixed(1);
              return '  ' + fmt(ctx.raw / RATES[currency]) + '  (' + pct + '%)';
            },
          },
        },
      },
    },
  });

  renderAllocationLegend();
  updateChartTheme();
}

function renderAllocationLegend() {
  const el = document.getElementById('allocationLegend');
  if (!el) return;
  const data = getActiveAllocation();
  const totalEur = data.reduce((s, a) => s + a.value, 0);
  const denom = totalEur || 1;

  el.innerHTML = data.map(a => {
    const pct = ((a.value / denom) * 100).toFixed(1);
    return `
      <div class="breakdown-row allocation-row">
        <span class="dot" style="background:${a.color}"></span>
        <span class="al-name">${a.name}</span>
        <span class="al-amount ml-auto" data-eur="${a.value}">${fmt(a.value, { noDecimals: true })}</span>
        <span class="al-pct">${pct}%</span>
      </div>
    `;
  }).join('');

  const topName = document.getElementById('allocTopName');
  const topSub  = document.getElementById('allocTopSub');
  const totalValue = document.getElementById('allocTotalValue');
  const totalValueSub = document.getElementById('allocTotalValueSub');
  const count   = document.getElementById('allocCount');
  const conc    = document.getElementById('allocConcentration');
  const diversification = document.getElementById('allocDiversification');
  const diversificationSub = document.getElementById('allocDiversificationSub');
  const insightPill = document.getElementById('allocInsightPill');
  const insightTitle = document.getElementById('allocInsightTitle');
  const insightText = document.getElementById('allocInsightText');

  const top = [...data].sort((a, b) => b.value - a.value)[0];
  const second = [...data].sort((a, b) => b.value - a.value)[1];
  const topPctValue = top ? (top.value / denom) * 100 : 0;
  const secondPctValue = second ? (second.value / denom) * 100 : 0;
  const concentrationRatio = data.reduce((sum, item) => {
    const weight = item.value / denom;
    return sum + (weight * weight);
  }, 0);
  const effectiveCount = concentrationRatio > 0 ? 1 / concentrationRatio : 0;

  if (totalValue) totalValue.textContent = fmt(totalEur, { noDecimals: true });
  if (totalValueSub) {
    totalValueSub.textContent = activeProvider === 'aggregated'
      ? 'Across all connected providers'
      : `${activeProvider.charAt(0).toUpperCase()}${activeProvider.slice(1)} account`;
  }

  if (top && topName && topSub) {
    const topPct = topPctValue.toFixed(1);
    topName.textContent = top.name;
    topSub.textContent  = `${fmt(top.value, { noDecimals: true })} · ${topPct}%`;
  } else if (topName) {
    topName.textContent = '—';
    topSub.textContent  = '—';
  }

  if (count) count.textContent = String(data.length);
  if (conc && top) {
    const topTwoPct = (topPctValue + secondPctValue).toFixed(1);
    conc.textContent = `Top 2 weights: ${topTwoPct}%`;
  } else if (conc) {
    conc.textContent = '—';
  }

  if (diversification) diversification.textContent = effectiveCount ? effectiveCount.toFixed(1) : '—';
  if (diversificationSub) {
    diversificationSub.textContent = effectiveCount >= 3.5
      ? 'Well spread across sleeves'
      : effectiveCount >= 2
        ? 'Moderately concentrated'
        : 'Highly concentrated';
  }

  if (insightPill && insightTitle && insightText) {
    let profile = 'Balanced';
    let title = 'Balanced allocation mix';
    let text = 'No single sleeve dominates the portfolio, leaving room for multiple return drivers.';

    if (topPctValue >= 70) {
      profile = 'Concentrated';
      title = `${top.name} drives most of the portfolio`;
      text = `${top.name} accounts for ${topPctValue.toFixed(1)}% of the current mix, so portfolio moves will largely track that sleeve.`;
    } else if (topPctValue >= 50) {
      profile = 'Tilted';
      title = `${top.name} is the main portfolio bet`;
      text = `${top.name} is the largest sleeve at ${topPctValue.toFixed(1)}%, with the rest of the allocation acting as supporting diversification.`;
    } else if (second && (topPctValue + secondPctValue) >= 75) {
      profile = 'Barbell';
      title = `${top.name} and ${second.name} dominate the mix`;
      text = `The top two sleeves combine for ${(topPctValue + secondPctValue).toFixed(1)}% of the portfolio, so diversification mostly comes from the remaining smaller sleeves.`;
    }

    insightPill.textContent = profile;
    insightTitle.textContent = title;
    insightText.textContent = text;
  }
}

function setActiveProvider(provider) {
  activeProvider = provider;
  document.querySelectorAll('#providerTabs .provider-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.provider === provider);
  });
  initAllocationChart();
  renderPortfolioSummary();
  initPerfChart();
  renderPositions();
}

// ── Asset cards (aggregated-only summary)
function renderAssetCards() {
  const el = document.getElementById('assetCardsGrid');
  if (!el) return;
  const data = MOCK.portfolioAllocation;
  const total = data.reduce((s, a) => s + a.value, 0) || 1;
  el.innerHTML = data.map(a => {
    const pct = ((a.value / total) * 100).toFixed(1);
    return `
      <div class="card asset-card">
        <div class="asset-card-name">${a.name}</div>
        <div class="asset-card-value" data-eur="${a.value}">${fmt(a.value, { noDecimals: true })}</div>
        <div class="asset-card-pct">${pct}% of portfolio</div>
      </div>
    `;
  }).join('');
}

// ── Portfolio summary header (Total Value / Day Gain / Total Return)
function getProviderSummary(provider) {
  if (provider === 'aggregated' || !MOCK.providerAllocations[provider]) {
    return MOCK.portfolioSummary;
  }
  const total = providerCurrentValue(provider);
  const rng  = seededRand(providerSeed(provider));
  const dayPct = (rng() * 2 - 1) * 3.5;            // -3.5% .. +3.5%
  const totalPct = 4 + rng() * 22 - (provider === 'nexo' ? 2 : 0);
  const dayGain = Math.round(total * dayPct / 100);
  const totalGain = Math.round(total * totalPct / (100 + totalPct));
  return {
    totalValue: total,
    dayGain,
    dayGainPct: dayPct,
    totalGain,
    totalGainPct: totalPct,
  };
}

function renderPortfolioSummary() {
  const s  = getProviderSummary(activeProvider);
  const tv = document.getElementById('psTotalValue');
  const dg = document.getElementById('psDayGain');
  const tr = document.getElementById('psTotalReturn');
  const dgPct = document.getElementById('psDayGainPct');
  const trPct = document.getElementById('psTotalReturnPct');
  if (!tv || !dg || !tr || !dgPct || !trPct) return;

  tv.textContent = fmt(s.totalValue, { noDecimals: true });

  const dgPos = s.dayGain >= 0;
  dg.className = 'stat-big ' + (dgPos ? 'is-positive' : 'is-negative');
  dg.textContent = (dgPos ? '+' : '') + fmt(s.dayGain, { noDecimals: true });
  dgPct.textContent = `${dgPos ? '+' : ''}${s.dayGainPct.toFixed(2)}% today`;

  const trPos = s.totalGain >= 0;
  tr.className = 'stat-big ' + (trPos ? 'is-positive' : 'is-negative');
  tr.textContent = (trPos ? '+' : '') + fmt(s.totalGain, { noDecimals: true });
  trPct.textContent = `${trPos ? '+' : ''}${s.totalGainPct.toFixed(2)}% all time`;
}

// ── Performance chart (line) with time-period selector
function seededRand(seed) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
}

function providerCurrentValue(provider) {
  if (provider === 'aggregated' || !MOCK.providerAllocations[provider]) {
    return MOCK.portfolioSummary.totalValue;
  }
  return MOCK.providerAllocations[provider].reduce((sum, a) => sum + a.value, 0);
}

function providerSeed(provider) {
  let h = 0;
  for (let i = 0; i < provider.length; i++) h = (h * 31 + provider.charCodeAt(i)) & 0xffffffff;
  return (h >>> 0) || 1;
}

function generatePerfSeries(period, provider = 'aggregated') {
  const cfg = {
    '1W':  { points: 7,  stepDays: 1,   label: d => d.toLocaleDateString('en-US', { weekday: 'short' }) },
    '1M':  { points: 30, stepDays: 1,   label: d => (d.getDate() + '/' + (d.getMonth() + 1)) },
    '3M':  { points: 13, stepDays: 7,   label: d => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) },
    '6M':  { points: 26, stepDays: 7,   label: d => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) },
    '1Y':  { points: 12, stepDays: 30,  label: d => d.toLocaleDateString('en-US', { month: 'short' }) },
    'All': { points: 5,  stepDays: 365, label: d => String(d.getFullYear()) },
  }[period];

  const rng   = seededRand(period.charCodeAt(0) * 31337 + providerSeed(provider));
  const rand  = () => rng() * 2 - 1;
  const now   = new Date();
  const start = now.getTime() - cfg.stepDays * 86400000 * (cfg.points - 1);
  const endVal = providerCurrentValue(provider);
  const periodScale = period === 'All' ? 0.55 : period === '1W' ? 0.99 : period === '1M' ? 0.97 : period === '3M' ? 0.93 : period === '6M' ? 0.88 : 0.82;
  const base  = Math.max(endVal * periodScale, 100);
  const perProviderAmp = provider === 'nexo' || provider === 'phantom' ? 1.4 : provider === 'binance' || provider === 'coinbase' ? 1.2 : 1;
  const amp   = (period === '1W' ? 0.008 : period === '1M' ? 0.015 : 0.035) * perProviderAmp;

  let value = base;
  const labels = [];
  const values = [];
  for (let i = 0; i < cfg.points; i++) {
    const d = new Date(start + i * cfg.stepDays * 86400000);
    value = value * (1 + rand() * amp);
    labels.push(cfg.label(d));
    values.push(Math.round(value));
  }
  return { labels, values };
}

function updatePerfChangeLabel(values) {
  const el = document.getElementById('perfChange');
  if (!el || !values.length) return;
  const change = values[values.length - 1] - values[0];
  const pct    = values[0] > 0 ? (change / values[0]) * 100 : 0;
  const pos    = change >= 0;
  el.className = 'perf-change ' + (pos ? 'is-positive' : 'is-negative');
  el.textContent = (pos ? '+' : '') + fmt(change, { noDecimals: true })
    + ` (${pos ? '+' : ''}${pct.toFixed(2)}%)`;
}

function initPerfChart() {
  const ctx = document.getElementById('perfChart');
  if (!ctx) return;
  const { labels, values } = generatePerfSeries(perfPeriod, activeProvider);
  const isPositive = values[values.length - 1] >= values[0];
  const stroke     = isPositive ? '#10b981' : '#ef4444';
  const fillColor  = isPositive ? 'rgba(16,185,129,0.12)' : 'rgba(239,68,68,0.12)';
  const startVal   = values[0] * RATES[currency];
  const baseline   = labels.map(() => startVal);

  if (charts.perf) {
    charts.perf.data.labels = labels;
    charts.perf.data.datasets[0].data = values.map(v => v * RATES[currency]);
    charts.perf.data.datasets[0].borderColor = stroke;
    charts.perf.data.datasets[0].backgroundColor = fillColor;
    if (charts.perf.data.datasets[1]) {
      charts.perf.data.datasets[1].data = baseline;
    }
    charts.perf.options.scales.y.ticks.callback = v => SYMBOLS[currency] + (v / 1000).toFixed(0) + 'k';
    charts.perf.update('none');
    updatePerfChangeLabel(values);
    return;
  }

  charts.perf = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'Value',
          data: values.map(v => v * RATES[currency]),
          borderColor: stroke,
          backgroundColor: fillColor,
          fill: true,
          tension: 0.35,
          pointRadius: 0,
          pointHoverRadius: 5,
          borderWidth: 2,
          order: 1,
        },
        {
          label: 'Starting value',
          data: baseline,
          borderColor: 'rgba(100, 116, 139, 0.7)',
          borderDash: [5, 5],
          borderWidth: 1.5,
          fill: false,
          pointRadius: 0,
          pointHoverRadius: 0,
          tension: 0,
          order: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { display: false },
        tooltip: {
          filter: item => item.datasetIndex === 0,
          callbacks: {
            label: ctx => '  ' + fmt(ctx.raw / RATES[currency], { noDecimals: true }),
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
          ticks: { color: '#94a3b8', maxTicksLimit: 8 },
        },
      },
    },
  });

  updatePerfChangeLabel(values);
  updateChartTheme();
}

function setPerfPeriod(period) {
  perfPeriod = period;
  document.querySelectorAll('#perfPeriodToggle .filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.period === period);
  });
  initPerfChart();
}

// ── Annual returns bar chart
function initYearlyReturnsChart() {
  if (charts.yearly) return;
  const ctx = document.getElementById('yearlyReturnsChart');
  if (!ctx) return;

  charts.yearly = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: MOCK.yearlyReturns.map(r => r.year),
      datasets: [{
        data: MOCK.yearlyReturns.map(r => r.value),
        backgroundColor: MOCK.yearlyReturns.map(r => r.value >= 0 ? '#10b981' : '#ef4444'),
        borderRadius: 4,
        borderSkipped: false,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => '  ' + (ctx.raw >= 0 ? '+' : '') + ctx.raw.toFixed(1) + '%',
          },
        },
      },
      scales: {
        y: {
          grid: { color: '#f1f5f9' },
          border: { display: false },
          ticks: {
            color: '#94a3b8',
            callback: v => v + '%',
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

  updateChartTheme();
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
    const data = getActiveAllocation();
    charts.allocation.data.datasets[0].data = data.map(a => a.value * RATES[currency]);
    charts.allocation.update('none');
  }
  if (charts.perf) {
    const { values } = generatePerfSeries(perfPeriod, activeProvider);
    charts.perf.data.datasets[0].data = values.map(v => v * RATES[currency]);
    charts.perf.options.scales.y.ticks.callback = v => SYMBOLS[currency] + (v / 1000).toFixed(0) + 'k';
    charts.perf.update('none');
    updatePerfChangeLabel(values);
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
  const CATEGORIES = [
    { key: 'bank_account',       label: 'Bank Account' },
    { key: 'investment_account', label: 'Investment Account' },
    { key: 'crypto_account',     label: 'Crypto Account' },
    { key: 'real_estate',        label: 'Real Estate' },
    { key: 'vehicle',            label: 'Vehicle' },
  ];
  el.innerHTML = CATEGORIES.map(cat => {
    const accounts = MOCK.accounts.filter(acc => (acc.categories || []).includes(cat.key));
    if (!accounts.length) return '';
    return `
      <div class="accounts-category">
        <div class="accounts-category-label">${cat.label}</div>
        ${accounts.map(acc => {
          const neg = acc.balance < 0;
          return `
            <div class="account-row">
              <div class="account-inst">${acc.institution}</div>
              <div class="account-balance ${neg ? 'negative' : ''}" data-eur="${acc.balance}">
                ${fmt(acc.balance)}
              </div>
            </div>
          `;
        }).join('')}
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
    const accountLabel = getAccountById(tx.accountId)?.institution || 'Unknown';
    const recurringBadge = tx.isRecurring ? '<span class="recurring-badge">↻ Recurring</span>' : '';
    return `
      <div class="tx-row">
        <div class="tx-emoji">${CAT_EMOJI[tx.category] || '📦'}</div>
        <div style="flex:1;min-width:0">
          <div class="tx-name">${tx.name}</div>
          <div class="tx-meta">${dateStr} &middot; ${tx.category} &middot; ${accountLabel} ${recurringBadge}</div>
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
let txColAccounts   = [];     // [] = all; else restricted list
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

  } else if (col === 'account') {
    const allAccounts = [...new Set(MOCK.transactions.map(t => t.accountId))]
      .map(id => ({ id, label: getAccountLabel(id) }))
      .sort((a, b) => a.label.localeCompare(b.label));
    const allChecked = txColAccounts.length === 0;
    const rows = allAccounts.map(acc => {
      const chk = allChecked || txColAccounts.includes(acc.id) ? 'checked' : '';
      return `<label class="col-check-row"><input type="checkbox" value="${acc.id}" ${chk}><span>${acc.label}</span></label>`;
    }).join('');
    el.innerHTML = `
      <div class="col-dropdown-title">Filter by account</div>
      <label class="col-check-row col-check-all" id="caAll">
        <input type="checkbox" id="caAllChk" ${allChecked ? 'checked' : ''}><span>All</span>
      </label>
      <div class="col-check-divider"></div>
      <div class="col-dropdown-check-list" id="caList">${rows}</div>
      <div class="col-dd-actions">
        <button class="col-dd-clear" id="caClear">Clear</button>
        <button class="col-dd-apply" id="caApply">Apply</button>
      </div>`;
    const caAllChk = el.querySelector('#caAllChk');
    const caList   = el.querySelector('#caList');
    caAllChk.addEventListener('change', () => {
      caList.querySelectorAll('input').forEach(i => { i.checked = caAllChk.checked; });
    });
    caList.addEventListener('change', () => {
      const total   = caList.querySelectorAll('input').length;
      const checked = caList.querySelectorAll('input:checked').length;
      caAllChk.checked       = checked === total;
      caAllChk.indeterminate = checked > 0 && checked < total;
    });
    el.querySelector('#caApply').addEventListener('click', () => {
      const sel = [...el.querySelectorAll('#caList input:checked')].map(i => i.value);
      txColAccounts = sel.length === allAccounts.length ? [] : sel;
      closeColDropdown(); renderTxTable();
    });
    el.querySelector('#caClear').addEventListener('click', () => {
      txColAccounts = [];
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
  if (txColAccounts.length > 0) {
    filtered = filtered.filter(t => txColAccounts.includes(t.accountId));
  }

  let rowsHtml = '';
  if (!filtered.length) {
    rowsHtml = '<tr><td colspan="6" style="padding: 24px; text-align: center; color: #64748b;">No transactions match your filters.</td></tr>';
  } else {
    rowsHtml = filtered.map(tx => {
      const income  = tx.amount > 0;
      const prefix  = income ? '+' : '';
      const amtCls  = income ? 'income-amt' : 'expense-amt';
      const dateStr = new Date(tx.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      const cc      = CAT_COLORS[tx.category] || CAT_COLORS['Other'];
      const account = getAccountById(tx.accountId);
      const accountInstitution = account ? account.institution : 'Unknown';
      const accountName = account ? account.name : 'Unknown account';
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
          <td>
            <span class="account-pill">${accountInstitution}</span>
            <div class="account-pill-sub">${accountName}</div>
          </td>
          <td>${tx.merchant}</td>
          <td class="text-right ${amtCls}" data-eur="${tx.amount}">
            ${prefix}${fmt(tx.amount)}
          </td>
        </tr>
      `;
    }).join('');
  }

  const dateAct = (txColDateFrom || txColDateTo) ? ' th-filter--active' : '';
  const catAct  = txColCategories.length > 0     ? ' th-filter--active' : '';
  const mchAct  = txColMerchants.length > 0      ? ' th-filter--active' : '';
  const accAct  = txColAccounts.length > 0       ? ' th-filter--active' : '';

  wrap.innerHTML = `
    <table class="tx-table">
      <thead>
        <tr>
          <th class="th-filter${dateAct}" id="thDate">Date <span class="th-chevron">▾</span></th>
          <th>Transaction</th>
          <th class="th-filter${catAct}"  id="thCat">Category <span class="th-chevron">▾</span></th>
          <th class="th-filter${accAct}"  id="thAccount">Account <span class="th-chevron">▾</span></th>
          <th class="th-filter${mchAct}"  id="thMerchant">Merchant <span class="th-chevron">▾</span></th>
          <th class="text-right">Amount</th>
        </tr>
      </thead>
      <tbody>${rowsHtml}</tbody>
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
  document.getElementById('thAccount').addEventListener('click', e => {
    e.stopPropagation();
    openColDropdown('account', e.currentTarget);
  });
}

function setCategoryFilter(filterValue) {
  closeColDropdown(); txFilter = filterValue;
  document.querySelectorAll('#txFilters .filter-btn[data-filter]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === filterValue);
  });
  renderTxTable();
}

// ════════════════════════════════════════════════════════
//  RENDER — INVESTMENT POSITIONS
// ════════════════════════════════════════════════════════
const ASSET_TYPE_ICON = {
  stock:       '📈',
  etf:         '📊',
  crypto:      '₿',
  bond:        '📜',
  cash:        '💶',
  real_estate: '🏠',
  commodity:   '🧱',
};

const ASSET_TYPE_LABEL = {
  stock:       'Stock',
  etf:         'ETF',
  crypto:      'Crypto',
  bond:        'Bond',
  cash:        'Cash',
  real_estate: 'Real Estate',
  commodity:   'Commodity',
};

const ASSET_TYPE_BADGE = {
  stock:       { bg: '#dbeafe', text: '#1d4ed8' },
  etf:         { bg: '#e0e7ff', text: '#3730a3' },
  crypto:      { bg: '#fef3c7', text: '#92400e' },
  bond:        { bg: '#f1f5f9', text: '#475569' },
  cash:        { bg: '#d1fae5', text: '#065f46' },
  real_estate: { bg: '#fce7f3', text: '#be123c' },
  commodity:   { bg: '#fff7ed', text: '#c2410c' },
};

const PROVIDER_LABEL = {
  nexo:          'Nexo',
  phantom:       'Phantom',
  lightyear:     'Lightyear',
  binance:       'Binance',
  coinbase:      'Coinbase',
  ibkr:          'IBKR',
  traderepublic: 'Trade Republic',
  sparkasse:     'Sparkasse',
  real_estate:   'Real Estate',
  fidelity:      'Fidelity',
};

let posFilter       = 'all';
let posColTypes     = [];
let posColProviders = [];

// Positions table column definitions. `posColumnOrder` controls the visible
// order and is mutated by drag-and-drop on the table headers.
const POS_COLUMN_DEFS = {
  asset: {
    label: 'Asset',
    align: 'left',
    cell: (pos) => {
      const icon = ASSET_TYPE_ICON[pos.assetType] || '💰';
      return `
        <div class="pos-asset-cell">
          <div class="pos-icon">${icon}</div>
          <div>
            <div class="ticker">${pos.ticker}</div>
            <div class="pos-name">${pos.name}</div>
          </div>
        </div>`;
    },
  },
  type: {
    label: 'Type',
    align: 'left',
    filter: 'type',
    cell: (pos) => {
      const badge = ASSET_TYPE_BADGE[pos.assetType] || ASSET_TYPE_BADGE.bond;
      return `<span class="cat-badge" style="background:${badge.bg};color:${badge.text}">${ASSET_TYPE_LABEL[pos.assetType] || pos.assetType}</span>`;
    },
  },
  provider: {
    label: 'Provider',
    align: 'left',
    filter: 'provider',
    cell: (pos) => `<span class="account-pill">${PROVIDER_LABEL[pos.provider] || pos.provider}</span>`,
  },
  value: {
    label: 'Value',
    align: 'right',
    cell: (pos) => `<span data-eur="${pos.value}"><strong>${fmt(pos.value, { noDecimals: true })}</strong></span>`,
  },
  pnl: {
    label: 'P&amp;L',
    align: 'right',
    cell: (pos) => {
      const gain   = pos.pnl >= 0;
      const cls    = gain ? 'pnl-pos' : 'pnl-neg';
      const prefix = gain ? '+' : '';
      const cost   = pos.value - pos.pnl;
      const pct    = cost > 0 ? ((pos.pnl / cost) * 100).toFixed(1) : '0.0';
      return `<span class="${cls}" data-eur="${pos.pnl}">${prefix}${fmt(pos.pnl, { noDecimals: true })}</span><div class="pos-name">${prefix}${pct}%</div>`;
    },
  },
  currentPrice: {
    label: 'Current Price',
    align: 'right',
    cell: (pos) => `<span data-eur="${pos.currentPrice}">${fmt(pos.currentPrice)}</span>`,
  },
  qty: {
    label: 'Qty',
    align: 'right',
    cell: (pos) => pos.qty.toLocaleString('en-US', { maximumFractionDigits: 4 }),
  },
  buyPrice: {
    label: 'Buy Price',
    align: 'right',
    cell: (pos) => `<span data-eur="${pos.buyPrice}">${fmt(pos.buyPrice)}</span>`,
  },
  day: {
    label: 'Day',
    align: 'right',
    cell: (pos) => {
      const dayPos = (pos.dayChangePct ?? 0) >= 0;
      const dayCls = dayPos ? 'is-positive' : 'is-negative';
      return `<span class="day-pill ${dayCls}">${dayPos ? '+' : ''}${(pos.dayChangePct ?? 0).toFixed(2)}%</span>`;
    },
  },
};

let posColumnOrder = ['asset', 'type', 'provider', 'value', 'pnl', 'currentPrice', 'qty', 'buyPrice', 'day'];
let _posDragColId = null;

function openPosColDropdown(col, thEl) {
  if (_openColDrop) {
    const same = _openColDrop.col === 'pos-' + col;
    closeColDropdown();
    if (same) return;
  }
  const rect = thEl.getBoundingClientRect();
  const el = document.createElement('div');
  el.className = 'col-dropdown';
  el.addEventListener('click', e => e.stopPropagation());

  if (col === 'type') {
    const allTypes = [...new Set(MOCK.investmentPositions.map(p => p.assetType))].sort();
    const allChecked = posColTypes.length === 0;
    const rows = allTypes.map(t => {
      const chk = allChecked || posColTypes.includes(t) ? 'checked' : '';
      return `<label class="col-check-row"><input type="checkbox" value="${t}" ${chk}><span>${ASSET_TYPE_LABEL[t] || t}</span></label>`;
    }).join('');
    el.innerHTML = `
      <div class="col-dropdown-title">Filter by type</div>
      <label class="col-check-row col-check-all"><input type="checkbox" id="ptAllChk" ${allChecked ? 'checked' : ''}><span>All</span></label>
      <div class="col-check-divider"></div>
      <div class="col-dropdown-check-list" id="ptList">${rows}</div>
      <div class="col-dd-actions">
        <button class="col-dd-clear" id="ptClear">Clear</button>
        <button class="col-dd-apply" id="ptApply">Apply</button>
      </div>`;
    const allChk = el.querySelector('#ptAllChk');
    const list   = el.querySelector('#ptList');
    allChk.addEventListener('change', () => { list.querySelectorAll('input').forEach(i => i.checked = allChk.checked); });
    list.addEventListener('change', () => {
      const total   = list.querySelectorAll('input').length;
      const checked = list.querySelectorAll('input:checked').length;
      allChk.checked = checked === total;
      allChk.indeterminate = checked > 0 && checked < total;
    });
    el.querySelector('#ptApply').addEventListener('click', () => {
      const sel = [...el.querySelectorAll('#ptList input:checked')].map(i => i.value);
      posColTypes = sel.length === allTypes.length ? [] : sel;
      closeColDropdown(); renderPositions();
    });
    el.querySelector('#ptClear').addEventListener('click', () => {
      posColTypes = []; closeColDropdown(); renderPositions();
    });
  } else if (col === 'provider') {
    const allProviders = [...new Set(MOCK.investmentPositions.map(p => p.provider))].sort();
    const allChecked = posColProviders.length === 0;
    const rows = allProviders.map(p => {
      const chk = allChecked || posColProviders.includes(p) ? 'checked' : '';
      return `<label class="col-check-row"><input type="checkbox" value="${p}" ${chk}><span>${PROVIDER_LABEL[p] || p}</span></label>`;
    }).join('');
    el.innerHTML = `
      <div class="col-dropdown-title">Filter by provider</div>
      <label class="col-check-row col-check-all"><input type="checkbox" id="ppAllChk" ${allChecked ? 'checked' : ''}><span>All</span></label>
      <div class="col-check-divider"></div>
      <div class="col-dropdown-check-list" id="ppList">${rows}</div>
      <div class="col-dd-actions">
        <button class="col-dd-clear" id="ppClear">Clear</button>
        <button class="col-dd-apply" id="ppApply">Apply</button>
      </div>`;
    const allChk = el.querySelector('#ppAllChk');
    const list   = el.querySelector('#ppList');
    allChk.addEventListener('change', () => { list.querySelectorAll('input').forEach(i => i.checked = allChk.checked); });
    list.addEventListener('change', () => {
      const total   = list.querySelectorAll('input').length;
      const checked = list.querySelectorAll('input:checked').length;
      allChk.checked = checked === total;
      allChk.indeterminate = checked > 0 && checked < total;
    });
    el.querySelector('#ppApply').addEventListener('click', () => {
      const sel = [...el.querySelectorAll('#ppList input:checked')].map(i => i.value);
      posColProviders = sel.length === allProviders.length ? [] : sel;
      closeColDropdown(); renderPositions();
    });
    el.querySelector('#ppClear').addEventListener('click', () => {
      posColProviders = []; closeColDropdown(); renderPositions();
    });
  }

  el.style.left = Math.min(rect.left, window.innerWidth - 230) + 'px';
  el.style.top  = (rect.bottom + 4) + 'px';
  document.body.appendChild(el);
  _openColDrop = { col: 'pos-' + col, el };
}

function renderPositions() {
  const el = document.getElementById('positionsTable');
  if (!el) return;

  let filtered = MOCK.investmentPositions;
  if (activeProvider !== 'aggregated') {
    filtered = filtered.filter(p => p.provider === activeProvider);
  }
  if (posFilter !== 'all') {
    filtered = filtered.filter(p => p.assetType === posFilter);
  }
  if (posColTypes.length > 0) {
    filtered = filtered.filter(p => posColTypes.includes(p.assetType));
  }
  if (posColProviders.length > 0) {
    filtered = filtered.filter(p => posColProviders.includes(p.provider));
  }

  // Drop any column ids that no longer exist (defensive) and append any new ones.
  posColumnOrder = posColumnOrder.filter(id => POS_COLUMN_DEFS[id]);
  Object.keys(POS_COLUMN_DEFS).forEach(id => {
    if (!posColumnOrder.includes(id)) posColumnOrder.push(id);
  });

  const cols = posColumnOrder.map(id => ({ id, def: POS_COLUMN_DEFS[id] }));

  const headerCells = cols.map(({ id, def }) => {
    const alignClass = def.align === 'right' ? ' text-right' : '';
    let filterClass = '';
    let chevron = '';
    if (def.filter === 'type') {
      filterClass = posColTypes.length > 0 ? ' th-filter th-filter--active' : ' th-filter';
      chevron = ' <span class="th-chevron">▾</span>';
    } else if (def.filter === 'provider') {
      filterClass = posColProviders.length > 0 ? ' th-filter th-filter--active' : ' th-filter';
      chevron = ' <span class="th-chevron">▾</span>';
    }
    return `<th class="pos-th${alignClass}${filterClass}" draggable="true" data-col-id="${id}"><span class="pos-th-grip" aria-hidden="true">⋮⋮</span>${def.label}${chevron}</th>`;
  }).join('');

  let rowsHtml = '';
  if (!filtered.length) {
    rowsHtml = `<tr><td colspan="${cols.length}" style="padding: 24px; text-align: center; color: #64748b;">No positions match your filters.</td></tr>`;
  } else {
    rowsHtml = filtered.map(pos => {
      const cells = cols.map(({ def }) => {
        const alignClass = def.align === 'right' ? ' class="text-right"' : '';
        return `<td${alignClass}>${def.cell(pos)}</td>`;
      }).join('');
      return `<tr>${cells}</tr>`;
    }).join('');
  }

  el.innerHTML = `
    <table class="pos-table">
      <thead>
        <tr>${headerCells}</tr>
      </thead>
      <tbody>${rowsHtml}</tbody>
    </table>
  `;

  el.querySelectorAll('th.pos-th').forEach(th => {
    const id = th.dataset.colId;
    const def = POS_COLUMN_DEFS[id];
    if (def && def.filter) {
      th.addEventListener('click', e => {
        e.stopPropagation();
        openPosColDropdown(def.filter, e.currentTarget);
      });
    }
    th.addEventListener('dragstart', onPosColDragStart);
    th.addEventListener('dragover',  onPosColDragOver);
    th.addEventListener('dragleave', onPosColDragLeave);
    th.addEventListener('drop',      onPosColDrop);
    th.addEventListener('dragend',   onPosColDragEnd);
  });
}

function onPosColDragStart(e) {
  _posDragColId = e.currentTarget.dataset.colId;
  e.currentTarget.classList.add('pos-th-dragging');
  if (e.dataTransfer) {
    e.dataTransfer.effectAllowed = 'move';
    try { e.dataTransfer.setData('text/plain', _posDragColId); } catch {}
  }
  closeColDropdown();
}
function onPosColDragOver(e) {
  if (!_posDragColId) return;
  e.preventDefault();
  if (e.dataTransfer) e.dataTransfer.dropEffect = 'move';
  e.currentTarget.classList.add('pos-th-drop-target');
}
function onPosColDragLeave(e) {
  e.currentTarget.classList.remove('pos-th-drop-target');
}
function onPosColDrop(e) {
  e.preventDefault();
  e.currentTarget.classList.remove('pos-th-drop-target');
  const targetId = e.currentTarget.dataset.colId;
  const sourceId = _posDragColId;
  if (!sourceId || !targetId || sourceId === targetId) return;
  const from = posColumnOrder.indexOf(sourceId);
  const to   = posColumnOrder.indexOf(targetId);
  if (from < 0 || to < 0) return;
  posColumnOrder.splice(from, 1);
  posColumnOrder.splice(to, 0, sourceId);
  renderPositions();
  updateAllCurrencyValues();
}
function onPosColDragEnd() {
  _posDragColId = null;
  document.querySelectorAll('th.pos-th').forEach(th => {
    th.classList.remove('pos-th-dragging');
    th.classList.remove('pos-th-drop-target');
  });
}

function setPositionFilter(filterValue) {
  closeColDropdown();
  posFilter = filterValue;
  document.querySelectorAll('#posFilters .filter-btn[data-filter]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === filterValue);
  });
  renderPositions();
}

function clearAllPositionFilters() {
  closeColDropdown();
  posFilter = 'all';
  posColTypes = [];
  posColProviders = [];
  document.querySelectorAll('#posFilters .filter-btn[data-filter]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === 'all');
  });
  renderPositions();
}

// ════════════════════════════════════════════════════════
//  RENDER — CREDIT & DEBT (portfolio + dashboard tile)
// ════════════════════════════════════════════════════════
let creditFilter = 'all';

const DEBT_TYPE_META = {
  credit_card:   { label: 'Credit Card',   icon: '💳', color: '#dc2626' },
  mortgage:      { label: 'Mortgage',      icon: '🏠', color: '#2563eb' },
  auto_loan:     { label: 'Auto Loan',     icon: '🚗', color: '#ea580c' },
  student_loan:  { label: 'Student Loan',  icon: '🎓', color: '#7c3aed' },
  personal_loan: { label: 'Personal Loan', icon: '💼', color: '#ca8a04' },
};

function buildUnifiedDebts() {
  const cards = (MOCK.creditCards || []).map(c => ({
    id: c.id,
    name: c.name,
    type: c.type,
    lender: c.issuer,
    currentBalance: c.used,
    principal: c.limit,
    interestRate: c.interestRate,
    minimumPayment: c.minimumPayment,
    dueDate: c.dueDate,
    isCard: true,
  }));
  const loans = (MOCK.debts || []).map(d => ({
    id: d.id,
    name: d.name,
    type: d.type,
    lender: d.lender,
    currentBalance: d.currentBalance,
    principal: d.principal,
    interestRate: d.interestRate,
    minimumPayment: d.minimumPayment,
    dueDate: d.dueDate,
    startDate: d.startDate,
    endDate: d.endDate,
    isCard: false,
  }));
  return [...cards, ...loans];
}

function getCreditTotals() {
  const cards = MOCK.creditCards || [];
  const debts = MOCK.debts || [];
  const totalCardUsed   = cards.reduce((s, c) => s + (c.used   || 0), 0);
  const totalCardLimit  = cards.reduce((s, c) => s + (c.limit  || 0), 0);
  const totalLoanBal    = debts.reduce((s, d) => s + (d.currentBalance || 0), 0);
  const totalDebt       = totalCardUsed + totalLoanBal;
  const utilisationPct  = totalCardLimit > 0 ? (totalCardUsed / totalCardLimit) * 100 : 0;
  const minPayment      = cards.reduce((s, c) => s + (c.minimumPayment || 0), 0)
                        + debts.reduce((s, d) => s + (d.minimumPayment || 0), 0);
  const availableCredit = Math.max(0, totalCardLimit - totalCardUsed);
  return {
    totalCardUsed, totalCardLimit, totalLoanBal,
    totalDebt, utilisationPct, minPayment, availableCredit,
    cardCount: cards.length, loanCount: debts.length,
  };
}

function utilisationFillClass(pct) {
  if (pct >= 80) return 'util-high';
  if (pct >= 50) return 'util-med';
  return 'util-low';
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, ch => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[ch]));
}

function renderCreditSection() {
  const t = getCreditTotals();
  const all = buildUnifiedDebts();

  // Summary stats
  const totalDebtEl = document.getElementById('creditTotalDebt');
  if (totalDebtEl) {
    totalDebtEl.dataset.eur = -t.totalDebt;
    totalDebtEl.textContent = fmt(-t.totalDebt, { noDecimals: true });
  }
  const subDebt = document.getElementById('creditTotalDebtSub');
  if (subDebt) subDebt.textContent = `${t.cardCount} card${t.cardCount === 1 ? '' : 's'} · ${t.loanCount} loan${t.loanCount === 1 ? '' : 's'}`;

  const utilEl = document.getElementById('creditUtilValue');
  if (utilEl) utilEl.textContent = t.utilisationPct.toFixed(0) + '%';
  const utilFill = document.getElementById('creditUtilFill');
  if (utilFill) {
    utilFill.style.width = Math.min(t.utilisationPct, 100) + '%';
    utilFill.className = 'credit-util-fill ' + utilisationFillClass(t.utilisationPct);
  }

  const minEl = document.getElementById('creditMinPayment');
  if (minEl) {
    minEl.dataset.eur = t.minPayment;
    minEl.textContent = fmt(t.minPayment, { noDecimals: true });
  }
  const nextDue = [...all]
    .filter(d => d.dueDate)
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))[0];
  const nextDueSub = document.getElementById('creditNextDueSub');
  if (nextDueSub) {
    nextDueSub.textContent = nextDue
      ? `Next due ${new Date(nextDue.dueDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}`
      : '—';
  }

  const availEl = document.getElementById('creditAvailable');
  if (availEl) {
    availEl.dataset.eur = t.availableCredit;
    availEl.textContent = fmt(t.availableCredit, { noDecimals: true });
  }
  const availSub = document.getElementById('creditAvailableSub');
  if (availSub) {
    availSub.textContent = `of ${fmt(t.totalCardLimit, { noDecimals: true })} limit`;
  }

  // Payoff strategies
  const targets = [...all].filter(d => d.currentBalance > 0);
  const avalanche = [...targets].sort((a, b) => (b.interestRate || 0) - (a.interestRate || 0))[0];
  const snowball  = [...targets].sort((a, b) => a.currentBalance - b.currentBalance)[0];
  const av = document.getElementById('payoffAvalancheTarget');
  const sn = document.getElementById('payoffSnowballTarget');
  if (av) av.textContent = avalanche ? `${avalanche.name} (${avalanche.interestRate}% APR)` : '—';
  if (sn) sn.textContent = snowball  ? `${snowball.name} (${fmt(snowball.currentBalance, { noDecimals: true })})` : '—';

  // List
  const filtered = creditFilter === 'all'
    ? all
    : creditFilter === 'credit_cards'
      ? all.filter(d => d.type === 'credit_card')
      : all.filter(d => d.type !== 'credit_card');

  const listEl = document.getElementById('creditList');
  if (listEl) {
    if (!filtered.length) {
      listEl.innerHTML = `<div class="no-results">No items match the current filter.</div>`;
    } else {
      listEl.innerHTML = filtered.map(renderCreditRow).join('');
    }
  }

  // Dashboard tile
  updateDashboardCreditTile(t);
}

function renderCreditRow(d) {
  const meta  = DEBT_TYPE_META[d.type] || { label: d.type, icon: '💰', color: '#64748b' };
  const util  = d.principal > 0 ? (d.currentBalance / d.principal) * 100 : 0;
  const utilCls = utilisationFillClass(util);
  const dueStr  = d.dueDate ? new Date(d.dueDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }) : '—';
  const totalLabel = d.isCard ? 'limit' : 'principal';

  let timeline = '';
  if (d.startDate && d.endDate) {
    const start = new Date(d.startDate).getTime();
    const end   = new Date(d.endDate).getTime();
    const now   = Date.now();
    const pct   = Math.max(0, Math.min(100, ((now - start) / (end - start)) * 100));
    timeline = `
      <div class="credit-timeline">
        <div class="credit-timeline-labels">
          <span>Started ${new Date(d.startDate).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}</span>
          <span>Payoff ${new Date(d.endDate).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}</span>
        </div>
        <div class="credit-timeline-bar">
          <div class="credit-timeline-fill" style="width:${pct.toFixed(1)}%"></div>
        </div>
      </div>`;
  }

  return `
    <div class="credit-row">
      <div class="credit-row-head">
        <div class="credit-row-ident">
          <div class="credit-row-icon" style="background:${meta.color}1a;color:${meta.color}">${meta.icon}</div>
          <div>
            <div class="credit-row-name">${escapeHtml(d.name)}</div>
            <div class="credit-row-sub">${meta.label}${d.lender ? ' · ' + escapeHtml(d.lender) : ''}</div>
          </div>
        </div>
        <div class="credit-row-balance">
          <div class="credit-row-balance-val" data-eur="${d.currentBalance}">${fmt(d.currentBalance, { noDecimals: true })}</div>
          <div class="credit-row-balance-sub">of <span data-eur="${d.principal}">${fmt(d.principal, { noDecimals: true })}</span> ${totalLabel}</div>
        </div>
      </div>
      <div class="credit-progress">
        <div class="credit-progress-fill ${utilCls}" style="width:${Math.min(util, 100).toFixed(1)}%"></div>
      </div>
      <div class="credit-row-details">
        <div class="credit-detail">
          <div class="credit-detail-label">Utilisation</div>
          <div class="credit-detail-value">${util.toFixed(1)}%</div>
        </div>
        <div class="credit-detail">
          <div class="credit-detail-label">Interest</div>
          <div class="credit-detail-value">${d.interestRate ? d.interestRate.toFixed(2) + '% APR' : '—'}</div>
        </div>
        <div class="credit-detail">
          <div class="credit-detail-label">Min. Payment</div>
          <div class="credit-detail-value" data-eur="${d.minimumPayment || 0}">${fmt(d.minimumPayment || 0, { noDecimals: true })}</div>
        </div>
        <div class="credit-detail">
          <div class="credit-detail-label">Due Date</div>
          <div class="credit-detail-value">${dueStr}</div>
        </div>
      </div>
      ${timeline}
    </div>
  `;
}

function setCreditFilter(filterValue) {
  creditFilter = filterValue;
  document.querySelectorAll('#creditFilters .filter-btn[data-credit-filter]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.creditFilter === filterValue);
  });
  renderCreditSection();
}

function updateDashboardCreditTile(t) {
  const sym = SYMBOLS[currency];
  const valEl = document.getElementById('dashCreditTotal');
  if (valEl) {
    const conv = t.totalDebt * RATES[currency];
    valEl.textContent = '−' + sym + Math.round(conv).toLocaleString('en-US');
  }
  const pctEl = document.getElementById('dashCreditUtilPct');
  if (pctEl) pctEl.textContent = t.utilisationPct.toFixed(0) + '%';
  const fill = document.getElementById('dashCreditUtilFill');
  if (fill) {
    fill.style.width = Math.min(t.utilisationPct, 100) + '%';
    fill.className = 'snapshot-credit-util-fill ' + utilisationFillClass(t.utilisationPct);
  }

  // Asset / debt split bar
  const assets = MOCK.financialSummary.totalAssets;
  const debt   = t.totalDebt;
  const denom  = assets + debt;
  if (denom > 0) {
    const aPct = (assets / denom) * 100;
    const lPct = 100 - aPct;
    const barFill = document.getElementById('dashAssetBarFill');
    if (barFill) barFill.style.width = aPct.toFixed(1) + '%';
    const aLab = document.getElementById('dashAssetPct');
    const lLab = document.getElementById('dashLiabPct');
    if (aLab) aLab.textContent = aPct.toFixed(1) + '%';
    if (lLab) lLab.textContent = lPct.toFixed(1) + '%';
  }
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
  document.getElementById('dashNetWorth').textContent  = sym + Math.round(nw).toLocaleString('en-US');

  // Re-render dynamic lists
  renderAccounts();
  renderRecentTx();
  renderTxTable();
  renderPositions();
  renderPortfolioSummary();
  renderAssetCards();
  renderCreditSection();
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
    renderPortfolioSummary();
    renderAssetCards();
    initAllocationChart();
    initPerfChart();
    initYearlyReturnsChart();
    renderPositions();
    // Chart.js needs a resize hint after the panel becomes visible
    setTimeout(() => {
      if (charts.allocation) charts.allocation.resize();
      if (charts.perf)       charts.perf.resize();
      if (charts.yearly)     charts.yearly.resize();
    }, 60);
  }
}

// ════════════════════════════════════════════════════════
//  CURRENCY SWITCHING
// ════════════════════════════════════════════════════════
function switchCurrency(curr) {
  currency = curr;
  const sel = document.getElementById('currencySelect');
  if (sel) sel.value = curr;
  const mobileSel = document.getElementById('mobileCurrencySelect');
  if (mobileSel) mobileSel.value = curr;
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
//  CLEAR ALL FILTERS
// ════════════════════════════════════════════════════════
function clearAllFilters() {
  closeColDropdown();
  txFilter        = 'all';
  txColDateFrom   = null;
  txColDateTo     = null;
  txColCategories = [];
  txColMerchants  = [];
  txColAccounts   = [];

  // Reset category pill states (both static and dynamic)
  document.querySelectorAll('#txFilters .filter-btn[data-filter]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === 'all');
  });

  renderTxTable();
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
  renderPortfolioSummary();
  renderAssetCards();
  renderCreditSection();

  // Animate the hero counter on load
  setTimeout(() => {
    animateCounter(document.getElementById('heroNetWorth'),   MOCK.financialSummary.netWorth);
    animateCounter(document.getElementById('dashAssets'),     MOCK.financialSummary.totalAssets, 900);
    animateCounter(document.getElementById('dashNetWorth'),   MOCK.financialSummary.netWorth, 900);
  }, 150);

  // Init dashboard pie chart
  initWealthPieChart();

  // Apply dark mode by default
  try { applyTheme(true); } catch(e) { console.error(e); }

  // Kick off live FX rates; refresh UI once resolved (no-op if offline).
  loadExchangeRates().then(res => {
    if (res.source === 'fallback') return;
    updateAllCurrencyValues();
    updateChartCurrency();
  });

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

  // Currency select (mobile)
  const mobileCurrSel = document.getElementById('mobileCurrencySelect');
  if (mobileCurrSel) mobileCurrSel.addEventListener('change', e => switchCurrency(e.target.value));

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
    const defaultName = 'Custom ' + Math.floor(Math.random() * 100);
    // Try prompt, fallback to random name if blocked
    let name = '';
    try {
      name = prompt('Enter new category name:', 'Travel');
    } catch(e) {}
    if (!name || !name.trim()) name = defaultName;
    
    const trimmed = name.trim();
    // Add filter button
    const bar = document.getElementById('txFilters');
    const btn = document.createElement('button');
    btn.className = 'filter-btn dynamic-category';
    btn.dataset.filter = trimmed;
    btn.textContent = trimmed;
    btn.addEventListener('click', () => setCategoryFilter(trimmed));
    bar.insertBefore(btn, document.getElementById('addCategoryBtn'));
  });

  // Clear All Filters button — resets every filter back to default.
  // User-added transactions and dynamic categories are preserved.
  document.getElementById('clearFiltersBtn').addEventListener('click', clearAllFilters);

  // Transaction category filters
  document.querySelectorAll('#txFilters .filter-btn[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      setCategoryFilter(btn.dataset.filter);
    });
  });

  // Close column filter dropdown when clicking outside
  document.addEventListener('click', () => closeColDropdown());

  // Portfolio — provider tabs
  document.querySelectorAll('#providerTabs .provider-tab').forEach(btn => {
    btn.addEventListener('click', () => setActiveProvider(btn.dataset.provider));
  });

  // Portfolio — performance period
  document.querySelectorAll('#perfPeriodToggle .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => setPerfPeriod(btn.dataset.period));
  });

  // Portfolio — positions filter pills
  document.querySelectorAll('#posFilters .filter-btn[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => setPositionFilter(btn.dataset.filter));
  });
  const clearPosBtn = document.getElementById('clearPosFiltersBtn');
  if (clearPosBtn) clearPosBtn.addEventListener('click', clearAllPositionFilters);

  // Portfolio — credit & debt filter pills
  document.querySelectorAll('#creditFilters .filter-btn[data-credit-filter]').forEach(btn => {
    btn.addEventListener('click', () => setCreditFilter(btn.dataset.creditFilter));
  });

  // AI Insights — Coming Soon modal
  const aiBtn     = document.getElementById('aiInsightsBtn');
  const csModal   = document.getElementById('comingSoonModal');
  const csClose   = document.getElementById('comingSoonCloseBtn');
  const openCS  = () => {
    if (!csModal) return;
    csModal.classList.add('is-open');
    document.body.classList.add('modal-open');
  };
  const closeCS = () => {
    if (!csModal) return;
    csModal.classList.remove('is-open');
    document.body.classList.remove('modal-open');
  };
  if (aiBtn)    aiBtn.addEventListener('click', openCS);
  if (csClose)  csClose.addEventListener('click', closeCS);
  if (csModal)  csModal.addEventListener('click', e => { if (e.target === csModal) closeCS(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && csModal && csModal.classList.contains('is-open')) closeCS();
  });

  // Add Account modal
  const addAccountBtn   = document.getElementById('addAccountBtn');
  const addAccountModal = document.getElementById('addAccountModal');
  const addAccountClose = document.getElementById('addAccountCloseBtn');
  const openAA  = () => { if (!addAccountModal) return; addAccountModal.classList.add('is-open'); document.body.classList.add('modal-open'); };
  const closeAA = () => { if (!addAccountModal) return; addAccountModal.classList.remove('is-open'); document.body.classList.remove('modal-open'); };
  if (addAccountBtn)   addAccountBtn.addEventListener('click', openAA);
  if (addAccountClose) addAccountClose.addEventListener('click', closeAA);
  if (addAccountModal) addAccountModal.addEventListener('click', e => { if (e.target === addAccountModal) closeAA(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && addAccountModal && addAccountModal.classList.contains('is-open')) closeAA();
  });

});
