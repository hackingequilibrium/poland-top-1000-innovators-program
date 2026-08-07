CREATE TABLE public.speaker_suggestions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  speaker_name text not null,
  speaker_email text,
  speaker_title text,
  speaker_organization text,
  speaker_linkedin text,
  focus_area text not null,
  why_speaker text,
  submitter_name text not null,
  submitter_email text not null
);

GRANT INSERT ON public.speaker_suggestions TO anon;
GRANT SELECT, INSERT ON public.speaker_suggestions TO authenticated;
GRANT ALL ON public.speaker_suggestions TO service_role;

ALTER TABLE public.speaker_suggestions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a speaker suggestion"
  ON public.speaker_suggestions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Admins can view speaker suggestions"
  ON public.speaker_suggestions
  FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));