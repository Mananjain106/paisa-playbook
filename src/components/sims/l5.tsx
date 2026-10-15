import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { rupees } from '../../lib/format'
import { Stat } from './CompoundLab'

/**
 * Level 5, band one labs (chapters l5-001 to l5-004).
 *
 * Four separate simulations, one per chapter, each built around that chapter's
 * own decision:
 *   l5-first-salary-split   allocate a first salary and see the consequences
 *   l5-negotiation-rounds   negotiate an offer over three evidenced rounds
 *   l5-offer-compare        price two offers over three years
 *   l5-ctc-decompose        rebuild a CTC as a monthly bank credit
 *
 * All statutory rates used here are the ones verified on 15 October 2026 and
 * linked from the chapters. Every salary figure is invented for teaching.
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

/* ------------------------------------------------------------------ l5-001 */

const FIRST_NET = 43_800
const FIRST_ESSENTIAL = 22_000

export function L5FirstSalarySplit() {
  const [obligations, setObligations] = useState(22_000)
  const [buffer, setBuffer] = useState(8_500)
  const [goals, setGoals] = useState(4_000)
  const [debt, setDebt] = useState(1_000)

  const life = FIRST_NET - obligations - buffer - goals - debt
  const savingRate = ((buffer + goals) / FIRST_NET) * 100
  const coverAfterYear = (buffer * 12) / FIRST_ESSENTIAL
  const overspent = life < 0

  const presets: { name: string; v: [number, number, number, number] }[] = [
    { name: 'Starter', v: [22_000, 8_500, 4_000, 1_000] },
    { name: 'Aggressive saver', v: [21_000, 13_000, 5_000, 2_000] },
    { name: 'Lifestyle first', v: [23_500, 2_500, 1_000, 0] },
  ]

  const checks = [
    { ok: obligations >= FIRST_ESSENTIAL, text: `Obligations of ${rupees(FIRST_ESSENTIAL)} or more are covered — rent, food, transport and family support cannot be skipped.` },
    { ok: !overspent, text: `You have not allocated more than the ${rupees(FIRST_NET)} that actually arrives — the four sliders above must fit inside the salary.` },
    { ok: savingRate >= 20, text: 'Buffer plus goals is at least 20% of take-home, so savings survive a month with an extra expense.' },
    { ok: coverAfterYear >= 4, text: `At this rate the buffer reaches ${coverAfterYear.toFixed(1)} months of cover after a year. Six is the standard target.` },
    { ok: life >= 4_000, text: `Spending money of ${rupees(Math.max(life, 0))} is left for the month. A plan with nothing in it for life is abandoned by month three.` },
  ]
  const passed = checks.filter((c) => c.ok).length

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {presets.map((p) => (
          <button
            key={p.name}
            onClick={() => {
              setObligations(p.v[0])
              setBuffer(p.v[1])
              setGoals(p.v[2])
              setDebt(p.v[3])
            }}
            className="rounded-lg border border-white/15 px-3 py-1 text-xs text-ink-200 transition hover:border-brand-400/50 hover:text-white"
          >
            {p.name}
          </button>
        ))}
        <span className="self-center text-xs text-ink-500">Try all three, then compare the checks below.</span>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Allocate one month of ₹43,800</h4>
          <div className="space-y-3">
            <Slider label="Obligations (rent, food, transport, family)" value={obligations} min={0} max={40_000} step={250} onChange={setObligations} />
            <Slider label="Emergency buffer" value={buffer} min={0} max={20_000} step={250} onChange={setBuffer} />
            <Slider label="Goals (education, vehicle, travel)" value={goals} min={0} max={15_000} step={250} onChange={setGoals} />
            <Slider label="Clearing debt above the minimum" value={debt} min={0} max={15_000} step={250} onChange={setDebt} />
          </div>
          <div className={`mt-3 rounded-lg p-2 text-xs ${overspent ? 'bg-rose-400/10 text-rose-200' : 'bg-brand-400/10 text-brand-300'}`}>
            {overspent
              ? `You have allocated ${rupees(Math.abs(life))} more than the salary. Reduce a slider.`
              : `Left for guilt-free spending: ${rupees(life)}`}
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Saving rate" value={`${savingRate.toFixed(1)}%`} />
              <Stat label="Buffer after 1 year" value={`${coverAfterYear.toFixed(1)} months`} />
              <Stat label="Checks passed" value={`${passed}/5`} />
            </div>
          </Panel>
          <Panel>
            <h4 className="mb-2 font-display text-sm text-white">What this split does</h4>
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
          <strong className="text-white">Debrief.</strong> The order is not a preference, it is a sequence: obligations first because they
          cannot be skipped, then the buffer because it decides whether a bad month becomes debt, then goals and extra debt payments,
          then life. A plan that inverts the first two is where most first salaries disappear. The saving rate moves with the buffer and
          goals sliders — and it is the number that compounds with every future raise, not the amount you save in any single month.
        </p>
      </Panel>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-002 */

type Reason = 'market' | 'competing' | 'scope' | 'need'

const REASONS: { id: Reason; label: string; note: string }[] = [
  { id: 'market', label: 'Market evidence', note: 'Comparable postings and structured salary data for this role, city and experience.' },
  { id: 'competing', label: 'A competing offer', note: 'Only credible if you can produce it when asked — and only once.' },
  { id: 'scope', label: 'Demonstrated scope', note: 'The role you are being hired into is bigger than the level the offer is priced at.' },
  { id: 'need', label: 'My expenses are higher', note: 'A reason about your household, not about the value of the role.' },
]

const START_OFFER = 900_000
const MAX_OFFER = 1_400_000

export function L5NegotiationRounds() {
  const [offer, setOffer] = useState(START_OFFER)
  const [round, setRound] = useState(0)
  const [reason, setReason] = useState<Reason>('market')
  const [ask, setAsk] = useState(1_000_000)
  const [log, setLog] = useState<string[]>([
    `The employer has offered ${rupees(START_OFFER)} CTC. The band for this role, at your experience and city, is ₹8–14 lakh.`,
  ])
  const [usedReasons, setUsedReasons] = useState<Reason[]>([])
  const done = round >= 3

  const makeAsk = () => {
    if (done) return
    const gap = Math.max(0, ask - offer)
    let move = 0
    let note = ''
    switch (reason) {
      case 'market':
        move = Math.min(gap * 0.35, 75_000)
        note = move > 0 ? 'They can see the comparables. The number moves.' : 'You asked for less than the current offer, so nothing changed.'
        break
      case 'competing':
        if (usedReasons.includes('competing')) {
          move = 0
          note = 'They asked to see the other offer letter and you could not produce a second one. The round is spent.'
        } else {
          move = Math.min(gap * 0.5, 150_000)
          note = 'A credible alternative gives the strongest single move — use it once.'
        }
        break
      case 'scope':
        move = Math.min(gap * 0.25, 40_000)
        note = 'Scope is arguable, so the move is modest but real.'
        break
      case 'need':
        move = 0
        note = 'Your rent is not a reason for the employer to reprice the role. Nothing moved.'
        break
    }
    setUsedReasons((u) => [...u, reason])
    const next = Math.min(offer + move, MAX_OFFER)
    setOffer(next)
    setRound(round + 1)
    setLog((l) => [...l, `Round ${round + 1} — asked ${rupees(ask)} on ${REASONS.find((r) => r.id === reason)!.label.toLowerCase()}: ${rupees(next)}${move > 0 ? ` (+${rupees(move)})` : ''}. ${note}`])
  }

  const gain = offer - START_OFFER
  const fiveYear = gain * (1 + 1.08 + 1.08 ** 2 + 1.08 ** 3 + 1.08 ** 4)

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-[1.1fr_1fr]">
        <Panel>
          <h4 className="mb-2 font-display text-sm text-white">Make your ask</h4>
          <p className="mb-3 text-xs text-ink-400">Three rounds. Each reason works differently, and each can be used once with its full effect.</p>
          <div className="space-y-2">
            {REASONS.map((r) => (
              <button
                key={r.id}
                onClick={() => setReason(r.id)}
                className={`w-full rounded-lg border p-2 text-left transition ${
                  reason === r.id ? 'border-brand-400/60 bg-brand-400/10' : 'border-white/10 hover:border-white/25'
                }`}
              >
                <span className="block text-xs font-semibold text-white">{r.label}</span>
                <span className="block text-[11px] text-ink-400">{r.note}</span>
              </button>
            ))}
          </div>
          <div className="mt-3">
            <Slider label="Your ask" value={ask} min={START_OFFER} max={MAX_OFFER} step={25_000} onChange={setAsk} />
          </div>
          <button
            onClick={makeAsk}
            disabled={done}
            className="mt-3 rounded-lg bg-brand-500 px-3 py-1.5 text-xs font-semibold text-ink-950 transition hover:bg-brand-400 disabled:opacity-40"
          >
            {done ? 'Negotiation closed' : `Make the ask (round ${round + 1} of 3)`}
          </button>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Current offer" value={rupees(offer)} />
              <Stat label="Gain so far" value={`+${rupees(gain)}`} />
              <Stat label="Rounds used" value={`${round}/3`} />
            </div>
          </Panel>
          <Panel>
            <h4 className="mb-2 font-display text-sm text-white">What happened</h4>
            <ul className="space-y-1.5 text-[11px] text-ink-300">
              {log.map((l, i) => (
                <li key={i} className="border-l border-white/10 pl-2">
                  {l}
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </div>

      <Panel>
        <div className="grid grid-cols-2 gap-2">
          <Stat label="Fixed pay gained" value={rupees(gain)} />
          <Stat label="Worth over 5 years at 8% increments" value={rupees(Math.round(fiveYear))} />
        </div>
        <p className="mt-3 text-xs text-ink-300">
          <strong className="text-white">Debrief.</strong> The same three rounds produce very different outcomes depending on the evidence
          behind the ask. Market data moves an offer without costing you credibility; a genuine alternative moves it the most, but only
          once, because the second claim is checked. Asking as a function of your expenses moves nothing at all — the employer is pricing a
          role, not a household. Notice the last figure: the ₹1 lakh of fixed pay is not ₹1 lakh, it is the base for every future
          increment, which is why it is worth ten uncomfortable minutes.
        </p>
      </Panel>
      <button
        onClick={() => {
          setOffer(START_OFFER)
          setRound(0)
          setLog([`The employer has offered ${rupees(START_OFFER)} CTC. The band for this role, at your experience and city, is ₹8–14 lakh.`])
          setUsedReasons([])
        }}
        className="rounded-lg border border-white/15 px-3 py-1 text-xs text-ink-300 transition hover:text-white"
      >
        Reset and try another strategy
      </button>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-003 */

type Offer = {
  name: string
  fixed: number
  variableTarget: number
  benefits: number
  equity: number
  livingCost: number
  payout: number
}

export function L5OfferCompare() {
  const [payoutA, setPayoutA] = useState(70)
  const [payoutB, setPayoutB] = useState(100)
  const [equityHaircut, setEquityHaircut] = useState(40)

  const offers: Offer[] = [
    { name: 'Offer A — metro', fixed: 1_200_000, variableTarget: 240_000, benefits: 204_000, equity: 0, livingCost: 180_000, payout: payoutA },
    { name: 'Offer B — smaller city', fixed: 1_050_000, variableTarget: 120_000, benefits: 181_000, equity: 180_000, livingCost: 60_000, payout: payoutB },
  ]

  const threeYear = (o: Offer) =>
    o.fixed * 3 + o.variableTarget * (o.payout / 100) * 3 + o.benefits * 3 + o.equity * ((100 - equityHaircut) / 100) - o.livingCost * 3

  const totals = offers.map(threeYear)
  const winner = totals[0] > totals[1] ? 0 : 1
  const swing = Math.abs(totals[0] - totals[1])

  // The variable payout for Offer A at which the two offers tie.
  const breakEven = (() => {
    const base = (o: Offer) => o.fixed * 3 + o.benefits * 3 + o.equity * ((100 - equityHaircut) / 100) - o.livingCost * 3
    const variableOf = (o: Offer) => o.variableTarget * 3
    const target = (base(offers[1]) + variableOf(offers[1]) * (offers[1].payout / 100) - base(offers[0])) / variableOf(offers[0])
    return Math.max(0, Math.min(150, target * 100))
  })()

  return (
    <div className="space-y-4">
      <Panel>
        <h4 className="mb-1 font-display text-sm text-white">Price both offers over three years</h4>
        <p className="mb-3 text-xs text-ink-400">
          The two offers are fixed. What is uncertain is the variable payout and what the equity will really be worth — so move those two
          assumptions and watch the ranking change.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <Slider label="Offer A variable paid (% of target)" value={payoutA} min={0} max={130} step={5} onChange={setPayoutA} format={(v) => `${v}%`} />
          <Slider label="Offer B variable paid (% of target)" value={payoutB} min={0} max={130} step={5} onChange={setPayoutB} format={(v) => `${v}%`} />
          <Slider label="Haircut on the ESOP value" value={equityHaircut} min={0} max={100} step={5} onChange={setEquityHaircut} format={(v) => `−${v}%`} />
        </div>
      </Panel>

      <div className="grid gap-4 md:grid-cols-2">
        {offers.map((o, i) => {
          const v = o.variableTarget * (o.payout / 100) * 3
          const rows = [
            ['Fixed pay, 3 years', o.fixed * 3],
            [`Variable at ${o.payout}% of target`, v],
            ['Benefits, 3 years', o.benefits * 3],
            [`Equity after a ${equityHaircut}% haircut`, o.equity * ((100 - equityHaircut) / 100)],
            ['Extra living cost', -o.livingCost * 3],
          ] as [string, number][]
          return (
            <Panel key={o.name}>
              <div className="mb-2 flex items-center justify-between">
                <h4 className="font-display text-sm text-white">{o.name}</h4>
                {winner === i && (
                  <span className="rounded-md bg-brand-400/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-brand-300">
                    higher value
                  </span>
                )}
              </div>
              <ul className="space-y-1 text-xs">
                {rows.map(([label, amount]) => (
                  <li key={label} className="flex justify-between border-b border-white/5 pb-1 text-ink-300">
                    <span>{label}</span>
                    <span className="font-mono">{amount < 0 ? `−${rupees(Math.abs(amount))}` : rupees(amount)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-2 text-sm text-white">
                Three-year total: <strong className="font-mono text-brand-300">{rupees(Math.round(totals[i]))}</strong>
              </div>
            </Panel>
          )
        })}
      </div>

      <Panel>
        <p className="text-xs text-ink-300">
          With these assumptions the offers are <strong className="text-white">{rupees(Math.round(swing))}</strong> apart, and Offer{' '}
          {winner === 0 ? 'A' : 'B'} is ahead. The ranking flips if Offer A pays less than about{' '}
          <strong className="text-white">{breakEven.toFixed(0)}%</strong> of its variable target — which is exactly the question to ask a
          recruiter before signing: what has this plan actually paid for the last three years, for someone in this role?
        </p>
        <p className="mt-2 text-xs text-ink-300">
          <strong className="text-white">Debrief.</strong> Variable pay is a conditional promise; ESOPs are worth what someone will pay for
          them, after dilution, taxes and the wait; benefits are real money that never appears in the headline; and location cost changes
          the value of an identical fixed salary. Price all four, and a negotiation becomes a comparison instead of a hunch.
        </p>
        <p className="mt-2 text-[11px] text-ink-500">
          The salary figures here are illustrative. The method — count variable at what it actually paid, discount equity, subtract living
          cost — is the part worth keeping.
        </p>
      </Panel>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-004 */

const NEW_REGIME_SLABS: [number, number][] = [
  [400_000, 0],
  [400_000, 0.05],
  [400_000, 0.1],
  [400_000, 0.15],
  [400_000, 0.2],
  [400_000, 0.25],
  [Number.POSITIVE_INFINITY, 0.3],
]

/**
 * Simplified new-regime tax for the year: ₹75,000 standard deduction applied
 * before this, slab rates, a section 87A rebate of up to ₹60,000 that makes
 * taxable income up to ₹12 lakh effectively tax-free, marginal relief just
 * above that, and the 4% cess. An estimate for teaching, not a tax return.
 */
const newRegimeTax = (taxable: number): number => {
  let remaining = Math.max(0, taxable)
  let raw = 0
  for (const [width, rate] of NEW_REGIME_SLABS) {
    const slice = Math.min(remaining, width)
    raw += slice * rate
    remaining -= slice
    if (remaining <= 0) break
  }
  let tax = raw
  if (taxable <= 1_200_000) tax = Math.max(0, raw - 60_000)
  else tax = Math.min(raw, taxable - 1_200_000) // marginal relief
  return tax * 1.04
}

export function L5CtcDecompose() {
  const [ctc, setCtc] = useState(600_000)
  const [basicPct, setBasicPct] = useState(50)
  const [proTax, setProTax] = useState(2_400)
  const [fullBasicPf, setFullBasicPf] = useState(true)

  const calc = useMemo(() => {
    const monthly = ctc / 12
    const basicMonthly = (monthly * basicPct) / 100
    const pfBase = fullBasicPf ? basicMonthly : Math.min(basicMonthly, 25_000)
    const employerPf = pfBase * 0.12 * 12
    const epsShare = pfBase * 0.0833 * 12
    const gratuity = basicMonthly * 0.0481 * 12
    const gross = Math.max(0, ctc - employerPf - gratuity)
    const employeePf = pfBase * 0.12 * 12
    const esi = gross / 12 <= 21_000 ? gross * 0.0075 : 0
    const taxable = Math.max(0, gross - 75_000)
    const tax = newRegimeTax(taxable)
    const net = gross - employeePf - esi - proTax - tax
    return { basicMonthly, pfBase, employerPf, epsShare, gratuity, gross, employeePf, esi, taxable, tax, net }
  }, [ctc, basicPct, proTax, fullBasicPf])

  const monthlyNet = calc.net / 12
  const bankShare = (calc.net / ctc) * 100

  const lines: [string, number, string][] = [
    ['CTC', ctc, 'The number in the offer letter'],
    ['Employer PF (12% of PF wages)', -calc.employerPf, `Goes to your PF account, not to your bank — EPS share about ${rupees(Math.round(calc.epsShare))}`],
    ['Gratuity accrual (4.81% of basic)', -calc.gratuity, 'Payable after five years of service; a cost today, cash later'],
    ['Gross salary', calc.gross, 'Basic + HRA + allowances'],
    ['Employee PF (12% of PF wages)', -calc.employeePf, 'Deducted from gross, credited to your PF account'],
    ['Employee ESI (0.75%)', -calc.esi, calc.esi ? 'Applies because monthly gross is within the ₹21,000 ESI ceiling' : 'Not applicable: monthly gross is above the ₹21,000 ESI ceiling'],
    ['Professional tax', -proTax, 'A state levy; set it to zero if your state does not charge it'],
    ['Tax withheld (new regime)', -calc.tax, `On taxable income of ${rupees(Math.round(calc.taxable))} after the ₹75,000 standard deduction`],
    ['Net take-home', calc.net, `${rupees(Math.round(monthlyNet))} a month`],
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Your offer</h4>
          <label className="block">
            <span className="text-xs text-ink-300">Annual CTC</span>
            <input
              type="number"
              value={ctc}
              step={25_000}
              min={200_000}
              max={10_000_000}
              onChange={(e) => setCtc(Math.max(0, Number(e.target.value)))}
              className="mt-1 w-full rounded-md border border-white/10 bg-ink-950 px-2 py-1 font-mono text-sm text-white outline-none focus:border-brand-400/50"
            />
          </label>
          <div className="mt-3 space-y-3">
            <Slider label="Basic pay as a share of monthly CTC" value={basicPct} min={30} max={70} step={5} onChange={setBasicPct} format={(v) => `${v}%`} />
            <Slider label="Professional tax a year" value={proTax} min={0} max={2_500} step={100} onChange={setProTax} />
            <label className="flex items-center gap-2 text-xs text-ink-300">
              <input type="checkbox" checked={fullBasicPf} onChange={(e) => setFullBasicPf(e.target.checked)} className="accent-brand-400" />
              Contribute PF on full basic pay (common policy). Unchecked: statutory minimum, capped at the ₹25,000 ceiling.
            </label>
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Monthly take-home" value={rupees(Math.round(monthlyNet))} />
              <Stat label="Reaching the bank" value={`${bankShare.toFixed(1)}% of CTC`} />
              <Stat label="Tax withheld" value={rupees(Math.round(calc.tax))} />
            </div>
          </Panel>
          <Panel>
            <h4 className="mb-2 font-display text-sm text-white">The waterfall</h4>
            <ul className="space-y-1 text-xs">
              {lines.map(([label, amount, note]) => (
                <li key={label} className="border-b border-white/5 pb-1">
                  <span className="flex justify-between">
                    <span className={amount < 0 || label === 'Net take-home' ? 'text-ink-300' : 'text-white'}>{label}</span>
                    <span className={`font-mono ${amount < 0 ? 'text-rose-200' : 'text-brand-300'}`}>{rupees(Math.round(amount))}</span>
                  </span>
                  <span className="block text-[10px] text-ink-500">{note}</span>
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </div>

      <Panel>
        <p className="text-xs text-ink-300">
          <strong className="text-white">Debrief.</strong> {bankShare.toFixed(1)}% of this CTC reaches the bank. The largest missing piece
          is usually PF, and PF is not lost — it is your money in an account that earns a declared rate of interest each year. Professional
          tax is gone. Tax withheld is zero while taxable income sits inside the section 87A rebate and becomes a real line once it does not.
          Gratuity is deferred rather than lost, and the employer&rsquo;s contribution was never yours to spend. Notice what the checkboxes do: contributing on full basic rather than the ₹25,000 ceiling raises your monthly PF
          deduction, lowers take-home, and builds a larger retirement balance — a trade-off, not a rule.
        </p>
        <p className="mt-2 text-[11px] text-ink-500">
          Estimate only, for teaching. Confirm your own numbers with the Income Tax Department&rsquo;s calculator and the EPFO&#39;s
          published rates before relying on them.
        </p>
      </Panel>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="rounded-xl border border-white/10 bg-white/5 p-3 text-[11px] text-ink-400"
      >
        Statutory rates used: EPF 12% employee and 12% employer (8.33% of wages to EPS, balance to EPF) with a ₹25,000 wage ceiling from
        17 September 2026; ESI 0.75% employee within a ₹21,000 monthly gross ceiling; new-regime standard deduction ₹75,000; slab rates
        0/5/10/15/20/25/30% with a section 87A rebate up to ₹60,000 and marginal relief; 4% cess. Verified 15 October 2026.
      </motion.div>
    </div>
  )
}
