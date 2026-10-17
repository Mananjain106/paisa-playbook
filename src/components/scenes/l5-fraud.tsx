import { motion } from 'framer-motion'

/**
 * Level 5 illustrations — band three, batch 4 / fraud & due diligence
 * (chapters l5-101 to l5-113).
 *
 * Thirteen illustrations, one per chapter, each drawn for that chapter's own
 * idea rather than reused:
 *   pump-dump-cycle        the quiet accumulation, the tip cascade, the cliff
 *   deepfake-check         verify the caller through a channel they cannot control
 *   fake-platform-funnel   the small withdrawal that baits the large deposit
 *   job-offer-redflags     the five tells of an employment scam
 *   crypto-custody-layers  who holds the key, and what the exit really is
 *   social-engineering-loop  authority, urgency, secrecy — and the break
 *   diligence-checklist    the standard pass before any money moves
 *   product-compare-axes   five axes, not one headline yield
 *   return-source-tree     where a promised return can actually come from
 *   risk-matrix            probability against consequence, by risk type
 *   time-to-cash           how long each holding takes to become money
 *   fee-waterfall          every layer of cost, from gross return to net
 *   verification-desk      the register lookup that settles the question
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
const FONT = 'ui-sans-serif, system-ui, sans-serif'

const label = { fontSize: 8, fontFamily: FONT } as const
const small = { fontSize: 7.2, fontFamily: FONT } as const
const head = { fontSize: 12.5, fontWeight: 600, fontFamily: FONT } as const

/** l5-101 — the shape of a pump-and-dump: a quiet float, a loud climb, a cliff. */
export function PumpDumpCycle() {
  const tips = [
    { x: 128, y: 118, t: 'tip' },
    { x: 152, y: 96, t: 'tip' },
    { x: 176, y: 78, t: 'tip' },
    { x: 198, y: 62, t: 'tip' },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} {...head}>
        A pump-and-dump has three acts
      </text>
      <line x1="30" y1="150" x2="374" y2="150" stroke={LINE} />
      <line x1="30" y1="46" x2="30" y2="150" stroke={LINE} />
      <motion.path
        d="M30 146 L96 144 L118 132 L140 112 L164 92 L188 68 L214 48"
        fill="none"
        stroke={ROSE}
        strokeWidth="2.4"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />
      <motion.path
        d="M214 48 L236 148 L300 150 L374 149"
        fill="none"
        stroke={GOOD}
        strokeWidth="2.4"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.7, delay: 1.4, ease: 'easeIn' }}
      />
      <rect x="196" y="34" width="36" height="14" rx="3" fill={ROSE} opacity="0.2" />
      <text x="202" y="44" fill={ROSE} {...small}>
        peak
      </text>
      {tips.map((p, i) => (
        <motion.g
          key={p.t + i}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 + i * 0.28 }}
        >
          <circle cx={p.x} cy={p.y - 10} r="7" fill={AMBER} opacity="0.18" stroke={AMBER} strokeOpacity="0.5" />
          <text x={p.x - 7} y={p.y - 7} fill={AMBER} fontSize="6.4" fontFamily={FONT}>
            tip
          </text>
        </motion.g>
      ))}
      <text x="34" y="160" fill={MUTED} {...small}>
        1 · a thin, quiet float
      </text>
      <text x="150" y="160" fill={ROSE} {...small}>
        2 · the climb, on a cascade of tips
      </text>
      <text x="286" y="160" fill={GOOD} {...small}>
        3 · insiders exit
      </text>
      <line x1="214" y1="48" x2="214" y2="150" stroke={ROSE} strokeDasharray="3 3" opacity="0.5" />
      <text x="24" y="188" fill={MUTED} {...small}>
        The rise is promotion, not information: low float means a little demand moves the price a long way.
      </text>
      <text x="24" y="202" fill={MUTED} {...small}>
        Each new recipient reposts the same tip, so the crowd looks organic while the sellers are coordinated.
      </text>
      <text x="24" y="216" fill={AMBER} {...small}>
        By the time the chart is obvious, the insiders have already sold into your bid.
      </text>
    </>
  )
}

/** l5-102 — a fake voice or face cannot control a channel you choose. */
export function DeepfakeCheck() {
  const channels = [
    { t: 'Call back on a number you saved', h: 'you choose the line' },
    { t: 'Ask a question only they know', h: 'not on any profile' },
    { t: 'Demand live, unrehearsed proof', h: 'today, on a live call' },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} {...head}>
        Verify through a channel the caller cannot control
      </text>
      <rect x="20" y="40" width="132" height="128" rx="8" fill={ROSE} opacity="0.1" stroke={LINE} />
      <text x="30" y="56" fill={ROSE} {...label} fontWeight={600}>
        The incoming request
      </text>
      <circle cx="46" cy="82" r="13" fill={ROSE} opacity="0.2" stroke={ROSE} strokeOpacity="0.5" />
      <text x="38" y="87" fill={ROSE} fontSize="13">
        ☎
      </text>
      <text x="66" y="78" fill={INK} {...small}>
        “It is me. Send money
      </text>
      <text x="66" y="89" fill={INK} {...small}>
        now, and tell no one.”
      </text>
      <text x="30" y="116" fill={MUTED} {...small}>
        Voice cloned, face cloned.
      </text>
      <text x="30" y="128" fill={MUTED} {...small}>
        The deadline is invented.
      </text>
      <text x="30" y="140" fill={MUTED} {...small}>
        Secrecy is the tell.
      </text>
      <text x="30" y="158" fill={AMBER} {...small}>
        Do not act on the call.
      </text>
      <path d="M152 104 l26 0" stroke={LINE} strokeWidth="2" />
      <path d="M178 98 l10 6 l-10 6 z" fill={MUTED} />
      <motion.g initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
        <rect x="196" y="40" width="184" height="128" rx="8" fill={GOOD} opacity="0.08" stroke={LINE} />
        <text x="206" y="56" fill={GOOD} {...label} fontWeight={600}>
          Independent verification
        </text>
        {channels.map((c, i) => (
          <g key={c.t}>
            <circle cx="212" cy={76 + i * 30} r="6" fill={GOOD} opacity="0.2" stroke={GOOD} strokeOpacity="0.5" />
            <text x="209" y={79 + i * 30} fill={GOOD} fontSize="7">
              ✓
            </text>
            <text x="224" y={74 + i * 30} fill={INK} {...small}>
              {c.t}
            </text>
            <text x="224" y={85 + i * 30} fill={MUTED} fontSize="6.6" fontFamily={FONT}>
              {c.h}
            </text>
          </g>
        ))}
        <text x="206" y="158" fill={GOOD} {...small}>
          The real person accepts the delay. The fake one cannot.
        </text>
      </motion.g>
      <text x="24" y="190" fill={MUTED} {...small}>
        No detector is reliable enough to be the defence. The defence is procedural: the attacker cannot control a line
      </text>
      <text x="24" y="204" fill={MUTED} {...small}>
        you dialled yourself, a memory you share, or a live action on an unscripted video call.
      </text>
      <text x="24" y="217" fill={AMBER} {...small}>
        If the story truly is an emergency, seconds spent verifying cost nothing; a transfer costs everything.
      </text>
    </>
  )
}

/** l5-103 — the small withdrawal is the bait; the large deposit is the trap. */
export function FakePlatformFunnel() {
  const steps = [
    { w: 240, t: 'Register in minutes, with barely any KYC', c: INK },
    { w: 196, t: 'A small withdrawal succeeds — “they pay”', c: AMBER },
    { w: 148, t: 'You deposit a large amount', c: BLUE },
    { w: 96, t: 'Withdrawal blocked, or a “fee” demanded', c: ROSE },
    { w: 52, t: 'The app goes silent', c: ROSE },
  ]
  let y = 40
  return (
    <>
      <text x="24" y="22" fill={INK} {...head}>
        The bait is small; the trap is everything after it
      </text>
      {steps.map((s, i) => {
        const x = 200 - s.w / 2
        const h = 26
        const at = y
        y += 32
        return (
          <motion.g key={s.t} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.18 }}>
            <path
              d={`M${x} ${at} L${x + s.w} ${at} L${x + s.w - 11} ${at + h} L${x + 11} ${at + h} Z`}
              fill={s.c}
              opacity="0.16"
              stroke={LINE}
            />
            <text x="200" y={at + 17} fill={INK} {...small} textAnchor="middle">
              {s.t}
            </text>
          </motion.g>
        )
      })}
      <text x="24" y="212" fill={MUTED} {...small}>
        The first withdrawal is not evidence of honesty. It is the marketing budget of the scam, spent on you.
      </text>
    </>
  )
}

/** l5-104 — the five tells of an employment scam. */
export function JobOfferRedflags() {
  const tells = [
    { t: 'A fee to secure the job', n: 'registration, training, kit, visa' },
    { t: 'Buy equipment, forward the balance', n: 'the cheque later bounces' },
    { t: 'Receive money, then transfer it on', n: 'that is money muling' },
    { t: 'No interview, no verifiable company', n: 'a logo is not a company' },
    { t: 'Data harvesting at “onboarding”', n: 'PAN, Aadhaar, bank details' },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} {...head}>
        Five tells, and any one of them ends the conversation
      </text>
      <rect x="22" y="34" width="150" height="168" rx="8" fill={PANEL} stroke={LINE} />
      <rect x="34" y="44" width="126" height="9" rx="2" fill={INK} opacity="0.18" />
      <text x="34" y="70" fill={INK} {...small} fontWeight={600}>
        OFFER OF EMPLOYMENT
      </text>
      {[86, 98, 110, 122, 134, 146].map((yy) => (
        <rect key={yy} x="34" y={yy} width="126" height="5" rx="2" fill={MUTED} opacity="0.25" />
      ))}
      <text x="34" y="170" fill={MUTED} fontSize="7.4" fontFamily={FONT}>
        ₹1,20,000 a month
      </text>
      <text x="34" y="182" fill={MUTED} fontSize="7.4" fontFamily={FONT}>
        Work from home · no experience
      </text>
      <text x="34" y="194" fill={ROSE} fontSize="7.4" fontFamily={FONT} fontWeight={600}>
        A legitimate employer pays you.
      </text>
      {tells.map((t, i) => {
        const yy = 44 + i * 32
        return (
          <g key={t.t}>
            <path d={`M170 ${yy + 8} l14 -7 l0 14 z`} fill={ROSE} opacity="0.8" />
            <text x="190" y={yy + 9} fill={INK} {...small}>
              {t.t}
            </text>
            <text x="190" y={yy + 20} fill={MUTED} fontSize="6.6" fontFamily={FONT}>
              {t.n}
            </text>
          </g>
        )
      })}
      <text x="24" y="216" fill={AMBER} {...small}>
        Verify the company on the MCA register, and insist on a live interview. Desperation is the exploitable part.
      </text>
    </>
  )
}

/** l5-105 — who holds the key decides what your crypto really is. */
export function CustodyLayers() {
  const layers = [
    { t: 'Self-custody', key: 'You hold the key', exit: 'Exit depends on a buyer', c: GOOD, risk: 'Key loss is total loss' },
    { t: 'Exchange custody', key: 'The platform holds the key', exit: 'Exit needs their permission', c: AMBER, risk: 'Withdrawals can be frozen' },
    { t: '“Guaranteed return” scheme', key: 'Nobody holds anything', exit: 'Exit is a new depositor', c: ROSE, risk: 'The balance is a number' },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} {...head}>
        Three layers of custody, three different realities
      </text>
      <text x="24" y="38" fill={MUTED} fontSize="7" fontFamily={FONT}>
        layer · who holds the private key · what the exit really is
      </text>
      {layers.map((l, i) => {
        const y = 46 + i * 44
        return (
          <g key={l.t}>
            <rect x="24" y={y} width="352" height="38" rx="6" fill={l.c} opacity="0.09" stroke={LINE} />
            <rect x="24" y={y} width="4" height="38" rx="2" fill={l.c} />
            <text x="40" y={y + 15} fill={INK} {...small} fontWeight={600}>
              {l.t}
            </text>
            <text x="40" y={y + 27} fill={l.c} fontSize="7.4" fontFamily={FONT}>
              {l.key}
            </text>
            <text x="40" y={y + 35} fill={MUTED} fontSize="6.8" fontFamily={FONT}>
              {l.exit}
            </text>
            <text x={300} y={y + 22} fill={l.c} fontSize="7.2" fontFamily={FONT} textAnchor="middle">
              {l.risk}
            </text>
          </g>
        )
      })}
      <text x="24" y="186" fill={MUTED} {...small}>
        The quoted return is the least important number on the screen. Ask who can move the asset without your consent.
      </text>
      <text x="24" y="200" fill={MUTED} {...small}>
        In India, crypto is not a recognised currency and is not issued by the RBI, so a promise of “regulated” crypto yield
      </text>
      <text x="24" y="213" fill={AMBER} {...small}>
        is a claim to check on the regulator’s own register — never on the platform’s own dashboard.
      </text>
    </>
  )
}

/** l5-106 — authority, urgency, secrecy, and the script that breaks the loop. */
export function SocialEngineeringLoop() {
  const nodes = [
    { x: 200, y: 62, t: 'Authority', s: 'someone you obey' },
    { x: 110, y: 146, t: 'Urgency', s: 'act before you think' },
    { x: 290, y: 146, t: 'Secrecy', s: 'tell no one' },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} {...head}>
        Three levers, pulled in the same order every time
      </text>
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <path d="M186 74 Q120 100 122 128" fill="none" stroke={ROSE} strokeWidth="1.6" strokeDasharray="4 4" />
        <path d="M128 128 l-7 6 l9 3 z" fill={ROSE} opacity="0.8" />
        <path d="M214 74 Q280 100 278 128" fill="none" stroke={ROSE} strokeWidth="1.6" strokeDasharray="4 4" />
        <path d="M272 128 l9 3 l-7 6 z" fill={ROSE} opacity="0.8" />
        <path d="M136 158 Q200 182 264 158" fill="none" stroke={ROSE} strokeWidth="1.6" strokeDasharray="4 4" />
        <path d="M258 152 l8 5 l-9 4 z" fill={ROSE} opacity="0.8" />
      </motion.g>
      {nodes.map((n) => (
        <g key={n.t}>
          <circle cx={n.x} cy={n.y} r="30" fill={ROSE} opacity="0.12" stroke={ROSE} strokeOpacity="0.45" />
          <text x={n.x} y={n.y - 2} fill={INK} fontSize="8.4" fontFamily={FONT} fontWeight={600} textAnchor="middle">
            {n.t}
          </text>
          <text x={n.x} y={n.y + 10} fill={MUTED} fontSize="6.4" fontFamily={FONT} textAnchor="middle">
            {n.s}
          </text>
        </g>
      ))}
      <text x="200" y="110" fill={INK} fontSize="8" fontFamily={FONT} textAnchor="middle">
        comply now
      </text>
      <path d="M200 118 L200 128" stroke={LINE} />
      <rect x="120" y="184" width="160" height="20" rx="5" fill={GOOD} opacity="0.14" stroke={GOOD} strokeOpacity="0.4" />
      <text x="200" y="197" fill={GOOD} fontSize="7.4" fontFamily={FONT} textAnchor="middle">
        “I will verify through my own channels.”
      </text>
      <path d="M290 122 Q330 150 286 182" fill="none" stroke={GOOD} strokeWidth="1.6" />
      <path d="M286 182 l12 -4 l-3 11 z" fill={GOOD} />
      <text x="24" y="216" fill={MUTED} {...small}>
        The script pauses authority, cancels the deadline, and brings the request into the open — then you verify.
      </text>
    </>
  )
}

/** l5-107 — the standard diligence pass before any money moves. */
export function DiligenceChecklist() {
  const items = [
    { q: 'What exactly am I buying?', ok: true, n: 'name the asset, not the story' },
    { q: 'Who is the counterparty, legally?', ok: true, n: 'a registered entity, not a person' },
    { q: 'Which register, which number?', ok: true, n: 'checked on the regulator’s site' },
    { q: 'Where is my money held?', ok: true, n: 'whose name is on the account' },
    { q: 'What document proves the terms?', ok: false, n: 'verbal promises do not count' },
    { q: 'What did I record, and when?', ok: false, n: 'a dated note of the decision' },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} {...head}>
        A standard pass, run before the money moves
      </text>
      <rect x="22" y="32" width="356" height="150" rx="8" fill={PANEL} stroke={LINE} />
      <rect x="40" y="26" width="60" height="12" rx="3" fill={MUTED} opacity="0.35" />
      {items.map((it, i) => {
        const y = 50 + i * 21
        return (
          <g key={it.q}>
            <rect
              x="40"
              y={y - 9}
              width="12"
              height="12"
              rx="3"
              fill={it.ok ? GOOD : 'transparent'}
              opacity={it.ok ? 0.85 : 1}
              stroke={it.ok ? GOOD : AMBER}
            />
            {it.ok && (
              <text x="43" y={y + 1} fill="#11131f" fontSize="9" fontFamily={FONT} fontWeight={700}>
                ✓
              </text>
            )}
            <text x="62" y={y} fill={INK} {...small}>
              {it.q}
            </text>
            <text x={300} y={y} fill={it.ok ? MUTED : AMBER} fontSize="6.6" fontFamily={FONT}>
              {it.n}
            </text>
          </g>
        )
      })}
      <g transform="rotate(-8 330 176)">
        <rect x="292" y="166" width="86" height="20" rx="4" fill="transparent" stroke={AMBER} strokeOpacity="0.6" />
        <text x="335" y="180" fill={AMBER} fontSize="8" fontFamily={FONT} fontWeight={600} textAnchor="middle">
          UNSIGNED ≠ SAFE
        </text>
      </g>
      <text x="24" y="200" fill={MUTED} {...small}>
        Diligence is not suspicion; it is the ordinary work of knowing what you own. A blank row is not a “no” —
      </text>
      <text x="24" y="213" fill={MUTED} {...small}>
        it is an unanswered question, and an unanswered question is a reason to wait rather than to pay.
      </text>
    </>
  )
}

/** l5-108 — compare on five axes, not one headline number. */
export function ProductCompareAxes() {
  const axes = ['Return source', 'Risk', 'Liquidity', 'Cost', 'Tax']
  const a = [80, 30, 75, 55, 60]
  const b = [40, 70, 30, 25, 45]
  return (
    <>
      <text x="24" y="22" fill={INK} {...head}>
        Two products, five axes — the headline hides four of them
      </text>
      <text x="300" y="40" fill={BLUE} {...small} fontWeight={600}>
        ● Product A
      </text>
      <text x="300" y="54" fill={PURPLE} {...small} fontWeight={600}>
        ● Product B
      </text>
      {axes.map((ax, i) => {
        const y = 44 + i * 30
        return (
          <g key={ax}>
            <text x="24" y={y + 4} fill={INK} {...small}>
              {ax}
            </text>
            <rect x="120" y={y - 6} width="168" height="9" rx="3" fill="white" opacity="0.05" />
            <motion.rect
              x="120"
              y={y - 6}
              height="9"
              rx="3"
              fill={BLUE}
              opacity="0.7"
              initial={{ width: 0 }}
              animate={{ width: (a[i] / 100) * 168 }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
            />
            <motion.rect
              x="120"
              y={y + 3}
              height="9"
              rx="3"
              fill={PURPLE}
              opacity="0.7"
              initial={{ width: 0 }}
              animate={{ width: (b[i] / 100) * 168 }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.08 }}
            />
          </g>
        )
      })}
      <text x="120" y="204" fill={MUTED} fontSize="6.6" fontFamily={FONT}>
        low ← score on this axis → high
      </text>
      <text x="24" y="216" fill={AMBER} {...small}>
        Ask first where the return comes from. If you cannot explain it in one sentence, the “higher yield” is not a yield.
      </text>
    </>
  )
}

/** l5-109 — the promised return must come from somewhere real. */
export function ReturnSourceTree() {
  const branches = [
    { t: 'Interest', c: GOOD, d: 'a borrower pays you' },
    { t: 'Rent', c: GOOD, d: 'a user pays for the asset' },
    { t: 'Profit', c: BLUE, d: 'a business earns it' },
    { t: 'Capital gain', c: BLUE, d: 'someone else pays more' },
    { t: 'Leverage', c: AMBER, d: 'borrowed risk is amplified' },
    { t: 'New deposits', c: ROSE, d: 'the next saver pays you' },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} {...head}>
        Trace the rupee: every promised return has a payer
      </text>
      <rect x="140" y="172" width="120" height="24" rx="5" fill={AMBER} opacity="0.16" stroke={AMBER} strokeOpacity="0.4" />
      <text x="200" y="188" fill={INK} fontSize="8" fontFamily={FONT} textAnchor="middle">
        “You will get 18% a year”
      </text>
      {branches.map((b, i) => {
        const x = 34 + i * 56
        return (
          <g key={b.t}>
            <path d={`M200 172 C200 130 ${x + 24} 122 ${x + 24} 84`} fill="none" stroke={b.c} strokeOpacity="0.35" strokeWidth="1.4" />
            <rect x={x} y="48" width="48" height="38" rx="5" fill={b.c} opacity="0.12" stroke={LINE} />
            <text x={x + 24} y="64" fill={INK} fontSize="7.4" fontFamily={FONT} textAnchor="middle" fontWeight={600}>
              {b.t}
            </text>
            <text x={x + 24} y="78" fill={MUTED} fontSize="5.8" fontFamily={FONT} textAnchor="middle">
              {b.d}
            </text>
          </g>
        )
      })}
      <text x="24" y="210" fill={MUTED} {...small}>
        Four of these can pay for a while. The last one — new deposits — pays only until the queue of savers ends, and it
      </text>
      <text x="24" y="220" fill={ROSE} fontSize="7" fontFamily={FONT}>
        always ends. If the source is “new investors”, you are not an investor; you are the exit liquidity.
      </text>
    </>
  )
}

/** l5-110 — every risk has both a probability and a consequence. */
export function RiskMatrix() {
  const dots = [
    { x: 1, y: 2, t: 'Credit', c: BLUE },
    { x: 2, y: 2, t: 'Market', c: PURPLE },
    { x: 2, y: 1, t: 'Liquidity', c: AMBER },
    { x: 2.6, y: 2.5, t: 'Concentration', c: ROSE },
    { x: 1, y: 1, t: 'Operational', c: GOOD },
    { x: 2.3, y: 1.5, t: 'Conduct', c: ROSE },
  ]
  const cell = (cx: number, cy: number) => ({ x: 56 + cx * 96, y: 168 - cy * 44 })
  return (
    <>
      <text x="24" y="22" fill={INK} {...head}>
        Sort every risk by probability and by consequence
      </text>
      <line x1="56" y1="36" x2="56" y2="172" stroke={LINE} />
      <line x1="56" y1="172" x2="352" y2="172" stroke={LINE} />
      <text x="352" y="186" fill={MUTED} fontSize="6.8" fontFamily={FONT} textAnchor="end">
        probability →
      </text>
      <text x="20" y="40" fill={MUTED} fontSize="6.8" fontFamily={FONT}>
        consequence ↑
      </text>
      <rect x="248" y="40" width="104" height="132" rx="4" fill={ROSE} opacity="0.06" />
      <text x="348" y="52" fill={ROSE} fontSize="6.6" fontFamily={FONT} textAnchor="end">
        avoid or insure
      </text>
      {dots.map((d, i) => {
        const p = cell(d.x, d.y)
        return (
          <motion.g key={d.t} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.12 }}>
            <circle cx={p.x} cy={p.y} r="5.5" fill={d.c} opacity="0.35" stroke={d.c} />
            <circle cx={p.x} cy={p.y} r="2" fill={d.c} />
            <text x={p.x + 8} y={p.y + 3} fill={INK} fontSize="6.8" fontFamily={FONT}>
              {d.t}
            </text>
          </motion.g>
        )
      })}
      <text x="24" y="200" fill={MUTED} {...small}>
        Irreversible loss (a wiped account, a defaulted loan) sits high; recoverable volatility sits low. Mitigate the top
      </text>
      <text x="24" y="213" fill={MUTED} {...small}>
        row before you chase return anywhere else — and never let one position carry your whole plan.
      </text>
    </>
  )
}

/** l5-111 — how long each holding takes to become money, and at what cost. */
export function TimeToCash() {
  const rows = [
    { t: 'Liquid fund', days: 1, d: 'T+1', c: GOOD, disc: '~0%' },
    { t: 'Listed equity', days: 1, d: 'T+1', c: GOOD, disc: '1–2%' },
    { t: 'Gold, sold back', days: 3, d: 'same week', c: BLUE, disc: '3–8%' },
    { t: 'Debt fund, exit load', days: 30, d: 'up to a year', c: AMBER, disc: '1–2%' },
    { t: 'Real estate', days: 120, d: 'months', c: ROSE, disc: '10–40%' },
  ]
  const max = 120
  return (
    <>
      <text x="24" y="22" fill={INK} {...head}>
        Liquidity is a time, a discount and a lock-in — at once
      </text>
      <circle cx="60" cy="70" r="26" fill="none" stroke={LINE} strokeWidth="3" />
      <motion.line
        x1="60"
        y1="70"
        x2="60"
        y2="46"
        stroke={ROSE}
        strokeWidth="2.4"
        strokeLinecap="round"
        initial={{ rotate: 0 }}
        animate={{ rotate: 300 }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
        style={{ originX: '60px', originY: '70px' }}
      />
      <circle cx="60" cy="70" r="3" fill={ROSE} />
      <text x="60" y="108" fill={MUTED} fontSize="6.8" fontFamily={FONT} textAnchor="middle">
        time to cash
      </text>
      {rows.map((r, i) => {
        const y = 40 + i * 26
        const w = Math.max(6, (Math.log10(r.days + 1) / Math.log10(max + 1)) * 150)
        return (
          <g key={r.t}>
            <text x="120" y={y + 9} fill={INK} {...small}>
              {r.t}
            </text>
            <rect x="206" y={y} width="150" height="11" rx="3" fill="white" opacity="0.04" />
            <motion.rect
              x="206"
              y={y}
              height="11"
              rx="3"
              fill={r.c}
              opacity="0.7"
              initial={{ width: 0 }}
              animate={{ width: w }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            />
            <text x="362" y={y + 9} fill={MUTED} fontSize="6.6" fontFamily={FONT} textAnchor="end">
              {r.d}
            </text>
            <text x="196" y={y + 9} fill={r.c} fontSize="7" fontFamily={FONT} textAnchor="end">
              {r.disc}
            </text>
          </g>
        )
      })}
      <text x="120" y="178" fill={MUTED} fontSize="6.4" fontFamily={FONT}>
        discount under stress ←
      </text>
      <text x="24" y="198" fill={MUTED} {...small}>
        A calm market makes everything look liquid. The test is what happens to each holding on the day you are forced to sell.
      </text>
      <text x="24" y="213" fill={AMBER} {...small}>
        Match the horizon: money you need this year does not belong in anything that takes months to convert.
      </text>
    </>
  )
}

/** l5-112 — every layer of cost, subtracted from the gross return. */
export function FeeWaterfall() {
  const layers = [
    { t: 'Gross return', v: 12, c: GOOD },
    { t: 'Fund expense ratio', v: -1.5, c: BLUE },
    { t: 'Advisory or distributor', v: -0.9, c: BLUE },
    { t: 'Transaction and brokerage', v: -0.3, c: PURPLE },
    { t: 'Tax drag', v: -1.5, c: AMBER },
    { t: 'What you keep', v: 7.8, c: GOOD },
  ]
  const base = 180
  const unit = 9
  let running = 0
  return (
    <>
      <text x="24" y="22" fill={INK} {...head}>
        A 12% gross return can reach you as far less
      </text>
      <line x1="30" y1={base} x2="374" y2={base} stroke={LINE} />
      {layers.map((l, i) => {
        const x = 40 + i * 56
        const start = running
        if (l.t === 'What you keep') running = 0
        else if (l.v > 0) running = l.v
        else running = running + l.v
        const top = l.v > 0 ? start : running
        const h = Math.max(6, Math.abs(l.v) * unit)
        const y = base - (top + Math.abs(l.v)) * unit
        return (
          <g key={l.t}>
            <motion.rect
              x={x}
              width="36"
              rx="3"
              fill={l.c}
              opacity={l.t === 'What you keep' ? 0.9 : 0.45}
              stroke={l.t === 'What you keep' ? GOOD : LINE}
              initial={{ height: 0, y: base }}
              animate={{ height: h, y }}
              transition={{ duration: 0.5, delay: i * 0.16 }}
            />
            <text x={x + 18} y={y - 5} fill={l.c} fontSize="7.4" fontFamily={FONT} textAnchor="middle" fontWeight={600}>
              {l.v > 0 ? l.v : l.v}%
            </text>
            {i > 0 && i < layers.length - 1 && (
              <path
                d={`M${x - 20} ${base - start * unit} L${x} ${base - start * unit}`}
                stroke={LINE}
                strokeDasharray="2 2"
              />
            )}
          </g>
        )
      })}
      {layers.map((l, i) => (
        <text
          key={l.t}
          x={40 + i * 56 + 18}
          y={base + 12}
          fill={MUTED}
          fontSize="5.9"
          fontFamily={FONT}
          textAnchor="middle"
        >
          {l.t.length > 16 ? l.t.split(' ')[0] : l.t}
        </text>
      ))}
      <text x="24" y="204" fill={MUTED} {...small}>
        Fees compound against you exactly the way returns compound for you. A 2% cost over 20 years is not 2% of the gain;
      </text>
      <text x="24" y="216" fill={AMBER} {...small}>
        it is a large share of the final corpus. Total the cost, then ask what it buys — skill, access, or nothing.
      </text>
    </>
  )
}

/** l5-113 — the register lookup that settles whether an entity is real. */
export function VerificationDesk() {
  const results = [
    { t: 'On the register, number matches', c: GOOD, verdict: 'proceed with care' },
    { t: 'Not on any register', c: AMBER, verdict: 'do not transact' },
    { t: 'On the warn / unauthorised list', c: ROSE, verdict: 'report it' },
    { t: 'A real firm’s name, a fake number', c: ROSE, verdict: 'impersonation' },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} {...head}>
        One lookup turns a claim into a fact
      </text>
      <rect x="22" y="34" width="150" height="168" rx="8" fill={PANEL} stroke={LINE} />
      <text x="34" y="52" fill={MUTED} {...small}>
        Entity name
      </text>
      <rect x="34" y="58" width="126" height="18" rx="4" fill="white" opacity="0.06" />
      <text x="40" y="71" fill={INK} fontSize="7.4" fontFamily={FONT}>
        “Nifty Gain Capital”
      </text>
      <text x="34" y="94" fill={MUTED} {...small}>
        Which regulator?
      </text>
      <g>
        {['RBI', 'SEBI', 'IRDAI', 'PFRDA', 'MCA'].map((r, i) => (
          <g key={r}>
            <rect
              x={34 + (i % 3) * 44}
              y={100 + Math.floor(i / 3) * 20}
              width="40"
              height="16"
              rx="4"
              fill={BLUE}
              opacity="0.16"
              stroke={LINE}
            />
            <text
              x={54 + (i % 3) * 44}
              y={111 + Math.floor(i / 3) * 20}
              fill={INK}
              fontSize="7.2"
              fontFamily={FONT}
              textAnchor="middle"
            >
              {r}
            </text>
          </g>
        ))}
      </g>
      <text x="34" y="158" fill={MUTED} fontSize="6.8" fontFamily={FONT}>
        Keep the proof: a screenshot,
      </text>
      <text x="34" y="169" fill={MUTED} fontSize="6.8" fontFamily={FONT}>
        the date, and the register page.
      </text>
      <text x="34" y="188" fill={AMBER} fontSize="6.8" fontFamily={FONT}>
        Never trust a certificate the
      </text>
      <text x="34" y="199" fill={AMBER} fontSize="6.8" fontFamily={FONT}>
        seller sent you.
      </text>
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        <rect x="196" y="34" width="184" height="168" rx="8" fill="white" opacity="0.03" stroke={LINE} />
        <text x="206" y="52" fill={INK} {...small} fontWeight={600}>
          Possible results
        </text>
        {results.map((r, i) => {
          const y = 66 + i * 32
          return (
            <g key={r.t}>
              <circle cx="214" cy={y} r="6" fill={r.c} opacity="0.3" stroke={r.c} />
              <text x="224" y={y + 3} fill={INK} fontSize="7.4" fontFamily={FONT}>
                {r.t}
              </text>
              <text x="224" y={y + 14} fill={r.c} fontSize="6.8" fontFamily={FONT}>
                {r.verdict}
              </text>
            </g>
          )
        })}
      </motion.g>
      <text x="24" y="216" fill={MUTED} {...small}>
        Every Indian regulator publishes its own register. Checking it takes two minutes and is the cheapest diligence there is.
      </text>
    </>
  )
}
