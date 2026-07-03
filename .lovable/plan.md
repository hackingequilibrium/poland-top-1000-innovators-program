The current form only sends `name` and `email`, but the database still requires an `interest` value, so submissions fail with a database error. I will make the waitlist work as a simple name+email form.

## Plan

1. **Database migration** — remove the unused `interest` column and update the RLS policy so only `name` and `email` are required.
   - Drop `interest` from `public.waitlist_2026`.
   - Replace the policy with a rule that checks `name` length and `email` format.
   - Keep `INSERT` grants for `anon` and `authenticated` and `ALL` for `service_role`.

2. **Frontend validation** — add Zod schema validation before submitting.
   - Name: trimmed, non-empty, max 120 characters.
   - Email: trimmed, valid format, max 255 characters.
   - Show inline or toast errors instead of the generic "Something went wrong" message.

3. **Form submission flow** — keep the existing Supabase insert, but handle it cleanly.
   - Show a loading state on the button while submitting.
   - On success, clear the form and show the existing success message.
   - On failure, show a specific toast based on the error.

4. **Optional duplicate prevention** — I can add a unique index on `email` so the same address cannot be added twice. Let me know if you want that.

5. **Verify** — submit the form in the preview and confirm the row is created in the database.

## Files likely to change
- `supabase/migrations/...` (new migration for schema/policy change)
- `src/pages/Index2026.tsx` (validation + submission handling)

No other pages or styles are affected.