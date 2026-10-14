import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BookOpen, ChevronLeft, Menu, Search, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { SearchBox } from './SearchBox'
import { AuthBar } from './AuthBar'
import { LogoMark } from './LogoMark'
import type { SyncState } from '../lib/sync'

/**
 * The header is deliberately two small "mini navbars" rather than one full-width
 * bar: a brand pill on the left, a menu pill on the right.
 *
 * The progress bar and the chapters / streak / XP chips used to live here. They
 * are gone from the header on purpose - the header is for orientation and
 * navigation only, and the same numbers live on the home page stat tiles.
 */
export function Hud({
  level,
  sync,
  onSignedIn,
}: {
  level: number
  sync: SyncState
  onSignedIn: () => void
}) {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const panelRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Any navigation closes the menu.
  useEffect(() => setOpen(false), [pathname])

  // Escape closes it and returns focus; clicking outside closes it.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    const onDown = (e: MouseEvent) => {
      if (!panelRef.current?.contains(e.target as Node) && !buttonRef.current?.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onDown)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onDown)
    }
  }, [open])

  return (
    /* No background, border or divider: the two pills sit on the page itself so
       they read as two separate floating bars rather than one navbar. The header
       is pointer-events-none so the gap between the pills stays click-through;
       each pill opts back in. */
    <header className="pointer-events-none sticky top-0 z-40">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3">
        {/* ------------------------------------------ mini navbar 1: brand */}
        <div className="pointer-events-auto flex min-w-0 items-center rounded-2xl border border-white/10 bg-ink-900/70 py-1.5 pr-4 pl-1.5 shadow-lg shadow-black/30 backdrop-blur-md transition hover:border-brand-400/30 hover:bg-ink-900/85">
          {/* Back up a level when we are inside one. */}
          {level > 0 && (
            <Link
              to={`/level/${level}`}
              aria-label="Back to level"
              className="mr-1.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 text-ink-300 transition hover:border-white/30 hover:text-white"
            >
              <ChevronLeft size={18} />
            </Link>
          )}

          <Link to="/" className="group flex min-w-0 items-center gap-2.5" aria-label="Paisa Playbook, home">
            {/* The favicon artwork, inline. */}
            <LogoMark className="h-9 w-9 shrink-0 rounded-xl transition group-hover:scale-105" />
            <span className="flex min-w-0 flex-col leading-none">
              {/* Svetze display face for the wordmark. */}
              <span className="gradient-text truncate font-display text-lg tracking-tight">
                Paisa Playbook
              </span>
              {/* Recoleta serif for the strapline, deliberately contrasting. */}
              <span className="mt-1 truncate font-serif text-[11px] text-ink-500">
                {level > 0 ? `Level ${level}` : 'money, taught honestly'}
              </span>
            </span>
          </Link>
        </div>

        {/* ------------------------------------------- mini navbar 2: menu */}
        <div className="pointer-events-auto relative shrink-0">
          <button
            ref={buttonRef}
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-haspopup="menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-11 items-center gap-2 rounded-2xl border border-white/10 bg-ink-900/70 px-3.5 text-ink-200 shadow-lg shadow-black/30 backdrop-blur-md transition hover:border-brand-400/30 hover:bg-ink-900/85 hover:text-white"
          >
            <span className="hidden text-xs font-medium sm:inline">Menu</span>
            <motion.span animate={{ rotate: open ? 90 : 0 }} transition={{ duration: 0.2 }}>
              {open ? <X size={18} /> : <Menu size={18} />}
            </motion.span>
          </button>

          <AnimatePresence>
            {open && (
              <motion.div
                ref={panelRef}
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.16 }}
                className="absolute right-0 z-50 mt-2 w-[min(21rem,calc(100vw-2rem))] rounded-2xl border border-white/10 bg-ink-900/95 p-3 shadow-2xl shadow-black/50 backdrop-blur-lg"
              >
                <SearchBox className="w-full" />

                <div className="mt-2 grid gap-1">
                  <Link
                    to="/search"
                    className="flex items-center gap-2.5 rounded-xl px-2.5 py-2 text-sm text-ink-200 transition hover:bg-white/5 hover:text-white"
                  >
                    <Search size={15} className="text-ink-400" />
                    Search all 508 chapters
                  </Link>
                  <Link
                    to="/glossary"
                    className="flex items-center gap-2.5 rounded-xl px-2.5 py-2 text-sm text-ink-200 transition hover:bg-white/5 hover:text-white"
                  >
                    <BookOpen size={15} className="text-ink-400" />
                    Glossary
                  </Link>
                </div>

                <div className="mt-2 border-t border-white/10 pt-2.5">
                  <AuthBar sync={sync} onSignedIn={onSignedIn} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}
