import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import TechText from './TechText'
import { releasedLevels, releasedChapterCount } from '../data/curriculum'
import { SIMS } from './sims'

/**
 * Home hero.
 *
 * The centrepiece is React Bits' TechText: a canvas wordmark whose letters
 * dissolve into dashed vector paths near the cursor and spring back when you
 * drag them. It reacts to the pointer, so the page immediately feels alive
 * rather than static.
 *
 * Canvas text is not selectable, so the component is `role="img"` with its own
 * label; the accessible content of the page lives in the elements below it.
 */

// Derived from the released levels and the sim registry so the marketing
// numbers can never drift from what the app actually ships.
const STATS = [
  { value: String(releasedChapterCount), label: 'chapters live' },
  { value: String(Object.keys(SIMS).length), label: 'interactive labs' },
  { value: String(releasedLevels.length), label: 'levels live' },
]

export function Hero({
  primaryLabel,
  onStart,
  onBrowse,
}: {
  primaryLabel: string
  onStart: () => void
  onBrowse: () => void
}) {
  const [compact, setCompact] = useState(false)
  const stageRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  // The canvas wordmark needs a deliberate height; shrink it on small screens.
  useEffect(() => {
    const el = stageRef.current
    if (!el) return
    const mq = window.matchMedia('(max-width: 640px)')
    const apply = () => setCompact(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10">
      {/* Backdrop: slow-drifting aurora + a fine grid, both decorative. */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-32 h-[420px] w-[420px] animate-[float_11s_ease-in-out_infinite] rounded-full bg-brand-400/18 blur-[110px]" />
        <div className="absolute -right-20 top-24 h-[360px] w-[360px] animate-[float_14s_ease-in-out_infinite_reverse] rounded-full bg-sky-400/15 blur-[110px]" />
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.10) 1px, transparent 1px)',
            backgroundSize: '46px 46px',
            maskImage: 'radial-gradient(ellipse at 50% 35%, black, transparent 72%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 50% 35%, black, transparent 72%)',
          }}
        />
      </div>

      <div className="relative px-5 pt-10 pb-8 sm:px-10 sm:pt-14">
        {/* The wordmark is canvas, so it can't be the page's heading. This keeps
            a real <h1> in the document outline for screen readers and SEO. */}
        <h1 className="sr-only">
          Paisa Playbook — learn personal finance in India by playing with it
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1.5 text-xs text-brand-300"
        >
          <Sparkles size={13} />
          Levels 1–{releasedLevels.length} are live · {releasedChapterCount} chapters written
        </motion.div>

        {/* The interactive wordmark. Move your cursor across it, or drag a letter. */}
        <motion.div
          ref={stageRef}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className={compact ? 'h-28' : 'h-40 sm:h-56'}
        >
          <TechText
            text="PAISA PLAYBOOK"
            fontFamily="'Svetze', system-ui, sans-serif"
            fontWeight={700}
            fontSize={compact ? 44 : 78}
            letterSpacing={-0.02}
            color="#ffffff"
            accentColor="#34e0a1"
            reach={compact ? 120 : 190}
            softness={0.65}
            dashLength={5}
            dashGap={3}
            strokeWidth={1.4}
            lineStyle="dashed"
            reveal="letter"
            draggable
            sweep={!reduceMotion}
            labels={!compact}
            style={{ width: '100%', height: '100%' }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink-300 sm:text-lg"
        >
          Learn money by <span className="gradient-text">playing with it</span>. Short chapters, live
          simulations and quizzes — grounded in how money actually works in India. Start with ₹10 and
          finish able to build a real financial plan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-7 flex flex-wrap items-center gap-3"
        >
          <button
            onClick={onStart}
            className="group inline-flex items-center gap-2 rounded-xl bg-brand-500 px-6 py-3 font-semibold text-ink-950 transition hover:bg-brand-400"
          >
            {primaryLabel}
            <ArrowRight size={16} className="transition group-hover:translate-x-1" />
          </button>
          <button
            onClick={onBrowse}
            className="rounded-xl border border-white/15 px-6 py-3 font-medium text-ink-200 transition hover:border-white/35 hover:text-white"
          >
            Browse the syllabus
          </button>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-9 flex flex-wrap gap-x-10 gap-y-4"
        >
          {STATS.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block text-2xl font-semibold tabular-nums tracking-tight text-white">
                  {s.value}
                </span>
                <span className="text-xs uppercase tracking-widest text-ink-500">{s.label}</span>
              </dd>
            </div>
          ))}
        </motion.dl>

        <p className="mt-8 text-[11px] text-ink-600">
          Tip: hover the letters above, then grab one and pull.
        </p>
      </div>
    </section>
  )
}