/**
 * Level 5 illustrations — band one (chapter l5-001 to l5-004).
 *
 * Each scene is drawn for one chapter and used once in the level, so the
 * illustration-reuse cap (at most three uses of any illustration across all 161
 * chapters) is not a constraint that has to be managed for this band.
 *
 * Scenes are plain SVG fragments; the `Scene` wrapper supplies the
 * viewBox="0 0 400 220" and the caption.
 */

const INK = '#c9cfe4'
const MUTED = '#8b93ad'
const PANEL = 'rgba(255,255,255,0.05)'
const LINE = 'rgba(255,255,255,0.14)'

/** l5-001 — one salary, four jobs. */
export function FirstPayslipSplit() {
  const bars: { label: string; value: string; w: number; fill: string }[] = [
    { label: 'Obligations', value: '₹22,000', w: 158, fill: '#38bdf8' },
    { label: 'Buffer', value: '₹8,500', w: 61, fill: '#34e0a1' },
    { label: 'Goals', value: '₹4,000', w: 29, fill: '#c084fc' },
    { label: 'Debt', value: '₹1,000', w: 8, fill: '#fb923c' },
    { label: 'Life', value: '₹8,300', w: 57, fill: '#facc15' },
  ]
  let x = 24
  return (
    <>
      <text x="24" y="26" fill={INK} fontSize="13" fontWeight="600">
        ₹43,800 of take-home, allocated on day one
      </text>
      <rect x="24" y="40" width="352" height="30" rx="6" fill="rgba(255,255,255,0.06)" />
      {bars.map((b) => {
        const rect = <rect key={b.label} x={x} y="40" width={b.w} height="30" fill={b.fill} opacity="0.85" />
        x += b.w
        return rect
      })}
      <line x1="182" y1="34" x2="182" y2="76" stroke="#fff" strokeWidth="1.5" />
      <text x="186" y="90" fill={MUTED} fontSize="9">
        every obligation is covered before a rupee is spent on anything optional
      </text>
      {bars.map((b, i) => (
        <g key={b.label}>
          <circle cx="30" cy={118 + i * 20} r="4" fill={b.fill} />
          <text x="42" y={122 + i * 20} fill={INK} fontSize="11">
            {b.label}
          </text>
          <text x="150" y={122 + i * 20} fill={MUTED} fontSize="11">
            {b.value}
          </text>
        </g>
      ))}
      <text x="24" y="212" fill={MUTED} fontSize="9">
        Illustrative split. Saving here is 28.5% of take-home; the buffer reaches six months of cover in about 15 months.
      </text>
    </>
  )
}

/** l5-002 — where an offer sits inside the market band. */
export function NegotiationBand() {
  const bandX = 60
  const bandW = 260
  const at = (lpa: number) => bandX + ((lpa - 8) / 6) * bandW
  return (
    <>
      <text x="24" y="24" fill={INK} fontSize="13" fontWeight="600">
        A ₹8–14 lakh band for one role
      </text>
      <rect x={bandX} y="60" width={bandW} height="30" rx="15" fill="rgba(255,255,255,0.06)" />
      <rect x={bandX} y="60" width={bandW * 0.66} height="30" rx="15" fill="#38bdf8" opacity="0.22" />
      <text x={bandX} y="108" fill={MUTED} fontSize="9">
        ₹8L
      </text>
      <text x={bandX + bandW - 14} y="108" fill={MUTED} fontSize="9">
        ₹14L
      </text>
      <text x={bandX + bandW * 0.66 - 30} y="108" fill={MUTED} fontSize="9">
        midpoint
      </text>
      {[
        { lpa: 9, label: 'opening offer', fill: '#facc15', dy: -34 },
        { lpa: 11.5, label: 'your ask, with market evidence', fill: '#34e0a1', dy: -34 },
        { lpa: 12.6, label: 'where an evidenced ask can land', fill: '#c084fc', dy: -10 },
      ].map((m) => (
        <g key={m.label}>
          <line x1={at(m.lpa)} y1="60" x2={at(m.lpa)} y2="92" stroke={m.fill} strokeWidth="2" />
          <line x1={at(m.lpa)} y1="75" x2={at(m.lpa)} y2={75 + m.dy} stroke={m.fill} strokeWidth="1" strokeDasharray="3 3" />
          <text x={at(m.lpa) + 4} y={70 + m.dy} fill={m.fill} fontSize="9.5">
            {m.label}
          </text>
        </g>
      ))}
      <text x="24" y="140" fill={MUTED} fontSize="9.5">
        The band is not a secret: it is built from live postings, offers you have seen and structured reports.
      </text>
      <text x="24" y="158" fill={MUTED} fontSize="9.5">
        Your opening offer is a point inside a band — it moved from ₹9L only because an evidenced ask was made.
      </text>
      <rect x="24" y="174" width="352" height="30" rx="8" fill={PANEL} stroke={LINE} />
      <text x="34" y="193" fill={INK} fontSize="10">
        Reservation point written down first: below it you walk away
      </text>
    </>
  )
}

/** l5-003 — two offers priced over three years. */
export function OfferTotalValue() {
  const offers = [
    { name: 'Offer A — metro', total: 37.1, segments: [{ l: 'Fixed', v: 36, c: '#38bdf8' }, { l: 'Variable', v: 16.8, c: '#c084fc' }, { l: 'Benefits', v: 6.1, c: '#34e0a1' }, { l: 'Living cost', v: -5.4, c: '#fb923c' }] },
    { name: 'Offer B — smaller city', total: 34.9, segments: [{ l: 'Fixed', v: 31.5, c: '#38bdf8' }, { l: 'Variable', v: 3.6, c: '#c084fc' }, { l: 'Benefits', v: 5.4, c: '#34e0a1' }, { l: 'ESOP', v: 1.8, c: '#facc15' }, { l: 'Living cost', v: -1.8, c: '#fb923c' }] },
  ]
  const scale = 4.2
  return (
    <>
      <text x="24" y="24" fill={INK} fontSize="13" fontWeight="600">
        Three-year total value, not the headline number
      </text>
      {offers.map((o, i) => {
        const x = 70 + i * 170
        let y = 196
        return (
          <g key={o.name}>
            <line x1={x - 20} y1="200" x2={x - 20} y2="42" stroke={LINE} />
            {o.segments.map((s) => {
              const h = Math.abs(s.v) * scale
              const rect = (
                <g key={s.l}>
                  {s.v >= 0 ? <rect x={x} y={y - h} width="66" height={h} fill={s.c} opacity="0.8" /> : <rect x={x} y={y} width="66" height={h} fill={s.c} opacity="0.55" stroke={s.c} />}
                  <text x={x + 33} y={(s.v >= 0 ? y - h / 2 + 3 : y + h / 2 + 3)} fill="#11131f" fontSize="8.5" textAnchor="middle">
                    {s.l}
                  </text>
                </g>
              )
              y -= s.v >= 0 ? h : -h
              return rect
            })}
            <text x={x + 33} y="214" fill={INK} fontSize="10" textAnchor="middle">
              {o.name}
            </text>
            <text x={x + 33} y="34" fill="#34e0a1" fontSize="11" textAnchor="middle" fontWeight="600">
              ₹{o.total}L
            </text>
          </g>
        )
      })}
      <text x="24" y="120" fill={MUTED} fontSize="9.5">
        Variable pay counted at what it actually paid, not at target
      </text>
      <text x="24" y="138" fill={MUTED} fontSize="9.5">
        ESOP counted at a discount for the risk it carries
      </text>
    </>
  )
}

/** l5-004 — the CTC waterfall. */
export function CtcWaterfall() {
  const steps = [
    { label: 'CTC', value: 600000, c: '#8b93ad' },
    { label: 'less employer PF', value: 36000, drop: true, c: '#38bdf8' },
    { label: 'less gratuity accrual', value: 14430, drop: true, c: '#34e0a1' },
    { label: 'gross salary', value: 549570, c: '#c084fc' },
    { label: 'less employee PF', value: 36000, drop: true, c: '#38bdf8' },
    { label: 'less professional tax', value: 2400, drop: true, c: '#fb923c' },
    { label: 'take-home', value: 511170, c: '#34e0a1' },
  ]
  let y = 30
  return (
    <>
      <text x="24" y="18" fill={INK} fontSize="12.5" fontWeight="600">
        ₹6,00,000 CTC to about ₹5,11,170 in hand
      </text>
      {steps.map((s) => {
        const w = Math.max(30, (s.value / 600000) * 300)
        const h = s.drop ? 9 : 20
        const row = (
          <g key={s.label}>
            <rect x="24" y={y} width={w} height={h} rx="3" fill={s.c} opacity={s.drop ? 0.5 : 0.8} />
            <text x={32 + w} y={y + h - 2} fill={s.drop ? MUTED : INK} fontSize="9.5">
              {s.drop ? '−' : ''}₹{s.value.toLocaleString('en-IN')} · {s.label}
            </text>
          </g>
        )
        y += h + 6
        return row
      })}
    </>
  )
}
