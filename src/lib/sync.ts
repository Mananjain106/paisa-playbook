import type { Session, SupabaseClient } from '@supabase/supabase-js'
import { isSyncEnabled, supabase } from './supabase'
import type { Progress, QuizResult } from './store'

/**
 * Cross-device sync.
 *
 * The local progress record in localStorage is always the source of truth for
 * the running app. Supabase is a mirror: on sign-in we pull the remote rows and
 * merge them in (best-of on quiz scores, union on read chapters), then push the
 * merged result back. This makes the merge safe in both directions and means a
 * device that was offline for a week catches up without losing local work.
 *
 * Everything degrades to a no-op when the env vars are absent, so the app runs
 * fully offline with no backend.
 */

export type SyncStatus = 'disabled' | 'signed-out' | 'signing-in' | 'syncing' | 'synced' | 'error'

export type RemoteRow = {
  chapter_id: string
  score_correct: number
  score_total: number
  read_at: string
}

export type SyncState = {
  status: SyncStatus
  userEmail: string | null
  lastSyncedAt: number | null
  error: string | null
}

export const hasSupabase = isSyncEnabled

/**
 * Merge two progress records, keeping the best result for each chapter.
 * `read` is a union, `scores` is best-of by correct count.
 */
export function mergeProgress(local: Progress, remote: Partial<Progress>): Progress {
  const read = Array.from(new Set([...local.read, ...(remote.read ?? [])]))
  const scores: Record<string, QuizResult> = { ...local.scores }

  for (const [id, s] of Object.entries(remote.scores ?? {})) {
    const mine = scores[id]
    if (!mine || s.correct > mine.correct) scores[id] = { correct: s.correct, total: s.total }
  }

  // XP is derived from read + best scores, not stored, so it follows the merge.
  const xp =
    read.length * 5 + Object.values(scores).reduce((n, s) => n + s.correct * 10, 0)

  const streak = Math.max(local.streak, remote.streak ?? 0)
  const lastVisit = local.lastVisit || (remote.lastVisit ?? '')

  return { ...local, read, scores, xp, streak, lastVisit }
}

/** Convert a local Progress into rows for the `chapter_progress` table. */
export const progressToRows = (p: Progress): RemoteRow[] =>
  p.read.map((chapterId) => {
    const s = p.scores[chapterId]
    return {
      chapter_id: chapterId,
      score_correct: s?.correct ?? 0,
      score_total: s?.total ?? 0,
      read_at: new Date().toISOString(),
    }
  })

/** Turn remote rows back into a Partial<Progress> to merge. */
export const rowsToProgress = (rows: RemoteRow[]): Partial<Progress> => {
  const scores: Record<string, QuizResult> = {}
  const read: string[] = []
  for (const r of rows) {
    read.push(r.chapter_id)
    if (r.score_total > 0) scores[r.chapter_id] = { correct: r.score_correct, total: r.score_total }
  }
  return { read, scores }
}

export async function sendMagicLink(
  client: SupabaseClient,
  email: string,
): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    const { error } = await client.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${window.location.origin}/` },
    })
    if (error) return { ok: false, error: error.message }
    return { ok: true }
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : 'Unknown error' }
  }
}

export async function loadRemote(
  client: SupabaseClient,
  userId: string,
): Promise<RemoteRow[]> {
  const { data, error } = await client
    .from('chapter_progress')
    .select('chapter_id, score_correct, score_total, read_at')
    .eq('user_id', userId)
  if (error) throw new Error(error.message)
  return (data ?? []) as RemoteRow[]
}

export async function pushRemote(
  client: SupabaseClient,
  userId: string,
  rows: RemoteRow[],
): Promise<void> {
  if (!rows.length) return
  const payload = rows.map((r) => ({ ...r, user_id: userId, updated_at: new Date().toISOString() }))
  // `score_correct`/`score_total` use the greater value on conflict so a phone
  // and a laptop can both write without the weaker score clobbering the better.
  const { error } = await client.rpc('merge_progress', { rows: payload })
  if (error) {
    // The RPC is a convenience; fall back to a plain upsert if it is missing.
    const fallback = await client
      .from('chapter_progress')
      .upsert(payload, { onConflict: 'user_id,chapter_id' })
    if (fallback.error) throw new Error(fallback.error.message)
  }
}

export async function signOut(client: SupabaseClient): Promise<void> {
  await client.auth.signOut()
}

export function getClient(): SupabaseClient | null {
  return supabase
}

export function onAuthChange(cb: (session: Session | null) => void) {
  if (!supabase) return () => {}
  const { data } = supabase.auth.onAuthStateChange((_event, session) => cb(session))
  return () => data.subscription.unsubscribe()
}

export async function currentUser(): Promise<{ id: string; email: string | null } | null> {
  if (!supabase) return null
  const { data } = await supabase.auth.getUser()
  const u = data?.user
  return u ? { id: u.id, email: u.email ?? null } : null
}