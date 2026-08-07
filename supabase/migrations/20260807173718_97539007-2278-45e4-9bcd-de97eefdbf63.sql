CREATE TABLE public.partner_inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  organization text not null,
  role text,
  email text not null,
  org_type text not null,
  area_of_interest text not null,
  website text,
  linkedin text,
  created_at timestamp with time zone not null default now()
);

GRANT SELECT, INSERT ON public.partner_inquiries TO anon;
GRANT SELECT, INSERT ON public.partner_inquiries TO authenticated;
GRANT ALL ON public.partner_inquiries TO service_role;

ALTER TABLE public.partner_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a partner inquiry"
  ON public.partner_inquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Admins can view partner inquiries"
  ON public.partner_inquiries
  FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete partner inquiries"
  ON public.partner_inquiries
  FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::app_role));