CREATE TABLE public.ticket_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  ticket_type text NOT NULL CHECK (ticket_type IN ('university','business')),
  quantity integer NOT NULL CHECK (quantity BETWEEN 1 AND 10),
  contact_name text NOT NULL CHECK (length(contact_name) BETWEEN 1 AND 150),
  contact_email text NOT NULL CHECK (length(contact_email) BETWEEN 3 AND 255 AND contact_email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  contact_phone text NOT NULL CHECK (length(contact_phone) BETWEEN 3 AND 50),
  country text NOT NULL CHECK (length(country) BETWEEN 1 AND 100),
  holders jsonb NOT NULL,
  billing_org text NOT NULL CHECK (length(billing_org) BETWEEN 1 AND 200),
  billing_address text NOT NULL CHECK (length(billing_address) BETWEEN 1 AND 500),
  tax_id text CHECK (tax_id IS NULL OR length(tax_id) <= 100),
  notes text CHECK (notes IS NULL OR length(notes) <= 2000),
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT holders_match CHECK (jsonb_typeof(holders) = 'array' AND jsonb_array_length(holders) = quantity)
);
GRANT INSERT ON public.ticket_registrations TO anon, authenticated;
GRANT SELECT, DELETE ON public.ticket_registrations TO authenticated;
GRANT ALL ON public.ticket_registrations TO service_role;
ALTER TABLE public.ticket_registrations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit a ticket registration" ON public.ticket_registrations FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Admins can view ticket registrations" ON public.ticket_registrations FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));