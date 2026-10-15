import { useState } from 'react'
import { rupees, rupeesShort } from '../../lib/format'
import { Stat } from './CompoundLab'

/**
 * Level 5, band one, batch 3 labs (chapters l5-015 to l5-019).
 *
 * Five separate simulations, one per chapter:
 *   l5-automation-blueprint  build an automation plan and run a failure drill
 *   l5-sip-automation        run a step-up instalment plan and price a missed month
 *   l5-bill-automation-board automate a month of bills and audit the subscriptions
 *   l5-alert-tuning          tune an alert threshold against a month of events
 *   l5-dashboard-designer    choose the six numbers worth a monthly look
 *
 * The rules used here were verified on 15 October 2026 and are linked from the
 * chapters: the e-mandate framework's ₹15,000 AFA-free limit and the ₹1,00,000
 * ceiling for mutual funds, insurance and credit-card bills, the advance
 * pre-debit notification, the mandate retry behaviour, the RBI's prescribed
 * turn-around times and ₹100-a-day compensation for delayed reversals, and the
 * EPF-style statutory facts the earlier batches established. All amounts are
 * invented for teaching.
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

const Choice = <T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string
  options: { id: T; label: string }[]
  value: T
  onChange: (v: T) => void
}) => (
  <div>
    <span className="text-xs text-ink-400">{label}</span>
    <div className="mt-1 flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o.id}
          onClick={() => onChange(o.id)}
          className={`rounded-lg border px-2.5 py-1 text-[11px] transition ${
            value === o.id ? 'border-brand-400/60 bg-brand-400/10 text-white' : 'border-white/15 text-ink-300 hover:border-white/30'
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  </div>
)

/* ------------------------------------------------------------------ l5-015 */

type Rail = 'si' | 'emandate' | 'manual'
type Job = { id: string; label: string; amount: number; rail: Rail; day: number }

const RAIL_LABEL: Record<Rail, string> = {
  si: 'standing instruction',
  emandate: 'UPI AutoPay / e-mandate',
  manual: 'you transfer it yourself',
}

export function L5AutomationBlueprint() {
  const NET = 43_800
  const [jobs, setJobs] = useState<Job[]>([
    { id: 'buffer', label: 'Emergency buffer', amount: 8_500, rail: 'si', day: 2 },
    { id: 'goals', label: 'Goals', amount: 4_000, rail: 'si', day: 2 },
    { id: 'sip', label: 'Monthly SIP', amount: 5_000, rail: 'emandate', day: 5 },
    { id: 'debt', label: 'Extra debt payment', amount: 1_000, rail: 'si', day: 2 },
  ])
  const [salaryDay, setSalaryDay] = useState(1)
  const [salaryDelay, setSalaryDelay] = useState(0)
  const [floor, setFloor] = useState(5_000)

  const set = (id: string, patch: Partial<Job>) =>
    setJobs((prev) => prev.map((j) => (j.id === id ? { ...j, ...patch } : j)))

  const automated = jobs.filter((j) => j.rail !== 'manual')
  const automatedTotal = automated.reduce((s, j) => s + j.amount, 0)
  const spendTotal = NET - automatedTotal
  const spendPerDay = spendTotal / 30

  // Failure drill: walk the month, debit each automated job on its day, and see
  // which debits cannot be covered. The salary is credited at the end of the day
  // it arrives, which is the case a plan has to be designed for: a debit dated
  // the same day as a delayed credit is attempted before the money lands.
  const drill: { day: number; label: string; amount: number; ok: boolean; balance: number }[] = []
  {
    let balance = floor
    for (let day = 1; day <= 31; day++) {
      balance -= spendPerDay
      for (const j of automated.filter((j) => j.day === day)) {
        const ok = balance >= j.amount
        if (ok) balance -= j.amount
        drill.push({ day, label: j.label, amount: j.amount, ok, balance })
      }
      if (day === salaryDay + salaryDelay) balance += NET
    }
  }
  const failed = drill.filter((d) => !d.ok)
  const overCeiling = automated.filter((j) => j.rail === 'emandate' && j.amount > 15_000)

  const checks = [
    { ok: automated.every((j) => j.day > salaryDay), text: 'Every automated debit is dated after the salary lands.' },
    { ok: automated.length >= 3, text: `${automated.length} of 4 jobs are automated. A plan that depends on remembering is not a plan.` },
    { ok: automatedTotal <= NET, text: `Automated transfers total ${rupees(automatedTotal)} against ${rupees(NET)} of income — leaving ${rupees(spendTotal)} to live on and ${rupees(spendPerDay)} a day.` },
    { ok: overCeiling.length === 0, text: overCeiling.length ? `${overCeiling.map((j) => j.label).join(', ')} exceeds the ₹15,000 AFA-free limit for ordinary e-mandates and will need approval each time.` : 'No ordinary e-mandate exceeds the ₹15,000 AFA-free limit, so the debits run without interruption.' },
    { ok: failed.length === 0, text: failed.length ? `With the salary arriving ${salaryDelay} day(s) late, ${failed.length} debit(s) cannot be covered: ${failed.map((f) => f.label).join(', ')} on day ${failed[0].day}. Move each debit one day further from the salary, or keep a bigger float.` : 'Every automated debit is covered on the date it is set for.' },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Choose a rail for each job</h4>
          <div className="space-y-3">
            {jobs.map((j) => (
              <div key={j.id} className="rounded-lg border border-white/10 p-2">
                <Slider label={j.label} value={j.amount} min={0} max={20_000} step={500} onChange={(v) => set(j.id, { amount: v })} />
                <div className="mt-2">
                  <Choice<Rail>
                    label={`Rail — ${RAIL_LABEL[j.rail]}`}
                    value={j.rail}
                    onChange={(v) => set(j.id, { rail: v })}
                    options={[
                      { id: 'si', label: 'standing instruction' },
                      { id: 'emandate', label: 'e-mandate' },
                      { id: 'manual', label: 'manual' },
                    ]}
                  />
                </div>
                {j.rail !== 'manual' && (
                  <div className="mt-2">
                    <Slider label="Debit day" value={j.day} min={1} max={28} step={1} onChange={(v) => set(j.id, { day: v })} format={(v) => `day ${v}`} />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-3 space-y-3">
            <Slider label="Salary credit day" value={salaryDay} min={1} max={28} step={1} onChange={setSalaryDay} format={(v) => `day ${v}`} />
            <Slider label="Salary arrives this many days late" value={salaryDelay} min={0} max={3} step={1} onChange={setSalaryDelay} format={(v) => `${v} day(s)`} />
            <Slider label="Opening balance kept as float" value={floor} min={0} max={30_000} step={1_000} onChange={setFloor} />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Automated each month" value={rupeesShort(automatedTotal)} />
              <Stat label="Left to live on" value={rupeesShort(Math.max(0, spendTotal))} />
              <Stat label="Failed debits" value={`${failed.length}`} tone={failed.length ? 'bad' : 'good'} />
            </div>
            <h4 className="mt-3 mb-2 font-display text-sm text-white">Failure drill</h4>
            <ul className="space-y-1 text-xs">
              {drill.length === 0 && <li className="text-ink-400">No automated debits to drill.</li>}
              {drill.map((d, i) => (
                <li key={`${d.label}-${i}`} className="flex items-center justify-between gap-2">
                  <span className={d.ok ? 'text-ink-300' : 'text-rose-200'}>
                    day {d.day} · {d.label}
                  </span>
                  <span className="font-mono text-[11px]">
                    <span className={d.ok ? 'text-brand-300' : 'text-rose-300'}>
                      {d.ok ? '' : 'uncovered '}−{rupees(d.amount)}
                    </span>{' '}
                    <span className="text-ink-500">balance {rupees(d.balance)}</span>
                  </span>
                </li>
              ))}
            </ul>
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
          <strong className="text-white">Reading the drill.</strong> The drill assumes a debit dated the same
          day as a salary credit is attempted before that credit lands — the case a plan has to survive rather
          than the best case. That is why one day of slack after the salary, and a float in the account, do more
          than any amount of attention later in the month.
        </p>
        <p className="mt-2 text-xs text-ink-300">
          <strong className="text-white">Debrief.</strong> Automation is a rail choice before it is a
          willpower choice. A standing instruction has no per-transaction ceiling but bounces if the balance
          is short; an e-mandate runs without authentication up to ₹15,000 and retries a few times before it
          is marked failed; a NACH mandate is one presentation per cycle with an advance notice. What matters
          is the failure drill above: if the salary slips a day, the debits dated that same day are the ones
          that break. One day of slack costs nothing and removes the whole class of problem.
        </p>
      </Panel>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-016 */

export function L5SipAutomation() {
  const [monthly, setMonthly] = useState(10_000)
  const [stepUp, setStepUp] = useState(10)
  const [years, setYears] = useState(15)
  const [cagr, setCagr] = useState(12)
  const [missed, setMissed] = useState(1)
  const [salaryDay, setSalaryDay] = useState(1)
  const [sipDay, setSipDay] = useState(5)
  const [category, setCategory] = useState<'mf' | 'other'>('mf')

  const project = (missPerYear: number) => {
    const r = cagr / 100 / 12
    let value = 0
    let contributed = 0
    let instalment = monthly
    for (let y = 0; y < years; y++) {
      for (let m = 0; m < 12; m++) {
        const skip = missPerYear > 0 && m < missPerYear
        if (!skip) {
          value = (value + instalment) * (1 + r)
          contributed += instalment
        } else {
          value = value * (1 + r)
        }
      }
      instalment = instalment * (1 + stepUp / 100)
    }
    return { value, contributed }
  }

  const perfect = project(0)
  const actual = project(missed)
  const cost = perfect.value - actual.value
  const ceiling = category === 'mf' ? 100_000 : 15_000

  const checks = [
    { ok: sipDay > salaryDay, text: sipDay > salaryDay ? `The instalment is dated day ${sipDay}, after the salary on day ${salaryDay}.` : 'The instalment is dated on or before the salary credit, which is how a plan starts missing instalments.' },
    { ok: monthly <= ceiling, text: monthly <= ceiling ? `${rupees(monthly)} per instalment is inside the ₹${ceiling.toLocaleString('en-IN')} authentication-free ceiling for this category, so nothing needs approving each month.` : `${rupees(monthly)} per instalment exceeds the ₹${ceiling.toLocaleString('en-IN')} ceiling here, so every instalment needs an extra authentication step — and the months you miss that step are missed instalments.` },
    { ok: stepUp >= 6, text: `The instalment steps up ${stepUp}% a year. A step-up below long-run inflation means a plan that shrinks in real terms.` },
    { ok: missed === 0, text: missed === 0 ? `Nothing is missed, and the plan reaches ${rupeesShort(perfect.value)}.` : `${missed} missed instalment(s) a year cost ${rupeesShort(cost)} over ${years} years — ${((cost / perfect.value) * 100).toFixed(1)}% of the final corpus, from a debit that failed rather than a decision to stop.` },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Design the instalment plan</h4>
          <div className="space-y-3">
            <Slider label="Monthly instalment" value={monthly} min={500} max={150_000} step={500} onChange={setMonthly} />
            <Slider label="Annual step-up" value={stepUp} min={0} max={25} step={1} onChange={setStepUp} format={(v) => `${v}% a year`} />
            <Slider label="Years" value={years} min={5} max={35} step={1} onChange={setYears} format={(v) => `${v} years`} />
            <Slider label="Assumed return" value={cagr} min={6} max={15} step={0.5} onChange={setCagr} format={(v) => `${v}% a year`} />
            <Slider label="Missed instalments a year" value={missed} min={0} max={4} step={1} onChange={setMissed} format={(v) => `${v}`} />
            <Slider label="Salary credit day" value={salaryDay} min={1} max={28} step={1} onChange={setSalaryDay} format={(v) => `day ${v}`} />
            <Slider label="Instalment day" value={sipDay} min={1} max={28} step={1} onChange={setSipDay} format={(v) => `day ${v}`} />
          </div>
          <div className="mt-2">
            <Choice<'mf' | 'other'>
              label="Mandate category"
              value={category}
              onChange={setCategory}
              options={[
                { id: 'mf', label: 'mutual fund instalment' },
                { id: 'other', label: 'an ordinary biller' },
              ]}
            />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Corpus, nothing missed" value={rupeesShort(perfect.value)} tone="good" />
              <Stat label="Corpus, this plan" value={rupeesShort(actual.value)} />
              <Stat label="Cost of the misses" value={rupeesShort(cost)} tone={missed ? 'bad' : 'neutral'} />
            </div>
            <p className="mt-3 text-xs text-ink-400">
              Total contributed {rupeesShort(actual.contributed)} · assumed return {cagr}% a year, which is an
              assumption and not a promise.
            </p>
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
          <strong className="text-white">Debrief.</strong> An automated investment is a pipeline: salary,
          mandate, fund, units. The mandate decides how much can move without you touching it, the date decides
          whether the money is there when it moves, and the fund buys units at the applicable net asset value
          for the date the money is received — not the date you intended. So a missed instalment is not merely
          a month without units; it is a month of compounding removed from the end of a fifteen-year plan,
          which is why the cost above looks larger than the instalment. Set the date two days after the salary,
          set the step-up in writing once a year, and treat a failed debit as a defect to fix rather than a
          saving to enjoy.
        </p>
      </Panel>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-017 */

type Bill = {
  id: string
  label: string
  amount: number
  day: number
  variable: boolean
  autopay: boolean
  reviewed: boolean
  stillUsing: boolean
}

export function L5BillAutomationBoard() {
  const [bills, setBills] = useState<Bill[]>([
    { id: 'rent', label: 'Rent', amount: 18_000, day: 3, variable: false, autopay: true, reviewed: true, stillUsing: true },
    { id: 'card', label: 'Credit card', amount: 9_000, day: 7, variable: true, autopay: false, reviewed: true, stillUsing: true },
    { id: 'emi', label: 'Loan EMI', amount: 6_000, day: 10, variable: false, autopay: true, reviewed: true, stillUsing: true },
    { id: 'power', label: 'Electricity', amount: 2_200, day: 14, variable: true, autopay: true, reviewed: false, stillUsing: true },
    { id: 'net', label: 'Broadband', amount: 999, day: 18, variable: false, autopay: true, reviewed: true, stillUsing: true },
    { id: 'mobile', label: 'Mobile', amount: 599, day: 22, variable: false, autopay: true, reviewed: true, stillUsing: true },
    { id: 'ott', label: 'Streaming bundle', amount: 1_499, day: 5, variable: false, autopay: true, reviewed: false, stillUsing: false },
  ])
  const [salaryDay, setSalaryDay] = useState(1)
  const [income, setIncome] = useState(43_800)

  const set = (id: string, patch: Partial<Bill>) => setBills((prev) => prev.map((b) => (b.id === id ? { ...b, ...patch } : b)))

  const automated = bills.filter((b) => b.autopay)
  const automatedTotal = automated.reduce((s, b) => s + b.amount, 0)
  const early = automated.filter((b) => b.day <= 5)
  const earlyTotal = early.reduce((s, b) => s + b.amount, 0)
  const unreviewedVariable = automated.filter((b) => b.variable && !b.reviewed)
  const unused = bills.filter((b) => !b.stillUsing)
  const beforeSalary = automated.filter((b) => b.day < salaryDay)

  const checks = [
    { ok: beforeSalary.length === 0, text: beforeSalary.length === 0 ? 'No automated debit is dated before the salary credit.' : `${beforeSalary.map((b) => b.label).join(', ')} fall${beforeSalary.length === 1 ? 's' : ''} due before the salary arrives, so the money has to be sitting there from last month.` },
    { ok: unreviewedVariable.length === 0, text: unreviewedVariable.length === 0 ? 'Every automated variable bill is reviewed each month, so a price rise cannot pass silently.' : `${unreviewedVariable.map((b) => b.label).join(', ')} ${unreviewedVariable.length === 1 ? 'is' : 'are'} on autopay and unreviewed — the one combination that hides a price change.` },
    { ok: earlyTotal <= income, text: `Debits in the first five days total ${rupees(earlyTotal)} against ${rupees(income)} of income.` },
    { ok: unused.length === 0, text: unused.length === 0 ? 'Nothing on the board is a subscription you no longer use.' : `${unused.map((b) => b.label).join(', ')} ${unused.length === 1 ? 'is' : 'are'} no longer used but still paid: ${rupees(unused.reduce((s, b) => s + b.amount, 0))} a month, or ${rupees(unused.reduce((s, b) => s + b.amount, 0) * 12)} a year, to cancel.` },
    { ok: automatedTotal <= income * 0.85, text: `Automated bills total ${rupees(automatedTotal)}, or ${((automatedTotal / income) * 100).toFixed(0)}% of income. Past about 85% the manual part of the month has no room and the float becomes the plan.` },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">One month of bills</h4>
          <div className="space-y-2">
            {bills.map((b) => (
              <div key={b.id} className="rounded-lg border border-white/10 p-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs text-white">
                    {b.label}
                    <span className="ml-2 text-[10px] text-ink-500">
                      {b.variable ? 'variable' : 'fixed'} · day {b.day}
                    </span>
                  </span>
                  <span className="font-mono text-xs text-brand-300">{rupees(b.amount)}</span>
                </div>
                <div className="mt-1">
                  <Slider label="" value={b.amount} min={0} max={30_000} step={100} onChange={(v) => set(b.id, { amount: v })} format={(v) => rupees(v)} />
                </div>
                <div className="mt-1 flex flex-wrap gap-3 text-[11px]">
                  <label className="flex items-center gap-1.5 text-ink-300">
                    <input type="checkbox" checked={b.autopay} onChange={(e) => set(b.id, { autopay: e.target.checked })} className="accent-brand-400" />
                    autopay
                  </label>
                  {b.variable && (
                    <label className="flex items-center gap-1.5 text-ink-300">
                      <input type="checkbox" checked={b.reviewed} onChange={(e) => set(b.id, { reviewed: e.target.checked })} className="accent-brand-400" />
                      reviewed each month
                    </label>
                  )}
                  <label className="flex items-center gap-1.5 text-ink-300">
                    <input type="checkbox" checked={b.stillUsing} onChange={(e) => set(b.id, { stillUsing: e.target.checked })} className="accent-brand-400" />
                    still used
                  </label>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 space-y-3">
            <Slider label="Salary credit day" value={salaryDay} min={1} max={28} step={1} onChange={setSalaryDay} format={(v) => `day ${v}`} />
            <Slider label="Monthly income" value={income} min={20_000} max={200_000} step={1_000} onChange={setIncome} />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Automated" value={rupeesShort(automatedTotal)} />
              <Stat label="First five days" value={rupeesShort(earlyTotal)} />
              <Stat label="Checks passed" value={`${checks.filter((c) => c.ok).length}/5`} />
            </div>
          </Panel>
          <Panel>
            <h4 className="mb-2 font-display text-sm text-white">What to automate, what to review</h4>
            <ul className="space-y-1.5">
              {checks.map((c) => (
                <Check key={c.text} ok={c.ok}>
                  {c.text}
                </Check>
              ))}
            </ul>
          </Panel>
          <Panel>
            <h4 className="mb-2 font-display text-sm text-white">The notice window</h4>
            <p className="text-xs text-ink-300">
              A recurring debit must be notified in advance — conventionally 24 hours — before it is collected.
              That window is the reason an automated bill is safer than a forgotten one: the notice arrives
              whether or not you were thinking about the bill. It is also how you catch a bill that jumped,
              before the money leaves. Check the mandate list once a quarter on your UPI app or at the
              mandate-listing service, because a mandate outlives the reason it was created.
            </p>
          </Panel>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-018 */

type AlertEvent = { d: number; amount: number; label: string; fraud: boolean }

const MONTH_EVENTS: AlertEvent[] = [
  { d: 6, amount: 4_500, label: 'drain 1', fraud: true },
  { d: 6, amount: 4_100, label: 'drain 2', fraud: true },
  { d: 7, amount: 3_800, label: 'drain 3', fraud: true },
  { d: 20, amount: 4_500, label: 'drain 4', fraud: true },
]

const ROUTINE_DEBITS = 34 // ordinary card, UPI and bill debits in a month
const ROUTINE_AVG = 1_020

export function L5AlertTuning() {
  const [threshold, setThreshold] = useState(5_000)
  const [channels, setChannels] = useState({ transaction: true, login: true, mandate: false, collect: false, card: false })

  const txAlerts = channels.transaction ? Math.round(ROUTINE_DEBITS * Math.max(0, 1 - threshold / (ROUTINE_AVG * 2.6))) : 0
  const caughtFraud = channels.transaction ? MONTH_EVENTS.filter((e) => e.amount >= threshold) : []
  const missedFraud = MONTH_EVENTS.filter((e) => !caughtFraud.includes(e))
  const monthlyAlerts = txAlerts + caughtFraud.length
  const moneyCaught = caughtFraud.reduce((s, e) => s + e.amount, 0)

  const checks = [
    { ok: missedFraud.length === 0, text: missedFraud.length === 0 ? 'Every debit in the drain crosses the threshold and raises an alert.' : `${missedFraud.length} of the four drain debits fall under ₹${threshold.toLocaleString('en-IN')} and raise nothing at all.` },
    { ok: monthlyAlerts <= 15, text: `${monthlyAlerts} alerts a month at this threshold. Past roughly fifteen, alerts get read as noise — which is exactly how a real one is missed.` },
    { ok: channels.login, text: channels.login ? 'New-device and login alerts are on, which is how a takeover is caught before any money moves.' : 'Login and new-device alerts are off: without them, the first signal of a takeover is a debit.' },
    { ok: channels.mandate, text: channels.mandate ? 'Mandate-creation alerts are on, so a new recurring debit cannot be created quietly.' : 'Mandate-creation alerts are off, so a new recurring debit can be set up without you noticing.' },
    { ok: channels.card, text: channels.card ? 'Card-not-present alerts are on, covering the online transactions that never touch your account.' : 'Card-not-present alerts are off, leaving the most common fraud channel unwatched.' },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Tune the threshold and the pages</h4>
          <div className="space-y-3">
            <Slider label="Alert on any debit above" value={threshold} min={500} max={25_000} step={500} onChange={setThreshold} />
          </div>
          <div className="mt-3 space-y-2">
            {(
              [
                ['transaction', 'Transaction alerts (SMS / app)'],
                ['login', 'Login and new-device alerts'],
                ['mandate', 'Mandate creation and modification'],
                ['collect', 'UPI collect-request alerts'],
                ['card', 'Card-not-present (online) alerts'],
              ] as const
            ).map(([key, label]) => (
              <label key={key} className="flex items-center gap-2 text-xs text-ink-300">
                <input
                  type="checkbox"
                  checked={channels[key]}
                  onChange={(e) => setChannels((prev) => ({ ...prev, [key]: e.target.checked }))}
                  className="accent-brand-400"
                />
                {label}
              </label>
            ))}
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Alerts a month" value={`${monthlyAlerts}`} tone={monthlyAlerts > 15 ? 'bad' : 'good'} />
              <Stat label="Drain debits caught" value={`${caughtFraud.length}/4`} tone={caughtFraud.length === 4 ? 'good' : 'bad'} />
              <Stat label="Value flagged" value={rupees(moneyCaught)} />
            </div>
            <ul className="mt-3 space-y-1 text-xs">
              {MONTH_EVENTS.map((e) => {
                const caught = caughtFraud.includes(e)
                return (
                  <li key={e.label} className="flex items-center justify-between">
                    <span className={caught ? 'text-ink-200' : 'text-rose-200'}>
                      day {e.d} · {rupees(e.amount)} · {e.label}
                    </span>
                    <span className={caught ? 'text-brand-300' : 'text-ink-500'}>{caught ? 'alert raised' : 'silent'}</span>
                  </li>
                )
              })}
            </ul>
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
          <strong className="text-white">Debrief.</strong> Alerts do not prevent a debit; they shorten the
          window between the debit and your response, and under the RBI's liability framework that window is what
          decides who absorbs the loss — liability can be nil when a transaction is reported promptly and can
          fall entirely on the customer when it is not. That makes the threshold a real trade-off: set it too
          high and a slow drain passes silently, set it too low and forty routine alerts train you to ignore the
          channel. What alerts cannot catch is the pattern you authorise yourself: a subscription you forgot, a
          mandate that outlived its purpose, or a standing charge rising quietly. Those need the quarterly
          mandate review, not another notification.
        </p>
      </Panel>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-019 */

const CORE = ['networth', 'savings', 'buffer', 'debt', 'goal', 'score'] as const
const NOISE = ['portfolio', 'index', 'txcount', 'rewards', 'alertcount'] as const

const METRICS: { id: string; label: string; why: string; core: boolean }[] = [
  { id: 'networth', label: 'Net worth', why: 'The single number that summarises every decision you have made.', core: true },
  { id: 'savings', label: 'Savings rate', why: 'The lever you control most directly, and the one that moves your date.', core: true },
  { id: 'buffer', label: 'Buffer in months', why: 'Tells you whether a bad month is survivable without debt.', core: true },
  { id: 'debt', label: 'Debt to income', why: 'Shows how much of next year is already committed.', core: true },
  { id: 'goal', label: 'Goal funding %', why: 'Answers whether the plan on paper is still on track.', core: true },
  { id: 'score', label: 'Credit score', why: 'Changes what borrowing costs, and catches misuse of your identity.', core: true },
  { id: 'portfolio', label: 'Portfolio value this week', why: 'Moves with the market, not with your decisions.', core: false },
  { id: 'index', label: 'Daily index level', why: 'News, not a personal number.', core: false },
  { id: 'txcount', label: 'Transactions tracked', why: 'Measures effort, not outcome.', core: false },
  { id: 'rewards', label: 'Reward points', why: 'Small enough to distort behaviour in exchange for nothing.', core: false },
  { id: 'alertcount', label: 'Alerts received', why: 'A count of noise, not of control.', core: false },
]

export function L5DashboardDesigner() {
  const [picked, setPicked] = useState<string[]>(['networth', 'savings', 'buffer', 'debt', 'goal', 'portfolio'])
  const [cadence, setCadence] = useState<'weekly' | 'monthly' | 'quarterly'>('monthly')

  const toggle = (id: string) =>
    setPicked((prev) => (prev.includes(id) ? prev.filter((p) => p !== id) : prev.length >= 6 ? prev : [...prev, id]))

  const corePicked = picked.filter((p) => (CORE as readonly string[]).includes(p))
  const noisePicked = picked.filter((p) => (NOISE as readonly string[]).includes(p))

  const checks = [
    { ok: corePicked.includes('networth') && corePicked.includes('savings') && corePicked.includes('buffer'), text: 'Net worth, savings rate and buffer months are all on the page — the three that decide most months.' },
    { ok: noisePicked.length === 0, text: noisePicked.length === 0 ? 'Nothing on the page moves for reasons that are not your decisions.' : `${noisePicked.map((n) => METRICS.find((m) => m.id === n)?.label).join(', ')} move for reasons that are not your decisions, and crowd out the tiles that matter.` },
    { ok: picked.length <= 6, text: `${picked.length} of 6 tiles used. A page that needs scrolling stops being read in month three.` },
    { ok: cadence === 'monthly', text: cadence === 'monthly' ? 'A monthly cadence matches how fast these numbers actually change.' : cadence === 'weekly' ? 'A weekly cadence makes slow numbers look volatile and invites fiddling with the plan.' : 'A quarterly cadence is too slow to catch a drifting month before it becomes a quarter.' },
    { ok: picked.includes('buffer'), text: picked.includes('buffer') ? 'The buffer is on the page, so it is a number you see rather than one you remember.' : 'The buffer is missing, so the number that decides whether a bad month becomes debt is invisible.' },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Choose up to six tiles</h4>
          <div className="space-y-2">
            {METRICS.map((m) => {
              const on = picked.includes(m.id)
              return (
                <button
                  key={m.id}
                  onClick={() => toggle(m.id)}
                  className={`w-full rounded-lg border p-2 text-left transition ${
                    on ? 'border-brand-400/60 bg-brand-400/10' : 'border-white/15 hover:border-white/30'
                  }`}
                >
                  <span className="flex items-center gap-2 text-xs text-white">
                    <span
                      className="flex h-4 w-4 items-center justify-center rounded"
                      style={{ background: on ? '#34e0a1' : 'rgba(255,255,255,0.12)', color: '#11131f' }}
                    >
                      {on ? '✓' : ''}
                    </span>
                    {m.label}
                    {!m.core && <span className="ml-auto text-[10px] text-ink-500">not a decision</span>}
                  </span>
                  <span className="mt-1 block pl-6 text-[11px] text-ink-500">{m.why}</span>
                </button>
              )
            })}
          </div>
          <div className="mt-3">
            <Choice<'weekly' | 'monthly' | 'quarterly'>
              label="Review cadence"
              value={cadence}
              onChange={setCadence}
              options={[
                { id: 'weekly', label: 'weekly' },
                { id: 'monthly', label: 'monthly' },
                { id: 'quarterly', label: 'quarterly' },
              ]}
            />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Tiles chosen" value={`${picked.length}/6`} />
              <Stat label="Decision metrics" value={`${corePicked.length}`} tone={corePicked.length >= 3 ? 'good' : 'neutral'} />
              <Stat label="Checks passed" value={`${checks.filter((c) => c.ok).length}/5`} />
            </div>
          </Panel>
          <Panel>
            <h4 className="mb-2 font-display text-sm text-white">Your page</h4>
            {picked.length === 0 ? (
              <p className="text-xs text-ink-400">Nothing selected yet.</p>
            ) : (
              <ul className="grid grid-cols-2 gap-2">
                {picked.map((p) => (
                  <li key={p} className="rounded-lg border border-white/10 bg-white/5 p-2">
                    <span className="block text-[11px] text-ink-400">{METRICS.find((m) => m.id === p)?.label}</span>
                    <span className="block text-xs text-brand-300">
                      {(CORE as readonly string[]).includes(p) ? 'shows progress' : 'shows volatility'}
                    </span>
                  </li>
                ))}
              </ul>
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
          <strong className="text-white">Debrief.</strong> A dashboard earns its place by changing a decision.
          Every tile here answers a question you would otherwise answer by guessing: am I better off than last
          month, am I saving enough, could I survive three months without income, how much of next year is
          committed, is the goal still on track, and can I still borrow. Portfolio value, index levels and
          transaction counts answer none of those, and they move for reasons that have nothing to do with you —
          which is why a page holding them gets looked at daily and acted on badly.
        </p>
      </Panel>
    </div>
  )
}
