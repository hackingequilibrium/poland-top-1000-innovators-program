# Ticket purchase page with Zeffy embed

Add a standalone `/tickets` page that hosts the Zeffy ticketing form. Nothing links to it yet — you open it directly to test, and we wire up a "Buy Tickets" button later.

## What the page looks like

- Same dark brand background as the rest of the site (`#0F1435`), white text.
- Simple header: PolSV logo linking home, plus the event title.
- Heading: "Get Your Tickets" with a short line naming the 2026 summit dates (9–12 November 2026).
- The Zeffy form rendered full width, centered, max ~900px, with generous vertical padding so it breathes on desktop and mobile.
- Small footer line with a link back to the homepage and to PolSV contact.

## Technical notes

New file `src/pages/Tickets.tsx`, new route `/tickets` in `src/App.tsx` (above the catch-all).

The Zeffy snippet you pasted is raw HTML with an inline `<script>`. React strips inline scripts from JSX, so the embed is wired up like this:

- Render the two container divs (`data-zeffy-embed` and `data-zeffy-embed-fallback`) as normal JSX, keeping the exact `data-form-url` and `data-zeffy-embed-src` values from your snippet.
- In a `useEffect`, create the `https://www.zeffy.com/embed/v2/zeffy-embed.js` script element, append it to the page, and attach the same fallback behaviour as an `onerror` handler: if the script fails to load, unhide the fallback div and set the iframe's `src` from `data-zeffy-embed-src`.
- Clean up the script tag on unmount so navigating away and back doesn't stack duplicates.
- The fallback iframe keeps its inline positioning styles as a React `style` object, and `allowTransparency` / `allowpaymentrequest` are passed through so payment requests work.

The fallback wrapper uses a fixed 450px height as in your snippet; if the live Zeffy form renders taller than that in the fallback path, we can bump it after you test.

## Not in this change

- No "Buy Tickets" button added to the homepage or nav yet.
- No backend, no order tracking — Zeffy handles the transaction entirely on their side.

Once approved I'll build it, then you can visit `/tickets` in the preview to confirm the form loads.