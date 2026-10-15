import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { displayValue, evaluateCell, refsUsed, type Sheet } from '../../lib/sheet'
import { sheetFallback, sheetScenarios } from '../../data/sheet-scenarios'

const COLS = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
const ROWS = Array.from({ length: 14 }, (_, i) => i + 1)

const PALETTE = ['#4ade80', '#38bdf8', '#c084fc', '#facc15', '#fb923c']

type SheetLabProps = {
  /**
   * The chapter the lab is being rendered inside. Each chapter gets its own
   * dataset and assignment from `sheetScenarios`; unknown chapters fall back
   * to a generic sheet so the lab is never blank.
   */
  chapterId?: string
}

export function SheetLab({ chapterId }: SheetLabProps) {
  const scenario = (chapterId && sheetScenarios[chapterId]) || sheetFallback
  const first = scenario.tasks[0].cell
  const [sheet, setSheet] = useState<Sheet>(scenario.starter)
  const [selected, setSelected] = useState(first)
  const [draft, setDraft] = useState(scenario.starter[first] ?? '')
  const [checked, setChecked] = useState(false)
  const [showDebrief, setShowDebrief] = useState(false)

  const values = useMemo(() => {
    const out: Record<string, ReturnType<typeof evaluateCell>> = {}
    for (const c of COLS) for (const r of ROWS) out[`${c}${r}`] = evaluateCell(sheet, `${c}${r}`)
    return out
  }, [sheet])

  const highlight = useMemo(() => {
    const raw = sheet[selected] ?? ''
    if (!raw.startsWith('=')) return { refs: [] as string[], ranges: [] as string[] }
    const { refs, ranges } = refsUsed(raw)
    return { refs, ranges: ranges.map((rg) => `${rg[0]}:${rg[1]}`) }
  }, [sheet, selected])

  const inRange = (addr: string) => {
    for (const r of highlight.ranges) {
      const [a, b] = r.split(':')
      const ca = a.replace(/[0-9]/g, '')
      const cb = b.replace(/[0-9]/g, '')
      const ra = Number(a.replace(/[A-Z]/g, ''))
      const rb = Number(b.replace(/[A-Z]/g, ''))
      if (ca === cb && addr === a) return true
      const c = addr.replace(/[0-9]/g, '')
      const n = Number(addr.replace(/[A-Z]/g, ''))
      if (c >= ca && c <= cb && n >= Math.min(ra, rb) && n <= Math.max(ra, rb)) return true
    }
    return highlight.refs.includes(addr)
  }

  const commit = () => {
    setSheet((s) => ({ ...s, [selected]: draft }))
    setChecked(false)
  }

  const reset = () => {
    setSheet(scenario.starter)
    setSelected(first)
    setDraft(scenario.starter[first] ?? '')
    setChecked(false)
    setShowDebrief(false)
  }

  const taskState = scenario.tasks.map((t) => {
    const v = values[t.cell]
    return { ...t, ok: typeof v === 'number' && Math.abs(v - t.expect) < 0.05 }
  })
  const done = taskState.filter((t) => t.ok).length
  const allCorrect = done === taskState.length

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <h4 className="font-display text-white">{scenario.title}</h4>
        <p className="mt-1 text-sm text-ink-300">{scenario.brief}</p>
      </div>

      <div className="overflow-x-auto rounded-xl border border-white/10">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="w-8" />
              {COLS.map((c) => (
                <th key={c} className="border-b border-white/10 bg-ink-900 px-2 py-1.5 text-xs text-ink-400">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r) => (
              <tr key={r}>
                <td className="border-b border-white/5 bg-ink-900 px-2 py-1 text-xs text-ink-500">{r}</td>
                {COLS.map((c) => {
                  const addr = `${c}${r}`
                  const raw = sheet[addr] ?? ''
                  const val = values[addr]
                  const isFormula = raw.startsWith('=')
                  const header = r === 1 && ['A', 'B', 'C', 'D', 'E'].includes(c)
                  const isSel = selected === addr
                  const hl = inRange(addr)
                  const isError = typeof val === 'object'
                  const isTask = scenario.tasks.some((t) => t.cell === addr)
                  return (
                    <td
                      key={addr}
                      onClick={() => {
                        setSelected(addr)
                        setDraft(raw)
                        setChecked(false)
                      }}
                      title={isTask ? 'This cell is part of the assignment' : undefined}
                      className={`cursor-pointer border-b border-white/5 px-2 py-1 transition ${
                        isSel ? 'bg-brand-400/15 ring-1 ring-inset ring-brand-400/50'
                          : hl ? 'bg-sky-400/15'
                          : isTask && raw === '' ? 'bg-amber-400/5 hover:bg-amber-400/10'
                          : 'hover:bg-white/5'
                      }`}
                    >
                      <span
                        className={`block truncate ${header ? 'font-semibold text-ink-200' : isError ? 'text-rose-300' : 'text-ink-100'}`}
                        style={{ maxWidth: 110 }}
                      >
                        {header ? raw : displayValue(val)}
                      </span>
                      {isFormula && !header && (
                        <span className="block truncate text-[10px] text-brand-400/70">{raw}</span>
                      )}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap items-center gap-2 rounded-xl border border-white/10 bg-ink-900/60 p-2">
        <span className="rounded-md bg-white/10 px-2 py-1 font-mono text-xs text-brand-300">{selected}</span>
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && commit()}
          placeholder="Type a value or a formula starting with ="
          className="min-w-[220px] flex-1 rounded-md border border-white/10 bg-ink-950 px-2 py-1 font-mono text-xs text-white outline-none focus:border-brand-400/50"
        />
        <button onClick={commit} className="rounded-md bg-brand-500 px-3 py-1 text-xs font-semibold text-ink-950 transition hover:bg-brand-400">
          Enter
        </button>
        <button
          onClick={reset}
          className="rounded-md border border-white/15 px-3 py-1 text-xs text-ink-300 transition hover:text-white"
        >
          Reset sheet
        </button>
      </div>

      <div className="grid gap-3 md:grid-cols-[1.15fr_1fr]">
        <div className="space-y-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <h4 className="mb-2 font-display text-white">Assignment</h4>
            <ol className="space-y-1.5 text-sm text-ink-300">
              {scenario.steps.map((s, i) => (
                <li key={s} className="flex gap-2">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-[11px] font-bold text-ink-200">
                    {i + 1}
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="mb-2 flex items-center justify-between">
              <h4 className="font-display text-white">Cells to fill in</h4>
              <span className="text-xs text-ink-400">
                {done} of {taskState.length} done
              </span>
            </div>
            <ul className="space-y-2">
              {taskState.map((t, i) => (
                <li key={t.cell} className="flex items-start gap-2 text-sm">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold"
                    style={{ background: t.ok ? '#34e0a1' : PALETTE[i % PALETTE.length], color: '#11131f' }}
                  >
                    {t.ok ? '✓' : i + 1}
                  </span>
                  <span className="text-ink-200">
                    <strong className="font-mono text-xs text-white">{t.cell}</strong> — {t.ask}
                    <span className="mt-0.5 block text-xs text-ink-500">
                      hint: <code className="text-brand-300">{t.hint}</code>
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setChecked(true)}
              className="mt-3 rounded-lg border border-brand-400/40 bg-brand-400/10 px-3 py-1.5 text-xs font-semibold text-brand-300 transition hover:bg-brand-400/20"
            >
              Check my answers
            </button>
            <AnimateWrap show={checked}>
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-2 rounded-lg p-2.5 text-xs ${allCorrect ? 'bg-brand-400/15 text-brand-300' : 'bg-amber-400/10 text-amber-200'}`}
              >
                {allCorrect
                  ? 'All correct. Read on for what the numbers mean.'
                  : `Not yet — ${done} of ${taskState.length} cells match. Click a cell, edit its formula, and check again.`}
              </motion.div>
            </AnimateWrap>
          </div>
        </div>

        <div className="space-y-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm">
            <h4 className="mb-2 font-display text-white">Formulas for this assignment</h4>
            <dl className="space-y-1.5 text-xs">
              {scenario.reference.map(([f, d]) => (
                <div key={f} className="flex flex-col gap-0.5">
                  <code className="font-mono text-brand-300">{f}</code>
                  <span className="text-ink-400">{d}</span>
                </div>
              ))}
            </dl>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-xs text-ink-300">
            <div className="flex items-center justify-between gap-2">
              <strong className="text-white">What this means</strong>
              {!allCorrect && !showDebrief && (
                <button
                  onClick={() => setShowDebrief(true)}
                  className="rounded-md border border-white/15 px-2 py-0.5 text-[11px] text-ink-300 transition hover:text-white"
                >
                  Show anyway
                </button>
              )}
            </div>
            {allCorrect || showDebrief ? (
              <p className="mt-1.5">{scenario.debrief}</p>
            ) : (
              <p className="mt-1.5 text-ink-500">
                Complete the {taskState.length} cells above and this reveals what the finished numbers mean.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function AnimateWrap({ show, children }: { show: boolean; children: React.ReactNode }) {
  if (!show) return null
  return <>{children}</>
}
