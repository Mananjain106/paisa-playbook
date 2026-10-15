import type { Chapter } from '../../types'
import { scene, sim } from '../../lib/chapter-blocks'
import { l5Illustrative, l5Rule, l5Sources } from '../../lib/l5-blocks'

/**
 * Level 5, band one — the money system of a working life.
 *
 * Batch 1 (chapters l5-001 to l5-004): first salary, negotiation, offer reading
 * and the CTC-to-take-home calculation. Every statutory figure quoted here was
 * verified against the source linked at the end of the chapter on 15 October
 * 2026, and each chapter's lab is its own — no two share a simulation.
 */
export const l5Career: Record<string, Chapter> = {
  'l5-001': {
    id: 'l5-001',
    title: 'First-Job Financial Planning',
    subtitle: 'The first salary is a system design problem, not a spending decision.',
    minutes: 9,
    blocks: [
      scene('first-payslip-split', 'A first salary has four jobs to do at once: needs go up, a buffer starts, savings begin, and life still has to be worth living.'),
      { kind: 'p', text: 'The first salary is the most consequential money most people ever receive, because it is the only one that arrives without a habit already attached to it. By the second or third month the pattern is set: whatever you did in month one becomes the default. Nobody notices the default while it forms, and everybody notices it a decade later when the same person is earning twice as much and saving the same amount.' },
      { kind: 'p', text: 'So treat month one as a design problem. There are only five destinations for money: obligations you cannot avoid, a buffer against shocks, retirement and long-term goals, debt clearing, and the spending that makes a working life worth having. The job is not to minimise the last one — it is to decide the order deliberately instead of letting the order be decided by whoever asks first.' },

      { kind: 'h', text: 'What actually lands in your account' },
      { kind: 'p', text: 'The number in the offer letter is the cost to the company. The number in your bank is what survives the payslip, and the distance between them surprises almost everyone in their first month. Here is a monthly example at a ₹50,000 CTC — the rates are real, the salary is made up.' },
      {
        kind: 'table',
        caption: 'One month at an illustrative ₹50,000 CTC',
        headers: ['Line', 'Monthly ₹', 'What it is'],
        rows: [
          ['Basic pay (50%)', '25,000', 'The base most statutory calculations are built on'],
          ['HRA (20%)', '10,000', 'House rent allowance'],
          ['Special allowance', '12,000', 'The balancing component of gross pay'],
          ['Employer EPF (12% of basic)', '3,000', 'Paid by the employer into your PF account — it is inside CTC, not on top of it'],
          ['Gross salary', '47,000', 'Basic + HRA + special allowance: what you are paid'],
          ['Employee EPF (12% of basic)', '−3,000', 'Deducted from your gross and credited to the same PF account'],
          ['Professional tax', '−200', 'A state levy on salary, deducted by the employer'],
          ['TDS on salary', '0', 'Zero at this salary: taxable income after the ₹75,000 standard deduction falls inside the section 87A rebate'],
          ['Net take-home', '≈43,800', 'What reaches the bank'],
        ],
      },
      l5Rule(
        'How your PF is actually built',
        'The employee contributes 12% of PF wages and the employer contributes 12%, of which 8.33% of wages goes to the pension scheme (EPS) and the balance to EPF. On 17 September 2026 the statutory wage ceiling for mandatory coverage rose from ₹15,000 to ₹25,000 a month, so employees earning up to ₹25,000 are now mandatorily covered and contributions are computed on those wages. Where wages exceed the ceiling, the statutory contribution may be restricted to the ceiling unless you were already contributing on higher wages — a rise in the ceiling does not require anyone already contributing on higher wages to reduce it. Most salaried employees therefore contribute on full basic pay by company policy, which is why the example above uses 12% of ₹25,000.',
      ),
      { kind: 'p', text: 'Three things are worth noticing in that table. First, the employer\'s 12% is not a bonus on top of your salary — it was always part of the ₹50,000, which is why a CTC figure flatters an offer. Second, the employee\'s 12% is not lost money either: it is your own money moving from your spending account to an account that compounds, is largely tax-free, and will fund your pension. It changes where the money sits, not whether you own it. Third, the tax line is zero — at a ₹50,000 monthly CTC the annual taxable income after the standard deduction sits inside the section 87A rebate, which is worth checking on your own payslip rather than assuming.' },
      l5Illustrative('The salary numbers in this chapter are invented to teach the structure. The statutory rates, the wage ceiling and the tax treatment are the real ones verified on 15 October 2026 and linked at the end.'),

      { kind: 'h', text: 'The three decisions that matter in month one' },
      { kind: 'list', ordered: true, items: [
        'Decide what an unmovable month costs. Rent, food, transport, phone, medicines, family support — the number you must produce even in a bad month. Everything else is discretionary, even when it does not feel like it.',
        'Decide the buffer number and automate it. Six months of that unmovable number is the standard target. If six months is far away, start with one month and keep going — the first month of buffer changes how you sleep, and the sixth changes how you negotiate.',
        'Decide what fraction of the salary is never spendable. Twenty percent of take-home is a widely used floor, not a law of nature. If rent eats half your city salary, the honest floor is whatever remains after obligations — but write it down and treat it as fixed.',
      ] },
      { kind: 'example', title: 'Why the order matters more than the amount', text: 'Two people take home ₹43,800. The first spends first and saves what is left; at month end there is rarely anything left, and the amount saved is random. The second transfers ₹8,500 to savings on the 1st, uses ₹22,000 for obligations, allocates ₹4,000 to debt and goals, and spends the remaining ₹9,300 without guilt. Both spend the same money. Only one of them has a plan that survives a month with a wedding, a repair and a festival in it.' },

      { kind: 'h', text: 'Pay yourself first, on the day money lands' },
      { kind: 'p', text: 'The mechanism matters as much as the intention. A standing instruction that moves money out on the salary date beats a commitment to save at month end, because at month end every rupee already has a story attached to it. Automation is not discipline in disguise — it is the removal of a decision you would otherwise make forty times a month and lose.' },
      { kind: 'list', items: [
        'Set the transfer for the day after the salary credit, not on the salary date, so a delayed credit does not cause a failed instruction.',
        'Keep one account for spending and one for buffer and goals, so the buffer is not visible to your card at checkout.',
        'Give the transfer a name that states its job ("buffer", "car repair", "retirement") — an unnamed pot is the first pot raided.',
        'Check the transfer once a quarter. An automation nobody reviews quietly fails after a salary change or a bank migration.',
      ] },
      sim('l5-first-salary-split', 'Allocate your first ₹43,800 and see what each split does to your buffer, your savings rate and your month.'),

      { kind: 'h', text: 'Buffers before budgets' },
      { kind: 'p', text: 'A budget tells you where money went. A buffer decides whether one bad month becomes a debt. At the start of a career the buffer does more work than any investment choice, because it is what stops a medical bill or a job loss from being financed on a credit card at 36% or more. Size it against the unmovable month, not the full salary: if obligations are ₹22,000 and you have ₹1,32,000 in a separate account, you own six months of breathing room regardless of what you spend on holidays.' },
      { kind: 'p', text: 'Notice what the lab above measures: not whether you are saving, but whether the allocation survives its own arithmetic. A split that leaves nothing for life is abandoned in three months, and a split that funds life and nothing else is the month-one default this chapter exists to replace.' },
      { kind: 'p', text: 'Finally, note what this chapter has deliberately not recommended: a specific fund, a specific insurer or a specific app. At this stage the choices that matter are the order of operations and the automation behind them. Product selection becomes the subject of the portfolio chapters later in this level, and it only becomes interesting once there is a monthly transfer worth investing.' },
      { kind: 'terms', items: [
        { term: 'CTC', meaning: 'Cost to company — the total annual cost of employing you, including employer contributions and benefits. It is not your salary and it is not a statutory concept for provident fund purposes.' },
        { term: 'Take-home (net pay)', meaning: 'What actually reaches your bank account after statutory and voluntary deductions: employee PF, professional tax, insurance premiums and tax withheld at source.' },
        { term: 'EPF', meaning: 'Employees\' Provident Fund — a retirement account built from 12% of PF wages contributed by you and 12% by your employer, earning a declared rate of interest each year.' },
        { term: 'UAN', meaning: 'Universal Account Number, the 12-digit identifier that ties your EPF accounts together across employers.' },
        { term: 'Emergency buffer', meaning: 'Money set aside in a separate, liquid account to cover unmovable monthly costs for a set number of months.' },
      ] },
      l5Sources(['epfo', 'epfoRates', 'incometax'], [
        'Contribution rates, the ₹25,000 wage ceiling effective 17 September 2026, and the EPS/EPF split',
        'The employer and employee contribution percentages and the current EPF interest rate for the declared year',
        'The current year\'s salary tax slabs, the standard deduction and the section 87A rebate',
      ]),
    ],
    quiz: [
      {
        q: 'A friend\'s offer letter says ₹6,00,000 CTC. What does that number actually promise?',
        options: [
          { text: 'The total cost of employing them, including the employer\'s PF contribution and other benefits — so the amount paid to them is lower.', correct: true, why: 'CTC is a cost figure. Employer contributions sit inside it, so gross salary and take-home are both smaller than CTC.' },
          { text: 'The amount that will be credited to their bank account each month, before tax.', correct: false, why: 'That is closer to gross salary. Take-home is smaller again because PF, professional tax and tax at source come off the top.' },
          { text: 'A legally fixed statutory amount that employers must pay in cash.', correct: false, why: 'CTC has no statutory definition for this purpose. The EPFO has clarified that CTC is not a statutory concept for determining PF liability, and employer and employee contributions are legally distinct.' },
        ],
      },
      {
        q: 'Why is the employee\'s PF deduction not simply money lost from the salary?',
        options: [
          { text: 'Because it moves into an account the employee owns, earns a declared rate of interest, and is largely tax-advantaged — it changes where the money sits, not who owns it.', correct: true, why: 'The deduction is a transfer into a retirement account in the employee\'s name with an annual interest credit, and it is available under EPFO\'s withdrawal rules.' },
          { text: 'Because the employer refunds it in cash at the end of each year.', correct: false, why: 'There is no annual cash refund. The money stays in the PF account and earns interest until it is withdrawn or transferred under the rules.' },
          { text: 'Because it reduces taxable income to zero for most employees.', correct: false, why: 'A PF deduction does affect the tax position of some employees under the old regime, but it never reduces taxable income to zero, and under the new regime the salary deduction is not what removes the tax.' },
        ],
      },
      {
        q: 'What is the strongest reason to start an automatic transfer in the first month rather than later?',
        options: [
          { text: 'Because month-one behaviour becomes the default: the amount you never see is the amount you keep, and the habit compounds with every raise.', correct: true, why: 'Automation removes the recurring decision, and starting before spending norms form means the savings rate carries into future income instead of being absorbed by lifestyle.' },
          { text: 'Because banks charge a penalty if no transfer is set up in the first month of employment.', correct: false, why: 'There is no such penalty. Automation is a behavioural tool, not a compliance requirement.' },
          { text: 'Because interest rates are always highest in the first years of a career.', correct: false, why: 'Rates move independently of your career. The advantage of starting early is time and habit, not a guaranteed higher rate.' },
        ],
      },
      {
        q: 'Which of these is the best description of an emergency buffer\'s purpose?',
        options: [
          { text: 'To cover the unmovable monthly costs for several months so a shock does not have to be financed with high-interest debt.', correct: true, why: 'The buffer is sized against essential obligations and replaces borrowing in a bad month. That is what makes it different from an investment.' },
          { text: 'To earn the highest possible return on spare cash.', correct: false, why: 'Buffer money is chosen for liquidity and safety, not for maximum return. Chasing return there defeats the purpose.' },
          { text: 'To fund planned purchases like a holiday or a phone upgrade.', correct: false, why: 'Planned, known costs belong in sinking funds. Mixing them with emergency money is how buffers get spent before an emergency arrives.' },
        ],
      },
    ],
    takeaway: 'The first salary sets a default. Decide the order of operations deliberately — obligations, buffer, savings, debt, life — then automate the transfer so the plan survives the months when you are not paying attention.',
  },

  'l5-002': {
    id: 'l5-002',
    title: 'Salary Negotiation',
    subtitle: 'The same work, priced differently. Negotiation is a skill with evidence behind it.',
    minutes: 10,
    blocks: [
      scene('negotiation-band', 'Every role has a band. Your offer is a point inside it, and where it sits is decided by evidence, not by politeness.'),
      { kind: 'p', text: 'Two people join the same team, on the same day, with the same title, at a difference of ₹1.5 lakh a year. Six years later, because increments and the next offer are both calculated as a percentage of what came before, the gap is closer to ₹12 lakh — for work that was never different. This is the arithmetic that makes negotiation worth the discomfort of ten awkward minutes.' },
      { kind: 'p', text: 'Negotiation is not a personality trait, and it is not an argument. It is preparation plus a rehearsed ask. The preparation is a market band, your own reservation point and a defensible target. The ask is one sentence, delivered once, with a reason attached that is not about your rent.' },

      { kind: 'h', text: 'Prepare four numbers before you speak' },
      { kind: 'list', ordered: true, items: [
        'The band: what this role actually pays at your experience level and city. Build it from live job postings that quote ranges, offers you have seen, and structured salary reports — and discount any single source that cannot show where its data came from.',
        'Your reservation point: the number below which you genuinely walk away. Write it down before the conversation, because it moves under pressure.',
        'Your target: a number above the band midpoint that you can justify with evidence of scope, not with personal expenses.',
        'Your BATNA: your best alternative to a negotiated agreement — another offer, staying where you are, or waiting. A weak BATNA is not a reason to avoid the conversation; it is a reason to keep your ask modest and your evidence strong.',
      ] },
      { kind: 'p', text: 'Evidence beats emotion every time. A hiring manager can argue with need; it is much harder to argue with "the three comparable postings I applied to quote ₹11–13 lakh for this scope, and I am asking for ₹12". Keep those postings as screenshots — an ask backed by a file is a different conversation from an ask backed by a feeling.' },

      { kind: 'h', text: 'Anchor, then stop talking' },
      { kind: 'p', text: 'The first specific number in a negotiation tends to pull the final outcome toward it, so if you are asked for expectations, give a researched range and place your target inside it. Then stop. Silence after an ask is uncomfortable and it is also the point at which offers move.' },
      { kind: 'example', title: 'A script that survives first contact', text: '"Thank you — I am excited about the role. Based on the scope we discussed and what comparable roles in this city are paying, my expectation is ₹12 lakh fixed. Is there flexibility to get there?" If the answer is a flat no on fixed pay, switch to the second currency: joining bonus, an early review date in writing, a higher variable target, a certification budget or relocation support. Fixed pay resets every future increment; a joining bonus does not, so take the fixed pay if you can only have one.' },

      { kind: 'h', text: 'Where negotiations go wrong' },
      { kind: 'list', items: [
        'Bluffing a competing offer. It works once, and it is discovered more often than people think — in the same industry, among the same recruiters. A claim you cannot produce on request is a reputational loan with a short repayment date.',
        'Negotiating only fixed pay and ignoring everything else. A ₹1.5 lakh lower salary with an ₹80,000 joining bonus and a written six-month review is a different deal from a flat refusal.',
        'Accepting in the first call because the offer was better than expected. Better than expected is not the same as appropriately priced, and an immediate yes removes every remaining lever.',
        'Negotiating after signing. Once the appointment letter is issued and you have joined, the window is closed until the next review cycle. Then the ask becomes performance evidence build-up, not negotiation.',
      ] },

      { kind: 'h', text: 'What a raise is actually worth in your hand' },
      { kind: 'p', text: 'Negotiated amounts are quoted in CTC, so the rupee that lands in your account is smaller than the number negotiated. PF is deducted on PF wages, professional tax depends on the state, and tax at the margin applies to the increment. A ₹1 lakh fixed-pay increase is a real gain, but it is not ₹8,333 a month in your bank.' },
      l5Rule(
        'Why the offer letter and the bank credit differ',
        'Employee PF is 12% of PF wages and the employer contributes a matching 12%, of which 8.33% of wages goes to EPS and the rest to EPF. Since 17 September 2026 the statutory wage ceiling for mandatory coverage is ₹25,000 a month, and employers commonly contribute on full basic pay. Above the ceiling, the statutory contribution may be restricted to the ceiling unless you were already contributing on higher wages. The EPFO has also clarified that CTC is not a statutory concept for PF liability — so an offer described as "CTC including PF" is describing a cost, not a legal contribution.',
      ),
      sim('l5-negotiation-rounds', 'Negotiate a real offer over three rounds: choose your ask and your reason, and see how the employer responds each time.'),
      { kind: 'p', text: 'The lab makes the trade-offs visible: asking high without evidence gets no movement, asking with market data moves a little, asking with both market data and a genuine alternative moves the most — and bluffing an alternative you cannot support ends the round. Trying twice with different strategies is the point; the cost of the wrong strategy at this stage is years of compounded difference.' },

      { kind: 'terms', items: [
        { term: 'BATNA', meaning: 'Your best alternative to a negotiated agreement — what you will do if this deal does not happen. It sets how much risk you can take in the conversation.' },
        { term: 'Reservation point', meaning: 'The lowest offer you will accept, decided before the conversation and not revisited under pressure.' },
        { term: 'Anchoring', meaning: 'The tendency for the first specific number discussed to pull the final agreement toward it.' },
        { term: 'Variable pay', meaning: 'The part of an offer paid on performance or company results, which can be reduced, deferred or forfeited depending on the plan rules.' },
        { term: 'Fixed pay', meaning: 'Guaranteed salary. Because increments and future offers are usually calculated on it, it matters more than any one-time payment.' },
      ] },
      l5Sources(['epfo', 'epfoRates', 'incometax'], [
        'PF contribution rates, the current wage ceiling, and the clarification that CTC is not a statutory concept for PF liability',
        'The percentage split between pension and provident fund contributions',
        'The tax that actually reduces each additional rupee of salary, including the rebate thresholds',
      ]),
    ],
    quiz: [
      {
        q: 'Which preparation step most improves the outcome of a salary negotiation?',
        options: [
          { text: 'Building a market band from evidence you can show, plus a written reservation point and a BATNA.', correct: true, why: 'Evidence supports the number and the reservation point stops you accepting less than you decided, while in the room under pressure.' },
          { text: 'Mentioning your personal expenses so the employer understands your need.', correct: false, why: 'Employers price a role, not a household. Personal need gives the other side information about your flexibility and no reason to pay more.' },
          { text: 'Waiting until after you join and negotiating at the first review instead.', correct: false, why: 'After joining, the lever of the offer is gone. Later asks rest on performance and the review cycle, which is a different and slower game.' },
        ],
      },
      {
        q: 'A recruiter asks for your expectation in the first call. What is the strongest response?',
        options: [
          { text: 'Give a researched range with your target inside it, then let the other side respond.', correct: true, why: 'A range with a researched basis anchors the discussion while leaving room to negotiate, and finishing your sentence gives the other side space to move.' },
          { text: 'Decline to give any number and insist they make an offer first.', correct: false, why: 'In some situations that works, but refusing outright in a first call on a role you want reads as evasive and can stall the process entirely.' },
          { text: 'Quote a number well above the band so the final figure lands near the midpoint.', correct: false, why: 'An unjustifiable number invites the employer to discount everything you say. Anchoring only works when the number can be defended with evidence.' },
        ],
      },
      {
        q: 'Why does fixed pay usually matter more than a joining bonus of the same size?',
        options: [
          { text: 'Because increments, next offers and retirement contributions are usually calculated as a percentage of fixed pay, so the difference compounds.', correct: true, why: 'A one-time bonus helps once, while fixed pay becomes the base for future percentage increases and for what the next employer negotiates against.' },
          { text: 'Because joining bonuses are taxed at a higher rate than salary.', correct: false, why: 'A joining bonus is taxed as salary income in the relevant year. The difference is structural, not a different headline rate.' },
          { text: 'Because joining bonuses are illegal unless they appear in the appointment letter.', correct: false, why: 'A bonus that is promised but not documented is hard to enforce, but the legal point is documentation, not prohibition.' },
        ],
      },
      {
        q: 'Why is a bluff about a competing offer a risky move?',
        options: [
          { text: 'Because it fails as soon as you are asked to show it, in an industry where the same recruiters and managers talk to each other.', correct: true, why: 'The cost of a discovered bluff is reputational and can outlast the negotiation, which is why negotiating on market evidence is the safer strategy.' },
          { text: 'Because it is illegal to mention an offer you have not accepted.', correct: false, why: 'Discussing other offers is not unlawful. The risk is that the claim is false, not that it is mentioned.' },
          { text: 'Because employers always raise their offer the moment a competing offer is mentioned.', correct: false, why: 'Some do, some cannot, and an unsupported claim gets no movement at all — as the negotiation lab in this chapter shows.' },
        ],
      },
    ],
    takeaway: 'Negotiate with a researched band, a written reservation point and a real alternative — then make one specific ask with evidence behind it. Fixed pay is the number that compounds, so that is the number to fight for.',
  },

  'l5-003': {
    id: 'l5-003',
    title: 'Reading Employment Offers',
    subtitle: 'Two offers can look identical and differ by lakhs once everything is priced in.',
    minutes: 10,
    blocks: [
      scene('offer-total-value', 'Price every layer of an offer: fixed pay, variable pay, benefits, equity and the cost of where the job is.'),
      { kind: 'p', text: 'An offer letter is a priced document, and most people read only its first line. The first line is fixed pay — the smallest reliable number in the whole letter once variable pay, equity and location costs are added. The skill worth building is turning the letter into a three-year total-value number, then deciding on that number instead of on the headline.' },

      { kind: 'h', text: 'The five layers of every offer' },
      { kind: 'list', ordered: true, items: [
        'Fixed pay: the guaranteed part — basic, allowances and any guaranteed special pay. This is the base for PF, gratuity and your next negotiation.',
        'Variable pay: performance bonus, profit sharing or commission. Treat it as uncertain until you have seen the last three years of actual payouts.',
        'Benefits: employer PF and gratuity, medical cover, life cover, meal or fuel reimbursements, and the value of anything the employer pays for that you would otherwise pay yourself.',
        'Equity: ESOPs, RSUs or a phantom plan, which need a vesting schedule, a strike price and an exit assumption to be worth anything at all.',
        'Location and role costs: rent differences, commuting, relocation, travel expectations and the hours implied by the role. A higher salary in a much more expensive city can leave you poorer.',
      ] },
      {
        kind: 'table',
        caption: 'Two illustrative offers for the same role, priced over three years',
        headers: ['Component', 'Offer A — metro, higher headline', 'Offer B — smaller city'],
        rows: [
          ['Fixed pay', '₹12,00,000', '₹10,50,000'],
          ['Variable (at target)', '₹2,40,000', '₹1,20,000'],
          ['Variable actually paid last 3 years', '70% of target', '100% of target'],
          ['Employer PF + gratuity', '₹1,86,000', '₹1,63,000'],
          ['Medical cover value', '₹18,000', '₹18,000'],
          ['ESOP, 3-year vest', '₹0 (none offered)', '₹1,80,000 over 3 years, at an unproven valuation'],
          ['Extra living cost', '−₹1,80,000 a year', '−₹60,000 a year'],
          ['Three-year total, cash and benefits', '≈₹37,08,000', '≈₹34,89,000'],
        ],
      },
      { kind: 'p', text: 'The metro offer wins on this arithmetic even after higher living costs — but only because 70% of the variable target is a realistic figure. Change that assumption to 40% and the ranking can flip. That is the point of writing the layers down: the decision stops being about which number looked bigger on the day.' },

      { kind: 'h', text: 'Variable pay is a promise with conditions' },
      { kind: 'p', text: 'Ask three questions about variable pay before counting it: what percentage of target was actually paid in each of the last three years, what conditions attach (company performance, individual rating, tenure at payment date), and whether a resignation before the payout date forfeits it. A common structure pays a bonus in the following year to employees still on the rolls, which means joining late in a year can cost you an entire cycle.' },

      { kind: 'h', text: 'Clauses that outlive the offer' },
      { kind: 'list', items: [
        'Notice period: a three-month notice is common in senior roles, and it is reciprocal. Check whether the employer can also require three months from you during probation.',
        'Service bonds and training recovery: agreements that recover genuine, documented training costs are common. Ask what the amount is, what triggers recovery and what evidence the employer would need.',
        'Restrictive covenants: non-compete clauses are frequently written into offers. Whether they are enforceable depends on the facts and the law, so treat an unusually broad clause as a reason to take advice rather than a reason to ignore it.',
        'Intellectual property and moonlighting clauses: check what you assign, and whether side work requires written permission.',
        'Probation terms: notice, benefits and confirmation criteria during probation are often different from the main terms, and are where most disputes actually start.',
      ] },
      l5Rule(
        'CTC and the statutory distinction',
        'An offer described as "CTC" is a cost figure, not a legal entitlement. The EPFO has clarified, following the wage-ceiling revision effective 17 September 2026, that CTC is not a statutory concept for determining PF liability: employer and employee contributions are legally distinct, and statutory obligations must be computed on the statutorily defined wages. When an offer letter bundles PF, gratuity, insurance and variable pay into one CTC number, the recruiter is describing cost to company — which is a legitimate way to describe it, as long as you know that is what it is.',
      ),
      sim('l5-offer-compare', 'Price Offer A against Offer B over three years, adjust what you believe the variable will actually pay, and see which offer wins.'),

      { kind: 'h', text: 'The questions worth asking before you sign' },
      { kind: 'list', items: [
        'What was the actual variable payout percentage for the last three years, for someone in this role?',
        'Is this offer letter subject to any bond, recovery or clawback? What is the amount and the trigger?',
        'What are the probation terms for notice and benefits, and what does confirmation depend on?',
        'Which city or office, and is relocation or temporary accommodation provided, in writing?',
        'What is the review cycle and when is the first review for someone joining now?',
      ] },
      { kind: 'p', text: 'Asking these is not distrust; it is diligence. An employer that answers them clearly is telling you something useful about how it operates. Get the answers in the letter or the appointment letter if they change anything material — a promise in a chat is a memory, and memories are not owned by both sides equally.' },
      { kind: 'terms', items: [
        { term: 'Fixed pay', meaning: 'Guaranteed salary before variable components. It drives PF, gratuity, increments and the number a future employer negotiates against.' },
        { term: 'Variable pay', meaning: 'Pay contingent on performance or company results, with conditions that usually decide whether it is paid at all.' },
        { term: 'ESOP', meaning: 'Employee stock option plan — the right to buy shares at a set price after a vesting period, subject to the plan\'s terms and the company\'s value.' },
        { term: 'Notice period', meaning: 'The period of notice required to resign lawfully, usually mutual and usually longer during probation.' },
        { term: 'Total value', meaning: 'Everything an offer is worth over a defined horizon — cash, benefits, equity and the cost differences the role brings with it.' },
      ] },
      l5Sources(['epfo', 'incometax', 'mca'], [
        'How PF contributions and the wage ceiling interact with a CTC-based offer',
        'How variable pay, bonuses and perquisites are taxed in the year they are received',
        'Company registration and filings, useful before accepting equity in a small or unfamiliar employer',
      ]),
    ],
    quiz: [
      {
        q: 'Offer A has a higher fixed salary and a bigger variable target than Offer B. What else decides which offer is worth more?',
        options: [
          { text: 'The actual variable payout history, the value of benefits, and the extra cost of living and commuting in A\'s location.', correct: true, why: 'Variable pay is conditional, benefits have real value, and location costs change the value of the same fixed salary substantially.' },
          { text: 'Only the fixed salary, because everything else is uncertain.', correct: false, why: 'Ignoring everything else treats uncertainty as zero when it is not — variable payouts have a measurable history and location costs are quite certain.' },
          { text: 'The size of the company, since larger employers always pay more in total.', correct: false, why: 'Company size is not a proxy for offer value. The components and their conditions decide it.' },
        ],
      },
      {
        q: 'A joining-bonus clause says it is recoverable if you leave within twelve months. What does that change?',
        options: [
          { text: 'The bonus is conditional pay, not free money — leaving early turns it into a debt, so it should not be counted as guaranteed value.', correct: true, why: 'A bonus with a clawback has a condition attached. Pricing it as guaranteed overstates the offer.' },
          { text: 'Nothing, because clawback clauses are unenforceable in India.', correct: false, why: 'Recovery terms are commonly written and enforced for documented payments. Whether a specific clause is valid depends on its wording and the facts.' },
          { text: 'It means the bonus is tax-free.', correct: false, why: 'Tax treatment follows the nature of the payment, not the presence of a recovery clause. A joining bonus is taxed as salary income when received.' },
        ],
      },
      {
        q: 'Why is it useful to know that CTC is not a statutory concept for provident fund purposes?',
        options: [
          { text: 'Because it means statutory contributions must be computed on statutorily defined wages, so a CTC figure cannot be used to justify under-contributing.', correct: true, why: 'The EPFO clarification exists precisely to stop CTC being treated as a substitute for the statutory definition of wages when computing PF.' },
          { text: 'Because it means employers are not required to contribute to PF at all.', correct: false, why: 'Employers must contribute for covered employees. The clarification is about which wage base applies, not whether contributions are due.' },
          { text: 'Because it means PF is optional for anyone whose offer letter mentions CTC.', correct: false, why: 'Coverage depends on the statute and the wage ceiling, not on how the offer letter describes the package.' },
        ],
      },
    ],
    takeaway: 'Read an offer as five priced layers — fixed, variable, benefits, equity and location cost — and ask the payout-history and clause questions before signing. The headline number is the least informative part of the letter.',
  },

  'l5-004': {
    id: 'l5-004',
    title: 'CTC Vs Take-Home',
    subtitle: 'Rebuild the offer letter as the number that reaches your bank.',
    minutes: 11,
    blocks: [
      scene('ctc-waterfall', 'CTC is the top of the waterfall. Every band it passes takes its statutory share, and what is left is what you can actually spend.'),
      { kind: 'p', text: 'There are three different salary numbers in a working life and people use the same word for all of them. CTC is what employing you costs. Gross salary is what you are paid before deductions. Net take-home is what lands in your account. This chapter rebuilds all three from one offer, using the rates that applied on 15 October 2026, so that an offer letter stops being a number you accept and becomes a number you can check.' },
      { kind: 'p', text: 'The reason this matters is compounding: a 12% gap between CTC and take-home, unnoticed at ₹8 lakh, becomes a house deposit that arrives two years later than planned at ₹25 lakh.' },

      { kind: 'h', text: 'The waterfall, step by step' },
      {
        kind: 'table',
        caption: 'An illustrative ₹6,00,000 annual CTC, reconstructed',
        headers: ['Stage', 'Annual ₹', 'How it is derived'],
        rows: [
          ['CTC', '6,00,000', 'The number in the offer letter'],
          ['less employer PF (12% of basic)', '−36,000', 'Basic is ₹25,000 a month, so employer PF is ₹3,000 a month — inside CTC, not on top of it'],
          ['less gratuity accrual (4.81% of basic)', '−14,430', 'A cost the employer carries each year; payable to you only after five years of service'],
          ['Gross salary', '5,49,570', 'Basic + HRA + special allowance; about ₹45,798 a month'],
          ['less employee PF (12% of basic)', '−36,000', 'Deducted from gross, credited to your PF account'],
          ['less professional tax', '−2,400', 'A state levy on salary; the ceiling and slab vary by state'],
          ['less tax withheld (new regime)', '0', 'Zero here: taxable income after the ₹75,000 standard deduction stays inside the section 87A rebate'],
          ['Net take-home', '≈5,11,170', 'About ₹42,598 a month'],
        ],
      },
      { kind: 'p', text: 'So a ₹6,00,000 CTC pays about ₹5.11 lakh a year, or ₹42,598 a month. The ₹36,000 of employee PF has not disappeared — it is in an account in your name, earning interest — but it is not in your bank, and pretending otherwise is how monthly budgets go wrong in month one. What is worth pausing on is the tax line: at this salary it is nil, because taxable income after the standard deduction stays inside the rebate. The first time tax actually bites is the point at which the arithmetic of an offer changes shape.' },

      { kind: 'h', text: 'The deductions, named' },
      { kind: 'list', items: [
        'Employee PF at 12% of PF wages. On 17 September 2026 the statutory wage ceiling for mandatory coverage rose from ₹15,000 to ₹25,000 a month; where wages exceed the ceiling, the statutory contribution may be restricted to the ceiling unless you were already contributing on higher wages.',
        'Employer PF at 12%, split 8.33% of wages to the pension scheme (EPS) and the remainder to EPF. This does not reduce your take-home — it reduces your CTC, which is the more subtle loss.',
        'Professional tax, levied by states on salary, deducted by the employer and remitted. Amounts and slabs differ by state; several states charge nothing.',
        'Employee state insurance where applicable: gross wages up to ₹21,000 a month (₹25,000 for employees with disabilities) fall within the ESI ceiling, with the employee contributing 0.75% and the employer 3.25%.',
        'Tax withheld at source on salary, computed on estimated annual income after the standard deduction and eligible exemptions, with tax already paid adjusted at the year end.',
      ] },
      l5Rule(
        'Two EPF facts that change the arithmetic',
        'First, the statutory wage ceiling for mandatory EPF coverage is ₹25,000 a month following the notification effective 17 September 2026, up from ₹15,000; the pension share is 8.33% of wages and the provident fund share is the balance of the employer\'s 12%. Second, the EPFO has clarified that CTC is not a statutory concept for PF liability, and that an increase in the ceiling increases EPF, EPS, EDLI and administrative charges where actual PF wages are higher. In practical terms: your employer cannot lower your statutory wages to keep its cost flat, and a mid-month ceiling change is applied by apportioning that month\'s wages across the two periods.',
      ),

      { kind: 'h', text: 'Tax on a salary, in one paragraph' },
      { kind: 'p', text: 'For the year being reported on 15 October 2026, a salaried individual choosing the new regime gets a standard deduction of ₹75,000, then pays nothing on the first ₹4 lakh of taxable income, 5% from ₹4–8 lakh, 10% from ₹8–12 lakh, 15% from ₹12–16 lakh, 20% from ₹16–20 lakh, 25% from ₹20–24 lakh and 30% above ₹24 lakh, plus a 4% health and education cess. A rebate under section 87A (up to ₹60,000 under the new regime) makes taxable income up to ₹12 lakh effectively tax-free, with marginal relief designed to prevent a cliff just above that threshold. The old regime retains its own slabs and a ₹50,000 standard deduction, and allows deductions that the new regime does not. Which regime wins depends on the size of those deductions — which is a chapter in this level of its own.' },
      { kind: 'formula', label: 'Take-home, from the top', expr: 'take-home = gross − employee PF − ESI (if covered) − professional tax − tax withheld', note: 'Employer PF is not in this line: it never was your spendable money. It comes out of CTC before gross is computed.' },
      l5Illustrative('The salary, basic percentage and city in this example are chosen to make the arithmetic visible. The rates — 12% PF, the ₹25,000 ceiling, ₹21,000 ESI ceiling, 0.75%/3.25% ESI split, ₹75,000 standard deduction, the slab structure and the 4% cess — are the real ones for the date shown on the sources below.'),

      sim('l5-ctc-decompose', 'Type any CTC, set the basic percentage and see gross, each deduction and the monthly take-home, with the statutory ceilings applied.'),

      { kind: 'h', text: 'What a CTC number can hide' },
      { kind: 'list', items: [
        'Gratuity inside CTC: a statutory benefit payable after five years of service, which costs the employer money each year and reaches you only if you stay. It is real value, but it is not salary.',
        'Variable pay inside CTC: quoted at target, paid at the employer\'s discretion within the plan rules.',
        'Employer PF inside CTC: your own retirement money, counted as a cost line.',
        'Insurance premiums inside CTC: genuinely useful, but only to the extent of the cover they buy.',
        'Retention or joining amounts inside CTC: one-time figures that inflate the annual number they are divided by.',
      ] },
      { kind: 'p', text: 'None of this makes CTC dishonest — it makes CTC uninformative. The question to ask of any number is not "how large is it" but "which part of it is guaranteed, which part is conditional, and which part is not mine to spend". Once you can answer that for your own offer, negotiation, budgeting and tax planning all become arithmetic instead of guesswork.' },
      { kind: 'terms', items: [
        { term: 'CTC (cost to company)', meaning: 'The total annual cost of employing you — fixed pay, employer contributions, benefits and any variable or one-time amounts included by the employer.' },
        { term: 'Gross salary', meaning: 'Salary payable to you before deductions: basic pay plus allowances. Employer contributions are not part of it.' },
        { term: 'Net take-home', meaning: 'Gross salary minus employee PF, ESI where applicable, professional tax and tax withheld at source.' },
        { term: 'Statutory wage ceiling', meaning: 'The monthly wage up to which mandatory contributions are computed for a scheme. For EPF it is ₹25,000 from 17 September 2026; for ESI it is ₹21,000 for general employees.' },
        { term: 'Marginal relief', meaning: 'A mechanism that limits how much more tax is payable when income crosses a rebate threshold, so crossing by one rupee does not cost tens of thousands.' },
      ] },
      l5Sources(['epfo', 'epfoRates', 'esic', 'incometax'], [
        'The ₹25,000 EPF wage ceiling effective 17 September 2026, the EPS/EPF split, and the CTC clarification',
        'Contribution percentages and the current EPF interest rate for the declared financial year',
        'The ESI wage ceiling of ₹21,000 (₹25,000 for employees with disabilities) and the 0.75%/3.25% contribution split',
        'New and old regime slabs, the ₹75,000 and ₹50,000 standard deductions, the section 87A rebate and marginal relief',
      ]),
    ],
    quiz: [
      {
        q: 'A CTC of ₹6,00,000 pays roughly ₹5.11 lakh a year to the bank in the example. Where did the rest go?',
        options: [
          { text: 'Into employer PF and gratuity accrual (which never become gross salary), plus employee PF and a small professional tax — with the employee PF still belonging to the employee.', correct: true, why: 'Employer PF and gratuity sit inside CTC and never reach gross salary, while employee PF is deducted from gross but credited to the employee\'s own PF account.' },
          { text: 'Mostly into income tax.', correct: false, why: 'Tax withheld is zero in this example, because taxable income after the ₹75,000 standard deduction falls inside the section 87A rebate.' },
          { text: 'Into a company fund that the employer keeps.', correct: false, why: 'Employer and employee PF contributions both go into the employee\'s PF account, with the pension share handled by the EPS under its own rules.' },
        ],
      },
      {
        q: 'Since 17 September 2026, what is the statutory EPF wage ceiling for mandatory coverage, and what does it mean?',
        options: [
          { text: '₹25,000 a month, up from ₹15,000 — so employees up to that wage are now mandatorily covered and contributions are computed on those wages.', correct: true, why: 'The notification raised the ceiling to ₹25,000, expanding mandatory coverage; where wages exceed it, the statutory contribution may be restricted to the ceiling unless higher wages were already being used.' },
          { text: '₹15,000 a month, unchanged since 2014.', correct: false, why: 'The ceiling was raised to ₹25,000 with effect from 17 September 2026. A chapter written before that date would have quoted ₹15,000.' },
          { text: 'There is no ceiling; contributions are always on the full salary.', correct: false, why: 'The concept of a statutory wage ceiling is central to PF law, and it is why the September 2026 change mattered to so many payrolls.' },
        ],
      },
      {
        q: 'Why can an increase in the statutory PF ceiling raise the employer\'s cost even when salaries do not change?',
        options: [
          { text: 'Because contributions must be computed on higher statutory wages for affected employees, increasing EPF, EPS, EDLI and administrative charges.', correct: true, why: 'When the ceiling rises and actual PF wages are higher than the old ceiling, the contribution base grows, so both the employee and employer contributions rise.' },
          { text: 'Because the interest rate on PF automatically increases with the ceiling.', correct: false, why: 'The interest rate is declared separately each year for the scheme as a whole, and is not indexed to the ceiling.' },
          { text: 'Because employers must pay a fine for each employee below the new ceiling.', correct: false, why: 'There is no such fine. The cost change comes from contributions on a higher wage base, not from penalties.' },
        ],
      },
      {
        q: 'Which statement about tax and take-home is accurate for the current year?',
        options: [
          { text: 'The new regime gives a ₹75,000 standard deduction and a section 87A rebate that can make taxable income up to ₹12 lakh effectively tax-free, with marginal relief above that.', correct: true, why: 'That structure is what makes the ₹12 lakh threshold behave as a practical zero-tax point under the new regime, with marginal relief smoothing the edge.' },
          { text: 'The standard deduction is ₹75,000 under both regimes and the rebate applies to all income levels.', correct: false, why: 'The old regime carries a ₹50,000 standard deduction, and the rebate is capped by a taxable-income threshold rather than applying at every level.' },
          { text: 'Professional tax is a central government levy that is the same in every state.', correct: false, why: 'Professional tax is levied by states, with different slabs and ceilings, and several states do not levy it at all.' },
        ],
      },
    ],
    takeaway: 'Rebuild every offer as a waterfall — CTC, then gross, then take-home — and check each statutory rate at its source. The gap between the offer letter and the bank credit is not a mystery; it is arithmetic you can do before accepting.',
  },
}
