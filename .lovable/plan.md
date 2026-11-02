# Tickets 2 — registration form with invoice by email

A new page at `/tickets-2` (the current Tickets page stays as is). Not linked from the menu until you say so.

## Page content

1. **Heading + intro** — Summit II, 14–17 December 2026, matching the other pages' style.
2. **Two fee boxes side by side**
   - **University — USD 4,499 per participant.** Eligible: researchers, faculty, university leaders, and university technology transfer officers seeking to accelerate innovation, commercialization, and international collaboration.
   - **Business — USD 6,499 per participant.** Eligible: everyone else (company founders, executives, investors, corporate participants). Please confirm or give me exact wording.
   - Clicking a box selects that ticket type in the form below.
3. **Registration form**
   - **Ticket type:** University / Business (required)
   - **Number of tickets** (1–10, default 1); total shows live (e.g. 2 × 4,499 = USD 8,998)
   - **Contact person:** email and phone (required), country (required)
   - **Ticket holders** — one block per ticket ("Ticket 1", "Ticket 2"…), appearing automatically as the number changes. Each asks: full name, position / role, organization (all required)
   - **Billing details** (separate, since the invoice may go to a different organization than the attendee's): organization name (required), billing address (required), tax ID / VAT number (optional)
   - Optional notes field
4. **After submitting** — a thank-you message on screen: "Thank you — our team will send your invoice with payment details within 2 business days."

## Where requests go

- Every request is saved and listed in your **Admin** area (newest first), so nothing is lost.
- **Emails:** planned — a confirmation to the person who registered ("we'll send your invoice within 2 business days") and a notice to info@polsv.org with all their details.
- **Important:** the site's email sender (notify.polsv.org) currently shows as **failed setup**, so no emails can go out right now. I'll build the emails, but they'll only start sending once the email domain is set up again. Until then, requests are visible in Admin only.

## Technical details

- New table `ticket_registrations` (ticket_type, full_name, job_title, affiliation, email, phone, country, quantity, billing_address, tax_id, notes, created_at); anonymous insert-only with length checks, admin-only read/delete; GRANTs included.
- New page `src/pages/Tickets2.tsx` with zod validation; route + RouteMeta entry ("Register for a Ticket").
- Two new templates in `_shared/transactional-email-templates/` (`ticket-registration-confirmation`, `ticket-registration-admin` with fixed `to: info@polsv.org`), registered and deployed; sends wired after insert with idempotency keys from the row id, active once the domain is verified.
- Admin page gains a "Ticket registrations" list.
- Test: submit one entry, confirm the row, delete only that row.
