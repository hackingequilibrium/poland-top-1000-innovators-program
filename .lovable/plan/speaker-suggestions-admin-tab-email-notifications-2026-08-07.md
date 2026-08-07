# Speaker Suggestions: Admin Tab + Email Notifications

## Where submissions go today

Every "Suggest a Speaker" form submission is saved in the database table `speaker_suggestions`. Only admins can read it, but there is currently no screen showing it and no notification — so today the entries are only visible by querying the database directly.

## What to build

### 1. Admin panel tab "Speakers 2026"
Add a new tab in the admin panel (next to Submissions, RSVP, Experts, Waitlist) that lists all speaker suggestions:
- Columns: submitted date, speaker name, title, organization, email, LinkedIn, focus area, why they'd be a great speaker, and who suggested them (name + email).
- Same styling as the existing tabs (square corners, red active state), newest first, with a CSV export button matching the other tabs if present.

### 2. Email notification to agata.braja@polsv.org
Each new suggestion triggers an email to agata.braja@polsv.org containing all the submitted details, with the suggester's email as reply-to.

Sending email requires a sender domain you own (e.g. `notify.polsv.org`). Once that is set up, I will:
- Set up the email infrastructure and a branded notification template matching the navy/baby-blue site style.
- Trigger the email from the form submission after the record is saved, so a failed email never blocks the submission.

## Technical notes
- New tab in `src/pages/Admin.tsx` fetching from `speaker_suggestions` (admin-only read policy already exists).
- Email: Lovable email infrastructure + a `speaker-suggestion-notification` template, sent via the shared send function invoked from `src/pages/SuggestSpeaker.tsx` after insert.
- No schema changes needed.

## Needed from you
Set up the sender email domain (a domain you own, e.g. polsv.org):

<presentation-actions>
<presentation-open-email-setup>Set up email domain</presentation-open-email-setup>
</presentation-actions>

If you'd rather skip email for now, I can build the admin tab only.
