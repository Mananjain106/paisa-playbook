import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { rupeesShort } from '../../lib/format'
import { Slider, Stat } from './CompoundLab'

/**
 * Asset allocation lab.
 *
 * The point is not to predict returns — nobody can. It is to show the four
 * things an allocator actually controls: the mix of assets, the volatility that
 * mix produces, how much of it collapses in a bad year, and — once inflation and
 * the rupee's slide against foreign currencies are taken into account — what the
 * balance can actually buy at the end.
 *
 * Historical-style assumptions per asset class, roughly long-run Indian
 * experience. International equity is modelled in rupee terms, so the currency
 * slider feeds directly into its expected return.
 */

type Asset = {
  key: string
  label: string
  colour: string
  /** Expected annual return, nominal and in rupees, %. */
  ret: number
  /** Annual volatility, %. */
  vol: number
  /** Rough move in a bad market year, as a fraction (e.g. -0.38 for −38%). */
  shock: number
  /** True when the return is earned abroad and therefore exposed to the rupee. */
  foreign?: boolean
  blurb: string
}

const ASSETS: Asset[] = [
  { key: 'equity', label: 'Equity', colour: '#34e0a1', ret: 13, vol: 22, shock: -0.38, blurb: 'Indian shares and equity funds. Highest growth, biggest swings.' },
  { key: 'intl', label: 'International equity', colour: '#22d3ee', ret: 11, vol: 20, shock: -0.32, foreign: true, blurb: 'Overseas markets. Earned in dollars, so the rupee decides what reaches you.' },
  { key: 'debt', label: 'Debt', colour: '#38bdf8', ret: 7.5, vol: 4, shock: -0.02, blurb: 'Bonds, FDs, debt funds. Steadier, grows more slowly.' },
  { key: 'gold', label: 'Gold', colour: '#f59e0b', ret: 9, vol: 16, shock: -0.14, blurb: 'A hedge against inflation and currency weakness, not a growth engine.' },
  { key: 'property', label: 'Property', colour: '#a855f7', ret: 10, vol: 9, shock: -0.12, blurb: 'Illiquid, lumpy, expensive to enter and exit.' },
  { key: 'cash', label: 'Cash', colour: '#94a3b8', ret: 6, vol: 0.5, shock: 0.005, blurb: 'Emergency money and near-term goals. Loses to inflation.' },
]

/** Correlation between each pair — the reason diversification actually works. */
const CORR: Record<string, number> = {
  'equity:debt': 0.15,
  'equity:gold': -0.1,
  'equity:property': 0.55,
  'equity:cash': 0.02,
  'equity:intl': 0.45,
  'debt:gold': 0.1,
  'debt:property': 0.12,
  'debt:cash': 0.05,
  'debt:intl': 0.05,
  'gold:property': 0.3,
  'gold:cash': 0.02,
  'gold:intl': -0.15,
  'property:cash': 0.02,
  'property:intl': 0.25,
  'cash:intl': 0.02,
}

const corr = (a: string, b: string) => (a === b ? 1 : (CORR[`${a}:${b}`] ?? CORR[`${b}:${a}`] ?? 0.2))

export function PortfolioLab() {
  const [w, setW] = useState<Record<string, number>>({
    equity: 50,
    intl: 10,
    debt: 20,
    gold: 8,
    property: 7,
    cash: 5,
  })
  const [monthly, setMonthly] = useState(10_000)
  const [years, setYears] = useState(20)
  const [horizonOk, setHorizonOk] = useState(true)
  const [inflation, setInflation] = useState(6)
  const [depreciation, setDepreciation] = useState(5)
  const [intlReturn, setIntlReturn] = useState(9)

  const total = Object.values(w).reduce((a, b) => a + b, 0) || 1
  const shares = Object.fromEntries(Object.entries(w).map(([k, v]) => [k, v / total]))

  // A foreign asset's rupee return is the foreign return compounded with the
  // currency's slide — the boost is real, but it is not free money, and it is
  // only a benefit because nobody chose it.
  const intlRupeeReturn = useMemo(
    () => ((1 + intlReturn / 100) * (1 + depreciation / 100) - 1) * 100,
    [intlReturn, depreciation],
  )

  /** Each asset's rupee expected return, after the currency effect. */
  const rupeeRet = useMemo(
    () => (a: Asset) => (a.foreign ? intlRupeeReturn : a.ret),
    [intlRupeeReturn],
  )

  // Weighted expected return and volatility.
  const { ret, vol } = useMemo(() => {
    let r = 0
    let v = 0
    for (const a of ASSETS) {
      const s = shares[a.key]
      r += s * rupeeRet(a)
      v += s * s * a.vol * a.vol
    }
    // Correlation terms: sum of 2*wi*wj*corr*vol_i*vol_j
    let cov = 0
    for (let i = 0; i < ASSETS.length; i++) {
      for (let j = i + 1; j < ASSETS.length; j++) {
        const a = ASSETS[i]
        const b = ASSETS[j]
        cov += 2 * shares[a.key] * shares[b.key] * corr(a.key, b.key) * a.vol * b.vol
      }
    }
    const volTotal = Math.sqrt(v + cov)
    return { ret: r, vol: volTotal }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [w, total, intlRupeeReturn])

  // What a rough "bad year" looks like: equities and gold fall together, debt does not.
  const crash = ASSETS.reduce((n, a) => n + shares[a.key] * a.shock, 0)

  const projection = useMemo(() => {
    const r = ret / 100 / 12
    let v = 0
    const series: number[] = []
    for (let m = 0; m < years * 12; m++) {
      v = v * (1 + r) + monthly
      series.push(v)
    }
    const invested = monthly * years * 12
    // The same balance, expressed in today's rupees — the number that decides
    // what the goal will actually be worth.
    const inflFactor = Math.pow(1 + inflation / 100, years)
    return { final: v, invested, series, realFinal: v / inflFactor, inflFactor }
  }, [ret, monthly, years, inflation])

  // The whole portfolio's return net of inflation, the same way a bond fund's is.
  const realRet = ((1 + ret / 100) / (1 + inflation / 100) - 1) * 100

  const riskBand = vol < 6 ? 'Conservative' : vol < 11 ? 'Moderate' : vol < 17 ? 'Growth' : 'Aggressive'

  // A sanity warning: money needed soon should not sit in volatile assets.
  const equityShare = shares.equity * 100
  const mismatch = horizonOk ? null : equityShare > 25

  const set = (k: string, v: number) => setW((p) => ({ ...p, [k]: v }))

  return (
    <div className="space-y-5">
      <p className="text-sm text-ink-400">
        Set the mix, then read what that mix actually does: its long-run growth, how violently it
        swings, how much it loses in a bad market year, and — after inflation and the rupee — what
        the balance will really be worth at the end.
      </p>

      {/* the forces outside the portfolio: what prices rise at, and what the rupee does */}
      <div className="grid gap-3 rounded-xl border border-white/10 bg-white/5 p-4 sm:grid-cols-3">
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
          label="Rupee depreciation"
          value={depreciation}
          display={`${depreciation}%`}
          min={0}
          max={12}
          step={0.5}
          onChange={setDepreciation}
        />
        <Slider
          label="Foreign market return"
          value={intlReturn}
          display={`${intlReturn}%`}
          min={0}
          max={16}
          step={0.5}
          onChange={setIntlReturn}
        />
      </div>
      <p className="-mt-2 text-[11px] text-ink-600">
        A {intlReturn}% return abroad becomes{' '}
        <span className="text-cyan-300">{intlRupeeReturn.toFixed(1)}%</span> in rupees at{' '}
        {depreciation}% depreciation. The currency did part of that work — nobody earned it.
      </p>

      {/* allocation sliders */}
      <div className="grid gap-3 sm:grid-cols-2">
        {ASSETS.map((a) => (
          <div key={a.key}>
            <Slider
              label={a.label}
              value={w[a.key]}
              display={`${shares[a.key] * 100 >= 0.05 ? (shares[a.key] * 100).toFixed(1) : '0'}%`}
              min={0}
              max={100}
              step={5}
              onChange={(v) => set(a.key, v)}
            />
            <p className="mt-0.5 text-[11px] text-ink-600">{a.blurb}</p>
          </div>
        ))}
      </div>

      {total !== 100 && (
        <p className="rounded-lg bg-amber-400/10 px-3 py-2 text-xs text-amber-200">
          Weights add up to {total}%. Everything is shown as a proportion of {total}, so the maths
          stays honest either way.
        </p>
      )}

      {/* allocation bar */}
      <div className="overflow-hidden rounded-full bg-white/5">
        <div className="flex h-4">
          {ASSETS.filter((a) => shares[a.key] > 0).map((a) => (
            <motion.div
              key={a.key}
              className="h-full"
              style={{ background: a.colour }}
              initial={{ width: 0 }}
              animate={{ width: `${shares[a.key] * 100}%` }}
              transition={{ type: 'spring', stiffness: 150 }}
              title={`${a.label} ${(shares[a.key] * 100).toFixed(1)}%`}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-ink-400">
        {ASSETS.filter((a) => shares[a.key] > 0).map((a) => (
          <span key={a.key} className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full" style={{ background: a.colour }} />
            {a.label} {(shares[a.key] * 100).toFixed(0)}%
          </span>
        ))}
      </div>

      <div className="grid gap-2 sm:grid-cols-5">
        <Stat label="Expected return" value={`${ret.toFixed(1)}%`} tone="best" />
        <Stat
          label="After inflation"
          value={`${realRet >= 0 ? '+' : ''}${realRet.toFixed(1)}%`}
          tone={realRet >= 5 ? 'best' : realRet >= 2 ? 'good' : 'bad'}
        />
        <Stat label="Volatility" value={`${vol.toFixed(1)}%`} tone={vol > 15 ? 'bad' : 'good'} />
        <Stat label="Risk band" value={riskBand} />
        <Stat label="A bad year" value={`${(crash * 100).toFixed(0)}%`} tone="bad" />
      </div>

      {realRet < 2 && (
        <p className="rounded-xl border border-amber-400/30 bg-amber-400/10 p-3 text-sm text-amber-200">
          At {inflation}% inflation this mix earns only {realRet.toFixed(1)}% a year in real terms.
          The balance will look large and still buy less than it does today — the trap that a nominal
          projection hides completely.
        </p>
      )}

      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <p className="text-sm text-ink-200">
          {crash > -0.1
            ? 'Even a 38% equity fall would barely dent this mix. That is the entire point of holding debt and cash alongside shares.'
            : crash > -0.25
              ? 'A bad year would hurt, but you would not need to sell anything at the bottom.'
              : 'This mix is close to all-equity. A bad year is a 30%-plus drawdown, and you must be able to sit through it without selling.'}
        </p>
        <p className="mt-2 text-xs text-ink-500">
          Note what diversification does <em>not</em> do: it smooths the ride, it does not raise the
          return. The all-equity mix would still grow fastest if you never needed the money.
        </p>
      </div>

      {/* horizon warning */}
      <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-sm">
        <input
          type="checkbox"
          checked={horizonOk}
          onChange={(e) => setHorizonOk(e.target.checked)}
          className="mt-0.5 accent-brand-400"
        />
        <span className="text-ink-300">
          This money is for a goal more than 7 years away.{' '}
          <span className="text-ink-500">
            Untick it if you may need the money within five years.
          </span>
        </span>
      </label>

      {mismatch && (
        <p className="rounded-xl border border-amber-400/30 bg-amber-400/10 p-3 text-sm text-amber-200">
          With money you might need soon, {equityShare.toFixed(0)}% in equity is too much. Equity can
          be down 38% at exactly the moment you are forced to sell. Move that slice to debt or cash
          until the date is further away.
        </p>
      )}

      {/* projection */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="mb-3 flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="text-[11px] uppercase tracking-wide text-ink-400">
              After {years} years at {ret.toFixed(1)}% nominal
            </div>
            <div className="font-display text-2xl text-white">{rupeesShort(projection.final)}</div>
            <div className="mt-0.5 text-[11px] text-ink-400">
              Worth{' '}
              <span className="text-brand-300">{rupeesShort(projection.realFinal)}</span> in today&apos;s
              rupees ({realRet.toFixed(1)}% real)
            </div>
          </div>
          <div className="text-right text-xs text-ink-400">
            You put in <span className="text-ink-200">{rupeesShort(projection.invested)}</span>
            <br />
            Growth <span className="text-brand-300">{rupeesShort(projection.final - projection.invested)}</span>
          </div>
        </div>
        <GrowthSpark series={projection.series} />
        <RealVsNominalBar
          nominal={projection.final}
          real={projection.realFinal}
          invested={projection.invested}
          inflFactor={projection.inflFactor}
          years={years}
        />
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          <Slider
            label="Monthly investment"
            value={monthly}
            display={rupeesShort(monthly)}
            min={500}
            max={100_000}
            step={500}
            onChange={setMonthly}
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
        </div>
        <p className="mt-2 text-[11px] text-ink-600">
          A smooth straight line, because it uses the <em>expected</em> return. Real markets deliver
          this with a bumpy line through it — sometimes ending lower, occasionally much higher. The bar
          below it is the same ending after inflation, which is the version your goal is actually
          measured against.
        </p>
      </div>

      <p className="text-[11px] text-ink-600">
        Expected returns are long-run averages, roughly consistent with Indian history and inflated by
        the mid-2000s. The international sleeve is shown in rupees, so it moves with the currency
        slider. These are planning assumptions, not predictions.
      </p>
    </div>
  )
}

/**
 * The endpoint, drawn twice: the balance in the account, and the balance measured
 * in today's rupees. The gap between the two bars is everything inflation took,
 * with no debit ever appearing on the statement.
 */
function RealVsNominalBar({
  nominal,
  real,
  invested,
  inflFactor,
  years,
}: {
  nominal: number
  real: number
  invested: number
  inflFactor: number
  years: number
}) {
  const max = Math.max(nominal, invested)
  const rows: { label: string; value: number; colour: string }[] = [
    { label: 'You invested', value: invested, colour: '#64748b' },
    { label: 'Balance (nominal)', value: nominal, colour: '#34e0a1' },
    { label: "Worth in today's ₹", value: real, colour: '#38bdf8' },
  ]
  return (
    <div className="mt-4 space-y-2">
      {rows.map((r) => (
        <div key={r.label} className="flex items-center gap-3">
          <div className="w-28 shrink-0 text-[11px] text-ink-400">{r.label}</div>
          <div className="h-3 flex-1 overflow-hidden rounded-full bg-white/5">
            <motion.div
              className="h-full rounded-full"
              style={{ background: r.colour }}
              initial={{ width: 0 }}
              animate={{ width: `${(r.value / max) * 100}%` }}
              transition={{ type: 'spring', stiffness: 140 }}
            />
          </div>
          <div className="w-20 shrink-0 text-right text-[11px] tabular-nums text-ink-200">
            {rupeesShort(r.value)}
          </div>
        </div>
      ))}
      <p className="text-[11px] text-ink-500">
        {rupeesShort(nominal)} in the account is {rupeesShort(real)} of actual buying power — ₹1 costs ₹
        {inflFactor.toFixed(2)} in {years} years at that inflation rate. Growing nominally and standing
        still in real terms are the same experience.
      </p>
    </div>
  )
}

function GrowthSpark({ series }: { series: number[] }) {
  if (!series.length) return null
  const w = 320
  const h = 56
  const max = Math.max(...series)
  const pts = series
    .filter((_, i) => i % Math.ceil(series.length / 90) === 0)
    .map((v, i, arr) => `${(i / (arr.length - 1)) * w},${h - (v / max) * h}`)
    .join(' ')
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-14 w-full" role="img" aria-label="Projected growth over time">
      <motion.polyline
        points={pts}
        fill="none"
        stroke="#34e0a1"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.9 }}
      />
    </svg>
  )
}