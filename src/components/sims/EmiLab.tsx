import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { rupees, rupeesShort } from '../../lib/format'
import { Stat } from './CompoundLab'

/**
 * EMI = P × r × (1+r)^n / ((1+r)^n − 1), where r is the monthly rate.
 */
export const emi = (principal: number, annualRate: number, months: number) => {
  const r = annualRate / 100 / 12
  if (r === 0) return principal / months
  const pow = Math.pow(1 + r, months)
  return (principal * r * pow) / (pow - 1)
}

export function EmiLab() {
  const [loan, setLoan] = useState(2_500_000)
  const [rate, setRate] = useState(8.75)
  const [years, setYears] = useState(20)

  const months = years * 12
  const payment = emi(loan, rate, months)
  const total = payment * months
  const interest = total - loan

  const schedule = useMemo(() => {
    const r = rate / 100 / 12
    let bal = loan
    let interestPaid = 0
    const firstHalf: { y: number; principal: number; interest: number }[] = []
    for (let m = 1; m <= months; m++) {
      const i = bal * r
      const p = payment - i
      bal = Math.max(0, bal - p)
      interestPaid += i
      if (m % 12 === 0) firstHalf.push({ y: m / 12, principal: loan - bal, interest: interestPaid })
    }
    return firstHalf
  }, [loan, rate, months, payment])

  const firstYearInterest = schedule[0]?.interest ?? 0
  const lastYear = schedule[schedule.length - 1]
  const lastYearPrincipal = lastYear ? lastYear.principal - (schedule[schedule.length - 2]?.principal ?? 0) : 0

  // A shorter tenure with the same loan amount means a bigger EMI but far less interest.
  const fasterYears = Math.max(1, Math.round(years * 0.8))
  const fasterInterest = emi(loan, rate, fasterYears * 12) * fasterYears * 12 - loan

  const W = 700
  const H = 230
  const maxV = Math.max(lastYear?.interest ?? 1, lastYearPrincipal || 1, 1)
  const bw = W / Math.max(schedule.length, 1) - 4
  const scale = (v: number) => (v / maxV) * (H - 30)

  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-3">
        <LabSlider label="Loan amount" value={loan} display={rupeesShort(loan)} min={50_000} max={20_000_000} step={50_000} onChange={setLoan} />
        <LabSlider label="Interest rate" value={rate} display={`${rate}%`} min={1} max={24} step={0.05} onChange={setRate} />
        <LabSlider label="Tenure" value={years} display={`${years} yr`} min={1} max={30} step={1} onChange={setYears} />
      </div>

      <motion.div
        key={`${loan}-${rate}-${years}`}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl bg-gradient-to-br from-brand-400/15 to-sky-400/10 p-4 text-center"
      >
        <div className="text-xs uppercase tracking-widest text-ink-300">Monthly EMI</div>
        <div className="font-display text-4xl text-white">{rupees(payment)}</div>
        <div className="mt-1 text-xs text-ink-400">for {months} payments</div>
      </motion.div>

      <div className="grid gap-3 sm:grid-cols-3">
        <Stat label="You borrow" value={rupeesShort(loan)} />
        <Stat label="You repay" value={rupeesShort(total)} tone="good" />
        <Stat label="Interest cost" value={rupeesShort(interest)} tone="bad" />
      </div>

      <div>
        <h4 className="mb-2 text-sm text-ink-300">Year by year: principal vs interest repaid</h4>
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full rounded-xl bg-ink-900/60" role="img" aria-label="Principal versus interest by year">
          {schedule.map((s, i) => {
            const prev = i ? schedule[i - 1].interest : 0
            const yearlyInterest = s.interest - prev
            const x = 2 + i * bw
            return (
              <g key={s.y}>
                <motion.rect
                  x={x}
                  rx="2"
                  fill="#f87171"
                  initial={{ height: 0, y: H - 8 }}
                  animate={{ height: Math.max(1, scale(yearlyInterest)), y: H - 8 - Math.max(1, scale(yearlyInterest)) }}
                  transition={{ delay: i * 0.03, type: 'spring', stiffness: 140 }}
                />
                <motion.rect
                  x={x}
                  rx="2"
                  fill="#34e0a1"
                  initial={{ height: 0, y: H - 8 }}
                  animate={{
                    height: Math.max(1, scale(s.principal - (i ? schedule[i - 1].principal : 0))),
                    y: H - 8 - Math.max(1, scale(s.principal - (i ? schedule[i - 1].principal : 0))) - Math.max(1, scale(yearlyInterest)),
                  }}
                  transition={{ delay: i * 0.03, type: 'spring', stiffness: 140 }}
                />
                {s.y % Math.ceil(schedule.length / 10) === 0 && (
                  <text x={x + bw / 2} y={H - 1} fontSize="9" fill="#656f97" textAnchor="middle">
                    {s.y}
                  </text>
                )}
              </g>
            )
          })}
        </svg>
        <div className="mt-2 flex flex-wrap gap-4 text-xs text-ink-400">
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm bg-[#f87171]" /> Interest paid that year
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm bg-brand-400" /> Principal repaid that year
          </span>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm">
          <div className="text-xs uppercase tracking-wide text-ink-400">Year 1</div>
          <div className="mt-1 text-ink-200">
            {rupees(firstYearInterest)} of your first-year payments is pure interest.
          </div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm">
          <div className="text-xs uppercase tracking-wide text-ink-400">Final year</div>
          <div className="mt-1 text-ink-200">
            Only {rupees(lastYearPrincipal)} goes to principal — most early payments are interest.
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-amber-400/30 bg-amber-400/10 p-4 text-sm text-amber-100">
        <strong>Shorten the tenure:</strong> at {fasterYears} years instead of {years}, the EMI rises to{' '}
        {rupees(emi(loan, rate, fasterYears * 12))} but total interest falls to{' '}
        <strong>{rupeesShort(fasterInterest)}</strong> — saving {rupeesShort(interest - fasterInterest)}.
      </div>
      <p className="text-xs text-ink-500">
        Uses a reducing-balance calculation at a fixed rate. Add processing fees, insurance and float charges
        separately — they are often worth as much as a percentage point of interest.
      </p>
    </div>
  )
}

function LabSlider({
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