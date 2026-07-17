-- Waitlist table for the Flipper Grill landing page.
-- Run once in the Supabase SQL editor.

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  created_at timestamptz not null default now()
);

-- RLS on with NO public policies: only the service role key (used by the
-- Next.js server action) can read/write this table.
alter table public.waitlist enable row level security;
