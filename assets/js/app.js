/* Shared shell (sidebar/topbar), role-based gating, and small render helpers
   reused across every mockup page. No framework, no build step — this is a
   static UI prototype, not a wired-up app. */

const ICONS = {
  dashboard: '<path d="M3 13h8V3H3v10Zm0 8h8v-6H3v6Zm10 0h8V11h-8v10Zm0-18v6h8V3h-8Z"/>',
  wallet: '<path d="M3 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2h-3a3 3 0 0 0 0 6h3v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"/><circle cx="16" cy="12" r="1"/>',
  income: '<path d="M12 2v14m0 0 5-5m-5 5-5-5M5 21h14"/>',
  expense: '<path d="M12 22V8m0 0-5 5m5-5 5 5M5 3h14"/>',
  investments: '<path d="M3 3v18h18"/><path d="m7 15 4-6 3 4 5-8"/>',
  types: '<path d="M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 0h7v7h-7v-7Z"/>',
  liabilities: '<path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6v6l4 2"/>',
  transactions: '<path d="M7 7h14l-3-3m3 3-3 3M17 17H3l3 3m-3-3 3-3"/>',
  reports: '<path d="M4 19V5a2 2 0 0 1 2-2h8l6 6v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"/><path d="M14 3v6h6M9 13h6M9 17h6"/>',
  documents: '<path d="M4 19V5a2 2 0 0 1 2-2h8l6 6v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"/><path d="M14 3v6h6"/>',
  reminders: '<path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.14.36.4.67.73.85.33.18.72.25 1.1.18H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"/>',
  logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  bell: '<path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
};

function icon(name, cls = "w-5 h-5") {
  return `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ""}</svg>`;
}

const NAV_ITEMS = [
  { page: "dashboard", label: "Dashboard", href: "dashboard.html", icon: "dashboard", perm: null },
  { page: "accounts", label: "Accounts", href: "accounts.html", icon: "wallet", perm: "view_accounts" },
  { page: "income", label: "Income", href: "income.html", icon: "income", perm: "view_income" },
  { page: "expenses", label: "Expenses", href: "expenses.html", icon: "expense", perm: "view_expenses" },
  { page: "investments", label: "Investments", href: "investments.html", icon: "investments", perm: "view_investments" },
  { page: "liabilities", label: "Liabilities", href: "liabilities.html", icon: "liabilities", perm: "view_liabilities" },
  { page: "transactions", label: "All Transactions", href: "transactions.html", icon: "transactions", perm: "view_reports" },
  { page: "reports", label: "Reports", href: "reports.html", icon: "reports", perm: "view_reports" },
  { page: "documents", label: "Documents", href: "documents.html", icon: "documents", perm: "view_documents" },
  { page: "reminders", label: "Reminders", href: "reminders.html", icon: "reminders", perm: "view_recurring" },
  { page: "settings", label: "Settings", href: "settings.html", icon: "settings", perm: null },
];

// Closed reference sets (ISO 3166 / ISO 4217) — dropdowns, never free text, so an
// invalid country/currency can't be entered (SRS §59).
const COUNTRIES = [["AE", "United Arab Emirates"], ["IN", "India"], ["US", "United States"], ["GB", "United Kingdom"], ["SA", "Saudi Arabia"], ["QA", "Qatar"], ["OM", "Oman"], ["SG", "Singapore"], ["—", "Not country-specific"]];
const CURRENCIES = ["AED", "INR", "USD", "EUR", "GBP", "SAR", "QAR", "OMR", "SGD"];
const DOC_KINDS = ["Sale Deed", "Registration", "Agreement", "Insurance", "Purchase Invoice", "Share Certificate", "Contract", "Loan Agreement", "Statement", "Receipt", "Other"];

const App = {
  currentRoleId() {
    return localStorage.getItem("mock_role") || "admin";
  },
  setRole(roleId) {
    localStorage.setItem("mock_role", roleId);
    location.reload();
  },
  role() {
    return MOCK.roles.find((r) => r.id === this.currentRoleId()) || MOCK.roles[0];
  },
  can(perm) {
    if (!perm) return true;
    const role = this.role();
    return role.permissions.includes("*") || role.permissions.includes(perm);
  },

  fmtMoney(amount, currency = MOCK.baseCurrency) {
    const sign = amount < 0 ? "-" : "";
    const abs = Math.abs(amount);
    return `${sign}${currency} ${abs.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
  },
  fmtBase(amount, currency) {
    return this.fmtMoney(toBase(amount, currency), MOCK.baseCurrency);
  },
  fmtDate(iso) {
    if (!iso) return "—";
    return new Date(iso + "T00:00:00").toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  },
  badge(text, tone = "slate") {
    return `<span class="badge badge-${tone}">${text}</span>`;
  },
  gainBadge(value) {
    const tone = value > 0 ? "green" : value < 0 ? "red" : "slate";
    const sign = value > 0 ? "+" : "";
    return `<span class="badge badge-${tone}">${sign}${this.fmtMoney(value)}</span>`;
  },

  injectShell(activePage, requiredPerm) {
    const role = this.role();
    const navHtml = NAV_ITEMS.filter((item) => this.can(item.perm))
      .map(
        (item) => `
        <a href="${item.href}" class="sidebar-link flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-600 hover:bg-slate-100 ${item.page === activePage ? "active" : ""}">
          ${icon(item.icon, "w-[18px] h-[18px]")}
          <span>${item.label}</span>
        </a>`
      )
      .join("");

    document.getElementById("sidebar-root").innerHTML = `
      <aside class="fixed inset-y-0 left-0 w-64 bg-white border-r border-slate-200 hidden lg:flex flex-col z-30">
        <div class="h-16 flex items-center gap-2 px-5 border-b border-slate-200">
          <div class="w-8 h-8 rounded-lg bg-teal-700 text-white flex items-center justify-center font-bold text-sm">JF</div>
          <div>
            <p class="text-sm font-semibold text-slate-900 leading-tight">Johaan's Future</p>
            <p class="text-[11px] text-slate-400 leading-tight">Wealth &amp; Finance Manager</p>
          </div>
        </div>
        <nav class="flex-1 overflow-y-auto px-3 py-4 space-y-1">${navHtml}</nav>
        <div class="p-3 border-t border-slate-200">
          <a href="login.html" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-500 hover:bg-slate-100">
            ${icon("logout", "w-[18px] h-[18px]")}<span>Log out</span>
          </a>
        </div>
      </aside>

      <div id="mobile-sidebar" class="fixed inset-0 z-40 hidden lg:hidden">
        <div class="absolute inset-0 bg-slate-900/40" onclick="document.getElementById('mobile-sidebar').classList.add('hidden')"></div>
        <aside class="absolute inset-y-0 left-0 w-64 bg-white flex flex-col">
          <div class="h-16 flex items-center justify-between px-5 border-b border-slate-200">
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 rounded-lg bg-teal-700 text-white flex items-center justify-center font-bold text-sm">JF</div>
              <p class="text-sm font-semibold text-slate-900">Johaan's Future</p>
            </div>
            <button onclick="document.getElementById('mobile-sidebar').classList.add('hidden')">${icon("x")}</button>
          </div>
          <nav class="flex-1 overflow-y-auto px-3 py-4 space-y-1">${navHtml}</nav>
        </aside>
      </div>`;

    const roleOptions = MOCK.roles
      .map((r) => `<button data-role="${r.id}" class="w-full text-left px-3 py-2 rounded-md hover:bg-slate-100 text-sm ${r.id === role.id ? "bg-slate-100 font-medium" : ""}">${r.name}</button>`)
      .join("");

    document.getElementById("topbar-root").innerHTML = `
      <header class="fixed top-0 right-0 left-0 lg:left-64 h-16 bg-white/90 backdrop-blur border-b border-slate-200 z-20 flex items-center justify-between px-4 lg:px-6 gap-4">
        <div class="flex items-center gap-3">
          <button class="lg:hidden text-slate-500" onclick="document.getElementById('mobile-sidebar').classList.remove('hidden')">${icon("menu")}</button>
          <div class="hidden sm:flex items-center gap-2 bg-slate-100 rounded-lg px-3 py-2 w-72">
            ${icon("search", "w-4 h-4 text-slate-400")}
            <input id="global-search" placeholder="Search transactions... (Enter)" class="bg-transparent text-sm outline-none w-full placeholder:text-slate-400" />
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div class="relative">
            <button id="role-switch-btn" class="flex items-center gap-2 text-xs font-medium bg-teal-50 text-teal-700 border border-teal-200 rounded-full pl-3 pr-2 py-1.5">
              Viewing as: ${role.name} ${icon("chevron", "w-3.5 h-3.5")}
            </button>
            <div id="role-switch-menu" class="hidden absolute right-0 mt-2 w-56 card shadow-lg p-1.5">
              <p class="px-3 pt-1.5 pb-1 text-[11px] uppercase tracking-wide text-slate-400 font-semibold">Demo: switch role</p>
              ${roleOptions}
            </div>
          </div>
          <a href="reminders.html" title="Reminders" class="relative text-slate-500">${icon("bell")}<span class="absolute -top-0.5 -right-0.5 w-2 h-2 bg-rose-500 rounded-full"></span></a>
          <div class="w-9 h-9 rounded-full bg-slate-800 text-white flex items-center justify-center text-xs font-semibold">${MOCK.user.initials}</div>
        </div>
      </header>`;

    document.getElementById("role-switch-btn").addEventListener("click", () => {
      document.getElementById("role-switch-menu").classList.toggle("hidden");
    });
    document.querySelectorAll("#role-switch-menu [data-role]").forEach((btn) => {
      btn.addEventListener("click", () => this.setRole(btn.dataset.role));
    });
    document.addEventListener("click", (e) => {
      const menu = document.getElementById("role-switch-menu");
      const btn = document.getElementById("role-switch-btn");
      if (menu && !menu.contains(e.target) && !btn.contains(e.target)) menu.classList.add("hidden");
    });

    document.getElementById("global-search").addEventListener("keydown", (e) => {
      if (e.key === "Enter" && e.target.value.trim()) location.href = `transactions.html?q=${encodeURIComponent(e.target.value.trim())}`;
    });

    this.fillOptions();
    this.wireFx();
    this.applyPermissionGating();
    this.initToast();

    // Page-level guard: hiding the nav link isn't enough, a typed URL must be refused too
    // (the real app enforces this server-side with @permission_required).
    const perm = requiredPerm ?? NAV_ITEMS.find((i) => i.page === activePage)?.perm;
    if (!this.can(perm)) {
      document.getElementById("page").innerHTML = `
        <div class="p-8 max-w-xl mx-auto"><div class="card p-6 text-sm">
          <p class="font-semibold mb-1">No access</p>
          <p class="text-slate-500">The ${role.name} role doesn't have permission to open this page.</p>
        </div></div>`;
      throw new Error("No access: stop the page script"); // ponytail: halts the inline page script; fine for a static mockup
    }
  },

  // <select data-options="currency|country"> gets the reference list; data-value preselects.
  fillOptions() {
    document.querySelectorAll('select[data-options="currency"]').forEach((s) => {
      s.innerHTML = CURRENCIES.map((c) => `<option ${c === (s.dataset.value || MOCK.baseCurrency) ? "selected" : ""}>${c}</option>`).join("");
    });
    document.querySelectorAll('select[data-options="country"]').forEach((s) => {
      s.innerHTML = COUNTRIES.map(([code, name]) => `<option value="${code}" ${code === s.dataset.value ? "selected" : ""}>${name}</option>`).join("");
    });
  },

  // Any form with [data-fx="currency"|"rate"|"amount"|"base"] gets: rate prefilled from Settings
  // when the currency changes (still editable, and stored with the record), base amount computed live.
  wireFx() {
    document.querySelectorAll("form").forEach((form) => {
      const cur = form.querySelector('[data-fx="currency"]');
      const rate = form.querySelector('[data-fx="rate"]');
      if (!cur || !rate) return;
      const amount = form.querySelector('[data-fx="amount"]');
      const base = form.querySelector('[data-fx="base"]');
      const rateLabel = form.querySelector('[data-fx="rate-label"]');
      const update = () => {
        if (base) base.value = amount && amount.value && rate.value ? (Number(amount.value) / Number(rate.value)).toFixed(2) : "";
      };
      const onCurrency = () => {
        rate.value = MOCK.exchangeRates[cur.value] ?? "";
        if (rateLabel) rateLabel.textContent = `Exchange Rate (1 ${MOCK.baseCurrency} = ? ${cur.value})`;
        update();
      };
      cur.addEventListener("change", onCurrency);
      rate.addEventListener("input", update);
      amount?.addEventListener("input", update);
      onCurrency();
    });
  },

  // Edit/Archive on every financial row (SRS §48 — archive, never hard-delete).
  rowActions(perm, what = "record") {
    return `<span class="whitespace-nowrap" data-requires="${perm}">
      <button type="button" onclick="App.toast('Edit opens this ${what} in its form, prefilled (prototype).')" class="text-xs font-medium text-teal-700">Edit</button>
      <button type="button" onclick="App.toast('Archived. Restore it from Settings → Archive (prototype).')" class="text-xs font-medium text-slate-500 ml-2">Archive</button>
    </span>`;
  },

  applyPermissionGating() {
    document.querySelectorAll("[data-requires]").forEach((el) => {
      if (!this.can(el.dataset.requires)) el.classList.add("hidden");
    });
  },

  renderCards(container, cards) {
    container.innerHTML = cards
      .map(
        (c) => `
      <div class="card p-5">
        <p class="text-xs font-medium text-slate-500">${c.label}</p>
        <p class="text-2xl font-semibold text-slate-900 mt-1.5">${c.value}</p>
        ${c.sub ? `<p class="text-xs mt-1.5 ${c.subTone === "red" ? "text-rose-600" : c.subTone === "green" ? "text-emerald-600" : "text-slate-400"}">${c.sub}</p>` : ""}
      </div>`
      )
      .join("");
  },

  // Click a header to sort (SRS §43). Columns sort by `sort(row)` when given (dates, amounts),
  // else by their rendered text. `pageSize` adds paging (SRS §58).
  renderTable(container, opts) {
    const { columns, rows, empty = "No records yet.", pageSize } = opts;
    opts.sortState ??= container._table?.sortState;
    container._table = opts;
    if (!rows.length) {
      container.innerHTML = `<div class="p-10 text-center text-sm text-slate-400">${empty}</div>`;
      return;
    }
    let sorted = rows;
    const s = opts.sortState;
    if (s && columns[s.index]) {
      const col = columns[s.index];
      const key = col.sort || ((r) => String(col.render(r)).replace(/<[^>]*>/g, "").trim());
      sorted = [...rows].sort((a, b) => {
        const x = key(a), y = key(b);
        const cmp = typeof x === "number" && typeof y === "number" ? x - y : String(x).localeCompare(String(y), undefined, { numeric: true });
        return cmp * s.dir;
      });
    }
    const page = opts.page || 0;
    const shown = pageSize ? sorted.slice(page * pageSize, (page + 1) * pageSize) : sorted;

    const head = columns
      .map((c, i) => {
        const arrow = s && s.index === i ? (s.dir === 1 ? " ↑" : " ↓") : "";
        return `<th data-col="${i}" class="text-left font-medium text-slate-500 px-4 py-3 ${c.label ? "cursor-pointer select-none hover:text-slate-800" : ""} ${c.cls || ""}">${c.label}${arrow}</th>`;
      })
      .join("");
    const body = shown
      .map((row) => `<tr class="border-t border-slate-100">${columns.map((c) => `<td class="px-4 py-3 ${c.cls || ""}">${c.render(row)}</td>`).join("")}</tr>`)
      .join("");
    const pager = pageSize
      ? `<div class="flex items-center justify-between px-4 py-3 border-t border-slate-100 text-xs text-slate-500">
          <span>Showing ${page * pageSize + 1}–${page * pageSize + shown.length} of ${sorted.length}</span>
          <span class="flex gap-2">
            <button data-page="-1" class="px-3 py-1 rounded border border-slate-200 disabled:opacity-40" ${page === 0 ? "disabled" : ""}>Prev</button>
            <button data-page="1" class="px-3 py-1 rounded border border-slate-200 disabled:opacity-40" ${(page + 1) * pageSize >= sorted.length ? "disabled" : ""}>Next</button>
          </span>
        </div>`
      : "";
    container.innerHTML = `
      <table class="w-full text-sm data-table">
        <thead><tr>${head}</tr></thead>
        <tbody>${body}</tbody>
      </table>${pager}`;

    container.querySelectorAll("th[data-col]").forEach((th) =>
      th.addEventListener("click", () => {
        const i = Number(th.dataset.col);
        if (!columns[i].label) return;
        opts.sortState = { index: i, dir: s && s.index === i ? -s.dir : 1 };
        opts.page = 0;
        this.renderTable(container, opts);
      })
    );
    container.querySelectorAll("button[data-page]").forEach((b) =>
      b.addEventListener("click", () => {
        opts.page = page + Number(b.dataset.page);
        this.renderTable(container, opts);
      })
    );
    this.applyPermissionGating();
    (this._searches || []).forEach((fn) => fn());
  },

  wireTableSearch(inputEl, rowsSelector) {
    if (inputEl._wired) return;
    inputEl._wired = true;
    const apply = () => {
      const q = inputEl.value.toLowerCase();
      document.querySelectorAll(rowsSelector).forEach((row) => {
        row.style.display = row.textContent.toLowerCase().includes(q) ? "" : "none";
      });
    };
    (this._searches ||= []).push(apply); // re-applied after every re-render/sort
    inputEl.addEventListener("input", apply);
  },

  initTabs(root) {
    const buttons = root.querySelectorAll("[data-tab]");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("bg-white", "shadow-sm", "text-slate-900"));
        buttons.forEach((b) => b.classList.add("text-slate-500"));
        btn.classList.add("bg-white", "shadow-sm", "text-slate-900");
        btn.classList.remove("text-slate-500");
        root.querySelectorAll("[data-tab-panel]").forEach((p) => p.classList.add("hidden"));
        root.querySelector(`[data-tab-panel="${btn.dataset.tab}"]`)?.classList.remove("hidden");
      });
    });
  },

  openModal(id) {
    document.getElementById(id)?.classList.remove("hidden");
  },
  closeModal(id) {
    document.getElementById(id)?.classList.add("hidden");
  },

  initToast() {
    if (document.getElementById("mock-toast")) return;
    const el = document.createElement("div");
    el.id = "mock-toast";
    el.className = "toast card shadow-lg px-4 py-3 flex items-center gap-2 text-sm";
    document.body.appendChild(el);
  },
  toast(message) {
    const el = document.getElementById("mock-toast");
    if (!el) return;
    el.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-500"></span>${message}`;
    el.classList.add("show");
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => el.classList.remove("show"), 2600);
  },
};

document.addEventListener("submit", (e) => {
  if (e.target.matches("[data-mock-form]")) {
    e.preventDefault();
    App.toast(e.target.dataset.mockForm || "Saved (prototype — not persisted).");
    e.target.reset();
    e.target.querySelector('[data-fx="currency"]')?.dispatchEvent(new Event("change")); // re-prefill the rate
    const closeTarget = e.target.closest("[data-modal]");
    if (closeTarget) App.closeModal(closeTarget.id);
  }
});
