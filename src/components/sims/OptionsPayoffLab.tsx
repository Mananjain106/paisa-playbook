import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { rupeesShort } from '../../lib/format'
import { Slider, Stat } from './CompoundLab'

/**
 * Options payoff lab.
 *
 * An option's value at expiry is a simple function. The confusion usually comes
 * from the premium: profit ≠ payoff. This lab draws the expiry payoff and
 * overlays profit after subtracting the premium paid (or received in a credit
 * trade), so the breakeven and the point of max loss become unambiguous.
 *
 * The geometry also shows the fundamental asymmetry: long calls and long puts
 * have strictly limited downside (premium) and, for calls, theoretically open
 * upside; short positions invert those limits. Synthetic intuition holds — a long
 * call + short put ≈ a long future in payoff shape, which is left to
 * derivatives chapters.
 */

/** Plot width/height in CSS pixels. */
const W = 340
const H = 140

type Position = 'long-call' | 'long-put' | 'short-call' | 'short-put'

function computePayoff(
  type: Position,
  strike: number,
  premium: number,
  max: number,
): { x: number; y: number; p: number }[] {
  const pts: { x: number; y: number; p: number }[] = []
  const step = Math.max(1, max / 120)
  for (let s = 0; s <= max + step; s += step) {
    let payoff = 0
    if (type === 'long-call') payoff = Math.max(0, s - strike)
    if (type === 'long-put') payoff = Math.max(0, strike - s)
    if (type === 'short-call') payoff = -Math.max(0, s - strike)
    if (type === 'short-put') payoff = -Math.max(0, strike - s)
    const profit = payoff - premium * (type.startsWith('long') ? 1 : 0) + premium * (type.startsWith('short') ? 1 : 0)
    pts.push({ x: s, y: payoff, p: profit })
  }
  return pts
}

const PATH = (pts: { x: number; y: number }[], max: number) =>
  pts
    .map((pt, i) => {
      const x = ((pt.x / max) * W).toFixed(1)
      const y = (H - ((pt.y + 400) / 800) * H).toFixed(1)
      return i === 0 ? `M${x},${y}` : `L${x},${y}`
    })
    .join(' ')

export function OptionsPayoffLab() {
  const [strike, setStrike] = useState(100)
  const [premium, setPremium] = useState(5)
  const [spotNow, setSpotNow] = useState(98)
  const [position, setPosition] = useState<Position>('long-call')

  const maxSpot = Math.round(strike * 2.2)
  const pts = useMemo(() => computePayoff(position, strike, premium, maxSpot), [position, strike, premium, maxSpot])
  const be = useMemo(() => {
    if (position === 'long-call') return strike + premium
    if (position === 'short-call') return strike + premium
    if (position === 'long-put') return strike - premium
    if (position === 'short-put') return strike - premium
    return strike
  }, [position, strike, premium])

  const moneyness = spotNow >= strike ? (position.endsWith('call') ? 'ITM-ish' : 'OTM-ish') : position.endsWith('put') ? 'ITM-ish' : 'OTM-ish'
  const maxLoss = useMemo(() => {
    if (position === 'long-call') return -premium
    if (position === 'long-put') return -premium
    if (position === 'short-call') return Infinity
    if (position === 'short-put') return Infinity
    return 0
  }, [position, premium])

  const maxGain = useMemo(() => {
    if (position === 'long-call') return Infinity
    if (position === 'long-put') return strike - premium
    if (position === 'short-call') return +premium
    if (position === 'short-put') return +premium
    return 0
  }, [position, premium, strike])

  return (
    <div className="space-y-5">
      <p className="text-sm text-ink-400">
        A trader buys the right, not the obligation. Payoff is what you get at expiry if exercised; profit is after
        subtracting the premium. The &quot;breakeven&quot; is where the profit line crosses zero, not the strike.
      </p>

      <div className="grid gap-3 sm:grid-cols-2">
        <Slider label="Strike" value={strike} display={rupeesShort(strike)} min={20} max={500} step={5} onChange={setStrike} />
        <Slider label="Premium" value={premium} display={rupeesShort(premium)} min={1} max={40} step={1} onChange={setPremium} />
        <Slider label="Current spot" value={spotNow} display={rupeesShort(spotNow)} min={10} max={maxSpot} step={2} onChange={setSpotNow} />
      </div>

      <div className="flex flex-wrap gap-2">
        {(
          [
            ['long-call', 'Long call'],
            ['long-put', 'Long put'],
            ['short-call', 'Short call'],
            ['short-put', 'Short put'],
          ] as [Position, string][]
        ).map(([key, label]) => (
          <button
            key={key}
            className={`rounded-full px-3 py-1 text-xs ${position === key ? 'bg-brand-500 text-white' : 'bg-white/5 text-ink-300 hover:bg-white/10'}`}
            onClick={() => setPosition(key)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid gap-2 sm:grid-cols-3">
        <Stat label="Moneyness" value={moneyness} tone="neutral" />
        <Stat label="Breakeven" value={rupeesShort(be)} tone="good" />
        <Stat label="Max loss" value={maxLoss === Infinity ? 'Uncapped' : rupeesShort(maxLoss)} tone="bad" />
        <Stat label="Max gain" value={maxGain === Infinity ? 'Uncapped' : rupeesShort(maxGain)} tone="best" />
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="mb-1 text-[11px] uppercase tracking-wide text-ink-400">Expiry payoff and profit</div>
        <svg viewBox={`-10 -10 ${W + 20} ${H + 30}`} className="w-full" role="img" aria-label="Options expiry payoff and profit lines">
          <line x1="0" y1={H / 2} x2={W} y2={H / 2} stroke="#475569" strokeDasharray="4 4" />
          <line x1={(strike / maxSpot) * W} y1="0" x2={(strike / maxSpot) * W} y2={H} stroke="#475569" strokeDasharray="4 4" />
          <motion.path
            d={PATH(
              pts.map((p) => ({ x: p.x, y: p.y })),
              maxSpot,
            )}
            fill="none"
            stroke="#38bdf8"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8 }}
          />
          <motion.path
            d={PATH(
              pts.map((p) => ({ x: p.x, y: p.p })),
              maxSpot,
            )}
            fill="none"
            stroke="#34e0a1"
            strokeWidth="2.5"
            strokeDasharray="6 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.9, delay: 0.1 }}
          />
          <text x={W / 2} y={H + 20} textAnchor="middle" fontSize="10" fill="#8791b3">
            Spot at expiry
          </text>
          <text x={(strike / maxSpot) * W} y={-4} textAnchor="middle" fontSize="9" fill="#94a3b8">
            Strike {rupeesShort(strike)}
          </text>
          <text x={8} y={H / 2 - 4} fontSize="9" fill="#94a3b8">
            0
          </text>
        </svg>
        <p className="mt-2 text-xs text-ink-400">
          <span className="text-sky-300">Payoff</span> (solid, blue) ignores premium; <span className="text-brand-200">profit</span>{' '}
          (dashed, green) includes it. Breakeven: {rupeesShort(be)}. At spot {rupeesShort(spotNow)}, moneyness is {moneyness}.
        </p>
      </div>

      <div className="rounded-xl border-l-4 border-amber-400 bg-amber-400/5 p-4 text-sm text-ink-200">
        Short calls can be theoretically uncapped — the market can move against you. For retail positions, that is usually
        the single reason to trade risk-defined strategies rather than naked short calls. Write short puts only when you
        are willing to own the underlying at the strike (after premium).
      </div>
    </div>
  )
}