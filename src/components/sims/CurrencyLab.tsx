import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { rupees, rupeesShort } from '../../lib/format'
import { Slider, Stat } from './CompoundLab'

/**
 * Currency lab.
 *
 * The rupee buys less every year, and that cuts both ways:
 *
 *   - For money invested abroad, depreciation is a hidden bonus that partly
 *     cancels your foreign-market return.
 *   - For anything India imports (crude oil, electronics, fertiliser, most
 *     medicines), depreciation is a hidden tax that feeds straight into CPI.
 *
 * India historically ran 4–6% annual depreciation against the dollar, sometimes
 * far worse in a crisis.
 */

const CURRENCIES = [
  { code: 'USD', label: 'US Dollar', flag: '$' },
  { code: 'GBP', label: 'Pound Sterling', flag: '£' },
  { code: 'EUR', label: 'Euro', flag: '€' },
  { code: 'JPY', label: 'Japanese Yen', flag: '¥' },
]

/** Rough share of an average urban household basket that is import-linked. */
const IMPORT_SHARE = 0.18

export function CurrencyLab() {
  const [startRate, setStartRate] = useState(83)
  const [depreciation, setDepreciation] = useState(5)
  const [years, setYears] = useState(15)
  const [currency, setCurrency] = useState('USD')
  const [invested, setInvested] = useState(5_00_000)
  const [foreignReturn, setForeignReturn] = useState(9)

  const endRate = startRate * Math.pow(1 + depreciation / 100, years)

  // An investment left in foreign currency, valued back in rupees at the end.
  const foreign = useMemo(() => {
    const fx = Math.pow(1 + depreciation / 100, years)
    const endForeign = invested / startRate * Math.pow(1 + foreignReturn / 100, years)
    const endRupees = endForeign * endRate
    const rupeeOnly = invested * Math.pow(1 + foreignReturn / 100, years)
    return {
      fx,
      endForeign,
      endRupees,
      rupeeOnly,
      effective: ((endRupees / invested) ** (1 / years) - 1) * 100,
      naively: foreignReturn,
    }
  }, [invested, startRate, depreciation, years, foreignReturn, endRate])

  // Imported inflation: half the depreciation lands on the import basket.
  const importInflation = depreciation * IMPORT_SHARE

  // Precomputed so the JSX stays free of inline ternaries.
  const fxSign = foreign.fx > 1 ? '+' : ''
  const fxBoostPct = (foreign.fx - 1) * 100
  const foreignOutperformed = foreign.rupeeOnly > foreign.endRupees


  const series = useMemo(() => {
    const pts: { y: number; r: number }[] = []
    for (let y = 0; y <= years; y++) {
      pts.push({ y, r: startRate * Math.pow(1 + depreciation / 100, y) })
    }
    return pts
  }, [startRate, depreciation, years])

  const w = 320
  const h = 90
  const maxR = Math.max(...series.map((s) => s.r)) * 1.05
  const minR = Math.min(...series.map((s) => s.r)) * 0.95
  const path = series
    .map((p, i) => `${i === 0 ? 'M' : 'L'}${((p.y / years) * w).toFixed(1)},${(h - ((p.r - minR) / (maxR - minR || 1)) * h).toFixed(1)}`)
    .join(' ')

  const cur = CURRENCIES.find((c) => c.code === currency)!

  return (
    <div className="space-y-5">
      <p className="text-sm text-ink-400">
        ₹1 bought about ₹{startRate} of {cur.label} today. Move the sliders to see where that goes
        over {years} years — and what it does to a foreign investment and to the price of imports.
      </p>

      {/* currency picker */}
      <div className="flex flex-wrap gap-2">
        {CURRENCIES.map((c) => (
          <button
            key={c.code}
            onClick={() => setCurrency(c.code)}
            className={`rounded-xl border px-3 py-1.5 text-sm transition ${
              currency === c.code
                ? 'border-brand-400/50 bg-brand-400/15 text-white'
                : 'border-white/10 text-ink-400 hover:text-white'
            }`}
          >
            <span className="mr-1.5">{c.flag}</span>
            {c.code}
          </button>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <Slider
          label={`Starting rate (₹ per 1 ${currency})`}
          value={startRate}
          display={`₹${startRate.toFixed(1)}`}
          min={20}
          max={140}
          step={0.5}
          onChange={setStartRate}
        />
        <Slider
          label="Annual depreciation"
          value={depreciation}
          display={`${depreciation}%`}
          min={0}
          max={12}
          step={0.5}
          onChange={setDepreciation}
        />
        <Slider
          label="Years"
          value={years}
          display={`${years}`}
          min={1}
          max={35}
          step={1}
          onChange={setYears}
        />
        <Slider
          label="Return in the foreign market"
          value={foreignReturn}
          display={`${foreignReturn}%`}
          min={0}
          max={16}
          step={0.5}
          onChange={setForeignReturn}
        />
      </div>

      <div className="grid gap-2 sm:grid-cols-4">
        <Stat label={`₹1 in ${years}y buys`} value={`₹${(1 / Math.pow(1 + depreciation / 100, years)).toFixed(2)}`} tone="bad" />
        <Stat label="Rate now would be" value={`₹${endRate.toFixed(1)}`} tone="bad" />
        <Stat label="Added import inflation" value={`+${importInflation.toFixed(1)}%`} tone="bad" />
        <Stat
          label="Real return on foreign money"
          value={`${foreign.effective >= 0 ? '+' : ''}${foreign.effective.toFixed(1)}%`}
          tone={foreign.effective > foreign.naively ? 'best' : 'neutral'}
        />
      </div>

      {/* fx path */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="mb-1 text-[11px] uppercase tracking-wide text-ink-400">
          ₹ per 1 {currency} — currency erosion
        </div>
        <svg viewBox={`-6 -8 ${w + 12} ${h + 24}`} className="w-full" role="img" aria-label="Rupee depreciates over time">
          <motion.path
            d={path}
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.9 }}
          />
          <text x={w / 2} y={h + 18} textAnchor="middle" fontSize="10" fill="#8791b3">
            {years} years →
          </text>
        </svg>
        <p className="mt-1 text-xs text-ink-400">
          Each of those steps is a pay cut for anyone earning in {cur.label} and living in India.
        </p>
      </div>

      {/* the two-sided effect */}
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-brand-400/30 bg-brand-400/5 p-4">
          <div className="mb-1 text-[11px] uppercase tracking-wide text-brand-300">
            The good side — money abroad
          </div>
          <p className="text-sm text-ink-200">
            {rupeesShort(invested)} sent abroad today comes back as{' '}
            <span className="font-semibold text-brand-200">{rupeesShort(foreign.endRupees)}</span> in
            {years} years.
          </p>
          <p className="mt-1.5 text-xs text-ink-400">
            A {foreignReturn}% return abroad became{' '}
            <span className="font-semibold text-brand-300">{foreign.effective.toFixed(1)}%</span> in
            rupees, because the currency added {fxSign}
            {fxBoostPct.toFixed(0)}% on top. The boost only happens if you did nothing
            clever — the rupee did that work for you.
          </p>
          <p className="mt-1.5 text-xs text-ink-500">
            Had you simply invested the same rupees in an Indian fund at {foreignReturn}%, you would
            have had {rupeesShort(foreign.rupeeOnly)} — {foreignOutperformed ? 'more' : 'less'}.
          </p>
        </div>

        <div className="rounded-xl border border-rose-400/30 bg-rose-400/5 p-4">
          <div className="mb-1 text-[11px] uppercase tracking-wide text-rose-300">
            The bad side — imports at home
          </div>
          <p className="text-sm text-ink-200">
            About {Math.round(IMPORT_SHARE * 100)}% of what an average Indian household buys is priced
            in dollars somewhere.
          </p>
          <p className="mt-1.5 text-xs text-ink-400">
            Crude oil, wheat, fertiliser, electronics, most APIs, and a large share of your phone and
            laptop are imported. At {depreciation}% depreciation that alone adds roughly{' '}
            <span className="font-semibold text-rose-300">+{importInflation.toFixed(1)}%</span> to
            your cost of living every year.
          </p>
          <p className="mt-1.5 text-xs text-ink-500">
            This is why an inflation number is not just an abstract drag: it is your petrol, your
            groceries and your EMIs getting more expensive.
          </p>
        </div>
      </div>

      <Slider
        label="Amount invested abroad"
        value={invested}
        display={rupees(invested)}
        min={50_000}
        max={50_00_000}
        step={10_000}
        onChange={setInvested}
      />

      <p className="text-[11px] text-ink-600">
        Depreciation is modelled as a steady annual rate. Real currencies jump around — a rate can
        appreciate sharply for a year or two — which is another reason this is planning arithmetic,
        not a forecast.
      </p>
    </div>
  )
}