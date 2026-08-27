Update Partner page download buttons

## Goal
Make both PDF buttons on `/partner` download links with downward-pointing arrow icons.

## Current state
In `src/pages/Partner.tsx`:
- "Download Program Overview" already uses a download arrow icon.
- "View Sponsorship Opportunities" uses an external-link icon and does not signal a download.

## Change
Replace the external-link icon and label on the Sponsorship Opportunities button with a download arrow icon and a download-oriented label (e.g., "Download Sponsorship Opportunities"), matching the first button.

## Verification
- Open `/partner` in the preview.
- Confirm both buttons display downward arrows.
- Confirm both links download/open the PDF.
