import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { rupeesShort } from '../../lib/format'
import { Stat } from './CompoundLab'

export function MinPaymentLab() {
  const [balance, setBalance] = useState(120_000)
  const [apr, setApr] = useState(36)
  const [minPct, setMinPct] = useState(5)

  const sim = useMemo(() => {
    const monthlyRate = apr / 100 / 12
    let bal = balance
    let months = 0
    let interestPaid = 0
    const curve: number[] = [bal]
    // Guard against a minimum payment that never clears the balance.
    while (bal > 1 && months < 600) {
      const interest = bal * monthlyRate
      interestPaid += interest
      const payment = Math.max(bal * (minPct / 100), interest + 100)
      bal = bal + interest - payment
      months++
      if (months % 6 === 0) curve.push(bal)
    }
    return { months, interestPaid, curve, cleared: bal <= 1 }
  }, [balance, apr, minPct])

  const fullPayMonths = Math.min(60, Math.ceil(sim.months * (minPct / 100)) || 1)
  const years = sim.months / 12
  const totalInterestPct = (sim.interestPaid / balance) * 100

  const curveMax = Math.max(...sim.curve, balance)
  const W = 700
  const H = 200
  const path = sim.curve
    .map((v, i) => {
      const x = 8 + (i / Math.max(sim.curve.length - 1, 1)) * (W - 16)
      const y = 12 + (v / curveMax) * (H - 30)
      return `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`
    })
    .join(' ')

  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <div className="mb-1.5 flex items-center justify-between text-sm">
            <span className="text-ink-300">Card balance</span>
            <span className="font-semibold text-white">{rupeesShort(balance)}</span>
          </div>
          <input type="range" min={5_000} max={500_000} step={5_000} value={balance} onChange={(e) => setBalance(Number(e.target.value))} className="w-full accent-brand-400" />
        </div>
        <div>
          <div className="mb-1.5 flex items-center justify-between text-sm">
            <span className="text-ink-300">Interest rate (APR)</span>
            <span className="font-semibold text-white">{apr}%</span>
          </div>
          <input type="range" min={10} max={48} step={1} value={apr} onChange={(e) => setApr(Number(e.target.value))} className="w-full accent-brand-400" />
        </div>
        <div>
          <div className="mb-1.5 flex items-center justify-between text-sm">
            <span className="text-ink-300">Minimum payment</span>
            <span className="font-semibold text-white">{minPct}%</span>
          </div>
          <input type="range" min={2} max={40} step={1} value={minPct} onChange={(e) => setMinPct(Number(e.target.value))} className="w-full accent-brand-400" />
        </div>
      </div>

      <motion.div key={`${balance}-${apr}-${minPct}`} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="grid gap-3 sm:grid-cols-3">
        <Stat label="Time to clear" value={sim.cleared ? `${years.toFixed(1)} yr` : '10+ yr'} tone="bad" />
        <Stat label="Interest paid" value={rupeesShort(sim.interestPaid)} tone="bad" />
        <Stat label="Interest vs original" value={`+${totalInterestPct.toFixed(0)}%`} tone="bad" />
      </motion.div>

      <div>
        <h4 className="mb-2 text-sm text-ink-300">Balance over time, paying only the minimum</h4>
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full rounded-xl bg-ink-900/60" role="img" aria-label="Balance over time paying the minimum">
          <defs>
            <linearGradient id="mp-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f87171" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#f87171" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line x1={8} x2={W - 8} y1={12 + (balance / curveMax) * (H - 30)} y2={12 + (balance / curveMax) * (H - 30)} stroke="#34e0a1" strokeDasharray="5 5" strokeWidth="1.5" />
          <text x={W - 12} y={12 + (balance / curveMax) * (H - 30) - 6} fontSize="10" fill="#34e0a1" textAnchor="end">
            original balance
          </text>
          <path d={`${path} L${W - 8},${H - 18} L8,${H - 18} Z`} fill="url(#mp-fill)" />
          <motion.path key={`${balance}-${apr}-${minPct}`} d={path} fill="none" stroke="#f87171" strokeWidth="2.5" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5 }} />
        </svg>
      </div>

      <div className="rounded-xl border border-rose-400/30 bg-rose-400/10 p-4 text-sm text-rose-100">
        {sim.cleared ? (
          <>
            Paying the {minPct}% minimum on {rupeesShort(balance)} costs{' '}
            <strong>{rupeesShort(sim.interestPaid)}</strong> in interest and takes{' '}
            <strong>{years.toFixed(1)} years</strong>. Paying the balance in full costs nothing and takes one month.
          </>
        ) : (
          <>
            At {minPct} minimum and {apr}% interest, this balance does not clear within ten years. The minimum
            payment barely covers the interest, so the debt barely shrinks — and any new spending restarts the clock.
          </>
        )}
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-ink-300">
        <strong className="text-white">The real rule:</strong> treat a credit card as if it charges roughly 3% a
        month ({apr}% APR ÷ 12). Paying only the minimum keeps your balance close to home and costs you roughly
        {fullPayMonths === 0 ? '0' : `${fullPayMonths}x`} the time. If you cannot clear it in full, move the balance
        to a lower-rate personal loan immediately — that arbitrage alone often saves tens of thousands.
      </div>

      <p className="text-xs text-ink-500">
        Assumes no new spending and a fixed 2% floor on the minimum payment, as most Indian issuers apply once the
        minimum would not cover interest. Illustrative, not a statement from any specific bank.
      </p>
    </div>
  )
}