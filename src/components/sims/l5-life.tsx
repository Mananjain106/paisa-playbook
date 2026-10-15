import { useState } from 'react'
import { rupees, rupeesShort } from '../../lib/format'
import { Stat } from './CompoundLab'

/**
 * Level 5, band four, batch 2 labs (chapters l5-081 to l5-090).
 *
 * Ten separate simulations, one per chapter:
 *   l5-dependant-planner       who depends on you, what that costs, and what cover it needs
 *   l5-education-goal          a course priced at the day of admission, with a glide path
 *   l5-major-purchase-analyser the sticker price against the total cost of owning it
 *   l5-house-affordability     every layer between the asking price and the monthly EMI
 *   l5-vehicle-tco             five years of a vehicle, from on-road price to cost per km
 *   l5-education-roi           a qualification judged on cost, forgone salary and payback
 *   l5-rent-buy-model          the year buying gets ahead of renting, on the same money
 *   l5-new-vs-used             two depreciation curves and the cost gap over five years
 *   l5-cash-vs-finance         the loan rate against what the cash earns after tax
 *   l5-crisis-drill            a crisis worked in order, with a runway and a liquidity ladder
 *
 * Facts used here were verified on 15 October 2026 and are linked from the
 * chapters: the Income-tax Act, 2025, in force from 1 April 2026, renumbering the
 * 1961 Act's deductions (80C as section 123, 80D as 126, 80DD as 127, 80E as 129,
 * 54 as section 82) while leaving the substance unchanged; the ₹2 lakh interest
 * deduction on a self-occupied house being available in the old regime only;
 * education-loan interest being deductible in full for eight years under section
 * 129 (earlier 80E); GST on an under-construction flat at 5%, or 1% for affordable
 * housing, with ready-to-move property carrying none; stamp duty being a state
 * levy; no TCS on an education remittance funded by a loan from a specified
 * financial institution, and TCS at 5% only above ₹10 lakh in a year otherwise;
 * and an RBI-regulated loan being classified SMA-1 at 31 days overdue, SMA-2 at
 * 61, and a non-performing asset once it is overdue beyond 90 days. All amounts
 * and scenarios are illustrative.
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

const Choice = ({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) => (
  <button
    type="button"
    onClick={onClick}
    className={`rounded-lg border px-2.5 py-1.5 text-left text-[11px] transition ${
      active ? 'border-brand-400/60 bg-brand-400/15 text-white' : 'border-white/10 bg-white/5 text-ink-300 hover:border-white/30'
    }`}
  >
    {label}
  </button>
)

const Toggle = ({ label, on, onClick }: { label: string; on: boolean; onClick: () => void }) => (
  <Choice label={`${on ? '✓ ' : ''}${label}`} active={on} onClick={onClick} />
)

const Debrief = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Panel>
    <p className="text-xs text-ink-300">
      <strong className="text-white">{title}.</strong> {children}
    </p>
  </Panel>
)

/** Ordinary annuity payment for a loan. */
const emi = (principal: number, annualRate: number, years: number): number => {
  const r = annualRate / 100 / 12
  const n = years * 12
  if (r <= 0 || n <= 0) return principal / Math.max(n, 1)
  return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
}

/** What a lumpsum grows to. */
const grow = (amount: number, annualRate: number, years: number): number =>
  amount * Math.pow(1 + annualRate / 100, years)

/* ------------------------------------------------------------------ l5-081 */

export function L5DependantPlanner() {
  const [income, setIncome] = useState(1_200_000)
  const [years, setYears] = useState(15)
  const [loans, setLoans] = useState(2_000_000)
  const [termCover, setTermCover] = useState(3_000_000)
  const [liquid, setLiquid] = useState(500_000)
  const [family, setFamily] = useState({ spouse: true, children: true, parents: false, special: false })
  const [termOnEach, setTermOnEach] = useState(false)
  const [parentHealth, setParentHealth] = useState(false)

  // What each dependant needs a year if the income stops, and for how long.
  const needs = [
    { key: 'spouse', label: 'A spouse', yearly: 600_000, note: 'shared household spend, on their own income' },
    { key: 'children', label: 'Children in school', yearly: 360_000, note: 'fees, food and everything attached to them' },
    { key: 'parents', label: 'Parents you support', yearly: 240_000, note: 'monthly support plus their medicines' },
    { key: 'special', label: 'A dependant with disability', yearly: 480_000, note: 'care that does not stop when you do' },
  ] as const

  const active = needs.filter((n) => family[n.key])
  const yearlyNeed = active.reduce((sum, n) => sum + n.yearly, 0) + 600_000
  const required = yearlyNeed * years + loans
  const inPlace = termCover + liquid
  const gap = Math.max(0, required - inPlace)
  const multiple = income ? required / income : 0

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-300">Who depends on this income</p>
          <div className="grid grid-cols-2 gap-2">
            {needs.map((n) => (
              <Toggle
                key={n.key}
                label={n.label}
                on={family[n.key]}
                onClick={() => setFamily((f) => ({ ...f, [n.key]: !f[n.key] }))}
              />
            ))}
          </div>
          <div className="mt-3 space-y-3">
            <Slider label="Your annual income" value={income} min={300_000} max={5_000_000} step={50_000} onChange={setIncome} />
            <Slider
              label="Years they would need support"
              value={years}
              min={5}
              max={30}
              step={1}
              onChange={setYears}
              format={(v) => `${v} years`}
            />
            <Slider label="Loans that would still be running" value={loans} min={0} max={20_000_000} step={100_000} onChange={setLoans} />
            <Slider label="Term cover you already hold" value={termCover} min={0} max={40_000_000} step={500_000} onChange={setTermCover} />
            <Slider label="Savings the family could use" value={liquid} min={0} max={10_000_000} step={100_000} onChange={setLiquid} />
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <Toggle
              label="Cover reviewed for each dependant"
              on={termOnEach}
              onClick={() => setTermOnEach((v) => !v)}
            />
            <Toggle
              label="Health cover for the parents"
              on={parentHealth}
              onClick={() => setParentHealth((v) => !v)}
            />
          </div>
        </Panel>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <Stat label="Annual support need" value={rupeesShort(yearlyNeed)} tone="neutral" />
            <Stat label="Cover required" value={rupeesShort(required)} tone="bad" />
            <Stat label="Cover in place" value={rupeesShort(inPlace)} tone="good" />
            <Stat label="Gap" value={gap ? rupeesShort(gap) : 'None'} tone={gap ? 'bad' : 'best'} />
          </div>

          <Debrief title="Reading this">
            Supporting {active.length} {active.length === 1 ? 'person' : 'people'} for {years} years at this standard of
            living needs about {rupeesShort(required)}, which is roughly {multiple.toFixed(1)} times your annual income.
            A term policy is priced on that number, not on what feels like a lot. Cover that is in place today closes{' '}
            {rupeesShort(Math.min(inPlace, required))} of it.
          </Debrief>

          <Panel>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-300">The rest of the plan</p>
            <ul className="space-y-1.5">
              <Check ok={gap === 0}>Every dependant is covered for the income that supports them</Check>
              <Check ok={termOnEach}>The nomination on the policy matches who you actually support</Check>
              <Check ok={parentHealth || !family.parents}>The parents have health cover, since their risk is not yours to insure by default</Check>
              <Check ok={family.special}>A dependant with disability has an arrangement that outlives you, not just a nominee</Check>
              <Check ok={liquid >= yearlyNeed / 2}>There is a cash buffer in the family's own name, not only insurance</Check>
            </ul>
          </Panel>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-082 */

export function L5EducationGoal() {
  const [todayCost, setTodayCost] = useState(1_500_000)
  const [years, setYears] = useState(12)
  const [inflation, setInflation] = useState(8)
  const [saved, setSaved] = useState(300_000)
  const [rate, setRate] = useState(11)

  const futureCost = todayCost * Math.pow(1 + inflation / 100, years)
  const grown = grow(saved, rate, years)
  const gap = Math.max(0, futureCost - grown)
  const r = rate / 100 / 12
  const n = Math.max(1, years * 12)
  const monthly = gap === 0 ? 0 : (gap * r) / (Math.pow(1 + r, n) - 1)
  // The glide path: the closer the admission date, the less of the corpus can be in equity.
  const equity = years >= 10 ? 70 : years >= 6 ? 55 : years >= 4 ? 35 : years >= 2 ? 15 : 0
  const todayShare = (todayCost / futureCost) * 100

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel>
          <div className="space-y-3">
            <Slider label="What the course costs today" value={todayCost} min={200_000} max={8_000_000} step={100_000} onChange={setTodayCost} />
            <Slider
              label="Years to admission"
              value={years}
              min={1}
              max={20}
              step={1}
              onChange={setYears}
              format={(v) => `${v} years`}
            />
            <Slider
              label="Education inflation"
              value={inflation}
              min={4}
              max={14}
              step={0.5}
              onChange={setInflation}
              format={(v) => `${v}% a year`}
            />
            <Slider label="Saved for this so far" value={saved} min={0} max={5_000_000} step={50_000} onChange={setSaved} />
            <Slider
              label="Return you expect on the corpus"
              value={rate}
              min={4}
              max={15}
              step={0.5}
              onChange={setRate}
              format={(v) => `${v}% a year`}
            />
          </div>
        </Panel>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <Stat label="Cost at admission" value={rupeesShort(futureCost)} tone="bad" />
            <Stat label="Today's savings grow to" value={rupeesShort(grown)} tone="good" />
            <Stat label="Gap to fund" value={rupeesShort(gap)} tone={gap ? 'bad' : 'best'} />
            <Stat label="Monthly investment needed" value={rupeesShort(monthly)} tone="neutral" />
          </div>

          <Debrief title="What the inflation figure does">
            The cost today pays for only {todayShare.toFixed(0)}% of what the course will cost in {years} years. At{' '}
            {inflation}% a year the fee roughly {inflation * years >= 72 ? 'doubles' : 'climbs by about ' + ((futureCost / todayCost - 1) * 100).toFixed(0) + '%'},
            so the plan has to grow faster than the fee. A monthly investment of {rupeesShort(monthly)} at {rate}% is what
            closes it.
          </Debrief>

          <Panel>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-300">
              Asset mix, given {years} years left
            </p>
            <div className="flex h-6 overflow-hidden rounded-md">
              <div className="bg-brand-500/70" style={{ width: equity + '%' }} />
              <div className="bg-sky-400/50" style={{ width: 100 - equity + '%' }} />
            </div>
            <div className="mt-2 flex justify-between text-[11px] text-ink-400">
              <span>Equity and growth assets: {equity}%</span>
              <span>Debt and safe assets: {100 - equity}%</span>
            </div>
            <ul className="mt-3 space-y-1.5">
              <Check ok={years > 4}>The corpus is still mostly in growth assets</Check>
              <Check ok={years <= 3 || equity <= 35}>The last three years are shifting into capital protection</Check>
              <Check ok={monthly > 0}>There is a monthly amount attached to this goal, not just an intention</Check>
              <Check ok={saved > 0}>Something has already been set aside, so time is working on it</Check>
            </ul>
          </Panel>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-083 */

export function L5MajorPurchaseAnalyser() {
  const [price, setPrice] = useState(1_200_000)
  const [financePct, setFinancePct] = useState(70)
  const [rate, setRate] = useState(11)
  const [tenure, setTenure] = useState(4)
  const [running, setRunning] = useState(90_000)
  const [resalePct, setResalePct] = useState(45)
  const [hold, setHold] = useState(5)
  const [income, setIncome] = useState(1_500_000)
  const [taxPct, setTaxPct] = useState(12)

  const loan = (price * financePct) / 100
  const down = price - loan
  const payment = emi(loan, rate, tenure)
  const totalPaid = payment * tenure * 12
  const interest = Math.max(0, totalPaid - loan)
  const taxes = (price * taxPct) / 100
  const runningTotal = running * hold
  const resaleValue = (price * resalePct) / 100
  const tco = down + totalPaid + taxes + runningTotal - resaleValue
  const perMonth = tco / (hold * 12)
  // What the down payment would have earned in a simple safe option instead.
  const opportunity = grow(down, 7, hold) - down
  const monthlyIncome = income / 12
  const burden = monthlyIncome ? perMonth / monthlyIncome : 0

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel>
          <div className="space-y-3">
            <Slider label="Price of the thing" value={price} min={100_000} max={20_000_000} step={50_000} onChange={setPrice} />
            <Slider
              label="Share you finance"
              value={financePct}
              min={0}
              max={90}
              step={5}
              onChange={setFinancePct}
              format={(v) => `${v}% of the price`}
            />
            <Slider
              label="Loan rate"
              value={rate}
              min={0}
              max={20}
              step={0.25}
              onChange={setRate}
              format={(v) => `${v}% a year`}
            />
            <Slider
              label="Tenure"
              value={tenure}
              min={1}
              max={8}
              step={1}
              onChange={setTenure}
              format={(v) => `${v} years`}
            />
            <Slider
              label="Running cost each year"
              value={running}
              min={0}
              max={600_000}
              step={5_000}
              onChange={setRunning}
              format={(v) => rupees(v) + ' a year'}
            />
            <Slider
              label="Duty, tax and registration"
              value={taxPct}
              min={0}
              max={30}
              step={1}
              onChange={setTaxPct}
              format={(v) => `${v}% of the price`}
            />
            <Slider
              label="Resale value after holding it"
              value={resalePct}
              min={0}
              max={80}
              step={5}
              onChange={setResalePct}
              format={(v) => `${v}% of what you paid`}
            />
            <Slider
              label="Years you keep it"
              value={hold}
              min={1}
              max={10}
              step={1}
              onChange={setHold}
              format={(v) => `${v} years`}
            />
            <Slider label="Your annual income" value={income} min={300_000} max={6_000_000} step={50_000} onChange={setIncome} />
          </div>
        </Panel>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <Stat label="Cash needed today" value={rupeesShort(down + taxes)} tone="neutral" />
            <Stat label="Interest you will pay" value={rupeesShort(interest)} tone="bad" />
            <Stat label="Total cost of ownership" value={rupeesShort(tco)} tone="bad" />
            <Stat label="Cost per month of owning" value={rupeesShort(perMonth)} tone="neutral" />
          </div>

          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="EMI" value={loan ? rupeesShort(payment) : 'None'} tone="neutral" />
              <Stat label="Resale value" value={rupeesShort(resaleValue)} tone="good" />
              <Stat label="Money tied up could earn" value={rupeesShort(opportunity)} tone="neutral" />
            </div>
          </Panel>

          <Debrief title="The number that decides it">
            Over {hold} years this works out at {rupeesShort(perMonth)} a month — {(burden * 100).toFixed(0)}% of your
            income, and {rupees(tco)} in total, of which {rupees(interest)} is interest and {rupees(taxes)} is tax. The
            sticker price, {rupees(price)}, is{' '}
            {tco > price ? ((tco / price - 1) * 100).toFixed(0) + '% below the real number' : 'the whole story here'}.
            {burden > 0.15
              ? ' Above about 15% of income a month, this purchase starts crowding out the goals that matter more.'
              : ' That is inside the range a household can carry without breaking anything else.'}
          </Debrief>

          <Panel>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-300">The five questions first</p>
            <ul className="space-y-1.5">
              <Check ok={financePct < 80}>The loan does not exceed what the thing is worth</Check>
              <Check ok={running > 0}>Running costs are counted, not just the purchase</Check>
              <Check ok={resalePct < 70}>The resale assumption is honest rather than flattering</Check>
              <Check ok={burden <= 0.15}>The monthly cost stays under about 15% of income</Check>
              <Check ok={opportunity < tco}>The money spent is worth more here than where it would otherwise sit</Check>
            </ul>
          </Panel>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-084 */

export function L5HouseAffordability() {
  const [price, setPrice] = useState(9_000_000)
  const [downPct, setDownPct] = useState(20)
  const [rate, setRate] = useState(8.5)
  const [tenure, setTenure] = useState(20)
  const [stampPct, setStampPct] = useState(6)
  const [upkeep, setUpkeep] = useState(6_000)
  const [income, setIncome] = useState(1_800_000)
  const [moving, setMoving] = useState(150_000)

  const loan = (price * (100 - downPct)) / 100
  const down = price - loan
  const stamp = (price * stampPct) / 100
  const registration = price * 0.01
  const cashNeeded = down + stamp + registration + moving
  const payment = emi(loan, rate, tenure)
  const monthlyOwn = payment + upkeep
  const monthlyIncome = income / 12
  const ratio = monthlyIncome ? monthlyOwn / monthlyIncome : 0
  const ltv = (loan / price) * 100
  const totalInterest = payment * tenure * 12 - loan

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel>
          <div className="space-y-3">
            <Slider label="Agreement value of the house" value={price} min={1_500_000} max={40_000_000} step={250_000} onChange={setPrice} />
            <Slider
              label="Down payment"
              value={downPct}
              min={10}
              max={60}
              step={5}
              onChange={setDownPct}
              format={(v) => `${v}% of the price`}
            />
            <Slider
              label="Stamp duty"
              value={stampPct}
              min={3}
              max={10}
              step={0.5}
              onChange={setStampPct}
              format={(v) => `${v}% — a state rate`}
            />
            <Slider
              label="Loan rate"
              value={rate}
              min={6}
              max={14}
              step={0.1}
              onChange={setRate}
              format={(v) => `${v}% a year`}
            />
            <Slider
              label="Tenure"
              value={tenure}
              min={5}
              max={30}
              step={1}
              onChange={setTenure}
              format={(v) => `${v} years`}
            />
            <Slider
              label="Maintenance and society charges"
              value={upkeep}
              min={1_000}
              max={30_000}
              step={500}
              onChange={setUpkeep}
              format={(v) => rupees(v) + ' a month'}
            />
            <Slider
              label="Moving and furnishing"
              value={moving}
              min={0}
              max={2_000_000}
              step={25_000}
              onChange={setMoving}
              format={(v) => rupees(v)}
            />
            <Slider label="Your annual income" value={income} min={400_000} max={8_000_000} step={50_000} onChange={setIncome} />
          </div>
        </Panel>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <Stat label="Cash you must bring" value={rupeesShort(cashNeeded)} tone="bad" />
            <Stat label="EMI" value={rupeesShort(payment)} tone="neutral" />
            <Stat label="EMI plus upkeep" value={rupeesShort(monthlyOwn)} tone={ratio > 0.5 ? 'bad' : 'good'} />
            <Stat label="Share of income" value={(ratio * 100).toFixed(0) + '%'} tone={ratio > 0.5 ? 'bad' : ratio > 0.4 ? 'neutral' : 'best'} />
          </div>

          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Loan to value" value={ltv.toFixed(0) + '%'} tone={ltv > 80 ? 'bad' : 'good'} />
              <Stat label="Interest over the tenure" value={rupeesShort(totalInterest)} tone="bad" />
              <Stat label="Stamp duty" value={rupeesShort(stamp)} tone="neutral" />
            </div>
          </Panel>

          <Debrief title="Where the money actually goes">
            The house costs {rupeesShort(price)}, but the day you buy it you need {rupeesShort(cashNeeded)} in cash —{' '}
            {rupeesShort(down)} down, {rupeesShort(stamp)} of stamp duty, {rupeesShort(registration)} of registration and{' '}
            {rupeesShort(moving)} of setting up. Then {rupeesShort(monthlyOwn)} a month, which is{' '}
            {(ratio * 100).toFixed(0)}% of your income and {rupeesShort(totalInterest)} of interest over {tenure} years.
            {ratio > 0.5
              ? ' Above roughly half of take-home pay, a single missed month turns into a much larger problem.'
              : ' That is a load a household can hold, provided the emergency fund stays outside the house.'}
          </Debrief>

          <Panel>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-300">In the old regime only</p>
            <p className="text-xs text-ink-300">
              Interest on a loan for a self-occupied house is deductible up to ₹2,00,000 a year (section 22 of the
              Income-tax Act, 2025; earlier section 24(b)), and the principal repaid counts inside the ₹1,50,000 ceiling
              of section 123 (earlier 80C). Neither is available in the new regime, so the same house costs different
              amounts of tax to two neighbours.
            </p>
          </Panel>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-085 */

export function L5VehicleTco() {
  const [exShowroom, setExShowroom] = useState(1_200_000)
  const [roadAdds, setRoadAdds] = useState(180_000)
  const [financePct, setFinancePct] = useState(70)
  const [rate, setRate] = useState(10.5)
  const [tenure, setTenure] = useState(5)
  const [km, setKm] = useState(12_000)
  const [fuel, setFuel] = useState(105)
  const [mileage, setMileage] = useState(16)
  const [insurance, setInsurance] = useState(32_000)
  const [service, setService] = useState(18_000)
  const [resalePct, setResalePct] = useState(40)

  const years = 5
  const onRoad = exShowroom + roadAdds
  const loan = (onRoad * financePct) / 100
  const payment = emi(loan, rate, tenure)
  const financeCost = payment * tenure * 12 - loan
  const fuelYear = (km / mileage) * fuel
  const yearly = fuelYear + insurance + service
  const running = yearly * years
  const resale = (onRoad * resalePct) / 100
  const tco = onRoad + financeCost + running - resale
  const perKm = km * years > 0 ? tco / (km * years) : 0
  const monthly = tco / (years * 12)

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel>
          <div className="space-y-3">
            <Slider label="Ex-showroom price" value={exShowroom} min={300_000} max={8_000_000} step={25_000} onChange={setExShowroom} />
            <Slider label="On-road extras" value={roadAdds} min={0} max={2_000_000} step={10_000} onChange={setRoadAdds} />
            <Slider
              label="Share you finance"
              value={financePct}
              min={0}
              max={90}
              step={5}
              onChange={setFinancePct}
              format={(v) => `${v}% of the on-road price`}
            />
            <Slider
              label="Loan rate"
              value={rate}
              min={0}
              max={20}
              step={0.25}
              onChange={setRate}
              format={(v) => `${v}% a year`}
            />
            <Slider
              label="Loan tenure"
              value={tenure}
              min={1}
              max={7}
              step={1}
              onChange={setTenure}
              format={(v) => `${v} years`}
            />
            <Slider
              label="Kilometres a year"
              value={km}
              min={2_000}
              max={40_000}
              step={1_000}
              onChange={setKm}
              format={(v) => v.toLocaleString('en-IN') + ' km'}
            />
            <Slider label="Fuel price a litre" value={fuel} min={70} max={140} step={1} onChange={setFuel} format={(v) => rupees(v)} />
            <Slider
              label="Mileage"
              value={mileage}
              min={6}
              max={30}
              step={1}
              onChange={setMileage}
              format={(v) => v + ' km a litre'}
            />
            <Slider label="Insurance a year" value={insurance} min={0} max={200_000} step={1_000} onChange={setInsurance} />
            <Slider label="Servicing a year" value={service} min={0} max={200_000} step={1_000} onChange={setService} />
            <Slider
              label="Resale value after five years"
              value={resalePct}
              min={15}
              max={70}
              step={5}
              onChange={setResalePct}
              format={(v) => `${v}% of the on-road price`}
            />
          </div>
        </Panel>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <Stat label="On-road price" value={rupeesShort(onRoad)} tone="neutral" />
            <Stat label="Five-year running cost" value={rupeesShort(running)} tone="bad" />
            <Stat label="Five-year total cost" value={rupeesShort(tco)} tone="bad" />
            <Stat label="Cost per kilometre" value={rupees(perKm)} tone="neutral" />
          </div>

          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="EMI" value={loan ? rupeesShort(payment) : 'None'} tone="neutral" />
              <Stat label="Fuel a year" value={rupeesShort(fuelYear)} tone="neutral" />
              <Stat label="Resale value" value={rupeesShort(resale)} tone="good" />
            </div>
          </Panel>

          <Debrief title="Why the monthly cost is the wrong number">
            The vehicle loses about {100 - resalePct}% of its on-road price in five years and costs{' '}
            {rupeesShort(running)} to run in the same period, on top of {rupeesShort(financeCost)} of interest. Divided
            across {years} years that is {rupeesShort(monthly)} a month, or {rupees(perKm)} for every kilometre driven.
            A cheaper vehicle with a lower loan share cuts all three numbers at once, which is why the on-road price is
            only the first decision.
          </Debrief>

          <Panel>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-300">Checked before signing</p>
            <ul className="space-y-1.5">
              <Check ok={financePct <= 70}>The loan does not run past what the vehicle will be worth</Check>
              <Check ok={tenure <= 5}>The tenure ends before the warranty and the shine do</Check>
              <Check ok={insurance > 0}>Third-party cover is compulsory under the Motor Vehicles Act, 1988, and own-damage is the part you choose</Check>
              <Check ok={perKm < 25}>The cost per kilometre is acceptable for how you will actually use it</Check>
              <Check ok={resale >= 35}>The resale assumption is not built on the best case</Check>
            </ul>
          </Panel>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-086 */

export function L5EducationRoi() {
  const [course, setCourse] = useState<'engineering' | 'medicine' | 'design' | 'certificate'>('engineering')
  const [premium, setPremium] = useState(300_000)
  const [forgone, setForgone] = useState(600_000)
  const [career, setCareer] = useState(15)
  const [loanPct, setLoanPct] = useState(70)
  const [rate, setRate] = useState(10.5)
  const [claimed, setClaimed] = useState(false)

  const shapes = {
    engineering: { cost: 2_500_000, years: 4, note: 'Four years, and a campus placement to aim at' },
    medicine: { cost: 6_000_000, years: 6, note: 'The longest runway before any income arrives' },
    design: { cost: 1_600_000, years: 4, note: 'Shorter on fees, and the portfolio carries the weight' },
    certificate: { cost: 250_000, years: 1, note: 'A year to a skill, with the smallest bet of the four' },
  } as const
  const fields = [
    { key: 'engineering', label: 'Engineering degree' },
    { key: 'medicine', label: 'Medicine' },
    { key: 'design', label: 'Design degree' },
    { key: 'certificate', label: 'One-year certificate' },
  ] as const

  const shape = shapes[course]
  const loan = (shape.cost * loanPct) / 100
  const interest = Math.max(0, emi(loan, rate, 7) * 84 - loan)
  const totalCost = shape.cost + forgone * shape.years + interest
  const extra = premium * career
  const payback = premium > 0 ? totalCost / premium : 0
  const roi = totalCost > 0 ? ((extra - totalCost) / totalCost) * 100 : 0

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel>
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-300">Which qualification</p>
          <div className="grid grid-cols-2 gap-2">
            {fields.map((f) => (
              <Choice key={f.key} label={f.label} active={course === f.key} onClick={() => setCourse(f.key)} />
            ))}
          </div>
          <p className="mt-2 text-[11px] text-ink-400">{shape.note}</p>
          <div className="mt-3 space-y-3">
            <Slider
              label="Extra income a year afterwards"
              value={premium}
              min={50_000}
              max={2_000_000}
              step={25_000}
              onChange={setPremium}
              format={(v) => rupees(v) + ' a year'}
            />
            <Slider
              label="Salary given up each year of study"
              value={forgone}
              min={0}
              max={2_500_000}
              step={25_000}
              onChange={setForgone}
              format={(v) => rupees(v) + ' a year'}
            />
            <Slider
              label="Years of career afterwards"
              value={career}
              min={5}
              max={35}
              step={1}
              onChange={setCareer}
              format={(v) => `${v} years`}
            />
            <Slider
              label="Share funded by a loan"
              value={loanPct}
              min={0}
              max={100}
              step={5}
              onChange={setLoanPct}
              format={(v) => `${v}%`}
            />
            <Slider
              label="Loan rate"
              value={rate}
              min={6}
              max={16}
              step={0.25}
              onChange={setRate}
              format={(v) => `${v}% a year`}
            />
          </div>
          <div className="mt-3">
            <Toggle
              label="Interest claimed under section 129 (earlier 80E)"
              on={claimed}
              onClick={() => setClaimed((v) => !v)}
            />
          </div>
        </Panel>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <Stat label="Total cost of the decision" value={rupeesShort(totalCost)} tone="bad" />
            <Stat label={'Extra income over ' + career + ' years'} value={rupeesShort(extra)} tone="good" />
            <Stat label="Payback from graduation" value={payback.toFixed(1) + ' years'} tone="neutral" />
            <Stat
              label="Return on the decision"
              value={roi.toFixed(0) + '%'}
              tone={roi > 50 ? 'best' : roi > 0 ? 'good' : 'bad'}
            />
          </div>

          <Debrief title="What the fee hides">
            The fee is {rupeesShort(shape.cost)}, but the decision costs {rupeesShort(totalCost)} once{' '}
            {rupeesShort(forgone * shape.years)} of given-up salary and {rupeesShort(interest)} of interest are counted.
            It earns that back in {payback.toFixed(1)} years of the premium, and {roi.toFixed(0)}% over the whole career
            {roi > 0 ? ' — a positive return, on numbers you supplied' : ' — negative, which is worth knowing before borrowing'}.
          </Debrief>

          <Panel>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-300">Asked before deciding</p>
            <ul className="space-y-1.5">
              <Check ok={premium >= forgone}>The qualification earns back more a year than it costs a year to take</Check>
              <Check ok={payback <= shape.years + 6}>The payback period is inside a horizon you can wait out</Check>
              <Check ok={loanPct < 90}>The funding is not entirely borrowed</Check>
              <Check ok={claimed || loanPct === 0}>
                The section 129 deduction for education-loan interest is known: the whole interest, for eight years, in the old regime
              </Check>
              <Check ok={shape.years <= 6}>The time out of the workforce has been counted, not only the fee</Check>
            </ul>
          </Panel>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-087 */

export function L5RentBuyModel() {
  const [rent, setRent] = useState(30_000)
  const [rentInflation, setRentInflation] = useState(6)
  const [price, setPrice] = useState(9_000_000)
  const [downPct, setDownPct] = useState(20)
  const [rate, setRate] = useState(8.5)
  const [tenure, setTenure] = useState(20)
  const [appreciation, setAppreciation] = useState(5)
  const [upkeepPct, setUpkeepPct] = useState(1)
  const [investReturn, setInvestReturn] = useState(7)
  const [hold, setHold] = useState(10)

  const down = (price * downPct) / 100
  const loan = price - down
  const stamp = price * 0.06
  const payment = emi(loan, rate, tenure)
  const upkeep = (price * upkeepPct) / 100

  // Year by year: what the buyer's net position is, against the renter's.
  const rows: { year: number; renter: number; buyer: number }[] = []
  const r = rate / 100 / 12
  const nMonths = tenure * 12
  for (let y = 1; y <= Math.max(hold, 30); y++) {
    const monthsPaid = Math.min(y * 12, nMonths)
    const balance =
      monthsPaid >= nMonths
        ? 0
        : r > 0
          ? (loan * (Math.pow(1 + r, nMonths) - Math.pow(1 + r, monthsPaid))) / (Math.pow(1 + r, nMonths) - 1)
          : loan * (1 - monthsPaid / nMonths)
    const houseValue = price * Math.pow(1 + appreciation / 100, y)
    const renterCorpus = grow(down + stamp, investReturn, y)
    rows.push({ year: y, renter: renterCorpus, buyer: houseValue - balance })
  }
  const shown = rows.slice(0, hold)
  const at = rows[hold - 1]
  const breakEven = rows.find((row) => row.buyer >= row.renter)?.year ?? 0
  const monthlyOwn = payment + upkeep / 12
  const monthlyRent = rent * Math.pow(1 + rentInflation / 100, hold)
  const diff = at ? at.buyer - at.renter : 0
  const scale = Math.max(...shown.map((row) => Math.max(row.buyer, row.renter))) || 1

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel>
          <div className="space-y-3">
            <Slider label="Rent a month" value={rent} min={5_000} max={150_000} step={1_000} onChange={setRent} />
            <Slider
              label="Rent inflation"
              value={rentInflation}
              min={0}
              max={12}
              step={0.5}
              onChange={setRentInflation}
              format={(v) => `${v}% a year`}
            />
            <Slider label="Price of the house" value={price} min={2_000_000} max={40_000_000} step={250_000} onChange={setPrice} />
            <Slider
              label="Down payment"
              value={downPct}
              min={10}
              max={60}
              step={5}
              onChange={setDownPct}
              format={(v) => `${v}% of the price`}
            />
            <Slider
              label="Loan rate"
              value={rate}
              min={6}
              max={14}
              step={0.1}
              onChange={setRate}
              format={(v) => `${v}% a year`}
            />
            <Slider
              label="Loan tenure"
              value={tenure}
              min={5}
              max={30}
              step={1}
              onChange={setTenure}
              format={(v) => `${v} years`}
            />
            <Slider
              label="House price growth"
              value={appreciation}
              min={0}
              max={12}
              step={0.5}
              onChange={setAppreciation}
              format={(v) => `${v}% a year`}
            />
            <Slider
              label="Maintenance and taxes"
              value={upkeepPct}
              min={0}
              max={3}
              step={0.1}
              onChange={setUpkeepPct}
              format={(v) => `${v}% of the price a year`}
            />
            <Slider
              label="What the money earns if invested"
              value={investReturn}
              min={4}
              max={14}
              step={0.5}
              onChange={setInvestReturn}
              format={(v) => `${v}% a year`}
            />
            <Slider
              label="How long you would stay"
              value={hold}
              min={3}
              max={20}
              step={1}
              onChange={setHold}
              format={(v) => `${v} years`}
            />
          </div>
        </Panel>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <Stat
              label="Buying pulls ahead in"
              value={breakEven ? 'Year ' + breakEven : 'Beyond 30 years'}
              tone={breakEven && breakEven <= hold ? 'best' : 'bad'}
            />
            <Stat label={'At year ' + hold + ', buying is ahead by'} value={rupeesShort(Math.abs(diff))} tone={diff >= 0 ? 'good' : 'bad'} />
            <Stat label="Cost of owning a month" value={rupeesShort(monthlyOwn)} tone="neutral" />
            <Stat label={'Rent in year ' + hold} value={rupeesShort(monthlyRent) + ' a month'} tone="neutral" />
          </div>

          <Panel>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-300">Net position, year by year</p>
            <div className="space-y-1">
              {shown.map((row) => (
                <div key={row.year} className="flex items-center gap-2 text-[11px] text-ink-400">
                  <span className="w-12 shrink-0">Year {row.year}</span>
                  <div className="flex flex-1 items-center gap-1">
                    <div className="h-3 rounded-sm bg-sky-400/40" style={{ width: (row.renter / scale) * 100 + '%' }} />
                    <div className="h-3 rounded-sm bg-brand-400/60" style={{ width: (row.buyer / scale) * 100 + '%' }} />
                  </div>
                  <span className="w-20 shrink-0 text-right font-mono">{rupeesShort(Math.max(row.buyer, 0))}</span>
                </div>
              ))}
            </div>
            <div className="mt-2 flex gap-3 text-[11px]">
              <span className="text-sky-300">Rent, plus the invested down payment</span>
              <span className="text-brand-300">House value, less what is still owed</span>
            </div>
          </Panel>

          <Debrief title="Why the horizon decides it">
            Owning costs {rupeesShort(monthlyOwn)} a month and renting {rupeesShort(rent)}, but that is not the
            comparison: a buyer also pays {rupeesShort(down)} down and {rupeesShort(stamp)} of stamp duty, and a renter
            keeps that money invested. On these numbers buying is ahead from year {breakEven || '—'}, which is{' '}
            {breakEven && breakEven <= hold ? 'inside' : 'beyond'} the {hold} years you plan to stay. Buying with a
            horizon shorter than the break-even is financing a transaction, not building an asset.
          </Debrief>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-088 */

export function L5NewVsUsed() {
  const [newPrice, setNewPrice] = useState(1_200_000)
  const [usedPrice, setUsedPrice] = useState(700_000)
  const [years, setYears] = useState(5)
  const [newDrop, setNewDrop] = useState(15)
  const [usedDrop, setUsedDrop] = useState(11)
  const [newRunning, setNewRunning] = useState(46_000)
  const [usedRunning, setUsedRunning] = useState(76_000)
  const [warranty, setWarranty] = useState(true)
  const [inspection, setInspection] = useState(true)

  const newResale = newPrice * Math.pow(1 - newDrop / 100, years)
  const usedResale = usedPrice * Math.pow(1 - usedDrop / 100, years)
  // A car under warranty sends the unexpected repair bill to the maker instead.
  const newCost = newPrice + newRunning * years - newResale - (warranty ? newRunning * 0.4 : 0)
  const usedCost = usedPrice + usedRunning * years - usedResale + (inspection ? 12_000 : 0)
  const gap = usedCost - newCost

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel>
          <div className="space-y-3">
            <Slider label="Price of a new one" value={newPrice} min={300_000} max={6_000_000} step={25_000} onChange={setNewPrice} />
            <Slider label="Price of the used one" value={usedPrice} min={100_000} max={4_000_000} step={25_000} onChange={setUsedPrice} />
            <Slider
              label="Value lost a year, new"
              value={newDrop}
              min={8}
              max={25}
              step={1}
              onChange={setNewDrop}
              format={(v) => `${v}% a year`}
            />
            <Slider
              label="Value lost a year, used"
              value={usedDrop}
              min={5}
              max={20}
              step={1}
              onChange={setUsedDrop}
              format={(v) => `${v}% a year`}
            />
            <Slider label="Running cost a year, new" value={newRunning} min={10_000} max={200_000} step={2_000} onChange={setNewRunning} />
            <Slider label="Running cost a year, used" value={usedRunning} min={10_000} max={300_000} step={2_000} onChange={setUsedRunning} />
          </div>
          <p className="mt-3 mb-2 text-xs font-semibold uppercase tracking-widest text-brand-300">How long will you keep it</p>
          <div className="grid grid-cols-3 gap-2">
            {[3, 5, 8].map((y) => (
              <Choice key={y} label={y + ' years'} active={years === y} onClick={() => setYears(y)} />
            ))}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <Toggle label="Warranty on the new one" on={warranty} onClick={() => setWarranty((v) => !v)} />
            <Toggle label="Paid for an inspection" on={inspection} onClick={() => setInspection((v) => !v)} />
          </div>
        </Panel>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <Stat label={'Cost of new, over ' + years + ' years'} value={rupeesShort(newCost)} tone={gap < 0 ? 'good' : 'neutral'} />
            <Stat label={'Cost of used, over ' + years + ' years'} value={rupeesShort(usedCost)} tone={gap > 0 ? 'good' : 'neutral'} />
            <Stat label="Cheaper option" value={gap > 0 ? 'The new one' : 'The used one'} tone="best" />
            <Stat label="Difference" value={rupeesShort(Math.abs(gap))} tone="neutral" />
          </div>

          <Debrief title="The gap narrows as you hold it">
            Buying new costs {rupeesShort(newPrice)} and ends worth {rupeesShort(newResale)}; buying used costs{' '}
            {rupeesShort(usedPrice)} and ends worth {rupeesShort(usedResale)}, while asking for {rupeesShort(usedRunning - newRunning)} more
            a year to keep running. Over {years} years the difference is {rupeesShort(Math.abs(gap))} in favour of the{' '}
            {gap > 0 ? 'new' : 'used'} option. The shorter you hold a vehicle, the more the used price wins; the longer you
            hold it, the more the warranty and the repair bill decide it.
          </Debrief>

          <Panel>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-300">Before choosing used</p>
            <ul className="space-y-1.5">
              <Check ok={inspection}>An independent inspection was done, on a lift, not in a car park</Check>
              <Check ok={usedRunning > newRunning}>The higher running cost of the older vehicle is in the budget</Check>
              <Check ok={usedPrice < newPrice * 0.75}>The discount is real, not the depreciation of a new car in disguise</Check>
              <Check ok={years >= 5}>The holding period is long enough for depreciation to matter less than upkeep</Check>
              <Check ok={usedDrop < newDrop}>The value curve of the older vehicle is genuinely flatter</Check>
            </ul>
          </Panel>

          <Panel>
            <p className="text-xs text-ink-300">
              Financing a used vehicle usually costs more than a new one, because the lender is pricing the risk of an
              asset that is worth less every month and is harder to value. A cheaper rate is not a reason to buy the more
              expensive vehicle; it is only one line of the comparison above.
            </p>
          </Panel>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-089 */

export function L5CashVsFinance() {
  const [purchase, setPurchase] = useState(800_000)
  const [cash, setCash] = useState(1_200_000)
  const [rate, setRate] = useState(11)
  const [tenure, setTenure] = useState(3)
  const [safeReturn, setSafeReturn] = useState(6.5)
  const [slab, setSlab] = useState(30)
  const [essentials, setEssentials] = useState(55_000)
  const [mode, setMode] = useState<'cash' | 'finance' | 'half'>('cash')

  const afterTax = safeReturn * (1 - slab / 100)
  const loan = mode === 'cash' ? 0 : mode === 'half' ? purchase / 2 : purchase
  const fromCash = purchase - loan
  const payment = loan ? emi(loan, rate, tenure) : 0
  const interest = Math.max(0, payment * tenure * 12 - loan)
  const reserveLeft = cash - fromCash
  const reserveMonths = essentials ? reserveLeft / essentials : 0
  const fiveYearEarning = grow(loan, afterTax, 5) - loan
  const advantage = fiveYearEarning - interest

  const verdict = (() => {
    if (rate > afterTax + 2 && reserveMonths >= 6) return 'Pay cash: the loan costs clearly more than the money earns, and the reserve survives.'
    if (reserveMonths < 6) return 'Finance, or pay only part: after the purchase the reserve falls under six months of essentials.'
    if (rate > afterTax) return 'Close call: financing costs a little more than the cash earns, so decide on the rate being fixed and the reserve staying intact.'
    return 'Finance if the rate is fixed and lower than what the cash earns after tax, and keep the cash invested.'
  })()

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel>
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-300">How would you pay for it</p>
          <div className="grid grid-cols-3 gap-2">
            <Choice label="Pay cash" active={mode === 'cash'} onClick={() => setMode('cash')} />
            <Choice label="Finance the whole amount" active={mode === 'finance'} onClick={() => setMode('finance')} />
            <Choice label="Half cash, half loan" active={mode === 'half'} onClick={() => setMode('half')} />
          </div>
          <div className="mt-3 space-y-3">
            <Slider label="What it costs" value={purchase} min={100_000} max={10_000_000} step={25_000} onChange={setPurchase} format={(v) => rupees(v)} />
            <Slider label="Cash you have available" value={cash} min={100_000} max={12_000_000} step={25_000} onChange={setCash} format={(v) => rupees(v)} />
            <Slider
              label="Loan rate on offer"
              value={rate}
              min={6}
              max={20}
              step={0.25}
              onChange={setRate}
              format={(v) => `${v}% a year`}
            />
            <Slider
              label="Loan tenure"
              value={tenure}
              min={1}
              max={7}
              step={1}
              onChange={setTenure}
              format={(v) => `${v} years`}
            />
            <Slider
              label="What the cash can safely earn"
              value={safeReturn}
              min={4}
              max={9}
              step={0.25}
              onChange={setSafeReturn}
              format={(v) => `${v}% a year before tax`}
            />
            <Slider
              label="Your tax slab"
              value={slab}
              min={0}
              max={42.74}
              step={5.2}
              onChange={setSlab}
              format={(v) => `${Math.round(v)}%`}
            />
            <Slider label="Essentials a month" value={essentials} min={15_000} max={300_000} step={5_000} onChange={setEssentials} format={(v) => rupees(v) + ' a month'} />
          </div>
        </Panel>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <Stat label="Cost of financing" value={rate.toFixed(2) + '%'} tone="bad" />
            <Stat label="Return on the cash, after tax" value={afterTax.toFixed(2) + '%'} tone="good" />
            <Stat label="Interest if you borrow" value={rupeesShort(interest)} tone={interest ? 'bad' : 'neutral'} />
            <Stat label="Reserve left afterwards" value={rupeesShort(reserveLeft)} tone={reserveMonths >= 6 ? 'good' : 'bad'} />
          </div>

          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="EMI" value={loan ? rupeesShort(payment) : 'None'} tone="neutral" />
              <Stat label="Reserve in months" value={reserveMonths.toFixed(1)} tone={reserveMonths >= 6 ? 'good' : 'bad'} />
              <Stat
                label="Five-year advantage of borrowing"
                value={rupeesShort(advantage)}
                tone={advantage > 0 ? 'good' : 'bad'}
              />
            </div>
          </Panel>

          <Debrief title="The comparison rate">
            Financing costs {rate}% a year; the cash earns {afterTax.toFixed(2)}% after tax, so the gap is{' '}
            {(rate - afterTax).toFixed(2)} percentage points. Over {tenure} years the interest is {rupeesShort(interest)}{' '}
            against {rupeesShort(fiveYearEarning)} of expected earnings on the same money. Verdict: {verdict}
          </Debrief>

          <Panel>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-300">Never skipped</p>
            <ul className="space-y-1.5">
              <Check ok={reserveMonths >= 6}>Paying cash still leaves six months of essentials in the bank</Check>
              <Check ok={afterTax > 0}>The return used is the after-tax one, not the headline rate</Check>
              <Check ok={rate > 0}>The loan rate is compared as an annual rate, not as an EMI that looks affordable</Check>
              <Check ok={interest < purchase}>The interest does not end up a large fraction of what the thing costs</Check>
              <Check ok={loan === 0 || tenure <= 5}>Borrowed money is repaid inside a period the asset stays useful for</Check>
            </ul>
          </Panel>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-090 */

export function L5CrisisDrill() {
  const [essentials, setEssentials] = useState(55_000)
  const [obligations, setObligations] = useState(30_000)
  const [income, setIncome] = useState(120_000)
  const [liquid, setLiquid] = useState(350_000)
  const [months, setMonths] = useState(6)
  const [lost, setLost] = useState(true)
  const [cut, setCut] = useState(false)
  const [called, setCalled] = useState(false)
  const [coverKept, setCoverKept] = useState(false)
  const [first, setFirst] = useState<'liquid' | 'equity' | 'gold' | 'borrow'>('liquid')

  const monthlyOut = essentials + obligations
  const monthlyIn = lost ? 0 : income
  const shortfall = Math.max(0, monthlyOut - monthlyIn)
  const runway = shortfall ? liquid / shortfall : 99
  const needed = monthlyOut * months
  const ladder = [
    { key: 'liquid', label: 'Cash and liquid funds first', right: true, note: 'Designed for this: the value does not move and it is available the same day.' },
    { key: 'equity', label: 'Long-term equity, at whatever price', right: false, note: 'Selling growth assets in a falling market converts a temporary problem into a permanent one.' },
    { key: 'gold', label: 'The family gold', right: false, note: 'It is a real option, but it is expensive to sell quickly and hard to rebuild.' },
    { key: 'borrow', label: 'Borrow from a friend', right: false, note: 'Fine as the last resort, and it is not the first line of a plan.' },
  ] as const
  const chosen = ladder.find((l) => l.key === first)!

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel>
          <div className="space-y-3">
            <Slider label="Essentials a month" value={essentials} min={15_000} max={300_000} step={5_000} onChange={setEssentials} />
            <Slider label="Loan payments a month" value={obligations} min={0} max={300_000} step={5_000} onChange={setObligations} />
            <Slider label="Income a month, before the crisis" value={income} min={20_000} max={600_000} step={5_000} onChange={setIncome} />
            <Slider label="Money you can reach quickly" value={liquid} min={0} max={5_000_000} step={25_000} onChange={setLiquid} />
            <Slider
              label="How long the crisis lasts"
              value={months}
              min={1}
              max={24}
              step={1}
              onChange={setMonths}
              format={(v) => `${v} months`}
            />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            <Toggle label="Income has stopped" on={lost} onClick={() => setLost((v) => !v)} />
            <Toggle label="Optional spends cut today" on={cut} onClick={() => setCut((v) => !v)} />
            <Toggle label="Lender called before the due date" on={called} onClick={() => setCalled((v) => !v)} />
            <Toggle label="Health cover kept alive" on={coverKept} onClick={() => setCoverKept((v) => !v)} />
          </div>
        </Panel>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <Stat label="Runway at this rate" value={runway > 60 ? 'No shortfall' : runway.toFixed(1) + ' months'} tone={runway >= months ? 'good' : 'bad'} />
            <Stat label="Monthly shortfall" value={rupeesShort(shortfall)} tone={shortfall ? 'bad' : 'good'} />
            <Stat label={'Cash needed for ' + months + ' months'} value={rupeesShort(needed)} tone="neutral" />
            <Stat label="Liquid money available" value={rupeesShort(liquid)} tone={liquid >= needed ? 'good' : 'bad'} />
          </div>

          <Panel>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-300">What do you sell first</p>
            <div className="grid grid-cols-2 gap-2">
              {ladder.map((l) => (
                <Choice key={l.key} label={l.label} active={first === l.key} onClick={() => setFirst(l.key)} />
              ))}
            </div>
            <p className="mt-2 text-xs text-ink-300">
              <strong className={chosen.right ? 'text-brand-300' : 'text-rose-300'}>{chosen.right ? 'Right order. ' : 'Not first. '}</strong>
              {chosen.note}
            </p>
          </Panel>

          <Panel>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-300">Why the due date matters</p>
            <p className="text-xs text-ink-300">
              A loan overdue for 31 days is classified SMA-1 by the lender, SMA-2 at 61 days, and becomes a
              non-performing asset once it is overdue beyond 90 days — a change that follows the borrower for years. A
              restructure agreed before the due date is a conversation; the same request after 90 days is a recovery file.
            </p>
          </Panel>

          <Panel>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-300">The six steps, in order</p>
            <ul className="space-y-1.5">
              <Check ok={cut}>Stop the optional spending today, not at the end of the month</Check>
              <Check ok={coverKept}>Protect housing, food, health cover and the means of getting to work</Check>
              <Check ok={essentials > 0}>Every rupee coming in and out is written down</Check>
              <Check ok={called}>The lender was told before the due date, not after</Check>
              <Check ok={chosen.right}>Liquidity is used in order, starting with what was meant for this</Check>
              <Check ok={liquid >= needed}>The buffer is rebuilt before the long-term goals resume</Check>
            </ul>
          </Panel>
        </div>
      </div>
    </div>
  )
}
