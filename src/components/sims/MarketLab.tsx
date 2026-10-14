import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { rupees, rupeesShort } from '../../lib/format'
import { Stat } from './CompoundLab'

type Regime = 'bull' | 'bear' | 'crash' | 'volatile'
type Point = { t: number; price: number; sipUnits: number; invested: number }

const REGIMES: Record<Regime, { label: string; drift: number; vol: number; color: string; blurb: string }> = {
  bull: { label: 'Bull market', drift: 0.0016, vol: 0.012, color: '#4ade80', blurb: 'Steady climb. The easy part — don\'t get greedy.' },
  bear: { label: 'Bear market', drift: -0.0012, vol: 0.016, color: '#f87171', blurb: 'Prices grind down. This is where SIPs quietly buy more units.' },
  crash: { label: 'Crash', drift: -0.006, vol: 0.05, color: '#ef4444', blurb: 'Panic selling. Most people quit here and lock in losses.' },
  volatile: { label: 'Sideways / volatile', drift: 0.0002, vol: 0.03, color: '#facc15', blurb: 'No direction, lots of noise. Punishes reacting to headlines.' },
}

const START_PRICE = 1000
const MONTHS = 60

export function MarketLab() {
  const [regime, setRegime] = useState<Regime>('bull')
  const [running, setRunning] = useState(true)
  const [sip, setSip] = useState(5000)
  const [points, setPoints] = useState<Point[]>([{ t: 0, price: START_PRICE, sipUnits: 0, invested: 0 }])
  const timer = useRef<number | null>(null)

  const step = useCallback(() => {
    setPoints((prev) => {
      const last = prev[prev.length - 1]
      if (last.t >= MONTHS) return prev
      const { drift, vol } = REGIMES[regime]
      // Box-Muller for a normal-ish return
      const u = Math.max(Math.random(), 1e-9)
      const v = Math.random()
      const shock = Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v)
      const price = Math.max(50, last.price * (1 + drift + vol * shock))
      const invested = last.invested + sip
      const units = last.sipUnits + sip / price
      return [...prev, { t: last.t + 1, price, sipUnits: units, invested }]
    })
  }, [regime, sip])

  useEffect(() => {
    if (!running) return
    timer.current = window.setInterval(step, 90)
    return () => {
      if (timer.current) window.clearInterval(timer.current)
    }
  }, [running, step])

  const reset = () => {
    setRunning(false)
    setPoints([{ t: 0, price: START_PRICE, sipUnits: 0, invested: 0 }])
  }

  const last = points[points.length - 1]
  const finished = last.t >= MONTHS

  const sipValue = last.sipUnits * last.price
  const lumpValue = START_PRICE * 1.12 ** Math.max(0, last.t) // assume lump-sum earns slightly more
  const totalInvested = last.invested
  const worstDip = useMemo(() => {
    let peak = START_PRICE
    let dip = 0
    for (const p of points) {
      peak = Math.max(peak, p.price)
      dip = Math.min(dip, (p.price - peak) / peak)
    }
    return dip
  }, [points])

  const W = 720
  const H = 240
  const prices = points.map((p) => p.price)
  const maxP = Math.max(...prices, START_PRICE)
  const minP = Math.min(...prices, START_PRICE)
  const span = maxP - minP || 1

  const path = points
    .map((p, i) => {
      const x = (p.t / MONTHS) * (W - 16) + 8
      const y = 14 + ((maxP - p.price) / span) * (H - 34)
      return `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`
    })
    .join(' ')

  const area = `${path} L${((last.t / MONTHS) * (W - 16) + 8).toFixed(1)},${H - 20} L8,${H - 20} Z`
  const up = last.price >= START_PRICE
  const changePct = ((last.price - START_PRICE) / START_PRICE) * 100

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        {(Object.keys(REGIMES) as Regime[]).map((r) => (
          <button
            key={r}
            onClick={() => setRegime(r)}
            className="rounded-lg border px-3 py-1.5 text-sm font-medium transition"
            style={{
              borderColor: regime === r ? REGIMES[r].color : 'rgba(255,255,255,0.1)',
              color: regime === r ? REGIMES[r].color : '#8791b3',
              background: regime === r ? `${REGIMES[r].color}18` : 'transparent',
            }}
          >
            {REGIMES[r].label}
          </button>
        ))}
        <div className="ml-auto flex gap-2">
          <button
            onClick={() => setRunning((r) => !r)}
            disabled={finished}
            className="rounded-lg bg-brand-500 px-3 py-1.5 text-sm font-semibold text-ink-950 transition hover:bg-brand-400 disabled:opacity-40"
          >
            {running ? 'Pause' : finished ? 'Done' : 'Run'}
          </button>
          <button onClick={reset} className="rounded-lg border border-white/15 px-3 py-1.5 text-sm text-ink-300 transition hover:text-white">
            Reset
          </button>
        </div>
      </div>

      <p className="rounded-lg bg-ink-900/60 px-3 py-2 text-xs text-ink-300">
        <span style={{ color: REGIMES[regime].color }}>{REGIMES[regime].label}:</span>{' '}
        {REGIMES[regime].blurb}
      </p>

      <svg viewBox={`0 0 ${W} ${H}`} className="w-full rounded-xl bg-ink-900/60" role="img" aria-label="Simulated market price chart">
        <defs>
          <linearGradient id="mk-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={REGIMES[regime].color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={REGIMES[regime].color} stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0, 0.5, 1].map((f) => {
          const y = 14 + f * (H - 34)
          const val = maxP - f * span
          return (
            <g key={f}>
              <line x1={8} x2={W - 8} y1={y} y2={y} stroke="white" strokeOpacity="0.07" />
              <text x={W - 10} y={y + 12} textAnchor="end" fontSize="10" fill="#656f97">
                ₹{Math.round(val)}
              </text>
            </g>
          )
        })}
        {/* break-even reference: price the SIP was started at */}
        <line x1={8} x2={W - 8} y1={14 + ((maxP - START_PRICE) / span) * (H - 34)} y2={14 + ((maxP - START_PRICE) / span) * (H - 34)} stroke="#8791b3" strokeDasharray="4 4" strokeOpacity="0.6" />
        <path d={area} fill="url(#mk-fill)" />
        <motion.path
          key={`${regime}-${points.length}`}
          d={path}
          fill="none"
          stroke={REGIMES[regime].color}
          strokeWidth="2.5"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.15 }}
        />
      </svg>

      <div className="flex items-center justify-between text-xs text-ink-500">
        <span>Year {Math.floor(last.t / 12)} · Month {last.t % 12}</span>
        <span>{finished ? 'Simulation complete' : 'Running…'}</span>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <Stat label="Index price" value={`₹${Math.round(last.price)}`} tone={up ? 'good' : 'bad'} />
        <Stat label="SIP worth" value={rupeesShort(sipValue)} tone="best" />
        <Stat label="Change" value={`${changePct >= 0 ? '+' : ''}${changePct.toFixed(1)}%`} tone={up ? 'good' : 'bad'} />
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 p-3">
        <label className="mb-1.5 flex items-center justify-between text-sm">
          <span className="text-ink-300">Monthly SIP amount</span>
          <span className="font-semibold text-white">{rupees(sip)}</span>
        </label>
        <input type="range" min={0} max={30_000} step={500} value={sip} onChange={(e) => setSip(Number(e.target.value))} className="w-full accent-brand-400" />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-brand-400/25 bg-brand-400/5 p-3 text-sm">
          <div className="text-xs uppercase tracking-wide text-ink-400">SIP strategy</div>
          <div className="font-display text-xl text-brand-300">{rupees(sipValue)}</div>
          <div className="mt-0.5 text-xs text-ink-300">
            Invested {rupees(totalInvested)} across {last.t} months → profit{' '}
            <strong className={sipValue - totalInvested >= 0 ? 'text-brand-300' : 'text-rose-300'}>
              {rupeesShort(sipValue - totalInvested)}
            </strong>
          </div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm">
          <div className="text-xs uppercase tracking-wide text-ink-400">Lump sum ({rupeesShort(START_PRICE * 100)})</div>
          <div className="font-display text-xl text-white">{rupeesShort(lumpValue)}</div>
          <div className="mt-0.5 text-xs text-ink-300">
            Same money once at the start → profit <strong>{rupeesShort(lumpValue - START_PRICE * 100)}</strong>
          </div>
        </div>
      </div>

      <p className="text-xs text-ink-500">
        Worst fall from a peak so far: <strong className="text-rose-300">{(worstDip * 100).toFixed(1)}%</strong>. In
        real life your SIP automatically buys more units when prices drop — that's the whole point of{' '}
        <em>rupee-cost averaging</em>. Real returns also include dividends and taxes, which this toy ignores.
      </p>
    </div>
  )
}