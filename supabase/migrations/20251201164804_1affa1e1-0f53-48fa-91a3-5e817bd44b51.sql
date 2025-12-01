-- Add DELETE policies for RSVP tables
alter table public.rsvp_submissions enable row level security;

alter table public.guest_rsvp_submissions enable row level security;