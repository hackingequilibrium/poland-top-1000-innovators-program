
CREATE TABLE public.waitlist_2026 (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  interest TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT INSERT ON public.waitlist_2026 TO anon, authenticated;
GRANT ALL ON public.waitlist_2026 TO service_role;
ALTER TABLE public.waitlist_2026 ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can join waitlist" ON public.waitlist_2026 FOR INSERT TO anon, authenticated WITH CHECK (
  length(name) BETWEEN 1 AND 120
  AND length(email) BETWEEN 3 AND 255
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND interest IN ('researcher','company','university','other')
);
