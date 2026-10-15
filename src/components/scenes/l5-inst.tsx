/**
 * Level 5 illustrations — band three, batch 1 (chapters l5-040 to l5-049).
 *
 * One illustration per chapter, drawn for that chapter's own idea:
 *   regulator-map          who regulates which product, and which product has no regulator
 *   rbi-tools              the four tools a depositor can actually use
 *   sebi-shield            registration, disclosure and grievance, and what falls outside
 *   irdai-records          what to check before the policy and again at claim time
 *   pension-architecture   who holds the money, who records it and who invests it
 *   bank-choice-grid       four kinds of bank, and what each one is allowed to do
 *   nbfc-boundary          what sits outside what a non-bank lender may do
 *   insurer-scoreboard     the figures an insurer is judged on, and what each hides
 *   amc-economics          the asset manager's revenue, and the investor's return
 *   exchange-plumbing      what the exchange guarantees, and where the guarantee stops
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

/** l5-040 — who owns which product. */
export function RegulatorMap() {
  const rows = [
    { name: 'RBI', domain: 'banks, non-bank lenders, payment systems, deposits', c: BLUE },
    { name: 'SEBI', domain: 'funds, brokers, exchanges, advisers, pooled funds', c: GOOD },
    { name: 'IRDAI', domain: 'insurers, agents, brokers, policy servicing', c: PURPLE },
    { name: 'PFRDA', domain: 'the pension system and its intermediaries', c: AMBER },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Every product has an owner — check the owner first
      </text>
      {rows.map((r, i) => {
        const y = 34 + i * 30
        return (
          <g key={r.name}>
            <rect x="24" y={y} width="352" height="24" rx="5" fill={PANEL} />
            <rect x="24" y={y} width="4" height="24" rx="2" fill={r.c} />
            <text x="38" y={y + 16} fill={r.c} fontSize="10" fontWeight="600">
              {r.name}
            </text>
            <text x="96" y={y + 16} fill={INK} fontSize="9">
              {r.domain}
            </text>
          </g>
        )
      })}
      <rect x="24" y="158" width="352" height="52" rx="6" fill={ROSE} opacity="0.14" />
      <text x="34" y="176" fill={ROSE} fontSize="9">
        Outside all four: advice from nobody, promised returns, apps with no lender named
      </text>
      <text x="34" y="192" fill={INK} fontSize="8.5">
        A product with no regulator is not a product with a simpler rulebook. It has no rulebook.
      </text>
      <text x="34" y="205" fill={MUTED} fontSize="8.5">
        Companies are registered with the registrar of companies; insolvency is handled separately.
      </text>
    </>
  )
}

/** l5-041 — the four tools a depositor can use. */
export function RbiTools() {
  const tools = [
    { label: 'Deposit insurance', use: '₹5 lakh per depositor, per bank', c: GOOD },
    { label: 'Payment rules', use: 'settlement, mandates and the ceiling without extra approval', c: BLUE },
    { label: 'Ombudsman', use: 'one portal for a bank, lender or payment app complaint', c: AMBER },
    { label: 'Alert list', use: 'entities the regulator has named as unauthorised', c: ROSE },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Four tools, and the moment each one is useful
      </text>
      {tools.map((t, i) => {
        const y = 34 + i * 34
        return (
          <g key={t.label}>
            <rect x="24" y={y} width="352" height="28" rx="6" fill={t.c} opacity="0.16" />
            <rect x="24" y={y} width="5" height="28" rx="2" fill={t.c} />
            <text x="38" y={y + 18} fill={INK} fontSize="10">
              {t.label}
            </text>
            <text x="170" y={y + 18} fill={MUTED} fontSize="8.5">
              {t.use}
            </text>
          </g>
        )
      })}
      <text x="24" y="186" fill={MUTED} fontSize="8.5">
        Insurance covers the bank failing, not the bank being slow.
      </text>
      <text x="24" y="200" fill={MUTED} fontSize="8.5">
        The ombudsman route usually begins only after the entity has had its chance to answer.
      </text>
    </>
  )
}

/** l5-042 — three protections, and what falls outside them. */
export function SebiShield() {
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Registration, disclosure and grievance: the three rings
      </text>
      <circle cx="116" cy="122" r="66" fill="none" stroke={GOOD} strokeWidth="1.5" />
      <circle cx="116" cy="122" r="46" fill="none" stroke={BLUE} strokeWidth="1.5" />
      <circle cx="116" cy="122" r="26" fill="none" stroke={AMBER} strokeWidth="1.5" />
      <text x="116" y="126" fill={INK} fontSize="9" textAnchor="middle">
        you
      </text>
      <text x="196" y="66" fill={GOOD} fontSize="9">
        a register to check
      </text>
      <text x="196" y="94" fill={BLUE} fontSize="9">
        documents that must be published
      </text>
      <text x="196" y="122" fill={AMBER} fontSize="9">
        a place to escalate
      </text>
      <text x="196" y="150" fill={MUTED} fontSize="8.5">
        funds held apart from the firm
      </text>
      <rect x="24" y="176" width="352" height="34" rx="6" fill={ROSE} opacity="0.14" />
      <text x="34" y="191" fill={ROSE} fontSize="8.5">
        Outside the rings: advice from an unregistered person, guaranteed-return claims in the market,
      </text>
      <text x="34" y="204" fill={ROSE} fontSize="8.5">
        and any trade in a name that is not on the register.
      </text>
    </>
  )
}

/** l5-043 — the records to check, before the policy and again at claim time. */
export function IrdaiRecords() {
  const checks = [
    ['Insurer registered', 'a certificate of registration that can be looked up'],
    ['Seller licensed', 'agent, broker or corporate agent with a licence number'],
    ['Cashless authorisation', 'within an hour of the request'],
    ['Discharge authorisation', 'within three hours of intimation'],
    ['Ombudsman route', 'free, and awards the insurer must comply with'],
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Five things to verify, and one deadline for each
      </text>
      {checks.map(([label, note], i) => {
        const y = 34 + i * 30
        return (
          <g key={label}>
            <rect x="24" y={y} width="352" height="24" rx="5" fill={PANEL} />
            <circle cx="38" cy={y + 12} r="5" fill={GOOD} opacity="0.6" />
            <text x="52" y={y + 16} fill={INK} fontSize="9.5">
              {label}
            </text>
            <text x="164" y={y + 16} fill={MUTED} fontSize="8.5">
              {note}
            </text>
          </g>
        )
      })}
      <rect x="24" y="186" width="352" height="26" rx="6" fill={PANEL} stroke={LINE} />
      <text x="34" y="203" fill={AMBER} fontSize="8.5">
        A premium never goes to an individual. It goes to the insurer, and there is a receipt.
      </text>
    </>
  )
}

/** l5-044 — who holds the money, who records it, who invests it. */
export function PensionArchitecture() {
  const boxes = [
    { label: 'Regulator', note: 'sets the rules and hears grievances', c: AMBER },
    { label: 'Trust', note: 'holds the assets apart from the funds', c: GOOD },
    { label: 'Recordkeeper', note: 'keeps your account and sends statements', c: BLUE },
    { label: 'Fund managers', note: 'invest what you allocate, subject to your choice', c: PURPLE },
    { label: 'Annuity providers', note: 'pay the part that must become income for life', c: BLUE },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Five parties, and which one you can change
      </text>
      {boxes.map((b, i) => {
        const y = 34 + i * 29
        return (
          <g key={b.label}>
            <rect x="24" y={y} width="352" height="23" rx="5" fill={b.c} opacity="0.16" />
            <rect x="24" y={y} width="4" height="23" rx="2" fill={b.c} />
            <text x="38" y={y + 15} fill={INK} fontSize="9.5">
              {b.label}
            </text>
            <text x="150" y={y + 15} fill={MUTED} fontSize="8.5">
              {b.note}
            </text>
          </g>
        )
      })}
      <text x="24" y="196" fill={MUTED} fontSize="8.5">
        You choose the fund manager and the mix. You cannot choose the recordkeeper, and you cannot
      </text>
      <text x="24" y="209" fill={MUTED} fontSize="8.5">
        choose to hold the assets yourself — that separation is the protection.
      </text>
    </>
  )
}

/** l5-045 — four kinds of bank, and what each may do. */
export function BankChoiceGrid() {
  const rows = [
    ['Universal bank', 'deposits, loans, payments', 'full', BLUE],
    ['Small finance bank', 'deposits, loans, priority sectors', 'full', GOOD],
    ['Payments bank', 'deposits up to ₹2 lakh, payments — no lending', 'full', AMBER],
    ['Co-operative bank', 'deposits, local lending', 'full', PURPLE],
    ['Non-bank lender', 'loans only — no deposits taken', 'none', ROSE],
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Three columns decide the choice: deposits, lending and cover
      </text>
      <text x="216" y="40" fill={MUTED} fontSize="8">
        what it does
      </text>
      <text x="344" y="40" fill={MUTED} fontSize="8" textAnchor="end">
        deposit cover
      </text>
      {rows.map(([name, does, cover, c], i) => {
        const y = 46 + i * 30
        return (
          <g key={name as string}>
            <rect x="24" y={y} width="352" height="24" rx="5" fill={PANEL} />
            <rect x="24" y={y} width="4" height="24" rx="2" fill={c as string} />
            <text x="38" y={y + 16} fill={INK} fontSize="9.5">
              {name as string}
            </text>
            <text x="150" y={y + 16} fill={MUTED} fontSize="8.5">
              {does as string}
            </text>
            <text x="368" y={y + 16} fill={c as string} fontSize="8.5" textAnchor="end">
              {cover === 'full' ? '₹5 lakh' : 'none'}
            </text>
          </g>
        )
      })}
      <text x="24" y="208" fill={MUTED} fontSize="8.5">
        Cover is per depositor, per bank. Splitting deposits across banks multiplies it.
      </text>
    </>
  )
}

/** l5-046 — where a non-bank lender stops. */
export function NbfcBoundary() {
  const inside = ['lending against income, gold or property', 'term deposits, for the few authorised to take them', 'fees and interest set by contract']
  const outside = ['demand deposits of any kind', 'cheques drawn on itself', 'membership of the payment system', 'deposit insurance cover']
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        A lender is not a bank, and the differences are specific
      </text>
      <rect x="24" y="32" width="170" height="126" rx="8" fill={GOOD} opacity="0.12" />
      <text x="34" y="50" fill={GOOD} fontSize="9" fontWeight="600">
        may do
      </text>
      {inside.map((t, i) => (
        <text key={t} x="34" y={68 + i * 26} fill={INK} fontSize="8.5">
          {t.length > 30 ? t.slice(0, 29) + '…' : t}
        </text>
      ))}
      <rect x="206" y="32" width="170" height="126" rx="8" fill={ROSE} opacity="0.14" />
      <text x="216" y="50" fill={ROSE} fontSize="9" fontWeight="600">
        may not do
      </text>
      {outside.map((t, i) => (
        <text key={t} x="216" y={68 + i * 26} fill={INK} fontSize="8.5">
          {t}
        </text>
      ))}
      <rect x="24" y="168" width="352" height="42" rx="6" fill={PANEL} stroke={LINE} />
      <text x="34" y="185" fill={INK} fontSize="8.5">
        A deposit with a lender that is not a bank carries the lender's risk, with no insurance behind it.
      </text>
      <text x="34" y="200" fill={MUTED} fontSize="8.5">
        Check the register before lending money to anyone, and before placing any money with them.
      </text>
    </>
  )
}

/** l5-047 — the figures an insurer is judged on, and what each hides. */
export function InsurerScoreboard() {
  const rows = [
    { metric: 'Solvency ratio', shows: 'capital behind the promises', hides: 'nothing much — it is a floor', c: GOOD },
    { metric: 'Claim settlement ratio', shows: 'share of claims paid, by count', hides: 'the size of the claims refused', c: AMBER },
    { metric: 'Grievance disposal', shows: 'complaints and how they ended', hides: 'the ones never filed', c: BLUE },
    { metric: 'Cashless network', shows: 'hospitals that do not need cash', hides: 'the terms applied at each one', c: PURPLE },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Four numbers, each honest and each incomplete
      </text>
      {rows.map((r, i) => {
        const y = 32 + i * 40
        return (
          <g key={r.metric}>
            <rect x="24" y={y} width="352" height="34" rx="6" fill={PANEL} />
            <rect x="24" y={y} width="4" height="34" rx="2" fill={r.c} />
            <text x="38" y={y + 14} fill={INK} fontSize="9.5">
              {r.metric}
            </text>
            <text x="38" y={y + 27} fill={r.c} fontSize="8">
              {r.shows}
            </text>
            <text x="368" y={y + 27} fill={MUTED} fontSize="8" textAnchor="end">
              hides: {r.hides}
            </text>
          </g>
        )
      })}
      <text x="24" y="206" fill={MUTED} fontSize="8.5">
        Solvency is a requirement, not a compliment: every insurer must stay above it.
      </text>
    </>
  )
}

/** l5-048 — the asset manager's revenue, and the investor's return. */
export function AmcEconomics() {
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        The manager is paid on the size of the pool, not on your return
      </text>
      <rect x="24" y="36" width="160" height="70" rx="8" fill={BLUE} opacity="0.14" />
      <text x="34" y="54" fill={BLUE} fontSize="9" fontWeight="600">
        your money
      </text>
      <text x="34" y="70" fill={INK} fontSize="8.5">
        held in the scheme, in trust
      </text>
      <text x="34" y="86" fill={MUTED} fontSize="8.5">
        separate from the manager
      </text>
      <rect x="216" y="36" width="160" height="70" rx="8" fill={PURPLE} opacity="0.14" />
      <text x="226" y="54" fill={PURPLE} fontSize="9" fontWeight="600">
        the manager
      </text>
      <text x="226" y="70" fill={INK} fontSize="8.5">
        earns a share of assets
      </text>
      <text x="226" y="86" fill={MUTED} fontSize="8.5">
        every year, on the pool
      </text>
      <line x1="186" y1="71" x2="214" y2="71" stroke={LINE} />
      <text x="200" y="64" fill={MUTED} fontSize="7.5" textAnchor="middle">
        fee
      </text>
      {[
        'Bigger pool, more revenue — so gathering assets is the goal, not beating an index.',
        'A new offer gathers assets; the manager does not have to think it is a better idea.',
        'Distributor commission is paid from the same fee, so the plan you buy changes its size.',
        'The manager can change, merge or close a scheme. Those are commercial decisions.',
      ].map((t, i) => (
        <text key={t} x="24" y={126 + i * 20} fill={MUTED} fontSize="8.5">
          {t}
        </text>
      ))}
      <rect x="24" y="208" width="352" height="1" fill={LINE} />
    </>
  )
}

/** l5-049 — what the exchange guarantees, and where the guarantee stops. */
export function ExchangePlumbing() {
  const stages = [
    { label: 'Order', note: 'matched on price and time', c: BLUE },
    { label: 'Novation', note: 'the clearing house becomes your counterparty', c: GOOD },
    { label: 'Guarantee fund', note: 'stands behind a member that defaults', c: GOOD },
    { label: 'Settlement', note: 'shares and money exchanged on the cycle', c: BLUE },
    { label: 'Investor fund', note: 'compensates a client of a defaulting member', c: AMBER },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        What is guaranteed is settlement, not your holding
      </text>
      {stages.map((s, i) => {
        const y = 34 + i * 28
        return (
          <g key={s.label}>
            <rect x="24" y={y} width="150" height="22" rx="5" fill={s.c} opacity="0.2" />
            <text x="36" y={y + 15} fill={INK} fontSize="9">
              {s.label}
            </text>
            <text x="184" y={y + 15} fill={MUTED} fontSize="8.5">
              {s.note}
            </text>
          </g>
        )
      })}
      <rect x="24" y="176" width="352" height="34" rx="6" fill={ROSE} opacity="0.14" />
      <text x="34" y="191" fill={ROSE} fontSize="8.5">
        Not guaranteed: the price you paid, the honesty of a company, the performance of a fund.
      </text>
      <text x="34" y="204" fill={MUTED} fontSize="8.5">
        Surveillance and disclosure supply information. Reading it is still your job.
      </text>
    </>
  )
}
