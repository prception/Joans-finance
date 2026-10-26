/* Dummy data only — nothing here talks to a backend. Single source of truth
   for every mockup page so numbers stay consistent across screens. */

const MOCK = {
  baseCurrency: "AED",
  exchangeRates: { AED: 1, INR: 22.60, USD: 0.2723 }, // units of currency per 1 AED

  user: {
    name: "Vishnu Viswanath",
    email: "vishnu.viswanath.mm@gmail.com",
    initials: "VV",
  },

  roles: [
    {
      id: "admin",
      name: "Admin",
      description: "Full access to every module, including user management and backups.",
      permissions: ["*"],
    },
    {
      id: "bookkeeper",
      name: "Bookkeeper",
      description: "Day-to-day data entry: income, expenses, accounts. No investments, no settings.",
      permissions: ["view_income", "manage_income", "view_expenses", "manage_expenses", "view_accounts", "manage_accounts", "view_reports", "view_recurring"],
    },
    {
      id: "accountant",
      name: "Accountant",
      description: "Full read access plus reports/documents. Cannot manage users or investment types.",
      permissions: ["view_income", "view_expenses", "view_accounts", "view_investments", "view_liabilities", "view_reports", "view_documents", "manage_documents", "view_recurring", "view_audit_log"],
    },
    {
      id: "viewer",
      name: "Viewer",
      description: "Read-only access across the board. Useful for a spouse or advisor.",
      permissions: ["view_income", "view_expenses", "view_accounts", "view_investments", "view_liabilities", "view_reports", "view_documents", "view_recurring"],
    },
  ],

  users: [
    { id: "u1", name: "Vishnu Viswanath", email: "vishnu.viswanath.mm@gmail.com", role: "admin", status: "active", lastActive: "2026-10-24" },
    { id: "u2", name: "Priya Sharma", email: "priya.sharma@example.com", role: "bookkeeper", status: "active", lastActive: "2026-10-22" },
    { id: "u3", name: "Rahul Nair", email: "rahul.nair@example.com", role: "accountant", status: "active", lastActive: "2026-10-18" },
    { id: "u4", name: "Fatima Al Mansoori", email: "fatima.am@example.com", role: "viewer", status: "invited", lastActive: null },
  ],

  accounts: [
    { id: "acc-uae-current", name: "UAE Bank — Current", institution: "Emirates NBD", type: "Bank", country: "AE", currency: "AED", balance: 185400, number: "•••• 4821", status: "active" },
    { id: "acc-uae-savings", name: "UAE Bank — Savings", institution: "Emirates NBD", type: "Savings", country: "AE", currency: "AED", balance: 220000, number: "•••• 9013", status: "active" },
    { id: "acc-ind-savings", name: "India Bank — Savings", institution: "HDFC Bank", type: "Savings", country: "IN", currency: "INR", balance: 1850000, number: "•••• 3347", status: "active" },
    { id: "acc-ind-fd", name: "India Fixed Deposit", institution: "HDFC Bank", type: "Fixed Deposit", country: "IN", currency: "INR", balance: 1200000, number: "•••• 7765", status: "active", interestRate: 7.1, maturity: "2027-03-15" },
    { id: "acc-trading", name: "Trading Account", institution: "Zerodha", type: "Trading", country: "IN", currency: "INR", balance: 340000, number: "•••• 2290", status: "active" },
    { id: "acc-crypto", name: "Crypto Wallet", institution: "Binance", type: "Crypto Wallet", country: "—", currency: "USD", balance: 18250, number: "•••• bc1q", status: "active" },
  ],

  incomeSources: [
    { id: "is-salary", name: "UAE Salary", type: "Employment", country: "AE", currency: "AED", frequency: "Monthly", defaultAmount: 30000, taxStatus: "Non-taxable", active: true },
    { id: "is-rental", name: "Rental Property A", type: "Rental", country: "IN", currency: "INR", frequency: "Monthly", defaultAmount: 60000, taxStatus: "Taxable", active: true },
    { id: "is-taxi", name: "Taxi Operations", type: "Business", country: "IN", currency: "INR", frequency: "Monthly", defaultAmount: 100000, taxStatus: "Taxable", active: true },
    { id: "is-dividend", name: "Dividends — TechCo", type: "Dividends", country: "US", currency: "USD", frequency: "Quarterly", defaultAmount: 2500, taxStatus: "Partially taxable", active: true },
    { id: "is-freelance", name: "Freelance Consulting", type: "Freelance", country: "AE", currency: "AED", frequency: "Irregular", defaultAmount: 8000, taxStatus: "Tax status unknown", active: true },
    { id: "is-restaurant", name: "Restaurant Business Draw", type: "Business", country: "AE", currency: "AED", frequency: "Monthly", defaultAmount: 5000, taxStatus: "Non-taxable", active: true },
  ],

  incomeTransactions: [
    { id: "it-1", date: "2026-10-01", sourceId: "is-salary", gross: 30000, tax: 0, net: 30000, currency: "AED", rate: 1, baseAmount: 30000, account: "acc-uae-current", ref: "SAL-OCT26" },
    { id: "it-2", date: "2026-10-05", sourceId: "is-rental", gross: 60000, tax: 6000, net: 54000, currency: "INR", rate: 22.60, baseAmount: 2389.38, account: "acc-ind-savings", ref: "RENT-OCT26" },
    { id: "it-3", date: "2026-10-07", sourceId: "is-taxi", gross: 100000, tax: 0, net: 100000, currency: "INR", rate: 22.60, baseAmount: 4424.78, account: "acc-ind-savings", ref: "TAXI-OCT26" },
    { id: "it-4", date: "2026-09-28", sourceId: "is-freelance", gross: 8500, tax: 0, net: 8500, currency: "AED", rate: 1, baseAmount: 8500, account: "acc-uae-current", ref: "FRL-SEP26" },
    { id: "it-5", date: "2026-09-15", sourceId: "is-dividend", gross: 2500, tax: 375, net: 2125, currency: "USD", rate: 0.2723, baseAmount: 7805.0, account: "acc-crypto", ref: "DIV-Q3-26" },
    { id: "it-6", date: "2026-09-01", sourceId: "is-salary", gross: 30000, tax: 0, net: 30000, currency: "AED", rate: 1, baseAmount: 30000, account: "acc-uae-current", ref: "SAL-SEP26" },
    { id: "it-7", date: "2026-09-01", sourceId: "is-restaurant", gross: 5000, tax: 0, net: 5000, currency: "AED", rate: 1, baseAmount: 5000, account: "acc-uae-current", ref: "RBD-SEP26" },
  ],

  expenseCategories: {
    Personal: ["Food", "Rent", "Travel", "Shopping", "Utilities", "Entertainment", "Insurance", "Education", "Other"],
    Investment: ["Maintenance", "Repairs", "Brokerage", "Registration", "Insurance", "Driver Salary", "Fuel", "Property Expenses", "Business Expenses", "Management Fees", "Taxes", "Other"],
  },

  expenseTransactions: [
    { id: "et-1", date: "2026-10-03", type: "Personal", category: "Rent", amount: 9500, currency: "AED", account: "acc-uae-current", method: "Bank Transfer", linkedInvestment: null, taxClass: "Non-taxable", desc: "Apartment rent — October" },
    { id: "et-2", date: "2026-10-04", type: "Personal", category: "Utilities", amount: 620, currency: "AED", account: "acc-uae-current", method: "Auto-debit", linkedInvestment: null, taxClass: "Non-taxable", desc: "DEWA bill" },
    { id: "et-3", date: "2026-10-06", type: "Investment", category: "Fuel", amount: 3200, currency: "AED", account: "acc-uae-current", method: "Card", linkedInvestment: "inv-taxi1", taxClass: "Non-taxable", desc: "Taxi #1 fuel" },
    { id: "et-4", date: "2026-10-06", type: "Investment", category: "Driver Salary", amount: 2800, currency: "AED", account: "acc-uae-current", method: "Cash", linkedInvestment: "inv-taxi1", taxClass: "Non-taxable", desc: "Driver salary — October" },
    { id: "et-5", date: "2026-09-20", type: "Investment", category: "Property Expenses", amount: 12000, currency: "INR", account: "acc-ind-savings", method: "Bank Transfer", linkedInvestment: "inv-rental1", taxClass: "Taxable", desc: "Chennai apartment maintenance" },
    { id: "et-6", date: "2026-09-18", type: "Personal", category: "Shopping", amount: 1450, currency: "AED", account: "acc-uae-current", method: "Card", linkedInvestment: null, taxClass: "Non-taxable", desc: "Groceries & household" },
    { id: "et-7", date: "2026-09-10", type: "Investment", category: "Business Expenses", amount: 18500, currency: "AED", account: "acc-uae-current", method: "Bank Transfer", linkedInvestment: "inv-restaurant", taxClass: "Taxable", desc: "Restaurant supplies & staff" },
  ],

  investmentTypes: [
    {
      id: "itype-land", name: "Land", isSystem: true, active: true, description: "Undeveloped plots and agricultural land.",
      fields: [
        { id: "f-state", label: "State", type: "Text", required: true, order: 1 },
        { id: "f-district", label: "District", type: "Text", required: false, order: 2 },
        { id: "f-city", label: "City", type: "Text", required: false, order: 3 },
        { id: "f-survey", label: "Survey Number", type: "Text", required: false, order: 4 },
        { id: "f-plot", label: "Plot Number", type: "Text", required: false, order: 5 },
        { id: "f-area", label: "Area", type: "Decimal", required: true, order: 6 },
        { id: "f-unit", label: "Unit", type: "Dropdown", required: true, order: 7, options: ["Sq. ft", "Acres", "Cents", "Hectares"] },
        { id: "f-regcost", label: "Registration Cost", type: "Currency", required: false, order: 8 },
        { id: "f-devcost", label: "Development Cost", type: "Currency", required: false, order: 9 },
      ],
    },
    {
      id: "itype-property", name: "Property", isSystem: true, active: true, description: "Apartments, villas and buildings held for appreciation.",
      fields: [
        { id: "f-ptype", label: "Property Type", type: "Dropdown", required: true, order: 1, options: ["Apartment", "Villa", "Townhouse", "Commercial", "Other"] },
        { id: "f-parea", label: "Built-up Area (sq. ft)", type: "Decimal", required: false, order: 2 },
        { id: "f-pregcost", label: "Registration Cost", type: "Currency", required: false, order: 3 },
      ],
    },
    {
      id: "itype-vehicle", name: "Vehicle", isSystem: true, active: true, description: "Vehicles held as assets.",
      fields: [
        { id: "f-vtype", label: "Vehicle Type", type: "Dropdown", required: true, order: 1, options: ["Car", "SUV", "Van", "Truck", "Motorcycle", "Other"] },
        { id: "f-vmake", label: "Make", type: "Text", required: true, order: 2 },
        { id: "f-vmodel", label: "Model", type: "Text", required: true, order: 3 },
        { id: "f-vyear", label: "Year", type: "Number", required: false, order: 4 },
        { id: "f-vreg", label: "Registration Number", type: "Text", required: true, order: 5 },
        { id: "f-vmileage", label: "Mileage (km)", type: "Number", required: false, order: 6 },
        { id: "f-vins", label: "Insurance Expiry", type: "Date", required: false, order: 7 },
      ],
    },
    {
      id: "itype-taxi", name: "Taxi", isSystem: true, active: true, description: "Income-generating vehicles — asset + income stream.",
      fields: [
        { id: "f-make", label: "Make", type: "Text", required: true, order: 1 },
        { id: "f-model", label: "Model", type: "Text", required: true, order: 2 },
        { id: "f-year", label: "Year", type: "Number", required: false, order: 3 },
        { id: "f-reg", label: "Registration Number", type: "Text", required: true, order: 4 },
        { id: "f-mileage", label: "Mileage (km)", type: "Number", required: false, order: 5 },
        { id: "f-ins", label: "Insurance Expiry", type: "Date", required: false, order: 6 },
        { id: "f-driver", label: "Driver", type: "Text", required: false, order: 7 },
      ],
    },
    {
      id: "itype-crypto", name: "Crypto", isSystem: true, active: true, description: "Cryptocurrency holdings, manually valued.",
      fields: [
        { id: "f-coin", label: "Cryptocurrency", type: "Text", required: true, order: 1 },
        { id: "f-qty", label: "Quantity", type: "Decimal", required: true, order: 2 },
        { id: "f-wallet", label: "Wallet / Exchange", type: "Text", required: true, order: 3 },
      ],
    },
    {
      id: "itype-gold-phys", name: "Physical Gold", isSystem: true, active: true, description: "Bars, coins and jewellery held physically.",
      fields: [
        { id: "f-goldtype", label: "Gold Type", type: "Dropdown", required: true, order: 1, options: ["Bar", "Coin", "Jewellery"] },
        { id: "f-weight", label: "Weight (g)", type: "Decimal", required: true, order: 2 },
        { id: "f-purity", label: "Purity", type: "Text", required: true, order: 3 },
        { id: "f-storage", label: "Storage Location", type: "Text", required: false, order: 4 },
      ],
    },
    {
      id: "itype-gold-comm", name: "Gold Commodity", isSystem: true, active: true, description: "Paper gold — ETFs, digital gold, futures.",
      fields: [
        { id: "f-platform", label: "Platform", type: "Text", required: true, order: 1 },
        { id: "f-instrument", label: "Instrument", type: "Text", required: true, order: 2 },
      ],
    },
    {
      id: "itype-company", name: "Company Investment", isSystem: true, active: true, description: "Equity stakes in private or public companies.",
      fields: [
        { id: "f-biztype", label: "Business Type", type: "Text", required: false, order: 1 },
        { id: "f-ownership", label: "Ownership %", type: "Percentage", required: true, order: 2 },
        { id: "f-partners", label: "Partners", type: "Text", required: false, order: 3 },
      ],
    },
    {
      id: "itype-trading", name: "Trading", isSystem: true, active: true, description: "Active trading accounts — stocks, F&O, forex.",
      fields: [
        { id: "f-tplatform", label: "Trading Platform", type: "Text", required: true, order: 1 },
        { id: "f-tinstrument", label: "Instrument", type: "Text", required: false, order: 2 },
      ],
    },
    {
      id: "itype-betting", name: "Betting / Speculative", isSystem: true, active: true, speculative: true, description: "Tracked separately from conventional investments.",
      fields: [
        { id: "f-bplatform", label: "Platform", type: "Text", required: true, order: 1 },
      ],
    },
    {
      id: "itype-rental", name: "Rental Property", isSystem: true, active: true, description: "Property held for rental income.",
      fields: [
        { id: "f-tenant", label: "Tenant Name", type: "Text", required: false, order: 1 },
        { id: "f-rfreq", label: "Rental Frequency", type: "Dropdown", required: true, order: 2, options: ["Monthly", "Quarterly", "Annual"] },
        { id: "f-loan", label: "Loan Linked", type: "Checkbox", required: false, order: 3 },
      ],
    },
    {
      id: "itype-business", name: "Business", isSystem: true, active: true, description: "Operating businesses the user owns or co-owns.",
      fields: [
        { id: "f-bbiztype", label: "Business Type", type: "Text", required: false, order: 1 },
        { id: "f-bownership", label: "Ownership %", type: "Percentage", required: true, order: 2 },
        { id: "f-bpartners", label: "Partners", type: "Text", required: false, order: 3 },
      ],
    },
    {
      id: "itype-other", name: "Other", isSystem: true, active: true, description: "Anything that doesn't fit another type yet.",
      fields: [],
    },
    {
      // Counted in net worth, kept out of portfolio totals/ROI (owner decision 2026-10-25).
      id: "itype-personal", name: "Personal Asset", isSystem: true, active: true, personal: true, description: "Things you own but don't hold as an investment — your own car or home.",
      fields: [
        { id: "f-pdesc", label: "Asset Category", type: "Dropdown", required: false, order: 1, options: ["Home", "Vehicle", "Jewellery", "Other"] },
      ],
    },
    {
      id: "itype-restaurant", name: "Restaurant Business", isSystem: false, active: true, description: "Custom type — created by the user, not a developer.",
      createdBy: "Vishnu Viswanath", createdAt: "2026-08-12",
      fields: [
        { id: "f-rloc", label: "Location", type: "Text", required: true, order: 1 },
        { id: "f-rownership", label: "Ownership %", type: "Percentage", required: true, order: 2 },
        { id: "f-rpartner", label: "Partner Name", type: "Text", required: false, order: 3 },
        { id: "f-rexpected", label: "Expected Monthly Income", type: "Currency", required: false, order: 4 },
      ],
    },
  ],

  investments: [
    { id: "inv-land1", typeId: "itype-land", name: "Land Parcel — Devanahalli", country: "IN", currency: "INR", acquired: "2022-03-10", initial: 5000000, additional: 0, currentValue: 6000000, status: "active", account: "acc-ind-savings", liability: null,
      fields: { "f-state": "Karnataka", "f-district": "Bengaluru Rural", "f-survey": "SY-118/2A", "f-area": 2.5, "f-unit": "Acres" } },
    { id: "inv-taxi1", typeId: "itype-taxi", name: "Toyota Camry — Taxi #1", country: "AE", currency: "AED", acquired: "2023-06-01", initial: 85000, additional: 0, currentValue: 55000, status: "active", account: "acc-uae-current", liability: "liab-auto1",
      fields: { "f-make": "Toyota", "f-model": "Camry", "f-year": 2023, "f-reg": "DXB-A-44192", "f-driver": "Mohammed Rafi" } },
    { id: "inv-crypto1", typeId: "itype-crypto", name: "Bitcoin Holdings", country: "—", currency: "USD", acquired: "2021-11-20", initial: 18000, additional: 4000, currentValue: 27300, status: "active", account: "acc-crypto", liability: null,
      fields: { "f-coin": "BTC", "f-qty": 0.42, "f-wallet": "Binance" } },
    { id: "inv-eth1", typeId: "itype-crypto", name: "Ethereum Holdings", country: "—", currency: "USD", acquired: "2024-02-01", initial: 6000, additional: 0, currentValue: 0, status: "sold", soldOn: "2026-08-14", saleProceeds: 8233, account: "acc-crypto", liability: null,
      fields: { "f-coin": "ETH", "f-qty": 2.1, "f-wallet": "Binance" } },
    { id: "inv-gold1", typeId: "itype-gold-phys", name: "Gold Bars — Locker", country: "AE", currency: "AED", acquired: "2020-01-15", initial: 95000, additional: 20000, currentValue: 145000, status: "active", account: "acc-uae-savings", liability: null,
      fields: { "f-goldtype": "Bar", "f-weight": 500, "f-purity": "999.9", "f-storage": "Al Futtaim Vault, Dubai" } },
    { id: "inv-goldcomm1", typeId: "itype-gold-comm", name: "Gold ETF — MCX", country: "IN", currency: "INR", acquired: "2023-02-01", initial: 250000, additional: 30000, currentValue: 320000, status: "active", account: "acc-trading", liability: null,
      fields: { "f-platform": "Zerodha", "f-instrument": "GOLDBEES" } },
    { id: "inv-company1", typeId: "itype-company", name: "TechCo Pvt Ltd Shares", country: "US", currency: "USD", acquired: "2022-09-05", initial: 60000, additional: 0, currentValue: 85000, status: "active", account: "acc-crypto", liability: null,
      fields: { "f-biztype": "SaaS", "f-ownership": 3.5, "f-partners": "—" } },
    { id: "inv-trading1", typeId: "itype-trading", name: "Nasdaq Swing Trading", country: "US", currency: "USD", acquired: "2024-01-10", initial: 35000, additional: 5000, currentValue: 42500, status: "active", account: "acc-crypto", liability: null,
      fields: { "f-tplatform": "Interactive Brokers", "f-tinstrument": "QQQ, NVDA, MSFT" } },
    { id: "inv-bet1", typeId: "itype-betting", name: "Cricket League Bets 2026", country: "—", currency: "AED", acquired: "2026-04-01", initial: 10000, additional: 0, currentValue: 5800, status: "active", account: "acc-uae-current", liability: null,
      fields: { "f-bplatform": "Offshore Sportsbook" } },
    { id: "inv-rental1", typeId: "itype-rental", name: "Chennai Apartment", country: "IN", currency: "INR", acquired: "2021-07-22", initial: 7500000, additional: 300000, currentValue: 9200000, status: "active", account: "acc-ind-savings", liability: "liab-home1",
      fields: { "f-tenant": "Anand Kumar", "f-rfreq": "Monthly", "f-loan": true } },
    { id: "inv-villa1", typeId: "itype-rental", name: "Al Barari Villa — Under Construction", country: "AE", currency: "AED", acquired: "2026-07-01", initial: 950000, additional: 613000, currentValue: 1563000, status: "under_construction", account: "acc-uae-current", liability: "liab-construction1",
      fields: { "f-tenant": "—", "f-rfreq": "Monthly", "f-loan": true },
      // Under construction: current_value = cost-to-date (land + spend), not marked up — matches docs/PLAN.md's
      // "construction-in-progress is valued at cost until completion" convention.
      construction: {
        enabled: true,
        status: "in_progress",
        startDate: "2026-08-01",
        expectedCompletion: "2027-04-30",
        percentComplete: 49,
        totalBudget: 1250000,
        categories: [
          { id: "c-permits", name: "Permits & Approvals", budgeted: 40000 },
          { id: "c-foundation", name: "Foundation", budgeted: 180000 },
          { id: "c-structure", name: "Structure & Shell", budgeted: 320000 },
          { id: "c-roofing", name: "Roofing", budgeted: 90000 },
          { id: "c-mep", name: "Plumbing & Electrical", budgeted: 150000 },
          { id: "c-finishing", name: "Finishing & Interiors", budgeted: 320000 },
          { id: "c-labor", name: "Labor (General)", budgeted: 100000 },
          { id: "c-contingency", name: "Contingency", budgeted: 50000 },
        ],
      } },
    { id: "inv-business1", typeId: "itype-business", name: "Al Noor Transport LLC", country: "AE", currency: "AED", acquired: "2022-11-01", initial: 300000, additional: 50000, currentValue: 410000, status: "active", account: "acc-uae-current", liability: "liab-biz1",
      fields: { "f-bbiztype": "Logistics", "f-bownership": 60, "f-bpartners": "Karim Youssef" } },
    { id: "inv-restaurant", typeId: "itype-restaurant", name: "Spice Route Restaurant", country: "AE", currency: "AED", acquired: "2026-08-15", initial: 150000, additional: 0, currentValue: 180000, status: "active", account: "acc-uae-current", liability: null,
      fields: { "f-rloc": "Al Barsha, Dubai", "f-rownership": 40, "f-rpartner": "Sana Qureshi", "f-rexpected": 5000 } },
  ],

  investmentTransactions: {
    "inv-taxi1": [
      { date: "2023-06-01", type: "Purchase", amount: -85000, currency: "AED" },
      { date: "2026-10-06", type: "Expense — Fuel", amount: -3200, currency: "AED" },
      { date: "2026-10-06", type: "Expense — Driver Salary", amount: -2800, currency: "AED" },
      { date: "2026-10-01", type: "Income — Fares", amount: 14200, currency: "AED" },
      { date: "2026-09-01", type: "Income — Fares", amount: 13650, currency: "AED" },
    ],
    "inv-rental1": [
      { date: "2021-07-22", type: "Purchase", amount: -7500000, currency: "INR" },
      { date: "2024-01-10", type: "Additional Investment", amount: -300000, currency: "INR" },
      { date: "2026-10-05", type: "Income — Rent", amount: 60000, currency: "INR" },
      { date: "2026-09-05", type: "Income — Rent", amount: 60000, currency: "INR" },
      { date: "2026-09-20", type: "Expense — Maintenance", amount: -12000, currency: "INR" },
    ],
    "inv-villa1": [
      { date: "2026-07-01", type: "Purchase", amount: -950000, currency: "AED" },
      { date: "2026-08-05", type: "Construction Cost", category: "c-permits", vendor: "Dubai Municipality", desc: "Building permit fee", amount: -28000, currency: "AED" },
      { date: "2026-08-10", type: "Construction Cost", category: "c-permits", vendor: "Al Noor Consultants", desc: "Structural drawing approval", amount: -10000, currency: "AED" },
      { date: "2026-08-20", type: "Construction Cost", category: "c-foundation", vendor: "Gulf Shoring LLC", desc: "Excavation & shoring", amount: -65000, currency: "AED" },
      { date: "2026-08-28", type: "Construction Cost", category: "c-foundation", vendor: "Al Fahim Concrete", desc: "Foundation concrete pour", amount: -110000, currency: "AED" },
      { date: "2026-09-05", type: "Construction Cost", category: "c-structure", vendor: "Emirates Steel", desc: "Reinforcement steel", amount: -95000, currency: "AED" },
      { date: "2026-09-15", type: "Construction Cost", category: "c-structure", vendor: "Al Rostamani Contracting", desc: "Block work & columns", amount: -120000, currency: "AED" },
      { date: "2026-09-25", type: "Construction Cost", category: "c-structure", vendor: "Al Rostamani Contracting", desc: "Slab casting — 1st floor", amount: -75000, currency: "AED" },
      { date: "2026-10-02", type: "Construction Cost", category: "c-labor", vendor: "Site Labor Supply Co.", desc: "Monthly labor — September", amount: -24000, currency: "AED" },
      { date: "2026-10-05", type: "Construction Cost", category: "c-roofing", vendor: "Gulf Roofing Systems", desc: "Roof structure & insulation", amount: -42000, currency: "AED" },
      { date: "2026-10-10", type: "Construction Cost", category: "c-mep", vendor: "Al Maha MEP", desc: "Rough-in plumbing", amount: -15000, currency: "AED" },
      { date: "2026-10-15", type: "Construction Cost", category: "c-labor", vendor: "Site Labor Supply Co.", desc: "Monthly labor — October", amount: -24000, currency: "AED" },
      { date: "2026-10-18", type: "Construction Cost", category: "c-contingency", vendor: "—", desc: "Unforeseen soil treatment", amount: -5000, currency: "AED" },
    ],
    "inv-crypto1": [
      { date: "2021-11-20", type: "Buy", amount: -18000, currency: "USD", quantity: 0.35 },
      { date: "2023-04-02", type: "Buy", amount: -4000, currency: "USD", quantity: 0.07 },
      { date: "2026-06-11", type: "Fee", amount: -25, currency: "USD" },
    ],
    "inv-eth1": [
      { date: "2024-02-01", type: "Buy", amount: -6000, currency: "USD", quantity: 2.1 },
      { date: "2026-08-14", type: "Sell", amount: 8258, currency: "USD", quantity: 2.1 },
      { date: "2026-08-14", type: "Fee", amount: -25, currency: "USD" },
    ],
    "inv-restaurant": [
      { date: "2026-08-15", type: "Purchase", amount: -150000, currency: "AED" },
      { date: "2026-09-01", type: "Dividend / Drawing", amount: 5000, currency: "AED" },
      { date: "2026-09-10", type: "Expense — Business Expenses", amount: -18500, currency: "AED" },
    ],
  },

  investmentValuations: {
    "inv-land1": [
      { date: "2026-01-15", value: 5500000 },
      { date: "2026-06-10", value: 5800000 },
      { date: "2026-09-30", value: 6000000 },
    ],
    "inv-taxi1": [
      { date: "2026-01-01", value: 68000 },
      { date: "2026-06-01", value: 60000 },
      { date: "2026-10-01", value: 55000 },
    ],
    "inv-crypto1": [
      { date: "2026-01-01", value: 19800 },
      { date: "2026-06-01", value: 24100 },
      { date: "2026-10-15", value: 27300 },
    ],
    "inv-rental1": [
      { date: "2026-01-01", value: 8700000 },
      { date: "2026-06-01", value: 8950000 },
      { date: "2026-10-01", value: 9200000 },
    ],
    "inv-restaurant": [
      { date: "2026-08-15", value: 150000 },
      { date: "2026-10-01", value: 180000 },
    ],
    "inv-villa1": [
      { date: "2026-07-01", value: 950000 },
      { date: "2026-10-20", value: 1563000 },
    ],
  },

  liabilities: [
    { id: "liab-home1", name: "Chennai Apartment Home Loan", type: "Property Loan", lender: "HDFC Bank", currency: "INR", original: 7000000, outstanding: 5250000, rate: 8.5, emi: 62000, frequency: "Monthly", start: "2021-08-01", maturity: "2036-08-01", nextDue: "2026-11-01", linkedAsset: "inv-rental1", status: "active" },
    { id: "liab-construction1", name: "Construction Loan — Al Barari Villa", type: "Construction Loan", lender: "Mashreq Bank", currency: "AED", original: 800000, outstanding: 550000, rate: 5.8, emi: null, start: "2026-08-01", maturity: "2033-08-01", nextDue: "2026-11-15", linkedAsset: "inv-villa1", status: "active" },
    { id: "liab-auto1", name: "Toyota Camry Auto Loan", type: "Vehicle Loan", lender: "Emirates NBD", currency: "AED", original: 60000, outstanding: 28000, rate: 3.9, emi: 2100, frequency: "Monthly", start: "2023-06-01", maturity: "2027-06-01", nextDue: "2026-11-01", linkedAsset: "inv-taxi1", status: "active" },
    { id: "liab-personal1", name: "Personal Loan — UAE", type: "Personal Loan", lender: "ADCB", currency: "AED", original: 30000, outstanding: 15000, rate: 6.5, emi: 1800, frequency: "Monthly", start: "2024-11-01", maturity: "2027-11-01", nextDue: "2026-11-05", linkedAsset: null, status: "active" },
    { id: "liab-biz1", name: "Business Loan — Al Noor Transport", type: "Business Loan", lender: "Mashreq Bank", currency: "AED", original: 150000, outstanding: 95000, rate: 7.2, emi: 5200, frequency: "Monthly", start: "2022-11-01", maturity: "2027-11-01", nextDue: "2026-11-10", linkedAsset: "inv-business1", status: "active" },
    { id: "liab-cc1", name: "Credit Card — Emirates NBD", type: "Credit Card", lender: "Emirates NBD", currency: "AED", original: null, outstanding: 6400, rate: 36, emi: null, start: null, maturity: null, nextDue: "2026-11-12", linkedAsset: null, status: "active" },
  ],

  liabilityPayments: {
    "liab-home1": [
      { date: "2026-10-01", principal: 24810, interest: 37190, account: "acc-ind-savings" },
      { date: "2026-09-01", principal: 24637, interest: 37363, account: "acc-ind-savings" },
      { date: "2026-08-01", principal: 24462, interest: 37538, account: "acc-ind-savings" },
    ],
    "liab-auto1": [
      { date: "2026-10-01", principal: 2009, interest: 91, account: "acc-uae-current" },
      { date: "2026-09-01", principal: 2002, interest: 98, account: "acc-uae-current" },
      { date: "2026-08-01", principal: 1996, interest: 104, account: "acc-uae-current" },
    ],
  },

  transfers: [
    { id: "tr-1", date: "2026-10-02", from: "acc-uae-current", to: "acc-ind-savings", amount: 10000, currency: "AED", toAmount: 226000, toCurrency: "INR", notes: "Monthly remittance" },
    { id: "tr-2", date: "2026-09-02", from: "acc-uae-current", to: "acc-ind-savings", amount: 10000, currency: "AED", toAmount: 225800, toCurrency: "INR", notes: "Monthly remittance" },
    { id: "tr-3", date: "2026-08-20", from: "acc-uae-savings", to: "acc-ind-fd", amount: 25000, currency: "AED", toAmount: 563500, toCurrency: "INR", notes: "Top-up fixed deposit" },
  ],

  documents: [
    { id: "doc-1", name: "Sale Deed — Devanahalli Land.pdf", linkedTo: "Land Parcel — Devanahalli", type: "Land", size: "2.4 MB", uploaded: "2022-03-12" },
    { id: "doc-2", name: "Vehicle Registration — Camry.pdf", linkedTo: "Toyota Camry — Taxi #1", type: "Vehicle", size: "640 KB", uploaded: "2023-06-03" },
    { id: "doc-3", name: "Insurance Policy — Camry.pdf", linkedTo: "Toyota Camry — Taxi #1", type: "Vehicle", size: "1.1 MB", uploaded: "2023-06-05" },
    { id: "doc-4", name: "Al Noor Transport — Shareholder Agreement.pdf", linkedTo: "Al Noor Transport LLC", type: "Business", size: "3.8 MB", uploaded: "2022-11-02" },
    { id: "doc-5", name: "Home Loan Agreement — HDFC.pdf", linkedTo: "Chennai Apartment Home Loan", type: "Loan", size: "5.2 MB", uploaded: "2021-08-02" },
    { id: "doc-6", name: "Spice Route — Partnership Deed.pdf", linkedTo: "Spice Route Restaurant", type: "Business", size: "1.9 MB", uploaded: "2026-08-16" },
    { id: "doc-7", name: "Building Permit — Al Barari Villa.pdf", linkedTo: "Al Barari Villa — Under Construction", type: "Property", size: "1.2 MB", uploaded: "2026-08-05" },
    { id: "doc-8", name: "Construction Loan Agreement — Mashreq.pdf", linkedTo: "Construction Loan — Al Barari Villa", type: "Loan", size: "2.1 MB", uploaded: "2026-08-02" },
  ],

  reminders: [
    { id: "rem-1", title: "Home Loan EMI due", due: "2026-11-01", category: "EMI", related: "Chennai Apartment Home Loan", status: "upcoming" },
    { id: "rem-2", title: "Camry insurance renewal", due: "2026-11-15", category: "Insurance Renewal", related: "Toyota Camry — Taxi #1", status: "upcoming" },
    { id: "rem-3", title: "India Fixed Deposit matures", due: "2027-03-15", category: "Deposit Maturity", related: "India Fixed Deposit", status: "scheduled" },
    { id: "rem-4", title: "Quarterly investment review", due: "2026-12-31", category: "Investment Review", related: "Portfolio", status: "scheduled" },
    { id: "rem-5", title: "Vehicle registration renewal", due: "2026-10-28", category: "Vehicle Registration", related: "Toyota Camry — Taxi #1", status: "due-soon" },
    { id: "rem-6", title: "Contractor milestone payment — Roofing completion", due: "2026-11-05", category: "Property Payment", related: "Al Barari Villa — Under Construction", status: "upcoming" },
  ],

  recurring: [
    { id: "rec-1", name: "UAE Salary", kind: "Income", amount: 30000, currency: "AED", frequency: "Monthly", nextRun: "2026-11-01" },
    { id: "rec-2", name: "Apartment Rent", kind: "Expense", amount: 9500, currency: "AED", frequency: "Monthly", nextRun: "2026-11-03" },
    { id: "rec-3", name: "Home Loan EMI", kind: "Loan Payment", liabilityId: "liab-home1", amount: 62000, currency: "INR", frequency: "Monthly", nextRun: "2026-11-01" },
    { id: "rec-4", name: "Rental Property A Income", kind: "Income", amount: 60000, currency: "INR", frequency: "Monthly", nextRun: "2026-11-05" },
  ],

  netWorthHistory: [
    { month: "May 2026", value: 2840000 },
    { month: "Jun 2026", value: 2910000 },
    { month: "Jul 2026", value: 2975000 },
    { month: "Aug 2026", value: 3062000 },
    { month: "Sep 2026", value: 3140000 },
    { month: "Oct 2026", value: 3218500 },
  ],

  auditLog: [
    { id: "aud-1", user: "Vishnu Viswanath", timestamp: "2026-10-01 09:14", record: "Investment — Land Parcel — Devanahalli", action: "Value changed", old: "AED 5,500,000", new: "AED 6,000,000" },
    { id: "aud-2", user: "Priya Sharma", timestamp: "2026-09-28 16:02", record: "Expense — Groceries & household", action: "Created", old: "—", new: "AED 1,450" },
    { id: "aud-3", user: "Vishnu Viswanath", timestamp: "2026-09-12 11:40", record: "Investment Type — Restaurant Business", action: "Created", old: "—", new: "New custom type with 4 fields" },
    { id: "aud-4", user: "Rahul Nair", timestamp: "2026-09-05 08:55", record: "Liability — Business Loan", action: "Outstanding updated", old: "AED 102,000", new: "AED 95,000" },
  ],

  archived: [
    { id: "arc-1", record: "Account — Old NBD Credit Card", state: "Archived", by: "Vishnu Viswanath", on: "2026-06-30" },
    { id: "arc-2", record: "Expense — Duplicate DEWA bill (Sep)", state: "Deleted", by: "Priya Sharma", on: "2026-09-05" },
  ],
};

function toBase(amount, currency) {
  const rate = MOCK.exchangeRates[currency] ?? 1;
  return amount / rate;
}

// Realized once sold (sale proceeds), unrealized while held (current value).
function gainOf(inv) {
  return (inv.status === "sold" ? inv.saleProceeds : inv.currentValue) - inv.initial - inv.additional;
}

function isSpeculative(inv) {
  return !!MOCK.investmentTypes.find(t => t.id === inv.typeId).speculative;
}

function isPersonal(inv) {
  return !!MOCK.investmentTypes.find(t => t.id === inv.typeId).personal;
}

// Operating revenue/expenses linked to an investment (SRS §27/§28) — not capital movements.
function operatingOf(inv) {
  const txs = MOCK.investmentTransactions[inv.id] || [];
  const revenue = txs.filter(t => /^(Income|Dividend)/.test(t.type)).reduce((s, t) => s + t.amount, 0);
  const expenses = txs.filter(t => /^Expense/.test(t.type)).reduce((s, t) => s - t.amount, 0);
  return { revenue, expenses, profit: revenue - expenses };
}

// SRS ROI counts capital gain only; Total Return adds net operating income, so an
// income-earning asset (taxi, rental) isn't shown as a pure loss.
function totalReturnPct(inv) {
  return ((gainOf(inv) + operatingOf(inv).profit) / (inv.initial + inv.additional)) * 100;
}
