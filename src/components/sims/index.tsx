import { Suspense, lazy } from 'react'
import type { SimName } from '../../types'

/**
 * Simulations are code-split: each lab is a separate chunk that only loads when
 * a chapter containing it is opened. The title/blurb metadata below stays
 * synchronous, because BlockRenderer reads it during render and the content
 * validator (`scripts/check-content.ts`) imports SIMS names from here.
 */

const BudgetBuilder = lazy(() => import('./BudgetBuilder').then((m) => ({ default: m.BudgetBuilder })))
const CompoundLab = lazy(() => import('./CompoundLab').then((m) => ({ default: m.CompoundLab })))
const CoverLab = lazy(() => import('./CoverLab').then((m) => ({ default: m.CoverLab })))
const EmiLab = lazy(() => import('./EmiLab').then((m) => ({ default: m.EmiLab })))
const MarketLab = lazy(() => import('./MarketLab').then((m) => ({ default: m.MarketLab })))
const MinPaymentLab = lazy(() => import('./MinPaymentLab').then((m) => ({ default: m.MinPaymentLab })))
const NetWorthLab = lazy(() => import('./NetWorthLab').then((m) => ({ default: m.NetWorthLab })))
const RupeeTen = lazy(() => import('./RupeeTen').then((m) => ({ default: m.RupeeTen })))
const SalarySlipLab = lazy(() => import('./SalarySlipLab').then((m) => ({ default: m.SalarySlipLab })))
const ScamSpotter = lazy(() => import('./ScamSpotter').then((m) => ({ default: m.ScamSpotter })))
const SheetLab = lazy(() => import('./SheetLab').then((m) => ({ default: m.SheetLab })))
const PortfolioLab = lazy(() => import('./PortfolioLab').then((m) => ({ default: m.PortfolioLab })))
const BondLab = lazy(() => import('./BondLab').then((m) => ({ default: m.BondLab })))
const RealReturnLab = lazy(() => import('./RealReturnLab').then((m) => ({ default: m.RealReturnLab })))
const CurrencyLab = lazy(() => import('./CurrencyLab').then((m) => ({ default: m.CurrencyLab })))
const ValuationLab = lazy(() => import('./ValuationLab').then((m) => ({ default: m.ValuationLab })))
const FeeDragLab = lazy(() => import('./FeeDragLab').then((m) => ({ default: m.FeeDragLab })))
const CycleLab = lazy(() => import('./CycleLab').then((m) => ({ default: m.CycleLab })))

/** Placeholder shown while a sim chunk is in flight. */
function SimLoading() {
  return (
    <div className="flex h-40 items-center justify-center rounded-xl border border-white/10 bg-ink-900/40">
      <span className="flex items-center gap-2 text-sm text-ink-400">
        <span className="h-2 w-2 animate-ping rounded-full bg-brand-400" />
        Loading the lab…
      </span>
    </div>
  )
}

type SimMeta = { title: string; blurb: string; C: () => React.ReactElement }

export const SIMS: Record<SimName, SimMeta> = {
  compound: {
    title: 'Compound interest lab',
    blurb: 'Move the sliders and watch money grow on its own.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <CompoundLab />
      </Suspense>
    ),
  },
  budget: {
    title: 'Build a monthly budget',
    blurb: 'Try to spend, save and stay out of the red.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <BudgetBuilder />
      </Suspense>
    ),
  },
  networth: {
    title: 'Net worth builder',
    blurb: 'Add what you own and owe. Watch net worth move.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <NetWorthLab />
      </Suspense>
    ),
  },
  market: {
    title: 'Market simulator',
    blurb: 'Run a bull, bear or crash and compare SIP vs lump sum.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <MarketLab />
      </Suspense>
    ),
  },
  sheet: {
    title: 'Spreadsheet sandbox',
    blurb: 'A working sheet: type real SUM, SUMIF and IF formulas.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <SheetLab />
      </Suspense>
    ),
  },
  rupee10: {
    title: 'The ₹10 challenge',
    blurb: 'Seven days. Ten rupees. Make the best calls you can.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <RupeeTen />
      </Suspense>
    ),
  },
  'scam-spotter': {
    title: 'Scam spotter',
    blurb: 'Read real-style messages and hunt the red flags.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <ScamSpotter />
      </Suspense>
    ),
  },
  emi: {
    title: 'EMI and total cost lab',
    blurb: 'See the EMI, and how much of it never becomes yours.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <EmiLab />
      </Suspense>
    ),
  },
  'salary-slip': {
    title: 'Salary structure builder',
    blurb: 'Turn an advertised CTC into the salary that reaches your bank.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <SalarySlipLab />
      </Suspense>
    ),
  },
  minpayment: {
    title: 'The minimum payment trap',
    blurb: 'Why paying only the minimum keeps the debt alive.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <MinPaymentLab />
      </Suspense>
    ),
  },
  cover: {
    title: 'Health cover adequacy',
    blurb: 'Check whether your cover matches your income and family.',
        C: () => (
      <Suspense fallback={<SimLoading />}>
        <CoverLab />
      </Suspense>
    ),
  },
  portfolio: {
    title: 'Asset allocation lab',
    blurb: 'Build a mix and see its return, its swing, and what a crash would cost you.',
        C: () => (
      <Suspense fallback={<SimLoading />}>
        <PortfolioLab />
      </Suspense>
    ),
  },
  bond: {
    title: 'Bond pricing lab',
    blurb: 'Coupon, maturity and yield — and why bond prices fall when rates rise.',
        C: () => (
      <Suspense fallback={<SimLoading />}>
        <BondLab />
      </Suspense>
    ),
  },
  realreturn: {
    title: 'Real return and inflation',
    blurb: 'Strip inflation out of any return and see what your money really buys.',
        C: () => (
      <Suspense fallback={<SimLoading />}>
        <RealReturnLab />
      </Suspense>
    ),
  },
  currency: {
    title: 'Currency and the rupee',
    blurb: 'What depreciation gives you abroad, and what it quietly costs you at home.',
        C: () => (
      <Suspense fallback={<SimLoading />}>
        <CurrencyLab />
      </Suspense>
    ),
  },
  valuation: {
    title: 'Stock valuation lab',
    blurb: 'Type a company&apos;s numbers and watch EPS, P/E, ROE and debt update live.',
        C: () => (
      <Suspense fallback={<SimLoading />}>
        <ValuationLab />
      </Suspense>
    ),
  },
  feedrag: {
    title: 'The drag of fund fees',
    blurb: 'Identical market returns through very different expense ratios.',
        C: () => (
      <Suspense fallback={<SimLoading />}>
        <FeeDragLab />
      </Suspense>
    ),
  },
  cycle: {
    title: 'Market cycle lab',
    blurb: 'The same asset, held the same period, three very different outcomes.',
        C: () => (
      <Suspense fallback={<SimLoading />}>
        <CycleLab />
      </Suspense>
    ),
  },
}