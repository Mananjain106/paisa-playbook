import type { Chapter } from '../../types'
import { scene, sim } from '../../lib/chapter-blocks'
import { l5Illustrative, l5Rule, l5Sources } from '../../lib/l5-blocks'

/**
 * Level 5, band four, batch 3 — chapters l5-091 to l5-100.
 *
 * The band closes with the events nobody schedules: an income that stops, a
 * hospitalisation, a market that falls, a recession, several debts at once. The
 * batch then opens the level's fraud band with the response itself — what to do
 * in the first hour after money leaves, how to recover an account, how to repair
 * an identity, and how to judge a seller before any of that is necessary.
 *
 * Facts verified on 15 October 2026 and linked from each chapter: a member of
 * the provident fund who is unemployed for more than a month may take a
 * non-refundable advance of up to 75% of the balance under paragraph 68HH of the
 * EPF Scheme, and ESIC unemployment relief under the Atal Beemit Vyakti Kalyan
 * Yojana pays 50% of average daily earnings for up to 90 days to an insured
 * person who loses employment; gratuity is exempt from tax up to ₹20,00,000; a
 * health policy can be ported, and the waiting period already served is carried
 * over; IRDAI requires a cashless authorisation decision within one hour and a
 * final authorisation for discharge within three hours, and after 60 months of
 * continuous coverage a claim can no longer be contested except for established
 * fraud or a permanent exclusion; a hospital room above the eligible limit is
 * settled proportionately; the exchange halts market-wide trading at 10%, 15%
 * and 20% either way, with the length of the halt set by the time of day; a
 * capital loss can be set off against capital gains and carried forward for
 * eight years; the RBI's inflation target is 4% with a band of two percentage
 * points either way; a secured creditor's enforcement begins with a written
 * demand giving 60 days under section 13(2) of the SARFAESI Act, 2002; a
 * customer's liability for an unauthorised electronic transaction is zero if
 * reported within three working days, capped between four and seven working
 * days, and per the bank's policy after that, with provisional credit owed
 * within ten working days; an unregulated deposit scheme is banned outright
 * under the Banning of Unregulated Deposit Schemes Act, 2019 and a money
 * circulation scheme under the Prize Chits and Money Circulation Schemes
 * (Banning) Act, 1978; advice on securities requires registration with SEBI as
 * an investment adviser or a research analyst, with complaints to SCORES; a full
 * credit report is free once a year from each credit information company; and
 * identity theft and cheating by personation are punishable under sections 66C
 * and 66D of the Information Technology Act, 2000 with imprisonment up to three
 * years and a fine up to ₹1,00,000.
 */
export const l5Protect: Record<string, Chapter> = {
  'l5-091': {
    id: 'l5-091',
    title: 'Job Loss',
    subtitle: 'A job loss is a cash-flow problem with a deadline, and the runway is the only number that matters.',
    minutes: 12,
    takeaway: 'Add up every source of time — the emergency fund, notice pay, a provident-fund advance, unemployment relief — and stage the spending so the search is not made under pressure.',
    blocks: [
      scene('runway-months', 'How long the money lasts, and which sources it draws on in which order.'),
      { kind: 'p', text: 'A job loss is not a financial event so much as a cash-flow event with a deadline attached. The question that decides everything else is how many months the household can keep its commitments without new income. That number can be assembled from four places, and most people know about only one of them: the emergency fund is the first, paid notice and severance are the second, a provident-fund advance is the third, and unemployment relief where the establishment is covered by ESIC is the fourth.' },
      { kind: 'p', text: 'The second half of the plan is the order in which spending is cut. The health cover is not a candidate, whatever the premium, because an uninsured hospitalisation in the same year is what turns a three-month search into a two-year recovery. The optional spending goes first, then the new monthly investments pause, then the discretionary part of the budget is staged down. Selling long-term investments comes last, after the liquidity above it has been used, because a forced sale at an arbitrary price is the most expensive way to fund a search.' },
      { kind: 'p', text: 'Two details decide how the exit is handled. The first is notice: a payment in lieu of notice and a severance are usually taxable in the year of receipt as salary, so the month on which the income is assessed matters. The second is continuity of cover. A health policy bought through an employer stops with the employment, and a policy can be ported to a personal one, with the waiting period already served carried across — but only if it is done around renewal, and only if the household acts before the gap opens.' },

      { kind: 'h', text: 'What buys time, and in what order' },
      {
        kind: 'table',
        caption: 'The four sources of runway, and the catch in each',
        headers: ['Source', 'What it gives', 'The catch'],
        rows: [
          ['Emergency fund', 'Whatever is already set aside, and it is immediately liquid', 'It is also what stands between you and the next shock'],
          ['Notice and severance', 'One or two months of pay, sometimes more', 'Taxable as salary in the year of receipt'],
          ['Provident-fund advance', 'Up to 75% of the balance after a month unemployed', 'It is retirement money, and it does not come back'],
          ['Unemployment relief', 'Half of average daily earnings, for up to 90 days, where ESIC covers the employer', 'It requires 78 days of contribution in the qualifying period'],
        ],
      },
      l5Rule(
        'What an exit is entitled to',
        'A member of the Employees\u2019 Provident Fund who has been unemployed for more than one month may take a non-refundable advance of up to 75% of the amount standing to their credit, under paragraph 68HH of the EPF Scheme, 1952; the balance becomes available on final settlement. Where the establishment is covered by the Employees\u2019 State Insurance Corporation, the Atal Beemit Vyakti Kalyan Yojana pays unemployment relief of 50% of average daily earnings for a maximum of 90 days, and the scheme has been extended repeatedly, so the current end date should be checked on the ESIC site. Gratuity is exempt from tax up to ₹20,00,000. A health policy can be ported from one insurer to another, and the waiting period already served transfers with it, provided the portability request reaches the insurer at least a month before renewal. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'The first fortnight, in writing' },
      { kind: 'p', text: 'The fortnight after an exit decides whether the search is run calmly or financed by the worst borrowing available. It is worth being blunt about the sequence: write the runway down, tell every lender before a due date rather than after it, check the provident-fund and unemployment entitlements, move the health cover across, and stop the new monthly investments — while leaving the existing ones alone. A household that does those five things in the first fortnight is usually still in the same financial position six months later.' },
      sim('l5-job-loss-plan', 'Stack every source of runway you can reach, stage the spending, and see which cut has to come first.'),
      l5Illustrative('The salary, the severance, the fund balance and the spending in this lab are invented for practice. The entitlements quoted above — the 75% provident-fund advance after a month of unemployment under paragraph 68HH, unemployment relief at 50% of average daily earnings for up to 90 days where ESIC covers the employer, the ₹20,00,000 gratuity exemption, and health-policy portability with the waiting period carried over — were verified on 15 October 2026 and are linked below.'),

      { kind: 'h', text: 'Do these seven things' },
      { kind: 'list', ordered: true, items: [
        'Write the runway in months: accessible money divided by essentials plus loan payments.',
        'Tell every lender before the due date, and ask for the terms of any relief in writing.',
        'Check the provident-fund advance entitlement, and decide whether to use it at all.',
        'Check unemployment relief where the employer is covered by ESIC.',
        'Move the health cover across, and never let it lapse while it can be ported.',
        'Cut the optional spending in week one, and pause new investments rather than stopping them.',
        'Set a date to review the runway, and decide in advance what happens if it has not improved.',
      ] },
      { kind: 'p', text: 'The reason to prepare this before it happens is not pessimism. It is that a household with a runway number and a staged plan negotiates from a position of some patience, while a household without one accepts the first offer because the next EMI is due. That difference is worth more than any of the amounts on this page.' },
      { kind: 'terms', items: [
        { term: 'Runway', meaning: 'How many months the accessible money lasts at the current rate of spending.' },
        { term: 'Notice pay', meaning: 'A payment in lieu of the notice period, usually taxable as salary.' },
        { term: 'Severance', meaning: 'A negotiated or contractual payment on exit, over and above the notice period.' },
        { term: 'Gratuity', meaning: 'A statutory payment after five years of service, exempt from tax up to ₹20,00,000.' },
        { term: 'Portability', meaning: 'Moving a health policy to another insurer while keeping the waiting period already served.' },
      ] },
      l5Sources(['labd', 'incometax', 'rbi'], [
        'The EPF Scheme paragraph 68HH advance for a member who is unemployed, the ESIC unemployment relief scheme, and the Payment of Gratuity Act',
        'The tax treatment of salary on exit, the gratuity exemption limit, and the deduction for health-insurance premium while cover continues',
        'The rules on retail loans and what a lender must disclose when repayment terms are changed',
      ]),
    ],
    quiz: [
      {
        q: 'You have been unemployed for six weeks and have ₹9,00,000 in your provident fund. What can you withdraw?',
        options: [
          { text: 'Nothing, until you have been unemployed for six months', why: 'A month is the qualifying period, not six. The advance exists precisely for a gap in employment.' },
          { text: 'Up to 75% of the balance, as a non-refundable advance', correct: true, why: 'Paragraph 68HH of the EPF Scheme allows a non-refundable advance of up to 75% of the balance after a month of unemployment, with the balance available at final settlement.' },
          { text: 'The entire balance, since the employment has ended', why: 'The full balance is available on final settlement, after the qualifying period for a full withdrawal. The six-week advance is the 75% route.' },
          { text: 'Only the employee contribution, not the employer share', why: 'The 75% is of the amount standing to the member\u2019s credit, which includes both contributions and the interest on them.' },
        ],
      },
      {
        q: 'Your employer\u2019s ESIC cover lapses when you leave. What happens to your health cover?',
        options: [
          { text: 'You have no option but to buy a new policy, and the waiting periods start again', why: 'This is the assumption that costs the most. A policy can be ported and the waiting period already served is carried over, so starting afresh is a choice rather than a requirement.' },
          { text: 'The policy can be ported, and the waiting period already served transfers with it, if the request reaches the insurer before renewal', correct: true, why: 'Portability keeps the credit for the years of cover, which is why it must be arranged around renewal, and why a gap in cover is expensive to create.' },
          { text: 'The employer is required to keep paying the premium for a year', why: 'Employer cover generally ends with employment. The continuity you can arrange for yourself is portability.' },
          { text: 'Nothing changes, because health cover follows the person', why: 'Employer-arranged cover follows the employment. Only a ported or personally bought policy follows the person.' },
        ],
      },
      {
        q: 'The runway is three months and spending must be cut today. Which cut is not on the table?',
        options: [
          { text: 'Subscriptions, memberships and the optional spends', why: 'This is the first cut, and the easiest one, because nothing important depends on it.' },
          { text: 'New monthly investments, paused rather than cancelled', why: 'A reasonable second step: pause the new money while keeping everything already invested.' },
          { text: 'The health cover', correct: true, why: 'Cancelling health cover saves a premium and risks a hospital bill that ends the household\u2019s position entirely. It is the one cut to refuse, even in a crisis.' },
          { text: 'The discretionary part of the monthly budget', why: 'That is the staged part of the plan, reduced gradually as the search continues.' },
        ],
      },
    ],
  },

  'l5-092': {
    id: 'l5-092',
    title: 'Medical Emergencies',
    subtitle: 'A hospital admission is a paperwork event with a bill attached, and the paperwork decides the bill.',
    minutes: 12,
    takeaway: 'Use the cashless route where you can, keep the room inside the policy limit, and treat the claim as a file that must be complete rather than a favour being requested.',
    blocks: [
      scene('hospital-flow', 'The cashless route and the reimbursement route through the same hospital stay.'),
      { kind: 'p', text: 'The financial shock of a hospitalisation is decided in the first hour, before anyone discusses the bill. If the treatment happens in a network hospital and the pre-authorisation is obtained, the insurer and the hospital settle between themselves and the family pays only what the policy does not cover. If it happens anywhere else, the family pays the whole bill first and is reimbursed later, which means the money has to exist before the treatment does. The clinical decision is the doctor\u2019s; the route is the family\u2019s.' },
      { kind: 'p', text: 'The second decision is the room, and it is the one that surprises people most. Policies commonly state an eligible room category, and a room above it is not refused — the entire bill is simply settled in the same proportion. A room at twice the eligible rent can halve the settlement of everything, from the surgeon to the medicines, even though the medical care was identical. That is not a technicality; it is the single most common cause of a settlement that feels inexplicably small.' },
      { kind: 'p', text: 'The third part is the file. A claim is decided on documents, and the clock runs from the last document received rather than from the date of admission or the discharge. Discharge summary, bills, receipts, investigation reports with the prescriptions that ordered them, the pre-authorisation letter where there was one — one missing paper turns a two-week settlement into a two-month correspondence. Collected on the day of discharge, the whole file is an hour\u2019s work; collected a month later, it is a series of trips to the hospital records department.' },

      { kind: 'h', text: 'What the policy decides, and what you decide' },
      {
        kind: 'table',
        caption: 'The choices that decide what a hospitalisation costs you',
        headers: ['Decision', 'Who makes it', 'What it changes'],
        rows: [
          ['Network or not', 'Your family, before admission', 'Whether cash leaves your account at all'],
          ['Pre-authorisation', 'The hospital, on your behalf', 'Whether the insurer is involved before the bill exists'],
          ['The room', 'Your family, at admission', 'Whether the whole bill is settled in the eligible proportion'],
          ['The documents', 'Your family, at discharge', 'When the claim clock starts running'],
          ['The waiting periods', 'Nobody, after the fact', 'Whether the claim is payable at all in the early years'],
          ['Portability and continuity', 'You, before renewal', 'Whether the credit for the years already covered survives'],
        ],
      },
      l5Rule(
        'What the regulator requires of a health claim',
        'An insurer or a third-party administrator must decide a cashless authorisation request immediately, and within one hour of receiving it, and must grant the final authorisation for discharge from hospital within three hours of the request. Once a policy has been in force for 60 continuous months, no claim can be contested on the ground of non-disclosure or a pre-existing condition except for established fraud or a permanent exclusion, which is why continuity of cover is worth protecting. A room above the eligible category is settled proportionately across the bill rather than refused, and the waiting periods — commonly 30 days for any illness, and longer for named conditions and pre-existing disease — are counted from the start of the policy, credit for which survives a portability. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'The file, and the reasons it gets rejected' },
      { kind: 'p', text: 'Rejections are rarely mysterious. The claim arrived after the deadline in the policy, the treatment fell inside a waiting period, the condition was declared as pre-existing later than it should have been, the bill carried items the policy excludes, or the documents did not connect the treatment to a diagnosis. Each of those is answerable with paperwork collected at the right time, and none of them is answerable a month afterwards. The habit worth building is the one every experienced family has: on the day of discharge, ask for the complete set and check the names, dates and policy number before leaving the building.' },
      sim('l5-medical-claim-run', 'Run the same hospitalisation through both routes, change the room and the documents, and see who pays what.'),
      l5Illustrative('The bill, the room rent and the limits in this lab are invented for practice. The rules quoted above — a cashless authorisation decided within one hour, a final discharge authorisation within three hours, the 60-month moratorium after which a claim cannot be contested except for established fraud or a permanent exclusion, and proportionate settlement for a room above the eligible category — were verified on 15 October 2026 and are linked below.'),

      { kind: 'h', text: 'Do these seven things' },
      { kind: 'list', ordered: true, items: [
        'Keep a copy of the policy and the network hospital list where the family can find it in a hurry.',
        'Call the insurer or the third-party administrator before admission, not after it.',
        'Ask for the claim form and the pre-authorisation letter at the hospital, and read the room category on the policy.',
        'Stay inside the eligible room category, and understand what exceeding it does to the whole bill.',
        'Collect the discharge summary, every bill, every receipt and every investigation report on the day of discharge.',
        'Check that the policy is renewed every year, because the waiting-period credit only accrues with continuous cover.',
        'If the settlement is short, ask for the reason in writing: the proportionate deduction, the exclusion and the waiting period are all identified in it.',
      ] },
      { kind: 'p', text: 'Health insurance is unusual among financial products in that the benefit depends on how well the household performs on the worst day it will have. That performance is not courage under pressure; it is a habit of keeping the policy, the room and the file in order, and then letting two institutions settle between themselves.' },
      { kind: 'terms', items: [
        { term: 'Cashless facility', meaning: 'The insurer settling directly with a network hospital instead of reimbursing the patient afterwards.' },
        { term: 'Pre-authorisation', meaning: 'The hospital asking the insurer to confirm cover and the amount before treatment proceeds.' },
        { term: 'Proportionate deduction', meaning: 'Settling the whole bill at the same ratio by which the room exceeded the eligible limit.' },
        { term: 'Moratorium period', meaning: 'The 60 months of continuous cover after which a claim can no longer be contested, barring fraud or a permanent exclusion.' },
        { term: 'Waiting period', meaning: 'The time from the start of a policy during which named conditions and pre-existing disease are not payable.' },
      ] },
      l5Sources(['irdai'], [
        'The master circular on health insurance business, including the timelines for cashless authorisation, the moratorium period, the treatment of room categories and the handling of a claim',
      ]),
    ],
    quiz: [
      {
        q: 'The policy states an eligible room rent of ₹5,000 a day and you take a room at ₹10,000. What happens to the claim?',
        options: [
          { text: 'The room rent above the limit is deducted, and the rest is paid in full', why: 'This is the common expectation and not the rule. The excess is not treated as a single deduction; the bill is settled in the same proportion across the board.' },
          { text: 'The whole bill is settled at the same proportion by which the room exceeded the limit', correct: true, why: 'That is proportionate settlement, and it is why a room at twice the eligible rent does not merely cost the difference — it reduces the settlement of the surgeon, the medicines and everything else.' },
          { text: 'The claim is rejected outright', why: 'The policy is not breached by taking a better room; the settlement is simply scaled to the eligible category.' },
          { text: 'Nothing, as long as the total stays within the sum insured', why: 'The eligible room category is a term of the policy, separate from the sum insured, and it applies whatever the total bill is.' },
        ],
      },
      {
        q: 'You are admitted to a non-network hospital and pay the whole bill yourself. When does the claim clock start?',
        options: [
          { text: 'On the day of admission', why: 'Admission is when the treatment begins, not when the insurer\u2019s clock begins.' },
          { text: 'On the day of discharge', why: 'Useful for starting the paperwork, and still not the point from which the insurer counts.' },
          { text: 'When the last necessary document reaches the insurer', correct: true, why: 'The settlement timeline runs from the last document received, which is why a missing paper costs weeks and why the file should be complete before it is filed.' },
          { text: 'Whenever you choose to file it, as long as it is within a year', why: 'Policies do impose filing deadlines, and the timeline for the insurer to decide starts from the complete file rather than from your choice of date.' },
        ],
      },
      {
        q: 'You have renewed the same health policy for six years without a break. What does that continuity buy you?',
        options: [
          { text: 'A discount on the premium', why: 'Renewal terms and discounts are commercial matters. Continuity buys something more valuable than a discount.' },
          { text: 'The claim can no longer be contested for non-disclosure or a pre-existing condition, except for fraud or a permanent exclusion', correct: true, why: 'After 60 months of continuous coverage the moratorium applies, which is the strongest argument for never letting a policy lapse and for porting it if you change insurers.' },
          { text: 'A higher sum insured at the same premium', why: 'Sum insured is a term you choose and pay for. It does not come from continuity.' },
          { text: 'Nothing, unless you have never claimed', why: 'The moratorium is about the length of cover, not about whether claims were made in it.' },
        ],
      },
    ],
  },

  'l5-093': {
    id: 'l5-093',
    title: 'Market Crashes',
    subtitle: 'A crash is a test of a plan written earlier, not an event to be interpreted in the moment.',
    minutes: 12,
    takeaway: 'Write the plan before the fall: safe money for anything within three years, a rebalancing band that decides when to act, dry powder set aside for exactly this, and nothing sold because the market is falling.',
    blocks: [
      scene('crash-playbook', 'What a written plan says at each stage of a fall, including the stages where it says nothing at all.'),
      { kind: 'p', text: 'A crash is not a market event that happens to a portfolio. It is a test of a set of rules that either existed beforehand or do not exist at all. The households that come out of a fall intact are not the ones that predicted it; they are the ones whose money was separated by time before it arrived. Anything needed within three years is not in equity, so it cannot be sold in a fall. Anything further out is in equity and is not sold, because that was the reason it was bought.' },
      { kind: 'p', text: 'The most useful piece of preparation is a rebalancing band. If the target allocation is 70% equity and 30% debt, a band of five percentage points means the portfolio is adjusted only when the mix drifts beyond 65 or 75. In a fall, equity drifts down and the band is breached, and the plan tells you to buy — from the debt side or from money set aside for exactly that purpose. Without a number like that, a fall produces an argument with yourself at the worst possible moment.' },
      { kind: 'p', text: 'The third element is what to do with the parts of the portfolio that are behaving well. Falling bond prices and rising yields, gold moving up as equity falls, cash that suddenly looks attractive: a crash is a rotation, and the safe part of the portfolio is a resource rather than a spectator. Households that draw on the safe part to rebalance systematically do better than households that watch, and both of them do better than the household that sells.' },

      { kind: 'h', text: 'What the exchange does, and what you do' },
      {
        kind: 'table',
        caption: 'A fall in stages, and the plan for each',
        headers: ['Stage', 'What the exchange does', 'What the plan says'],
        rows: [
          ['10% either way', 'A halt for 45 minutes before 1 pm, then a 15-minute pre-open auction', 'Nothing, unless the band has been breached'],
          ['15% either way', 'A longer halt, decided by the time of the day', 'Rebalance if the drift is beyond the band'],
          ['20% either way', 'Trading stops for the rest of the day', 'Deploy the money reserved for this, in the tranches you wrote down'],
          ['A long slow fall', 'No halt at all, which is the harder version', 'Re-read the plan monthly, and leave the allocation alone'],
        ],
      },
      l5Rule(
        'The rules that shape a crash',
        'Trading on the exchanges halts market-wide when the benchmark index moves 10%, 15% or 20% in either direction from the previous close. A breach before 1 pm halts trading for 45 minutes, followed by a 15-minute pre-open call auction; the length of the halt at the higher levels depends on the time of the day, and a breach at or after 2 pm stops trading for the rest of the session. Separately, a capital loss can be set off against capital gains in the same year, and carried forward for eight years to be set off against future gains, provided the return of income is filed within the time allowed — which is why a crash year rewards having the paperwork in order. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'The behaviour that costs the most' },
      { kind: 'p', text: 'Every study of investor returns says the same thing: the money lost to falls is smaller than the money lost to the decisions taken during them. Selling after a 20% fall converts an unrealised number into a permanent one, and waiting to re-enter until it feels safe guarantees missing the recovery, which tends to arrive in the weeks the news is worst. A written plan with a band and a tranche schedule is not a cleverer strategy than the others. It is the only version of the strategy that survives contact with a falling market.' },
      sim('l5-crash-simulator', 'Take a portfolio through a fall and see what each possible reaction does to it a year later.'),
      l5Illustrative('The portfolio, the fall and the recovery in this lab are invented for practice. The rules of the market described above — the index-based circuit breakers at 10%, 15% and 20%, the 45-minute halt with a 15-minute pre-open before 1 pm, a halt for the rest of the day after 2 pm, and the eight-year carry-forward of a capital loss — were verified on 15 October 2026 and are linked below.'),

      { kind: 'h', text: 'Do these seven things' },
      { kind: 'list', ordered: true, items: [
        'Separate money by time: anything needed within three years is not in equity.',
        'Write down a target allocation and the band around it that triggers a rebalance.',
        'Decide in advance how much dry powder is reserved for a fall, and where it sits.',
        'Write the tranches: how much goes in at which level, so the buying is mechanical.',
        'Never sell because the market is falling; the sale is a decision about the goal, not about the price.',
        'Keep the emergency fund outside the market, so no fall can force a sale.',
        'File the return in a year with losses, so the carry-forward is available for eight years.',
      ] },
      { kind: 'p', text: 'The value of all this is not that it produces a better return than the alternatives. It is that it removes the possibility that the worst week of a decade is also the week that decisions get made, which is how a temporary fall becomes a permanent loss.' },
      { kind: 'terms', items: [
        { term: 'Circuit breaker', meaning: 'An exchange-wide halt in trading after the index moves 10%, 15% or 20%.' },
        { term: 'Rebalancing band', meaning: 'The drift from target allocation at which a portfolio is adjusted back.' },
        { term: 'Dry powder', meaning: 'Money deliberately held outside the market to be invested in a fall.' },
        { term: 'Realised loss', meaning: 'A fall that has been turned into cash by selling, and is permanent.' },
        { term: 'Carry-forward', meaning: 'The right to set a capital loss against gains in later years, for up to eight.' },
      ] },
      l5Sources(['sebi', 'nse'], [
        'The rules on market-wide circuit breakers, the levels at which trading halts, and the procedure that follows a halt',
        'The exchange notices on index-based circuit breakers, the timing of each halt and the pre-open session that follows',
      ]),
    ],
    quiz: [
      {
        q: 'The index falls 10% by 11 am. What happens on the exchange?',
        options: [
          { text: 'Trading stops for the rest of the day', why: 'That is what happens at or after 2 pm. A halt before 1 pm is measured in minutes, followed by a pre-open auction.' },
          { text: 'Trading halts for 45 minutes, followed by a 15-minute pre-open call auction', correct: true, why: 'The 10% level before 1 pm halts trading for 45 minutes and then reopens through a 15-minute pre-open call auction, so that orders can be collected before trade resumes.' },
          { text: 'Nothing at all: circuit breakers apply to individual stocks only', why: 'Individual securities have their own bands, and there is also a market-wide system at 10%, 15% and 20% based on the benchmark index.' },
          { text: 'Trading continues but only for delivery orders', why: 'The halt is market-wide; no such partial session exists.' },
        ],
      },
      {
        q: 'Your target is 70% equity and the market falls until equity is 62% of the portfolio. What does a good plan say?',
        options: [
          { text: 'Sell debt and hold cash until the market stabilises', why: 'This is the reaction that reads like caution and behaves like selling: exposure is reduced at the bottom, and the recovery is missed.' },
          { text: 'Buy back to the target if the drift is beyond your band, from the money set aside for it', correct: true, why: 'A band turns the fall into a mechanical instruction rather than a judgement about the news, which is the entire purpose of having one.' },
          { text: 'Do nothing, because rebalancing in a fall is market timing', why: 'Rebalancing to a target is the opposite of market timing: it is undoing the drift the market itself produced.' },
          { text: 'Stop the monthly investment until the market recovers', why: 'Stopping the monthly investment in a fall means buying less when units are cheapest, which is the one thing a plan should prevent.' },
        ],
      },
      {
        q: 'You sold equity in a fall and booked a loss of ₹2,00,000. What is that loss worth to you?',
        options: [
          { text: 'Nothing, because a loss on listed shares cannot be used', why: 'A capital loss can be set off against capital gains and carried forward, subject to the return being filed in time.' },
          { text: 'It can be set off against capital gains this year, and carried forward for eight years if the return is filed on time', correct: true, why: 'The carry-forward is the reason a crash year rewards paperwork: the loss becomes an asset that offsets gains in the years that follow.' },
          { text: 'It reduces your salary income in the same year', why: 'A capital loss cannot be set off against salary income. It is matched against capital gains.' },
          { text: 'It can be carried forward forever, whatever the filing position', why: 'The carry-forward depends on filing the return within the time allowed, which is the condition people most often lose.' },
        ],
      },
    ],
  },

  'l5-094': {
    id: 'l5-094',
    title: 'Recession',
    subtitle: 'A recession reaches a household through its fixed costs, not through the news.',
    minutes: 11,
    takeaway: 'The two things a household controls are how much of its spending is fixed and how many months it can coast; everything else about a recession is weather.',
    blocks: [
      scene('recession-map', 'How a slowdown travels from demand to a household, and the short list of things the household controls.'),
      { kind: 'p', text: 'A recession is not an event that arrives; it is a chain that travels. Demand falls, orders are cut, hiring freezes and then jobs go, incomes wobble, and the fixed costs stay exactly where they were. The last link is the one that hurts, and it explains why two households with the same income experience the same recession so differently: one is committed to 70% of its income in rent, EMIs and fees, and the other to 40%. The first has no room to adjust, so it adjusts by borrowing.' },
      { kind: 'p', text: 'The policy side of a recession is largely out of reach. The central bank moves the policy rate to influence demand and inflation — the framework targets consumer price inflation of 4% with a band of two percentage points either way — and those decisions reach a household slowly and unevenly. What reaches a household quickly is the direction of rates on new borrowing and on deposits, the hiring plans of its own employer, and the pricing of its own work.' },
      { kind: 'p', text: 'So the plan is a defensive one, made while things are fine. Keep the emergency fund at the number the income risk deserves rather than the number that feels comfortable: six months for a stable salaried income, nine where part of the pay is variable, twelve where a single income supports the household. Reduce the fixed share of spending where possible, because fixed costs are the part a recession cannot negotiate. And continue investing, at a smaller amount if necessary, since a downturn is the period in which the units being bought are cheapest.' },

      { kind: 'h', text: 'The numbers that decide how a recession feels' },
      {
        kind: 'table',
        caption: 'What to measure, what to aim for, and why',
        headers: ['Measure', 'Aim for', 'Why it matters'],
        rows: [
          ['Fixed cost ratio', 'Under half of monthly income', 'It is the part of spending that cannot be reduced quickly'],
          ['Months of cover', 'Six, nine or twelve by income risk', 'It is the length of the search a household can afford'],
          ['Income concentration', 'More than one source where possible', 'A single income is a single point of failure'],
          ['Debt schedule', 'No new borrowing, and a known repayment date', 'A downturn is the worst time to add a fixed obligation'],
          ['Investment plan', 'Automatic, and reduced rather than stopped', 'Falls are where the units are cheapest'],
        ],
      },
      l5Rule(
        'What policy can and cannot do for a household',
        'The RBI\u2019s monetary policy framework targets consumer price inflation of 4%, with a tolerance band of two percentage points on either side, and the policy repo rate is the main instrument used to steer it. Changes in that rate reach a household through the interest on new loans, the interest on deposits, and the exchange rate, which is why a falling rate reduces a floating-rate EMI and a rising one increases it. The framework does not target employment, and no policy setting is a promise about any individual\u2019s job. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'What to change, and what to leave alone' },
      { kind: 'p', text: 'The instinct in a slowdown is to do something visible, and the visible things are usually the wrong ones: stopping the monthly investment, moving the long-term portfolio into cash, taking a loan to preserve a lifestyle, or postponing the health premium. The invisible things are the ones that work: keeping the fixed costs under half of income, keeping cover in force, keeping the monthly investment running at a reduced amount, and maintaining the skills and the network that make the next income arrive sooner. A recession is not the time to review the strategy; it is the time to have already reviewed the fixed costs.' },
      sim('l5-recession-adjuster', 'Measure the fixed costs against the income risk, then make the defensive adjustment in the order that matters.'),
      l5Illustrative('The income, the spending and the emergency fund in this lab are invented for practice. The framework described above — an inflation target of 4% with a band of two percentage points either way, and the policy repo rate as the main instrument — was verified on 15 October 2026 and is linked below.'),

      { kind: 'h', text: 'Do these seven things' },
      { kind: 'list', ordered: true, items: [
        'Write down the fixed costs as a share of monthly income, and treat anything above half as the first thing to fix.',
        'Set the emergency fund by income risk: six months, nine, or twelve where one income supports everyone.',
        'Reduce the monthly investment if necessary, but do not stop it.',
        'Avoid new borrowing in a slowdown, especially against an asset whose price is falling.',
        'Keep health and term cover in force; a lapse in a downturn is expensive to reverse.',
        'Keep the allocation where the goal says it should be, rather than moving to cash on the news.',
        'Treat the downturn as the period for skills and network, since those are what shorten the next gap.',
      ] },
      { kind: 'p', text: 'A recession is a reminder that a personal plan has two halves: the part that invests money and the part that makes sure there will be money to invest. Households that spend their good years on the first half and ignore the second discover, in the downturn, that they were never as safe as the portfolio suggested.' },
      { kind: 'terms', items: [
        { term: 'Recession', meaning: 'A sustained fall in economic activity, which reaches a household as income risk and fixed costs.' },
        { term: 'Fixed cost ratio', meaning: 'Rent, EMIs, fees and other unavoidable spending as a share of monthly income.' },
        { term: 'Repo rate', meaning: 'The rate at which the central bank lends to banks, and the main lever of monetary policy.' },
        { term: 'Inflation target', meaning: 'The 4% consumer-price target with a band of two percentage points either way.' },
        { term: 'Defensive allocation', meaning: 'Holding a larger share in safer assets because the income, rather than the goal, is the risk.' },
      ] },
      l5Sources(['rbi', 'sebi'], [
        'The monetary policy framework, the inflation target and the band around it, and the transmission of the policy rate to lending and deposit rates',
        'The obligations of market intermediaries in a downturn, and the investor-protection material on staying invested through market cycles',
      ]),
    ],
    quiz: [
      {
        q: 'Two households earn the same and one has a fixed cost ratio of 70%. Why is that household more exposed to a recession?',
        options: [
          { text: 'Because it spends more on discretionary items', why: 'It is the opposite: a low discretionary share means there is little to cut. Discretionary spending is the flexible part.' },
          { text: 'Because the unavoidable part of its spending cannot be reduced when income falls', correct: true, why: 'Fixed costs are what turns a small income fall into a deficit. A household at 40% can absorb a cut that a household at 70% can only borrow against.' },
          { text: 'Because its taxes are higher', why: 'Tax does not depend on whether spending is fixed or discretionary.' },
          { text: 'It is not more exposed; total spending is what matters', why: 'The composition is what matters, because the response to falling income is to cut spending, and a fixed obligation cannot be cut.' },
        ],
      },
      {
        q: 'What is the policy rate for, in one sentence?',
        options: [
          { text: 'To guarantee employment during a downturn', why: 'The framework targets inflation. Employment is not the target, and no policy rate is a promise about anybody\u2019s job.' },
          { text: 'To steer inflation towards 4% within a band of two percentage points either way', correct: true, why: 'That is the mandate, and it reaches a household indirectly: through the interest on new loans, on deposits, and through the exchange rate.' },
          { text: 'To set the interest rate on every loan and deposit', why: 'Policy sets the cost of money at the margin; individual rates are set by lenders, and floating rates follow the benchmark rather than the policy rate directly.' },
          { text: 'To keep the stock market above its previous high', why: 'No central bank has that as a target, and the framework here is explicit about price stability.' },
        ],
      },
      {
        q: 'A downturn arrives and the household must choose one thing to cut. Which does the plan refuse to touch?',
        options: [
          { text: 'The monthly investment, reduced rather than stopped', why: 'Reducing it is acceptable. Stopping it entirely means buying nothing while units are cheapest.' },
          { text: 'Health and term cover', correct: true, why: 'Cover is the cheapest protection a household has, and a lapse in a downturn is both risky and expensive to reverse. The crisis is exactly when cover is needed most.' },
          { text: 'The discretionary part of the budget', why: 'This is the natural first cut, and it should be made deliberately rather than avoided.' },
          { text: 'The optional subscriptions and memberships', why: 'These are the easiest cuts available, and the plan makes them first.' },
        ],
      },
    ],
  },

  'l5-095': {
    id: 'l5-095',
    title: 'Debt Crisis',
    subtitle: 'Several debts at once is a sorting problem, and the sort is by rate and by what happens if you ignore one.',
    minutes: 12,
    takeaway: 'Sort by rate and by consequence rather than by the size of the instalment, put every spare rupee at one debt at a time, and talk to the lender before the due date so the repair stays shorter than the damage.',
    blocks: [
      scene('debt-triage', 'Debts sorted by rate and by what happens if they are ignored, and the action for each.'),
      { kind: 'p', text: 'A debt crisis rarely arrives as a single loan. It arrives as a card balance, a personal loan taken to clear the card, a vehicle loan and a home loan, none of which is individually unmanageable and all of which together exceed the household\u2019s capacity. The response that makes matters worse is to spread the available money evenly across all four, because a debt at 40% a year grows faster than an equal payment reduces it. The response that works is to sort the debts and then attack them in an order.' },
      { kind: 'p', text: 'The sort has two columns. The first is the rate, which decides what the debt costs. The second is the consequence, which decides what happens if the debt is ignored, and it matters just as much: a secured loan is attached to an asset the household needs, and ignoring it risks the asset, while an unsecured loan at the same rate merely damages the record. The practical order is that nothing secured is allowed to fall behind; the highest-rate unsecured debt gets everything spare; the rest continue on their scheduled payments.' },
      { kind: 'p', text: 'The last part is the conversation, and it should happen before the due date rather than after. Lenders have worked-out processes for a borrower who says in advance that a payment will be short, and those processes are different from the ones that apply to an account that has gone into default. A settlement that pays less than the amount owed is recorded as settled and hurts future borrowing for years, so it belongs at the end of the list rather than at the beginning. A restructuring that keeps the account regular is almost always better than a settlement that closes it at a discount.' },

      { kind: 'h', text: 'How the order is decided' },
      {
        kind: 'table',
        caption: 'The debts most households carry, and how each one behaves',
        headers: ['Debt', 'Typical rate', 'What happens if it is ignored'],
        rows: [
          ['Credit card', 'The highest available, often four times a secured loan', 'Reported quickly, and the record is visible to every lender'],
          ['Personal loan', 'Unsecured, and priced for that', 'Recovery begins early, and the account is classified quickly'],
          ['Pay-later and small loans', 'High, with penalties that compound', 'Small balances, large consequences for the record'],
          ['Vehicle loan', 'Lower, and secured on the vehicle', 'The vehicle is at risk, so it is never allowed to fall behind'],
          ['Home loan', 'The lowest rate and the largest sum', 'Enforcement begins with a written demand giving 60 days'],
        ],
      },
      l5Rule(
        'What a lender can and cannot do',
        'Where a secured loan is in default, a secured creditor\u2019s enforcement under the SARFAESI Act, 2002 begins with a written demand notice that gives the borrower 60 days to pay or to raise objections, after which the security may be enforced. The RBI requires recovery agents to operate within restricted hours, to communicate in a language the borrower understands, and prohibits threats and harassment; a borrower whose lender breaches those rules can complain under the RBI Ombudsman scheme at no cost. A loan account overdue for more than 90 days is classified as a non-performing asset, and a settlement for less than the amount owed is reported as settled, which affects future borrowing long after the amount is forgotten. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'What rebuilding looks like' },
      { kind: 'p', text: 'The recovery is slower than the fall, and it is almost entirely mechanical. Once the debts are serviced rather than growing, the record improves with time and with new evidence: a card used lightly and paid in full, a small loan repaid on schedule, no fresh applications in the months that follow. Households that rebuild quickly are the ones that stopped applying for credit while they did it, because each application leaves an enquiry on the record and every enquiry looks like the behaviour that caused the problem.' },
      sim('l5-debt-triage', 'Load four debts, choose an order, and see what the order is worth in interest over twelve months.'),
      l5Illustrative('The balances, the rates and the extra payment in this lab are invented for practice. The rules quoted above — the 60-day written demand under section 13(2) of the SARFAESI Act, 2002, the RBI\u2019s restrictions on recovery agents, the free Ombudsman route for a complaint, and the classification of an account overdue beyond 90 days as a non-performing asset — were verified on 15 October 2026 and are linked below.'),

      { kind: 'h', text: 'Do these seven things' },
      { kind: 'list', ordered: true, items: [
        'List every debt with its balance, its rate and whether it is secured, before deciding anything.',
        'Write down the yearly interest on each: that is the price of waiting, and it is usually shocking.',
        'Keep every secured loan current, whatever the rate, because the asset is the household\u2019s floor.',
        'Direct the spare money at one debt at a time, starting with the highest rate among the unsecured ones.',
        'Tell the lender before the due date, and ask for a restructure in writing rather than accepting a settlement.',
        'Avoid any new borrowing while the debts are being cleared, including a balance transfer that does not reduce the total.',
        'Check the credit report while fixing it, and dispute anything that is not yours.',
      ] },
      { kind: 'p', text: 'A debt crisis is unpleasant and rarely catastrophic, provided the order is right and the lenders are spoken to early. The households that emerge worst are not the ones with the largest balances; they are the ones that spread their payments evenly, hid from the lenders until the accounts were classified, and settled at the first offer because it ended the calls.' },
      { kind: 'terms', items: [
        { term: 'Avalanche', meaning: 'Paying the highest-rate debt first, which minimises the interest paid.' },
        { term: 'Snowball', meaning: 'Paying the smallest balance first, which is slower on interest and better for resolve.' },
        { term: 'Restructuring', meaning: 'Revised repayment terms agreed with a lender, with the account staying regular.' },
        { term: 'Settlement', meaning: 'Paying less than the amount owed, recorded as settled and damaging to future borrowing.' },
        { term: 'Minimum due', meaning: 'The smallest payment a card will accept, calculated to keep the balance growing.' },
      ] },
      l5Sources(['rbi', 'cibil'], [
        'The rules on default and asset classification, recovery agents, the Ombudsman scheme for a complaint against a lender, and the SARFAESI process for a secured loan',
        'How a settlement, a restructuring and a missed payment are each reported on a credit report, and how long each stays on it',
      ]),
    ],
    quiz: [
      {
        q: 'You have ₹15,000 spare a month and four debts. Which gets the money first?',
        options: [
          { text: 'The one with the largest balance, because it feels like progress', why: 'Size is the least useful criterion. A large balance at a low rate is not the debt that is growing fastest.' },
          { text: 'The highest-rate unsecured debt, while every secured loan is kept current', correct: true, why: 'Rate decides the cost and the security decides the consequence. Clearing the most expensive unsecured debt while keeping the secured ones current minimises both.' },
          { text: 'An equal share to all four, since fairness keeps you motivated', why: 'Equal payments are the expensive option: the high-rate debt keeps compounding faster than the equal share reduces it.' },
          { text: 'The one whose lender has called most recently', why: 'Pressure is a schedule, not a priority. Sorting by rate and security is what reduces the total cost.' },
        ],
      },
      {
        q: 'You cannot pay next month\u2019s home-loan instalment. What should you do first?',
        options: [
          { text: 'Wait and see whether the situation improves', why: 'Waiting past the due date moves the account towards classification and puts the lender\u2019s process in charge of the timing.' },
          { text: 'Tell the lender before the due date and ask for revised terms in writing', correct: true, why: 'A lender dealing with a borrower who has a plan is managing a temporary problem. The same request after 90 days is a recovery file.' },
          { text: 'Stop paying the other loans instead', why: 'That spreads the default rather than managing it, and it puts the vehicle and the record at risk as well.' },
          { text: 'Send whatever you can and say nothing', why: 'A part payment is better than nothing and still leaves the account short. The conversation is what changes the classification.' },
        ],
      },
      {
        q: 'A lender offers to accept 70% of your card balance and close the account. What is the catch?',
        options: [
          { text: 'None: paying less than you owe is always good news', why: 'It ends the calls and leaves a mark: the account is reported as settled, not closed as agreed, and lenders act on that for years.' },
          { text: 'The account is reported as settled, which affects future borrowing for a long time', correct: true, why: 'A settlement at a discount is visible to every lender, and it usually outweighs the amount written off. A restructure that keeps the account regular is the better version of the same conversation.' },
          { text: 'The written-off amount is taxable as income', why: 'For an individual, the forgiveness of a consumer debt is not treated as taxable income in the way the offer implies; the credit-report consequence is the real cost.' },
          { text: 'The rate on the remaining balance rises', why: 'A settlement closes the account rather than repricing it. The lasting cost is on the record.' },
        ],
      },
    ],
  },

  'l5-096': {
    id: 'l5-096',
    title: 'Fraud Response',
    subtitle: 'The first hour decides the outcome. Everything after it is correspondence.',
    minutes: 12,
    takeaway: 'Freeze, report and preserve: liability is decided by when you reported, so the minutes before the paperwork matter more than the paperwork.',
    blocks: [
      scene('golden-hour', 'The first hour of a fraud, and the ladder that decides how much of the loss is yours.'),
      { kind: 'p', text: 'Money leaves an account in seconds and is layered onward in minutes. The response therefore has three parts, and they happen in parallel rather than in order: freeze the instrument so nothing more can leave, report it so that a reference number exists on both the bank side and the police side, and preserve the evidence so that the claim can be proved later. Households that lose money to fraud usually did none of the three within the first hour, and by the next morning the money has moved twice.' },
      { kind: 'p', text: 'The important part is that liability is not a judgement about how the customer behaved, with the exception of a deliberate act. The rules set out a ladder based on the speed of the report: nothing owed if the unauthorised transaction is reported within three working days, a capped amount if it is reported between four and seven working days, and whatever the bank’s board-approved policy says after that. Where the deficiency was the bank’s own, the customer owes nothing whenever the report is made.' },
      { kind: 'p', text: 'The bank also has obligations that run the other way. It must send an alert for every transaction, provide a channel to report unauthorised activity that does not depend on the branch being open, and credit the amount provisionally while it investigates. Knowing those duties changes the conversation at the counter from a request for a favour into a reference to the rules.' },

      { kind: 'h', text: 'The golden hour, and why each step' },
      {
        kind: 'table',
        caption: 'What to do, in the order it should happen',
        headers: ['Step', 'What it achieves', 'What happens if it is skipped'],
        rows: [
          ['Freeze the card, the account or the UPI handle', 'Stops the loss from growing, and sometimes catches the money before it moves', 'Drains whatever else is attached to the same instrument'],
          ['Call the bank and keep the reference', 'Starts the clock that the liability rules measure', 'The liability is assessed from a later date, or not at all'],
          ['File on the national cybercrime portal', 'Lets the authorities freeze the beneficiary account', 'The money is layered beyond recovery'],
          ['Preserve screenshots, SMS and message IDs', 'Turns your account of events into evidence', 'The app clears the chat and the record is your memory'],
        ],
      },
      l5Rule(
        'Where the liability sits after a fraud',
        'For an unauthorised electronic transaction caused by a third party, the customer’s liability is zero if it is reported within three working days of receiving the communication from the bank, is limited to the amount in the regulator’s table if reported between four and seven working days, and is determined by the bank’s board-approved policy if reported later. Where the loss arises from a deficiency on the bank’s part, the customer’s liability is zero regardless of when it is reported, and the bank must credit the amount to the account provisionally within ten working days of the complaint. A complaint must be acknowledged with a reference, and a customer whose complaint is not resolved can escalate it under the RBI Ombudsman scheme. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'What does not help' },
      { kind: 'p', text: 'Several natural instincts actively damage the case. Messaging the person who took the money, or paying a charge they demand to release the balance, extends the fraud rather than reversing it. Waiting for the app’s customer support to reply consumes the working days on which the liability ladder depends. Deleting the messages to tidy up removes the evidence. And taking the bank’s first answer as final, when the rules require a provisional credit and an acknowledgement, leaves money on the table that a written escalation would have recovered.' },
      sim('l5-fraud-response-drill', 'Report a fraud on different days, with and without the containment steps, and watch which rung of the liability ladder you land on.'),
      l5Illustrative('The amounts and the scenario in this lab are invented for practice. The rules quoted above — zero liability within three working days, a capped amount between four and seven working days, zero liability whenever the bank is at fault, provisional credit within ten working days of the complaint, and the Ombudsman route for escalation — were verified on 15 October 2026 and are linked below.'),

      { kind: 'h', text: 'Do these seven things' },
      { kind: 'list', ordered: true, items: [
        'Freeze the card or the account first, from the app if the call centre is queuing.',
        'Call the bank on the number printed on the card, and write down the complaint reference.',
        'File on the national cybercrime portal, and keep the acknowledgement.',
        'Screenshot the transaction, the messages and the caller’s number before anything is cleared.',
        'Never pay a fee or a charge to release money that a fraudster claims is held.',
        'Put the complaint in writing within the working days the liability rules measure, whatever the call centre says.',
        'If the bank refuses or delays, escalate under the Ombudsman scheme rather than arguing again at the branch.',
      ] },
      { kind: 'p', text: 'Nobody responds well to losing money unexpectedly, which is why the response should be rehearsed as a list rather than improvised. The list is short, it is the same for a card, a wallet and a bank account, and the only part of it that requires judgement is the decision to report immediately rather than to investigate first.' },
      { kind: 'terms', items: [
        { term: 'Unauthorised transaction', meaning: 'A transaction not carried out or authorised by the customer, which triggers the liability rules.' },
        { term: 'Golden hour', meaning: 'The first hours after a fraud, in which the money may still be recoverable.' },
        { term: 'Provisional credit', meaning: 'The amount the bank must put back in the account while it investigates a reported fraud.' },
        { term: 'Chargeback', meaning: 'A reversal through the card network when a transaction is disputed.' },
        { term: 'Mule account', meaning: 'An account used to receive fraud money and pass it on, often one belonging to somebody recruited for a fee.' },
      ] },
      l5Sources(['cyberCrime', 'rbi', 'npci'], [
        'Filing a complaint on the national cybercrime portal, and what the reporting process does with the beneficiary account',
        'The rules limiting a customer’s liability for an unauthorised electronic transaction, the duty to send alerts and the provisional credit owed',
        'The dispute process for a UPI transaction, including what can be done while the money is still in the beneficiary account',
      ]),
    ],
    quiz: [
      {
        q: 'A fraud of ₹80,000 on your card is reported on the fourth working day, and the account is a normal one with SMS alerts. What is your liability?',
        options: [
          { text: 'Nothing, because the fraud was not your fault', why: 'Zero liability within three working days is the top rung of the ladder. Reporting on the fourth day moves you down a rung, however blameless you were.' },
          { text: 'Capped at ₹25,000, because the report came between four and seven working days', correct: true, why: 'The table sets a ceiling that applies between four and seven working days, and it is ₹25,000 for a normal account. Had the account been one with limited features, the cap would be lower.' },
          { text: 'The whole amount, since the report was late', why: 'The whole amount applies beyond seven working days, when the bank’s own policy governs. Between four and seven days the loss is capped.' },
          { text: 'It depends on whether the bank believes your explanation', why: 'The ladder is objective and turns on the date of the report, not on the quality of the explanation.' },
        ],
      },
      {
        q: 'The unauthorised debit happened because the bank’s system leaked your card details, and you reported it a month later. What is your liability?',
        options: [
          { text: 'The full amount, because the report was outside seven working days', why: 'The seven-day ladder governs third-party frauds. Where the loss arises from a deficiency on the bank’s part, the customer’s liability is zero regardless of when it is reported.' },
          { text: 'Zero, because the loss arose from a deficiency on the bank’s part', correct: true, why: 'A bank cannot shift the cost of its own failure onto the customer, and the liability rules say so explicitly.' },
          { text: 'Half, as a shared responsibility', why: 'There is no shared-liability rung for a bank deficiency. The liability is zero.' },
          { text: 'Nothing, as long as the bank admits the leak in writing', why: 'The admission is helpful evidence. The liability does not depend on it — it depends on where the deficiency lay.' },
        ],
      },
      {
        q: 'The fraudster offers to return your money if you pay a ₹5,000 processing charge. What should you do?',
        options: [
          { text: 'Pay it, since it is small next to the amount lost', why: 'This is the second stage of the same fraud, and the charge will be followed by another one. Money already taken does not come back through a payment.' },
          { text: 'Refuse, report it, and let the bank and the portal work the recovery', correct: true, why: 'Recovery happens through a frozen beneficiary account, not through the person who took the money. Any payment to them restarts the cycle.' },
          { text: 'Negotiate a smaller charge', why: 'Negotiating keeps the conversation alive and buys time for the money to move further away.' },
          { text: 'Ask them for proof of the balance first', why: 'A screenshot proves nothing, and the exchange delays the report on which your liability depends.' },
        ],
      },
    ],
  },

  'l5-097': {
    id: 'l5-097',
    title: 'Account Compromise',
    subtitle: 'Contain the loss, recover the account, and then audit what survives a new card.',
    minutes: 11,
    takeaway: 'Block the instrument, sign out every session, change credentials from a clean device, and then audit the mandates, the autopay, the registered email and the linked number — because what survives a new card is what compromises the account again.',
    blocks: [
      scene('compromise-recovery', 'Five stages of recovery, and the third one that gets skipped.'),
      { kind: 'p', text: 'An account is rarely compromised by a broken password. It is compromised by a password that was reused on a site that leaked, by a page that looked like the bank’s login, by an app granted permission to read messages, by a SIM that was swapped with forged documents, or by a screen-sharing session that began as technical support. The common thread is that the attacker obtained a working credential or a working session, and the household discovered it after money moved.' },
      { kind: 'p', text: 'The recovery has a sequence, and it is not the intuitive one. Blocking every instrument comes first. Signing out every other session comes second, because a live session does not need your password again. Changing credentials comes third, from a device that the attacker has never touched. Re-establishing the account, including the re-KYC the bank will demand once it has frozen the account, completes the recovery and is usually the step that takes longest.' },
      { kind: 'p', text: 'Then comes the audit, and it is what separates a one-off incident from a repeat. Money leaves an account through standing mandates, e-mandates and autopay arrangements that follow a new card number. An attacker keeps access through the registered email address, through a forwarding rule that sends a silent copy of every statement, and through a mobile number that can be swapped. Households that skip the audit replace the card, keep the forwarding rule and are compromised again within months.' },

      { kind: 'h', text: 'What survives a new card, and what to check' },
      {
        kind: 'table',
        caption: 'The linked services people forget to audit',
        headers: ['What it is', 'How it is abused', 'What to do'],
        rows: [
          ['Standing mandates and e-mandates', 'Pulls money monthly without a fresh approval', 'List them at the bank and revoke what you do not recognise'],
          ['Autopay and subscriptions', 'Continues on a new card number in most cases', 'Cancel at the merchant, not only at the bank'],
          ['Registered email address', 'Reset links and alerts are delivered there', 'Change the password, and check the recovery address'],
          ['Forwarding and filter rules', 'A silent copy of every statement, sent onward', 'Delete every rule you did not create yourself'],
          ['Linked mobile number', 'A swapped SIM receives every OTP', 'Confirm the number, and use a locked or eSIM connection where possible'],
        ],
      },
      l5Rule(
        'What the bank owes you while an account is compromised',
        'A customer’s liability for an unauthorised electronic transaction is zero where the loss arises from a deficiency on the bank’s part, and limited to the amounts in the regulator’s table for a third-party fraud, depending on how quickly it is reported; the bank must credit the amount provisionally within ten working days of the complaint. Banks are required to send an alert for every transaction, and the alert must reach the customer’s registered contact details, which is why a stale mobile number is a security risk rather than an inconvenience. Reporting channels must be available without the branch being open. A complaint that is not resolved can be escalated under the RBI Ombudsman scheme at no cost. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'Keeping it from happening twice' },
      { kind: 'p', text: 'The habits that prevent a repeat are unglamorous and few. Use a different password on the bank and the email that can reset it, and let a password manager hold them. Turn on transaction alerts and read them. Grant an app no more permissions than the function it performs needs, and delete the app that insists on reading messages. Lock the Aadhaar biometrics when they are not being used for a KYC, since a biometric cannot be changed once it is on a forged document. And treat any inbound call about your account as a cold call, whoever it claims to be.' },
      sim('l5-account-recovery', 'Contain a compromise, then audit each linked service and see how many are still live.'),
      l5Illustrative('The amounts and timings in this lab are invented for practice. The rules quoted above — zero liability where the loss arises from a bank deficiency, the provisional credit owed, the requirement to alert the customer on registered contact details, and the Ombudsman route — were verified on 15 October 2026 and are linked below.'),

      { kind: 'h', text: 'Do these seven things' },
      { kind: 'list', ordered: true, items: [
        'Block the card, the UPI handle and the account before doing anything else.',
        'Sign out every other session, and remove the devices you do not recognise.',
        'Change the bank password and the email password, in that order, from a clean device.',
        'Complete the re-KYC the bank asks for, and ask what caused the freeze in writing.',
        'Audit the mandates, the autopay arrangements, the registered email and the forwarding rules.',
        'Confirm the registered mobile number, and lock the Aadhaar biometrics when not in use.',
        'Read one bank statement line by line, once a month, which is how most compromises are found.',
      ] },
      { kind: 'p', text: 'The reason the audit matters more than the recovery is that a compromise is a channel rather than an event. Closing the channel takes ten minutes of tidying up a list, and leaving it open is what makes the second incident inevitable.' },
      { kind: 'terms', items: [
        { term: 'e-Mandate', meaning: 'A standing authorisation to debit an account or card, which continues until it is revoked.' },
        { term: 'Session', meaning: 'A live signed-in connection that does not require the password again while it lasts.' },
        { term: 'SIM swap', meaning: 'A fraudulent replacement of a mobile connection so that OTPs are delivered to another handset.' },
        { term: 'Forwarding rule', meaning: 'A mailbox rule that silently copies incoming mail elsewhere.' },
        { term: 'Re-KYC', meaning: 'Repeating the identification process after an account is frozen or flagged.' },
      ] },
      l5Sources(['certin', 'rbi', 'npci'], [
        'The national cyber-security advisories on phishing, malicious applications, session theft and the hardening steps recommended after an incident',
        'The rules on customer liability for an unauthorised transaction, the duty to alert the customer, and the Ombudsman scheme',
        'The rules on UPI and card mandates, and how a mandate is revoked rather than merely paused',
      ]),
    ],
    quiz: [
      {
        q: 'You discover a compromise and the attacker still has a live session on your bank app. What must happen before you change the password?',
        options: [
          { text: 'Nothing: changing the password is the first step', why: 'A live session continues to work while a password is changed, so the attacker keeps access and the household believes the problem is solved.' },
          { text: 'Block the instruments and sign out every other session', correct: true, why: 'Containment comes before credentials. Blocking stops money leaving, and signing out the sessions removes the access that a password change does not.' },
          { text: 'File the police complaint first', why: 'The complaint matters, and it can be filed in parallel. What must not wait is the containment that stops the loss growing.' },
          { text: 'Ask the bank to close the account permanently', why: 'Closing the account is a last resort after the audit, and it takes days. Blocking and signing out take minutes.' },
        ],
      },
      {
        q: 'Your card is replaced with a new number after a compromise. Which payment keeps working?',
        options: [
          { text: 'None: a new card number stops everything', why: 'This assumption is the reason people are compromised twice. Several kinds of recurring payment continue against a new number.' },
          { text: 'Standing mandates and autopay arrangements already registered', correct: true, why: 'Mandates are registered against the account or the mandate reference rather than the card number, so they continue until they are revoked. Revoke at the bank, and cancel at the merchant.' },
          { text: 'Only UPI transactions, since they are account-based', why: 'UPI is account-based, and the answer is about what continues automatically after a card is replaced — the mandates.' },
          { text: 'Only transactions made through the bank’s own app', why: 'The channel is not what decides it. The test is whether a mandate exists.' },
        ],
      },
      {
        q: 'Your phone loses signal for several hours and returns with no messages. Why does that matter financially?',
        options: [
          { text: 'It does not: a network problem is a network problem', why: 'Losing signal is also what a SIM swap looks like from the handset, and a swapped SIM receives every OTP intended for the account.' },
          { text: 'It can be a SIM swap, which hands your one-time passwords to another handset', correct: true, why: 'The one-time password is the last line of defence on most accounts, and it follows the number. A signal outage followed by missing messages is a reason to call the operator and the bank the same day.' },
          { text: 'It means the bank’s system is down', why: 'The bank and the operator are independent. A signal problem on one handset is not a bank outage.' },
          { text: 'It only matters if you were expecting a transaction', why: 'Waiting to notice a transaction is how the OTP is used before the household discovers the swap.' },
        ],
      },
    ],
  },

  'l5-098': {
    id: 'l5-098',
    title: 'Identity Theft',
    subtitle: 'An identity is spent somewhere, and every place it is spent leaves a trace you can read.',
    minutes: 12,
    takeaway: 'Check the credit report for enquiries and accounts you do not recognise, dispute with the lender in writing rather than only the bureau, and lock the biometrics so the next attempt fails.',
    blocks: [
      scene('identity-trail', 'Where a stolen identity gets spent, and the trace each place leaves behind.'),
      { kind: 'p', text: 'Identity theft is not one crime; it is a series of attempts to use a name, and each attempt needs a document, a number or a signature. A loan needs an application and a credit enquiry. A card needs an address. A SIM needs an identity document and a photograph. A bank account needs a KYC record. Each of those leaves a trace somewhere, and the traces are readable before any money is lost, which is what makes this one of the few financial risks a household can detect early rather than only respond to.' },
      { kind: 'p', text: 'The cheapest alarm is the credit report. A full report, including the score, is free once a year from each credit information company, and it lists every open account, every enquiry by a lender, and the addresses and phone numbers associated with the file. The three things to look for are an enquiry you never triggered, an account you never opened, and a personal detail that is not yours. Reading it for the first time is usually uneventful, which is exactly the baseline that makes the next reading useful.' },
      { kind: 'p', text: 'Repair is where people lose time. The credit bureau is a postbox: it holds what the lenders report, and it can only pass a dispute to the lender that created the entry. So the complaint goes to both, in writing, with the reference number from a police or portal complaint attached. An account that is under dispute stays on the report until the lender corrects it, which is why the correction has to happen at the source and why the paperwork has to survive the wait.' },

      { kind: 'h', text: 'Where misuse shows up, and what to do about it' },
      {
        kind: 'table',
        caption: 'Each kind of misuse and the response that fixes it',
        headers: ['Where it shows', 'What you would notice', 'What to do'],
        rows: [
          ['A loan in your name', 'An enquiry and a new account on the credit report', 'Dispute with the bureau and the lender, and file a complaint with a reference number'],
          ['A card or a pay-later account', 'An active account you do not recognise', 'Dispute in writing, and ask the lender for the application it holds'],
          ['A new mobile connection', 'Your own number losing signal, or a KYC record you never gave', 'Inform the operator, and check the number of linked accounts'],
          ['A bank or wallet account', 'A KYC record or a welcome letter you never expected', 'Close it and keep the closure confirmation'],
          ['A tax record', 'An income entry or a notice you cannot explain', 'Check the tax portal and the PAN linkage, and report it'],
        ],
      },
      l5Rule(
        'The rights and the offences behind an identity repair',
        'A credit information company must provide a free full credit report, including the credit score, once a year to an individual, and must send an intimation every time the report is accessed and whenever the credit information is updated. Fraudulently using another person’s electronic signature, password or other unique identification feature is punishable under section 66C of the Information Technology Act, 2000 with imprisonment up to three years and a fine up to ₹1,00,000, and cheating by personation using a computer resource is punishable under section 66D with the same maximum. Aadhaar allows the biometrics to be locked and unlocked by the holder, which prevents a fresh authentication until it is unlocked. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'Hygiene, not paranoia' },
      { kind: 'p', text: 'The habits that make an identity expensive to misuse are few. Never share a one-time password, whoever is asking; no institution needs one. Give a copy of an identity document only where a copy is genuinely required, and note who took it. Check the credit report once a year, and after any incident, more often. Lock the biometrics when they are not being used. Keep the phone number and the email address on file current, because alerts and reset links go there. And treat the tax portal as part of the audit, since income reported against a PAN is found there before it is found anywhere else.' },
      sim('l5-identity-repair', 'Read a credit report that has something on it, and work the repair in the order that actually closes the entries.'),
      l5Illustrative('The findings and the actions in this lab are invented for practice. The rights and penalties quoted above — the free full credit report once a year from each credit information company, the intimation on every access and update, and the penalties under sections 66C and 66D of the Information Technology Act, 2000 — were verified on 15 October 2026 and are linked below.'),

      { kind: 'h', text: 'Do these seven things' },
      { kind: 'list', ordered: true, items: [
        'Take the free full credit report from each bureau once a year, and read the enquiries rather than only the score.',
        'Dispute anything you do not recognise, in writing, with the bureau and with the lender that reported it.',
        'File a police or cybercrime complaint and attach the reference to every dispute afterwards.',
        'Ask any lender that opened an account in your name for a copy of the application it holds.',
        'Lock the Aadhaar biometrics when they are not in use, and review where Aadhaar has been used.',
        'Check the tax portal and the PAN linkage for income that is not yours.',
        'Keep the registered mobile number and email address current, because that is where the alerts go.',
      ] },
      { kind: 'p', text: 'The reason to start with the credit report is that it converts an anxiety into a list. Most households that check the report find nothing, and the habit is what makes the year they find something a short piece of administration rather than a long dispute.' },
      { kind: 'terms', items: [
        { term: 'Credit information company', meaning: 'A bureau licensed to collect and hold repayment records, from which a full report is free once a year.' },
        { term: 'Hard enquiry', meaning: 'A lender checking a credit file after an application, which stays visible to other lenders.' },
        { term: 'Dispute', meaning: 'A written challenge to an entry, which the bureau passes to the lender that reported it.' },
        { term: 'KYC', meaning: 'The identification process an institution must complete, and which a thief attempts on forged papers.' },
        { term: 'Biometric lock', meaning: 'The Aadhaar setting that prevents authentication until the holder unlocks it.' },
      ] },
      l5Sources(['cibil', 'rbi', 'uidai'], [
        'How a credit report is read, what an enquiry and a settled account each mean, and the process for raising a dispute',
        'The requirement to provide a free full credit report once a year, and the intimations owed when a report is accessed or updated',
        'The Aadhaar facilities for locking and unlocking biometrics, and how authentication is carried out',
      ]),
    ],
    quiz: [
      {
        q: 'How often can you get a full credit report without paying for it?',
        options: [
          { text: 'Once a year, from each credit information company', correct: true, why: 'The free full report, including the score, is a right once a year from every bureau, which is why checking all of them occasionally is worthwhile — lenders report to any of them.' },
          { text: 'Once a year in total, from one bureau of your choice', why: 'The entitlement is per credit information company, not once for the country. That is what makes checking each of them useful.' },
          { text: 'Only after a complaint of fraud', why: 'A free report does not need a reason. It is available once a year to any individual on request.' },
          { text: 'Once every three years', why: 'The cycle is annual rather than triennial.' },
        ],
      },
      {
        q: 'An unknown loan appears on your report. Who actually has to correct it?',
        options: [
          { text: 'The bureau, since it holds the report', why: 'The bureau is a record-keeper. It can only pass the dispute to the lender that created the entry, which is why a complaint to the bureau alone can stall.' },
          { text: 'The lender that reported the entry, with the bureau passing the dispute on', correct: true, why: 'Corrections happen at the source. Write to both, and attach the reference number of a police or portal complaint, because a lender acts faster on a disputed account with a reference behind it.' },
          { text: 'The police, once the complaint is filed', why: 'The complaint creates the record that makes the repair possible; it does not remove the entry.' },
          { text: 'Nobody: it disappears after a year on its own', why: 'An entry under dispute stays on the report until it is corrected or drops off after the period it is allowed to remain.' },
        ],
      },
      {
        q: 'Someone uses your name to take a loan by forging a signature and a photograph. Which offence is that?',
        options: [
          { text: 'A civil dispute between you and the lender', why: 'It is a criminal matter as well, and the complaint reference is what makes the repair work.' },
          { text: 'Cheating by personation using a computer resource, punishable with imprisonment up to three years and a fine up to ₹1,00,000', correct: true, why: 'Section 66D of the Information Technology Act, 2000 covers exactly this, and section 66C covers the theft of the identity credentials themselves, with the same maximum punishment.' },
          { text: 'Only a banking offence, settled by the bank internally', why: 'The bank handles its own account. The offence against the person is separate and is reported to the police or the cybercrime portal.' },
          { text: 'Nothing, unless money was actually lost', why: 'Creating the false application is itself the offence, whether or not the attempt succeeded.' },
        ],
      },
    ],
  },

  'l5-099': {
    id: 'l5-099',
    title: 'Financial Scam Detection',
    subtitle: 'Three questions filter almost every offer: who regulates it, where does the money go, and what is the hurry.',
    minutes: 12,
    takeaway: 'Check the registration, follow the money to an account you can name, and treat a deadline as the reason to slow down rather than the reason to pay.',
    blocks: [
      scene('scam-triage', 'Three gates an offer has to pass, and the tell that fails each one.'),
      { kind: 'p', text: 'Most financial frauds are not clever. They are ordinary products with one component replaced: the seller is not registered, or the money does not go where the product says, or the decision is being forced into a window that does not exist. Those three things can be checked in ten minutes, and the check is the whole method. The reason it fails so often is not that people cannot do it but that the offer is designed to make the checking feel rude, slow or unnecessary.' },
      { kind: 'p', text: 'Start with regulation, because it is the cheapest thing to confirm. Advice on securities can only be given by an adviser or an analyst registered with the market regulator, whose number can be looked up on the regulator’s own site. Deposits can only be taken by entities permitted to take them. Insurance is sold by regulated intermediaries. A seller who cannot name a regulator, or names one whose register does not list them, has answered the question already.' },
      { kind: 'p', text: 'Then follow the money. A legitimate investment settles into an account in your own name at a regulated institution. It does not go to an individual’s account, a wallet, or a QR code shown on a screen. A deposit is received by an entity that is permitted and, for a non-banking company, rated for the purpose. This single test removes the largest family of cases, because the money is the part of the fraud that has to move, and it has to move to somebody.' },

      { kind: 'h', text: 'The three gates, and what fails them' },
      {
        kind: 'table',
        caption: 'The test to apply, and the tell that fails it',
        headers: ['Question', 'What a pass looks like', 'The tell'],
        rows: [
          ['Who regulates it, and by whom?', 'A registration number on a regulator’s own register', 'A certificate of their own making, or no regulator at all'],
          ['Where does the money go?', 'Your own account, at a regulated institution', 'An individual, a wallet, or a QR code in a chat'],
          ['What is the hurry?', 'No deadline, and questions welcomed', 'A window closing tonight, or secrecy as a condition'],
          ['What is the return?', 'Plausible against a government security of the same term', 'A fixed monthly percentage, promised as guaranteed'],
        ],
      },
      l5Rule(
        'What the law bans outright, and who may advise',
        'The Banning of Unregulated Deposit Schemes Act, 2019 bans the promotion, operation, advertisement and acceptance of deposits by any scheme that is not registered or permitted under another law, and carries imprisonment and heavy fines for doing so or for a fraudulent default. A prize chit or a money circulation scheme is banned by the Prize Chits and Money Circulation Schemes (Banning) Act, 1978, which covers the scheme in which the money of new entrants pays the earlier ones. Investment advice and research on securities require registration with SEBI as an investment adviser or a research analyst, and a complaint against a registered or unregistered person can be filed on SCORES. Suspicious schemes, unauthorised deposits and unauthorised foreign-exchange offers can be reported on the RBI’s Sachet portal, and fraud money can be reported on the national cybercrime portal. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'The mechanics of being rushed' },
      { kind: 'p', text: 'Pressure is not an accident of the pitch; it is the mechanism. A deadline removes the time in which the checks would be done. Secrecy prevents a second opinion, which is why the offer insists that nobody else should be told. A small early withdrawal that succeeds is a demonstration designed to buy a larger deposit. A refundable fee is a fee. And the guarantee of returns is the tell that survives every generation of the fraud, because no regulated product of any kind promises a fixed return with no risk attached.' },
      sim('l5-scam-inbox', 'Judge six offers on regulation, destination and hurry, and see which ones pass all three gates.'),
      l5Illustrative('The offers in this lab are invented for practice, though each is modelled on a category that exists. The rules quoted above — the ban on unregulated deposit schemes under the Banning of Unregulated Deposit Schemes Act, 2019, the ban on money circulation schemes under the 1978 Act, the registration requirement for investment advice and research, the SCORES complaint route and the Sachet reporting portal — were verified on 15 October 2026 and are linked below.'),

      { kind: 'h', text: 'Do these seven things' },
      { kind: 'list', ordered: true, items: [
        'Ask who regulates the seller, and look the registration up on the regulator’s own website rather than in a message.',
        'Follow the money: if it is not going to an account in your own name, stop.',
        'Compare the promised return with a government security of a similar term, and treat a fixed monthly promise as a red flag.',
        'Treat a deadline as a reason to slow down, never as a reason to pay.',
        'Refuse secrecy: anything that must not be discussed with family is designed to be undiscoverable.',
        'Never pay a fee to receive money, whatever it is called.',
        'Report it, even after declining: the portal and the Sachet route are how the next household is protected.',
      ] },
      { kind: 'p', text: 'The value of a method like this is that it does not require cynicism about everything, which is exhausting and inaccurate. It requires three questions and about ten minutes, applied to the offers that reach you unsolicited, at the moment they arrive rather than after the first payment.' },
      { kind: 'terms', items: [
        { term: 'Unregulated deposit', meaning: 'A deposit taken by an entity not permitted to take it, which is banned outright since 2019.' },
        { term: 'Money circulation scheme', meaning: 'A scheme in which returns to earlier participants are paid from the money of later ones, banned since 1978.' },
        { term: 'Investment adviser', meaning: 'A person registered with the market regulator to give advice on securities for a fee.' },
        { term: 'Sachet', meaning: 'The RBI portal on which an unauthorised deposit or investment scheme can be reported.' },
        { term: 'Guaranteed return', meaning: 'A promise of a fixed outcome with no risk, which no regulated product makes.' },
      ] },
      l5Sources(['rbi', 'rbiSachet', 'sebi', 'cyberCrime'], [
        'What a bank or a non-banking finance company may and may not do with public money, and the reporting route for an unauthorised scheme',
        'The portal for reporting an unauthorised deposit-taking or investment scheme, with the details the report asks for',
        'The registration requirement for investment advisers and research analysts, the register to check it on, and the SCORES complaint route',
        'Reporting financial fraud on the national cybercrime portal, including the helpline for a fraud that has just happened',
      ]),
    ],
    quiz: [
      {
        q: 'A company offers 3% a month on a deposit, guaranteed, with a closing date on Friday. What is the right response?',
        options: [
          { text: 'Invest a small amount first to test it', why: 'A small amount often returns a small profit by design, and it is the demonstration that buys the larger deposit. Testing it is part of the mechanism.' },
          { text: 'Reject it: the return is impossible to sustain and the deposit is banned if the entity is not permitted to take one', correct: true, why: '3% a month compounds to more than 40% a year, which no entity pays for money it could borrow at market rates. Taking the deposit without permission is itself an offence under the 2019 Act.' },
          { text: 'Ask for the company’s certificate, and invest if it looks official', why: 'A certificate is a picture until it is confirmed on a regulator’s own register. The confirmation, not the document, is the test.' },
          { text: 'Invest before Friday so as not to miss the rate', why: 'The deadline is the mechanism that prevents the checks. Its presence is a reason to refuse, not to hurry.' },
        ],
      },
      {
        q: 'An NBFC you have not heard of offers 11.5% on a deposit. What should you check before anything else?',
        options: [
          { text: 'Whether the rate is higher than a bank deposit', why: 'It almost certainly is: a company borrowing from the public pays more than a bank. That is the reason to check, not a reason to proceed.' },
          { text: 'Whether it is permitted to accept public deposits, and what rating the deposit carries', correct: true, why: 'Only some non-banking finance companies may accept public deposits, and a deposit has to carry a rating. Both are checkable, which makes this category the one where verification works and rejection is premature.' },
          { text: 'Whether the office looks established', why: 'Premises are inexpensive to rent and prove nothing about permission to take deposits.' },
          { text: 'Whether it is listed on a stock exchange', why: 'Being listed is not the same as being allowed to take public deposits, and unlisted entities that are permitted exist as well.' },
        ],
      },
      {
        q: 'A person in a chat group offers to double your trading capital in a month, and shows a screenshot of their account. What does the screenshot prove?',
        options: [
          { text: 'That the strategy works', why: 'A screenshot has no dates, no position size and no losing trades. It is a picture of a moment, and moments are selected.' },
          { text: 'Nothing: it is a picture, and the claim fails the first gate because nobody regulated is involved', correct: true, why: 'Advice and tips on securities can only come from someone registered with the market regulator, whose number can be looked up. A doubling in a month is also not a return any strategy produces repeatedly.' },
          { text: 'That the money is real', why: 'A balance shown on a screen can be fabricated, and in the platform frauds the balance is fabricated by the platform itself.' },
          { text: 'That the person is a registered adviser', why: 'Registration is a number that is checked on the regulator’s register, and no screenshot establishes it.' },
        ],
      },
    ],
  },

  'l5-100': {
    id: 'l5-100',
    title: 'Fake Gurus',
    subtitle: 'A teacher is paid by clients. A promoter is paid by the audience, and the incentive decides whose interest is served.',
    minutes: 12,
    takeaway: 'Check registration, read the incentive, and ask for a dated and complete record: one yes from the wrong column is a reason to look closer, and five is a reason to close the tab.',
    blocks: [
      scene('guru-credibility', 'The same five questions, answered by a teacher and by a promoter.'),
      { kind: 'p', text: 'Financial content sits on a spectrum from teaching to selling, and the two ends look alike on a screen. What separates them is not the confidence of the delivery or the size of the claims; it is whether the person is registered to advise, how they are paid, and whether their record can be checked by somebody other than themselves. Those three questions are answered by documents and registrations rather than by impressions, which is what makes them useful.' },
      { kind: 'p', text: 'Registration is the first check because it is public. Advice and research on securities require registration with the market regulator as an investment adviser or a research analyst, and the register is searchable. A registration number quoted in a video is worth nothing until it appears on that register; a number that does not exist is a fact about the person, and it is the kindest available warning. Regulated intermediaries have also been told not to associate with unregulated persons for investor education or advice, which is why a large platform can be a poor guide to whether the guest is registered.' },
      { kind: 'p', text: 'The second check is the incentive, and it explains behaviour that otherwise makes no sense. Fees from clients align advice with the client. Affiliate links, broker referrals, course sales, subscription groups and paid promotions align it with the audience: the more people who act, the more the promoter earns, whether or not the action is right. A disclosure of exactly how the money is made is the single most informative sentence in the video, and its absence is the answer.' },

      { kind: 'h', text: 'What can be verified, and how' },
      {
        kind: 'table',
        caption: 'The claims to check, and where each one is checked',
        headers: ['Claim', 'How it is checked', 'What a failure means'],
        rows: [
          ['Registration', 'Search the regulator’s register for the number', 'The advice is not permitted, whatever the credentials quoted'],
          ['Track record', 'Dated, complete and auditable, including the losses', 'Screenshots and deleted calls are not a record'],
          ['Incentive', 'A stated list of how they are paid', 'Silence usually means affiliate links and course sales'],
          ['Own positions', 'Disclosed before a recommendation, not after it', 'Undisclosed holdings are a conflict of interest'],
          ['Method', 'Falsifiable, with a stated condition under which it fails', 'A claim no outcome can disprove is a belief being sold'],
        ],
      },
      l5Rule(
        'Who may advise, and how to complain',
        'Advice and research on securities may only be provided by a person registered with SEBI as an investment adviser or a research analyst, and the registration is verifiable on the regulator’s website. A registered adviser or analyst has to disclose the terms of the engagement, including fees and the conflicts of interest that exist, and a registered research analyst has to state whether they or their relatives hold the securities they write about. A complaint about a registered or an unregistered person can be lodged on SCORES, and the regulator has separately directed regulated entities not to associate with unregulated persons for investor education or advice. Suspicious schemes can also be reported on the RBI’s Sachet portal. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'The screenshots that settle nothing' },
      { kind: 'p', text: 'A profit screenshot is not evidence of a method, for reasons that are structural rather than cynical. It has no dates, no position size and no losing trades; a person makes many calls and shows the ones that worked. A track record that is published loses its losing calls and keeps the winners. A paper-traded record is a simulation. And a recommendation that is never a sell is not a view about a market so much as a service to a company that benefits from attention. A record becomes evidence when it is dated, complete, and checkable by somebody who is not the person who produced it.' },
      sim('l5-guru-audit', 'Score a teacher against a promoter on registration, disclosure, track record and who pays the bills.'),
      l5Illustrative('The scenario in this lab is invented for practice. The rules quoted above — the registration requirement for investment advice and research, the disclosure obligations of a registered analyst, the SCORES complaint route, and the direction to regulated entities about unregulated persons — were verified on 15 October 2026 and are linked below.'),

      { kind: 'h', text: 'Do these seven things' },
      { kind: 'list', ordered: true, items: [
        'Look the registration number up on the regulator’s own register before acting on any recommendation.',
        'Find the sentence that explains how the person is paid, and treat its absence as a disclosure in itself.',
        'Ask for a dated and complete track record, and give no weight to screenshots.',
        'Check whether the recommendation ever includes a sell, a stop or a position that went wrong.',
        'Treat unsolicited contact as a sales channel, whoever it comes from.',
        'Separate education, which can be free, from advice, which requires registration.',
        'Complain on SCORES rather than arguing in the comments, when the problem is advice without registration.',
      ] },
      { kind: 'p', text: 'The point of the audit is not to distrust everybody who explains finance. It is that a household can be taught by anyone and advised by only a few, and that the difference between the two is documented rather than felt. Applying the five checks once, to the two or three voices a household actually follows, is a small amount of work with an unusually large return.' },
      { kind: 'terms', items: [
        { term: 'Research analyst', meaning: 'A person registered to provide research on securities, with disclosure obligations attached.' },
        { term: 'Investment adviser', meaning: 'A person registered to give advice on securities for a fee, with fiduciary duties to the client.' },
        { term: 'Affiliate link', meaning: 'A tracked link that pays the person who posted it when somebody signs up through it.' },
        { term: 'Survivorship bias', meaning: 'Showing only the calls that worked, which makes any method look better than it is.' },
        { term: 'Falsifiable', meaning: 'A claim stated so precisely that a result could prove it wrong.' },
      ] },
      l5Sources(['sebi', 'rbiSachet'], [
        'The registration requirement for investment advisers and research analysts, the register to verify them on, the disclosure obligations, and the SCORES complaint route',
        'The portal on which an unauthorised investment scheme or an unregistered offer can be reported to the central bank',
      ]),
    ],
    quiz: [
      {
        q: 'Someone on a video quotes a registration number and shows a certificate. What have you actually established?',
        options: [
          { text: 'That they are registered, since the number and the certificate agree', why: 'A number in a video and a certificate on a screen are claims, not confirmation. Both can be fabricated, and a real number can belong to somebody else.' },
          { text: 'Nothing yet: the number has to be found on the regulator’s own register', correct: true, why: 'Registration is a public fact held by the regulator, and the only useful version of the check is a search on the register itself, matching the name as well as the number.' },
          { text: 'That the advice is safe to follow', why: 'Registration establishes permission to advise and the obligations attached, not the quality of the advice.' },
          { text: 'That they are regulated by the central bank', why: 'Advice on securities is regulated by the market regulator, not the central bank. Naming the wrong regulator is itself a warning.' },
        ],
      },
      {
        q: 'A person posts a screenshot of a ₹12 lakh profit. What does it tell you about their method?',
        options: [
          { text: 'That the method produces profit', why: 'Most methods produce a profit on some trades. A single result tells you nothing about what happens across a record.' },
          { text: 'Nothing: it has no dates, no size and no losing trades, and it is selected after the fact', correct: true, why: 'Evidence is dated, complete and checkable by someone other than the person who produced it. A screenshot fails all three tests at once.' },
          { text: 'That the account is real', why: 'Even a real account can be selected, and in platform frauds the balance is fabricated by the platform.' },
          { text: 'That they are a skilled analyst', why: 'Skill is inferred from a complete record over time, which is precisely what a screenshot is not.' },
        ],
      },
      {
        q: 'Which disclosure would tell you the most about whose interest the advice serves?',
        options: [
          { text: 'The number of years they have traded', why: 'Experience is a credential rather than an incentive. It says nothing about who pays them.' },
          { text: 'A list of exactly how they are paid, including affiliate links and course sales', correct: true, why: 'The incentive decides the direction of the advice. A person paid by the audience benefits when the audience acts, whether or not the action is right.' },
          { text: 'The number of followers they have', why: 'Followers measure reach, and reach converts to affiliate income, which is the incentive rather than the evidence about it.' },
          { text: 'The returns they claim for last year', why: 'A claimed return is a claim. It is the sort of thing a track record would confirm, and a track record is the separate test.' },
        ],
      },
    ],
  },
}
