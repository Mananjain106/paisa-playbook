/**
 * Level 5 illustrations — band one, batch 2 (chapters l5-005 to l5-014).
 *
 * One illustration per chapter, drawn for that chapter's own idea:
 *   benefit-stack       what is really inside a "benefits" line
 *   pf-ledger           provident fund as a ledger you own for decades
 *   regime-seesaw       the two tax regimes as a balance, not a slogan
 *   monthly-cycle       a month with fixed dates instead of memory
 *   cover-months        how many months a buffer actually buys
 *   sinking-jars        annual bills broken into monthly transfers
 *   budget-shapes       three systems, three shapes of money
 *   zero-bucket         every rupee given a job, ending at zero
 *   frame-vs-reality    50/30/20 against a metro rent bill
 *   cashflow-timeline   timing of money, not just amounts
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
const ORANGE = '#fb923c'
const ROSE = '#fb7185'

/** l5-005 — a benefits line, split into what is money and what is not. */
export function BenefitStack() {
  const rows: { label: string; value: string; cash: boolean; c: string }[] = [
    { label: 'Employer EPF + EPS', value: '₹36,000/yr', cash: true, c: BLUE },
    { label: 'Gratuity accrual', value: '₹14,430/yr', cash: true, c: GOOD },
    { label: 'Group health cover', value: '₹5L cover', cash: false, c: ROSE },
    { label: 'Meal card, 2 meals a day', value: '₹1,05,600/yr', cash: false, c: AMBER },
    { label: 'Term life (employer)', value: '₹1 Cr cover', cash: false, c: PURPLE },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        A ₹9 lakh CTC hides a benefits line worth pricing
      </text>
      {rows.map((r, i) => {
        const y = 38 + i * 30
        return (
          <g key={r.label}>
            <rect x="24" y={y} width="352" height="24" rx="6" fill={r.c} opacity="0.14" />
            <rect x="24" y={y} width="5" height="24" rx="2" fill={r.c} />
            <text x="40" y={y + 16} fill={INK} fontSize="10.5">
              {r.label}
            </text>
            <text x="240" y={y + 16} fill={r.c} fontSize="10.5">
              {r.value}
            </text>
            <text x="330" y={y + 16} fill={MUTED} fontSize="9">
              {r.cash ? 'cash-equivalent' : 'cannot be cashed out'}
            </text>
          </g>
        )
      })}
      <text x="24" y="204" fill={MUTED} fontSize="9.5">
        The first two lines are part of CTC and land in your own accounts. The last three can vanish on your
        last working day.
      </text>
    </>
  )
}

/** l5-006 — the provident fund as an account you own across employers. */
export function PfLedger() {
  const months = [
    { m: 'Month 1', employee: 3000, employer: 3000, eps: 2083, epf: 917 },
    { m: 'Month 2', employee: 3000, employer: 3000, eps: 2083, epf: 917 },
    { m: 'Month 3', employee: 3000, employer: 3000, eps: 2083, epf: 917 },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        One UAN, one account, three lines per month
      </text>
      <text x="24" y="44" fill={MUTED} fontSize="9.5">
        On ₹25,000 of PF wages — the ceiling in force since 17 September 2026
      </text>
      <g fontSize="9.5">
        <text x="24" y="66" fill={MUTED}>Month</text>
        <text x="96" y="66" fill={MUTED}>You pay</text>
        <text x="168" y="66" fill={MUTED}>Employer pays</text>
        <text x="264" y="66" fill={MUTED}>of which EPS (8.33%)</text>
        <text x="360" y="66" fill={MUTED} textAnchor="end">EPF</text>
      </g>
      <line x1="24" y1="72" x2="376" y2="72" stroke={LINE} />
      {months.map((r, i) => {
        const y = 90 + i * 22
        return (
          <g key={r.m} fontSize="10">
            <text x="24" y={y} fill={INK}>{r.m}</text>
            <text x="96" y={y} fill={BLUE}>₹{r.employee.toLocaleString('en-IN')}</text>
            <text x="168" y={y} fill={GOOD}>₹{r.employer.toLocaleString('en-IN')}</text>
            <text x="264" y={y} fill={AMBER}>₹{r.eps.toLocaleString('en-IN')}</text>
            <text x="360" y={y} fill={MUTED} textAnchor="end">₹{r.epf.toLocaleString('en-IN')}</text>
          </g>
        )
      })}
      <rect x="24" y="162" width="352" height="34" rx="8" fill={PANEL} stroke={LINE} />
      <text x="36" y="176" fill={INK} fontSize="9.5">
        A job change transfers the account, it does not empty it:
      </text>
      <text x="36" y="189" fill={GOOD} fontSize="9.5">
        Employer A → same UAN → Employer B — interest keeps running on the whole balance.
      </text>
    </>
  )
}

/** l5-007 — old versus new regime, priced instead of argued about. */
export function RegimeSeesaw() {
  // Both cases use the unchanged tax-year-2026-27 slabs, the ₹50,000/₹75,000
  // standard deductions, the section 156 rebate nil-tax threshold of ₹12 lakh
  // of taxable income and the 4% cess.
  // Case A: ₹20 lakh of gross, a metro rent of ₹60,000 a month, ₹1.5 lakh of
  // 80C and ₹2 lakh of home-loan interest — taxable income falls to ₹12 lakh
  // in the old regime and the deductions finally outweigh the higher rates.
  // Case B: ₹15 lakh gross with a ₹3.6 lakh annual rent and ₹1.5 lakh of 80C —
  // the new regime wins. The regime is a calculation, not a side.
  const cases = [
    {
      title: '₹20L gross, ₹60,000 metro rent, 80C, home loan',
      old: 1_79_400,
      fresh: 1_92_400,
      winner: 'old' as const,
      margin: 'old wins by ₹13,000',
    },
    {
      title: '₹15L gross, ₹3.6L rent, 80C only',
      old: 1_21_680,
      fresh: 97_500,
      winner: 'new' as const,
      margin: 'new wins by ₹24,180',
    },
  ]
  const max = 2_10_000
  return (
    <>
      <text x="24" y="20" fill={INK} fontSize="12.5" fontWeight="600">
        Two salaries, two different winners
      </text>
      <text x="376" y="20" fill={MUTED} fontSize="8.5" textAnchor="end">
        tax incl. 4% cess
      </text>
      {cases.map((c, ci) => {
        const y = 34 + ci * 92
        return (
          <g key={c.title}>
            <text x="24" y={y + 10} fill={INK} fontSize="9.5">
              {c.title}
            </text>
            {(
              [
                ['Old regime', c.old, ORANGE],
                ['New regime', c.fresh, GOOD],
              ] as const
            ).map(([label, tax, colour], ri) => {
              const w = Math.max(20, (tax / max) * 250)
              const yy = y + 18 + ri * 20
              return (
                <g key={label}>
                  <text x="24" y={yy + 12} fill={MUTED} fontSize="8.5">
                    {label}
                  </text>
                  <rect x="86" y={yy} width={w} height="15" rx="3" fill={colour} opacity="0.6" />
                  <text x={92 + w} y={yy + 12} fill={colour} fontSize="9.5">
                    ₹{tax.toLocaleString('en-IN')}
                  </text>
                </g>
              )
            })}
            <text x="376" y={y + 30} fill={c.winner === 'old' ? ORANGE : GOOD} fontSize="9" textAnchor="end">
              {c.margin}
            </text>
          </g>
        )
      })}
      <rect x="24" y="204" width="352" height="14" rx="6" fill={PANEL} stroke={LINE} />
      <text x="32" y="214" fill={MUTED} fontSize="8.5">
        Same slabs in both cases: the winner is decided by rent, 80C and home-loan interest alone.
      </text>
    </>
  )
}

/** l5-008 — a month that runs on dates rather than memory. */
export function MonthlyCycle() {
  const steps = [
    { day: '1st', label: 'salary lands', c: GOOD },
    { day: '2nd', label: 'automatic transfers out', c: BLUE },
    { day: '5th', label: 'fixed bills cleared', c: PURPLE },
    { day: '15th', label: 'mid-month spend check', c: AMBER },
    { day: '25th', label: 'variable bills reviewed', c: ORANGE },
    { day: '30th', label: 'one-page dashboard updated', c: ROSE },
  ]
  const cx = 200
  const cy = 116
  const r = 74
  return (
    <>
      <text x="24" y="20" fill={INK} fontSize="12.5" fontWeight="600">
        Six dates replace forty decisions
      </text>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={LINE} />
      {steps.map((s, i) => {
        const a = -Math.PI / 2 + (i / steps.length) * Math.PI * 2
        const x = cx + Math.cos(a) * r
        const y = cy + Math.sin(a) * r
        return (
          <g key={s.day}>
            <circle cx={x} cy={y} r="12" fill={s.c} opacity="0.22" />
            <circle cx={x} cy={y} r="4" fill={s.c} />
            <text x={x} y={y + 22} fill={s.c} fontSize="9.5" textAnchor="middle">
              {s.day}
            </text>
            <text x={x} y={y + 33} fill={MUTED} fontSize="8.5" textAnchor="middle">
              {s.label}
            </text>
          </g>
        )
      })}
      <text x={cx} y={cy - 4} fill={INK} fontSize="10" textAnchor="middle">
        fixed dates
      </text>
      <text x={cx} y={cy + 10} fill={MUTED} fontSize="9" textAnchor="middle">
        every month
      </text>
    </>
  )
}

/** l5-009 — what a buffer actually buys. */
export function CoverMonths() {
  const months = [1, 2, 3, 4, 5, 6]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Six months of cover is not six months of salary
      </text>
      <text x="24" y="42" fill={MUTED} fontSize="9.5">
        Essentials of ₹22,000/month → a target of ₹1,32,000. Total spending of ₹43,800/month → ₹2,62,800.
      </text>
      {months.map((m) => {
        const x = 26 + (m - 1) * 58
        return (
          <g key={m}>
            <rect x={x} y="58" width="46" height={20 + m * 8} rx="5" fill={GOOD} opacity={0.2 + m * 0.08} />
            <rect x={x} y={78 + m * 8} width="46" height="12" rx="3" fill={LINE} />
            <text x={x + 23} y="52" fill={GOOD} fontSize="9" textAnchor="middle">
              month {m}
            </text>
            <text x={x + 23} y={104 + m * 8} fill={MUTED} fontSize="8" textAnchor="middle">
              {(22 * m).toLocaleString('en-IN')}k essentials
            </text>
          </g>
        )
      })}
      <text x="24" y="196" fill={MUTED} fontSize="9">
        The lower bar is what it costs to survive the month. The buffer is sized against it, not against the
        lifestyle.
      </text>
      <text x="24" y="210" fill={AMBER} fontSize="9">
        Where it sits matters as much as how much: liquid, separate, and slightly inconvenient to reach.
      </text>
    </>
  )
}

/** l5-010 — annual bills turned into monthly transfers. */
export function SinkingJars() {
  const jars = [
    { label: 'Health insurance premium', annual: 24_000, c: ROSE },
    { label: 'Vehicle service + insurance', annual: 18_000, c: AMBER },
    { label: 'Festivals and gifts', annual: 30_000, c: PURPLE },
    { label: 'Travel home', annual: 36_000, c: BLUE },
    { label: 'Repairs and replacements', annual: 24_000, c: GOOD },
  ]
  const total = jars.reduce((s, j) => s + j.annual / 12, 0)
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        ₹1,32,000 of annual bills is ₹11,000 a month
      </text>
      {jars.map((j, i) => {
        const y = 40 + i * 26
        return (
          <g key={j.label}>
            <rect x="24" y={y} width="120" height="18" rx="4" fill={j.c} opacity="0.2" />
            <text x="32" y={y + 13} fill={INK} fontSize="9">
              {j.label}
            </text>
            <text x="156" y={y + 13} fill={MUTED} fontSize="9">
              ₹{j.annual.toLocaleString('en-IN')}/yr
            </text>
            <text x="248" y={y + 13} fill={j.c} fontSize="10">
              → ₹{Math.round(j.annual / 12).toLocaleString('en-IN')}/month
            </text>
          </g>
        )
      })}
      <line x1="24" y1="176" x2="376" y2="176" stroke={LINE} />
      <text x="24" y="192" fill={INK} fontSize="10.5">
        Total set aside each month: ₹{Math.round(total).toLocaleString('en-IN')}
      </text>
      <text x="24" y="208" fill={MUTED} fontSize="9">
        A named pot per bill, so the premium never arrives in the same month as a festival.
      </text>
    </>
  )
}

/** l5-011 — three budgeting systems, three shapes of the same money. */
export function BudgetShapes() {
  const systems = [
    {
      name: 'Envelope',
      note: 'cash-like pots, hard stops',
      c: BLUE,
      slices: [22, 6, 5, 6, 5],
    },
    {
      name: 'Percentage',
      note: 'rules, flexible inside each',
      c: GOOD,
      slices: [45, 30, 25],
    },
    {
      name: 'Zero-based',
      note: 'every rupee named monthly',
      c: PURPLE,
      slices: [20, 15, 14, 11, 8, 7, 6, 5, 4, 4, 3, 3],
    },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Same ₹43,800, three different shapes
      </text>
      {systems.map((s, i) => {
        const x = 30 + i * 122
        const totalUnits = s.slices.reduce((a, b) => a + b, 0)
        const h = 120
        let y = 56 + h
        return (
          <g key={s.name}>
            <rect x={x} y="56" width="94" height={h} rx="8" fill={PANEL} stroke={LINE} />
            {s.slices.map((v, j) => {
              const bh = (v / totalUnits) * h
              y -= bh
              return (
                <rect
                  key={j}
                  x={x + 3}
                  y={y}
                  width="88"
                  height={Math.max(3, bh - 2)}
                  fill={s.c}
                  opacity={0.3 + (j % 3) * 0.2}
                />
              )
            })}
            <text x={x + 47} y="196" fill={s.c} fontSize="10" textAnchor="middle">
              {s.name}
            </text>
            <text x={x + 47} y="210" fill={MUTED} fontSize="8" textAnchor="middle">
              {s.note}
            </text>
          </g>
        )
      })}
      <text x="24" y="46" fill={MUTED} fontSize="9">
        Each system is good at something the others are poor at — the choice is about which failure you can live with.
      </text>
    </>
  )
}

/** l5-012 — every rupee assigned to a job before the month starts. */
export function ZeroBucket() {
  const slices = [
    { label: 'Rent', v: 14_000, c: BLUE },
    { label: 'Food', v: 6_000, c: GOOD },
    { label: 'Transport', v: 2_500, c: PURPLE },
    { label: 'Buffer', v: 8_500, c: AMBER },
    { label: 'Goals', v: 4_000, c: ORANGE },
    { label: 'Debt', v: 1_000, c: ROSE },
    { label: 'Family', v: 3_000, c: '#a3e635' },
    { label: 'Life', v: 4_800, c: '#22d3ee' },
  ]
  const total = slices.reduce((s, x) => s + x.v, 0)
  let x = 24
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Assigned to zero on ₹43,800
      </text>
      {slices.map((s) => {
        const w = (s.v / total) * 352
        const rect = <rect key={s.label} x={x} y="42" width={w} height="34" fill={s.c} opacity="0.82" />
        x += w
        return rect
      })}
      {slices.map((s, i) => {
        const col = i % 2
        const row = Math.floor(i / 2)
        return (
          <g key={s.label}>
            <circle cx={32 + col * 180} cy={104 + row * 20} r="4" fill={s.c} />
            <text x={44 + col * 180} y={108 + row * 20} fill={INK} fontSize="10">
              {s.label}
            </text>
            <text x={150 + col * 180} y={108 + row * 20} fill={MUTED} fontSize="10">
              ₹{s.v.toLocaleString('en-IN')}
            </text>
          </g>
        )
      })}
      <rect x="24" y="188" width="352" height="22" rx="6" fill={GOOD} opacity="0.14" />
      <text x="36" y="203" fill={GOOD} fontSize="10">
        Unassigned: ₹0 — that is what "zero-based" means, and it is checked before the month starts.
      </text>
    </>
  )
}

/** l5-013 — the 50/30/20 rule against a big-city rent bill. */
export function FrameVsReality() {
  const groups = [
    { label: 'Needs', rule: 50, actual: 71, c: BLUE },
    { label: 'Wants', rule: 30, actual: 17, c: AMBER },
    { label: 'Savings', rule: 20, actual: 12, c: GOOD },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        50/30/20 assumes a rent that a metro does not charge
      </text>
      <text x="24" y="42" fill={MUTED} fontSize="9.5">
        ₹43,800 take-home, ₹18,000 rent, ₹4,500 commute: the ratio is already broken by two fixed lines
      </text>
      {groups.map((g, i) => {
        const y = 60 + i * 44
        return (
          <g key={g.label}>
            <text x="24" y={y + 12} fill={INK} fontSize="10">
              {g.label}
            </text>
            <rect x="80" y={y} width={g.rule * 3.6} height="16" rx="3" fill={g.c} opacity="0.28" />
            <text x={88 + g.rule * 3.6} y={y + 12} fill={MUTED} fontSize="9">
              rule {g.rule}%
            </text>
            <rect x="80" y={y + 18} width={g.actual * 3.6} height="16" rx="3" fill={g.c} opacity="0.75" />
            <text x={88 + g.actual * 3.6} y={y + 30} fill={g.c} fontSize="9">
              actual {g.actual}%
            </text>
          </g>
        )
      })}
      <rect x="24" y="192" width="352" height="20" rx="6" fill={PANEL} stroke={LINE} />
      <text x="36" y="206" fill={AMBER} fontSize="9.5">
        Use the ratio as a diagnostic. When rent and commute pass 60%, fix those two lines, not your willpower.
      </text>
    </>
  )
}

/** l5-014 — timing: pay date against every due date. */
export function CashflowTimeline() {
  const events = [
    { day: 1, label: 'salary', c: GOOD, dy: -18 },
    { day: 3, label: 'rent due', c: ROSE, dy: 26 },
    { day: 7, label: 'card due', c: ORANGE, dy: -18 },
    { day: 10, label: 'EMI', c: PURPLE, dy: 26 },
    { day: 15, label: 'SIP debit', c: BLUE, dy: -18 },
    { day: 28, label: 'insurance', c: AMBER, dy: 26 },
  ]
  const at = (d: number) => 34 + ((d - 1) / 30) * 336
  return (
    <>
      <text x="24" y="20" fill={INK} fontSize="12.5" fontWeight="600">
        A solvent month can still bounce a payment
      </text>
      <line x1="24" y1="110" x2="376" y2="110" stroke={LINE} />
      {[1, 8, 15, 22, 30].map((d) => (
        <line key={d} x1={at(d)} y1="104" x2={at(d)} y2="116" stroke={LINE} />
      ))}
      {events.map((e) => (
        <g key={e.label}>
          <line x1={at(e.day)} y1="110" x2={at(e.day)} y2={110 + e.dy} stroke={e.c} strokeWidth="1.5" />
          <circle cx={at(e.day)} cy="110" r="3.5" fill={e.c} />
          <text x={at(e.day)} y={110 + e.dy - 4} fill={e.c} fontSize="9" textAnchor="middle">
            {e.label}
          </text>
          <text x={at(e.day)} y={110 + e.dy + (e.dy < 0 ? -14 : 12)} fill={MUTED} fontSize="8" textAnchor="middle">
            day {e.day}
          </text>
        </g>
      ))}
      <rect x="24" y="152" width="352" height="52" rx="8" fill={PANEL} stroke={LINE} />
      <text x="36" y="170" fill={INK} fontSize="9.5">
        Money arriving on the 1st and leaving on the 3rd leaves two days of float for a delayed credit.
      </text>
      <text x="36" y="185" fill={MUTED} fontSize="9">
        Move a due date, keep a floor balance, or hold one bill's worth outside the spending account.
      </text>
      <text x="36" y="199" fill={MUTED} fontSize="9">
        Timing problems are cheaper to fix than income problems — they need a date, not a raise.
      </text>
    </>
  )
}
