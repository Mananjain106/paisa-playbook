import type { Chapter } from '../../types'
import { scene4, sim } from '../../lib/chapter-blocks'

const SCENE_0 = scene4('tax-bracket')
export const tax: Record<string, Chapter> = {
  'l4-018': {
    id: 'l4-018',
    title: 'Taxation Fundamentals',
    subtitle: 'What tax is funding, who collects it, and why the rules matter.',
    minutes: 5,
    blocks: [
      { kind: 'p', text: "Tax is the money citizens and businesses pay to the government so it can run public services, build infrastructure, and fund the machinery of the state. It is not a fine, and it is not optional in the way a subscription is. You do not pick and choose which public goods you want to fund; you pay according to the law, and the government decides how to use the money." },
      SCENE_0,
      { kind: 'h', text: 'The Indian tax system in broad strokes' },
      { kind: 'list', items: [
        'Direct tax: paid directly by the person or entity on whom it is levied — income tax, corporate tax, and a few others.',
        'Indirect tax: collected through the price of goods and services rather than directly from a person’s income — the main current example is GST.',
        'Centre and states: India has both central taxes and state taxes, and the division of revenue and responsibility is part of the system you inherit when you file a return.',
        'Administration: the Income Tax Department collects direct taxes and enforces the law; GST is administered separately. For personal finance, income tax is the one you deal with most directly.',
      ] },
      { kind: 'callout', tone: 'india', title: 'Start with the law, not the shortcut', text: "Indian tax law is detailed, amended often, and occasionally frustratingly circular. The practical habit is to learn the structure rather than memorise every clause. Know what counts as income, what counts as a deduction, and what counts as an exemption. The rest you can look up when you file." },
      SCENE_0,
      { kind: 'terms', items: [
        { term: 'direct tax', meaning: 'tax paid directly by the person or entity on whom it is levied, such as income tax.' },
        { term: 'indirect tax', meaning: 'tax collected through the price of goods and services, such as GST, rather than directly from income.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the clearest distinction between a direct tax and an indirect tax?',
        options: [
          { text: 'A direct tax is paid by the person or entity on whom it is levied; an indirect tax is collected through the price of goods and services.', correct: true, why: 'That is the basic structural difference: the burden in a direct tax is on the named taxpayer; in an indirect tax it is passed through the price.' },
          { text: 'Direct taxes are always paid annually, while indirect taxes are paid only when you buy something.', correct: false, why: 'The timing difference is not the defining feature; the defining feature is who bears and who remits the tax.' },
          { text: 'Direct taxes apply only to income, while indirect taxes apply only to property.', correct: false, why: 'The categories are broader than one type of base each. Income tax is only one kind of direct tax.' },
        ],
      },
    ],
    takeaway: 'Tax is how the state funds itself. Learn the structure: direct versus indirect, the role of the Income Tax Department, and that the law — not the shortcut — is the starting point.',
  },

  'l4-019': {
    id: 'l4-019',
    title: 'Income Tax',
    subtitle: 'The tax you pay on income, in the broadest sense.',
    minutes: 6,
    blocks: [
      { kind: 'p', text: "Income tax is not only on salary. It can apply to business income, freelance income, rental income, interest, dividends in some contexts, capital gains, and other sources. The common thread is that the Income Tax Act brings many kinds of money into a taxable base, with different rules for each. Your job is not to guess which income is taxable; it is to understand the category your money falls into." },
      sim('tax', 'Use the tax lab to see how slabs and deductions change the number that actually lands in your account.'),
      { kind: 'h', text: 'The idea behind the tax return' },
      { kind: 'list', items: [
        'Compute what counts as income for the year under the relevant heads.',
        'Apply the deductions and exemptions the law allows.',
        'Arrive at taxable income and the tax on it, including the slab rates and any rebates and surcharge.',
        'Credit the tax that has already been deducted or paid, and settle the balance — pay more if you owe, or claim a refund if too much was taken out.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'Salary is not the only taxable income', text: "Many people think of income tax as a salary tax. It is not. Capital gains, rental income, side business income, and other sources can all be taxable, sometimes under different rules and timelines. If you earn from more than one source, do not pretend the salary tax calculation is the whole story." },
      sim('tax', ''),
      { kind: 'example', title: 'A simple income picture', text: 'Salary income this year, plus a small capital gain from selling a listed share, plus interest from a fixed deposit. Each piece may be taxed under a different head with different rules. The return is where these are brought together so the tax is computed on the true total, not just the salary.' },
      { kind: 'terms', items: [
        { term: 'income tax', meaning: 'the tax levied on income, broadly defined, under the Income Tax Act; it can apply to salary, business income, rental income, capital gains, and other sources.' },
        { term: 'head of income', meaning: 'the category under which a particular kind of income is taxed — salary, house property, business or profession, capital gains, and other sources.' },
      ] },
    ],
    quiz: [
      {
        q: 'Which statement about income tax is most accurate?',
        options: [
          { text: 'Income tax can apply to salary, business income, rental income, capital gains, and other sources, each possibly under different rules.', correct: true, why: 'Income tax is not just a salary tax. Different kinds of income can be taxable under different heads and rules.' },
          { text: 'Only salary is taxable; everything else is optional reporting.', correct: false, why: 'Other income, such as capital gains and rental income, can be taxable under the law, not optional.' },
          { text: 'Income tax is only relevant for high earners, so most people do not need to think about it.', correct: false, why: 'Even modest incomes can fall within the filing or tax framework depending on the year’s rules; it is not only a high-income issue.' },
        ],
      },
    ],
    takeaway: 'Income tax is broader than salary. Learn the heads of income, bring all your taxable income into one picture, and let the return be the place where the total is computed correctly.',
  },

  'l4-020': {
    id: 'l4-020',
    title: 'Taxable Income',
    subtitle: 'Not every rupee you receive is taxed, and not every rupee you earn is treated the same.',
    minutes: 6,
    blocks: [
      { kind: 'p', text: "Taxable income is the amount of income the law treats as subject to tax after the relevant exclusions, exemptions, and deductions are applied. The number you receive in your bank account is not the same as the number the tax department sees. Some receipts are not income at all; some are income but exempt; some are deductible before tax is computed." },
      sim('tax', ''),
      { kind: 'h', text: 'Three layers to think about' },
      { kind: 'list', items: [
        'Receipts that are not income: money that comes in but is not treated as taxable income, such as certain gifts, loans, or reimbursement of expenses in the right context.',
        'Exempt income: income that is earned but not taxed under the law, such as certain allowances or benefits within prescribed limits, depending on the rules.',
        'Deductible or set-off items: amounts that reduce taxable income, such as deductions for specific investments or expenses where the law permits them.',
      ] },
      { kind: 'callout', tone: 'tip', title: 'Do not confuse cash in hand with taxable income', text: "If you receive a lump sum, ask first whether it is income, and then whether it is taxable income. A bank credit is just a bank credit until you classify it. That meaning is what determines whether it enters the tax calculation." },
      sim('tax', ''),
      { kind: 'example', title: 'Three different receipts', text: 'A salary credited in your account is income. A gift from a relative within the allowed rules may not be. A loan repayment from a friend is not income at all. Same bank account, three different tax meanings. The classification is the whole point.' },
      { kind: 'terms', items: [
        { term: 'taxable income', meaning: 'the income on which tax is computed after the allowed exclusions, exemptions and deductions are applied.' },
        { term: 'exempt income', meaning: 'income that is earned but excluded from tax under the law, subject to the conditions attached to that exemption.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the most important first step when you receive a lump sum in your account?',
        options: [
          { text: 'Classify it: figure out whether it is income, and if so whether it is taxable, exempt, or not income at all.', correct: true, why: 'A credit is just a credit until you classify it. The tax treatment depends on what the receipt actually is.' },
          { text: 'Report the full amount as income regardless of what it is.', correct: false, why: 'Not every credit is income, and not every income is taxable. Blanket reporting is not the right first step.' },
          { text: 'Ignore it if it is small, because small amounts are never taxable.', correct: false, why: 'Size alone does not decide taxability; the nature of the receipt does.' },
        ],
      },
    ],
    takeaway: 'Taxable income is what the law treats as taxable, not every rupee that touches your account. Learn to separate receipts, exempt income, and deductions before you compute the tax.',
  },

  'l4-021': {
    id: 'l4-021',
    title: 'Tax Slabs',
    subtitle: 'Why only part of your income is taxed at the highest rate you hear about.',
    minutes: 6,
    blocks: [
      scene4('tax-bracket', 'Marginal slabs: a raise lands partly in a new band, not the whole thing.'),
      { kind: 'p', text: "A tax slab is the bracket system that applies different rates to different slices of income. The key idea is marginal taxation: as your income rises, only the additional slice is taxed at the higher rate, not your entire income. This is why a raise does not suddenly make every rupee earn less for you." },
      sim('tax', 'The tax lab draws the bands and shows how only the slice inside a bracket pays that bracket’s rate.'),
      { kind: 'h', text: 'Old regime and new regime: two structures to know' },
      { kind: 'list', items: [
        'Old regime: a set of slabs with a lower basic exemption and a narrower standard deduction, but more room for deductions and exemptions under the old rules.',
        'New regime: a different slab structure with a higher basic exemption and a standard deduction for salaried individuals, but fewer of the old deductions available.',
        'Which is better depends on your actual deductions, not on any slogan. A large home loan, NPS contribution, or similar deduction can still tilt the answer toward the old regime for some people.',
      ] },
      { kind: 'callout', tone: 'india', title: 'Read the regime comparison carefully', text: "The headline rates are only part of the story. The basic exemption, the standard deduction, the rebates, the surcharge, the cess and the available deductions all change the result. The tax lab is useful here because it lets you compare the final number, not just the slab in isolation." },
      sim('tax', ''),
      { kind: 'example', title: 'Marginal taxation in plain language', text: 'If the next ₹1 lakh of income falls into a 20% band, it does not mean all your income is taxed at 20%. It means only that ₹1 lakh is taxed at 20%, and the rest below it is taxed at the lower rates that applied to the lower slices. The marginal rate is the rate on the next rupee, not the average rate on everything.' },
      { kind: 'formula', label: 'Effective tax rate in words', expr: 'effective rate = total tax ÷ total income' },
      { kind: 'terms', items: [
        { term: 'tax slab', meaning: 'a bracket of income taxed at a particular rate under a progressive system; higher slabs apply only to income above their threshold.' },
        { term: 'marginal tax rate', meaning: 'the rate applied to the next rupee of income, not the average rate across all income.' },
      ] },
    ],
    quiz: [
      {
        q: 'What does marginal taxation actually mean?',
        options: [
          { text: 'Only the slice of income that falls in a higher slab is taxed at that higher rate; the rest below it is taxed at the lower rates.', correct: true, why: 'That is the whole point of slab-based taxation: each band is taxed only on the income inside it.' },
          { text: 'Once your income crosses a slab, all of your income is taxed at the higher rate.', correct: false, why: 'That is the common misconception. Progressivity means the higher rate applies only to the additional income in that band.' },
          { text: 'Marginal taxation means tax is applied only to the last rupee of the year, and nothing else is taxed.', correct: false, why: 'Every taxable rupee is taxed, but in the band it falls into; marginal only describes the rate on the next rupee, not that earlier income is exempt.' },
        ],
      },
    ],
    takeaway: 'Tax slabs are marginal, not all-or-nothing. A higher band taxes only the income above its threshold, which is why a raise raises tax on the extra part, not on everything.',
  },

  'l4-022': {
    id: 'l4-022',
    title: 'TDS',
    subtitle: 'Tax already taken out before the money reaches you.',
    minutes: 6,
    blocks: [
      scene4('tds-flow', 'TDS: tax deducted at source and credited to the government on your behalf.'),
      { kind: 'p', text: "TDS stands for Tax Deducted at Source. It is the system where the person or entity paying you deducts tax before making the payment and deposits it with the government. The idea is simple: collect tax as income is paid, rather than waiting for the return to find out what was earned. For you, TDS is not an extra charge on top of the income — it is a prepayment of your own tax." },
      sim('tax', ''),
      { kind: 'h', text: 'What TDS changes for you' },
      { kind: 'list', items: [
        'Your actual cash inflow is lower than the headline number because tax has already been cut.',
        'The TDS credit shows up in your return and reduces the tax you still owe at filing time.',
        'If too much was deducted, you get a refund; if too little was deducted, you pay the difference.',
        'Form 16, Form 16A, and Form 26AS are the documents that help you confirm what was deducted and deposited.',
      ] },
      { kind: 'callout', tone: 'india', title: 'TDS is not your final tax bill', text: "A common mistake is to treat TDS as if it were the full tax for the year. It is only what was already taken out. Your actual liability is computed on the full taxable income, and the TDS is set off against that. If you earned other income that had no TDS, you may still owe more at filing time." },
      sim('tax', ''),
      { kind: 'example', title: 'The two jobs of TDS', text: 'Your employer deducts TDS from your salary each month and deposits it. Your bank may deduct TDS on interest above the threshold. At the end of the year, both credits are tallied against your total tax. You do not pay tax twice; you pay tax once, and TDS is part of the amount already paid.' },
      { kind: 'terms', items: [
        { term: 'TDS', meaning: 'Tax Deducted at Source — tax taken out by the payer before making a payment and deposited with the government on the recipient’s behalf.' },
        { term: 'Form 16', meaning: 'the certificate an employer gives an employee summarising salary and the TDS deducted on it during the year.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the most accurate way to think about TDS?',
        options: [
          { text: 'It is a prepayment of your tax made by the payer on your behalf, which is then credited against your final tax liability.', correct: true, why: 'TDS is not a separate tax on top of your income; it is an advance collection that reduces what you still owe or is refunded if it exceeds your liability.' },
          { text: 'It is an extra charge added to your income that you must pay in addition to your normal tax.', correct: false, why: 'TDS is your own tax collected at source, not a separate surcharge on top of income tax.' },
          { text: 'It replaces the need to file a return, because whatever was deducted is all you owe.', correct: false, why: 'TDS may not match your actual liability if you have other income or different deductions, so the return is still where the final figure is settled.' },
        ],
      },
    ],
    takeaway: 'TDS is tax collected as income is paid, not a separate charge. Treat it as a prepayment that is credited against your final tax, and still file the return to reconcile the full picture.',
  },

  'l4-023': {
    id: 'l4-023',
    title: 'Form 16',
    subtitle: 'Your employer’s summary of salary and tax deducted.',
    minutes: 5,
    blocks: [
      { kind: 'p', text: "Form 16 is the certificate your employer gives you that summarises your salary income and the TDS deducted on it during the year. It is one of the most useful documents for filing your return, because it brings together what you earned and what tax was already taken out. It is not the return itself; it is evidence that helps you file it correctly." },
      sim('tax', ''),
      { kind: 'h', text: 'What Form 16 usually contains' },
      { kind: 'list', items: [
        'The employer’s and employee’s details.',
        'The salary income and the components that were paid.',
        'The allowances and benefits that figured into the taxable computation.',
        'The deductions the employer applied under the old regime or the regime chosen, if applicable.',
        'The TDS deducted and deposited, and the break-up of that deposit.',
      ] },
      { kind: 'callout', tone: 'tip', title: 'Use Form 16 as a cross-check, not blindly', text: "Form 16 is based on the information your employer had and the regime they applied. If your situation changed during the year, or if you have income from other sources, Form 16 alone will not be the whole story. Match it against your own records and reconcile the differences before filing." },
      sim('tax', ''),
      { kind: 'example', title: 'A common mismatch', text: 'Form 16 reflects salary and the TDS on it. If you also earned interest, a freelance payment, or a capital gain, that income may not appear in Form 16 at all, or only in a partial way. The return is where you add it and compute the true liability.' },
      { kind: 'terms', items: [
        { term: 'Form 16', meaning: 'the certificate an employer issues to an employee showing salary income and the TDS deducted on it during the financial year.' },
        { term: 'certificate', meaning: 'a document issued by a deductor confirming the payment and the tax deducted and deposited; used to support your return.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is Form 16 best described as?',
        options: [
          { text: 'A certificate from your employer summarising salary income and the TDS deducted, useful for filing your return.', correct: true, why: 'Form 16 is the employer’s record of salary and tax deducted and deposited; it supports your return rather than replacing it.' },
          { text: 'The tax return itself, which you file directly with the department.', correct: false, why: 'Form 16 is a supporting document, not the return. The return is the separate filing you make with the Income Tax Department.' },
          { text: 'A form you fill out to ask the government for a refund.', correct: false, why: 'Form 16 is issued to you; it is not a refund application. A refund comes from the return, not from Form 16 itself.' },
        ],
      },
    ],
    takeaway: 'Form 16 is your employer’s salary and TDS summary. Use it to file your return accurately, but do not assume it covers income from other sources or replaces the return itself.',
  },

  'l4-024': {
    id: 'l4-024',
    title: 'ITR',
    subtitle: 'The return that tells the government what you earned and what you owe.',
    minutes: 6,
    blocks: [
      { kind: 'p', text: "ITR stands for Income Tax Return. It is the form through which you report your income, claim deductions and exemptions, compute the tax, and settle the difference between what you owe and what has already been paid through TDS and other means. Filing is both a compliance step and a chance to make sure the numbers are correct before the year closes." },
      sim('tax', ''),
      { kind: 'h', text: 'What the return does' },
      { kind: 'list', items: [
        'Reports income under the relevant heads for the year.',
        'Shows the deductions and exemptions you are claiming.',
        'Computes the tax on the taxable income.',
        'Claims credit for TDS and any advance tax or self-assessment tax paid.',
        'Results in either a payment of the balance or a refund of the excess.',
      ] },
      { kind: 'callout', tone: 'india', title: 'Choosing the right form matters', text: "India has different ITR forms for different situations — salaries, business income, capital gains, foreign income, and so on. Picking the wrong one can lead to omissions or rejections. The practical habit is to match the form to your actual income picture rather than to convenience." },
      sim('tax', ''),
      { kind: 'example', title: 'A refund scenario', text: 'If your total tax liability is less than the TDS already deducted — perhaps because you had large deductions or lower final taxable income — the return is where you claim the refund. If the opposite is true, the return is where you pay the balance. Either way, the return is the settlement document.' },
      { kind: 'terms', items: [
        { term: 'ITR', meaning: 'Income Tax Return — the form used to report income, claim deductions, compute tax, and settle any balance or refund for the year.' },
        { term: 'self-assessment tax', meaning: 'tax paid by the assessee while filing the return to cover any liability not already met through TDS or advance tax.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the main purpose of filing an ITR?',
        options: [
          { text: 'To report income, claim deductions, compute the tax, and settle the difference between what is owed and what was already paid.', correct: true, why: 'The return is the formal way the assessee tells the department the full income picture and finishes the tax calculation for the year.' },
          { text: 'To ask the government for a grant based on how much you paid.', correct: false, why: 'The return is not a grant application. It is a reporting and settlement document.' },
          { text: 'Only to record the TDS that was already deducted, since that is the only number that matters.', correct: false, why: 'The return covers all taxable income and the full computation, not just the TDS that was already collected.' },
        ],
      },
    ],
    takeaway: 'The ITR is the annual settlement of your income and tax. File the correct form, report all taxable income, and let the return reconcile what was withheld with what you actually owe.',
  },

  'l4-025': {
    id: 'l4-025',
    title: 'Deductions',
    subtitle: 'The amounts the law lets you subtract before computing tax.',
    minutes: 6,
    blocks: [
      { kind: 'p', text: "Deductions are the parts of your financial life the law allows you to subtract from your income before the tax is computed. They are not loopholes; they are incentives and relief built into the code for specific purposes — retirement savings, insurance, housing, health, and a few other priorities. The catch is that they come with conditions, limits, and sometimes regime choices that affect whether they are available." },
      sim('tax', 'The tax lab lets you see how old-regime deductions change the final number.'),
      { kind: 'h', text: 'The kinds of deductions you commonly see' },
      { kind: 'list', items: [
        'Retirement and long-term savings deductions allowed under the law for certain investments and contributions.',
        'Insurance premiums, within limits, for specified family coverage.',
        'Principal repayment of a home loan, where permitted.',
        'Health-related and other specific deductions that the law lists separately.',
        'Standard deduction: a fixed deduction available under some regimes for salaried individuals, which simplifies part of the computation.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'Do not chase deductions at the cost of good decisions', text: "A deduction is only valuable if the underlying action also makes sense for you. Buying something mainly to save tax can backfire if the product, the lock-in, or the opportunity cost is poor. The tax angle should refine a good decision, not manufacture one." },
      sim('tax', ''),
      { kind: 'example', title: 'A deduction in context', text: 'Suppose the law allows a deduction for a retirement contribution. If you were going to set aside that money anyway, the deduction is a bonus. If you are choosing the contribution only to save tax, compare the after-tax benefit with what else the money could do. The tax angle changes the math, but it should not be the only reason.' },
      { kind: 'terms', items: [
        { term: 'deduction', meaning: 'an amount the law permits to be subtracted from income before tax is computed, subject to conditions and limits.' },
        { term: 'standard deduction', meaning: 'a fixed deduction available in some regimes for salaried individuals, meant to simplify part of the income computation.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the healthiest way to think about tax deductions?',
        options: [
          { text: 'As incentives that can improve a sensible decision, but not as a reason to make a bad one just to save tax.', correct: true, why: 'Deductions matter, but the underlying decision should still make sense for your finances. Tax should refine the choice, not force it.' },
          { text: 'As the main reason to make any financial decision, since saving tax is always the priority.', correct: false, why: 'Tax savings are one factor, not the whole decision. A poor product with a tax break can still be a poor product.' },
          { text: 'As items that apply equally in every regime, so the regime choice does not matter.', correct: false, why: 'Many deductions depend on the regime you choose, so the regime can affect which deductions are actually available.' },
        ],
      },
    ],
    takeaway: 'Deductions reduce taxable income where the law allows. Use them to improve good decisions, and do not let the tax tail wag the financial dog.',
  },

  'l4-026': {
    id: 'l4-026',
    title: 'Capital Gains',
    subtitle: 'The profit from selling an asset, taxed under its own rules.',
    minutes: 6,
    blocks: [
      { kind: 'p', text: "A capital gain is the profit you make when you sell an asset for more than you paid for it, after accounting for the cost of acquisition and any permitted adjustments. The important thing is that capital gains are often taxed differently from ordinary income. The rate, the holding period that matters, and the way cost is treated can all differ from what you expect from salary or interest." },
      sim('tax', ''),
      { kind: 'h', text: 'What changes the outcome' },
      { kind: 'list', items: [
        'The type of asset: shares, property, mutual funds, gold, and debt papers are not all treated identically.',
        'The holding period: whether the gain is treated as short-term or long-term can change the rate and the computation.',
        'The cost basis: what you actually paid, adjusted where the law allows, affects the gain that is taxed.',
        'The timing: the year of sale is the year the gain is recognised for tax, even if the money had been tied up for years.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'Do not assume the sale profit is taxed like your salary', text: "Capital gains are easy to under-think because they arrive irregularly and often feel like a one-time thing. But irregular does not mean exempt or taxed lightly by default. The rule depends on the asset and the holding period, and it can be material even on a single sale." },
      sim('tax', ''),
      { kind: 'example', title: 'A simple sale', text: 'You bought a listed share at one price and sold it later at a higher price. The profit is the sale value minus the cost, subject to the rules for that asset class and holding period. If you held it long enough, the law may treat it under the long-term regime instead of the short-term regime, which can change the rate and the computation.' },
      { kind: 'terms', items: [
        { term: 'capital gain', meaning: 'the profit from selling a capital asset for more than its cost, subject to the tax rules for that asset and holding period.' },
        { term: 'cost of acquisition', meaning: 'the amount paid or deemed paid to acquire the asset, which is used to compute the gain on sale, subject to permitted adjustments.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the most important thing to know before selling an asset for a profit?',
        options: [
          { text: 'How the gain will be taxed — the asset type, the holding period, and the cost treatment — not just the profit amount.', correct: true, why: 'Capital gains are taxed under their own rules, and the outcome depends on the asset and the holding period, not only on how much you made.' },
          { text: 'Only the sale price, since the tax is simply a percentage of what you received.', correct: false, why: 'Tax is on the gain, not the full sale price, and the rate and computation depend on more than just the sale value.' },
          { text: 'Nothing in advance, because capital gains are never taxed until you ask the department.', correct: false, why: 'The law does tax capital gains, and the timing and computation are defined; the sale can create a real tax consequence.' },
        ],
      },
    ],
    takeaway: 'A capital gain is a profit from sale, taxed under its own rules. Before you sell, know the asset, the holding period, and the cost basis — the tax can be different from what you expect.',
  },

  'l4-027': {
    id: 'l4-027',
    title: 'Short-Term Vs Long-Term Capital Gains',
    subtitle: 'How long you hold can change how the profit is taxed.',
    minutes: 6,
    blocks: [
      scene4('deriv-payoff', 'Payoff at expiry is a simple function of spot — holding period is one of the variables that changes the tax answer.'),
      { kind: 'p', text: "The law often treats gains differently depending on how long you held the asset before selling. Short-term gains are generally taxed at one set of rules; long-term gains can be taxed at another, sometimes more favourably, sometimes with different conditions. The dividing line is the holding period, and it is set by the type of asset." },
      sim('tax', ''),
      { kind: 'h', text: 'Why the holding period matters' },
      { kind: 'list', items: [
        'It changes the rate and sometimes the computation method for the gain.',
        'It can affect whether indexation or other adjustments apply, where the law allows them.',
        'It can change the strategic value of holding a little longer rather than selling now.',
        'It is one of the few tax variables you can influence by timing, though you should not let tax alone drive a bad selling decision.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'Do not let the holding period override a real need to sell', text: "A tax advantage from waiting is useful only if waiting is itself sensible. If you need the money, the thesis is broken, or the risk has changed, the holding-period advantage is not enough to justify staying invested. Tax is part of the decision, not the decision." },
      sim('tax', ''),
      { kind: 'example', title: 'A timing question', text: 'Suppose you are considering selling a listed equity investment. The gain may be treated differently if it is short-term rather than long-term, and that difference can affect whether it is worth waiting to cross the threshold. But the decision should still start with whether you want to be in the investment at all, not only with what the tax will be.' },
      { kind: 'terms', items: [
        { term: 'short-term capital gain', meaning: 'a gain on an asset sold before the holding period that the law treats as short-term, taxed under the short-term rules for that asset type.' },
        { term: 'long-term capital gain', meaning: 'a gain on an asset held beyond the prescribed period, taxed under the long-term rules, which can differ from the short-term treatment.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the main reason the holding period matters in capital gains tax?',
        options: [
          { text: 'It determines whether the gain is treated as short-term or long-term, which can change the rate and computation.', correct: true, why: 'The holding period is what separates short-term from long-term treatment, and that classification drives the rules that apply.' },
          { text: 'It decides whether the gain is taxed at all, since only long-term gains are taxable.', correct: false, why: 'Both short-term and long-term gains can be taxable; the distinction is in the rules, not in whether the gain exists.' },
          { text: 'It only affects the date by which you must file, not the tax itself.', correct: false, why: 'The holding period affects the tax treatment, not merely the filing date.' },
        ],
      },
    ],
    takeaway: 'The holding period can change how a gain is taxed. Know the threshold for the asset you hold, and include the tax effect in the decision — but do not let it override a real reason to sell.',
  },

  'l4-028': {
    id: 'l4-028',
    title: 'Tax Treatment Of Investments',
    subtitle: 'Different investments are taxed differently — know the pattern before you buy.',
    minutes: 6,
    blocks: [
      { kind: 'p', text: "Not all investments are taxed the same way. Equity, debt, gold, property, fixed deposits, and mutual funds each have their own tax character: some are taxed as income when earned, some as capital gains when sold, some with a holding-period distinction, and some with special rules. The useful habit is to look at the after-tax return, not just the headline return, before you compare two products." },
      sim('tax', ''),
      { kind: 'h', text: 'Why after-tax returns matter' },
      { kind: 'list', items: [
        'Two products with similar pre-tax returns can leave you with very different money after tax.',
        'The tax timing matters: some gains are taxed only when you sell, others are taxed as they accrue.',
        'The asset class matters: equity and debt are not identical in tax treatment, and within each there are sub-rules.',
        'Your regime and your other income matter: the same investment can sit differently in different tax situations.',
      ] },
      { kind: 'callout', tone: 'tip', title: 'Compare investments the way you actually keep the money', text: "Do not compare products on gross returns alone. Compare what you are likely to keep after tax, after the holding pattern you expect, after the timing of the gain, and after the rules that apply to your situation. The best-looking number on paper is not always the best one in your hand." },
      sim('tax', ''),
      { kind: 'example', title: 'A comparison mindset', text: 'A fixed deposit and a debt fund may look similar on a surface return, but the tax treatment and the timing of the gain can differ. The right comparison is the after-tax, after-timing outcome over the period you actually plan to hold, not the advertised rate alone.' },
      { kind: 'terms', items: [
        { term: 'after-tax return', meaning: 'the return you keep after the tax that applies to the investment income or gain, which is the number that actually matters to you.' },
        { term: 'tax treatment', meaning: 'the way the law taxes a particular investment: as income, as capital gain, on accrual or on realisation, and with any special rules that apply.' },
      ] },
    ],
    quiz: [
      {
        q: 'When comparing two investments, what is the most useful measure?',
        options: [
          { text: 'The after-tax return over the period you actually plan to hold, given the rules that apply to that asset and your situation.', correct: true, why: 'Pre-tax returns can be misleading; the after-tax outcome is what you actually keep, and it depends on asset type, timing, and your own tax context.' },
          { text: 'The highest advertised rate, because that is the truest measure of the investment.', correct: false, why: 'An advertised rate is pre-tax and may not reflect the timing or rules that affect what you finally keep.' },
          { text: 'The return only at the time of sale, ignoring what happens in the meantime.', correct: false, why: 'Accruals, interim taxation, and holding-period rules can all affect the outcome, so the sale moment alone is not enough.' },
        ],
      },
    ],
    takeaway: 'Investments are taxed differently, and the after-tax return is the one that counts. Compare products on what you will actually keep, not on the headline number alone.',
  },

  'l4-029': {
    id: 'l4-029',
    title: 'Tax Planning Vs Tax Evasion',
    subtitle: 'Using the law is planning; hiding income is not a strategy.',
    minutes: 6,
    blocks: [
      { kind: 'p', text: "Tax planning is arranging your affairs within the law to reduce your tax legally — using the deductions, exemptions, timing, and structures the law actually provides. Tax evasion is doing the opposite: concealing income, inflating expenses, using false documents, or otherwise trying to avoid tax by breaking the law. The line is not subtle; one is a right, the other is a crime." },
      sim('tax', ''),
      { kind: 'h', text: 'The distinction in practical terms' },
      { kind: 'list', items: [
        'Planning uses what the law allows: legitimate deductions, lawful exemptions, sensible timing, and honest reporting.',
        'Evasion hides or misrepresents: unreported income, fake invoices, understated sales, overstated expenses, and documents that do not reflect reality.',
        'Planning is sustainable and predictable; evasion is a risk that can turn into penalties, interest, notices, and worse.',
        'The professional world treats planning as normal part of compliance; evasion is the part that gets people into serious trouble.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'The dangerous middle ground is still dangerous', text: "People sometimes tell themselves a grey story — a little bit hidden here, a little bit exaggerated there — and call it planning. It is not. If the arrangement depends on not being found out, it is not planning. If it depends on the law being ignored, it is evasion. Treat the line with respect." },
      sim('tax', ''),
      { kind: 'example', title: 'Two ways to reduce tax', text: 'One person uses allowed deductions, keeps proper records, files on time, and reports all income. Another person does not report some cash income and inflates expenses with fake bills. The first is planning; the second is evasion. They may both feel like ‘reducing tax’, but only one is lawful.' },
      { kind: 'terms', items: [
        { term: 'tax planning', meaning: 'arranging your financial affairs lawfully to reduce tax using the deductions, exemptions, and options the law provides.' },
        { term: 'tax evasion', meaning: 'illegally avoiding tax by concealing income, misrepresenting facts, or using false documents, as opposed to lawful planning.' },
      ] },
    ],
    quiz: [
      {
        q: 'Which is the clearest example of tax planning rather than evasion?',
        options: [
          { text: 'Using allowed deductions and exemptions, keeping proper records, and reporting all income honestly.', correct: true, why: 'That is lawful use of the tax framework to reduce liability while staying within the rules.' },
          { text: 'Not reporting cash income received outside the bank account to keep it out of the tax base.', correct: false, why: 'Concealing income is evasion, not planning, because it misrepresents what was actually earned.' },
          { text: 'Inflating expenses with bills that do not relate to the actual business to lower profit.', correct: false, why: 'False expenses are a misrepresentation, which is evasion, not lawful planning.' },
        ],
      },
    ],
    takeaway: 'Tax planning is lawful and ordinary; tax evasion is illegal and risky. Keep your records honest, claim what the law allows, and never confuse reducing tax with hiding it.',
  },
}