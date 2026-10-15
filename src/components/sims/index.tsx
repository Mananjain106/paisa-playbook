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
const TaxLab = lazy(() => import('./TaxLab').then((m) => ({ default: m.TaxLab })))
const OptionsPayoffLab = lazy(() => import('./OptionsPayoffLab').then((m) => ({ default: m.OptionsPayoffLab })))
const ValuationLab = lazy(() => import('./ValuationLab').then((m) => ({ default: m.ValuationLab })))
const FeeDragLab = lazy(() => import('./FeeDragLab').then((m) => ({ default: m.FeeDragLab })))
const CycleLab = lazy(() => import('./CycleLab').then((m) => ({ default: m.CycleLab })))

// Level 5 labs are imported from one module per band, so a band's simulations
// load together only when a chapter from that band is opened.
const L5FirstSalarySplit = lazy(() => import('./l5').then((m) => ({ default: m.L5FirstSalarySplit })))
const L5NegotiationRounds = lazy(() => import('./l5').then((m) => ({ default: m.L5NegotiationRounds })))
const L5OfferCompare = lazy(() => import('./l5').then((m) => ({ default: m.L5OfferCompare })))
const L5CtcDecompose = lazy(() => import('./l5').then((m) => ({ default: m.L5CtcDecompose })))
const L5BenefitEvaluator = lazy(() => import('./l5-money').then((m) => ({ default: m.L5BenefitEvaluator })))
const L5PfLifecycle = lazy(() => import('./l5-money').then((m) => ({ default: m.L5PfLifecycle })))
const L5RegimePicker = lazy(() => import('./l5-money').then((m) => ({ default: m.L5RegimePicker })))
const L5MonthlyRoutine = lazy(() => import('./l5-money').then((m) => ({ default: m.L5MonthlyRoutine })))
const L5EmergencySizing = lazy(() => import('./l5-money').then((m) => ({ default: m.L5EmergencySizing })))
const L5SinkingPlanner = lazy(() => import('./l5-money').then((m) => ({ default: m.L5SinkingPlanner })))
const L5BudgetSystemPicker = lazy(() => import('./l5-money').then((m) => ({ default: m.L5BudgetSystemPicker })))
const L5ZeroBasedBuilder = lazy(() => import('./l5-money').then((m) => ({ default: m.L5ZeroBasedBuilder })))
const L5RatioStressTest = lazy(() => import('./l5-money').then((m) => ({ default: m.L5RatioStressTest })))
const L5CashflowTiming = lazy(() => import('./l5-money').then((m) => ({ default: m.L5CashflowTiming })))
const L5AutomationBlueprint = lazy(() => import('./l5-system').then((m) => ({ default: m.L5AutomationBlueprint })))
const L5SipAutomation = lazy(() => import('./l5-system').then((m) => ({ default: m.L5SipAutomation })))
const L5BillAutomationBoard = lazy(() => import('./l5-system').then((m) => ({ default: m.L5BillAutomationBoard })))
const L5AlertTuning = lazy(() => import('./l5-system').then((m) => ({ default: m.L5AlertTuning })))
const L5DashboardDesigner = lazy(() => import('./l5-system').then((m) => ({ default: m.L5DashboardDesigner })))
const L5PortfolioArchitect = lazy(() => import('./l5-invest').then((m) => ({ default: m.L5PortfolioArchitect })))
const L5AllocationDesigner = lazy(() => import('./l5-invest').then((m) => ({ default: m.L5AllocationDesigner })))
const L5OverlapChecker = lazy(() => import('./l5-invest').then((m) => ({ default: m.L5OverlapChecker })))
const L5RebalanceTrigger = lazy(() => import('./l5-invest').then((m) => ({ default: m.L5RebalanceTrigger })))
const L5GoalMapper = lazy(() => import('./l5-invest').then((m) => ({ default: m.L5GoalMapper })))
const L5ReitAnalyser = lazy(() => import('./l5-invest').then((m) => ({ default: m.L5ReitAnalyser })))
const L5InvitAnalyser = lazy(() => import('./l5-invest').then((m) => ({ default: m.L5InvitAnalyser })))
const L5GlobalDiversifier = lazy(() => import('./l5-invest').then((m) => ({ default: m.L5GlobalDiversifier })))
const L5EtfCostCheck = lazy(() => import('./l5-invest').then((m) => ({ default: m.L5EtfCostCheck })))
const L5AlternativesScreener = lazy(() => import('./l5-invest').then((m) => ({ default: m.L5AlternativesScreener })))
const L5PeWaterfall = lazy(() => import('./l5-retire').then((m) => ({ default: m.L5PeWaterfall })))
const L5VcPortfolio = lazy(() => import('./l5-retire').then((m) => ({ default: m.L5VcPortfolio })))
const L5LiquidityMap = lazy(() => import('./l5-retire').then((m) => ({ default: m.L5LiquidityMap })))
const L5TotalCostOfOwnership = lazy(() => import('./l5-retire').then((m) => ({ default: m.L5TotalCostOfOwnership })))
const L5TaxPlanner = lazy(() => import('./l5-retire').then((m) => ({ default: m.L5TaxPlanner })))
const L5RetirementProjector = lazy(() => import('./l5-retire').then((m) => ({ default: m.L5RetirementProjector })))
const L5IndependenceNumber = lazy(() => import('./l5-retire').then((m) => ({ default: m.L5IndependenceNumber })))
const L5FireStressTest = lazy(() => import('./l5-retire').then((m) => ({ default: m.L5FireStressTest })))
const L5SavingsRateLab = lazy(() => import('./l5-retire').then((m) => ({ default: m.L5SavingsRateLab })))
const L5PassiveIncomeAudit = lazy(() => import('./l5-retire').then((m) => ({ default: m.L5PassiveIncomeAudit })))
// Band three: the institutions a saver deals with, and the checks each one makes possible.
const L5JurisdictionFinder = lazy(() => import('./l5-inst').then((m) => ({ default: m.L5JurisdictionFinder })))
const L5RbiChecklist = lazy(() => import('./l5-inst').then((m) => ({ default: m.L5RbiChecklist })))
const L5SebiVerify = lazy(() => import('./l5-inst').then((m) => ({ default: m.L5SebiVerify })))
const L5InsurerVerify = lazy(() => import('./l5-inst').then((m) => ({ default: m.L5InsurerVerify })))
const L5PensionSetup = lazy(() => import('./l5-inst').then((m) => ({ default: m.L5PensionSetup })))
const L5BankPicker = lazy(() => import('./l5-inst').then((m) => ({ default: m.L5BankPicker })))
const L5NbfcCheck = lazy(() => import('./l5-inst').then((m) => ({ default: m.L5NbfcCheck })))
const L5InsurerScorecard = lazy(() => import('./l5-inst').then((m) => ({ default: m.L5InsurerScorecard })))
const L5AmcDiligence = lazy(() => import('./l5-inst').then((m) => ({ default: m.L5AmcDiligence })))
const L5ExchangeRole = lazy(() => import('./l5-inst').then((m) => ({ default: m.L5ExchangeRole })))
// Band three, batch 2: the market plumbing, the identity record, the safety nets and the paperwork.
const L5BrokerCompare = lazy(() => import('./l5-inst2').then((m) => ({ default: m.L5BrokerCompare })))
const L5DematServiceCheck = lazy(() => import('./l5-inst2').then((m) => ({ default: m.L5DematServiceCheck })))
const L5KycDoctor = lazy(() => import('./l5-inst2').then((m) => ({ default: m.L5KycDoctor })))
const L5AmlSimulator = lazy(() => import('./l5-inst2').then((m) => ({ default: m.L5AmlSimulator })))
const L5ProtectionLimits = lazy(() => import('./l5-inst2').then((m) => ({ default: m.L5ProtectionLimits })))
const L5ComplaintBuilder = lazy(() => import('./l5-inst2').then((m) => ({ default: m.L5ComplaintBuilder })))
const L5ConsumerCaseBuilder = lazy(() => import('./l5-inst2').then((m) => ({ default: m.L5ConsumerCaseBuilder })))
const L5ContractScanner = lazy(() => import('./l5-inst2').then((m) => ({ default: m.L5ContractScanner })))
const L5LoanAgreementAudit = lazy(() => import('./l5-inst2').then((m) => ({ default: m.L5LoanAgreementAudit })))
const L5PolicyReader = lazy(() => import('./l5-inst2').then((m) => ({ default: m.L5PolicyReader })))
const L5CardAgreementAudit = lazy(() => import('./l5-inst3').then((m) => ({ default: m.L5CardAgreementAudit })))
const L5BrokerAgreementAudit = lazy(() => import('./l5-inst3').then((m) => ({ default: m.L5BrokerAgreementAudit })))
const L5RentAgreementAudit = lazy(() => import('./l5-inst3').then((m) => ({ default: m.L5RentAgreementAudit })))
const L5HiddenCostHunt = lazy(() => import('./l5-inst3').then((m) => ({ default: m.L5HiddenCostHunt })))
const L5FeeNormaliser = lazy(() => import('./l5-inst3').then((m) => ({ default: m.L5FeeNormaliser })))
const L5PenaltyDispute = lazy(() => import('./l5-inst3').then((m) => ({ default: m.L5PenaltyDispute })))
const L5ClauseSpotter = lazy(() => import('./l5-inst3').then((m) => ({ default: m.L5ClauseSpotter })))
const L5RaiseNegotiation = lazy(() => import('./l5-inst3').then((m) => ({ default: m.L5RaiseNegotiation })))
const L5RentNegotiation = lazy(() => import('./l5-inst3').then((m) => ({ default: m.L5RentNegotiation })))
const L5LoanNegotiation = lazy(() => import('./l5-inst3').then((m) => ({ default: m.L5LoanNegotiation })))
const L5FreelanceRate = lazy(() => import('./l5-inst3').then((m) => ({ default: m.L5FreelanceRate })))

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

/**
 * Context handed to every lab. Most labs ignore it; the spreadsheet lab uses it
 * to pick the dataset and assignment that belong to the chapter it sits in.
 */
export type SimProps = { chapterId?: string }

type SimMeta = { title: string; blurb: string; C: (props: SimProps) => React.ReactElement }

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
    title: 'Spreadsheet lab',
    blurb: 'A working sheet, with this chapter\u2019s own data and assignment.',
    C: (props) => (
      <Suspense fallback={<SimLoading />}>
        <SheetLab key={props.chapterId ?? 'sandbox'} chapterId={props.chapterId} />
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
  tax: {
    title: 'Income tax regime lab',
    blurb: 'Edge your way through slabs, rebates and TDS to see what actually lands in your account.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <TaxLab />
      </Suspense>
    ),
  },
  'options-payoff': {
    title: 'Options payoff lab',
    blurb: 'Trace the breakeven and the capped upside/uncapped downside of calls and puts.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <OptionsPayoffLab />
      </Suspense>
    ),
  },
  'l5-first-salary-split': {
    title: 'First salary allocation lab',
    blurb: 'Allocate a real take-home figure and see what your split does to the buffer, the saving rate and the month.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5FirstSalarySplit />
      </Suspense>
    ),
  },
  'l5-negotiation-rounds': {
    title: 'Three-round negotiation lab',
    blurb: 'Negotiate inside a real band, with four kinds of justification that move the number differently.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5NegotiationRounds />
      </Suspense>
    ),
  },
  'l5-offer-compare': {
    title: 'Offer comparison lab',
    blurb: 'Price two offers over three years and find which assumption decides the winner.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5OfferCompare />
      </Suspense>
    ),
  },
  'l5-ctc-decompose': {
    title: 'CTC to take-home lab',
    blurb: 'Rebuild any CTC as gross, each statutory deduction, tax withheld and the monthly bank credit.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5CtcDecompose />
      </Suspense>
    ),
  },
  'l5-benefit-valuator': {
    title: 'Benefits valuation lab',
    blurb: 'Price a benefits line, then ask whether the same rupees would be better as cash.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5BenefitEvaluator />
      </Suspense>
    ),
  },
  'l5-pf-lifecycle': {
    title: 'Provident fund lifecycle lab',
    blurb: 'Run one UAN across a job change and see what transferring, withdrawing or abandoning costs.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5PfLifecycle />
      </Suspense>
    ),
  },
  'l5-regime-picker': {
    title: 'Tax regime picker',
    blurb: 'Compute both regimes from your own rent, 80C and home-loan interest, and find the crossover.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5RegimePicker />
      </Suspense>
    ),
  },
  'l5-monthly-routine': {
    title: 'Monthly routine lab',
    blurb: 'Place the recurring decisions of a month on dates and find the orderings that break.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5MonthlyRoutine />
      </Suspense>
    ),
  },
  'l5-emergency-sizing': {
    title: 'Emergency fund sizing lab',
    blurb: 'Size a buffer from obligations, income risk and dependants — not from a fixed six-month rule.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5EmergencySizing />
      </Suspense>
    ),
  },
  'l5-sinking-planner': {
    title: 'Sinking fund planner',
    blurb: 'Break annual bills into monthly transfers and see which months are overloaded.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5SinkingPlanner />
      </Suspense>
    ),
  },
  'l5-budget-system-picker': {
    title: 'Budgeting system picker',
    blurb: 'Three questions, three systems — and an honest note on what the winner cannot do.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5BudgetSystemPicker />
      </Suspense>
    ),
  },
  'l5-zero-based-builder': {
    title: 'Zero-based budget builder',
    blurb: 'Assign every rupee to a named job and check that the plan actually reaches zero.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5ZeroBasedBuilder />
      </Suspense>
    ),
  },
  'l5-ratio-stress-test': {
    title: '50/30/20 stress test',
    blurb: 'Put the percentage framework against a real city rent bill and see when it stops working.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5RatioStressTest />
      </Suspense>
    ),
  },
  'l5-cashflow-timing': {
    title: 'Cash-flow timing lab',
    blurb: 'Move dates instead of amounts and find the day a solvent month bounces a payment.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5CashflowTiming />
      </Suspense>
    ),
  },
  'l5-automation-blueprint': {
    title: 'Automation blueprint lab',
    blurb: 'Pick a rail for each transfer, then run a failure drill with the salary arriving late.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5AutomationBlueprint />
      </Suspense>
    ),
  },
  'l5-sip-automation': {
    title: 'Automated investment lab',
    blurb: 'Run a step-up instalment plan and price what a missed instalment actually costs.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5SipAutomation />
      </Suspense>
    ),
  },
  'l5-bill-automation-board': {
    title: 'Bill automation board',
    blurb: 'Decide what to automate and what to review, and audit the subscriptions you forgot.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5BillAutomationBoard />
      </Suspense>
    ),
  },
  'l5-alert-tuning': {
    title: 'Alert tuning lab',
    blurb: 'Tune one threshold against a month of debits and see what it catches and what it misses.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5AlertTuning />
      </Suspense>
    ),
  },
  'l5-dashboard-designer': {
    title: 'Dashboard designer',
    blurb: 'Choose up to six numbers and find out which of them would change a decision.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5DashboardDesigner />
      </Suspense>
    ),
  },
  'l5-portfolio-architect': {
    title: 'Portfolio architecture lab',
    blurb: 'Build from purpose and horizon, stress the mix, and write the policy that goes with it.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5PortfolioArchitect />
      </Suspense>
    ),
  },
  'l5-allocation-designer': {
    title: 'Asset allocation designer',
    blurb: 'Set target weights, watch them drift, and add a glide path towards the date.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5AllocationDesigner />
      </Suspense>
    ),
  },
  'l5-overlap-checker': {
    title: 'Overlap and concentration lab',
    blurb: 'Open every wrapper and see what your largest sector and company exposures really are.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5OverlapChecker />
      </Suspense>
    ),
  },
  'l5-rebalance-trigger': {
    title: 'Rebalancing rule lab',
    blurb: 'Compare a calendar rule with a threshold band, and price the tax each one creates.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5RebalanceTrigger />
      </Suspense>
    ),
  },
  'l5-goal-mapper': {
    title: 'Goal mapping lab',
    blurb: 'Give every goal a date, a mix and a contribution, and find the shortfall that remains.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5GoalMapper />
      </Suspense>
    ),
  },
  'l5-reit-analyser': {
    title: 'REIT analysis lab',
    blurb: 'Turn rent into a distribution, split it by tax treatment, and check occupancy and leverage.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5ReitAnalyser />
      </Suspense>
    ),
  },
  'l5-invit-analyser': {
    title: 'InvIT analysis lab',
    blurb: 'Weigh a concession cash flow against its end date, its counterparty and its leverage.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5InvitAnalyser />
      </Suspense>
    ),
  },
  'l5-global-diversifier': {
    title: 'International investing lab',
    blurb: 'Price a remittance after tax collected at source, and see the currency bet inside the return.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5GlobalDiversifier />
      </Suspense>
    ),
  },
  'l5-etf-cost-check': {
    title: 'ETF versus index fund lab',
    blurb: 'Cross the spread, the premium and the fees, and find the holding period that decides the winner.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5EtfCostCheck />
      </Suspense>
    ),
  },
  'l5-pe-waterfall': {
    title: 'Private equity waterfall lab',
    blurb: 'Draw down a commitment, pay both layers of fees, and split the carry.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5PeWaterfall />
      </Suspense>
    ),
  },
  'l5-vc-portfolio': {
    title: 'Venture portfolio lab',
    blurb: 'Size power-law bets, and watch the average and the middle disagree.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5VcPortfolio />
      </Suspense>
    ),
  },
  'l5-liquidity-map': {
    title: 'Liquidity map lab',
    blurb: 'Test which holdings are actually spendable when income stops.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5LiquidityMap />
      </Suspense>
    ),
  },
  'l5-total-cost-of-ownership': {
    title: 'Total cost of ownership lab',
    blurb: 'Add every layer of cost on one holding and convert it to rupees a year.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5TotalCostOfOwnership />
      </Suspense>
    ),
  },
  'l5-tax-planner': {
    title: 'Capital gains planning lab',
    blurb: 'Set off a loss, price a holding period, and plan the tax year.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5TaxPlanner />
      </Suspense>
    ),
  },
  'l5-retirement-projector': {
    title: 'Retirement projector',
    blurb: 'Replace a salary with streams that keep paying as prices rise.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5RetirementProjector />
      </Suspense>
    ),
  },
  'l5-independence-number': {
    title: 'Independence number lab',
    blurb: 'Turn a multiple of your spending into a target and a date.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5IndependenceNumber />
      </Suspense>
    ),
  },
  'l5-fire-stress-test': {
    title: 'FIRE stress test',
    blurb: 'Break a plan with a bad first decade, then repair it.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5FireStressTest />
      </Suspense>
    ),
  },
  'l5-savings-rate-lab': {
    title: 'Savings rate lab',
    blurb: 'Measure the rate honestly and see it move the funding date.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5SavingsRateLab />
      </Suspense>
    ),
  },
  'l5-passive-income-audit': {
    title: 'Passive income audit',
    blurb: 'Score each stream on effort, concentration and its tax head.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5PassiveIncomeAudit />
      </Suspense>
    ),
  },
  'l5-alternatives-screener': {
    title: 'Alternatives screener',
    blurb: 'Test access, lock-in, valuation and fee load before you look at a single return figure.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5AlternativesScreener />
      </Suspense>
    ),
  },
  'l5-jurisdiction-finder': {
    title: 'Regulator finder',
    blurb: 'Name the product, name its owner, and get the register, the route and the flag to watch.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5JurisdictionFinder />
      </Suspense>
    ),
  },
  'l5-rbi-checklist': {
    title: 'Depositor checklist',
    blurb: 'Spread deposits against the insurance limit, and test the payment and complaint rules.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5RbiChecklist />
      </Suspense>
    ),
  },
  'l5-sebi-verify': {
    title: 'Intermediary verification lab',
    blurb: 'Check a market intermediary against its register, and score the claims you have heard.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5SebiVerify />
      </Suspense>
    ),
  },
  'l5-insurer-verify': {
    title: 'Insurer and claim verification lab',
    blurb: 'Verify the seller, then test the claim timelines, the free look and the ombudsman route.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5InsurerVerify />
      </Suspense>
    ),
  },
  'l5-pension-setup': {
    title: 'Pension account lab',
    blurb: 'Fund a pension account, allocate it, and price the lump sum and annuity at the exit.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5PensionSetup />
      </Suspense>
    ),
  },
  'l5-bank-picker': {
    title: 'Bank comparison lab',
    blurb: 'Weigh the insurance limit, the free allowances and the penalties across four banks.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5BankPicker />
      </Suspense>
    ),
  },
  'l5-nbfc-check': {
    title: 'Non-bank lender check',
    blurb: 'Cost a non-bank loan against a bank loan, with the fee and the register check in place.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5NbfcCheck />
      </Suspense>
    ),
  },
  'l5-insurer-scorecard': {
    title: 'Insurer scorecard',
    blurb: 'Score insurers on solvency, claims, complaints and network rather than on advertising.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5InsurerScorecard />
      </Suspense>
    ),
  },
  'l5-amc-diligence': {
    title: 'Asset manager diligence lab',
    blurb: 'Read the manager\u2019s revenue, the fee drag and the record that travels with the scheme.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5AmcDiligence />
      </Suspense>
    ),
  },
  'l5-exchange-role': {
    title: 'Exchange settlement lab',
    blurb: 'See what settlement guarantees, what the protection fund covers, and what is yours alone.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5ExchangeRole />
      </Suspense>
    ),
  },
  'l5-broker-compare': {
    title: 'Broker cost comparison',
    blurb: 'Price a year of trading line by line, and see which charges no broker can change.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5BrokerCompare />
      </Suspense>
    ),
  },
  'l5-demat-service-check': {
    title: 'Demat account audit',
    blurb: 'Price the annual charges, test a pledge, and check what a transmission would need.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5DematServiceCheck />
      </Suspense>
    ),
  },
  'l5-kyc-doctor': {
    title: 'KYC diagnosis lab',
    blurb: 'Find which register holds the record, whether a refresh is due, and what gives a fraud call away.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5KycDoctor />
      </Suspense>
    ),
  },
  'l5-aml-simulator': {
    title: 'Monitoring simulator',
    blurb: 'Run a month of transactions through the thresholds and see what resolves a flag.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5AmlSimulator />
      </Suspense>
    ),
  },
  'l5-protection-limits': {
    title: 'Protection limits lab',
    blurb: 'Match a loss to the safety net that answers for it, and find the ceiling.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5ProtectionLimits />
      </Suspense>
    ),
  },
  'l5-complaint-builder': {
    title: 'Complaint escalation builder',
    blurb: 'Assemble the evidence, choose the rung, and see whether the window is open.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5ComplaintBuilder />
      </Suspense>
    ),
  },
  'l5-consumer-case-builder': {
    title: 'Consumer case builder',
    blurb: 'Pick the commission by value, check the limitation period, and list the relief.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5ConsumerCaseBuilder />
      </Suspense>
    ),
  },
  'l5-contract-scanner': {
    title: 'Contract clause scanner',
    blurb: 'Sort the eight clauses that move cost, risk and control, and mark what to negotiate.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5ContractScanner />
      </Suspense>
    ),
  },
  'l5-loan-agreement-audit': {
    title: 'Loan agreement audit',
    blurb: 'Check prepayment, penalty, reset and bundling clauses against the rules that govern them.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5LoanAgreementAudit />
      </Suspense>
    ),
  },
  'l5-policy-reader': {
    title: 'Policy wording reader',
    blurb: 'Reduce a claim by room limits, co-payment and waiting periods, then read the clocks.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5PolicyReader />
      </Suspense>
    ),
  },
  'l5-card-agreement-audit': {
    title: 'Cardholder terms audit',
    blurb: 'Price the interest-free period, the minimum due, a cash advance and a fraud liability window.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5CardAgreementAudit />
      </Suspense>
    ),
  },
  'l5-broker-agreement-audit': {
    title: 'Broking agreement audit',
    blurb: 'Weigh the authorities you grant a member against the protections that come with them.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5BrokerAgreementAudit />
      </Suspense>
    ),
  },
  'l5-rent-agreement-audit': {
    title: 'Tenancy terms audit',
    blurb: 'Deposit, escalation, lock-in and notice, priced as a whole before the rent is discussed.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5RentAgreementAudit />
      </Suspense>
    ),
  },
  'l5-hidden-cost-hunt': {
    title: 'Hidden cost hunt',
    blurb: 'Reconstruct the true cost of a product from the five layers under its headline price.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5HiddenCostHunt />
      </Suspense>
    ),
  },
  'l5-fee-normaliser': {
    title: 'Fee normaliser',
    blurb: 'Convert every one-off, annual and percentage fee into a single annual number.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5FeeNormaliser />
      </Suspense>
    ),
  },
  'l5-penalty-dispute': {
    title: 'Penalty and dispute clock',
    blurb: 'Separate the lawful part of a penalty from the part worth disputing, by product and by day.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5PenaltyDispute />
      </Suspense>
    ),
  },
  'l5-clause-spotter': {
    title: 'Clause spotter',
    blurb: 'Mark the clauses that move money, then price the asymmetry they create.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5ClauseSpotter />
      </Suspense>
    ),
  },
  'l5-raise-negotiation': {
    title: 'Raise negotiation',
    blurb: 'Fixed pay, variable pay, tax and the written agreement, in one frame.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5RaiseNegotiation />
      </Suspense>
    ),
  },
  'l5-rent-negotiation': {
    title: 'Rent negotiation',
    blurb: 'Trade deposit months, escalation and brokerage against the whole occupancy cost.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5RentNegotiation />
      </Suspense>
    ),
  },
  'l5-loan-negotiation': {
    title: 'Loan negotiation',
    blurb: 'Rank rate, tenure, fees and prepayment by the rupees each one actually saves.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5LoanNegotiation />
      </Suspense>
    ),
  },
  'l5-freelance-rate': {
    title: 'Freelance rate builder',
    blurb: 'Build a rate from costs, billable hours and tax, then protect it with scope and payment terms.',
    C: () => (
      <Suspense fallback={<SimLoading />}>
        <L5FreelanceRate />
      </Suspense>
    ),
  },
}