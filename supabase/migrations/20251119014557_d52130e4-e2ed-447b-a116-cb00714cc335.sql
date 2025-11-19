-- Allow admins to delete session submissions
CREATE POLICY "Admins can delete submissions"
ON public.session_submissions
FOR DELETE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));