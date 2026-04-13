# Interactive Dashboard Demo — Implementation Plan

## Overview

A standalone `demo.html` page that lets website visitors interact with a realistic, mock-data-powered version of the Opvion dashboard. No backend, no login — pure HTML/CSS/JS with Chart.js for visualisations. The goal is to let potential users _feel_ the product before signing up.

---

## Source Reference

Dashboard repo: `https://github.com/Opvion/spending-tracker.git` (`dev` branch)
Mock data file: `App/Frontend/src/utils/mockData.ts` (481 lines — all data used verbatim)

---

## Panels to Replicate (Priority Order)

| Panel | Source Component | Priority |
|-------|-----------------|----------|
| Net Worth Hero | `NetWorth.tsx` | P0 |
| Wealth Snapshot (Assets / Liabilities / Net Worth) | `QuickOverview.tsx` | P0 |
| Recent Transactions | `RecentTransactionsPreview.tsx` | P0 |
| Spending by Category (donut chart) | `SpendingByCategory.tsx` | P0 |
| Account List | `FinancialSummary.tsx` | P1 |
| Asset Allocation (donut chart) | `PortfolioAllocation.tsx` | P1 |
| Net Worth History (line chart) | `NetWorthChart.tsx` | P1 |

---

## Page Structure

```
demo.html
├── <head> — Tailwind CDN, Chart.js CDN, custom overrides
├── Demo banner ("This is a live demo with sample data. Sign up for real insights.")
├── App shell
│   ├── Sidebar (left, collapsible on mobile)
│   │   ├── Opvion logo
│   │   ├── Nav: Dashboard · Spending · Portfolio
│   │   └── Currency selector (EUR / USD / GBP)
│   └── Main content area
│       ├── [Dashboard tab]
│       │   ├── Net Worth Hero card
│       │   ├── 2-col grid: Wealth Snapshot | Account List
│       │   └── Recent Transactions
│       ├── [Spending tab]
│       │   ├── Stats row (Today income/expenses, Week income/expenses)
│       │   ├── Spending donut chart + legend
│       │   └── Full transaction table (filterable by category)
│       └── [Portfolio tab]
│           ├── Portfolio total + performance
│           ├── Asset allocation donut chart
│           └── Investment positions table
└── <script> — all JS inline (mock data + Chart.js logic + interactivity)
```

---

## Mock Data to Port (from `mockData.ts`)

All of the following will be ported verbatim as plain JS objects:

```javascript
// Transactions (11 entries)
// - Fields: id, name, date, category, amount, account, merchant, isRecurring
// Categories: Income, Housing, Food, Transport, Entertainment, Utilities, Healthcare, Other

// Connected Accounts (6 entries)
// - Erste Bank (checking), Raiffeisen (savings), Revolut (checking),
//   N26 (checking), AmEx (credit_card), Fidelity (investment)

// Spending categories with colours (6)
// Income categories with colours (5)

// Portfolio data — 125,000 split: Stocks 60%, Bonds 20%, Cash 10%, Real Estate 10%

// Investment positions (7) — BTC, EXXT, CNDX, EIMI, MEUD, NEXO, SOL

// Financial summary — Assets 520k, Liabilities 285.5k, Net Worth 234.5k

// Monthly income/expenses for last 6 months (for sparkline)
```

---

## Interactive Features

### Tab Navigation
- Dashboard / Spending / Portfolio tabs
- Active tab highlighted, smooth content swap (no page reload)

### Currency Switcher
- Toggle: EUR · USD · GBP
- All monetary values re-render with correct symbol and exchange rate applied
- Exchange rates hardcoded: 1 EUR = 1.08 USD = 0.85 GBP

### Transaction Filtering (Spending tab)
- Filter buttons: All · Income · Housing · Food · Transport · Other
- Filters the visible transaction rows in real time
- Active filter highlighted in blue

### Net Worth History Toggle
- "View History" button on the Net Worth card
- Toggles a Chart.js line chart showing 12 months of net worth data
- Smooth show/hide animation

### Animated Number Counters
- On page load, all large numbers (net worth, assets, liabilities) count up from 0
- Duration ~800ms, easing cubic

### Chart Interactivity
- Donut charts: hover segment highlights and shows tooltip with category name + amount + % of total
- Line chart: hover shows date + net worth value tooltip

---

## Charts (Chart.js via CDN)

| Chart | Type | Data |
|-------|------|------|
| Net Worth History | `Line` | 12-month synthetic monthly progression to 234,500 |
| Spending by Category | `Doughnut` | `spendingCategories` array |
| Asset Allocation | `Doughnut` | `portfolioData` (Stocks/Bonds/Cash/Real Estate) |

Chart.js config notes:
- Use `responsive: true`, `maintainAspectRatio: false`
- Custom tooltips styled to match app colour palette
- No animation on re-render (only on initial load)

---

## Styling Approach

- **Tailwind CSS via CDN** (`https://cdn.tailwindcss.com`) — matches the app exactly
- **Custom config block** to extend Tailwind with the app's exact colour values if needed
- App is **light-themed** (white cards, slate-50 background) — intentionally different from the dark marketing site
- Demo banner at top uses the website's dark blue to visually bridge the two

### Key Tailwind classes used in the app (carry over verbatim)
- Cards: `bg-white rounded-2xl border border-slate-100 shadow-sm p-5`
- Page background: `bg-slate-50`
- Income values: `text-emerald-600 font-semibold`
- Expense values: `text-rose-600 font-semibold`
- Primary actions: `bg-blue-600 text-white rounded-lg px-4 py-2`
- Section labels: `text-xs font-semibold text-slate-400 uppercase tracking-wider`

---

## Entry Point on Main Website

Add a "Try Demo" / "See it in action" CTA to the main `index.html`:

1. **In the Hero section** — secondary button: `<a href="demo.html" class="btn-ghost">Try Interactive Demo</a>`
2. **In the Solution section** — link below the screen mockup: "See the real dashboard →"
3. **Demo banner on `demo.html`** — links back to `index.html` to sign up

---

## Files to Create

| File | Purpose |
|------|---------|
| `demo.html` | Full standalone demo page |
| `demo.css` | Minimal overrides (chart container sizing, demo banner, sidebar collapse) |
| `demo.js` | All JS: mock data, Chart.js setup, tab switching, currency conversion, filtering, counters |

---

## What We Explicitly Are NOT Building (for now)

- Real API calls or Plaid integration
- Login / auth flow
- Data editing (add transaction, etc.)
- Credit card section (complex, deferred to P2)
- AI coach / insights (deferred to P2)
- Mobile-native sidebar (collapsible hamburger — P2)

---

## Verification Checklist

- [ ] All 3 tabs switch correctly, no blank states
- [ ] Currency toggle updates every monetary value on screen
- [ ] Donut charts render correctly with correct data and colours
- [ ] Line chart shows on "View History" click
- [ ] Transaction filter shows correct subset and empties gracefully
- [ ] Number counters animate on initial load
- [ ] Page is usable on mobile (stacked layout)
- [ ] Demo banner links correctly back to main site
- [ ] "Get Early Access" CTA in demo links to `index.html#contact`
- [ ] No console errors
