import type { Chapter } from '../../types'

/** Level 2, chapters 6–12: the mechanics of your payslip. */
export const salary: Record<string, Chapter> = {
  'l2-006': {
    id: 'l2-006',
    title: 'Salary Structure',
    subtitle: 'The same CTC, many different take-home amounts',
    minutes: 5,
    blocks: [
      { kind: 'p', text: 'A salary structure is the breakdown of your CTC into components, each with different tax treatment. Two offers of the same CTC can produce take-home pay differing by a lakh a year, purely because of how the components are arranged.' },
      {
        kind: 'table',
        caption: 'Typical components of an Indian salary structure',
        headers: ['Component', 'What it is', 'Tax treatment'],
        rows: [
          ['Basic salary', 'The base, everything is calculated from it', 'Fully taxable'],
          ['HRA', 'House rent allowance', 'Part exempt if you pay rent'],
          ['Conveyance allowance', 'Travel allowance', 'Exempt up to ₹1,600 a month'],
          ['Special allowance', 'Covers the rest of CTC', 'Fully taxable'],
          ['Bonus / incentive', 'Linked to targets', 'Fully taxable when paid'],
          ['LTA', 'Leave travel reimbursement', 'Taxable as a perquisite'],
          ['ESIC contribution', 'Employee share for low-wage workers', 'Not part of CTC deductions for most'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Basic salary is the lever that changes everything',
        text: 'PF, gratuity and the NPS deduction are all calculated on basic. A structure with 50% basic gives you more retirement accumulation and a bigger gratuity, but lower HRA exemption and more tax. When negotiating, the basic percentage is often worth more than the headline number.',
      },
      {
        kind: 'formula',
        label: 'Key derivations',
        expr: 'Employer PF = 12% of basic (capped at ₹15,000) · Gratuity = 4.81% of basic · Employee PF = 12% of basic',
        note: 'Raise basic and retirement benefits rise; raise special allowance and taxable income rises.',
      },
      { kind: 'sim', name: 'salary-slip', caption: 'Build a structure yourself and watch take-home change as basic moves.' },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Ask for the break-up in writing before joining',
        text: 'Request the full component list and the expected net monthly pay. A company that will not disclose the break-up before you join has no reason to disclose it afterwards — and you cannot negotiate a number you cannot decompose.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Compare offers on monthly take-home, not CTC.',
          'Ask for the component-wise break-up.',
          'Check the basic percentage and negotiate it upward if there is room.',
          'Verify HRA exemption eligibility — you need rent receipts and the landlord PAN if annual rent exceeds ₹1 lakh.',
          'Recheck your tax regime choice after the first year with real figures.',
        ],
      },
    ],
    quiz: [
      {
        q: 'What is a salary structure?',
        options: [
          { text: 'The total CTC divided by twelve', correct: false, why: 'That is a monthly figure, not a structure.' },
          { text: 'The component-wise breakdown of CTC, where each part is taxed differently', correct: true, why: 'Exactly right.' },
          { text: 'The salary revision timeline', correct: false, why: 'Unrelated.' },
        ],
      },
      {
        q: 'Why does raising basic salary matter beyond the gross amount?',
        options: [
          { text: 'It has no other effect', correct: false, why: 'It changes PF, gratuity and tax treatment.' },
          { text: 'Because PF, gratuity and NPS are all calculated on basic', correct: true, why: 'Correct.' },
          { text: 'It reduces the HRA you receive', correct: false, why: 'HRA is usually a percentage of basic, so it usually rises with basic.' },
        ],
      },
      {
        q: 'What should you request from an employer before accepting an offer?',
        options: [
          { text: 'Only the CTC figure', correct: false, why: 'CTC alone is not comparable.' },
          { text: 'The component-wise break-up and expected monthly take-home', correct: true, why: 'Exactly right.' },
          { text: 'The names of your colleagues', correct: false, why: 'Not relevant to your finances.' },
        ],
      },
    ],
    takeaway: 'A salary structure is a break-up of CTC where each component is taxed differently. Compare offers on take-home, and remember basic drives PF, gratuity and NPS.',
  },

  'l2-007': {
    id: 'l2-007',
    title: 'CTC Vs Gross Salary Vs Take-Home Salary',
    subtitle: 'Three numbers, one offer letter',
    minutes: 5,
    blocks: [
      { kind: 'p', text: 'CTC is what your employer spends. Gross salary is what you earn before deductions. Take-home is what reaches your bank. The gap between them is often 30–35%, and almost all salary confusion comes from comparing the wrong number.' },
      {
        kind: 'table',
        caption: 'The same offer, three ways',
        headers: ['Measure', 'Annual figure', 'Who it belongs to'],
        rows: [
          ['CTC', '₹12,00,000', 'The company'],
          ['Gross salary', '₹9,10,000', 'You, before deductions'],
          ['Take-home', '₹7,20,000', 'You, actually credited'],
        ],
      },
      {
        kind: 'formula',
        label: 'Reading a CTC number',
        expr: 'Monthly take-home ≈ (CTC − employer PF − gratuity − insurance − perquisites − your deductions) ÷ 12',
        note: 'Use this as a sanity check when an offer sounds too good.',
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Gratuity is deferred salary, not extra',
        text: 'Roughly 4.81% of basic appears in every CTC as a gratuity provision. It is only payable after five years of continuous service, and only on leaving. If you leave after two years, that provision never reaches you — so a CTC heavy on gratuity is worth less than it looks.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'The trap of a high CTC with an expensive house',
        text: 'A ₹20 lakh CTC with an ₹80,000 per month house loan leaves less disposable income than a ₹14 lakh CTC with no loan. Optimising CTC alone while ignoring EMIs is why some people earn more and save less.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'The 60/40 question to ask',
        text: 'For any offer, ask what the monthly take-home will be and what the unavoidable EMIs are. Then compute take-home minus EMIs. That number, not CTC, determines what you can save and invest.',
      },
      { kind: 'sim', name: 'salary-slip', caption: 'Move the basic-salary slider and watch how the same CTC produces different take-home amounts.' },
    ],
    quiz: [
      {
        q: 'CTC differs from gross salary because CTC:',
        options: [
          { text: 'Includes employer-side costs like PF and gratuity that never reach you', correct: true, why: 'Correct.' },
          { text: 'Is calculated after tax', correct: false, why: 'The opposite — CTC is before your deductions.' },
          { text: 'Includes your house rent', correct: false, why: 'Unrelated.' },
        ],
      },
      {
        q: 'Gratuity included in CTC is best described as:',
        options: [
          { text: 'A guaranteed bonus paid every year', correct: false, why: 'It is not paid annually.' },
          { text: 'A provision payable only after about five years of continuous service', correct: true, why: 'Correct — leave early and it never arrives.' },
          { text: 'An insurance premium', correct: false, why: 'Unrelated.' },
        ],
      },
      {
        q: 'Two offers, ₹20 lakh CTC with an ₹80,000 EMI versus ₹14 lakh CTC with no EMI. Which leaves more to save?',
        options: [
          { text: 'The ₹20 lakh offer', correct: false, why: 'The EMI consumes the difference.' },
          { text: 'The ₹14 lakh offer, because take-home minus EMIs is higher', correct: true, why: 'Exactly right — compare disposable income.' },
          { text: 'They are identical', correct: false, why: 'They are clearly different.' },
        ],
      },
    ],
    takeaway: 'CTC belongs to the company, gross belongs to you before deductions, take-home is reality. Always compare offers on take-home minus unavoidable EMIs.',
  },

  'l2-008': {
    id: 'l2-008',
    title: 'Salary Slips',
    subtitle: 'Your most important financial document',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'salary-deductions', caption: 'Every payslip is this same shape: gross in, deductions out, take-home in your account.' },
      { kind: 'p', text: 'A payslip is the monthly record of what you earned and what was deducted. It is the evidence for your income when applying for a loan, the basis for your tax return, and the document that reveals errors you would otherwise never notice.' },
      {
        kind: 'table',
        caption: 'What a payslip shows',
        headers: ['Section', 'Entries', 'Why it matters'],
        rows: [
          ['Earnings', 'Basic, HRA, allowances, overtime, bonus', 'Confirms gross pay and structure'],
          ['Deductions', 'PF, professional tax, TDS, income tax, insurance', 'Shows what leaves and when'],
          ['Employer contribution', 'PF, gratuity, insurance', 'Confirms your true CTC value'],
          ['Net pay', 'Credited amount and date', 'Compare against your bank'],
          ['Year-to-date', 'Cumulative totals for the financial year', 'Useful for tax planning mid-year'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Check three numbers every month',
        text: 'First, net pay matches what reached your account. Second, TDS appears and is roughly on track. Third, PF is deposited for both your share and your employer\'s share. A missing employer PF credit is a genuine payroll error and is worth raising, because it compounds silently for years.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Retrospective TDS refunds take forever',
        text: 'If your employer over-deducted TDS all year, you can claim a refund, but it is usually only settled when you file your return — often many months later. For many people that delay is what makes the tax feel so heavy. Claiming deductions properly through your employer reduces this.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Download every payslip the day it is issued.',
          'Reconcile net pay against your bank credit.',
          'Keep them all — lenders often ask for three months\' history.',
          'Note the year-to-date TDS to check your tax position mid-year.',
          'Query discrepancies in writing and keep the reply.',
        ],
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Use year-to-date numbers mid-year',
        text: 'By December, if year-to-date TDS already exceeds your expected liability, you can inform your employer to adjust the remaining months. That single conversation often returns several thousand rupees.',
      },
    ],
    quiz: [
      {
        q: 'Which payslip issue is most worth raising with HR?',
        options: [
          { text: 'A different payslip format', correct: false, why: 'Formatting is not material.' },
          { text: 'Your employer\'s PF contribution not being credited', correct: true, why: 'Exactly right — it is your money and it compounds.' },
          { text: 'The date the slip is issued', correct: false, why: 'Minor.' },
        ],
      },
      {
        q: 'TDS over-deducted during the year is refunded:',
        options: [
          { text: 'Automatically within 30 days', correct: false, why: 'Not automatic.' },
          { text: 'Usually only when you file your income tax return, often months later', correct: true, why: 'Correct.' },
          { text: 'Only if you request it in writing', correct: false, why: 'It comes with the return assessment.' },
        ],
      },
      {
        q: 'Keeping payslips matters for loan applications because:',
        options: [
          { text: 'Banks require three months of history as income proof', correct: true, why: 'Exactly right.' },
          { text: 'It improves your credit score', correct: false, why: 'Unrelated to score.' },
          { text: 'It reduces your tax', correct: false, why: 'Unrelated.' },
        ],
      },
    ],
    takeaway: 'Your payslip is the document behind your income. Reconcile net pay monthly, verify both PF contributions appear, and use year-to-date TDS to avoid an over-deduction.',
  },

  'l2-009': {
    id: 'l2-009',
    title: 'Deductions',
    subtitle: 'Why your salary is smaller than your gross',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'emi-split', caption: 'Deductions work like loan EMIs: part is recoverable, part is genuinely gone.' },
      { kind: 'p', text: 'A deduction is money withheld from your gross pay before it reaches you. Most deductions are recoverable or deferred rather than truly lost — which is the key thing to understand, because the difference between the two determines whether you should worry.' },
      {
        kind: 'table',
        caption: 'Deductions and what they really are',
        headers: ['Deduction', 'Recoverable?', 'How it comes back'],
        rows: [
          ['Employee PF contribution', 'Yes, mostly', 'Accrues in your EPF account, claimable after vesting'],
          ['Professional tax', 'No', 'A genuine state tax'],
          ['TDS on salary', 'Partly', 'Set off against final tax liability; excess refunded'],
          ['Group insurance premium', 'Partly', 'Sometimes via free-cover or claim'],
          ['Salary advance recovery', 'Yes', 'Simply not paid out this month'],
          ['Notice pay recovery', 'Yes', 'Withheld from final settlement'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Deduction is not the same as loss',
        text: 'Employee PF looks like a 12% cut but the money sits in your own account. TDS is not a gift to the government — it is advance tax, refunded or adjusted against actual liability. Only professional tax and genuine excess TDS are real costs.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Use your deductions properly',
        text: 'Declare HRA exemption with rent receipts, claim 80D health insurance, and opt for the NPS route where it suits your tax position. Each declared deduction lowers taxable income — and an unclaimed deduction is money you handed over for nothing.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Check the salary-advance trap',
        text: 'Salary advances are treated as taxable income in some circumstances unless recovered before year end. They also shrink your take-home now to cover an expense — borrowing from yourself at effectively zero return while your salary is taxed. Read the terms before accepting one.',
      },
    ],
    quiz: [
      {
        q: 'Which deduction is genuinely a real cost you cannot recover?',
        options: [
          { text: 'Employee PF contribution', correct: false, why: 'It accumulates in your own EPF account.' },
          { text: 'Professional tax', correct: true, why: 'Correct — it is a real state levy.' },
          { text: 'TDS deducted beyond your actual liability', correct: false, why: 'That excess is refunded on assessment.' },
        ],
      },
      {
        q: 'Employee PF is best described as:',
        options: [
          { text: 'A permanent loss of 12% of your salary', correct: false, why: 'It is not lost — it is your money, deferred.' },
          { text: 'Deferred money that accumulates in your own EPF account', correct: true, why: 'Exactly right.' },
          { text: 'An insurance premium', correct: false, why: 'Different thing.' },
        ],
      },
      {
        q: 'Why should you declare HRA exemption to your employer?',
        options: [
          { text: 'It increases your gross salary', correct: false, why: 'Gross is unchanged.' },
          { text: 'Because it lowers taxable income and reduces the TDS withheld each month', correct: true, why: 'Exactly right.' },
          { text: 'It makes you eligible for a promotion', correct: false, why: 'Unrelated.' },
        ],
      },
    ],
    takeaway: 'Most deductions are recoverable or deferred, not lost. Declare HRA and 80D properly so less is withheld, and treat only professional tax and genuine excess TDS as real cost.',
  },

  'l2-010': {
    id: 'l2-010',
    title: 'Provident Fund',
    subtitle: 'The largest retirement pot most salaried Indians have',
    minutes: 5,
    blocks: [
      { kind: 'scene', name: 'interest-growth', caption: 'PF compounds for decades. The longer it stays, the more the curve does the work.' },
      { kind: 'p', text: 'The Employees\' Provident Fund is a mandatory retirement savings scheme for most salaried employees. Both you and your employer contribute 12% of basic salary, and the government contributes a small additional share in many cases. It is tax-free, and for most people it is the single largest retirement asset they will ever hold.' },
      {
        kind: 'table',
        caption: 'The EPF structure at a glance',
        headers: ['Element', 'Detail'],
        rows: [
          ['Your contribution', '12% of basic salary'],
          ['Employer contribution', '12% of basic salary'],
          ['Government co-contribution', '0.5% of basic for eligible earners, up to ₹5,000'],
          ['Interest rate', 'Declared annually; around 8–8.25% in recent years'],
          ['Tax treatment', 'Contributions and interest are largely tax-free under 80C'],
          ['Vesting', 'Employer and government share vest over five years of service'],
          ['Withdrawal', 'On retirement, resignation after five years, or after two years if unemployed'],
        ],
      },
      {
        kind: 'formula',
        label: 'What EPF holds at retirement',
        expr: 'Monthly contribution ≈ 12% of basic + 12% of basic + government share, compounded for 30+ years',
        note: 'On a ₹50,000 basic salary, that is ₹12,000 a month of your own money alone, before your employer adds more.',
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Do not touch it for short-term needs',
        text: 'EPF withdrawals before five years attract tax and lose you the government contribution and any interest on withdrawn amounts. If you need ₹2 lakh urgently, a personal loan at 12% is far cheaper than wrecking a retirement pot that has decades of compounding left.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'The interest rate can change',
        text: 'EPF interest is declared by government each year and has ranged from roughly 7.5% to 8.25%. It is not guaranteed like an FD rate, so do not base long-term calculations on the highest figure you have seen.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Check your balance twice a year',
        text: 'Login to the EPF member portal using your UAN and check that both contributions appear each month. Payroll errors in employer contributions are common and go unnoticed for years, because nobody looks. The balance is also the number that powers your old-age pension and gratuity calculation.',
      },
      {
        kind: 'table',
        caption: 'EPF versus other retirement options',
        headers: ['Option', 'Return', 'Tax', 'Flexibility'],
        rows: [
          ['EPF', '~8–8.25%', 'Tax-free under 80C', 'Very low until 5 years'],
          ['PPF', '~7–7.5%', 'Tax-free under 80C', '15-year lock'],
          ['NPS', '~8–10% long term', 'Deferred until withdrawal', 'Locked till 60'],
          ['Fixed deposit', '6–7.5%', 'Fully taxable', 'Moderate'],
        ],
      },
    ],
    quiz: [
      {
        q: 'Your total EPF contribution each month is normally:',
        options: [
          { text: '12% of your salary, all from you', correct: false, why: 'The employer contributes an equal 12%.' },
          { text: '24% of basic — 12% yours and 12% your employer\'s — plus a small government share', correct: true, why: 'Exactly right.' },
          { text: '18% of gross', correct: false, why: 'It is calculated on basic, not gross.' },
        ],
      },
      {
        q: 'Withdrawing from EPF before five years of service usually:',
        options: [
          { text: 'Has no effect if you repay within a year', correct: false, why: 'Interest for the missing period is lost, not simply interest.' },
          { text: 'Attracts tax and forfeits the government contribution', correct: true, why: 'Correct — it is an expensive source of short-term money.' },
          { text: 'Is impossible at all', correct: false, why: 'It is possible but heavily penalised.' },
        ],
      },
      {
        q: 'Why check your EPF balance twice a year?',
        options: [
          { text: 'Because the interest rate changes often', correct: false, why: 'Unrelated to the checking itself.' },
          { text: 'Because employer contribution errors go unnoticed for years otherwise', correct: true, why: 'Exactly right — nobody else is checking.' },
          { text: 'To increase your contribution', correct: false, why: 'Checking does not change contributions.' },
        ],
      },
    ],
    takeaway: 'EPF is 24% of basic combined, tax-free and locked — the biggest retirement pot most salaried people get. Do not raid it for short-term needs, and verify contributions twice a year.',
  },

  'l2-011': {
    id: 'l2-011',
    title: 'TDS',
    subtitle: 'Tax paid before you receive the money',
    minutes: 5,
    blocks: [
      { kind: 'scene', name: 'money-flow', caption: 'TDS is removed at several points in the flow — salary, interest, rent, dividends — and all of it lands on one form.' },
      { kind: 'p', text: 'Tax Deducted at Source means tax is taken from your payment at the source before you get it. It exists so that people with regular incomes pay tax regularly rather than in one lump at year end. Understanding it is essential because it is the single biggest source of confusion in Indian personal finance.' },
      {
        kind: 'table',
        caption: 'TDS rates on common income types',
        headers: ['Income type', 'Typical TDS rate', 'Threshold'],
        rows: [
          ['Salary', 'Slab rates, no 87A rebate', 'After standard deduction'],
          ['Interest from bank', 'As per slab', 'Above ₹10,000 a year'],
          ['FD / RD interest', 'As per slab', 'Above ₹10,000 a year'],
          ['Dividends', 'As per slab', 'Above ₹5,000 a year'],
          ['Rent (landlord)', '1–2% (10% if PAN not given)', '₹50,000 per month'],
          ['Salary paid to PAN-less', '20%', 'Any amount'],
          ['Professional fees above ₹30,000', '2%', '₹30,000 a year'],
          ['Commission (goods)', '5%', '₹20,000 a year'],
          ['Contract payments', '1–2%', '₹30,000 a year'],
          ['NRI income', 'as applicable', 'Various'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'TDS is not the final tax',
        text: 'It is an estimate. Over the year, your actual liability is computed on your total income. If TDS exceeds it, you get a refund after filing your return. If it is short, you pay the difference — often with interest. Most "how do I get my TDS back" questions are answered by filing the return.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'The Form 26AS trap',
        text: 'Form 26AS lists TDS deducted across all sources. Most people look only at their salary slip and assume nothing else was deducted — so they file a return claiming a refund they cannot get, or pay extra tax. Check 26AS annually before filing.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Give your PAN or suffer',
        text: 'Without a PAN, the TDS rate roughly doubles — for instance 20% instead of the slab rate on rent, and higher on many payments. If you have no PAN, getting one is usually the highest-return financial task available to you.',
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'Advance tax and the 85C equalisation credit',
        text: 'If your employer deducted more TDS than your final liability allows, salary offers an 85C equalisation benefit that reduces the excess — but it appears in your salary and is itself taxable, so many people prefer the larger refund instead. Ask your payroll team which applies to you.',
      },
    ],
    quiz: [
      {
        q: 'TDS is best described as:',
        options: [
          { text: 'A tax paid in advance, deducted before you receive income', correct: true, why: 'Exactly right.' },
          { text: 'A penalty for late filing', correct: false, why: 'Unrelated.' },
          { text: 'A fee charged by the bank', correct: false, why: 'Unrelated to banks.' },
        ],
      },
      {
        q: 'If your total TDS across all sources exceeds your actual tax liability, you:',
        options: [
          { text: 'Lose the excess', correct: false, why: 'It is recoverable.' },
          { text: 'Get a refund when you file your income tax return', correct: true, why: 'Correct.' },
          { text: 'Can claim it in your next salary without filing', correct: false, why: 'Usually requires filing first, unless the 85C equalisation route applies.' },
        ],
      },
      {
        q: 'Why should you check Form 26AS before filing?',
        options: [
          { text: 'It is required by the bank', correct: false, why: 'It is a tax document.' },
          { text: 'Because TDS may have been deducted by banks or landlords that do not appear on your salary slip', correct: true, why: 'Exactly right.' },
          { text: 'It reduces your PF', correct: false, why: 'Unrelated.' },
        ],
      },
    ],
    takeaway: 'TDS is advance tax, not the final figure — excess is refunded when you file your return. Always check Form 26AS to see deductions from every source, not just your payslip.',
  },

  'l2-012': {
    id: 'l2-012',
    title: 'Professional Tax',
    subtitle: 'A small state tax you cannot avoid',
    minutes: 3,
    blocks: [
      { kind: 'scene', name: 'dashboard', caption: 'Professional tax is one line on the dashboard — small, but one of the few deductions that is truly a cost.' },
      { kind: 'p', text: 'Professional tax is a state-level levy, mostly levied on salaried employees and charged in your payroll. The amounts are small — often ₹100 to ₹200 a month — but it appears on every payslip and is one of the few deductions that is genuinely not recoverable.' },
      {
        kind: 'table',
        caption: 'How professional tax works',
        headers: ['Aspect', 'Detail'],
        rows: [
          ['Who imposes it', 'State governments, under the State Finance Commission\'s list'],
          ['Typical amount', '₹50–₹200 a month, capped at an annual maximum'],
          ['Who pays', 'Employees, and in some states employers too'],
          ['When deducted', 'Monthly, usually alongside TDS'],
          ['Refundable?', 'No — it is a real cost'],
          ['Deduction from income tax', 'Yes, deductible against total income'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Small but worth understanding once',
        text: 'At ₹200 a month you pay ₹2,400 a year. It is not worth optimising, but it is worth recognising for what it is: a real tax with no refund. That distinction matters when you review your deductions and wonder which ones are recoverable.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Self-employed people usually pay it too',
        text: 'If you are a freelancer or consultant, professional tax often applies to you directly rather than through an employer, and the amount varies by state. Check your state\'s slab and pay it before your return is filed, or it counts as an outstanding liability.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Find your state slab online',
        text: 'Each state publishes its own professional tax slabs. For an out-of-state job or a move, the amount changes. When you change jobs or states, verify the deduction on your first payslip rather than assuming it carries over.',
      },
    ],
    quiz: [
      {
        q: 'Professional tax is:',
        options: [
          { text: 'A central government income tax', correct: false, why: 'It is levied by states.' },
          { text: 'A state-level levy on employment, deducted from salary', correct: true, why: 'Correct.' },
          { text: 'Refundable when you file your return', correct: false, why: 'It is not refundable.' },
        ],
      },
      {
        q: 'Unlike TDS or PF, professional tax is:',
        options: [
          { text: 'Large', correct: false, why: 'It is usually small.' },
          { text: 'A genuine permanent cost with no refund', correct: true, why: 'Exactly right.' },
          { text: 'Deducted only annually', correct: false, why: 'It is usually monthly.' },
        ],
      },
      {
        q: 'Freelancers generally:',
        options: [
          { text: 'Are exempt from professional tax', correct: false, why: 'Many states charge self-employed professionals too.' },
          { text: 'May need to pay it directly under their state\'s slab', correct: true, why: 'Correct — check your state\'s rules.' },
          { text: 'Pay it only if they earn over ₹10 lakh', correct: false, why: 'The thresholds are much lower and vary by state.' },
        ],
      },
    ],
    takeaway: 'Professional tax is a small, real, non-refundable state levy. Not worth optimising, but worth recognising as one of the few deductions that is genuinely a cost.',
  },
}