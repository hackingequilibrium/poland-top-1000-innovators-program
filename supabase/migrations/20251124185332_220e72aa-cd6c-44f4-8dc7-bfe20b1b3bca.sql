-- Create guest_rsvp_submissions table
CREATE TABLE public.guest_rsvp_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  surname TEXT NOT NULL,
  organization TEXT,
  role TEXT,
  email TEXT NOT NULL,
  linkedin TEXT,
  attendance TEXT NOT NULL,
  interested_sectors TEXT[] NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.guest_rsvp_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to submit
CREATE POLICY "Anyone can submit guest RSVP"
ON public.guest_rsvp_submissions
FOR INSERT
WITH CHECK (true);

-- Create policy for admins to view all guest RSVPs
CREATE POLICY "Admins can view all guest RSVPs"
ON public.guest_rsvp_submissions
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));