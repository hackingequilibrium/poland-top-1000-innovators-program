-- Add triplering column to session_submissions table
ALTER TABLE public.session_submissions 
ADD COLUMN triplering BOOLEAN DEFAULT false;