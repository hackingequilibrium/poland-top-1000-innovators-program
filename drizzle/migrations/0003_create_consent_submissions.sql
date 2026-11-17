CREATE TABLE public.consent_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  organization TEXT NOT NULL,
  photo_video_consent TEXT NOT NULL,
  workshop_photo_consent TEXT NOT NULL,
  poster_consent TEXT NOT NULL,
  acknowledged BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT ON public.consent_submissions TO anon;
GRANT SELECT, INSERT ON public.consent_submissions TO authenticated;
GRANT ALL ON public.consent_submissions TO service_role;

ALTER TABLE public.consent_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a consent form"
ON public.consent_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Admins can view consent submissions"
ON public.consent_submissions
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));