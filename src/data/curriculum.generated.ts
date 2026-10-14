// AUTO-GENERATED from .agents/workflow/Prompts.json — do not edit by hand.
// Regenerate with: npm run gen:curriculum

export type ChapterRef = {
  id: string
  slug: string
  title: string
  promptIndex: number
}

export type LevelRef = {
  level: number
  title: string
  blurb: string
  color: string
  chapters: ChapterRef[]
}

export const levels: LevelRef[] = [
  {
    "level": 1,
    "title": "Money Foundations",
    "blurb": "What money is, where it comes from, how to save it, and how to keep it safe.",
    "color": "#22c55e",
    "chapters": [
      {
        "id": "l1-001",
        "slug": "what-is-money",
        "title": "What Is Money",
        "promptIndex": 2
      },
      {
        "id": "l1-002",
        "slug": "history-of-money",
        "title": "History Of Money",
        "promptIndex": 3
      },
      {
        "id": "l1-003",
        "slug": "barter-system",
        "title": "Barter System",
        "promptIndex": 4
      },
      {
        "id": "l1-004",
        "slug": "currency",
        "title": "Currency",
        "promptIndex": 5
      },
      {
        "id": "l1-005",
        "slug": "indian-rupee",
        "title": "Indian Rupee",
        "promptIndex": 6
      },
      {
        "id": "l1-006",
        "slug": "purchasing-power",
        "title": "Purchasing Power",
        "promptIndex": 7
      },
      {
        "id": "l1-007",
        "slug": "how-money-moves-through-the-economy",
        "title": "How Money Moves Through The Economy",
        "promptIndex": 8
      },
      {
        "id": "l1-008",
        "slug": "rbi",
        "title": "RBI",
        "promptIndex": 9
      },
      {
        "id": "l1-009",
        "slug": "banks",
        "title": "Banks",
        "promptIndex": 10
      },
      {
        "id": "l1-010",
        "slug": "government-and-businesses",
        "title": "Government And Businesses",
        "promptIndex": 11
      },
      {
        "id": "l1-011",
        "slug": "earning-money",
        "title": "Earning Money",
        "promptIndex": 12
      },
      {
        "id": "l1-012",
        "slug": "salary",
        "title": "Salary",
        "promptIndex": 13
      },
      {
        "id": "l1-013",
        "slug": "wages",
        "title": "Wages",
        "promptIndex": 14
      },
      {
        "id": "l1-014",
        "slug": "business-income",
        "title": "Business Income",
        "promptIndex": 15
      },
      {
        "id": "l1-015",
        "slug": "freelance-income",
        "title": "Freelance Income",
        "promptIndex": 16
      },
      {
        "id": "l1-016",
        "slug": "active-vs-passive-income",
        "title": "Active Vs Passive Income",
        "promptIndex": 17
      },
      {
        "id": "l1-017",
        "slug": "needs-vs-wants",
        "title": "Needs Vs Wants",
        "promptIndex": 18
      },
      {
        "id": "l1-018",
        "slug": "necessities-vs-luxuries",
        "title": "Necessities Vs Luxuries",
        "promptIndex": 19
      },
      {
        "id": "l1-019",
        "slug": "impulse-buying",
        "title": "Impulse Buying",
        "promptIndex": 20
      },
      {
        "id": "l1-020",
        "slug": "advertising-psychology",
        "title": "Advertising Psychology",
        "promptIndex": 21
      },
      {
        "id": "l1-021",
        "slug": "peer-pressure-and-money",
        "title": "Peer Pressure And Money",
        "promptIndex": 22
      },
      {
        "id": "l1-022",
        "slug": "budgeting-basics",
        "title": "Budgeting Basics",
        "promptIndex": 23
      },
      {
        "id": "l1-023",
        "slug": "income-vs-expenses",
        "title": "Income Vs Expenses",
        "promptIndex": 24
      },
      {
        "id": "l1-024",
        "slug": "fixed-vs-variable-expenses",
        "title": "Fixed Vs Variable Expenses",
        "promptIndex": 25
      },
      {
        "id": "l1-025",
        "slug": "saving",
        "title": "Saving",
        "promptIndex": 26
      },
      {
        "id": "l1-026",
        "slug": "savings-goals",
        "title": "Savings Goals",
        "promptIndex": 27
      },
      {
        "id": "l1-027",
        "slug": "bank-accounts",
        "title": "Bank Accounts",
        "promptIndex": 28
      },
      {
        "id": "l1-028",
        "slug": "savings-accounts",
        "title": "Savings Accounts",
        "promptIndex": 29
      },
      {
        "id": "l1-029",
        "slug": "current-accounts",
        "title": "Current Accounts",
        "promptIndex": 30
      },
      {
        "id": "l1-030",
        "slug": "fd",
        "title": "FD",
        "promptIndex": 31
      },
      {
        "id": "l1-031",
        "slug": "rd",
        "title": "RD",
        "promptIndex": 32
      },
      {
        "id": "l1-032",
        "slug": "interest",
        "title": "Interest",
        "promptIndex": 33
      },
      {
        "id": "l1-033",
        "slug": "simple-interest",
        "title": "Simple Interest",
        "promptIndex": 34
      },
      {
        "id": "l1-034",
        "slug": "compound-interest",
        "title": "Compound Interest",
        "promptIndex": 35
      },
      {
        "id": "l1-035",
        "slug": "inflation",
        "title": "Inflation",
        "promptIndex": 36
      },
      {
        "id": "l1-036",
        "slug": "opportunity-cost",
        "title": "Opportunity Cost",
        "promptIndex": 37
      },
      {
        "id": "l1-037",
        "slug": "financial-goals",
        "title": "Financial Goals",
        "promptIndex": 38
      },
      {
        "id": "l1-038",
        "slug": "short-term-vs-medium-term-vs-long-term-goals",
        "title": "Short-Term Vs Medium-Term Vs Long-Term Goals",
        "promptIndex": 39
      },
      {
        "id": "l1-039",
        "slug": "upi",
        "title": "UPI",
        "promptIndex": 40
      },
      {
        "id": "l1-040",
        "slug": "digital-payments",
        "title": "Digital Payments",
        "promptIndex": 41
      },
      {
        "id": "l1-041",
        "slug": "debit-cards",
        "title": "Debit Cards",
        "promptIndex": 42
      },
      {
        "id": "l1-042",
        "slug": "atm",
        "title": "ATM",
        "promptIndex": 43
      },
      {
        "id": "l1-043",
        "slug": "neft",
        "title": "NEFT",
        "promptIndex": 44
      },
      {
        "id": "l1-044",
        "slug": "rtgs",
        "title": "RTGS",
        "promptIndex": 45
      },
      {
        "id": "l1-045",
        "slug": "imps",
        "title": "IMPS",
        "promptIndex": 46
      },
      {
        "id": "l1-046",
        "slug": "bank-statements",
        "title": "Bank Statements",
        "promptIndex": 47
      },
      {
        "id": "l1-047",
        "slug": "receipts-and-financial-records",
        "title": "Receipts And Financial Records",
        "promptIndex": 48
      },
      {
        "id": "l1-048",
        "slug": "basic-financial-vocabulary",
        "title": "Basic Financial Vocabulary",
        "promptIndex": 49
      },
      {
        "id": "l1-049",
        "slug": "financial-habits",
        "title": "Financial Habits",
        "promptIndex": 50
      },
      {
        "id": "l1-050",
        "slug": "personal-responsibility-with-money",
        "title": "Personal Responsibility With Money",
        "promptIndex": 51
      },
      {
        "id": "l1-051",
        "slug": "financial-scams",
        "title": "Financial Scams",
        "promptIndex": 52
      },
      {
        "id": "l1-052",
        "slug": "otp-scams",
        "title": "OTP Scams",
        "promptIndex": 53
      },
      {
        "id": "l1-053",
        "slug": "phishing",
        "title": "Phishing",
        "promptIndex": 54
      },
      {
        "id": "l1-054",
        "slug": "fake-customer-care",
        "title": "Fake Customer Care",
        "promptIndex": 55
      },
      {
        "id": "l1-055",
        "slug": "upi-scams",
        "title": "UPI Scams",
        "promptIndex": 56
      },
      {
        "id": "l1-056",
        "slug": "basic-cybersecurity",
        "title": "Basic Cybersecurity",
        "promptIndex": 57
      },
      {
        "id": "l1-057",
        "slug": "creating-a-basic-expense-tracker",
        "title": "Creating A Basic Expense Tracker",
        "promptIndex": 58
      },
      {
        "id": "l1-058",
        "slug": "creating-a-basic-monthly-budget",
        "title": "Creating A Basic Monthly Budget",
        "promptIndex": 59
      },
      {
        "id": "l1-059",
        "slug": "financial-trick-pay-yourself-first",
        "title": "Financial Trick: Pay Yourself First",
        "promptIndex": 60
      },
      {
        "id": "l1-060",
        "slug": "financial-trick-24-hour-rule-for-unnecessary-purchases",
        "title": "Financial Trick: 24-Hour Rule For Unnecessary Purchases",
        "promptIndex": 61
      },
      {
        "id": "l1-061",
        "slug": "financial-trick-track-every-rupee-for-one-month",
        "title": "Financial Trick: Track Every Rupee For One Month",
        "promptIndex": 62
      },
      {
        "id": "l1-062",
        "slug": "financial-trick-separate-needs-from-wants-before-purchasing",
        "title": "Financial Trick: Separate Needs From Wants Before Purchasing",
        "promptIndex": 63
      },
      {
        "id": "l1-063",
        "slug": "financial-trick-always-know-where-your-money-went",
        "title": "Financial Trick: Always Know Where Your Money Went",
        "promptIndex": 64
      },
      {
        "id": "l1-064",
        "slug": "final-project-managing-a-hypothetical-10",
        "title": "Final Project: Managing A Hypothetical ₹10",
        "promptIndex": 65
      }
    ]
  },
  {
    "level": 2,
    "title": "Your Money Machine",
    "blurb": "Track your income, build a net worth, and grow a real emergency fund.",
    "color": "#0ea5e9",
    "chapters": [
      {
        "id": "l2-001",
        "slug": "personal-balance-sheet",
        "title": "Personal Balance Sheet",
        "promptIndex": 66
      },
      {
        "id": "l2-002",
        "slug": "assets",
        "title": "Assets",
        "promptIndex": 67
      },
      {
        "id": "l2-003",
        "slug": "liabilities",
        "title": "Liabilities",
        "promptIndex": 68
      },
      {
        "id": "l2-004",
        "slug": "net-worth",
        "title": "Net Worth",
        "promptIndex": 69
      },
      {
        "id": "l2-005",
        "slug": "income-sources",
        "title": "Income Sources",
        "promptIndex": 70
      },
      {
        "id": "l2-006",
        "slug": "salary-structure",
        "title": "Salary Structure",
        "promptIndex": 71
      },
      {
        "id": "l2-007",
        "slug": "ctc-vs-gross-salary-vs-take-home-salary",
        "title": "CTC Vs Gross Salary Vs Take-Home Salary",
        "promptIndex": 72
      },
      {
        "id": "l2-008",
        "slug": "salary-slips",
        "title": "Salary Slips",
        "promptIndex": 73
      },
      {
        "id": "l2-009",
        "slug": "deductions",
        "title": "Deductions",
        "promptIndex": 74
      },
      {
        "id": "l2-010",
        "slug": "pf",
        "title": "PF",
        "promptIndex": 75
      },
      {
        "id": "l2-011",
        "slug": "tds",
        "title": "TDS",
        "promptIndex": 76
      },
      {
        "id": "l2-012",
        "slug": "professional-tax",
        "title": "Professional Tax",
        "promptIndex": 77
      },
      {
        "id": "l2-013",
        "slug": "emergency-funds",
        "title": "Emergency Funds",
        "promptIndex": 78
      },
      {
        "id": "l2-014",
        "slug": "safety-net-accounts",
        "title": "Safety-Net Accounts",
        "promptIndex": 79
      },
      {
        "id": "l2-015",
        "slug": "calculating-emergency-fund-requirements",
        "title": "Calculating Emergency-Fund Requirements",
        "promptIndex": 80
      },
      {
        "id": "l2-016",
        "slug": "3-month-vs-6-month-vs-larger-emergency-reserves",
        "title": "3-Month Vs 6-Month Vs Larger Emergency Reserves",
        "promptIndex": 81
      },
      {
        "id": "l2-017",
        "slug": "where-emergency-money-should-be-kept",
        "title": "Where Emergency Money Should Be Kept",
        "promptIndex": 82
      },
      {
        "id": "l2-018",
        "slug": "liquidity-vs-returns",
        "title": "Liquidity Vs Returns",
        "promptIndex": 83
      },
      {
        "id": "l2-019",
        "slug": "sinking-funds",
        "title": "Sinking Funds",
        "promptIndex": 84
      },
      {
        "id": "l2-020",
        "slug": "goal-based-savings",
        "title": "Goal-Based Savings",
        "promptIndex": 85
      },
      {
        "id": "l2-021",
        "slug": "banking-products",
        "title": "Banking Products",
        "promptIndex": 86
      },
      {
        "id": "l2-022",
        "slug": "debit-cards",
        "title": "Debit Cards",
        "promptIndex": 87
      },
      {
        "id": "l2-023",
        "slug": "credit-cards",
        "title": "Credit Cards",
        "promptIndex": 88
      },
      {
        "id": "l2-024",
        "slug": "credit-limits",
        "title": "Credit Limits",
        "promptIndex": 89
      },
      {
        "id": "l2-025",
        "slug": "billing-cycles",
        "title": "Billing Cycles",
        "promptIndex": 90
      },
      {
        "id": "l2-026",
        "slug": "due-dates",
        "title": "Due Dates",
        "promptIndex": 91
      },
      {
        "id": "l2-027",
        "slug": "minimum-payment",
        "title": "Minimum Payment",
        "promptIndex": 92
      },
      {
        "id": "l2-028",
        "slug": "interest",
        "title": "Interest",
        "promptIndex": 93
      },
      {
        "id": "l2-029",
        "slug": "late-fees",
        "title": "Late Fees",
        "promptIndex": 94
      },
      {
        "id": "l2-030",
        "slug": "rewards-and-cashback",
        "title": "Rewards And Cashback",
        "promptIndex": 95
      },
      {
        "id": "l2-031",
        "slug": "credit-utilization",
        "title": "Credit Utilization",
        "promptIndex": 96
      },
      {
        "id": "l2-032",
        "slug": "credit-scores",
        "title": "Credit Scores",
        "promptIndex": 97
      },
      {
        "id": "l2-033",
        "slug": "credit-history",
        "title": "Credit History",
        "promptIndex": 98
      },
      {
        "id": "l2-034",
        "slug": "loans",
        "title": "Loans",
        "promptIndex": 99
      },
      {
        "id": "l2-035",
        "slug": "principal",
        "title": "Principal",
        "promptIndex": 100
      },
      {
        "id": "l2-036",
        "slug": "tenure",
        "title": "Tenure",
        "promptIndex": 101
      },
      {
        "id": "l2-037",
        "slug": "emi",
        "title": "EMI",
        "promptIndex": 102
      },
      {
        "id": "l2-038",
        "slug": "processing-fees",
        "title": "Processing Fees",
        "promptIndex": 103
      },
      {
        "id": "l2-039",
        "slug": "prepayment",
        "title": "Prepayment",
        "promptIndex": 104
      },
      {
        "id": "l2-040",
        "slug": "foreclosure",
        "title": "Foreclosure",
        "promptIndex": 105
      },
      {
        "id": "l2-041",
        "slug": "default",
        "title": "Default",
        "promptIndex": 106
      },
      {
        "id": "l2-042",
        "slug": "secured-vs-unsecured-loans",
        "title": "Secured Vs Unsecured Loans",
        "promptIndex": 107
      },
      {
        "id": "l2-043",
        "slug": "good-debt-vs-bad-debt",
        "title": "Good Debt Vs Bad Debt",
        "promptIndex": 108
      },
      {
        "id": "l2-044",
        "slug": "consumer-loans",
        "title": "Consumer Loans",
        "promptIndex": 109
      },
      {
        "id": "l2-045",
        "slug": "bnpl",
        "title": "BNPL",
        "promptIndex": 110
      },
      {
        "id": "l2-046",
        "slug": "vehicle-loans",
        "title": "Vehicle Loans",
        "promptIndex": 111
      },
      {
        "id": "l2-047",
        "slug": "education-loans",
        "title": "Education Loans",
        "promptIndex": 112
      },
      {
        "id": "l2-048",
        "slug": "home-loans",
        "title": "Home Loans",
        "promptIndex": 113
      },
      {
        "id": "l2-049",
        "slug": "emi-calculations",
        "title": "EMI Calculations",
        "promptIndex": 114
      },
      {
        "id": "l2-050",
        "slug": "total-cost-of-borrowing",
        "title": "Total Cost Of Borrowing",
        "promptIndex": 115
      },
      {
        "id": "l2-051",
        "slug": "insurance-fundamentals",
        "title": "Insurance Fundamentals",
        "promptIndex": 116
      },
      {
        "id": "l2-052",
        "slug": "health-insurance",
        "title": "Health Insurance",
        "promptIndex": 117
      },
      {
        "id": "l2-053",
        "slug": "life-insurance",
        "title": "Life Insurance",
        "promptIndex": 118
      },
      {
        "id": "l2-054",
        "slug": "motor-insurance",
        "title": "Motor Insurance",
        "promptIndex": 119
      },
      {
        "id": "l2-055",
        "slug": "property-insurance",
        "title": "Property Insurance",
        "promptIndex": 120
      },
      {
        "id": "l2-056",
        "slug": "insurance-premium",
        "title": "Insurance Premium",
        "promptIndex": 121
      },
      {
        "id": "l2-057",
        "slug": "sum-insured",
        "title": "Sum Insured",
        "promptIndex": 122
      },
      {
        "id": "l2-058",
        "slug": "deductibles",
        "title": "Deductibles",
        "promptIndex": 123
      },
      {
        "id": "l2-059",
        "slug": "exclusions",
        "title": "Exclusions",
        "promptIndex": 124
      },
      {
        "id": "l2-060",
        "slug": "claims",
        "title": "Claims",
        "promptIndex": 125
      },
      {
        "id": "l2-061",
        "slug": "financial-fraud",
        "title": "Financial Fraud",
        "promptIndex": 126
      },
      {
        "id": "l2-062",
        "slug": "ponzi-schemes",
        "title": "Ponzi Schemes",
        "promptIndex": 127
      },
      {
        "id": "l2-063",
        "slug": "pyramid-schemes",
        "title": "Pyramid Schemes",
        "promptIndex": 128
      },
      {
        "id": "l2-064",
        "slug": "fake-investment-schemes",
        "title": "Fake Investment Schemes",
        "promptIndex": 129
      },
      {
        "id": "l2-065",
        "slug": "fake-loan-apps",
        "title": "Fake Loan Apps",
        "promptIndex": 130
      },
      {
        "id": "l2-066",
        "slug": "identity-theft",
        "title": "Identity Theft",
        "promptIndex": 131
      },
      {
        "id": "l2-067",
        "slug": "sim-swap-scams",
        "title": "SIM-Swap Scams",
        "promptIndex": 132
      },
      {
        "id": "l2-068",
        "slug": "financial-psychology",
        "title": "Financial Psychology",
        "promptIndex": 133
      },
      {
        "id": "l2-069",
        "slug": "fomo",
        "title": "FOMO",
        "promptIndex": 134
      },
      {
        "id": "l2-070",
        "slug": "herd-mentality",
        "title": "Herd Mentality",
        "promptIndex": 135
      },
      {
        "id": "l2-071",
        "slug": "loss-aversion",
        "title": "Loss Aversion",
        "promptIndex": 136
      },
      {
        "id": "l2-072",
        "slug": "confirmation-bias",
        "title": "Confirmation Bias",
        "promptIndex": 137
      },
      {
        "id": "l2-073",
        "slug": "instant-gratification",
        "title": "Instant Gratification",
        "promptIndex": 138
      },
      {
        "id": "l2-074",
        "slug": "lifestyle-inflation",
        "title": "Lifestyle Inflation",
        "promptIndex": 139
      },
      {
        "id": "l2-075",
        "slug": "financial-trick-maintain-a-separate-emergency-fund-account",
        "title": "Financial Trick: Maintain A Separate Emergency-Fund Account",
        "promptIndex": 140
      },
      {
        "id": "l2-076",
        "slug": "financial-trick-never-treat-credit-card-limit-as-income",
        "title": "Financial Trick: Never Treat Credit-Card Limit As Income",
        "promptIndex": 141
      },
      {
        "id": "l2-077",
        "slug": "financial-trick-compare-total-loan-cost-rather-than-emi-alon",
        "title": "Financial Trick: Compare Total Loan Cost Rather Than EMI Alone",
        "promptIndex": 142
      },
      {
        "id": "l2-078",
        "slug": "financial-trick-automate-savings",
        "title": "Financial Trick: Automate Savings",
        "promptIndex": 143
      },
      {
        "id": "l2-079",
        "slug": "financial-trick-maintain-a-subscription-audit",
        "title": "Financial Trick: Maintain A Subscription Audit",
        "promptIndex": 144
      },
      {
        "id": "l2-080",
        "slug": "financial-trick-keep-financial-documents-organized",
        "title": "Financial Trick: Keep Financial Documents Organized",
        "promptIndex": 145
      },
      {
        "id": "l2-081",
        "slug": "build-a-personal-monthly-financial-dashboard",
        "title": "Build A Personal Monthly Financial Dashboard",
        "promptIndex": 146
      }
    ]
  },
  {
    "level": 3,
    "title": "The Investing World",
    "blurb": "Stocks, mutual funds, bonds, market cycles, and building your first portfolio.",
    "color": "#a855f7",
    "chapters": [
      {
        "id": "l3-001",
        "slug": "saving-vs-investing",
        "title": "Saving Vs Investing",
        "promptIndex": 147
      },
      {
        "id": "l3-002",
        "slug": "risk-vs-return",
        "title": "Risk Vs Return",
        "promptIndex": 148
      },
      {
        "id": "l3-003",
        "slug": "risk-capacity",
        "title": "Risk Capacity",
        "promptIndex": 149
      },
      {
        "id": "l3-004",
        "slug": "risk-tolerance",
        "title": "Risk Tolerance",
        "promptIndex": 150
      },
      {
        "id": "l3-005",
        "slug": "liquidity",
        "title": "Liquidity",
        "promptIndex": 151
      },
      {
        "id": "l3-006",
        "slug": "diversification",
        "title": "Diversification",
        "promptIndex": 152
      },
      {
        "id": "l3-007",
        "slug": "asset-classes",
        "title": "Asset Classes",
        "promptIndex": 153
      },
      {
        "id": "l3-008",
        "slug": "fixed-deposits",
        "title": "Fixed Deposits",
        "promptIndex": 154
      },
      {
        "id": "l3-009",
        "slug": "recurring-deposits",
        "title": "Recurring Deposits",
        "promptIndex": 155
      },
      {
        "id": "l3-010",
        "slug": "government-securities",
        "title": "Government Securities",
        "promptIndex": 156
      },
      {
        "id": "l3-011",
        "slug": "treasury-bills",
        "title": "Treasury Bills",
        "promptIndex": 157
      },
      {
        "id": "l3-012",
        "slug": "bonds",
        "title": "Bonds",
        "promptIndex": 158
      },
      {
        "id": "l3-013",
        "slug": "corporate-bonds",
        "title": "Corporate Bonds",
        "promptIndex": 159
      },
      {
        "id": "l3-014",
        "slug": "bond-terminology",
        "title": "Bond Terminology",
        "promptIndex": 160
      },
      {
        "id": "l3-015",
        "slug": "coupon",
        "title": "Coupon",
        "promptIndex": 161
      },
      {
        "id": "l3-016",
        "slug": "face-value",
        "title": "Face Value",
        "promptIndex": 162
      },
      {
        "id": "l3-017",
        "slug": "maturity",
        "title": "Maturity",
        "promptIndex": 163
      },
      {
        "id": "l3-018",
        "slug": "yield",
        "title": "Yield",
        "promptIndex": 164
      },
      {
        "id": "l3-019",
        "slug": "interest-rate-risk",
        "title": "Interest-Rate Risk",
        "promptIndex": 165
      },
      {
        "id": "l3-020",
        "slug": "credit-risk",
        "title": "Credit Risk",
        "promptIndex": 166
      },
      {
        "id": "l3-021",
        "slug": "stocks",
        "title": "Stocks",
        "promptIndex": 167
      },
      {
        "id": "l3-022",
        "slug": "shares",
        "title": "Shares",
        "promptIndex": 168
      },
      {
        "id": "l3-023",
        "slug": "equity-ownership",
        "title": "Equity Ownership",
        "promptIndex": 169
      },
      {
        "id": "l3-024",
        "slug": "dividends",
        "title": "Dividends",
        "promptIndex": 170
      },
      {
        "id": "l3-025",
        "slug": "capital-gains",
        "title": "Capital Gains",
        "promptIndex": 171
      },
      {
        "id": "l3-026",
        "slug": "stock-exchanges",
        "title": "Stock Exchanges",
        "promptIndex": 172
      },
      {
        "id": "l3-027",
        "slug": "nse",
        "title": "NSE",
        "promptIndex": 173
      },
      {
        "id": "l3-028",
        "slug": "bse",
        "title": "BSE",
        "promptIndex": 174
      },
      {
        "id": "l3-029",
        "slug": "brokers",
        "title": "Brokers",
        "promptIndex": 175
      },
      {
        "id": "l3-030",
        "slug": "demat-accounts",
        "title": "Demat Accounts",
        "promptIndex": 176
      },
      {
        "id": "l3-031",
        "slug": "trading-accounts",
        "title": "Trading Accounts",
        "promptIndex": 177
      },
      {
        "id": "l3-032",
        "slug": "bid-and-ask",
        "title": "Bid And Ask",
        "promptIndex": 178
      },
      {
        "id": "l3-033",
        "slug": "market-orders",
        "title": "Market Orders",
        "promptIndex": 179
      },
      {
        "id": "l3-034",
        "slug": "limit-orders",
        "title": "Limit Orders",
        "promptIndex": 180
      },
      {
        "id": "l3-035",
        "slug": "settlement",
        "title": "Settlement",
        "promptIndex": 181
      },
      {
        "id": "l3-036",
        "slug": "market-capitalization",
        "title": "Market Capitalization",
        "promptIndex": 182
      },
      {
        "id": "l3-037",
        "slug": "large-cap-mid-cap-small-cap-concepts",
        "title": "Large-Cap/Mid-Cap/Small-Cap Concepts",
        "promptIndex": 183
      },
      {
        "id": "l3-038",
        "slug": "company-revenue",
        "title": "Company Revenue",
        "promptIndex": 184
      },
      {
        "id": "l3-039",
        "slug": "expenses",
        "title": "Expenses",
        "promptIndex": 185
      },
      {
        "id": "l3-040",
        "slug": "profit",
        "title": "Profit",
        "promptIndex": 186
      },
      {
        "id": "l3-041",
        "slug": "assets",
        "title": "Assets",
        "promptIndex": 187
      },
      {
        "id": "l3-042",
        "slug": "liabilities",
        "title": "Liabilities",
        "promptIndex": 188
      },
      {
        "id": "l3-043",
        "slug": "cash-flow",
        "title": "Cash Flow",
        "promptIndex": 189
      },
      {
        "id": "l3-044",
        "slug": "basic-financial-statements",
        "title": "Basic Financial Statements",
        "promptIndex": 190
      },
      {
        "id": "l3-045",
        "slug": "eps",
        "title": "EPS",
        "promptIndex": 191
      },
      {
        "id": "l3-046",
        "slug": "p-e",
        "title": "P/E",
        "promptIndex": 192
      },
      {
        "id": "l3-047",
        "slug": "p-b",
        "title": "P/B",
        "promptIndex": 193
      },
      {
        "id": "l3-048",
        "slug": "roe",
        "title": "ROE",
        "promptIndex": 194
      },
      {
        "id": "l3-049",
        "slug": "debt-to-equity",
        "title": "Debt-To-Equity",
        "promptIndex": 195
      },
      {
        "id": "l3-050",
        "slug": "profit-margins",
        "title": "Profit Margins",
        "promptIndex": 196
      },
      {
        "id": "l3-051",
        "slug": "mutual-funds",
        "title": "Mutual Funds",
        "promptIndex": 197
      },
      {
        "id": "l3-052",
        "slug": "amc",
        "title": "AMC",
        "promptIndex": 198
      },
      {
        "id": "l3-053",
        "slug": "nav",
        "title": "NAV",
        "promptIndex": 199
      },
      {
        "id": "l3-054",
        "slug": "fund-manager",
        "title": "Fund Manager",
        "promptIndex": 200
      },
      {
        "id": "l3-055",
        "slug": "equity-funds",
        "title": "Equity Funds",
        "promptIndex": 201
      },
      {
        "id": "l3-056",
        "slug": "debt-funds",
        "title": "Debt Funds",
        "promptIndex": 202
      },
      {
        "id": "l3-057",
        "slug": "hybrid-funds",
        "title": "Hybrid Funds",
        "promptIndex": 203
      },
      {
        "id": "l3-058",
        "slug": "expense-ratios",
        "title": "Expense Ratios",
        "promptIndex": 204
      },
      {
        "id": "l3-059",
        "slug": "sips",
        "title": "SIPs",
        "promptIndex": 205
      },
      {
        "id": "l3-060",
        "slug": "index-funds",
        "title": "Index Funds",
        "promptIndex": 206
      },
      {
        "id": "l3-061",
        "slug": "etfs",
        "title": "ETFs",
        "promptIndex": 207
      },
      {
        "id": "l3-062",
        "slug": "nifty",
        "title": "Nifty",
        "promptIndex": 208
      },
      {
        "id": "l3-063",
        "slug": "sensex",
        "title": "Sensex",
        "promptIndex": 209
      },
      {
        "id": "l3-064",
        "slug": "passive-investing",
        "title": "Passive Investing",
        "promptIndex": 210
      },
      {
        "id": "l3-065",
        "slug": "active-investing",
        "title": "Active Investing",
        "promptIndex": 211
      },
      {
        "id": "l3-066",
        "slug": "asset-allocation",
        "title": "Asset Allocation",
        "promptIndex": 212
      },
      {
        "id": "l3-067",
        "slug": "gold",
        "title": "Gold",
        "promptIndex": 213
      },
      {
        "id": "l3-068",
        "slug": "physical-gold",
        "title": "Physical Gold",
        "promptIndex": 214
      },
      {
        "id": "l3-069",
        "slug": "gold-etfs",
        "title": "Gold ETFs",
        "promptIndex": 215
      },
      {
        "id": "l3-070",
        "slug": "commodities",
        "title": "Commodities",
        "promptIndex": 216
      },
      {
        "id": "l3-071",
        "slug": "silver",
        "title": "Silver",
        "promptIndex": 217
      },
      {
        "id": "l3-072",
        "slug": "commodity-markets",
        "title": "Commodity Markets",
        "promptIndex": 218
      },
      {
        "id": "l3-073",
        "slug": "real-estate",
        "title": "Real Estate",
        "promptIndex": 219
      },
      {
        "id": "l3-074",
        "slug": "land",
        "title": "Land",
        "promptIndex": 220
      },
      {
        "id": "l3-075",
        "slug": "apartments",
        "title": "Apartments",
        "promptIndex": 221
      },
      {
        "id": "l3-076",
        "slug": "rental-yield",
        "title": "Rental Yield",
        "promptIndex": 222
      },
      {
        "id": "l3-077",
        "slug": "capital-appreciation",
        "title": "Capital Appreciation",
        "promptIndex": 223
      },
      {
        "id": "l3-078",
        "slug": "property-taxes",
        "title": "Property Taxes",
        "promptIndex": 224
      },
      {
        "id": "l3-079",
        "slug": "stamp-duty",
        "title": "Stamp Duty",
        "promptIndex": 225
      },
      {
        "id": "l3-080",
        "slug": "registration-costs",
        "title": "Registration Costs",
        "promptIndex": 226
      },
      {
        "id": "l3-081",
        "slug": "maintenance-costs",
        "title": "Maintenance Costs",
        "promptIndex": 227
      },
      {
        "id": "l3-082",
        "slug": "home-loans",
        "title": "Home Loans",
        "promptIndex": 228
      },
      {
        "id": "l3-083",
        "slug": "liquidity-of-property",
        "title": "Liquidity Of Property",
        "promptIndex": 229
      },
      {
        "id": "l3-084",
        "slug": "property-risk",
        "title": "Property Risk",
        "promptIndex": 230
      },
      {
        "id": "l3-085",
        "slug": "financial-trick-never-invest-money-you-need-soon",
        "title": "Financial Trick: Never Invest Money You Need Soon",
        "promptIndex": 231
      },
      {
        "id": "l3-086",
        "slug": "financial-trick-diversify-instead-of-betting-everything-on-o",
        "title": "Financial Trick: Diversify Instead Of Betting Everything On One Asset",
        "promptIndex": 232
      },
      {
        "id": "l3-087",
        "slug": "financial-trick-understand-fees-before-investing",
        "title": "Financial Trick: Understand Fees Before Investing",
        "promptIndex": 233
      },
      {
        "id": "l3-088",
        "slug": "financial-trick-separate-investing-from-speculation",
        "title": "Financial Trick: Separate Investing From Speculation",
        "promptIndex": 234
      },
      {
        "id": "l3-089",
        "slug": "financial-trick-don-t-confuse-past-returns-with-guaranteed-f",
        "title": "Financial Trick: Don'T Confuse Past Returns With Guaranteed Future Returns",
        "promptIndex": 235
      },
      {
        "id": "l3-090",
        "slug": "financial-trick-calculate-real-return-after-inflation",
        "title": "Financial Trick: Calculate Real Return After Inflation",
        "promptIndex": 236
      },
      {
        "id": "l3-091",
        "slug": "portfolio-construction",
        "title": "Portfolio Construction",
        "promptIndex": 237
      },
      {
        "id": "l3-092",
        "slug": "investment-simulation",
        "title": "Investment Simulation",
        "promptIndex": 238
      },
      {
        "id": "l3-093",
        "slug": "investment-journal",
        "title": "Investment Journal",
        "promptIndex": 239
      },
      {
        "id": "l3-094",
        "slug": "spreadsheet-based-investment-tracker",
        "title": "Spreadsheet-Based Investment Tracker",
        "promptIndex": 240
      }
    ]
  },
  {
    "level": 4,
    "title": "Taxes & Advanced Money",
    "blurb": "TDS, income tax, insurance, loans, and making money work harder.",
    "color": "#f59e0b",
    "chapters": [
      {
        "id": "l4-001",
        "slug": "advanced-stock-analysis",
        "title": "Advanced Stock Analysis",
        "promptIndex": 241
      },
      {
        "id": "l4-002",
        "slug": "fundamental-analysis",
        "title": "Fundamental Analysis",
        "promptIndex": 242
      },
      {
        "id": "l4-003",
        "slug": "technical-analysis",
        "title": "Technical Analysis",
        "promptIndex": 243
      },
      {
        "id": "l4-004",
        "slug": "company-valuation",
        "title": "Company Valuation",
        "promptIndex": 244
      },
      {
        "id": "l4-005",
        "slug": "growth-vs-value",
        "title": "Growth Vs Value",
        "promptIndex": 245
      },
      {
        "id": "l4-006",
        "slug": "competitive-advantages",
        "title": "Competitive Advantages",
        "promptIndex": 246
      },
      {
        "id": "l4-007",
        "slug": "business-models",
        "title": "Business Models",
        "promptIndex": 247
      },
      {
        "id": "l4-008",
        "slug": "annual-reports",
        "title": "Annual Reports",
        "promptIndex": 248
      },
      {
        "id": "l4-009",
        "slug": "balance-sheet-analysis",
        "title": "Balance-Sheet Analysis",
        "promptIndex": 249
      },
      {
        "id": "l4-010",
        "slug": "income-statement-analysis",
        "title": "Income-Statement Analysis",
        "promptIndex": 250
      },
      {
        "id": "l4-011",
        "slug": "cash-flow-analysis",
        "title": "Cash-Flow Analysis",
        "promptIndex": 251
      },
      {
        "id": "l4-012",
        "slug": "accounting-quality",
        "title": "Accounting Quality",
        "promptIndex": 252
      },
      {
        "id": "l4-013",
        "slug": "debt-analysis",
        "title": "Debt Analysis",
        "promptIndex": 253
      },
      {
        "id": "l4-014",
        "slug": "corporate-actions",
        "title": "Corporate Actions",
        "promptIndex": 254
      },
      {
        "id": "l4-015",
        "slug": "dividends",
        "title": "Dividends",
        "promptIndex": 255
      },
      {
        "id": "l4-016",
        "slug": "stock-splits",
        "title": "Stock Splits",
        "promptIndex": 256
      },
      {
        "id": "l4-017",
        "slug": "buybacks",
        "title": "Buybacks",
        "promptIndex": 257
      },
      {
        "id": "l4-018",
        "slug": "taxation-fundamentals",
        "title": "Taxation Fundamentals",
        "promptIndex": 258
      },
      {
        "id": "l4-019",
        "slug": "income-tax",
        "title": "Income Tax",
        "promptIndex": 259
      },
      {
        "id": "l4-020",
        "slug": "taxable-income",
        "title": "Taxable Income",
        "promptIndex": 260
      },
      {
        "id": "l4-021",
        "slug": "tax-slabs",
        "title": "Tax Slabs",
        "promptIndex": 261
      },
      {
        "id": "l4-022",
        "slug": "tds",
        "title": "TDS",
        "promptIndex": 262
      },
      {
        "id": "l4-023",
        "slug": "form-16",
        "title": "Form 16",
        "promptIndex": 263
      },
      {
        "id": "l4-024",
        "slug": "itr",
        "title": "ITR",
        "promptIndex": 264
      },
      {
        "id": "l4-025",
        "slug": "deductions",
        "title": "Deductions",
        "promptIndex": 265
      },
      {
        "id": "l4-026",
        "slug": "capital-gains",
        "title": "Capital Gains",
        "promptIndex": 266
      },
      {
        "id": "l4-027",
        "slug": "short-term-vs-long-term-capital-gains",
        "title": "Short-Term Vs Long-Term Capital Gains",
        "promptIndex": 267
      },
      {
        "id": "l4-028",
        "slug": "tax-treatment-of-investments",
        "title": "Tax Treatment Of Investments",
        "promptIndex": 268
      },
      {
        "id": "l4-029",
        "slug": "tax-planning-vs-tax-evasion",
        "title": "Tax Planning Vs Tax Evasion",
        "promptIndex": 269
      },
      {
        "id": "l4-030",
        "slug": "retirement-planning",
        "title": "Retirement Planning",
        "promptIndex": 270
      },
      {
        "id": "l4-031",
        "slug": "inflation-adjusted-retirement-goals",
        "title": "Inflation-Adjusted Retirement Goals",
        "promptIndex": 271
      },
      {
        "id": "l4-032",
        "slug": "retirement-corpus",
        "title": "Retirement Corpus",
        "promptIndex": 272
      },
      {
        "id": "l4-033",
        "slug": "epf",
        "title": "EPF",
        "promptIndex": 273
      },
      {
        "id": "l4-034",
        "slug": "ppf",
        "title": "PPF",
        "promptIndex": 274
      },
      {
        "id": "l4-035",
        "slug": "nps",
        "title": "NPS",
        "promptIndex": 275
      },
      {
        "id": "l4-036",
        "slug": "annuities",
        "title": "Annuities",
        "promptIndex": 276
      },
      {
        "id": "l4-037",
        "slug": "life-insurance",
        "title": "Life Insurance",
        "promptIndex": 277
      },
      {
        "id": "l4-038",
        "slug": "term-insurance",
        "title": "Term Insurance",
        "promptIndex": 278
      },
      {
        "id": "l4-039",
        "slug": "whole-life-insurance",
        "title": "Whole-Life Insurance",
        "promptIndex": 279
      },
      {
        "id": "l4-040",
        "slug": "endowment-plans",
        "title": "Endowment Plans",
        "promptIndex": 280
      },
      {
        "id": "l4-041",
        "slug": "ulips",
        "title": "ULIPs",
        "promptIndex": 281
      },
      {
        "id": "l4-042",
        "slug": "insurance-vs-investment",
        "title": "Insurance Vs Investment",
        "promptIndex": 282
      },
      {
        "id": "l4-043",
        "slug": "health-insurance-in-greater-depth",
        "title": "Health Insurance In Greater Depth",
        "promptIndex": 283
      },
      {
        "id": "l4-044",
        "slug": "deductibles",
        "title": "Deductibles",
        "promptIndex": 284
      },
      {
        "id": "l4-045",
        "slug": "co-pay",
        "title": "Co-Pay",
        "promptIndex": 285
      },
      {
        "id": "l4-046",
        "slug": "waiting-periods",
        "title": "Waiting Periods",
        "promptIndex": 286
      },
      {
        "id": "l4-047",
        "slug": "exclusions",
        "title": "Exclusions",
        "promptIndex": 287
      },
      {
        "id": "l4-048",
        "slug": "claim-procedures",
        "title": "Claim Procedures",
        "promptIndex": 288
      },
      {
        "id": "l4-049",
        "slug": "property-purchase-economics",
        "title": "Property Purchase Economics",
        "promptIndex": 289
      },
      {
        "id": "l4-050",
        "slug": "rent-vs-buy-analysis",
        "title": "Rent Vs Buy Analysis",
        "promptIndex": 290
      },
      {
        "id": "l4-051",
        "slug": "down-payment",
        "title": "Down Payment",
        "promptIndex": 291
      },
      {
        "id": "l4-052",
        "slug": "home-loan-amortization",
        "title": "Home-Loan Amortization",
        "promptIndex": 292
      },
      {
        "id": "l4-053",
        "slug": "total-ownership-cost",
        "title": "Total Ownership Cost",
        "promptIndex": 293
      },
      {
        "id": "l4-054",
        "slug": "education-finance",
        "title": "Education Finance",
        "promptIndex": 294
      },
      {
        "id": "l4-055",
        "slug": "scholarships",
        "title": "Scholarships",
        "promptIndex": 295
      },
      {
        "id": "l4-056",
        "slug": "education-loans",
        "title": "Education Loans",
        "promptIndex": 296
      },
      {
        "id": "l4-057",
        "slug": "roi-of-education",
        "title": "ROI Of Education",
        "promptIndex": 297
      },
      {
        "id": "l4-058",
        "slug": "opportunity-cost-of-education",
        "title": "Opportunity Cost Of Education",
        "promptIndex": 298
      },
      {
        "id": "l4-059",
        "slug": "futures",
        "title": "Futures",
        "promptIndex": 299
      },
      {
        "id": "l4-060",
        "slug": "futures-contracts",
        "title": "Futures Contracts",
        "promptIndex": 300
      },
      {
        "id": "l4-061",
        "slug": "margin",
        "title": "Margin",
        "promptIndex": 301
      },
      {
        "id": "l4-062",
        "slug": "leverage",
        "title": "Leverage",
        "promptIndex": 302
      },
      {
        "id": "l4-063",
        "slug": "expiry",
        "title": "Expiry",
        "promptIndex": 303
      },
      {
        "id": "l4-064",
        "slug": "mark-to-market",
        "title": "Mark-To-Market",
        "promptIndex": 304
      },
      {
        "id": "l4-065",
        "slug": "hedging",
        "title": "Hedging",
        "promptIndex": 305
      },
      {
        "id": "l4-066",
        "slug": "speculation",
        "title": "Speculation",
        "promptIndex": 306
      },
      {
        "id": "l4-067",
        "slug": "options",
        "title": "Options",
        "promptIndex": 307
      },
      {
        "id": "l4-068",
        "slug": "calls",
        "title": "Calls",
        "promptIndex": 308
      },
      {
        "id": "l4-069",
        "slug": "puts",
        "title": "Puts",
        "promptIndex": 309
      },
      {
        "id": "l4-070",
        "slug": "strike-price",
        "title": "Strike Price",
        "promptIndex": 310
      },
      {
        "id": "l4-071",
        "slug": "premium",
        "title": "Premium",
        "promptIndex": 311
      },
      {
        "id": "l4-072",
        "slug": "intrinsic-value",
        "title": "Intrinsic Value",
        "promptIndex": 312
      },
      {
        "id": "l4-073",
        "slug": "time-value",
        "title": "Time Value",
        "promptIndex": 313
      },
      {
        "id": "l4-074",
        "slug": "option-buyers-vs-sellers",
        "title": "Option Buyers Vs Sellers",
        "promptIndex": 314
      },
      {
        "id": "l4-075",
        "slug": "derivatives-as-risk-management-tools",
        "title": "Derivatives As Risk-Management Tools",
        "promptIndex": 315
      },
      {
        "id": "l4-076",
        "slug": "commodity-futures",
        "title": "Commodity Futures",
        "promptIndex": 316
      },
      {
        "id": "l4-077",
        "slug": "index-futures",
        "title": "Index Futures",
        "promptIndex": 317
      },
      {
        "id": "l4-078",
        "slug": "forex",
        "title": "Forex",
        "promptIndex": 318
      },
      {
        "id": "l4-079",
        "slug": "exchange-rates",
        "title": "Exchange Rates",
        "promptIndex": 319
      },
      {
        "id": "l4-080",
        "slug": "inr-usd",
        "title": "INR/USD",
        "promptIndex": 320
      },
      {
        "id": "l4-081",
        "slug": "currency-risk",
        "title": "Currency Risk",
        "promptIndex": 321
      },
      {
        "id": "l4-082",
        "slug": "international-transactions",
        "title": "International Transactions",
        "promptIndex": 322
      },
      {
        "id": "l4-083",
        "slug": "business-finance",
        "title": "Business Finance",
        "promptIndex": 323
      },
      {
        "id": "l4-084",
        "slug": "sole-proprietorship",
        "title": "Sole Proprietorship",
        "promptIndex": 324
      },
      {
        "id": "l4-085",
        "slug": "partnership",
        "title": "Partnership",
        "promptIndex": 325
      },
      {
        "id": "l4-086",
        "slug": "llp",
        "title": "LLP",
        "promptIndex": 326
      },
      {
        "id": "l4-087",
        "slug": "private-limited-companies",
        "title": "Private Limited Companies",
        "promptIndex": 327
      },
      {
        "id": "l4-088",
        "slug": "equity-financing",
        "title": "Equity Financing",
        "promptIndex": 328
      },
      {
        "id": "l4-089",
        "slug": "debt-financing",
        "title": "Debt Financing",
        "promptIndex": 329
      },
      {
        "id": "l4-090",
        "slug": "revenue",
        "title": "Revenue",
        "promptIndex": 330
      },
      {
        "id": "l4-091",
        "slug": "profit",
        "title": "Profit",
        "promptIndex": 331
      },
      {
        "id": "l4-092",
        "slug": "cash-flow",
        "title": "Cash Flow",
        "promptIndex": 332
      },
      {
        "id": "l4-093",
        "slug": "startup-funding",
        "title": "Startup Funding",
        "promptIndex": 333
      },
      {
        "id": "l4-094",
        "slug": "career-economics",
        "title": "Career Economics",
        "promptIndex": 334
      },
      {
        "id": "l4-095",
        "slug": "salary-growth",
        "title": "Salary Growth",
        "promptIndex": 335
      },
      {
        "id": "l4-096",
        "slug": "education-cost",
        "title": "Education Cost",
        "promptIndex": 336
      },
      {
        "id": "l4-097",
        "slug": "job-stability",
        "title": "Job Stability",
        "promptIndex": 337
      },
      {
        "id": "l4-098",
        "slug": "benefits",
        "title": "Benefits",
        "promptIndex": 338
      },
      {
        "id": "l4-099",
        "slug": "taxes",
        "title": "Taxes",
        "promptIndex": 339
      },
      {
        "id": "l4-100",
        "slug": "opportunity-cost",
        "title": "Opportunity Cost",
        "promptIndex": 340
      },
      {
        "id": "l4-101",
        "slug": "career-roi",
        "title": "Career ROI",
        "promptIndex": 341
      },
      {
        "id": "l4-102",
        "slug": "financial-trick-calculate-the-lifetime-financial-cost-of-a-c",
        "title": "Financial Trick: Calculate The Lifetime Financial Cost Of A Career",
        "promptIndex": 342
      },
      {
        "id": "l4-103",
        "slug": "financial-trick-compare-offers-using-total-compensation-rath",
        "title": "Financial Trick: Compare Offers Using Total Compensation Rather Than Headline Salary",
        "promptIndex": 343
      },
      {
        "id": "l4-104",
        "slug": "financial-trick-calculate-opportunity-cost",
        "title": "Financial Trick: Calculate Opportunity Cost",
        "promptIndex": 344
      },
      {
        "id": "l4-105",
        "slug": "financial-trick-stress-test-major-financial-decisions",
        "title": "Financial Trick: Stress-Test Major Financial Decisions",
        "promptIndex": 345
      },
      {
        "id": "l4-106",
        "slug": "financial-trick-distinguish-nominal-return-from-real-return",
        "title": "Financial Trick: Distinguish Nominal Return From Real Return",
        "promptIndex": 346
      },
      {
        "id": "l4-107",
        "slug": "build-a-personal-net-worth-tracker",
        "title": "Build A Personal Net-Worth Tracker",
        "promptIndex": 347
      },
      {
        "id": "l4-108",
        "slug": "tax-tracker-and-investment-dashboard",
        "title": "Tax Tracker And Investment Dashboard",
        "promptIndex": 348
      }
    ]
  },
  {
    "level": 5,
    "title": "Mastery & Life Planning",
    "blurb": "Retirement, risk, scams, spreadsheets, AI tools, and your complete financial plan.",
    "color": "#ec4899",
    "chapters": [
      {
        "id": "l5-001",
        "slug": "first-job-financial-planning",
        "title": "First-Job Financial Planning",
        "promptIndex": 349
      },
      {
        "id": "l5-002",
        "slug": "salary-negotiation",
        "title": "Salary Negotiation",
        "promptIndex": 350
      },
      {
        "id": "l5-003",
        "slug": "reading-employment-offers",
        "title": "Reading Employment Offers",
        "promptIndex": 351
      },
      {
        "id": "l5-004",
        "slug": "ctc-vs-take-home",
        "title": "CTC Vs Take-Home",
        "promptIndex": 352
      },
      {
        "id": "l5-005",
        "slug": "employee-benefits",
        "title": "Employee Benefits",
        "promptIndex": 353
      },
      {
        "id": "l5-006",
        "slug": "pf",
        "title": "PF",
        "promptIndex": 354
      },
      {
        "id": "l5-007",
        "slug": "taxation",
        "title": "Taxation",
        "promptIndex": 355
      },
      {
        "id": "l5-008",
        "slug": "creating-a-monthly-financial-system",
        "title": "Creating A Monthly Financial System",
        "promptIndex": 356
      },
      {
        "id": "l5-009",
        "slug": "emergency-fund",
        "title": "Emergency Fund",
        "promptIndex": 357
      },
      {
        "id": "l5-010",
        "slug": "sinking-funds",
        "title": "Sinking Funds",
        "promptIndex": 358
      },
      {
        "id": "l5-011",
        "slug": "budgeting-systems",
        "title": "Budgeting Systems",
        "promptIndex": 359
      },
      {
        "id": "l5-012",
        "slug": "zero-based-budgeting",
        "title": "Zero-Based Budgeting",
        "promptIndex": 360
      },
      {
        "id": "l5-013",
        "slug": "50-30-20-style-frameworks-and-their-limitations",
        "title": "50/30/20-Style Frameworks And Their Limitations",
        "promptIndex": 361
      },
      {
        "id": "l5-014",
        "slug": "cash-flow-management",
        "title": "Cash-Flow Management",
        "promptIndex": 362
      },
      {
        "id": "l5-015",
        "slug": "automated-savings",
        "title": "Automated Savings",
        "promptIndex": 363
      },
      {
        "id": "l5-016",
        "slug": "automated-investments",
        "title": "Automated Investments",
        "promptIndex": 364
      },
      {
        "id": "l5-017",
        "slug": "bill-automation",
        "title": "Bill Automation",
        "promptIndex": 365
      },
      {
        "id": "l5-018",
        "slug": "account-alerts",
        "title": "Account Alerts",
        "promptIndex": 366
      },
      {
        "id": "l5-019",
        "slug": "personal-financial-dashboards",
        "title": "Personal Financial Dashboards",
        "promptIndex": 367
      },
      {
        "id": "l5-020",
        "slug": "advanced-portfolio-construction",
        "title": "Advanced Portfolio Construction",
        "promptIndex": 368
      },
      {
        "id": "l5-021",
        "slug": "asset-allocation",
        "title": "Asset Allocation",
        "promptIndex": 369
      },
      {
        "id": "l5-022",
        "slug": "diversification",
        "title": "Diversification",
        "promptIndex": 370
      },
      {
        "id": "l5-023",
        "slug": "rebalancing",
        "title": "Rebalancing",
        "promptIndex": 371
      },
      {
        "id": "l5-024",
        "slug": "goal-based-investing",
        "title": "Goal-Based Investing",
        "promptIndex": 372
      },
      {
        "id": "l5-025",
        "slug": "reits",
        "title": "REITs",
        "promptIndex": 373
      },
      {
        "id": "l5-026",
        "slug": "invits",
        "title": "InvITs",
        "promptIndex": 374
      },
      {
        "id": "l5-027",
        "slug": "international-investing",
        "title": "International Investing",
        "promptIndex": 375
      },
      {
        "id": "l5-028",
        "slug": "etfs",
        "title": "ETFs",
        "promptIndex": 376
      },
      {
        "id": "l5-029",
        "slug": "alternative-investments",
        "title": "Alternative Investments",
        "promptIndex": 377
      },
      {
        "id": "l5-030",
        "slug": "private-equity",
        "title": "Private Equity",
        "promptIndex": 378
      },
      {
        "id": "l5-031",
        "slug": "venture-capital",
        "title": "Venture Capital",
        "promptIndex": 379
      },
      {
        "id": "l5-032",
        "slug": "liquidity",
        "title": "Liquidity",
        "promptIndex": 380
      },
      {
        "id": "l5-033",
        "slug": "fees-and-access-restrictions",
        "title": "Fees And Access Restrictions",
        "promptIndex": 381
      },
      {
        "id": "l5-034",
        "slug": "advanced-tax-planning",
        "title": "Advanced Tax Planning",
        "promptIndex": 382
      },
      {
        "id": "l5-035",
        "slug": "retirement-planning",
        "title": "Retirement Planning",
        "promptIndex": 383
      },
      {
        "id": "l5-036",
        "slug": "financial-independence",
        "title": "Financial Independence",
        "promptIndex": 384
      },
      {
        "id": "l5-037",
        "slug": "fire",
        "title": "FIRE",
        "promptIndex": 385
      },
      {
        "id": "l5-038",
        "slug": "savings-rate",
        "title": "Savings Rate",
        "promptIndex": 386
      },
      {
        "id": "l5-039",
        "slug": "passive-income",
        "title": "Passive Income",
        "promptIndex": 387
      },
      {
        "id": "l5-040",
        "slug": "financial-regulators",
        "title": "Financial Regulators",
        "promptIndex": 388
      },
      {
        "id": "l5-041",
        "slug": "rbi",
        "title": "RBI",
        "promptIndex": 389
      },
      {
        "id": "l5-042",
        "slug": "sebi",
        "title": "SEBI",
        "promptIndex": 390
      },
      {
        "id": "l5-043",
        "slug": "irdai",
        "title": "IRDAI",
        "promptIndex": 391
      },
      {
        "id": "l5-044",
        "slug": "pfrda",
        "title": "PFRDA",
        "promptIndex": 392
      },
      {
        "id": "l5-045",
        "slug": "banks",
        "title": "Banks",
        "promptIndex": 393
      },
      {
        "id": "l5-046",
        "slug": "nbfcs",
        "title": "NBFCs",
        "promptIndex": 394
      },
      {
        "id": "l5-047",
        "slug": "insurance-companies",
        "title": "Insurance Companies",
        "promptIndex": 395
      },
      {
        "id": "l5-048",
        "slug": "amcs",
        "title": "AMCs",
        "promptIndex": 396
      },
      {
        "id": "l5-049",
        "slug": "stock-exchanges",
        "title": "Stock Exchanges",
        "promptIndex": 397
      },
      {
        "id": "l5-050",
        "slug": "brokers",
        "title": "Brokers",
        "promptIndex": 398
      },
      {
        "id": "l5-051",
        "slug": "depositories",
        "title": "Depositories",
        "promptIndex": 399
      },
      {
        "id": "l5-052",
        "slug": "kyc",
        "title": "KYC",
        "promptIndex": 400
      },
      {
        "id": "l5-053",
        "slug": "aml",
        "title": "AML",
        "promptIndex": 401
      },
      {
        "id": "l5-054",
        "slug": "investor-protection",
        "title": "Investor Protection",
        "promptIndex": 402
      },
      {
        "id": "l5-055",
        "slug": "financial-complaints",
        "title": "Financial Complaints",
        "promptIndex": 403
      },
      {
        "id": "l5-056",
        "slug": "consumer-rights",
        "title": "Consumer Rights",
        "promptIndex": 404
      },
      {
        "id": "l5-057",
        "slug": "reading-financial-contracts",
        "title": "Reading Financial Contracts",
        "promptIndex": 405
      },
      {
        "id": "l5-058",
        "slug": "loan-agreements",
        "title": "Loan Agreements",
        "promptIndex": 406
      },
      {
        "id": "l5-059",
        "slug": "insurance-policies",
        "title": "Insurance Policies",
        "promptIndex": 407
      },
      {
        "id": "l5-060",
        "slug": "credit-card-agreements",
        "title": "Credit-Card Agreements",
        "promptIndex": 408
      },
      {
        "id": "l5-061",
        "slug": "brokerage-agreements",
        "title": "Brokerage Agreements",
        "promptIndex": 409
      },
      {
        "id": "l5-062",
        "slug": "rental-agreements",
        "title": "Rental Agreements",
        "promptIndex": 410
      },
      {
        "id": "l5-063",
        "slug": "hidden-charges",
        "title": "Hidden Charges",
        "promptIndex": 411
      },
      {
        "id": "l5-064",
        "slug": "fees",
        "title": "Fees",
        "promptIndex": 412
      },
      {
        "id": "l5-065",
        "slug": "penalties",
        "title": "Penalties",
        "promptIndex": 413
      },
      {
        "id": "l5-066",
        "slug": "clauses",
        "title": "Clauses",
        "promptIndex": 414
      },
      {
        "id": "l5-067",
        "slug": "negotiation-of-salary",
        "title": "Negotiation Of Salary",
        "promptIndex": 415
      },
      {
        "id": "l5-068",
        "slug": "rent",
        "title": "Rent",
        "promptIndex": 416
      },
      {
        "id": "l5-069",
        "slug": "loans",
        "title": "Loans",
        "promptIndex": 417
      },
      {
        "id": "l5-070",
        "slug": "contracts-and-freelance-rates",
        "title": "Contracts And Freelance Rates",
        "promptIndex": 418
      },
      {
        "id": "l5-071",
        "slug": "estate-planning",
        "title": "Estate Planning",
        "promptIndex": 419
      },
      {
        "id": "l5-072",
        "slug": "nominees",
        "title": "Nominees",
        "promptIndex": 420
      },
      {
        "id": "l5-073",
        "slug": "beneficiaries",
        "title": "Beneficiaries",
        "promptIndex": 421
      },
      {
        "id": "l5-074",
        "slug": "wills",
        "title": "Wills",
        "promptIndex": 422
      },
      {
        "id": "l5-075",
        "slug": "inheritance",
        "title": "Inheritance",
        "promptIndex": 423
      },
      {
        "id": "l5-076",
        "slug": "succession",
        "title": "Succession",
        "promptIndex": 424
      },
      {
        "id": "l5-077",
        "slug": "joint-ownership",
        "title": "Joint Ownership",
        "promptIndex": 425
      },
      {
        "id": "l5-078",
        "slug": "family-finance",
        "title": "Family Finance",
        "promptIndex": 426
      },
      {
        "id": "l5-079",
        "slug": "marriage-finances",
        "title": "Marriage Finances",
        "promptIndex": 427
      },
      {
        "id": "l5-080",
        "slug": "supporting-parents",
        "title": "Supporting Parents",
        "promptIndex": 428
      },
      {
        "id": "l5-081",
        "slug": "dependents",
        "title": "Dependents",
        "promptIndex": 429
      },
      {
        "id": "l5-082",
        "slug": "children-s-education-planning",
        "title": "Children'S Education Planning",
        "promptIndex": 430
      },
      {
        "id": "l5-083",
        "slug": "major-purchases",
        "title": "Major Purchases",
        "promptIndex": 431
      },
      {
        "id": "l5-084",
        "slug": "house-purchase",
        "title": "House Purchase",
        "promptIndex": 432
      },
      {
        "id": "l5-085",
        "slug": "vehicle-purchase",
        "title": "Vehicle Purchase",
        "promptIndex": 433
      },
      {
        "id": "l5-086",
        "slug": "education-decisions",
        "title": "Education Decisions",
        "promptIndex": 434
      },
      {
        "id": "l5-087",
        "slug": "rent-vs-buy",
        "title": "Rent Vs Buy",
        "promptIndex": 435
      },
      {
        "id": "l5-088",
        "slug": "new-vs-used",
        "title": "New Vs Used",
        "promptIndex": 436
      },
      {
        "id": "l5-089",
        "slug": "cash-vs-financing",
        "title": "Cash Vs Financing",
        "promptIndex": 437
      },
      {
        "id": "l5-090",
        "slug": "financial-crisis-management",
        "title": "Financial Crisis Management",
        "promptIndex": 438
      },
      {
        "id": "l5-091",
        "slug": "job-loss",
        "title": "Job Loss",
        "promptIndex": 439
      },
      {
        "id": "l5-092",
        "slug": "medical-emergencies",
        "title": "Medical Emergencies",
        "promptIndex": 440
      },
      {
        "id": "l5-093",
        "slug": "market-crashes",
        "title": "Market Crashes",
        "promptIndex": 441
      },
      {
        "id": "l5-094",
        "slug": "recession",
        "title": "Recession",
        "promptIndex": 442
      },
      {
        "id": "l5-095",
        "slug": "debt-crisis",
        "title": "Debt Crisis",
        "promptIndex": 443
      },
      {
        "id": "l5-096",
        "slug": "fraud-response",
        "title": "Fraud Response",
        "promptIndex": 444
      },
      {
        "id": "l5-097",
        "slug": "account-compromise",
        "title": "Account Compromise",
        "promptIndex": 445
      },
      {
        "id": "l5-098",
        "slug": "identity-theft",
        "title": "Identity Theft",
        "promptIndex": 446
      },
      {
        "id": "l5-099",
        "slug": "financial-scam-detection",
        "title": "Financial Scam Detection",
        "promptIndex": 447
      },
      {
        "id": "l5-100",
        "slug": "fake-gurus",
        "title": "Fake Gurus",
        "promptIndex": 448
      },
      {
        "id": "l5-101",
        "slug": "pump-and-dump-schemes",
        "title": "Pump-And-Dump Schemes",
        "promptIndex": 449
      },
      {
        "id": "l5-102",
        "slug": "deepfake-scams",
        "title": "Deepfake Scams",
        "promptIndex": 450
      },
      {
        "id": "l5-103",
        "slug": "fake-trading-platforms",
        "title": "Fake Trading Platforms",
        "promptIndex": 451
      },
      {
        "id": "l5-104",
        "slug": "fake-jobs",
        "title": "Fake Jobs",
        "promptIndex": 452
      },
      {
        "id": "l5-105",
        "slug": "crypto-scams",
        "title": "Crypto Scams",
        "promptIndex": 453
      },
      {
        "id": "l5-106",
        "slug": "social-engineering",
        "title": "Social Engineering",
        "promptIndex": 454
      },
      {
        "id": "l5-107",
        "slug": "financial-due-diligence",
        "title": "Financial Due Diligence",
        "promptIndex": 455
      },
      {
        "id": "l5-108",
        "slug": "evaluating-financial-products",
        "title": "Evaluating Financial Products",
        "promptIndex": 456
      },
      {
        "id": "l5-109",
        "slug": "understanding-return-sources",
        "title": "Understanding Return Sources",
        "promptIndex": 457
      },
      {
        "id": "l5-110",
        "slug": "risk-analysis",
        "title": "Risk Analysis",
        "promptIndex": 458
      },
      {
        "id": "l5-111",
        "slug": "liquidity-analysis",
        "title": "Liquidity Analysis",
        "promptIndex": 459
      },
      {
        "id": "l5-112",
        "slug": "fee-analysis",
        "title": "Fee Analysis",
        "promptIndex": 460
      },
      {
        "id": "l5-113",
        "slug": "regulatory-verification",
        "title": "Regulatory Verification",
        "promptIndex": 461
      },
      {
        "id": "l5-114",
        "slug": "ai-assisted-finance",
        "title": "AI-Assisted Finance",
        "promptIndex": 462
      },
      {
        "id": "l5-115",
        "slug": "ai-for-budgeting",
        "title": "AI For Budgeting",
        "promptIndex": 463
      },
      {
        "id": "l5-116",
        "slug": "ai-for-spreadsheet-creation",
        "title": "AI For Spreadsheet Creation",
        "promptIndex": 464
      },
      {
        "id": "l5-117",
        "slug": "ai-for-document-analysis",
        "title": "AI For Document Analysis",
        "promptIndex": 465
      },
      {
        "id": "l5-118",
        "slug": "ai-for-financial-education",
        "title": "AI For Financial Education",
        "promptIndex": 466
      },
      {
        "id": "l5-119",
        "slug": "ai-limitations",
        "title": "AI Limitations",
        "promptIndex": 467
      },
      {
        "id": "l5-120",
        "slug": "hallucination-detection",
        "title": "Hallucination Detection",
        "promptIndex": 468
      },
      {
        "id": "l5-121",
        "slug": "privacy-when-using-ai",
        "title": "Privacy When Using AI",
        "promptIndex": 469
      },
      {
        "id": "l5-122",
        "slug": "never-sharing-otp-pin-password-card-information-with-ai",
        "title": "Never Sharing OTP/PIN/Password/Card Information With AI",
        "promptIndex": 470
      },
      {
        "id": "l5-123",
        "slug": "spreadsheet-finance",
        "title": "Spreadsheet Finance",
        "promptIndex": 471
      },
      {
        "id": "l5-124",
        "slug": "excel-google-sheets",
        "title": "Excel/Google Sheets",
        "promptIndex": 472
      },
      {
        "id": "l5-125",
        "slug": "formulas",
        "title": "Formulas",
        "promptIndex": 473
      },
      {
        "id": "l5-126",
        "slug": "sum",
        "title": "SUM",
        "promptIndex": 474
      },
      {
        "id": "l5-127",
        "slug": "if",
        "title": "IF",
        "promptIndex": 475
      },
      {
        "id": "l5-128",
        "slug": "sumifs",
        "title": "SUMIFS",
        "promptIndex": 476
      },
      {
        "id": "l5-129",
        "slug": "xlookup",
        "title": "XLOOKUP",
        "promptIndex": 477
      },
      {
        "id": "l5-130",
        "slug": "filter",
        "title": "FILTER",
        "promptIndex": 478
      },
      {
        "id": "l5-131",
        "slug": "charts",
        "title": "Charts",
        "promptIndex": 479
      },
      {
        "id": "l5-132",
        "slug": "pivot-tables",
        "title": "Pivot Tables",
        "promptIndex": 480
      },
      {
        "id": "l5-133",
        "slug": "financial-calculators",
        "title": "Financial Calculators",
        "promptIndex": 481
      },
      {
        "id": "l5-134",
        "slug": "compound-interest-calculator",
        "title": "Compound-Interest Calculator",
        "promptIndex": 482
      },
      {
        "id": "l5-135",
        "slug": "emi-calculator",
        "title": "EMI Calculator",
        "promptIndex": 483
      },
      {
        "id": "l5-136",
        "slug": "sip-calculator",
        "title": "SIP Calculator",
        "promptIndex": 484
      },
      {
        "id": "l5-137",
        "slug": "inflation-calculator",
        "title": "Inflation Calculator",
        "promptIndex": 485
      },
      {
        "id": "l5-138",
        "slug": "retirement-calculator",
        "title": "Retirement Calculator",
        "promptIndex": 486
      },
      {
        "id": "l5-139",
        "slug": "cagr-calculator",
        "title": "CAGR Calculator",
        "promptIndex": 487
      },
      {
        "id": "l5-140",
        "slug": "net-worth-calculator",
        "title": "Net-Worth Calculator",
        "promptIndex": 488
      },
      {
        "id": "l5-141",
        "slug": "debt-repayment-calculator",
        "title": "Debt-Repayment Calculator",
        "promptIndex": 489
      },
      {
        "id": "l5-142",
        "slug": "real-return-calculator",
        "title": "Real-Return Calculator",
        "promptIndex": 490
      },
      {
        "id": "l5-143",
        "slug": "scenario-analysis",
        "title": "Scenario Analysis",
        "promptIndex": 491
      },
      {
        "id": "l5-144",
        "slug": "sensitivity-analysis",
        "title": "Sensitivity Analysis",
        "promptIndex": 492
      },
      {
        "id": "l5-145",
        "slug": "best-case-worst-case-analysis",
        "title": "Best-Case/Worst-Case Analysis",
        "promptIndex": 493
      },
      {
        "id": "l5-146",
        "slug": "financial-stress-testing",
        "title": "Financial Stress Testing",
        "promptIndex": 494
      },
      {
        "id": "l5-147",
        "slug": "personal-document-management",
        "title": "Personal Document Management",
        "promptIndex": 495
      },
      {
        "id": "l5-148",
        "slug": "encrypted-storage",
        "title": "Encrypted Storage",
        "promptIndex": 496
      },
      {
        "id": "l5-149",
        "slug": "backups",
        "title": "Backups",
        "promptIndex": 497
      },
      {
        "id": "l5-150",
        "slug": "financial-data-security",
        "title": "Financial Data Security",
        "promptIndex": 498
      },
      {
        "id": "l5-151",
        "slug": "financial-trick-automate-good-financial-behavior",
        "title": "Financial Trick: Automate Good Financial Behavior",
        "promptIndex": 499
      },
      {
        "id": "l5-152",
        "slug": "financial-trick-keep-emergency-money-separate-from-everyday-",
        "title": "Financial Trick: Keep Emergency Money Separate From Everyday Spending",
        "promptIndex": 500
      },
      {
        "id": "l5-153",
        "slug": "financial-trick-increase-savings-when-income-increases",
        "title": "Financial Trick: Increase Savings When Income Increases",
        "promptIndex": 501
      },
      {
        "id": "l5-154",
        "slug": "financial-trick-review-recurring-subscriptions",
        "title": "Financial Trick: Review Recurring Subscriptions",
        "promptIndex": 502
      },
      {
        "id": "l5-155",
        "slug": "financial-trick-compare-total-cost-rather-than-monthly-cost",
        "title": "Financial Trick: Compare Total Cost Rather Than Monthly Cost",
        "promptIndex": 503
      },
      {
        "id": "l5-156",
        "slug": "financial-trick-maintain-a-personal-net-worth-statement",
        "title": "Financial Trick: Maintain A Personal Net-Worth Statement",
        "promptIndex": 504
      },
      {
        "id": "l5-157",
        "slug": "financial-trick-periodically-rebalance-financial-goals",
        "title": "Financial Trick: Periodically Rebalance Financial Goals",
        "promptIndex": 505
      },
      {
        "id": "l5-158",
        "slug": "financial-trick-conduct-an-annual-financial-audit",
        "title": "Financial Trick: Conduct An Annual Financial Audit",
        "promptIndex": 506
      },
      {
        "id": "l5-159",
        "slug": "financial-trick-maintain-financial-records-and-backups",
        "title": "Financial Trick: Maintain Financial Records And Backups",
        "promptIndex": 507
      },
      {
        "id": "l5-160",
        "slug": "financial-trick-use-ai-as-an-assistant-rather-than-an-author",
        "title": "Financial Trick: Use AI As An Assistant Rather Than An Authority",
        "promptIndex": 508
      },
      {
        "id": "l5-161",
        "slug": "final-project-create-a-complete-personal-financial-operating",
        "title": "Final Project: Create A Complete Personal Financial Operating System And A Simulated 18-To-Retirement Financial Plan",
        "promptIndex": 509
      }
    ]
  }
]
