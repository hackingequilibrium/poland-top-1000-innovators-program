DROP POLICY IF EXISTS "Anyone can join waitlist" ON public.waitlist_2026;

ALTER TABLE public.waitlist_2026 DROP COLUMN interest;

CREATE POLICY "Anyone can join waitlist" ON public.waitlist_2026 FOR INSERT TO anon, authenticated WITH CHECK (
  length(name) BETWEEN 1 AND 120
  AND length(email) BETWEEN 3 AND 255
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
);