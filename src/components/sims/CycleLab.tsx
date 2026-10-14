import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { rupeesShort } from '../../lib/format'
import { Slider, Stat } from './CompoundLab'

/**
 * Market cycle lab.
 *
 * The same asset, the same holding period, wildly different outcomes — decided
 * almost entirely by what you paid and when you started. This is the single
 * most useful thing a beginner can internalise: valuation and entry timing
 * matter more than picking the right asset.
 *
 * Shocks are modelled as a valuation multiple change plus a matching change in
 * earnings growth, which is how real cycles behave.
 */

type Regime = 'bull' | 'sideways' | 'bear'

export function CycleLab() {
  const [months, setMonths] = useState(120)
  const [startPe, setStartPe] = useState(22)
  const [endPe, setEndPe] = useState(18)
  const [growth, setGrowth] = useState(14)
  const [regime, setRegime] = useState<Regime>('sideways')

  // Extra drift depending on which part of the cycle you are caught in.
  const drag = regime === 'bull' ? 2 : regime === 'bear' ? -2.5 : 0
  const effectiveGrowth = growth + drag

  const result = useMemo(() => {
    const m = months / 12
    // Earnings grow; the multiple moves from startPe to endPe.
    const epsStart = 100
    const epsEnd = epsStart * Math.pow(1 + effectiveGrowth / 100, m)
    const priceStart = epsStart * startPe
    const priceEnd = epsEnd * endPe
    const cagr = (Math.pow(priceEnd / priceStart, 1 / m) - 1) * 100
    return { epsEnd, priceStart, priceEnd, cagr, peDrag: (Math.pow(endPe / startPe, 1 / m) - 1) * 100 }
  }, [months, startPe, endPe, effectiveGrowth])

  // The bear path, drawn with the same inputs, to make the shape visible.
  const path = useMemo(() => {
    const pts: { t: number; v: number }[] = []
    const amp = regime === 'bear' ? 0.32 : regime === 'bull' ? 0.08 : 0.14
    for (let i = 0; i <= 60; i++) {
      const t = (i / 60) * months
      const trend = (result.priceStart / result.priceStart) * Math.pow(1 + growth / 100, (t / 12) / 12)
      const noise = 1 + amp * Math.sin((t / months) * Math.PI * 3) * (1 - t / months) + amp * Math.sin(t / 3)
      const pePath = startPe + (endPe - startPe) * (t / months)
      pts.push({ t, v: trend * noise * (pePath / startPe) })
    }
    return pts
  }, [months, growth, startPe, endPe, regime])

  const w = 320
  const h = 100
  const vals = path.map((p) => p.v)
  const max = Math.max(...vals) * 1.05
  const min = Math.min(...vals) * 0.95
  const d = path
    .map((p, i) => `${i === 0 ? 'M' : 'L'}${((p.t / months) * w).toFixed(1)},${(h - ((p.v - min) / (max - min || 1)) * h).toFixed(1)}`)
    .join(' ')

  const regimes: { id: Regime; label: string; hint: string }[] = [
    { id: 'bull', label: 'Bull', hint: 'Multiples expand, everything rises' },
    { id: 'sideways', label: 'Sideways', hint: 'Earnings grow, multiples shrink' },
    { id: 'bear', label: 'Bear', hint: 'A crash partway through' },
  ]

  return (
    <div className="space-y-5">
      <p className="text-sm text-ink-400">
        You hold one asset for {months / 12} years. The question is not "which fund" — it is what
        you paid for it, and what the market did while you waited.
      </p>

      <div className="flex flex-wrap gap-2">
        {regimes.map((r) => (
          <button
            key={r.id}
            onClick={() => setRegime(r.id)}
            title={r.hint}
            className={`rounded-xl border px-3 py-1.5 text-sm transition ${
              regime === r.id
                ? 'border-brand-400/50 bg-brand-400/15 text-white'
                : 'border-white/10 text-ink-400 hover:text-white'
            }`}
          >
            {r.label}
          </button>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <Slider
          label="Valuation you bought at (P/E)"
          value={startPe}
          display={`${startPe}`}
          min={8}
          max={45}
          step={0.5}
          onChange={setStartPe}
        />
        <Slider
          label="Valuation you sold at (P/E)"
          value={endPe}
          display={`${endPe}`}
          min={8}
          max={45}
          step={0.5}
          onChange={setEndPe}
        />
        <Slider
          label="Earnings growth each year"
          value={growth}
          display={`${growth}%`}
          min={0}
          max={25}
          step={0.5}
          onChange={setGrowth}
        />
        <Slider
          label="Holding period"
          value={months}
          display={`${months / 12} yr`}
          min={12}
          max={300}
          step={12}
          onChange={setMonths}
        />
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <svg viewBox={`-6 -8 ${w + 12} ${h + 22}`} className="w-full" role="img" aria-label="Price path over the holding period">
          <motion.path
            d={d}
            fill="none"
            stroke={regime === 'bear' ? '#f87171' : regime === 'bull' ? '#34e0a1' : '#38bdf8'}
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.9 }}
          />
          <text x={w / 2} y={h + 16} textAnchor="middle" fontSize="10" fill="#8791b3">
            {months / 12} years →
          </text>
        </svg>
      </div>

      <div className="grid gap-2 sm:grid-cols-4">
        <Stat label="Price you paid" value={rupeesShort(result.priceStart)} />
        <Stat label="Price you get" value={rupeesShort(result.priceEnd)} tone={result.cagr > 10 ? 'best' : result.cagr > 0 ? 'good' : 'bad'} />
        <Stat
          label="Your annualised return"
          value={`${result.cagr >= 0 ? '+' : ''}${result.cagr.toFixed(1)}%`}
          tone={result.cagr > 10 ? 'best' : result.cagr > 0 ? 'good' : 'bad'}
        />
        <Stat
          label="Cost of the multiple"
          value={`${result.peDrag >= 0 ? '+' : ''}${result.peDrag.toFixed(1)}%`}
          tone="bad"
        />
      </div>

      <div className="rounded-xl border-l-4 border-amber-400 bg-amber-400/5 p-4 text-sm text-ink-200">
        {startPe > endPe + 3 ? (
          <>
            You paid {startPe}× earnings and sold at {endPe}×. The business kept growing, and you
            still made only {result.cagr.toFixed(1)}% a year — because{' '}
            <span className="font-semibold text-amber-200">
              {Math.abs(result.peDrag).toFixed(1)}% a year was lost to the valuation shrinking
            </span>
            . Cheap at the start is the whole game.
          </>
        ) : startPe < endPe - 3 ? (
          <>
            You paid only {startPe}× and sold at {endPe}×. Earnings growth did the work, and the
            expanding multiple added {result.peDrag.toFixed(1)}% a year on top. Cheaper entry,
            better outcome.
          </>
        ) : (
          <>
            A stable multiple means your return is essentially the earnings growth —{' '}
            {result.cagr.toFixed(1)}% a year, almost exactly what the business delivered. This is
            the "no free lunch" case: you get the business, not a cycle.
          </>
        )}
      </div>

      <p className="text-[11px] text-ink-600">
        The path shown is illustrative noise around the modelled outcome. Real prices are jumpier and
        never follow a neat formula — but the arithmetic of what you paid still holds.
      </p>
    </div>
  )
}