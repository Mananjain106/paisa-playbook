import type { Chapter } from '../../types'
import { scene, sim } from '../../lib/chapter-blocks'
import { l5Illustrative, l5Rule, l5Sources } from '../../lib/l5-blocks'

/**
 * Level 5, band four, batch 2 — chapters l5-081 to l5-090.
 *
 * Where batch 1 followed money after a death, this batch follows it through the
 * decisions a household makes while everyone is alive: who depends on the income,
 * what a course or a house or a vehicle really costs, whether to rent or buy,
 * whether to pay cash or borrow, and what to do in the week the income stops.
 *
 * Facts verified on 15 October 2026 and linked from each chapter: the
 * Income-tax Act, 2025, in force from 1 April 2026, which renumbers the 1961
 * Act's provisions while leaving their substance alone — section 123 (earlier
 * 80C, ₹1,50,000 under Schedule XV), section 126 (earlier 80D, ₹25,000 rising to
 * ₹50,000 for a senior citizen, with ₹5,000 of preventive health check-up inside
 * the limit), section 127 (earlier 80DD, a fixed ₹75,000, or ₹1,25,000 where the
 * disability is 80% or more, for a dependant, on a certificate from the
 * prescribed medical authority), section 128 (earlier 80DDB, ₹40,000 or
 * ₹1,00,000), section 129 (earlier 80E, the whole interest on an education loan
 * for eight years), section 22 (earlier 24(b), ₹2,00,000 of interest on a
 * self-occupied house), and sections 82 to 88 (earlier 54 to 54F, reinvestment
 * relief); the ₹2,00,000 interest deduction and every deduction in Chapter VIII
 * Part B being available only in the old regime; GST on an under-construction
 * flat at 5%, or 1% for affordable housing, with ready-to-move property carrying
 * none once a completion certificate is issued, while stamp duty remains a state
 * levy; a sale of immovable property needing registration under section 17 of the
 * Registration Act, 1908; a project needing RERA registration before it is
 * advertised, with 70% of collections held in an escrow account; TDS on rent
 * above ₹50,000 a month (earlier 194-I) and on interest above ₹50,000, or
 * ₹1,00,000 for a senior citizen (earlier 194A); the RBI's Key Facts Statement,
 * mandatory for new retail and MSME term loans sanctioned on or after 1 October
 * 2024, disclosing the all-inclusive annual percentage rate; no TCS on an
 * education remittance funded by a loan from a specified financial institution,
 * and 5% only above ₹10,00,000 in a year otherwise, within the ₹2,50,000 LRS
 * limit per person per financial year; third-party motor cover being compulsory
 * under section 146 of the Motor Vehicles Act, 1988, with IRDAI notifying the
 * premium and long-term cover applying to new vehicles since 1 September 2018;
 * and an RBI-regulated loan being classified SMA-1 at 31 days overdue, SMA-2 at
 * 61 days, and a non-performing asset beyond 90 days.
 */
export const l5Life: Record<string, Chapter> = {
  'l5-081': {
    id: 'l5-081',
    title: 'Dependents',
    subtitle: 'A dependant is a number before it is a feeling: what they need each year, for how long, and who pays if you cannot.',
    takeaway: 'Cover is sized on what each dependant needs a year, for how many years, plus the loans that would still be running — not on a multiple of salary.',
    minutes: 12,
    blocks: [
      scene('dependant-matrix', 'Every person who depends on the income, set against the three risks that land on the person earning it.'),
      { kind: 'p', text: 'Most people can name the people who depend on them and cannot say what supporting them would cost. Dependency has a shape: an amount each year, for a number of years, plus the loans that would still be running if the income stopped. The moment those three things are written down, insurance stops being a product somebody is selling and becomes arithmetic. A term policy is then sized on the answer, not on a multiple of salary that a brochure suggested.' },
      { kind: 'p', text: 'The second half of the exercise is less obvious. Every dependant faces a different risk, and the same person does not insure all of them. A spouse needs income replacement if you die, and their own health cover for the years they are alive. Children need income replacement plus a guardian named in a will, because money without a guardian is a court proceeding. Parents need health cover far more than they need your life cover, since their health event is likely and your death is not. A dependant with a disability needs an arrangement that keeps working after the person who understands it is gone.' },
      { kind: 'p', text: 'That last case is where plans usually fail. Naming a nominee is not a plan for someone who will need care for forty years: a nominee receives the money and holds it, and holding it for a person with a disability is a burden most relatives are not equipped to carry. A trust, or a guardianship arrangement made with a lawyer, with the money and the instruction written into it, is what survives. It is also the case where the tax law is most generous, because it recognises the cost.' },

      { kind: 'h', text: 'Who needs what, and what covers it' },
      {
        kind: 'table',
        caption: 'Each dependant, their exposure, and the cover that answers it',
        headers: ['Who', 'What they need if the income stops', 'What actually covers it'],
        rows: [
          ['A spouse', 'Their share of the household spend, on top of whatever they earn', 'Term cover sized on that yearly amount, plus a nomination that names them'],
          ['Children in school', 'Fees, food and everything attached to them, for the years of school left', 'Term cover, and a guardian named in the will'],
          ['Children in higher study', 'Fees at the price of the year of admission, not today', 'Term cover, and a goal funded separately from the household budget'],
          ['Parents you support', 'A monthly transfer and their medicines', 'Health cover for them first; your income matters less here'],
          ['A dependant with disability', 'Care that must continue regardless of anyone else', 'A trust or a guardianship arrangement, not only a nominee'],
          ['A co-borrower on your loan', 'The part of the EMI they cannot carry alone', 'Cover on both lives, and a plan for the loan itself'],
        ],
      },
      l5Rule(
        'What the tax law recognises about dependants',
        'The fixed deduction for maintaining a dependant with a disability is ₹75,000 a year, rising to ₹1,25,000 where the disability is 80% or more. It is a fixed amount, not a reimbursement, it is available for a dependant rather than for your own disability, and it requires a certificate from the medical authority prescribed for the purpose. Under the Income-tax Act, 2025 it is section 127 (earlier section 80DD). Health cover you buy for your parents is deductible up to ₹25,000 a year, or ₹50,000 if they are senior citizens, under section 126 (earlier section 80D), with the combined ceiling for yourself and your parents at ₹50,000 or ₹1,00,000. Both are available only in the old regime. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'The order to work in' },
      { kind: 'p', text: 'Cover comes before everything else, and it comes in a specific order: health cover for the whole family, then term cover on the earning life, then the arrangements that insurance cannot reach. A family with term cover and no health cover has protected itself against the unlikely event and left itself open to the likely one. A family with health cover and no term cover has the same problem in reverse. Neither one is a plan.' },
      sim('l5-dependant-planner', 'Add up who depends on this income, what supporting them costs, and the cover that would replace it.'),
      l5Illustrative('Every rupee figure in the lab — the yearly support amounts, the cover, the savings — is invented so that the method can be practised. The rules cited above, including the ₹75,000 and ₹1,25,000 figures for a dependant with a disability and the ₹25,000 and ₹50,000 limits for parents\' health cover in the old regime, were verified on 15 October 2026 and are linked below.'),

      { kind: 'h', text: 'Do these seven things' },
      { kind: 'list', ordered: true, items: [
        'Write down every person who would be worse off financially if your income stopped, and the amount they would need each year.',
        'Multiply that by the years they would need it, add the loans that would still be running, and subtract what is already in place.',
        'Buy health cover for everyone who depends on you, including the parents, before increasing any life cover.',
        'Size the term cover on the number from step two, and re-check it after every salary change and every birth.',
        'Name a guardian in the will for any child, and check that the nomination on every policy agrees with the will.',
        'For a dependant with disability, make the arrangement that outlives you: a trust, a guardian, and instructions in writing.',
        'Claim the deductions you are entitled to — section 127 for the dependant, section 126 for the parents — and keep the certificate current.',
      ] },
      { kind: 'p', text: 'The reason this matters is not the numbers. It is that a household with dependent children, ageing parents and one earning member is a single point of failure, and everyone in it knows that without being told. Writing the numbers down converts an unspoken worry into a list that can be fixed in an afternoon, and it usually turns out to be smaller than the worry was.' },
      { kind: 'terms', items: [
        { term: 'Dependant', meaning: 'Someone who relies on your income for their living costs, whether or not the law calls them one.' },
        { term: 'Income replacement', meaning: 'The sum that would produce the yearly amount a dependant needs, for the years they need it.' },
        { term: 'Human life value', meaning: 'A method of sizing cover as the present value of the income the household would lose.' },
        { term: 'Guardian', meaning: 'The person named to take charge of a minor child and their money if the parents die.' },
        { term: 'Trust for a dependant', meaning: 'A legal arrangement that holds and applies money for someone who cannot manage it themselves.' },
      ] },
      l5Sources(['irdai', 'incometax'], [
        'The rules on life and health insurance, nominations and the duties of an insurer towards a nominee and a claimant',
        'The deduction for a dependant with a disability (section 127, earlier 80DD) and the health-insurance limits including parents (section 126, earlier 80D)',
      ]),
    ],
    quiz: [
      {
        q: 'Your income stops tomorrow. What decides how much cover is enough for the people who depend on it?',
        options: [
          { text: 'A round figure such as ten times your annual salary', why: 'A multiple is a starting point for a conversation, not an answer. It ignores how many people there are, what they need a year, and how long for.' },
          { text: 'What each person needs each year, for the years they would need it, plus the loans that would still be running', correct: true, why: 'The need is an amount a year multiplied by a number of years, and liabilities sit on top of it. That is the number a term policy is priced against.' },
          { text: 'The premium you can comfortably afford', why: 'The premium is a budget for cover, not a measure of the need. Starting from the premium usually means buying too little and paying too much.' },
          { text: 'The value of everything you own, since it can be sold', why: 'Assets reduce the gap, they do not define it. Property cannot be sold in the week the income stops, and the money is needed then.' },
        ],
      },
      {
        q: 'A dependant in your house has 85% disability. What does section 127 of the Income-tax Act, 2025 (earlier section 80DD) give you?',
        options: [
          { text: 'A deduction equal to what you actually spend on their care', why: 'The deduction is a fixed amount, not a reimbursement. Receipts are not what the section asks for.' },
          { text: 'A fixed deduction of ₹75,000', why: '₹75,000 is the figure for a disability of 40% or more. At 80% and above, the fixed deduction is ₹1,25,000.' },
          { text: 'A fixed deduction of ₹1,25,000, in the old regime, with a certificate from the prescribed medical authority', correct: true, why: 'At 80% disability or higher the fixed deduction is ₹1,25,000, it does not depend on what you spend, and it requires the prescribed certificate, kept current.' },
          { text: 'Nothing, because a dependant has no tax treatment of their own', why: 'The section exists precisely for this: it recognises the cost of maintaining a dependant with a disability.' },
        ],
      },
      {
        q: 'You have named your brother as the nominee for your sister who has a disability, so that he can look after her after you. Is that enough?',
        options: [
          { text: 'Yes, a nomination transfers the money to him outright', why: 'A nominee receives the money as a custodian and holds it for whoever is entitled to it. A nomination is not a transfer of ownership.' },
          { text: 'Yes, as long as he is also the executor of your will', why: 'An executor has authority to administer the estate; that is not the same as a duty, and a mechanism, to fund care for the rest of her life.' },
          { text: 'No. A nominee receives and holds, so a care arrangement that outlives you — a trust with a named guardian — is what actually protects her', correct: true, why: 'The money has to arrive with an instruction attached. A trust or a guardianship arrangement, set up in advance, is the piece that a nomination cannot replace.' },
          { text: 'No, because only a spouse can be nominated on a policy', why: 'A nomination is not restricted to a spouse, and widening it is exactly what the law allows. The problem is that it does not create a lasting arrangement.' },
        ],
      },
    ],
  },

  'l5-082': {
    id: 'l5-082',
    title: "Children's Education Planning",
    subtitle: 'The fee you will pay is not the fee on the website today, and the gap between those two numbers is the subject.',
    takeaway: 'Save for the fee on the day of admission rather than the fee today, and move the corpus into capital protection over the last three years.',
    minutes: 12,
    blocks: [
      scene('education-ladder', 'The same course priced at four different admission dates, because the fee moves while you save.'),
      { kind: 'p', text: 'An education plan fails in one of two ways. Either nothing is saved, or the right amount is saved against last year\'s fee. Education costs have risen faster than general inflation for long enough that the second mistake is now the common one. A course quoted at ₹15 lakh today, with admission twelve years away and costs rising at 8% a year, is a ₹38 lakh commitment. That is the number to save for, and it is nearly two and a half times the one on the website.' },
      { kind: 'p', text: 'The second part is the mix. A twelve-year goal can be mostly in equity, because time absorbs the wobble. A three-year goal cannot, because a bad year has no time to recover in. That is why education planning is a glide path rather than a portfolio: the same monthly investment, moved progressively from growth into capital protection, so that the corpus is intact on the day the admission letter arrives rather than depending on the market that quarter.' },
      { kind: 'p', text: 'The third part is what people forget to cost. Hostel, travel, a laptop, the two months before a course starts, the fees for examinations and the deposit — a quarter of the total, usually, and never in the brochure. If the course is abroad there is a fourth layer, because the money has to leave the country: the remittance has its own limit, its own tax-collection rule and, if it is funded by a loan, better treatment than a remittance funded out of savings.' },

      { kind: 'h', text: 'The four moving parts' },
      {
        kind: 'table',
        caption: 'What moves in an education plan, and what to do about each',
        headers: ['Part', 'What moves it', 'What to do'],
        rows: [
          ['The fee', 'Education inflation, usually in high single digits', 'Inflate today\'s fee to the year of admission before deciding any monthly amount'],
          ['Living and travel costs', 'The city, and the currency if it is abroad', 'Budget it separately; it is often a quarter of the whole bill'],
          ['The corpus', 'The return, and how many years are left', 'Shift from growth into capital protection as the date approaches'],
          ['The loan', 'The rate, the tenure, and the tax treatment of the interest', 'The whole interest is deductible for eight years in the old regime'],
          ['The remittance', 'The LRS limit and the TCS rule on money sent abroad', 'Fund it from a specified-institution loan where possible: no TCS applies'],
        ],
      },
      l5Rule(
        'What the law allows for education',
        'Interest on a loan taken for higher education — for yourself, your spouse, your children or a legal ward — is deductible in full, with no ceiling, for eight years beginning with the year repayment starts. Under the Income-tax Act, 2025 that is section 129 (earlier section 80E), and it is available only in the old regime. Money sent abroad for education moves under the Liberalised Remittance Scheme, which allows up to USD 2,50,000 per person per financial year. Where the remittance is funded by a loan from a specified financial institution, no tax is collected at source on it; otherwise tax is collected at 5% only on the amount above ₹10,00,000 in a financial year. Any tax collected is credited against your tax liability, not lost. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'The mistake that costs the most' },
      { kind: 'p', text: 'The most expensive version of this plan is the one that starts five years before admission, in a single instrument, at whatever the market happens to be doing. The second most expensive is the one that borrows the whole amount and leaves the interest to be discovered later, when the deduction for it was there all along. Neither mistake requires bad luck; both are just planning done in the wrong order.' },
      sim('l5-education-goal', 'Price a course at the day of admission, then find the monthly amount that gets there — and the mix it should be held in.'),
      l5Illustrative('The course cost, the inflation rate and the monthly amount in this lab are invented for practice. The rules quoted — section 129 (earlier 80E) allowing the whole interest for eight years in the old regime, and the TCS treatment of an education remittance funded by a loan from a specified financial institution — were verified on 15 October 2026 and are linked below.'),

      { kind: 'h', text: 'Do these seven things' },
      { kind: 'list', ordered: true, items: [
        'Write the goal as a date, not an amount: the year and month the money is needed.',
        'Inflate today\'s fee to that date at a rate you are willing to defend, and treat the result as the target.',
        'Add living, travel and one-off costs, which are usually a quarter of the total.',
        'Start a monthly investment against the target, even a small one, so that the habit exists before the amount grows.',
        'Move the corpus towards capital protection over the last three years, so a bad quarter cannot decide the outcome.',
        'If a loan will be needed, take it in the borrower\'s name who can use section 129, and keep the interest certificates.',
        'Fund any overseas remittance in the way that avoids unnecessary tax collection, and keep the paperwork for the credit.',
      ] },
      { kind: 'p', text: 'The value of doing this early is not the return. It is that a family which has priced the goal can say no to the wrong course and yes to the right one, because the money is already a decision rather than a hope. That is what the plan actually buys.' },
      { kind: 'terms', items: [
        { term: 'Education inflation', meaning: 'The rate at which course fees rise, which has run ahead of general price inflation.' },
        { term: 'Glide path', meaning: 'Moving a goal\'s corpus from growth assets to safe ones as the date it is needed approaches.' },
        { term: 'Moratorium', meaning: 'The period during study, plus a year, in which an education loan needs no repayment.' },
        { term: 'Liberalised Remittance Scheme', meaning: 'The RBI facility under which a resident may send up to USD 2,50,000 abroad in a financial year.' },
        { term: 'Specified financial institution', meaning: 'A bank or notified lender whose education-loan-funded remittance attracts no tax collection at source.' },
      ] },
      l5Sources(['rbi', 'incometax'], [
        'The Liberalised Remittance Scheme, its annual limit per person, and the rules on outward remittances for education',
        'The education-loan interest deduction (section 129, earlier 80E) and the tax-collection rules on education remittances',
      ]),
    ],
    quiz: [
      {
        q: 'A course costs ₹15,00,000 today and your child starts in twelve years. If education costs rise 8% a year, what are you actually saving for?',
        options: [
          { text: 'About ₹15,00,000, since the fee is the fee', why: 'That is today\'s price. Twelve years of fee inflation is the entire point of the calculation.' },
          { text: 'About ₹19,00,000, adding simple interest on the fee', why: 'Simple interest on the fee understates it badly; the fee compounds, and 8% over twelve years more than doubles it.' },
          { text: 'About ₹38,00,000, because 8% a year for twelve years is roughly two and a half times the fee', correct: true, why: 'Compounding at 8% multiplies the figure by about 2.5, so ₹15 lakh becomes roughly ₹38 lakh. That is the target, and it is why the plan has to beat the fee.' },
          { text: 'It cannot be estimated, so save whatever is possible', why: 'The estimate is straightforward arithmetic, and a target is what makes a monthly amount possible. Without it there is no plan to measure.' },
        ],
      },
      {
        q: 'You repay an education loan over nine years. How long can you claim the deduction for the interest?',
        options: [
          { text: 'For all nine years, since the loan runs that long', why: 'The deduction is capped at eight years regardless of how long the loan runs.' },
          { text: 'The whole interest for eight years, beginning with the year repayment starts', correct: true, why: 'Section 129 (earlier 80E) allows the entire interest, with no ceiling, for eight years from the year you begin repaying — not just ₹1.5 lakh a year.' },
          { text: 'Up to ₹1,50,000 of interest a year', why: '₹1,50,000 is the ceiling for investments under section 123 (earlier 80C). The education-loan interest has no monetary ceiling at all.' },
          { text: 'Only the first three years, and only if the loan was for a degree', why: 'Neither the three-year limit nor the degree restriction exists. Higher education after the senior secondary stage qualifies.' },
        ],
      },
      {
        q: 'You are sending tuition fees abroad and the money comes from a bank education loan. What happens on tax collected at source?',
        options: [
          { text: 'No tax is collected on that remittance, because it is funded by a loan from a specified financial institution', correct: true, why: 'The exemption exists precisely for this case: an education remittance financed by a specified financial institution attracts no collection at source.' },
          { text: 'Tax is collected at 5% from the first rupee, whatever the source', why: 'The 5% rate applies only above a threshold, and not at all where the remittance is funded by a specified-institution loan.' },
          { text: 'Tax is collected at 20%, and it is not refundable', why: 'Neither the rate nor the irrecoverability is right: any tax collected at source is credited against your tax liability.' },
          { text: 'Tax is collected only if the amount exceeds USD 2,50,000', why: 'The USD 2,50,000 is the LRS limit for the transfer itself. Tax collection has its own ₹10,00,000 threshold and its own exemption for loan-funded education remittances.' },
        ],
      },
    ],
  },

  'l5-083': {
    id: 'l5-083',
    title: 'Major Purchases',
    subtitle: 'A large purchase is a decision about the next five years, not about the price on the board.',
    takeaway: 'Compare the total cost of owning — price, tax, interest, running costs and resale loss — and never compare two offers by their instalment.',
    minutes: 12,
    blocks: [
      scene('tco-breakdown', 'One price tag, and the five places the money actually goes over the years that follow.'),
      { kind: 'p', text: 'A major purchase is not the money you hand over; it is the money you will never see again. Those are different numbers, and the gap is where households get into trouble. The purchase price is one line. Tax and registration are another. Interest, if any part is financed, is a third. Running costs arrive every year rather than once. The resale loss is silent until the day you sell and discover what the thing was worth. Add them up and a purchase that felt affordable becomes a monthly figure you can compare with everything else.' },
      { kind: 'p', text: 'The reason the monthly instalment is such a poor guide is that it is designed to look small. Stretching a loan keeps the payment flat while the total climbs, so the offer that feels easiest is usually the most expensive. The correct comparison is between two annualised numbers: what the borrowed money costs you, and what the same money would earn if you kept it. Everything else — the discount, the exchange offer, the zero-cost label — is a rearrangement of those two.' },
      { kind: 'p', text: 'There is a third number most people never calculate: the opportunity cost of the cash. Money spent on a depreciating asset is money that stops working for you, and the loss is the return it would have earned, not the amount spent. That is why the same purchase can be sensible for one household and a mistake for another on identical incomes, and why the answer changes when the purchase is deferred by a year.' },

      { kind: 'h', text: 'The five lines of the real bill' },
      {
        kind: 'table',
        caption: 'What a large purchase costs, and how each line can be reduced',
        headers: ['Line', 'How big it usually is', 'How to shrink it'],
        rows: [
          ['Purchase price', 'The whole number you are quoted', 'Buy less of the thing rather than a smaller instalment of it'],
          ['Tax and registration', 'A few percent, up to a fifth for some categories', 'Nothing, beyond choosing a cheaper category'],
          ['Interest', 'Grows with the share financed and the tenure', 'Finance less, and for less time'],
          ['Running and upkeep', 'The line people under-count', 'Ask what it costs a month before asking what it costs to buy'],
          ['Resale loss', 'Largest in the first year of ownership', 'Hold it longer, or let somebody else take the first year'],
        ],
      },
      l5Rule(
        'How the rules force a loan to be visible',
        'For every new retail and MSME term loan sanctioned on or after 1 October 2024, the lender must give the borrower a Key Facts Statement before the loan is executed, stating the annual percentage rate — the interest and all other charges expressed as one annual cost — along with the fees, the tenure and the repayment schedule. Additional charges that are not in the statement cannot be levied. The rate to compare is therefore the annual percentage rate, not the instalment. Under the Income-tax Act, 2025, interest on a loan for a self-occupied house is deductible up to ₹2,00,000 a year (section 22, earlier section 24(b)) and the principal repaid sits inside the ₹1,50,000 ceiling of section 123 (earlier section 80C), both in the old regime only. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'Invent a cooling-off rule of your own' },
      { kind: 'p', text: 'The law gives you no right to change your mind about a purchase made in a shop; the cooling-off rules people remember belong to insurance policies and to distance selling. So write one for yourself, and make it specific: anything above a set amount waits thirty days, requires the total cost of ownership to be worked out on paper, and needs the monthly figure to be compared against the household budget before anything is signed. The rule costs nothing and removes the single most expensive input into a large purchase, which is the mood on the day.' },
      sim('l5-major-purchase-analyser', 'Turn a price tag into the total cost of owning it — cash today, interest, running costs, resale, and the monthly truth.'),
      l5Illustrative('The prices, rates and resale assumptions in this lab are invented so that the method can be practised. The regulatory facts quoted — the RBI\'s Key Facts Statement for retail term loans from 1 October 2024 with the all-inclusive annual percentage rate, and the old-regime deductions of ₹2,00,000 on interest and ₹1,50,000 on principal — were verified on 15 October 2026 and are linked below.'),

      { kind: 'h', text: 'Do these seven things' },
      { kind: 'list', ordered: true, items: [
        'Write the total cost of ownership before deciding: price, tax, interest, running costs and resale loss.',
        'Divide that total by the months you expect to keep the thing, and compare the result with the income it competes with.',
        'Ask for the annual percentage rate in writing, and refuse to compare offers on instalments.',
        'Decide how much to finance from the reserve you keep, not from the payment you can manage.',
        'Check what the thing will be worth in three years; where the resale market is thin, price that in.',
        'Apply your own waiting rule to anything above your threshold, with the numbers written down before you sign.',
        'Re-read the whole decision once the excitement has passed, and be willing to walk away.',
      ] },
      { kind: 'p', text: 'None of this argues against buying expensive things. It argues for buying them with the whole price visible, because the households that stay solvent are not the ones that buy less; they are the ones that know what they are buying.' },
      { kind: 'terms', items: [
        { term: 'Total cost of ownership', meaning: 'Everything a purchase costs over the years you own it, including running costs and resale loss.' },
        { term: 'Opportunity cost', meaning: 'What the money spent would have earned had it been left invested.' },
        { term: 'Annual percentage rate', meaning: 'The interest and all charges of a loan expressed as one annual cost.' },
        { term: 'Key Facts Statement', meaning: 'The RBI-mandated one-page disclosure of a retail loan\'s terms, mandatory for new loans since 1 October 2024.' },
        { term: 'Sunk cost', meaning: 'Money already spent which should not influence the next decision.' },
      ] },
      l5Sources(['rbi', 'incometax'], [
        'The Key Facts Statement requirement for retail and MSME term loans, including the all-inclusive annual percentage rate',
        'The home-loan interest deduction (section 22, earlier 24(b)) and the investment ceiling that includes principal repayment (section 123, earlier 80C)',
      ]),
    ],
    quiz: [
      {
        q: 'One offer is ₹10,000 a month for 36 months; another is ₹10,000 a month for 48 months for the same thing at the same rate. Which costs less?',
        options: [
          { text: 'The 36-month offer, because the same payment over fewer months is less in total', correct: true, why: 'The instalment is identical, so the shorter tenure hands over twelve fewer payments and less interest. This is exactly why offers are quoted as instalments.' },
          { text: 'The 48-month offer, because the payment is the same both times', why: 'The payment being the same is the trap: the longer offer takes four more years of the same money out of the household.' },
          { text: 'Neither, because only the cash price matters', why: 'The cash price is one line of the total. When the price is the same in both offers, the financing terms are the whole difference.' },
          { text: 'The 48-month offer, because inflation reduces the real cost of later payments', why: 'Inflation is real but it does not outweigh four extra years of interest at a consumer-loan rate. The arithmetic is not close.' },
        ],
      },
      {
        q: 'Before a retail term loan is sanctioned, what must the lender give you?',
        options: [
          { text: 'A Key Facts Statement stating the annual percentage rate and all charges', correct: true, why: 'Since 1 October 2024 the RBI requires a Key Facts Statement for every new retail and MSME term loan, disclosing the all-inclusive annual cost, and charges outside it cannot be levied.' },
          { text: 'A written offer of the lowest rate available in the market', why: 'No lender has to promise the market\'s best rate. What is required is that the rate you are given, and every charge, is disclosed in one place.' },
          { text: 'A guarantee that the rate will not change during the loan', why: 'Floating rates move, and the disclosure says so. A fixed rate is a choice you make, not a right you are given.' },
          { text: 'An approval from the RBI before the loan is disbursed', why: 'The RBI sets the rules; it does not approve individual retail loans.' },
        ],
      },
      {
        q: 'You can pay cash for a purchase or borrow at 12%; the cash is in a deposit earning about 6% before tax, and you are in the 30% slab. What is the right comparison?',
        options: [
          { text: '12% against 6%, so borrow, because the deposit halves the cost', why: 'The deposit earns about 6% before tax and roughly 4.2% after it, so the gap is far wider than it looks — and it points the other way.' },
          { text: 'The loan rate against what the cash earns after tax', correct: true, why: 'A 12% loan against about 4.2% after tax makes paying cash cheaper by roughly eight percentage points a year, provided a reserve survives the purchase.' },
          { text: 'The instalment against the monthly budget', why: 'That is an affordability test, not a cost comparison. A payment you can afford can still be the more expensive way to buy.' },
          { text: 'The cash price against the total of the instalments, ignoring what the cash could earn', why: 'Ignoring the earnings on the cash flatters the loan whenever rates are high, which is when the decision matters most.' },
        ],
      },
    ],
  },

  'l5-084': {
    id: 'l5-084',
    title: 'House Purchase',
    subtitle: 'The asking price is the smallest honest number in a house purchase.',
    takeaway: 'A house costs the cash you bring on day one plus the monthly figure it creates for twenty years, and both have to survive a bad year.',
    minutes: 12,
    blocks: [
      scene('house-cost-stack', 'Every layer between the asking price and the loan: the down payment, the state\'s stamp duty, registration, GST, interest and upkeep.'),
      { kind: 'p', text: 'A house is the largest transaction most households ever make, and it is the one where the quoted price matters least. Between the agreement value and the day you hold the keys, several layers are added: a down payment, stamp duty at whatever rate your state charges, a registration charge, GST if the flat is under construction, and the cost of moving. Finance is arranged on the agreement value; the cash you must bring is computed on everything else.' },
      { kind: 'p', text: 'Then comes the part that lasts twenty years. Interest on a home loan is usually the largest single amount a household pays for anything, often exceeding the price of the house itself. It is not a fee or a trick; it is what borrowing a large sum for a long time costs. But it means the decision is not "can I afford this house" — it is "can I afford this house on this loan for this tenure", which is a question about the monthly figure versus the monthly income, and about how many years of that figure the household can hold through a job change, a child, or a bad year.' },
      { kind: 'p', text: 'The tax treatment is worth knowing but should never drive the purchase. The interest on a loan for a self-occupied house is deductible up to ₹2,00,000 a year and the principal repaid counts inside the ₹1,50,000 investment ceiling, both in the old regime only. On a ₹12 lakh annual tax saving that is real money; on the decision itself it is marginal. Households that buy a more expensive house to save tax usually pay more interest than they save.' },

      { kind: 'h', text: 'What the day costs, and what follows' },
      {
        kind: 'table',
        caption: 'The cash a house needs, and the monthly figure that follows it',
        headers: ['Item', 'How it is set', 'What to check'],
        rows: [
          ['Down payment', 'Your choice, bounded by what the lender will finance', 'A larger one lowers the EMI but must not use the emergency reserve'],
          ['Stamp duty', 'A state rate, commonly around 5% to 7%', 'The rate, and any concession for a first home or a woman buyer in your state'],
          ['Registration charge', 'Around 1%, with a ceiling in some states', 'Whether the sale deed is registered, which the law requires'],
          ['GST', '5% on an under-construction flat, 1% if affordable, none once a completion certificate exists', 'Whether you are buying under construction or ready to move'],
          ['Interest', 'The rate, the tenure, and therefore the loan amount', 'The annual percentage rate in the Key Facts Statement, not the EMI quoted'],
          ['Upkeep', 'Society charges, property tax and repairs', 'A monthly number, which the EMI figures never include'],
        ],
      },
      l5Rule(
        'The statutory side of buying a house',
        'Stamp duty is levied by the state, so the same flat costs different amounts in different cities; registration of a sale of immovable property is compulsory under section 17 of the Registration Act, 1908. GST is charged on an under-construction flat at 5%, or 1% for affordable housing, and not at all on a ready-to-move property once a completion certificate has been issued. Building a project for sale requires registration with the state real-estate regulator before it can be advertised, and 70% of the amounts collected from buyers must be kept in a separate escrow account to be used for that project. Tax is deducted at source at 1% by a buyer paying ₹50,00,000 or more for a property (earlier section 194-IA, now in the table in section 393 of the Income-tax Act, 2025). Interest on a loan for a self-occupied house is deductible up to ₹2,00,000 a year under section 22 (earlier section 24(b)), and the principal repaid sits inside the ₹1,50,000 ceiling of section 123 (earlier section 80C), both in the old regime only. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'The two tests that matter' },
      { kind: 'p', text: 'The first test is the day-one cash. If buying the house consumes the emergency fund, the household has traded liquidity for an asset it cannot sell quickly, and the first serious shock will be financed by a personal loan at four times the rate of the home loan. The second test is the monthly load: the EMI and the upkeep together, measured against take-home pay. Around a third of take-home is comfortable, around half is the edge, and beyond that any interruption becomes a crisis. The ratio is a rule of thumb, but it is the reason two households with the same income can afford very different houses.' },
      sim('l5-house-affordability', 'Work out the cash a house actually needs on day one, the EMI that follows it, and the share of income both will take.'),
      l5Illustrative('The price, the stamp-duty rate, the interest rate and the income in this lab are invented for practice. The rules quoted above — stamp duty as a state levy, registration being compulsory under the Registration Act, 1908, GST at 5% or 1% on under-construction housing and none on a completed one, the 70% escrow requirement, and the old-regime deductions of ₹2,00,000 on interest and ₹1,50,000 on principal — were verified on 15 October 2026 and are linked below.'),

      { kind: 'h', text: 'Do these seven things' },
      { kind: 'list', ordered: true, items: [
        'Work out the day-one cash before looking at houses: down payment, stamp duty, registration, GST, moving and furnishing.',
        'Keep the emergency reserve out of the down payment, even if it means a slightly larger loan.',
        'Check the state\'s stamp-duty rate and any concession you qualify for; it is one of the few negotiable-feeling costs that is actually fixed by law.',
        'Read the Key Facts Statement and compare the annual percentage rate, not the instalment.',
        'Test the EMI plus upkeep against take-home pay, and decide what happens if the rate rises or one income stops.',
        'Confirm whether the property is under construction or ready to move, because it decides the GST and the delivery risk.',
        'Check the project\'s registration with the state regulator before paying anything, and keep every receipt.',
      ] },
      { kind: 'p', text: 'A house is also the least liquid thing a household owns. That is not an argument against buying; it is an argument for buying one you can hold through a bad year, because the alternative is selling in one.' },
      { kind: 'terms', items: [
        { term: 'Stamp duty', meaning: 'A state tax on the transfer of property, paid by the buyer at rates each state sets.' },
        { term: 'Agreement value', meaning: 'The price written into the sale agreement, on which duty and most charges are computed.' },
        { term: 'Loan to value', meaning: 'The loan as a percentage of the property\'s value, a limit the lender applies.' },
        { term: 'Escrow account', meaning: 'A separate account into which a project must deposit 70% of collections, used only for that project.' },
        { term: 'Completion certificate', meaning: 'The local authority\'s certificate that a building is finished, which ends the GST on it.' },
      ] },
      l5Sources(['rbi', 'incometax', 'indiacode'], [
        'The rules on home loans, the Key Facts Statement, and what a lender may and may not include in the cost of credit',
        'GST on under-construction property, the 1% tax deduction on a property bought for ₹50,00,000 or more, and the deductions for interest and principal',
        'The Registration Act, 1908 on the compulsory registration of a sale, and the real-estate regulation requiring project registration and a 70% escrow',
      ]),
    ],
    quiz: [
      {
        q: 'You are buying a ₹90,00,000 flat with a ₹18,00,000 down payment. Which of these is part of the cash you need on day one?',
        options: [
          { text: 'The first EMI, because it falls due immediately', why: 'The first instalment usually begins a month after disbursement, and it is a monthly cost rather than day-one cash. The costs that surprise buyers are the ones paid to the state and the seller.' },
          { text: 'Stamp duty, registration and moving costs, along with the down payment', correct: true, why: 'These are the layers between the agreement value and the keys. On a typical state rate they add several lakh to the down payment, and they are paid before any loan is serviced.' },
          { text: 'Nothing beyond the down payment, since the loan covers the rest', why: 'A loan is advanced against the agreement value, never against stamp duty, registration or furnishing. Assuming otherwise is how the last week before possession becomes a personal loan.' },
          { text: 'Only the GST on the flat', why: 'GST applies to an under-construction property and is one line among several, not the whole of the extra cash.' },
        ],
      },
      {
        q: 'You buy a flat that already has a completion certificate. What GST applies?',
        options: [
          { text: '5% of the agreement value', why: '5% is the rate on an under-construction flat. Once the building is complete and certified, the rate does not apply at all.' },
          { text: '1%, because every residential purchase is affordable housing', why: 'The 1% rate is for housing that meets the affordability definition. More importantly, neither rate applies to a completed building.' },
          { text: 'None, because a ready-to-move property with a completion certificate carries no GST', correct: true, why: 'The tax attaches to the construction of a new building. Once the completion certificate is issued, a sale of that unit carries no GST — which is one reason ready and under-construction flats are priced differently.' },
          { text: '18%, the standard rate on services', why: 'The standard rate is not what applies to residential property; the concessional rates for under-construction housing exist precisely to avoid that.' },
        ],
      },
      {
        q: 'You are choosing between the old and new tax regimes, and you have a home loan. What changes?',
        options: [
          { text: 'Nothing, because the interest deduction is available in both', why: 'This is the most common misconception. The ₹2,00,000 interest deduction and the principal inside the ₹1,50,000 ceiling are available only in the old regime.' },
          { text: 'The ₹2,00,000 interest deduction and the principal within the ₹1,50,000 ceiling are available only in the old regime', correct: true, why: 'Section 22 (earlier 24(b)) and section 123 (earlier 80C) sit in the part of the law that the new regime does not allow, so a household with a large loan should compare the regimes including those deductions.' },
          { text: 'The interest is deductible in the new regime and the principal in the old one', why: 'Neither half of that is right. Both belong to the old regime.' },
          { text: 'The deduction is available in both, but capped at ₹1,50,000 in the new regime', why: 'There is no reduced version in the new regime; the deduction is simply not there.' },
        ],
      },
    ],
  },

  'l5-085': {
    id: 'l5-085',
    title: 'Vehicle Purchase',
    subtitle: 'A vehicle loses value faster than almost anything else a household buys, and keeps asking for money afterwards.',
    takeaway: 'Borrow less than the vehicle will be worth, treat fuel, insurance and servicing as yearly costs, and judge the purchase by the cost of a kilometre.',
    minutes: 11,
    blocks: [
      scene('vehicle-five-year-cost', 'Resale value falling year by year, against the cost of keeping the vehicle on the road.'),
      { kind: 'p', text: 'A vehicle is bought with emotion and paid for with arithmetic, and the two live in different places. The quoted price is the ex-showroom figure; the amount you actually pay is the on-road price, which includes the state\'s registration and road tax, insurance, and often an extended warranty and accessories. From that point the vehicle loses value every month while still asking for fuel, insurance, servicing and the occasional repair. The number that matters is the five-year total divided by the years, or the cost of every kilometre driven.' },
      { kind: 'p', text: 'The single most effective way to reduce that number is to borrow less. A smaller loan lowers the interest, the EMIs and the temptation to buy more vehicle than the household needs, and it also removes the situation where the loan outlives the value of what it bought. A five-year loan on a car that has lost half its value in three is a household paying for something worth less than the balance outstanding, which is fine if the vehicle is being kept and awkward if circumstances change.' },
      { kind: 'p', text: 'Insurance is where the rules take over from choice. Third-party cover is compulsory under the Motor Vehicles Act, and the premium for it is notified by the regulator rather than negotiated — which is why it is identical across insurers. The part that varies, and that most people are actually buying, is own-damage cover: what it protects, what the insured declared value is, and how the claim will be handled. Buying that on price alone is how households discover, in the year of a claim, what a low premium was hiding.' },

      { kind: 'h', text: 'What a five-year ownership looks like' },
      {
        kind: 'table',
        caption: 'The five-year bill for a vehicle, and the lever on each line',
        headers: ['Line', 'How it behaves', 'The lever'],
        rows: [
          ['On-road price', 'Adds registration, road tax and insurance to the quoted price', 'Choose a lower category, not a longer loan'],
          ['Depreciation', 'Steepest in the first year, flattening afterwards', 'Buy after the first owner, or hold for longer'],
          ['Interest', 'Set by the amount financed and the tenure', 'Finance less, and for fewer years'],
          ['Fuel', 'Driven by kilometres and the vehicle\'s efficiency', 'The only running cost you influence daily'],
          ['Insurance and servicing', 'Fixed yearly, rising with the vehicle\'s age', 'Compare own-damage terms, not just the premium'],
        ],
      },
      l5Rule(
        'What is compulsory, and what you are actually choosing',
        'No vehicle may be used in a public place without a third-party insurance policy, as required by section 146 of the Motor Vehicles Act, 1988. The premium for that cover is notified by IRDAI and is the same whichever insurer you buy it from; since 1 September 2018 it is sold as a long-term policy on new vehicles — three years for cars, five years for two-wheelers. Own-damage cover is optional, priced by the insurer, and its insured declared value falls as the vehicle ages. For anyone with business income, a motor car is depreciated for tax at 15% of the written-down value of the block, at half of that rate in the year the vehicle is put to use for fewer than 180 days. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'The test people skip' },
      { kind: 'p', text: 'Almost nobody asks the cost per kilometre before buying, and it is the only figure that lets two very different purchases be compared honestly. A small vehicle used daily for a long commute is cheap per kilometre and expensive per month; a large one used occasionally is expensive per kilometre and modest per month. The purchase decision changes completely depending on which of those the household actually is, and the only way to know is to write down how the vehicle will be used before comparing anything.' },
      sim('l5-vehicle-tco', 'Build the five-year bill from the on-road price, the loan, fuel, insurance, servicing and resale.'),
      l5Illustrative('The prices, mileage, fuel cost and resale percentages in this lab are invented so that the method can be practised. The rules quoted above — third-party cover being compulsory under section 146 of the Motor Vehicles Act, 1988, the notified premium, long-term cover on new vehicles since 1 September 2018, and the 15% depreciation rate on a motor car — were verified on 15 October 2026 and are linked below.'),

      { kind: 'h', text: 'Do these seven things' },
      { kind: 'list', ordered: true, items: [
        'Write the on-road price, not the ex-showroom price, before comparing anything.',
        'Estimate how many kilometres you will actually drive, and the cost of each of them.',
        'Decide the loan as a share of the price, and keep the tenure inside the period the vehicle stays useful.',
        'Compare own-damage cover on what it pays and what it excludes, not on the premium alone.',
        'Check the resale value of the model after three years before buying it new.',
        'Budget the yearly insurance and servicing as a monthly amount, so it never arrives as a surprise.',
        'Keep the emergency fund out of the down payment, since a vehicle is the last asset you want to be forced to sell.',
      ] },
      { kind: 'p', text: 'The point is not to avoid buying a vehicle. It is to know, before signing, what it will cost per kilometre, per month and over five years — because that is the only version of the number that has ever changed anybody\'s mind.' },
      { kind: 'terms', items: [
        { term: 'Ex-showroom price', meaning: 'The maker\'s price for the vehicle, before tax, registration and insurance.' },
        { term: 'On-road price', meaning: 'What you actually pay, including registration, road tax, insurance and local charges.' },
        { term: 'Third-party cover', meaning: 'The compulsory policy that pays for injury or damage caused to others, with a notified premium.' },
        { term: 'Insured declared value', meaning: 'The value the insurer will pay on a total loss, which falls as the vehicle ages.' },
        { term: 'Written-down value', meaning: 'The book value of an asset after depreciation, used to compute the tax depreciation of a vehicle.' },
      ] },
      l5Sources(['irdai', 'rbi'], [
        'Motor insurance: the compulsory third-party cover, the notified premium, and the terms of own-damage policies',
        'The rules on vehicle loans, the Key Facts Statement for a retail term loan, and what a lender must disclose',
      ]),
    ],
    quiz: [
      {
        q: 'Which change reduces the five-year cost of a vehicle the most?',
        options: [
          { text: 'Taking a longer loan, so that the monthly payment is smaller', why: 'A longer tenure lowers the payment and raises the total interest, and it keeps the loan running while the vehicle keeps losing value.' },
          { text: 'Buying a cheaper vehicle and financing a smaller share of it', correct: true, why: 'Both the depreciation and the interest scale with the amount financed, so a smaller, lightly financed purchase cuts the two largest lines at once.' },
          { text: 'Choosing the insurer with the lowest premium', why: 'The compulsory third-party premium is notified and identical across insurers; the saving is small next to the price and the interest.' },
          { text: 'Driving fewer kilometres, since fuel is the biggest cost', why: 'Fuel is large and recurring, but it is one line. Depreciation and interest usually exceed it over five years.' },
        ],
      },
      {
        q: 'Which part of motor insurance does the law require you to have?',
        options: [
          { text: 'Third-party cover, under section 146 of the Motor Vehicles Act, 1988', correct: true, why: 'The law requires cover against injury or damage caused to others. Own-damage cover is a choice, which is why its price and terms vary so much between insurers.' },
          { text: 'Own-damage cover for your own vehicle', why: 'Useful, and optional. Nothing in the law requires your own vehicle to be insured against damage.' },
          { text: 'A zero-depreciation add-on', why: 'An add-on is a commercial choice that changes how a claim is settled. It is not required by any statute.' },
          { text: 'A personal accident cover for every passenger', why: 'Some covers are sold with the policy and a driver\'s personal accident cover is required, but the mandatory element of the policy itself is third-party liability.' },
        ],
      },
      {
        q: 'A self-employed owner claims depreciation on a car used for business. At what rate is a motor car depreciated for tax?',
        options: [
          { text: '15% of the written-down value of the block, at half that rate in the year it is used for fewer than 180 days', correct: true, why: 'A motor car is depreciated on the written-down value method at 15%, and an asset put to use for less than 180 days in the year of purchase gets half the rate for that year.' },
          { text: '30% of the written-down value, like plant and machinery', why: '30% applies to certain assets, not to motor cars, which sit in the 15% block.' },
          { text: 'The actual resale loss in the year of sale', why: 'Depreciation is claimed in the block, year by year, rather than waiting to measure an actual loss.' },
          { text: 'Nothing, because a vehicle is a personal asset', why: 'The rate applies where the vehicle is used in a business. For a salaried individual, the loss of value is a real economic cost with no tax deduction at all.' },
        ],
      },
    ],
  },

  'l5-086': {
    id: 'l5-086',
    title: 'Education Decisions',
    subtitle: 'Judge a course the way you would judge any investment: what it costs, what it returns, and when.',
    takeaway: 'Add the salary given up to the fee, subtract the income you would have earned anyway, and ask how many years the premium needs to repay the total.',
    minutes: 12,
    blocks: [
      scene('education-payback', 'The cost of a qualification against the extra income it buys, and the point where the two cross.'),
      { kind: 'p', text: 'A degree is the largest investment many families make, and the only large one whose return is almost never measured. The cost is not the fee. It is the fee, the living costs, the interest on anything borrowed, and every year of salary given up while studying. The gain is not the salary afterwards either; it is the salary afterwards minus the salary that would have been earned anyway. Those two adjustments turn a vague question into an arithmetic one, and the arithmetic often surprises the family that was sure of the answer.' },
      { kind: 'p', text: 'The second number is payback. Divide the whole cost by the yearly premium and you have the years before the decision has repaid itself. For a four-year degree that is frequently well into the second decade of working life. That is not an argument against the degree. It is a fact worth holding in mind while signing a loan that runs for seven years, because a course that pays back in fifteen and a loan that ends in seven is a comfortable arrangement, while the same course funded entirely by borrowing is an obligation that starts earning back long after it has to be serviced.' },
      { kind: 'p', text: 'The third part is the downside, and it is where plans are thinnest. Most of them assume that the course is completed, that the industry obliges, and that the offer lands at the upper end of the range. Ask instead what happens if the premium is a third lower than expected, or arrives two years late, or if the course is abandoned halfway. A decision that survives those versions is a different decision from one that only works when everything works.' },

      { kind: 'h', text: 'What goes into the calculation, and what people leave out' },
      {
        kind: 'table',
        caption: 'The five parts of the decision, and the shortcut that ruins it',
        headers: ['Part', 'What belongs in it', 'The shortcut'],
        rows: [
          ['Cost', 'Fees, living, interest, and every year of salary given up', 'Counting only the fee'],
          ['Gain', 'The extra income over what you would have earned without it', 'Comparing the salary after with zero'],
          ['Time', 'How long the premium takes to repay the total cost', 'Assuming it repays itself immediately'],
          ['Risk', 'What happens if you drop out, or the field slows', 'Assuming the placement record holds'],
          ['Evidence', 'Actual placement and income data, from the institution itself', 'Believing a claimed average'],
        ],
      },
      l5Rule(
        'What the law and the lender add to the arithmetic',
        'Interest on a loan taken for higher education is deductible in full, with no ceiling, for eight years beginning with the year repayment starts, for a loan taken for yourself, your spouse, your children or a legal ward. Under the Income-tax Act, 2025 that is section 129 (earlier section 80E), available only in the old regime, and it follows the purpose of the loan rather than the year of the course. Higher education means any course after the senior secondary stage. The loan itself is a retail term loan, so the lender must give you a Key Facts Statement with the annual percentage rate and every charge before it is executed. Where a remittance abroad is funded by a loan from a specified financial institution, no tax is collected at source on it. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'Somebody has to say no' },
      { kind: 'p', text: 'Families rarely decide against a course; they decide against admitting the arithmetic. The useful version of this chapter is not a veto on expensive education. It is a way of choosing between two courses that both look respectable, and of choosing the funded version over the borrowed version where the numbers are close. The premium usually decides it far more than the fee does, and the premium is the part nobody advertises.' },
      sim('l5-education-roi', 'Compare four qualifications on total cost, forgone salary, interest, payback and the premium each one buys.'),
      l5Illustrative('Every amount, premium and rate in this lab is invented so that the method can be practised. The rules quoted above — section 129 (earlier 80E) allowing the whole interest for eight years in the old regime, and the Key Facts Statement a lender must give on a retail education loan — were verified on 15 October 2026 and are linked below.'),

      { kind: 'h', text: 'Do these seven things' },
      { kind: 'list', ordered: true, items: [
        'Write the total cost: fees, living, interest, and the salary given up over the years of study.',
        'Write the honest gain: the extra income over what you would have earned anyway.',
        'Divide one by the other, and say out loud how many years the payback takes.',
        'Ask for placement records and income ranges rather than an average, and read them as a range.',
        'Test the case where the premium is a third lower, and where it starts two years late.',
        'Put the loan in the name of the person who can use section 129, and keep the interest certificates.',
        'Decide what happens to the loan if the course is abandoned, before it is signed rather than after.',
      ] },
      { kind: 'p', text: 'The point of the exercise is not to talk anybody out of studying. It is that a decision this large deserves the same arithmetic as a house or a business, and the arithmetic usually strengthens the case rather than weakening it — provided it is done before the enrolment fee and not after the first instalment is missed.' },
      { kind: 'terms', items: [
        { term: 'Return on education', meaning: 'The extra lifetime income a qualification produces, measured against everything it cost to obtain.' },
        { term: 'Opportunity cost', meaning: 'The salary given up while studying, which is often larger than the fee itself.' },
        { term: 'Payback period', meaning: 'The years the yearly premium needs to repay the total cost of the qualification.' },
        { term: 'Placement record', meaning: 'The proportion of a batch that was placed, and the range of incomes offered, as reported by the institution.' },
        { term: 'Employability evidence', meaning: 'Anything that shows the qualification is recognised by employers, as distinct from advertised by the seller.' },
      ] },
      l5Sources(['rbi', 'incometax'], [
        'The rules on education loans and the Key Facts Statement that must accompany a retail term loan',
        'The education-loan interest deduction (section 129, earlier 80E) and what counts as higher education for it',
      ]),
    ],
    quiz: [
      {
        q: 'A one-year certificate costs ₹2.5 lakh and adds ₹1.5 lakh a year. A four-year degree costs ₹25 lakh, gives up ₹6 lakh of salary a year, and adds ₹3 lakh a year. Which repays itself sooner?',
        options: [
          { text: 'The degree, because it adds twice the income', why: 'It adds twice the income and about six times the cost. The ratio is what decides payback, not the size of the premium.' },
          { text: 'The certificate, at roughly six years against roughly sixteen for the degree', correct: true, why: 'The certificate costs about ₹8.5 lakh including the salary given up, so it repays in about six years. The degree costs about ₹49 lakh before interest, so it needs around sixteen. The cheaper course can pay back faster even when it pays less in total.' },
          { text: 'They are identical, because the ratios are the same', why: 'The ratios are not the same: about 5.7 years for the certificate against about 16 for the degree. Fabricating a tidy answer hides the entire lesson.' },
          { text: 'Neither can be calculated without knowing the tax rate', why: 'Tax changes the net premium slightly, but the payback difference is measured in years, not in percentage points.' },
        ],
      },
      {
        q: 'What is usually the largest single omission when a family costs a course?',
        options: [
          { text: 'The examination and admission fees', why: 'Real costs, and small next to the two figures that dominate: the salary given up and the interest on the borrowed amount.' },
          { text: 'The salary given up while studying', correct: true, why: 'For a four-year degree the forgone salary is often larger than the fee. Leaving it out makes an expensive decision look cheap.' },
          { text: 'The cost of books and a laptop', why: 'Worth counting, and immaterial against the fee and the forgone salary.' },
          { text: 'The travel to and from the campus', why: 'Part of the living cost, and again small relative to the two dominant lines.' },
        ],
      },
      {
        q: 'An institution advertises an average salary of ₹12 lakh for its graduates. How should you use that number?',
        options: [
          { text: 'Take it at face value, since it is published', why: 'Averages published by the seller are the most flattering figure available, and a mean says nothing about how many graduates were placed at all.' },
          { text: 'Use it as the upside case, and ask for the placement proportion and the range as well', correct: true, why: 'The premium in your calculation should be the pessimistic honest one. The advertised average is best treated as the ceiling of a range that you should be shown in full.' },
          { text: 'Ignore it entirely, since all such claims are false', why: 'Ignoring it throws away information. The instruction is to ask for the distribution behind it, not to discard the data.' },
          { text: 'Subtract 50%, because averages are always inflated', why: 'A flat haircut is a guess dressed as analysis. Ask for the actual placement proportion and the range instead.' },
        ],
      },
    ],
  },

  'l5-087': {
    id: 'l5-087',
    title: 'Rent Vs Buy',
    subtitle: 'Renting and buying are both costs. The question is which one stops being a cost, and when.',
    takeaway: 'Give the renter the invested down payment and the buyer the transaction costs, then decide on the crossover year rather than on a feeling.',
    minutes: 12,
    blocks: [
      scene('rent-buy-crossover', 'Rent plus the invested down payment, against the costs of owning net of the house value, and the year they cross.'),
      { kind: 'p', text: 'The rent-or-buy argument is usually settled with a feeling: rent is money wasted, an EMI builds an asset. Both halves of that are wrong in the same way. Rent buys a place to live for a month, which is not nothing. An EMI is mostly interest for the first several years, and the asset it builds is illiquid and carries its own running costs. The honest comparison puts the two households on the same starting line and asks what each of them owns, net of what they owe, at the end of a fixed number of years.' },
      { kind: 'p', text: 'Doing it properly means giving the renter the down payment. A renter who invests the money a buyer would have sunk into a house is not throwing anything away; that corpus grows every year, and it stays liquid. Meanwhile the buyer pays interest, stamp duty, registration and maintenance, and holds an asset whose value moves with the local market. The crossover point is the year the buyer\u2019s net position passes the renter\u2019s, and almost everything depends on it: holding periods shorter than the crossover are a loss, and longer ones are a gain.' },
      { kind: 'p', text: 'Two things move the crossover more than anything else. The first is the transaction cost: stamp duty and registration are paid on the way in and brokerage on the way out, which means the house has to appreciate before the household has broken even on the paperwork alone. The second is the horizon. A household that may move cities in three years is buying a transaction, not a home, and the model should be run with that horizon rather than a flattering one.' },

      { kind: 'h', text: 'Both sides of the ledger' },
      {
        kind: 'table',
        caption: 'The same household, renting and buying',
        headers: ['What it is', 'Renting', 'Buying'],
        rows: [
          ['The monthly outflow', 'Rent, rising with the market at every renewal', 'An EMI that is fixed, and ends'],
          ['The capital', 'The down payment stays invested and liquid', 'The down payment is locked into the house'],
          ['Costs on the way in and out', 'A small deposit and some brokerage', 'Stamp duty, registration, and brokerage on sale'],
          ['Upkeep', 'The landlord\u2019s problem', 'Around 1% of the value a year, plus property tax'],
          ['Flexibility', 'Notice period, and you have moved', 'Months to sell, and a price set by the market'],
          ['Tax, in the old regime', 'House rent allowance exemption, if part of the pay', 'Interest up to ₹2,00,000 and principal within the investment ceiling'],
        ],
      },
      l5Rule(
        'The rules on both sides of the decision',
        'A tenant who is required to have accounts audited must deduct tax at 10% on rent above ₹50,000 a month, the threshold having moved from ₹2,40,000 a year to ₹50,000 a month with effect from 1 April 2025; a salaried individual who is not liable to audit is not required to deduct it. The house rent allowance exemption is available only in the old regime. Capital gains on selling a house can be reinvested in another house to defer the tax under section 82 of the Income-tax Act, 2025 (earlier section 54), with gains above ₹10 crore outside the exemption. On the buying side, interest on a loan for a self-occupied house is deductible up to ₹2,00,000 under section 22 (earlier section 24(b)) and the principal repaid sits inside the ₹1,50,000 ceiling of section 123 (earlier section 80C), both in the old regime. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'The question behind the question' },
      { kind: 'p', text: 'What most households are really asking is whether the rent is a waste because a loan would build something. The answer depends on how long they will stay, and on whether the money not spent on the house is actually invested. Households that rent and spend the difference are worse off than households that buy and hold. Households that rent and invest the down payment are frequently better off over a short horizon, and that is a completely ordinary outcome rather than a mistake.' },
      sim('l5-rent-buy-model', 'Run rent-and-invest against buy-and-repay year by year, and find the year the two positions cross.'),
      l5Illustrative('The rent, price, rates and appreciation in this lab are invented for practice. The rules quoted above — the ₹50,000 a month threshold for tax deducted on rent from 1 April 2025 and the salaried tenant not being required to deduct, the house rent allowance exemption being an old-regime relief, and the reinvestment relief on a sold house — were verified on 15 October 2026 and are linked below.'),

      { kind: 'h', text: 'Do these seven things' },
      { kind: 'list', ordered: true, items: [
        'Write down how long you will actually stay, and be honest about the chance of moving.',
        'Add the full cost of buying: stamp duty, registration, brokerage and the first year of upkeep.',
        'Give the renter the down payment, invested, at a return you are prepared to defend.',
        'Run the model with the price rising at a conservative rate, not at the rate of the last boom.',
        'Find the crossover year, and compare it with your horizon rather than with your feelings.',
        'Check the rent clause and the notice period, because a low rent with a two-month notice is a different deal.',
        'If you buy, hold the house long enough that the entry costs are absorbed.',
      ] },
      { kind: 'p', text: 'The house somebody lives in is not a financial instrument, and this chapter is not an argument for living in rented property forever. It is an argument for knowing which of the two you are doing: buying a home you intend to hold, or buying a transaction you may need to reverse.' },
      { kind: 'terms', items: [
        { term: 'Crossover year', meaning: 'The year a buyer\u2019s net position — value less debt — passes the renter\u2019s invested corpus.' },
        { term: 'Transaction cost', meaning: 'Stamp duty, registration and brokerage, paid when a property changes hands.' },
        { term: 'House rent allowance', meaning: 'The part of a salary meant for rent, exempt in the old regime against actual rent paid.' },
        { term: 'Liquidity', meaning: 'How quickly an asset can be turned into money without losing value.' },
        { term: 'Holding period', meaning: 'How long an asset is owned, which decides whether its costs are absorbed.' },
      ] },
      l5Sources(['rbi', 'incometax'], [
        'The rules on home loans, the Key Facts Statement, and what a lender may charge a borrower who prepays',
        'The exemption for house rent allowance, the tax deducted on rent, and the deduction for interest on a self-occupied house',
      ]),
    ],
    quiz: [
      {
        q: 'You buy a house and have to sell it after three years. Why does this usually lose money even if prices rose?',
        options: [
          { text: 'Because the EMI pays almost no interest in the early years', why: 'It is the other way around: early instalments are mostly interest. But the reason a short hold loses is the cost of entering and leaving, not the shape of the amortisation.' },
          { text: 'Because stamp duty, registration and brokerage have to be earned back before anything is gained', correct: true, why: 'Entry and exit costs of several percent mean the property has to appreciate by roughly that much before the household is level. A house is an expensive thing to get in and out of.' },
          { text: 'Because rent usually rises faster than house prices', why: 'If that were reliably true, renting would lose more slowly rather than buying winning — and it is not the mechanism that decides a three-year hold.' },
          { text: 'It does not: property always appreciates over three years', why: 'Three years is a short window in property, and the costs are certain while the appreciation is not.' },
        ],
      },
      {
        q: 'Which of these makes the comparison between renting and buying fair?',
        options: [
          { text: 'Comparing the rent with the EMI', why: 'The rent is one outflow and the EMI is another, and the EMI has a whole set of costs behind it. Comparing the two payments is the most common mistake in this decision.' },
          { text: 'Counting the down payment as invested for the renter, and the same money as locked up for the buyer', correct: true, why: 'The renter keeps the capital and its earnings; the buyer converts it into a house. Without that adjustment, the comparison flatters buying by the entire down payment.' },
          { text: 'Adding the tax benefit of the loan to the buyer\u2019s side and stopping there', why: 'The deduction is real, and in the old regime only, but it is a small correction next to the down payment and the transaction costs.' },
          { text: 'Assuming the house price rises at the rate of the last ten years', why: 'Projecting a boom forward is what makes bad purchases look good. A conservative growth rate is the fair input.' },
        ],
      },
      {
        q: 'You are a salaried tenant paying ₹60,000 a month in rent. Do you have to deduct tax at source on it?',
        options: [
          { text: 'Yes, at 10%, because the rent is above ₹50,000 a month', why: 'The threshold is indeed ₹50,000 a month, but the obligation sits on a tenant who is required to have accounts audited, not on a salaried individual.' },
          { text: 'No: the obligation to deduct applies to a tenant liable to tax audit, not to a salaried individual', correct: true, why: 'The rule applies to a person other than an individual or HUF not liable to audit, so a salaried tenant paying rent from salary does not deduct. The landlord still reports the rent as income.' },
          { text: 'Yes, but only if the landlord asks you to', why: 'A deduction obligation is statutory and does not depend on the landlord requesting it — and in any case it does not apply to a salaried tenant.' },
          { text: 'No, because rent is exempt from tax', why: 'Rent is taxable income in the landlord\u2019s hands. It is the tenant\u2019s obligation to deduct that does not apply here.' },
        ],
      },
    ],
  },

  'l5-088': {
    id: 'l5-088',
    title: 'New Vs Used',
    subtitle: 'The first owner pays for the steepest part of the fall, and gets a warranty in return.',
    takeaway: 'The first owner absorbs the steepest loss of value, and the longer a vehicle is held, the more the warranty and the repair bill decide the choice.',
    minutes: 11,
    blocks: [
      scene('new-used-curve', 'Two depreciation curves for the same vehicle, and what the gap between them buys.'),
      { kind: 'p', text: 'Buying new means paying the whole price and absorbing the fastest loss of value in the vehicle\u2019s life. Buying used means letting somebody else absorb it, and taking on the risk that the reason they sold is a reason you would not have chosen. Neither is correct in general. The right answer depends on how long the vehicle will be kept, how much uncertainty the household can carry, and what replacing that uncertainty with a warranty is worth to it.' },
      { kind: 'p', text: 'The reason the comparison changes with the holding period is that the two curves flatten at different rates. A new vehicle loses the largest share in its first year or two and then loses more slowly. A three-year-old vehicle is already on the flatter part of the curve, so the two converge the longer they are held. Over three years, the used vehicle almost always wins; over eight, the difference narrows towards the cost of the repairs and the years of warranty.' },
      { kind: 'p', text: 'What a used purchase is really trading is information. A new vehicle comes with a warranty, a service history and a known past. A used one comes with a story, and the way to buy information is to pay for an inspection: a lift, a mechanic who is not the seller\u2019s mechanic, and a written report. The cost of that inspection is trivial against the cost of discovering a bent frame or a flooded engine six months later, and it is the one step buyers skip most often.' },

      { kind: 'h', text: 'What you are paying for either way' },
      {
        kind: 'table',
        caption: 'The same purchase, seen two ways',
        headers: ['What it is', 'New', 'Used'],
        rows: [
          ['Loss of value', 'Steepest in the first year, then slower', 'Already past the steep part'],
          ['Warranty', 'Full, usually transferable, and priced in', 'Often expired, sometimes extended at a cost'],
          ['Information', 'You know the whole history, because you are it', 'An independent inspection is the substitute'],
          ['Financing', 'Easier, and priced on a known value', 'Costlier, with a lower amount financed'],
          ['Insurance', 'Higher insured value, so a higher own-damage premium', 'Lower insured value, so a lower premium'],
          ['GST', 'On the price, when new', 'On the dealer\u2019s margin only, and none in a private sale'],
        ],
      },
      l5Rule(
        'What the rules change between the two',
        'Third-party motor cover is compulsory either way under section 146 of the Motor Vehicles Act, 1988, and its premium is notified by IRDAI, so a used vehicle\u2019s compulsory cover is no cheaper than a new one\u2019s. Own-damage cover is priced by the insurer, and its premium follows the insured declared value, which is lower on an older vehicle. GST on a used vehicle applies to the margin a registered dealer earns rather than to the whole price, and a sale between two private individuals carries no GST at all. A loan against a used vehicle is priced for an asset that is harder to value and faster to age, so the rate is usually higher and the amount financed is capped lower. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'The mistake at the end of the process' },
      { kind: 'p', text: 'The most expensive used purchase is the one where the price was negotiated hard and the vehicle was never inspected. Negotiation feels like the work, and the inspection is the work. The second most expensive is the one financed at the used-car rate for a long tenure, so that the interest ends up consuming the saving the used price produced.' },
      sim('l5-new-vs-used', 'Compare the two depreciation curves over the years you plan to keep the vehicle, including what the warranty is worth.'),
      l5Illustrative('The prices, depreciation rates and running costs in this lab are invented for practice. The rules quoted above — compulsory third-party cover with a notified premium, own-damage pricing that follows the insured declared value, and GST applying to a dealer\u2019s margin on a used vehicle rather than to a private sale — were verified on 15 October 2026 and are linked below.'),

      { kind: 'h', text: 'Do these seven things' },
      { kind: 'list', ordered: true, items: [
        'Decide the holding period first, because it decides which curve you should be on.',
        'Write down what a warranty is worth to you, in rupees, before comparing prices.',
        'Pay for an independent inspection of any used vehicle, on a lift, with a written report.',
        'Check the service history and the registration records rather than trusting the story.',
        'Ask the price of the insurance for both options: a lower insured value usually means a lower premium.',
        'Compare the loan rates for new and used before deciding, since they are not the same.',
        'Value the risk of a major repair honestly, and put a number on it rather than hoping.',
      ] },
      { kind: 'p', text: 'Vehicles are the clearest case in personal finance where the cheaper option is frequently the better one, and where the decision is made almost entirely by two facts: how long you will keep it, and how much uncertainty you are willing to inspect away.' },
      { kind: 'terms', items: [
        { term: 'Depreciation', meaning: 'The fall in an asset\u2019s value over time, steepest in a vehicle\u2019s first years.' },
        { term: 'Insured declared value', meaning: 'The amount an insurer will pay on a total loss, which falls as the vehicle ages.' },
        { term: 'Margin', meaning: 'The difference between what a dealer paid for a used vehicle and what it sells it for.' },
        { term: 'Warranty', meaning: 'A maker\u2019s promise to repair defects for a period, transferable in most cases.' },
        { term: 'Hidden defect', meaning: 'A fault that is not visible on inspection and appears after purchase.' },
      ] },
      l5Sources(['irdai', 'rbi'], [
        'Motor insurance: compulsory third-party cover, the notified premium, and how own-damage cover is priced',
        'The rules on vehicle loans, the Key Facts Statement, and what a lender must disclose on a used-vehicle loan',
      ]),
    ],
    quiz: [
      {
        q: 'Which is usually true of new against used, over different holding periods?',
        options: [
          { text: 'The used vehicle wins by more, the longer you keep it', why: 'The opposite. Both curves flatten, so the gap narrows as the years pass, and the used vehicle\u2019s repairs and missing warranty start to count against it.' },
          { text: 'The used vehicle wins by more over a short hold, and the gap narrows over a long one', correct: true, why: 'The new vehicle has already absorbed its steepest loss only once you own it, so a short hold concentrates that loss. Over longer periods the difference narrows to the warranty and repair costs.' },
          { text: 'The new vehicle is always cheaper to own over five years', why: 'Frequently untrue for five years, since the first-owner loss is large and certain while the warranty offsets only part of it.' },
          { text: 'It does not matter, since the running costs are identical', why: 'Running costs differ, and they are what decides the long-hold case. The comparison is between the curves and the upkeep together.' },
        ],
      },
      {
        q: 'You are buying a three-year-old vehicle from a private seller. What does the law require?',
        options: [
          { text: 'Third-party insurance, and nothing beyond the transfer of ownership', correct: true, why: 'Compulsory third-party cover applies to any vehicle used in a public place, and the sale between two individuals must be recorded with the registering authority. No GST is involved in a private sale.' },
          { text: 'GST on the full price, as on a new vehicle', why: 'A private sale between individuals carries no GST. It is a registered dealer that pays GST, and on its margin rather than on the price.' },
          { text: 'A manufacturer\u2019s warranty for the balance of the original term', why: 'Any remaining warranty may be transferred, but nothing requires the seller to provide one, and on a three-year-old vehicle there is often none left.' },
          { text: 'An inspection certificate issued by the transport department', why: 'There is no such requirement for a private sale. The inspection is something a sensible buyer buys for themselves.' },
        ],
      },
      {
        q: 'What does an independent inspection actually substitute for, on a used purchase?',
        options: [
          { text: 'The vehicle\u2019s service history', why: 'It supplements the history rather than replacing it: a stamped log book and a physical inspection answer different questions.' },
          { text: 'The warranty you do not have', correct: true, why: 'A warranty pays for defects you did not find. An inspection finds them beforehand. On a used vehicle past its warranty, the inspection is the only protection you can buy.' },
          { text: 'The registration transfer', why: 'That is a legal step, done with the transport authority, and unrelated to what a mechanic can tell you.' },
          { text: 'A lower loan rate', why: 'A lender does not reduce the rate because you inspected the vehicle, though an inspection can protect you from buying something a lender will value lower than expected.' },
        ],
      },
    ],
  },

  'l5-089': {
    id: 'l5-089',
    title: 'Cash Vs Financing',
    subtitle: 'One comparison settles it: what borrowing costs, against what the cash earns after tax.',
    takeaway: 'Compare the loan rate with what the cash earns after tax, then confirm the emergency reserve survives the transaction — in that order, every time.',
    minutes: 11,
    blocks: [
      scene('cash-finance-seesaw', 'The loan rate on one side, the after-tax return on the cash on the other, and the reserve that has to survive either way.'),
      { kind: 'p', text: 'The question of paying cash or borrowing is not about discipline or pride. It is a comparison of two rates, and most people never make it. Borrowing costs the annual percentage rate of the loan. Keeping the cash and leaving it invested earns whatever it earns after tax. When the first number is clearly higher than the second, paying cash is cheaper by that gap. When it is lower, borrowing is cheaper, subject to one condition that outranks both: the household still has an emergency reserve when the transaction is done.' },
      { kind: 'p', text: 'The after-tax part is what people skip. Money in a deposit is taxed at the slab, so a 7% deposit is worth roughly 4.9% to somebody in the 30% bracket. Against a loan at 12%, that is not a close comparison at all; against a loan at 8.9%, on new versus old regime arithmetic, it may be. And prepayment answers on an existing loan deserve the same treatment: paying off a loan at 11% with money earning 4.9% after tax is a guaranteed return of 11% for the length of the loan, which is difficult to find anywhere else with certainty.' },
      { kind: 'p', text: 'The condition that outranks the arithmetic is liquidity. A household that pays cash for a large purchase and leaves itself a month of expenses has traded a cheap form of borrowing for an expensive one, because the next surprise will be met with a personal loan or a credit card at several times the rate. The reserve is not part of the comparison; it is the floor under it, and it comes first.' },

      { kind: 'h', text: 'The six questions this decision turns on' },
      {
        kind: 'table',
        caption: 'What decides cash against financing',
        headers: ['Question', 'What settles it'],
        rows: [
          ['Should I borrow at all?', 'The loan\u2019s annual percentage rate against the after-tax return on the cash'],
          ['How much cash is too much?', 'The emergency reserve, measured in months of essentials, which comes first'],
          ['What about tax on the interest?', 'Interest is taxed at your slab, so the after-tax figure is the one to compare'],
          ['What if the rate is fixed and low?', 'A fixed rate below the after-tax return is the case for keeping the cash invested'],
          ['What about prepaying an existing loan?', 'No prepayment penalty may be charged on a floating-rate home loan taken by an individual'],
          ['What usually goes wrong?', 'The cash is kept and spent, while the loan is repaid anyway'],
        ],
      },
      l5Rule(
        'The rules that settle the comparison',
        'The annual percentage rate to compare is the one in the Key Facts Statement the lender must give you before a retail term loan is executed, since it includes every charge rather than only the interest. Interest earned on a deposit is taxed at your slab, and tax is deducted at source on it once it exceeds ₹50,000 in a year, or ₹1,00,000 for a senior citizen. No prepayment penalty may be charged on a floating-rate term loan taken by an individual, which is why prepaying a home loan is straightforward; a fixed-rate loan may carry one, and it is a term of the contract. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'Where the cash stops being an advantage' },
      { kind: 'p', text: 'Cash is only an advantage while it exists. Many households that could pay cash do not have it in a form they can reach, and several that do pay cash and then borrow within the year. The behavioural risk is stated too rarely in this comparison: a loan enforces a monthly payment, while a decision to pay cash and invest the difference is a decision nobody enforces. If the difference will not be invested, the honest comparison is not between a loan rate and a market return. It is between a loan rate and whatever the money would actually be used for.' },
      sim('l5-cash-vs-finance', 'Compare the loan rate with the after-tax return on the cash, and check what the reserve looks like afterwards.'),
      l5Illustrative('The rates, slab and purchase price in this lab are invented for practice. The rules quoted above — the annual percentage rate in the Key Facts Statement, the ₹50,000 and ₹1,00,000 thresholds for tax deducted on interest, and the bar on prepayment penalties for a floating-rate loan to an individual — were verified on 15 October 2026 and are linked below.'),

      { kind: 'h', text: 'Do these seven things' },
      { kind: 'list', ordered: true, items: [
        'Write the loan\u2019s annual percentage rate next to the after-tax return on the cash.',
        'Work out the reserve left after the purchase, in months of essentials, before deciding anything else.',
        'Never let the reserve fall below six months to save a percentage point or two.',
        'Take the after-tax return, not the headline rate on the deposit.',
        'Check whether the loan is fixed or floating before planning to prepay it.',
        'Decide in advance what will happen to the money that is not spent, in writing.',
        'Revisit the decision if the rate falls, since the answer changes with the rates.',
      ] },
      { kind: 'p', text: 'The households that get this right are not the ones that always pay cash or always borrow. They are the ones that keep a reserve that cannot be touched and then apply the same two rates to every decision, which is a rule that works on a large purchase, a small one and an old loan alike.' },
      { kind: 'terms', items: [
        { term: 'Comparison rate', meaning: 'The after-tax return on your money, set against the annual percentage rate on the loan.' },
        { term: 'After-tax return', meaning: 'What an investment earns once the tax on it is paid, which is the figure comparable with a loan rate.' },
        { term: 'Prepayment penalty', meaning: 'A charge for repaying a loan early, barred on a floating-rate loan to an individual.' },
        { term: 'Emergency reserve', meaning: 'Money kept accessible for shocks, and excluded from every other decision.' },
        { term: 'Opportunity cost', meaning: 'What the money given up could have earned elsewhere.' },
      ] },
      l5Sources(['rbi', 'incometax'], [
        'The Key Facts Statement for retail term loans and the rules on prepayment of a floating-rate loan to an individual',
        'The tax on interest income, the threshold for tax deducted at source on it, and the deduction for home-loan interest',
      ]),
    ],
    quiz: [
      {
        q: 'What is the most common expensive mistake in the cash-or-loan decision?',
        options: [
          { text: 'Borrowing while the cash earns more than the loan costs', why: 'That is not a mistake at all. When the cash earns more after tax than the loan costs, keeping the cash and the loan is the better arrangement.' },
          { text: 'Paying cash and leaving no emergency reserve behind', correct: true, why: 'The reserve is the floor under the entire decision. Without it the next unexpected expense is financed at a consumer-loan rate, which costs far more than the interest that was saved.' },
          { text: 'Comparing the loan rate with the headline deposit rate', why: 'This is a real error, because the headline rate is before tax, but it distorts the size of the gap rather than destroying the household\u2019s position the way an empty reserve does.' },
          { text: 'Taking a fixed-rate loan instead of a floating-rate one', why: 'A fixed rate is a legitimate choice, and it even makes prepayment charges possible, which is a limitation rather than the central mistake.' },
        ],
      },
      {
        q: 'A deposit pays 7% and you are in the 30% bracket, while a loan is offered at 12%. What should the comparison be?',
        options: [
          { text: '7% against 12%, so the loan is clearly cheaper', why: 'The deposit\u2019s 7% is before tax, and the comparison has been inverted: the loan is the cost, the deposit the alternative.' },
          { text: 'About 4.9% after tax against 12%, so paying cash is cheaper by a wide margin', correct: true, why: 'At a 30% slab, 7% becomes roughly 4.9%, so borrowing at 12% costs about seven percentage points more than the cash would earn.' },
          { text: '12% against 7% after tax, which is a small difference', why: 'The direction is wrong and so is the after-tax figure. The money is taxed, not the loan, so the loan rate stays at 12% for the comparison.' },
          { text: 'It cannot be compared, because the deposit may move', why: 'Rates move for both sides over time, and the comparison is still the correct method at any point. Uncertainty changes confidence, not the method.' },
        ],
      },
      {
        q: 'You want to prepay a home loan taken at a floating rate. What must the lender charge you?',
        options: [
          { text: 'A prepayment penalty of 2% of the outstanding amount', why: 'A floating-rate term loan taken by an individual cannot carry a prepayment penalty, whatever the standard schedule says.' },
          { text: 'Nothing: no prepayment penalty may be charged on a floating-rate loan to an individual', correct: true, why: 'This is why prepaying a home loan is straightforward. A fixed-rate loan can carry a charge, because that is a term of the contract rather than the rule for floating rates.' },
          { text: 'A penalty only if the loan is repaid within three years', why: 'A time condition does not create a charge that the rules do not permit.' },
          { text: 'A penalty equal to one month\u2019s interest', why: 'Offered commonly as a courtesy, and not something a floating-rate borrower has to pay.' },
        ],
      },
    ],
  },

  'l5-090': {
    id: 'l5-090',
    title: 'Financial Crisis Management',
    subtitle: 'Work the problem in order. A crisis is a sequence, and the first step is never to sell something.',
    takeaway: 'Stop the bleeding, protect the four essentials, call the lender before the due date, and sell long-term assets last.',
    minutes: 12,
    blocks: [
      scene('crisis-order', 'The order to work a financial crisis in, with the step that is never first marked at the bottom.'),
      { kind: 'p', text: 'A financial crisis is a shortfall: what is going out exceeds what is coming in, and it will not fix itself this month. Most households respond with the biggest lever available, which is selling an asset, and that is usually the most expensive response available. The order matters more than the size of the cut. Stop the bleeding, protect the essentials, write everything down, talk to the lenders before the due dates, spend liquidity in a deliberate order, and rebuild the buffer before resuming anything else.' },
      { kind: 'p', text: 'Protecting the essentials means naming them first, because everything else is negotiable and these four are not: a roof, food, health cover, and the means of getting to work. A household that cancels its health insurance to make a credit-card payment has converted a manageable problem into an unmanageable one, since an uninsured hospitalisation is the single most common way that a temporary crisis becomes permanent. Cutting the insurance premium is a cut that is almost never worth making.' },
      { kind: 'p', text: 'The step that saves more money than any other is a phone call made before a due date rather than after it. A lender dealing with a borrower who has a plan is managing a temporary problem. The same borrower three months later is managing a classified account, and the legal and pricing consequences of that classification follow them long after the shortfall has ended.' },

      { kind: 'h', text: 'A crisis, month by month' },
      {
        kind: 'table',
        caption: 'What to do in each stage, and what not to do',
        headers: ['Stage', 'What to do', 'What not to do'],
        rows: [
          ['Days 1 to 7', 'Protect the four essentials, and cancel everything genuinely optional today', 'Sell a long-term asset at whatever price it fetches'],
          ['Days 8 to 30', 'Write down every rupee in and out, and call each lender before the due date', 'Miss a payment and hope nobody notices'],
          ['Days 31 to 60', 'Use liquidity in order: cash, then liquid instruments', 'Use a credit card to pay an instalment'],
          ['Days 61 to 90', 'Recheck the runway every month, and cut again if it is short', 'Ignore a lender\u2019s letter'],
          ['Beyond 90 days', 'Negotiate terms in writing, and rebuild the buffer before resuming goals', 'Assume a fresh loan will be available soon'],
        ],
      },
      l5Rule(
        'How the rules treat a missed payment',
        'A loan account that is overdue for 31 days is classified by the lender as SMA-1, and at 61 days as SMA-2. Once it stays overdue beyond 90 days it is treated as a non-performing asset, and the consequences — on further lending, on pricing, and on the lender\u2019s internal record of the borrower — outlast the overdue amount. The RBI also requires recovery agents to work within restricted hours, to communicate in a language the borrower understands, and forbids threats and harassment; a borrower whose lender breaches those rules can complain under the RBI Ombudsman scheme, which is free. Any restructuring offer should be taken down in writing, with the revised schedule and every charge set out. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'What the drill should leave behind' },
      { kind: 'p', text: 'A crisis plan that worked once should leave behind the two things that stopped it from being worse: a written emergency budget, which is reusable next time, and a rebuilt buffer, which is what makes the next problem a problem rather than a crisis. Households leave the second part out, resume their investments the month the salary returns, and meet the next interruption with nothing set aside again.' },
      sim('l5-crisis-drill', 'Work a shortfall in order: the runway, the cuts, the call to the lender, and what to sell last.'),
      l5Illustrative('The amounts, the length of the crisis and the liquidity in this lab are invented for practice. The rules quoted above — an account being classified SMA-1 at 31 days, SMA-2 at 61 days and non-performing beyond 90, and the RBI\u2019s rules on recovery agents and the Ombudsman route for complaints — were verified on 15 October 2026 and are linked below.'),

      { kind: 'h', text: 'Do these seven things' },
      { kind: 'list', ordered: true, items: [
        'Name the four essentials and protect them before anything else is decided.',
        'Cancel genuinely optional spending the week it starts, including the subscriptions nobody has looked at in years.',
        'Write the emergency budget on one page, and update it weekly rather than monthly.',
        'Call every lender before a due date, ask for revised terms, and get them in writing.',
        'Spend liquidity in order: cash first, then liquid funds, and long-term assets only last.',
        'Do not cancel health or life cover to free up cash; that trade is almost never worth making.',
        'Rebuild the buffer to six months of essentials before resuming any investment goal.',
      ] },
      { kind: 'p', text: 'No household plans to have a crisis, and most get one anyway: a job ends, a hospital bill arrives, a business loses a client. What separates the households that recover quickly is not the size of their savings. It is that they worked the problem in an order that left them with a roof, cover and options, rather than a set of decisions they had to take in a hurry.' },
      { kind: 'terms', items: [
        { term: 'Runway', meaning: 'The number of months the accessible money lasts at the current rate of spending.' },
        { term: 'Special mention account', meaning: 'The RBI classification for an overdue loan: SMA-1 at 31 days, SMA-2 at 61 days.' },
        { term: 'Non-performing asset', meaning: 'A loan overdue for more than 90 days, with consequences for future borrowing and pricing.' },
        { term: 'Restructuring', meaning: 'Revised repayment terms agreed with a lender, which should always be documented in writing.' },
        { term: 'Ombudsman', meaning: 'The RBI scheme under which a borrower can complain about a lender, at no cost.' },
      ] },
      l5Sources(['rbi'], [
        'The classification of an overdue loan as SMA-1, SMA-2 or a non-performing asset, the rules for recovery agents, and the Ombudsman route for a complaint',
      ]),
    ],
    quiz: [
      {
        q: 'The income stops and the shortfall begins this month. What is the first move?',
        options: [
          { text: 'Sell the long-term investments before the market moves against you', why: 'This is the decision most households take first and the one they regret most. Selling growth assets at a bad price turns a temporary shortfall into a permanent loss.' },
          { text: 'Stop the optional spending and protect the four essentials', correct: true, why: 'Cutting what is genuinely optional is instant, free and reversible, and protecting housing, food, health cover and the means of getting to work keeps the shortfall from growing.' },
          { text: 'Borrow from a credit card to bridge the month', why: 'Bridging a shortfall with the most expensive debt available is how a one-month problem becomes a two-year one.' },
          { text: 'Wait a month to see whether the situation resolves itself', why: 'Waiting consumes the runway and can push a due date past the point at which a lender is willing to restructure.' },
        ],
      },
      {
        q: 'A loan instalment is not paid, and three months pass. What has happened to the account?',
        options: [
          { text: 'It becomes a non-performing asset once it is overdue beyond 90 days', correct: true, why: 'The progression is SMA-1 at 31 days, SMA-2 at 61 days, and a non-performing asset beyond 90 days — a classification with consequences that outlast the amount overdue.' },
          { text: 'Nothing, until the lender sends a legal notice', why: 'The classification is automatic and internal, and happens without any notice being sent.' },
          { text: 'The account is written off after 90 days', why: 'Write-off is a later accounting step, and a written-off loan still has to be repaid.' },
          { text: 'Only the interest becomes payable; the principal is frozen', why: 'There is no such mechanism. The overdue amount, interest and any charges all remain payable.' },
        ],
      },
      {
        q: 'You need money this month and have four places to get it. Which do you use first?',
        options: [
          { text: 'Cash and liquid funds, which exist for this purpose', correct: true, why: 'Their value does not move with the market and they are available the same day. Using them first is the difference between a temporary shortfall and a permanent loss.' },
          { text: 'Long-term equity, since it has grown the most', why: 'The assets that have grown the most are the ones with the most to lose from a forced sale, and the tax and exit costs are paid at the worst moment.' },
          { text: 'Gold, because it is a household asset that does not earn anything', why: 'Gold is a real option and a poor first choice: selling it quickly is expensive and rebuilding it is slow.' },
          { text: 'A personal loan, so that nothing has to be sold', why: 'Adding an expensive obligation during a shortfall extends the crisis rather than ending it.' },
        ],
      },
    ],
  },
}
