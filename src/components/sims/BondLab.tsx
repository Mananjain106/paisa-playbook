import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { rupees, rupeesShort } from '../../lib/format'
import { Slider, Stat } from './CompoundLab'

/**
 * Bond lab.
 *
 * The one thing this is built to prove: bond prices and interest rates move in
 * opposite directions. Everyone assumes a higher rate means a better bond. It
 * means a worse deal for the holder of an existing bond, priced in fixed
 * coupons.
 *
 * Price = Σ coupon/(1+y)^t  +  face/(1+y)^n
 */

/** Present value of a bond's cash flows at yield `y` (annual, as a decimal). */
export function bondPrice(face: number, couponRate: number, years: number, y: number): number {
  const c = (face * couponRate) / 100
  let pv = 0
  for (let t = 1; t <= years; t++) {
    pv += c / Math.pow(1 + y, t)
  }
  pv += face / Math.pow(1 + y, years)
  return pv
}

export function BondLab() {
  const [face, setFace] = useState(10_000)
  const [couponRate, setCouponRate] = useState(7)
  const [years, setYears] = useState(10)
  const [yieldPct, setYield] = useState(7)
  const [shocked, setShocked] = useState(false)

  const price = bondPrice(face, couponRate, years, yieldPct / 100)
  const coupon = (face * couponRate) / 100
  const gain = price - face
  const totalReturn = ((coupon * years + gain) / face) * 100

  // Duration-style sensitivity: what a 1% rate move does to this bond.
  const up = bondPrice(face, couponRate, years, (yieldPct + 1) / 100)
  const down = bondPrice(face, couponRate, years, (yieldPct - 1) / 100)
  const upLoss = ((up - price) / price) * 100
  const downGain = ((down - price) / price) * 100

  const curve = useMemo(() => {
    const pts: { y: number; p: number }[] = []
    for (let y = 2; y <= 14; y += 0.25) {
      pts.push({ y, p: bondPrice(face, couponRate, years, y / 100) })
    }
    return pts
  }, [face, couponRate, years])

  const w = 320
  const h = 110
  const maxP = Math.max(...curve.map((c) => c.p)) * 1.05
  const minP = Math.min(...curve.map((c) => c.p)) * 0.95
  const x = (y: number) => ((y - 2) / 12) * w
  const yy = (p: number) => h - ((p - minP) / (maxP - minP || 1)) * h
  const path = curve.map((c, i) => `${i === 0 ? 'M' : 'L'}${x(c.y).toFixed(1)},${yy(c.p).toFixed(1)}`).join(' ')
  const markerX = x(Math.min(14, Math.max(2, yieldPct)))
  const markerY = yy(price)

  return (
    <div className="space-y-5">
      <p className="text-sm text-ink-400">
        A fixed-rate government or corporate bond promises you ₹{coupon.toFixed(0)} a year until
        maturity, then ₹{rupees(face)} back. Change the market yield and watch what happens to a
        bond priced with yesterday's coupons.
      </p>

      <div className="grid gap-3 sm:grid-cols-2">
        <Slider
          label="Face value"
          value={face}
          display={rupees(face)}
          min={1_000}
          max={1_00_000}
          step={1_000}
          onChange={setFace}
        />
        <Slider
          label="Years to maturity"
          value={years}
          display={`${years} yr`}
          min={1}
          max={30}
          step={1}
          onChange={setYears}
        />
        <Slider
          label="Coupon rate (fixed forever)"
          value={couponRate}
          display={`${couponRate}%`}
          min={2}
          max={14}
          step={0.25}
          onChange={setCouponRate}
        />
        <Slider
          label="Market yield today"
          value={yieldPct}
          display={`${yieldPct}%`}
          min={2}
          max={14}
          step={0.25}
          onChange={setYield}
        />
      </div>

      <div className="grid gap-2 sm:grid-cols-4">
        <Stat
          label="Price today"
          value={rupeesShort(price)}
          tone={gain > 0 ? 'best' : gain < 0 ? 'bad' : 'neutral'}
        />
        <Stat
          label="vs face value"
          value={`${gain >= 0 ? '+' : ''}${gain.toFixed(0)}`}
          tone={gain > 0 ? 'best' : gain < 0 ? 'bad' : 'neutral'}
        />
        <Stat label="Coupon each year" value={rupeesShort(coupon)} tone="good" />
        <Stat label="Total return" value={`${totalReturn.toFixed(1)}%`} />
      </div>

      {/* the curve */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="mb-1 text-[11px] uppercase tracking-wide text-ink-400">
          Price against market yield
        </div>
        <svg viewBox={`-8 -8 ${w + 16} ${h + 26}`} className="w-full" role="img" aria-label="Bond price falls as yield rises">
          <path d={path} fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx={markerX} cy={markerY} r="5" fill="#34e0a1" stroke="#11131f" strokeWidth="2" />
          <text x={w / 2} y={h + 18} textAnchor="middle" fontSize="10" fill="#8791b3">
            market yield →
          </text>
          <text x={-4} y={6} textAnchor="start" fontSize="10" fill="#8791b3">
            price
          </text>
        </svg>
        <p className="mt-1 text-xs text-ink-400">
          Always sloping down. This one shape explains most of bond market behaviour in India — when
          the RBI cuts rates, existing bond prices rise, and every fresh issue at a lower coupon feels
          less attractive.
        </p>
      </div>

      {/* rate shock */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="mb-2 flex items-center justify-between gap-3">
          <div className="text-[11px] uppercase tracking-wide text-ink-400">
            What a 1% rate move does to this bond
          </div>
          <button
            onClick={() => setShocked((s) => !s)}
            className="rounded-lg border border-white/15 px-2.5 py-1 text-xs text-ink-200 transition hover:border-white/35 hover:text-white"
          >
            {shocked ? 'Show normal rates' : 'Simulate rate hike'}
          </button>
        </div>
        {shocked ? (
          <div className="space-y-2">
            <div className="flex items-center justify-between rounded-lg bg-rose-400/10 px-3 py-2 text-sm">
              <span className="text-rose-100">Yields rise to {(yieldPct + 1).toFixed(2)}%</span>
              <span className="font-semibold text-rose-200">
                {rupeesShort(up)} ({upLoss.toFixed(1)}%)
              </span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-brand-400/10 px-3 py-2 text-sm">
              <span className="text-brand-100">Yields fall to {(yieldPct - 1).toFixed(2)}%</span>
              <span className="font-semibold text-brand-200">
                {rupeesShort(down)} (+{downGain.toFixed(1)}%)
              </span>
            </div>
            <p className="text-xs text-ink-400">
              A bond fund investor feels this in the NAV with no warning and no decision of their own.
              Longer maturity means a bigger swing for the same rate move — that is duration.
            </p>
          </div>
        ) : (
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="text-ink-300">
              Rates +1% → <span className="font-semibold text-rose-300">{upLoss.toFixed(1)}%</span>
            </span>
            <span className="text-ink-300">
              Rates −1% → <span className="font-semibold text-brand-300">+{downGain.toFixed(1)}%</span>
            </span>
          </div>
        )}
      </div>

      <div className="rounded-xl border-l-4 border-brand-400 bg-brand-400/5 p-4 text-sm text-ink-200">
        <p>
          {Math.abs(yieldPct - couponRate) < 0.3
            ? 'Coupon and yield almost match, so the bond trades at face value. That is the only point where "buy at par" is true.'
            : yieldPct > couponRate
              ? 'The market demands more than this bond pays, so it trades below face value. You still earn the coupon plus a gain if it is redeemed at par.'
              : 'This bond pays more than the market demands, so it trades above face value. You are locked into an above-market coupon until maturity.'}
        </p>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-[11px] text-ink-600"
      >
        Prices are computed by discounting every cash flow at the yield, annual compounding, ignoring
        credit risk and tax.
      </motion.p>
    </div>
  )
}