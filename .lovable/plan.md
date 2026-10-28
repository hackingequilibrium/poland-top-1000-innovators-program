# Tickets page with University / Business tabs

## What visitors will see
One Tickets page with two tabs at the top: **University** and **Business**.

- **University tab ($4,499)** — two options to choose from:
  - **Pay by card** — the existing Zeffy form, with the note about selecting $0 for Zeffy's optional donation.
  - **Pay by bank transfer** — the same bank details and steps as Business (beneficiary, Chase Bank, SWIFT/ABA/account, "TOP 1000" reference, email info@polsv.org with full name, job title, affiliation, email), showing **USD 4,499 per ticket**.
- **Business tab ($6,499)** — bank transfer only (no Zeffy), same content as the current Business page.

## Links
- All general "Get a Ticket" links (top pill, home page, agenda, travel page) keep going to the Tickets page — visitors pick their tab there.
- On the home page, the **University** box opens the University tab and the **Business** box opens the Business tab directly.
- The current Business registration page address will forward to the Business tab, so any shared links keep working.

## Technical details
- Shared `BankTransferDetails` component (amount prop) extracted from BusinessTicketRegistration.tsx.
- Tickets.tsx: tabs driven by `?type=university|business` (default university); inside University, a card/bank toggle. Zeffy embed only renders on University → card.
- Sections.tsx tier hrefs: `/tickets?type=business` and `/tickets?type=university`.
- `/business-ticket-registration` route becomes a redirect to `/tickets?type=business`; RouteMeta title for /tickets stays general.
