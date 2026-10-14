import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { rupees, rupeesShort, num } from '../../lib/format'

type Props = { compact?: boolean }

const RATE_PRESETS = [5, 8, 12, 14]

export function CompoundLab({ compact = false }: Props) {
  const [invested, setInvested] = useState(100_000)
  const [monthly, setMonthly] = useState(5_000)
  const [years, setYears] = useState(20)
  const [rate, setRate] = useState(12)

  const series = useMemo(() => {
    const months = years * 12
    const r = rate / 100 / 12
    const out: { y: number; principal: number; value: number }[] = []
    let v = invested
    for (let m = 0; m <= months; m++) {
      if (m > 0) {
        v = v * (1 + r) + monthly
      }
      if (m % 12 === 0) out.push({ y: m / 12, principal: invested + monthly * m, value: v })
    }
    return out
  }, [invested, monthly, years, rate])

  const last = series[series.length - 1]
  const gained = last.value - last.principal
  const doubled = last.principal * 2

  // When did the balance pass 2x the total contributed?
  const doubleYear = series.find((p) => p.value >= doubled)?.y

  const maxV = last.value
  const W = 720
  const H = 260
  const px = (y: number) => 8 + (y / Math.max(years, 1)) * (W - 24)
  const py = (v: number) => H - 14 - (v / maxV) * (H - 40)

  const valuePath = series.map((p, i) => `${i ? 'L' : 'M'}${px(p.y)},${py(p.value)}`).join(' ')
  const principalPath = series.map((p, i) => `${i ? 'L' : 'M'}${px(p.y)},${py(p.principal)}`).join(' ')
  const areaPath = `${valuePath} L${px(years)},${H - 14} L${px(0)},${H - 14} Z`

  return (
    <div className="space-y-5">
      <div className={compact ? 'space-y-4' : 'grid gap-5 md:grid-cols-[1.1fr_1.4fr]'}>
        <div className="space-y-4">
          <Slider
            label="Starting amount"
            value={invested}
            display={rupees(invested)}
            min={0}
            max={1_000_000}
            step={5_000}
            onChange={setInvested}
          />
          <Slider
            label="Monthly investment (SIP)"
            value={monthly}
            display={rupees(monthly)}
            min={0}
            max={50_000}
            step={500}
            onChange={setMonthly}
          />
          <Slider
            label="Years"
            value={years}
            display={`${years} yr`}
            min={1}
            max={40}
            step={1}
            onChange={setYears}
          />
          <div>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="text-ink-300">Annual return</span>
              <span className="font-semibold text-brand-300">{rate}%</span>
            </div>
            <input
              type="range"
              min={1}
              max={20}
              step={0.5}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full accent-brand-400"
            />
            <div className="mt-2 flex gap-2">
              {RATE_PRESETS.map((p) => (
                <button
                  key={p}
                  onClick={() => setRate(p)}
                  className={`rounded-lg border px-2.5 py-1 text-xs font-medium transition ${
                    rate === p
                      ? 'border-brand-400 bg-brand-400/15 text-brand-300'
                      : 'border-white/10 text-ink-400 hover:border-white/25 hover:text-white'
                  }`}
                >
                  {p}%
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full rounded-xl bg-ink-900/60" role="img" aria-label="Growth of money over time">
            <defs>
              <linearGradient id="cl-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#34e0a1" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#34e0a1" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[0.25, 0.5, 0.75].map((f) => (
              <line
                key={f}
                x1={8}
                x2={W - 16}
                y1={14 + f * (H - 28)}
                y2={14 + f * (H - 28)}
                stroke="white"
                strokeOpacity="0.06"
              />
            ))}
            <path d={areaPath} fill="url(#cl-fill)" />
            <path d={principalPath} fill="none" stroke="#8791b3" strokeWidth="2" strokeDasharray="5 5" />
            <motion.path
              d={valuePath}
              fill="none"
              stroke="#34e0a1"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
            <motion.circle
              cx={px(last.y)}
              cy={py(last.value)}
              r="6"
              fill="#34e0a1"
              animate={{ r: [5, 8, 5] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </svg>
          <div className="flex flex-wrap gap-4 text-xs text-ink-400">
            <span className="flex items-center gap-1.5">
              <span className="h-0.5 w-5 rounded bg-brand-400" /> Final value
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-0.5 w-5 rounded border-t-2 border-dashed border-ink-400" /> What you put in
            </span>
          </div>
        </div>
      </div>

      <motion.div
        key={`${invested}-${monthly}-${years}-${rate}`}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid gap-3 sm:grid-cols-3"
      >
        <Stat label="You put in" value={rupees(last.principal)} tone="neutral" />
        <Stat label="It's worth" value={rupees(last.value)} tone="good" />
        <Stat label="Money earned" value={rupees(gained)} tone="best" />
      </motion.div>

      <div className="rounded-xl border border-brand-400/25 bg-brand-400/5 p-4 text-sm text-ink-200">
        {gained > 0 ? (
          <>
            <strong className="text-brand-300">The magic part:</strong> you contributed{' '}
            {rupees(last.principal)} but ended with {rupees(last.value)}. That extra{' '}
            {rupeesShort(gained)} is{' '}
            <strong>
              {((gained / last.principal) * 100).toFixed(0)}% more
            </strong>{' '}
            than you ever actually saved — all of it came from compound interest.{' '}
            {doubleYear !== undefined ? (
              <span className="text-brand-300">
                Your money passed double what you put in during year {doubleYear}.
              </span>
            ) : (
              <span>Try more years to reach double.</span>
            )}
          </>
        ) : (
          <span>Add a monthly investment to see compound growth kick in.</span>
        )}
      </div>

      <p className="text-xs text-ink-500">
        Assumes returns are steady every year and reinvested. Real markets are jumpy — we cover that in
        Level 3. A withdrawn, matured FD is currently around 6–7%.
      </p>
    </div>
  )
}

export function Slider({
  label,
  value,
  display,
  min,
  max,
  step,
  onChange,
}: {
  label: string
  value: number
  display: string
  min: number
  max: number
  step: number
  onChange: (n: number) => void
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="text-ink-300">{label}</span>
        <span className="font-semibold text-white">{display}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-brand-400"
      />
    </div>
  )
}

export function Stat({
  label,
  value,
  tone = 'neutral',
}: {
  label: string
  value: string
  tone?: 'neutral' | 'good' | 'best' | 'bad'
}) {
  const tones = {
    neutral: 'border-white/10 bg-white/5',
    good: 'border-sky-400/30 bg-sky-400/10',
    best: 'border-brand-400/40 bg-brand-400/10',
    bad: 'border-rose-400/30 bg-rose-400/10',
  }
  const text = { neutral: 'text-white', good: 'text-sky-300', best: 'text-brand-300', bad: 'text-rose-300' }
  return (
    <div className={`rounded-xl border p-3 ${tones[tone]}`}>
      <div className="text-[11px] uppercase tracking-wide text-ink-400">{label}</div>
      <div className={`mt-0.5 font-display text-xl ${text[tone]}`}>{value}</div>
    </div>
  )
}

export { num }