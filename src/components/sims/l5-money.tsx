import { useMemo, useState } from 'react'
import { rupees, rupeesShort } from '../../lib/format'
import { Stat } from './CompoundLab'

/**
 * Level 5, band one, batch 2 labs (chapters l5-005 to l5-014).
 *
 * Ten separate simulations, one per chapter, each built around that chapter's
 * own decision:
 *   l5-benefit-valuator    price a benefits line, and compare cash with benefit
 *   l5-pf-lifecycle        run a provident fund account across a job change
 *   l5-regime-picker       compute both tax regimes from your own numbers
 *   l5-monthly-routine     place the month's recurring decisions on dates
 *   l5-emergency-sizing    size a buffer from obligations and income risk
 *   l5-sinking-planner     break annual bills into monthly transfers
 *   l5-budget-system-picker pick a budgeting system from how you live
 *   l5-zero-based-builder  assign every rupee to a job, ending at zero
 *   l5-ratio-stress-test   test 50/30/20 against real city costs
 *   l5-cashflow-timing     find the day a solvent month bounces a payment
 *
 * Every statutory rate used here is the one verified on 15 October 2026 and
 * linked from the chapters: the EPF wage ceiling of ₹25,000 (17 September
 * 2026), the 8.33% / 3.67% EPS-EPF split, 8.25% EPF interest, the unchanged
 * tax-year-2026-27 slabs with the ₹75,000 standard deduction, the ₹200 per
 * meal benefit exemption and the ₹20 lakh gratuity exemption. All salary and
 * expense figures are invented for teaching.
 */

const Panel = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-4">{children}</div>
)

const Slider = ({
  label,
  value,
  min,
  max,
  step,
  onChange,
  format = (v: number) => rupees(v),
}: {
  label: string
  value: number
  min: number
  max: number
  step: number
  onChange: (v: number) => void
  format?: (v: number) => string
}) => (
  <label className="block">
    <span className="flex items-center justify-between text-xs text-ink-300">
      <span>{label}</span>
      <span className="font-mono text-brand-300">{format(value)}</span>
    </span>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="mt-1 w-full accent-brand-400"
    />
  </label>
)

const Check = ({ ok, children }: { ok: boolean; children: React.ReactNode }) => (
  <li className="flex items-start gap-2 text-xs">
    <span
      className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] font-bold"
      style={{ background: ok ? '#34e0a1' : 'rgba(255,255,255,0.12)', color: ok ? '#11131f' : '#c9cfe4' }}
    >
      {ok ? '✓' : '·'}
    </span>
    <span className={ok ? 'text-ink-200' : 'text-ink-400'}>{children}</span>
  </li>
)

const Toggle = ({
  label,
  on,
  onChange,
  note,
}: {
  label: string
  on: boolean
  onChange: (v: boolean) => void
  note?: string
}) => (
  <button
    onClick={() => onChange(!on)}
    className={`w-full rounded-lg border px-3 py-2 text-left text-xs transition ${
      on ? 'border-brand-400/60 bg-brand-400/10 text-white' : 'border-white/15 text-ink-300 hover:border-white/30'
    }`}
  >
    <span className="flex items-center gap-2">
      <span
        className="flex h-4 w-4 items-center justify-center rounded"
        style={{ background: on ? '#34e0a1' : 'rgba(255,255,255,0.12)', color: '#11131f' }}
      >
        {on ? '✓' : ''}
      </span>
      {label}
    </span>
    {note && <span className="mt-1 block pl-6 text-[11px] text-ink-500">{note}</span>}
  </button>
)

/* ------------------------------------------------------------------ tax maths */

type Slab = [limit: number, rate: number]

/** Slab rates for tax year 2026-27, unchanged from the previous year. */
const NEW_SLABS: Slab[] = [
  [400_000, 0],
  [800_000, 0.05],
  [1_200_000, 0.1],
  [1_600_000, 0.15],
  [2_000_000, 0.2],
  [2_400_000, 0.25],
  [Infinity, 0.3],
]
const OLD_SLABS: Slab[] = [
  [250_000, 0],
  [500_000, 0.05],
  [1_000_000, 0.2],
  [Infinity, 0.3],
]

const slabTax = (income: number, slabs: Slab[]) => {
  let tax = 0
  let floor = 0
  for (const [limit, rate] of slabs) {
    if (income <= floor) break
    tax += (Math.min(income, limit) - floor) * rate
    floor = limit
  }
  return tax
}

/**
 * Tax year 2026-27. Salary income is assumed to be the only income, with the
 * standard deduction and, in the old regime, the deductions the learner names.
 * Surcharge (which begins above ₹50 lakh) is deliberately not modelled, so the
 * lab caps the salary slider below it.
 */
const oldRegimeTax = (
  gross: number,
  eightyC: number,
  rentAnnual: number,
  homeLoanInterest: number,
  metro: boolean,
) => {
  const basic = gross * 0.5
  const hraReceived = gross * 0.2
  const hraExempt =
    rentAnnual > 0
      ? Math.max(0, Math.min(hraReceived, rentAnnual - 0.1 * basic, (metro ? 0.5 : 0.4) * basic))
      : 0
  const taxable = Math.max(
    0,
    gross - 50_000 - Math.min(eightyC, 150_000) - hraExempt - Math.min(homeLoanInterest, 200_000),
  )
  let tax = slabTax(taxable, OLD_SLABS)
  // Section 87A rebate, ₹12,500 where total income does not exceed ₹5,00,000.
  if (taxable <= 500_000) tax = Math.max(0, tax - Math.min(tax, 12_500))
  return { taxable, hraExempt, tax: tax * 1.04 }
}

const newRegimeTax = (gross: number) => {
  const taxable = Math.max(0, gross - 75_000)
  let tax = slabTax(taxable, NEW_SLABS)
  // Rebate up to ₹60,000 where total income does not exceed ₹12,00,000, with
  // marginal relief just above it so a raise never costs more than it pays.
  if (taxable <= 1_200_000) tax = Math.max(0, tax - Math.min(tax, 60_000))
  else if (taxable < 1_275_000) tax = Math.min(tax, taxable - 1_200_000)
  return { taxable, tax: tax * 1.04 }
}

/** Marginal rate under the new regime, for pricing tax-free benefits. */
const newMarginalRate = (gross: number) => {
  const t = newRegimeTax(gross).taxable
  for (const [limit, rate] of NEW_SLABS) if (t <= limit) return rate
  return 0.3
}

/* ------------------------------------------------------------------ l5-005 */

export function L5BenefitEvaluator() {
  const [ctc, setCtc] = useState(900_000)
  const [mealMonthly, setMealMonthly] = useState(8_800)
  const [npsEmployer, setNpsEmployer] = useState(true)
  const [askAsCash, setAskAsCash] = useState(false)

  const basic = ctc * 0.5
  const employerPf = basic * 0.12
  const gratuity = basic * (15 / 26 / 12) // 15 days' wages per year, spread monthly
  const npsValue = npsEmployer ? basic * 0.14 : 0
  const mealValue = mealMonthly * 12
  const insuranceValue = 18_000 // illustrative employer cover cost

  const cashEquivalent = employerPf + gratuity
  const inKind = mealValue + insuranceValue
  const benefitTotal = cashEquivalent + inKind + npsValue
  const rate = newMarginalRate(ctc)
  // What the same rupees would cost if they arrived as salary instead of as an
  // employer contribution. Computed from the actual tax rather than from the
  // slab rate, because the rebate can make the effective rate nil well above
  // the salary this lab starts at — which is itself worth knowing.
  const taxIfCash = Math.max(0, newRegimeTax(ctc + npsValue).tax - newRegimeTax(ctc).tax)
  const taxSaved = askAsCash ? 0 : taxIfCash

  const checks = [
    { ok: mealMonthly <= 8_800, text: `Meal benefit of ${rupees(mealMonthly)} a month sits inside the ₹200-per-meal exemption (about ₹8,800 a month at two meals a day).` },
    { ok: cashEquivalent / ctc > 0.03, text: `${rupees(cashEquivalent)} a year of employer PF and gratuity is already inside your CTC — it is not a bonus on top.` },
    { ok: npsEmployer, text: 'An employer NPS contribution of up to 14% of salary is deductible even in the new regime, which makes it the rare benefit that saves tax without a lock-in you cannot explain.' },
    { ok: insuranceValue > 0, text: `${rupees(insuranceValue)} of employer insurance is real protection while you are employed — and it disappears on your last working day.` },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Price the offer</h4>
          <div className="space-y-3">
            <Slider label="Cost to company" value={ctc} min={400_000} max={4_000_000} step={50_000} onChange={setCtc} />
            <Slider label="Meal card per month" value={mealMonthly} min={0} max={12_000} step={200} onChange={setMealMonthly} />
          </div>
          <div className="mt-3 space-y-2">
            <Toggle
              label="Employer contributes to NPS"
              on={npsEmployer}
              onChange={setNpsEmployer}
              note="Up to 14% of basic salary is deductible under the new regime."
            />
            <Toggle
              label="Employee asks for the same value as cash instead"
              on={askAsCash}
              onChange={setAskAsCash}
              note="Identical rupees, taxed, and available immediately."
            />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Benefits in the CTC" value={rupeesShort(benefitTotal)} />
              <Stat label="Share of CTC" value={`${((benefitTotal / ctc) * 100).toFixed(1)}%`} />
              <Stat label="Tax if taken as cash" value={rupeesShort(taxIfCash)} />
            </div>
          </Panel>
          <Panel>
            <h4 className="mb-2 font-display text-sm text-white">What the benefits line contains</h4>
            <p className="mb-2 text-[11px] text-ink-500">
              Slab rate at this salary: {(rate * 100).toFixed(0)}%.
            </p>
            <ul className="space-y-1.5 text-xs">
              {[
                ['Employer EPF (12% of basic)', employerPf, true],
                ['Gratuity accrual (15/26 of a month per year)', gratuity, true],
                ['Employer NPS', npsValue, true],
                ['Meal card', mealValue, false],
                ['Group insurance', insuranceValue, false],
              ].map(([label, value, cashable]) => (
                <li key={String(label)} className="flex items-center justify-between gap-2">
                  <span className="text-ink-300">{String(label)}</span>
                  <span className="text-right">
                    <span className="font-mono text-brand-300">{rupees(Number(value))}</span>{' '}
                    <span className="text-[10px] text-ink-500">{cashable ? 'cash' : 'cover'}</span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-3 rounded-lg bg-white/5 p-2 text-[11px] text-ink-300">
              {askAsCash
                ? taxIfCash > 0
                  ? `Taken as cash, the ${rupees(npsValue)} of employer NPS becomes taxable salary and costs ${rupees(taxIfCash)} in tax this year — and nothing is locked in.`
                  : `Taken as cash, the ${rupees(npsValue)} of employer NPS adds nothing to your tax bill at this salary: the rebate already covers it. The benefit is worth taking for the retirement money, not for the tax.`
                : `Kept as employer contributions, ${rupees(npsValue + employerPf)} a year arrives untaxed — the trade is liquidity, not money.`}
              {!askAsCash &&
                (taxSaved > 0
                  ? ` Tax avoided this year: ${rupees(taxSaved)}.`
                  : ` At this salary the rebate already brings the tax to nil, so the NPS benefit buys retirement money rather than a tax break.`)}
            </p>
          </Panel>
        </div>
      </div>

      <Panel>
        <h4 className="mb-2 font-display text-sm text-white">Checks</h4>
        <ul className="space-y-1.5">
          {checks.map((c) => (
            <Check key={c.text} ok={c.ok}>
              {c.text}
            </Check>
          ))}
        </ul>
        <p className="mt-3 text-xs text-ink-300">
          <strong className="text-white">Debrief.</strong> A benefit is not free because it is not in your bank
          account, and it is not worthless because you cannot cash it out. Price three things separately: what
          it is worth today, whether it survives leaving the job, and whether the same rupees as salary would
          be taxed. Employer PF and gratuity are deferred pay; a meal card is a tax-free allowance; group
          insurance is rented protection. Only the last of these can vanish without warning, which is why your
          own term cover stays on the list even when the employer provides one.
        </p>
      </Panel>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-006 */

export function L5PfLifecycle() {
  const [wage, setWage] = useState(25_000)
  const [years, setYears] = useState(30)
  const [jobChangeYear, setJobChangeYear] = useState(6)
  const [action, setAction] = useState<'transfer' | 'restart' | 'leave'>('transfer')

  const RATE = 8.25 / 100 / 12
  const MONTHLY = wage * (0.12 + 0.0367) // employee 12% + employer 3.67% to EPF

  const grow = (principal: number, months: number) => {
    let v = principal
    for (let m = 0; m < months; m++) v = v * (1 + RATE) + MONTHLY
    return v
  }

  const corpusBefore = grow(0, jobChangeYear * 12)
  const remaining = (years - jobChangeYear) * 12
  const transferred = grow(corpusBefore, remaining)
  const end = action === 'transfer' ? transferred : action === 'restart' ? grow(0, remaining) : corpusBefore
  const note =
    action === 'transfer'
      ? 'The account moves with the UAN and interest keeps compounding on the whole balance.'
      : action === 'restart'
        ? `The old balance is withdrawn, so only ${years - jobChangeYear} years of contributions compound.`
        : 'No further contributions arrive, and an account left untouched without a transfer may stop earning interest — check the current rule before relying on it.'

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">One account, one job change</h4>
          <div className="space-y-3">
            <Slider label="PF wage (basic + DA) per month" value={wage} min={10_000} max={100_000} step={5_000} onChange={setWage} />
            <Slider label="Years in work" value={years} min={5} max={35} step={1} onChange={setYears} format={(v) => `${v} yrs`} />
            <Slider label="Job change at year" value={Math.min(jobChangeYear, years)} min={2} max={Math.max(2, years - 1)} step={1} onChange={setJobChangeYear} format={(v) => `year ${v}`} />
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {(
              [
                ['transfer', 'Transfer on joining'],
                ['restart', 'Withdraw and restart'],
                ['leave', 'Leave it, do not transfer'],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                onClick={() => setAction(id)}
                className={`rounded-lg border px-3 py-1 text-xs transition ${
                  action === id ? 'border-brand-400/60 bg-brand-400/10 text-white' : 'border-white/15 text-ink-300 hover:border-white/30'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Balance at the switch" value={rupeesShort(corpusBefore)} />
              <Stat label="Balance at the end" value={rupeesShort(end)} />
              <Stat label="Monthly into the fund" value={rupees(MONTHLY)} />
            </div>
          </Panel>
          <Panel>
            <h4 className="mb-2 font-display text-sm text-white">What the choice costs</h4>
            <p className="text-xs text-ink-300">{note}</p>
            {action !== 'transfer' && (
              <p className="mt-2 rounded-lg bg-amber-400/10 p-2 text-xs text-amber-200">
                Transferring would leave {rupees(transferred)} instead of {rupees(end)} — a difference of{' '}
                {rupees(transferred - end)}.
              </p>
            )}
            <ul className="mt-3 space-y-1.5">
              <Check ok={wage <= 25_000} >
                {wage <= 25_000
                  ? 'This wage is inside the ₹25,000 statutory ceiling that applies from 17 September 2026, so coverage is mandatory.'
                  : 'Above the ₹25,000 ceiling, statutory contributions may be limited to it — but an employer already contributing on higher wages cannot reduce them.'}
              </Check>
              <Check ok={action === 'transfer'}>
                A transfer on joining is the default that costs nothing; a withdrawal is a decision to spend a retirement account.
              </Check>
            </ul>
          </Panel>
        </div>
      </div>

      <Panel>
        <p className="text-xs text-ink-300">
          <strong className="text-white">Debrief.</strong> Your EPF account is not per employer. The UAN follows
          you, and the account keeps compounding for decades if you transfer instead of withdrawing. Of every
          ₹100 of employer contribution, ₹8.33 of wages goes to the pension scheme (EPS) and the balance to EPF;
          the EPS part buys a pension rather than a balance. That is why this lab puts {rupees(MONTHLY)} a month
          into the fund rather than the full 24% of wages. Check the passbook, not the payslip: mismatched names,
          a dormant UAN and an unlinked Aadhaar are the three failures that cost people years of accumulation.
        </p>
      </Panel>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-007 */

export function L5RegimePicker() {
  const [gross, setGross] = useState(1_200_000)
  const [eightyC, setEightyC] = useState(150_000)
  const [rent, setRent] = useState(480_000)
  const [homeLoan, setHomeLoan] = useState(200_000)
  const [metro, setMetro] = useState(true)

  const old = oldRegimeTax(gross, eightyC, rent, homeLoan, metro)
  const fresh = newRegimeTax(gross)
  const cheaper = old.tax < fresh.tax ? 'old' : 'new'
  const saving = Math.abs(old.tax - fresh.tax)

  // Where does the old regime stop winning? Sweep the rent from 0 upward.
  const breakevenRent = useMemo(() => {
    for (let r = 0; r <= 1_200_000; r += 10_000) {
      if (oldRegimeTax(gross, eightyC, r, homeLoan, metro).tax <= newRegimeTax(gross).tax) return r
    }
    return null
  }, [gross, eightyC, homeLoan, metro])

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Your numbers, not a rule of thumb</h4>
          <div className="space-y-3">
            <Slider label="Gross salary" value={gross} min={400_000} max={4_900_000} step={50_000} onChange={setGross} />
            <Slider label="80C investments (old regime only)" value={eightyC} min={0} max={150_000} step={10_000} onChange={setEightyC} />
            <Slider label="Rent paid per year" value={rent} min={0} max={900_000} step={20_000} onChange={setRent} />
            <Slider label="Home-loan interest" value={homeLoan} min={0} max={200_000} step={20_000} onChange={setHomeLoan} />
          </div>
          <button
            onClick={() => setMetro(!metro)}
            className="mt-3 w-full rounded-lg border border-white/15 px-3 py-1.5 text-xs text-ink-300 transition hover:border-white/30"
          >
            City type: {metro ? 'metro (50% HRA limit)' : 'non-metro (40% HRA limit)'} — tap to change
          </button>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <h4 className="mb-2 font-display text-sm text-white">Tax for tax year 2026-27</h4>
            <table className="w-full text-xs">
              <thead>
                <tr className="text-ink-500">
                  <th className="pb-1 text-left font-normal">Line</th>
                  <th className="pb-1 text-right font-normal">Old</th>
                  <th className="pb-1 text-right font-normal">New</th>
                </tr>
              </thead>
              <tbody className="font-mono">
                {[
                  ['Gross', gross, gross],
                  ['Standard deduction', -50_000, -75_000],
                  ['80C', -Math.min(eightyC, 150_000), 0],
                  ['HRA exemption', -Math.round(old.hraExempt), 0],
                  ['Home-loan interest', -Math.min(homeLoan, 200_000), 0],
                  ['Taxable income', Math.round(old.taxable), Math.round(fresh.taxable)],
                  ['Tax + 4% cess', Math.round(old.tax), Math.round(fresh.tax)],
                ].map(([label, a, b]) => (
                  <tr key={String(label)} className={label === 'Tax + 4% cess' ? 'text-white' : 'text-ink-300'}>
                    <td className="py-0.5">{String(label)}</td>
                    <td className="py-0.5 text-right">{rupees(Number(a))}</td>
                    <td className="py-0.5 text-right">{rupees(Number(b))}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Panel>
          <Panel>
            <div className={`rounded-lg p-2 text-xs ${cheaper === 'old' ? 'bg-amber-400/10 text-amber-200' : 'bg-brand-400/10 text-brand-300'}`}>
              {cheaper === 'old' ? 'The old regime' : 'The new regime'} is cheaper here by {rupees(saving)} a year.
              {breakevenRent === null
                ? ' On these numbers the old regime never overtakes the new one, whatever you pay in rent.'
                : ` The old regime starts winning once rent passes about ${rupees(breakevenRent)} a year.`}
            </div>
            <ul className="mt-3 space-y-1.5">
              <Check ok={fresh.taxable > 1_200_000}>
                {fresh.taxable <= 1_200_000
                  ? 'Under the new regime the rebate brings the tax to nil, so all that matters is whether the old regime beats zero.'
                  : 'Above ₹12 lakh of taxable income the rebate no longer applies, and marginal relief stops a raise from costing more than it pays.'}
              </Check>
              <Check ok={gross <= 4_900_000}>
                Surcharge, which begins above ₹50 lakh, is deliberately not modelled here — check it separately at that level.
              </Check>
            </ul>
          </Panel>
        </div>
      </div>

      <Panel>
        <p className="text-xs text-ink-300">
          <strong className="text-white">Debrief.</strong> The regime is not a belief, it is arithmetic on four
          inputs: rent, 80C, home-loan interest and dependants. Choose once a year, write down why, and re-run
          the numbers when any of those inputs changes materially. The 2026 Act applies from this tax year and
          renumbers the sections — the rebate that the old Act called section 87A now sits in section 156 — so
          quote the rule, not the number, when you explain your choice to anyone.
        </p>
      </Panel>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-008 */

const ROUTINE = [
  { id: 'salary', label: 'Salary lands', fixed: 1 },
  { id: 'transfer', label: 'Automated transfers leave the spending account', fixed: null },
  { id: 'fixed', label: 'Fixed bills cleared (rent, EMI, subscriptions)', fixed: null },
  { id: 'spend', label: 'Mid-month spend check', fixed: null },
  { id: 'variable', label: 'Variable bills reviewed (card, utilities)', fixed: null },
  { id: 'review', label: 'Dashboard updated, next month set', fixed: null },
] as const

export function L5MonthlyRoutine() {
  const [days, setDays] = useState<Record<string, number>>({
    salary: 1,
    transfer: 2,
    fixed: 5,
    spend: 15,
    variable: 25,
    review: 30,
  })

  const d = (id: string) => days[id] ?? 1
  const order = [...ROUTINE].map((r) => r.id).sort((a, b) => d(a) - d(b))

  const checks = [
    { ok: d('transfer') > d('salary'), text: 'Transfers leave after the salary lands, so a one-day delay never causes a failed instruction.' },
    { ok: d('fixed') >= d('transfer'), text: 'Fixed bills are cleared after the money has moved, not before.' },
    { ok: d('spend') > d('fixed'), text: 'The mid-month check happens once the fixed lines are gone — early enough to change the rest of the month.' },
    { ok: d('variable') >= d('spend'), text: 'Variable bills are reviewed later, when the card and utility statements exist.' },
    { ok: d('review') >= d('variable'), text: 'The dashboard update closes the month rather than opening it.' },
    { ok: new Set(Object.values(days)).size >= 4, text: 'The tasks sit on separate dates, so a month with a busy week does not collapse them into one.' },
  ]
  const passed = checks.filter((c) => c.ok).length

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Place the month's decisions</h4>
          <div className="space-y-3">
            {ROUTINE.map((r) => (
              <Slider
                key={r.id}
                label={r.label}
                value={d(r.id)}
                min={1}
                max={31}
                step={1}
                onChange={(v) => setDays((prev) => ({ ...prev, [r.id]: v }))}
                format={(v) => `day ${v}`}
              />
            ))}
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Checks passed" value={`${passed}/6`} tone={passed === 6 ? 'good' : 'neutral'} />
              <Stat label="Distinct dates" value={`${new Set(Object.values(days)).size}`} />
              <Stat label="Review day" value={`day ${d('review')}`} />
            </div>
            <ol className="mt-3 space-y-1 text-xs text-ink-300">
              {order.map((id, i) => (
                <li key={id}>
                  {i + 1}. day {d(id)} — {ROUTINE.find((r) => r.id === id)?.label}
                </li>
              ))}
            </ol>
          </Panel>
          <Panel>
            <h4 className="mb-2 font-display text-sm text-white">What the sequence protects</h4>
            <ul className="space-y-1.5">
              {checks.map((c) => (
                <Check key={c.text} ok={c.ok}>
                  {c.text}
                </Check>
              ))}
            </ul>
          </Panel>
        </div>
      </div>

      <Panel>
        <p className="text-xs text-ink-300">
          <strong className="text-white">Debrief.</strong> A monthly system is not a budget; it is a calendar.
          Automate what is identical every month — the transfer out, the fixed bills, the SIP — and decide only
          what actually varies. The two checks people skip are the ones that matter most: the mid-month look at
          discretionary spending, which is the only point at which the month can still be changed, and the
          closing review, which is where a salary change, a new bill or a failed mandate gets noticed instead of
          being discovered six weeks later.
        </p>
      </Panel>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-009 */

export function L5EmergencySizing() {
  const [essentials, setEssentials] = useState(22_000)
  const [setting, setSetting] = useState<'stable' | 'moderate' | 'volatile'>('moderate')
  const [singleIncome, setSingleIncome] = useState(true)
  const [dependents, setDependents] = useState(0)
  const [medicalCover, setMedicalCover] = useState('own policy')
  const [held, setHeld] = useState(60_000)
  const [instantShare, setInstantShare] = useState(1)

  const base = setting === 'stable' ? 4 : setting === 'moderate' ? 6 : 9
  const months = base + (singleIncome ? 1 : 0) + dependents * 0.5 + (medicalCover !== 'own policy' ? 2 : 0)
  const target = essentials * months
  const progress = Math.min(100, (held / target) * 100)
  const instantAmount = (held * instantShare) / 3

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">How much cover you need</h4>
          <div className="space-y-3">
            <Slider label="Essential monthly spending" value={essentials} min={8_000} max={80_000} step={1_000} onChange={setEssentials} />
            <Slider label="Dependants on this income" value={dependents} min={0} max={5} step={1} onChange={setDependents} format={(v) => `${v}`} />
            <Slider label="Buffer already held" value={held} min={0} max={600_000} step={10_000} onChange={setHeld} />
            <Slider label="Of the buffer, share in instant access" value={instantShare} min={0} max={3} step={1} onChange={setInstantShare} format={(v) => ['none', 'one third', 'two thirds', 'all'][v]} />
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {(['stable', 'moderate', 'volatile'] as const).map((s) => (
              <button
                key={s}
                onClick={() => setSetting(s)}
                className={`rounded-lg border px-3 py-1 text-xs capitalize transition ${
                  setting === s ? 'border-brand-400/60 bg-brand-400/10 text-white' : 'border-white/15 text-ink-300 hover:border-white/30'
                }`}
              >
                {s} income
              </button>
            ))}
          </div>
          <div className="mt-2 flex gap-2">
            {[
              [true, 'Single income'],
              [false, 'Two incomes'],
            ].map(([v, label]) => (
              <button
                key={String(label)}
                onClick={() => setSingleIncome(v as boolean)}
                className={`flex-1 rounded-lg border px-3 py-1 text-xs transition ${
                  singleIncome === v ? 'border-brand-400/60 bg-brand-400/10 text-white' : 'border-white/15 text-ink-300 hover:border-white/30'
                }`}
              >
                {label as string}
              </button>
            ))}
          </div>
          <div className="mt-2 flex gap-2">
            {['own policy', 'employer only', 'none'].map((m) => (
              <button
                key={m}
                onClick={() => setMedicalCover(m)}
                className={`flex-1 rounded-lg border px-2 py-1 text-[11px] transition ${
                  medicalCover === m ? 'border-brand-400/60 bg-brand-400/10 text-white' : 'border-white/15 text-ink-300 hover:border-white/30'
                }`}
              >
                {m === 'own policy' ? 'own medical cover' : m === 'employer only' ? 'employer cover only' : 'no medical cover'}
              </button>
            ))}
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Recommended cover" value={`${months.toFixed(1)} months`} tone="good" />
              <Stat label="Target amount" value={rupeesShort(target)} />
              <Stat label="Buffer progress" value={`${progress.toFixed(0)}%`} tone={progress >= 100 ? 'good' : 'neutral'} />
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full rounded-full bg-brand-400" style={{ width: `${progress}%` }} />
            </div>
            <ul className="mt-3 space-y-1.5">
              <Check ok={progress >= 100}>{progress >= 100 ? 'The buffer covers the target.' : `${rupees(target - held)} still to accumulate at ${rupees(essentials * 0.2)} a month is ${Math.ceil((target - held) / (essentials * 0.2))} months of saving.`}</Check>
              <Check ok={instantAmount >= essentials}>At least one month ({rupees(essentials)}) is in instant access: {rupees(instantAmount)} is.</Check>
              <Check ok={medicalCover === 'own policy'}>The buffer assumes a medical shock is insured. Employer-only cover ends with the job — exactly when the buffer is being spent.</Check>
            </ul>
          </Panel>
          <Panel>
            <h4 className="mb-2 font-display text-sm text-white">Why this number, not "six months"</h4>
            <p className="text-xs text-ink-300">
              Six months is a starting point, not a standard. The number moves with how hard your income would
              be to replace: {setting === 'stable' ? 'a stable, in-demand role does not need twelve months of idle cash' : setting === 'moderate' ? 'a normal market can take a few months to re-enter' : 'a volatile sector needs a longer runway because hiring freezes arrive with the shock'}. Dependants and an
              uninsured medical risk both lengthen the runway. What does not move the number is the lifestyle: the
              buffer is sized against essentials, because holidays and dining can stop for a month and rent cannot.
            </p>
          </Panel>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-010 */

type SinkingItem = { id: string; label: string; amount: number; dueMonth: number }

export function L5SinkingPlanner() {
  const [items, setItems] = useState<SinkingItem[]>([
    { id: 'health', label: 'Health insurance premium', amount: 24_000, dueMonth: 4 },
    { id: 'vehicle', label: 'Vehicle insurance and service', amount: 18_000, dueMonth: 7 },
    { id: 'festival', label: 'Festivals and gifts', amount: 30_000, dueMonth: 10 },
    { id: 'travel', label: 'Travel home', amount: 36_000, dueMonth: 12 },
    { id: 'repairs', label: 'Repairs and replacements', amount: 24_000, dueMonth: 2 },
  ])
  const [currentMonth, setCurrentMonth] = useState(1)
  const [buffer, setBuffer] = useState(132_000)

  const set = (id: string, patch: Partial<SinkingItem>) =>
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, ...patch } : it)))

  const monthlyTotal = items.reduce((sum, it) => sum + it.amount / 12, 0)
  const monthsAhead = (due: number) => ((due - currentMonth + 12) % 12) || 12
  const shortfall = items
    .filter((it) => it.amount / monthsAhead(it.dueMonth) > it.amount / 12 + 1)
    .map((it) => it.label)

  // Which months carry more than one bill?
  const load = Array.from({ length: 12 }, (_, i) => items.filter((it) => it.dueMonth === i + 1).length)
  const heavy = load.filter((n) => n >= 2).length

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Annual bills, one month at a time</h4>
          <div className="space-y-4">
            {items.map((it) => (
              <div key={it.id}>
                <Slider
                  label={`${it.label} — due in month ${it.dueMonth}`}
                  value={it.amount}
                  min={0}
                  max={120_000}
                  step={2_000}
                  onChange={(v) => set(it.id, { amount: v })}
                />
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-[11px] text-ink-500">Due month</span>
                  <input
                    type="range"
                    min={1}
                    max={12}
                    value={it.dueMonth}
                    onChange={(e) => set(it.id, { dueMonth: Number(e.target.value) })}
                    className="flex-1 accent-brand-400"
                  />
                  <span className="w-24 text-right font-mono text-[11px] text-brand-300">
                    {rupees(Math.round(it.amount / 12))}/mo
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 space-y-3">
            <Slider label="Month you are in now" value={currentMonth} min={1} max={12} step={1} onChange={setCurrentMonth} format={(v) => `month ${v}`} />
            <Slider label="Emergency buffer (kept separate)" value={buffer} min={0} max={500_000} step={10_000} onChange={setBuffer} />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Set aside each month" value={rupeesShort(monthlyTotal)} />
              <Stat label="Annual bills covered" value={rupeesShort(items.reduce((s, i) => s + i.amount, 0))} />
              <Stat label="Months with two or more" value={`${heavy}/12`} tone={heavy > 3 ? 'bad' : 'neutral'} />
            </div>
            <ul className="mt-3 space-y-1.5">
              <Check ok={shortfall.length === 0}>
                {shortfall.length === 0
                  ? 'Every bill is funded evenly, with enough months left before it falls due.'
                  : `Not enough months remain to fund evenly: ${shortfall.join(', ')}. Fund it from the buffer this year, then start the transfer earlier next year.`}
              </Check>
              <Check ok={monthlyTotal < buffer / 6}>
                The monthly set-aside of {rupees(monthlyTotal)} is {((monthlyTotal / Math.max(buffer, 1)) * 100).toFixed(1)}% of the
                buffer — a sinking fund that competes with the buffer for the same rupees will lose.
              </Check>
              <Check ok={heavy <= 3}>
                {heavy <= 3 ? 'No month is overloaded with bills.' : `${heavy} months carry two or more bills. Stagger a due date, or move one to the month after the salary revision.`}
              </Check>
            </ul>
          </Panel>
          <Panel>
            <h4 className="mb-2 font-display text-sm text-white">What is and is not a sinking fund</h4>
            <p className="text-xs text-ink-300">
              A sinking fund is a planned cost, not a shock: the insurance premium, the vehicle service, the
              festival, the annual travel. Each gets a named pot and a monthly transfer, so the bill arrives and
              the money is already there. What must not happen is double counting — the same ₹2,000 cannot be
              both this month's set-aside and this month's buffer contribution. The buffer exists for what you
              cannot predict; the sinking fund exists for what you can.
            </p>
          </Panel>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-011 */

const QUESTIONS = [
  {
    id: 'income',
    q: 'How does your income arrive?',
    options: [
      { id: 'steady', label: 'The same amount every month' },
      { id: 'variable', label: 'It moves with months, clients or seasons' },
    ],
  },
  {
    id: 'oversight',
    q: 'How much detail can you maintain?',
    options: [
      { id: 'low', label: 'Very little — I want few decisions' },
      { id: 'high', label: 'I will update a plan each month' },
    ],
  },
  {
    id: 'spending',
    q: 'How do you spend?',
    options: [
      { id: 'card', label: 'Almost entirely by card and UPI' },
      { id: 'mixed', label: 'A mix of card, UPI and cash' },
    ],
  },
] as const

const SYSTEMS = {
  envelope: {
    name: 'Envelope system',
    blurb: 'Cash-like pots with a hard stop in each: when the envelope is empty, that category is finished for the month.',
    strong: 'Very effective for people who overspend on card because the money is abstract.',
    weak: 'Poor fit for variable income — a fixed envelope is wrong in a lean month and idle in a fat one.',
  },
  percentage: {
    name: 'Percentage system',
    blurb: 'Fixed shares of income — needs, wants and savings — with freedom inside each share.',
    strong: 'Survives variable income, because every share simply scales with what arrived.',
    weak: 'Blunt in expensive cities: a 50% needs share can be impossible before any lifestyle choice is made.',
  },
  zero: {
    name: 'Zero-based system',
    blurb: 'Every rupee is assigned to a named job before the month begins, and the plan must reach exactly zero.',
    strong: 'Highest visibility, and the only system that forces a decision on savings and debt before spending.',
    weak: 'Costs time monthly, and gets abandoned quickly by anyone who will not sit with it.',
  },
} as const

export function L5BudgetSystemPicker() {
  const [answers, setAnswers] = useState<Record<string, string>>({ income: 'steady', oversight: 'low', spending: 'card' })

  const score = useMemo(() => {
    const s = { envelope: 0, percentage: 0, zero: 0 }
    if (answers.income === 'variable') {
      s.percentage += 2
      s.zero += 1
    } else {
      s.zero += 1
      s.envelope += 1
    }
    if (answers.oversight === 'high') {
      s.zero += 3
    } else {
      s.envelope += 2
      s.percentage += 1
    }
    if (answers.spending === 'mixed') {
      s.envelope += 2
    } else {
      s.percentage += 1
      s.zero += 1
    }
    return s
  }, [answers])

  const ranked = (Object.keys(score) as (keyof typeof score)[]).sort((a, b) => score[b] - score[a])
  const winner = ranked[0]
  const chosen = SYSTEMS[winner]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Three questions</h4>
          <div className="space-y-4">
            {QUESTIONS.map((q) => (
              <div key={q.id}>
                <p className="text-xs text-ink-300">{q.q}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {q.options.map((o) => (
                    <button
                      key={o.id}
                      onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: o.id }))}
                      className={`rounded-lg border px-3 py-1 text-xs transition ${
                        answers[q.id] === o.id ? 'border-brand-400/60 bg-brand-400/10 text-white' : 'border-white/15 text-ink-300 hover:border-white/30'
                      }`}
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <h4 className="mb-2 font-display text-sm text-white">{chosen.name}</h4>
            <p className="text-xs text-ink-300">{chosen.blurb}</p>
            <p className="mt-2 text-xs text-brand-300">Where it is strong: {chosen.strong}</p>
            <p className="mt-1 text-xs text-amber-200">Where it fails: {chosen.weak}</p>
            <div className="mt-3 space-y-1.5">
              {ranked.map((k) => (
                <div key={k} className="flex items-center gap-2">
                  <span className="w-28 text-xs text-ink-300">{SYSTEMS[k].name}</span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-brand-400" style={{ width: `${(score[k] / 6) * 100}%` }} />
                  </div>
                  <span className="w-6 text-right font-mono text-[11px] text-ink-400">{score[k]}</span>
                </div>
              ))}
            </div>
          </Panel>
          <Panel>
            <h4 className="mb-2 font-display text-sm text-white">Switching costs</h4>
            <p className="text-xs text-ink-300">
              Most people use two systems badly at once: a percentage rule they do not follow and a zero-based
              budget they update twice. Pick one, run it for three months, and only change it if the failure is
              structural — variable income, or a category that is mispriced every single month — rather than
              because the first month felt uncomfortable.
            </p>
          </Panel>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-012 */

const ZERO_CATEGORIES = [
  { id: 'rent', label: 'Rent and society', kind: 'need' },
  { id: 'food', label: 'Food and groceries', kind: 'need' },
  { id: 'transport', label: 'Transport', kind: 'need' },
  { id: 'family', label: 'Family support', kind: 'need' },
  { id: 'buffer', label: 'Emergency buffer', kind: 'save' },
  { id: 'goals', label: 'Goals', kind: 'save' },
  { id: 'debt', label: 'Debt clearing', kind: 'save' },
  { id: 'life', label: 'Guilt-free spending', kind: 'want' },
] as const

export function L5ZeroBasedBuilder() {
  const [income, setIncome] = useState(43_800)
  const [alloc, setAlloc] = useState<Record<string, number>>({
    rent: 14_000,
    food: 6_000,
    transport: 2_500,
    family: 3_000,
    buffer: 8_500,
    goals: 4_000,
    debt: 1_000,
    life: 4_800,
  })

  const assigned = Object.values(alloc).reduce((a, b) => a + b, 0)
  const left = income - assigned
  const saved = alloc.buffer + alloc.goals + alloc.debt
  const savingRate = (saved / income) * 100
  const needs = alloc.rent + alloc.food + alloc.transport + alloc.family

  const checks = [
    { ok: Math.abs(left) <= 100, text: `Unassigned: ${rupees(left)} — a zero-based plan has to reach zero, or the leftover gets spent by default.` },
    { ok: savingRate >= 20, text: `Buffer, goals and debt are ${savingRate.toFixed(1)}% of income. Below 20% the plan funds the month and not the future.` },
    { ok: needs / income < 0.65, text: `Needs take ${((needs / income) * 100).toFixed(0)}% of income. Past about 65% the framework has no room left and the fixed lines are the problem.` },
    { ok: alloc.life > 0, text: alloc.life > 0 ? `${rupees(alloc.life)} is deliberately left for spending. A plan with nothing in it for life is revised by reality within three months.` : 'Nothing is left for discretionary spending, which is why so many plans like this are abandoned in month two.' },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Assign every rupee</h4>
          <div className="space-y-3">
            <Slider label="Income arriving this month" value={income} min={20_000} max={200_000} step={1_000} onChange={setIncome} />
            {ZERO_CATEGORIES.map((c) => (
              <Slider
                key={c.id}
                label={c.label}
                value={alloc[c.id]}
                min={0}
                max={60_000}
                step={250}
                onChange={(v) => setAlloc((prev) => ({ ...prev, [c.id]: v }))}
              />
            ))}
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Unassigned" value={rupees(left)} tone={Math.abs(left) <= 100 ? 'good' : left < 0 ? 'bad' : 'neutral'} />
              <Stat label="Saving rate" value={`${savingRate.toFixed(1)}%`} />
              <Stat label="Checks passed" value={`${checks.filter((c) => c.ok).length}/4`} />
            </div>
            {left < 0 && (
              <p className="mt-3 rounded-lg bg-rose-400/10 p-2 text-xs text-rose-200">
                You have assigned {rupees(-left)} more than arrives. Reduce a category rather than assuming next
                month is better.
              </p>
            )}
          </Panel>
          <Panel>
            <h4 className="mb-2 font-display text-sm text-white">Checks</h4>
            <ul className="space-y-1.5">
              {checks.map((c) => (
                <Check key={c.text} ok={c.ok}>
                  {c.text}
                </Check>
              ))}
            </ul>
          </Panel>
        </div>
      </div>

      <Panel>
        <p className="text-xs text-ink-300">
          <strong className="text-white">Debrief.</strong> Zero-based budgeting is the only system that treats
          savings and debt as categories with the same standing as rent. Its discipline is the check at the end:
          if money is unassigned, it is not "extra", it is a decision deferred to the most expensive moment. The
          two failure modes are equally common — assigning to zero on paper while never checking the real
          spending, and assigning so tightly that a single unplanned expense breaks the plan. A small buffer
          category and a mid-month revision keep it alive.
        </p>
      </Panel>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-013 */

export function L5RatioStressTest() {
  const [takeHome, setTakeHome] = useState(43_800)
  const [rent, setRent] = useState(18_000)
  const [transport, setTransport] = useState(4_500)
  const [emas, setEmas] = useState(6_000)
  const [family, setFamily] = useState(3_000)

  const needs = rent + transport + emas + family + takeHome * 0.08 // food, medicines, phone: about 8%
  const needsShare = (needs / takeHome) * 100
  const wants = Math.max(0, takeHome * 0.3)
  const savings = Math.max(0, takeHome - needs - wants)
  const savingsShare = (savings / takeHome) * 100
  const verdict =
    needsShare > 65
      ? 'The ratio has broken down before any lifestyle choice. Fixed costs are the task.'
      : needsShare > 50
        ? 'The ratio is under pressure: needs are above 50% but savings can still be protected.'
        : 'The framework is usable here, with room to raise savings above 20%.'

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Your city's numbers</h4>
          <div className="space-y-3">
            <Slider label="Take-home each month" value={takeHome} min={20_000} max={150_000} step={1_000} onChange={setTakeHome} />
            <Slider label="Rent" value={rent} min={0} max={60_000} step={500} onChange={setRent} />
            <Slider label="Commute" value={transport} min={0} max={20_000} step={250} onChange={setTransport} />
            <Slider label="EMIs" value={emas} min={0} max={40_000} step={500} onChange={setEmas} />
            <Slider label="Family support" value={family} min={0} max={30_000} step={500} onChange={setFamily} />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Needs" value={`${needsShare.toFixed(0)}%`} tone={needsShare > 65 ? 'bad' : needsShare > 50 ? 'neutral' : 'good'} />
              <Stat label="Savings" value={`${savingsShare.toFixed(0)}%`} tone={savingsShare >= 20 ? 'good' : 'bad'} />
              <Stat label="Fixed lines" value={rupeesShort(rent + transport + emas)} />
            </div>
            <p className="mt-3 rounded-lg bg-white/5 p-2 text-xs text-ink-300">{verdict}</p>
            <p className="mt-2 text-xs text-ink-400">
              Rent and commute alone are {(((rent + transport) / takeHome) * 100).toFixed(0)}% of take-home.
            </p>
          </Panel>
          <Panel>
            <h4 className="mb-2 font-display text-sm text-white">What the rule cannot see</h4>
            <ul className="space-y-1.5">
              <Check ok={rent / takeHome < 0.35}>
                {rent / takeHome < 0.35 ? 'Rent is inside a third of take-home, which keeps the rest of the framework possible.' : 'Rent above a third of take-home is the single line that breaks the framework: no grocery choice recovers it.'}
              </Check>
              <Check ok={savingsShare >= 20}>
                {savingsShare >= 20 ? 'Savings stay above 20% even after the fixed lines.' : 'Savings fall below 20% — at this rent, the framework stops being a target and becomes a wish.'}
              </Check>
              <Check ok={emas / takeHome < 0.2}>
                {emas / takeHome < 0.2 ? 'EMIs stay under a fifth of income.' : 'EMIs above a fifth of income are the second fixed line to attack — they are renegotiable in a way rent is not.'}
              </Check>
            </ul>
          </Panel>
        </div>
      </div>

      <Panel>
        <p className="text-xs text-ink-300">
          <strong className="text-white">Debrief.</strong> Percentage frameworks are a diagnostic, not a budget.
          They are most useful for showing what is out of line, and least useful in exactly the situations where
          people need them most: a first job in an expensive city, a single income supporting a family, or
          seasonal earnings. Use the ratio to ask one question — do the fixed lines leave room for savings? If
          not, the answer is to change a fixed line: a cheaper commute, a different flat, a renegotiated EMI.
          Cutting discretionary spending at that point only moves the problem by a few percent.
        </p>
      </Panel>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-014 */

export function L5CashflowTiming() {
  const [salaryDay, setSalaryDay] = useState(1)
  const [rentDay, setRentDay] = useState(3)
  const [cardDay, setCardDay] = useState(7)
  const [emiDay, setEmiDay] = useState(10)
  const [floor, setFloor] = useState(5_000)
  const [outflows, setOutflows] = useState(10_800)

  const monthly = 43_800
  const daily = outflows / 30

  const timeline = useMemo(() => {
    const payments: { day: number; label: string; amount: number }[] = [
      { day: rentDay, label: 'rent', amount: 18_000 },
      { day: cardDay, label: 'card', amount: 9_000 },
      { day: emiDay, label: 'EMI', amount: 6_000 },
    ]
    let balance = floor
    const out: { day: number; balance: number; event?: string; ok: boolean }[] = []
    for (let day = 1; day <= 31; day++) {
      balance -= daily
      if (day === salaryDay) balance += monthly
      for (const p of payments.filter((p) => p.day === day)) balance -= p.amount
      out.push({
        day,
        balance,
        event: day === salaryDay ? 'salary' : payments.find((p) => p.day === day)?.label,
        ok: balance >= 0,
      })
    }
    return out
  }, [salaryDay, floor, daily, rentDay, cardDay, emiDay, monthly])

  const lowest = timeline.reduce((min, t) => (t.balance < min.balance ? t : min), timeline[0])
  const bounces = timeline.filter((t) => !t.ok)
  const maxV = Math.max(...timeline.map((t) => Math.abs(t.balance)), 1)

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Set the dates, not the amounts</h4>
          <div className="space-y-3">
            <Slider label="Salary credit day" value={salaryDay} min={1} max={31} step={1} onChange={setSalaryDay} format={(v) => `day ${v}`} />
            <Slider label="Rent due day" value={rentDay} min={1} max={31} step={1} onChange={setRentDay} format={(v) => `day ${v}`} />
            <Slider label="Card due day" value={cardDay} min={1} max={31} step={1} onChange={setCardDay} format={(v) => `day ${v}`} />
            <Slider label="EMI day" value={emiDay} min={1} max={31} step={1} onChange={setEmiDay} format={(v) => `day ${v}`} />
            <Slider label="Opening balance kept as float" value={floor} min={0} max={40_000} step={1_000} onChange={setFloor} />
            <Slider label="Everything else spent over the month" value={outflows} min={0} max={30_000} step={500} onChange={setOutflows} />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Lowest balance" value={rupees(lowest.balance)} tone={lowest.balance < 0 ? 'bad' : 'good'} />
              <Stat label="Comes on" value={`day ${lowest.day}`} />
              <Stat label="Shortfall days" value={`${bounces.length}`} tone={bounces.length ? 'bad' : 'good'} />
            </div>
            <div className="mt-3 flex h-16 items-end gap-[2px]">
              {timeline.map((t) => (
                <div
                  key={t.day}
                  title={`day ${t.day}: ${rupees(t.balance)}${t.event ? ` (${t.event})` : ''}`}
                  className="flex-1 rounded-sm"
                  style={{
                    height: `${Math.max(4, (Math.abs(t.balance) / maxV) * 100)}%`,
                    background: t.ok ? (t.event ? '#38bdf8' : 'rgba(255,255,255,0.18)') : '#fb7185',
                  }}
                />
              ))}
            </div>
            <ul className="mt-3 space-y-1.5">
              <Check ok={lowest.balance >= 0}>
                {lowest.balance >= 0
                  ? `The account never goes below zero; the tightest point is day ${lowest.day}.`
                  : `The account goes short on ${bounces.length} day(s) from day ${bounces[0].day} — a bounce, with its charges, on a month that is solvent overall.`}
              </Check>
              <Check ok={rentDay > salaryDay + 1}>
                {rentDay > salaryDay + 1
                  ? 'Rent falls due well after the salary credit, leaving float if the credit is delayed.'
                  : rentDay <= salaryDay
                    ? 'Rent falls due on or before the salary date, so it has to be paid out of last month\'s balance — there is no slack.'
                    : 'Rent falls due on the salary date or the day after, which leaves almost no float if the credit is delayed.'}
              </Check>
              <Check ok={floor >= 5_000}>
                {floor >= 5_000 ? `A float of ${rupees(floor)} absorbs a one-day delay in the credit.` : 'A float below ₹5,000 is not enough to survive a delayed salary credit.'}
              </Check>
            </ul>
          </Panel>
          <Panel>
            <h4 className="mb-2 font-display text-sm text-white">Three fixes, in order of cost</h4>
            <ol className="list-decimal space-y-1 pl-4 text-xs text-ink-300">
              <li>Move a due date. Most lenders and landlords will move a standing date once, and it costs nothing.</li>
              <li>Keep a floor balance. One week of outflows as a permanent float removes the whole class of problem.</li>
              <li>Split the account. Fixed bills in one account funded on salary day, spending in the other.</li>
            </ol>
            <p className="mt-2 text-xs text-ink-400">
              Credit-card timing is the other half: a card due before the salary is a card paid late, and interest
              starts on the whole balance rather than on the part you could not clear.
            </p>
          </Panel>
        </div>
      </div>
    </div>
  )
}
