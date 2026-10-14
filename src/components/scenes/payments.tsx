import { motion } from 'framer-motion'

/** UPI instruction flow: You → your bank → NPCI → their bank → merchant. */
export function UpiFlow() {
  const steps = [
    { x: 46, label: 'You', sub: 'UPI app' },
    { x: 124, label: 'Your bank', sub: 'debits you' },
    { x: 202, label: 'NPCI', sub: 'routes' },
    { x: 280, label: 'Their bank', sub: 'credits' },
    { x: 356, label: 'Merchant', sub: 'gets paid' },
  ]
  const xs = steps.map((s) => s.x)
  return (
    <>
      <line x1="46" y1="90" x2="356" y2="90" stroke="white" strokeOpacity="0.12" strokeWidth="2" />
      {steps.map((s, i) => (
        <motion.g key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.18 }}>
          <motion.circle
            cx={s.x}
            cy="90"
            r="16"
            fill="#34e0a1"
            opacity="0.8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 + i * 0.18, type: 'spring', stiffness: 240 }}
            style={{ transformOrigin: `${s.x}px 90px` }}
          />
          <text x={s.x} y="126" textAnchor="middle" fontSize="10" fill="#d7dbe9" fontWeight="600">
            {s.label}
          </text>
          <text x={s.x} y="140" textAnchor="middle" fontSize="9" fill="#656f97">
            {s.sub}
          </text>
        </motion.g>
      ))}
      <motion.circle
        cy="90"
        r="5"
        fill="#11131f"
        stroke="#34e0a1"
        strokeWidth="2"
        initial={{ cx: 46 }}
        animate={{ cx: xs }}
        transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut' }}
      />
      <text x="200" y="185" textAnchor="middle" fontSize="11" fill="#34e0a3">
        It moves instructions between banks — the money follows
      </text>
    </>
  )
}

/** ATM giving cash */
export function AtmMachine() {
  return (
    <>
      <motion.rect x="130" y="30" width="140" height="160" rx="12" fill="#1b1e33" stroke="#34e0a1" strokeWidth="2" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} style={{ transformOrigin: '200px 110px' }} />
      <rect x="150" y="50" width="100" height="34" rx="6" fill="#0b1524" />
      <text x="200" y="72" textAnchor="middle" fontSize="11" fill="#34e0a1">
        ₹ 5,000
      </text>
      <rect x="150" y="96" width="46" height="14" rx="4" fill="#656f97" />
      {Array.from({ length: 9 }, (_, i) => (
        <rect key={i} x={152 + (i % 3) * 15} y={122 + Math.floor(i / 3) * 15} width="12" height="11" rx="2" fill="#8791b3" opacity="0.6" />
      ))}
      <rect x="216" y="96" width="34" height="56" rx="5" fill="#0b1524" stroke="#656f97" />
      <motion.g
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 60, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <rect x="220" y="100" width="26" height="10" rx="2" fill="#34e0a1" />
      </motion.g>
      <text x="285" y="120" fontSize="10" fill="#8791b3">
        insert card →</text>
      <text x="285" y="136" fontSize="10" fill="#8791b3">
        enter PIN →</text>
      <text x="285" y="152" fontSize="10" fill="#8791b3">
        take cash</text>
      <text x="200" y="212" textAnchor="middle" fontSize="11" fill="#34e0a3">
        Always shield the keypad — shoulder surfing is real
      </text>
    </>
  )
}

/** Comparing NEFT / RTGS / IMPS */
export function PaymentRail() {
  const rails = [
    { name: 'UPI', min: '₹0.01', speed: 'Instant', use: 'Everyday', c: '#34e0a1' },
    { name: 'IMPS', min: '₹1', speed: '24×7 instant', use: 'Small transfers', c: '#38bdf8' },
    { name: 'NEFT', min: '₹1', speed: 'Half-hourly batches', use: 'Salary, vendors', c: '#c084fc' },
    { name: 'RTGS', min: '₹2 lakh', speed: 'Settlement-based', use: 'Large, urgent', c: '#f59e0b' },
  ]
  return (
    <>
      {rails.map((r, i) => (
        <motion.g key={r.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15 }}>
          <rect x="20" y={22 + i * 46} width="360" height="38" rx="10" fill={r.c} opacity="0.16" stroke={r.c} strokeOpacity="0.5" />
          <text x="36" y={47 + i * 46} fontSize="14" fill={r.c} fontWeight="800">
            {r.name}
          </text>
          <text x="100" y={41 + i * 46} fontSize="10" fill="#d7dbe9">
            {r.min}
          </text>
          <text x="160" y={41 + i * 46} fontSize="10" fill="#d7dbe9">
            {r.speed}
          </text>
          <text x="290" y={41 + i * 46} fontSize="10" fill="#8791b3">
            {r.use}
          </text>
        </motion.g>
      ))}
      <text x="200" y="212" textAnchor="middle" fontSize="10" fill="#8791b3">
        RTGS is for ₹2 lakh and above — no upper limit
      </text>
    </>
  )
}

/** A fishing hook (the scam) reeling money out of your pocket */
export function ScamHook() {
  const coins = [
    { x: 66, y: 189 },
    { x: 104, y: 180 },
    { x: 141, y: 167 },
  ]
  return (
    <>
      {/* rod line down to the hook eye */}
      <path d="M64 8 L250 34" fill="none" stroke="#8791b3" strokeOpacity="0.5" strokeWidth="1.5" />
      {/* the hook swings from its eye */}
      <motion.g
        animate={{ rotate: [-6, 6, -6] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{ transformOrigin: '250px 34px' }}
      >
        <path
          d="M250 34 L250 96 A34 34 0 0 1 182 96 C182 84 188 78 200 82"
          fill="none"
          stroke="#cbd5e1"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="200" cy="82" r="7" fill="#ef4444" />
      </motion.g>
      <text x="178" y="66" textAnchor="end" fontSize="12" fill="#fca5a5" fontWeight="700">
        "Guaranteed 40%!"
      </text>
      {/* money being reeled toward the hook */}
      <motion.path
        d="M50 192 Q130 180 196 138"
        fill="none"
        stroke="#ef4444"
        strokeWidth="2"
        strokeDasharray="6 6"
        animate={{ strokeDashoffset: [0, -48] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
      />
      <path d="M196 138 L186.7 149.6 L181.5 141 Z" fill="#ef4444" />
      {coins.map((c, i) => (
        <circle key={i} cx={c.x} cy={c.y} r="7" fill="#fbbf24" />
      ))}
      <text x="200" y="208" textAnchor="middle" fontSize="11" fill="#fca5a5">
        Guaranteed returns never exist. Ever.
      </text>
    </>
  )
}

/** A fake email whose look-alike link is exposed */
export function PhishingHook() {
  return (
    <>
      <defs>
        <marker id="phish-arrow" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L6,3 L0,6 Z" fill="#34e0a1" />
        </marker>
      </defs>

      <motion.g initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <rect x="22" y="30" width="240" height="124" rx="12" fill="#f87171" opacity="0.1" stroke="#f87171" strokeWidth="2" />
        <text x="34" y="50" fontSize="10" fill="#fecaca">
          {'From: no-reply@hdfc-secure-account.xyz'}
        </text>
        <line x1="22" y1="60" x2="262" y2="60" stroke="#f87171" strokeOpacity="0.4" />
        <text x="34" y="80" fontSize="10" fill="#fca5a5" fontWeight="600">
          Your account will be closed.
        </text>
        <text x="34" y="98" fontSize="10" fill="#fca5a5">
          Verify now to avoid suspension:
        </text>
      </motion.g>

      <motion.g animate={{ y: [0, 2.5, 0] }} transition={{ repeat: Infinity, duration: 1.4 }}>
        <rect x="34" y="108" width="190" height="24" rx="8" fill="#f87171" opacity="0.3" stroke="#f87171" strokeOpacity="0.6" />
        <text x="44" y="124" fontSize="10" fontFamily="monospace">
          <tspan fill="#fecaca">http://</tspan>
          <tspan fill="#fca5a5" fontWeight="700">hdfc-secure.xyz</tspan>
        </text>
      </motion.g>

      <motion.path
        d="M180,120 C222,126 244,108 266,102"
        fill="none"
        stroke="#34e0a1"
        strokeWidth="2"
        strokeDasharray="5 5"
        markerEnd="url(#phish-arrow)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, strokeDashoffset: [0, -20] }}
        transition={{ opacity: { delay: 0.6, duration: 0.4 }, strokeDashoffset: { repeat: Infinity, duration: 0.9, ease: 'linear' } }}
      />

      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
        <rect x="272" y="56" width="118" height="88" rx="12" fill="#34e0a1" opacity="0.12" stroke="#34e0a1" strokeOpacity="0.5" />
        <text x="331" y="78" textAnchor="middle" fontSize="9" fontWeight="700" fill="#34e0a1">
          Look-alike domain
        </text>
        <text x="282" y="102" fontSize="9" fill="#fca5a5">
          Fake: hdfc-secure.xyz
        </text>
        <text x="282" y="122" fontSize="9" fill="#34e0a1">
          Real: hdfcbank.com
        </text>
        <text x="331" y="138" textAnchor="middle" fontSize="8" fill="#8791b3">
          Extra words are the tell
        </text>
      </motion.g>

      <text x="200" y="200" textAnchor="middle" fontSize="11" fill="#8791b3">
        Real bank domains are exactly hdfcbank.com — check every letter
      </text>
    </>
  )
}

/** A shield protecting accounts */
export function Shield() {
  return (
    <>
      <motion.path
        d="M200 30 L275 60 V120 C275 165 240 195 200 208 C160 195 125 165 125 120 V60 Z"
        fill="#34e0a1"
        opacity="0.2"
        stroke="#34e0a1"
        strokeWidth="2"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 160 }}
        style={{ transformOrigin: '200px 120px' }}
      />
      <motion.path
        d="M175 118 L193 136 L228 100"
        fill="none"
        stroke="#34e0a1"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      />
      {['Never share OTP', 'Verify before you trust', 'Use official apps only'].map((t, i) => (
        <motion.text
          key={t}
          x="292"
          y={80 + i * 30}
          fontSize="10"
          fill="#d7dbe9"
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 + i * 0.18 }}
        >
          ✓ {t}
        </motion.text>
      ))}
    </>
  )
}