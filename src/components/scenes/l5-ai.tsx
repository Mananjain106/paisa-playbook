import { motion } from 'framer-motion'

/**
 * Level 5 illustrations — band five / AI tools (chapters l5-114 to l5-122).
 *
 * Nine illustrations, one per chapter, each drawn for its own idea:
 *   ai-assist-boundary   the line between drafting and deciding
 *   ai-budget-loop       categorise, then reconcile back to the statement
 *   ai-formula-test      a formula that has to survive awkward rows
 *   doc-ai-verify        every summary claim carries a clause, or is cut
 *   learning-loop        learn the mechanism, verify the rule
 *   ai-failure-modes     five ways the same fluent paragraph goes wrong
 *   hallucination-hunt   a citation is a promise to be checked
 *   redaction-filter     the prompt keeps the shape, not the identity
 *   credential-wall      six secrets, and nothing legitimate asks for them
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

const small = { fontSize: 7.2, fontFamily: FONT } as const
const tiny = { fontSize: 6.5, fontFamily: FONT } as const
const head = { fontSize: 12.5, fontWeight: 600, fontFamily: FONT } as const

/** l5-114 — the assistant drafts on one side of the line; you sign on the other. */
export function AiAssistBoundary() {
  const left = ['Explain a term', 'Draft a checklist', 'Propose a structure', 'Summarise a document']
  const right = ['Check the figures', 'Read the current rule', 'Decide', 'Answer for it']
  return (
    <>
      <text x="24" y="22" fill={INK} {...head}>
        One line decides whether AI helps you
      </text>
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <rect x="22" y="36" width="168" height="146" rx="9" fill={PANEL} stroke={LINE} />
        <text x="34" y="54" fill={BLUE} {...small} fontWeight={600}>
          The assistant may
        </text>
        {left.map((t, i) => (
          <g key={t}>
            <circle cx="37" cy={72 + i * 26} r="3.2" fill={BLUE} opacity="0.8" />
            <text x="46" y={75 + i * 26} fill={INK} {...small}>
              {t}
            </text>
          </g>
        ))}
        <text x="34" y="174" fill={MUTED} {...tiny}>
          wrong here is cheap: you check before it moves
        </text>
      </motion.g>

      <line x1="199" y1="32" x2="199" y2="188" stroke={AMBER} strokeWidth="1.4" strokeDasharray="4 4" />

      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.25 }}>
        <rect x="210" y="36" width="168" height="146" rx="9" fill={PANEL} stroke={LINE} />
        <text x="222" y="54" fill={GOOD} {...small} fontWeight={600}>
          You must
        </text>
        {right.map((t, i) => (
          <g key={t}>
            <circle cx="225" cy={72 + i * 26} r="3.2" fill={GOOD} opacity="0.85" />
            <text x="234" y={75 + i * 26} fill={INK} {...small}>
              {t}
            </text>
          </g>
        ))}
        <text x="222" y="174" fill={MUTED} {...tiny}>
          wrong here is expensive: money moves on it
        </text>
      </motion.g>

      <text x="24" y="204" fill={MUTED} {...tiny}>
        Ask the assistant for the method and the assumptions, never for the current rule or the final number.
      </text>
      <text x="24" y="216" fill={AMBER} {...tiny}>
        Fluency is not accuracy — the same confident voice produces both.
      </text>
    </>
  )
}

/** l5-115 — the month only closes when the categories tie back to the statement. */
export function AiBudgetLoop() {
  const steps = [
    { t: 'Statement', d: 'the source', c: BLUE, x: 30 },
    { t: 'AI sorts', d: 'a first draft', c: PURPLE, x: 128 },
    { t: 'You reconcile', d: 'the only check', c: GOOD, x: 226 },
    { t: 'Budget', d: 'now believable', c: AMBER, x: 316 },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} {...head}>
        Categorise first, believe second
      </text>
      {steps.map((s, i) => (
        <g key={s.t}>
          <rect x={s.x} y="48" width="66" height="40" rx="8" fill={PANEL} stroke={s.c} opacity="0.9" />
          <text x={s.x + 33} y="66" fill={s.c} {...tiny} textAnchor="middle" fontWeight={600}>
            {s.t}
          </text>
          <text x={s.x + 33} y="78" fill={MUTED} fontSize="6" fontFamily={FONT} textAnchor="middle">
            {s.d}
          </text>
          {i < steps.length - 1 && (
            <path d={`M${s.x + 66} 68 L${steps[i + 1].x} 68`} stroke={LINE} markerEnd="url(#ai-arrow)" />
          )}
        </g>
      ))}
      <defs>
        <marker id="ai-arrow" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 Z" fill={MUTED} />
        </marker>
      </defs>

      <rect x="30" y="106" width="340" height="66" rx="8" fill={PANEL} stroke={LINE} />
      <text x="42" y="122" fill={INK} {...tiny} fontWeight={600}>
        The reconciliation that catches everything
      </text>
      <text x="42" y="138" fill={MUTED} {...tiny}>
        opening ₹84,200 + credits ₹1,46,000 − debits ₹1,38,750 = closing ₹91,450
      </text>
      <text x="42" y="152" fill={GOOD} {...tiny}>
        Category total ties out → the month is believable
      </text>
      <text x="42" y="164" fill={ROSE} {...tiny}>
        Category total ₹12,250 higher → a transfer has been booked as spending
      </text>

      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        <rect x="30" y="182" width="150" height="28" rx="6" fill={ROSE} opacity="0.1" stroke={ROSE} />
        <text x="40" y="194" fill={ROSE} {...tiny} fontWeight={600}>
          Never paste the raw statement
        </text>
        <text x="40" y="204" fill={MUTED} fontSize="6" fontFamily={FONT}>
          redact name, account number, UPI IDs
        </text>
        <rect x="190" y="182" width="180" height="28" rx="6" fill={GOOD} opacity="0.08" stroke={GOOD} />
        <text x="200" y="194" fill={GOOD} {...tiny} fontWeight={600}>
          Review the unfamiliar rows yourself
        </text>
        <text x="200" y="204" fill={MUTED} fontSize="6" fontFamily={FONT}>
          that is where the forgotten subscriptions sit
        </text>
      </motion.g>
    </>
  )
}

/** l5-116 — a formula is only as good as the rows it survives. */
export function AiFormulaTest() {
  const tests = [
    { row: 'blank row', verdict: 'pass', c: GOOD },
    { row: 'text in a number column', verdict: 'pass', c: GOOD },
    { row: 'duplicate transaction', verdict: 'pass', c: GOOD },
    { row: 'last day of the month', verdict: 'fails', c: ROSE },
    { row: 'zero-amount row', verdict: 'pass', c: GOOD },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} {...head}>
        Test the formula, not the answer
      </text>
      <rect x="22" y="34" width="356" height="30" rx="7" fill="#0b1020" stroke={LINE} />
      <text x="32" y="47" fill={MUTED} fontSize="6" fontFamily={FONT}>
        D3
      </text>
      <text x="46" y="52" fill={BLUE} fontSize="9" fontFamily="ui-monospace, monospace">
        =SUMIFS(D2:D100, A2:A100, &quot;&gt;=&quot;&amp;F1, A2:A100, &quot;&lt;=&quot;&amp;F2)
      </text>
      <text x="32" y="60" fill={MUTED} fontSize="5.8" fontFamily={FONT}>
        range stops at row 100, but the data ends on row 101
      </text>

      <text x="24" y="82" fill={INK} {...tiny} fontWeight={600}>
        The five test rows
      </text>
      {tests.map((t, i) => {
        const y = 92 + i * 18
        return (
          <g key={t.row}>
            <rect x="24" y={y} width="216" height="14" rx="4" fill={PANEL} stroke={LINE} />
            <text x="32" y={y + 9.6} fill={INK} fontSize="6.8" fontFamily={FONT}>
              {t.row}
            </text>
            <text x="248" y={y + 9.6} fill={t.c} fontSize="6.8" fontFamily={FONT} fontWeight={600}>
              {t.verdict}
            </text>
          </g>
        )
      })}

      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        <rect x="286" y="88" width="92" height="96" rx="7" fill={ROSE} opacity="0.08" stroke={ROSE} />
        <text x="296" y="104" fill={ROSE} {...tiny} fontWeight={600}>
          The tell
        </text>
        <text x="296" y="116" fill={MUTED} fontSize="6" fontFamily={FONT}>
          add a row dated
        </text>
        <text x="296" y="125" fill={MUTED} fontSize="6" fontFamily={FONT}>
          30 September as the
        </text>
        <text x="296" y="134" fill={MUTED} fontSize="6" fontFamily={FONT}>
          very last row:
        </text>
        <text x="296" y="147" fill={INK} fontSize="6" fontFamily={FONT}>
          the total must move
        </text>
        <text x="296" y="158" fill={ROSE} fontSize="6" fontFamily={FONT}>
          if it does not,
        </text>
        <text x="296" y="167" fill={ROSE} fontSize="6" fontFamily={FONT}>
          the range is short
        </text>
      </motion.g>

      <text x="24" y="204" fill={MUTED} {...tiny}>
        Rates belong in a named cell with an absolute reference; test rows belong in the sheet, permanently.
      </text>
      <text x="24" y="216" fill={AMBER} {...tiny}>
        The application decides which functions exist — evaluate the formula there, not in the chat.
      </text>
    </>
  )
}

/** l5-117 — a summary claim survives only if a clause supports it. */
export function DocAiVerify() {
  const claims = [
    { t: 'Pre-existing covered after 36 months', ok: true },
    { t: 'Room rent capped at 1% of sum insured', ok: true },
    { t: 'Maternity covered from day one', ok: false },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} {...head}>
        Every summary claim needs a clause
      </text>
      <rect x="22" y="34" width="150" height="150" rx="8" fill={PANEL} stroke={LINE} />
      <text x="32" y="50" fill={MUTED} {...tiny} fontWeight={600}>
        The policy wording
      </text>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x="32" y={60 + i * 13} width={i % 3 === 0 ? 110 : 126} height="5" rx="2.5" fill={MUTED} opacity="0.22" />
      ))}
      <rect x="32" y="121" width="126" height="14" rx="3" fill={BLUE} opacity="0.16" stroke={BLUE} />
      <text x="36" y="131" fill={BLUE} fontSize="6.2" fontFamily={FONT}>
        clause 4.2 — waiting period
      </text>
      <rect x="32" y="143" width="126" height="14" rx="3" fill={GOOD} opacity="0.14" stroke={GOOD} />
      <text x="36" y="153" fill={GOOD} fontSize="6.2" fontFamily={FONT}>
        clause 6.1 — room rent limit
      </text>
      <text x="32" y="174" fill={MUTED} fontSize="5.9" fontFamily={FONT}>
        plus the schedule: sum insured, members, deductibles
      </text>

      <path d="M176 108 L196 108" stroke={LINE} markerEnd="url(#doc-arrow)" />
      <defs>
        <marker id="doc-arrow" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 Z" fill={MUTED} />
        </marker>
      </defs>

      <rect x="200" y="34" width="178" height="150" rx="8" fill={PANEL} stroke={LINE} />
      <text x="210" y="50" fill={MUTED} {...tiny} fontWeight={600}>
        The AI summary
      </text>
      {claims.map((c, i) => {
        const y = 66 + i * 38
        return (
          <g key={c.t}>
            <rect x="210" y={y} width="158" height="30" rx="5" fill={c.ok ? GOOD : ROSE} opacity="0.08" stroke={c.ok ? GOOD : ROSE} />
            <text x="218" y={y + 12} fill={INK} fontSize="6.6" fontFamily={FONT}>
              {c.t.length > 32 ? `${c.t.slice(0, 31)}…` : c.t}
            </text>
            <text x="218" y={y + 23} fill={c.ok ? GOOD : ROSE} fontSize="6.2" fontFamily={FONT}>
              {c.ok ? 'clause found — verified' : 'no clause found — remove the claim'}
            </text>
          </g>
        )
      })}
      <text x="210" y="176" fill={MUTED} fontSize="6" fontFamily={FONT}>
        Delete your name, DOB, policy number and diagnosis before upload.
      </text>
    </>
  )
}

/** l5-118 — the loop that separates a durable concept from a moving rule. */
export function LearningLoop() {
  const nodes = [
    { t: 'Ask', d: 'from first principles', c: BLUE, x: 36, y: 58 },
    { t: 'Simplify', d: 'same idea, own words', c: PURPLE, x: 220, y: 58 },
    { t: 'Find the rule', d: 'which authority owns it', c: AMBER, x: 220, y: 140 },
    { t: 'Check the source', d: 'the current publication', c: GOOD, x: 36, y: 140 },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} {...head}>
        Learn the mechanism here, the rule there
      </text>
      {nodes.map((n) => (
        <g key={n.t}>
          <rect x={n.x} y={n.y} width="144" height="44" rx="8" fill={PANEL} stroke={n.c} opacity="0.9" />
          <text x={n.x + 12} y={n.y + 19} fill={n.c} fontSize="8" fontFamily={FONT} fontWeight={600}>
            {n.t}
          </text>
          <text x={n.x + 12} y={n.y + 32} fill={MUTED} fontSize="6.4" fontFamily={FONT}>
            {n.d}
          </text>
        </g>
      ))}
      <path d="M180 72 L220 72" stroke={LINE} markerEnd="url(#learn-arrow)" />
      <path d="M292 102 L292 140" stroke={LINE} markerEnd="url(#learn-arrow)" />
      <path d="M220 162 L180 162" stroke={LINE} markerEnd="url(#learn-arrow)" />
      <path d="M108 140 L108 102" stroke={LINE} markerEnd="url(#learn-arrow)" />
      <defs>
        <marker id="learn-arrow" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 Z" fill={MUTED} />
        </marker>
      </defs>

      <rect x="154" y="92" width="92" height="26" rx="13" fill="#0b1020" stroke={LINE} />
      <text x="200" y="109" fill={INK} fontSize="7.4" fontFamily={FONT} textAnchor="middle" fontWeight={600}>
        restate it
      </text>

      <text x="24" y="202" fill={MUTED} {...tiny}>
        A fluent answer feels like knowledge. The test is whether you can apply it to your own numbers.
      </text>
      <text x="24" y="216" fill={AMBER} {...tiny}>
        Rates, slabs, ceilings and thresholds expire. Regulator page first, then the instrument, then commentary.
      </text>
    </>
  )
}

/** l5-119 — five failures, all wearing the same fluent voice. */
export function AiFailureModes() {
  const modes = [
    { t: 'Cut-off', d: 'a rule that was current two years ago', c: AMBER },
    { t: 'Arithmetic', d: 'a total that is close but not exact', c: ROSE },
    { t: 'Context loss', d: 'it forgets a constraint you gave', c: PURPLE },
    { t: 'Invention', d: 'a citation that does not exist', c: ROSE },
    { t: 'Agreement', d: 'it builds on your wrong premise', c: BLUE },
  ]
  return (
    <>
      <text x="24" y="22" fill={INK} {...head}>
        Five ways the same paragraph goes wrong
      </text>
      {modes.map((m, i) => {
        const x = 22 + (i % 3) * 120
        const y = 36 + Math.floor(i / 3) * 66
        return (
          <motion.g
            key={m.t}
            initial={{ opacity: 0, y: y + 6 }}
            animate={{ opacity: 1, y }}
            transition={{ delay: i * 0.1, duration: 0.35 }}
          >
            <rect x={x} y="0" width="110" height="56" rx="8" fill={PANEL} stroke={m.c} opacity="0.9" />
            <circle cx={x + 14} cy="14" r="4" fill={m.c} opacity="0.85" />
            <text x={x + 24} y="17" fill={m.c} fontSize="7.6" fontFamily={FONT} fontWeight={600}>
              {m.t}
            </text>
            <text x={x + 10} y="34" fill={MUTED} fontSize="6.2" fontFamily={FONT}>
              {m.d.slice(0, 27)}
            </text>
            <text x={x + 10} y="45" fill={MUTED} fontSize="6.2" fontFamily={FONT}>
              {m.d.slice(27)}
            </text>
          </motion.g>
        )
      })}

      <rect x="262" y="102" width="114" height="56" rx="8" fill={GOOD} opacity="0.07" stroke={GOOD} />
      <text x="274" y="118" fill={GOOD} fontSize="7.4" fontFamily={FONT} fontWeight={600}>
        The defence
      </text>
      <text x="274" y="132" fill={MUTED} fontSize="6.2" fontFamily={FONT}>
        ask for the formula,
      </text>
      <text x="274" y="142" fill={MUTED} fontSize="6.2" fontFamily={FONT}>
        restate the constraints,
      </text>
      <text x="274" y="152" fill={MUTED} fontSize="6.2" fontFamily={FONT}>
        open every citation
      </text>

      <text x="24" y="182" fill={MUTED} {...tiny}>
        The model cannot tell a question it knows from one it is guessing at. Both arrive in the same voice.
      </text>
      <text x="24" y="196" fill={AMBER} {...tiny}>
        You supply the distinction the tool cannot make — that is the whole job.
      </text>
      <text x="24" y="212" fill={MUTED} fontSize="6" fontFamily={FONT}>
        No duty of care, no fiduciary role, no liability: the tool owes you nothing but text.
      </text>
    </>
  )
}

/** l5-120 — the claim looks fine; only the trail behind it is missing. */
export function HallucinationHunt() {
  return (
    <>
      <text x="24" y="22" fill={INK} {...head}>
        A citation is a promise to be checked
      </text>
      <rect x="22" y="34" width="356" height="52" rx="8" fill={PANEL} stroke={LINE} />
      <text x="34" y="50" fill={BLUE} fontSize="7.4" fontFamily={FONT}>
        “As per RBI circular RBI/2024-25/112, deposits are insured up to ₹5 lakh.”
      </text>
      <text x="34" y="66" fill={MUTED} fontSize="6.4" fontFamily={FONT}>
        Specific number. Specific limit. Plausible. Reads like something you should not need to check.
      </text>
      <text x="34" y="78" fill={AMBER} fontSize="6.4" fontFamily={FONT}>
        The limit is real for deposit insurance, but the circular number and the attribution may not be.
      </text>

      <text x="24" y="104" fill={INK} {...tiny} fontWeight={600}>
        The trail
      </text>
      {[
        { t: 'Does the document exist on the regulator’s site?', ok: true },
        { t: 'Does it contain the quoted words?', ok: true },
        { t: 'Does the authority match the subject?', ok: false },
        { t: 'Does the rate apply to this asset and this year?', ok: true },
      ].map((s, i) => {
        const y = 114 + i * 20
        return (
          <g key={s.t}>
            <circle cx="30" cy={y - 3} r="5.5" fill={s.ok ? GOOD : ROSE} opacity="0.16" stroke={s.ok ? GOOD : ROSE} />
            <text x="30" y={y - 0.6} fill={s.ok ? GOOD : ROSE} fontSize="6.6" fontFamily={FONT} textAnchor="middle">
              {s.ok ? '✓' : '✕'}
            </text>
            <text x="42" y={y} fill={MUTED} fontSize="6.8" fontFamily={FONT}>
              {s.t}
            </text>
          </g>
        )
      })}

      <rect x="238" y="100" width="140" height="82" rx="8" fill={ROSE} opacity="0.07" stroke={ROSE} />
      <text x="248" y="116" fill={ROSE} fontSize="7.2" fontFamily={FONT} fontWeight={600}>
        Cheapest check of all
      </text>
      <text x="248" y="130" fill={MUTED} fontSize="6.2" fontFamily={FONT}>
        re-add every total in the answer
      </text>
      <text x="248" y="142" fill={MUTED} fontSize="6.2" fontFamily={FONT}>
        check the dates agree with
      </text>
      <text x="248" y="152" fill={MUTED} fontSize="6.2" fontFamily={FONT}>
        each other
      </text>
      <text x="248" y="166" fill={MUTED} fontSize="6.2" fontFamily={FONT}>
        check the units: % vs points,
      </text>
      <text x="248" y="176" fill={MUTED} fontSize="6.2" fontFamily={FONT}>
        lakh vs crore, month vs year
      </text>

      <text x="24" y="206" fill={MUTED} {...tiny}>
        A real number applied to the wrong asset is a hallucination too — and the hardest kind to notice.
      </text>
      <text x="24" y="214" fill={AMBER} {...tiny}>
        If the primary source is ambiguous, the next step is a professional who owes you a duty, not another bot.
      </text>
    </>
  )
}

/** l5-121 — keep the shape of the problem, remove the identity. */
export function RedactionFilter() {
  const before = ['Ravi Sharma, PAN ABCDE1234F', 'A/c 5010 7781 2244, IFSC HDFC0001234', 'Salary ₹95,000 credited 01 Sep']
  const after = ['[NAME], [PAN]', '[ACCOUNT], [IFSC]', '₹95,000 credited 01 Sep']
  return (
    <>
      <text x="24" y="22" fill={INK} {...head}>
        What leaves your hands is a shape, not an identity
      </text>

      <rect x="22" y="36" width="150" height="108" rx="8" fill={PANEL} stroke={LINE} />
      <text x="32" y="52" fill={MUTED} {...tiny} fontWeight={600}>
        Before
      </text>
      {before.map((t, i) => (
        <text key={t} x="32" y={72 + i * 22} fill={ROSE} fontSize="6.4" fontFamily={FONT}>
          {t}
        </text>
      ))}

      <path d="M176 90 L202 90" stroke={LINE} markerEnd="url(#red-arrow)" />
      <defs>
        <marker id="red-arrow" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 Z" fill={MUTED} />
        </marker>
      </defs>

      <motion.g initial={{ scaleX: 0.3, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }} transition={{ duration: 0.5 }}>
        <rect x="176" y="62" width="22" height="98" rx="4" fill={PURPLE} opacity="0.22" stroke={PURPLE} />
      </motion.g>
      <text x="187" y="114" fill={PURPLE} fontSize="6" fontFamily={FONT} textAnchor="middle" transform="rotate(-90 187 114)">
        redact
      </text>

      <rect x="206" y="36" width="172" height="108" rx="8" fill={PANEL} stroke={LINE} />
      <text x="216" y="52" fill={GOOD} {...tiny} fontWeight={600}>
        After
      </text>
      {after.map((t, i) => (
        <text key={t} x="216" y={72 + i * 22} fill={INK} fontSize="6.4" fontFamily={FONT}>
          {t}
        </text>
      ))}
      <text x="216" y="132" fill={MUTED} fontSize="6" fontFamily={FONT}>
        same question, same answer quality
      </text>

      <rect x="22" y="156" width="356" height="36" rx="7" fill={ROSE} opacity="0.07" stroke={ROSE} />
      <text x="34" y="170" fill={ROSE} fontSize="6.6" fontFamily={FONT} fontWeight={600}>
        Never: OTP · PIN · password · CVV · recovery codes — and never someone else’s medical file
      </text>
      <text x="34" y="182" fill={MUTED} fontSize="6.2" fontFamily={FONT}>
        PDF metadata and screenshot banners survive a visual redaction. Remove them too.
      </text>

      <text x="24" y="206" fill={MUTED} {...tiny}>
        The test for every field: does the answer change if I remove this? If not, it does not belong in the prompt.
      </text>
      <text x="24" y="214" fill={AMBER} {...tiny}>
        Deleting the chat is not recall — the copy left your device the moment you sent it.
      </text>
    </>
  )
}

/** l5-122 — six secrets behind a wall that no request crosses. */
export function CredentialWall() {
  const secrets = ['OTP', 'UPI PIN', 'Password', 'Card + CVV', 'Card PIN', 'Recovery codes']
  return (
    <>
      <text x="24" y="22" fill={INK} {...head}>
        Nothing legitimate crosses this wall
      </text>

      <rect x="24" y="38" width="222" height="146" rx="10" fill={PANEL} stroke={LINE} />
      <text x="40" y="56" fill={MUTED} {...tiny} fontWeight={600}>
        What lives on the far side
      </text>
      {secrets.map((s, i) => {
        const x = 38 + (i % 3) * 70
        const y = 68 + Math.floor(i / 3) * 34
        return (
          <g key={s}>
            <rect x={x} y={y} width="62" height="24" rx="5" fill={ROSE} opacity="0.1" stroke={ROSE} />
            <text x={x + 31} y={y + 15} fill={ROSE} fontSize="6.6" fontFamily={FONT} textAnchor="middle">
              {s}
            </text>
          </g>
        )
      })}
      <text x="40" y="150" fill={MUTED} fontSize="6.2" fontFamily={FONT}>
        Each one authorises something on its own.
      </text>
      <text x="40" y="162" fill={MUTED} fontSize="6.2" fontFamily={FONT}>
        A caller who has one is treated as you.
      </text>
      <text x="40" y="176" fill={AMBER} fontSize="6.2" fontFamily={FONT}>
        There is no partial version and no safe tool.
      </text>

      <rect x="254" y="38" width="12" height="146" rx="3" fill={AMBER} opacity="0.7" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <line key={i} x1="254" y1={48 + i * 24} x2="266" y2={58 + i * 24} stroke="#0b1020" strokeWidth="1.4" />
      ))}

      <text x="278" y="56" fill={INK} {...tiny} fontWeight={600}>
        Requests that arrive
      </text>
      {['“Read me the OTP”', '“Enter PIN to receive”', '“Send CVV to verify”'].map((t, i) => (
        <g key={t}>
          <path d={`M360 ${76 + i * 30} L282 ${76 + i * 30}`} stroke={ROSE} strokeDasharray="3 3" markerEnd="url(#cred-arrow)" />
          <text x="278" y={92 + i * 30} fill={ROSE} fontSize="6.2" fontFamily={FONT}>
            {t}
          </text>
          <text x="278" y={101 + i * 30} fill={AMBER} fontSize="5.8" fontFamily={FONT}>
            stopped at the wall
          </text>
        </g>
      ))}
      <defs>
        <marker id="cred-arrow" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 Z" fill={ROSE} />
        </marker>
      </defs>

      <text x="24" y="200" fill={MUTED} {...tiny}>
        Already shared one? Freeze the card or account first, then change the credential and report it.
      </text>
      <text x="24" y="214" fill={AMBER} {...tiny}>
        cybercrime.gov.in · 1930 — the golden hour is the only variable you still control.
      </text>
    </>
  )
}
