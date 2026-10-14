import { useMemo, useState } from 'react'
import { rupees, rupeesShort } from '../../lib/format'
import { Slider, Stat } from './CompoundLab'

/**
 * Stock valuation lab.
 *
 * Reads a company's financial statements the way a beginner should: revenue in,
 * costs out, what is left, and what the market is charging for it. Every ratio
 * here (EPS, P/E, P/B, ROE, debt-to-equity, margin) is derived from six inputs,
 * so nothing is a black box.
 *
 * EPS   = net profit / shares
 * P/E   = price per share / EPS
 * ROE   = net profit / equity
 * D/E   = total debt / equity
 */

export function ValuationLab() {
  const [revenue, setRevenue] = useState(10_000)
  const [costs, setCosts] = useState(6_500)
  const [interest, setInterest] = useState(400)
  const [tax, setTax] = useState(25)
  const [equity, setEquity] = useState(6_000)
  const [debt, setDebt] = useState(2_000)
  const [cash, setCash] = useState(1_500)
  const [shares, setShares] = useState(100)

  const ebit = revenue - costs
  const pbt = ebit - interest
  const net = pbt * (1 - tax / 100)
  const eps = net / shares
  const bookValue = equity
  const bvps = bookValue / shares
  const roe = (net / equity) * 100
  const de = debt / equity
  const margin = (net / revenue) * 100
  const [price, setPrice] = useState(520)
  const cap = price * shares
  const pe = eps > 0 ? price / eps : Infinity
  const pb = bvps > 0 ? price / bvps : Infinity

  // Rough quality screen: profitability, leverage and consistency of margin.
  const quality = useMemo(() => {
    let score = 0
    const reasons: string[] = []
    if (roe >= 15) {
      score += 2
      reasons.push(`Strong ROE of ${roe.toFixed(0)}%`)
    } else if (roe >= 8) {
      score += 1
      reasons.push(`Decent ROE of ${roe.toFixed(0)}%`)
    } else if (net > 0) {
      reasons.push(`Thin ROE of ${roe.toFixed(0)}%`)
    } else {
      reasons.push('Loss-making')
    }

    if (de < 0.5) {
      score += 2
      reasons.push('Almost no debt')
    } else if (de < 1.5) {
      score += 1
      reasons.push('Moderate leverage')
    } else {
      reasons.push('Heavily indebted')
    }

    if (margin >= 15) {
      score += 1
      reasons.push('Strong net margin')
    }
    return { score, reasons }
  }, [roe, de, margin, net])

  // Price side.
  const priceScore = (() => {
    if (!Number.isFinite(pe)) return 0
    if (pe < 0) return 0
    let s = 0
    if (pe < 15) s += 2
    else if (pe < 28) s += 1
    if (pb < 3) s += 1
    return s
  })()

  const quadrant =
    quality.score >= 3 && priceScore >= 2
      ? { label: 'Quality at a fair price', cls: 'border-brand-400/40 bg-brand-400/10 text-brand-200' }
      : quality.score >= 3
        ? { label: 'Good company, expensive price', cls: 'border-amber-400/40 bg-amber-400/10 text-amber-200' }
        : priceScore >= 2
          ? { label: 'Cheap, but for a reason', cls: 'border-sky-400/40 bg-sky-400/10 text-sky-200' }
          : { label: 'Weak business at a weak price', cls: 'border-rose-400/40 bg-rose-400/10 text-rose-200' }

  return (
    <div className="space-y-5">
      <p className="text-sm text-ink-400">
        All figures in ₹ crore. Change any input and every ratio updates, because they are all
        derived from the same six numbers.
      </p>

      <div className="grid gap-3 sm:grid-cols-2">
        <Slider label="Revenue" value={revenue} display={`₹${revenue} Cr`} min={100} max={50_000} step={100} onChange={setRevenue} />
        <Slider label="Operating costs" value={costs} display={`₹${costs} Cr`} min={0} max={50_000} step={100} onChange={setCosts} />
        <Slider label="Interest" value={interest} display={`₹${interest} Cr`} min={0} max={5_000} step={50} onChange={setInterest} />
        <Slider label="Tax rate" value={tax} display={`${tax}%`} min={0} max={40} step={1} onChange={setTax} />
        <Slider label="Shareholders' equity (book value)" value={equity} display={`₹${equity} Cr`} min={100} max={40_000} step={100} onChange={setEquity} />
        <Slider label="Total debt" value={debt} display={`₹${debt} Cr`} min={0} max={40_000} step={100} onChange={setDebt} />
        <Slider label="Cash & equivalents" value={cash} display={`₹${cash} Cr`} min={0} max={20_000} step={100} onChange={setCash} />
        <Slider label="Shares outstanding" value={shares} display={`${shares} Cr`} min={10} max={1_000} step={10} onChange={setShares} />
        <Slider label="Share price" value={price} display={rupees(price)} min={5} max={5_000} step={5} onChange={setPrice} />
      </div>

      {/* P&L waterfall */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="mb-2 text-[11px] uppercase tracking-wide text-ink-400">Where the profit goes</div>
        <div className="space-y-1.5">
          <Row label="Revenue" value={revenue} colour="#38bdf8" />
          <Row label="− Operating costs" value={-costs} colour="#f87171" />
          <Row label="− Interest" value={-interest} colour="#f87171" />
          <Row label="− Tax" value={-(pbt - net)} colour="#f87171" />
          <div className="mt-1 border-t border-white/10 pt-1.5">
            <Row label="Net profit" value={net} colour={net >= 0 ? '#34e0a1' : '#f87171'} bold />
          </div>
        </div>
        <p className="mt-2 text-xs text-ink-400">
          Revenue of ₹{revenue} Cr became {rupeesShort(net)} Cr of profit — a {margin.toFixed(1)}%
          net margin. Interest alone took ₹{interest} Cr before a single rupee of tax was paid.
        </p>
      </div>

      <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-6">
        <Stat label="Net profit" value={`₹${net.toFixed(0)} Cr`} tone={net > 0 ? 'best' : 'bad'} />
        <Stat label="EPS" value={`₹${eps.toFixed(1)}`} tone={eps > 0 ? 'good' : 'bad'} />
        <Stat label="P/E" value={Number.isFinite(pe) ? pe.toFixed(1) : '—'} tone={pe < 20 ? 'best' : pe < 40 ? 'neutral' : 'bad'} />
        <Stat label="P/B" value={Number.isFinite(pb) ? pb.toFixed(1) : '—'} />
        <Stat label="ROE" value={`${roe.toFixed(1)}%`} tone={roe >= 15 ? 'best' : roe >= 8 ? 'good' : 'bad'} />
        <Stat label="Debt / equity" value={de.toFixed(2)} tone={de < 0.5 ? 'good' : de < 1.5 ? 'neutral' : 'bad'} />
      </div>

      {/* quadrant */}
      <div className={`rounded-xl border p-4 ${quadrant.cls}`}>
        <div className="text-[11px] uppercase tracking-wide opacity-70">Reading this stock</div>
        <div className="font-display text-xl">{quadrant.label}</div>
        <ul className="mt-2 space-y-0.5 text-xs opacity-90">
          {quality.reasons.map((r) => (
            <li key={r}>• {r}</li>
          ))}
          <li>
            • Market cap ₹{rupeesShort(cap)} Cr, book value ₹{rupeesShort(bookValue)} Cr, net cash
            ₹{rupeesShort(cash - debt)} Cr
          </li>
        </ul>
        <p className="mt-2 text-xs opacity-80">
          Cheap is not the same as good. A low P/E on a shrinking, over-levered business is a value
          trap; a high P/E on a business that keeps its 20% margins is often simply a fair price.
        </p>
      </div>

      {/* valuation bands */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="mb-2 text-[11px] uppercase tracking-wide text-ink-400">
          What different P/E ratings imply for this share price
        </div>
        <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-5">
          {[10, 15, 20, 25, 35].map((m) => (
            <div key={m} className={`rounded-lg px-2 py-2 text-center text-xs ${Math.abs(m - pe) < 3 ? 'bg-brand-400/20 text-brand-200' : 'bg-white/5 text-ink-400'}`}>
              <div className="font-semibold">P/E {m}</div>
              <div className="tabular-nums">{eps > 0 ? rupeesShort(eps * m) : '—'}</div>
            </div>
          ))}
        </div>
        <p className="mt-2 text-xs text-ink-400">
          Same company, same earnings, different price. A 2× swing in what you pay is entirely about
          what you believe about the next five years — and about what other people are willing to pay
          today.
        </p>
      </div>

      <p className="text-[11px] text-ink-600">
        Simplified single-year model: no depreciation, no minority interest, no capital changes.
        Real accounts have all three, and you should read the notes before trusting any ratio you
        compute yourself.
      </p>
    </div>
  )
}

function Row({
  label,
  value,
  colour,
  bold,
}: {
  label: string
  value: number
  colour: string
  bold?: boolean
}) {
  const max = 10_000
  return (
    <div className="flex items-center gap-2 text-xs">
      <span className={`w-32 shrink-0 ${bold ? 'font-semibold text-white' : 'text-ink-300'}`}>{label}</span>
      <span className="h-3 flex-1 overflow-hidden rounded bg-white/5">
        <span
          className="block h-full rounded transition-all"
          style={{ width: `${Math.min(100, (Math.abs(value) / max) * 100)}%`, background: colour }}
        />
      </span>
      <span className={`w-20 shrink-0 text-right tabular-nums ${bold ? 'font-semibold text-white' : 'text-ink-300'}`}>
        {value < 0 ? '−' : ''}
        {Math.abs(value).toFixed(0)}
      </span>
    </div>
  )
}