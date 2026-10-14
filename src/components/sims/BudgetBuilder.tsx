import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { rupees } from '../../lib/format'

type Cat = { id: string; label: string; icon: string; ideal: number; value: number; fixed: boolean }

const initial: Cat[] = [
  { id: 'rent', label: 'Rent / EMI', icon: '🏠', ideal: 30, value: 15000, fixed: true },
  { id: 'food', label: 'Food & groceries', icon: '🍛', ideal: 10, value: 6000, fixed: false },
  { id: 'travel', label: 'Travel', icon: '🚌', ideal: 5, value: 2500, fixed: false },
  { id: 'bills', label: 'Bills & utilities', icon: '💡', ideal: 5, value: 2200, fixed: true },
  { id: 'fun', label: 'Fun & dining out', icon: '🎬', ideal: 5, value: 5000, fixed: false },
  { id: 'shopping', label: 'Shopping', icon: '🛍️', ideal: 5, value: 4000, fixed: false },
  { id: 'savings', label: 'Savings & investments', icon: '🏦', ideal: 20, value: 3000, fixed: false },
]

const money = (n: number) => (n >= 0 ? `+${rupees(n)}` : `-${rupees(Math.abs(n))}`)

export function BudgetBuilder() {
  const [income, setIncome] = useState(50_000)
  const [cats, setCats] = useState(initial)
  const [showIdeal, setShowIdeal] = useState(true)

  const spent = cats.reduce((n, c) => n + c.value, 0)
  const saved = cats.find((c) => c.id === 'savings')?.value ?? 0
  const left = income - spent
  const saveRate = income ? (saved / income) * 100 : 0

  const verdict = useMemo(() => {
    if (left < 0)
      return { tone: 'bad' as const, title: 'Over budget!', body: `You're spending ${rupees(-left)} more than you earn. Something has to give.` }
    if (saveRate >= 20)
      return { tone: 'good' as const, title: 'Excellent — you hit the 20% goal!', body: 'Saving at this rate builds a real financial cushion over time.' }
    if (saveRate >= 10)
      return { tone: 'ok' as const, title: 'Decent, but push for 20%', body: 'Try trimming one "wants" category and move the difference to savings.' }
    return { tone: 'warn' as const, title: 'Not enough is being saved', body: 'Under 10% saved is fragile — an emergency would wipe you out.' }
  }, [left, saveRate])

  const donut = useMemo(() => {
    const total = spent || 1
    let acc = 0
    return cats.map((c) => {
      const frac = c.value / total
      const seg = { ...c, from: acc, to: acc + frac }
      acc += frac
      return seg
    })
  }, [cats, spent])

  const colors = ['#f87171', '#fb923c', '#facc15', '#4ade80', '#38bdf8', '#c084fc', '#34e0a1']

  const polar = (frac: number, r: number) => {
    const a = frac * 2 * Math.PI - Math.PI / 2
    return { x: 120 + r * Math.cos(a), y: 120 + r * Math.sin(a) }
  }
  const arc = (from: number, to: number, rOuter: number, rInner: number) => {
    const so = polar(from, rOuter)
    const eo = polar(to, rOuter)
    const si = polar(from, rInner)
    const ei = polar(to, rInner)
    // A single slice spanning the full turn has coincident start/end points, so
    // an SVG arc would draw nothing — split it into two half-turns instead.
    if (to - from >= 0.9999) {
      const mo = polar(from + 0.5, rOuter)
      const mi = polar(from + 0.5, rInner)
      return `M${so.x},${so.y} A${rOuter},${rOuter} 0 1 1 ${mo.x},${mo.y} A${rOuter},${rOuter} 0 1 1 ${so.x},${so.y} L${si.x},${si.y} A${rInner},${rInner} 0 1 0 ${mi.x},${mi.y} A${rInner},${rInner} 0 1 0 ${si.x},${si.y} Z`
    }
    const large = to - from > 0.5 ? 1 : 0
    return `M${so.x},${so.y} A${rOuter},${rOuter} 0 ${large} 1 ${eo.x},${eo.y} L${ei.x},${ei.y} A${rInner},${rInner} 0 ${large} 0 ${si.x},${si.y} Z`
  }

  const setVal = (id: string, value: number) =>
    setCats((cs) => cs.map((c) => (c.id === id ? { ...c, value: Math.max(0, value) } : c)))

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="min-w-[240px] flex-1">
          <label className="mb-1.5 block text-sm text-ink-300">Monthly take-home income</label>
          <input
            type="range"
            min={10_000}
            max={300_000}
            step={1_000}
            value={income}
            onChange={(e) => setIncome(Number(e.target.value))}
            className="w-full accent-brand-400"
          />
        </div>
        <div className="font-display text-2xl text-white">{rupees(income)}</div>
      </div>

      <div className="grid gap-5 md:grid-cols-[260px_1fr]">
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 240 240" className="w-full max-w-[240px]">
            <circle cx="120" cy="120" r="86" fill="none" stroke="white" strokeOpacity="0.07" strokeWidth="34" />
            <AnimatePresence>
              {donut.map((s, i) => (
                <motion.path
                  key={s.id}
                  d={arc(s.from, s.to, 104, 68)}
                  fill={colors[i % colors.length]}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  whileHover={{ scale: 1.04, opacity: 0.9 }}
                  style={{ cursor: 'pointer', transformOrigin: '120px 120px' }}
                >
                  <title>{`${s.label}: ${rupees(s.value)}`}</title>
                </motion.path>
              ))}
            </AnimatePresence>
            <text x="120" y="112" textAnchor="middle" className="fill-ink-400" fontSize="12">
              {showIdeal ? 'Each slice = a category' : 'Left over'}
            </text>
            <text x="120" y="140" textAnchor="middle" className="fill-white" fontSize="24" fontWeight="700">
              {rupees(left)}
            </text>
          </svg>
          <div className="mt-2 flex flex-col gap-1 text-xs">
            {donut.map((s, i) => (
              <div key={s.id} className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-sm" style={{ background: colors[i % colors.length] }} />
                <span>
                  {s.icon} {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {cats.map((c, i) => {
            const pctOfIncome = income ? (c.value / income) * 100 : 0
            const over = pctOfIncome > c.ideal + 5
            return (
              <div key={c.id} className="rounded-xl border border-white/10 bg-white/5 p-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-white">
                    {c.icon} {c.label}
                    {c.fixed && <span className="ml-2 rounded bg-white/10 px-1.5 py-0.5 text-[10px] text-ink-400">fixed</span>}
                  </span>
                  <span className={`font-semibold ${over ? 'text-rose-300' : 'text-white'}`}>{rupees(c.value)}</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={Math.max(income, c.value)}
                  step={100}
                  value={c.value}
                  onChange={(e) => setVal(c.id, Number(e.target.value))}
                  className="mt-2 w-full accent-brand-400"
                />
                <div className="relative mt-1.5 h-1.5 rounded-full bg-white/10">
                  <motion.div
                    className="absolute inset-y-0 left-0 rounded-full"
                    style={{ background: colors[i % colors.length] }}
                    animate={{ width: `${Math.min(100, pctOfIncome)}%` }}
                    transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                  />
                  {showIdeal && (
                    <div
                      className="absolute -top-0.5 h-2.5 w-0.5 bg-white/80"
                      style={{ left: `${Math.min(100, c.ideal)}%` }}
                      title={`Ideal: ${c.ideal}%`}
                    />
                  )}
                </div>
                <div className="mt-1 flex justify-between text-[11px] text-ink-500">
                  <span>{pctOfIncome.toFixed(0)}% of income</span>
                  <span>ideal {c.ideal}%</span>
                </div>
              </div>
            )
          })}
          <button
            onClick={() => setShowIdeal((s) => !s)}
            className="w-full rounded-lg border border-white/10 py-1.5 text-xs text-ink-400 transition hover:border-white/25 hover:text-white"
          >
            {showIdeal ? 'Hide' : 'Show'} ideal markers (the 50/30/20 guide)
          </button>
        </div>
      </div>

      <div
        className={`rounded-xl border p-4 text-sm ${
          verdict.tone === 'bad'
            ? 'border-rose-400/30 bg-rose-400/10'
            : verdict.tone === 'good'
              ? 'border-brand-400/30 bg-brand-400/10'
              : 'border-amber-400/30 bg-amber-400/10'
        }`}
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <strong className="text-white">{verdict.title}</strong>
          <div className="flex gap-4 text-sm">
            <span>
              Spent: <strong className="text-white">{rupees(spent)}</strong>
            </span>
            <span>
              Saved: <strong className="text-brand-300">{saveRate.toFixed(0)}%</strong>
            </span>
          </div>
        </div>
        <p className="mt-1 text-ink-300">{verdict.body}</p>
      </div>
      <p className="text-xs text-ink-500">
        This is the 50/30/20 rule: 50% needs, 30% wants, 20% savings &amp; debt repayment. It's a starting
        point, not a law — adjust for your situation.
      </p>
      <p className="text-xs text-ink-500">
        Balances update live: {money(left)} after all spending.
      </p>
    </div>
  )
}