import { motion } from 'framer-motion'
import { Lightbulb, TriangleAlert, Sparkles, Info } from 'lucide-react'
import type { Block } from '../types'
import { Scene } from './scenes'
import { SIMS } from './sims'

const TONES = {
  insight: { cls: 'border-sky-400/30 bg-sky-400/10 text-sky-100', Icon: Lightbulb, label: 'Insight' },
  warning: { cls: 'border-rose-400/30 bg-rose-400/10 text-rose-100', Icon: TriangleAlert, label: 'Watch out' },
  tip: { cls: 'border-brand-400/30 bg-brand-400/10 text-brand-100', Icon: Sparkles, label: 'Try this' },
  india: { cls: 'border-amber-400/30 bg-amber-400/10 text-amber-100', Icon: Info, label: 'In India' },
}

export function BlockRenderer({
  block,
  index = 0,
  chapterId,
}: {
  block: Block
  index?: number
  /** Passed to labs so they can render chapter-specific content. */
  chapterId?: string
}) {
  const fade = {
    initial: { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-40px' },
    transition: { delay: Math.min(index, 6) * 0.04 },
  }

  switch (block.kind) {
    case 'p':
      return (
        <motion.p {...fade} className="text-[15px] leading-relaxed text-ink-200">
          {block.text}
        </motion.p>
      )

    case 'h':
      return (
        <motion.h3 {...fade} className="mt-4 text-xl">
          {block.text}
        </motion.h3>
      )

    case 'callout': {
      const { cls, Icon, label } = TONES[block.tone]
      return (
        <motion.aside {...fade} className={`rounded-xl border p-4 ${cls}`}>
          <div className="mb-1 flex items-center gap-2 text-sm font-semibold">
            <Icon size={16} />
            {block.title ?? label}
          </div>
          <p className="text-sm leading-relaxed opacity-90">{block.text}</p>
        </motion.aside>
      )
    }

    case 'example':
      return (
        <motion.figure {...fade} className="rounded-xl border border-white/10 bg-white/5 p-4">
          <figcaption className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-brand-300">
            {block.title}
          </figcaption>
          <p className="text-sm leading-relaxed text-ink-200">{block.text}</p>
        </motion.figure>
      )

    case 'list':
      return block.ordered ? (
        <motion.ol {...fade} className="space-y-2">
          {block.items.map((it, i) => (
            <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-ink-200">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-400/15 text-xs font-bold text-brand-300">
                {i + 1}
              </span>
              {it}
            </li>
          ))}
        </motion.ol>
      ) : (
        <motion.ul {...fade} className="space-y-2">
          {block.items.map((it, i) => (
            <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-ink-200">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
              {it}
            </li>
          ))}
        </motion.ul>
      )

    case 'table':
      return (
        <motion.div {...fade} className="overflow-x-auto rounded-xl border border-white/10">
          {block.caption && (
            <div className="border-b border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-ink-200">
              {block.caption}
            </div>
          )}
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5">
                {block.headers.map((h) => (
                  <th key={h} className="px-3 py-2 text-left text-xs uppercase tracking-wide text-ink-400">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((r, i) => (
                <tr key={i} className="border-t border-white/5">
                  {r.map((c, j) => (
                    <td key={j} className="px-3 py-2 text-ink-200">
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      )

    case 'formula':
      return (
        <motion.div {...fade} className="rounded-xl border border-white/10 bg-ink-900/70 p-4">
          <div className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-ink-400">{block.label}</div>
          <code className="block font-mono text-sm text-brand-300">{block.expr}</code>
          {block.note && <p className="mt-2 text-xs text-ink-400">{block.note}</p>}
        </motion.div>
      )

    case 'terms':
      return (
        <motion.dl {...fade} className="grid gap-2 sm:grid-cols-2">
          {block.items.map((t) => (
            <div key={t.term} className="rounded-xl border border-white/10 bg-white/5 p-3">
              <dt className="font-display text-brand-300">{t.term}</dt>
              <dd className="mt-1 text-sm text-ink-300">{t.meaning}</dd>
            </div>
          ))}
        </motion.dl>
      )

    case 'scene':
      return (
        <motion.div {...fade}>
          <Scene name={block.name} caption={block.caption} />
        </motion.div>
      )

    case 'sim': {
      const sim = SIMS[block.name]
      return (
        <motion.div {...fade} className="rounded-2xl border border-white/10 bg-ink-900/40 p-4 sm:p-5">
          <div className="mb-3">
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-brand-400/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-brand-300">
                Interactive
              </span>
              <h3 className="font-display text-lg">{sim.title}</h3>
            </div>
            <p className="mt-0.5 text-sm text-ink-400">{block.caption ?? sim.blurb}</p>
          </div>
          <sim.C chapterId={chapterId} />
        </motion.div>
      )
    }
  }
}