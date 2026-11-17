CREATE TABLE public.ip_workshop_signups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  surname TEXT NOT NULL,
  organization TEXT NOT NULL,
  email TEXT NOT NULL,
  mobile TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT ON public.ip_workshop_signups TO anon;
GRANT SELECT, INSERT ON public.ip_workshop_signups TO authenticated;
GRANT ALL ON public.ip_workshop_signups TO service_role;

ALTER TABLE public.ip_workshop_signups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can sign up for the IP workshop"
ON public.ip_workshop_signups
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Admins can view IP workshop signups"
ON public.ip_workshop_signups
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));