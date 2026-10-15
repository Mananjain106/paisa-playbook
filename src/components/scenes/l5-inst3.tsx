/**
 * Level 5 illustrations — band three, batch 3 (chapters l5-060 to l5-070).
 *
 * One illustration per chapter, drawn for that chapter's own idea:
 *   card-terms             the cycle, the due date, and where interest begins
 *   broker-agreement-map   what you authorise against what the rules allow
 *   rent-agreement-terms   the six terms that decide how a tenancy ends
 *   hidden-charge-radar    the headline price and the layers added later
 *   fee-normaliser         one-time fees turned into an annual number
 *   penalty-clock          the clock that decides when a penalty is lawful
 *   clause-library         the clause types and whether they can be negotiated
 *   raise-negotiation      the total-value frame, and the evidence behind an ask
 *   rent-levers            five levers, with the one that moves the most
 *   loan-levers            four levers ranked by rupees saved, not by headline
 *   freelance-rate-build   costs, non-billable time and tax built into one rate
 *
 * Scenes are plain SVG fragments; the `Scene` wrapper supplies the
 * viewBox="0 0 400 220" and the caption. Each is used by exactly one chapter.
 */

const INK = '#c9cfe4'
const MUTED = '#8b93ad'
const PANEL = 'rgba(255,255,255,0.05)'
const LINE = 'rgba(255,255,255,0.14)'
const GOOD = '#34e0a1'
const BLUE = '#38bdf8'
const PURPLE = '#c084fc'
const AMBER = '#facc15'
const ROSE = '#fb7185'

/** l5-060 — the statement cycle, and the two traps inside it. */
export function CardTerms() {
  const rows = [
    { day: 'Statement date', what: 'the cycle closes and the bill is raised', c: BLUE },
    { day: 'Due date', what: 'about three weeks later, the last interest-free day', c: AMBER },
    { day: 'Three-day buffer', what: 'charges and the past-due flag wait until this ends', c: GOOD },
    { day: 'Next statement', what: 'interest, fees and taxes are added, and compound', c: ROSE },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        The cycle, and where the free period stops
      </text>
      {rows.map((r, i) => {
        const y = 34 + i * 26
        return (
          <g key={r.day}>
            <rect x="24" y={y} width="352" height="22" rx="4" fill={PANEL} stroke={LINE} />
            <circle cx="34" cy={y + 11} r="3" fill={r.c} />
            <text x="44" y={y + 15} fill={INK} fontSize="8.5">
              {r.day}
            </text>
            <text x="150" y={y + 15} fill={MUTED} fontSize="8">
              {r.what}
            </text>
          </g>
        )
      })}
      <rect x="24" y="140" width="172" height="66" rx="6" fill={ROSE} opacity="0.12" />
      <text x="34" y="156" fill={ROSE} fontSize="8.5" fontWeight="600">
        Trap one
      </text>
      <text x="34" y="169" fill={INK} fontSize="8">
        Carrying any balance forward
      </text>
      <text x="34" y="181" fill={INK} fontSize="8">
        ends the interest-free period on
      </text>
      <text x="34" y="193" fill={INK} fontSize="8">
        new spending from the next day.
      </text>
      <rect x="204" y="140" width="172" height="66" rx="6" fill={ROSE} opacity="0.12" />
      <text x="214" y="156" fill={ROSE} fontSize="8.5" fontWeight="600">
        Trap two
      </text>
      <text x="214" y="169" fill={INK} fontSize="8">
        Paying only the minimum due
      </text>
      <text x="214" y="181" fill={INK} fontSize="8">
        keeps the account current and
      </text>
      <text x="214" y="193" fill={INK} fontSize="8">
        the balance intact.
      </text>
    </>
  )
}

/** l5-061 — what a broking agreement lets the firm do, and what constrains it. */
export function BrokerAgreementMap() {
  const rows = [
    { grant: 'Debit your account for trades', limit: 'only for settled obligations' },
    { grant: 'Square off your positions', limit: 'after the shortfall is unpaid' },
    { grant: 'Pledge holdings for your margin', limit: 'marked, and reversible' },
    { grant: 'Charge per the tariff sheet', limit: 'disclosed, and changeable by notice' },
    { grant: 'Settle disputes by arbitration', limit: 'the route must be spelt out' },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        What you authorise, and what limits it
      </text>
      <text x="24" y="38" fill={MUTED} fontSize="8">
        Granted in the agreement
      </text>
      <text x="232" y="38" fill={MUTED} fontSize="8">
        Constrained by rule or scope
      </text>
      {rows.map((r, i) => {
        const y = 44 + i * 30
        return (
          <g key={r.grant}>
            <rect x="24" y={y} width="352" height="26" rx="5" fill={PANEL} stroke={LINE} />
            <text x="36" y={y + 17} fill={INK} fontSize="8.5">
              {r.grant}
            </text>
            <text x="232" y={y + 17} fill={GOOD} fontSize="8">
              {r.limit}
            </text>
          </g>
        )
      })}
      <rect x="24" y="196" width="352" height="16" rx="4" fill={BLUE} opacity="0.12" />
      <text x="34" y="208" fill={INK} fontSize="8">
        An authority clause is a power of attorney in disguise: read the limits, not the label.
      </text>
    </>
  )
}

/** l5-062 — the six terms that decide how a tenancy ends. */
export function RentAgreementTerms() {
  const rows = [
    { term: 'Deposit', norm: 'two to ten months, refundable' },
    { term: 'Escalation', norm: 'five to ten per cent a year' },
    { term: 'Notice period', norm: 'one to two months, on both sides' },
    { term: 'Lock-in', norm: 'a fixed term with a penalty to exit' },
    { term: 'Maintenance', norm: 'who pays society and repair costs' },
    { term: 'Registration', norm: 'required for longer terms, stamped' },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Six terms decide how a tenancy ends
      </text>
      {rows.map((r, i) => {
        const y = 34 + i * 26
        return (
          <g key={r.term}>
            <rect x="24" y={y} width="352" height="22" rx="4" fill={PANEL} stroke={LINE} />
            <text x="36" y={y + 15} fill={INK} fontSize="8.5">
              {r.term}
            </text>
            <text x="176" y={y + 15} fill={MUTED} fontSize="8">
              {r.norm}
            </text>
          </g>
        )
      })}
      <rect x="24" y="196" width="352" height="16" rx="4" fill={AMBER} opacity="0.12" />
      <text x="34" y="208" fill={INK} fontSize="8">
        The deposit is the landlord's leverage and the tenant's risk: write down what it covers.
      </text>
    </>
  )
}

/** l5-063 — the layers that never appear in the headline price. */
export function HiddenChargeRadar() {
  const layers = [
    { name: 'Headline price', note: 'the number quoted', c: GOOD },
    { name: 'Processing and documentation', note: 'deducted at the start', c: AMBER },
    { name: 'Platform or convenience fee', note: 'added at checkout', c: AMBER },
    { name: 'Bundled insurance', note: 'financed for the whole term', c: ROSE },
    { name: 'Annual charges', note: 'small yearly, large over years', c: ROSE },
    { name: 'Exit penalty', note: 'the cost of leaving', c: PURPLE },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        The headline price, and the five layers under it
      </text>
      {layers.map((l, i) => {
        const y = 34 + i * 26
        return (
          <g key={l.name}>
            <rect x={24 + i * 10} y={y} width={352 - i * 20} height="22" rx="4" fill={l.c} opacity="0.13" />
            <text x="36" y={y + 15} fill={INK} fontSize="8.5">
              {l.name}
            </text>
            <text x="232" y={y + 15} fill={MUTED} fontSize="8">
              {l.note}
            </text>
          </g>
        )
      })}
      <rect x="24" y="196" width="352" height="16" rx="4" fill={ROSE} opacity="0.12" />
      <text x="34" y="208" fill={INK} fontSize="8">
        Hiding a fee until after commitment is a named abuse, not an oversight.
      </text>
    </>
  )
}

/** l5-064 — one-time fees turned into a comparable annual number. */
export function FeeNormaliser() {
  const rows = [
    { label: 'Processing fee, paid once', raw: '₹25,000 now', annual: '₹2,500 a year over 10 years' },
    { label: 'Annual charge, small', raw: '₹1,200 a year', annual: '₹1,200 a year' },
    { label: 'Fund expenses on the balance', raw: '1% of the corpus', annual: '₹1,000 a year per ₹1 lakh' },
    { label: 'Advisory fee, fixed mode', raw: 'one flat amount', annual: 'capped per family, by rule' },
    { label: 'Advisory fee, asset mode', raw: '2.5% of assets a year', annual: 'rises with the portfolio' },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        One denominator, or the fees cannot be compared
      </text>
      <text x="24" y="38" fill={MUTED} fontSize="8">
        The fee
      </text>
      <text x="232" y="38" fill={MUTED} fontSize="8">
        As an annual number
      </text>
      {rows.map((r, i) => {
        const y = 44 + i * 30
        return (
          <g key={r.label}>
            <rect x="24" y={y} width="352" height="26" rx="5" fill={PANEL} stroke={LINE} />
            <text x="36" y={y + 12} fill={INK} fontSize="8.5">
              {r.label}
            </text>
            <text x="36" y={y + 22} fill={MUTED} fontSize="7.5">
              {r.raw}
            </text>
            <text x="232" y={y + 17} fill={GOOD} fontSize="8">
              {r.annual}
            </text>
          </g>
        )
      })}
      <rect x="24" y="196" width="352" height="16" rx="4" fill={BLUE} opacity="0.12" />
      <text x="34" y="208" fill={INK} fontSize="8">
        A percentage fee grows with the balance. A flat fee does not. That is the whole comparison.
      </text>
    </>
  )
}

/** l5-065 — the clock that decides when a charge becomes lawful. */
export function PenaltyClock() {
  const steps = [
    { t: 'Due date', e: 'the last day to pay without consequence' },
    { t: 'Days 1 to 3', e: 'past the date, not yet chargeable' },
    { t: 'After three days', e: 'charges may follow, and a past-due flag' },
    { t: 'Next cycle', e: 'charges are separate, never compounded' },
  ]
  const kinds = [
    { k: 'Card past due', v: 'charges only after the buffer' },
    { k: 'Auto-debit bounce', v: 'return charge, and a credit record mark' },
    { k: 'Cheque dishonour', v: 'a legal notice route, not just a fee' },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        When a penalty becomes lawful
      </text>
      {steps.map((s, i) => {
        const y = 34 + i * 26
        return (
          <g key={s.t}>
            <rect x="24" y={y} width="200" height="22" rx="4" fill={BLUE} opacity={0.1 + i * 0.03} />
            <text x="34" y={y + 15} fill={INK} fontSize="8.5">
              {s.t}
            </text>
            <text x="236" y={y + 15} fill={MUTED} fontSize="8">
              {s.e}
            </text>
          </g>
        )
      })}
      {kinds.map((k, i) => {
        const y = 146 + i * 22
        return (
          <g key={k.k}>
            <rect x="24" y={y} width="352" height="18" rx="4" fill={ROSE} opacity="0.12" />
            <text x="34" y={y + 13} fill={INK} fontSize="8">
              {k.k}
            </text>
            <text x="180" y={y + 13} fill={MUTED} fontSize="8">
              {k.v}
            </text>
          </g>
        )
      })}
    </>
  )
}

/** l5-066 — a library of clause types and what can be done with each. */
export function ClauseLibrary() {
  const clauses = [
    { name: 'Indemnity', tag: 'one-sided', c: ROSE },
    { name: 'Liability cap', tag: 'limits them', c: AMBER },
    { name: 'Unilateral variation', tag: 'notice above 30 days', c: ROSE },
    { name: 'Auto-renewal', tag: 'check the exit window', c: ROSE },
    { name: 'Arbitration', tag: 'cost beats the claim', c: AMBER },
    { name: 'Jurisdiction', tag: 'which city hears it', c: AMBER },
    { name: 'Assignment', tag: 'who holds the contract', c: BLUE },
    { name: 'Entire agreement', tag: 'the brochure does not count', c: BLUE },
    { name: 'Severability', tag: 'the rest survives', c: BLUE },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Nine clause types, rated by how they hurt
      </text>
      {clauses.map((c, i) => {
        const x = i < 5 ? 24 : 212
        const y = 34 + (i % 5) * 34
        return (
          <g key={c.name}>
            <rect x={x} y={y} width="164" height="28" rx="5" fill={PANEL} stroke={LINE} />
            <circle cx={x + 12} cy={y + 14} r="3" fill={c.c} />
            <text x={x + 22} y={y + 12} fill={INK} fontSize="8.5">
              {c.name}
            </text>
            <text x={x + 22} y={y + 22} fill={MUTED} fontSize="7.5">
              {c.tag}
            </text>
          </g>
        )
      })}
      <rect x="24" y="182" width="352" height="28" rx="5" fill={AMBER} opacity="0.12" />
      <text x="34" y="196" fill={INK} fontSize="8">
        Two questions per clause: does it move money, and does it move control?
      </text>
      <text x="34" y="206" fill={MUTED} fontSize="8">
        A term that conflicts with a rule does not bind, whoever signed first.
      </text>
    </>
  )
}

/** l5-067 — the total-value frame behind a raise request. */
export function RaiseNegotiation() {
  const parts = [
    { name: 'Fixed pay', note: 'the number that compounds' },
    { name: 'Variable pay', note: 'check the payout record' },
    { name: 'Retirement and PF', note: 'on basic, or on the ceiling' },
    { name: 'Non-cash terms', note: 'notice, leave, location, title' },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Ask for total value, and price each part
      </text>
      {parts.map((p, i) => {
        const y = 34 + i * 26
        return (
          <g key={p.name}>
            <rect x="24" y={y} width="352" height="22" rx="4" fill={PANEL} stroke={LINE} />
            <text x="36" y={y + 15} fill={INK} fontSize="8.5">
              {p.name}
            </text>
            <text x="176" y={y + 15} fill={MUTED} fontSize="8">
              {p.note}
            </text>
          </g>
        )
      })}
      <rect x="24" y="146" width="352" height="66" rx="6" fill={GOOD} opacity="0.12" />
      <text x="34" y="162" fill={GOOD} fontSize="8.5" fontWeight="600">
        The four sentences that carry an ask
      </text>
      <text x="34" y="176" fill={INK} fontSize="8">
        What I have delivered, with dates and numbers. What the market pays for it. What I
      </text>
      <text x="34" y="188" fill={INK} fontSize="8">
        am asking for, in one figure. What I will do next if the answer is no — said plainly,
      </text>
      <text x="34" y="200" fill={INK} fontSize="8">
        without a threat you will not carry out.
      </text>
    </>
  )
}

/** l5-068 — the levers in a rent negotiation, priced. */
export function RentLevers() {
  const levers = [
    { name: 'Comparable evidence', effect: 'anchors the number', c: GOOD },
    { name: 'Deposit structure', effect: 'the largest cash lever', c: BLUE },
    { name: 'Escalation cap', effect: 'worth more than a discount', c: AMBER },
    { name: 'Tenure offered', effect: 'your side of the trade', c: PURPLE },
    { name: 'Total occupancy cost', effect: 'the number to argue over', c: ROSE },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Five levers, one of which is not the rent
      </text>
      {levers.map((l, i) => {
        const y = 34 + i * 30
        return (
          <g key={l.name}>
            <rect x="24" y={y} width="352" height="26" rx="5" fill={PANEL} stroke={LINE} />
            <rect x="24" y={y} width="4" height="26" rx="2" fill={l.c} />
            <text x="38" y={y + 17} fill={INK} fontSize="8.5">
              {l.name}
            </text>
            <text x="216" y={y + 17} fill={MUTED} fontSize="8">
              {l.effect}
            </text>
          </g>
        )
      })}
      <rect x="24" y="188" width="352" height="22" rx="5" fill={BLUE} opacity="0.12" />
      <text x="34" y="203" fill={INK} fontSize="8">
        Deposit plus brokerage plus moving costs is what a year of tenancy actually costs.
      </text>
    </>
  )
}

/** l5-069 — loan levers ranked by the rupees they move. */
export function LoanLevers() {
  const rows = [
    { lever: 'Rate agreed', effect: 'the largest lever on the total repaid', w: 150 },
    { lever: 'Prepayment plan', effect: 'shortens the term, and saves the most interest', w: 126 },
    { lever: 'Tenure chosen', effect: 'a cash-flow lever first, a cost lever second', w: 102 },
    { lever: 'Fees waived', effect: 'one-time, real, and often negotiable', w: 78 },
    { lever: 'Balance transfer', effect: 'only if the saving beats its own cost', w: 54 },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Five levers, ranked by what they save
      </text>
      {rows.map((r, i) => {
        const y = 32 + i * 29
        return (
          <g key={r.lever}>
            <rect x="24" y={y} width="352" height="27" rx="5" fill={PANEL} stroke={LINE} />
            <rect x="24" y={y} width="4" height="27" rx="2" fill={GOOD} opacity={0.9 - i * 0.15} />
            <text x="38" y={y + 12} fill={INK} fontSize="8.5">
              {r.lever}
            </text>
            <text x="38" y={y + 22} fill={MUTED} fontSize="7.5">
              {r.effect}
            </text>
            <rect x={352 - r.w} y={y + 8} width={r.w - 8} height="11" rx="3" fill={GOOD} opacity="0.28" />
          </g>
        )
      })}
      <rect x="24" y="180" width="352" height="32" rx="6" fill={AMBER} opacity="0.12" />
      <text x="34" y="194" fill={INK} fontSize="8">
        A lower rate on a longer tenure can cost more in total: compare the total repaid, not
      </text>
      <text x="34" y="205" fill={INK} fontSize="8">
        the instalment, and treat a fee waiver as money already in hand.
      </text>
    </>
  )
}

/** l5-070 — building a freelance rate from costs, time and tax. */
export function FreelanceRateBuild() {
  const parts = [
    { name: 'Target income', note: 'what you want to keep, after tax' },
    { name: 'Running costs', note: 'tools, devices, workspace, insurance' },
    { name: 'Tax and savings', note: 'set aside before the invoice lands' },
    { name: 'Non-billable time', note: 'sales, admin, waiting, holidays' },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Costs plus non-billable time give the floor
      </text>
      {parts.map((p, i) => {
        const y = 34 + i * 24
        return (
          <g key={p.name}>
            <rect x="24" y={y} width="352" height="20" rx="4" fill={PANEL} stroke={LINE} />
            <text x="36" y={y + 14} fill={INK} fontSize="8.5">
              {p.name}
            </text>
            <text x="176" y={y + 14} fill={MUTED} fontSize="8">
              {p.note}
            </text>
          </g>
        )
      })}
      <rect x="24" y="136" width="352" height="34" rx="6" fill={GOOD} opacity="0.12" />
      <text x="34" y="151" fill={GOOD} fontSize="8.5" fontWeight="600">
        Divide by the hours you can actually bill
      </text>
      <text x="34" y="163" fill={INK} fontSize="8">
        A rate per hour assumes 1,500 billable hours. A real year has far fewer.
      </text>
      <rect x="24" y="176" width="352" height="36" rx="6" fill={AMBER} opacity="0.12" />
      <text x="34" y="191" fill={INK} fontSize="8">
        Write the scope, the revisions, the payment terms and what happens when the scope grows.
      </text>
      <text x="34" y="203" fill={INK} fontSize="8">
        An advance is the cheapest credit control you will ever use.
      </text>
    </>
  )
}
