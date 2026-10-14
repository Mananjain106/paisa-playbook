import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { rupeesShort } from '../../lib/format'
import { Slider, Stat } from './CompoundLab'

/**
 * Real return lab.
 *
 * Most investing mistakes are arithmetic mistakes about inflation. A 7% return is
 * not 7% — it is 7% minus inflation, and what matters is the purchasing power
 * left at the end, not the balance in the account.
 *
 * real = ((1 + nominal) / (1 + inflation)) − 1
 */

export function realReturn(nominalPct: number, inflationPct: number) {
  return (Math.pow(1 + nominalPct / 100, 1) / (1 + inflationPct / 100) - 1) * 100
}

const ASSETS = [
  { label: 'Savings account', nominal: 3.5, colour: '#94a3b8' },
  { label: 'Fixed deposit', nominal: 7, colour: '#38bdf8' },
  { label: 'Equity fund (10 yr)', nominal: 13, colour: '#34e0a1' },
  { label: 'Your FD, 6.5%', nominal: 6.5, colour: '#f59e0b' },
]

export function RealReturnLab() {
  const [inflation, setInflation] = useState(6)
  const [years, setYears] = useState(20)
  const [principal, setPrincipal] = useState(500_000)
  const [active, setActive] = useState(6.5)

  // What ₹1 of purchasing power is worth in future rupees.
  const futureCost = useMemo(() => {
    const f = Math.pow(1 + inflation / 100, years)
    const points: { y: number; v: number }[] = []
    for (let y = 0; y <= years; y++) points.push({ y, v: principal / Math.pow(1 + inflation / 100, y) })
    return { f, points }
  }, [inflation, years, principal])

  const rows = ASSETS.map((a) => ({
    ...a,
    real: realReturn(a.nominal, inflation),
    // Future value in today's money after years of compounding.
    realWealth: principal * Math.pow(1 + realReturn(a.nominal, inflation) / 100, years),
  }))

  const activeReal = realReturn(active, inflation)

  const w = 320
  const h = 96
  const maxV = Math.max(...futureCost.points.map((p) => p.v)) * 1.05
  const path = futureCost.points
    .map((p, i) => `${i === 0 ? 'M' : 'L'}${((p.y / years) * w).toFixed(1)},${(h - (p.v / maxV) * h).toFixed(1)}`)
    .join(' ')

  return (
    <div className="space-y-5">
      <p className="text-sm text-ink-400">
        Inflation is a silent tax on cash. Nothing on your statement shows it, but it decides how
        much your money can actually buy in ten years.
      </p>

      <div className="grid gap-3 sm:grid-cols-3">
        <Slider
          label="Inflation"
          value={inflation}
          display={`${inflation}%`}
          min={2}
          max={12}
          step={0.5}
          onChange={setInflation}
        />
        <Slider
          label="Years"
          value={years}
          display={`${years}`}
          min={1}
          max={40}
          step={1}
          onChange={setYears}
        />
        <Slider
          label="Starting amount"
          value={principal}
          display={rupeesShort(principal)}
          min={10_000}
          max={5_00_000}
          step={10_000}
          onChange={setPrincipal}
        />
      </div>

      <div className="grid gap-2 sm:grid-cols-3">
        <Stat label="₹1 costs in" value={`₹${futureCost.f.toFixed(2)}`} tone="bad" />
        <Stat label="Your money buys" value={`${((1 / futureCost.f) * 100).toFixed(0)}%`} tone="bad" />
        <Stat
          label={`Real return on ${active}%`}
          value={`${activeReal >= 0 ? '+' : ''}${activeReal.toFixed(1)}%`}
          tone={activeReal >= 5 ? 'best' : activeReal >= 2 ? 'good' : 'bad'}
        />
      </div>

      {/* purchasing power decay */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="mb-1 text-[11px] uppercase tracking-wide text-ink-400">
          What {rupeesShort(principal)} is really worth, in today's rupees
        </div>
        <svg viewBox={`-6 -10 ${w + 12} ${h + 26}`} className="w-full" role="img" aria-label="Purchasing power falls with inflation">
          <motion.path
            d={path}
            fill="none"
            stroke="#f87171"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.9 }}
          />
          <text x={w / 2} y={h + 20} textAnchor="middle" fontSize="10" fill="#8791b3">
            {years} years →
          </text>
        </svg>
        <p className="mt-1 text-xs text-ink-400">
          At {inflation}% inflation, {rupeesShort(principal)} buys the same as{' '}
          {rupeesShort(principal / futureCost.f)} does today. Nothing was debited from your account to
          cause it.
        </p>
      </div>

      {/* asset comparison */}
      <div className="overflow-hidden rounded-xl border border-white/10">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-white/5 text-xs uppercase tracking-wide text-ink-400">
              <th className="px-3 py-2 text-left font-semibold">Where it sits</th>
              <th className="px-3 py-2 text-right font-semibold">Nominal</th>
              <th className="px-3 py-2 text-right font-semibold">Real</th>
              <th className="px-3 py-2 text-right font-semibold">Worth in {years}y</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr
                key={r.label}
                className={`border-t border-white/5 ${active === r.nominal ? 'bg-white/10' : ''}`}
                onClick={() => setActive(r.nominal)}
              >
                <td className="px-3 py-2">
                  <button className="flex items-center gap-2 text-left text-ink-100">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: r.colour }} />
                    {r.label}
                  </button>
                </td>
                <td className="px-3 py-2 text-right tabular-nums text-ink-300">{r.nominal}%</td>
                <td
                  className={`px-3 py-2 text-right font-semibold tabular-nums ${
                    r.real >= 5 ? 'text-brand-300' : r.real >= 2 ? 'text-sky-300' : 'text-rose-300'
                  }`}
                >
                  {r.real >= 0 ? '+' : ''}
                  {r.real.toFixed(1)}%
                </td>
                <td className="px-3 py-2 text-right tabular-nums text-ink-200">
                  {rupeesShort(r.realWealth)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-ink-400">
        Real return is not simply nominal minus inflation — it is divided, not subtracted. At 7%
        nominal and 6% inflation the real return is about 0.9%, not 1%. The gap is small here, but it
        widens exactly where it matters most: when both numbers are large.
      </p>

      <div className="rounded-xl border-l-4 border-amber-400 bg-amber-400/5 p-4 text-sm text-ink-200">
        Below roughly 4% real, money in cash is quietly shrinking. That is the number to compare
        every deposit rate against — not the rate printed on the passbook.
      </div>
    </div>
  )
}