CREATE POLICY "Admins can view waitlist" ON public.waitlist_2026 FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can delete waitlist" ON public.waitlist_2026 FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));
GRANT SELECT, DELETE ON public.waitlist_2026 TO authenticated;