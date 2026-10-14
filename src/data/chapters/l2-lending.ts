import type { Chapter } from '../../types'

/** Level 2, chapters 47–50: the major secured loans and the arithmetic behind them. */
export const lending: Record<string, Chapter> = {
  'l2-047': {
    id: 'l2-047',
    title: 'Education Loans',
    subtitle: 'One of the few loans that reliably improves lifetime earnings',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'goal-ladder', caption: 'A degree is a long-dated goal with a very long payback — which is exactly what makes it financeable.' },
      { kind: 'p', text: 'An education loan funds tuition and living costs, usually secured by collateral and often with a moratorium period during which you pay only interest. It is one of the few categories of borrowing where the expected return is clearly high — because of what the education itself adds to lifetime earnings.' },
      {
        kind: 'table',
        caption: 'Education loan structure in India',
        headers: ['Aspect', 'Typical position'],
        rows: [
          ['Interest rate', '7–12%'],
          ['Tenure', '4–15 years after the course'],
          ['Moratorium', 'During the course plus 6–12 months'],
          ['Collateral', 'Often required, waived for top institutions'],
          ['Tax benefit', 'Section 80E — deduction on interest paid'],
          ['Covered costs', 'Tuition, hostel, travel, books, insurance'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: '80E makes this the cheapest debt you can take',
        text: 'Interest on an education loan is deductible under section 80E with no upper limit, for eight assessment years. Because it lowers your taxable income, the effective cost can drop by your marginal tax rate — making the after-tax cost meaningfully lower than the headline rate.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Under-estimating living costs is the standard mistake',
        text: 'Indian education loans are famously disbursed against a budget that under-counts hostel and mess costs, books, devices, travel home and currency needs. Students arrive unable to pay and borrow informally at far higher rates. Budget generously and check what the bank actually funds.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Compare the total cost over the full tenure',
        text: 'A lower rate with a longer tenure can cost more than a slightly higher rate repaid sooner. Ask for the total repayment figure for each option, and check whether the moratorium interest is capitalised or paid monthly.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Check what the lender actually disburses for living costs.',
          'Compare total repayment across lenders, not just rates.',
          'Ask about moratorium capitalisation.',
          'Keep the sanction letter — the 80E benefit depends on it.',
          'Repay interest during the moratorium if you can afford it.',
        ],
      },
    ],
    quiz: [
      {
        q: 'Section 80E allows deduction of:',
        options: [
          { text: 'Principal on any education loan', correct: false, why: 'Only interest is deductible.' },
          { text: 'Interest on an education loan, with no upper limit', correct: true, why: 'Exactly right.' },
          { text: 'Only loans from government banks', correct: false, why: 'Any qualifying education loan.' },
        ],
      },
      {
        q: 'The most common mistake in education loan planning is:',
        options: [
          { text: 'Choosing a bank too early', correct: false, why: 'Not the main issue.' },
          { text: 'Under-estimating living and ancillary costs beyond tuition', correct: true, why: 'Exactly right — and it pushes students to informal high-cost borrowing.' },
          { text: 'Taking a shorter tenure', correct: false, why: 'That usually helps.' },
        ],
      },
      {
        q: 'A moratorium period on an education loan means:',
        options: [
          { text: 'No payments are required until after the course, often with a further interest-only period', correct: true, why: 'Exactly right.' },
          { text: 'The interest rate is waived', correct: false, why: 'Interest usually applies or is capitalised.' },
          { text: 'The loan is cancelled if you fail', correct: false, why: 'Repayment is still owed.' },
        ],
      },
    ],
    takeaway: 'Education loans are among the few genuinely productive debts, and section 80E makes the after-tax cost very low. The standard mistake is under-funding living costs — budget for them properly.',
  },

  'l2-048': {
    id: 'l2-048',
    title: 'Home Loans',
    subtitle: 'The largest and longest debt most people take',
    minutes: 5,
    blocks: [
      { kind: 'p', text: 'A home loan is secured by the property, which is why rates in India are among the lowest available — typically 8.5–9.5%. It is also the largest and longest commitment most households take, and the one most likely to be compared badly.' },
      {
        kind: 'table',
        caption: 'Home loan essentials',
        headers: ['Aspect', 'Typical position'],
        rows: [
          ['Interest rate', '8.5–9.5%, often floating'],
          ['Tenure', '10–30 years, commonly 20'],
          ['Loan to value', 'Up to 90% for lower amounts'],
          ['Processing fee', '0.25–1% of the loan'],
          ['Legal and valuation', '₹15,000–₹50,000'],
          ['Prepayment', 'Often nil for individual, salaried borrowers'],
          ['Insurance', 'Home insurance and often a linked term plan'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Compare the total, not the EMI',
        text: 'A ₹50 lakh loan at 8.75% over 20 years versus 30 years differs by about ₹18 lakh in total interest. A home loan decision made on EMI alone is a decision made without the most important number.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Total cost of ownership is what matters',
        text: 'Property price, registration and stamp duty, maintenance, property tax, and renovation are all part of the cost. People stretch the loan because they focused on the EMI — and then have no capacity for the other running costs.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Check the floating-rate reset terms before signing',
        text: 'Ask exactly which benchmark your loan is linked to, how often it resets, and what your EMI would be if the rate rose by one and two percentage points. If that second number is unaffordable, you have borrowed too much.',
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'Prepayment terms have improved a lot',
        text: 'RBI guidelines removed most lock-in penalties for individual, salaried, self-employed borrowers on floating-rate home loans, and banks now compete on low or zero prepayment charges. Confirm the current terms in writing — they are a genuine negotiation point.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Compare total interest across tenures, not monthly EMI.',
          'Model the EMI at +1% and +2% rates.',
          'Budget for registration, maintenance and renovation separately.',
          'Keep the tenure close to your expected stay.',
          'Check prepayment terms before signing, and revisit annually.',
        ],
      },
      { kind: 'sim', name: 'emi', caption: 'Compare a 20-year home loan with a 30-year one at the same rate.' },
    ],
    quiz: [
      {
        q: 'The most important number when comparing home loans is:',
        options: [
          { text: 'The monthly EMI', correct: false, why: 'It hides the total cost.' },
          { text: 'The total interest over the full tenure', correct: true, why: 'Exactly right.' },
          { text: 'The loan-to-value ratio', correct: false, why: 'It matters for approval, not cost.' },
        ],
      },
      {
        q: 'Before signing a floating-rate home loan you should check:',
        options: [
          { text: 'Only the current rate', correct: false, why: 'It will change.' },
          { text: 'The reset frequency and what your EMI would be if rates rose by one or two percentage points', correct: true, why: 'Exactly right.' },
          { text: 'The banker\'s favourite rate', correct: false, why: 'Meaningless.' },
        ],
      },
      {
        q: 'Running costs to budget for alongside the EMI include:',
        options: [
          { text: 'Registration and stamp duty, maintenance, property tax and repairs', correct: true, why: 'Exactly right.' },
          { text: 'Nothing, the EMI covers everything', correct: false, why: 'It does not.' },
          { text: 'Only the insurance premium', correct: false, why: 'One item among several.' },
        ],
      },
    ],
    takeaway: 'Home loans are the cheapest credit available because the property secures them — but compare total interest, model a rate rise, and budget for running costs beyond the EMI.',
  },

  'l2-049': {
    id: 'l2-049',
    title: 'EMI Calculations',
    subtitle: 'Doing the arithmetic yourself',
    minutes: 4,
    blocks: [
      { kind: 'p', text: 'You do not need the EMI formula to be good at money, but you do need it to check a lender\'s arithmetic and to explore scenarios without applying for anything. Three inputs determine an EMI: principal, rate and tenure.' },
      { kind: 'formula',
        label: 'The formula',
        expr: 'EMI = P × r × (1+r)^n ÷ ((1+r)^n − 1)',
        note: 'r = annual rate ÷ 12 ÷ 100, n = tenure in months.' },
      {
        kind: 'example',
        title: 'A worked calculation',
        text: 'Borrow ₹10,00,000 at 9% for 20 years. r = 9 ÷ 12 ÷ 100 = 0.0075. n = 240. (1.0075)^240 ≈ 6.0229. EMI = 10,00,000 × 0.0075 × 6.0229 ÷ (6.0229 − 1) ≈ ₹8,527. Total repaid ≈ ₹20,46,480, of which roughly ₹10,46,480 is interest.',
      },
      {
        kind: 'table',
        caption: '₹10 lakh at 9% — the three variables compared',
        headers: ['Tenure', 'EMI', 'Total interest'],
        rows: [
          ['10 years', '₹11,246', '₹3,49,520'],
          ['15 years', '₹9,655', '₹6,37,900'],
          ['20 years', '₹8,527', '₹10,46,480'],
          ['25 years', '₹7,749', '₹14,24,700'],
          ['30 years', '₹7,164', '₹17,55,200'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Notice how rate and tenure differ in effect',
        text: 'Doubling the tenure nearly halves the EMI but more than doubles total interest. Doubling the rate from 4.5% to 9% on a fixed ten-year loan roughly doubles interest. Rate is a powerful variable; tenure is a choice about time.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Always check total interest, not EMI',
        text: 'The EMI is the number you can afford; total interest is the number you pay. Two loans with the same EMI can differ by lakhs in total cost if the tenures differ. Any comparison should quote both.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Work out EMI, total repayment and total interest for any quote.',
          'Recalculate with a rate one or two points higher.',
          'Test a shorter tenure to see the real saving.',
          'Add processing and other fees to the total before comparing.',
          'Use any spreadsheet, including the one in this app, to check a lender\'s figure.',
        ],
      },
      { kind: 'sim', name: 'emi', caption: 'Verify a lender\'s EMI yourself, then explore what a shorter tenure would cost.' },
      { kind: 'sim', name: 'sheet', caption: 'Build the calculation yourself in the spreadsheet using cell references and formulas.' },
    ],
    quiz: [
      {
        q: 'Three inputs determine an EMI:',
        options: [
          { text: 'Principal, interest rate and tenure', correct: true, why: 'Exactly right.' },
          { text: 'Income, age and credit score', correct: false, why: 'Those affect approval, not the EMI maths.' },
          { text: 'Insurance, fees and tenure', correct: false, why: 'Fees are separate from the EMI.' },
        ],
      },
      {
        q: 'Comparing two loans with the same EMI, which is the differentiator that matters?',
        options: [
          { text: 'The lender\'s logo', correct: false, why: 'Irrelevant.' },
          { text: 'Total interest over the respective tenures', correct: true, why: 'Exactly right.' },
          { text: 'The card colour', correct: false, why: 'Irrelevant.' },
        ],
      },
      {
        q: 'Doubling the tenure of a loan typically:',
        options: [
          { text: 'Reduces total interest', correct: false, why: 'It increases it.' },
          { text: 'Roughly halves the EMI and more than doubles total interest', correct: true, why: 'Exactly right.' },
          { text: 'Lowers the interest rate', correct: false, why: 'Unrelated.' },
        ],
      },
    ],
    takeaway: 'EMI is determined by principal, rate and tenure. Always compute total interest too — the EMI is what you can afford, total interest is what you actually pay.',
  },

  'l2-050': {
    id: 'l2-050',
    title: 'The Total Cost Of Borrowing',
    subtitle: 'The number that should decide every loan you take',
    minutes: 5,
    blocks: [
      { kind: 'p', text: 'Total cost of borrowing is everything you pay to have the money: all interest across the tenure, plus processing fees, legal charges, mandatory insurance, prepayment penalties and late fees. Almost every bad financial decision about borrowing comes from comparing offers on the EMI or the headline rate instead of this number.' },
      {
        kind: 'formula',
        label: 'The complete picture',
        expr: 'Total cost = Total of all EMIs + All fees + Mandatory insurance − Any refunds or subsidies',
        note: 'Then subtract the value of what you received, to get the real cost of the money itself.',
      },
      {
        kind: 'example',
        title: 'Two home loan offers compared honestly',
        text: 'Offer A: 8.5% over 20 years, 0.5% processing, ₹20,000 legal. Offer B: 8.9% over 20 years, 0.1% processing, no legal charge. On ₹50 lakh, A costs roughly 1.3% more interest (about ₹6.4 lakh) but saves nothing extra in fees. Offer A is genuinely more expensive — and a borrower comparing EMIs or rates might pick either without noticing.',
      },
      {
        kind: 'table',
        caption: 'Everything that belongs in the total',
        headers: ['Component', 'Often forgotten?'],
        rows: [
          ['Interest across the full tenure', 'No'],
          ['Processing fee', 'Yes'],
          ['Legal, valuation and documentation charges', 'Yes'],
          ['Mandatory bundled insurance', 'Yes'],
          ['Prepayment or foreclosure penalty', 'Yes'],
          ['Late payment charges', 'Yes'],
          ['Bounced mandate charges', 'Yes'],
          ['Impact on your 80C and tax position', 'Rarely'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Also include what you give up',
        text: 'Fees are not the only hidden cost. A loan that locks up your salary account balance for two years, or that requires you to keep a fixed deposit you would otherwise hold liquid, has a real cost too. Include opportunity cost when the numbers are close.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Ask for it in writing, in one place',
        text: 'Request a written "total amount repayable" and a fee schedule. If a lender cannot state both clearly, that itself is information. Written terms also protect you when the offer is rolled out verbally or verbally amended.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Ask every lender for total repayment and a full fee schedule.',
          'Add all fees into the comparison as if they were interest.',
          'Price bundled insurance separately and ask for alternatives.',
          'Check prepayment charges before signing.',
          'Compare at least three offers before you commit.',
        ],
      },
      { kind: 'sim', name: 'emi', caption: 'See the total interest figure that sits behind any EMI you are quoted.' },
    ],
    quiz: [
      {
        q: 'Total cost of borrowing includes:',
        options: [
          { text: 'Only the interest on the principal', correct: false, why: 'It includes much more.' },
          { text: 'All interest plus fees, charges and mandatory insurance over the life of the loan', correct: true, why: 'Exactly right.' },
          { text: 'The monthly EMI', correct: false, why: 'The EMI is a payment schedule, not a cost.' },
        ],
      },
      {
        q: 'Why comparing lenders only on EMI is dangerous?',
        options: [
          { text: 'Because EMIs are hidden in loans', correct: false, why: 'They are stated openly.' },
          { text: 'Because a lower EMI can come from a longer tenure, which increases total interest', correct: true, why: 'Exactly right.' },
          { text: 'Because EMIs change daily', correct: false, why: 'They do not.' },
        ],
      },
      {
        q: 'A lender cannot state a total amount repayable. What does that suggest?',
        options: [
          { text: 'Nothing unusual', correct: false, why: 'It is unusual and unhelpful.' },
          { text: 'It is worth proceeding carefully, since transparency on cost is a reasonable expectation', correct: true, why: 'Exactly right.' },
          { text: 'The loan is interest-free', correct: false, why: 'Unrelated.' },
        ],
      },
    ],
    takeaway: 'Total cost = all interest plus all fees plus forced insurance. Ask for it in writing, price insurance separately, and never compare loans on EMI or headline rate alone.',
  },
}