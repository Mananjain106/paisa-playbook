import type { Chapter } from '../../types'

/** Level 2, chapters 34–41: how loans work mechanically. */
export const loans: Record<string, Chapter> = {
  'l2-034': {
    id: 'l2-034',
    title: 'Loans',
    subtitle: 'Borrowing that must be justified, not merely affordable',
    minutes: 5,
    blocks: [
      { kind: 'scene', name: 'secured-vs-unsecured', caption: 'Whether the lender can take something back determines almost everything about the price.' },
      { kind: 'p', text: 'A loan is someone else\'s money used temporarily, at a cost, with a promise to repay. Loans are genuinely useful tools — but the cost of borrowing is always higher than the headline rate suggests, and the real test is whether the borrowed money produces something worth more than the interest.' },
      {
        kind: 'table',
        caption: 'Loan types in India at a glance',
        headers: ['Type', 'Secured?', 'Typical rate', 'Typical tenure'],
        rows: [
          ['Home loan', 'Yes', '8.5–9.5%', '10–30 years'],
          ['Vehicle loan', 'Yes', '9–14%', '3–7 years'],
          ['Education loan', 'Collateral optional', '7–12%', '4–15 years'],
          ['Loan against property', 'Yes', '9–11%', '5–15 years'],
          ['Personal loan', 'No', '11–18%', '1–5 years'],
          ['Business loan', 'Mixed', '12–18%', '1–5 years'],
          ['Microfinance / SHG', 'Unsecured', '18–26%', '1–3 years'],
          ['Gold loan', 'Yes', '12–24%', '6–24 months'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'The borrow-to-earn test',
        text: 'Before taking a loan, name what the borrowed money produces. A home loan against a property you will rent or live in long term can be justified. A personal loan for a holiday, a phone or a wedding deposit is consumption financed with debt — the most common route to long-term financial trouble.',
      },
      {
        kind: 'formula',
        label: 'Can you afford it',
        expr: 'Total EMI obligations should stay under about 35–40% of take-home pay',
        note: 'Add all EMIs together, including credit card minimums, before applying for a new one.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'The long tenure illusion',
        text: 'A lower EMI achieved by stretching the loan to twenty years means paying more total interest and owning the asset for longer. If you can afford a shorter tenure, take it — the cheaper total cost usually matters more than the monthly number.',
      },
      { kind: 'sim', name: 'emi', caption: 'See how principal, rate and tenure interact before you apply for anything.' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Borrow for assets or income, never for consumption.',
          'Compare at least three lenders on total cost, not EMI.',
          'Check whether the loan is secured and what is pledged.',
          'Negotiate the rate, not just the tenure.',
          'Keep the loan amount to what you can repay from income you actually have.',
        ],
      },
    ],
    quiz: [
      {
        q: 'A good reason to take a loan is:',
        options: [
          { text: 'To fund a holiday', correct: false, why: 'That is consumption financed with debt.' },
          { text: 'To buy an asset whose long-term value or income exceeds the total interest', correct: true, why: 'Exactly right.' },
          { text: 'To cover a monthly expense gap', correct: false, why: 'That indicates a budgeting problem, not a borrowing solution.' },
        ],
      },
      {
        q: 'All your EMI obligations combined should generally stay below about:',
        options: [
          { text: '10% of take-home pay', correct: false, why: 'Very conservative and rarely practical.' },
          { text: '35–40% of take-home pay', correct: true, why: 'Correct.' },
          { text: '80% of take-home pay', correct: false, why: 'Far too high.' },
        ],
      },
      {
        q: 'A lower EMI obtained by extending the tenure usually means:',
        options: [
          { text: 'Lower total interest', correct: false, why: 'Longer tenure means more interest.' },
          { text: 'Higher total interest and a longer period owning the asset', correct: true, why: 'Exactly right.' },
          { text: 'A lower interest rate', correct: false, why: 'The rate may be the same; only the term changed.' },
        ],
      },
    ],
    takeaway: 'Loans should finance assets or income, not consumption. Judge any loan on total cost, keep all EMIs under about 35–40% of take-home, and be suspicious of EMIs that are low only because the tenure is long.',
  },

  'l2-035': {
    id: 'l2-035',
    title: 'Principal',
    subtitle: 'The part you actually repay',
    minutes: 3,
    blocks: [
      { kind: 'scene', name: 'emi-split', caption: 'Principal is the part that reduces the debt. Interest is the price of having used it.' },
      { kind: 'scene', name: 'emi-split', caption: 'Every EMI contains two things: some is yours, most is the lender\'s.' },
      { kind: 'p', text: 'Principal is the amount you originally borrowed. It is the only part of your EMI that reduces what you owe — the rest is interest. In the early years of a loan, most of your payment is interest, which is why the balance barely seems to move.' },
      {
        kind: 'formula',
        label: 'The split that matters',
        expr: 'EMI = Principal repaid that month + Interest charged that month',
        note: 'Interest is always calculated on the outstanding balance, which falls as principal is repaid.',
      },
      {
        kind: 'table',
        caption: 'Where your money goes on a ₹25 lakh, 20-year, 9% loan',
        headers: ['Year', 'Principal repaid', 'Interest paid', 'Balance left'],
        rows: [
          ['1', '₹90,000', '₹2,20,000', '₹24,10,000'],
          ['5', '₹5,10,000', '₹9,90,000', '₹19,90,000'],
          ['10', '₹12,30,000', '₹8,70,000', '₹12,70,000'],
          ['15', '₹19,40,000', '₹5,50,000', '₹5,60,000'],
          ['20', '₹25,00,000', '₹13,00,000', '₹0'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'The crossover point',
        text: 'On this loan, you pay more interest than principal in year one, and only cross over around year eleven. That means a prepayment in year three has an outsized effect — you reduce a balance that is still mostly interest-earning.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Ask for the outstanding principal, not the loan amount',
        text: 'When you evaluate prepayment or refinancing, the relevant number is the principal outstanding today, not what you originally borrowed. Every lender will provide a foreclosure statement — get it before making any decision.',
      },
      { kind: 'sim', name: 'emi', caption: 'Watch the year-by-year split of principal versus interest as the balance falls.' },
    ],
    quiz: [
      {
        q: 'Principal refers to:',
        options: [
          { text: 'The total amount repaid over the loan', correct: false, why: 'That includes interest.' },
          { text: 'The amount originally borrowed, which your repayments gradually reduce', correct: true, why: 'Exactly right.' },
          { text: 'The monthly interest charge', correct: false, why: 'That is interest.' },
        ],
      },
      {
        q: 'In the first years of a long loan, most of each EMI is:',
        options: [
          { text: 'Interest', correct: true, why: 'Correct — the balance is barely falling.' },
          { text: 'Principal', correct: false, why: 'That is true only later in the tenure.' },
          { text: 'Insurance premium', correct: false, why: 'Separate, if bundled.' },
        ],
      },
      {
        q: 'Why is an early prepayment especially effective?',
        options: [
          { text: 'Because lenders waive all interest after year three', correct: false, why: 'No such rule.' },
          { text: 'Because it reduces a balance that is still largely interest-earning', correct: true, why: 'Exactly right.' },
          { text: 'Because early repayment is tax-deductible', correct: false, why: 'Generally not.' },
        ],
      },
    ],
    takeaway: 'Principal is the only part of your EMI that reduces the debt. Early repayments are especially effective because the balance is still mostly interest in the early years.',
  },

  'l2-036': {
    id: 'l2-036',
    title: 'Tenure',
    subtitle: 'The choice that decides your total cost',
    minutes: 4,
    blocks: [
      { kind: 'p', text: 'Tenure is how long you take to repay. It has no effect on the interest rate itself, but it changes the EMI and the total interest enormously. It is often the biggest single decision in the cost of a loan — and the one most people do not think about.' },
      {
        kind: 'table',
        caption: 'Tenure on a ₹25 lakh loan at 9%',
        headers: ['Tenure', 'EMI', 'Total interest', 'Total repaid'],
        rows: [
          ['10 years', '₹29,600', '₹10,52,000', '₹35,52,000'],
          ['15 years', '₹25,400', '₹20,70,000', '₹45,70,000'],
          ['20 years', '₹22,700', '₹29,38,000', '₹54,38,000'],
          ['25 years', '₹21,100', '₹38,30,000', '₹63,30,000'],
          ['30 years', '₹20,130', '₹47,46,000', '₹72,46,000'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Longer tenure is a form of borrowing',
        text: 'Extending a home loan from 20 to 30 years does not reduce the cost — it increases total interest by roughly ₹18 lakh while lowering the EMI by about ₹2,500 a month. You have effectively borrowed the difference and paid interest on it.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Match tenure to how long you will stay',
        text: 'A 25-year home loan is wrong if you might move in 7 years, because the balance you have paid down may not be the balance you can recover on sale. In Indian cities transaction costs are high, so a long loan only makes sense if you are confident you will stay.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Choose the shortest tenure you can genuinely afford.',
          'Do not reduce EMI by extending tenure — compute the extra interest first.',
          'For home loans, keep the tenure close to your expected stay.',
          'If rates fall, shorten tenure rather than reducing EMI.',
          'Check whether prepayments are allowed without penalty before choosing tenure.',
        ],
      },
      { kind: 'sim', name: 'emi', caption: 'Move the tenure slider and watch total interest change far more than the EMI does.' },
    ],
    quiz: [
      {
        q: 'Extending a loan tenure from 20 to 30 years:',
        options: [
          { text: 'Lowers the EMI and lowers total interest', correct: false, why: 'It raises total interest substantially.' },
          { text: 'Lowers the EMI but raises total interest by a large amount', correct: true, why: 'Exactly right.' },
          { text: 'Lowers the interest rate', correct: false, why: 'Tenure does not change the rate.' },
        ],
      },
      {
        q: 'A 25-year home loan may be a poor choice if you:',
        options: [
          { text: 'Earn a high salary', correct: false, why: 'That helps affordability.' },
          { text: 'Might sell the property within 7 years', correct: true, why: 'Exactly right — you may not recover your principal.' },
          { text: 'Are over 40', correct: false, why: 'Not directly relevant.' },
        ],
      },
      {
        q: 'The best tenure to pick is generally:',
        options: [
          { text: 'The longest available, for the lowest EMI', correct: false, why: 'That maximises total interest.' },
          { text: 'The shortest one you can genuinely afford without strain', correct: true, why: 'Exactly right.' },
          { text: 'Exactly ten years, always', correct: false, why: 'It depends on the borrower.' },
        ],
      },
    ],
    takeaway: 'Tenure does not change the rate but changes total interest dramatically. Choose the shortest you can afford, and keep home loan tenure close to how long you will stay.',
  },

  'l2-037': {
    id: 'l2-037',
    title: 'EMI',
    subtitle: 'The fixed monthly number — and what it hides',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'emi-split', caption: 'A fixed EMI feels stable while the balance behind it changes shape.' },
      { kind: 'p', text: 'An Equated Monthly Instalment is a fixed monthly payment covering both principal and interest. It stays constant even as the split changes — interest falls and principal rises over time. That stability is convenient, and it is also what makes people miss that they are paying more interest than they think.' },
      {
        kind: 'formula',
        label: 'The EMI formula',
        expr: 'EMI = P × r × (1+r)^n ÷ ((1+r)^n − 1)',
        note: 'P = principal, r = monthly interest rate, n = number of months. Three inputs decide everything.',
      },
      {
        kind: 'table',
        caption: 'The split on a ₹20 lakh, 20-year, 9% loan (EMI ₹16,860)',
        headers: ['Period', 'Interest part', 'Principal part'],
        rows: [
          ['Month 1', '₹15,000', '₹1,860'],
          ['Year 1 total', '₹1,71,000', '₹31,320'],
          ['Year 5 total', '₹11,90,000', '₹1,76,800'],
          ['Year 10 total', '₹8,10,000', '₹5,56,800'],
          ['Year 20 total', '₹41,000', '₹1,61,200'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Floating-rate EMIs change without notice',
        text: 'If your home loan is linked to an external benchmark such as the repo rate, your EMI will rise when the RBI raises rates. Ask the lender how often it resets and by how much, and check what your EMI would become under a 1–2 percentage point increase.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Flat-rate EMIs are misleading',
        text: 'A "flat 9%" loan charges interest on the original amount for the whole tenure, so the real rate is nearly double — often 16–18%. Always convert a flat rate to a reducing-balance rate before comparing. If a lender refuses to do this, that is your answer.',
      },
      { kind: 'list',
        ordered: true,
        items: [
          'Recalculate your EMI whenever your income changes materially.',
          'Test your EMI against a 1–2 point rate increase before signing.',
          'Keep a buffer in the account that pays the EMI.',
          'Prefer a shorter tenure over a lower EMI.',
          'Read whether the rate is fixed or floating, and when it resets.',
        ],
      },
      { kind: 'sim', name: 'emi', caption: 'See the interest-versus-principal split year by year for any loan you are considering.' },
    ],
    quiz: [
      {
        q: 'An EMI is:',
        options: [
          { text: 'The fixed monthly payment covering interest and principal', correct: true, why: 'Exactly right.' },
          { text: 'The monthly interest only', correct: false, why: 'It includes principal.' },
          { text: 'The total interest on the loan', correct: false, why: 'That is the total, not the monthly figure.' },
        ],
      },
      {
        q: 'On a reducing-balance loan, the interest portion of the EMI:',
        options: [
          { text: 'Stays constant', correct: false, why: 'It falls over time.' },
          { text: 'Falls over time while the principal portion rises', correct: true, why: 'Exactly right.' },
          { text: 'Rises over time', correct: false, why: 'The opposite.' },
        ],
      },
      {
        q: 'A "flat 9%" loan rate usually means a real rate of about:',
        options: [
          { text: '9%', correct: false, why: 'Only if it were a reducing-balance rate.' },
          { text: '16–18%', correct: true, why: 'Exactly right — interest is charged on the full original amount.' },
          { text: '5%', correct: false, why: 'Lower, not higher.' },
        ],
      },
    ],
    takeaway: 'An EMI covers interest plus principal, and its split shifts over time. Convert flat rates to real rates, and test your EMI against a rate rise before signing.',
  },

  'l2-038': {
    id: 'l2-038',
    title: 'Processing Fees',
    subtitle: 'The cost that hides behind the interest rate',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'emi-split', caption: 'Fees never appear in the EMI, which is exactly why they get missed.' },
      { kind: 'p', text: 'A processing fee is a one-time charge for setting up the loan: paperwork, appraisal, legal and credit checks. It is charged upfront and never refunded, and for many Indian loans it is worth more than the difference between the best and second-best interest rate.' },
      {
        kind: 'table',
        caption: 'Typical one-time charges in India',
        headers: ['Fee', 'Typical amount'],
        rows: [
          ['Home loan processing fee', '0.25–1% of loan amount'],
          ['Vehicle loan processing', '₹2,500–₹6,000'],
          ['Personal loan processing', '1–3% of disbursed amount'],
          ['Education loan processing', '1–3%'],
          ['Loan against property', '1–2%'],
          ['Legal and valuation charges', '₹10,000–₹40,000'],
          ['Prepayment / foreclosure charge', '2–5% (varies widely)'],
          ['Late payment charge', '₹500–₹1,200 per instance'],
        ],
      },
      {
        kind: 'formula',
        label: 'Comparing offers honestly',
        expr: 'Compare lenders on total cost = (Interest over tenure) + (all fees) + (insurance you are forced to buy)',
        note: 'A 0.5% processing fee on a 20-year loan often exceeds one percentage point of rate difference.',
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Fees distort small rate differences',
        text: 'On a ₹50 lakh, 20-year loan, one percentage point of rate is about ₹7.5 lakh of interest. A 0.5% processing fee is ₹2.5 lakh paid on day one. So a lender charging 0.5% more interest but 0.5% less in fees is often the cheaper deal — which is why you must compare totals, not rates.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Forced insurance is a hidden fee',
        text: 'Lenders often require a credit life or asset insurance policy bundled with the loan. These are frequently overpriced. Ask for the premium separately and whether you can choose a cheaper provider — in many cases you can, and the choice is worth thousands.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Ask for every fee in writing before you accept.',
          'Negotiate the processing fee, especially for home loans.',
          'Check whether the prepayment charge applies and when.',
          'Insist on seeing the insurance premium separately.',
          'Ask whether fees are refundable if the loan does not disbursement.',
        ],
      },
    ],
    quiz: [
      {
        q: 'Why can a processing fee matter more than the interest rate when comparing lenders?',
        options: [
          { text: 'Because processing fees are larger on cheaper loans', correct: false, why: 'Unrelated.' },
          { text: 'Because on a long loan, a fraction of a percent in fees can exceed a percentage point of rate difference', correct: true, why: 'Exactly right.' },
          { text: 'Because processing fees are tax-deductible', correct: false, why: 'Not the reason.' },
        ],
      },
      {
        q: 'Bundled loan insurance should be:',
        options: [
          { text: 'Accepted as a free extra', correct: false, why: 'It is usually charged to you.' },
          { text: 'Priced separately so you can compare or provide your own', correct: true, why: 'Exactly right.' },
          { text: 'Refunded at the end of the loan', correct: false, why: 'Premiums are not refunded.' },
        ],
      },
      {
        q: 'A processing fee is generally:',
        options: [
          { text: 'Refundable if you close the loan early', correct: false, why: 'It is a one-time upfront cost.' },
          { text: 'A one-time upfront charge, separate from interest', correct: true, why: 'Correct.' },
          { text: 'Deducted from each EMI', correct: false, why: 'Usually charged at disbursement.' },
        ],
      },
    ],
    takeaway: 'Processing fees are one-time upfront costs that never come back. On long loans they can outweigh rate differences, so compare total cost and price bundled insurance separately.',
  },

  'l2-039': {
    id: 'l2-039',
    title: 'Prepayment',
    subtitle: 'Extra payments, and when lenders penalise them',
    minutes: 4,
    blocks: [
      { kind: 'p', text: 'Prepayment is paying more than the required EMI to reduce the outstanding balance early. It reduces the principal faster, which reduces future interest — usually saving a substantial amount. But many lenders charge a penalty, and floating-rate loans sometimes make prepaying less attractive.' },
      {
        kind: 'table',
        caption: 'Two ways to use extra money',
        headers: ['Option', 'Effect', 'Usually best when'],
        rows: [
          ['Prepayment — reduce tenure', 'Higher EMI, same end date', 'You want the debt gone sooner'],
          ['Prepayment — reduce EMI', 'Lower EMI, same end date', 'You want monthly relief'],
          ['Keep the loan, invest the cash', 'Loan interest continues, assets may grow', 'Loan rate is very low'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Which one to choose depends on your goal',
        text: 'Reducing tenure saves the most total interest. Reducing EMI gives you breathing room month to month. People who are stretched should reduce the EMI; people with spare capacity should reduce tenure.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Check the penalty and the floating-rate interaction',
        text: 'Prepayment charges of 2–5% are common, and some banks restrict prepayment on floating-rate loans entirely. Meanwhile, if your loan is floating and rates fall, your EMI falls anyway. Read the terms before deciding to prepay.',
      },
      {
        kind: 'formula',
        label: 'Is prepaying better than investing the same money?',
        expr: 'Compare the loan interest rate against the after-tax return you can realistically achieve',
        note: 'Prepay when the loan rate is high. When a loan is cheap and well below inflation, investing may be better.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Obtain a foreclosure statement before deciding.',
          'Ask for the exact penalty amount and when it applies.',
          'Prefer reducing tenure unless you need monthly relief.',
          'Never prepay using your emergency fund.',
          'Confirm the new EMI and revised schedule in writing.',
        ],
      },
      { kind: 'sim', name: 'emi', caption: 'Compare the interest with the tenure you would get after prepaying.' },
    ],
    quiz: [
      {
        q: 'Prepayment most directly reduces:',
        options: [
          { text: 'The interest rate', correct: false, why: 'Prepayment does not change the rate.' },
          { text: 'The outstanding principal, which reduces future interest', correct: true, why: 'Exactly right.' },
          { text: 'The processing fee', correct: false, why: 'Unrelated.' },
        ],
      },
      {
        q: 'Reducing tenure rather than EMI when prepaying will:',
        options: [
          { text: 'Save the most total interest', correct: true, why: 'Correct — you finish earlier.' },
          { text: 'Give the lowest possible monthly payment', correct: false, why: 'Reducing the EMI lowers the payment instead.' },
          { text: 'Void your insurance', correct: false, why: 'Unrelated.' },
        ],
      },
      {
        q: 'Before prepaying a loan you should:',
        options: [
          { text: 'Check whether the loan is fixed or floating and what the penalty is', correct: true, why: 'Exactly right.' },
          { text: 'Assume prepayment always saves money', correct: false, why: 'On a very cheap floating loan, investing may be better.' },
          { text: 'Wait until the loan ends', correct: false, why: 'That would forgo the savings entirely.' },
        ],
      },
    ],
    takeaway: 'Prepayment reduces principal and therefore future interest. Choose tenure reduction to save the most, EMI reduction for monthly relief, and always check the penalty and rate type first.',
  },

  'l2-040': {
    id: 'l2-040',
    title: 'Foreclosure',
    subtitle: 'Closing a loan early, and what it really costs',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'emi-split', caption: 'The balance you settle today is smaller than the interest you would have paid after it.' },
      { kind: 'p', text: 'Foreclosure is paying off a loan entirely before its scheduled end date. It is more than prepayment: you close the account, and in most Indian loans the lender charges a percentage of the outstanding amount for the privilege.' },
      {
        kind: 'table',
        caption: 'What a foreclosure statement contains',
        headers: ['Line', 'Meaning'],
        rows: [
          ['Outstanding principal', 'What you actually owe today'],
          ['Prepayment / foreclosure charge', 'Often 2–5% of the outstanding amount'],
          ['Interest till settlement date', 'Accrues until the closure date'],
          ['Other charges', 'Legal, valuation, notice fees'],
          ['Net amount payable', 'The figure you must pay to close the loan'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'The charge is often the deciding factor',
        text: 'On a ₹30 lakh loan with ₹18 lakh outstanding, a 4% foreclosure charge is ₹72,000. If the remaining interest you would pay is less than ₹72,000, foreclosing costs you money. Always compare the net settlement amount against the interest you would have paid.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Take the no-dues letter seriously',
        text: 'After foreclosure, obtain a written no-dues confirmation and keep it permanently. Banks have wrongly reported closed loans as outstanding, which damages credit records and blocks future borrowing. If it happens, dispute it with the bureau in writing.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Negotiate the charge',
        text: 'Foreclosure charges are more negotiable than interest rates, particularly if you are a salaried customer with a clean record, or you are switching to another lender. Banks also frequently waive part of it at the end of the tenure — always ask.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Request a foreclosure statement from every lender before comparing.',
          'Compare net settlement against remaining interest.',
          'Negotiate or ask for a waiver of the charge.',
          'Ensure the account is formally closed, not just transferred.',
          'Keep the no-dues letter permanently.',
        ],
      },
    ],
    quiz: [
      {
        q: 'Foreclosure charge is typically calculated on:',
        options: [
          { text: 'The original loan amount', correct: false, why: 'It is usually on the outstanding amount.' },
          { text: 'The outstanding principal at the time of closure', correct: true, why: 'Exactly right.' },
          { text: 'Your monthly EMI', correct: false, why: 'Unrelated.' },
        ],
      },
      {
        q: 'Before foreclosing, you should compare:',
        options: [
          { text: 'The interest rate of the new loan only', correct: false, why: 'Fees matter too.' },
          { text: 'The net settlement amount against the interest you would otherwise pay', correct: true, why: 'Exactly right.' },
          { text: 'Your credit score', correct: false, why: 'Unrelated to the decision.' },
        ],
      },
      {
        q: 'After paying off a loan early, keep the:',
        options: [
          { text: 'Original loan agreement only', correct: false, why: 'You need proof of closure.' },
          { text: 'Written no-dues confirmation, permanently', correct: true, why: 'Exactly right — banks do sometimes report closed loans as open.' },
          { text: 'Nothing further', correct: false, why: 'That risks future reporting errors.' },
        ],
      },
    ],
    takeaway: 'Foreclosure charges are usually 2–5% of the outstanding principal. Compare the net settlement against remaining interest, negotiate the charge, and always keep the no-dues letter.',
  },

  'l2-041': {
    id: 'l2-041',
    title: 'Default',
    subtitle: 'What happens when you stop paying — and how to avoid it',
    minutes: 5,
    blocks: [
      { kind: 'scene', name: 'minpayment-trap', caption: 'Missed payments escalate from a fee to an asset being sold. It starts with one date.' },
      { kind: 'p', text: 'Default is failing to make a required payment. It is the point where a financial problem becomes a financial crisis: your credit record is damaged, penalties accumulate, and in secured loans you can lose the asset.' },
      {
        kind: 'table',
        caption: 'The escalation of default',
        headers: ['Stage', 'What typically happens'],
        rows: [
          ['Missed payment', 'Late fee, penalty interest, notice to the borrower'],
          ['15–30 days', 'Credit bureau reporting begins, reminder calls'],
          ['60–90 days', 'Credit score drops sharply, collection calls, possible legal notice'],
          ['90–180 days', 'Secured: asset valued for sale. Unsecured: recovery from bank'],
          ['6–12 months', 'Asset sold or loan written off, recovery action continues'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Talk to the lender early — it genuinely works',
        text: 'Banks would far rather restructure than write off a loan. Many will reduce the EMI, extend the tenure, or offer a payment holiday if you approach them before missing payments. The recovery rates for restructured loans are far higher than for repossessed assets, because a restructured borrower keeps paying.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'A write-off is not forgiveness',
        text: 'When a bank writes off a loan, you still owe it — only the asset was recovered. You may need to declare the outstanding amount as income for tax, and recovery attempts continue for years. Settling for a portion is often far cheaper than the compounding legal route.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Never accept a loan settlement agent\'s promise',
        text: 'Anyone offering to "settle your credit card for half the amount" and then demanding payment upfront is usually committing fraud. Legitimate restructuring happens directly with the lender, never through an intermediary who asks for money first.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Contact the lender the moment you will miss a payment.',
          'Ask for restructuring in writing and keep the terms.',
          'Suspend the card immediately so new spending cannot compound it.',
          'Prioritise secured loans you can still keep over unsecured ones you cannot.',
          'Consider debt counselling or a non-profit adviser before making settlements.',
        ],
      },
    ],
    quiz: [
      {
        q: 'The most effective response to a payment you cannot make is to:',
        options: [
          { text: 'Ignore the notices', correct: false, why: 'That accelerates the damage.' },
          { text: 'Contact the lender before missing payments and ask about restructuring', correct: true, why: 'Exactly right.' },
          { text: 'Apply for another loan to cover it', correct: false, why: 'That compounds the problem.' },
        ],
      },
      {
        q: 'When a bank writes off a loan, the borrower:',
        options: [
          { text: 'Is forgiven the debt', correct: false, why: 'Not forgiven.' },
          { text: 'Still owes the amount, and recovery attempts continue', correct: true, why: 'Exactly right.' },
          { text: 'Is banned from borrowing for ten years', correct: false, why: 'No such automatic ban.' },
        ],
      },
      {
        q: 'A third party offering to settle your debt for a discount and asking for upfront payment is:',
        options: [
          { text: 'A helpful service', correct: false, why: 'Almost always fraudulent.' },
          { text: 'A warning sign of a scam, since legitimate restructuring goes through the lender', correct: true, why: 'Exactly right.' },
          { text: 'Legal under insolvency rules', correct: false, why: 'It is not a recognised route.' },
        ],
      },
    ],
    takeaway: 'Default escalates quickly and a write-off is not forgiveness. Contact the lender before you miss payments — restructuring is common and far better for everyone than repossession.',
  },
}