import { motion } from 'framer-motion'

/** Additional Level 2 illustrations: credit, loans, insurance and fraud. */

const ease = { type: 'spring' as const, stiffness: 130 }

/** The EMI looks small; the fees around it do not. */
export function FeeAddons() {
  const fees = [
    { l: 'Processing fee', v: 70, c: '#f59e0b' },
    { l: 'Documentation', v: 40, c: '#f59e0b' },
    { l: 'Loan insurance', v: 54, c: '#f87171' },
    { l: 'GST on fees', v: 24, c: '#f87171' },
  ]
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        The EMI is not the whole bill
      </text>
      <motion.rect x="40" y="40" height="34" rx="8" fill="#38bdf8" opacity="0.85" initial={{ width: 0 }} animate={{ width: 250 }} transition={ease} />
      <text x="165" y="62" textAnchor="middle" fontSize="12" fill="#0b1524" fontWeight="700">
        The EMI you budget for
      </text>
      <text x="316" y="62" fontSize="11" fill="#38bdf8" fontWeight="700">
        + hidden
      </text>
      {fees.map((f, i) => (
        <motion.g key={f.l} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 + i * 0.1 }}>
          <motion.rect x="40" y={92 + i * 26} rx="5" fill={f.c} opacity="0.8" initial={{ width: 0 }} animate={{ width: f.v }} transition={{ delay: 0.3 + i * 0.1, ...ease }} />
          <text x={48 + f.v} y={95 + i * 26 + 14} fontSize="10" fill="#d7dbe9">
            {f.l}
          </text>
        </motion.g>
      ))}
      <text x="200" y="212" textAnchor="middle" fontSize="10" fill="#8791b3">
        Fees never appear in the EMI - which is exactly why they get missed
      </text>
    </>
  )
}

/** Settling early swaps a large future interest bill for a smaller balance today. */
export function ForeclosureBalance() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Clear it early and the interest stops
      </text>
      <motion.rect x="70" width="90" rx="6" fill="#f87171" opacity="0.75" initial={{ height: 0, attrY: 160 }} animate={{ height: 118, attrY: 42 }} transition={ease} />
      <text x="115" y="60" textAnchor="middle" fontSize="10" fill="#2a0f0f">Keep paying</text>
      <text x="115" y="130" textAnchor="middle" fontSize="11" fill="#2a0f0f" fontWeight="700">interest</text>
      <motion.rect x="240" width="90" rx="6" fill="#38bdf8" opacity="0.85" initial={{ height: 0, attrY: 160 }} animate={{ height: 62, attrY: 98 }} transition={{ delay: 0.2, ...ease }} />
      <text x="285" y="120" textAnchor="middle" fontSize="10" fill="#0b1524">Settle now</text>
      <text x="285" y="140" textAnchor="middle" fontSize="11" fill="#0b1524" fontWeight="700">balance</text>
      <motion.line x1="40" y1="160" x2="360" y2="160" stroke="#8791b3" strokeWidth="1" />
      <text x="200" y="190" textAnchor="middle" fontSize="10" fill="#34e0a1">
        the red column is money you never have to earn
      </text>
      <text x="200" y="206" textAnchor="middle" fontSize="10" fill="#8791b3">
        Check that the prepayment penalty is smaller than the saving
      </text>
    </>
  )
}

/** A vehicle's true cost: price plus insurance, registration and interest. */
export function VehicleEmiTrue() {
  const parts = [
    { l: 'Ex-showroom', v: 180, c: '#38bdf8' },
    { l: 'Insurance', v: 34, c: '#f59e0b' },
    { l: 'Registration', v: 46, c: '#a855f7' },
    { l: 'Interest', v: 60, c: '#f87171' },
  ]
  let x = 44
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        The EMI hides the real price
      </text>
      {parts.map((p, i) => {
        const bx = x
        x += p.v
        return (
          <motion.g key={p.l} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.12 }}>
            <motion.rect x={bx} y="60" height="42" rx="6" fill={p.c} opacity="0.85" initial={{ width: 0 }} animate={{ width: p.v }} transition={{ delay: i * 0.12, ...ease }} />
            <text x={bx + p.v / 2} y={86} textAnchor="middle" fontSize="9" fill="#0b1524" fontWeight="700">
              {p.l}
            </text>
          </motion.g>
        )
      })}
      <text x="200" y="128" textAnchor="middle" fontSize="11" fill="#f87171" fontWeight="700">
        On-road cost is far above the sticker
      </text>
      <text x="200" y="150" textAnchor="middle" fontSize="10" fill="#8791b3">
        A smaller monthly number just stretches the same total over more years
      </text>
      <text x="200" y="176" textAnchor="middle" fontSize="10" fill="#38bdf8">
        Compare total cost, not the monthly figure
      </text>
    </>
  )
}

/** A single missed date triggers a chain of consequences. */
export function DueDateClock() {
  const nodes = ['Missed date', 'Late fee', 'Penalty rate', 'Record (years)']
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        One date starts the whole chain
      </text>
      <circle cx="60" cy="86" r="30" fill="none" stroke="#8791b3" strokeWidth="3" />
      <line x1="60" y1="86" x2="60" y2="66" stroke="#f87171" strokeWidth="3" strokeLinecap="round" />
      <line x1="60" y1="86" x2="76" y2="92" stroke="#f87171" strokeWidth="3" strokeLinecap="round" />
      {nodes.map((n, i) => (
        <motion.g key={n} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.15 }}>
          <motion.rect x={112 + i * 72} y="68" width="60" height="36" rx="8" fill={i === 0 ? '#f59e0b' : i === 3 ? '#f87171' : '#f59e0b'} opacity={0.85 - i * 0.12} initial={{ opacity: 0 }} animate={{ opacity: 0.85 - i * 0.12 }} />
          <text x={142 + i * 72} y="90" textAnchor="middle" fontSize="8.5" fill="#0b1524" fontWeight="700">
            {n}
          </text>
          {i < 3 && (
            <text x={178 + i * 72} y="90" fontSize="12" fill="#8791b3">
              →
            </text>
          )}
        </motion.g>
      ))}
      <text x="200" y="140" textAnchor="middle" fontSize="10" fill="#8791b3">
        A fee is refundable in your head; the credit record is not
      </text>
      <text x="200" y="166" textAnchor="middle" fontSize="11" fill="#f87171" fontWeight="700">
        Autopay the full amount, never the minimum
      </text>
    </>
  )
}

/** A small fee today against a long mark on your record. */
export function LateFeeRecord() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Small money, long memory
      </text>
      <motion.rect x="46" width="48" rx="6" fill="#f87171" opacity="0.85" initial={{ height: 0, attrY: 110 }} animate={{ height: 40, attrY: 70 }} transition={ease} />
      <text x="70" y="128" textAnchor="middle" fontSize="10" fill="#f87171" fontWeight="700">the fee</text>
      <motion.line x1="120" y1="90" x2="356" y2="90" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.3 }} />
      <text x="120" y="80" fontSize="10" fill="#f59e0b">mark on your credit record</text>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <g key={i}>
          <line x1={120 + i * 47} y1="96" x2={120 + i * 47} y2="104" stroke="#8791b3" strokeWidth="1" />
          <text x={120 + i * 47} y="118" textAnchor="middle" fontSize="8" fill="#8791b3">yr{i + 1}</text>
        </g>
      ))}
      <text x="200" y="166" textAnchor="middle" fontSize="10" fill="#8791b3">
        The rupee amount is forgotten in a week; the record is not
      </text>
      <text x="200" y="192" textAnchor="middle" fontSize="11" fill="#d7dbe9">
        Pay on time even when the amount is tiny
      </text>
    </>
  )
}

/** A policy is a shield with gaps: everything it excludes falls through. */
export function PolicyGaps() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        The shield only covers what the policy says
      </text>
      <motion.path
        d="M200 40 L120 62 V110 C120 140 160 164 200 178 C240 164 280 140 280 110 V62 Z"
        fill="#38bdf8"
        opacity="0.18"
        stroke="#38bdf8"
        strokeWidth="2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.18 }}
      />
      {[0, 1, 2].map((i) => (
        <motion.circle key={i} cx={160 + i * 40} cy={104 + (i % 2) * 26} r="13" fill="#0f1529" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 + i * 0.15 }} />
      ))}
      {[0, 1, 2].map((i) => (
        <motion.g key={`a${i}`} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 6 }} transition={{ delay: 0.5 + i * 0.15 }}>
          <line x1={160 + i * 40} y1={84 + (i % 2) * 26} x2={160 + i * 40} y2={96 + (i % 2) * 26} stroke="#f87171" strokeWidth="2" strokeDasharray="3 2" />
          <circle cx={160 + i * 40} cy={82 + (i % 2) * 26} r="4" fill="#f87171" />
        </motion.g>
      ))}
      <text x="200" y="200" textAnchor="middle" fontSize="10" fill="#f87171">
        Exclusions, waiting periods and caps are the holes
      </text>
      <text x="200" y="214" textAnchor="middle" fontSize="10" fill="#8791b3">
        Read the exclusions before you need them, not after
      </text>
    </>
  )
}

/** A cashless claim is a sequence of steps, not a surprise. */
export function ClaimSteps() {
  const steps = ['Pre-authorise', 'Admission', 'Cashless', 'Settled']
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        A claim is a routine, not a crisis
      </text>
      {steps.map((s, i) => (
        <motion.g key={s} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}>
          <circle cx={54 + i * 98} cy="96" r="22" fill="#34e0a1" opacity="0.85" />
          <text x={54 + i * 98} y="101" textAnchor="middle" fontSize="14" fill="#0b1524" fontWeight="700">
            {i + 1}
          </text>
          <text x={54 + i * 98} y="140" textAnchor="middle" fontSize="9" fill="#d7dbe9">
            {s}
          </text>
          {i < steps.length - 1 && (
            <line x1={78 + i * 98} y1="96" x2={130 + i * 98} y2="96" stroke="#8791b3" strokeWidth="2" strokeDasharray="4 3" />
          )}
        </motion.g>
      ))}
      <text x="200" y="176" textAnchor="middle" fontSize="10" fill="#8791b3">
        Pre-authorisation before admission is what makes it cashless
      </text>
      <text x="200" y="198" textAnchor="middle" fontSize="10" fill="#34e0a1">
        Keep the policy number and helpline saved
      </text>
    </>
  )
}

/** A credit limit is not the same as the ability to repay it. */
export function LimitVsRepay() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        A limit is not capacity to repay
      </text>
      <motion.rect x="70" y="52" height="40" rx="8" fill="#38bdf8" opacity="0.8" initial={{ width: 0 }} animate={{ width: 260 }} transition={ease} />
      <text x="82" y="78" fontSize="11" fill="#0b1524" fontWeight="700">Credit limit offered</text>
      <motion.rect x="70" y="108" height="40" rx="8" fill="#34e0a1" opacity="0.85" initial={{ width: 0 }} animate={{ width: 120 }} transition={{ delay: 0.25, ...ease }} />
      <text x="82" y="134" fontSize="11" fill="#0b1524" fontWeight="700">What you can repay</text>
      <motion.rect x="190" y="108" width="140" height="40" rx="8" fill="#f87171" opacity="0.8" initial={{ opacity: 0 }} animate={{ opacity: 0.8 }} transition={{ delay: 0.5 }} />
      <text x="260" y="134" textAnchor="middle" fontSize="11" fill="#2a0f0f" fontWeight="700">the trap</text>
      <text x="200" y="182" textAnchor="middle" fontSize="10" fill="#8791b3">
        The gap between the bars is exposure, not income
      </text>
      <text x="200" y="204" textAnchor="middle" fontSize="10" fill="#f87171">
        A higher limit raises what you can lose, never what you can repay
      </text>
    </>
  )
}

/** A missed payment escalates until an asset is sold. */
export function DefaultCascade() {
  const steps = [
    { l: 'On time', c: '#34e0a1', w: 220 },
    { l: 'Missed', c: '#f59e0b', w: 186 },
    { l: 'Fee', c: '#f59e0b', w: 152 },
    { l: 'Penalty rate', c: '#f87171', w: 118 },
    { l: 'Asset sold', c: '#f87171', w: 84 },
  ]
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Default is a staircase, not an event
      </text>
      {steps.map((s, i) => (
        <motion.g key={s.l} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.13 }}>
          <motion.rect x={40} y={40 + i * 32} height="24" rx="6" fill={s.c} opacity="0.85" initial={{ width: 0 }} animate={{ width: s.w }} transition={{ delay: i * 0.13, ...ease }} />
          <text x={40 + s.w + 10} y={40 + i * 32 + 16} fontSize="10" fill="#d7dbe9">
            {s.l}
          </text>
        </motion.g>
      ))}
      <text x="200" y="212" textAnchor="middle" fontSize="10" fill="#8791b3">
        It always starts with a single missed date
      </text>
    </>
  )
}

/** Available credit looks like capacity but is really exposure. */
export function CreditExposure() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Available credit is not income
      </text>
      <motion.rect x="46" y="46" width="308" height="46" rx="8" fill="none" stroke="#f87171" strokeWidth="2" strokeDasharray="6 4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} />
      <motion.rect x="46" y="46" height="46" rx="8" fill="#f87171" opacity="0.3" initial={{ width: 0 }} animate={{ width: 308 }} transition={ease} />
      <text x="200" y="74" textAnchor="middle" fontSize="11" fill="#fca5a5" fontWeight="700">
        ₹5,00,000 available to spend
      </text>
      <motion.rect x="46" y="122" height="40" rx="8" fill="#34e0a1" opacity="0.85" initial={{ width: 0 }} animate={{ width: 120 }} transition={{ delay: 0.3, ...ease }} />
      <text x="58" y="147" fontSize="11" fill="#0b1524" fontWeight="700">Your monthly income</text>
      <text x="200" y="192" textAnchor="middle" fontSize="10" fill="#8791b3">
        One is a liability waiting for a decision; the other is what you earn
      </text>
      <text x="200" y="212" textAnchor="middle" fontSize="10" fill="#f87171">
        Never treat the top bar as the bottom bar
      </text>
    </>
  )
}

/** Life cover exists to replace income for the people who depend on it. */
export function LifeCoverDependants() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Life cover replaces income for dependants
      </text>
      <polygon points="200,40 130,92 270,92" fill="#38bdf8" opacity="0.3" />
      <rect x="145" y="92" width="110" height="60" rx="4" fill="#1b2436" stroke="#38bdf8" strokeWidth="1.5" />
      <circle cx="176" cy="118" r="9" fill="#34e0a1" />
      <circle cx="224" cy="118" r="9" fill="#34e0a1" />
      <text x="200" y="146" textAnchor="middle" fontSize="9" fill="#d7dbe9">dependants</text>
      <motion.circle cx="200" cy="72" r="10" fill="#f59e0b" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} />
      <text x="200" y="40" textAnchor="middle" fontSize="9" fill="#f59e0b">the earner</text>
      <motion.line x1="200" y1="86" x2="200" y2="104" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 2" />
      <text x="200" y="176" textAnchor="middle" fontSize="10" fill="#8791b3">
        With no dependants, there is little to shelter - cover can stay small
      </text>
      <text x="200" y="200" textAnchor="middle" fontSize="10" fill="#34e0a1">
        Buy cover to protect income, not to build wealth
      </text>
    </>
  )
}

/** Motor cover: your liability to the other party is what matters most. */
export function MotorThirdParty() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        The worst accident is the one you cause
      </text>
      <g>
        <rect x="30" y="96" width="120" height="40" rx="8" fill="#38bdf8" opacity="0.8" />
        <circle cx="58" cy="140" r="10" fill="#0b1524" />
        <circle cx="122" cy="140" r="10" fill="#0b1524" />
        <text x="90" y="121" textAnchor="middle" fontSize="10" fill="#0b1524" fontWeight="700">Your car</text>
      </g>
      <g>
        <rect x="250" y="96" width="120" height="40" rx="8" fill="#94a3b8" opacity="0.8" />
        <circle cx="278" cy="140" r="10" fill="#0b1524" />
        <circle cx="342" cy="140" r="10" fill="#0b1524" />
        <text x="310" y="121" textAnchor="middle" fontSize="10" fill="#0b1524" fontWeight="700">The other car</text>
      </g>
      <motion.path d="M152 112 Q200 78 248 112" fill="none" stroke="#f87171" strokeWidth="2.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8 }} />
      <circle cx="200" cy="86" r="4" fill="#f87171" />
      <text x="200" y="74" textAnchor="middle" fontSize="9" fill="#f87171">your liability</text>
      <text x="200" y="176" textAnchor="middle" fontSize="10" fill="#8791b3">
        Third-party cover pays the other party when you are at fault
      </text>
      <text x="200" y="200" textAnchor="middle" fontSize="10" fill="#34e0a1">
        It matters most exactly when the damage is worst
      </text>
    </>
  )
}

/** Three tiny instalments across five apps become one number you never chose. */
export function BnplStack() {
  const apps = ['App A', 'App B', 'App C', 'App D', 'App E']
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Small instalments stack into a big number
      </text>
      {apps.map((a, i) => (
        <motion.g key={a} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
          <rect x={30 + i * 70} y="48" width="56" height="66" rx="8" fill="#1b2436" stroke="#38bdf8" strokeWidth="1" />
          <text x={58 + i * 70} y="66" textAnchor="middle" fontSize="9" fill="#d7dbe9">{a}</text>
          {[0, 1, 2].map((j) => (
            <rect key={j} x={38 + i * 70} y={76 + j * 12} width="40" height="8" rx="2" fill="#f59e0b" opacity="0.85" />
          ))}
        </motion.g>
      ))}
      <motion.rect x="30" y="140" height="34" rx="6" fill="#f87171" opacity="0.85" initial={{ width: 0 }} animate={{ width: 306 }} transition={{ delay: 0.6, ...ease }} />
      <text x="183" y="162" textAnchor="middle" fontSize="11" fill="#2a0f0f" fontWeight="700">
        One monthly outflow you did not plan
      </text>
      <text x="200" y="200" textAnchor="middle" fontSize="10" fill="#8791b3">
        Each app feels affordable; together they are a second EMI
      </text>
    </>
  )
}
