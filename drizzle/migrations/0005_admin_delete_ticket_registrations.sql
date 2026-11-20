CREATE POLICY "Admins can delete ticket registrations"
ON public.ticket_registrations
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));