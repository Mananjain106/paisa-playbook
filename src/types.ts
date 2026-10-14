/** The building blocks every chapter in the app is assembled from. */

export type Block =
  | { kind: 'p'; text: string }
  | { kind: 'h'; text: string }
  | {
      kind: 'callout'
      tone: 'insight' | 'warning' | 'tip' | 'india'
      title?: string
      text: string
    }
  | { kind: 'example'; title: string; text: string }
  | { kind: 'list'; ordered?: boolean; items: string[] }
  | { kind: 'table'; caption?: string; headers: string[]; rows: string[][] }
  | { kind: 'formula'; label: string; expr: string; note?: string }
  | { kind: 'scene'; name: SceneName; caption?: string }
  | { kind: 'sim'; name: SimName; caption?: string }
  | { kind: 'terms'; items: { term: string; meaning: string }[] }

/** Animated SVG scenes, drawn entirely in code. */
export type SceneName =
  | 'coins'
  | 'barter'
  | 'timeline'
  | 'rupee'
  | 'rupee-erode'
  | 'money-flow'
  | 'rbi-funnel'
  | 'bank-pyramid'
  | 'income-streams'
  | 'pie-needs-wants'
  | 'spend-leak'
  | 'ad-trap'
  | 'peer-circle'
  | 'budget-pie'
  | 'expense-bars'
  | 'goal-ladder'
  | 'safe-vs-risk'
  | 'interest-growth'
  | 'inflation-crocodile'
  | 'opportunity-fork'
  | 'upi-flow'
  | 'atm-machine'
  | 'payment-rail'
  | 'scam-hook'
  | 'phishing-hook'
  | 'shield'
  | 'balance-sheet'
  | 'emi-split'
  | 'emergency-ladder'
  | 'minpayment-trap'
  | 'secured-vs-unsecured'
  | 'insurance-umbrella'
  | 'ponzi-chain'
  | 'pyramid'
  | 'fomo-chase'
  | 'lifestyle-inflation'
  | 'dashboard'
  | 'score-meter'
  | 'salary-deductions'
  | 'risk-return-curve'
  | 'capacity-tolerance'
  | 'yield-curve'
  | 'price-yield-inverse'
  | 'profit-waterfall'
  | 'share-slice'
  | 'market-cap-ladder'
  | 'fee-drag-visual'
  | 'allocation-pie'
  | 'currency-erosion'
  | 'dividend-stream'
  | 'property-cashflow'
  | 'time-horizon'
  | 'passive-vs-active'
  | 'real-vs-nominal'
  | 'gold-role'
  | 'money-allocation'

/** Hands-on simulations. */
export type SimName =
  | 'compound'
  | 'budget'
  | 'networth'
  | 'market'
  | 'sheet'
  | 'rupee10'
  | 'scam-spotter'
  | 'emi'
  | 'salary-slip'
  | 'minpayment'
  | 'cover'
  | 'portfolio'
  | 'bond'
  | 'realreturn'
  | 'currency'
  | 'valuation'
  | 'feedrag'
  | 'cycle'

export type QuizOption = { text: string; correct?: boolean; why: string }

export type Question = {
  q: string
  options: QuizOption[]
}

export type Chapter = {
  id: string
  title: string
  /** One-line promise shown under the chapter title. */
  subtitle: string
  minutes: number
  blocks: Block[]
  quiz: Question[]
  /** Chapter-level takeaway shown at the end. */
  takeaway: string
}