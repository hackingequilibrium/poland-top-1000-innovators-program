-- Create expert_recommendations table
CREATE TABLE public.expert_recommendations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  submitter_name TEXT NOT NULL,
  submitter_email TEXT NOT NULL,
  expert_full_name TEXT NOT NULL,
  expert_email TEXT,
  expert_phone TEXT,
  expert_linkedin TEXT,
  expert_sector TEXT NOT NULL,
  warm_intro BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.expert_recommendations ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit recommendations
CREATE POLICY "Anyone can submit expert recommendations"
ON public.expert_recommendations
FOR INSERT
WITH CHECK (true);

-- Allow admins to view all recommendations
CREATE POLICY "Admins can view all expert recommendations"
ON public.expert_recommendations
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));