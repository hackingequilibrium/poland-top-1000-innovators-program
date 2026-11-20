CREATE TABLE public.ticket_invoice_tracking (
 registration_id uuid PRIMARY KEY REFERENCES public.ticket_registrations(id) ON DELETE CASCADE,
 invoice_mode text NOT NULL DEFAULT 'group' CHECK (invoice_mode IN ('group', 'individual')),
 group_issued boolean NOT NULL DEFAULT false,
 group_paid boolean NOT NULL DEFAULT false,
 individual_statuses jsonb NOT NULL DEFAULT '{}'::jsonb CHECK (jsonb_typeof(individual_statuses) = 'object')
);
GRANT SELECT, INSERT, UPDATE ON public.ticket_invoice_tracking TO authenticated;
GRANT ALL ON public.ticket_invoice_tracking TO service_role;
ALTER TABLE public.ticket_invoice_tracking ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins can view ticket invoice tracking" ON public.ticket_invoice_tracking FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'::public.app_role));
CREATE POLICY "Admins can add ticket invoice tracking" ON public.ticket_invoice_tracking FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'::public.app_role));
CREATE POLICY "Admins can edit ticket invoice tracking" ON public.ticket_invoice_tracking FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'::public.app_role)) WITH CHECK (public.has_role(auth.uid(), 'admin'::public.app_role));