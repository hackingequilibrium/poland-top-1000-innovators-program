# Tickets page: University-only, two payment options

## What changes
- **Tickets page** becomes the University ticket page ($4,499), titled "University Ticket Registration".
- It offers two choices, clearly labeled:
  1. **Pay by card (Zeffy)** — the existing Zeffy form and the $0-donation note.
  2. **Pay by bank transfer** — same bank details and steps as the Business page (beneficiary, Chase Bank, SWIFT/ABA/account, "TOP 1000" reference, email info@polsv.org with name, job title, affiliation, email), but with **USD 4,499 per ticket**.
- **Business page** stays bank-transfer only (no Zeffy) — already the case; no change.
- Home page "University" button keeps linking to the Tickets page.
- **General "Get a Ticket" links** (top pill on every page, home hero, "Join the Summit" button, agenda page, travel page) currently all go to the Tickets page, which will now be University-only. They will instead go to the **ticket choice section on the home page** ("Secure Your Seat", with the Business and University boxes), so visitors pick their ticket first.

## Technical details
- Extract the bank-transfer block from BusinessTicketRegistration.tsx into a shared component taking an `amount` prop; use it on both pages so details stay in sync.
- Tickets.tsx: add a two-option layout (card / bank) above the Zeffy embed and bank section; update RouteMeta title for /tickets.
- Repoint generic links (TopNav, Index2026 hero, Sections "Join" button, Agenda, Hotels) to `/#tickets` (or `#tickets` on home), reusing the existing hash-scroll in ScrollToTop.
