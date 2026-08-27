# Rename business ticket labels

## Goal
Update all on-site references to the business tickets so they read "Business + Executive Retreat" (standard) and "Business Early Bird + Executive Retreat" (early-bird).

## What needs to change
- `src/components/top1000/Sections.tsx` — the `tiers` array in `TicketsSection`:
  - `"Business Early Bird"` → `"Business Early Bird + Executive Retreat"`
  - `"Business"` → `"Business + Executive Retreat"`

## Out of scope / owner action required
- The actual option names inside the embedded Zeffy checkout are controlled in the Zeffy dashboard. This plan only renames the marketing labels on our pages. If the user also wants the Zeffy dropdown/checkout text changed, that must be done in Zeffy directly.

## Verification
- Open the homepage `/` and confirm the tickets section shows the new names.
- Open `/tickets` and confirm the fallback text (if any) matches.
