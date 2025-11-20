-- Create RSVP submissions table
CREATE TABLE public.rsvp_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  attendance TEXT NOT NULL,
  interested_sectors TEXT[] NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.rsvp_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit RSVP
CREATE POLICY "Anyone can submit RSVP"
ON public.rsvp_submissions
FOR INSERT
WITH CHECK (true);

-- Allow admins to view all RSVPs
CREATE POLICY "Admins can view all RSVPs"
ON public.rsvp_submissions
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));