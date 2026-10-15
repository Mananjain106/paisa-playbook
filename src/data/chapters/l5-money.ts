import type { Chapter } from '../../types'
import { scene, sim } from '../../lib/chapter-blocks'
import { l5Illustrative, l5Rule, l5Sources } from '../../lib/l5-blocks'

/**
 * Level 5, band one, batch 2 — chapters l5-005 to l5-014.
 *
 * Benefits, the provident fund, taxation, then the machinery of a personal money
 * system: a monthly routine, an emergency fund, sinking funds, budgeting
 * systems, zero-based budgeting, the limits of percentage frameworks and
 * cash-flow timing.
 *
 * Every statutory figure quoted here was verified against the official source
 * linked at the end of the chapter on 15 October 2026: the EPF wage ceiling that
 * rose to ₹25,000 on 17 September 2026, the 8.33% / 3.67% employer split and
 * 8.25% EPF interest for FY 2025-26, the ₹20 lakh gratuity exemption, the ₹200
 * per meal benefit exemption under the Income Tax Rules, 2026, the unchanged
 * tax-year-2026-27 slabs and the ₹5 lakh DICGC deposit-insurance limit. Each
 * chapter owns its illustration and its lab — no two share either.
 */
export const l5Money: Record<string, Chapter> = {
  'l5-005': {
    id: 'l5-005',
    title: 'Employee Benefits',
    subtitle: 'A benefits line is priced, not counted.',
    minutes: 10,
    blocks: [
      scene('benefit-stack', 'A benefits line sorted into what is really deferred pay, what is a tax-free allowance, and what disappears on your last working day.'),
      { kind: 'p', text: 'Offers are compared on CTC, and benefits are usually the part of CTC nobody prices. Two offers with the same number can differ by more than a lakh a year in what the benefits are worth to you, and the difference is not random: it comes from which benefits are deferred pay, which are tax-free allowances, and which are rented protection that ends when the job does.' },
      { kind: 'p', text: 'Price every benefit on three questions. What is it worth in rupees this year? Would the same rupees as salary be taxed? And does it survive you leaving? A benefit that fails the third question is not worthless — it is just not savings.' },

      { kind: 'h', text: 'What the benefits line actually contains' },
      {
        kind: 'table',
        caption: 'The common components of a salaried benefits line',
        headers: ['Benefit', 'What it is', 'Survives leaving?', 'Tax treatment'],
        rows: [
          ['Employer EPF (12% of PF wages)', 'Your money, moving to an account you own', 'Yes — the UAN follows you', 'Exempt, and the interest is exempt'],
          ['Employer EPS (8.33% of wages)', 'A pension contribution, not a balance', 'Yes — through the UAN', 'Exempt while it accrues'],
          ['Gratuity accrual', 'Deferred pay, payable at five years of service', 'No — it is paid out at exit', 'Exempt up to ₹20 lakh over your lifetime'],
          ['Employer NPS contribution', 'Your money in a pension account', 'Yes — it is your PRAN', 'Deductible up to 14% of salary even in the new regime'],
          ['Meal card or voucher', 'A tax-free allowance for meals', 'No', 'Exempt up to ₹200 per meal if given as a voucher'],
          ['Group health insurance', 'Cover rented from your employer', 'No', 'Its value is not taxed, and it is also not yours'],
          ['Group term life', 'Cover rented from your employer', 'No', 'Not taxed, and it is usually far below what a dependant needs'],
        ],
      },
      l5Rule(
        'Gratuity is deferred pay with a five-year gate',
        'Gratuity is calculated as 15 days\' wages for each completed year of service, where a month\'s wages are taken as last drawn basic plus dearness allowance divided by 26. It becomes payable after five years of continuous service, and is exempt from tax up to ₹20,00,000 in a lifetime. Because most employers accrue it inside CTC, a large part of what looks like a benefit on day one is money you cannot touch until either five years pass or you leave.',
      ),

      { kind: 'h', text: 'The two benefits whose tax treatment changed' },
      { kind: 'p', text: 'The tax treatment of benefits is not static, and two of them moved recently. The exemption for employer-provided meals rose from ₹50 to ₹200 per meal under the Income Tax Rules, 2026, effective from April 2026 — at two meals a day over about 22 working days that is roughly ₹8,800 a month that can be paid as a voucher instead of taxed salary. The exemption applies to food provided as a card or voucher, not to a cash allowance: the same rupees paid as cash are simply salary.' },
      { kind: 'p', text: 'The second change is the shape of the regime itself. The new regime does not allow the house rent allowance exemption, the leave travel concession exemption or the section 80C deductions, so in a benefits negotiation those have no tax value at all if you are on the new regime. The employer NPS contribution is the exception: it is deductible up to 14% of salary under the new regime and 10% under the old one, which makes it the rare benefit that works better in the new regime than the old.' },
      l5Illustrative('The rupee values in this chapter and in the lab are invented salaries and illustrative cover costs. The wage ceiling, the EPS split, the ₹20 lakh gratuity cap, the ₹200 per meal exemption and the NPS percentages are the real rules verified on 15 October 2026 and linked below.'),

      { kind: 'h', text: 'What to ask for' },
      { kind: 'list', ordered: true, items: [
        'Ask for the benefits that are deferred pay. Employer PF and an employer NPS contribution put the rupees in accounts you will still own after the job ends, and they are the only part of a benefits line that compounds.',
        'Do not accept cover in place of cash unless you would have bought it anyway. Group health insurance is cheap for the employer and convenient for you, but it ends when the job does, which is exactly when a health shock is most likely to arrive uninsured. Buy your own policy and treat the employer one as a bonus.',
        'Total the line in rupees before comparing two offers. A ₹40,000 meal benefit, a ₹36,000 PF contribution and a ₹14,430 gratuity accrual are ₹90,430 of your nine lakh CTC, and they behave in three completely different ways.',
        'Ask whether a benefit can be converted. Many employers allow a meal card or a fuel card to be raised inside an overall salary structure; hardly any allow the reverse, because a benefit once granted is hard to withdraw.',
      ] },
      { kind: 'example', title: 'Two offers, one number', text: 'Both offers are ₹9,00,000 CTC. Offer A pays a larger special allowance and provides group health for you alone. Offer B pays a slightly smaller allowance but has an employer NPS contribution of 14% of basic, a ₹8,800 monthly meal card and family cover. Offer B puts about ₹75,000 a year into an account you own and covers a family of four; Offer A puts about ₹48,000 more into your bank account and covers one person. Neither is obviously better — but the difference is real and it is decided by pricing the benefits, not by comparing the CTC.' },
      sim('l5-benefit-valuator', 'Price a benefits line, then flip the same value to cash and see what the marginal rate does to it.'),

      { kind: 'h', text: 'The benefit nobody values until it is gone' },
      { kind: 'p', text: 'The most under-priced item on a benefits line is the one you never claim: the employer\'s group medical cover. It is worth nothing in a year without illness and a great deal in the year of one, and it is likely to be your only health cover if you have not bought your own. Read the sum insured, the room-rent limits and whether the policy covers parents, because an employer policy that covers only you is doing nothing for the risk that a household actually carries.' },
      { kind: 'p', text: 'What this chapter has not recommended is a specific insurer or product. Benefits are decided at the offer stage, when the only number in play is total value received, and the value of cover is best judged by reading the policy wording — the subject of the protection chapters later in this level.' },
      { kind: 'terms', items: [
        { term: 'CTC', meaning: 'Cost to company — the employer\'s total annual cost of employing you, including its own PF and gratuity contributions. It is not your salary.' },
        { term: 'Gratuity', meaning: 'A lump sum of 15 days\' wages per completed year of service, payable at exit after five years of continuous service, exempt up to ₹20 lakh in a lifetime.' },
        { term: 'EPS', meaning: 'The Employees\' Pension Scheme — the 8.33% of PF wages carved out of the employer\'s contribution. It buys a pension rather than building a balance you can withdraw.' },
        { term: 'Employer NPS contribution', meaning: 'An employer payment into your National Pension System account. Deductible up to 14% of salary in the new tax regime and 10% in the old one.' },
        { term: 'LTA', meaning: 'Leave travel concession — an old-regime exemption for travel within India, twice in a four-year block and for travel costs only. It has no value in the new regime.' },
        { term: 'Group medical cover', meaning: 'Health insurance bought by the employer for a group. Usually cheaper than an individual policy, and it ends on your last working day.' },
      ] },
      l5Sources(['epfo', 'incometax', 'labd'], [
        'Contribution rates, the wage ceiling and the EPS carve-out',
        'The exemption for employer-provided meals (Rule 3(7)(iii)) and the current deduction limits',
        'Gratuity law under the Payment of Gratuity Act, including the five-year condition',
      ]),
    ],
    quiz: [
      {
        q: 'An offer shows ₹9,00,000 CTC with ₹36,000 of employer EPF and ₹14,430 of gratuity accrual. What does that mean?',
        options: [
          { text: 'The employer is adding ₹50,430 on top of your salary', why: 'Nothing is added on top. CTC is the employer\'s total cost, so both amounts were always inside the ₹9,00,000.' },
          { text: 'About ₹50,430 of the CTC is deferred pay that arrives in your own PF account', correct: true, why: 'Both are your money: the PF contribution lands in your UAN-linked account and the gratuity accrual is payable at exit after five years of service.' },
          { text: 'Both amounts are lost if you resign within a year', why: 'The PF contribution is yours from day one; only the gratuity has a five-year condition attached to payment.' },
          { text: 'The ₹14,430 is taxed as salary in the year it accrues', why: 'Gratuity is taxed only when it is paid, and up to ₹20 lakh in a lifetime is exempt.' },
        ],
      },
      {
        q: 'Your employer offers ₹8,000 a month either as a meal card or as a special allowance. Which statement is correct?',
        options: [
          { text: 'They are identical, because both are ₹8,000', why: 'The form decides the tax treatment. The card is exempt; the allowance is ordinary salary taxed at your marginal rate.' },
          { text: 'The meal card is exempt up to ₹200 per meal if it is paid as a voucher, so the card is worth more after tax', correct: true, why: 'Under the Income Tax Rules, 2026 the exemption is ₹200 per meal and applies to meals provided as a card or voucher, not to a cash allowance.' },
          { text: 'The allowance is better because you can spend it on anything', why: 'Flexibility is real, but it is bought with tax. The question is whether you would spend the ₹8,000 on meals anyway.' },
          { text: 'Neither is taxable because food is a basic necessity', why: 'Only the voucher form is exempt, and only up to the per-meal limit.' },
        ],
      },
      {
        q: 'You are on the new tax regime and negotiating benefits. Which of these has the highest tax value to you?',
        options: [
          { text: 'An employer NPS contribution of 14% of basic salary', correct: true, why: 'The employer NPS contribution is deductible up to 14% of salary even under the new regime, so the rupees are never taxed in your hands.' },
          { text: 'A higher house rent allowance', why: 'The HRA exemption is not available in the new regime, so an HRA raise is simply taxable salary.' },
          { text: 'Leave travel concession', why: 'The LTA exemption is also an old-regime allowance and has no value on the new regime.' },
          { text: 'A larger section 80C deduction', why: 'Section 80C is not available in the new regime at all, so it has no tax value there.' },
        ],
      },
      {
        q: 'Why should employer group health insurance never replace your own policy?',
        options: [
          { text: 'Because the cover is usually smaller than an individual policy', why: 'Cover size varies, and many employer policies are generous. The structural problem is something else.' },
          { text: 'Because it ends when the employment ends, which is when an uninsured medical shock is most dangerous', correct: true, why: 'The cover is rented, not owned. Losing a job removes the protection at exactly the moment the household is least able to absorb a medical bill.' },
          { text: 'Because it is taxed as a perquisite', why: 'Employer group cover is not taxed as a perquisite. The issue is continuity, not tax.' },
          { text: 'Because you cannot claim it for a pre-existing condition', why: 'Employer policies typically have their own waiting periods, but the decisive issue remains that the cover does not survive the job.' },
        ],
      },
    ],
    takeaway: 'Price every benefit on value today, tax treatment and whether it survives leaving the job. Employer PF, gratuity and employer NPS are deferred pay you keep; meal vouchers are a tax-free allowance; group insurance is rented protection that disappears on your last working day.',
  },

  'l5-006': {
    id: 'l5-006',
    title: 'PF',
    subtitle: 'A provident fund is an account you own, not a deduction you pay.',
    minutes: 11,
    blocks: [
      scene('pf-ledger', 'Three lines per month, one UAN: what you contribute, what the employer contributes, and how the EPS pension is carved out of it.'),
      { kind: 'p', text: 'Most people meet the provident fund as a line on a payslip that reduces take-home, and never as an account they own. That framing is expensive. The PF balance is one of the largest financial assets a salaried Indian will build before forty, it compounds at a declared rate that has been stable for years, and it is almost entirely tax-free — and yet it is the asset most often abandoned by people who change jobs.' },
      { kind: 'p', text: 'The account has three moving parts: the employee contribution, the employer contribution, and the pension scheme (EPS) carved out of the employer\'s share. Understanding which is which is the difference between treating a job change as a transfer and treating it as a windfall.' },

      { kind: 'h', text: 'The three lines on the payslip' },
      {
        kind: 'table',
        caption: 'On ₹25,000 of monthly PF wages — the ceiling in force from 17 September 2026',
        headers: ['Component', 'Rate', 'Monthly amount', 'Where it goes'],
        rows: [
          ['Employee contribution', '12% of PF wages', '₹3,000', 'EPF account — your balance'],
          ['Employer contribution to EPS', '8.33% of wages', '₹2,083', 'Pension scheme — buys a pension, not a balance'],
          ['Employer contribution to EPF', 'The balance (3.67%)', '₹917', 'EPF account — also your balance'],
          ['Total credited to your EPF balance', '15.67% of wages', '₹3,917', 'Compounds at the declared rate'],
          ['EDLI (employer-funded insurance)', 'Paid by the employer', '—', 'Life cover, with a maximum assurance of ₹7,00,000'],
        ],
      },
      l5Rule(
        'The PF wage ceiling rose to ₹25,000 on 17 September 2026',
        'The statutory ceiling for mandatory provident fund coverage was raised from ₹15,000 to ₹25,000 a month on 17 September 2026, so employees earning up to ₹25,000 of PF wages are now mandatorily covered on those wages. Where wages are above the ceiling the statutory contribution may be restricted to the ceiling — but an employer already contributing on higher wages cannot reduce them because of the change. Most organisations continue to contribute on full basic pay by policy, which is why a large majority of salaried employees see 12% of their entire basic deducted.',
      ),
      { kind: 'p', text: 'Two details matter more than the rates. First, the interest rate: EPF credited 8.25% for 2025-26, the most recent rate declared, and interest on the balance is exempt from tax when it accrues on contributions that have been taxed as salary. Second, the split is not a loss. The 8.33% that goes to the pension scheme is building a pension rather than a withdrawal balance; it is why your EPF balance grows more slowly than the arithmetic of a 24% contribution suggests, and it is also why the retirement chapter later in this level treats PF as two assets rather than one.' },
      l5Illustrative('The salary here is invented to teach the structure. The ₹25,000 ceiling, the 12% / 8.33% / 3.67% split, the ₹7,00,000 maximum assurance under EDLI and the 8.25% rate for 2025-26 are the real figures verified on 15 October 2026 and linked below.'),

      { kind: 'h', text: 'What a job change actually requires' },
      { kind: 'p', text: 'When you join a new employer, the provident fund does not need to be surrendered. The UAN — the Universal Account Number — is yours for life, and the new employer can be linked to the same account, so the balance keeps compounding as one number. The alternative, withdrawing the balance, converts a thirty-year compounding asset into one month of spending. Chapters in this level will return to that trade repeatedly, because it is the same trade that appears in every decision about retirement money.' },
      { kind: 'list', items: [
        'Transfer, do not withdraw. A transfer request moves the balance into the same UAN-linked account, and years of service for the pension calculation stay continuous.',
        'A withdrawal is tax-free only after five years of continuous service. Withdraw earlier and the amount attributable to contributions made after 1 April 2026 is taxed as income in the year of withdrawal — the rule is current at the date of this chapter, so check it before acting.',
        'Check for orphan accounts. People who changed jobs early often have two or three UANs, and the older ones sit idle. Merging them is a form-filling exercise, not a loss.',
        'Never leave an account unattended for years without checking it. An account with no contributions for a long period has been treated as inoperative, with the interest position changed more than once — read the current EPFO position rather than assuming either way.',
      ] },
      sim('l5-pf-lifecycle', 'Run one account across a job change: transfer, withdraw and restart, or leave it without transferring.'),

      { kind: 'h', text: 'Passbook hygiene' },
      { kind: 'p', text: 'The provident fund is unusual among financial accounts in that its most common failure is administrative rather than economic. A name that differs from your PAN, an Aadhaar that was never seeded, a bank account that was never validated, a nominee who was never added — each of these can freeze access to your own money at exactly the moment you need it, and all of them are fixed by checking a passbook once a year.' },
      { kind: 'list', ordered: true, items: [
        'Log in to the member portal and confirm the UAN, the name, the date of birth and the linked Aadhaar and bank account.',
        'Add a nomination for the pension scheme, not only for the EPF balance: they are separate records, and an un-nominated EPS account delays a family\'s claim.',
        'Check the passbook for each employer\'s contributions. Missing months are common when an employer is late, and they are far easier to fix while the employer still exists.',
        'When you change jobs, request the transfer within the first month and confirm it settled. Do not wait for the next job change to discover that it did not.',
      ] },
      { kind: 'terms', items: [
        { term: 'UAN', meaning: 'Universal Account Number — the identifier that follows you across employers and links every provident fund account you have held.' },
        { term: 'PF wages', meaning: 'The wage base on which contributions are computed. The statutory ceiling rose from ₹15,000 to ₹25,000 a month on 17 September 2026.' },
        { term: 'EPS', meaning: 'The Employees\' Pension Scheme, funded by 8.33% of wages out of the employer contribution. It pays a pension rather than building a withdrawable balance.' },
        { term: 'EDLI', meaning: 'The Employees\' Deposit Linked Insurance scheme, funded entirely by the employer, with a maximum assurance of ₹7,00,000.' },
        { term: 'Inoperative account', meaning: 'An account with no contributions for a long period. The interest and withdrawal treatment of such accounts has changed over time, so check the current EPFO position.' },
      ] },
      l5Sources(['epfo', 'epfoPassbook', 'labd'], [
        'Contribution rates, the current wage ceiling and the EPS carve-out',
        'Your own passbook: contributions received, interest credited and the UAN-linked accounts',
        'The statute behind the scheme, including the five-year condition and the EDLI assurance',
      ]),
    ],
    quiz: [
      {
        q: 'On ₹25,000 of PF wages, how much of the ₹6,000 contributed each month reaches your EPF balance?',
        options: [
          { text: 'All ₹6,000', why: 'The employer\'s 12% is not all credited to EPF: 8.33% of wages goes to the pension scheme first.' },
          { text: '₹3,917 — the employee\'s 12% plus the employer\'s 3.67%', correct: true, why: 'The employer\'s contribution is split, with 8.33% of wages to EPS and the balance (3.67%) to EPF, giving ₹3,000 + ₹917.' },
          { text: '₹5,083, being the employee contribution plus the EPS share', why: 'The EPS share buys a pension and does not sit in your EPF balance.' },
          { text: 'It depends on the employer\'s policy', why: 'The split is statutory. Policy affects whether contributions are computed on the ceiling or on full basic pay, not how the employer contribution is divided.' },
        ],
      },
      {
        q: 'You change jobs six years into your career. What should you do with the provident fund?',
        options: [
          { text: 'Withdraw the balance — six years is long enough to be tax-free', why: 'The withdrawal may be tax-free, but the cost is thirty years of compounding lost on the entire balance. Free of tax is not free of cost.' },
          { text: 'Transfer the balance to the same UAN so it keeps compounding and the pension service stays continuous', correct: true, why: 'A transfer keeps the account intact: the balance compounds as one number and the years of service count for the pension.' },
          { text: 'Open a new account with the new employer and keep both', why: 'A second account creates an orphan balance that is easy to lose track of. The UAN exists precisely to avoid this.' },
          { text: 'Leave it with the old employer and decide later', why: 'Leaving it unattended risks the account being treated as inoperative, and later recovery depends on an employer you have left.' },
        ],
      },
      {
        q: 'Which action most reliably protects access to your provident fund money when you need it?',
        options: [
          { text: 'Contributing on a higher wage than the statutory ceiling', why: 'Higher contributions build more, but they do nothing about name mismatches, unseeded Aadhaar or missing nominations.' },
          { text: 'Keeping the passbook details — name, Aadhaar, bank account and nomination — correct and current', correct: true, why: 'Administrative failures, not economic ones, are the usual reason a provident fund claim stalls.' },
          { text: 'Avoiding the pension scheme by opting out', why: 'The EPS carve-out is statutory for covered employees and is not something you choose out of.' },
          { text: 'Withdrawing whenever you change jobs, to keep the balance accessible', why: 'That is exactly the behaviour that destroys the account\'s value over a career.' },
        ],
      },
    ],
    takeaway: 'Your provident fund is an account, not a deduction: a transfer preserves decades of compounding and continuous pension service, a withdrawal ends both, and the passbook details — UAN, Aadhaar, bank account, nomination — are what decide whether you can reach your own money when you need it.',
  },

  'l5-007': {
    id: 'l5-007',
    title: 'Taxation',
    subtitle: 'Choose a regime with arithmetic, not with habit.',
    minutes: 11,
    blocks: [
      scene('regime-seesaw', 'The same slabs, two different winners: what decides the regime is rent, 80C and home-loan interest, not the regime itself.'),
      { kind: 'p', text: 'Salaried taxation in India now begins with a choice, and the choice is made every year rather than once. The new regime is the default, it offers a larger standard deduction and lower slab rates, and it takes away most exemptions and deductions. The old regime keeps the exemptions and charges higher rates. Neither is correct for everyone, and the decision reduces to four inputs you already know: your rent, your 80C investments, your home-loan interest and your dependants.' },

      { kind: 'h', text: 'The Act changed; the slabs did not' },
      l5Rule(
        'Tax year 2026-27 runs on the Income-tax Act, 2025',
        'From tax year 2026-27 the Income-tax Act, 2025 applies, replacing the 1961 Act and renumbering its sections — the rebate long known as section 87A now appears as section 156(2), and the standard deduction sits in the new Act\'s own provisions. The substantive numbers did not move: the individual slab rates are unchanged, the standard deduction is ₹75,000 in the new regime and ₹50,000 in the old one, the rebate under the new regime can extinguish up to ₹60,000 of tax so that taxable income up to ₹12 lakh pays nothing, marginal relief applies just above that threshold, and a 4% health and education cess applies to the tax. Quote the rule, not the section number, when you explain your choice.',
      ),
      {
        kind: 'table',
        caption: 'Slab rates for tax year 2026-27, unchanged from the previous year',
        headers: ['Income band', 'New regime (default)', 'Old regime'],
        rows: [
          ['Up to ₹4,00,000', 'Nil', 'Nil up to ₹2,50,000'],
          ['₹4,00,001 – ₹8,00,000', '5%', '5% on ₹2,50,001 – ₹5,00,000'],
          ['₹8,00,001 – ₹12,00,000', '10%', '20% on ₹5,00,001 – ₹10,00,000'],
          ['₹12,00,001 – ₹16,00,000', '15%', '30% above ₹10,00,000'],
          ['₹16,00,001 – ₹20,00,000', '20%', '30%'],
          ['₹20,00,001 – ₹24,00,000', '25%', '30%'],
          ['Above ₹24,00,000', '30%', '30%'],
        ],
      },

      { kind: 'h', text: 'What the choice actually costs' },
      { kind: 'p', text: 'The new regime gives up the house rent allowance exemption, the leave travel concession exemption and the deductions under the old chapter — 80C, 80D and the rest. In exchange it takes the lower rates and the larger standard deduction. On a ₹12 lakh salary with a metro rent of ₹40,000 a month, ₹1.5 lakh of 80C and ₹2 lakh of home-loan interest, the new regime pays nothing at all: taxable income is ₹11,25,000 and the rebate extinguishes the ₹52,500 the slabs produce. The old regime pays about ₹25,500 on the same salary. Raise the salary to ₹20 lakh and keep the deductions — a rent of ₹60,000 a month in a metro — and the old regime finally pulls ahead, by around ₹13,000, because the deductions have by then grown larger than the rate difference. The two cases use identical slab rates, which is the whole point: the regime is a calculation on your inputs.' },
      { kind: 'list', items: [
        'Rent and HRA. A metro rent exemption can be worth more than the rate difference, but only under the old regime.',
        '80C and 80D. These deductions exist only in the old regime. If you would make the investments anyway, they are free; if you would only make them for tax, they are a fee.',
        'Home-loan interest. Up to ₹2 lakh of interest on a self-occupied property is deductible only in the old regime, which is why many borrowers with large loans sit on the old regime.',
        'Employer NPS. Deductible under both regimes — 14% of salary in the new regime — and therefore not part of the trade-off at all.',
      ] },

      { kind: 'h', text: 'TDS, Form 16 and the annual reconciliation' },
      { kind: 'p', text: 'Tax on salary is withheld as TDS by the employer through the year, using the regime you declared. The employer\'s computation is a projection, not a verdict: it depends on declarations you made in April and on investment proofs you have not filed yet. When the projection and the reality disagree, the difference is settled when you file. Two habits prevent the surprise: keep the declarations honest through the year rather than optimistically in April, and reconcile the TDS in your 26AS or AIS with the Form 16 before filing.' },
      { kind: 'list', ordered: true, items: [
        'Check that the regime in the payroll system is the one you actually want. Many employees choose one in April and never revisit it when their rent or loan changes.',
        'Look at the annual tax projection the payroll team shares, and check the exemption figures against your own records.',
        'Compare the Form 16 tax deducted with the tax reported against your PAN; a mismatch between the two usually means a second employer or a bank that deducted tax on interest.',
        'File on time. The choice of regime is made in the return as well as in payroll, so this is where a year-long error is corrected or locked in.',
      ] },
      sim('l5-regime-picker', 'Compute both regimes from your own numbers, and find the rent at which the answer flips.'),
      l5Illustrative('The salaries and rents in this chapter are invented. The slab rates, the ₹75,000 and ₹50,000 standard deductions, the rebate and marginal relief, and the 2025 Act\'s application from tax year 2026-27 are the real rules verified on 15 October 2026 and linked below.'),

      { kind: 'p', text: 'One more caution. This chapter deliberately does not model surcharge, which applies above ₹50 lakh of income and changes the arithmetic at that level; and it treats salary as the only income. Both are real limitations of the framework, not of the rules, and both are handled by the advanced tax-planning chapter later in this level.' },
      { kind: 'terms', items: [
        { term: 'Tax regime', meaning: 'The set of slab rates and deductions under which you are taxed. The new regime is the default; the old regime keeps the exemptions and charges higher rates.' },
        { term: 'Standard deduction', meaning: 'A fixed deduction from salary income — ₹75,000 in the new regime and ₹50,000 in the old one.' },
        { term: 'Marginal relief', meaning: 'A limit on the tax payable just above a rebate threshold, so that a small increase in income never costs more tax than the increase itself.' },
        { term: 'TDS', meaning: 'Tax deducted at source — the tax your employer withholds from salary through the year on a projected basis.' },
        { term: 'Form 16', meaning: 'The employer\'s annual certificate of salary paid and tax deducted, and the usual basis for filing a salary return.' },
      ] },
      l5Sources(['incometax', 'incometaxRates', 'indiabudget'], [
        'The regime comparison, the standard deduction, the rebate and how to file',
        'The text of the Act and the rules behind the rates and deductions',
        'The Finance Act and the year\'s receipts and expenditure documents behind any rate change',
      ]),
    ],
    quiz: [
      {
        q: 'Your taxable income under the new regime is ₹11,80,000. Roughly what tax do you pay before cess?',
        options: [
          { text: 'Around ₹1,20,000', why: 'That would be the slab tax without the rebate. At this income the rebate is still available.' },
          { text: 'Nil, because the rebate extinguishes the tax on taxable income up to ₹12,00,000', correct: true, why: 'The new regime rebate can wipe out up to ₹60,000 of tax, so taxable income up to ₹12 lakh pays nothing.' },
          { text: 'Around ₹60,000, being the rebate cap', why: 'The cap is the maximum rebate, not the tax payable. The slab tax here is below the cap, so the whole liability is rebated.' },
          { text: 'Nil only if you also invest under 80C', why: '80C has no role in the new regime; the nil liability comes from the rebate alone.' },
        ],
      },
      {
        q: 'You pay ₹60,000 a month in metro rent, hold ₹1.5 lakh in 80C investments and pay ₹2 lakh of home-loan interest. On a ₹20 lakh salary, which regime usually wins?',
        options: [
          { text: 'The new regime, because its standard deduction is larger', why: 'The larger standard deduction is worth ₹25,000 more, but the HRA, 80C and interest deductions forgone here are worth several times that.' },
          { text: 'The old regime, because the HRA, 80C and interest deductions finally outweigh the higher slab rates', correct: true, why: 'At this salary the deductions bring old-regime taxable income down to ₹12 lakh and the old regime pulls ahead by roughly ₹13,000 — which is exactly why the decision must be run on your own numbers.' },
          { text: 'They are equal, because the rates were harmonised', why: 'The old regime still carries higher slab rates. The rates are not harmonised.' },
          { text: 'It is impossible to know without knowing your employer', why: 'The employer withholds tax but does not change the law. The inputs are rent, investments, interest and dependants.' },
        ],
      },
      {
        q: 'Which deduction is available under both regimes, and therefore should be left out of the regime comparison?',
        options: [
          { text: 'Section 80C investments', why: '80C is old-regime only, so it belongs squarely inside the comparison.' },
          { text: 'The HRA exemption', why: 'HRA is also old-regime only.' },
          { text: 'The employer\'s NPS contribution', correct: true, why: 'An employer NPS contribution is deductible in both regimes — up to 14% of salary in the new one — so it does not help decide between them.' },
          { text: 'Home-loan interest on a self-occupied property', why: 'That deduction is old-regime only, which is a major reason some borrowers stay there.' },
        ],
      },
      {
        q: 'Your employer has deducted tax through the year. What should you check before filing?',
        options: [
          { text: 'Nothing — the employer is legally responsible for the figure', why: 'The employer withholds on a projection of declarations the employee supplied. The employee remains responsible for the return.' },
          { text: 'That the regime chosen in payroll is the one you want, and that the Form 16 tax matches the tax reported against your PAN', correct: true, why: 'Payroll may still be running last year\'s choice, and a mismatch usually means a second employer or a bank that deducted tax on interest.' },
          { text: 'Only the total salary, because the tax figure is authoritative', why: 'The tax figure is the one most likely to be wrong, because it rests on assumptions about declarations and proofs.' },
          { text: 'Whether the standard deduction was applied, and nothing else', why: 'It is worth checking, but the regime selection and the PAN-level tax match are the higher-value checks.' },
        ],
      },
    ],
    takeaway: 'Run both regimes on your own rent, 80C, home-loan interest and dependants, and choose once a year rather than by habit. The slab rates are unchanged for tax year 2026-27; what decides the answer is your deductions, not the regime\'s reputation.',
  },

  'l5-008': {
    id: 'l5-008',
    title: 'Creating A Monthly Financial System',
    subtitle: 'Money management is a routine with dates, not a series of resolutions.',
    minutes: 9,
    blocks: [
      scene('monthly-cycle', 'Six dates replace forty decisions: the salary, the transfers out, the fixed bills, a mid-month look, the variable bills and the closing review.'),
      { kind: 'p', text: 'Anyone can manage money for a month. The failure is almost never a single bad decision; it is the absence of a system, so that every month restarts the same set of decisions from memory. A financial system is the opposite of that: a small number of dated actions that happen whether or not you remember them, plus one review that closes the loop.' },
      { kind: 'p', text: 'The design rule is simple. Automate what is identical every month, and decide only what genuinely varies. A system that requires forty decisions a month will be abandoned in week three; a system that requires five will survive a busy quarter.' },

      { kind: 'h', text: 'The five recurring decisions' },
      {
        kind: 'table',
        caption: 'What actually needs deciding, and when',
        headers: ['When', 'Decision', 'Why it sits there'],
        rows: [
          ['Day 1 — salary lands', 'Nothing. This is the handoff, not a decision', 'A payday decision is a payday temptation. The system already moved on day 2 last month'],
          ['Day 2 — transfers leave', 'The amount of the automatic transfers, set quarterly', 'Money leaves the spending account before any bill or offer can claim it'],
          ['Day 5 — fixed bills', 'None: rent, EMI and subscriptions clear automatically', 'Fixed lines are identical monthly, so they should never consume attention'],
          ['Day 15 — mid-month look', 'This month\'s discretionary spending', 'The only point in the month where the outcome can still be changed'],
          ['Day 25 — variable bills and review', 'What changed, and next month\'s one adjustment', 'Statements exist by now, and the fix lands before the next cycle starts'],
        ],
      },
      { kind: 'p', text: 'Note what is not on that list: choosing an investment, comparing accounts, reading about markets. None of those belong in a monthly routine, because none of them change on a monthly cycle. Mixing them in is how a money system turns into a hobby that gets dropped.' },

      { kind: 'h', text: 'Automate, then check the automation' },
      { kind: 'list', items: [
        'Set transfers for the day after the salary, never the salary date itself, so a delayed credit does not cause a failed instruction.',
        'Keep fixed bills in the account the transfers leave from, and discretionary spending in a different one. A single account forces you to reconcile both jobs at once.',
        'Do not automate anything that varies: a variable bill on autopay hides a price change, and a subscription on autopay outlives the need for it.',
        'Re-read the mandates once a quarter. A salary change, a new card or a bank migration silently breaks automation more often than people expect.',
      ] },
      sim('l5-monthly-routine', 'Place the month\'s recurring decisions on dates and see which orderings break under a delayed credit.'),
      { kind: 'example', title: 'Two households, same income', text: 'Both earn ₹43,800 a month and both spend about ₹35,000. The first decides each expense as it arrives; at month end, savings are whatever is left, which averages ₹4,000 and is sometimes negative. The second moved ₹8,500 out on the 2nd, cleared the fixed bills on the 5th, looked at spending on the 15th, and reviewed on the 25th. Same money, same city, same bills — and one household is building a buffer at ₹1,02,000 a year while the other is wondering where the salary went. The difference is not discipline; it is the order of two dates.' },
      { kind: 'p', text: 'The review is the part people skip, and it is the part that makes the system self-correcting. Once a month, look at three numbers: what left the account automatically, what the discretionary spending was, and whether the buffer moved. If any of the three surprised you, change one thing about the automation rather than resolving to try harder.' },
      { kind: 'terms', items: [
        { term: 'Standing instruction', meaning: 'A bank instruction to move a fixed amount on a fixed date, repeated until cancelled. The simplest rail for saving on payday.' },
        { term: 'Review cadence', meaning: 'The fixed interval at which you look at the plan — monthly for spending, quarterly for the automation itself.' },
        { term: 'Automation vs decision', meaning: 'Automation suits what is identical each month; a decision is required only where the amount or the choice genuinely varies.' },
      ] },
      l5Sources(['incometax'], [
        'The deduction and exemption rules that a monthly plan has to respect, so the routine is built on the current year\'s law and not last year\'s',
      ]),
    ],
    quiz: [
      {
        q: 'Why should the automatic transfer to savings be dated the day after the salary rather than the salary date?',
        options: [
          { text: 'Because banks charge less on the later date', why: 'There is no such charge difference. The reason is mechanical, not commercial.' },
          { text: 'So a delayed salary credit never causes a failed instruction', correct: true, why: 'A one-day gap absorbs the common case of a credit that lands a day late, which would otherwise bounce the transfer and possibly incur a charge.' },
          { text: 'Because interest accrues a day later', why: 'One day of interest on a small transfer is negligible; the point is not a return.' },
          { text: 'Because the salary may be taxed differently', why: 'The date of a transfer has no effect on its tax treatment.' },
        ],
      },
      {
        q: 'Which task should NOT be automated?',
        options: [
          { text: 'The rent payment', why: 'Rent is identical every month, which is exactly what suits automation.' },
          { text: 'A utility bill that varies with usage', correct: true, why: 'An automated variable bill hides a price or usage change. It should be reviewed and paid, not auto-debited.' },
          { text: 'The monthly transfer to the buffer', why: 'A fixed transfer is the archetypal automation.' },
          { text: 'The annual insurance premium as a monthly set-aside', why: 'A fixed monthly set-aside for a known annual bill is ideal for automation.' },
        ],
      },
      {
        q: 'What is the purpose of the mid-month look at discretionary spending?',
        options: [
          { text: 'To check that the fixed bills were paid', why: 'Fixed bills clear automatically. The mid-month look exists to change the outcome of the month, which is possible only for discretionary spending.' },
          { text: 'It is the only point in the month where the month\'s outcome can still be changed', correct: true, why: 'By the time the month ends, the discretionary spending is history. Mid-month it is still a decision.' },
          { text: 'To reconcile the bank statement', why: 'Reconciliation happens at the review, when the statements exist.' },
          { text: 'To choose next month\'s investments', why: 'Investment choices are not monthly decisions and do not belong in the routine.' },
        ],
      },
    ],
    takeaway: 'A financial system is a calendar, not a budget: automate what is identical every month, keep a mid-month look for the one thing that can still be changed, and close the month with a single review that adjusts the automation rather than your willpower.',
  },

  'l5-009': {
    id: 'l5-009',
    title: 'Emergency Fund',
    subtitle: 'A buffer is sized against essentials and against how hard your income would be to replace.',
    minutes: 10,
    blocks: [
      scene('cover-months', 'Six months of cover is six months of essentials — not six months of salary — and the number moves with how replaceable your income is.'),
      { kind: 'p', text: 'An emergency fund is the only financial asset whose job is to be boring. It is not invested to grow, it is not optimised for tax, and its entire purpose is to make sure that a bad month does not become a debt at 36% or more. That makes it the highest-return asset most people can hold early in a career, because the return is measured in avoided interest rather than in percentage points.' },

      { kind: 'h', text: 'Size it against essentials, not against the lifestyle' },
      { kind: 'p', text: 'The number that matters is the monthly cost of an unmovable month: rent, food, transport, medicines, school fees and any family support. Holidays, dining out and gadget upgrades can stop for three months without a crisis, so they do not belong in the target. Sized that way, six months of cover on a ₹43,800 take-home with ₹22,000 of essentials is ₹1,32,000, not ₹2,62,800 — the difference between a target reached in a year and one that never gets started.' },
      {
        kind: 'table',
        caption: 'How many months, and what each part covers',
        headers: ['Months of essentials', 'When it fits', 'What it does not cover'],
        rows: [
          ['3–4', 'Stable income, no dependants, insured medical risk, low fixed obligations', 'A sector-wide freeze, where the search runs longer than the plan allowed'],
          ['5–6', 'A normal market, one income supporting one person, standard EMIs', 'A simultaneous job loss and medical event, which needs insurance rather than cash'],
          ['7–9', 'Volatile or commission-heavy income, or a single income supporting dependants', 'Nothing more: past this point the cash is doing an investment\'s job badly'],
          ['12+', 'A specialised career where re-entry takes a year, or a foreseeable business transition', 'The cost of running a permanent drag on the portfolio — hold it deliberately, not by default'],
        ],
      },

      { kind: 'h', text: 'Where it sits is a real, checkable fact' },
      l5Rule(
        'Deposit insurance covers ₹5 lakh per depositor per bank',
        'Eligible bank deposits — savings, current, fixed and recurring — are insured by the Deposit Insurance and Credit Guarantee Corporation up to ₹5,00,000 per depositor per bank, including both principal and accrued interest, with the limit applied separately to each bank. A proposal to raise that cover has been under discussion, but the limit in force is ₹5 lakh. This matters for an emergency fund only if the fund is large or spread across several small banks; it matters a great deal for anyone holding a long-term deposit in a cooperative or small finance bank at rates that look too good, because the cover is the same regardless of the rate.',
      ),
      { kind: 'list', items: [
        'Instant access first. At least one month of essentials must be reachable today, without breaking a deposit or waiting for a settlement.',
        'The rest can sit one step away: a sweep-in deposit or a liquid fund, both of which settle quickly in normal markets and slightly slower in stressed ones.',
        'Never hold the buffer in equity. A fund that can fall 30% in a bad month cannot be the money you need in that month.',
        'A credit card is not a buffer. It defers the payment at a rate of interest, which is the opposite of what a buffer does.',
        'Keep it separate from the spending account, and slightly inconvenient to reach. A buffer that is one tap away from a checkout page is not a buffer.',
      ] },
      sim('l5-emergency-sizing', 'Size a buffer from your obligations, your income risk, your dependants and your existing cover.'),
      l5Illustrative('The spending figures in this chapter are invented. The ₹5 lakh deposit-insurance limit and the ₹7 lakh maximum assurance under the employer\'s linked insurance scheme are the real figures verified on 15 October 2026 and linked below.'),

      { kind: 'h', text: 'Replenishment is part of the design' },
      { kind: 'p', text: 'An emergency fund is not finished when it reaches its target; it is finished when it has a rule for being refilled. The rule that works is a temporary, automatic increase in the monthly transfer back to the buffer, kept in place until the target is restored, then removed. Without a replenishment rule, the fund is spent once and gradually becomes an aspiration, and the next emergency is financed with debt.' },
      { kind: 'terms', items: [
        { term: 'Emergency fund', meaning: 'Cash held for shocks, sized against essential monthly spending and income risk, and kept liquid and separate.' },
        { term: 'Essentials', meaning: 'The unmovable monthly outgoings — rent, food, transport, medicines, fees and family support. The base for sizing.' },
        { term: 'DICGC', meaning: 'The Deposit Insurance and Credit Guarantee Corporation, which insures eligible bank deposits up to ₹5 lakh per depositor per bank.' },
        { term: 'Sweep-in deposit', meaning: 'A savings-linked fixed deposit that automatically absorbs surplus and releases funds when the account runs low.' },
      ] },
      l5Sources(['rbi'], [
        'Deposit insurance: the current cover, what it includes and how the limit applies per depositor and per bank',
      ]),
    ],
    quiz: [
      {
        q: 'Your take-home is ₹43,800 and your essential monthly spending is ₹22,000. What is a six-month emergency fund?',
        options: [
          { text: '₹2,62,800 — six months of take-home', why: 'That treats the lifestyle as unmovable. Holidays and dining can stop; rent cannot.' },
          { text: '₹1,32,000 — six months of essentials', correct: true, why: 'The buffer replaces the spending that cannot stop, which is the essential month, not the full lifestyle.' },
          { text: '₹43,800 — one month of take-home, because six months is unreachable', why: 'One month is a fine starting point, but it is not the six-month target the question asks for.' },
          { text: 'It depends only on your salary, not on your spending', why: 'It depends on the essentials, and therefore on spending at least as much as on income.' },
        ],
      },
      {
        q: 'Which holding is unsuitable for an emergency fund?',
        options: [
          { text: 'A savings account with instant access', why: 'Instant access is exactly what one month of the buffer should be.' },
          { text: 'A sweep-in fixed deposit', why: 'A sweep-in deposit keeps most of the buffer accessible while earning a deposit rate.' },
          { text: 'An equity mutual fund', correct: true, why: 'Equity can fall sharply in the very month the money is needed, which defeats the purpose of the fund.' },
          { text: 'A liquid fund', why: 'A liquid fund is a reasonable second layer, settling quickly in normal markets.' },
        ],
      },
      {
        q: 'What does the ₹5 lakh deposit-insurance limit mean for a large emergency fund?',
        options: [
          { text: 'All balances are safe because the government guarantees deposits', why: 'The guarantee is limited to ₹5 lakh per depositor per bank, including principal and interest.' },
          { text: 'Eligible deposits are insured up to ₹5 lakh per depositor per bank, so large balances spread across banks are individually covered', correct: true, why: 'The limit applies separately to each bank, which is a practical reason to spread deposits beyond ₹5 lakh rather than concentrate them for a marginally better rate.' },
          { text: 'Insurance covers only fixed deposits', why: 'Savings, current, fixed and recurring deposits are all eligible.' },
          { text: 'The limit applies across all banks combined', why: 'The cover is applied separately to each bank, not aggregated across the banking system.' },
        ],
      },
      {
        q: 'Why is a replenishment rule part of the design of an emergency fund?',
        options: [
          { text: 'Because the bank requires a minimum balance', why: 'Minimum balances are an account constraint, not a design principle of the fund.' },
          { text: 'Because a fund that is spent without a refill rule becomes an aspiration, and the next shock is financed with debt', correct: true, why: 'The value of the buffer is that it exists in the month it is needed. A temporary automatic increase restores it, and then stops.' },
          { text: 'Because interest rates rise after a withdrawal', why: 'Rates do not respond to your withdrawal. The issue is the fund being refilled at all.' },
          { text: 'Because tax applies to the withdrawal', why: 'Withdrawals from a savings or sweep account are not taxed; the issue is behavioural.' },
        ],
      },
    ],
    takeaway: 'Size the buffer against essentials and against how hard your income would be to replace, keep at least one month in instant access, hold the rest one step away, and automate the refill — because the fund only works if it exists in the month it is needed.',
  },

  'l5-010': {
    id: 'l5-010',
    title: 'Sinking Funds',
    subtitle: 'A bill you know about a year ahead is not an emergency.',
    minutes: 9,
    blocks: [
      scene('sinking-jars', 'Five annual bills broken into monthly transfers, so no two arrive in the same month as a festival or a premium.'),
      { kind: 'p', text: 'Most financial shocks are not shocks. The insurance premium is due every year on the same date; the vehicle service, the festival spending, the annual trip home and the replacement of a phone or laptop all happen on a cycle you can predict. Paying them out of a single month\'s cash is what makes them feel like emergencies, and that feeling is a budgeting failure rather than bad luck.' },
      { kind: 'p', text: 'A sinking fund is the fix: a named pot with a monthly transfer into it, sized so the bill is already funded when it arrives. It differs from an emergency fund in exactly one way — the cost is known. The emergency fund exists for the unpredictable; the sinking fund exists for the predictable, and confusing the two is why people raid the first for the second.' },

      { kind: 'h', text: 'Annualise the cost, then divide' },
      {
        kind: 'table',
        caption: 'Turning five annual bills into a monthly number',
        headers: ['Bill', 'Annual', 'Monthly set-aside', 'What it prevents'],
        rows: [
          ['Health insurance premium', '₹24,000', '₹2,000', 'A lapse in cover, which turns a medical event into a financial one'],
          ['Vehicle insurance and service', '₹18,000', '₹1,500', 'Driving uninsured because the renewal arrived in a tight month'],
          ['Festivals and gifts', '₹30,000', '₹2,500', 'Borrowing in the most expensive month of the family calendar'],
          ['Travel home', '₹36,000', '₹3,000', 'Skipping the trip, or paying for it on a card'],
          ['Repairs and replacements', '₹24,000', '₹2,000', 'A phone or appliance failure becoming a debt at card rates'],
        ],
      },
      { kind: 'list', items: [
        'Name each pot for its job. An unnamed pot gets raided the first time something else looks urgent.',
        'Divide by the months remaining, not by twelve, when a bill is close. A premium due in four months is a four-month problem, and funding it evenly at ₹2,000 a month leaves it short.',
        'Where a bill is genuinely large and close, fund the first year from the buffer and start the transfer immediately — the buffer is restored by the same monthly amount.',
        'Use a sweep-in deposit for each pot where the bank supports it, so the money earns a deposit rate while it waits rather than sitting in the spending account.',
      ] },
      sim('l5-sinking-planner', 'Add your annual bills, place their due months and see which months are overloaded and which bills cannot be funded evenly.'),
      l5Illustrative('The bills and amounts in this chapter are invented examples. What is taught is the method: annualise the cost, divide by the months remaining, and give each pot a name and a date.'),

      { kind: 'h', text: 'The double-count trap' },
      { kind: 'p', text: 'The most common mistake with sinking funds is counting the same rupee twice: treating this month\'s ₹2,000 premium set-aside as one of the reasons the emergency buffer has not grown. They are two different destinations with two different jobs, and a plan that funds both from the same leftover money funds neither reliably. Set the sinking transfers as their own line items, before discretionary spending, and keep the buffer contribution separate and unchanged.' },
      { kind: 'p', text: 'One more discipline: review the list once a year, not once a month. Premiums change, a vehicle is sold, a trip becomes an annual habit. A sinking fund list that was set three years ago is usually funding a cost that no longer exists and missing one that now does.' },
      { kind: 'terms', items: [
        { term: 'Sinking fund', meaning: 'A named pot funded monthly for a cost you already know about, so a predictable bill never behaves like an emergency.' },
        { term: 'Annualising', meaning: 'Converting a periodic cost into a monthly number so it can be compared and funded alongside regular expenses.' },
        { term: 'Sweep-in deposit', meaning: 'A deposit linked to the account that automatically absorbs idle cash and releases it when needed.' },
      ] },
      l5Sources(['rbi'], [
        'The banking facilities that hold such funds — sweep-in and short-term deposits, and how their liquidity actually works',
      ]),
    ],
    quiz: [
      {
        q: 'What distinguishes a sinking fund from an emergency fund?',
        options: [
          { text: 'A sinking fund is held in equity and an emergency fund in cash', why: 'Neither is about the holding. Both are typically held in liquid form.' },
          { text: 'The cost is known in advance, so it is planned rather than shocked', correct: true, why: 'A sinking fund funds a predictable bill; an emergency fund exists for the unpredictable. Mixing them is what makes the buffer unreliable.' },
          { text: 'A sinking fund is for businesses only', why: 'It is a personal budgeting tool, widely used for household annual costs.' },
          { text: 'An emergency fund must be spent within a year', why: 'There is no such time limit. The emergency fund is held until an actual shock arrives.' },
        ],
      },
      {
        q: 'A ₹24,000 premium is due in four months. How much should the monthly set-aside be?',
        options: [
          { text: '₹2,000 — the annual cost divided by twelve', why: 'Spreading it over twelve months leaves the pot short when the bill arrives in four.' },
          { text: '₹6,000 — the annual cost divided by the four months remaining', correct: true, why: 'Divide by the months remaining. Funding it this way, or paying it from the buffer and restoring the buffer monthly, is the only approach that survives the due date.' },
          { text: 'Nothing — a bill four months away is not urgent', why: 'Waiting four months converts a planned cost into a financing decision at short notice.' },
          { text: 'Whatever is left after the month\'s spending', why: 'That is exactly the pattern that makes annual bills feel like emergencies.' },
        ],
      },
      {
        q: 'Why is it a mistake to count the monthly sinking-fund transfer and the monthly buffer contribution from the same leftover money?',
        options: [
          { text: 'Because the bank will flag the two transfers', why: 'There is no such restriction. The problem is arithmetic, not compliance.' },
          { text: 'Because the same rupee cannot fund two destinations, so a plan that relies on the leftover funds neither reliably', correct: true, why: 'Sinking funds and the buffer have different jobs and must each be a separate line item ahead of discretionary spending.' },
          { text: 'Because sinking funds must be held in cash', why: 'Sinking funds can be held in deposits and sweep accounts; the issue is the source of funds.' },
          { text: 'Because annual bills are tax-deductible', why: 'Tax treatment does not change the double-counting problem.' },
        ],
      },
    ],
    takeaway: 'A bill you know about a year ahead is not an emergency: annualise it, divide by the months remaining, give the pot a name and its own monthly transfer, and keep it strictly separate from the emergency buffer.',
  },

  'l5-011': {
    id: 'l5-011',
    title: 'Budgeting Systems',
    subtitle: 'Pick a system that matches how your income arrives and how much attention you will actually give it.',
    minutes: 9,
    blocks: [
      scene('budget-shapes', 'The same ₹43,800 arranged three ways: cash-like envelopes, percentage shares, and every rupee named to a job.'),
      { kind: 'p', text: 'A budgeting system is not a moral position. It is an allocation mechanism, and different mechanisms fail in different ways. Choosing one is a matter of matching it to two features of your life that you cannot change by trying harder: the shape of your income and the amount of monthly attention you are genuinely willing to spend.' },

      { kind: 'h', text: 'Three families of systems' },
      {
        kind: 'table',
        caption: 'What each system is good at, and where each one breaks',
        headers: ['System', 'Mechanism', 'Strong at', 'Fails when'],
        rows: [
          ['Envelope', 'A pot per category with a hard stop, often in cash or a prepaid account', 'Stopping card-spending leakage, because the money becomes physical again', 'Income moves month to month, so a fixed envelope is either too small or idle'],
          ['Percentage', 'Fixed shares of income — needs, wants, savings — with freedom inside each share', 'Variable and seasonal income, because every share scales with what arrived', 'Fixed costs are so high that the needs share is impossible before any choice'],
          ['Zero-based', 'Every rupee assigned to a named job before the month starts, summing to income', 'Visibility, and forcing a decision on savings and debt before spending', 'The plan is never updated, so it becomes a document rather than a system'],
        ],
      },
      { kind: 'p', text: 'The first decision is not which system; it is whether your income is predictable. With a stable monthly salary, envelopes and zero-based budgets both work, and the choice is about how much detail you will maintain. With freelance, seasonal or commission income, a fixed envelope is structurally wrong: the correct pattern is to pay yourself a steady amount from a holding account and budget on that, which is a percentage idea wearing a different hat.' },

      { kind: 'h', text: 'Priority order: the framework that survives variable income' },
      { kind: 'p', text: 'If income moves unpredictably, order the destinations rather than the amounts. Obligations first because they cannot be skipped, then the buffer, then a minimum savings floor, then extra debt payments, then everything else. Each month, the fixed obligations are paid in full and the remainder is distributed down the list in order. This is not one of the three systems on the table — it is the ranking that all three are trying to express, and it is the only approach that cannot be broken by a lean month.' },
      sim('l5-budget-system-picker', 'Answer three questions about income, attention and spending style, and see which system fits — and what the winner cannot do.'),
      l5Illustrative('The income and category amounts in this chapter and its lab are invented. The method — matching the mechanism to the income shape — is the transferable part.'),

      { kind: 'h', text: 'Switching costs are real' },
      { kind: 'p', text: 'The most common failure is running two systems badly at once: a percentage rule that is not followed and a zero-based plan updated twice. Give any system three months before judging it. The test is not whether the first month felt comfortable; it is whether a category was mispriced in every one of the three months, or whether a structural feature — income shape, a fixed cost you cannot move — made the system impossible. Change the system for a structural reason, not for discomfort.' },
      { kind: 'list', ordered: true, items: [
        'Write the system down in five lines: the categories, the shares or amounts, the dates, the account each pot lives in, and what happens when a category is overspent.',
        'Run it for three months without changes, so the failures you see are real failures rather than noise.',
        'Review the mispriced categories. A category that overspends every month is priced wrong, not disobedient.',
        'Keep one number out of the exercise: the amount automatically transferred out on payday. That is not a category, and it should not be negotiable with yourself.',
      ] },
      { kind: 'terms', items: [
        { term: 'Envelope system', meaning: 'A budgeting method that gives each spending category its own pot with a hard stop, so the limit is physical rather than mental.' },
        { term: 'Percentage budgeting', meaning: 'Allocating fixed shares of income to needs, wants and savings, letting every share scale with what actually arrives.' },
        { term: 'Zero-based budgeting', meaning: 'Assigning every rupee of income to a named job before the month begins, so the plan sums to exactly income.' },
        { term: 'Priority order', meaning: 'Ranking destinations rather than amounts, so a lean month reduces only the lowest-ranked items.' },
      ] },
      l5Sources(['incometax'], [
        'The current year\'s deduction and exemption limits, which decide what a savings category can realistically hold and claim',
      ]),
    ],
    quiz: [
      {
        q: 'You are a freelance consultant whose income varies between ₹20,000 and ₹1,20,000 a month. Which approach is structurally best?',
        options: [
          { text: 'A fixed cash envelope for each category', why: 'A fixed envelope is either too small in a lean month or idle in a fat one, because the income does not repeat.' },
          { text: 'Pay yourself a steady amount from a holding account and budget on that, with destinations ranked', correct: true, why: 'Smoothing variable income into a steady personal salary, then ranking destinations so a lean month reduces only the lowest-ranked items, is the structure that survives variance.' },
          { text: 'No budget at all, and spend only what you earn each month', why: 'That maximises lifestyle inflation in good months and creates debt in bad ones.' },
          { text: 'A zero-based budget with fixed amounts every month', why: 'Zero-based budgeting can work, but fixed amounts cannot: the amounts must be recomputed from what actually arrived.' },
        ],
      },
      {
        q: 'Which failure is a genuine reason to switch budgeting systems?',
        options: [
          { text: 'The first month felt restrictive', why: 'Discomfort in month one is normal and is not diagnostic.' },
          { text: 'The same category was mispriced in all three months while running the system correctly', correct: true, why: 'A persistent structural misfit is a reason to change the system. One uncomfortable month is not.' },
          { text: 'A friend uses a different system successfully', why: 'Someone else\'s fit says nothing about your income shape or the attention you will give it.' },
          { text: 'A category was overspent once', why: 'A single overspend means the category was priced wrong or an unexpected cost arrived, not that the system failed.' },
        ],
      },
      {
        q: 'What is the mistake in running a percentage rule and a zero-based plan at the same time?',
        options: [
          { text: 'It is illegal to mix systems', why: 'There is no rule against it, but running two mechanisms badly produces worse outcomes than running one well.' },
          { text: 'The two systems allocate the same money differently, so neither is authoritative and both get abandoned', correct: true, why: 'Each mechanism answers the same question in a different way. Running both means every rupee has two competing instructions.' },
          { text: 'It requires two bank accounts', why: 'Accounts are a separate design choice and not the substance of the problem.' },
          { text: 'Percentage systems cannot include savings', why: 'Percentage systems explicitly include savings; that is not the conflict.' },
        ],
      },
    ],
    takeaway: 'Choose a budgeting system by matching its mechanism to your income shape and to the attention you will actually give it — and when the system fails structurally, rank destinations rather than tinkering with amounts.',
  },

  'l5-012': {
    id: 'l5-012',
    title: 'Zero-Based Budgeting',
    subtitle: 'Every rupee gets a name before the month starts, and the plan must reach zero.',
    minutes: 10,
    blocks: [
      scene('zero-bucket', 'Income assigned to eight named jobs, summing to exactly what arrives — savings and debt included as categories with the same standing as rent.'),
      { kind: 'p', text: 'Zero-based budgeting is the most demanding of the common systems and the most clarifying. Instead of deciding what to save after everything else is paid, you assign every rupee of income to a named job before the month begins, and the assignments must sum to exactly the income. Savings stops being a residual and becomes a line item.' },
      { kind: 'p', text: 'That changes what a month means. In an ordinary budget, ₹3,000 left unassigned at the end of a month feels like a surplus, and surpluses get spent as the month closes. In a zero-based plan, unassigned money is a mistake: it is a decision deliberately deferred to the most expensive moment, which is whenever something tempting appears.' },

      { kind: 'h', text: 'Assigning to zero, in order' },
      { kind: 'list', ordered: true, items: [
        'Start with what cannot stop: rent, food, transport, medicines, school fees and family support. These are not optional, and their total tells you what room the rest of the plan has.',
        'Assign savings next, not last: the buffer top-up, the goal contributions and any extra debt payment. If these come last they receive whatever the month happens to leave, which averages out to nothing.',
        'Fund the sinking funds for annual bills as their own lines, at the amount the month requires rather than a flat twelfth.',
        'Give the remainder to discretionary spending, deliberately and without guilt. A plan with nothing left for life is revised by reality within three months.',
        'Confirm the total reaches zero. If it does not, the leftover is not a surplus, it is a category you have not named yet.',
      ] },
      { kind: 'p', text: 'The categories that people leave out are the ones that break the plan: the annual insurance premium, the festival month, the replacement of a phone, and the small recurring subscriptions that never feel worth tracking. Zero-based budgeting is unforgiving about these precisely because they have no home until you give them one, and a cost with no category is paid from a category that had another job.' },
      sim('l5-zero-based-builder', 'Assign every rupee of a month\'s income and see what the plan does to your saving rate and to your fixed costs.'),
      l5Illustrative('The income, categories and amounts here are invented for teaching. The method — assigning to zero, savings included before spending — is what transfers.'),

      { kind: 'h', text: 'Buffer handling and the mid-month revision' },
      { kind: 'p', text: 'Two adjustments keep a zero-based plan alive. First, keep a small buffer category inside the plan itself: a few hundred rupees or a few thousand left unassigned-on-purpose as a contingency, so the first small surprise does not force a mid-month scramble. Second, revise once mid-month rather than not at all. The plan made on the 1st is based on what you knew on the 1st, and a single revision in the middle of the month is the difference between a system and a document.' },
      { kind: 'p', text: 'What zero-based budgeting cannot do is compensate for a structural problem. If rent and EMIs consume almost everything, assigning to zero just shows you the truth in the clearest possible way — and the answer lies in the fixed costs, not in squeezing the discretionary categories further.' },
      { kind: 'terms', items: [
        { term: 'Assigning to zero', meaning: 'Distributing all of the month\'s income across named categories so the total assigned equals the income exactly.' },
        { term: 'True expense', meaning: 'A real cost that is irregular or invisible — annual premiums, festivals, replacements — and therefore needs its own funded category.' },
        { term: 'Buffer category', meaning: 'A deliberately small slice left as contingency inside the plan, so small surprises do not break it.' },
      ] },
      l5Sources(['incometax'], [
        'The deduction and exemption limits that shape how categories such as insurance and retirement contributions should be funded',
      ]),
    ],
    quiz: [
      {
        q: 'In a zero-based budget, what does ₹3,000 of unassigned income mean?',
        options: [
          { text: 'A surplus that can be spent freely', why: 'It will be spent — but without a decision. That is precisely what zero-based budgeting is designed to prevent.' },
          { text: 'A decision deferred to the most expensive moment, so it needs a named category', correct: true, why: 'Unassigned money becomes spending decided in the moment. Giving it a job before the month is the entire method.' },
          { text: 'An error that must always be moved to savings', why: 'Moving it to savings is a reasonable choice, but the point is that it must be assigned deliberately to some named job.' },
          { text: 'Proof the plan is complete', why: 'The opposite: a complete zero-based plan assigns the full income and reaches zero, leaving no unassigned rupees.' },
        ],
      },
      {
        q: 'Why should savings be assigned before discretionary spending?',
        options: [
          { text: 'Because savings earns a higher return than spending', why: 'True in general, but the reason here is one of ordering within a month, not of returns.' },
          { text: 'Because a residual saving gets whatever the month leaves, which averages out to nothing', correct: true, why: 'Savings that comes last is funded by leftovers, and there are rarely leftovers. Assigning it early makes it a line item with the same standing as rent.' },
          { text: 'Because tax requires savings to be first', why: 'Tax rules do not govern the order of category assignment in a personal plan.' },
          { text: 'Because discretionary spending is unnecessary', why: 'It is necessary. A plan with nothing left for life gets abandoned.' },
        ],
      },
      {
        q: 'Which category is most likely to break a zero-based plan if it is left out?',
        options: [
          { text: 'Rent', why: 'Rent is the most obvious fixed cost and almost never omitted.' },
          { text: 'Food and groceries', why: 'These are obvious and funded automatically in any plan.' },
          { text: 'The annual insurance premium and other irregular true expenses', correct: true, why: 'Irregular costs have no home until they are given one, so they get paid out of categories that had other jobs.' },
          { text: 'Transport', why: 'It is a regular monthly cost and is normally assigned without being forgotten.' },
        ],
      },
      {
        q: 'What is the purpose of a small buffer category inside a zero-based plan?',
        options: [
          { text: 'To replace the emergency fund', why: 'It cannot replace the emergency fund; it is a small contingency inside the month, not a shock absorber for job loss or illness.' },
          { text: 'So the first small surprise does not force the whole plan to be rebuilt mid-month', correct: true, why: 'A small deliberate contingency keeps the plan intact through ordinary surprises.' },
          { text: 'To increase the saving rate by stealth', why: 'It usually reduces the saving rate slightly by absorbing small costs, and it buys resilience instead.' },
          { text: 'To satisfy the bank\'s minimum balance requirement', why: 'That is an account constraint and not part of the budgeting method.' },
        ],
      },
    ],
    takeaway: 'Assign every rupee to a named job before the month starts, put savings and debt payments in before discretionary spending, give irregular true expenses their own funded categories, and confirm the plan reaches zero.',
  },

  'l5-013': {
    id: 'l5-013',
    title: '50/30/20-Style Frameworks And Their Limitations',
    subtitle: 'A ratio is a diagnostic, and in an expensive city it may be measuring the wrong thing.',
    minutes: 9,
    blocks: [
      scene('frame-vs-reality', 'Fifty percent for needs assumes a rent a metro does not charge: with rent and commute at nearly 51% of take-home, the ratio is broken before any lifestyle choice is made.' ),
      { kind: 'p', text: 'Percentage frameworks are popular because they are memorable: half of income to needs, a third to wants, a fifth to savings. Their virtue is that they scale with income automatically, so they work for someone earning ₹25,000 and someone earning ₹2,50,000 without a different set of numbers. Their vice is that they silently assume a set of conditions — a rent that fits inside half of take-home, one income supporting one person, and no large fixed obligation — that a great many people do not have.' },

      { kind: 'h', text: 'What a ratio can and cannot see' },
      { kind: 'p', text: 'Run the framework against a first job in a metro: a take-home of ₹43,800, rent of ₹18,000 and a commute of ₹4,500. Rent and commute alone are more than half of take-home, and adding food, medicines, a phone and any family support takes needs past 70%. The rule now says nothing useful, because it was never a plan for a city where housing costs half the salary of a young worker. What it does usefully say is that the fixed lines are the problem.' },
      {
        kind: 'table',
        caption: 'The framework against one real-looking city month',
        headers: ['Share', 'Framework', 'This month', 'What the gap means'],
        rows: [
          ['Needs', '50%', '≈71%', 'Rent and commute are the constraint; no grocery decision recovers twenty points'],
          ['Wants', '30%', '≈17%', 'The discretionary share has already been squeezed by the fixed lines'],
          ['Savings', '20%', '≈12%', 'Achievable only by attacking rent, commute or EMIs — not by willpower'],
        ],
      },
      { kind: 'list', items: [
        'Use the ratio to ask one question: do the fixed lines leave room for savings? If not, the answer is to change a fixed line.',
        'Treat the three shares as bands, not as laws. A month at 55% needs and 15% savings is a warning to act, not a failure to confess.',
        'Recompute the shares against take-home, not gross. Gross includes tax and PF that never reach your account and cannot be allocated.',
        'Abandon the framework when needs exceed roughly two-thirds of take-home on a sustained basis. Past that point it stops diagnosing and starts scolding.',
      ] },

      { kind: 'h', text: 'What to use instead' },
      { kind: 'p', text: 'Where a percentage framework fails, replace it with a priority order and a fixed-cost review. The priority order — obligations, buffer, savings floor, extra debt payments, life — cannot be broken by a lean month, and it does not depend on a rent ratio being realistic. The fixed-cost review is the part that actually changes the arithmetic: a cheaper commute, a different flat, a renegotiated EMI or a refinanced loan moves more rupees in one decision than a year of discretionary discipline.' },
      sim('l5-ratio-stress-test', 'Put the framework against your own rent, commute, EMIs and family support, and see exactly where it stops being useful.'),
      l5Illustrative('The income and shares above are invented to illustrate the arithmetic. The framework itself is a heuristic, not a rule of law, and its usefulness depends entirely on your fixed costs.'),

      { kind: 'p', text: 'One further caution: a ratio applied to a variable income is worse than useless, because the shares move with income in a way that lets a good month justify a permanent expense. For freelance, seasonal and commission income, the sequence is to smooth income first and then allocate — the subject of the previous chapter — rather than to apply a percentage to whatever arrived.' },
      { kind: 'terms', items: [
        { term: '50/30/20', meaning: 'A percentage framework allocating income to needs, wants and savings. Useful as a diagnostic, unreliable where fixed costs are high.' },
        { term: 'Needs versus wants', meaning: 'The line is genuinely ambiguous: transport to work is a need, a newer phone on a working plan is a want.' },
        { term: 'Fixed-cost review', meaning: 'A deliberate renegotiation of rent, commute or debt terms, which moves more money than discretionary cutting.' },
        { term: 'Savings rate', meaning: 'Savings as a share of take-home, measured consistently so months and years can be compared.' },
      ] },
      l5Sources(['rbi'], [
        'The banking and deposit facilities that hold savings, and the protections that apply to them',
      ]),
    ],
    quiz: [
      {
        q: 'Your take-home is ₹43,800 with rent of ₹18,000 and a commute of ₹4,500. The 50/30/20 rule says needs should be ₹21,900. What is the most useful conclusion?',
        options: [
          { text: 'That you should cut discretionary spending by ₹8,000', why: 'Discretionary spending is already compressed; the gap was created by two fixed lines, not by leisure.' },
          { text: 'That the fixed lines — rent and commute — are the constraint, and changing one moves more than cutting the rest', correct: true, why: 'Rent and commute alone exceed half of take-home, so the framework has stopped diagnosing and the fixed costs are the lever.' },
          { text: 'That the framework is wrong for everyone', why: 'It is a reasonable diagnostic where fixed costs are moderate; the problem is the specific city arithmetic.' },
          { text: 'That savings should be abandoned until income rises', why: 'A savings floor is more important, not less, when fixed costs are high — but the way to create it is to change a fixed line.' },
        ],
      },
      {
        q: 'Why is a percentage framework unreliable on variable income?',
        options: [
          { text: 'Because percentages cannot be computed on irregular income', why: 'They can be computed; the problem is behavioural rather than arithmetic.' },
          { text: 'Because a good month can justify a permanent expense while a lean month breaks the plan', correct: true, why: 'The shares move with income, so commitments get made on peak months and become unpayable on lean ones. Smooth income first, then allocate.' },
          { text: 'Because taxes are higher on variable income', why: 'Tax treatment does not depend on whether income varies.' },
          { text: 'Because needs are undefined when income varies', why: 'Needs are just as definable; the difficulty is the instability of the shares from month to month.' },
        ],
      },
      {
        q: 'When is it right to stop using a 50/30/20-style framework?',
        options: [
          { text: 'Whenever one month misses the targets', why: 'A single month below target is noise, not a signal to abandon the framework.' },
          { text: 'When needs persistently exceed roughly two-thirds of take-home, because the ratio stops diagnosing and starts scolding', correct: true, why: 'Past that point the useful output is a fixed-cost review, and a priority order is the better structure.' },
          { text: 'When savings exceed 20%', why: 'Exceeding the savings target is not a failure of the framework.' },
          { text: 'When income rises above ₹1 lakh a month', why: 'There is no income threshold at which the heuristic breaks; the break is about fixed costs.' },
        ],
      },
    ],
    takeaway: 'Use a percentage framework to diagnose whether the fixed lines leave room for savings, not to govern the month. Where needs persistently exceed two-thirds of take-home, replace the ratio with a priority order and attack rent, commute or debt terms.',
  },

  'l5-014': {
    id: 'l5-014',
    title: 'Cash-Flow Management',
    subtitle: 'Manage when money arrives and leaves, not only how much of it there is.',
    minutes: 10,
    blocks: [
      scene('cashflow-timeline', 'A solvent month that still bounces a payment: the salary lands on the 1st and the rent falls due on the 3rd, leaving two days of float.'),
      { kind: 'p', text: 'Solvency and liquidity are different problems. A household can be solvent — worth more than it owes — and still miss a payment, because the money existed on the 28th and not on the 5th. The costs of that gap are disproportionate: a bounced mandate, a late fee, a penal charge, and sometimes a credit-report entry, all from a timing mismatch that a single date change would have removed.' },

      { kind: 'h', text: 'The four dates that decide the month' },
      { kind: 'list', items: [
        'When income lands. A salary credited on the 1st or the 7th changes which bills can safely precede it.',
        'When fixed obligations are due. Rent, the EMI and any insurance premium are the payments that cannot be deferred; they should sit comfortably after the income date, not before it.',
        'When the credit card is due. A card due before the salary is a card paid late, and interest on a card is typically charged on the whole balance rather than on the unpaid part.',
        'When the automated investments and savings transfers leave. These should be timed after the salary with a day of slack, so a delayed credit never causes a failed debit.',
      ] },
      l5Rule(
        'Recurring payments have a rule behind them, and it protects you',
        'Recurring digital payments operate under the RBI\'s E-Mandate Framework, 2026. A recurring transaction may be authorised without additional factor authentication up to ₹15,000 per transaction, with a higher ceiling of ₹1,00,000 for categories such as insurance premia, mutual fund investments and credit-card bills; transactions above the applicable limit require authentication. Every recurring debit must be preceded by an advance notification, conventionally 24 hours before the debit, and the customer must be told when the mandate is created and when every payment is collected. That advance notice is not paperwork: it is your warning window, and a debit you did not expect is far more often a forgotten mandate than a bank error.',
      ),
      { kind: 'p', text: 'The notification rule is worth internalising for two reasons. It gives you a day to move money or cancel a mandate before the debit lands, and it means a genuinely unexpected debit is a signal worth investigating rather than a payment to be absorbed. Both properties come from the same small piece of regulation.' },

      { kind: 'h', text: 'Three fixes, in order of cost' },
      { kind: 'list', ordered: true, items: [
        'Move a due date. A landlord or lender will usually move a standing date once, and it costs nothing. This is the highest-value fix and the least used.',
        'Keep a floor balance. Holding one week of outflows as a permanent float removes the entire class of problem, including a delayed salary credit.',
        'Split the accounts. Put fixed bills in an account funded on salary day and discretionary spending in another, so the two jobs never compete.',
      ] },
      sim('l5-cashflow-timing', 'Move the dates rather than the amounts, and find the exact day a solvent month goes short.'),
      l5Illustrative('The salary, bills and dates in this chapter and its lab are invented. The ₹15,000 and ₹1,00,000 e-mandate limits and the pre-debit notification requirement are the real rules verified on 15 October 2026 and linked below.'),

      { kind: 'h', text: 'Seasonal income and the card cycle' },
      { kind: 'p', text: 'Two situations make cash-flow management more than a scheduling exercise. With seasonal income, the correct structure is to have the income land in a holding account, pay yourself a steady monthly amount from it, and time the bills against that steady amount — otherwise every bill is a bet on the season being good. With a credit card, the cycle is the lever: statement dates and due dates determine how long the bank is effectively lending to you, and moving a large recurring expense just after a statement date extends that interest-free period by nearly a month.' },
      { kind: 'p', text: 'Note what this chapter does not recommend: holding a permanent overdraft or a revolving card balance as a float. Borrowing to smooth timing converts a free problem into an interest cost, and the timing problem can always be solved for nothing by moving a date or holding a small buffer.' },
      { kind: 'terms', items: [
        { term: 'Float', meaning: 'A small permanent balance held in the spending account so ordinary timing gaps never cause a failed payment.' },
        { term: 'Grace period', meaning: 'The interest-free window between a credit-card statement and its due date; interest typically applies to the whole balance once it is missed.' },
        { term: 'E-mandate', meaning: 'An authorisation for recurring digital payments, subject to the per-transaction limits and the pre-debit notification requirement.' },
        { term: 'AFA', meaning: 'Additional factor authentication — the extra confirmation required for recurring transactions above the applicable e-mandate limit.' },
      ] },
      l5Sources(['rbi', 'npci'], [
        'The E-Mandate Framework: per-transaction limits, authentication requirements and the advance notification before every debit',
        'The retail payment systems that carry these mandates and the rules that apply to each',
      ]),
    ],
    quiz: [
      {
        q: 'Your salary lands on the 1st and your rent is due on the 3rd. What is the risk?',
        options: [
          { text: 'None, because the salary arrives before the rent', why: 'Only if the credit lands on time. A one-day delay puts the rent payment ahead of the money, which is exactly the failure mode.' },
          { text: 'A delayed salary credit leaves no float, so the rent payment can bounce in a month that is otherwise solvent', correct: true, why: 'Two days of slack is not enough to absorb a routine delay. Moving the due date later or holding a floor balance removes the risk.' },
          { text: 'The rent will be taxed differently', why: 'Payment dates have no effect on tax treatment.' },
          { text: 'The bank will charge a higher interest rate', why: 'Interest rates are not affected by the relative timing of salary and rent.' },
        ],
      },
      {
        q: 'Under the e-mandate framework, what must happen before a recurring debit is collected?',
        options: [
          { text: 'Nothing — once a mandate is created, debits proceed silently', why: 'The framework requires an advance notification before each debit, conventionally 24 hours ahead.' },
          { text: 'The customer must receive an advance notification, conventionally 24 hours before the debit', correct: true, why: 'That notice is the window in which you can fund the account or cancel a mandate you no longer need.' },
          { text: 'The customer must authenticate every debit with an OTP', why: 'Authentication is required only above the applicable per-transaction limit; small recurring debits proceed without it.' },
          { text: 'The bank must call the customer', why: 'A notification, not a call, is what the framework requires.' },
        ],
      },
      {
        q: 'Why is holding a permanent credit-card balance a bad way to manage cash-flow timing?',
        options: [
          { text: 'Because it damages the credit score immediately', why: 'It may, eventually, but the primary cost is immediate and financial: interest.' },
          { text: 'Because it converts a timing problem, which can be solved free, into an interest cost', correct: true, why: 'Moving a date or holding a small float solves timing for nothing. Borrowing to smooth it pays card rates for a scheduling problem.' },
          { text: 'Because cards cannot be used for recurring payments', why: 'Cards are widely used for recurring payments under the e-mandate framework.' },
          { text: 'Because interest is charged only on the unpaid part', why: 'Card interest is typically charged on the whole balance once the grace period is missed, which is a further reason not to rely on it.' },
        ],
      },
      {
        q: 'Which of these is the cheapest fix for a recurring timing problem?',
        options: [
          { text: 'Taking an overdraft facility', why: 'An overdraft has a cost, and the timing problem can be fixed for nothing.' },
          { text: 'Asking the lender or landlord to move the due date', correct: true, why: 'Moving a standing date once usually costs nothing and removes the mismatch permanently.' },
          { text: 'Using a credit card to pay the rent', why: 'That adds card fees and interest exposure, and often excludes the rent-free-timing benefit of a bank transfer.' },
          { text: 'Increasing the EMI', why: 'A larger EMI raises the amount leaving early in the month, making the timing problem worse.' },
        ],
      },
    ],
    takeaway: 'A solvent month can still bounce a payment: put fixed obligations comfortably after the income date, hold a small permanent float, use the pre-debit notification window deliberately, and fix timing with dates rather than with borrowing.',
  },
}
