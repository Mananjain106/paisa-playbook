-- Paisa Playbook — progress sync schema
--
-- Run this once in the Supabase SQL editor (Dashboard → SQL → New query), or via
-- `supabase db push`. It is idempotent.
--
-- Design notes:
--  * One row per (user, chapter) for reading progress and best quiz score.
--  * Upserts use the caller's auth.uid(), so RLS means a client can only ever
--    see and write its own rows.
--  * Quiz attempts are stored as best-of rather than every attempt, which keeps
--    the sync payload small (the client merges on max(correct)).

-- ---------------------------------------------------------------- progress
create table if not exists public.chapter_progress (
  user_id uuid not null references auth.users (id) on delete cascade,
  chapter_id text not null,
  score_correct integer not null default 0,
  score_total integer not null default 0,
  read_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (user_id, chapter_id)
);

-- ------------------------------------------------------------------- RLS
alter table public.chapter_progress enable row level security;

drop policy if exists "own rows only" on public.chapter_progress;
create policy "own rows only" on public.chapter_progress
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- ------------------------------------------------------------ updated_at
-- Keeps updated_at fresh without trusting the client clock.
create or replace function public.touch_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists chapter_progress_touch on public.chapter_progress;
create trigger chapter_progress_touch
  before update on public.chapter_progress
  for each row
  execute function public.touch_updated_at();

-- ------------------------------------------------------------------ index
-- Speeds up "load my whole progress" on login.
create index if not exists chapter_progress_user_idx
  on public.chapter_progress (user_id);
-- --------------------------------------------------------------- merge RPC
-- Upserts progress in one round trip, keeping the BETTER quiz score when a
-- chapter already exists. This makes sync idempotent and safe from two devices.
create or replace function public.merge_progress(rows jsonb)
returns void
language plpgsql
security invoker
as $$
begin
  insert into public.chapter_progress (user_id, chapter_id, score_correct, score_total, read_at)
  select
    (r->>'user_id')::uuid,
    r->>'chapter_id',
    coalesce((r->>'score_correct')::integer, 0),
    coalesce((r->>'score_total')::integer, 0),
    coalesce((r->>'read_at')::timestamptz, now())
  from jsonb_array_elements(rows) as r
  on conflict (user_id, chapter_id) do update
    set
      -- Only improve, never regress.
      score_correct = greatest(public.chapter_progress.score_correct, excluded.score_correct),
      score_total = case
        when excluded.score_correct > public.chapter_progress.score_correct
          then excluded.score_total
        else public.chapter_progress.score_total
      end,
      read_at = least(public.chapter_progress.read_at, excluded.read_at),
      updated_at = now();
end;
$$;
