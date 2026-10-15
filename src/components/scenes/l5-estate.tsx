/**
 * Level 5 illustrations — band four, batch 1 (chapters l5-071 to l5-080).
 *
 * One illustration per chapter, drawn for that chapter's own idea:
 *   estate-map              where each asset sits, and the route it takes on death
 *   nominee-grid            every account against the nomination it actually holds
 *   beneficiary-tree        one estate branching into the shares it is divided into
 *   will-anatomy            the parts a valid will is assembled from
 *   inheritance-path        the order to work through an inheritance in
 *   succession-timeline     control and ownership moving a generation at a time
 *   joint-holding-modes     the holding modes, and what each one does on death
 *   family-money-map        who holds, who pays and who sees what in a household
 *   marriage-money-defaults the defaults that change when a marriage is registered
 *   parent-support-plan     the recurring, the medical and the one-off layers
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

/** l5-071 — an inventory of where assets sit and how each one passes on. */
export function EstateMap() {
  const rows = [
    { asset: 'Bank deposits', route: 'nomination, or the bank’s claim process', c: BLUE },
    { asset: 'Mutual funds and shares', route: 'nomination, then transmission', c: BLUE },
    { asset: 'Insurance and pension', route: 'nominee named in the policy', c: GOOD },
    { asset: 'Property and land', route: 'will, or intestate succession', c: AMBER },
    { asset: 'Gold, jewellery, vehicles', route: 'whoever holds them, and a will', c: AMBER },
    { asset: 'Business interest', route: 'the firm’s own documents, then a will', c: ROSE },
    { asset: 'Digital accounts', route: 'no nominee in most of them', c: ROSE },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Where everything sits, and how it travels
      </text>
      {rows.map((r, i) => {
        const y = 32 + i * 25
        return (
          <g key={r.asset}>
            <rect x="24" y={y} width="352" height="21" rx="4" fill={PANEL} stroke={LINE} />
            <rect x="24" y={y} width="4" height="21" rx="2" fill={r.c} />
            <text x="38" y={y + 14} fill={INK} fontSize="8.5">
              {r.asset}
            </text>
            <text x="168" y={y + 14} fill={MUTED} fontSize="8">
              {r.route}
            </text>
          </g>
        )
      })}
      <rect x="24" y="206" width="352" height="12" rx="3" fill={AMBER} opacity="0.12" />
      <text x="34" y="215" fill={INK} fontSize="8">
        An estate plan is an inventory first: you cannot nominate what you have forgotten you own.
      </text>
    </>
  )
}

/** l5-072 — accounts against the nomination each one actually carries. */
export function NomineeGrid() {
  const cols = ['Account', 'Nomination', 'Risk if unset']
  const rows = [
    { a: 'Salary savings account', n: 'set', ok: true },
    { a: 'Old savings account', n: 'never set', ok: false },
    { a: 'Term deposit, joint', n: 'survivor clause', ok: true },
    { a: 'Mutual fund folio', n: 'one of four', ok: false },
    { a: 'Demat account', n: 'set', ok: true },
    { a: 'Term insurance', n: 'set', ok: true },
    { a: 'EPF and NPS', n: 'set, in the portal', ok: true },
    { a: 'PPF', n: 'not set', ok: false },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Eight places money sits, audited one by one
      </text>
      {cols.map((c, i) => (
        <text key={c} x={26 + i * 118} y="40" fill={MUTED} fontSize="8">
          {c}
        </text>
      ))}
      {rows.map((r, i) => {
        const y = 46 + i * 19
        return (
          <g key={r.a}>
            <rect x="24" y={y} width="352" height="16" rx="3" fill={r.ok ? PANEL : ROSE} opacity={r.ok ? 1 : 0.14} />
            <text x="26" y={y + 11} fill={INK} fontSize="8">
              {r.a}
            </text>
            <text x="144" y={y + 11} fill={r.ok ? GOOD : ROSE} fontSize="8">
              {r.n}
            </text>
            <text x="262" y={y + 11} fill={MUTED} fontSize="8">
              {r.ok ? 'nominee receives it' : 'a claim with no name on it'}
            </text>
          </g>
        )
      })}
    </>
  )
}

/** l5-073 — one estate branching into the shares it is divided into. */
export function BeneficiaryTree() {
  const leaves = [
    { name: 'Spouse', share: 1 / 3, c: BLUE },
    { name: 'Children, equally', share: 1 / 3, c: GOOD },
    { name: 'Mother', share: 1 / 3, c: AMBER },
    { name: 'A trust for a minor', share: 0, c: PURPLE },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        One estate, divided by the rule you choose
      </text>
      <rect x="130" y="32" width="140" height="26" rx="6" fill={BLUE} opacity="0.16" />
      <text x="164" y="49" fill={INK} fontSize="9">
        The estate
      </text>
      <line x1="200" y1="58" x2="200" y2="74" stroke={LINE} />
      <line x1="60" y1="74" x2="340" y2="74" stroke={LINE} />
      {leaves.map((l, i) => {
        const x = 30 + i * 92
        return (
          <g key={l.name}>
            <line x1={x + 30} y1="74" x2={x + 30} y2="86" stroke={LINE} />
            <rect x={x} y="86" width="76" height="46" rx="6" fill={PANEL} stroke={LINE} />
            <circle cx={x + 38} cy="100" r="3" fill={l.c} />
            <text x={x + 8} y="116" fill={INK} fontSize="8">
              {l.name.length > 14 ? l.name.slice(0, 14) : l.name}
            </text>
            <text x={x + 8} y="126" fill={l.c} fontSize="7.5">
              {l.share > 0 ? `${Math.round(l.share * 100)}% each line` : 'no share: a tool'}
            </text>
          </g>
        )
      })}
      <rect x="24" y="144" width="352" height="66" rx="6" fill={AMBER} opacity="0.12" />
      <text x="34" y="160" fill={AMBER} fontSize="8.5" fontWeight="600">
        A will, a nomination and the default rule can each say something different
      </text>
      <text x="34" y="174" fill={INK} fontSize="8">
        A nomination tells the institution who may receive the money. A will says who is entitled to
      </text>
      <text x="34" y="186" fill={INK} fontSize="8">
        it. Where nothing is written, the succession law of the person’s religion decides, and it
      </text>
      <text x="34" y="198" fill={INK} fontSize="8">
        does not always split the estate the way the family expects.
      </text>
    </>
  )
}

/** l5-074 — the parts a valid will is assembled from. */
export function WillAnatomy() {
  const parts = [
    { part: 'Identification', note: 'who the testator is, clearly' },
    { part: 'Revocation', note: 'what earlier will this replaces' },
    { part: 'Executor', note: 'who applies for probate or acts on it' },
    { part: 'Specific bequests', note: 'asset by asset, described precisely' },
    { part: 'Residue', note: 'whatever is left over, and to whom' },
    { part: 'Guardianship', note: 'for a minor child, if needed' },
    { part: 'Signature and witnesses', note: 'two witnesses, present together' },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Seven parts, and only the last two are formalities
      </text>
      {parts.map((p, i) => {
        const y = 32 + i * 24
        return (
          <g key={p.part}>
            <rect x="24" y={y} width="352" height="20" rx="4" fill={PANEL} stroke={LINE} />
            <text x="34" y={y + 14} fill={INK} fontSize="8.5">
              {p.part}
            </text>
            <text x="176" y={y + 14} fill={MUTED} fontSize="8">
              {p.note}
            </text>
          </g>
        )
      })}
      <rect x="24" y="204" width="352" height="14" rx="4" fill={GOOD} opacity="0.12" />
      <text x="34" y="214" fill={INK} fontSize="8">
        Registration is optional. Clarity is not: an ambiguous bequest is what creates a dispute.
      </text>
    </>
  )
}

/** l5-075 — the order in which to work through an inheritance. */
export function InheritancePath() {
  const steps = [
    { n: '1', t: 'Establish what passes', d: 'nominations, joint holdings, then the will', c: BLUE },
    { n: '2', t: 'Clear liabilities', d: 'loans, dues and any tax on the estate', c: ROSE },
    { n: '3', t: 'Verify title', d: 'mutate, transfer and record each asset', c: AMBER },
    { n: '4', t: 'Hold, then decide', d: 'no sales in the first months', c: GOOD },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Inheritance is a process, not a windfall
      </text>
      {steps.map((s, i) => {
        const y = 34 + i * 42
        return (
          <g key={s.n}>
            <circle cx="40" cy={y + 16} r="10" fill={s.c} opacity="0.2" />
            <text x="36" y={y + 19} fill={s.c} fontSize="9" fontWeight="600">
              {s.n}
            </text>
            <rect x="62" y={y} width="314" height="32" rx="6" fill={PANEL} stroke={LINE} />
            <text x="74" y={y + 14} fill={INK} fontSize="8.5">
              {s.t}
            </text>
            <text x="74" y={y + 25} fill={MUTED} fontSize="8">
              {s.d}
            </text>
          </g>
        )
      })}
      <rect x="24" y="204" width="352" height="14" rx="4" fill={AMBER} opacity="0.12" />
      <text x="34" y="214" fill={INK} fontSize="8">
        An inherited asset keeps the previous owner’s cost and holding period for capital gains.
      </text>
    </>
  )
}

/** l5-076 — control and ownership moving a generation at a time. */
export function SuccessionTimeline() {
  const rows = [
    { who: 'Founder', holds: 'ownership, control, and the knowledge', c: BLUE },
    { who: 'Next generation', holds: 'responsibility, then a share', c: GOOD },
    { who: 'The business', holds: 'its own rules, separate from the family', c: PURPLE },
    { who: 'The documents', holds: 'the only thing that decides a dispute', c: AMBER },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Ownership, control and knowledge move separately
      </text>
      <line x1="40" y1="46" x2="360" y2="46" stroke={LINE} />
      {[0, 1, 2, 3].map((i) => (
        <circle key={i} cx={40 + i * 106} cy="46" r="4" fill={BLUE} opacity={0.5 + i * 0.15} />
      ))}
      <text x="34" y="62" fill={MUTED} fontSize="8">
        Today
      </text>
      <text x="298" y="62" fill={MUTED} fontSize="8">
        The handover
      </text>
      {rows.map((r, i) => {
        const y = 74 + i * 32
        return (
          <g key={r.who}>
            <rect x="24" y={y} width="352" height="26" rx="5" fill={PANEL} stroke={LINE} />
            <rect x="24" y={y} width="4" height="26" rx="2" fill={r.c} />
            <text x="38" y={y + 17} fill={INK} fontSize="8.5">
              {r.who}
            </text>
            <text x="150" y={y + 17} fill={MUTED} fontSize="8">
              {r.holds}
            </text>
          </g>
        )
      })}
      <rect x="24" y="204" width="352" height="14" rx="4" fill={ROSE} opacity="0.12" />
      <text x="34" y="214" fill={INK} fontSize="8">
        An inheritance divided once is a distribution. A succession planned early is a handover.
      </text>
    </>
  )
}

/** l5-077 — the joint-holding modes and what each does on death. */
export function JointHoldingModes() {
  const modes = [
    { mode: 'Single', on: 'no survivor, so the estate decides', c: ROSE },
    { mode: 'Either or survivor', on: 'the survivor may operate the account', c: BLUE },
    { mode: 'Former or survivor', on: 'the second holder acts only after a death', c: AMBER },
    { mode: 'Jointly', on: 'both signatures are needed, always', c: PURPLE },
    { mode: 'Anyone or survivor', on: 'convenience for a large household', c: GOOD },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Five ways to hold something, and five different endings
      </text>
      <text x="24" y="38" fill={MUTED} fontSize="8">
        Holding mode
      </text>
      <text x="188" y="38" fill={MUTED} fontSize="8">
        What happens when one holder dies
      </text>
      {modes.map((m, i) => {
        const y = 44 + i * 26
        return (
          <g key={m.mode}>
            <rect x="24" y={y} width="352" height="22" rx="4" fill={PANEL} stroke={LINE} />
            <circle cx="34" cy={y + 11} r="3" fill={m.c} />
            <text x="44" y={y + 15} fill={INK} fontSize="8.5">
              {m.mode}
            </text>
            <text x="188" y={y + 15} fill={MUTED} fontSize="8">
              {m.on}
            </text>
          </g>
        )
      })}
      <rect x="24" y="176" width="352" height="36" rx="6" fill={AMBER} opacity="0.12" />
      <text x="34" y="191" fill={INK} fontSize="8">
        Survivorship lets the bank pay one person and close the account. It does not decide who
      </text>
      <text x="34" y="203" fill={INK} fontSize="8">
        owns what: the other heirs keep their claim on it. A joint holding is convenience, not a will.
      </text>
    </>
  )
}

/** l5-078 — who holds, who pays and who sees what in a household. */
export function FamilyMoneyMap() {
  const nodes = [
    { x: 30, label: 'Joint account', note: 'bills and shared costs' },
    { x: 146, label: 'Individual accounts', note: 'each person’s own money' },
    { x: 262, label: 'Investments', note: 'held in one name, tracked together' },
  ]
  const rows = [
    { q: 'Who pays what', a: 'agreed, in proportions, in writing' },
    { q: 'Who sees what', a: 'statements visible to both' },
    { q: 'Who decides what', a: 'limits above which both agree' },
    { q: 'What if one income stops', a: 'the plan, decided while calm' },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Three places the money lives, four things to agree
      </text>
      {nodes.map((n) => (
        <g key={n.label}>
          <rect x={n.x} y="32" width="106" height="40" rx="6" fill={PANEL} stroke={LINE} />
          <text x={n.x + 8} y="50" fill={INK} fontSize="8">
            {n.label}
          </text>
          <text x={n.x + 8} y="62" fill={MUTED} fontSize="7.5">
            {n.note}
          </text>
        </g>
      ))}
      {rows.map((r, i) => {
        const y = 86 + i * 24
        return (
          <g key={r.q}>
            <rect x="24" y={y} width="352" height="20" rx="4" fill={BLUE} opacity="0.1" />
            <text x="34" y={y + 14} fill={INK} fontSize="8.5">
              {r.q}
            </text>
            <text x="176" y={y + 14} fill={MUTED} fontSize="8">
              {r.a}
            </text>
          </g>
        )
      })}
      <rect x="24" y="186" width="352" height="26" rx="6" fill={GOOD} opacity="0.12" />
      <text x="34" y="202" fill={INK} fontSize="8">
        The household that survives a disagreement is the one that wrote the rules before it had one.
      </text>
    </>
  )
}

/** l5-079 — the defaults that change when a marriage is registered. */
export function MarriageMoneyDefaults() {
  const rows = [
    { t: 'Before marriage', d: 'each partner’s assets, debts and income are their own', c: BLUE },
    { t: 'On marriage', d: 'a spouse joins the succession law as an heir', c: GOOD },
    { t: 'Gifts on marriage', d: 'exempt from tax, whoever gives them', c: PURPLE },
    { t: 'Streedhan', d: 'a woman’s own property, and it stays hers', c: AMBER },
    { t: 'Debt', d: 'a spouse does not inherit a partner’s debts', c: ROSE },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        There is no joint tax status, and no joint debt
      </text>
      {rows.map((r, i) => {
        const y = 32 + i * 30
        return (
          <g key={r.t}>
            <rect x="24" y={y} width="352" height="26" rx="5" fill={PANEL} stroke={LINE} />
            <rect x="24" y={y} width="4" height="26" rx="2" fill={r.c} />
            <text x="38" y={y + 12} fill={INK} fontSize="8.5">
              {r.t}
            </text>
            <text x="38" y={y + 22} fill={MUTED} fontSize="7.5">
              {r.d}
            </text>
          </g>
        )
      })}
      <rect x="24" y="186" width="352" height="26" rx="6" fill={AMBER} opacity="0.12" />
      <text x="34" y="202" fill={INK} fontSize="8">
        India has no community of property on marriage: what one earned stays that person’s money.
      </text>
    </>
  )
}

/** l5-080 — the layers of cost in supporting a parent. */
export function ParentSupportPlan() {
  const layers = [
    { name: 'Health cover for parents', note: 'premium, and what it excludes', v: 90, c: ROSE },
    { name: 'Monthly support', note: 'recurring, and should be indexed', v: 72, c: BLUE },
    { name: 'Recurring medicines', note: 'the line people forget to budget', v: 48, c: AMBER },
    { name: 'One-off medical events', note: 'a buffer, not a loan', v: 34, c: PURPLE },
    { name: 'Home help and comfort', note: 'quality of life, not treatment', v: 20, c: GOOD },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Five layers, and only one of them is insurance
      </text>
      {layers.map((l, i) => {
        const y = 32 + i * 32
        return (
          <g key={l.name}>
            <rect x="24" y={y} width="352" height="28" rx="5" fill={PANEL} stroke={LINE} />
            <rect x="24" y={y} width={l.v * 3.5} height="28" rx="5" fill={l.c} opacity="0.16" />
            <text x="34" y={y + 12} fill={INK} fontSize="8.5">
              {l.name}
            </text>
            <text x="34" y={y + 22} fill={MUTED} fontSize="7.5">
              {l.note}
            </text>
          </g>
        )
      })}
      <rect x="24" y="198" width="352" height="16" rx="4" fill={GOOD} opacity="0.12" />
      <text x="34" y="210" fill={INK} fontSize="8">
        Support a parent on a plan, not on goodwill: a monthly transfer is easier to sustain. 
      </text>
    </>
  )
}
