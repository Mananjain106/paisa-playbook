import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { rupeesShort } from '../../lib/format'
import { Slider, Stat } from './CompoundLab'

/**
 * Fee drag lab.
 *
 * An expense ratio of 1% sounds trivial. Over thirty years it is roughly a fifth
 * of your final wealth, and it is the single most reliable way underperformers
 * underperform. This shows the same market return through three different fee
 * structures.
 */

const FUNDS = [
  { id: 'index', label: 'Low-cost index fund', er: 0.1, colour: '#34e0a1' },
  { id: 'mid', label: 'Regular active fund', er: 1.2, colour: '#38bdf8' },
  { id: 'high', label: 'High-expense fund', er: 2.0, colour: '#f87171' },
]

export function FeeDragLab() {
  const [years, setYears] = useState(30)
  const [monthly, setMonthly] = useState(10_000)
  const [marketReturn, setMarketReturn] = useState(12)
  const [er, setEr] = useState(1.2)

  const rows = useMemo(
    () =>
      FUNDS.map((f) => {
        const net = marketReturn - f.er
        let v = 0
        for (let m = 0; m < years * 12; m++) v = v * (1 + net / 100 / 12) + monthly
        return { ...f, net, final: v }
      }),
    [marketReturn, years, monthly],
  )

  const invested = monthly * years * 12
  const best = rows[0].final
  const activeCustom = useMemo(() => {
    const net = marketReturn - er
    let v = 0
    for (let m = 0; m < years * 12; m++) v = v * (1 + net / 100 / 12) + monthly
    return v
  }, [marketReturn, er, years, monthly])

  // The gap in rupees — the number that actually stings.
  const gap = best - (rows.find((r) => r.id === 'high')?.final ?? 0)

  return (
    <div className="space-y-5">
      <p className="text-sm text-ink-400">
        Every fund here earns the same {marketReturn}% from the market. The only difference is what
        it charges you. Over {years} years, that is the whole story.
      </p>

      <div className="grid gap-3 sm:grid-cols-3">
        <Slider
          label="Market return"
          value={marketReturn}
          display={`${marketReturn}%`}
          min={4}
          max={16}
          step={0.5}
          onChange={setMarketReturn}
        />
        <Slider
          label="Years"
          value={years}
          display={`${years}`}
          min={5}
          max={40}
          step={1}
          onChange={setYears}
        />
        <Slider
          label="Monthly investment"
          value={monthly}
          display={rupeesShort(monthly)}
          min={1_000}
          max={100_000}
          step={1_000}
          onChange={setMonthly}
        />
      </div>

      <div className="grid gap-2 sm:grid-cols-3">
        {rows.map((r) => (
          <Stat
            key={r.id}
            label={`${r.label} (${r.er}%)`}
            value={rupeesShort(r.final)}
            tone={r.id === 'index' ? 'best' : r.id === 'high' ? 'bad' : 'good'}
          />
        ))}
      </div>

      {/* bar comparison */}
      <div className="space-y-3 rounded-xl border border-white/10 bg-white/5 p-4">
        {rows.map((r) => (
          <div key={r.id}>
            <div className="mb-1 flex items-center justify-between text-xs">
              <span className="text-ink-300">
                {r.label} · <span className="text-ink-500">ER {r.er}%</span>
              </span>
              <span className="tabular-nums text-ink-200">{rupeesShort(r.final)}</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-white/5">
              <motion.div
                className="h-full rounded-full"
                style={{ background: r.colour }}
                initial={{ width: 0 }}
                animate={{ width: `${(r.final / best) * 100}%` }}
                transition={{ type: 'spring', stiffness: 140 }}
              />
            </div>
          </div>
        ))}
        <div className="border-t border-white/10 pt-2 text-xs text-ink-400">
          You put in {rupeesShort(invested)}. The high-cost fund gives you{' '}
          {((rows[2].final / invested - 1) * 100).toFixed(0)}% growth; the index fund gives{' '}
          {((best / invested - 1) * 100).toFixed(0)}%.
        </div>
      </div>

      <div className="grid gap-2 sm:grid-cols-3">
        <Stat
          label="Fee cost, high vs index"
          value={rupeesShort(gap)}
          tone="bad"
        />
        <Stat label="As a share of wealth" value={`${((gap / best) * 100).toFixed(0)}%`} tone="bad" />
        <Stat label="Your chosen fund" value={rupeesShort(activeCustom)} tone="good" />
      </div>

      {/* your own fee */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <Slider
          label="Expense ratio of the fund you are looking at"
          value={er}
          display={`${er}%`}
          min={0.1}
          max={2.5}
          step={0.05}
          onChange={setEr}
        />
        <p className="mt-2 text-sm text-ink-300">
          At {er}% you would end with{' '}
          <span className="font-semibold text-white">{rupeesShort(activeCustom)}</span>, versus{' '}
          <span className="font-semibold text-brand-300">{rupeesShort(best)}</span> in the 0.1% index
          fund — {rupeesShort(best - activeCustom)} less, from an identical market.
        </p>
        <p className="mt-1 text-xs text-ink-500">
          {er <= 0.5
            ? 'That is a reasonable all-in cost for an actively managed fund.'
            : er <= 1.2
              ? 'That is normal for an active fund. It is defensible — but you must beat the index by more than this, every year, to justify it.'
              : 'That is expensive. Only a genuinely exceptional manager earns that.'}
        </p>
      </div>

      <div className="rounded-xl border-l-4 border-sky-400 bg-sky-400/5 p-4 text-sm text-ink-200">
        The uncomfortable part: an active fund must not only be good, it must be good{' '}
        <em>enough to beat the index by more than its fee, every year, for decades</em>. Most do not.
        This is why passive investing is the default recommendation, not the lazy one.
      </div>

      <p className="text-[11px] text-ink-600">
        Assumes the market return is achieved before fees, with monthly compounding and no exit load.
        Small funds often also charge exit loads, which make switching costlier.
      </p>
    </div>
  )
}