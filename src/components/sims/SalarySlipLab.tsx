import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { rupees, rupeesShort } from '../../lib/format'

/** Simplified current Indian payroll: CTC → gross → take-home. */
export function SalarySlipLab() {
  const [ctc, setCtc] = useState(1_200_000)
  const [basicPct, setBasicPct] = useState(40)
  const [declareSurcharge, setDeclareSurcharge] = useState(false)

  const m = useMemo(() => {
    const basic = ctc * (basicPct / 100)
    // Typical structure: basic + HRA (40% of basic) + special allowance (rest)
    const hraExempt = basic * 0.4
    const perquisites = ctc * 0.02 // free travel etc, taxed unless declared
    const employerPf = Math.min(basic * 0.12, 1_80_000)
    const gratuity = ctc * 0.0481
    const insurance = 15_000
    const gross = ctc - employerPf - gratuity - insurance - perquisites

    const employeePf = declareSurcharge ? basic * 0.12 * 0.5 : basic * 0.12
    const pension = declareSurcharge ? basic * 0.12 * 0.5 : 0
    const professionalTax = 200 * 12
    // Old vs new regime slabs (simplified, no 87A rebate modelling)
    const taxable = Math.max(0, gross - 50_000 - employeePf - hraExempt - 80_000)
    const tax = slabTax(taxable)
    const tds = Math.round(tax * 0.9) // TDS nets out the 10% salary credit
    const deductions = employeePf + pension + professionalTax + tds
    const takeHome = gross - deductions

    return {
      basic,
      hraExempt,
      perquisites,
      employerPf,
      gratuity,
      insurance,
      gross,
      employeePf,
      pension,
      professionalTax,
      tds,
      deductions,
      takeHome,
    }
  }, [ctc, basicPct, declareSurcharge])

  const gap = ctc - m.takeHome
  const gapPct = (gap / ctc) * 100

  const rows: [string, number, string][] = [
    ['Basic salary', m.basic, 'text-white'],
    ['HRA (exempt portion)', m.hraExempt, 'text-ink-200'],
    ['Special allowance & other', m.gross - m.basic - m.hraExempt, 'text-ink-200'],
    ['Employee PF', -m.employeePf, 'text-rose-300'],
    ['Professional tax', -m.professionalTax, 'text-rose-300'],
    ['TDS (income tax)', -m.tds, 'text-rose-300'],
  ]

  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <div className="mb-1.5 flex items-center justify-between text-sm">
            <span className="text-ink-300">Annual CTC offered</span>
            <span className="font-semibold text-white">{rupeesShort(ctc)}</span>
          </div>
          <input
            type="range"
            min={240_000}
            max={6_000_000}
            step={20_000}
            value={ctc}
            onChange={(e) => setCtc(Number(e.target.value))}
            className="w-full accent-brand-400"
          />
        </div>
        <div>
          <div className="mb-1.5 flex items-center justify-between text-sm">
            <span className="text-ink-300">Basic as % of CTC</span>
            <span className="font-semibold text-white">{basicPct}%</span>
          </div>
          <input
            type="range"
            min={25}
            max={70}
            step={1}
            value={basicPct}
            onChange={(e) => setBasicPct(Number(e.target.value))}
            className="w-full accent-brand-400"
          />
        </div>
      </div>

      <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm">
        <input
          type="checkbox"
          checked={declareSurcharge}
          onChange={(e) => setDeclareSurcharge(e.target.checked)}
          className="accent-brand-400"
        />
        <span className="text-ink-200">
          Restrict PF to ₹15,000 basic (claim NPS instead of NPS + PF)
        </span>
      </label>

      <motion.div
        key={`${ctc}-${basicPct}-${declareSurcharge}`}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="grid gap-3 sm:grid-cols-3"
      >
        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <div className="text-[11px] uppercase tracking-wide text-ink-400">CTC offered</div>
          <div className="font-display text-xl text-white">{rupeesShort(ctc)}</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <div className="text-[11px] uppercase tracking-wide text-ink-400">Gross salary</div>
          <div className="font-display text-xl text-white">{rupeesShort(m.gross)}</div>
        </div>
        <div className="rounded-xl border border-brand-400/40 bg-brand-400/10 p-3">
          <div className="text-[11px] uppercase tracking-wide text-ink-400">Monthly take-home</div>
          <div className="font-display text-xl text-brand-300">{rupees(m.takeHome / 12)}</div>
        </div>
      </motion.div>

      <div className="overflow-hidden rounded-xl border border-white/10">
        <table className="w-full text-sm">
          <tbody>
            {rows.map(([label, value, cls]) => (
              <tr key={label} className="border-b border-white/5">
                <td className="px-3 py-2 text-ink-300">{label}</td>
                <td className={`px-3 py-2 text-right tabular-nums ${cls}`}>
                  {value < 0 ? `-${rupees(Math.abs(value))}` : rupees(value)}
                </td>
              </tr>
            ))}
            <tr className="bg-white/5">
              <td className="px-3 py-2 font-semibold text-white">Monthly take-home</td>
              <td className="px-3 py-2 text-right font-semibold tabular-nums text-brand-300">{rupees(m.takeHome / 12)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="rounded-xl border border-amber-400/30 bg-amber-400/10 p-4 text-sm text-amber-100">
        <strong>You never see {rupeesShort(gap)} of the CTC.</strong> That is{' '}
        {gapPct.toFixed(0)}% of the advertised figure — employer PF ({rupeesShort(m.employerPf)}), gratuity provision (
        {rupeesShort(m.gratuity)}), insurance and perquisites that the company spends but you do not receive.
        {gapPct > 25 && ' A CTC more than 25% above take-home is a sign to negotiate the structure, not just the number.'}
      </div>

      <p className="text-xs text-ink-500">
        Simplified Indian payroll for illustration — it uses the old tax regime with standard deduction, ignores
        87A rebates, section 80C/80D claims beyond PF, HRA rent exemption beyond ₹50,000, and slab 87A rebates. Your
        actual payslip will differ; use it to understand the structure, not to file a return.
      </p>
    </div>
  )
}

/** Indian new-regime style slab tax for a resident individual. */
function slabTax(taxable: number): number {
  const slabs: [number, number][] = [
    [400_000, 0],
    [800_000, 0.05],
    [1_200_000, 0.1],
    [1_600_000, 0.15],
    [2_000_000, 0.2],
    [2_400_000, 0.25],
    [Infinity, 0.3],
  ]
  let tax = 0
  let prev = 0
  for (const [cap, rate] of slabs) {
    if (taxable > prev) tax += (Math.min(taxable, cap) - prev) * rate
    prev = cap
  }
  return tax
}