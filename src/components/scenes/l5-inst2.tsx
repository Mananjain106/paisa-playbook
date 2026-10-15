/**
 * Level 5 illustrations — band three, batch 2 (chapters l5-050 to l5-059).
 *
 * One illustration per chapter, drawn for that chapter's own idea:
 *   broker-fee-anatomy     what a "free" trade actually costs, line by line
 *   depository-layer       who holds the shares, who records them, and who is you
 *   kyc-flow               one record, many users, and a refresh clock
 *   aml-funnel             transactions in, three reports out, and a lien at the end
 *   protection-layers      four safety nets and the exact ceiling of each
 *   complaint-ladder       the rungs a grievance climbs, and the clock on each
 *   rights-pathway         three commissions, two years, one limitation period
 *   contract-anatomy       the six clauses that move risk, cost or control
 *   loan-clause-map        loan clauses against the rule that governs each one
 *   policy-anatomy         the schedule, the wording, and the waiting-period ladder
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

/** l5-050 — the cost stack on a delivery trade, and the two that are not brokerage. */
export function BrokerFeeAnatomy() {
  const bars = [
    { label: 'Brokerage', pct: 0, note: 'often zero on delivery', c: GOOD },
    { label: 'Transaction tax', pct: 100, note: '0.1% on both sides', c: ROSE },
    { label: 'Stamp duty', pct: 15, note: '0.015%, buy side only', c: AMBER },
    { label: 'Exchange and SEBI levies', pct: 4, note: 'about 0.003% plus fees', c: BLUE },
    { label: 'GST on charges', pct: 18, note: 'on brokerage and levies', c: PURPLE },
    { label: 'Depository charge', pct: 0, note: 'per scrip, on every sell', c: MUTED },
  ]
  const max = Math.max(...bars.map((b) => b.pct))
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Zero brokerage is not zero cost
      </text>
      {bars.map((b, i) => {
        const y = 36 + i * 26
        const w = Math.max(3, (b.pct / max) * 76)
        return (
          <g key={b.label}>
            <text x="24" y={y + 11} fill={INK} fontSize="8.5">
              {b.label}
            </text>
            <rect x="176" y={y + 2} width={w} height="12" rx="3" fill={b.c} opacity="0.75" />
            <text x="266" y={y + 12} fill={MUTED} fontSize="7.5">
              {b.note}
            </text>
          </g>
        )
      })}
      <rect x="24" y="196" width="352" height="16" rx="4" fill={PANEL} stroke={LINE} />
      <text x="34" y="208" fill={INK} fontSize="8.5">
        Selling costs more than buying: tax on both sides, and the depository charge on every scrip.
      </text>
    </>
  )
}

/** l5-051 — depository, participant and holder, and what sits in whose name. */
export function DepositoryLayer() {
  const rows = [
    { title: 'The depository', body: 'holds the securities in electronic form and records transfers', c: BLUE },
    { title: 'Your participant', body: 'the interface: opens the account, sends your instructions', c: PURPLE },
    { title: 'You, the holder', body: 'beneficial owner named in the records, with a nomination', c: GOOD },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Who actually holds your shares
      </text>
      {rows.map((r, i) => {
        const y = 34 + i * 40
        return (
          <g key={r.title}>
            <rect x="24" y={y} width="352" height="32" rx="6" fill={PANEL} stroke={LINE} />
            <rect x="24" y={y} width="4" height="32" rx="2" fill={r.c} />
            <text x="38" y={y + 14} fill={r.c} fontSize="9.5" fontWeight="600">
              {r.title}
            </text>
            <text x="38" y={y + 26} fill={MUTED} fontSize="8.5">
              {r.body}
            </text>
          </g>
        )
      })}
      <rect x="24" y="158" width="172" height="52" rx="6" fill={GOOD} opacity="0.12" />
      <text x="34" y="174" fill={GOOD} fontSize="9" fontWeight="600">
        Pledge
      </text>
      <text x="34" y="187" fill={INK} fontSize="8">
        A lien on part of the balance,
      </text>
      <text x="34" y="199" fill={INK} fontSize="8">
        not a transfer of ownership.
      </text>
      <rect x="204" y="158" width="172" height="52" rx="6" fill={AMBER} opacity="0.12" />
      <text x="214" y="174" fill={AMBER} fontSize="9" fontWeight="600">
        Transmission
      </text>
      <text x="214" y="187" fill={INK} fontSize="8">
        Nomination or joint holding
      </text>
      <text x="214" y="199" fill={INK} fontSize="8">
        settles who can operate it.
      </text>
    </>
  )
}

/** l5-052 — one identity record, several registers, and a refresh clock. */
export function KycFlow() {
  const registers = [
    { name: 'Your bank', use: 'under the banking rules' },
    { name: 'The central registry', use: 'one record, a 14-digit number' },
    { name: 'The securities registry', use: 'for demat and mutual funds' },
    { name: 'The insurer', use: 'its own copy, for the policy' },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        One identity, four places that hold it
      </text>
      <rect x="24" y="32" width="150" height="58" rx="6" fill={PANEL} stroke={LINE} />
      <text x="36" y="50" fill={INK} fontSize="9">
        Your documents
      </text>
      <text x="36" y="64" fill={MUTED} fontSize="8">
        identity, address, PAN
      </text>
      <text x="36" y="78" fill={MUTED} fontSize="8">
        given with consent
      </text>
      {registers.map((r, i) => {
        const y = 32 + i * 18
        return (
          <g key={r.name}>
            <line x1="174" y1="61" x2="196" y2={y + 9} stroke={LINE} />
            <text x="200" y={y + 12} fill={INK} fontSize="8.5">
              {r.name}
            </text>
            <text x="290" y={y + 12} fill={MUTED} fontSize="7.5">
              {r.use}
            </text>
          </g>
        )
      })}
      <rect x="24" y="102" width="352" height="46" rx="6" fill={BLUE} opacity="0.12" />
      <text x="34" y="118" fill={BLUE} fontSize="9" fontWeight="600">
        The refresh clock
      </text>
      <text x="34" y="132" fill={INK} fontSize="8.5">
        High risk every 2 years, medium every 8, low every 10 — and a record already on the central
      </text>
      <text x="34" y="143" fill={INK} fontSize="8.5">
        registry can be pulled from there instead of being collected from you again.
      </text>
      <rect x="24" y="158" width="352" height="52" rx="6" fill={ROSE} opacity="0.12" />
      <text x="34" y="174" fill={ROSE} fontSize="9" fontWeight="600">
        What a genuine request never asks for
      </text>
      <text x="34" y="188" fill={INK} fontSize="8.5">
        A one-time password, a card number, a personal identification number, a remote-access app, or a
        </text>
      <text x="34" y="200" fill={INK} fontSize="8.5">
        transfer to an individual. KYC is done in the institution's own channels, never over a call.
      </text>
    </>
  )
}

/** l5-053 — transactions in, three reports out, and what a customer notices. */
export function AmlFunnel() {
  const outputs = [
    { label: 'Cleared', note: 'the ordinary case: no report, no message', c: GOOD },
    { label: 'Cash report', note: 'cash above ₹10 lakh, or a connected series', c: AMBER },
    { label: 'Suspicion report', note: 'no threshold at all, filed within days', c: ROSE },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Why a lawful transaction can still be stopped
      </text>
      <rect x="24" y="34" width="120" height="60" rx="6" fill={PANEL} stroke={LINE} />
      <text x="36" y="54" fill={INK} fontSize="9">
        Transactions
      </text>
      <text x="36" y="68" fill={MUTED} fontSize="8">
        cash, transfers, deposits
      </text>
      <text x="36" y="82" fill={MUTED} fontSize="8">
        pattern, counterparty
      </text>
      {outputs.map((o, i) => {
        const y = 34 + i * 24
        return (
          <g key={o.label}>
            <line x1="144" y1="64" x2="176" y2={y + 11} stroke={LINE} />
            <rect x="180" y={y} width="196" height="22" rx="4" fill={o.c} opacity="0.14" />
            <text x="190" y={y + 10} fill={o.c} fontSize="8.5" fontWeight="600">
              {o.label}
            </text>
            <text x="190" y={y + 19} fill={MUTED} fontSize="7.5">
              {o.note}
            </text>
          </g>
        )
      })}
      <rect x="24" y="110" width="352" height="44" rx="6" fill={PANEL} stroke={LINE} />
      <text x="34" y="126" fill={INK} fontSize="9" fontWeight="600">
        Splitting one large payment into several small ones is the pattern, not the cure
      </text>
      <text x="34" y="140" fill={MUTED} fontSize="8.5">
        Structuring to stay under a threshold is itself what gets a series reported as connected.
      </text>
      <rect x="24" y="162" width="352" height="48" rx="6" fill={ROSE} opacity="0.12" />
      <text x="34" y="178" fill={ROSE} fontSize="9" fontWeight="600">
        What you notice: a lien, a query, or a stopped transfer
      </text>
      <text x="34" y="192" fill={INK} fontSize="8.5">
        Ask the branch for the reason in writing, ask what would resolve it, keep the paper trail that
        </text>
      <text x="34" y="203" fill={INK} fontSize="8.5">
        shows where the money came from, and escalate if the answer never comes.
      </text>
    </>
  )
}

/** l5-054 — four safety nets and the exact ceiling of each. */
export function ProtectionLayers() {
  const layers = [
    { name: 'Bank deposit insurance', cap: '₹5 lakh', note: 'per depositor, per bank', c: GOOD },
    { name: 'Settlement guarantee', cap: 'the trade', note: 'via the clearing house', c: BLUE },
    { name: 'Investor protection fund', cap: 'a capped claim', note: 'broker default, per exchange', c: PURPLE },
    { name: 'Banking ombudsman award', cap: '₹30 lakh', note: 'plus ₹3 lakh for time and stress', c: AMBER },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Four nets, and the ceiling on each
      </text>
      {layers.map((l, i) => {
        const y = 32 + i * 28
        return (
          <g key={l.name}>
            <rect x="24" y={y} width="352" height="24" rx="5" fill={PANEL} stroke={LINE} />
            <text x="36" y={y + 16} fill={INK} fontSize="9">
              {l.name}
            </text>
            <text x="228" y={y + 16} fill={l.c} fontSize="9" fontWeight="600">
              {l.cap}
            </text>
            <text x="292" y={y + 16} fill={MUTED} fontSize="7.5">
              {l.note}
            </text>
          </g>
        )
      })}
      <rect x="24" y="150" width="352" height="60" rx="6" fill={ROSE} opacity="0.12" />
      <text x="34" y="166" fill={ROSE} fontSize="9" fontWeight="600">
        The gap the nets do not cover
      </text>
      <text x="34" y="180" fill={INK} fontSize="8.5">
        A price that fell, a tip that misled you, a scheme nobody registered, a product with no
        </text>
      <text x="34" y="192" fill={INK} fontSize="8.5">
        regulator: these are losses with no fund behind them. Protection covers process failures and
        </text>
      <text x="34" y="204" fill={INK} fontSize="8.5">
        insolvency, never the market's verdict on what you chose to own.
      </text>
    </>
  )
}

/** l5-055 — the rungs a grievance climbs, and the clock on each. */
export function ComplaintLadder() {
  const rungs = [
    { name: 'The entity', clock: 'start here, in writing' },
    { name: 'Its grievance officer', clock: 'a named person, a reference' },
    { name: 'The regulator\u2019s channel', clock: 'CMS, SCORES or the insurer' },
    { name: 'The ombudsman', clock: 'free, awards are binding' },
    { name: 'The consumer commission', clock: 'limited to two years' },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Escalation, one rung at a time
      </text>
      {rungs.map((r, i) => {
        const y = 34 + i * 30
        const w = 240 - i * 6
        return (
          <g key={r.name}>
            <rect x="24" y={y} width={w} height="22" rx="5" fill={GOOD} opacity={0.1 + i * 0.03} />
            <text x="36" y={y + 15} fill={INK} fontSize="9">
              {i + 1}. {r.name}
            </text>
            <text x={270} y={y + 15} fill={MUTED} fontSize="8">
              {r.clock}
            </text>
          </g>
        )
      })}
      <rect x="24" y="186" width="352" height="24" rx="5" fill={PANEL} stroke={LINE} />
      <text x="34" y="202" fill={INK} fontSize="8.5">
        Evidence travels with the complaint: reference numbers, dates, statements, the demand.
      </text>
    </>
  )
}

/** l5-056 — three commissions, one limitation period. */
export function RightsPathway() {
  const tiers = [
    { name: 'District commission', limit: 'up to ₹50 lakh', c: GOOD },
    { name: 'State commission', limit: '₹50 lakh to ₹2 crore', c: BLUE },
    { name: 'National commission', limit: 'above ₹2 crore', c: PURPLE },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Where a consumer case goes, by value
      </text>
      {tiers.map((t, i) => {
        const y = 34 + i * 32
        return (
          <g key={t.name}>
            <rect x="24" y={y} width="352" height="26" rx="5" fill={t.c} opacity="0.13" />
            <text x="36" y={y + 17} fill={INK} fontSize="9">
              {t.name}
            </text>
            <text x="252" y={y + 17} fill={t.c} fontSize="9" fontWeight="600">
              {t.limit}
            </text>
          </g>
        )
      })}
      <rect x="24" y="136" width="170" height="74" rx="6" fill={PANEL} stroke={LINE} />
      <text x="34" y="152" fill={AMBER} fontSize="9" fontWeight="600">
        Two years
      </text>
      <text x="34" y="166" fill={INK} fontSize="8">
        from the date the problem
      </text>
      <text x="34" y="178" fill={INK} fontSize="8">
        arose, with discretion to
      </text>
      <text x="34" y="190" fill={INK} fontSize="8">
        condone a delay explained.
      </text>
      <text x="34" y="202" fill={MUTED} fontSize="8">
        Filing is online.
      </text>
      <rect x="206" y="136" width="170" height="74" rx="6" fill={PANEL} stroke={LINE} />
      <text x="216" y="152" fill={GOOD} fontSize="9" fontWeight="600">
        What you can ask for
      </text>
      <text x="216" y="166" fill={INK} fontSize="8">
        refund, replacement, loss
      </text>
      <text x="216" y="178" fill={INK} fontSize="8">
        caused, compensation for
      </text>
      <text x="216" y="190" fill={INK} fontSize="8">
        a deficiency in service or
      </text>
      <text x="216" y="202" fill={INK} fontSize="8">
        an unfair trade practice.
      </text>
    </>
  )
}

/** l5-057 — the clauses that move risk, cost or control. */
export function ContractAnatomy() {
  const clauses = [
    { n: '1', name: 'Definitions', tag: 'cost', c: AMBER },
    { n: '2', name: 'Pricing and reset', tag: 'cost', c: AMBER },
    { n: '3', name: 'Fees and charges', tag: 'cost', c: AMBER },
    { n: '4', name: 'Default and acceleration', tag: 'risk', c: ROSE },
    { n: '5', name: 'Security, set-off, guarantee', tag: 'risk', c: ROSE },
    { n: '6', name: 'Termination and renewal', tag: 'control', c: BLUE },
    { n: '7', name: 'Authority you grant', tag: 'control', c: BLUE },
    { n: '8', name: 'Dispute and jurisdiction', tag: 'control', c: BLUE },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Eight clauses to mark before signing
      </text>
      {clauses.map((c, i) => {
        const x = i < 4 ? 24 : 212
        const y = 34 + (i % 4) * 38
        return (
          <g key={c.name}>
            <rect x={x} y={y} width="164" height="30" rx="5" fill={PANEL} stroke={LINE} />
            <text x={x + 10} y={y + 13} fill={c.c} fontSize="8.5" fontWeight="600">
              {c.n}. {c.name}
            </text>
            <text x={x + 10} y={y + 24} fill={MUTED} fontSize="7.5">
              {c.tag}
            </text>
          </g>
        )
      })}
      <rect x="24" y="188" width="352" height="22" rx="5" fill={BLUE} opacity="0.12" />
      <text x="34" y="203" fill={INK} fontSize="8.5">
        Cost clauses are negotiable. Risk clauses need reading twice. Control clauses decide your exit.
      </text>
    </>
  )
}

/** l5-058 — loan clauses against the rule that governs each one. */
export function LoanClauseMap() {
  const rows = [
    { clause: 'Rate reset on a floating loan', rule: 'options must be offered' },
    { clause: 'Prepayment charge, floating loan', rule: 'not permitted for individuals' },
    { clause: 'Penalty on a missed payment', rule: 'a charge, never added to interest' },
    { clause: 'Lock-in before prepayment', rule: 'cannot block the exit' },
    { clause: 'Insurance bundled with the loan', rule: 'consent, and priced separately' },
    { clause: 'Security and guarantor', rule: 'written, and released on repayment' },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        What the agreement says, and what the rule allows
      </text>
      <text x="24" y="38" fill={MUTED} fontSize="8">
        Clause
      </text>
      <text x="228" y="38" fill={MUTED} fontSize="8">
        The rule that governs it
      </text>
      {rows.map((r, i) => {
        const y = 44 + i * 28
        return (
          <g key={r.clause}>
            <rect x="24" y={y} width="352" height="24" rx="5" fill={PANEL} stroke={LINE} />
            <text x="36" y={y + 16} fill={INK} fontSize="8.5">
              {r.clause}
            </text>
            <text x="228" y={y + 16} fill={GOOD} fontSize="8.5">
              {r.rule}
            </text>
          </g>
        )
      })}
      <rect x="24" y="216" width="0" height="0" fill="none" />
    </>
  )
}

/** l5-059 — the schedule, the wording, and the waiting-period ladder. */
export function PolicyAnatomy() {
  const rungs = [
    { label: '30 days', note: 'initial waiting, except accidents', c: AMBER },
    { label: 'Up to 36 months', note: 'pre-existing conditions and listed treatments', c: ROSE },
    { label: '60 months', note: 'moratorium: after this, no dispute except fraud', c: GOOD },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        The schedule states facts. The wording decides them.
      </text>
      <rect x="24" y="32" width="170" height="56" rx="6" fill={BLUE} opacity="0.12" />
      <text x="34" y="48" fill={BLUE} fontSize="9" fontWeight="600">
        The schedule
      </text>
      <text x="34" y="62" fill={INK} fontSize="8">
        sums insured, members, dates,
      </text>
      <text x="34" y="74" fill={INK} fontSize="8">
        premium, and every endorsement
      </text>
      <text x="34" y="84" fill={MUTED} fontSize="7.5">
        the numbers on this page
      </text>
      <rect x="206" y="32" width="170" height="56" rx="6" fill={PURPLE} opacity="0.12" />
      <text x="216" y="48" fill={PURPLE} fontSize="9" fontWeight="600">
        The wording
      </text>
      <text x="216" y="62" fill={INK} fontSize="8">
        definitions, exclusions, waiting
      </text>
      <text x="216" y="74" fill={INK} fontSize="8">
        periods, sub-limits, conditions
      </text>
      <text x="216" y="84" fill={MUTED} fontSize="7.5">
        the reasons a claim is reduced
      </text>
      {rungs.map((r, i) => {
        const y = 100 + i * 28
        return (
          <g key={r.label}>
            <rect x="24" y={y} width="352" height="24" rx="5" fill={r.c} opacity="0.13" />
            <text x="36" y={y + 16} fill={r.c} fontSize="9" fontWeight="600">
              {r.label}
            </text>
            <text x="160" y={y + 16} fill={INK} fontSize="8.5">
              {r.note}
            </text>
          </g>
        )
      })}
      <rect x="24" y="190" width="352" height="20" rx="5" fill={PANEL} stroke={LINE} />
      <text x="34" y="204" fill={INK} fontSize="8.5">
        Free look: thirty days to return it. Portability carries the waiting periods already served.
      </text>
    </>
  )
}
