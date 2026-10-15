import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Check, ChevronRight, Lock } from 'lucide-react'
import { getChapter, isAuthored, isLevelLoaded, levels, loadLevel } from '../data/curriculum'
import { useNavigate } from 'react-router-dom'
import { isUnlocked, type Progress } from '../lib/store'

export function LevelView({ level, progress }: { level: number; progress: Progress }) {
  const navigate = useNavigate()

  // The "written / coming soon" labels come from code-split chapter content.
  const [loaded, setLoaded] = useState(() => isLevelLoaded(level))
  useEffect(() => {
    let alive = true
    if (isLevelLoaded(level)) {
      setLoaded(true)
      return
    }
    void loadLevel(level).then(() => alive && setLoaded(true))
    return () => {
      alive = false
    }
  }, [level])

  const meta = levels.find((l) => l.level === level)
  if (!meta) return <p className="text-ink-400">Level not found.</p>

  const unlocked = isUnlocked(level)
  const done = meta.chapters.filter((c) => progress.read.includes(c.id)).length
  const authoredCount = loaded ? meta.chapters.filter((c) => isAuthored(c.id)).length : 0

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <div className="flex items-center gap-3">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl text-lg font-semibold tabular-nums text-ink-950"
            style={{ background: meta.color }}
          >
            {level}
          </div>
          <div>
            <h1 className="font-display text-2xl">{meta.title}</h1>
            <p className="text-sm text-ink-400">{meta.blurb}</p>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
            <motion.div className="h-full rounded-full" style={{ background: meta.color }} animate={{ width: `${(done / meta.chapters.length) * 100}%` }} />
          </div>
          <span className="text-xs text-ink-400">
            {done}/{meta.chapters.length} done
          </span>
        </div>
        {authoredCount < meta.chapters.length && (
          <p className="mt-3 rounded-lg bg-amber-400/10 px-3 py-2 text-xs text-amber-200">
            {authoredCount} of {meta.chapters.length} chapters are live. The rest arrive as the course is
            expanded — the full syllabus is already listed below.
          </p>
        )}
      </div>

      {!unlocked && (
        <p className="rounded-xl border border-amber-400/30 bg-amber-400/10 p-3 text-sm text-amber-200">
          This level is still being written — it is not released yet. The full syllabus is listed below so you
          can see what is coming.
        </p>
      )}

      <div className="grid gap-2 sm:grid-cols-2">
        {meta.chapters.map((c, i) => {
          const read = progress.read.includes(c.id)
          const score = progress.scores[c.id]
          const authored = isAuthored(c.id)
          // Authored chapters carry a fuller, more readable title than the raw
          // syllabus label (e.g. "FD" -> "Fixed Deposits").
          const title = getChapter(c)?.title ?? c.title
          return (
            <motion.button
              key={c.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(i, 24) * 0.02 }}
              onClick={() => navigate(`/chapter/${c.id}`)}
              className={`group flex items-center gap-3 rounded-xl border p-3 text-left transition ${
                read ? 'border-brand-400/30 bg-brand-400/5' : 'border-white/10 bg-white/5 hover:border-white/30'
              } ${authored ? '' : 'opacity-70'}`}
            >
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                  read ? 'bg-brand-400 text-ink-950' : 'bg-white/10 text-ink-400'
                }`}
              >
                {read ? <Check size={14} /> : i + 1}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm text-white">{title}</span>
                <span className="block text-[11px] text-ink-500">
                  {authored ? (score ? `Quiz ${score.correct}/${score.total}` : 'Not started') : 'Coming soon'}
                  {!authored && <Lock size={10} className="ml-1 inline" />}
                </span>
              </span>
              <ChevronRight size={16} className="shrink-0 text-ink-600 transition group-hover:translate-x-0.5" />
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}