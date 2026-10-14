import { motion } from 'framer-motion'

/** UPI request → PSP → bank → merchant */
export function UpiFlow() {
  const steps = [
    { x: 40, label: 'You', sub: 'UPI app' },
    { x: 130, label: 'Bank', sub: 'debits ₹' },
    { x: 220, label: 'NPCI UPI', sub: 'routes' },
    { x: 310, label: 'Shop', sub: 'gets paid' },
    { x: 380, label: 'You', sub: 'get receipt' },
  ]
  return (
    <>
      <line x1="40" y1="90" x2="380" y2="90" stroke="white" strokeOpacity="0.12" strokeWidth="2" />
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
        r="5"
        fill="#11131f"
        stroke="#34e0a1"
        strokeWidth="2"
        animate={{ cx: [40, 130, 220, 310, 380] }}
        transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut' }}
      />
      <text x="200" y="185" textAnchor="middle" fontSize="11" fill="#34e0a3">
        Free, instant, and the most used payment rail in India
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

/** A hook pulling money out */
export function ScamHook() {
  return (
    <>
      <motion.g
        animate={{ rotate: [-8, 8, -8] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{ transformOrigin: '260px 110px' }}
      >
        <rect x="255" y="60" width="10" height="110" rx="5" fill="#8791b3" />
        <path d="M260 160 Q235 180 240 190 Q255 200 260 175 Q265 200 280 190 Q285 180 260 160 Z" fill="#8791b3" />
        <circle cx="260" cy="58" r="10" fill="#ef4444" />
      </motion.g>
      <motion.path
        d="M250 105 Q160 100 110 108"
        fill="none"
        stroke="#ef4444"
        strokeWidth="2"
        strokeDasharray="6 6"
        animate={{ strokeDashoffset: [0, -48] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
      />
      {Array.from({ length: 4 }, (_, i) => (
        <motion.g key={i}>
          <circle cx={90 - i * 18} cy={150} r="7" fill="#fbbf24" />
        </motion.g>
      ))}
      <motion.g animate={{ x: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
        <text x="90" y="60" textAnchor="middle" fontSize="12" fill="#fca5a5" fontWeight="700">
          "Guaranteed 40%!"
        </text>
      </motion.g>
      <text x="200" y="210" textAnchor="middle" fontSize="11" fill="#fca5a5">
        Guaranteed returns never exist. Ever.
      </text>
    </>
  )
}

/** A fake email link catching a click */
export function PhishingHook() {
  return (
    <>
      <rect x="40" y="40" width="320" height="120" rx="12" fill="#f87171" opacity="0.15" stroke="#f87171" strokeWidth="2" />
      <text x="60" y="68" fontSize="11" fill="#fca5a5">
        From: no-reply@hdfc-secure-account.xyz
      </text>
      <text x="60" y="92" fontSize="11" fill="#fca5a5">
        Your account will be closed. Verify now:
      </text>
      <motion.g animate={{ y: [0, 3, 0] }} transition={{ repeat: Infinity, duration: 1.2 }}>
        <rect x="60" y="104" width="170" height="24" rx="6" fill="#f87171" opacity="0.35" />
        <text x="70" y="120" fontSize="10" fill="#fecaca" fontFamily="monospace">
          http://hdfc-secure.xyz
        </text>
      </motion.g>
      <motion.circle cx="330" cy="116" r="16" fill="#34e0a1" opacity="0.3" />
      <motion.ellipse
        cx="330"
        cy="116"
        rx="14"
        ry="18"
        fill="none"
        stroke="#34e0a1"
        strokeWidth="2"
        animate={{ rx: [14, 8, 14] }}
        transition={{ repeat: Infinity, duration: 1 }}
      />
      <text x="330" y="146" textAnchor="middle" fontSize="9" fill="#34e0a3">
        look-alike domain
      </text>
      <text x="200" y="195" textAnchor="middle" fontSize="11" fill="#8791b3">
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