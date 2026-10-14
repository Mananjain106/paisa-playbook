import { motion } from 'framer-motion'
import type { SceneName } from '../../types'
import * as behaviour from './behaviour'
import * as level2 from './level2'
import * as level3 from './level3'
import * as level4 from './level4'
import * as money from './money'
import * as payments from './payments'
import * as planning from './planning'

/* Call-scene components are authored SVG scenes that take props (for example a step or rate).
 * When a chapter block references them, it does so via the scene helper below rather than
 * importing the raw component. That keeps chapter content declarative.
 */
type SceneFn = () => React.ReactElement
export const SCENES: Record<SceneName, SceneFn> = {
  coins: () => <money.Coins />,
  barter: () => <money.Barter />,
  timeline: () => <money.Timeline />,
  rupee: () => <money.Rupee />,
  'rupee-erode': () => <money.RupeeErode />,
  'money-flow': () => <money.MoneyFlow />,
  'rbi-funnel': () => <money.RbiFunnel />,
  'bank-pyramid': () => <money.BankPyramid />,
  'income-streams': () => <behaviour.IncomeStreams />,
  'pie-needs-wants': () => <behaviour.PieNeedsWants />,
  'spend-leak': () => <behaviour.SpendLeak />,
  'ad-trap': () => <behaviour.AdTrap />,
  'peer-circle': () => <behaviour.PeerCircle />,
  'budget-pie': () => <planning.BudgetPie />,
  'expense-bars': () => <planning.ExpenseBars />,
  'goal-ladder': () => <planning.GoalLadder />,
  'safe-vs-risk': () => <planning.SafeVsRisk />,
  'interest-growth': () => <planning.InterestGrowth />,
  'inflation-crocodile': () => <planning.InflationCrocodile />,
  'opportunity-fork': () => <planning.OpportunityFork />,
  'upi-flow': () => <payments.UpiFlow />,
  'atm-machine': () => <payments.AtmMachine />,
  'payment-rail': () => <payments.PaymentRail />,
  'scam-hook': () => <payments.ScamHook />,
  'phishing-hook': () => <payments.PhishingHook />,
  shield: () => <payments.Shield />,
  'balance-sheet': () => <level2.BalanceSheet />,
  'emi-split': () => <level2.EmiSplit />,
  'emergency-ladder': () => <level2.EmergencyLadder />,
  'minpayment-trap': () => <level2.MinPaymentTrap />,
  'secured-vs-unsecured': () => <level2.SecuredVsUnsecured />,
  'insurance-umbrella': () => <level2.InsuranceUmbrella />,
  'ponzi-chain': () => <level2.PonziChain />,
  pyramid: () => <level2.PyramidScheme />,
  'fomo-chase': () => <level2.FomoChase />,
  'lifestyle-inflation': () => <level2.LifestyleInflation />,
  dashboard: () => <level2.Dashboard />,
  'score-meter': () => <level2.ScoreMeter />,
  'salary-deductions': () => <level2.SalaryDeductions />,
  'risk-return-curve': () => <level3.RiskReturnCurve />,
  'capacity-tolerance': () => <level3.CapacityVsTolerance />,
  'yield-curve': () => <level3.YieldCurve />,
  'price-yield-inverse': () => <level3.PriceYieldInverse />,
  'profit-waterfall': () => <level3.ProfitWaterfall />,
  'share-slice': () => <level3.ShareSlice />,
  'market-cap-ladder': () => <level3.MarketCapLadder />,
  'fee-drag-visual': () => <level3.FeeDragVisual />,
  'allocation-pie': () => <level3.AllocationPie />,
  'currency-erosion': () => <level3.CurrencyErosion />,
  'dividend-stream': () => <level3.DividendStream />,
  'property-cashflow': () => <level3.PropertyCashflow />,
  'time-horizon': () => <level3.TimeHorizon />,
  'passive-vs-active': () => <level3.PassiveVsActive />,
  'real-vs-nominal': () => <level3.RealVsNominal />,
  'gold-role': () => <level3.GoldRole />,
  'money-allocation': () => <level3.MoneyAllocation />,
  'tax-bracket': () => <level4.TaxBracket step={2} />,
  'tds-flow': () => <level4.TdsFlow />,
  'cover-ladder': () => <level4.CoverLadder step={3} />,
  'emi-split-early': () => <level4.EmiSplit />,
  'nps-annuity': () => <level4.NpsAnnuity />,
  'call-put': () => <level4.CallPut />,
  'rent-vs-buy': () => <level4.RentVsBuy />,
  'loan-amort': () => <level4.LoanAmort />,
  'deriv-payoff': () => <level4.DerivPayoff />,
  'currency-risk': () => <level4.CurrencyRisk />,
  'growth-vs-value': () => <level4.GrowthVsValue />,
  'corpus-ladder': () => <level4.CorpusLadder step={3} />,
}

export function Scene({ name, caption }: { name: SceneName; caption?: string }) {
  const Body = SCENES[name]
  return (
    <figure className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-ink-900/80 to-ink-950/60">
      <svg viewBox="0 0 400 220" className="w-full" role="img" aria-label={caption ?? name}>
        {typeof Body === 'function' ? <Body /> : Body}
      </svg>
      {caption && (
        <figcaption className="border-t border-white/5 px-4 py-2 text-center text-xs text-ink-400">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

export function SceneCard({ name, caption }: { name: SceneName; caption?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <Scene name={name} caption={caption} />
    </motion.div>
  )
}