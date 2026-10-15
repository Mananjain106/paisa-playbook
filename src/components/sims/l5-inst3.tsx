import { useState } from 'react'
import { rupees, rupeesShort } from '../../lib/format'
import { Stat } from './CompoundLab'

/**
 * Level 5, band three, batch 3 labs (chapters l5-060 to l5-070).
 *
 * Eleven separate simulations, one per chapter:
 *   l5-card-agreement-audit     where interest starts, and what a minimum due costs
 *   l5-broker-agreement-audit   the authorities you grant against the protections you keep
 *   l5-rent-agreement-audit     deposit, escalation, lock-in and the cost of leaving
 *   l5-hidden-cost-hunt         the headline price against the layers added later
 *   l5-fee-normaliser           every fee converted to one annual number
 *   l5-penalty-dispute          which charges are lawful, and what to dispute
 *   l5-clause-spotter           rate the clauses, then price the worst one
 *   l5-raise-negotiation        fixed pay, variable pay and non-cash terms in one frame
 *   l5-rent-negotiation         comparables, deposit and escalation against the total
 *   l5-loan-negotiation         four levers ranked by the rupees they actually save
 *   l5-freelance-rate           build a rate from costs, idle time and tax
 *
 * Facts used here were verified on 15 October 2026 and are linked from the
 * chapters: the interest-free period on a card being suspended once any balance
 * is carried forward, and the requirement that this be explained in the terms
 * and conditions; penal interest and late payment charges on a card becoming
 * payable only once the account has remained past due for more than three days;
 * zero liability for an unauthorised electronic transaction reported within
 * three working days, with liability capped at ₹10,000 for a card with a limit
 * up to ₹5 lakh and ₹25,000 above that when reported within four to seven
 * working days; card closure within seven working days with a ₹500-a-day
 * penalty for delay; the prohibition on compulsory bundling and on dark
 * patterns such as drip pricing, effective 1 January 2027 for commercial banks;
 * penalties on a loan levied as charges rather than interest, with no
 * capitalisation, since 1 January 2024; the bar on prepayment charges for
 * floating-rate loans to individuals and small enterprises from 1 January 2026;
 * and the securities-market advisory fee limits of a fixed amount per family per
 * year or 2.5% of assets under advice, excluding statutory charges. All amounts
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

const Debrief = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Panel>
    <p className="text-xs text-ink-300">
      <strong className="text-white">{title}.</strong> {children}
    </p>
  </Panel>
)

/* ------------------------------------------------------------------ l5-060 */

export function L5CardAgreementAudit() {
  const [spend, setSpend] = useState(60_000)
  const [carried, setCarried] = useState(40_000)
  const [rate, setRate] = useState(42)
  const [minimumShare, setMinimumShare] = useState(5)
  const [cashAdvance, setCashAdvance] = useState(0)
  const [annualFee, setAnnualFee] = useState(1_200)
  const [reportDays, setReportDays] = useState(2)
  const [cardLimit, setCardLimit] = useState(300_000)

  const monthlyRate = rate / 1200
  const interestOnCarried = carried * monthlyRate
  const minimumDue = Math.max(500, (spend * minimumShare) / 100)
  const monthsToClear = minimumDue > interestOnCarried ? Math.ceil(Math.log(1 - (carried * monthlyRate) / minimumDue) / Math.log(1 + monthlyRate)) : 999
  const cashFee = cashAdvance * 0.025
  const cashInterest = cashAdvance * monthlyRate
  const freePeriodLost = carried > 0 ? spend * monthlyRate : 0
  const totalCost = interestOnCarried + freePeriodLost + cashFee + cashInterest + annualFee
  const cappedLiability = cardLimit <= 500_000 ? 10_000 : 25_000
  const liability = reportDays <= 3 ? 0 : reportDays <= 7 ? cappedLiability : -1

  const checks = [
    {
      ok: carried === 0,
      text: carried === 0
        ? 'Nothing is carried forward, so the interest-free period survives and the next statement is simply the new spending.'
        : `Carrying ${rupees(carried)} forward costs ${rupees(interestOnCarried)} in interest this cycle, and it also ends the interest-free period on the new spending of ${rupees(spend)} — another ${rupees(freePeriodLost)}. Interest begins on the day of the transaction, not on the due date.`,
    },
    {
      ok: minimumShare >= 20,
      text: monthsToClear < 999
        ? `A minimum due of ${rupees(minimumDue)} against a balance of ${rupees(carried)} takes about ${monthsToClear} month(s) to clear, in which time most of what you pay is interest. The minimum is designed to keep the account current, not to repay the debt.`
        : `A minimum due of ${rupees(minimumDue)} is smaller than the interest of ${rupees(interestOnCarried)}, so the balance grows while you pay it. This is the arithmetic of a minimum-payment trap.`,
    },
    {
      ok: cashAdvance === 0,
      text: cashAdvance === 0
        ? 'No cash advance has been taken. It is the most expensive normal use of a card: a fee at the time of withdrawal and interest from that same day, with no interest-free period at all.'
        : `A cash advance of ${rupees(cashAdvance)} costs ${rupees(cashFee)} in fees and ${rupees(cashInterest)} in the first month, with no free period. Over a few months this is the most expensive money on the card.`,
    },
    {
      ok: reportDays <= 3,
      text: liability === 0
        ? 'Reporting within three working days of noticing an unauthorised transaction gives zero liability: the loss is the issuer’s, not yours, and the report itself is the evidence that matters.'
        : liability > 0
          ? `Reported on day ${reportDays}. Because the transaction was not caused by your negligence, liability is capped at ${rupees(cappedLiability)} for a card with this limit — but only because the report was made inside seven working days.`
          : `Reported on day ${reportDays}, beyond seven working days. Liability then follows the issuer’s policy, so a loss that could have been nil is now a negotiation.`,
    },
    {
      ok: totalCost < spend * 0.1,
      text: `Total cost of holding and using the card this year: ${rupees(totalCost)} against ${rupees(spend)} of spending. Fees and interest are the only part of a card that is not optional, which is why they are the part worth reading the terms and conditions for.`,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Read the terms, then the statement</h4>
          <div className="space-y-3">
            <Slider label="Spending this cycle" value={spend} min={5_000} max={400_000} step={5_000} onChange={setSpend} />
            <Slider label="Balance carried forward" value={carried} min={0} max={300_000} step={5_000} onChange={setCarried} />
            <Slider label="Annual rate charged" value={rate} min={18} max={54} step={1} onChange={setRate} format={(v) => `${v}%`} />
            <Slider label="Minimum due, as a share of the bill" value={minimumShare} min={2} max={30} step={1} onChange={setMinimumShare} format={(v) => `${v}%`} />
            <Slider label="Cash advance taken" value={cashAdvance} min={0} max={100_000} step={5_000} onChange={setCashAdvance} />
            <Slider label="Annual fee" value={annualFee} min={0} max={15_000} step={500} onChange={setAnnualFee} />
            <Slider label="Card limit" value={cardLimit} min={50_000} max={2_000_000} step={50_000} onChange={setCardLimit} />
            <Slider label="Days taken to report a fraud" value={reportDays} min={0} max={30} step={1} onChange={setReportDays} format={(v) => `${v} days`} />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Cost this year" value={rupeesShort(totalCost)} tone="bad" />
              <Stat label="Minimum due" value={rupees(minimumDue)} />
              <Stat label="Fraud liability" value={liability < 0 ? 'policy' : liability === 0 ? 'nil' : rupees(liability)} tone={liability === 0 ? 'good' : 'bad'} />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              <li>Interest on the carried balance: {rupees(interestOnCarried)}</li>
              <li>Free period lost on new spending: {rupees(freePeriodLost)}</li>
              <li>Cash advance fee and interest: {rupees(cashFee + cashInterest)}</li>
              <li>Charges on a past-due account apply only after three days past the due date</li>
              <li className="text-white">A carried balance suspends the interest-free period on everything else</li>
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

      <Debrief title="Debrief">
        A cardholder agreement is short and its consequences are long, because the cost of a card is not in the
        agreement at all — it is in the arithmetic of the cycle. Three clauses decide almost everything. The
        interest-free period applies only while nothing is carried forward; the moment a balance is carried, interest
        starts on new spending from the day of the transaction. The minimum due keeps the account current rather than
        repaying anything, which is why it is set as a small share of the bill. And cash advances have no free period
        at all, only a fee and interest from day one. Reading the schedule of charges tells you what each line costs;
        reading the liability rule tells you what to do in the first three working days after a fraud, when a prompt
        report is worth more than any argument you can make later.
      </Debrief>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-061 */

const BROKER_TERMS = [
  { key: 'debit', label: 'Authorise direct debits for obligations', kind: 'authority' },
  { key: 'squareoff', label: 'Let the broker square off positions', kind: 'authority' },
  { key: 'pledge', label: 'Pledge holdings for margin', kind: 'authority' },
  { key: 'tariff', label: 'Change charges by notice', kind: 'authority' },
  { key: 'arbitration', label: 'Settle disputes by arbitration', kind: 'authority' },
  { key: 'segregation', label: 'Keep client funds and securities apart', kind: 'protection' },
  { key: 'payout', label: 'Pay securities straight into your account', kind: 'protection' },
  { key: 'statements', label: 'Send contract notes and statements', kind: 'protection' },
  { key: 'grievance', label: 'Route complaints to the exchange', kind: 'protection' },
]

export function L5BrokerAgreementAudit() {
  const [granted, setGranted] = useState<string[]>(['debit', 'squareoff'])
  const [turnover, setTurnover] = useState(1_500_000)
  const [marginHeld, setMarginHeld] = useState(50_000)
  const [pledged, setPledged] = useState(100_000)
  const [daysToSettle, setDaysToSettle] = useState(7)

  const authorities = BROKER_TERMS.filter((t) => t.kind === 'authority')
  const protections = BROKER_TERMS.filter((t) => t.kind === 'protection')
  const grantedCount = authorities.filter((t) => granted.includes(t.key)).length
  const protectionCount = protections.filter((t) => granted.includes(t.key)).length
  const squareOffRisk = granted.includes('squareoff') ? pledged : 0
  const debited = granted.includes('debit') ? marginHeld : 0
  const stale = daysToSettle > 7
  const score = protectionCount - Math.max(0, grantedCount - 2)

  const checks = [
    {
      ok: granted.includes('segregation') && granted.includes('payout'),
      text: granted.includes('segregation') && granted.includes('payout')
        ? 'Client funds and securities are held apart from the firm’s own, and purchases are paid out to your depository account. These two are not favours the firm grants; they are obligations it carries, and the agreement should say so.'
        : 'The segregation and payout terms are not in the agreement you are reading. They are obligations the rules impose on the member, but a document that omits them is worth questioning before you sign it.',
    },
    {
      ok: !granted.includes('squareoff') || pledged < 200_000,
      text: granted.includes('squareoff')
        ? `A square-off right lets the firm close positions when a margin shortfall is not met. Here that reaches ${rupees(squareOffRisk)} of pledged holdings, so the practical question is whether you can fund a shortfall within the notice the agreement gives — usually the same day.`
        : 'No square-off right is granted, so a margin shortfall would be met through the exchange rather than by the firm closing your positions at a price it chooses.',
    },
    {
      ok: !stale,
      text: stale
        ? `The running account has been unsettled for ${daysToSettle} days. Unused client money must be settled back periodically rather than retained, so a balance sitting with the firm for weeks is a question for the firm, not a convenience.`
        : 'The running account is settled within the week, so unused money is returning to your bank rather than sitting with the firm.',
    },
    {
      ok: granted.includes('grievance') && granted.includes('arbitration'),
      text: granted.includes('grievance') && granted.includes('arbitration')
        ? 'Both escalation routes are in the document: a complaint to the exchange, and a defined dispute-resolution route. An agreement that names neither leaves a wrong trade without a forum.'
        : 'The escalation routes are incomplete. A broking agreement should name the route to the exchange and the route for adjudicating a dispute, including who bears the cost.',
    },
    {
      ok: score >= 2,
      text: `Authorities granted: ${grantedCount} of ${authorities.length}. Protections acknowledged: ${protectionCount} of ${protections.length}. Net position ${score >= 0 ? '+' : ''}${score}. The balance is the point: an authority clause without a matching protection is how a convenience becomes an exposure.`,
    },
    {
      ok: true,
      text: `A debiting authority here can reach ${rupees(debited)} of the money the firm holds for you, and the tariff clause means charges can change by notice. Both are normal, and both are worth knowing before the first shortfall.`,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">What the agreement does and does not say</h4>
          <div className="grid grid-cols-1 gap-2">
            {BROKER_TERMS.map((t) => (
              <Choice
                key={t.key}
                label={`${granted.includes(t.key) ? '✓ ' : ''}${t.label}${t.kind === 'protection' ? ' (protection)' : ''}`}
                active={granted.includes(t.key)}
                onClick={() => setGranted((prev) => (prev.includes(t.key) ? prev.filter((x) => x !== t.key) : [...prev, t.key]))}
              />
            ))}
          </div>
          <div className="mt-3 space-y-3">
            <Slider label="Turnover a year" value={turnover} min={100_000} max={20_000_000} step={100_000} onChange={setTurnover} />
            <Slider label="Money the firm holds for you" value={marginHeld} min={0} max={500_000} step={5_000} onChange={setMarginHeld} />
            <Slider label="Holdings pledged for margin" value={pledged} min={0} max={1_000_000} step={10_000} onChange={setPledged} />
            <Slider label="Days an unused balance has sat with the firm" value={daysToSettle} min={0} max={40} step={1} onChange={setDaysToSettle} format={(v) => `${v} days`} />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Authorities" value={`${grantedCount}/${authorities.length}`} tone={grantedCount <= 2 ? 'good' : 'bad'} />
              <Stat label="Protections" value={`${protectionCount}/${protections.length}`} tone={protectionCount >= 3 ? 'good' : 'bad'} />
              <Stat label="Exposed" value={rupeesShort(debited + squareOffRisk)} tone={debited + squareOffRisk > 0 ? 'bad' : 'good'} />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              <li>Authority to debit: {granted.includes('debit') ? rupees(marginHeld) : 'not granted'}</li>
              <li>Square-off reach: {granted.includes('squareoff') ? rupees(pledged) : 'not granted'}</li>
              <li>Client funds and securities must be segregated from the firm’s own</li>
              <li>Contract notes and statements are records you are entitled to</li>
              <li className="text-white">Read an authority clause as a power of attorney, because that is what it is</li>
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

      <Debrief title="Debrief">
        The agreement that opens a trading account reads like paperwork and behaves like a power of attorney. Three
        authorities matter: the right to debit money the firm holds for you, the right to square off positions when a
        margin shortfall is not met, and the right to change charges by notice. None of them is improper — they are how
        a member manages settlement risk — and each one is a decision you make at the counter, once. Against them sit
        protections that are not favours: client funds and securities held apart from the firm’s own balance sheet,
        the periodic return of unused money, the direct payout of purchases into your depository account, contract
        notes for every trade, and a route to the exchange when something goes wrong. Read the authorities, confirm the
        protections, and the document stops being fine print.
      </Debrief>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-062 */

export function L5RentAgreementAudit() {
  const [rent, setRent] = useState(35_000)
  const [depositMonths, setDepositMonths] = useState(6)
  const [escalation, setEscalation] = useState(8)
  const [lockIn, setLockIn] = useState(11)
  const [lockInPenalty, setLockInPenalty] = useState(2)
  const [notice, setNotice] = useState(2)
  const [maintenanceByOwner, setMaintenanceByOwner] = useState(true)
  const [registered, setRegistered] = useState(false)

  const deposit = (rent * depositMonths) / 100
  const depositCost = (deposit * 7) / 100
  const exitPenalty = (rent * lockInPenalty) / 100
  const yearOne = rent * 12
  const yearTwo = rent * 12 * (1 + escalation / 100)
  const escalationCost = yearTwo - yearOne
  const refundRisk = deposit * (registered ? 0.05 : 0.2)
  const noticeReady = notice >= 1 && lockIn <= 24

  const checks = [
    {
      ok: depositMonths <= 3,
      text: depositMonths <= 3
        ? `A deposit of ${depositMonths} month(s) is modest by current market practice, and it costs ${rupees(depositCost)} a year in interest you do not earn. Reduce the months before reducing the rent, because the deposit is the bigger cash commitment.`
        : `A deposit of ${rupees(deposit)} locks up cash that would otherwise earn about ${rupees(depositCost)} a year. Where a deposit is large, the clause that matters most is not its size but the conditions under which it may be deducted.`,
    },
    {
      ok: escalation <= 8,
      text: escalation <= 8
        ? `An escalation of ${escalation}% adds ${rupees(escalationCost)} in the second year. A cap written into the agreement is worth more than a discount in the first year, because it applies every year afterwards.`
        : `An escalation of ${escalation}% adds ${rupees(escalationCost)} in the second year and compounds from there. Ask for a cap, or a longer first-year freeze in exchange for accepting the rate.`,
    },
    {
      ok: noticeReady && lockInPenalty <= 2,
      text: `A lock-in of ${lockIn} months with a penalty of ${rupees(exitPenalty)} to leave early, against a notice period of ${notice} month(s). Read the two together: a lock-in decides when you may leave, and the notice period decides how long you keep paying after you say so.`,
    },
    {
      ok: maintenanceByOwner,
      text: maintenanceByOwner
        ? 'The owner bears society charges and structural repairs, so the monthly outgo is the rent and the utilities. Where the tenant takes on maintenance, the amount and its escalation should be written into the same clause as the rent.'
        : 'Maintenance sits with the tenant, which quietly adds to the monthly cost and usually escalates separately from the rent. Price it before agreeing to it.',
    },
    {
      ok: registered,
      text: registered
        ? 'The agreement is registered and stamped, which is what makes it enforceable on its own terms rather than evidence of a verbal arrangement. Registration also fixes the dates that decide a deposit dispute.'
        : `Unregistered, the agreement is weaker evidence, and the practical exposure is the deposit: about ${rupees(refundRisk)} of it sits on terms nobody has authenticated. Registration and stamping are the cheapest protection available in a tenancy.`,
    },
    {
      ok: clauseOrder(),
      text: `The order to negotiate in: decide what the deposit covers and when it returns, cap the escalation, agree the notice and lock-in together, settle who pays maintenance, and register the document. Then argue about the rent.`,
    },
  ]

  function clauseOrder() {
    return depositMonths <= 6 && escalation <= 8 && noticeReady
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Audit the terms before the rent</h4>
          <div className="space-y-3">
            <Slider label="Monthly rent" value={rent} min={5_000} max={200_000} step={1_000} onChange={setRent} />
            <Slider label="Deposit, in months" value={depositMonths} min={1} max={12} step={1} onChange={setDepositMonths} format={(v) => `${v} months`} />
            <Slider label="Annual escalation" value={escalation} min={0} max={20} step={1} onChange={setEscalation} format={(v) => `${v}%`} />
            <Slider label="Lock-in period" value={lockIn} min={0} max={36} step={1} onChange={setLockIn} format={(v) => `${v} months`} />
            <Slider label="Penalty to exit inside the lock-in" value={lockInPenalty} min={0} max={6} step={1} onChange={setLockInPenalty} format={(v) => `${v} months' rent`} />
            <Slider label="Notice period" value={notice} min={0} max={6} step={1} onChange={setNotice} format={(v) => `${v} months`} />
            <div className="flex flex-wrap gap-2">
              <Choice label="Owner pays maintenance" active={maintenanceByOwner} onClick={() => setMaintenanceByOwner((v) => !v)} />
              <Choice label="Agreement registered" active={registered} onClick={() => setRegistered((v) => !v)} />
            </div>
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Deposit" value={rupeesShort(deposit)} tone={depositMonths <= 3 ? 'good' : 'bad'} />
              <Stat label="Cost of the deposit" value={rupees(depositCost)} tone="bad" />
              <Stat label="Exit penalty" value={rupees(exitPenalty)} tone={exitPenalty > 0 ? 'bad' : 'good'} />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              <li>Year one rent: {rupees(yearOne)}</li>
              <li>Year two, after escalation: {rupees(yearTwo)}</li>
              <li>Deposit at risk without registration: about {rupees(refundRisk)}</li>
              <li>A rental agreement for a longer term is registered and stamped</li>
              <li className="text-white">Record the condition of the premises in writing and in photographs on day one</li>
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

      <Debrief title="Debrief">
        A tenancy is a contract with a stranger over the largest monthly cost most households have, and its decisive
        terms are rarely the rent. The deposit is the biggest single cash movement, so what it may be deducted for
        matters more than its size — and without registration and a written inventory, the deposit sits on
        recollection. The escalation is a compounding term: a cap is worth more than a first-year discount, because it
        repeats. The lock-in and the notice period have to be read together, since one decides when you may leave and
        the other how long you keep paying after you decide to. Maintenance is where a monthly outgo grows without
        looking like rent. Settle those five, register the document, and the rent becomes the easy part of the
        negotiation.
      </Debrief>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-063 */

export function L5HiddenCostHunt() {
  const [headline, setHeadline] = useState(500_000)
  const [processingFee, setProcessingFee] = useState(2)
  const [platformFee, setPlatformFee] = useState(6_000)
  const [bundledCover, setBundledCover] = useState(true)
  const [annualFee, setAnnualFee] = useState(2_000)
  const [exitPenalty, setExitPenalty] = useState(1)
  const [years, setYears] = useState(5)
  const [feeRevealedLate, setFeeRevealedLate] = useState(false)
  const [optIn, setOptIn] = useState(true)

  const processing = (headline * processingFee) / 100
  const cover = bundledCover ? headline * 0.035 : 0
  const coverInterest = (cover * 9 * years) / 100
  const exit = (headline * exitPenalty) / 100
  const oneOff = processing
  const recurring = (annualFee + platformFee) * years
  const trueCost = oneOff + recurring + cover + coverInterest
  const annualised = trueCost / years
  const share = (trueCost / headline) * 100
  const flags = [
    feeRevealedLate ? 'a fee revealed only at the end, which is drip pricing' : '',
    bundledCover && !optIn ? 'cover bundled in without a separate consent' : '',
    !optIn ? 'a consent screen that defaults to agreement' : '',
  ].filter(Boolean)

  const checks = [
    {
      ok: !feeRevealedLate,
      text: feeRevealedLate
        ? 'A fee that appears only after you have committed is drip pricing — a named practice, not a pricing choice. The rules require the key features, including fees and exit penalties, to be disclosed before consent is taken.'
        : 'Every charge has been stated up front, which is what the disclosure rules require: fees, risks, lock-in conditions and exit penalties, before consent rather than after commitment.',
    },
    {
      ok: !bundledCover || optIn,
      text: bundledCover
        ? optIn
          ? `Insurance of about ${rupees(cover)} has been added with your consent, and it is financed, so interest on it over ${years} years comes to ${rupees(coverInterest)}. Consent makes it lawful; arithmetic makes it worth pricing separately.`
          : 'Insurance has been added to the product without a separate, explicit consent. Compulsory bundling is prohibited, and consent must be an affirmative choice rather than a default you did not decline.'
        : 'No cover has been added to the product, so the entire cost here is the product itself.',
    },
    {
      ok: optIn,
      text: optIn
        ? 'Consent was given as an affirmative choice. Where a consent screen pre-selects its own answer, the buyer has not chosen anything — and that pattern is expressly addressed in the conduct rules.'
        : 'The default on a consent screen should be a refusal rather than agreement. A pre-selected option turns a decision into a failure to object.',
    },
    {
      ok: share < 8,
      text: `Headline ${rupees(headline)}. True cost ${rupees(trueCost)}, or ${annualised >= 0 ? rupees(annualised) : '0'} a year over ${years} years — ${share.toFixed(1)}% of the headline. The one-off items flatter a short comparison; the annual ones decide a long one.`,
    },
    {
      ok: true,
      text: `The layer that usually surprises people is the smallest-looking one: a recurring ${rupees(annualFee + platformFee)} a year becomes ${rupees(recurring)} over ${years} years. Convert every fee into an annual number before comparing two products.`,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Find the five layers under the headline</h4>
          <div className="space-y-3">
            <Slider label="Headline amount" value={headline} min={50_000} max={5_000_000} step={50_000} onChange={setHeadline} />
            <Slider label="Processing fee" value={processingFee} min={0} max={6} step={0.25} onChange={setProcessingFee} format={(v) => `${v.toFixed(2)}%`} />
            <Slider label="Platform fee a year" value={platformFee} min={0} max={24_000} step={500} onChange={setPlatformFee} />
            <Slider label="Annual charge" value={annualFee} min={0} max={20_000} step={500} onChange={setAnnualFee} />
            <Slider label="Exit penalty" value={exitPenalty} min={0} max={5} step={0.25} onChange={setExitPenalty} format={(v) => `${v.toFixed(2)}%`} />
            <Slider label="Years you keep it" value={years} min={1} max={20} step={1} onChange={setYears} format={(v) => `${v}`} />
            <div className="flex flex-wrap gap-2">
              <Choice label="Insurance bundled in" active={bundledCover} onClick={() => setBundledCover((v) => !v)} />
              <Choice label="Consent given separately" active={optIn} onClick={() => setOptIn((v) => !v)} />
              <Choice label="A fee shows up only at the end" active={feeRevealedLate} onClick={() => setFeeRevealedLate((v) => !v)} />
            </div>
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="True cost" value={rupeesShort(trueCost)} tone="bad" />
              <Stat label="A year" value={rupees(annualised)} />
              <Stat label="Share of headline" value={`${share.toFixed(1)}%`} tone={share < 8 ? 'good' : 'bad'} />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              <li>Processing fee: {rupees(processing)}</li>
              <li>Recurring charges over the term: {rupees(recurring)}</li>
              <li>Bundled cover: {rupees(cover)} plus {rupees(coverInterest)} of interest on it</li>
              <li>Exit penalty if you leave: {rupees(exit)}</li>
              <li>Practices flagged: {flags.length === 0 ? 'none' : flags.join('; ')}</li>
              <li className="text-white">Compulsory bundling and dark patterns such as drip pricing are prohibited in loan sales</li>
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

      <Debrief title="Debrief">
        A hidden charge is rarely hidden; it is disclosed somewhere you were not reading, at a moment when you had
        stopped comparing. The five layers are consistent across products: a processing fee taken at the start, a
        platform or convenience fee added at the point of payment, cover bundled into the product and financed so that
        interest is paid on it, annual charges that look trivial until they are multiplied by years, and an exit
        penalty that decides what leaving costs. Two practices have been given names because they recur: compulsory
        bundling, where one product is conditional on another, and drip pricing, where a fee surfaces after
        commitment. The response is a habit rather than vigilance — ask for the full schedule in writing, convert every
        line into an annual number, and let the annual number decide.
      </Debrief>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-064 */

export function L5FeeNormaliser() {
  const [amount, setAmount] = useState(2_000_000)
  const [oneOff, setOneOff] = useState(25_000)
  const [annualCharge, setAnnualCharge] = useState(1_200)
  const [pctFee, setPctFee] = useState(1.2)
  const [years, setYears] = useState(10)
  const [advisorMode, setAdvisorMode] = useState<'fixed' | 'assets'>('fixed')

  const oneOffAnnual = oneOff / years
  const pctAnnual = (amount * pctFee) / 100
  const advisoryFixed = Math.min(151_000, 60_000)
  const advisoryAssets = (amount * 2.5) / 100
  const advisory = advisorMode === 'fixed' ? advisoryFixed : Math.min(advisoryAssets, 151_000)
  const total = oneOffAnnual + annualCharge + pctAnnual + advisory
  const crossover = 151_000 / 0.025
  const effectivePct = (total / amount) * 100
  const flatBetter = advisoryFixed < advisoryAssets

  const checks = [
    {
      ok: oneOffAnnual < annualCharge * 2,
      text: `A one-off fee of ${rupees(oneOff)} over ${years} years is ${rupees(oneOffAnnual)} a year. Spreading it changes nothing about the fee, but it makes it comparable with the recurring charges beside it — which is the only way to see that a small annual amount can outweigh a large one-off.`,
    },
    {
      ok: pctAnnual / Math.max(1, annualCharge) < 100,
      text: `A ${pctFee.toFixed(2)}% charge on ${rupees(amount)} is ${rupees(pctAnnual)} a year, and it grows with the balance whether or not the service changes. A fixed charge of ${rupees(annualCharge)} does not, which is why percentages and flats cannot be compared directly at any single point in time.`,
    },
    {
      ok: advisorMode === 'assets' || amount < crossover,
      text: `Advisory fees are capped in the securities market: a fixed amount per family per year, or 2.5% of assets under advice, statutory charges excluded. On ${rupees(amount)} the asset-based fee is ${rupees(advisoryAssets)} against a fixed fee of ${rupees(advisoryFixed)}, so ${flatBetter ? 'the fixed mode is the cheaper structure' : 'the asset-based mode is inside its cap'}.`,
    },
    {
      ok: amount >= crossover || advisorMode === 'assets',
      text: `The two advisory structures cross at about ${rupeesShort(crossover)} of assets: above it, a flat annual fee is cheaper than a percentage; below it, the percentage is smaller in rupees and often fairer to the adviser. Neither structure is dishonest — but one of them has to be chosen deliberately.`,
    },
    {
      ok: effectivePct < 1.5,
      text: `All four fees together come to ${rupees(total)} a year, or ${effectivePct.toFixed(2)}% of the amount involved. That single number is the comparison: a provider quoting a lower headline rate with a longer list beneath it can still cost more than one that quotes a higher rate and nothing else.`,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">One denominator for every fee</h4>
          <div className="space-y-3">
            <Slider label="Amount involved" value={amount} min={100_000} max={20_000_000} step={100_000} onChange={setAmount} />
            <Slider label="One-time fee" value={oneOff} min={0} max={200_000} step={1_000} onChange={setOneOff} />
            <Slider label="Recurring charge a year" value={annualCharge} min={0} max={50_000} step={500} onChange={setAnnualCharge} />
            <Slider label="Charge as a share of the balance" value={pctFee} min={0} max={3} step={0.05} onChange={setPctFee} format={(v) => `${v.toFixed(2)}%`} />
            <Slider label="Years held" value={years} min={1} max={30} step={1} onChange={setYears} format={(v) => `${v}`} />
            <div className="flex flex-wrap gap-2">
              <Choice label="Adviser: flat annual fee" active={advisorMode === 'fixed'} onClick={() => setAdvisorMode('fixed')} />
              <Choice label="Adviser: share of assets" active={advisorMode === 'assets'} onClick={() => setAdvisorMode('assets')} />
            </div>
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Total a year" value={rupeesShort(total)} tone="bad" />
              <Stat label="As a share" value={`${effectivePct.toFixed(2)}%`} />
              <Stat label="Crossover" value={rupeesShort(crossover)} />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              <li>One-off fee, annualised: {rupees(oneOffAnnual)}</li>
              <li>Recurring charge: {rupees(annualCharge)}</li>
              <li>Balance-based charge: {rupees(pctAnnual)}</li>
              <li>Advisory fee: {rupees(advisory)} ({advisorMode === 'fixed' ? 'flat mode' : 'asset mode'})</li>
              <li className="text-white">Fee limits exclude statutory charges, so taxes sit on top</li>
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

      <Debrief title="Debrief">
        Fees are quoted in units that cannot be compared: a percentage here, a flat amount there, a one-off at the
        start and a recurring charge every year after it. Normalising them changes nothing about what you pay and
        everything about what you can see. A one-off fee divided by the years you will hold the product becomes an
        annual number; a percentage of the balance is already annual and grows with the balance regardless of the
        service; a flat fee stays flat, which is why it wins as the amount involved rises. The advisory market makes the
        trade-off concrete, because the caps allow either structure and the crossover sits at a portfolio size you can
        calculate. Then the last step is the honest one: ask whether the service is worth the annual number, and if it
        is not, the fee was never the problem.
      </Debrief>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-065 */

type PenaltyKind = 'card' | 'loan' | 'nach' | 'cheque'

export function L5PenaltyDispute() {
  const [kind, setKind] = useState<PenaltyKind>('card')
  const [amount, setAmount] = useState(120_000)
  const [missed, setMissed] = useState(45_000)
  const [daysLate, setDaysLate] = useState(1)
  const [charged, setCharged] = useState(1_000)
  const [rate, setRate] = useState(18)
  const [compounded, setCompounded] = useState(false)
  const [escalated, setEscalated] = useState(false)

  const monthlyRate = rate / 1200
  const penalInterest = missed * monthlyRate
  const capitalised = compounded ? penalInterest * 1.8 : 0
  const lawful =
    kind === 'card'
      ? daysLate > 3
        ? charged
        : 0
      : kind === 'loan'
        ? penalInterest + Math.min(charged, missed * 0.1)
        : kind === 'nach'
          ? daysLate > 0
            ? charged
            : 0
          : daysLate > 0
            ? charged + amount * 0.01
            : 0
  const disputed = Math.max(0, charged + capitalised - lawful)
  const disputeWindow = kind === 'card' ? 30 : 60

  const checks = [
    {
      ok: !(kind === 'card' && daysLate <= 3 && charged > 0),
      text:
        kind === 'card'
          ? daysLate <= 3
            ? `The account is ${daysLate} day(s) past the due date. A late payment charge and penal interest on a card become payable only once the account has stayed past due for more than three days, so a charge of ${rupees(charged)} at this point is disputable rather than payable.`
            : `At ${daysLate} days past due the account is beyond the three-day window, so the late payment charge of ${rupees(charged)} and penal interest of ${rupees(penalInterest)} are payable. The three days are a grace period, not an amnesty.`
          : kind === 'loan'
            ? `On a loan, a penalty is levied as a charge rather than by raising the rate on the whole loan, and it may not be capitalised. Charged ${rupees(charged)} and penal interest ${rupees(penalInterest)}; the lawful amount here is about ${rupees(lawful)}, so ${rupees(disputed)} is worth disputing.`
            : kind === 'nach'
              ? `A mandate that bounces carries a charge from the bank plus the lender’s own charge, and the two are separate line items. Check both against the schedule of charges before accepting either.`
              : `A dishonoured cheque carries a bank charge and can carry a notice under the dishonour provisions. This is the one penalty with legal consequences beyond money, so it is worth preventing rather than disputing.`,
    },
    {
      ok: !compounded,
      text: compounded
        ? `The penalty has been added to the principal and interest charged on it — ${rupees(capitalised)} of extra interest on a penalty of ${rupees(penalInterest)} alone. On a loan, penal charges may not be capitalised: a penalty is a one-time charge, not a new loan.`
        : 'The penalty has been levied as a one-time charge and not added to the balance, which is what the rules require on a loan: a penal charge rather than a rate added to the whole amount.',
    },
    {
      ok: daysLate <= 3 || kind !== 'card',
      text: `Days past due: ${daysLate}. For a card the number that matters is three; for a loan it is the number in the schedule of charges. Reading which one applies to this product is most of the dispute.`,
    },
    {
      ok: escalated || disputed === 0,
      text: escalated
        ? 'The charge has been escalated through the lender’s grievance route with the statement as evidence, which is what makes a refusal to reverse it reviewable.'
        : disputed > 0
          ? `About ${rupees(disputed)} remains disputed. The route is the lender’s grievance channel first, then the ombudsman, if any, and the statement entry that shows the charge is the whole of the evidence you need.`
          : 'Nothing here is worth disputing: the charge is within the schedule and the rules.',
    },
    {
      ok: true,
      text: `Keep the statements that show the charge and the date it was levied. Disputes are won with the ledger, not with reasoning: a charge that cannot be found in the schedule, or that was levied inside a grace period, is the kind that gets reversed.`,
    },
  ]

  const kinds: { key: PenaltyKind; label: string }[] = [
    { key: 'card', label: 'A card payment is late' },
    { key: 'loan', label: 'A loan instalment is late' },
    { key: 'nach', label: 'An auto-debit bounces' },
    { key: 'cheque', label: 'A cheque is dishonoured' },
    { key: 'card', label: 'Card, again, now past three days' },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Which penalty, and is it payable?</h4>
          <div className="mb-3 flex flex-wrap gap-2">
            {kinds.slice(0, 4).map((k) => (
              <Choice key={k.label} label={k.label} active={kind === k.key} onClick={() => setKind(k.key)} />
            ))}
          </div>
          <div className="space-y-3">
            <Slider label="Amount borrowed or billed" value={amount} min={10_000} max={5_000_000} step={10_000} onChange={setAmount} />
            <Slider label="Instalment or bill missed" value={missed} min={1_000} max={500_000} step={1_000} onChange={setMissed} />
            <Slider label="Days past the due date" value={daysLate} min={0} max={90} step={1} onChange={setDaysLate} format={(v) => `${v} days`} />
            <Slider label="Charge actually levied" value={charged} min={0} max={8_000} step={100} onChange={setCharged} />
            <Slider label="Rate applied" value={rate} min={6} max={48} step={1} onChange={setRate} format={(v) => `${v}%`} />
            <div className="flex flex-wrap gap-2">
              <Choice label="Penalty added to the balance" active={compounded} onClick={() => setCompounded((v) => !v)} />
              <Choice label="Escalated through the grievance route" active={escalated} onClick={() => setEscalated((v) => !v)} />
            </div>
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Lawful" value={rupees(Math.round(lawful))} tone="good" />
              <Stat label="Disputed" value={rupees(Math.round(disputed))} tone={disputed > 0 ? 'bad' : 'good'} />
              <Stat label="Window to raise it" value={`${disputeWindow} days`} />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              <li>Penal charge levied: {rupees(charged)}</li>
              <li>Penal interest on a late instalment: {rupees(Math.round(penalInterest))}</li>
              <li>Interest on the penalty itself: {rupees(Math.round(capitalised))}</li>
              <li>On a card, charges apply once the account is more than three days past due</li>
              <li className="text-white">On a loan, penalties are charges and are never capitalised</li>
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

      <Debrief title="Debrief">
        Penalties are the part of a contract nobody reads until it applies, and the rules have made the boundaries
        unusually crisp. On a card, a late payment charge and penal interest become payable only once the account has
        stayed past due for more than three days — inside that window there is nothing to pay, and a charge levied
        inside it is the easiest reversal you will ever get. On a loan, a penalty is levied as a charge rather than by
        raising the rate on the whole loan, and it may not be capitalised, so interest on a penalty is itself
        disputable. A bounced mandate carries two separate charges from two institutions, and a dishonoured cheque is
        the one penalty with consequences beyond money. In every case the dispute is the same: find the charge in the
        schedule, compare the date, and escalate with the statement rather than with an argument.
      </Debrief>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-066 */

const CLAUSES = [
  { key: 'indemnity', label: 'You indemnify the firm against all losses', risk: 3 },
  { key: 'variation', label: 'Terms may change on notice at the firm’s discretion', risk: 2 },
  { key: 'arbitration', label: 'Disputes go to arbitration, at your cost', risk: 2 },
  { key: 'renewal', label: 'The contract renews automatically unless cancelled', risk: 2 },
  { key: 'liability', label: 'The firm’s liability is capped at the fees paid', risk: 3 },
  { key: 'governing', label: 'Governing law and a named jurisdiction', risk: 0 },
  { key: 'notice', label: 'Either side may exit on thirty days’ notice', risk: 0 },
]

export function L5ClauseSpotter() {
  const [flagged, setFlagged] = useState<string[]>([])
  const [exposure, setExposure] = useState(1_500_000)
  const [feesPaid, setFeesPaid] = useState(40_000)
  const [renewals, setRenewals] = useState(1)

  const flaggedRisks = CLAUSES.filter((c) => flagged.includes(c.key) && c.risk > 0)
  const missed = CLAUSES.filter((c) => !flagged.includes(c.key) && c.risk > 0)
  const overFlagged = CLAUSES.filter((c) => flagged.includes(c.key) && c.risk === 0)
  const liabilityCap = feesPaid
  const uncapped = CLAUSES.find((c) => c.key === 'indemnity')
  const indemnityOpen = uncapped ? !flagged.includes('indemnity') : false
  const renewalCost = feesPaid * renewals
  const score = flaggedRisks.length * 2 - missed.length * 2 - overFlagged.length

  const checks = [
    {
      ok: !indemnityOpen,
      text: indemnityOpen
        ? `An indemnity clause that runs one way, with no cap, is the most expensive sentence in most contracts here: it can reach your whole exposure of ${rupees(exposure)} while the firm’s own liability is limited to the ${rupees(liabilityCap)} of fees it has collected. Read the two clauses together — that pairing, not either clause alone, is the real term.`
        : 'The one-way indemnity has been flagged, which is the clause to negotiate hardest: an indemnity should be mutual, and where it cannot be, it should be capped at the fees paid.',
    },
    {
      ok: !missed.some((c) => c.key === 'liability' || c.key === 'variation'),
      text: flagged.includes('variation')
        ? 'The unilateral variation clause has been flagged. Terms that may be changed by notice include the price, so what matters is how much notice and whether you may exit without penalty when a change is made.'
        : 'A clause allowing terms to change at the firm’s discretion is still unflagged. If the price is inside the variable terms, the number you agreed is not the number you will pay.',
    },
    {
      ok: flagged.includes('renewal') || renewals === 0,
      text: flagged.includes('renewal')
        ? `Auto-renewal has been flagged. With ${renewals} renewal(s) already gone through, ${rupees(renewalCost)} has been paid for a service nobody decided to continue — the cost of a default, not of a choice.`
        : `Auto-renewal is unflagged, and ${renewals} renewal(s) have already happened unseen, worth ${rupees(renewalCost)}. A renewal clause converts your silence into consent; a calendar note converts it back.`,
    },
    {
      ok: overFlagged.length === 0,
      text: overFlagged.length === 0
        ? 'The routine clauses — governing law, jurisdiction, a mutual exit on notice — have been left unflagged. Treating every clause as a trap makes the two that matter invisible.'
        : `You flagged ${overFlagged.length} routine clause(s): governing law, jurisdiction and a mutual exit on notice are standard and usually protective. The skill is spotting the few that move money, not the many that fill the page.`,
    },
    {
      ok: score >= 4,
      text: `Risk clauses spotted: ${flaggedRisks.length} of ${CLAUSES.filter((c) => c.risk > 0).length}. Unflagged: ${missed.length}. Score ${score >= 0 ? '+' : ''}${score}. Exposure at stake here: ${rupees(exposure)}, against a liability capped at ${rupees(liabilityCap)} — the asymmetry is the thing to remember.`,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Mark the clauses that move money</h4>
          <div className="grid grid-cols-1 gap-2">
            {CLAUSES.map((c) => (
              <Choice
                key={c.key}
                label={`${flagged.includes(c.key) ? '⚑ ' : ''}${c.label}`}
                active={flagged.includes(c.key)}
                onClick={() => setFlagged((p) => (p.includes(c.key) ? p.filter((x) => x !== c.key) : [...p, c.key]))}
              />
            ))}
          </div>
          <div className="mt-3 space-y-3">
            <Slider label="What is at stake in this contract" value={exposure} min={50_000} max={20_000_000} step={50_000} onChange={setExposure} />
            <Slider label="Fees paid to the firm" value={feesPaid} min={0} max={500_000} step={5_000} onChange={setFeesPaid} />
            <Slider label="Renewals that passed unnoticed" value={renewals} min={0} max={6} step={1} onChange={setRenewals} format={(v) => `${v}`} />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Spotted" value={`${flaggedRisks.length}`} tone={flaggedRisks.length >= 3 ? 'good' : 'bad'} />
              <Stat label="Missed" value={`${missed.length}`} tone={missed.length === 0 ? 'good' : 'bad'} />
              <Stat label="Firm's liability cap" value={rupeesShort(liabilityCap)} tone="bad" />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              <li>Your exposure under a one-way indemnity: {rupees(exposure)}</li>
              <li>The firm’s exposure: capped at {rupees(liabilityCap)}</li>
              <li>Paid through auto-renewal: {rupees(renewalCost)}</li>
              <li>Routine clauses: governing law, jurisdiction, mutual exit</li>
              <li className="text-white">Read the indemnity and the liability cap in the same breath</li>
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

      <Debrief title="Debrief">
        Contracts are long because clauses are cheap to add and because length is itself a negotiating tactic, but
        the disputes that reach a hearing cluster around four kinds of clause: an indemnity that runs only one way, a
        liability cap that holds the other side’s exposure to the fees it collected, a variation clause that lets
        the price change by notice, and an auto-renewal that converts your silence into consent. Those four decide the
        money. A fifth — arbitration, with who pays and where — decides whether a dispute is worth starting at all.
        Everything else on the page, governing law and jurisdiction included, is usually standard and often
        protective. So the skill is not reading every word; it is finding the handful of clauses that move money,
        reading them against each other, and negotiating the pairing rather than the sentence.
      </Debrief>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-067 */

function newRegimeTax(income: number) {
  const slabs: [number, number][] = [
    [400_000, 0],
    [800_000, 0.05],
    [1_200_000, 0.1],
    [1_600_000, 0.15],
    [2_000_000, 0.2],
    [2_400_000, 0.25],
    [Infinity, 0.3],
  ]
  const taxable = Math.max(0, income - 75_000)
  let tax = 0
  let lower = 0
  for (const [upper, rate] of slabs) {
    if (taxable > lower) {
      tax += (Math.min(taxable, upper) - lower) * rate
      lower = upper
    }
  }
  return tax
}

export function L5RaiseNegotiation() {
  const [ctc, setCtc] = useState(1_200_000)
  const [market, setMarket] = useState(1_500_000)
  const [performance, setPerformance] = useState(4)
  const [ask, setAsk] = useState(15)
  const [variableShare, setVariableShare] = useState(15)
  const [noticeMonths, setNoticeMonths] = useState(2)
  const [written, setWritten] = useState(false)

  const fixedNow = ctc * (1 - variableShare / 100)
  const askAmount = (fixedNow * ask) / 100
  const newFixed = fixedNow + askAmount
  const newCtc = newFixed / (1 - variableShare / 100)
  const taxNow = newRegimeTax(fixedNow)
  const taxNew = newRegimeTax(newFixed)
  const takeHomeNow = fixedNow - taxNow
  const takeHomeNew = newFixed - taxNew
  const netGain = takeHomeNew - takeHomeNow
  const gapToMarket = market - newCtc
  const atMarket = newCtc >= market
  const evidenceStrong = performance >= 4

  const checks = [
    {
      ok: evidenceStrong,
      text: evidenceStrong
        ? 'The ask is supported by evidence: outcomes delivered, comparable roles in the market, and what a replacement would cost. Evidence converts a request into a market correction, which is a different conversation from a personal one.'
        : 'Nothing in the ask points to delivered outcomes or comparable pay, so it lands as an appeal rather than a case. Collect prices for the role before asking for a raise: adverts, offers and internal bands can usually be found.',
    },
    {
      ok: ask <= 20,
      text: ask <= 20
        ? `An ask of ${ask}% is ${rupees(askAmount)} on fixed pay. Asking inside the range the market can justify keeps the conversation on the reason rather than on the size of the request.`
        : `An ask of ${ask}% is ${rupees(askAmount)} on fixed pay, which reads as a new job rather than a correction. A first ask far outside the market band invites a refusal that becomes the floor.`,
    },
    {
      ok: variableShare <= 20,
      text: variableShare <= 20
        ? `Variable pay is ${variableShare}% of the package, so the fixed share is ${rupees(fixedNow)}. That is the part which compounds: it sets the base for every future percentage, provident fund contributions and loan assessments.`
        : `Variable pay is ${variableShare}% of the package. A high variable share moves in the employer’s favour in a bad year and takes the increment conversation with it, since increments are usually applied to fixed pay alone.`,
    },
    {
      ok: atMarket,
      text: atMarket
        ? `At ${rupees(newCtc)} the package is at or above the market reference of ${rupees(market)}. The next conversation is no longer about pay but about the terms beside it — the notice period, the leave, the provident fund basis, the written record.`
        : `At ${rupees(newCtc)} the package is still ${rupees(gapToMarket)} below the market reference. That gap is the argument, and it belongs to the market rather than to need: the same sentence that says “I would like more” becomes “this role is paid this much”.`,
    },
    {
      ok: written,
      text: written
        ? `The agreement is in writing: fixed pay, variable basis, review date and notice. A raise that exists only in a conversation reappears, at the next review, as a misunderstanding — and the written version is the one that survives a change of manager.`
        : 'The agreement has not been put in writing. An agreed raise that is not documented is enforced by the manager’s memory, which is not the party you are relying on.',
    },
    {
      ok: netGain > 0,
      text: `A rise of ${rupees(askAmount)} on fixed pay adds about ${rupees(netGain)} of take-home a year, because tax takes the rest. Quoting the net figure is what makes both sides discuss the same number.`,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Build the case, then the number</h4>
          <div className="space-y-3">
            <Slider label="Package now" value={ctc} min={300_000} max={10_000_000} step={50_000} onChange={setCtc} />
            <Slider label="Market reference for the role" value={market} min={300_000} max={15_000_000} step={50_000} onChange={setMarket} />
            <Slider label="Performance score last cycle" value={performance} min={1} max={5} step={1} onChange={setPerformance} format={(v) => `${v} of 5`} />
            <Slider label="Ask, on fixed pay" value={ask} min={0} max={40} step={1} onChange={setAsk} format={(v) => `${v}%`} />
            <Slider label="Variable share of the package" value={variableShare} min={0} max={40} step={1} onChange={setVariableShare} format={(v) => `${v}%`} />
            <Slider label="Notice period you would owe" value={noticeMonths} min={0} max={6} step={1} onChange={setNoticeMonths} format={(v) => `${v} months`} />
            <Choice label="Outcome documented in writing" active={written} onClick={() => setWritten((v) => !v)} />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Fixed pay now" value={rupeesShort(fixedNow)} />
              <Stat label="New package" value={rupeesShort(newCtc)} tone={atMarket ? 'good' : 'bad'} />
              <Stat label="Extra take-home" value={rupees(netGain)} tone="good" />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              <li>Rise on fixed pay: {rupees(askAmount)}</li>
              <li>Market reference: {rupees(market)}</li>
              <li>Gap after the rise: {rupees(gapToMarket)}</li>
              <li>Notice owed if you leave: {noticeMonths} month(s)</li>
              <li className="text-white">Increments usually apply to fixed pay, so weight fixed pay heavily</li>
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

      <Debrief title="Debrief">
        Pay negotiations are won on the structure of the package before they are won on the number. Fixed pay is the
        part that compounds — it sets every future percentage, the basis for provident fund, and what a lender
        assesses — while variable pay moves with the employer’s year and is usually left out of increments. So the
        first question about an offer is not its size but its split. The second is the evidence: an ask supported by
        delivered outcomes and comparable pay is a market correction, and a market correction is a legitimate reason.
        The third is tax, because the same rise is a smaller take-home figure, and discussing the net amount prevents
        two sides arguing from two different totals. The last step is writing it down: fixed pay, variable basis,
        review date, notice. An agreement that lives only in a conversation does not survive a change of manager.
      </Debrief>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-068 */

export function L5RentNegotiation() {
  const [quotedRent, setQuotedRent] = useState(42_000)
  const [comparableRent, setComparableRent] = useState(36_000)
  const [depositMonths, setDepositMonths] = useState(6)
  const [brokerage, setBrokerage] = useState(1)
  const [escalation, setEscalation] = useState(10)
  const [movingCost, setMovingCost] = useState(25_000)
  const [years, setYears] = useState(3)
  const [renewalLeverage, setRenewalLeverage] = useState(false)

  const deposit = (quotedRent * depositMonths) / 100
  const depositDiscount = (deposit * 0.07) / 100
  const brokerageCost = quotedRent * brokerage
  const yearOne = quotedRent * 12 + brokerageCost + movingCost
  let tenure = 0
  let rent = quotedRent
  for (let y = 0; y < years; y++) {
    tenure += rent * 12
    rent *= 1 + escalation / 100
  }
  tenure += depositDiscount
  const comparableTotal = comparableRent * 12 + brokerageCost
  const gap = quotedRent - comparableRent
  const ask = gap > 0 ? ((gap / quotedRent) * 100).toFixed(1) : '0'
  const depositSavingPossible = (quotedRent * 3) / 100

  const checks = [
    {
      ok: gap <= 0,
      text: gap <= 0
        ? `The quoted rent is at or below the comparable rent of ${rupees(comparableRent)}, so the negotiation is about terms rather than the number: deposit months, escalation and the notice period.`
        : `The quoted rent is ${rupees(gap)} a month above a directly comparable home, which is ${ask}% — that difference, not the rent itself, is the ask. Negotiating from comparables gives the owner a decision to make rather than a favour to grant.`,
    },
    {
      ok: depositMonths <= 3,
      text: depositMonths <= 3
        ? `A deposit of ${depositMonths} month(s) costs ${rupees(depositDiscount)} a year in foregone interest, and it is the number to trade against a slightly higher rent rather than to defend for its own sake.`
        : `A deposit of ${rupees(deposit)} costs about ${rupees(depositDiscount)} a year while it sits with the owner. Reducing ${depositMonths} months to three would release ${rupees(depositSavingPossible)} — often a bigger win than the monthly rent, and one owners concede more easily.`,
    },
    {
      ok: escalation <= 8,
      text: escalation <= 8
        ? `An escalation of ${escalation}% keeps the tenure cost near ${rupees(tenure)} over ${years} years. A written cap is the term that keeps paying after the first year.`
        : `An escalation of ${escalation}% takes the cost of ${years} years to ${rupees(tenure)}. An owner will usually trade a first-year discount for a higher escalation, because the escalation is the part that lasts — invert the trade and ask for the cap instead.`,
    },
    {
      ok: brokerage <= 0.5 && movingCost < quotedRent * 0.5,
      text: `Brokerage of ${rupees(brokerageCost)} and moving costs of ${rupees(movingCost)} are part of year one, so a rent that looks ${rupees(quotedRent)} a month cheaper elsewhere has to be held for several months before the saving exceeds the cost of moving.`,
    },
    {
      ok: renewalLeverage || years <= 3,
      text: renewalLeverage
        ? 'Renewal has been planned as leverage: a tenant who has paid on time, stayed two years and quotes the market rate of the neighbourhood at renewal is asking for a decision the owner can defend to nobody.'
        : `Across ${years} years the total cost is ${rupees(tenure)}. The strongest moment in a tenancy is renewal, because the alternative to a modest increase is a vacancy, redecorating and a broker fee — worth mentioning before the increase is set, not after.`,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Negotiate the total, not the rent</h4>
          <div className="space-y-3">
            <Slider label="Quoted rent" value={quotedRent} min={5_000} max={200_000} step={1_000} onChange={setQuotedRent} />
            <Slider label="Comparable rent nearby" value={comparableRent} min={5_000} max={200_000} step={1_000} onChange={setComparableRent} />
            <Slider label="Deposit, in months" value={depositMonths} min={1} max={12} step={1} onChange={setDepositMonths} format={(v) => `${v} months`} />
            <Slider label="Brokerage, in months' rent" value={brokerage} min={0} max={2} step={0.25} onChange={setBrokerage} format={(v) => `${v}`} />
            <Slider label="Annual escalation" value={escalation} min={0} max={20} step={1} onChange={setEscalation} format={(v) => `${v}%`} />
            <Slider label="Cost of moving" value={movingCost} min={0} max={150_000} step={5_000} onChange={setMovingCost} />
            <Slider label="Years you expect to stay" value={years} min={1} max={10} step={1} onChange={setYears} format={(v) => `${v}`} />
            <Choice label="Renewal planned as leverage" active={renewalLeverage} onClick={() => setRenewalLeverage((v) => !v)} />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Year one" value={rupeesShort(yearOne)} tone="bad" />
              <Stat label={`${years} years`} value={rupeesShort(tenure)} tone="bad" />
              <Stat label="Gap to market" value={gap > 0 ? rupees(gap) : 'at market'} tone={gap <= 0 ? 'good' : 'bad'} />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              <li>Annual cost of the deposit: {rupees(depositDiscount)}</li>
              <li>Brokerage: {rupees(brokerageCost)}</li>
              <li>Moving in and out: {rupees(movingCost)}</li>
              <li>Comparable year one, excluding your deposit terms: {rupees(comparableTotal)}</li>
              <li className="text-white">Deposit months, escalation and notice are the negotiable clauses</li>
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

      <Debrief title="Debrief">
        Rent is the line item everybody negotiates and rarely the one that moves the most. The total occupancy cost is
        the rent plus the deposit’s opportunity cost plus brokerage plus the cost of moving in and later out, and
        across a few years the escalation compounds inside it. That ordering changes the conversation: a deposit
        reduced from six months to three releases more cash than a modest rent discount, and an escalation capped is
        worth more in year three than a discount in year one. Comparables turn a request into evidence, which is why
        the strongest sentence in a tenancy negotiation is not what the rent should be but what an equivalent home is
        actually going for. And renewal, before the increase is set, is the one moment where the bargaining positions
        come closest to equal.
      </Debrief>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-069 */

export function L5LoanNegotiation() {
  const [amount, setAmount] = useState(2_500_000)
  const [rate, setRate] = useState(9)
  const [tenure, setTenure] = useState(15)
  const [feePct, setFeePct] = useState(1)
  const [prepay, setPrepay] = useState(0)
  const [rateCut, setRateCut] = useState(0.5)

  const emi = (p: number, r: number, y: number) => {
    const i = r / 1200
    const n = y * 12
    return i === 0 ? p / n : (p * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1)
  }
  const interestOf = (p: number, r: number, y: number, upfront = 0) => {
    const base = emi(p, r, y) * y * 12 - p
    return base + upfront
  }

  const base = interestOf(amount, rate, tenure, (amount * feePct) / 100)
  const rateCutTotal = interestOf(amount, rate - rateCut, tenure, (amount * feePct) / 100)
  const longerTotal = interestOf(amount, rate, tenure + 5, (amount * feePct) / 100)
  const feeWaivedTotal = interestOf(amount, rate, tenure, 0)
  const prepayInterest = interestOf(Math.max(0, amount - prepay), rate, Math.max(1, tenure - Math.round((prepay / amount) * tenure * 0.8)), 0)

  const levers = [
    { label: `Rate lower by ${rateCut.toFixed(2)}%`, save: base - rateCutTotal },
    { label: `Tenure longer by five years`, save: base - longerTotal },
    { label: `Fees waived`, save: base - feeWaivedTotal },
    { label: `${rupees(prepay)} prepaid and tenure cut`, save: base - prepayInterest },
  ].sort((a, b) => b.save - a.save)

  const checks = [
    {
      ok: true,
      text: `On ${rupees(amount)} at ${rate}% over ${tenure} years the instalment is ${rupees(emi(amount, rate, tenure))} and the total interest is ${rupees(interestOf(amount, rate, tenure))}. Always compare the total repaid: the instalment is what the cash flow feels, the total is what the loan costs.`,
    },
    {
      ok: longerTotal >= base,
      text: longerTotal >= base
        ? `Stretching the tenure to ${tenure + 5} years lowers the instalment but raises the total to ${rupees(longerTotal)}, costing ${rupees(longerTotal - base)} more. A longer tenure buys breathing room and pays for it in interest — the right choice for cash flow, the wrong one for cost.`
        : 'A longer tenure has not been modelled, so the trade-off between breathing room and total cost is not visible here.',
    },
    {
      ok: feeWaivedTotal < base,
      text: `Waiving the fee of ${rupees((amount * feePct) / 100)} is a one-time saving you can ask for at sanction, when the bank is still competing for the file. It is the cheapest concession to win and the easiest to forget.`,
    },
    {
      ok: prepay === 0 || prepayInterest <= base,
      text: prepay > 0
        ? `Prepaying ${rupees(prepay)} cuts the total to about ${rupees(prepayInterest)}, a saving of ${rupees(base - prepayInterest)}. On a floating-rate loan to an individual, prepayment no longer carries a charge, which is what makes it the strongest lever available to you.`
        : 'No prepayment is modelled. Even a small annual prepayment shortens the term far more than it reduces the instalment, because every rupee prepaid removes all the future interest on it.',
    },
    {
      ok: rateCut > 0,
      text: `Ranked by rupees saved: ${levers.map((l) => `${l.label} (${rupees(Math.round(l.save))})`).join(', ')}. The order changes with the loan, which is why the ranking is worth computing rather than assuming.`,
    },
    {
      ok: true,
      text: 'A balance transfer is worth doing only if the saving over the remaining term exceeds the transfer fee, the new processing charge and the cost of the paperwork. Price it as a new loan rather than as an escape.',
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Four levers, one total</h4>
          <div className="space-y-3">
            <Slider label="Loan amount" value={amount} min={100_000} max={20_000_000} step={100_000} onChange={setAmount} />
            <Slider label="Rate" value={rate} min={6} max={24} step={0.1} onChange={setRate} format={(v) => `${v.toFixed(2)}%`} />
            <Slider label="Tenure" value={tenure} min={1} max={30} step={1} onChange={setTenure} format={(v) => `${v} years`} />
            <Slider label="Processing fee" value={feePct} min={0} max={3} step={0.1} onChange={setFeePct} format={(v) => `${v.toFixed(2)}%`} />
            <Slider label="Prepayment planned" value={prepay} min={0} max={2_000_000} step={50_000} onChange={setPrepay} />
            <Slider label="Rate reduction negotiated" value={rateCut} min={0} max={3} step={0.05} onChange={setRateCut} format={(v) => `${v.toFixed(2)}%`} />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Instalment" value={rupees(emi(amount, rate, tenure))} />
              <Stat label="Total interest" value={rupeesShort(interestOf(amount, rate, tenure))} tone="bad" />
              <Stat label="Fee" value={rupees((amount * feePct) / 100)} />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              {levers.map((l) => (
                <li key={l.label}>
                  {l.label}: {l.save >= 0 ? 'saves ' : 'costs '}
                  {rupees(Math.abs(Math.round(l.save)))}
                </li>
              ))}
              <li>No prepayment charge on floating-rate loans to individuals and small enterprises</li>
              <li className="text-white">Rank the levers by rupees before asking for any of them</li>
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

      <Debrief title="Debrief">
        A loan negotiation has four levers and only one number that matters. The rate is the largest lever and the one
        most visible in comparisons, which is why it is worth checking whether the cut on offer is real or made up for
        in a fee. The tenure is the lever people pull in the wrong direction: stretching it lowers the instalment and
        raises the total, so it should be chosen for cash flow and only when cash flow requires it. Fees are one-time
        and negotiable at sanction, when the file is still being competed for. Prepayment is the strongest lever
        available to a borrower, because every rupee paid early removes all the future interest on it, and
        floating-rate loans to individuals no longer carry a charge for it. Rank the four by rupees saved for the loan
        in front of you, because the ranking is not the same for every loan — and treat a balance transfer as a new
        loan to be priced rather than an escape.
      </Debrief>
    </div>
  )
}

/* ------------------------------------------------------------------ l5-070 */

export function L5FreelanceRate() {
  const [targetIncome, setTargetIncome] = useState(100_000)
  const [fixedCosts, setFixedCosts] = useState(30_000)
  const [billableHours, setBillableHours] = useState(20)
  const [weeksOff, setWeeksOff] = useState(6)
  const [taxReserve, setTaxReserve] = useState(25)
  const [revisions, setRevisions] = useState(2)
  const [scopeHours, setScopeHours] = useState(60)
  const [advanceShare, setAdvanceShare] = useState(40)
  const [paymentDays, setPaymentDays] = useState(45)

  const workingWeeks = Math.max(1, 48 - weeksOff)
  const hoursYear = billableHours * workingWeeks
  const grossNeeded = (targetIncome + fixedCosts) / (1 - taxReserve / 100)
  const baseRate = hoursYear > 0 ? grossNeeded / hoursYear : 0
  const revisionHours = scopeHours * (1 + revisions * 0.2)
  const quote = baseRate * revisionHours
  const effectiveRate = revisionHours > 0 ? quote / revisionHours : 0
  const advance = (quote * advanceShare) / 100
  const receivablesGap = (quote - advance) * (paymentDays / 30)
  const annualGross = baseRate * hoursYear
  const annualNet = annualGross * (1 - taxReserve / 100) - fixedCosts

  const checks = [
    {
      ok: revisions <= 2,
      text: revisions <= 2
        ? `Two revisions are priced into the quote: ${quote >= 0 ? rupees(quote) : '0'} for about ${revisionHours.toFixed(0)} hours, which is ${rupees(effectiveRate >= 0 ? effectiveRate : 0)} an hour. Putting the revision count in the agreement is what keeps the rate from quietly falling every time scope grows.`
        : `${revisions} revisions turn a ${scopeHours.toFixed(0)}-hour job into ${revisionHours.toFixed(0)} hours at the same quote, so the effective rate drops to ${rupees(effectiveRate >= 0 ? effectiveRate : 0)}. Scope creep is the largest cause of freelancers earning less per hour every year while working more.`,
    },
    {
      ok: advanceShare >= 30,
      text: advanceShare >= 30
        ? `An advance of ${rupees(advance)} covers the month’s costs before any work is delivered, which is what makes a small practice survive a long payment cycle.`
        : `An advance of ${rupees(advance)} leaves the practice financing the whole job. An advance is not a sign of distrust; it is the ordinary way a service with costs is bought.`,
    },
    {
      ok: paymentDays <= 30,
      text: paymentDays <= 30
        ? 'Payment inside thirty days keeps the gap between delivery and cash small, which matters more to a freelancer than the rate on a small invoice.'
        : `Payment at ${paymentDays} days leaves about ${rupees(receivablesGap)} outstanding at any time. Late payment is the most common reason a profitable freelance practice runs out of money.`,
    },
    {
      ok: billableHours <= 25,
      text: billableHours <= 25
        ? `At ${billableHours} billable hours a week the rate is built on time that is actually sold: ${hoursYear.toFixed(0)} hours a year after ${weeksOff} weeks off. The unwritten half of freelancing is admin, sales and learning, none of which is billable.`
        : `${billableHours} billable hours a week assumes almost all of a working week can be sold. Sales, admin and learning are not billable, and pricing on an unrealisable number is how the required rate gets set too low.`,
    },
    {
      ok: true,
      text: `A gross of ${rupees(annualGross)} a year at this rate leaves about ${rupees(annualNet)} after tax set-aside and fixed costs, against a target of ${rupees(targetIncome)}. That is the arithmetic a freelance rate has to satisfy before it is compared with a salary — and a salary comes with provident fund, paid leave and no bench time.`,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h4 className="mb-3 font-display text-sm text-white">Build the rate from the costs up</h4>
          <div className="space-y-3">
            <Slider label="Take-home you need a month" value={targetIncome} min={20_000} max={500_000} step={5_000} onChange={setTargetIncome} />
            <Slider label="Fixed costs a month" value={fixedCosts} min={0} max={150_000} step={2_500} onChange={setFixedCosts} />
            <Slider label="Billable hours a week" value={billableHours} min={5} max={40} step={1} onChange={setBillableHours} format={(v) => `${v} h`} />
            <Slider label="Weeks off a year" value={weeksOff} min={0} max={16} step={1} onChange={setWeeksOff} format={(v) => `${v}`} />
            <Slider label="Tax set-aside" value={taxReserve} min={0} max={40} step={1} onChange={setTaxReserve} format={(v) => `${v}%`} />
            <Slider label="Hours in the agreed scope" value={scopeHours} min={5} max={400} step={5} onChange={setScopeHours} format={(v) => `${v} h`} />
            <Slider label="Revisions requested" value={revisions} min={0} max={6} step={1} onChange={setRevisions} format={(v) => `${v}`} />
            <Slider label="Advance on signing" value={advanceShare} min={0} max={100} step={5} onChange={setAdvanceShare} format={(v) => `${v}%`} />
            <Slider label="Payment terms" value={paymentDays} min={0} max={120} step={5} onChange={setPaymentDays} format={(v) => `${v} days`} />
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Hourly rate" value={rupees(Math.round(baseRate))} />
              <Stat label="Quote" value={rupees(Math.round(quote))} tone="bad" />
              <Stat label="Per hour, realistically" value={rupees(Math.round(effectiveRate))} tone={revisions <= 2 ? 'good' : 'bad'} />
            </div>
            <ul className="mt-3 space-y-1 text-xs text-ink-300">
              <li>Billable hours a year: {hoursYear.toFixed(0)}</li>
              <li>Gross needed for the target: {rupees(Math.round(grossNeeded))}</li>
              <li>Advance on signing: {rupees(Math.round(advance))}</li>
              <li>Outstanding at any time: about {rupees(Math.round(receivablesGap))}</li>
              <li className="text-white">Price the scope, and put the revision count in writing</li>
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

      <Debrief title="Debrief">
        A freelance rate is a business calculation wearing the clothes of a personal one, and that is why it is
        underpriced so often. Start from what must be paid: living costs and the fixed costs of working, grossed up for
        tax, because the invoice is not the income. Divide by hours that can actually be sold, not hours in a week —
        after holidays, sales, admin and learning, a full week rarely yields more than half its hours as billable ones.
        The result is a floor, not a wish. Then protect it in the agreement: the scope in hours, the number of
        revisions included, the advance, and the payment terms. Scope creep, unpaid advances and long payment cycles
        reduce the rate without ever changing the number on it, which is why they belong in the same conversation as
        the price.
      </Debrief>
    </div>
  )
}
