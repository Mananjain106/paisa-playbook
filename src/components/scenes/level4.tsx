import { motion } from 'framer-motion'

/** Level 4 illustrations: tax slabs, TDS, retirement, derivatives, careers. */

const ease = { type: 'spring' as const, stiffness: 130 }

/** The new-regime slab ladder: each band taxed at a different rate. */
export function TaxSlabLadder() {
  const bands = [
    { l: '0–4L', r: 'Nil', w: 46, c: '#34e0a1' },
    { l: '4–8L', r: '5%', w: 58, c: '#38bdf8' },
    { l: '8–12L', r: '10%', w: 70, c: '#818cf8' },
    { l: '12–16L', r: '15%', w: 82, c: '#a855f7' },
    { l: '16–20L', r: '20%', w: 94, c: '#f472b6' },
    { l: '20–24L', r: '25%', w: 106, c: '#fb923c' },
    { l: '24L+', r: '30%', w: 124, c: '#f87171' },
  ]
  return (
    <>
      {bands.map((b, i) => (
        <motion.g key={b.l} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
          <motion.rect
            x="26"
            y={24 + i * 25}
            width={b.w}
            height="19"
            rx="5"
            fill={b.c}
            opacity="0.85"
            initial={{ width: 0 }}
            animate={{ width: b.w }}
            transition={{ delay: i * 0.08, ...ease }}
          />
          <text x={b.w + 34} y={38 + i * 25} fontSize="10" fill="#d7dbe9">
            {b.l} → {b.r}
          </text>
        </motion.g>
      ))}
      <text x="200" y="212" textAnchor="middle" fontSize="10" fill="#8791b3">
        Marginal, not flat: only the top slab pays the top rate
      </text>
    </>
  )
}

/** Cash leaving a payer, through TDS, into the government, with the gap refunded. */
export function TdsFlow() {
  return (
    <>
      <motion.rect x="24" y="60" width="86" height="52" rx="9" fill="#38bdf8" opacity="0.85" initial={{ x: 24, opacity: 0 }} animate={{ x: 24, opacity: 0.85 }} transition={ease} />
      <text x="67" y="82" textAnchor="middle" fontSize="10" fill="#0b1524" fontWeight="700">Payer</text>
      <text x="67" y="97" textAnchor="middle" fontSize="9" fill="#0b1524">salary, rent</text>

      <motion.rect x="156" y="60" width="86" height="52" rx="9" fill="#94a3b8" opacity="0.85" initial={{ opacity: 0 }} animate={{ opacity: 0.85 }} transition={{ delay: 0.2, ...ease }} />
      <text x="199" y="82" textAnchor="middle" fontSize="10" fill="#11131f" fontWeight="700">You</text>
      <text x="199" y="97" textAnchor="middle" fontSize="9" fill="#11131f">net receipt</text>

      <motion.rect x="288" y="60" width="86" height="52" rx="9" fill="#f87171" opacity="0.85" initial={{ opacity: 0 }} animate={{ opacity: 0.85 }} transition={{ delay: 0.4, ...ease }} />
      <text x="331" y="82" textAnchor="middle" fontSize="10" fill="#2a0f0f" fontWeight="700">Govt</text>
      <text x="331" y="97" textAnchor="middle" fontSize="9" fill="#2a0f0f">TDS + 26AS</text>

      <motion.line x1="112" y1="86" x2="152" y2="86" stroke="#38bdf8" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.1 }} />
      <motion.line x1="244" y1="86" x2="284" y2="86" stroke="#f87171" strokeWidth="2" strokeDasharray="4 3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.35 }} />

      <text x="132" y="76" textAnchor="middle" fontSize="9" fill="#d7dbe9">gross</text>
      <text x="264" y="76" textAnchor="middle" fontSize="9" fill="#f87171">withheld</text>

      <motion.rect x="120" y="150" width="160" height="30" rx="7" fill="#34e0a1" opacity="0.22" initial={{ opacity: 0 }} animate={{ opacity: 0.22 }} transition={{ delay: 0.55 }} />
      <text x="200" y="169" textAnchor="middle" fontSize="10" fill="#34e0a1">
        Refund only if you overpaid
      </text>
      <text x="200" y="206" textAnchor="middle" fontSize="10" fill="#8791b3">
        TDS is an advance on your own liability, not an extra charge
      </text>
    </>
  )
}

/** How a retirement corpus grows, and what inflation does to it. */
export function RetirementCorpus() {
  const years = [0, 10, 20, 30, 40]
  const nom = [100, 145, 210, 305, 442]
  const real = [100, 84, 70, 58, 48]
  const max = 460
  const w = 66
  return (
    <>
      <motion.line x1="40" y1="180" x2="372" y2="180" stroke="#8791b3" strokeWidth="1" />
      {nom.map((v, i) => (
        <motion.rect
          key={'n' + i}
          x={46 + i * w}
          y={180 - (v / max) * 150}
          width="22"
          height={(v / max) * 150}
          rx="4"
          fill="#34e0a1"
          opacity="0.75"
          initial={{ height: 0, y: 180 }}
          animate={{ height: (v / max) * 150, y: 180 - (v / max) * 150 }}
          transition={{ delay: i * 0.1, ...ease }}
        />
      ))}
      {real.map((v, i) => (
        <motion.rect
          key={'r' + i}
          x={46 + i * w + 24}
          y={180 - (v / max) * 150}
          width="22"
          height={(v / max) * 150}
          rx="4"
          fill="#f87171"
          opacity="0.75"
          initial={{ height: 0, y: 180 }}
          animate={{ height: (v / max) * 150, y: 180 - (v / max) * 150 }}
          transition={{ delay: 0.2 + i * 0.1, ...ease }}
        />
      ))}
      {years.map((y, i) => (
        <text key={y} x={57 + i * w} y="194" textAnchor="middle" fontSize="9" fill="#8791b3">
          {y === 0 ? 'now' : `${y}y`}
        </text>
      ))}
      <text x="200" y="26" textAnchor="middle" fontSize="10" fill="#34e0a1">green: nominal</text>
      <text x="200" y="40" textAnchor="middle" fontSize="10" fill="#f87171">red: same money in today&apos;s rupees</text>
      <text x="200" y="212" textAnchor="middle" fontSize="10" fill="#8791b3">
        Plan retirement in the red bars, not the green ones
      </text>
    </>
  )
}

/** The payoff shape of a call and a put at expiry. */
export function OptionPayoff() {
  const strike = 200
  const lo = 120
  const hi = 280
  const x = (p: number) => 30 + ((p - lo) / (hi - lo)) * 340
  const y = (v: number) => 150 - v * 4
  return (
    <>
      <motion.line x1={x(strike)} y1="24" x2={x(strike)} y2="176" stroke="#8791b3" strokeWidth="1" strokeDasharray="4 4" />
      <text x={x(strike)} y="18" textAnchor="middle" fontSize="9" fill="#8791b3">
        strike
      </text>
      <motion.line x1="30" y1="150" x2="370" y2="150" stroke="#8791b3" strokeWidth="1" />

      <motion.path
        d={`M ${x(lo)} ${y(0)} L ${x(strike)} ${y(0)} L ${x(hi)} ${y(60)}`}
        fill="none"
        stroke="#34e0a1"
        strokeWidth="2.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.9 }}
      />
      <motion.path
        d={`M ${x(lo)} ${y(0)} L ${x(strike)} ${y(50)} L ${x(hi)} ${y(0)}`}
        fill="none"
        stroke="#f87171"
        strokeWidth="2.5"
        strokeDasharray="5 4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      />
      <text x="96" y="176" fontSize="10" fill="#34e0a1">call</text>
      <text x="290" y="176" fontSize="10" fill="#f87171">put</text>
      <text x="200" y="206" textAnchor="middle" fontSize="10" fill="#d7dbe9">
        Gain is limited for buyers, unlimited for sellers
      </text>
    </>
  )
}

/** An EMI split into principal and interest, month by month. */
export function AmortizationSplit() {
  const rows = [96, 74, 58, 46, 38]
  return (
    <>
      {rows.map((v, i) => (
        <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }}>
          <motion.rect
            x="46"
            y={28 + i * 32}
            width={v}
            height="24"
            rx="5"
            fill="#f87171"
            opacity="0.8"
            initial={{ width: 0 }}
            animate={{ width: v }}
            transition={{ delay: i * 0.1, ...ease }}
          />
          <motion.rect
            x={46 + v}
            y={28 + i * 32}
            width={132 - v}
            height="24"
            rx="5"
            fill="#34e0a1"
            opacity="0.8"
            initial={{ width: 0 }}
            animate={{ width: 132 - v }}
            transition={{ delay: i * 0.1, ...ease }}
          />
          <text x="188" y={45 + i * 32} fontSize="9" fill="#8791b3">
            yr {i + 1}
          </text>
        </motion.g>
      ))}
      <text x="34" y="26" fontSize="9" fill="#f87171">interest</text>
      <text x="112" y="196" fontSize="9" fill="#34e0a1">principal</text>
      <text x="250" y="196" fontSize="10" fill="#d7dbe9">
        Each EMI is the same size. The split is not.
      </text>
    </>
  )
}

/** Education spend against the salary it is meant to produce. */
export function EducationRoi() {
  const bars = [
    { l: 'Cost', v: 70, c: '#f87171' },
    { l: 'Years lost', v: 96, c: '#f87171' },
    { l: 'First 5 yrs', v: 44, c: '#f59e0b' },
    { l: 'Year 15', v: 132, c: '#34e0a1' },
    { l: 'Year 25', v: 176, c: '#34e0a1' },
  ]
  const max = 190
  return (
    <>
      <motion.line x1="34" y1="176" x2="372" y2="176" stroke="#8791b3" strokeWidth="1" />
      {bars.map((b, i) => (
        <motion.g key={b.l} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
          <motion.rect
            x={40 + i * 68}
            y={176 - (b.v / max) * 148}
            width="44"
            height={(b.v / max) * 148}
            rx="6"
            fill={b.c}
            opacity="0.82"
            initial={{ height: 0, y: 176 }}
            animate={{ height: (b.v / max) * 148, y: 176 - (b.v / max) * 148 }}
            transition={{ delay: i * 0.1, ...ease }}
          />
          <text x={62 + i * 68} y={190} textAnchor="middle" fontSize="9" fill="#8791b3">
            {b.l}
          </text>
        </motion.g>
      ))}
      <text x="200" y="26" textAnchor="middle" fontSize="11" fill="#34e0a1" fontWeight="700">
        Slow to start, then it compounds
      </text>
      <text x="200" y="210" textAnchor="middle" fontSize="10" fill="#8791b3">
        Judge it over a working lifetime, not one salary
      </text>
    </>
  )
}

/** A career as an accumulation of net worth, not just a salary line. */
export function CareerLadder() {
  const steps = [
    { l: 'Yr 1', v: 0.12, r: 'nothing saved' },
    { l: 'Yr 5', v: 0.32, r: 'no buffer' },
    { l: 'Yr 10', v: 0.58, r: 'options open' },
    { l: 'Yr 20', v: 0.88, r: 'real wealth' },
  ]
  return (
    <>
      <motion.path
        d="M 34 168 Q 180 150 300 60 T 372 34"
        fill="none"
        stroke="#34e0a1"
        strokeWidth="2.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
      />
      {steps.map((s, i) => {
        const y = 168 - s.v * 140
        const x = 44 + i * 106
        return (
          <motion.g key={s.l} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 + i * 0.12, ...ease }} style={{ transformOrigin: `${x}px ${y}px` }}>
            <circle cx={x} cy={y} r="7" fill="#34e0a1" />
            <text x={x} y={y - 16} textAnchor="middle" fontSize="10" fill="#d7dbe9">
              {s.l}
            </text>
            <text x={x} y={y + 20} textAnchor="middle" fontSize="9" fill="#8791b3">
              {s.r}
            </text>
          </motion.g>
        )
      })}
      <text x="200" y="206" textAnchor="middle" fontSize="10" fill="#8791b3">
        A raise is noise. Compounding early savings is the signal.
      </text>
    </>
  )
}

/** Margin: the small deposit controlling a much larger position. */
export function MarginVisual() {
  return (
    <>
      <motion.rect x="40" y="34" width="320" height="34" rx="8" fill="#f87171" opacity="0.8" initial={{ width: 0 }} animate={{ width: 320 }} transition={ease} />
      <text x="200" y="56" textAnchor="middle" fontSize="11" fill="#2a0f0f" fontWeight="700">
        exposure: ₹10,00,000
      </text>
      <motion.rect x="40" y="82" width="32" height="34" rx="6" fill="#38bdf8" opacity="0.9" initial={{ width: 0 }} animate={{ width: 32 }} transition={{ delay: 0.25, ...ease }} />
      <text x="86" y="104" fontSize="11" fill="#38bdf8">
        margin ₹80,000 — 8%
      </text>
      <text x="200" y="152" textAnchor="middle" fontSize="12" fill="#f87171" fontWeight="700">
        A 8% move against you ends the position
      </text>
      <text x="200" y="172" textAnchor="middle" fontSize="10" fill="#8791b3">
        Before the view was right or wrong
      </text>
      <text x="200" y="204" textAnchor="middle" fontSize="10" fill="#d7dbe9">
        Leverage does not raise expected return. It raises the bill when wrong.
      </text>
    </>
  )
}

/** Old regime deductions against new regime's flat standard deduction. */
export function DeductionStack() {
  const items = [
    { l: '80C (EPF, ELSS, PPF)', v: 150 },
    { l: '80D (health premium)', v: 56 },
    { l: '80CCD(1B) (NPS)', v: 50 },
    { l: 'Home loan interest', v: 200 },
  ]
  return (
    <>
      {items.map((it, i) => (
        <motion.g key={it.l} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }}>
          <motion.rect
            x="40"
            y={26 + i * 34}
            width={it.v}
            height="26"
            rx="6"
            fill={i === 3 ? '#38bdf8' : '#34e0a1'}
            opacity="0.8"
            initial={{ width: 0 }}
            animate={{ width: it.v }}
            transition={{ delay: i * 0.1, ...ease }}
          />
          <text x="30" y={44 + i * 34} textAnchor="end" fontSize="9" fill="#d7dbe9">
            {it.l}
          </text>
        </motion.g>
      ))}
      <motion.rect x="40" y="170" width="300" height="24" rx="6" fill="#f87171" opacity="0.7" initial={{ opacity: 0 }} animate={{ opacity: 0.7 }} transition={{ delay: 0.5 }} />
      <text x="52" y="187" fontSize="10" fill="#2a0f0f" fontWeight="700">
        Old regime only — all of it gone under 115BAC
      </text>
      <text x="200" y="212" textAnchor="middle" fontSize="9" fill="#8791b3">
        Which regime wins depends on your actual deductions
      </text>
    </>
  )
}

/** Total compensation: the headline number versus what reaches you. */
export function TotalCompStack() {
  const layers = [
    { l: 'Gross CTC', v: 200, c: '#8791b3' },
    { l: 'less: retirement + tax', v: 158, c: '#f87171' },
    { l: 'less: your premium', v: 140, c: '#f87171' },
    { l: 'less: PF, leaves, food', v: 128, c: '#f87171' },
    { l: 'What you can spend', v: 128, c: '#34e0a1' },
  ]
  return (
    <>
      {layers.map((l, i) => (
        <motion.g key={l.l} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }}>
          <motion.rect
            x="60"
            y={24 + i * 34}
            width={l.v}
            height="26"
            rx="6"
            fill={l.c}
            opacity={i === 4 ? 0.9 : 0.65}
            initial={{ width: 0 }}
            animate={{ width: l.v }}
            transition={{ delay: i * 0.1, ...ease }}
          />
          <text x={52} y={42 + i * 34} textAnchor="end" fontSize="9" fill="#d7dbe9">
            {i === 4 ? '' : '−'}
          </text>
          <text x={70 + (i === 4 ? 0 : l.v)} y={42 + i * 34} fontSize="9" fill={i === 4 ? '#0b1524' : '#d7dbe9'} fontWeight={i === 4 ? '700' : '400'}>
            {l.l}
          </text>
        </motion.g>
      ))}
      <text x="200" y="208" textAnchor="middle" fontSize="10" fill="#34e0a1">
        Two offers are rarely equal — compare what you can actually spend
      </text>
    </>
  )
}