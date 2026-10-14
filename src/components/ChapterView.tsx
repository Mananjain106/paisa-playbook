import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react'
import { BlockRenderer } from './BlockRenderer'
import { Quiz } from './Quiz'
import {
  findChapterRef,
  getChapter,
  isLevelLoaded,
  levelOf,
  levels,
  loadLevel,
  neighbours,
} from '../data/curriculum'
import { useNavigate } from 'react-router-dom'

const TOTAL_CHAPTERS = levels.reduce((n, l) => n + l.chapters.length, 0)

export function ChapterView({
  id,
  onQuiz,
  onRead,
}: {
  id: string
  onQuiz: (chapterId: string, correct: number, total: number) => void
  onRead: (chapterId: string) => void
}) {
  const navigate = useNavigate()
  const ref = findChapterRef(id)

  // Chapter content is code-split per level, so wait for this chapter's level
  // before deciding whether it is written or still a stub.
  const level = ref?.level ?? levelOf(id)
  const [loaded, setLoaded] = useState(() => isLevelLoaded(level))
  useEffect(() => {
    let alive = true
    if (isLevelLoaded(level)) {
      setLoaded(true)
      return
    }
    setLoaded(false)
    void loadLevel(level).then(() => alive && setLoaded(true))
    return () => {
      alive = false
    }
  }, [level])

  const chapter = ref ? getChapter(ref) : undefined
  const { prev, next } = neighbours(id)

  // Mark as read once the learner scrolls to the end.
  const sentinel = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = sentinel.current
    if (!el || !chapter) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && onRead(id)),
      { rootMargin: '0px 0px -80px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [id, chapter, onRead])

  if (!ref) return <p className="text-ink-400">Chapter not found.</p>

  if (!loaded) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <span className="h-6 w-6 animate-spin rounded-full border-2 border-brand-400 border-t-transparent" />
      </div>
    )
  }

  if (!chapter) {
    return (
      <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
        <div className="text-5xl">🚧</div>
        <h1 className="mt-3 font-display text-2xl">{ref.title}</h1>
        <p className="mt-2 text-ink-300">
          This chapter is queued for writing. The full {TOTAL_CHAPTERS}-chapter syllabus is mapped out — Level 1 is
          live now and each following level unlocks as it is finished.
        </p>
        <div className="mt-5 flex justify-center gap-3">
          <button onClick={() => navigate(`/level/${ref.level}`)} className="rounded-lg border border-white/15 px-4 py-2 text-sm text-ink-200 transition hover:text-white">
            ← Back to level
          </button>
          {next && (
            <button onClick={() => navigate(`/chapter/${next.id}`)} className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-ink-950 transition hover:bg-brand-400">
              Next available chapter →
            </button>
          )}
        </div>
      </div>
    )
  }

  return (
    <article className="mx-auto max-w-2xl">
      <motion.header initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand-300">
          Level {ref.level} · Chapter {ref.id.split('-')[1]}
        </div>
        <h1 className="mt-2 font-display text-3xl sm:text-4xl">{chapter.title}</h1>
        <p className="mt-2 text-ink-300">{chapter.subtitle}</p>
        <div className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-2.5 py-1 text-xs text-ink-400">
          <Clock size={12} />
          {chapter.minutes} min read
        </div>
      </motion.header>

      <div className="my-6 space-y-5">
        {chapter.blocks.map((b, i) => (
          <BlockRenderer key={i} block={b} index={i} />
        ))}
      </div>

      <div className="rounded-2xl border-l-4 border-brand-400 bg-brand-400/5 p-4">
        <div className="text-xs font-semibold uppercase tracking-widest text-brand-300">Takeaway</div>
        <p className="mt-1 text-ink-100">{chapter.takeaway}</p>
      </div>

      <div className="mt-6">
        <Quiz questions={chapter.quiz} chapterId={chapter.id} onComplete={(c, t) => onQuiz(chapter.id, c, t)} />
      </div>

      <div ref={sentinel} className="h-px" />

      <nav className="mt-8 flex items-center justify-between gap-3 border-t border-white/10 pt-5">
        {prev ? (
          <button onClick={() => navigate(`/chapter/${prev.id}`)} className="group flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm text-ink-300 transition hover:border-white/30 hover:text-white">
            <ArrowLeft size={14} className="transition group-hover:-translate-x-0.5" />
            <span className="max-w-[140px] truncate">{prev.title}</span>
          </button>
        ) : (
          <span />
        )}
        {next && (
          <button onClick={() => navigate(`/chapter/${next.id}`)} className="group flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-ink-950 transition hover:bg-brand-400">
            <span className="max-w-[160px] truncate">Next: {next.title}</span>
            <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
          </button>
        )}
      </nav>
    </article>
  )
}

