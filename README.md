# Frontend Mockup — Personal Wealth & Finance Management

A static, backend-free UI prototype of the application described in
`../docs/PLAN.md`. Every number on every screen is dummy data from
`assets/js/data.js` — nothing here talks to Django, Mongo, or any backend.
Its only purpose is to validate the screens, flows and the admin/permissions
model before any backend work starts.

## How to view it

Just open `index.html` (or any page, e.g. `dashboard.html`) directly in a
browser — double-click it, or drag it into a browser window. No server, no
build step, no install required.

If your browser blocks local script loading for any reason, serve the
folder instead:

```
cd frontend-mockup
python -m http.server 8080
```

then open `http://localhost:8080`.

Requires internet access on first load (Tailwind CSS and Chart.js load from
CDN — intentionally not vendored into the repo for a throwaway prototype).

## What's real vs. what's not

- **Real:** navigation between all 16 screens, tabs, filters/search on
  tables, the Add Investment wizard's step logic, modals, and — the
  important one — the **role switcher** in the top bar, which actually
  hides/shows nav items and buttons based on the selected role's
  permissions (persisted in `localStorage`), to demonstrate the admin +
  granular-permissions model from the plan.
- **Not real:** forms don't persist anything. Submitting shows a toast and
  resets — this is a UX/layout review tool, not a working app.

## Screen → plan mapping

| File | Plan section |
|---|---|
| `login.html` | Screen 1 |
| `dashboard.html` | §39 Main Dashboard |
| `accounts.html` | §12 Accounts |
| `income.html` | §7–§9 Income Management |
| `expenses.html` | §10–§11 Expense Management |
| `investments.html` | §40 Portfolio Dashboard |
| `investment-types.html` | §14–§15 Dynamic Investment Types / Custom Fields |
| `investment-detail.html` | §16 Investment Record, §26–§29, §4.8 Construction Tracker (not in the SRS — see below) |
| `add-investment.html` | §54 Add Investment UX (the wizard) |
| `liabilities.html` | §31–§32 Liabilities & Loans |
| `transactions.html` | §43 unified, filterable ledger |
| `reports.html` | §41–§42 Reports & Export |
| `documents.html` | §44 Documents |
| `reminders.html` | §45–§46 Recurring & Reminders |
| `settings.html` | Profile, §35 base currency, §36 manual exchange rates, §3 Users & Roles (new), §47 Audit Trail, §48 Archive/restore, §57 Backup |

Try switching "Viewing as" in the top bar between **Admin**, **Bookkeeper**,
**Accountant** and **Viewer** on any page to see the permission model in
action — that's one of two things beyond the SRS this mockup validates.

The other: open `investment-detail.html?id=inv-villa1` (**Al Barari Villa —
Under Construction**, reachable from the Portfolio list) and look at its
**Construction Tracker** tab — budget broken into user-defined line items,
budget-vs-actual by category, a cumulative spend chart, and a daily cost log
with a one-tap "Log Today's Cost" entry. Not in the SRS; see `docs/PLAN.md`
§1.10 and §4.8 for why it's there and how it's designed to generalize beyond
just property. The toggle to enable it also shows up in step 4 of the Add
Investment wizard.
