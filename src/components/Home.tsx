import { motion } from 'framer-motion'
import { Lock, ArrowRight, Flame, Sparkles, Trophy } from 'lucide-react'
import { Hero } from './Hero'
import { levels } from '../data/curriculum'
import { isUnlocked, type Progress } from '../lib/store'
import { useNavigate } from 'react-router-dom'
import type { LevelRef } from '../data/curriculum.generated'

export function Home({
  progress,
  stats,
}: {
  progress: Progress
  stats: { done: number; total: number; xp: number; streak: number; accuracy: number }
}) {
  const navigate = useNavigate()
  const nextUp = levels
    .flatMap((l) => l.chapters.map((c) => ({ ...c, level: l.level })))
    .find((c) => !progress.read.includes(c.id))

  return (
    <div className="space-y-10">
      {nextUp ? (
        <Hero
          primaryLabel={stats.done ? `Continue · ${nextUp.title}` : 'Start learning'}
          onStart={() => navigate(`/chapter/${nextUp.id}`)}
          onBrowse={() => navigate('/level/1')}
        />
      ) : (
        <>
          <Hero primaryLabel="Start learning" onStart={() => navigate('/level/1')} onBrowse={() => navigate('/level/1')} />
          <div className="rounded-xl bg-brand-400/15 px-5 py-3 text-center font-semibold text-brand-300">
            🎉 Every chapter complete. Outstanding.
          </div>
        </>
      )}

      <section className="grid gap-3 sm:grid-cols-4">
        <StatTile icon={<Trophy size={18} />} label="Chapters done" value={`${stats.done}`} sub={`of ${stats.total}`} />
        <StatTile icon={<Sparkles size={18} />} label="XP earned" value={`${stats.xp}`} sub="10 per correct answer" />
        <StatTile icon={<Flame size={18} />} label="Day streak" value={`${stats.streak}`} sub="keep it going" />
        <StatTile icon={<span className="text-sm">🎯</span>} label="Quiz accuracy" value={`${stats.accuracy}%`} sub="all attempts" />
      </section>

      <section>
        <h2 className="mb-4 font-display text-2xl">The five levels</h2>
        <div className="space-y-3">
          {levels.map((l, i) => (
            <LevelCard key={l.level} level={l} index={i} progress={progress} />
          ))}
        </div>
      </section>
    </div>
  )
}

function StatTile({
  icon,
  label,
  value,
  sub,
}: {
  icon: React.ReactNode
  label: string
  value: string
  sub: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="card p-4"
    >
      <div className="mb-1 flex items-center gap-2 text-ink-400">
        {icon}
        <span className="text-xs uppercase tracking-wide">{label}</span>
      </div>
      {/* Numerals use the UI sans, not the display font: Svetze's "1" reads as "I". */}
      <div className="text-2xl font-semibold tabular-nums tracking-tight text-white">{value}</div>
      <div className="text-xs text-ink-500">{sub}</div>
    </motion.div>
  )
}

function LevelCard({ level, index, progress }: { level: LevelRef; index: number; progress: Progress }) {
  const navigate = useNavigate()
  const unlocked = isUnlocked(level.level, progress)
  const done = level.chapters.filter((c) => progress.read.includes(c.id)).length
  const pct = Math.round((done / level.chapters.length) * 100)

  return (
    <motion.button
      initial={{ opacity: 0, x: -14 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.07 }}
      disabled={!unlocked}
      onClick={() => navigate(`/level/${level.level}`)}
      className={`group flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition ${
        unlocked
          ? 'border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10'
          : 'cursor-not-allowed border-white/5 bg-white/[0.02] opacity-60'
      }`}
    >
      <div
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg font-semibold tabular-nums text-ink-950"
        style={{ background: unlocked ? level.color : '#3d4464' }}
      >
        {unlocked ? level.level : <Lock size={16} />}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h3 className="truncate font-display text-lg text-white">{level.title}</h3>
          <span className="shrink-0 text-xs text-ink-500">{level.chapters.length} ch</span>
        </div>
        <p className="truncate text-sm text-ink-400">{level.blurb}</p>
        <div className="mt-2 flex items-center gap-2">
          <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full"
              style={{ background: level.color }}
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
            />
          </div>
          <span className="w-9 text-right text-xs text-ink-500">{pct}%</span>
        </div>
      </div>
      {unlocked && <ArrowRight size={18} className="shrink-0 text-ink-500 transition group-hover:translate-x-1" />}
    </motion.button>
  )
}