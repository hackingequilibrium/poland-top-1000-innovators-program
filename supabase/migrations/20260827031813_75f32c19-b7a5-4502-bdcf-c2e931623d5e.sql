ALTER TABLE public.partner_inquiries
ADD COLUMN IF NOT EXISTS collaboration_type text,
ADD COLUMN IF NOT EXISTS details text;