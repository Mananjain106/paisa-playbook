/**
 * Level 5 illustrations — band one, batch 3 (chapters l5-015 to l5-019).
 *
 * One illustration per chapter, drawn for that chapter's own idea:
 *   auto-transfer-rail   three rails for moving money, and how each one fails
 *   sip-machine          salary to mandate to units, with the step-up and the miss
 *   bill-clock           a month of bills, the pre-debit notice, and the variable bills
 *   alert-trials         one month of transactions against an alert threshold
 *   dashboard-one-page   the few numbers worth checking monthly
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

/** l5-015 — the rails that move money automatically, and their failure modes. */
export function AutoTransferRail() {
  const rails = [
    {
      name: 'Standing instruction',
      where: 'Your bank',
      limit: 'No per-transaction ceiling',
      fails: 'Bounces if the balance is short; the bank may charge you for it',
      c: BLUE,
    },
    {
      name: 'UPI AutoPay / e-mandate',
      where: 'NPCI, on your UPI app',
      limit: '₹15,000 without AFA (₹1,00,000 for funds, insurance and cards)',
      fails: 'Four attempts allowed; then the collection is marked failed',
      c: PURPLE,
    },
    {
      name: 'NACH mandate',
      where: 'NPCI, via the biller',
      limit: 'Set by the mandate amount',
      fails: 'One presentation per cycle, with a pre-debit notice',
      c: GOOD,
    },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        Three rails, three different ways to fail
      </text>
      {rails.map((r, i) => {
        const y = 34 + i * 60
        return (
          <g key={r.name}>
            <rect x="24" y={y} width="352" height="52" rx="8" fill={r.c} opacity="0.08" />
            <rect x="24" y={y} width="5" height="52" rx="2" fill={r.c} />
            <text x="38" y={y + 16} fill={r.c} fontSize="10.5" fontWeight="600">
              {r.name}
            </text>
            <text x="38" y={y + 30} fill={MUTED} fontSize="8.5">
              {r.where} · {r.limit}
            </text>
            <text x="38" y={y + 44} fill={INK} fontSize="9">
              On failure: {r.fails}
            </text>
          </g>
        )
      })}
      <text x="24" y="216" fill={MUTED} fontSize="8.5">
        Choose the rail by what happens when it fails, not by which app offered it.
      </text>
    </>
  )
}

/** l5-016 — an automated investment, end to end. */
export function SipMachine() {
  const steps = [
    { label: 'Salary', note: 'day 1', c: GOOD },
    { label: 'Mandate', note: 'day 3', c: BLUE },
    { label: 'Fund', note: 'NAV of receipt', c: PURPLE },
    { label: 'Units', note: 'your holding', c: AMBER },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} fontSize="13" fontWeight="600">
        An instalment plan is a pipeline, and every joint can leak
      </text>
      {steps.map((s, i) => {
        const x = 26 + i * 90
        return (
          <g key={s.label}>
            <rect x={x} y="42" width="76" height="40" rx="8" fill={s.c} opacity="0.18" stroke={LINE} />
            <text x={x + 38} y="62" fill={s.c} fontSize="10" textAnchor="middle">
              {s.label}
            </text>
            <text x={x + 38} y="75" fill={MUTED} fontSize="8" textAnchor="middle">
              {s.note}
            </text>
            {i < steps.length - 1 && (
              <path d={`M${x + 78} 62 l8 0`} stroke={MUTED} strokeWidth="1.5" />
            )}
          </g>
        )
      })}
      <path d="M64 90 C 120 128, 240 128, 300 92" stroke={GOOD} strokeWidth="1.5" fill="none" strokeDasharray="4 3" />
      <text x="182" y="132" fill={GOOD} fontSize="9" textAnchor="middle">
        step-up each year, once, in writing
      </text>
      <rect x="24" y="146" width="352" height="52" rx="8" fill={ROSE} opacity="0.1" />
      <text x="38" y="164" fill={ROSE} fontSize="9.5" fontWeight="600">
        Where it leaks: a missed instalment
      </text>
      <text x="38" y="178" fill={INK} fontSize="9">
        The mandate retries a few times, then fails. No units are bought that month,
      </text>
      <text x="38" y="191" fill={MUTED} fontSize="9">
        and the plan quietly stops being the plan you wrote down.
      </text>
    </>
  )
}

/** l5-017 — a month of bills, with the notice window drawn in. */
export function BillClock() {
  const bills = [
    { day: 3, label: 'rent', w: 18000, variable: false, c: BLUE },
    { day: 7, label: 'card', w: 9000, variable: true, c: ROSE },
    { day: 10, label: 'EMI', w: 6000, variable: false, c: PURPLE },
    { day: 14, label: 'electricity', w: 2200, variable: true, c: AMBER },
    { day: 18, label: 'broadband', w: 999, variable: false, c: GOOD },
    { day: 22, label: 'mobile', w: 599, variable: false, c: GOOD },
  ]
  const at = (d: number) => 34 + ((d - 1) / 30) * 336
  return (
    <>
      <text x="24" y="20" fill={INK} fontSize="12.5" fontWeight="600">
        Six bills, two of them variable, one notice window
      </text>
      <line x1="24" y1="96" x2="376" y2="96" stroke={LINE} />
      {[1, 8, 15, 22, 30].map((d) => (
        <line key={d} x1={at(d)} y1="90" x2={at(d)} y2="102" stroke={LINE} />
      ))}
      {bills.map((b, i) => (
        <g key={b.label}>
          <line x1={at(b.day)} y1="96" x2={at(b.day)} y2={i % 2 === 0 ? 62 : 150} stroke={b.c} strokeWidth="1.5" />
          <circle cx={at(b.day)} cy="96" r="3.5" fill={b.c} />
          <text x={at(b.day)} y={i % 2 === 0 ? 56 : 164} fill={b.c} fontSize="9" textAnchor="middle">
            {b.label}
          </text>
          <text x={at(b.day)} y={i % 2 === 0 ? 44 : 176} fill={MUTED} fontSize="8" textAnchor="middle">
            day {b.day} · ₹{b.w.toLocaleString('en-IN')}
          </text>
        </g>
      ))}
      <rect x="26" y="92" width="44" height="8" rx="3" fill={PURPLE} opacity="0.35" />
      <text x="24" y="196" fill={MUTED} fontSize="9">
        The purple band is the pre-debit notice: a recurring debit must be notified in advance, so
      </text>
      <text x="24" y="209" fill={MUTED} fontSize="9">
        there is always a window to fund the account or cancel the mandate. Variable bills get that
        window reviewed, not spent.
      </text>
    </>
  )
}

/** l5-018 — one month of transactions against an alert threshold. */
export function AlertTrials() {
  const events = [
    { d: 2, amount: 43800, kind: 'credit', label: 'salary' },
    { d: 3, amount: 18000, kind: 'known', label: 'rent' },
    { d: 6, amount: 4500, kind: 'fraud', label: 'drain 1' },
    { d: 6, amount: 4100, kind: 'fraud', label: 'drain 2' },
    { d: 7, amount: 3800, kind: 'fraud', label: 'drain 3' },
    { d: 12, amount: 9000, kind: 'known', label: 'card' },
    { d: 20, amount: 4500, kind: 'fraud', label: 'drain 4' },
    { d: 28, amount: 499, kind: 'known', label: 'subscription' },
  ]
  const colour = (k: string) => (k === 'fraud' ? ROSE : k === 'credit' ? GOOD : MUTED)
  return (
    <>
      <text x="24" y="20" fill={INK} fontSize="12.5" fontWeight="600">
        Four debits of ₹4,500 pass a ₹5,000 threshold silently
      </text>
      <line x1="34" y1="120" x2="376" y2="120" stroke={LINE} />
      {events.map((e, i) => {
        const x = 34 + ((e.d - 1) / 30) * 336
        const h = Math.min(70, 12 + (e.amount / 43800) * 60)
        const up = i % 2 === 0
        return (
          <g key={`${e.d}-${e.label}`}>
            <rect x={x - 3} y={up ? 120 - h : 120} width="6" height={h} fill={colour(e.kind)} opacity={e.kind === 'fraud' ? 0.9 : 0.5} />
            <text x={x} y={up ? 120 - h - 5 : 120 + h + 12} fill={colour(e.kind)} fontSize="8" textAnchor="middle">
              {e.label}
            </text>
          </g>
        )
      })}
      <line x1="34" y1="84" x2="376" y2="84" stroke={AMBER} strokeDasharray="5 4" />
      <text x="376" y="80" fill={AMBER} fontSize="8.5" textAnchor="end">
        alert threshold ₹5,000
      </text>
      <text x="24" y="156" fill={MUTED} fontSize="9">
        Alerts do not stop fraud. They shorten the time between the debit and the phone call
        — and that interval is what decides who absorbs the loss.
      </text>
      <rect x="24" y="170" width="352" height="30" rx="8" fill={PANEL} stroke={LINE} />
      <text x="36" y="189" fill={INK} fontSize="9">
        A slow drain under the threshold is the pattern a single large-debit alert never catches.
      </text>
    </>
  )
}

/** l5-019 — the one page worth keeping. */
export function DashboardOnePage() {
  const tiles = [
    { label: 'Net worth', value: '₹4.21L', change: '+₹18,400', c: BLUE },
    { label: 'Savings rate', value: '28.5%', change: '+1.2 pp', c: GOOD },
    { label: 'Buffer', value: '4.1 months', change: '+0.3', c: PURPLE },
    { label: 'Debt / income', value: '13.7%', change: '−0.8 pp', c: AMBER },
    { label: 'Goal funding', value: '72%', change: '+4 pp', c: '#22d3ee' },
    { label: 'Credit score', value: '771', change: '+6', c: ROSE },
  ]
  return (
    <>
      <text x="24" y="20" fill={INK} fontSize="12.5" fontWeight="600">
        Six numbers, updated once a month
      </text>
      {tiles.map((t, i) => {
        const col = i % 3
        const row = Math.floor(i / 3)
        const x = 24 + col * 118
        const y = 34 + row * 76
        return (
          <g key={t.label}>
            <rect x={x} y={y} width="110" height="66" rx="8" fill={PANEL} stroke={LINE} />
            <text x={x + 10} y={y + 18} fill={MUTED} fontSize="8.5">
              {t.label}
            </text>
            <text x={x + 10} y={y + 40} fill={t.c} fontSize="15" fontWeight="600">
              {t.value}
            </text>
            <text x={x + 10} y={y + 56} fill={MUTED} fontSize="8.5">
              {t.change} vs last month
            </text>
          </g>
        )
      })}
      <text x="24" y="206" fill={MUTED} fontSize="9">
        Every tile answers a question that would change a decision. Portfolio value and daily market
        levels are not on the page.
      </text>
    </>
  )
}
