/**
 * Core glossary.
 *
 * Chapters also carry `terms` blocks, and those are merged in automatically by
 * `src/lib/glossary.ts` so a term explained inside a chapter appears here too.
 * This file is the hand-authored backbone: the vocabulary a learner needs before
 * they can comfortably read the chapters, all in Indian context.
 */
export type GlossarySeed = {
  term: string
  meaning: string
  /** Optional related terms, also written as glossary entries where possible. */
  see?: string[]
}

export const glossarySeeds: GlossarySeed[] = [
  {
    term: 'Savings account',
    meaning:
      'A bank account for keeping money safe and accessible. The first account most Indians open, usually with a free balance if you keep a minimum average. Interest is low but it is the base layer where your emergency fund lives.',
    see: ['Emergency fund', 'Fixed deposit', 'Current account'],
  },
  {
    term: 'Current account',
    meaning:
      'A bank account for business transactions and salary credits. It does not pay meaningful interest, but it usually gives a free debit card, free UPI and faster limits than a savings account.',
    see: ['Savings account'],
  },
  {
    term: 'Fixed deposit',
    meaning:
      'You lock a lump sum for a fixed term at a guaranteed rate. The bank pays you interest at maturity. Great for a known, near-term goal. Bad for money you might need suddenly, because breaking an FD early usually costs you interest.',
    see: ['Recurring deposit', 'Savings account'],
  },
  {
    term: 'Recurring deposit',
    meaning:
      'You fix a small amount every month for a set period, and the bank pays interest on the total. The classic "start small, stay disciplined" instrument for first-time savers in India.',
    see: ['Fixed deposit'],
  },
  {
    term: 'Emergency fund',
    meaning:
      'Cash set aside purely for sudden, necessary expenses — a hospital bill, a scooter repair, three months without income. Aim for 3 to 6 months of essential expenses; more if your income is irregular or you are the only earner at home.',
    see: ['Savings account', 'Insurance'],
  },
  {
    term: 'Inflation',
    meaning:
      'The general rise in prices over time, which quietly shrinks what your money buys. In India it has often run 5–7%, so ₹100 today buys noticeably less in ten years. It is why "saving" alone loses ground.',
    see: ['Real return', 'Purchasing power'],
  },
  {
    term: 'Real return',
    meaning:
      'What you actually gained after removing inflation. If an FD pays 7% and inflation is 6%, your real return is about 1%. This is the number that matters when comparing investments.',
    see: ['Inflation'],
  },
  {
    term: 'Purchasing power',
    meaning:
      'How much a given amount of money can buy. Rupees lose purchasing power over time, so the same salary buys less each year unless it grows with inflation.',
    see: ['Inflation', 'Real return'],
  },
  {
    term: 'Compound interest',
    meaning:
      'Interest earned on your interest as well as your principal. It is why the same monthly amount invested for 30 years beats a larger amount invested for 10. The effect accelerates over time rather than staying linear.',
    see: ['SIP'],
  },
  {
    term: 'SIP',
    meaning:
      'Systematic Investment Plan: a fixed amount invested into a mutual fund on a fixed date every month. It buys whatever the price is that day, which quietly averages your purchase cost and removes timing decisions.',
    see: ['Compound interest', 'Mutual fund', 'Lump sum'],
  },
  {
    term: 'Lump sum',
    meaning:
      'Investing one big amount all at once. It can win or lose badly depending on timing, which is why many people prefer a SIP spread over time.',
    see: ['SIP'],
  },
  {
    term: 'Mutual fund',
    meaning:
      'A pool where many people combine money, and a fund manager invests it across stocks, bonds or debt for everyone. Regulated by SEBI in India, and the usual starting point for retail investors.',
    see: ['SIP', 'NAV', 'Equity'],
  },
  {
    term: 'NAV',
    meaning:
      'Net Asset Value: the per-unit price of a mutual fund. You buy units at the NAV and sell at the NAV, so it rises and falls with what the fund holds.',
    see: ['Mutual fund'],
  },
  {
    term: 'Equity',
    meaning:
      'Ownership in a company. Equities can grow fast over long periods but can also fall sharply, which is why they suit money you will not need for years.',
    see: ['Debt', 'Diversification'],
  },
  {
    term: 'Debt',
    meaning:
      'Money you have borrowed and owe back, usually with interest. Good debt buys something that earns or appreciates; bad debt buys consumption you cannot afford.',
    see: ['Equity', 'Loan', 'EMI'],
  },
  {
    term: 'Diversification',
    meaning:
      'Spreading money across different investments so one collapsing does not sink you. The single most effective way to reduce the risk of any portfolio.',
    see: ['Equity', 'Asset allocation'],
  },
  {
    term: 'Loan',
    meaning:
      'Money borrowed to be repaid, usually with interest, over a fixed period. In India the main kinds are secured (against a property or asset you already own) and unsecured (personal, credit card, business).',
    see: ['EMI', 'Secured loan', 'Unsecured loan', 'Interest rate'],
  },
  {
    term: 'Interest rate',
    meaning:
      'The price of borrowing money, expressed as a yearly percentage. It can be fixed, so it never changes, or floating, so it moves with the repo rate and your lender.',
    see: ['Repo rate', 'Loan', 'EMI'],
  },
  {
    term: 'Repo rate',
    meaning:
      'The rate at which the RBI lends to banks. When it changes, it flows through to new loans, deposits and EMIs across the economy — so rate decisions affect your monthly outflow.',
    see: ['Interest rate', 'RBI'],
  },
  {
    term: 'EMI',
    meaning:
      'Equated Monthly Instalment: the fixed monthly payment on a loan, covering both principal and interest. Early payments are mostly interest; only later does the balance shift toward principal.',
    see: ['Loan', 'Principal'],
  },
  {
    term: 'Principal',
    meaning:
      'The original amount borrowed, as opposed to the interest charged on top of it. On every EMI, part pays principal and part pays interest — the split changes every month.',
    see: ['EMI', 'Interest rate'],
  },
  {
    term: 'Secured loan',
    meaning:
      'A loan backed by an asset you own, such as a home or car. Because the lender can take the asset if you default, rates are lower and tenures longer.',
    see: ['Unsecured loan', 'Loan'],
  },
  {
    term: 'Unsecured loan',
    meaning:
      'A loan with no collateral, such as a personal loan or credit card debt. Nothing to seize means higher interest rates and shorter tenures — the most expensive money you can borrow.',
    see: ['Secured loan', 'Credit card', 'Loan'],
  },
  {
    term: 'Credit card',
    meaning:
      'A revolving line of credit you repay monthly. Used well it is a short-term borrowing tool with rewards; used badly it becomes one of the costliest forms of debt, because minimum-payment traps keep balances alive for years.',
    see: ['Minimum payment', 'Unsecured loan', 'Billing cycle'],
  },
  {
    term: 'Minimum payment',
    meaning:
      'The smallest monthly amount a card issuer accepts. Paying only this keeps the balance alive, charges interest on the rest, and can take years to clear. It is the single most common way young Indians get trapped in card debt.',
    see: ['Credit card', 'Revolving balance'],
  },
  {
    term: 'Revolving balance',
    meaning:
      'Card debt you carry from one billing cycle to the next. It accrues interest from day one, which is why carrying a balance for convenience is expensive.',
    see: ['Credit card', 'Minimum payment'],
  },
  {
    term: 'Billing cycle',
    meaning:
      'The period between your card statements. Interest is usually charged from the transaction date, not the due date, which is why a large purchase still costs you if you clear it in full later in the cycle.',
    see: ['Credit card'],
  },
  {
    term: 'Credit score',
    meaning:
      'A number lenders use to judge your repayment reliability, in India usually built from the credit bureau record of your card and loan history. Paying on time and keeping utilisation low raise it.',
    see: ['Credit card', 'Credit utilisation'],
  },
  {
    term: 'Credit utilisation',
    meaning:
      'How much of your available credit limit you are using. Staying under about 30% (some lenders prefer under 10%) is one of the fastest ways to improve your credit score.',
    see: ['Credit score', 'Credit card'],
  },
  {
    term: 'CTC',
    meaning:
      'Cost to company: the total an employer spends on you, including salary, employer PF, gratuity and bonuses. It is not what lands in your account — usually 40–60% less does.',
    see: ['Gross salary', 'Take-home pay', 'PF'],
  },
  {
    term: 'Gross salary',
    meaning:
      'Your pay before any deductions like PF, professional tax and income tax. Your CTC may be higher still, because your employer also pays PF and gratuity on your behalf.',
    see: ['CTC', 'Take-home pay'],
  },
  {
    term: 'Take-home pay',
    meaning:
      'The money that actually reaches your bank account after deductions. Plan your spending from this number, not from CTC — the gap between the two surprises most first-time employees.',
    see: ['CTC', 'Gross salary'],
  },
  {
    term: 'PF',
    meaning:
      'Provident Fund: a retirement savings account where you contribute 12% of your basic pay and your employer matches it. It earns tax-free interest until you retire, with a strict withdrawal age.',
    see: ['EPF', 'CTC'],
  },
  {
    term: 'EPF',
    meaning:
      'Employees’ Provident Fund: the government-run retirement scheme in India administered by EPFO. Employer and employee each contribute 12% of basic salary, and it vests with you after a set period.',
    see: ['PF'],
  },
  {
    term: 'Gratuity',
    meaning:
      'A payment made by your employer when you leave after 5+ years of service, calculated on your last drawn basic and dearness allowance. It is part of your CTC but not part of your salary.',
    see: ['CTC'],
  },
  {
    term: 'TDS',
    meaning:
      'Tax Deducted at Source: the income tax your employer (or bank, or landlord) withholds when they pay you, and deposits to the government on your behalf. Your annual income-tax bill is settled by adjusting against it.',
    see: ['PAN', 'Form 16', 'Section 80C'],
  },
  {
    term: 'PAN',
    meaning:
      'Permanent Account Number: a 10-digit tax identifier in India. You need it for a salary account, a bank account, and for claiming refunds or deductions.',
    see: ['TDS', 'Form 16'],
  },
  {
    term: 'Form 16',
    meaning:
      'The certificate your employer issues showing your salary income and the TDS deducted during the year. You need it to file or verify your return and claim refunds.',
    see: ['TDS', 'PAN'],
  },
  {
    term: 'Section 80C',
    meaning:
      'The most-used tax deduction in India: up to ₹1.5 lakh a year can be saved from tax via ELSS, PPF, EPF, life insurance, tuition fees and the 5-year FD. Old-regime taxpayers benefit; most under the new regime do not.',
    see: ['TDS', 'ELSS', 'Old vs new regime'],
  },
  {
    term: 'ELSS',
    meaning:
      'Equity Linked Savings Scheme: a mutual fund that qualifies for Section 80C, with a 3-year lock-in. The tax-efficient way to invest for a medium-term goal.',
    see: ['Section 80C', 'Mutual fund'],
  },
  {
    term: 'Old vs new regime',
    meaning:
      'India’s two ways of computing income tax. The old regime allows deductions like 80C but taxes slabs higher; the new regime has fewer deductions but lower slabs. Most salaried people under the new regime should compare both before filing.',
    see: ['TDS', 'Section 80C'],
  },
  {
    term: 'Insurance',
    meaning:
      'A contract where an insurer takes on financial risk you cannot afford. It is not an investment: you buy protection, not returns. Buying a policy purely as a tax saver or investment is a common and costly mistake.',
    see: ['Term insurance', 'Health insurance', 'Premium'],
  },
  {
    term: 'Term insurance',
    meaning:
      'Life cover for a fixed period at a fixed premium. No cash value at the end — if you do not die during the term, you get nothing back. It is the cheapest and most sensible form of life cover.',
    see: ['Insurance', 'Premium'],
  },
  {
    term: 'Health insurance',
    meaning:
      'Cover for medical expenses: hospitalisation, surgery, and often pre-existing conditions declared honestly. Cashless at network hospitals means you pay only the shortfall at discharge.',
    see: ['Insurance', 'Premium', 'Deductible'],
  },
  {
    term: 'Premium',
    meaning:
      'The amount you pay an insurer to keep a policy active — monthly or yearly. Raising the deductible usually lowers the premium.',
    see: ['Insurance', 'Deductible'],
  },
  {
    term: 'Deductible',
    meaning:
      'The amount of a claim you pay yourself before insurance kicks in. A higher deductible means a cheaper premium, and is sensible if you can absorb that much in one go.',
    see: ['Premium', 'Health insurance'],
  },
  {
    term: 'Claim',
    meaning:
      'A formal request to your insurer to pay out under a policy. Cashless claims are settled directly with the hospital; reimbursement claims are paid after you pay the bill yourself.',
    see: ['Insurance', 'Premium'],
  },
  {
    term: 'Fraud',
    meaning:
      'Being tricked out of money or information. In personal finance the common forms are KYC-calling scams, fake investment returns, loan-app harassment and OTP requests — all share a few telltale red flags.',
    see: ['Phishing', 'Ponzi scheme', 'Insider trading'],
  },
  {
    term: 'Phishing',
    meaning:
      'Fraudulent messages that imitate a bank, the tax department or a delivery company to steal credentials or OTPs. No genuine institution ever asks for your OTP or PIN.',
    see: ['Fraud', 'OTP'],
  },
  {
    term: 'OTP',
    meaning:
      'One-Time Password: a code sent to your phone to authorise a transaction. Sharing it with anyone — including someone claiming to be from a bank — gives them access to your money.',
    see: ['Phishing', 'Fraud'],
  },
  {
    term: 'Ponzi scheme',
    meaning:
      'An investment fraud that pays earlier investors with money from new investors, with no real business behind it. It looks exactly like a high-return opportunity until it collapses.',
    see: ['Pyramid scheme', 'Fraud'],
  },
  {
    term: 'Pyramid scheme',
    meaning:
      'A fraud where the real money comes from recruiting new members rather than selling a product. Legal confusion aside, if the money comes from joining rather than from a product, walk away.',
    see: ['Ponzi scheme', 'Fraud'],
  },
  {
    term: 'Insider trading',
    meaning:
      'Trading a company’s shares using material, non-public information about it. Illegal in India under SEBI rules, and not something a retail investor should ever attempt.',
    see: ['Fraud', 'SEBI'],
  },
  {
    term: 'HDFC',
    meaning:
      'Housing Development Finance Corporation — historically one of India’s largest banks, split into HDFC Bank and HDFC Ltd in 2023. You will see both names on statements.',
  },
  {
    term: 'ICICI',
    meaning:
      'Industrial Credit and Investment Corporation of India, one of India’s largest private sector banks, with a wide branch network and strong digital banking.',
  },
  {
    term: 'UPI',
    meaning:
      'Unified Payments Interface: India’s instant payment system that links directly to your bank account, supporting up to ₹1 lakh per transaction with no charges. It runs through apps like PhonePe, Google Pay and Paytm.',
    see: ['IMPS', 'NEFT'],
  },
  {
    term: 'IMPS',
    meaning:
      'Immediate Payment Service: a 24×7 bank-to-bank transfer system, instant within India and usable around the clock including holidays.',
    see: ['UPI', 'NEFT'],
  },
  {
    term: 'NEFT',
    meaning:
      'National Electronic Funds Transfer: batch-based bank-to-bank transfers used for larger amounts, where the money usually lands within a couple of hours.',
    see: ['IMPS', 'UPI'],
  },
  {
    term: 'Aadhaar',
    meaning:
      'The 12-digit Unique Identity Authority number in India, used for identity proof by banks, insurers and government services. Sharing it casually with unknown callers is a common fraud route.',
    see: ['Fraud'],
  },
  {
    term: 'RBI',
    meaning:
      'Reserve Bank of India: the central bank that issues the rupee, regulates banks, holds foreign reserves and sets repo and policy rates.',
    see: ['Repo rate', 'UPI'],
  },
  {
    term: 'SEBI',
    meaning:
      'Securities and Exchange Board of India: the regulator for the stock market and mutual funds. It requires registration for anyone giving investment advice or managing others’ money.',
    see: ['Mutual fund', 'Equity'],
  },
  {
    term: 'CIBIL',
    meaning:
      'One of India’s credit information companies, whose score (300–900) lenders consult. Also TransUnion, Equifax and Experian.',
    see: ['Credit score', 'Credit bureau'],
  },
  {
    term: 'Credit bureau',
    meaning:
      'An agency that records your repayment history and shares it with lenders. Your record follows you, so late payments have consequences long after the loan closes.',
    see: ['Credit score', 'CIBIL'],
  },
  {
    term: 'Asset allocation',
    meaning:
      'How you divide money across asset classes such as equity, debt and cash to match your goal and your risk tolerance. It drives most of a portfolio’s risk and return.',
    see: ['Diversification', 'Equity', 'Debt'],
  },
  {
    term: 'Net worth',
    meaning:
      'What you own minus what you owe. It is the single honest measure of financial progress, and unlike a salary it can grow every month without your employer.',
    see: ['Asset', 'Liability'],
  },
  {
    term: 'Asset',
    meaning:
      'Something you own that has value: cash, investments, gold, property, and the money in your PPF account. Assets can grow or shrink.',
    see: ['Liability', 'Net worth'],
  },
  {
    term: 'Liability',
    meaning:
      'Something you owe: a home loan balance, a car loan, credit card debt. Liabilities shrink as you repay them, which raises net worth without any new earning.',
    see: ['Asset', 'Net worth'],
  },
  {
    term: '50/30/20 rule',
    meaning:
      'A starting budget split: 50% of take-home pay for needs, 30% for wants, 20% for saving and investing. A starting point to adapt, not a law — with high-rent cities or low incomes, needs often exceed half.',
    see: ['Budget', 'Emergency fund'],
  },
  {
    term: 'Budget',
    meaning:
      'A plan for where money goes before it goes. The most useful form is zero-based: every rupee of income is given a job, and what is left is what you actually spend.',
    see: ['50/30/20 rule', 'Needs and wants'],
  },
  {
    term: 'Needs and wants',
    meaning:
      'Needs are things you cannot live without — rent, food, medicines, transport. Wants are things that make life nicer — dining out, subscriptions, upgrades. The distinction is where most overspending hides.',
    see: ['Budget'],
  },
  {
    term: 'FOMO',
    meaning:
      'Fear of missing out: the anxiety that pushes you to buy or invest because everyone else seems to be. It is the most expensive emotion in personal finance, and it drives both overspending and chasing.',
    see: ['Lifestyle inflation', 'Behavioural finance'],
  },
  {
    term: 'Lifestyle inflation',
    meaning:
      'Spending more every time income rises, so you never accumulate anything. The antidote is to direct each raise partly into saving and investment before lifestyle catches up.',
    see: ['FOMO', 'Behavioural finance'],
  },
  {
    term: 'Behavioural finance',
    meaning:
      'The study of the irrational habits that drive financial decisions — loss aversion, overconfidence, herd behaviour. Naming them is often the first step to avoiding them.',
    see: ['FOMO', 'Lifestyle inflation'],
  },
  {
    term: 'Sinkhole',
    meaning:
      'An expense category that silently drains money every month — unused subscriptions, a car loan you cannot afford, a phone upgrade cycle. Find them and cancel, and the savings appear without any effort.',
    see: ['Budget', 'Lifestyle inflation'],
  },
  {
    term: 'Emergency fund vs insurance',
    meaning:
      'Different jobs, and confusing to swap. An emergency fund covers small, short-term shocks you can afford yourself. Insurance covers large, low-probability, unaffordable losses. You need both, in that order.',
    see: ['Emergency fund', 'Insurance'],
  },
  {
    term: 'Goal',
    meaning:
      'A specific, dated, amount-tagged target — a bike in eight months, a home deposit in three years. Money saved without a named goal tends to be money spent.',
    see: ['Budget', 'Corpus'],
  },
  {
    term: 'Corpus',
    meaning:
      'The lump sum you need to have saved by a deadline to fund a goal — a down payment, a year of expenses, a retirement pot. Working backwards from a corpus is the most practical way to plan.',
    see: ['Goal'],
  },
  {
    term: 'Equity mutual fund',
    meaning:
      'A fund investing mostly in company shares. High long-run growth potential, high short-run volatility — suited to money not needed for several years.',
    see: ['Mutual fund', 'Equity', 'SIP'],
  },
  {
    term: 'Debt fund',
    meaning:
      'A fund investing mostly in government and corporate bonds. Lower and steadier returns than equity funds, and the traditional parking spot for money needed within a few years.',
    see: ['Mutual fund', 'Equity'],
  },
  {
    term: 'Liquid fund',
    meaning:
      'A very short-duration debt fund you can redeem in a day, used for an emergency fund that needs to be reachable immediately.',
    see: ['Emergency fund', 'Debt fund'],
  },
  {
    term: 'Index fund',
    meaning:
      'A fund that simply copies a market index such as the Nifty 50, with minimal effort at picking stocks. Low cost and low maintenance, and the default choice for most new investors.',
    see: ['Mutual fund', 'SIP'],
  },
  {
    term: 'Nifty 50',
    meaning:
      'An index of 50 large, listed Indian companies, used as the yardstick for the Indian stock market.',
  },
  {
    term: 'Sensex',
    meaning:
      'The index of 30 established companies listed on the Bombay Stock Exchange — the older of India’s two headline market indices.',
  },
  {
    term: 'Volatility',
    meaning:
      'How wildly a price swings. High volatility means the same investment can be worth much more or much less in a year, which is why it only suits long money.',
    see: ['Diversification'],
  },
  {
    term: 'Loss aversion',
    meaning:
      'We feel a loss roughly twice as strongly as an equal gain feels good. It makes people sell winners too early and hold losers too long — the two classic investing mistakes.',
    see: ['Behavioural finance'],
  },
  {
    term: 'Money market',
    meaning:
      'The market for short-term borrowing between banks and institutions, and a common fixed-income destination for very short horizons.',
    see: ['Debt fund'],
  },
  {
    term: 'Cheque',
    meaning:
      'A written instruction to a bank to pay someone. Largely replaced by UPI, NEFT and IMPS for everyday use, but still used for large institutional payments.',
    see: ['UPI', 'NEFT'],
  },
  {
    term: 'ATM',
    meaning:
      'Automated Teller Machine for withdrawing cash. The first thing you are taught to protect: never share your PIN, and cover the keypad when you type it.',
    see: ['Fraud'],
  },
  {
    term: 'KYC',
    meaning:
      'Know Your Customer: identity checks banks and insurers must complete before opening an account. Falling for a "complete your KYC" call is one of India’s most common fraud routes.',
    see: ['Fraud', 'Aadhaar'],
  },
  {
    term: 'Agent vs direct',
    meaning:
      'Insurance and investments can be bought through an agent (who is paid a commission) or directly from the company. Direct buying is usually cheaper — ask what the commission is before you sign.',
    see: ['Insurance', 'Commission'],
  },
  {
    term: 'Commission',
    meaning:
      'A fee paid to someone who sold you a financial product. It comes out of your money, so a high-commission product is a worse deal for you even if the agent insists otherwise.',
    see: ['Agent vs direct'],
  },
  {
    term: 'Power of compounding',
    meaning:
      'Returns generating further returns, so the last decade of an investment does more work than the first. Time in the market beats timing the market, every time.',
    see: ['Compound interest'],
  },
  {
    term: 'Rule of 72',
    meaning:
      'Divide 72 by your annual return to get roughly how many years money doubles. At 8%, that is 9 years. A fast way to compare two investment offers honestly.',
    see: ['Compound interest'],
  },
  {
    term: 'Sequence of returns risk',
    meaning:
      'The risk that poor returns early in a retirement or goal period force you to sell low, wrecking the eventual outcome even when average returns look fine.',
    see: ['Volatility', 'Asset allocation'],
  },
  {
    term: 'Diversified portfolio',
    meaning:
      'A mix of assets and asset classes whose individual risks offset each other, so the whole is steadier than its parts.',
    see: ['Diversification', 'Asset allocation'],
  },
  {
    term: 'Cushion',
    meaning:
      'The money you keep at hand — cash or a liquid fund — to absorb the shocks of the month, so you never sell an investment at a bad moment to pay a bill.',
    see: ['Emergency fund', 'Liquid fund'],
  },
  {
    term: 'Bill payment trap',
    meaning:
      'Paying only the minimum on everything, then discovering the balances have not really moved. It feels like cash flow while quietly destroying net worth.',
    see: ['Minimum payment', 'Credit card'],
  },
  {
    term: 'Co-signer',
    meaning:
      'Someone who guarantees a loan and pays it if you default. For a young borrower it can unlock a reasonable rate — but a co-signed default follows both of you for years.',
    see: ['Loan', 'Credit score'],
  },
  {
    term: 'Net take-home',
    meaning:
      'Salary after every deduction. The only number a budget should be built on.',
    see: ['Take-home pay', 'CTC'],
  },
]