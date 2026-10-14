import { useEffect, useState } from 'react'
import { Cloud, CloudOff, Loader2, LogOut, Mail } from 'lucide-react'
import { getClient, onAuthChange, sendMagicLink, signOut } from '../lib/sync'
import { hasSupabase } from '../lib/sync'
import type { SyncState } from '../lib/sync'

/**
 * Magic-link sign-in. No passwords: the user types an email, Supabase emails a
 * one-time link, and the session is persisted by the client. Progress is pulled
 * and merged into the local record as soon as a session appears.
 */
export function AuthBar({ sync, onSignedIn }: { sync: SyncState; onSignedIn: () => void }) {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // React to session changes (magic link click, sign-out elsewhere).
  useEffect(() => {
    if (!hasSupabase) return
    return onAuthChange((session) => {
      if (session) onSignedIn()
      else
        setSent(false)
    })
  }, [onSignedIn])

  if (!hasSupabase) {
    return (
      <span
        className="flex items-center gap-1.5 text-[11px] text-ink-600"
        title="Add VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY to enable cross-device sync"
      >
        <CloudOff size={13} />
        local only
      </span>
    )
  }

  if (sync.userEmail) {
    return (
      <div className="flex items-center gap-2">
        <span className="flex items-center gap-1.5 text-[11px] text-brand-300" title={sync.userEmail ?? ''}>
          {sync.status === 'syncing' ? (
            <Loader2 size={13} className="animate-spin" />
          ) : sync.status === 'error' ? (
            <CloudOff size={13} className="text-rose-300" />
          ) : (
            <Cloud size={13} />
          )}
          {sync.status === 'syncing'
            ? 'syncing…'
            : sync.status === 'error'
              ? 'sync failed'
              : 'synced'}
        </span>
        <button
          onClick={() => void signOut(getClient()!)}
          className="flex items-center gap-1 text-[11px] text-ink-500 transition hover:text-rose-300"
        >
          <LogOut size={12} />
          sign out
        </button>
      </div>
    )
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    const client = getClient()
    if (!client || !email.trim()) return
    setBusy(true)
    setError(null)
    const res = await sendMagicLink(client, email.trim())
    setBusy(false)
    if (res.ok) setSent(true)
    else setError(res.error)
  }

  if (sent) {
    return (
      <span className="flex items-center gap-1.5 text-[11px] text-brand-300">
        <Mail size={13} />
        check your inbox
      </span>
    )
  }

  return (
    <form onSubmit={submit} className="flex items-center gap-1.5">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="sync across devices"
        className="w-40 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-white placeholder:text-ink-600 focus:border-brand-400/50 focus:outline-none"
        aria-label="Email for cross-device sync"
      />
      <button
        type="submit"
        disabled={busy}
        className="rounded-lg border border-white/15 px-2 py-1 text-[11px] text-ink-200 transition hover:border-white/35 hover:text-white disabled:opacity-40"
      >
        {busy ? '…' : 'sign in'}
      </button>
      {error && (
        <span className="max-w-[160px] truncate text-[11px] text-rose-300" title={error}>
          {error}
        </span>
      )}
    </form>
  )
}