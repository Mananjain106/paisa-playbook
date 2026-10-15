import { motion } from 'framer-motion'

/** Additional Level 4 illustrations: tax, retirement, insurance, derivatives, currency and business. */

const ease = { type: 'spring' as const, stiffness: 130 }

/* ------------------------------------------------------------------ Insurance */

/** Pure term cover: the rungs of protection, at the lowest premium. */
export function TermCoverRungs() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Pure cover, lowest premium
      </text>
      {[0, 1, 2, 3].map((i) => (
        <motion.rect key={i} x={56 + i * 74} y={150 - i * 30} height={26} rx="6" fill="#34e0a1" opacity={0.85 - i * 0.12} initial={{ width: 0 }} animate={{ width: 56 }} transition={{ delay: i * 0.1, ...ease }} />
      ))}
      <text x="196" y="176" textAnchor="middle" fontSize="9" fill="#8791b3">cover amount, in steps</text>
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        <rect x="270" y="52" width="94" height="34" rx="8" fill="#38bdf8" opacity="0.2" stroke="#38bdf8" strokeWidth="1" />
        <text x="317" y="73" textAnchor="middle" fontSize="10" fill="#38bdf8">premium: small</text>
      </motion.g>
      <text x="200" y="204" textAnchor="middle" fontSize="10" fill="#8791b3">
        No savings inside - every rupee buys protection
      </text>
    </>
  )
}

/** Whole-life bundles lifetime cover with a savings pot. */
export function WholeLifeBundle() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Cover plus savings in one product
      </text>
      <motion.rect x="80" width="90" rx="8" fill="#34e0a1" opacity="0.85" initial={{ height: 0, attrY: 160 }} animate={{ height: 74, attrY: 86 }} transition={ease} />
      <text x="125" y="128" textAnchor="middle" fontSize="10" fill="#0b1524">Cover</text>
      <motion.rect x="80" width="90" rx="8" fill="#38bdf8" opacity="0.85" initial={{ height: 0, attrY: 86 }} animate={{ height: 56, attrY: 30 }} transition={{ delay: 0.2, ...ease }} />
      <text x="125" y="66" textAnchor="middle" fontSize="10" fill="#0b1524">Savings</text>
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        <text x="220" y="94" fontSize="11" fill="#f59e0b" fontWeight="700">Higher premium</text>
        <text x="220" y="116" fontSize="10" fill="#d7dbe9">than pure term cover</text>
        <text x="220" y="142" fontSize="10" fill="#8791b3">You pay for both,</text>
        <text x="220" y="158" fontSize="10" fill="#8791b3">and often do neither well.</text>
      </motion.g>
      <text x="200" y="196" textAnchor="middle" fontSize="10" fill="#8791b3">
        Cover for life, with a modest return attached
      </text>
    </>
  )
}

/** An endowment is insurance plus investment; the mix sets the return. */
export function EndowmentMix() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Part protection, part investment
      </text>
      <motion.rect x="50" y="60" height="50" rx="8" fill="#34e0a1" opacity="0.85" initial={{ width: 0 }} animate={{ width: 110 }} transition={ease} />
      <text x="105" y="90" textAnchor="middle" fontSize="10" fill="#0b1524" fontWeight="700">Insurance</text>
      <motion.rect x="160" y="60" height="50" rx="8" fill="#38bdf8" opacity="0.85" initial={{ width: 0 }} animate={{ width: 190 }} transition={{ delay: 0.2, ...ease }} />
      <text x="255" y="90" textAnchor="middle" fontSize="10" fill="#0b1524" fontWeight="700">Investment</text>
      <text x="200" y="140" textAnchor="middle" fontSize="11" fill="#f59e0b" fontWeight="700">
        The mix sets your return
      </text>
      <text x="200" y="166" textAnchor="middle" fontSize="10" fill="#8791b3">
        More investment, more return - and more risk
      </text>
      <text x="200" y="192" textAnchor="middle" fontSize="10" fill="#d7dbe9">
        Buy pure cover cheaper, and invest the rest yourself
      </text>
    </>
  )
}

/** ULIPs take charges off each premium before investing. */
export function UlipCharges() {
  const x = (i: number) => 60 + i * 96
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Charges come off before the fund does
      </text>
      {[0, 1, 2].map((i) => (
        <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.15 }}>
          <motion.rect x={x(i)} y="44" height="30" rx="4" fill="#38bdf8" opacity="0.7" initial={{ width: 0 }} animate={{ width: 64 }} transition={{ delay: i * 0.15, ...ease }} />
          <text x={x(i) + 32} y="63" textAnchor="middle" fontSize="9" fill="#0b1524">Premium</text>
          <motion.rect x={x(i)} y="80" height="26" rx="4" fill="#f87171" opacity="0.85" initial={{ width: 0 }} animate={{ width: 44 }} transition={{ delay: 0.1 + i * 0.15, ...ease }} />
          <text x={x(i) + 22} y="97" textAnchor="middle" fontSize="8" fill="#2a0f0f">charges</text>
          <motion.rect x={x(i)} y="112" height="26" rx="4" fill="#34e0a1" opacity="0.85" initial={{ width: 0 }} animate={{ width: 20 }} transition={{ delay: 0.2 + i * 0.15, ...ease }} />
          <text x={x(i) + 56} y="129" fontSize="8" fill="#d7dbe9">invested</text>
        </motion.g>
      ))}
      <text x="200" y="170" textAnchor="middle" fontSize="10" fill="#f87171">
        Charges, premiums allocation and fund fees stack up
      </text>
      <text x="200" y="196" textAnchor="middle" fontSize="10" fill="#8791b3">
        Read the charge table before you sign
      </text>
    </>
  )
}

/** A higher deductible lowers the premium and raises your first cost. */
export function DeductibleTradeoff() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Trade premium for a bigger first bill
      </text>
      <g>
        <text x="100" y="52" textAnchor="middle" fontSize="10" fill="#38bdf8">Low deductible</text>
        <motion.rect x="52" y="62" width="96" height="26" rx="5" fill="#f59e0b" opacity="0.85" />
        <text x="100" y="80" textAnchor="middle" fontSize="9" fill="#0b1524">premium: high</text>
        <motion.rect x="52" y="94" width="40" height="26" rx="5" fill="#34e0a1" opacity="0.85" />
        <text x="100" y="112" fontSize="9" fill="#8791b3">you pay: little</text>
      </g>
      <g>
        <text x="300" y="52" textAnchor="middle" fontSize="10" fill="#f87171">High deductible</text>
        <motion.rect x="252" y="62" width="40" height="26" rx="5" fill="#f59e0b" opacity="0.6" />
        <text x="272" y="80" fontSize="9" fill="#2a0f0f">low</text>
        <motion.rect x="252" y="94" width="96" height="26" rx="5" fill="#f87171" opacity="0.85" />
        <text x="300" y="112" textAnchor="middle" fontSize="9" fill="#2a0f0f">you pay: a lot first</text>
      </g>
      <text x="200" y="160" textAnchor="middle" fontSize="10" fill="#8791b3">
        The deductible is the risk you keep for yourself
      </text>
      <text x="200" y="190" textAnchor="middle" fontSize="11" fill="#d7dbe9">
        Choose a deductible you could actually pay tomorrow
      </text>
    </>
  )
}

/** A co-pay is the slice of every bill you still pay. */
export function CopaySlice() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        The slice you still pay yourself
      </text>
      <motion.rect x="60" y="60" height="54" rx="8" fill="#38bdf8" opacity="0.85" initial={{ width: 0 }} animate={{ width: 210 }} transition={ease} />
      <text x="165" y="93" textAnchor="middle" fontSize="11" fill="#0b1524" fontWeight="700">Insurer pays</text>
      <motion.rect x="270" y="60" height="54" rx="8" fill="#f87171" opacity="0.9" initial={{ width: 0 }} animate={{ width: 70 }} transition={{ delay: 0.25, ...ease }} />
      <text x="305" y="86" textAnchor="middle" fontSize="9" fill="#2a0f0f" fontWeight="700">Co-pay</text>
      <text x="305" y="100" textAnchor="middle" fontSize="8" fill="#2a0f0f">20%</text>
      <text x="200" y="152" textAnchor="middle" fontSize="11" fill="#f87171" fontWeight="700">
        A fixed share of every claim
      </text>
      <text x="200" y="178" textAnchor="middle" fontSize="10" fill="#8791b3">
        It lowers the premium; it also lowers what you receive
      </text>
      <text x="200" y="202" textAnchor="middle" fontSize="10" fill="#d7dbe9">
        On a large bill, the slice can be substantial
      </text>
    </>
  )
}

/** Cover does not reach the top rungs until the waiting period ends. */
export function WaitingPeriod() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Cover begins only after the wait
      </text>
      <motion.line x1="50" y1="112" x2="356" y2="112" stroke="#8791b3" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.9 }} />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <circle cx={110 + i * 84} cy="112" r="7" fill={i === 0 ? '#f87171' : '#34e0a1'} />
          <text x={110 + i * 84} y="140" textAnchor="middle" fontSize="9" fill="#8791b3">yr {i + 1}</text>
        </g>
      ))}
      <motion.rect x="50" y="88" width="66" height="14" rx="4" fill="#f87171" opacity="0.25" />
      <text x="83" y="82" textAnchor="middle" fontSize="9" fill="#f87171">waiting</text>
      <motion.rect x="196" y="66" width="160" height="40" rx="8" fill="#34e0a1" opacity="0.16" stroke="#34e0a1" strokeWidth="1" initial={{ opacity: 0 }} animate={{ opacity: 0.16 }} transition={{ delay: 0.5 }} />
      <text x="276" y="92" textAnchor="middle" fontSize="10" fill="#34e0a1">full cover active</text>
      <text x="200" y="184" textAnchor="middle" fontSize="10" fill="#8791b3">
        Pre-existing conditions and specific ailments have their own clocks
      </text>
      <text x="200" y="206" textAnchor="middle" fontSize="10" fill="#d7dbe9">
        The rungs above wait; the base cover protects sooner
      </text>
    </>
  )
}

/** Exclusions are the rungs the policy will not pay for. */
export function CoverExclusions() {
  const rows = ['Cosmetic', 'Self-inflicted', 'Non-disclosed', 'Specific illnesses']
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        The rungs the policy will not reach
      </text>
      {[0, 1, 2, 3].map((i) => (
        <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.12 }}>
          <rect x="70" y={44 + i * 36} width="180" height="26" rx="6" fill="#38bdf8" opacity={0.5 - i * 0.08} />
          <text x="160" y={62 + i * 36} textAnchor="middle" fontSize="10" fill={i === 0 ? '#0b1524' : '#d7dbe9'}>
            {i === 0 ? 'Covered' : rows[i - 1]}
          </text>
          {i > 0 && (
            <text x="270" y={62 + i * 36} fontSize="12" fill="#f87171">✗</text>
          )}
        </motion.g>
      ))}
      <text x="200" y="204" textAnchor="middle" fontSize="10" fill="#8791b3">
        Read the exclusions before you need to claim
      </text>
    </>
  )
}

/** A claim is a short list of steps, done in order. */
export function CoverClaimSteps() {
  const steps = ['Notify', 'Submit', 'Verify', 'Paid']
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Knowing the steps removes the panic
      </text>
      {steps.map((s, i) => (
        <motion.g key={s} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}>
          <circle cx={54 + i * 98} cy="96" r="22" fill="#38bdf8" opacity="0.85" />
          <text x={54 + i * 98} y="101" textAnchor="middle" fontSize="14" fill="#0b1524" fontWeight="700">{i + 1}</text>
          <text x={54 + i * 98} y="140" textAnchor="middle" fontSize="9.5" fill="#d7dbe9">{s}</text>
          {i < steps.length - 1 && <line x1={78 + i * 98} y1="96" x2={130 + i * 98} y2="96" stroke="#8791b3" strokeWidth="2" strokeDasharray="4 3" />}
        </motion.g>
      ))}
      <text x="200" y="178" textAnchor="middle" fontSize="10" fill="#8791b3">
        Documents and timelines are what claim teams ask for
      </text>
      <text x="200" y="202" textAnchor="middle" fontSize="10" fill="#34e0a1">
        Have the policy number and helpline ready
      </text>
    </>
  )
}

/* ------------------------------------------------------------------ Derivatives */

/** Contract size and lots set the whole position. */
export function ContractSizing() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Size the contract, size the risk
      </text>
      <rect x="50" y="60" width="70" height="70" rx="8" fill="#38bdf8" opacity="0.8" />
      <text x="85" y="92" textAnchor="middle" fontSize="9" fill="#0b1524">1 lot</text>
      <text x="85" y="108" textAnchor="middle" fontSize="9" fill="#0b1524">= 50 units</text>
      <text x="146" y="100" textAnchor="middle" fontSize="18" fill="#8791b3">×</text>
      {[0, 1, 2].map((i) => (
        <motion.rect key={i} x={186 + i * 46} width="38" height="70" rx="8" fill="#34e0a1" opacity="0.85" initial={{ height: 0, attrY: 130 }} animate={{ height: 70, attrY: 60 }} transition={{ delay: i * 0.12 }} />
      ))}
      <text x="244" y="150" textAnchor="middle" fontSize="9" fill="#34e0a1">3 lots</text>
      <text x="200" y="186" textAnchor="middle" fontSize="10" fill="#8791b3">
        More lots means the payoff line scales with it
      </text>
    </>
  )
}

/** A small margin controls a large position. */
export function MarginLeverage() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        A little money moves a big position
      </text>
      <motion.rect x="60" width="60" rx="6" fill="#f59e0b" opacity="0.9" initial={{ height: 0, attrY: 156 }} animate={{ height: 40, attrY: 116 }} transition={ease} />
      <text x="90" y="106" textAnchor="middle" fontSize="9" fill="#f59e0b">margin</text>
      <motion.rect x="150" width="200" rx="6" fill="#38bdf8" opacity="0.75" initial={{ height: 0, attrY: 156 }} animate={{ height: 120, attrY: 36 }} transition={{ delay: 0.2, ...ease }} />
      <text x="250" y="100" textAnchor="middle" fontSize="11" fill="#0b1524" fontWeight="700">position controlled</text>
      <line x1="40" y1="156" x2="360" y2="156" stroke="#8791b3" strokeWidth="1" />
      <text x="200" y="186" textAnchor="middle" fontSize="10" fill="#8791b3">
        Leverage magnifies gains and losses the same way
      </text>
    </>
  )
}

/** At expiry the time value is gone; only intrinsic value is left. */
export function ExpiryIntrinsic() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Time value melts toward zero
      </text>
      <motion.polyline points="48,60 120,84 190,112 256,142 330,168" fill="none" stroke="#f59e0b" strokeWidth="2.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
      <motion.line x1="48" y1="168" x2="356" y2="168" stroke="#34e0a1" strokeWidth="2" strokeDasharray="6 4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.3 }} />
      <text x="330" y="160" textAnchor="end" fontSize="9" fill="#34e0a1">intrinsic value</text>
      <text x="70" y="58" fontSize="9" fill="#f59e0b">value now</text>
      <text x="200" y="200" textAnchor="middle" fontSize="10" fill="#8791b3">
        As expiry nears, only what the option is actually worth survives
      </text>
    </>
  )
}

/** Daily settlement resets the position every evening. */
export function MarkToMarket() {
  const days = [10, -6, 8, -4, 12, -8, 6]
  const base = 120
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Settled every evening
      </text>
      <line x1="40" y1={base} x2="360" y2={base} stroke="#8791b3" strokeWidth="1" />
      {days.map((d, i) => {
        const h = Math.abs(d) * 6
        return (
          <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.08 }}>
            <motion.rect
              x={56 + i * 42}
              width={24}
              rx="3"
              fill={d > 0 ? '#34e0a1' : '#f87171'}
              opacity="0.85"
              initial={{ height: 0, attrY: d > 0 ? base : base }}
              animate={{ height: h, attrY: d > 0 ? base - h : base }}
              transition={{ delay: i * 0.08, ...ease }}
            />
            <text x={68 + i * 42} y={base + 30} textAnchor="middle" fontSize="8" fill="#8791b3">D{i + 1}</text>
          </motion.g>
        )
      })}
      <text x="200" y="196" textAnchor="middle" fontSize="10" fill="#8791b3">
        Gains and losses are credited or debited each day
      </text>
    </>
  )
}

/** A naked position: little upside, an open downside. */
export function NakedSpeculation() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Selling options: small upside, open risk
      </text>
      <line x1="40" y1="100" x2="360" y2="100" stroke="#8791b3" strokeWidth="1" strokeDasharray="3 3" />
      <motion.polyline points="50,66 200,66 200,66 320,150" fill="none" stroke="#f59e0b" strokeWidth="2.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
      <motion.polyline points="50,66 200,66" fill="none" stroke="#34e0a1" strokeWidth="6" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6 }} />
      <text x="120" y="58" textAnchor="middle" fontSize="9" fill="#34e0a1">premium kept</text>
      <text x="290" y="140" textAnchor="middle" fontSize="9" fill="#f87171">losses grow without a floor</text>
      <text x="200" y="196" textAnchor="middle" fontSize="10" fill="#8791b3">
        The premium is capped; the risk is not
      </text>
    </>
  )
}

/** Used well, a derivative transfers risk rather than creating it. */
export function RiskTransfer() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Risk moved, not multiplied
      </text>
      <rect x="40" y="70" width="94" height="64" rx="8" fill="#f87171" opacity="0.3" stroke="#f87171" strokeWidth="1.5" />
      <text x="87" y="98" textAnchor="middle" fontSize="10" fill="#d7dbe9">Producer's</text>
      <text x="87" y="114" textAnchor="middle" fontSize="10" fill="#d7dbe9">price risk</text>
      <motion.path d="M138 102 h58" stroke="#8791b3" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 0.3 }} />
      <polygon points="196,102 186,97 186,107" fill="#8791b3" />
      <rect x="200" y="70" width="94" height="64" rx="8" fill="#34e0a1" opacity="0.3" stroke="#34e0a1" strokeWidth="1.5" />
      <text x="247" y="98" textAnchor="middle" fontSize="10" fill="#d7dbe9">Hedger's</text>
      <text x="247" y="114" textAnchor="middle" fontSize="10" fill="#d7dbe9">certainty</text>
      <text x="200" y="176" textAnchor="middle" fontSize="10" fill="#8791b3">
        A hedge trades the chance of a windfall for certainty
      </text>
      <text x="200" y="200" textAnchor="middle" fontSize="10" fill="#34e0a1">
        Risk is shifted to whoever will bear it
      </text>
    </>
  )
}

/** One commodity contract, three points of view. */
export function CommodityFuturesRoles() {
  const roles = [
    { l: 'Producer', d: 'locks in a selling price', c: '#38bdf8' },
    { l: 'Buyer', d: 'locks in a buying price', c: '#34e0a1' },
    { l: 'Speculator', d: 'bets on the direction', c: '#f59e0b' },
  ]
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Three roles, one contract
      </text>
      <circle cx="200" cy="112" r="30" fill="#33415c" opacity="0.8" />
      <text x="200" y="117" textAnchor="middle" fontSize="9" fill="#d7dbe9">contract</text>
      {roles.map((r, i) => {
        const a = i * 120 - 90
        const cx = 200 + 90 * Math.cos((a * Math.PI) / 180)
        const cy = 112 + 62 * Math.sin((a * Math.PI) / 180)
        return (
          <motion.g key={r.l} initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.15 }} style={{ transformOrigin: `${cx}px ${cy}px` }}>
            <rect x={cx - 48} y={cy - 20} width="96" height="40" rx="8" fill={r.c} opacity="0.85" />
            <text x={cx} y={cy - 3} textAnchor="middle" fontSize="10" fill="#0b1524" fontWeight="700">{r.l}</text>
            <text x={cx} y={cy + 12} textAnchor="middle" fontSize="8" fill="#0b1524">{r.d}</text>
          </motion.g>
        )
      })}
      <text x="200" y="204" textAnchor="middle" fontSize="10" fill="#8791b3">
        The same contract serves very different motives
      </text>
    </>
  )
}

/** The whole index in one payoff line. */
export function IndexFutures() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        One line for the whole market
      </text>
      <line x1="40" y1="110" x2="360" y2="110" stroke="#8791b3" strokeWidth="1" strokeDasharray="3 3" />
      <motion.polyline points="50,150 130,134 210,110 290,84 356,66" fill="none" stroke="#34e0a1" strokeWidth="3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
      <motion.polyline points="50,150 130,166 210,110 290,136 356,94" fill="none" stroke="#f87171" strokeWidth="3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.2 }} />
      <circle cx="210" cy="110" r="4" fill="#d7dbe9" />
      <text x="214" y="100" fontSize="9" fill="#d7dbe9">strike / index</text>
      <text x="200" y="196" textAnchor="middle" fontSize="10" fill="#8791b3">
        Traders use it to hedge or to bet on the market as a whole
      </text>
    </>
  )
}

/* ------------------------------------------------------------------ Tax */

/** Direct tax hits your income; indirect tax hides in prices. */
export function DirectVsIndirect() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Two ways tax reaches you
      </text>
      <rect x="40" y="50" width="150" height="118" rx="10" fill="#38bdf8" opacity="0.14" stroke="#38bdf8" strokeWidth="1.5" />
      <text x="115" y="76" textAnchor="middle" fontSize="11" fill="#38bdf8" fontWeight="700">Direct</text>
      <text x="115" y="102" textAnchor="middle" fontSize="9.5" fill="#d7dbe9">Income tax</text>
      <text x="115" y="122" textAnchor="middle" fontSize="9.5" fill="#d7dbe9">paid from your income</text>
      <text x="115" y="148" textAnchor="middle" fontSize="9" fill="#8791b3">you feel it leave</text>
      <rect x="210" y="50" width="150" height="118" rx="10" fill="#f59e0b" opacity="0.14" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="285" y="76" textAnchor="middle" fontSize="11" fill="#f59e0b" fontWeight="700">Indirect</text>
      <text x="285" y="102" textAnchor="middle" fontSize="9.5" fill="#d7dbe9">GST on goods</text>
      <text x="285" y="122" textAnchor="middle" fontSize="9.5" fill="#d7dbe9">built into the price</text>
      <text x="285" y="148" textAnchor="middle" fontSize="9" fill="#8791b3">you barely notice</text>
      <text x="200" y="200" textAnchor="middle" fontSize="10" fill="#8791b3">
        Every rupee you spend already carries its share
      </text>
    </>
  )
}

/** Not every rupee you receive is taxable income. */
export function TaxableBase() {
  const parts = [
    { l: 'Exempt', v: 60, c: '#34e0a1' },
    { l: 'Deductions', v: 46, c: '#38bdf8' },
    { l: 'Taxable', v: 160, c: '#f87171' },
  ]
  let x = 44
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Gross is not the taxable amount
      </text>
      {parts.map((p, i) => {
        const bx = x
        x += (p.v / 266) * 312
        const w = (p.v / 266) * 312
        return (
          <motion.g key={p.l} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.15 }}>
            <motion.rect x={bx} y="58" height="48" rx="6" fill={p.c} opacity="0.85" initial={{ width: 0 }} animate={{ width: w }} transition={{ delay: i * 0.15, ...ease }} />
            <text x={bx + w / 2} y="88" textAnchor="middle" fontSize="10" fill="#0b1524" fontWeight="700">{p.l}</text>
          </motion.g>
        )
      })}
      <text x="200" y="136" textAnchor="middle" fontSize="11" fill="#f87171" fontWeight="700">
        Tax applies only to the red band
      </text>
      <text x="200" y="164" textAnchor="middle" fontSize="10" fill="#8791b3">
        Exemptions and deductions carve the base down first
      </text>
      <text x="200" y="192" textAnchor="middle" fontSize="10" fill="#d7dbe9">
        Same income, different base, different tax
      </text>
    </>
  )
}

/** Deductions lower the bill; they do not erase it. */
export function DeductionEffect() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Deductions shrink the bill - not to zero
      </text>
      <motion.rect x="70" width="90" rx="8" fill="#38bdf8" opacity="0.8" initial={{ height: 0, attrY: 168 }} animate={{ height: 120, attrY: 48 }} transition={ease} />
      <text x="115" y="110" textAnchor="middle" fontSize="9.5" fill="#0b1524">Tax</text>
      <text x="115" y="126" textAnchor="middle" fontSize="9.5" fill="#0b1524">before</text>
      <motion.rect x="240" width="90" rx="8" fill="#34e0a1" opacity="0.85" initial={{ height: 0, attrY: 168 }} animate={{ height: 82, attrY: 86 }} transition={{ delay: 0.25, ...ease }} />
      <text x="285" y="126" textAnchor="middle" fontSize="9.5" fill="#0b1524">Tax</text>
      <text x="285" y="142" textAnchor="middle" fontSize="9.5" fill="#0b1524">after</text>
      <line x1="40" y1="168" x2="360" y2="168" stroke="#8791b3" strokeWidth="1" />
      <text x="200" y="196" textAnchor="middle" fontSize="10" fill="#8791b3">
        A deduction saves tax at your slab - never the whole amount
      </text>
    </>
  )
}

/** The holding period decides how a gain is taxed. */
export function CapitalGainsHolding() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        How long you held it decides the tax
      </text>
      <line x1="50" y1="112" x2="356" y2="112" stroke="#8791b3" strokeWidth="2" />
      <circle cx="50" cy="112" r="6" fill="#38bdf8" />
      <text x="50" y="140" textAnchor="middle" fontSize="9" fill="#8791b3">buy</text>
      <motion.rect x="50" y="96" width="130" height="32" rx="6" fill="#f87171" opacity="0.22" initial={{ width: 0 }} animate={{ width: 130 }} transition={ease} />
      <text x="115" y="90" textAnchor="middle" fontSize="9" fill="#f87171">short-term</text>
      <motion.rect x="180" y="96" width="176" height="32" rx="6" fill="#34e0a1" opacity="0.22" initial={{ width: 0 }} animate={{ width: 176 }} transition={{ delay: 0.3, ...ease }} />
      <text x="268" y="90" textAnchor="middle" fontSize="9" fill="#34e0a1">long-term</text>
      <circle cx="180" cy="112" r="6" fill="#f59e0b" />
      <text x="180" y="140" textAnchor="middle" fontSize="9" fill="#f59e0b">threshold</text>
      <text x="200" y="188" textAnchor="middle" fontSize="10" fill="#8791b3">
        Cross the threshold and the rate changes
      </text>
    </>
  )
}

/** Short-term and long-term gains sit in different brackets. */
export function StcgVsLtcg() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Same gain, two tax rates
      </text>
      <motion.rect x="90" width="80" rx="8" fill="#f87171" opacity="0.85" initial={{ height: 0, attrY: 168 }} animate={{ height: 118, attrY: 50 }} transition={ease} />
      <text x="130" y="100" textAnchor="middle" fontSize="10" fill="#2a0f0f">Short-term</text>
      <text x="130" y="118" textAnchor="middle" fontSize="11" fill="#2a0f0f" fontWeight="700">higher</text>
      <motion.rect x="230" width="80" rx="8" fill="#34e0a1" opacity="0.85" initial={{ height: 0, attrY: 168 }} animate={{ height: 66, attrY: 102 }} transition={{ delay: 0.25, ...ease }} />
      <text x="270" y="132" textAnchor="middle" fontSize="10" fill="#0b1524">Long-term</text>
      <text x="270" y="150" textAnchor="middle" fontSize="11" fill="#0b1524" fontWeight="700">lower</text>
      <line x1="40" y1="168" x2="360" y2="168" stroke="#8791b3" strokeWidth="1" />
      <text x="200" y="196" textAnchor="middle" fontSize="10" fill="#8791b3">
        The holding period, not the asset, does the choosing
      </text>
    </>
  )
}

/** Business faces taxes a salary never does. */
export function BusinessTaxes() {
  const buckets = [
    { l: 'Income tax', c: '#38bdf8' },
    { l: 'GST', c: '#f59e0b' },
    { l: 'Payroll / TDS', c: '#a855f7' },
  ]
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        A business has more than one bill
      </text>
      {buckets.map((b, i) => (
        <motion.g key={b.l} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}>
          <rect x="70" y={48 + i * 44} width="220" height="34" rx="8" fill={b.c} opacity="0.8" />
          <text x="180" y={70 + i * 44} textAnchor="middle" fontSize="11" fill="#0b1524" fontWeight="700">{b.l}</text>
          <text x="316" y={70 + i * 44} fontSize="11" fill="#8791b3">…</text>
        </motion.g>
      ))}
      <text x="200" y="196" textAnchor="middle" fontSize="10" fill="#8791b3">
        Separate filings, separate deadlines, one business
      </text>
    </>
  )
}

/* ------------------------------------------------------------------ Retirement / long-term goals */

/** Inflation raises the target while you are still saving. */
export function InflationTarget() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        The target climbs as you save
      </text>
      <line x1="40" y1="176" x2="360" y2="176" stroke="#8791b3" strokeWidth="1" />
      <motion.polyline points="52,150 140,138 228,118 356,84" fill="none" stroke="#f87171" strokeWidth="2.5" strokeDasharray="6 4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
      <motion.polyline points="52,172 140,148 228,122 356,96" fill="none" stroke="#38bdf8" strokeWidth="2.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.2 }} />
      <text x="330" y="78" textAnchor="end" fontSize="9" fill="#f87171">target in ₹</text>
      <text x="330" y="112" textAnchor="end" fontSize="9" fill="#38bdf8">what you save</text>
      <text x="200" y="204" textAnchor="middle" fontSize="10" fill="#8791b3">
        Save toward a moving number, or you arrive short
      </text>
    </>
  )
}

/** EPF builds the corpus one month at a time. */
export function EpfMonthly() {
  const n = 9
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        One rung added every month
      </text>
      <line x1="40" y1="176" x2="360" y2="176" stroke="#8791b3" strokeWidth="1" />
      {Array.from({ length: n }).map((_, i) => (
        <motion.rect key={i} x={48 + i * 34} width={24} rx="3" fill="#38bdf8" opacity="0.8" initial={{ height: 0, attrY: 176 }} animate={{ height: 16 + i * 8, attrY: 176 - (16 + i * 8) }} transition={{ delay: i * 0.07, ...ease }} />
      ))}
      <circle cx="60" cy="40" r="4" fill="#34e0a1" />
      <text x="70" y="44" fontSize="9" fill="#d7dbe9">employee + employer share</text>
      <text x="200" y="204" textAnchor="middle" fontSize="10" fill="#8791b3">
        Automated, long-dated, and compounding quietly
      </text>
    </>
  )
}

/** An annuity converts a corpus into a monthly income for life. */
export function AnnuityIncome() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Corpus in, pension out
      </text>
      <motion.rect x="50" y="70" width="90" height="70" rx="10" fill="#38bdf8" opacity="0.85" initial={{ opacity: 0 }} animate={{ opacity: 0.85 }} />
      <text x="95" y="102" textAnchor="middle" fontSize="10" fill="#0b1524">Your</text>
      <text x="95" y="118" textAnchor="middle" fontSize="10" fill="#0b1524">corpus</text>
      <polygon points="146,105 176,96 176,114" fill="#8791b3" />
      {[0, 1, 2, 3].map((i) => (
        <motion.g key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.12 }}>
          <rect x={188 + i * 42} y="88" width="30" height="34" rx="5" fill="#34e0a1" opacity="0.85" />
          <text x={203 + i * 42} y="110" textAnchor="middle" fontSize="8" fill="#0b1524">₹</text>
        </motion.g>
      ))}
      <text x="200" y="156" textAnchor="middle" fontSize="11" fill="#34e0a1" fontWeight="700">
        A monthly income for life
      </text>
      <text x="200" y="184" textAnchor="middle" fontSize="10" fill="#8791b3">
        In exchange, the corpus is no longer yours to spend
      </text>
    </>
  )
}

/** Education's cost comes now; the payoff arrives years later. */
export function EducationPayoff() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Pay early, earn later
      </text>
      <line x1="40" y1="152" x2="360" y2="152" stroke="#8791b3" strokeWidth="1" />
      <motion.polyline points="50,96 110,96 150,96 210,96 356,44" fill="none" stroke="#34e0a1" strokeWidth="2.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
      <motion.polyline points="50,150 110,150 150,120 210,110 356,100" fill="none" stroke="#f87171" strokeWidth="2.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.2 }} />
      <circle cx="200" cy="120" r="4" fill="#f59e0b" />
      <text x="200" y="112" textAnchor="middle" fontSize="9" fill="#f59e0b">break-even</text>
      <text x="260" y="52" textAnchor="middle" fontSize="9" fill="#34e0a1">career earnings</text>
      <text x="260" y="112" textAnchor="middle" fontSize="9" fill="#f87171">fees + forgone income</text>
      <text x="200" y="200" textAnchor="middle" fontSize="10" fill="#8791b3">
        The payoff is real - just not immediate
      </text>
    </>
  )
}

/** Runway is the rungs of cash left before the business runs dry. */
export function RunwayCash() {
  const cash = [120, 104, 88, 72, 56, 40, 24, 8]
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        How many months of cash are left?
      </text>
      <line x1="40" y1="176" x2="360" y2="176" stroke="#8791b3" strokeWidth="1" />
      {cash.map((c, i) => (
        <motion.rect key={i} x={48 + i * 40} width={26} rx="3" fill={c > 40 ? '#34e0a1' : '#f87171'} opacity="0.85" initial={{ height: 0, attrY: 176 }} animate={{ height: c, attrY: 176 - c }} transition={{ delay: i * 0.08, ...ease }} />
      ))}
      <motion.line x1="228" y1="40" x2="228" y2="176" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} />
      <text x="232" y="50" fontSize="9" fill="#f59e0b">runway ends</text>
      <text x="200" y="204" textAnchor="middle" fontSize="10" fill="#8791b3">
        Track monthly burn against cash in hand
      </text>
    </>
  )
}

/* ------------------------------------------------------------------ Options */

/** In-the-money, at-the-money and out-of-the-money markers. */
export function Moneyness() {
  const marks = [
    { l: 'ITM', x: 96, c: '#34e0a1' },
    { l: 'ATM', x: 200, c: '#f59e0b' },
    { l: 'OTM', x: 304, c: '#94a3b8' },
  ]
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Where the price sits versus the strike
      </text>
      <line x1="40" y1="120" x2="360" y2="120" stroke="#38bdf8" strokeWidth="2" />
      <text x="352" y="112" textAnchor="end" fontSize="9" fill="#38bdf8">current price</text>
      {marks.map((m, i) => (
        <motion.g key={m.l} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}>
          <line x1={m.x} y1="70" x2={m.x} y2="120" stroke={m.c} strokeWidth="2" strokeDasharray="4 3" />
          <circle cx={m.x} cy="70" r="9" fill={m.c} opacity="0.85" />
          <text x={m.x} y="74" textAnchor="middle" fontSize="8" fill="#0b1524" fontWeight="700">{m.l}</text>
          <text x={m.x} y="146" textAnchor="middle" fontSize="8" fill="#8791b3">strike</text>
        </motion.g>
      ))}
      <text x="200" y="180" textAnchor="middle" fontSize="10" fill="#8791b3">
        A higher strike is not better - it changes the odds
      </text>
    </>
  )
}

/** Premium = intrinsic value + time value. */
export function PremiumSplit() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        What you actually pay for
      </text>
      <motion.rect x="80" width="120" rx="8" fill="#34e0a1" opacity="0.85" initial={{ height: 0, attrY: 168 }} animate={{ height: 60, attrY: 108 }} transition={ease} />
      <text x="140" y="146" textAnchor="middle" fontSize="10" fill="#0b1524">Intrinsic</text>
      <motion.rect x="80" width="120" rx="8" fill="#38bdf8" opacity="0.85" initial={{ height: 0, attrY: 108 }} animate={{ height: 78, attrY: 30 }} transition={{ delay: 0.2, ...ease }} />
      <text x="140" y="76" textAnchor="middle" fontSize="10" fill="#0b1524">Time value</text>
      <line x1="40" y1="168" x2="360" y2="168" stroke="#8791b3" strokeWidth="1" />
      <text x="240" y="110" fontSize="10" fill="#34e0a1">intrinsic: what it is worth now</text>
      <text x="240" y="140" fontSize="10" fill="#38bdf8">time value: hope, decaying</text>
      <text x="200" y="196" textAnchor="middle" fontSize="10" fill="#8791b3">
        Time value is the part that disappears
      </text>
    </>
  )
}

/** Time decay eats an option's value as expiry approaches. */
export function TimeDecay() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        The clock is always running
      </text>
      <line x1="40" y1="168" x2="360" y2="168" stroke="#8791b3" strokeWidth="1" />
      <motion.path d="M50 54 C150 70 250 120 356 160" fill="none" stroke="#f59e0b" strokeWidth="2.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2 }} />
      <text x="70" y="48" fontSize="9" fill="#f59e0b">option value</text>
      {[0, 1, 2, 3].map((i) => (
        <text key={i} x={80 + i * 90} y="186" textAnchor="middle" fontSize="8" fill="#8791b3">
          {i === 3 ? 'expiry' : `t-${3 - i}`}
        </text>
      ))}
      <text x="200" y="210" textAnchor="middle" fontSize="10" fill="#8791b3">
        Decay accelerates in the final stretch
      </text>
    </>
  )
}

/** Volatility moves the option price, not the strike. */
export function VolatilityEffect() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        More volatility, richer option
      </text>
      <line x1="40" y1="168" x2="360" y2="168" stroke="#8791b3" strokeWidth="1" />
      <line x1="40" y1="168" x2="40" y2="40" stroke="#8791b3" strokeWidth="1" />
      {[
        { l: 'low vol', h: 40, c: '#38bdf8' },
        { l: 'mid vol', h: 74, c: '#f59e0b' },
        { l: 'high vol', h: 112, c: '#f87171' },
      ].map((b, i) => (
        <motion.g key={b.l} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.15 }}>
          <motion.rect x={100 + i * 90} width={54} rx="6" fill={b.c} opacity="0.85" initial={{ height: 0, attrY: 168 }} animate={{ height: b.h, attrY: 168 - b.h }} transition={{ delay: i * 0.15, ...ease }} />
          <text x={127 + i * 90} y="186" textAnchor="middle" fontSize="9" fill="#8791b3">{b.l}</text>
        </motion.g>
      ))}
      <text x="200" y="34" textAnchor="middle" fontSize="10" fill="#d7dbe9">same strike, different premium</text>
      <text x="200" y="208" textAnchor="middle" fontSize="10" fill="#8791b3">
        The strike is fixed; the price you pay is not
      </text>
    </>
  )
}

/** A put is protection: its payoff rises as the market falls. */
export function PutProtection() {
  const fwd = (i: number) => `${48 + i * 52},${120 - i * 9}`
  const prot = (i: number) => `${48 + i * 52},${120 + i * 9}`
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        A put is insurance for a portfolio
      </text>
      <line x1="40" y1="120" x2="360" y2="120" stroke="#8791b3" strokeWidth="1" strokeDasharray="3 3" />
      <motion.polyline points={Array.from({ length: 7 }).map((_, i) => fwd(i)).join(' ')} fill="none" stroke="#f87171" strokeWidth="2.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
      <motion.polyline points={Array.from({ length: 7 }).map((_, i) => prot(i)).join(' ')} fill="none" stroke="#34e0a1" strokeWidth="2.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.2 }} />
      <text x="70" y="112" fontSize="9" fill="#f87171">market falls…</text>
      <text x="70" y="150" fontSize="9" fill="#34e0a1">…the put rises</text>
      <text x="200" y="200" textAnchor="middle" fontSize="10" fill="#8791b3">
        The seller of the put takes the other side of the risk
      </text>
    </>
  )
}

/* ------------------------------------------------------------------ Business / career */

/** A clean headline can still sit on weak accounting. */
export function AccountingQuality() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        A clean headline is not a clean report
      </text>
      <rect x="40" y="48" width="150" height="120" rx="10" fill="#34e0a1" opacity="0.14" stroke="#34e0a1" strokeWidth="1.5" />
      <text x="115" y="76" textAnchor="middle" fontSize="10" fill="#34e0a1" fontWeight="700">Headline</text>
      {[0, 1, 2].map((i) => (
        <rect key={i} x="60" y={94 + i * 22} width={i === 2 ? 70 : 110} height="8" rx="3" fill="#d7dbe9" opacity="0.7" />
      ))}
      <text x="115" y="160" textAnchor="middle" fontSize="9" fill="#34e0a1">looks great</text>
      <rect x="210" y="48" width="150" height="120" rx="10" fill="#f59e0b" opacity="0.14" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="285" y="76" textAnchor="middle" fontSize="10" fill="#f59e0b" fontWeight="700">The notes</text>
      {[0, 1, 2].map((i) => (
        <rect key={i} x="230" y={94 + i * 22} width={i === 1 ? 60 : 110} height="8" rx="3" fill="#d7dbe9" opacity="0.7" />
      ))}
      <text x="285" y="160" textAnchor="middle" fontSize="9" fill="#f59e0b">check the fine print</text>
      <text x="200" y="200" textAnchor="middle" fontSize="10" fill="#8791b3">
        The numbers are only as good as the accounting behind them
      </text>
    </>
  )
}

/** In an LLP, the partners' personal assets sit behind a wall. */
export function LlpLiability() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        A wall between the firm and you
      </text>
      <rect x="60" y="52" width="280" height="100" rx="10" fill="#38bdf8" opacity="0.12" stroke="#38bdf8" strokeWidth="1.5" />
      <text x="200" y="74" textAnchor="middle" fontSize="10" fill="#38bdf8">The LLP's own assets</text>
      <motion.line x1="200" y1="52" x2="200" y2="152" stroke="#34e0a1" strokeWidth="4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.3 }} />
      {['Partner A', 'Partner B'].map((p, i) => (
        <g key={p}>
          <circle cx={120 + i * 160} cy="112" r="14" fill="#34e0a1" opacity="0.85" />
          <text x={120 + i * 160} y="117" textAnchor="middle" fontSize="9" fill="#0b1524">{i === 0 ? 'A' : 'B'}</text>
          <text x={120 + i * 160} y="140" textAnchor="middle" fontSize="9" fill="#8791b3">personal assets</text>
        </g>
      ))}
      <text x="200" y="192" textAnchor="middle" fontSize="10" fill="#8791b3">
        Cleaner liability than a plain partnership
      </text>
    </>
  )
}

/** Records are the written memory of every rupee. */
export function RevenueRecords() {
  const cols = ['Date', 'Party', 'Amount', 'Mode']
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Every rupee, written down
      </text>
      <rect x="48" y="40" width="304" height="140" rx="10" fill="#1b2436" stroke="#38bdf8" strokeWidth="1.5" />
      <rect x="48" y="40" width="304" height="30" rx="10" fill="#38bdf8" opacity="0.3" />
      {cols.map((c, i) => (
        <text key={c} x={72 + i * 74} y="60" fontSize="9.5" fill="#d7dbe9" fontWeight="700">{c}</text>
      ))}
      {[0, 1, 2, 3].map((r) => (
        <motion.g key={r} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 + r * 0.1 }}>
          {[0, 1, 2, 3].map((c) => (
            <rect key={c} x={66 + c * 74} y={82 + r * 22} width={c === 1 ? 56 : 48} height="8" rx="3" fill="#8791b3" />
          ))}
        </motion.g>
      ))}
      <text x="200" y="200" textAnchor="middle" fontSize="10" fill="#8791b3">
        Records turn a business into something auditable
      </text>
    </>
  )
}

/** A scholarship removes part of the cost of the very same rung. */
export function ScholarshipOffset() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        A scholarship lowers the rung
      </text>
      <motion.rect x="70" y="56" height="44" rx="8" fill="#f87171" opacity="0.85" initial={{ width: 0 }} animate={{ width: 260 }} transition={ease} />
      <text x="200" y="84" textAnchor="middle" fontSize="11" fill="#2a0f0f" fontWeight="700">Full education cost</text>
      <motion.rect x="70" y="120" height="44" rx="8" fill="#34e0a1" opacity="0.85" initial={{ width: 0 }} animate={{ width: 150 }} transition={{ delay: 0.25, ...ease }} />
      <text x="145" y="148" textAnchor="middle" fontSize="10" fill="#0b1524" fontWeight="700">After scholarship</text>
      <text x="240" y="148" fontSize="10" fill="#8791b3">you fund the rest</text>
      <text x="200" y="196" textAnchor="middle" fontSize="10" fill="#8791b3">
        The goal is unchanged; the amount you must save is not
      </text>
    </>
  )
}

/** Growth is a climb that needs cash for every rung. */
export function ProfitGrowthCash() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Growth runs on cash, not just profit
      </text>
      <line x1="40" y1="176" x2="360" y2="176" stroke="#8791b3" strokeWidth="1" />
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.12 }}>
          <motion.rect x={54 + i * 60} width={40} rx="5" fill="#34e0a1" opacity="0.85" initial={{ height: 0, attrY: 176 }} animate={{ height: 30 + i * 22, attrY: 176 - (30 + i * 22) }} transition={{ delay: i * 0.12, ...ease }} />
          <motion.rect x={54 + i * 60} width={40} rx="5" fill="#38bdf8" opacity="0.35" initial={{ height: 0, attrY: 176 - (30 + i * 22) }} animate={{ height: 18, attrY: 176 - (30 + i * 22) - 18 }} transition={{ delay: 0.15 + i * 0.12, ...ease }} />
        </motion.g>
      ))}
      <circle cx="60" cy="36" r="4" fill="#34e0a1" />
      <text x="70" y="40" fontSize="9" fill="#d7dbe9">profit</text>
      <circle cx="150" cy="36" r="4" fill="#38bdf8" />
      <text x="160" y="40" fontSize="9" fill="#d7dbe9">cash the next rung needs</text>
      <text x="200" y="204" textAnchor="middle" fontSize="10" fill="#8791b3">
        Each step up consumes working capital
      </text>
    </>
  )
}

/** Exporters and importers sit on opposite sides of a rate move. */
export function ExporterImporter() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        The same move, opposite effects
      </text>
      <motion.rect x="80" width="96" rx="8" fill="#38bdf8" opacity="0.85" initial={{ height: 0, attrY: 168 }} animate={{ height: 60, attrY: 108 }} transition={ease} />
      <text x="128" y="142" textAnchor="middle" fontSize="10" fill="#0b1524">₹ weakens</text>
      <rect x="40" y="70" width="120" height="90" rx="8" fill="none" />
      <rect x="224" y="70" width="120" height="90" rx="8" fill="none" />
      <text x="128" y="58" textAnchor="middle" fontSize="11" fill="#34e0a1" fontWeight="700">Exporter wins</text>
      <text x="284" y="58" textAnchor="middle" fontSize="11" fill="#f87171" fontWeight="700">Importer hurts</text>
      <text x="128" y="90" textAnchor="middle" fontSize="9" fill="#8791b3">earns foreign currency,</text>
      <text x="128" y="104" textAnchor="middle" fontSize="9" fill="#8791b3">gets more rupees</text>
      <text x="284" y="90" textAnchor="middle" fontSize="9" fill="#8791b3">pays foreign suppliers</text>
      <text x="284" y="104" textAnchor="middle" fontSize="9" fill="#8791b3">at a higher cost</text>
      <text x="200" y="196" textAnchor="middle" fontSize="10" fill="#8791b3">
        One exchange rate, two very different budgets
      </text>
    </>
  )
}

/** A forward locks today's rate for a payment months away. */
export function ForwardLock() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Lock the rate now, pay later
      </text>
      <line x1="50" y1="112" x2="356" y2="112" stroke="#8791b3" strokeWidth="2" />
      <circle cx="70" cy="112" r="6" fill="#38bdf8" />
      <text x="70" y="140" textAnchor="middle" fontSize="9" fill="#8791b3">today</text>
      <circle cx="330" cy="112" r="6" fill="#38bdf8" />
      <text x="330" y="140" textAnchor="middle" fontSize="9" fill="#8791b3">payment date</text>
      <motion.line x1="70" y1="112" x2="330" y2="112" stroke="#34e0a1" strokeWidth="3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
      <text x="200" y="100" textAnchor="middle" fontSize="11" fill="#34e0a1" fontWeight="700">
        rate fixed today
      </text>
      <text x="200" y="176" textAnchor="middle" fontSize="10" fill="#8791b3">
        The forward removes the guesswork - at a small cost
      </text>
      <text x="200" y="200" textAnchor="middle" fontSize="10" fill="#d7dbe9">
        Certainty is worth paying a little for
      </text>
    </>
  )
}

/** A sole proprietor's business and personal money merge - and so does the risk. */
export function SolePropExposure() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        One owner, fully exposed
      </text>
      <rect x="40" y="50" width="320" height="108" rx="12" fill="#f87171" opacity="0.14" stroke="#f87171" strokeWidth="1.5" />
      <text x="200" y="72" textAnchor="middle" fontSize="10" fill="#f87171">no wall between them</text>
      <rect x="66" y="86" width="120" height="56" rx="8" fill="#38bdf8" opacity="0.8" />
      <text x="126" y="112" textAnchor="middle" fontSize="10" fill="#0b1524">Business</text>
      <text x="126" y="128" textAnchor="middle" fontSize="10" fill="#0b1524">assets</text>
      <rect x="214" y="86" width="120" height="56" rx="8" fill="#34e0a1" opacity="0.8" />
      <text x="274" y="112" textAnchor="middle" fontSize="10" fill="#0b1524">Personal</text>
      <text x="274" y="128" textAnchor="middle" fontSize="10" fill="#0b1524">assets</text>
      <text x="200" y="192" textAnchor="middle" fontSize="10" fill="#8791b3">
        A business debt can reach the personal side
      </text>
    </>
  )
}

/** Equity financing divides the cap table among new shareholders. */
export function EquityFinancing() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        New money, new slices
      </text>
      {[
        { l: 'Founder', v: 110, c: '#34e0a1' },
        { l: 'Angel', v: 60, c: '#38bdf8' },
        { l: 'VC', v: 90, c: '#f59e0b' },
        { l: 'ESOP', v: 40, c: '#a855f7' },
      ].map((s, i) => (
        <motion.g key={s.l} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.12 }}>
          <motion.rect x="50" y={48 + i * 32} height="24" rx="5" fill={s.c} opacity="0.85" initial={{ width: 0 }} animate={{ width: s.v }} transition={{ delay: i * 0.12, ...ease }} />
          <text x={58 + s.v} y={65 + i * 32} fontSize="10" fill="#d7dbe9">{s.l}</text>
        </motion.g>
      ))}
      <text x="200" y="186" textAnchor="middle" fontSize="10" fill="#8791b3">
        The founder's share shrinks as the table grows
      </text>
      <text x="200" y="206" textAnchor="middle" fontSize="10" fill="#d7dbe9">
        Dilution buys fuel for the climb
      </text>
    </>
  )
}

/** A moat is what lets a company keep its rewards. */
export function MoatDefence() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        The moat protects the rewards
      </text>
      <motion.path d="M50 168 L50 96 Q200 60 350 96 L350 168 Z" fill="#38bdf8" opacity="0.2" initial={{ opacity: 0 }} animate={{ opacity: 0.2 }} />
      <text x="200" y="160" textAnchor="middle" fontSize="9" fill="#38bdf8">the moat</text>
      <rect x="140" y="88" width="120" height="52" rx="6" fill="#34e0a1" opacity="0.85" />
      <text x="200" y="118" textAnchor="middle" fontSize="10" fill="#0b1524" fontWeight="700">Profits</text>
      <text x="100" y="60" fontSize="8.5" fill="#d7dbe9">brand</text>
      <text x="160" y="52" fontSize="8.5" fill="#d7dbe9">network</text>
      <text x="230" y="52" fontSize="8.5" fill="#d7dbe9">cost edge</text>
      <text x="300" y="60" fontSize="8.5" fill="#d7dbe9">switching</text>
      <text x="200" y="200" textAnchor="middle" fontSize="10" fill="#8791b3">
        A moat is why competitors cannot copy the rewards away
      </text>
    </>
  )
}

/** Profit is an opinion; cash flow is the reality check. */
export function CashflowReality() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Follow the cash, not just the profit
      </text>
      <rect x="50" y="60" width="130" height="40" rx="6" fill="#38bdf8" opacity="0.75" />
      <text x="115" y="85" textAnchor="middle" fontSize="10" fill="#0b1524">Net profit</text>
      {[
        { l: '+ collections', v: 90, c: '#34e0a1' },
        { l: '− capex', v: 54, c: '#f87171' },
        { l: '± working capital', v: 66, c: '#f59e0b' },
      ].map((r, i) => (
        <motion.g key={r.l} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 + i * 0.12 }}>
          <rect x="50" y={112 + i * 24} height="16" rx="4" fill={r.c} opacity="0.8" />
          <text x="240" y={124 + i * 24} fontSize="9" fill="#d7dbe9">{r.l}</text>
        </motion.g>
      ))}
      <text x="200" y="204" textAnchor="middle" fontSize="10" fill="#8791b3">
        Adjust profit for non-cash items to reach cash flow
      </text>
    </>
  )
}

/** Two partners split one pie; the agreement decides the slices. */
export function PartnershipSplit() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        One pie, two owners
      </text>
      <motion.path d="M140 112 L140 42 A70 70 0 0 1 140 182 Z" fill="#34e0a1" opacity="0.85" initial={{ opacity: 0 }} animate={{ opacity: 0.85 }} />
      <motion.path d="M140 112 L140 182 A70 70 0 0 1 140 42 Z" fill="#38bdf8" opacity="0.85" initial={{ opacity: 0 }} animate={{ opacity: 0.85 }} transition={{ delay: 0.2 }} />
      <text x="105" y="118" textAnchor="middle" fontSize="11" fill="#0b1524" fontWeight="700">Partner A</text>
      <text x="175" y="118" textAnchor="middle" fontSize="11" fill="#0b1524" fontWeight="700">Partner B</text>
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        <text x="250" y="96" fontSize="10" fill="#d7dbe9">The deed decides</text>
        <text x="250" y="114" fontSize="10" fill="#d7dbe9">who owns what,</text>
        <text x="250" y="132" fontSize="10" fill="#d7dbe9">and what happens</text>
        <text x="250" y="150" fontSize="10" fill="#d7dbe9">when one leaves.</text>
      </motion.g>
      <text x="200" y="204" textAnchor="middle" fontSize="10" fill="#8791b3">
        Write the agreement before you need it
      </text>
    </>
  )
}

/** A bigger down payment shrinks the loan and the interest. */
export function DownpaymentEffect() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        Pay more now, borrow less forever
      </text>
      <motion.rect x="60" width="90" rx="8" fill="#34e0a1" opacity="0.85" initial={{ height: 0, attrY: 168 }} animate={{ height: 40, attrY: 128 }} transition={ease} />
      <text x="105" y="152" textAnchor="middle" fontSize="9" fill="#0b1524">Down</text>
      <motion.rect x="60" width="90" rx="8" fill="#f87171" opacity="0.8" initial={{ height: 0, attrY: 128 }} animate={{ height: 88, attrY: 40 }} transition={{ delay: 0.2, ...ease }} />
      <text x="105" y="82" textAnchor="middle" fontSize="9" fill="#2a0f0f">Loan</text>
      <motion.rect x="250" width="90" rx="8" fill="#34e0a1" opacity="0.85" initial={{ height: 0, attrY: 168 }} animate={{ height: 66, attrY: 102 }} transition={{ delay: 0.35, ...ease }} />
      <text x="295" y="140" textAnchor="middle" fontSize="9" fill="#0b1524">Bigger down</text>
      <motion.rect x="250" width="90" rx="8" fill="#f87171" opacity="0.8" initial={{ height: 0, attrY: 102 }} animate={{ height: 62, attrY: 40 }} transition={{ delay: 0.5, ...ease }} />
      <text x="295" y="82" textAnchor="middle" fontSize="9" fill="#2a0f0f">Smaller loan</text>
      <line x1="40" y1="168" x2="360" y2="168" stroke="#8791b3" strokeWidth="1" />
      <text x="200" y="200" textAnchor="middle" fontSize="10" fill="#8791b3">
        Less borrowed means less interest over the whole term
      </text>
    </>
  )
}

/** Raises are small annual additions to one long stream. */
export function RaiseCompounding() {
  return (
    <>
      <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#d7dbe9" fontWeight="700">
        A raise compounds across a career
      </text>
      <line x1="40" y1="176" x2="360" y2="176" stroke="#8791b3" strokeWidth="1" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <motion.rect key={i} x={50 + i * 52} width={34} rx="4" fill="#38bdf8" opacity="0.35" initial={{ height: 0, attrY: 176 }} animate={{ height: 40 + i * 20, attrY: 176 - (40 + i * 20) }} transition={{ delay: i * 0.1, ...ease }} />
      ))}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <motion.rect key={`r${i}`} x={50 + i * 52} width={34} rx="4" fill="#34e0a1" opacity="0.9" initial={{ height: 0, attrY: 176 - (40 + i * 20) }} animate={{ height: 12, attrY: 176 - (40 + i * 20) - 12 }} transition={{ delay: 0.15 + i * 0.1, ...ease }} />
      ))}
      <circle cx="56" cy="36" r="4" fill="#38bdf8" />
      <text x="66" y="40" fontSize="9" fill="#d7dbe9">base</text>
      <circle cx="120" cy="36" r="4" fill="#34e0a1" />
      <text x="130" y="40" fontSize="9" fill="#d7dbe9">this year's raise</text>
      <text x="200" y="206" textAnchor="middle" fontSize="10" fill="#8791b3">
        Each raise is small; stacked for decades, it is not
      </text>
    </>
  )
}
