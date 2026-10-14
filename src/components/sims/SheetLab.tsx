import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { displayValue, evaluateCell, refsUsed, type Sheet } from '../../lib/sheet'
import { rupees } from '../../lib/format'

const COLS = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
const ROWS = Array.from({ length: 12 }, (_, i) => i + 1)

const starter: Sheet = {
  A1: 'Date', B1: 'Category', C1: 'Type', D1: 'Amount', E1: 'Need or Want',
  A2: '01 Mar', B2: 'Rent', C2: 'Fixed', D2: '15000', E2: 'Need',
  A3: '02 Mar', B3: 'Groceries', C3: 'Variable', D3: '4200', E3: 'Need',
  A4: '03 Mar', B4: 'Coffee', C4: 'Variable', D4: '350', E4: 'Want',
  A5: '04 Mar', B5: 'Movie', C5: 'Variable', D5: '900', E5: 'Want',
  A6: '05 Mar', B6: 'Bijli bill', C6: 'Fixed', D6: '1800', E6: 'Need',
  A7: '06 Mar', B7: 'Shopping', C7: 'Variable', D7: '2600', E7: 'Want',
  A8: '07 Mar', B8: 'Salon', C8: 'Variable', D8: '700', E8: 'Want',
  F1: 'Monthly income', G1: '50000',
  F2: 'Total expenses', G2: '=SUM(D2:D8)',
  F3: 'Wants total', G3: '=SUMIF(E2:E8,"Want",D2:D8)',
  F4: 'Needs total', G4: '=SUMIF(E2:E8,"Need",D2:D8)',
  F5: 'Savings left', G5: '=G1-G2',
  F6: 'Saving rate %', G6: '=ROUND((G5/G1)*100,1)',
}

const TASKS = [
  { cell: 'G2', ask: 'Total of all expenses', expect: 25550, hint: '=SUM(D2:D8)' },
  { cell: 'G3', ask: 'How much went on wants?', expect: 4550, hint: '=SUMIF(E2:E8,"Want",D2:D8)' },
  { cell: 'G5', ask: 'What is left after expenses?', expect: 24450, hint: '=G1-G2' },
  { cell: 'G6', ask: 'Saving rate, rounded to 1 decimal', expect: 48.9, hint: '=ROUND((G5/G1)*100,1)' },
]

const PALETTE = ['#4ade80', '#38bdf8', '#c084fc', '#facc15', '#fb923c']

export function SheetLab() {
  const [sheet, setSheet] = useState<Sheet>(starter)
  const [selected, setSelected] = useState('G2')
  const [draft, setDraft] = useState(starter.G2 ?? '')
  const [checked, setChecked] = useState(false)

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

  const allCorrect = TASKS.every((t) => {
    const v = values[t.cell]
    return typeof v === 'number' && Math.abs(v - t.expect) < 0.05
  })

  return (
    <div className="space-y-4">
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
                  return (
                    <td
                      key={addr}
                      onClick={() => {
                        setSelected(addr)
                        setDraft(raw)
                        setChecked(false)
                      }}
                      className={`cursor-pointer border-b border-white/5 px-2 py-1 transition ${
                        isSel ? 'bg-brand-400/15 ring-1 ring-inset ring-brand-400/50'
                          : hl ? 'bg-sky-400/15'
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
          onClick={() => { setSheet(starter); setSelected('G2'); setDraft(starter.G2 ?? ''); setChecked(false) }}
          className="rounded-md border border-white/15 px-3 py-1 text-xs text-ink-300 transition hover:text-white"
        >
          Reset
        </button>
      </div>

      <div className="grid gap-3 md:grid-cols-[1.2fr_1fr]">
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <h4 className="mb-2 font-display text-white">Try these (edit cells G2–G6)</h4>
          <ul className="space-y-2">
            {TASKS.map((t, i) => {
              const v = values[t.cell]
              const ok = typeof v === 'number' && Math.abs(v - t.expect) < 0.05
              return (
                <li key={t.cell} className="flex items-start gap-2 text-sm">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold"
                    style={{ background: ok ? '#34e0a1' : PALETTE[i % PALETTE.length], color: '#11131f' }}
                  >
                    {ok ? '✓' : i + 1}
                  </span>
                  <span className="text-ink-200">
                    <strong className="font-mono text-xs text-white">{t.cell}</strong> — {t.ask}
                    <span className="mt-0.5 block text-xs text-ink-500">hint: <code className="text-brand-300">{t.hint}</code></span>
                  </span>
                </li>
              )
            })}
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
                ? 'All correct! You just built a budget with real spreadsheet formulas.'
                : 'Not all correct yet — click a cell, edit its formula, and re-check.'}
            </motion.div>
          </AnimateWrap>
        </div>

        <div className="space-y-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm">
            <h4 className="mb-2 font-display text-white">Formula reference</h4>
            <dl className="space-y-1.5 text-xs">
              {[
                ['=SUM(D2:D8)', 'adds a range'],
                ['=SUMIF(E2:E8,"Want",D2:D8)', 'adds where a condition matches'],
                ['=SUMIFS(D2:D8,B2:B8,"Rent",C2:C8,"Fixed")', 'two conditions at once'],
                ['=IF(G5>0,"Saving!","Overspent")', 'branching logic'],
                ['=ROUND(x,1)', 'round to n decimals'],
                ['=AVERAGE(D2:D8)', 'mean of a range'],
                ['=MAX(D2:D8) / =MIN(D2:D8)', 'largest / smallest'],
                ['=COUNT(D2:D8)', 'how many numbers'],
              ].map(([f, d]) => (
                <div key={f} className="flex flex-col gap-0.5">
                  <code className="font-mono text-brand-300">{f}</code>
                  <span className="text-ink-400">{d}</span>
                </div>
              ))}
            </dl>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-xs text-ink-300">
            <strong className="text-white">Your result:</strong> saving {rupees(24450)} of {rupees(50000)} this
            month — a {48.9}% saving rate. That's far above the 20% guideline. Try editing D4 (coffee) upward
            and watch G3 and G6 react.
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