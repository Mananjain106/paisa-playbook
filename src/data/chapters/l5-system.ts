import type { Chapter } from '../../types'
import { scene, sim } from '../../lib/chapter-blocks'
import { l5Illustrative, l5Rule, l5Sources } from '../../lib/l5-blocks'

/**
 * Level 5, band one, batch 3 — chapters l5-015 to l5-019.
 *
 * The last five chapters of the money-system band: automated savings, automated
 * investments, bill automation, account alerts and a one-page dashboard. Where
 * batch 2 designed the monthly routine, this batch is about the machinery that
 * runs it — every rail has a failure mode, and choosing one means knowing what
 * happens when it breaks.
 *
 * Facts verified on 15 October 2026 against the official sources linked from
 * each chapter: the e-mandate framework's ₹15,000 authentication-free limit and
 * the ₹1,00,000 limit for mutual funds, insurance and credit-card bills, the
 * advance pre-debit notification before every recurring debit, the RBI's
 * prescribed turn-around times for failed transactions with ₹100-a-day
 * compensation for delay, and the limited-liability framework that ties how
 * much of a fraudulent debit you bear to how quickly you report it. Each
 * chapter owns its illustration and its lab.
 */
export const l5System: Record<string, Chapter> = {
  'l5-015': {
    id: 'l5-015',
    title: 'Automated Savings',
    subtitle: 'Choose a rail by what happens when it fails, not by which app offered it.',
    minutes: 10,
    blocks: [
      scene('auto-transfer-rail', 'Three rails for moving money on a schedule, and the different way each one breaks when the balance is short.'),
      { kind: 'p', text: 'Saving automatically is not a decision you make once; it is a rail you choose, and every rail has a failure mode. The same ₹8,500 transfer can run untouched for a decade, or bounce on the second month and cost you a charge, depending on which mechanism moves the money. So the useful question is not "shall I automate?" but "what happens on this rail when the money is not there?"' },

      { kind: 'h', text: 'The three rails' },
      {
        kind: 'table',
        caption: 'The mechanisms that move money without you',
        headers: ['Rail', 'How it is set up', 'Ceiling', 'What happens when it fails'],
        rows: [
          ['Standing instruction', 'Your own bank, on your instruction', 'None per transaction', 'The debit bounces if the balance is short, and the bank may charge for the return'],
          ['E-mandate (UPI AutoPay or card)', 'Approved once in your UPI or card app', '₹15,000 per debit without extra authentication; ₹1,00,000 for mutual funds, insurance and credit-card bills', 'The mandate retries a few times, then the collection is marked failed'],
          ['NACH mandate', 'Created by the biller or AMC, against your bank account', 'The amount you approved in the mandate', 'One presentation per cycle, with an advance notice, then the cycle is lost'],
          ['Sweep-in deposit', 'A linked deposit that absorbs surplus and releases funds on demand', 'Set by the bank', 'Nothing fails: the sweep simply does not trigger, which is why it is the gentlest rail for surplus cash'],
        ],
      },
      l5Rule(
        'A recurring debit must be announced before it happens',
        'Under the RBI\'s e-mandate framework, a recurring transaction may be authorised without additional factor authentication up to ₹15,000, with a limit of ₹1,00,000 for categories including insurance premia, mutual fund investments and credit-card bills. Every recurring debit must be preceded by an advance notification — conventionally 24 hours before the collection — and the customer must be informed when the mandate is created and each time a payment is collected. That notice is a working feature, not paperwork: it is a guaranteed window in which you can fund the account or cancel a mandate you no longer want.',
      ),

      { kind: 'h', text: 'What a failed debit actually costs' },
      { kind: 'p', text: 'A failed automated debit is not simply "no transfer this month". Three things follow. The first is the immediate cost: many banks charge for a returned instruction, and repeated returns can lead a bank to suspend the mandate entirely, which turns one bad month into a stalled plan. The second is the loss of the habit: the transfer that skips a month is the transfer you re-decide next month, and re-deciding is how automation quietly stops working. The third is timing — the money that failed to leave on the 2nd is spent by the 20th, so the month ends with less saved and nothing to show for it.' },
      { kind: 'p', text: 'There is also a genuine protection worth knowing: when a payment fails after your account was already debited, the RBI prescribes a turn-around time for the reversal — one working day for the straightforward cases where the money left your account and reached nobody, and up to five days for the ones that need the beneficiary bank — with compensation of ₹100 per day of delay beyond the prescribed time, credited to you. In other words, a failed debit that has taken money out of your account is a reversal you are owed automatically, not a complaint you have to file.' },
      l5Illustrative('The amounts in this chapter and its lab are invented. The ₹15,000 and ₹1,00,000 authentication-free limits, the advance pre-debit notification, the retry behaviour and the reversal turn-around times with ₹100-a-day compensation are the real rules verified on 15 October 2026 and linked below.'),

      { kind: 'h', text: 'How to build the plan' },
      { kind: 'list', ordered: true, items: [
        'Put one day of slack between the salary and every automated debit. This single choice removes the most common cause of a failed transfer, which is a credit that lands a day late.',
        'Keep a floor balance in the spending account. A float worth about a week of outflows covers a delayed salary, a mis-timed bill and a gas cylinder in the same month.',
        'Automate the destinations you would not change under pressure — buffer, goals, retirement. Leave discretionary savings manual, so the automation does not become a tap you can reach for.',
        'Use the sweep for surplus rather than as the plan. A sweep-in deposit cannot bounce, which makes it an excellent second layer and a poor substitute for a deliberate transfer.',
        'Review the mandates once a quarter. A salary change, a new card or a bank migration breaks more automation than bad intentions do.',
      ] },
      sim('l5-automation-blueprint', 'Choose a rail for each transfer and run a failure drill with the salary arriving a day late.'),
      { kind: 'example', title: 'The same ₹8,500, two rails', text: 'Two people transfer ₹8,500 to a buffer every month. The first uses a standing instruction dated the same day as the salary. In a month when the credit lands a day late, the instruction returns unpaid, the bank charges ₹250, and the transfer is re-dated by hand the following month. The second uses the same instruction dated the day after the salary and keeps ₹5,000 in the account. The credit is late, the instruction clears, and nothing else changes. Over five years the first has lost three transfers and paid four charges; the second has lost none, and the difference has nothing to do with discipline.' },
      { kind: 'p', text: 'What this chapter has deliberately not recommended is a specific app or bank. The rails differ in their guarantees, not in their branding, and the guarantees are public: who can move the money, how much can move without a second approval, and what happens when it cannot. Those three questions decide the choice.' },
      { kind: 'terms', items: [
        { term: 'Standing instruction', meaning: 'A bank instruction to move a fixed amount on a fixed date, repeated until cancelled. The simplest rail, with no per-transaction ceiling and no retry.' },
        { term: 'E-mandate', meaning: 'An authorisation for recurring digital payments, subject to authentication-free limits and an advance notification before every debit.' },
        { term: 'NACH mandate', meaning: 'A mandate created by a biller or AMC against your bank account, usually presented once per cycle.' },
        { term: 'Sweep-in deposit', meaning: 'A deposit linked to the account that automatically absorbs surplus and releases funds when the balance runs low.' },
        { term: 'Turn-around time (TAT)', meaning: 'The RBI-prescribed deadline for reversing a failed transaction, with ₹100 per day of compensation payable beyond it.' },
      ] },
      l5Sources(['rbi', 'npci'], [
        'The e-mandate framework, the failed-transaction turn-around times and the ₹100-a-day compensation for delay',
        'The recurring-payment products themselves: the authentication-free limits, the notice before each debit, and where to see every active mandate',
      ]),
    ],
    quiz: [
      {
        q: 'Your salary lands on the 1st and the standing instruction to your buffer is dated the 1st as well. What is the risk?',
        options: [
          { text: 'None, because both happen on the same day', why: 'On the same day is precisely the problem: there is no gap to absorb a credit that arrives late.' },
          { text: 'A salary credit that lands a day late makes the instruction bounce, which may cost a charge and can suspend the mandate', correct: true, why: 'The transfer runs against a balance that has not been funded yet. One day of slack plus a floor balance removes the risk entirely.' },
          { text: 'The bank will charge interest on the transfer', why: 'A transfer is not a borrowing, so interest is not the cost. The risk is a returned instruction and its charges.' },
          { text: 'The buffer will earn less interest', why: 'The interest on a small balance is not the issue; whether the transfer happens at all is.' },
        ],
      },
      {
        q: 'A recurring debit of ₹40,000 is set up as an ordinary e-mandate without additional authentication. What should you expect?',
        options: [
          { text: 'It will run silently, because all recurring debits are authentication-free', why: 'The authentication-free window for ordinary e-mandates is ₹15,000. Above it, the framework requires authentication.' },
          { text: 'Each collection needs additional authentication, and a month where that step is missed is a missed debit', correct: true, why: 'Above the ₹15,000 limit the debit needs authentication. The ₹1,00,000 limit applies to specific categories such as mutual funds, insurance premia and credit-card bills, not to ordinary merchants.' },
          { text: 'It will be rejected by the bank for being too large', why: 'The amount is above the ordinary ceiling but the mandate itself is not invalid: it simply needs authentication each time.' },
          { text: 'It will be converted into a NACH mandate automatically', why: 'Rails are not converted for you. Choosing NACH instead is a decision you make when setting the debit up.' },
        ],
      },
      {
        q: 'You check your account and find a debit that never reached the merchant. What does the RBI framework give you?',
        options: [
          { text: 'Nothing until you file a written complaint and wait for a reply', why: 'Reversal is proactive under the framework: it happens on the prescribed turn-around time without a complaint, and delay costs the bank ₹100 a day.' },
          { text: 'An automatic reversal within the prescribed turn-around time, plus ₹100 per day of compensation if it is late', correct: true, why: 'The 2019 framework sets the deadline by failure type and pays compensation for delay, without the customer having to ask.' },
          { text: 'A reversal only if the merchant agrees', why: 'The turn-around time applies to the payment system, not to the merchant\'s cooperation.' },
          { text: 'A reversal within 30 days as a matter of bank policy', why: 'The prescribed times are far shorter than that, measured in working days rather than weeks.' },
        ],
      },
    ],
    takeaway: 'Automate the destinations you would not change under pressure, pick each rail knowing how it fails, keep one day of slack after the salary and a float in the account, and review the mandates quarterly — the rail decides whether a bad month is a missed transfer or a suspended plan.',
  },

  'l5-016': {
    id: 'l5-016',
    title: 'Automated Investments',
    subtitle: 'An instalment plan is a pipeline, and every joint can leak.',
    minutes: 10,
    blocks: [
      scene('sip-machine', 'Salary to mandate to fund to units, with a yearly step-up and one leak: the instalment that fails and is not replaced.'),
      { kind: 'p', text: 'Automating an investment is the highest-leverage piece of a financial system, because it is the only part that buys an asset rather than moving cash. It is also the part with the most joints: the money has to arrive, the mandate has to clear, the fund has to receive it, and the instalment has to be repeated for years without being re-decided.' },
      { kind: 'p', text: 'Understanding the pipeline is what turns a monthly debit into a plan you can defend. Each joint has a rule behind it, and each rule is a place where a well-intentioned plan quietly stops working.' },

      { kind: 'h', text: 'The four joints' },
      {
        kind: 'table',
        caption: 'Where an automated investment can be interrupted',
        headers: ['Joint', 'What the rule or mechanism is', 'How it fails'],
        rows: [
          ['The date', 'The instalment is usually fixed to a date in the month, not to your salary', 'A date that precedes the salary credit turns every late credit into a missed instalment'],
          ['The mandate', 'An e-mandate runs without extra authentication up to ₹15,000, and up to ₹1,00,000 for mutual fund instalments under UPI AutoPay', 'Above the applicable ceiling each instalment needs approval — and the month you miss that step is a month with no units'],
          ['The fund', 'The applicable net asset value is the one for the date the money is received, subject to the cut-off time', 'A delayed mandate does not buy units at the price you intended; it buys at the price that applied when the money finally arrived'],
          ['The repetition', 'Nothing repeats by itself except the mandate', 'A step-up that was intended but never written down never happens, and the plan quietly shrinks in real terms'],
        ],
      },
      l5Rule(
        'The instalment is invested for the date the money is received',
        'For a systematic investment, the applicable net asset value is the one that applies to the date on which the instalment is received by the fund, subject to the cut-off time for that day. This is why the date you set on the mandate is not cosmetic: it decides the day the money is treated as having arrived, and therefore the price at which the units are allotted. AMFI publishes the cut-off framework and each fund house states the applicable net asset value rules for instalments; read them rather than assuming a fixed day of the month is guaranteed.',
      ),

      { kind: 'h', text: 'The step-up, and the discipline that never happens by itself' },
      { kind: 'p', text: 'A ₹10,000 instalment that never changes is a plan that shrinks, because the expenses it is meant to fund grow every year. The fix is a step-up: an annual instruction to raise the instalment by a fixed percentage, agreed once and then left alone. Ten per cent a year is the common choice, and it does most of the work — an instalment that starts at ₹10,000 and steps up annually is investing nearly three times as much by the fifteenth year without a single further decision.' },
      { kind: 'p', text: 'The failure mode is that the step-up lives in your head rather than in the mandate. Automatic step-up facilities exist, but they only work if they are set, and a manual step-up is a decision you have to win every year against a month that already feels expensive. Set it in the same session in which you set the instalment, and write the date in the financial calendar you keep for the monthly system.' },
      l5Illustrative('The returns and instalments in this chapter and its lab are assumptions for teaching, not forecasts. The authentication-free ceilings, the notification requirement and the net-asset-value basis are the real rules verified on 15 October 2026 and linked below.'),

      { kind: 'h', text: 'When a debit fails' },
      { kind: 'list', items: [
        'Know which months the mandate retries: an e-mandate allows a small number of attempts before the collection is marked failed, and the retry is automatic, not something you arrange.',
        'Fix the cause rather than the symptom. A missed instalment caused by a date is fixed by moving the date; one caused by a thin account is fixed by a float, and moving the date only hides it.',
        'Never let a missed instalment become a pause. The instinct after a missed month is to pause the plan until things settle, which converts one lost month into twelve.',
        'Reconcile quarterly, not monthly. Four instalments a quarter, plus any step-up, is enough to confirm the pipeline is intact without turning investing into a monthly hobby.',
        'Do not compensate with a double instalment in a good month. The plan is a rate, not a total, and irregular top-ups re-introduce the timing decisions automation exists to remove.',
      ] },
      sim('l5-sip-automation', 'Run a step-up instalment plan and price exactly what a missed instalment costs by the end.'),
      { kind: 'p', text: 'Two limitations are worth stating plainly. Automation cannot choose the right asset allocation, and it cannot decide whether the amount is enough — those are the subjects of the portfolio and retirement chapters later in this level. What automation does is guarantee that the decision, once made, keeps being executed on the days you are not thinking about it.' },
      { kind: 'terms', items: [
        { term: 'Systematic investment plan', meaning: 'A fixed instalment invested on a fixed schedule, usually monthly, whose repetition is enforced by a mandate rather than by you.' },
        { term: 'Step-up', meaning: 'A scheduled annual increase in the instalment, which keeps the plan growing with income instead of shrinking with inflation.' },
        { term: 'Applicable NAV', meaning: 'The net asset value for the date the money is received, subject to the cut-off time — the price at which the instalment buys units.' },
        { term: 'Mandate ceiling', meaning: 'The amount above which a recurring debit needs additional authentication. ₹15,000 for ordinary mandates; ₹1,00,000 for mutual funds, insurance and cards.' },
        { term: 'Cut-off time', meaning: 'The time of day that decides which day\'s net asset value applies to money received.' },
      ] },
      l5Sources(['amfi', 'rbi'], [
        'The cut-off framework and how the applicable net asset value is fixed for instalments',
        'The e-mandate framework: authentication-free limits for mutual fund instalments and the notice before each debit',
      ]),
    ],
    quiz: [
      {
        q: 'Your instalment is dated the 1st, the same day as your salary credit, and the credit is occasionally a day late. What is the most direct consequence?',
        options: [
          { text: 'The units are bought at a slightly worse price', why: 'A price difference is possible, but the primary consequence is that the debit fails and no units are bought at all.' },
          { text: 'The instalment is missed in those months, and the plan compounds on a smaller base', correct: true, why: 'A date ahead of the money turns a routine delay into a missed month, and the loss compounds to the end of the plan rather than being a one-month gap.' },
          { text: 'The mandate is cancelled automatically', why: 'A failed collection does not cancel the mandate, though repeated failures can lead to suspension.' },
          { text: 'The fund charges a penalty', why: 'There is no penalty for a missed instalment from the fund house; the cost is the units that were never bought.' },
        ],
      },
      {
        q: 'Why does a missed instalment cost more than the instalment itself by the end of a fifteen-year plan?',
        options: [
          { text: 'Because funds charge a fee for missed instalments', why: 'There is no such fee. The cost is the compounding that month would have earned for the remaining term.' },
          { text: 'Because the units that were never bought would have compounded for every year that remained', correct: true, why: 'A missed instalment removes both its own value and all the growth it would have earned up to the end, which is why the gap is larger than the amount.' },
          { text: 'Because the tax treatment changes for missed months', why: 'Tax treatment is not affected by a missed instalment.' },
          { text: 'Because the plan is paused after a miss', why: 'A miss does not pause the plan — unless you decide to, which is the behavioural risk rather than the arithmetic one.' },
        ],
      },
      {
        q: 'What does the applicable net asset value rule mean for an instalment that reaches the fund a day late?',
        options: [
          { text: 'Nothing: the instalment always buys at the price of the scheduled date', why: 'The applicable value is tied to the date the money is received, not to the date you intended.' },
          { text: 'The units are allotted at the value applicable to the date the money is received, so the price is not the one you planned for', correct: true, why: 'That is why the mandate date is a real decision rather than a formality.' },
          { text: 'The instalment is cancelled', why: 'A late receipt changes the applicable value; it does not void the instalment.' },
          { text: 'The fund must refund the instalment', why: 'There is no refund rule for a late receipt. The money is invested at the applicable value for the date received.' },
        ],
      },
      {
        q: 'Which habit keeps an automated investment plan growing with your income?',
        options: [
          { text: 'Doubling the instalment in months with surplus income', why: 'Irregular top-ups re-introduce timing decisions and produce an erratic plan rather than a growing one.' },
          { text: 'A scheduled annual step-up set once and reviewed in the yearly calendar', correct: true, why: 'A written step-up does the work every year without a fresh decision, which is the only version that survives a busy month.' },
          { text: 'Switching funds whenever a scheme underperforms for a quarter', why: 'That is a decision about selection, not about growth of contributions, and quarterly switching is a cost rather than a strategy.' },
          { text: 'Pausing when markets fall and resuming when they recover', why: 'That inverts the logic of a schedule and converts investing into timing.' },
        ],
      },
    ],
    takeaway: 'Set the instalment two days after the salary, keep it inside the authentication-free ceiling, fix the step-up in writing once a year, and treat a failed debit as a defect to repair — because a missed instalment removes not just one month of contributions but all the compounding they would have earned.',
  },

  'l5-017': {
    id: 'l5-017',
    title: 'Bill Automation',
    subtitle: 'Automate the fixed bills, review the variable ones, and audit the mandates nobody remembers.',
    minutes: 10,
    blocks: [
      scene('bill-clock', 'A month of bills with the pre-debit notice drawn in, and two of the six bills variable enough to deserve a look before they are paid.'),
      { kind: 'p', text: 'Bills are the best candidates for automation and the worst candidates for blind automation. A rent payment is identical every month and should never consume attention; an electricity bill that varies with usage and tariff is exactly the kind of charge that can rise without anyone noticing. The line between them is not how large the bill is, but whether the amount is predictable.' },
      { kind: 'p', text: 'Automating the wrong half of that line creates a different problem from the one it solves. A forgotten bill causes a late fee; an auto-debited variable bill can cause a permanent, invisible increase in your cost of living.' },

      { kind: 'h', text: 'What to automate and what to review' },
      {
        kind: 'table',
        caption: 'Sorting a month of bills',
        headers: ['Bill type', 'Automate?', 'Why'],
        rows: [
          ['Rent, EMIs, loan instalments', 'Yes', 'Identical every month, and the consequence of a miss is disproportionate — a late fee, a credit-report entry and sometimes a penalty rate'],
          ['Insurance premia', 'Yes, but fund them monthly', 'The amount is known a year ahead, so it belongs in a sinking fund as well as on autopay'],
          ['Mobile, broadband, subscriptions', 'Yes, with an annual audit', 'Small and identical, which also means they can persist for years after the need has gone'],
          ['Credit card', 'No', 'The total is variable and paying it automatically removes the one moment when you look at the statement'],
          ['Electricity, water, gas', 'Yes, but review the bill each month', 'The amount moves with usage and tariff, so autopay should pay it while you still read it'],
          ['Any new or trial subscription', 'Not until the trial ends', 'A trial that converts automatically is a mandate created for a service you never decided to buy'],
        ],
      },
      l5Rule(
        'Every recurring debit is announced before it is collected',
        'A recurring payment under the e-mandate framework must be preceded by an advance notification — conventionally 24 hours before the debit — and the customer must be informed when a mandate is created and whenever a payment is collected. A recurring transaction may run without additional authentication up to ₹15,000, or ₹1,00,000 for categories such as insurance premia and credit-card bills. The notice window is the control that makes automation safe: it gives you a day to fund the account, to query a jump, or to cancel a mandate, before the money leaves. Your UPI app and the mandate-listing service operated by NPCI both show every active mandate on the account.',
      ),

      { kind: 'h', text: 'The three traps' },
      { kind: 'list', ordered: true, items: [
        'The silent increase. A variable bill on autopay with no review is a charge that can rise permanently without a decision by anyone. Read the bill, not just the debit alert.',
        'The mandate that outlives its reason. Free trials, gym memberships, a streaming service you stopped watching, an add-on you accepted during a support call — each is a mandate that keeps collecting because cancelling requires an action and paying does not.',
        'The mandate cap below the bill. Where a bill repeatedly exceeds the mandate amount, the debit fails or needs approval every cycle. Re-size the mandate rather than absorbing the failure each month, and check the limit against the kind of bill you are paying.',
      ] },
      { kind: 'p', text: 'The dispute window is the fourth thing to know, and it is easier than it looks. For a card charge that is wrong, the route is a chargeback through the card issuer within the window the issuer states; for a failed transaction where money left your account without reaching anybody, the RBI\'s turn-around times apply and the reversal is automatic, with ₹100 per day of compensation if it is late. What both routes need is the same thing: the date, the amount, the merchant and the statement line, captured at the time. That is a thirty-second habit that decides most disputes.' },
      sim('l5-bill-automation-board', 'Sort a month of bills into automate and review, then audit the subscriptions you forgot you were paying.'),
      l5Illustrative('The bills and amounts in this chapter and its lab are invented. The ₹15,000 and ₹1,00,000 authentication-free limits, the advance pre-debit notice, the mandate-listing facility and the reversal turn-around times are the real rules verified on 15 October 2026 and linked below.'),

      { kind: 'h', text: 'The quarterly audit' },
      { kind: 'p', text: 'Once a quarter, list every active mandate on the account and ask one question of each: if this had to be set up again today, would I set it up? The list is short, and the answer is usually yes for rent and the EMI and no for two other things. Cancelling a mandate is not a saving you have to earn by discipline; it is a saving that arrives by itself once the mandate is gone, which is exactly the property that makes automation worth trusting in the first place.' },
      { kind: 'terms', items: [
        { term: 'Autopay', meaning: 'Automatically paying a bill or subscription when it falls due, usually under a mandate with a stated limit.' },
        { term: 'Mandate cap', meaning: 'The maximum a recurring debit may collect. A bill that regularly exceeds it will fail or need approval each cycle.' },
        { term: 'Pre-debit notification', meaning: 'The advance notice required before a recurring debit, conventionally 24 hours, which is your window to fund or cancel.' },
        { term: 'Chargeback', meaning: 'A reversal of a card charge raised through the issuer, within the window the issuer sets and on the evidence you kept.' },
        { term: 'Trial conversion', meaning: 'A free or discounted trial that becomes a paid mandate automatically, and therefore needs cancelling before it does.' },
      ] },
      l5Sources(['npci', 'rbi'], [
        'Where every active mandate on your account is listed, and the limits that apply to recurring debits',
        'The e-mandate framework, the pre-debit notification requirement and the turn-around times for failed transactions',
      ]),
    ],
    quiz: [
      {
        q: 'Which bill is the worst candidate for unattended automation?',
        options: [
          { text: 'Rent, because the amount is large', why: 'A large amount that is identical every month is the safest thing to automate. The risk comes from variability, not size.' },
          { text: 'Electricity, because the amount moves with usage and tariff and can rise permanently', correct: true, why: 'A variable bill on autopay with no review can increase your cost of living without any decision being taken by anyone.' },
          { text: 'The mobile bill, because it is small', why: 'Small and fixed is exactly the profile that suits automation, subject to an annual audit.' },
          { text: 'The insurance premium, because it is annual', why: 'An annual, known cost is the ideal candidate, especially when a sinking fund is funding it monthly.' },
        ],
      },
      {
        q: 'What is the practical value of the pre-debit notification before a recurring debit?',
        options: [
          { text: 'It confirms the payment will succeed', why: 'It does not guarantee the balance. It gives you time to act before the debit is attempted.' },
          { text: 'It gives you a window to fund the account, query a jump, or cancel a mandate before the money leaves', correct: true, why: 'The notice is a working control: a day of warning is enough to prevent both a failed debit and a charge you no longer want.' },
          { text: 'It replaces the need for a mandate', why: 'The notice follows the mandate; it does not replace it.' },
          { text: 'It applies only to transactions above ₹15,000', why: 'The advance notice applies to recurring debits generally, not only to those above the authentication-free limit.' },
        ],
      },
      {
        q: 'A subscription you stopped using three years ago has been collecting ₹1,499 a month. What is the correct way to think about it?',
        options: [
          { text: 'As money already lost, and not worth acting on now', why: 'The money so far is gone, but the mandate will keep collecting until it is cancelled. The relevant question is only forward-looking.' },
          { text: 'As a mandate that has outlived its reason: cancelling it is a saving that arrives by itself', correct: true, why: 'Recurring charges persist because cancelling needs an action while paying does not. Removing the mandate ends the cost without any ongoing discipline.' },
          { text: 'As a tax deduction you should keep', why: 'An unused subscription is not a deduction, and there is no tax reason to keep paying for it.' },
          { text: 'As a charge you must dispute to reclaim', why: 'A past charge you knowingly authorised is not a dispute; the action is to cancel the mandate going forward.' },
        ],
      },
      {
        q: 'The money left your account but never reached the merchant, and the reversal has not appeared after the prescribed time. What does the framework give you?',
        options: [
          { text: 'A reversal when the merchant confirms the failure', why: 'The deadline runs against the payment system, not against the merchant.' },
          { text: 'Automatic reversal on the prescribed turn-around time, and ₹100 per day for every day of delay beyond it', correct: true, why: 'Compensation is payable for delay beyond the prescribed turn-around time, credited without the customer having to claim it.' },
          { text: 'Compensation only if you file a complaint within 24 hours', why: 'The reversal is proactive; no complaint deadline applies to it.' },
          { text: 'Nothing, because you authorised the payment', why: 'Authorising a payment is not authorising it to be lost in transit.' },
        ],
      },
    ],
    takeaway: 'Automate what is identical every month and review what varies, because a variable bill on autopay can raise your cost of living without a decision. Use the pre-debit notice as your window, keep the mandate limits sized to the bill, and audit every active mandate once a quarter.',
  },

  'l5-018': {
    id: 'l5-018',
    title: 'Account Alerts',
    subtitle: 'Alerts do not stop a debit; they shrink the interval in which you can react to it.',
    minutes: 9,
    blocks: [
      scene('alert-trials', 'One month of debits against a single alert threshold: four fraudulent debits of about ₹4,500 slip under a ₹5,000 line without raising anything.'),
      { kind: 'p', text: 'An alert is a detector, not a lock. It cannot stop a fraudulent debit, and it cannot prevent a mistake. What it does is compress the time between the transaction and your reaction — and under the RBI\'s limited-liability framework, that interval is the thing that decides who ends up paying for an unauthorised transaction.' },
      { kind: 'p', text: 'That single fact changes how you configure alerts. They are not a convenience feature to switch off when they become annoying; they are the mechanism that preserves your claim, which makes tuning them a real decision rather than a preference.' },

      { kind: 'h', text: 'The threshold is a real trade-off' },
      { kind: 'p', text: 'Alerts work on a threshold: notify me when a debit exceeds this amount. Set it high and a slow drain passes silently — four debits of ₹4,500 move ₹18,000 out of an account under a ₹5,000 threshold, one small debit at a time, which is exactly how a compromise is usually executed. Set it low and forty routine alerts a month train you to swipe past the channel, which is how the one that mattered gets ignored.' },
      l5Rule(
        'Liability depends on how fast you report, not only on who is at fault',
        'Under the RBI\'s customer-protection framework, liability for an unauthorised electronic transaction depends on the circumstances and on how promptly the customer reports it. Where the loss is due to the bank\'s own negligence, the customer\'s liability is nil. Where there is a third-party breach and no negligence by the customer, liability is nil if the transaction is reported within three working days, and limited to a specified amount if it is reported within four to seven working days. Beyond seven working days, liability is decided by the bank\'s policy. Banks must also provide alerts for transactions, and they must give you a channel to report unauthorised transactions. The operational conclusion is blunt: the alert is what makes a prompt report possible, and the report is what makes the protection real.',
      ),

      { kind: 'h', text: 'What to turn on' },
      {
        kind: 'table',
        caption: 'The pages worth watching, in order of value',
        headers: ['Alert', 'What it catches', 'Why it belongs on'],
        rows: [
          ['Login and new-device alerts', 'A takeover before any money moves', 'This is the earliest signal available, and it costs nothing to act on'],
          ['Mandate creation and modification', 'A recurring debit being created in your name', 'A new mandate is a standing permission; it should never be created quietly'],
          ['UPI collect requests', 'A pull request dressed up as a payment notification', 'Approving a collect request sends money out — it is the most common single mistake'],
          ['Transaction alerts at a sensible threshold', 'Debits you did not make, and debits larger than you expected', 'Value depends entirely on the threshold being low enough to catch a slow drain and high enough to stay readable'],
          ['KYC, contact and address changes', 'An attempt to move control of the account', 'Changing your registered contact is how an attacker keeps access after you change a password'],
          ['Card-not-present alerts', 'Online transactions that never touch your bank balance directly', 'Cards are the channel where fraud does not need your account credentials at all'],
        ],
      },
      sim('l5-alert-tuning', 'Tune one threshold against a realistic month of debits and see what it catches, what it misses and how much noise it creates.'),
      l5Illustrative('The transactions in this chapter and its lab are invented to show the trade-off. The liability framework and the requirement on banks to provide alerts are the real rules verified on 15 October 2026 and linked below.'),

      { kind: 'h', text: 'What alerts cannot catch' },
      { kind: 'list', items: [
        'A debit you authorised yourself and forgot: a subscription, a trial that converted, a mandate that outlived its purpose. No threshold catches these, because they look exactly like your ordinary spending.',
        'A price rise on a recurring bill. The alert fires every month and looks identical whether the amount is ₹999 or ₹1,299.',
        'A slow drain under a threshold you set high. The pattern is only visible in the statement, not in a notification stream.',
        'A compromised linked service. An alert on the bank account says nothing about a wallet, a broker or a merchant account that shares the same phone number and email.',
        'Anything before it is set up. Alerts are off by default on some accounts and channels, and a disabled alert protects nothing.',
      ] },
      { kind: 'p', text: 'So the alert layer needs one companion: a monthly read of the statement, which catches the authorised-but-unwanted charges that notifications cannot distinguish. That is the review in the monthly system from the previous batch, and it is the reason the two chapters sit next to each other rather than being alternatives.' },
      { kind: 'p', text: 'Finally, alerts are only half of a response. The other half is the sequence you follow when one arrives unexpectedly: freeze the card or account through the app, change the passwords and the registered contact details, file on the cybercrime portal and with the bank, and keep the reference numbers. That sequence is a drill worth writing down before you need it — it is covered in the protection chapters later in this level.' },
      { kind: 'terms', items: [
        { term: 'Transaction alert', meaning: 'A notification sent when a debit or credit occurs on an account, card or wallet, usually by SMS, email or app push.' },
        { term: 'Threshold', meaning: 'The amount above which an alert is raised. Low enough catches a slow drain; too low turns the channel into noise.' },
        { term: 'Zero liability', meaning: 'The position under which the customer bears none of the loss on an unauthorised transaction, typically where the bank was negligent or where a third-party breach was reported within three working days.' },
        { term: 'Limited liability', meaning: 'A capped customer share of the loss, which can apply where a third-party breach is reported later than the prompt window.' },
        { term: 'UPI collect request', meaning: 'A pull request that moves money out of your account when approved. Approving one is the most common single mistake in payment fraud.' },
      ] },
      l5Sources(['npci', 'rbi'], [
        'The alert and mandate controls available on payment apps, and where every active mandate is listed',
        'The customer-protection framework: the alert obligation on banks and how reporting speed changes liability',
      ]),
    ],
    quiz: [
      {
        q: 'A fraudster moves ₹18,000 out of your account in four debits of about ₹4,500 each, and your alert threshold is ₹5,000. What happens?',
        options: [
          { text: 'Four alerts are raised, one per debit', why: 'Each debit is below ₹5,000, so none of them crosses the threshold.' },
          { text: 'Nothing is raised, which is exactly why the drain is split into small debits', correct: true, why: 'Splitting a theft into amounts under the threshold is the standard technique for defeating alerts, and it is why the threshold has to be set against your ordinary spending.' },
          { text: 'The bank blocks the fourth debit automatically', why: 'There is no automatic block based on repetition. Detection is your alert configuration and your statement review.' },
          { text: 'One alert is raised when the total exceeds ₹5,000', why: 'Thresholds apply per transaction, not to a monthly running total.' },
        ],
      },
      {
        q: 'An unauthorised transaction occurs through a third-party breach, and you were not negligent. You report it two days later. What does the framework say about your liability?',
        options: [
          { text: 'You bear the loss up to a fixed cap', why: 'The cap applies to later reporting, not to a report made within three working days.' },
          { text: 'Your liability is nil, because the report was made within three working days', correct: true, why: 'Prompt reporting preserves the protection: nil liability within three working days for a third-party breach without customer negligence.' },
          { text: 'Liability depends only on the bank\'s internal policy', why: 'The framework sets the position for prompt reporting; bank policy decides only the position beyond seven working days.' },
          { text: 'You bear the full loss until the bank completes an investigation', why: 'An investigation does not shift the position set by the framework for a prompt report.' },
        ],
      },
      {
        q: 'Which class of loss do alerts structurally fail to catch?',
        options: [
          { text: 'A debit made from a device you have never used', why: 'This is what login and new-device alerts exist to catch, and they catch it well.' },
          { text: 'A subscription you authorised and forgot, and a recurring bill whose price quietly rose', correct: true, why: 'Both look identical to your ordinary spending in a notification stream. Only a monthly statement read separates them.' },
          { text: 'A large single debit from an unfamiliar merchant', why: 'A transaction alert above the threshold catches exactly this.' },
          { text: 'A new mandate created in your name', why: 'Mandate-creation alerts exist for this pattern, which is why they should be enabled.' },
        ],
      },
      {
        q: 'Why is approving a UPI collect request described as the riskiest single action in payment fraud?',
        options: [
          { text: 'Because the transaction cannot be reversed afterwards', why: 'Reversal may still be possible, but the more important point is that the request is a pull, not a push.' },
          { text: 'Because it moves money out of your account, while being presented as though it were a payment to you', correct: true, why: 'A collect request is authorisation to debit. A caller who asks you to approve it to receive money is asking you to pay them.' },
          { text: 'Because it shares your PIN with the requester', why: 'The PIN is entered into your own app; it is not shared. The danger is the direction of the money.' },
          { text: 'Because it creates a permanent mandate', why: 'A collect request is a one-time pull, not a recurring mandate. The recurring risk is a mandate being created quietly, which is a separate alert to enable.' },
        ],
      },
    ],
    takeaway: 'Alerts do not prevent fraud; they make a prompt report possible, and reporting speed is what decides liability. Set the threshold against your ordinary spending so a split drain surfaces, enable the first-signal alerts — login, new device, mandate creation and collect requests — and pair the alerts with a monthly statement read for the charges you authorised yourself.',
  },

  'l5-019': {
    id: 'l5-019',
    title: 'Personal Financial Dashboards',
    subtitle: 'A dashboard earns its place only if a number on it would change a decision.',
    minutes: 9,
    blocks: [
      scene('dashboard-one-page', 'Six tiles, one page, updated once a month: net worth, savings rate, buffer, debt, goal funding and credit score.'),
      { kind: 'p', text: 'Most people who track money carefully are tracking the wrong things. Portfolio value, index levels, the number of transactions categorised, the running total of reward points — these move constantly and change no decision. Meanwhile the numbers that would actually change behaviour sit unmeasured, because they are slower and less exciting to watch.' },
      { kind: 'p', text: 'A dashboard is best understood as a filter rather than a record. Its job is to hold the smallest set of numbers that, looked at once a month, would make you think "that is not what I expected". Anything that cannot produce that reaction does not belong on the page.' },

      { kind: 'h', text: 'The six numbers that pass the filter' },
      {
        kind: 'table',
        caption: 'What belongs on a one-page dashboard',
        headers: ['Number', 'The question it answers', 'How to compute it'],
        rows: [
          ['Net worth', 'Am I better off than last month?', 'Everything you own at a realisable value, minus everything you owe'],
          ['Savings rate', 'Am I converting income into assets at the rate I intended?', 'The amount saved and invested, divided by take-home income for the month'],
          ['Buffer in months', 'Could I survive losing this income today?', 'Liquid buffer divided by essential monthly spending'],
          ['Debt to income', 'How much of next year is already committed?', 'Total monthly debt payments divided by monthly take-home'],
          ['Goal funding', 'Is the plan on paper still on track?', 'Amount accumulated for each goal against its inflation-adjusted target'],
          ['Credit score', 'Can I still borrow, and at what price?', 'The score from the credit bureau, read for misuse as much as for the number'],
        ],
      },
      { kind: 'list', items: [
        'Update it monthly, on the same date as the closing review from the monthly system. A weekly cadence makes slow numbers look volatile and invites fiddling with a plan that does not need fiddling.',
        'Show the change, not just the level. "+₹18,400" answers a question; "₹4.21 lakh" on its own does not, because nobody remembers last month\'s number.',
        'Keep it to one page and no scrolling. The test of a dashboard is whether it is still being read in month twelve.',
        'Leave off everything that moves for reasons unrelated to you: this week\'s portfolio value, the index level, and any count of activity rather than outcome.',
      ] },
      l5Illustrative('The figures in the illustration and the lab are invented and the returns implied by goal funding are assumptions, not forecasts. Nothing here is a valuation of your own holdings, which should come from your own statements.'),

      { kind: 'h', text: 'The ratios worth keeping' },
      { kind: 'p', text: 'Three ratios do most of the work, and they are worth fixing in a form you do not re-derive each month. The savings rate, measured consistently on take-home income. The buffer in months of essentials. Debt payments as a share of income. The first tells you the pace, the second tells you the resilience, and the third tells you how much of your income was already promised to somebody else before you earned it. Watch them as trends over quarters, not as pass or fail grades each month — a ratio that moves the wrong way twice in a row is a signal, and a single month is noise.' },
      { kind: 'p', text: 'Net worth is the number people either obsess over or avoid, and both responses are errors. Its value is not the level but the direction and the composition: it should climb because assets grew, not only because a loan was repaid, and it should be recomputed from statements rather than from memory. A quick way to keep it honest is to record each asset at a value you could actually realise — a flat at a realistic sale price, a car at what a buyer would pay today, a provident fund balance at the passbook figure.' },

      { kind: 'h', text: 'The cadence, and why it matters more than the design' },
      { kind: 'p', text: 'A well-designed dashboard reviewed twice a year is worse than a rough one reviewed monthly, because the monthly read is what catches a drifting month before it becomes a drifting year. The dashboard and the monthly review from the earlier chapter are the same act seen from two sides: the review decides what to change, and the dashboard is the page on which the change shows up. If the dashboard has not moved in three monthly reviews, either the numbers are wrong or the plan is not being executed, and both are worth knowing.' },
      sim('l5-dashboard-designer', 'Choose up to six numbers and see which of them would change a decision and which of them just move.'),
      { kind: 'p', text: 'One restraint to keep in mind: a dashboard is a management tool, not a scoreboard to optimise. The moment a metric becomes a target, it stops measuring anything useful — a savings rate chased to a round number by deferring a repair, or a net worth defended by refusing to spend on anything at all, both produce a good-looking page and a worse plan.' },
      { kind: 'terms', items: [
        { term: 'Net worth', meaning: 'Assets at realisable value minus liabilities, recomputed from statements rather than from memory.' },
        { term: 'Savings rate', meaning: 'The share of take-home income saved and invested, measured the same way every month so months can be compared.' },
        { term: 'Buffer in months', meaning: 'Liquid, accessible funds divided by essential monthly spending — the number that decides whether a bad month becomes debt.' },
        { term: 'Debt to income', meaning: 'Monthly debt payments as a share of monthly take-home, showing how much of your future income is already committed.' },
        { term: 'Vanity metric', meaning: 'A number that changes for reasons unrelated to your decisions — index levels, portfolio value on a given day, activity counts.' },
      ] },
      l5Sources(['rbi'], [
        'Deposit and account information that makes a self-computed net worth and buffer reading accurate, including the deposit insurance limit that decides where cash sits',
      ]),
    ],
    quiz: [
      {
        q: 'Which of these belongs on a one-page dashboard?',
        options: [
          { text: 'The value of your portfolio this week', why: 'It moves with the market rather than with your decisions, and it invites attention where action is not useful.' },
          { text: 'Buffer measured in months of essential spending', correct: true, why: 'It answers a question you would otherwise guess at: could I survive losing this income today?' },
          { text: 'The number of transactions you categorised', why: 'That measures effort, not outcome, and it rises even in a month where you did the wrong things very carefully.' },
          { text: 'The daily level of a market index', why: 'This is news, not a personal number, and nothing you decide monthly depends on it.' },
        ],
      },
      {
        q: 'Why should the dashboard show the change and not only the level?',
        options: [
          { text: 'Because the level is usually wrong', why: 'The level is a snapshot that can be perfectly correct and still tell you nothing about progress.' },
          { text: 'Because a level on its own cannot be read as progress: nobody reliably remembers last month\'s number', correct: true, why: 'The monthly change is what turns a value into a fact about what you did, which is the only thing a dashboard is for.' },
          { text: 'Because banks report levels differently', why: 'Formatting is not the issue; the missing comparison is.' },
          { text: 'Because changes are tax-relevant', why: 'Tax treatment is unrelated to how a dashboard presents progress.' },
        ],
      },
      {
        q: 'Your dashboard was designed carefully but reviewed twice this year. What is the practical consequence?',
        options: [
          { text: 'None, because the numbers are still correct when you look', why: 'Correct historical data does not correct a drifting month; by the time you look, the drift has become the new normal.' },
          { text: 'A drifting month goes uncorrected long enough to become a drifting year', correct: true, why: 'The monthly read is what catches a change while it is still small, and that is worth more than any refinement of the page itself.' },
          { text: 'The net worth figure becomes unreliable', why: 'Net worth can still be computed correctly from statements; the failure is in the timing of the intervention.' },
          { text: 'The credit score will fall', why: 'Review cadence does not affect a credit score by itself.' },
        ],
      },
      {
        q: 'What is the risk of treating the savings rate on your dashboard as a target to hit every month?',
        options: [
          { text: 'None: a target is always better than a measurement', why: 'Making a metric into a target changes the behaviour it was measuring, which is how deferring a necessary repair starts to look like success.' },
          { text: 'The number stops measuring anything useful, because it is optimised rather than observed', correct: true, why: 'A ratio chased to a round figure produces a good-looking page and a worse plan, which is why the useful read is the trend over quarters.' },
          { text: 'It is illegal to target a savings rate', why: 'There is no such rule. The objection is practical.' },
          { text: 'The rate will be computed differently by your bank', why: 'Banks do not compute your savings rate; you do, which is why the definition has to stay constant.' },
        ],
      },
    ],
    takeaway: 'Keep one page with six numbers that could each change a decision — net worth, savings rate, buffer months, debt to income, goal funding and credit score — show the change as well as the level, and read it monthly, because a dashboard that is never looked at is just a tidier way of not knowing.',
  },
}
