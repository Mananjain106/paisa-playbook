import { motion } from 'framer-motion'

/** Motion-friendly, compact SVG illustrations for Level 4. */

export const TaxBracket: React.FC<{ step: 0 | 1 | 2 }> = ({ step }) => (
  <svg viewBox="0 0 360 180" className="w-full">
    <rect width="360" height="180" rx="16" fill="#0f1529" />
    <g stroke="#94a3b8" opacity="0.4">
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1="60" y1={40 + i * 30} x2="300" y2={40 + i * 30} />
      ))}
    </g>
    <text x="180" y="26" textAnchor="middle" fill="#e6e7ee" fontSize="13">
      Marginal slabs — only the slice pays
    </text>
    <g fill="#38bdf8" opacity={step >= 1 ? 1 : 0.25}>
      <rect x="60" y="70" width="70" height="30" rx="6" />
      <text x="95" y="90" textAnchor="middle" fill="#fff" fontSize="10">
        5%
      </text>
    </g>
    <g fill="#34e0a1" opacity={step >= 2 ? 1 : 0.25}>
      <rect x="130" y="70" width="90" height="30" rx="6" />
      <text x="175" y="90" textAnchor="middle" fill="#0f1529" fontSize="10">
        20%
      </text>
    </g>
    <g fill="#f59e0b" opacity={step >= 2 ? 0.6 : 0.25}>
      <rect x="220" y="70" width="80" height="30" rx="6" />
      <text x="260" y="90" textAnchor="middle" fill="#0f1529" fontSize="10">
        30%
      </text>
    </g>
    <motion.line
      x1="130"
      y1="105"
      x2="130"
      y2="125"
      stroke="#f87171"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: step >= 1 ? 1 : 0 }}
    />
    <text x="130" y="138" textAnchor="middle" fill="#f87171" fontSize="10" opacity={step >= 1 ? 1 : 0}>
      Boundary, not a cliff
    </text>
    <text x="180" y="158" textAnchor="middle" fill="#8791b3" fontSize="9">
      A raise lands partly in a new band — not the whole thing
    </text>
  </svg>
)

export const TdsFlow: React.FC = () => (
  <svg viewBox="0 0 360 180" className="w-full">
    <rect width="360" height="180" rx="16" fill="#0f1529" />
    <text x="180" y="26" textAnchor="middle" fill="#e6e7ee" fontSize="13">
      TDS: tax already paid to the government
    </text>
    <g fill="#38bdf8">
      <rect x="40" y="60" width="70" height="40" rx="10" />
      <text x="75" y="82" textAnchor="middle" fill="#fff" fontSize="10">
        Payer
      </text>
      <text x="75" y="96" textAnchor="middle" fill="#fff" fontSize="9" opacity="0.8">
        deducts tax
      </text>
    </g>
    <motion.path
      d="M110 80 L150 80 L146 76 M150 80 L146 84"
      stroke="#34e0a1"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ repeat: Infinity, duration: 2 }}
    />
    <g fill="#34e0a1">
      <rect x="150" y="60" width="70" height="40" rx="10" />
      <text x="185" y="82" textAnchor="middle" fill="#0f1529" fontSize="10">
        Govt
      </text>
      <text x="185" y="96" textAnchor="middle" fill="#0f1529" fontSize="9" opacity="0.8">
        credits
      </text>
    </g>
    <motion.path
      d="M220 80 L260 80 L256 76 M260 80 L256 84"
      stroke="#f59e0b"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ repeat: Infinity, duration: 2, delay: 0.3 }}
    />
    <g fill="#f59e0b">
      <rect x="260" y="60" width="70" height="40" rx="10" />
      <text x="295" y="82" textAnchor="middle" fill="#0f1529" fontSize="10">
        You
      </text>
      <text x="295" y="96" textAnchor="middle" fill="#0f1529" fontSize="9" opacity="0.8">
        claim credit
      </text>
    </g>
    <text x="180" y="130" textAnchor="middle" fill="#8791b3" fontSize="9">
      Overpaid → refund. Underpaid → pay balance at return time
    </text>
    <text x="180" y="150" textAnchor="middle" fill="#8791b3" fontSize="9">
      Form 26AS/Form 16 summarises what was deducted and deposited
    </text>
  </svg>
)

export const CoverLadder: React.FC<{ step: 0 | 1 | 2 | 3 }> = ({ step }) => (
  <svg viewBox="0 0 360 200" className="w-full">
    <rect width="360" height="200" rx="16" fill="#0f1529" />
    <text x="180" y="26" textAnchor="middle" fill="#e6e7ee" fontSize="13">
      Adequate cover before investing — a simple ladder
    </text>
    <g>
      <rect x="60" y="40" width="240" height="22" rx="11" fill="#1e293b" />
      <motion.rect
        x="60"
        y="40"
        height="22"
        rx="11"
        fill="#ef4444"
        initial={{ width: 0 }}
        animate={{ width: 60 + step * 45 }}
      />
      <text x="70" y="54" fill="#fff" fontSize="9">
        Emergency fund
      </text>
    </g>
    <g opacity={step >= 1 ? 1 : 0.3}>
      <rect x="60" y="70" width="240" height="22" rx="11" fill="#1e293b" />
      <motion.rect x="60" y="70" width={step >= 1 ? 80 : 0} height="22" rx="11" fill="#f59e0b" />
      <text x="70" y="84" fill="#0f1529" fontSize="9">
        Health cover
      </text>
    </g>
    <g opacity={step >= 2 ? 1 : 0.3}>
      <rect x="60" y="100" width="240" height="22" rx="11" fill="#1e293b" />
      <motion.rect x="60" y="100" width={step >= 2 ? 90 : 0} height="22" rx="11" fill="#38bdf8" />
      <text x="70" y="114" fill="#fff" fontSize="9">
        Term insurance
      </text>
    </g>
    <g opacity={step >= 3 ? 1 : 0.3}>
      <rect x="60" y="130" width="240" height="22" rx="11" fill="#1e293b" />
      <motion.rect x="60" y="130" width={step >= 3 ? 70 : 0} height="22" rx="11" fill="#34e0a1" />
      <text x="70" y="144" fill="#0f1529" fontSize="9">
        Investments
      </text>
    </g>
    <text x="180" y="170" textAnchor="middle" fill="#8791b3" fontSize="9">
      Insurance protects the ladder; compounding rewards patience later
    </text>
  </svg>
)

export const EmiSplit: React.FC = () => (
  <svg viewBox="0 0 360 180" className="w-full">
    <rect width="360" height="180" rx="16" fill="#0f1529" />
    <text x="180" y="26" textAnchor="middle" fill="#e6e7ee" fontSize="13">
      Early EMIs are almost all interest
    </text>
    <g stroke="#475569">
      <line x1="60" y1="40" x2="300" y2="40" />
      <line x1="60" y1="40" x2="60" y2="140" />
    </g>
    <motion.path
      d="M60 120 L90 115 L120 105 L150 90 L180 70 L210 50 L240 40 L270 40 L300 40"
      stroke="#38bdf8"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1 }}
    />
    <motion.path
      d="M60 40 L90 50 L120 70 L150 90 L180 110 L210 120 L240 130 L270 135 L300 135"
      stroke="#34e0a1"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
    />
    <text x="310" y="42" fill="#38bdf8" fontSize="9">
      Interest
    </text>
    <text x="310" y="138" fill="#34e0a1" fontSize="9">
      Principal
    </text>
    <text x="180" y="158" textAnchor="middle" fill="#8791b3" fontSize="9">
      Prepaying in years 1–3 gives far more bang per rupee than years 8–10
    </text>
  </svg>
)

export const NpsAnnuity: React.FC = () => (
  <svg viewBox="0 0 360 180" className="w-full">
    <rect width="360" height="180" rx="16" fill="#0f1529" />
    <text x="180" y="26" textAnchor="middle" fill="#e6e7ee" fontSize="13">
      NPS: accumulation → annuity (or lump sum) at 60
    </text>
    <g stroke="#475569">
      <line x1="60" y1="40" x2="300" y2="40" />
      <line x1="60" y1="40" x2="60" y2="140" />
    </g>
    <motion.path
      d="M60 120 L80 115 L100 108 L120 98 L140 85 L160 70 L180 55 L200 48 L220 46 L240 46 L260 46 L280 46 L300 46"
      stroke="#38bdf8"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
    />
    <motion.path
      d="M60 46 L80 48 L100 52 L120 58 L140 66 L160 76 L180 88 L200 100 L220 110 L240 118 L260 124 L280 128 L300 130"
      stroke="#34e0a1"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ delay: 0.25 }}
    />
    <text x="200" y="44" fill="#38bdf8" fontSize="9">
      Corpus (growth)
    </text>
    <text x="210" y="132" fill="#34e0a1" fontSize="9">
      Payout phase
    </text>
    <text x="180" y="158" textAnchor="middle" fill="#8791b3" fontSize="9">
      Tax breaks up front, but annuity income is taxable — plan for that
    </text>
  </svg>
)

export const CallPut: React.FC = () => (
  <svg viewBox="0 0 360 180" className="w-full">
    <rect width="360" height="180" rx="16" fill="#0f1529" />
    <text x="180" y="26" textAnchor="middle" fill="#e6e7ee" fontSize="13">
      Calls and puts — rights, not obligations
    </text>
    <g stroke="#475569">
      <line x1="60" y1="90" x2="300" y2="90" />
    </g>
    <motion.path d="M60 90 L160 90 L200 50 L300 50" stroke="#38bdf8" strokeWidth="2" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />
    <motion.path d="M60 90 L160 90 L200 130 L300 130" stroke="#34e0a1" strokeWidth="2" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.15 }} />
    <text x="70" y="82" fill="#8791b3" fontSize="9">
      Spot
    </text>
    <text x="260" y="48" fill="#38bdf8" fontSize="9">
      Long call payoff
    </text>
    <text x="260" y="138" fill="#34e0a1" fontSize="9">
      Long put payoff
    </text>
    <text x="180" y="158" textAnchor="middle" fill="#8791b3" fontSize="9">
      Premium caps loss; for naked shorts, upside/loss asymmetry flips
    </text>
  </svg>
)

export const RentVsBuy: React.FC = () => (
  <svg viewBox="0 0 360 180" className="w-full">
    <rect width="360" height="180" rx="16" fill="#0f1529" />
    <text x="180" y="26" textAnchor="middle" fill="#e6e7ee" fontSize="13">
      Rent or buy: same house, two very different ledgers
    </text>
    <g stroke="#475569">
      <line x1="60" y1="40" x2="300" y2="40" />
      <line x1="60" y1="40" x2="60" y2="140" />
    </g>
    <motion.path
      d="M60 120 L70 118 L80 115 L90 110 L100 105 L110 98 L120 90 L130 81 L140 71 L150 60 L160 48 L170 40 L180 40 L190 40 L200 40 L210 40 L220 40 L230 40 L240 40 L250 40 L260 40 L270 40 L280 40 L290 40 L300 40"
      stroke="#38bdf8"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
    />
    <motion.path
      d="M60 40 L70 42 L80 45 L90 49 L100 54 L110 60 L120 67 L130 75 L140 83 L150 90 L160 96 L170 101 L180 106 L190 110 L200 114 L210 117 L220 120 L230 122 L240 124 L250 125 L260 127 L270 128 L280 129 L290 130 L300 130"
      stroke="#34e0a1"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ delay: 0.2 }}
    />
    <text x="298" y="38" fill="#38bdf8" fontSize="9">
      Buy (own/interest/gains)
    </text>
    <text x="298" y="132" fill="#34e0a1" fontSize="9">
      Rent (paid out)
    </text>
    <text x="180" y="158" textAnchor="middle" fill="#8791b3" fontSize="9">
      Buy also needs a down payment — that capital has an opportunity cost too
    </text>
  </svg>
)

export const LoanAmort: React.FC = () => (
  <svg viewBox="0 0 360 200" className="w-full">
    <rect width="360" height="200" rx="16" fill="#0f1529" />
    <text x="180" y="26" textAnchor="middle" fill="#e6e7ee" fontSize="13">
      A loan shrinks by taste, not by guess
    </text>
    <g stroke="#475569">
      <line x1="60" y1="50" x2="300" y2="50" />
      <line x1="60" y1="50" x2="60" y2="170" />
    </g>
    <g fill="#38bdf8">
      <rect x="60" y="60" width="34" height="4" />
      <rect x="60" y="66" width="32" height="4" />
      <rect x="60" y="72" width="30" height="4" />
      <rect x="60" y="78" width="28" height="4" />
      <rect x="60" y="84" width="25" height="4" />
      <rect x="60" y="90" width="22" height="4" />
      <rect x="60" y="96" width="19" height="4" />
      <rect x="60" y="102" width="16" height="4" />
      <rect x="60" y="108" width="13" height="4" />
      <rect x="60" y="114" width="10" height="4" />
      <rect x="60" y="120" width="7" height="4" />
      <rect x="60" y="126" width="4" height="4" />
      <rect x="60" y="132" width="1" height="4" />
    </g>
    <text x="60" y="48" fill="#8791b3" fontSize="9">
      Year 1
    </text>
    <text x="300" y="48" fill="#8791b3" fontSize="9" textAnchor="end">
      Year 12
    </text>
    <motion.path
      d="M60 150 L90 148 L120 144 L150 138 L180 130 L210 120 L240 110 L270 100 L300 90"
      stroke="#34e0a1"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
    />
    <motion.path
      d="M60 55 L90 58 L120 64 L150 72 L180 84 L210 98 L240 112 L270 126 L300 140"
      stroke="#38bdf8"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ delay: 0.2 }}
    />
    <text x="298" y="56" fill="#38bdf8" fontSize="9">
      Interest
    </text>
    <text x="298" y="142" fill="#34e0a1" fontSize="9">
      Principal
    </text>
    <text x="180" y="186" textAnchor="middle" fill="#8791b3" fontSize="9">
      Each EMI is fixed, but the interest principal balance it pays off changes every year
    </text>
  </svg>
)

export const DerivPayoff: React.FC = () => (
  <svg viewBox="0 0 360 180" className="w-full">
    <rect width="360" height="180" rx="16" fill="#0f1529" />
    <text x="180" y="26" textAnchor="middle" fill="#e6e7ee" fontSize="13">
      At expiry, payoff is a simple function of spot
    </text>
    <g stroke="#475569">
      <line x1="60" y1="90" x2="300" y2="90" />
    </g>
    <motion.path
      d="M60 150 L140 140 L180 90 L220 40 L300 40"
      stroke="#38bdf8"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
    />
    <motion.path
      d="M60 30 L140 40 L180 90 L220 140 L300 150"
      stroke="#34e0a1"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ delay: 0.2 }}
    />
    <text x="70" y="84" fill="#8791b3" fontSize="9">
      Spot at expiry
    </text>
    <text x="270" y="48" fill="#38bdf8" fontSize="9">
      Call payoff
    </text>
    <text x="270" y="150" fill="#34e0a1" fontSize="9">
      Put payoff
    </text>
    <text x="180" y="170" textAnchor="middle" fill="#8791b3" fontSize="9">
      Premium and breakeven turn this into a profit or loss — not just a payoff
    </text>
  </svg>
)

export const CurrencyRisk: React.FC = () => (
  <svg viewBox="0 0 360 200" className="w-full">
    <rect width="360" height="200" rx="16" fill="#0f1529" />
    <text x="180" y="26" textAnchor="middle" fill="#e6e7ee" fontSize="13">
      When the rupee falls, the same foreign asset buys more rupees
    </text>
    <g fill="#38bdf8">
      <rect x="60" y="60" width="40" height="100" rx="6" />
      <rect x="110" y="50" width="40" height="110" rx="6" />
      <rect x="160" y="42" width="40" height="118" rx="6" />
      <rect x="210" y="35" width="40" height="125" rx="6" />
      <rect x="260" y="28" width="40" height="132" rx="6" />
    </g>
    <text x="60" y="210" textAnchor="middle" fill="#8791b3" fontSize="9">
      +10%
    </text>
    <text x="110" y="210" textAnchor="middle" fill="#8791b3" fontSize="9">
      +20%
    </text>
    <text x="160" y="210" textAnchor="middle" fill="#8791b3" fontSize="9">
      +30%
    </text>
    <text x="210" y="210" textAnchor="middle" fill="#8791b3" fontSize="9">
      +40%
    </text>
    <text x="260" y="210" textAnchor="middle" fill="#8791b3" fontSize="9">
      +50%
    </text>
    <motion.path
      d="M40 80 L280 40"
      stroke="#34e0a1"
      strokeWidth="2"
      fill="none"
      strokeDasharray="4 6"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
    />
    <text x="280" y="36" fill="#34e0a1" fontSize="10">
      Worse for locals buying imports — better for rupee holders of foreign assets
    </text>
  </svg>
)

export const GrowthVsValue: React.FC = () => (
  <svg viewBox="0 0 360 180" className="w-full">
    <rect width="360" height="180" rx="16" fill="#0f1529" />
    <text x="180" y="26" textAnchor="middle" fill="#e6e7ee" fontSize="13">
      Growth and value: two ways to miss the same price
    </text>
    <g stroke="#475569">
      <line x1="60" y1="40" x2="300" y2="40" />
      <line x1="60" y1="40" x2="60" y2="140" />
    </g>
    <motion.path
      d="M60 120 L100 110 L140 95 L180 75 L220 50 L260 35 L300 30"
      stroke="#34e0a1"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
    />
    <motion.path
      d="M60 60 L100 75 L140 88 L180 98 L220 105 L260 110 L300 112"
      stroke="#38bdf8"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ delay: 0.2 }}
    />
    <text x="298" y="30" fill="#34e0a1" fontSize="9">
      Growth (rising, often expensive)
    </text>
    <text x="298" y="116" fill="#38bdf8" fontSize="9">
      Value (flat, then re-rated)
    </text>
    <text x="180" y="158" textAnchor="middle" fill="#8791b3" fontSize="9">
      The same business can look like a growth story or a value story at different times
    </text>
  </svg>
)

export const CorpusLadder: React.FC<{ step: 0 | 1 | 2 | 3 }> = ({ step }) => (
  <svg viewBox="0 0 360 180" className="w-full">
    <rect width="360" height="180" rx="16" fill="#0f1529" />
    <text x="180" y="26" textAnchor="middle" fill="#e6e7ee" fontSize="13">
      Retirement is built in layers, not one big deposit
    </text>
    <g>
      <rect x="50" y="40" width="260" height="22" rx="11" fill="#1e293b" />
      <motion.rect
        x="50"
        y="40"
        height="22"
        rx="11"
        fill="#ef4444"
        initial={{ width: 0 }}
        animate={{ width: 50 + step * 50 }}
      />
      <text x="60" y="54" fill="#fff" fontSize="9">
        Emergency fund
      </text>
    </g>
    <g opacity={step >= 1 ? 1 : 0.3}>
      <rect x="50" y="70" width="260" height="22" rx="11" fill="#1e293b" />
      <motion.rect x="50" y="70" width={step >= 1 ? 90 : 0} height="22" rx="11" fill="#f59e0b" />
      <text x="60" y="84" fill="#0f1529" fontSize="9">
        EPF/PPF accrual
      </text>
    </g>
    <g opacity={step >= 2 ? 1 : 0.3}>
      <rect x="50" y="100" width="260" height="22" rx="11" fill="#1e293b" />
      <motion.rect x="50" y="100" width={step >= 2 ? 110 : 0} height="22" rx="11" fill="#38bdf8" />
      <text x="60" y="114" fill="#fff" fontSize="9">
        NPS tier match
      </text>
    </g>
    <g opacity={step >= 3 ? 1 : 0.3}>
      <rect x="50" y="130" width="260" height="22" rx="11" fill="#1e293b" />
      <motion.rect x="50" y="130" width={step >= 3 ? 120 : 0} height="22" rx="11" fill="#34e0a1" />
      <text x="60" y="144" fill="#0f1529" fontSize="9">
        Corpus above EPFO/NPS
      </text>
    </g>
    <text x="180" y="170" textAnchor="middle" fill="#8791b3" fontSize="9">
      Public benefits are the base — your own savings top them up
    </text>
  </svg>
)