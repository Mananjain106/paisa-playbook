import type { Chapter } from '../../types'
import { scene, sim } from '../../lib/chapter-blocks'
import { l5Illustrative, l5Rule, l5Sources } from '../../lib/l5-blocks'

/**
 * Level 5, band three, batch 3 — chapters l5-060 to l5-070.
 *
 * The second half of the paperwork band, and the half that is negotiated rather
 * than merely read: the cardholder terms, the broking agreement, the tenancy,
 * the charges that never appear in the headline price, fees, penalties, and the
 * clause families that decide disputes — then the four negotiations an adult
 * actually runs: pay, rent, a loan and freelance rates.
 *
 * Facts verified on 15 October 2026 and linked from each chapter: the
 * interest-free period on a card being suspended once any balance is carried
 * forward, and the requirement that the terms and conditions explain it; a
 * cardholder being liable for zero where an unauthorised transaction is reported
 * within three working days, and capped at ₹10,000 or ₹25,000 where a
 * report is made within four to seven working days; late payment charges and
 * penal interest on a card becoming payable only once the account has remained
 * past due for more than three days; card closure within seven working days with
 * a ₹500-a-day penalty for delay; the prohibition on compulsory bundling and
 * on dark patterns such as drip pricing in lending, effective 1 January 2027 for
 * commercial banks; client funds and securities held apart from a broker's own,
 * with unused balances settled periodically and securities paid out directly to
 * the client's depository account; leases for a year or more carrying compulsory
 * registration and a notice to quit under the Transfer of Property Act; a tenant
 * paying tax deducted at source on rent above ₹6 lakh a year; advisory fee
 * limits in the securities market of ₹1,51,000 per family per year or 2.5% of
 * assets under advice; penal charges on loans levied as charges without
 * capitalisation since 1 January 2024; the bar on prepayment charges for
 * floating-rate loans to individuals and small enterprises from 1 January 2026;
 * the key fact statement required before a retail loan is signed; and the
 * presumptive tax scheme for professionals, with its receipts ceiling.
 */
export const l5InstC: Record<string, Chapter> = {
  'l5-060': {
    id: 'l5-060',
    title: 'Credit-Card Agreements',
    subtitle: 'A card is the easiest credit anyone will extend, and the agreement is deceptively short.',
    minutes: 12,
    blocks: [
      scene('card-terms', 'One billing cycle, with the due date, the interest-free period running back to the transaction, and the point at which both stop applying.'),
      { kind: 'p', text: 'A cardholder agreement is the shortest credit contract most people ever sign and the one with the highest rate attached. It is short because the issuer does not need to explain the price in the document: the price is in a schedule of charges, the interest method is described in a paragraph of plain prose, and the consequences are arithmetic rather than clauses. Reading it therefore means reading three things — how interest is computed, when the interest-free period applies, and what happens when something goes wrong — and ignoring the rest, which is mostly boilerplate about the issuer’s rights.' },
      { kind: 'p', text: 'The single most valuable sentence in the agreement is the one that describes the interest-free period. It is not a grace period granted on the bill; it is a window that runs backwards from the due date to the date of each transaction, and it survives only for as long as nothing is carried forward. The moment a balance is carried, the window closes on all new spending, and interest begins on the day each new transaction is made rather than at the end of the cycle. That is why a small carried balance can cost more than its own interest: it also starts a clock on the spending that would otherwise have been free.' },
      { kind: 'p', text: 'The second thing to find is the basis on which interest is calculated. Daily balance, average daily balance and two-cycle methods give different numbers for the same spending, and the agreement states which one applies. Then the schedule of charges: the annual or renewal fee, the cash advance fee and its separate interest, the foreign currency markup, the late payment charge, and the charge for a failed auto-debit. Read together, these are the parts of a card that are not optional, which is why they are the parts worth knowing before the first statement rather than after it.' },

      { kind: 'h', text: 'The numbers in the schedule, as a shape' },
      {
        kind: 'table',
        caption: 'What a card charges, and when it starts charging',
        headers: ['Charge', 'When it applies', 'The detail that matters'],
        rows: [
          ['Interest on a carried balance', 'From the transaction date, once anything is carried forward', 'The rate applies to the whole outstanding, not only to the new spending'],
          ['Cash advance', 'From the day of withdrawal, with a separate fee', 'No interest-free period applies to cash at all, and the rate is usually the highest on the card'],
          ['Foreign currency markup', 'On any transaction in another currency', 'A share of the converted amount, usually with GST on the fee'],
          ['Late payment charge', 'Only once the account has stayed past due for more than three days', 'A flat charge plus interest, and the grace period is a real protection rather than a courtesy'],
          ['Annual or renewal fee', 'On the anniversary of issue', 'Often waived on request where spending has been consistent, and worth asking about'],
        ],
      },
      l5Rule(
        'Interest-free periods, liability for fraud, and closing a card',
        'Where any balance is carried forward, the interest-free period on other transactions is suspended, and this must be explained in the cardholder terms and conditions. An unauthorised electronic transaction reported within three working days carries zero liability for the cardholder; where the report is made within four to seven working days, liability is capped at ₹10,000 for a card with a limit up to ₹5 lakh and ₹25,000 above that. Late payment charges and penal interest on a card become payable only once the account has remained past due for more than three days. A card must be closed within seven working days of a request, with a ₹500-a-day penalty for delay, and a credit balance must be refunded to the cardholder. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'Disputes, and the three-day window that matters most' },
      { kind: 'p', text: 'A card is also the payment instrument most often used fraudulently, and the liability rules have been written to reward speed rather than argument. Reporting an unauthorised transaction within three working days gives zero liability; between four and seven working days the cap applies; beyond that, liability follows the issuer’s policy. The clock is not about blame, and the report does not have to wait for an investigation — a call or a written intimation that a transaction is not yours is enough to start it. That is why the practical instruction is to open the statement when it arrives and to block the card before working out what happened.' },
      { kind: 'p', text: 'Separately, a chargeback is a different thing from a fraud claim. It concerns a transaction you authorised but did not receive as promised, and it runs on the network’s dispute rules with their own deadlines and evidence requirements. The agreement normally says which of the two routes applies, but in practice the first move is the same: write to the issuer with the transaction reference, the amount and the reason, and keep the reference of that complaint. A written complaint with a date on it converts a disagreement into a matter with a clock on it.' },
      { kind: 'p', text: 'The last clauses worth knowing are the ones about the account itself. A card may not be issued without an application, and unsolicited upgrades or add-on cards are not permitted; a credit balance has to be refunded rather than used to pay off an imaginary debt. Closure must happen within a stated period and cannot be conditioned on clearing charges that were never validly levied. These are the terms that make leaving as easy as joining, and they exist because leaving used to be the hard part.' },
      sim('l5-card-agreement-audit', 'Price one billing cycle: carry a balance, take a cash advance, and report a fraud on different days to see where liability lands.'),
      l5Illustrative('The spending, rates, fees and fraud amounts in the lab are invented for practice. The three-day rule for late payment charges, the three-working-day and seven-working-day liability windows with the ₹10,000 and ₹25,000 caps, the seven-working-day closure deadline with its ₹500-a-day penalty, and the suspension of the interest-free period on a carried balance are the real framework verified on 15 October 2026 and linked below.'),

      { kind: 'h', text: 'How to hold a card' },
      { kind: 'list', ordered: true, items: [
        'Read the interest-free period paragraph before the first statement, because it decides whether the card is a payment tool or a loan.',
        'Set the auto-debit or the reminder a few days before the due date: the cheapest card is the one that is never late.',
        'Never use a card for cash, and treat a balance transfer as a new loan rather than as relief.',
        'Open each statement on the day it arrives and block the card at the first unfamiliar transaction, then write in.',
        'Ask for the annual fee to be waived once spending justifies it, and close cards you do not use.',
        'Where a charge looks wrong, quote the rule and the date rather than the emotion, and escalate to the grievance route if it is not reversed.',
      ] },
      { kind: 'p', text: 'The deeper point is a comparison. A card is convenient because it separates the decision to buy from the decision to pay, and that separation is priced. Every clause in the agreement exists to define that price — how interest accrues, when the free period survives, what a late payment costs, and who bears a fraud. A cardholder who knows those four things gets the convenience without the cost, and one who does not is borrowing at the most expensive rate in the household’s entire balance sheet.' },
      { kind: 'terms', items: [
        { term: 'Interest-free period', meaning: 'The window between a transaction and the due date during which no interest is charged, suspended once any balance is carried forward.' },
        { term: 'Minimum due', meaning: 'The smallest payment that keeps the account current, calculated as a small share of the bill rather than as repayment.' },
        { term: 'Cash advance', meaning: 'A withdrawal against the card, charged a fee and interest from the day it is taken, with no free period.' },
        { term: 'Chargeback', meaning: 'The dispute route for a transaction you authorised but did not receive as promised.' },
        { term: 'Markup', meaning: 'The fee on a transaction in a foreign currency, charged as a share of the converted amount.' },
      ] },
      l5Sources(['rbi'], [
        'The credit and debit card directions and the 2026 conduct directions: interest-free periods and their suspension, posting and adjustment timelines, the three-day rule for charges on a past-due account, the liability windows for unauthorised transactions with their caps, card closure timelines and the penalty for delay, and the restitution of wrongly charged amounts',
      ]),
    ],
    quiz: [
      {
        q: 'You carry ₹15,000 forward on a card and spend ₹40,000 during the next cycle, paying by the due date. What should you expect?',
        options: [
          { text: 'Interest only on the ₹15,000 carried', why: 'Once a balance is carried the interest-free period is suspended on new spending too, so the ₹40,000 starts accruing from each transaction date, not from the due date.' },
          { text: 'Interest on the carried balance, plus interest on the new spending from the date of each transaction', correct: true, why: 'The free period exists only for as long as nothing is carried forward. Suspending it on new spending is the consequence that makes a small revolving balance expensive.' },
          { text: 'No interest, because the bill was paid in full by the due date', why: 'Paying this cycle’s bill does not restore the free period for spending made while a balance was outstanding; the interest runs from the transaction date.' },
          { text: 'Interest only from the statement date, on the whole amount', why: 'Interest is not charged from the statement date, and the amount is not treated as one balance of ₹55,000.' },
        ],
      },
      {
        q: 'You notice an unauthorised transaction of ₹80,000 on your card tonight. Your card limit is ₹3 lakh. What is the best move?',
        options: [
          { text: 'Wait for the issuer to flag it and investigate', why: 'Liability depends on how quickly the cardholder reports, so waiting converts a zero-liability case into a capped or a negotiated one.' },
          { text: 'Report it within three working days, which carries zero liability for the amount', correct: true, why: 'A report inside three working days gives zero liability where the cardholder is not negligent; between four and seven working days the loss is capped instead, so the date of the report is the whole of the case.' },
          { text: 'Report it at the end of the month with the statement', why: 'That is well beyond seven working days, and liability then follows the issuer’s policy rather than a cap.' },
          { text: 'Pay the bill and seek a refund later', why: 'Paying is not evidence of liability, but it removes your leverage: the report, not the payment, is what sets liability.' },
        ],
      },
      {
        q: 'Your card bill is due on the 12th and you notice on the 14th that you have missed it. What does the rule say about the late payment charge?',
        options: [
          { text: 'It applies from the 13th, as any list of charges would show', why: 'A charge on a card account that has just fallen due cannot be levied inside the three-day window.' },
          { text: 'It becomes payable only once the account has remained past due for more than three days, so on the 14th a charge is premature', correct: true, why: 'The three-day window is a real protection, and a charge levied inside it should be reversed on a written complaint quoting the date.' },
          { text: 'It applies only if the minimum due was also missed', why: 'The rule turns on how long the account has stayed past due, not on the size of the missed payment.' },
          { text: 'It applies, but interest cannot be charged on it', why: 'The rule about penal charges not being capitalised belongs to loans; on a card the protection is the three-day window before any charge applies.' },
        ],
      },
    ],
    takeaway: 'Read the interest-free period, the interest method and the liability windows: a card costs nothing when it is paid on time and everything when it is not.',
  },

  'l5-061': {
    id: 'l5-061',
    title: 'Brokerage Agreements',
    subtitle: 'The document that opens a trading account behaves like a power of attorney with a tariff sheet attached.',
    minutes: 11,
    blocks: [
      scene('broker-agreement-map', 'Two columns: the powers a client grants the member, and the protections the member owes the client. The gap between them is the risk.'),
      { kind: 'p', text: 'A broking agreement is signed once, at the counter, and it governs every trade afterwards. It is not primarily about price. It is about authority: what the member may do with your money and your securities when something has to be settled quickly, and what you may require of the member in return. Reading it means separating those two columns. On one side sit the powers you grant — to debit money held for you, to square off positions on a margin shortfall, to pledge holdings for margin, to change charges by notice, and to resolve disputes by arbitration. On the other sit the protections you keep — funds and securities held apart from the member’s own, unused balances returned periodically, purchases paid out directly into your depository account, contract notes for every trade, and a route to the exchange when something goes wrong.' },
      { kind: 'p', text: 'The powers are the reason the agreement exists. Settlement happens on a tight clock, and a member that could not debit an obligation or close a position on a shortfall would be exposed to a client who simply did not pay. That is why those clauses are standard and why refusing them is rarely the negotiation. What is worth reading is how each power is bounded: within what limit, on what notice, and with what record. A square-off clause with no notice requirement, a debiting authority with no limit and a pledge provision with no release mechanism are the versions that turn an ordinary arrangement into an exposure.' },
      { kind: 'p', text: 'The protections are different in character, because they are not the member’s favours to give. Client funds and securities must be kept separate from the member’s own, unused client money must be settled back periodically rather than retained, and purchases must be paid out to the client’s depository account. Running accounts exist for convenience, and a balance that sits with a broker for weeks is a question rather than a feature. The agreement should also state how contract notes and statements are delivered, because those are the records from which every dispute is argued.' },

      { kind: 'h', text: 'Two columns, and the clauses in each' },
      {
        kind: 'table',
        caption: 'What you grant, and what you keep',
        headers: ['Clause', 'In the agreement as', 'What to check about it'],
        rows: [
          ['Debiting authority', 'Power to recover dues from money held for you', 'Whether it is limited to obligations actually arising, and how a disputed debit is reversed'],
          ['Square-off right', 'Power to close positions on a margin shortfall', 'The notice given before it is used, and who bears the loss on a forced sale'],
          ['Pledge of holdings', 'Permission to pledge for margin', 'Whether holdings are released when the margin obligation ends'],
          ['Tariff and variation', 'Charges may change on notice', 'The notice period, and whether you may exit without cost when they change'],
          ['Segregation and payout', 'Client funds and securities kept apart', 'Whether the agreement states it, since it is an obligation rather than a concession'],
          ['Contract notes and statements', 'Records of every trade', 'Where they are sent, and how long the member keeps them'],
          ['Dispute resolution', 'Arbitration or the exchange’s forums', 'The forum, the time limit and who pays the arbitration cost'],
        ],
      },
      l5Rule(
        'What a member must do with client money and securities',
        'Client funds and securities are held separately from the member’s own and cannot be used for the member’s purposes; unused client funds in a running account must be settled back to the client periodically, and securities bought must be paid out directly into the client’s depository account. A member may not use one client’s securities to meet another client’s obligations, and the reuse of client collateral is restricted. Contract notes must be issued for trades, and a client may choose, by a written instruction, to have funds settled more often or to receive securities against payment. Complaints may be taken to the exchange and to the regulator, and the exchanges publish the complaint figures of each member. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'The clauses that are read too late' },
      { kind: 'p', text: 'Two clauses do most of the damage, and both look harmless at the counter. The first is the pledge provision: pledging holdings for margin is normal and useful, but the release of that pledge at the end of the obligation is not automatic in every agreement, and a holding left pledged cannot be sold or moved as freely as one that is free. The second is the variation clause: a tariff that may change by notice means the price you compare today is not the price you will pay in two years, so the notice period and the exit terms beside it are the parts that matter.' },
      { kind: 'p', text: 'The dispute-resolution clause decides how expensive a disagreement becomes. Arbitration is ordinary and often faster than litigation, but the agreement names the forum, the seat and who bears the cost, and a low-value dispute can cost more in fees than the amount at stake. Where the exchange offers an investor grievance forum and a mechanism for arbitration with defined fee structures, that route is usually the one worth using; the member’s own complaint figures are published, which is a useful thing to look at before signing rather than after.' },
      sim('l5-broker-agreement-audit', 'Grant each authority, acknowledge each protection, and watch the net position shift as the balance moves towards the member.'),
      l5Illustrative('The turnover, balances and pledged values in the lab are invented for practice. The segregation of client funds and securities, the periodic settlement of running accounts, the direct payout of securities, the restriction on reusing client collateral, the requirement of contract notes, and the published complaint records are the real framework verified on 15 October 2026 and linked below.'),

      { kind: 'h', text: 'Before signing, and every year after' },
      { kind: 'list', ordered: true, items: [
        'Read the powers you grant and confirm the limit on each: a debiting authority without a limit and a square-off right without notice are the two versions to question.',
        'Confirm the protections are in the document: separate holdings of funds and securities, periodic settlement, direct payout, contract notes.',
        'Ask what the running account balance is, and have it settled if it has been sitting there.',
        'Track pledges, and release them when the obligation ends rather than when somebody remembers.',
        'Check the dispute forum, the time limits and who pays, before there is a dispute.',
        'Look at the member’s published complaint figures, and review the tariff when charges change rather than when the bill surprises you.',
      ] },
      { kind: 'p', text: 'The habit that makes a broking relationship cheap is a periodic settlement of the running account. It is the clause that keeps your money in your bank instead of on someone else’s balance sheet, where it is safer and more useful to you. A member holding an idle client balance is not necessarily doing anything wrong, but the balance exists for the member’s convenience; settling it periodically, in writing and by instruction, is how the relationship is kept to the shape the agreement describes.' },
      { kind: 'terms', items: [
        { term: 'Running account', meaning: 'The balance of client money a member holds between settlements, which must be paid back periodically.' },
        { term: 'Square-off', meaning: 'The closing of positions by the member when a margin shortfall is not met within the notice given.' },
        { term: 'Contract note', meaning: 'The record of a trade, issued for every transaction and the basis of any later dispute.' },
        { term: 'Pledge', meaning: 'The encumbrance of holdings to cover a margin obligation, which should be released when the obligation ends.' },
        { term: 'Grievance redressal', meaning: 'The exchange and regulator forums that decide investor complaints against a member.' },
      ] },
      l5Sources(['sebi', 'nse'], [
        'The obligations of a stock broker towards clients: segregation of client funds and securities, settlement of running accounts, direct payout into the client’s depository account and the restrictions on reusing client collateral',
        'The investor grievance and arbitration mechanisms, the fee structure for investor arbitration and the published complaint figures of each member',
      ]),
    ],
    quiz: [
      {
        q: 'You have not traded for two months and ₹70,000 has been sitting with your broker. Is that normal?',
        options: [
          { text: 'Yes, if the broker pays interest on it', why: 'Interest is not the point. Client money is not the member’s to hold beyond the settlement of obligations.' },
          { text: 'No: unused client funds must be settled back periodically, and you may instruct the member to settle them', correct: true, why: 'A running account is a convenience with a settlement obligation attached, so an idle balance that has sat for weeks should be paid back rather than left with the firm.' },
          { text: 'Yes, if the account is active overall', why: 'Activity elsewhere does not create an entitlement to retain unused client money.' },
          { text: 'It depends on the tariff sheet', why: 'A tariff governs charges, not the right to keep client money. The settlement obligation comes from the broker’s obligations, not the price list.' },
        ],
      },
      {
        q: 'Your broker closes your position on a margin shortfall and the sale happens at a worse price the next day. What should the agreement have told you?',
        options: [
          { text: 'Nothing: a forced sale is always at the member’s discretion', why: 'The right to square off is standard, but how it may be used — the notice, and the record — is something the agreement has to address.' },
          { text: 'The notice the member must give before squaring off, and how the loss from a forced sale is borne', correct: true, why: 'A square-off power without a notice requirement or a documented process is where the client’s exposure is created, since settlement deadlines rarely leave room to argue afterwards.' },
          { text: 'Only the exchange’s position limits', why: 'Position limits bind the member’s trading. They do not describe the client’s protection on a square-off.' },
          { text: 'That it will not square off if you call first', why: 'A promise that is not in the agreement does not govern the conduct of a forced sale.' },
        ],
      },
      {
        q: 'Which of these is an obligation the member owes you rather than a power you grant?',
        options: [
          { text: 'The right to debit money held for you', why: 'That is a power granted in the agreement, exercised to recover an obligation you owe.' },
          { text: 'Keeping client funds and securities separate from the member’s own, and paying purchases out to your depository account', correct: true, why: 'Segregation and direct payout are duties the rules impose on the member, which is why an agreement that omits them is worth questioning rather than signing.' },
          { text: 'The right to change charges by notice', why: 'That is a power, granted by a variation clause, and it should be read with the notice period and exit terms.' },
          { text: 'The right to pledge your holdings for margin', why: 'That is a power, and one that needs a matching release obligation to be safe.' },
        ],
      },
    ],
    takeaway: 'Count the powers you grant and the protections you keep: an authority clause without a matching protection is where the risk in a broking account is created.',
  },

  'l5-062': {
    id: 'l5-062',
    title: 'Rental Agreements',
    subtitle: 'The rent is the headline; the deposit, the escalation and the exit clause decide the cost.',
    minutes: 11,
    blocks: [
      scene('rent-agreement-terms', 'A tenancy laid out clause by clause, with the deposit, the escalation and the lock-in marked as the three that decide the total.'),
      { kind: 'p', text: 'A rental agreement is the largest recurring contract most people sign and the one they read least. Two reasons account for it. The first is urgency: a lease is usually signed on the day a flat is chosen, in an office, with both sides quoting market practice. The second is that its decisive terms are not financial at all — they are about time and trust. Who holds the deposit, on what conditions it is refunded, what happens when either side wants to end the tenancy, and what the agreement says about repairs are the clauses that generate nearly every dispute, and none of them appears in the rent.' },
      { kind: 'p', text: 'The deposit deserves the first look, because it is the largest single payment in the transaction and it is the amount most likely to be argued about later. Read what it may be deducted for, who holds it, and how it comes back; an agreement that says only that the deposit is refundable “subject to the premises being in good condition” has left the entire decision to the owner’s judgement at the end of the tenancy. Where a deposit is refundable against a survey, the inventory at the start — in writing, with photographs, dated and signed by both sides — is what makes the clause worth anything. A deposit is also a cost even when it is fully returned, because the money could have earned interest and the agreement rarely shares any.' },
      { kind: 'p', text: 'Escalation is the term that compounds. Rental agreements in India most often run for eleven months with an annual increase written in as a percentage, and the increase normally applies to the rent alone, though maintenance and society charges may rise separately. A cap on the escalation, or a longer first-year freeze in exchange for accepting the rate, is worth more over a three-year stay than a discount in year one, because it repeats. This is where the arithmetic is genuinely counter-intuitive: the clause that looks small annualised is the one that decides whether the tenancy is affordable in its third year.' },

      { kind: 'h', text: 'The clauses that decide the cost of leaving' },
      {
        kind: 'table',
        caption: 'Deposit, escalation, maintenance, notice and lock-in',
        headers: ['Clause', 'What it says', 'What it costs'],
        rows: [
          ['Deposit', 'Months of rent held by the owner, refundable against a survey', 'A large cash commitment, and interest foregone for as long as it is held'],
          ['Escalation', 'Annual increase, usually on the rent alone', 'A compounding cost: the second and third years carry all of the increase'],
          ['Maintenance', 'Either the owner’s society charges or the tenant’s responsibility', 'A monthly amount that grows without looking like rent'],
          ['Lock-in', 'A minimum period during which leaving attracts a penalty', 'Months of rent payable for premises you have vacated'],
          ['Notice', 'The period either side must give to end the tenancy', 'Rent continuing for the notice period after you decide to leave'],
          ['Registration', 'Compulsory for a lease of a year or more', 'The stamp duty and the cost of drafting, against the value of an enforceable record'],
        ],
      },
      l5Rule(
        'Registration, notice to quit, and tax on rent',
        'A lease of immovable property for a term of one year or more is compulsorily registrable, and an unregistered lease of that length is not admissible as evidence of the transaction it records. Where no notice period is agreed, a tenancy may be ended by a notice to quit under the Transfer of Property Act, of fifteen days or one month depending on how the tenancy runs. A tenant paying rent above ₹50,000 a month, that is above ₹6 lakh a year, must deduct tax at source at 2% and is not required to obtain a tax deduction account number for the purpose. The owner of a let-out property is allowed a standard deduction of thirty per cent of the rent for repairs and collection, and deducts property taxes and interest on borrowed capital before paying tax on the rent. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'What to settle before the money moves' },
      { kind: 'p', text: 'A tenancy is usually drafted by a stationer or a broker working from a template, and templates are written to protect the party who ordered them. Three corrections are worth insisting on, and all three are normally conceded when asked for at the point of agreement rather than after possession. The first is that the inventory be attached to the agreement and signed, rather than exchanged as a message thread. The second is that the deposit be stated as refundable within a fixed number of days of vacating, against a signed handover, because a clause about deductions without a deadline for refunding is the clause that becomes a dispute. The third is that the escalation be capped, or the second year frozen, in exchange for whatever the tenant is willing to concede on something that does not compound.' },
      { kind: 'p', text: 'The other end of the tenancy deserves the same attention. A lock-in protects the owner against a tenant who leaves after two months; read together with the notice period, it decides how much rent is paid for a home nobody is living in. An owner’s right to entry, and the conditions under which rent may be increased mid-term, belong in the same reading. And the registration: for a lease of a year or more, registration is compulsory, and the stamp duty and registration fee are what turn a private arrangement into an enforceable record. It is the cheapest protection in the whole transaction, because it costs a fraction of the deposit it protects.' },
      sim('l5-rent-agreement-audit', 'Set the deposit, escalation, lock-in and notice, then read the refund risk and the cost of leaving before the rent even enters the conversation.'),
      l5Illustrative('The rents, deposits and escalations in the lab are invented for practice. The compulsory registration of leases of a year or more, the notice to quit under the Transfer of Property Act, the tenant’s obligation to deduct tax at source on rent above ₹6 lakh a year at 2%, and the owner’s thirty per cent standard deduction are the real framework verified on 15 October 2026 and linked below.'),

      { kind: 'h', text: 'The sequence of a well-run tenancy' },
      { kind: 'list', ordered: true, items: [
        'Agree the terms in writing before any money moves, including the deposit, the escalation and the notice period.',
        'Make an inventory with photographs and have it signed and dated, because it decides every deduction later.',
        'Fix the refund deadline and the mode of return, so the deposit has a route back rather than a promise of one.',
        'Check the escalation language: on what amount it applies, and when the first increase falls due.',
        'Confirm who pays society charges, repairs and taxes, and get the maintenance clause in the same clause as the rent.',
        'Register the lease where the term is a year or more, keep a stamped copy each, and get the receipts for every payment you make.',
      ] },
      { kind: 'p', text: 'One further clause is worth reading carefully if you are the tenant: the one about the owner’s right to sell. A tenancy survives a sale in most cases, but a clause that requires the tenant to vacate on sale or that allows entry at short notice changes the practical security of the home. If the property is financed, and the lender has a right over it, the position can be less straightforward still, which is why a long-term arrangement is safer with a registered lease and a copy of the owner’s title than with a promise.' },
      { kind: 'terms', items: [
        { term: 'Deposit', meaning: 'Money held by the owner against the tenancy, refundable against a survey and a signed handover.' },
        { term: 'Escalation', meaning: 'The annual increase in rent, normally a percentage applied from the second year.' },
        { term: 'Lock-in', meaning: 'The minimum period a tenant commits to, leaving inside which attracts a penalty.' },
        { term: 'Notice to quit', meaning: 'The notice ending a tenancy of indefinite duration, of fifteen days or one month under the Act.' },
        { term: 'Registration', meaning: 'The recording of a lease of a year or more, which is compulsory for it to be admissible as evidence.' },
      ] },
      l5Sources(['indiacode', 'incometax'], [
        'The Transfer of Property Act: leases, the notice to quit, and what happens on a transfer of the property during a tenancy; and the Registration Act on leases that must be registered',
        'The deduction of tax at source on rent above ₹50,000 a month, and the treatment of rental income for the owner, including the thirty per cent standard deduction',
      ]),
    ],
    quiz: [
      {
        q: 'Your eleven-month agreement rolls over twice and the owner asks for a 10% increase each year. What does the agreement you signed actually control?',
        options: [
          { text: 'Nothing, since the owner may set any rent at renewal', why: 'The escalation clause governs increases agreed for the term and is what you compare against the market at renewal.' },
          { text: 'The increase stated in the agreement for each term, and the basis for negotiating the next one from comparable rents', correct: true, why: 'An escalation clause cannot bind a new term by itself, but the agreed percentage and the comparables you can quote are what turn a renewal into a negotiation rather than a notice.' },
          { text: 'The increase is fixed forever at 10%', why: 'Long-term restrictions on rent depend on rent control legislation that applies to specific tenancies, not on an ordinary lease clause.' },
          { text: 'It controls the increase but not the maintenance charges', why: 'Maintenance is separate, which is exactly why it belongs in the same review as the rent.' },
        ],
      },
      {
        q: 'You are a tenant paying ₹60,000 a month and nobody has mentioned tax. What are you obliged to do?',
        options: [
          { text: 'Nothing, because tax is the owner’s responsibility', why: 'The owner pays tax on the rental income, but the tenant has a deduction obligation above the threshold.' },
          { text: 'Deduct tax at source at 2% from the rent, without needing a tax deduction account number', correct: true, why: 'Above ₹50,000 a month, that is, above ₹6 lakh a year, the tenant deducts 2% at source, and the provision is drafted so that an individual tenant does not have to obtain a tax deduction account number for it.' },
          { text: 'Deduct tax at source at 10% and obtain a tax deduction account number', why: 'The rate for this provision is 2%, and obtaining a number is not required for it.' },
          { text: 'Report the rent to the tax department annually', why: 'The obligation is a deduction from the rent, not an annual filing by the tenant.' },
        ],
      },
      {
        q: 'A lease for two years is signed on plain paper and stamped only symbolically. What is the practical consequence?',
        options: [
          { text: 'None: the agreement is valid between the parties regardless', why: 'A lease of a year or more is compulsorily registrable, and the rights it grants are affected by its absence from the record.' },
          { text: 'The lease of a year or more is not admissible as evidence of the transaction, which weakens exactly the deposit and exit terms it was meant to fix', correct: true, why: 'Compulsory registration exists to make the term provable. Without it, a deposit dispute is decided on recollection and messages rather than on the document.' },
          { text: 'The tenancy becomes month to month and the owner may evict at will', why: 'A tenancy of indefinite duration is a different thing; the consequence of not registering is evidentiary weakness rather than immediate termination.' },
          { text: 'The owner must refund the deposit immediately', why: 'Registration has nothing to do with the timing of a refund, which depends on the deposit clause.' },
        ],
      },
    ],
    takeaway: 'Fix the deposit, the escalation and the exit before the rent: the deposit is the money, the escalation compounds and the notice decides what leaving costs.',
  },

  'l5-063': {
    id: 'l5-063',
    title: 'Hidden Charges',
    subtitle: 'A hidden charge is usually just a disclosed one at a moment when nobody was still comparing.',
    minutes: 12,
    blocks: [
      scene('hidden-charge-radar', 'A headline price at the centre with five rings around it: the fee at the start, the fee at payment, the cover bundled in, the annual charge and the exit penalty.'),
      { kind: 'p', text: 'Almost nothing about a financial product is genuinely secret. Charges are disclosed — in a schedule, in a key fact statement, in the annexure to a policy or the terms of a fund. What makes them hidden is the moment they are disclosed. They arrive after the decision has effectively been made, in units that cannot be compared with the number that drew you in, and they are spread across documents that are read by different people at different times. That is what a hidden charge is: not an undisclosed cost, but a disclosed one placed after the point of commitment.' },
      { kind: 'p', text: 'The layers are consistent across products, which is what makes them learnable. There is a fee at the start, usually a share of the amount — processing, documentation, origination, arrangement. There is a fee at the point of payment, often called convenience or platform, charged for the channel you were encouraged to use. There is cover bundled into the product, financed rather than paid for, so interest is paid on it for the life of the loan. There is an annual or recurring charge, which looks trivial in a single year and is not trivial in ten. And there is an exit penalty, which decides what leaving costs and therefore how much of the comparison you can still use.' },

      { kind: 'h', text: 'The five layers, and the two named practices' },
      {
        kind: 'table',
        caption: 'What sits under a headline price',
        headers: ['Layer', 'Typical form', 'Why it hides'],
        rows: [
          ['At the start', 'Processing, documentation or arrangement fee as a share of the amount', 'Paid once, financed with the loan, and often deducted rather than invoiced'],
          ['At payment', 'Convenience or platform fee on the channel used', 'Appears at the last screen, after the price has been compared'],
          ['Bundled in', 'Insurance or a subscription added to the product', 'Financed, so the premium and the interest on it both disappear into the instalment'],
          ['Every year', 'Annual, renewal or account charges', 'Small in one year and repeated for as long as the product is held'],
          ['On exit', 'Foreclosure or exit penalties and lock-in conditions', 'Read after the decision, when leaving is no longer free'],
        ],
      },
      l5Rule(
        'Bundling, drip pricing and consent',
        'Rules on responsible conduct prohibit the compulsory bundling of products, so that insurance or any other product may not be made a condition of obtaining a loan, and they address dark patterns in the sale of loans: practices that impair a borrower’s ability to make a free and informed choice. Drip pricing, where charges such as processing fees are disclosed only at a later stage, is named as one such pattern, and consent for any bundled product must be obtained separately and explicitly, with an option to decline. Fees, risks, lock-in conditions, exit penalties and the recovery of charges must be disclosed at the outset, a key fact statement must be provided before a retail loan is signed, and charges may not be levied without consent. The conduct directions apply to commercial banks from 1 January 2027, with the bundling prohibition already flowing from the earlier fair-practices directions. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'Annualising is the whole technique' },
      { kind: 'p', text: 'The reason these layers defeat comparison is that they are quoted in units that cannot be added. A processing fee is a share of the amount, a platform fee is a monthly amount, an insurance premium is a share of the loan, an annual charge is a flat amount, and an exit penalty is a share of a balance. Convert all of them to one unit — rupees a year — and the product becomes comparable to another product and, more usefully, comparable to the value it delivers. A ₹6,000 annual charge on a ₹5 lakh product looks like a rounding error at sanction; over ten years it is ₹60,000, which is more than the processing fee anybody argues about.' },
      { kind: 'p', text: 'Bundled cover needs its own step, because it is financed. A premium of ₹17,500 on a ₹5 lakh loan, added to the principal, is repaid with interest at the loan rate over the whole term. The insurance is not the problem; the financing is, and the remedy is to pay the premium separately where the policy is wanted at all — after checking whether the same cover is available on its own at a lower price, and whether a policy you already hold makes it redundant. Compulsory bundling is prohibited for exactly this reason, and consent has to be a separate and explicit yes rather than a pre-selected default.' },
      { kind: 'p', text: 'Two habits close most of the gap. Ask for the full schedule of charges in writing before signing, and ask what total cost the product will involve over a typical holding period, with the annual charges counted. Both questions are answerable, and both change the conversation: an institution that has to write the schedule down for you is an institution whose charges you can compare with the one next door, which is the only thing a hidden charge depends on being unable to do.' },
      sim('l5-hidden-cost-hunt', 'Stack the five layers on a headline price, finance the bundled cover, and see the true cost as a share of the number that was advertised.'),
      l5Illustrative('The amounts and rates in the lab are invented for practice. The prohibition on compulsory bundling, the treatment of drip pricing as a dark pattern, the requirement of separate and explicit consent for a bundled product, the mandatory disclosure of fees, risks, lock-in conditions and exit penalties at the outset, and the key fact statement for retail loans are the real framework verified on 15 October 2026 and linked below.'),

      { kind: 'h', text: 'Finding the layers, in order' },
      { kind: 'list', ordered: true, items: [
        'Ask for the schedule of charges in writing, and for the key fact statement where a loan is involved.',
        'Say no to anything bundled as a condition, and if you want the cover, buy it separately and pay for it outright.',
        'Convert each charge to rupees a year, over the period you actually expect to hold the product.',
        'Check the exit terms before the entry terms, because the penalty for leaving is what makes the rest binding.',
        'Compare two products on the annual number and the exit number together, never on the advertised rate alone.',
        'Keep the schedule you were given, and check the statement against it each year, because charges change by notice.',
      ] },
      { kind: 'terms', items: [
        { term: 'Processing fee', meaning: 'A charge taken at the start of a loan or service, usually as a share of the amount.' },
        { term: 'Platform fee', meaning: 'A charge for the channel or app used to transact, which appears at the point of payment.' },
        { term: 'Bundling', meaning: 'Making one product a condition of another, which is prohibited in lending; consent where cover is offered must be separate and explicit.' },
        { term: 'Drip pricing', meaning: 'Revealing charges only at a later stage, named as a dark pattern in the conduct rules.' },
        { term: 'Key fact statement', meaning: 'The summary of a retail loan’s terms, including its all-in cost and charges, given before it is signed.' },
      ] },
      l5Sources(['rbi', 'sebi', 'irdai'], [
        'The responsible conduct and fair-practices directions: the prohibition on compulsory bundling, dark patterns such as drip pricing, the disclosure of fees, risks, lock-in conditions and exit penalties, the treatment of the all-in cost of a retail loan, and the key fact statement',
        'The disclosure of charges by intermediaries and the total expense ratio of a fund, so that a recurring cost can be seen for what it is',
        'The disclosure of premium, charges and commission at the point of sale, and the free-look provision that allows a bundled policy to be returned',
      ]),
    ],
    quiz: [
      {
        q: 'A lender offers a loan at an attractive rate, conditional on buying its insurance policy. You already hold similar cover. What is the position?',
        options: [
          { text: 'Accept it, since the rate is the biggest lever', why: 'The compulsory bundling of a product with a loan is prohibited, so the condition is not a term you have to accept to get the rate.' },
          { text: 'Insist on the loan without the policy: compulsory bundling is prohibited, and consent for any bundled product must be separate and explicit with an option to decline', correct: true, why: 'The prohibition is what makes the condition unenforceable, and the separate-consent requirement is what stops a default answer standing in for a decision.' },
          { text: 'Take it and cancel the policy afterwards', why: 'Cancelling later leaves the premium and the interest on it in the loan, which is the cost bundling was prohibited to prevent.' },
          { text: 'Ask for a discount on the policy instead', why: 'A discount on a product you did not need does not cure the condition.' },
        ],
      },
      {
        q: 'A loan of ₹5 lakh carries a ₹25,000 processing fee and ₹6,000 of annual charges. Which is the more expensive over ten years?',
        options: [
          { text: 'The processing fee, because it is larger in a single year', why: 'It is larger in year one and never repeats.' },
          { text: 'The annual charges, because ₹6,000 a year over ten years is ₹60,000 against a one-off ₹25,000', correct: true, why: 'Annualising is the whole technique: the recurring charge is what survives comparison and what compounds against you, which is why one-off and recurring fees have to be put in the same units.' },
          { text: 'They are equal once inflation is counted', why: 'Inflation does not equalise a recurring charge with a one-off fee; the recurring charge is paid in each of the ten years.' },
          { text: 'Neither, if the loan is prepaid early', why: 'Early prepayment reduces the annual charges but does not turn the processing fee into a saving.' },
        ],
      },
      {
        q: 'A platform shows its fee only on the final screen, after you have entered your payment details. What is this, and what does the rule require?',
        options: [
          { text: 'Ordinary marketing', why: 'Presenting a charge only at the last stage is named in the conduct rules, not treated as ordinary selling.' },
          { text: 'Drip pricing, a dark pattern, where the fees, risks, lock-in conditions and exit penalties must be disclosed at the outset instead', correct: true, why: 'Disclosure has to arrive before the decision, which is why the timing of the disclosure and not its existence is what the rule addresses.' },
          { text: 'A convenience fee, which is exempt from disclosure', why: 'A convenience fee is itself a fee that has to be disclosed, not an exemption from disclosure.' },
          { text: 'Permitted if the total is small', why: 'The rule is about the manner of disclosure, not the size of the charge.' },
        ],
      },
    ],
    takeaway: 'Ask for the schedule of charges before you decide, refuse anything bundled as a condition, and compare products on the annual number and the exit number.',
  },

  'l5-064': {
    id: 'l5-064',
    title: 'Fees',
    subtitle: 'A fee is a price, and a price can be judged only when it is quoted in one denominator.',
    minutes: 11,
    blocks: [
      scene('fee-normaliser', 'Four fees in four different units funnelled into a single annual number, with the crossover point where a flat fee becomes cheaper than a percentage marked on the way.'),
      { kind: 'p', text: 'Fees are not a detail of a financial product; they are the part of the return that is certain. A fund’s expenses are deducted whether the market rises or falls, an adviser’s charge is paid whether the advice works or not, and a platform’s fee is charged on the balance rather than on the value added. Where the outcome is uncertain and the fee is not, the fee deserves the attention that is usually spent on forecasts, because it is the only component of the result that can be known in advance.' },
      { kind: 'p', text: 'The difficulty is that fees are quoted in units chosen for presentation rather than comparison. A one-off fee is a share of the amount, a recurring charge is an annual amount, an advisory fee may be either, and a fund’s expense ratio is a share of the assets charged continuously. Two rules make them comparable. Divide a one-off fee by the number of years you expect to hold the product, which converts it into an annual amount. And where a charge is a share of a balance, remember that it grows in rupees as the balance grows even if the percentage never changes — so the comparison between a flat fee and a percentage depends on the size of the portfolio, not only on the numbers.' },

      { kind: 'h', text: 'Four units, one denominator' },
      {
        kind: 'table',
        caption: 'Turning each kind of fee into a cost per year',
        headers: ['Fee as quoted', 'Convert it by', 'What it becomes'],
        rows: [
          ['A share of the amount, once', 'Dividing by the years held', 'An annual amount that is comparable with recurring charges'],
          ['A flat amount each year', 'Using it as stated', 'The base against which percentage charges are judged'],
          ['A share of the balance each year', 'Multiplying by the balance', 'An amount that rises with the portfolio even when the rate does not'],
          ['A charge per transaction', 'Estimating the number of transactions a year', 'An annual amount that grows with activity, not with assets'],
        ],
      },
      l5Rule(
        'Fee limits for investment advice, and the cost of a fund',
        'A securities-market investment adviser may charge fees in two permitted ways: a fixed amount for each family per year, capped at ₹1,51,000, or a share of the assets under advice, capped at 2.5% of those assets per year. Fees are in addition to statutory charges, and both a fixed-fee and an asset-based structure are permitted, so the choice has to be made deliberately. Mutual fund schemes disclose a total expense ratio that includes the fund manager’s fee and the scheme’s expenses, and the ratio is capped by scheme category, with the difference in expense ratios between two schemes compounding into a visible difference in returns over long periods. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'When flat beats percentage, and when it does not' },
      { kind: 'p', text: 'The comparison between a flat fee and a share of assets has a crossover, and it can be calculated rather than debated. Where the permitted structures are a fixed annual amount capped at ₹1,51,000 or 2.5% of assets, the two are equal when 2.5% of the portfolio equals ₹1,51,000 — at about ₹60 lakh. Above that, the fixed fee is cheaper in rupees; below it, the percentage is, and it is also fairer to the adviser, whose work does not shrink with a smaller portfolio. Neither structure is dishonest. What is dishonest is not knowing which one you are on, or why.' },
      { kind: 'p', text: 'The same logic applies to funds, where the fee is a share of the assets and therefore grows automatically. A difference of half a percentage point in the expense ratio looks like nothing in a table of funds, and over twenty years it is a meaningful share of the final corpus because it compounds against you in exactly the way returns compound in your favour. This is the reason index products have become the default recommendation for people who do not want to research active managers: the fee is the one input you can establish before investing rather than infer afterwards.' },
      { kind: 'p', text: 'Judgement enters at the last step, and it is the only step that cannot be mechanised. A fee is worth paying when the service it buys is worth more than the annual number and no cheaper alternative delivers it. For a fund, that is a question about whether the strategy is doing something an index cannot. For advice, it is a question about whether the advice is being followed and is changing outcomes. Where the answer is unclear, the fee is doing all the deciding, and the cheapest version of the service that still works is the right one.' },
      sim('l5-fee-normaliser', 'Put a one-off fee, a recurring charge, a percentage fee and an advisory fee into the same year, and find the portfolio size at which flat beats percentage.'),
      l5Illustrative('The amounts and rates in the lab are invented for practice. The permitted advisory fee structures with the ₹1,51,000 fixed cap and the 2.5% assets-under-advice cap, and the total expense ratio of a scheme with its category caps, are the real framework verified on 15 October 2026 and linked below.'),

      { kind: 'h', text: 'A routine for any fee conversation' },
      { kind: 'list', ordered: true, items: [
        'Ask for every charge in writing, including one-off, recurring, transaction and exit charges.',
        'Write each one as rupees a year, over the period you expect to hold the product.',
        'Where a charge is a share of a balance, compute it in rupees at today’s balance and at twice that balance.',
        'Compare a flat structure with a percentage structure at your own portfolio size, and understand which one the crossover puts you in.',
        'For a fund, compare the expense ratio with the return net of it, and ask what the fee is buying that an index cannot.',
        'Review the annual number each year, because a fee that is fair on a small portfolio can become expensive on a large one.',
      ] },
      { kind: 'p', text: 'One asymmetry is worth remembering when a fee is presented as small. A cost that compounds against you is the exact mirror of a return that compounds for you, and the two effects are of the same size. Half a percentage point of expense is worth a good deal of active management, which is precisely why the burden of proof sits with the higher fee rather than with the lower one.' },
      { kind: 'terms', items: [
        { term: 'Expense ratio', meaning: 'The share of a fund’s assets charged each year for managing and administering it.' },
        { term: 'Assets under advice', meaning: 'The value of the portfolio an adviser manages for a family, the base for a percentage advisory fee.' },
        { term: 'Flat fee', meaning: 'A fixed annual charge, independent of the size of the portfolio, whose relative cost falls as the portfolio grows.' },
        { term: 'Crossover', meaning: 'The portfolio size at which a flat fee and a percentage fee cost the same in rupees.' },
        { term: 'Entry load', meaning: 'A charge taken at the time of investment, which current rules do not permit for mutual fund schemes.' },
      ] },
      l5Sources(['sebi', 'amfi'], [
        'The fee limits and permitted structures for investment advisers, including the fixed amount per family per year and the cap as a share of assets under advice, and the disclosure obligations of intermediaries',
        'The total expense ratio of mutual fund schemes, the categories and caps that apply, and the disclosure of scheme expenses to unitholders',
      ]),
    ],
    quiz: [
      {
        q: 'An adviser offers to manage ₹40 lakh for a flat ₹1,20,000 a year, or for 2.5% of assets. Which is cheaper in rupees today, and what does the rule allow?',
        options: [
          { text: 'The percentage, at ₹1,00,000, and both structures are permitted within the caps', correct: true, why: '2.5% of ₹40 lakh is ₹1,00,000 against a flat ₹1,20,000, and both a fixed amount per family per year up to the cap and a share of assets under advice up to 2.5% are permitted structures.' },
          { text: 'The flat fee, because it never changes', why: 'A flat fee being predictable does not make it cheaper; at ₹40 lakh, the percentage is lower in rupees.' },
          { text: 'Neither is permitted; only a percentage may be charged', why: 'Both are permitted. What the rules do is cap each structure rather than choose between them.' },
          { text: 'The flat fee, because it falls below the cap', why: 'Being below a cap makes a fee lawful, not cheaper.' },
        ],
      },
      {
        q: 'Your portfolio doubles over eight years while the advisory fee stays at the same percentage. What happens to the fee?',
        options: [
          { text: 'It stays the same in rupees, since the rate has not changed', why: 'A percentage fee is charged on the balance, so in rupees it doubles with the balance even though the rate is unchanged.' },
          { text: 'It doubles in rupees, which is why the crossover with a flat fee matters more as a portfolio grows', correct: true, why: 'This is the argument for understanding the crossover: a percentage structure grows automatically with the portfolio, while a flat fee does not, so the cheaper structure changes as the corpus changes.' },
          { text: 'It falls, because the adviser benefits from scale', why: 'A percentage charge has no built-in scale discount; a lower rate has to be negotiated rather than assumed.' },
          { text: 'It depends on the fund expense ratio', why: 'Fund expenses are separate from a fee paid for advice.' },
        ],
      },
      {
        q: 'Two index funds track the same index, one with an expense ratio of 0.2% and one at 0.7%. What should decide the choice?',
        options: [
          { text: 'The fund with the higher ratio, because the fee buys better tracking', why: 'For the same index, a higher cost is a drag unless it demonstrably improves tracking, and that has to be shown rather than assumed.' },
          { text: 'The lower ratio, because the cost compounds against the return in the same way the return compounds for it', correct: true, why: 'Where the exposure is identical, the fee is the difference in outcome, and half a percentage point compounds over long periods into a visible gap in the final corpus.' },
          { text: 'The larger fund by assets', why: 'Size may affect liquidity and tracking, but it does not neutralise a cost difference.' },
          { text: 'Either, since the difference is small in a single year', why: 'A single year is the wrong unit for a fee that is charged every year for as long as the investment is held.' },
        ],
      },
    ],
    takeaway: 'Convert every fee to rupees a year, compute percentage charges at your own portfolio size, and let the annual number decide whether the service earns it.',
  },

  'l5-065': {
    id: 'l5-065',
    title: 'Penalties',
    subtitle: 'Penalties are the part of a contract nobody reads until it applies, and the rules have made the boundaries unusually crisp.',
    minutes: 11,
    blocks: [
      scene('penalty-clock', 'A due date with a three-day window beside it, and the products on the other side where the penalty takes the form of a charge rather than a rate.'),
      { kind: 'p', text: 'A penalty is not a price and not interest; it is a consequence designed to make a deadline real. That is why the rules treat it differently from a rate. On a loan, a penalty has to be levied as a charge rather than by raising the rate on the whole outstanding, and it may not be added to the principal so that interest is charged on it. On a card, a late payment charge and penal interest become payable only once the account has stayed past due for more than three days. These two ideas — the form of the penalty and the window before it applies — decide most of what a borrower can lawfully be charged, and both are easy to check against a statement.' },
      { kind: 'p', text: 'The reason the form matters is arithmetic. Penal interest, expressed as a rate on the whole outstanding, is a penalty that grows with the size of the loan rather than with the size of the mistake: a two-day delay on a large balance can attract more than a month of the instalment. Charging a penalty as an amount, disclosed in advance in the schedule of charges, keeps the consequence proportionate to the lapse. And capitalising it — adding the penalty to the balance and charging interest on the total — converts a one-time charge into a new loan, which is why it is barred.' },
      { kind: 'p', text: 'The window matters because it converts a near miss into nothing at all. On a card, three days past the due date is a grace period with a real effect: inside it, a late payment charge is premature and should be reversed on a written complaint that quotes the date. Outside it, the charge and the penal interest are payable, and the honest reading of a missed payment changes — the three days protect the cardholder from a delay, not from a decision not to pay.' },

      { kind: 'h', text: 'Four kinds of penalty, and what each one is' },
      {
        kind: 'table',
        caption: 'What can be charged, and on what footing',
        headers: ['Situation', 'What may be charged', 'What the borrower should check'],
        rows: [
          ['A card payment is late', 'A late payment charge and penal interest, once the account is more than three days past due', 'The date on the statement, against the date the charge was levied'],
          ['A loan instalment is late', 'A penal charge disclosed in the schedule, levied as an amount rather than as a rate on the whole loan', 'Whether interest has been charged on the penalty itself, which is not permitted'],
          ['An auto-debit mandate bounces', 'A charge from the bank and a separate charge from the lender', 'Both line items, since each is a different institution’s price and each is separately negotiable'],
          ['A cheque is dishonoured', 'A bank charge, and the possibility of proceedings under the dishonour provisions', 'This is the one penalty with consequences beyond money, so prevention is the strategy'],
        ],
      },
      l5Rule(
        'How a penalty may be charged',
        'Penalties on loans, including those on account of a default or a breach, must be levied as penal charges and not as penal interest: the penalty is not to be added to the rate charged on the loan, must be disclosed in the loan agreement and published in the lender’s schedule of charges, and must not be capitalised, so no interest may be charged on the penalty itself. On a credit card, a late payment charge and penal interest become payable only once the account has remained past due for more than three days. Charges wrongly levied must be refunded, and a complaint about a charge is made first to the lender’s grievance channel, and thereafter to the ombudsman where one applies. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'Disputing a charge and winning' },
      { kind: 'p', text: 'A dispute about a penalty is decided on documents rather than on principle, which is why it is winnable. Three things need to be established: what was charged, when it was charged, and whether the charge appears in the applicable schedule. The statement and the schedule of charges provide all three, and a written complaint that quotes the rule and the dates is far more effective than a call, because it creates a record and starts a clock. Where a charge is reversed informally, that is a resolution; where it is refused, the reference number from the complaint is what makes the refusal reviewable.' },
      { kind: 'p', text: 'The larger point is a habit rather than a tactic. Late payment is expensive in three ways at once: the penalty itself, the interest that starts accruing on a card once the free period is suspended, and the credit report, where a missed payment is reported and remains visible for years. That is why the cheapest way to deal with penalties is to remove the possibility — an auto-debit set a few days before the due date, a buffer in the account that the mandate draws on, and a calendar reminder for the accounts that are paid manually. The rules protect a borrower who is late; they do not make being late cheap.' },
      { kind: 'p', text: 'One further distinction is worth keeping straight. A charge for a service is not a penalty, even when it feels like one. A penal charge arises from a breach; a fee is the price of something provided. Where a lender has dressed up an ordinary charge as a penalty, or a penalty as a fee to avoid the disclosure requirements, the test is whether the charge attaches to a breach of the agreement — and if it does, the rules on penal charges apply to it whatever the label.' },
      sim('l5-penalty-dispute', 'Choose the product, move the due date, and separate the lawful part of a charge from the part that is worth disputing.'),
      l5Illustrative('The amounts, rates and dates in the lab are invented for practice. The rules that penal charges are levied as amounts rather than as penal interest and are never capitalised, and that a late payment charge on a card becomes payable only once the account has stayed past due for more than three days, are the real framework verified on 15 October 2026 and linked below.'),

      { kind: 'h', text: 'When a charge appears' },
      { kind: 'list', ordered: true, items: [
        'Check the statement every month against the schedule of charges you were given, because charges change by notice.',
        'Where a charge falls inside a grace period, write in quoting the rule and the dates and ask for a reversal.',
        'On a loan, check whether interest has been applied to the penalty, which is not permitted.',
        'Where a mandate bounces, check both the bank’s charge and the lender’s, since they are separate items.',
        'Escalate through the grievance channel with the complaint reference, and to the ombudsman where one applies.',
        'Fix the cause: an auto-debit a few days early, a buffer balance, and a reminder for everything paid manually.',
      ] },
      { kind: 'p', text: 'The last thing to weigh is the credit record, because it outlives the money. A missed payment is reported, remains visible for years, and affects the price of every future borrowing — the one consequence of a late payment that no reversal of the charge can undo. Where the choice is between a small charge and a missed payment, the charge is the cheaper of the two by a wide margin.' },
      { kind: 'terms', items: [
        { term: 'Penal charge', meaning: 'The penalty for a breach, levied as an amount rather than as a rate on the whole loan, and never capitalised.' },
        { term: 'Penal interest', meaning: 'A penalty expressed as a rate, which is no longer the permitted form for a loan default.' },
        { term: 'Capitalisation', meaning: 'Adding a penalty to the balance so that interest is charged on it, which is not permitted.' },
        { term: 'Grace period', meaning: 'The three-day window past a card’s due date before late payment charges become payable.' },
        { term: 'Grievance redressal', meaning: 'The lender’s complaint channel, and the ombudsman route where one applies, with set timelines.' },
      ] },
      l5Sources(['rbi'], [
        'The directions on penal charges in loan accounts, the conduct rules on credit cards including the three-day window, and the fair practices code provisions on grievance redressal, escalation and the restitution of wrongly charged amounts',
      ]),
    ],
    quiz: [
      {
        q: 'You are four days late on a card bill of ₹80,000 and the issuer has charged a late fee and penal interest. What is the position?',
        options: [
          { text: 'Both are payable, since the three-day window has closed', correct: true, why: 'The window protects a delay of up to three days. At four days the account has remained past due for more than three days, so the charge and the penal interest are payable.' },
          { text: 'Neither is payable, because the account was paid in the same week', why: 'The rule is measured in days past the due date, not in whether payment arrived within the same week.' },
          { text: 'The fee is payable but the penal interest is not', why: 'Both become payable once the three-day mark is crossed. The distinction that matters on a card is the window, not the form of the charge.' },
          { text: 'It depends on the credit limit', why: 'The limit affects liability for an unauthorised transaction, not the timing of charges on a past-due account.' },
        ],
      },
      {
        q: 'A lender levies penal interest as a raised rate on the whole loan and then charges interest on the penalty. What is wrong with this?',
        options: [
          { text: 'Nothing, provided the rate is disclosed in the agreement', why: 'Disclosure does not make the form lawful. The rules specify that penalties are levied as charges and not as penal interest.' },
          { text: 'Both parts are wrong: the penalty must be levied as a charge, and it must not be capitalised, so no interest may be charged on it', correct: true, why: 'The form keeps the penalty proportionate to the lapse rather than to the size of the loan, and the bar on capitalisation stops a one-time charge from becoming a new loan.' },
          { text: 'Only the size of the penalty is questionable', why: 'The problem is the form and the capitalisation, which are settled by the rules rather than left to be judged as excessive.' },
          { text: 'It is permitted for secured loans and not for unsecured ones', why: 'The rules on penal charges apply to loans generally rather than by security type.' },
        ],
      },
      {
        q: 'Your home-loan instalment bounces because the mandate drew two days early. The lender charges ₹500 and the bank charges ₹250. What should you do?',
        options: [
          { text: 'Pay both, since a bounced mandate is always chargeable', why: 'A failed mandate can carry charges, but each is a separate institution’s price and both should be checked against the schedules you were given.' },
          { text: 'Check both charges against the schedules, and dispute whichever was levied without basis or outside the terms you agreed', correct: true, why: 'The two charges are separate line items from two institutions, and the remedy is the same: quote the schedule and the date in writing and escalate if refused.' },
          { text: 'Dispute the lender’s charge only', why: 'Both are separate charges, and a bank may reverse an early presentation error if it is raised.' },
          { text: 'Ignore them, since the amounts are small', why: 'A failed mandate can also be reported and can delay the instalment, which costs more than the charges themselves.' },
        ],
      },
    ],
    takeaway: 'A penalty has a permitted form and a window: on a loan it is a charge that cannot be capitalised, and on a card it cannot be levied in the first three days past due.',
  },

  'l5-066': {
    id: 'l5-066',
    title: 'Clauses',
    subtitle: 'Four clause families decide most disputes, and only one of them is usually worth negotiating.',
    minutes: 12,
    blocks: [
      scene('clause-library', 'A page of clauses sorted into four families that move money, with the routine clauses that fill the rest of the page set aside.'),
      { kind: 'p', text: 'Contracts are long for two reasons: clauses are cheap to add, and length itself works as a negotiating tactic, because the party who drafts the document knows which pages matter. The consequence is that reading a contract from beginning to end is a poor use of attention. Disputes that reach a hearing cluster around a handful of clause types, and the same handful appears across products — in a loan, a tenancy, a broking account, an insurance policy and an employment contract. Learning to find them is more useful than learning to read faster.' },
      { kind: 'p', text: 'The first family is the asymmetry between what you promise and what the other side owes. An indemnity that runs one way, sitting beside a liability cap that holds the firm’s exposure to the fees it has collected, is the single most expensive combination in ordinary paperwork: your exposure is unlimited and theirs is a number in a sentence. The second family is the ability to change the terms you agreed, usually described as variation by notice. Where the price is inside the variable terms, the number you accepted is a starting point rather than a settled term.' },
      { kind: 'p', text: 'The third family decides how the contract ends. Auto-renewal converts silence into consent, which is how a service gets paid for after it has stopped being wanted, and an exit clause decides what leaving costs. The fourth family decides where a disagreement is heard: arbitration and jurisdiction, together with who pays for the process. That last family rarely decides whether you are right; it decides whether being right is worth pursuing, which is why a low-value dispute can be settled by the cost of the forum rather than by the merits.' },

      { kind: 'h', text: 'The four families, and the routine clauses' },
      {
        kind: 'table',
        caption: 'What to find, and what to leave alone',
        headers: ['Family', 'The clause as written', 'Why it decides money'],
        rows: [
          ['Indemnity and liability', 'You indemnify the firm against all losses; the firm’s liability is capped at the fees paid', 'Your exposure is open while theirs is bounded, which is the whole asymmetry in one pairing'],
          ['Variation', 'Terms, including charges, may be changed on notice', 'The price and the scope can move after agreement, so the notice period and the exit terms carry the value'],
          ['Termination and renewal', 'The contract renews automatically unless cancelled in writing', 'Converts inaction into consent, and decides what leaving costs'],
          ['Dispute resolution', 'Disputes go to arbitration at a named seat, with the cost borne by one side', 'Decides whether a genuine grievance is economic to pursue'],
          ['Routine', 'Governing law, jurisdiction, notice addresses, mutual exit on reasonable notice', 'Standard and often protective: flagging these hides the clauses that matter'],
        ],
      },
      l5Rule(
        'What the law already removes from a contract',
        'An agreement that restricts a party absolutely from enforcing its rights before the ordinary courts, or that limits the time within which it may do so, is void to that extent. Where a contract is broken, the party injured is entitled to compensation for the loss caused, whether or not a sum is named as payable on breach, and where a sum is named the court may award reasonable compensation not exceeding it. Under consumer law, an unfair contract includes one that gives a trader a unilateral right to terminate, cancel or withdraw, a unilateral right to assign, obligations that are one-sided, or an unreasonable indemnity in its favour. Arbitration requires a written agreement, and the seat, the appointment process and the costs are the parts a party should read before a dispute rather than during one. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'Negotiating a clause rather than a sentence' },
      { kind: 'p', text: 'Clauses are negotiated in pairs. An indemnity is answered by a cap and by making it mutual; a liability cap is answered by carving out the firm’s own negligence and breach of confidentiality; a variation clause is answered by a notice period with a right to exit without penalty at the moment of change; an auto-renewal is answered by requiring affirmative renewal rather than silent continuation, or at least by a reminder obligation. Approaching the document this way has a practical benefit: it produces a small number of specific requests, each of which the other side can accept or refuse, rather than a general objection that the contract is unfair.' },
      { kind: 'p', text: 'Two clauses are almost never worth arguing about. Governing law and jurisdiction are usually standard and often protective, and a mutual right to exit on reasonable notice is a term in your favour. The routine clauses exist to make the agreement workable, and treating them as traps spends the credibility that the four families need. The one exception is where a routine-looking clause has been given unusual content — a jurisdiction far from where either party operates, or a notice provision that runs one way only.' },
      { kind: 'p', text: 'Finally, definitions. Cost is usually hidden in the definitions section rather than in the operative clauses: what counts as a fee, what counts as a default, when a day begins, and what “expenses” includes. A contract that defines charges broadly and lists them narrowly has done its real work in the definitions, and a reader who skips that section has skipped the part that decides the bill.' },
      sim('l5-clause-spotter', 'Mark the clauses that move money, price the asymmetry they create, and see how flagging routine clauses hides the ones that matter.'),
      l5Illustrative('The exposures, fees and renewal counts in the lab are invented for practice. The rules on agreements that restrict a party from enforcing its rights, on compensation for breach, on the definition of an unfair contract in consumer law, and on the writing required for arbitration, are the real framework verified on 15 October 2026 and linked below.'),

      { kind: 'h', text: 'A reading routine that takes ten minutes' },
      { kind: 'list', ordered: true, items: [
        'Read the definitions first, because that is where “fees”, “default” and “expenses” are defined.',
        'Find the indemnity and the liability cap, and read them as a pair.',
        'Find the variation clause, and check whether the price is inside it.',
        'Find the renewal and termination clauses, and note the notice required to leave.',
        'Find the dispute clause, and note the forum, the seat and who pays.',
        'Ignore the rest until one of the four turns up somewhere unexpected.',
      ] },
      { kind: 'terms', items: [
        { term: 'Indemnity', meaning: 'A promise to make good another party’s loss, which should be mutual and capped wherever it cannot be.' },
        { term: 'Liability cap', meaning: 'A ceiling on what one party can be made to pay, often set at the fees it has collected.' },
        { term: 'Variation clause', meaning: 'A term allowing the agreement to be changed by notice, including its charges.' },
        { term: 'Auto-renewal', meaning: 'Continuation of the agreement without an affirmative act, unless cancelled in the manner the clause requires.' },
        { term: 'Arbitration', meaning: 'A private dispute process requiring a written agreement, with its own seat and cost rules.' },
        { term: 'Unfair contract', meaning: 'Under consumer law, one that causes a significant change in consumer rights, including one-sided or unilateral terms.' },
      ] },
      l5Sources(['indiacode'], [
        'The Contract Act on agreements that restrict legal proceedings and on compensation for breach, the consumer protection law on unfair contracts and the forums that decide them, and the arbitration law on the writing an arbitration agreement requires, the appointment of arbitrators and the costs of the process',
      ]),
    ],
    quiz: [
      {
        q: 'Your contract with a service provider says you indemnify them against all losses, while their liability is capped at the fees you have paid. What should your first request be?',
        options: [
          { text: 'Delete the liability cap', why: 'Removing the cap entirely is a larger ask than making the indemnity symmetrical, and it is easier to refuse.' },
          { text: 'Make the indemnity mutual and cap it, so that neither side’s exposure is open while the other’s is bounded', correct: true, why: 'The problem is the pairing rather than either clause alone: an open indemnity beside a closed liability cap transfers all the risk to one side, and the remedy is to close both.' },
          { text: 'Replace the contract with a verbal understanding', why: 'A verbal arrangement removes the record that protects you when a dispute arises.' },
          { text: 'Ask for a lower fee to reflect the risk', why: 'A discount does not bound an unlimited exposure; the clause has to change.' },
        ],
      },
      {
        q: 'A contract says prices may be revised by notice at the firm’s discretion. What makes that clause acceptable in practice?',
        options: [
          { text: 'A statement that the charges will be reasonable', why: 'Reasonableness is not measurable ex ante and is argued about ex post, which is precisely what a notice period and an exit right avoid.' },
          { text: 'A defined notice period, together with a right to exit without penalty when the change takes effect', correct: true, why: 'A variation clause decides the price; the notice and the penalty-free exit are what stop a change from binding a customer who cannot leave.' },
          { text: 'A promise to inform the customer eventually', why: 'Notification without a period or an exit right leaves the customer bound by a price they would not have accepted.' },
          { text: 'A cap on how often prices may rise', why: 'A frequency cap helps but does not answer what happens when the increase arrives.' },
        ],
      },
      {
        q: 'A dispute over ₹18,000 must be arbitrated at a seat five hundred kilometres away, with the complaining party bearing its own costs. What has the clause effectively done?',
        options: [
          { text: 'Improved the process by making it faster', why: 'Speed does not help where the cost of the process exceeds the amount in dispute.' },
          { text: 'Decided the outcome, by making it uneconomic to pursue a genuine claim', correct: true, why: 'The dispute-resolution family decides whether being right is worth pursuing, which is why the forum, the seat and the cost allocation belong in the reading rather than in the assumption.' },
          { text: 'Nothing, because arbitration is always cheaper than court', why: 'Arbitration can be faster, but the seat and the cost allocation decide whether it is cheaper for a small claim.' },
          { text: 'Made the claim void under the law', why: 'The clause governs the forum; it does not extinguish the claim, though it can make it impractical.' },
        ],
      },
    ],
    takeaway: 'Read the definitions, then find the indemnity, the variation clause, the renewal and the dispute forum: those four decide the money, and everything else is length.',
  },

  'l5-067': {
    id: 'l5-067',
    title: 'Negotiation Of Salary',
    subtitle: 'The negotiation is about structure before it is about number: fixed pay compounds, variable pay does not.',
    minutes: 12,
    blocks: [
      scene('raise-negotiation', 'A package split into fixed pay, variable pay and benefits, with the compounding line drawn through fixed pay alone.'),
      { kind: 'p', text: 'Pay negotiations are usually imagined as a single number, and they are actually a structure. A package of lakhs is a fixed component, a variable component, contributions to provident fund and gratuity, insurance, leave, and the notice the employee owes. Each behaves differently over time. Fixed pay compounds, because every future increment is a percentage of it and because provident fund contributions, loan assessments and retirement benefits are computed on it. Variable pay does not compound through the increment cycle, because increments are normally applied to fixed pay, and it moves with the employer’s year rather than with the employee’s performance alone. That difference is worth more than a few per cent on the total.' },
      { kind: 'p', text: 'The second thing to establish is the evidence. An ask supported by delivered outcomes and by comparable pay is a market correction; an ask supported by need is a request. Most of the evidence is available without asking anybody: advertisements for the same role carry bands, offers are discussed in professional networks, and an employer’s own increments are usually visible in what new joiners are offered. What makes the conversation work is that a market correction can be granted on the merits, while a personal request asks the manager to make a judgement about a person, which is a slower and more political decision.' },
      { kind: 'p', text: 'Timing is the third variable, and it is decided by the employer’s calendar rather than by the employee’s frustration. A review cycle, a completed project, a promotion window or a resignation in the team are all moments when a case is cheap to decide. Asking three weeks after a cycle has closed means waiting a year for the next decision point. The same evidence produces a different result at a different point in the calendar, which is why planning the ask is part of making it.' },

      { kind: 'h', text: 'What a package is made of, and what each part does' },
      {
        kind: 'table',
        caption: 'The components of a package, and how each behaves',
        headers: ['Component', 'How it is set', 'How it behaves over time'],
        rows: [
          ['Fixed pay', 'Negotiated, and the base for everything else', 'Compounds: increments, provident fund, gratuity and loan eligibility are calculated on it'],
          ['Variable pay', 'A percentage of fixed pay, or of a target', 'Moves with the employer’s performance and the appraisal, and does not feed the increment base'],
          ['Provident fund', 'Twelve per cent of basic pay and dearness allowance, with a matching employer contribution', 'A forced saving that compounds, plus the employer share as a real part of the package'],
          ['Gratuity', 'Payable after five years of continuous service', 'A benefit that accumulates quietly and is lost entirely where service falls short'],
          ['Insurance and leave', 'Group cover and paid leave', 'Non-cash value that does not appear in the monthly figure but is priced on the market'],
          ['Notice period', 'Set by the contract', 'Costs money at the moment of leaving, and is worth reading before an offer is accepted'],
        ],
      },
      l5Rule(
        'Provident fund, gratuity and tax on salary',
        'Provident fund contributions are twelve per cent of basic pay and dearness allowance from the employee, matched by the employer, with the wage ceiling determining the threshold of coverage and contributions computed on the higher figure where the employer applies it. Gratuity is payable after five years of continuous service, with the benefit calculated on the last drawn salary and the length of service. Salary is taxed under the head of salaries, with tax deducted at source by the employer on the estimated annual income, a standard deduction available from the salary income, and the employer bound to issue a certificate of the tax deducted. Reimbursements are exempt only where they are for business expenses actually incurred, and an allowance is taxable as salary unless a provision exempts it. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'Tax, because the same rise is a smaller rupee figure' },
      { kind: 'p', text: 'A rise is quoted gross and received net, and the difference is large enough that two sides can argue from two different totals. On a fixed salary in the tens of lakhs, a fifth to a third of an incremental rupee goes to tax, so a ₹1.8 lakh rise is a materially smaller change in take-home pay. Quoting the net figure is not a concession; it is what makes the conversation about the same number. And the structure matters here too: an allowance that is fully taxable does not have the same value as the same amount contributed to a retirement account within the limits that apply, and it is the employer, not the employee, who decides the split before the number is agreed.' },
      { kind: 'p', text: 'The reason to write the outcome down is that an agreement to raise pay is a fact about a period, and the people who agreed to it move on. A document that records the fixed pay, the variable basis, the review date and the notice survives a change of manager, a reorganisation and an appraisal cycle. Where an employer will not confirm a commitment in writing, the commitment is weaker than it appears — which is useful information, and it arrives in time to matter.' },
      { kind: 'p', text: 'The final piece is the counter-offer, which arrives most often when a resignation does. A counter-offer is a decision about the price of replacing somebody rather than a judgement about their work, and it changes none of the reasons the resignation was written. Reading it as a market correction and taking it is a legitimate choice; reading it as recognition is a misreading, and it is the misreading that produces a second resignation a year later.' },
      sim('l5-raise-negotiation', 'Split a package into fixed, variable and non-cash parts, ask for a rise and see the take-home change, the gap to market and the value of the terms beside the number.'),
      l5Illustrative('The packages, rises, market references and tax figures in the lab are invented for practice, and the tax calculation there is a rough approximation of one regime rather than advice. The provident fund contribution rates, the gratuity entitlement after five years, the standard deduction from salary income and the employer’s obligation to deduct tax at source and issue a certificate are the real framework verified on 15 October 2026 and linked below.'),

      { kind: 'h', text: 'The order of the conversation' },  
      { kind: 'list', ordered: true, items: [
        'Establish the market band for the role before deciding what to ask, using advertisements, offers and internal data.',
        'Collect the evidence of outcomes delivered, in numbers where possible, and write it down.',
        'Ask about fixed pay first, because it sets the base for every future increase and for provident fund and gratuity.',
        'Check what the variable component is a percentage of, and what happens to it in a bad year.',
        'Price the non-cash terms: insurance, leave, notice, and any retirement contribution the employer makes.',
        'Quote the net change where the gross number is the subject of disagreement, and ask for the outcome in writing.',
      ] },
      { kind: 'p', text: 'One term deserves attention out of proportion to its size: the notice period. A three-month notice owed to an employer delays the next job and can cost a month or two of the new salary, and where a new employer will buy out notice, the old employer may refuse. Negotiating the notice down, or getting the buy-out recorded, is a cheap concession to ask for at the moment an offer is accepted — when the counterparty wants the agreement as much as the candidate does.' },
      { kind: 'terms', items: [
        { term: 'Fixed pay', meaning: 'The guaranteed component of a salary, on which increments, provident fund and most benefits are calculated.' },
        { term: 'Variable pay', meaning: 'The performance-linked component, which does not normally feed the increment base.' },
        { term: 'CTC', meaning: 'The cost to company of a package, including contributions it makes on the employee’s behalf rather than only what is paid out.' },
        { term: 'Gratuity', meaning: 'A lump sum payable after five years of continuous service, calculated on the last drawn salary.' },
        { term: 'Counter-offer', meaning: 'A revised offer made when an employee resigns, reflecting the cost of replacement rather than a reassessment of the work.' },
      ] },
      l5Sources(['incometax', 'epfo'], [
        'The taxation of salary, the standard deduction, the employer’s obligation to deduct tax at source and issue a certificate, and the treatment of allowances and reimbursements',
        'Provident fund contributions and the wage ceiling, membership and contribution rules, and the gratuity entitlement and its calculation after five years of service',
      ]),
    ],
    quiz: [
      {
        q: 'You are offered the same total package by two employers, one weighted towards fixed pay and one towards variable. Why does the split matter?',
        options: [
          { text: 'Only the total matters, since both pay the same', why: 'The totals differ in behaviour: increments are normally applied to fixed pay, and provident fund and gratuity are calculated on it too.' },
          { text: 'Fixed pay compounds through increments and drives provident fund, gratuity and loan eligibility, while variable pay moves with the employer’s year', correct: true, why: 'The structure is the part that grows. A package weighted to fixed pay increases the base that every later percentage is applied to, which a variable component does not.' },
          { text: 'Variable pay is untaxed', why: 'Variable pay is taxed as salary like any other component.' },
          { text: 'Fixed pay is more tax efficient', why: 'The head of taxation is the same; the difference lies in how each component behaves over time.' },
        ],
      },
      {
        q: 'Your manager says the review cycle closed three weeks ago. What is the best next step?',
        options: [
          { text: 'Threaten to resign unless the raise is given now', why: 'A threat converts a pay case into a loyalty question. The strongest version uses evidence and a decision point rather than pressure.' },
          { text: 'Prepare the evidence now and ask at the next decision point, such as the next cycle, a promotion window or the completion of a major deliverable', correct: true, why: 'Timing is decided by the employer’s calendar: the same case is cheap to decide where a decision is already being taken, and expensive where it is not.' },
          { text: 'Ask for a one-off bonus instead', why: 'A bonus is a one-time payment and does not raise the base on which future increments are calculated.' },
          { text: 'Accept that nothing can change until next year', why: 'Decision points occur outside the annual cycle too, at promotions, scope changes and resignations in the team.' },
        ],
      },
      {
        q: 'Your employer offers a counter-offer after you resign. What does it most accurately represent?',
        options: [
          { text: 'Recognition of your value, now that management has noticed', why: 'A counter-offer is a price decision made about the cost of replacing somebody, and it arrives only when the alternative is a vacancy.' },
          { text: 'The cost of replacing you, which is why it arrives at resignation and not at the review', correct: true, why: 'Reading it as a market correction and accepting it is reasonable; reading it as recognition is what leads to a second resignation a year later.' },
          { text: 'A contractual entitlement you should have received earlier', why: 'There is no entitlement to a revised package; the counter-offer is a new proposal priced against a replacement cost.' },
          { text: 'A signal that the appraisal process is fair', why: 'The timing of a counter-offer tells you about replacement risk, not about the fairness of the process.' },
        ],
      },
    ],
    takeaway: 'Negotiate the structure and the evidence: fixed pay compounds, variable pay does not, and an agreed outcome that is not in writing is not an outcome.',
  },

  'l5-068': {
    id: 'l5-068',
    title: 'Rent',
    subtitle: 'Negotiate the total cost of occupancy, not the number on the advertisement.',
    minutes: 11,
    blocks: [
      scene('rent-levers', 'The quoted rent beside the deposit, the escalation, the brokerage and the moving cost, which together decide what a tenancy costs.'),
      { kind: 'p', text: 'Rent is the most negotiated line item in a household budget and rarely the one that moves the most. The total cost of occupancy is the rent plus the cost of the deposit plus brokerage plus the cost of moving in and later out, and across a few years it includes every annual increase compounding on top of the base. Once the total is the subject, the negotiation changes shape: a deposit reduced from six months to three releases more cash and more interest than a modest discount on the rent, and an escalation capped is worth more in the third year than a first-year reduction is in the first.' },
      { kind: 'p', text: 'The way to make the rent part of the argument is evidence rather than preference. An owner hears a number about needs and a number about the market very differently, and the second is checkable: advertisements for comparable homes in the same locality, with the same configuration, floor and amenities. Three comparables, with the rents quoted and the dates noted, turn a request into a decision the owner can defend to a family that expects a certain rent. Where the quoted rent is at or below the comparables, that itself is information, and the negotiation moves to the deposit, the escalation and the notice period instead.' },
      { kind: 'p', text: 'The deposit deserves a separate calculation because it is the largest single payment involved and it produces no income. Six months of rent on a ₹42,000 tenancy is ₹2.52 lakh, which at a modest interest rate is roughly ₹17,600 a year of foregone income — often more than the whole of a negotiated rent reduction. Deposits are also the most disputed item at the end of a tenancy, which is why the concession to seek is not only fewer months but a written refund deadline against a signed inventory.' },

      { kind: 'h', text: 'What a tenancy costs, beyond the rent' },
      {
        kind: 'table',
        caption: 'The five numbers in a rent negotiation',
        headers: ['Item', 'Why it costs', 'The lever'],
        rows: [
          ['Rent', 'The recurring charge, and the base for everything else', 'Evidence from comparables, and the length of the tenure offered'],
          ['Deposit', 'Cash locked up, earning nothing, and at risk at the end', 'Months held, the refund deadline, and the inventory attached to the agreement'],
          ['Escalation', 'Applies to the rent each year, and compounds', 'A cap, or a longer freeze in exchange for accepting the rate'],
          ['Brokerage and moving', 'Paid once at the start, and again at the next move', 'Amortised over the tenure: the shorter the stay, the higher their annual cost'],
          ['Maintenance and utilities', 'Monthly, and often rising separately from the rent', 'The clause that says who pays, and whether the amount is fixed'],
        ],
      },
      l5Rule(
        'Tax on rent, and who deducts it',
        'A tenant paying rent above ₹50,000 a month must deduct tax at source at 2% of the rent, and is not required to obtain a tax deduction account number to do so; the threshold works out to rent above ₹6 lakh a year. Where rent is within the limit, no deduction is required. An owner of a let-out property is allowed a standard deduction of thirty per cent of the rent for repairs and collection, and may deduct municipal taxes and interest on capital borrowed to acquire the property before the rental income is taxed. The exemption for house rent allowance paid to an employee is part of the salary provisions and is calculated by comparing the allowance, a share of salary and the rent actually paid, above a floor. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'The moment that decides the next three years' },
      { kind: 'p', text: 'Renewal is the point at which the bargaining positions come closest to equality, and it is almost always wasted. The owner’s alternative to a reasonable increase is a vacancy, redecorating, a broker’s fee and the risk of a tenant who does not pay; the tenant’s alternative is the cost of moving, which is real but smaller than it feels in the middle of the conversation. A tenant who has paid on time for two years and quotes the current market rents in the neighbourhood is asking for a decision the owner can justify, and the request is worth making before the increase is set rather than after.' },
      { kind: 'p', text: 'What makes the tenant’s position stronger is documentation. Rent receipts and bank transfers rather than cash, a written inventory from the start, and a registered agreement where the term is a year or more, together mean the tenancy has a record. Tenants who cannot show what they paid and what condition the flat was in at the start are the ones who end up arguing about a deposit, because the argument is about recollection. That is the practical link between the earlier chapter on tenancy terms and this one: the terms only become leverage where there is a record behind them.' },
      { kind: 'p', text: 'One last comparison is worth doing before signing anything: what the whole package costs per month, on an annualised basis, including the deposit’s foregone interest, brokerage spread over the expected stay, and the escalation. Two flats quoted at the same rent can differ by tens of thousands of rupees a year once those are included, and that difference is the one worth negotiating — because the monthly rent is only the part of it that is visible.' },
      sim('l5-rent-negotiation', 'Compare a quoted rent with a comparable, trade deposit months against escalation, and see the total across the years you expect to stay.'),
      l5Illustrative('The rents, deposits and escalations in the lab are invented for practice. The 2% tax deducted at source on rent above ₹50,000 a month, and the thirty per cent standard deduction for the owner, are the real framework verified on 15 October 2026 and linked below.'),

      { kind: 'h', text: 'Negotiating, in order of rupees' },  
      { kind: 'list', ordered: true, items: [
        'Collect three comparables with rents and dates, and quote them rather than a preference.',
        'Price the deposit months in rupees of foregone interest, and ask for fewer months before asking for a discount.',
        'Ask for a cap on the escalation, or a freeze for the first year, because it repeats every year.',
        'Amortise brokerage and moving costs over the years you expect to stay, and treat that as part of the rent.',
        'Fix who pays maintenance and society charges, and whether those rise separately.',
        'At renewal, quote the market and your payment record before the increase is set, and get the new terms in writing.',
      ] },
      { kind: 'terms', items: [
        { term: 'Total occupancy cost', meaning: 'Rent plus the deposit’s foregone interest plus brokerage, moving costs, maintenance and the escalation over the stay.' },
        { term: 'Comparable', meaning: 'A similar home in the same locality whose advertised rent is evidence for the negotiation.' },
        { term: 'Deposit', meaning: 'Money held by the owner, which earns nothing while it is held and needs a refund deadline.' },
        { term: 'Escalation', meaning: 'The annual increase in rent, which compounds and is therefore worth capping.' },
        { term: 'Tax deducted at source', meaning: 'The 2% a tenant deducts from rent above ₹50,000 a month.' },
      ] },
      l5Sources(['incometax', 'indiacode'], [
        'The deduction of tax at source on rent above ₹50,000 a month, the taxation of rental income for the owner, and the computation of the exemption for house rent allowance',
        'The Transfer of Property Act on leases and the notice to quit, and the registration requirements for leases of a year or more',
      ]),
    ],
    quiz: [
      {
        q: 'Two flats both quote ₹42,000. One asks six months’ deposit; the other asks three but will not cap the annual increase. Which question matters more?',
        options: [
          { text: 'The deposit, because it is cash you must find now', why: 'Cash today is real, but the uncapped escalation repeats every year and can outweigh the deposit’s opportunity cost over a three-year stay.' },
          { text: 'The escalation, because it compounds for as long as the tenancy lasts, while the deposit’s cost is a single annual figure on a fixed amount', correct: true, why: 'The deposit costs interest on a static sum; an escalation raises the base every year and applies to everything that follows, which is why a cap is the term that lasts.' },
          { text: 'Neither: only the rent matters', why: 'The rent is the same in both, which is precisely why the other two terms decide the comparison.' },
          { text: 'The brokerage, since it is paid immediately', why: 'Brokerage is paid once and amortises over the stay; it does not compound.' },
        ],
      },
      {
        q: 'You pay ₹60,000 a month by bank transfer and the owner has never mentioned tax. What are you required to do?',
        options: [
          { text: 'Nothing: the owner pays tax on the income', why: 'The owner is taxed on the rental income, but the tenant has an obligation to deduct tax at source above the monthly threshold.' },
          { text: 'Deduct 2% at source from the rent, without obtaining a tax deduction account number', correct: true, why: 'Above ₹50,000 a month, that is above ₹6 lakh a year, the tenant deducts 2%, and the provision exempts an individual tenant from having to obtain a deduction account number for it.' },
          { text: 'Pay in cash so that no deduction arises', why: 'Paying in cash does not remove the obligation and removes the payment record you need for a deposit dispute.' },
          { text: 'Report the tenancy to the tax department annually', why: 'The obligation is a deduction from the rent paid, not an annual report by the tenant.' },
        ],
      },
      {
        q: 'At renewal the owner asks for a 12% increase. What is the strongest form of the tenant’s case?',
        options: [
          { text: 'A statement that 12% is too much', why: 'A statement about fairness gives the owner nothing to act on; a market comparison gives them a decision to justify.' },
          { text: 'Comparable rents in the locality, the record of on-time payment, and the owner’s cost of a vacancy, presented before the increase is set', correct: true, why: 'Renewal is the point where the alternatives are closest: a vacant flat costs the owner redecorating, a broker’s fee and lost rent, which is why evidence delivered before the increase lands differently from an objection afterwards.' },
          { text: 'A threat to leave immediately', why: 'Leaving immediately usually triggers the lock-in or the notice period, which weakens the position rather than strengthening it.' },
          { text: 'A request to pay the increase only from the following year', why: 'Deferring the increase helps for one year and leaves the new base and the next escalation intact.' },
        ],
      },
    ],
    takeaway: 'Quote comparables, count the deposit in foregone interest, cap the escalation and use the renewal before the increase is set.',
  },

  'l5-069': {
    id: 'l5-069',
    title: 'Loans',
    subtitle: 'Four levers, one total: the instalment is what the cash flow feels, the total is what the loan costs.',
    minutes: 12,
    blocks: [
      scene('loan-levers', 'Four levers — rate, tenure, fees and prepayment — ranked by the rupees each one moves on the same loan.'),
      { kind: 'p', text: 'A loan negotiation is unusual in that most of it happens before the loan exists, when the borrower is still a customer being won rather than an account being serviced. That is the window in which fees are waived, rates are matched to a competitor, and the key facts are documented. Afterwards, the only levers left are the ones inside the contract: how much is paid each month, how long the term runs and whether the balance is paid down early. Knowing which lever moves the most rupees is what turns a negotiation into arithmetic rather than a conversation about the instalment.' },
      { kind: 'p', text: 'The rate is the largest lever and the most visible, which is why it is also the one most often offset: a lower rate with a higher processing fee and a longer tenure can cost more in total than the headline comparison suggests. The tenure is the lever borrowers most often pull in the wrong direction — stretching it lowers the instalment and raises the interest, which is the right trade for cash flow and the wrong one for cost. Fees are one-time and negotiable at sanction. Prepayment is the strongest lever a borrower holds, because every rupee repaid early removes all the future interest on it, and on a floating-rate loan to an individual, prepayment no longer carries a charge.' },
      { kind: 'p', text: 'What makes these comparable is a single number: the total repaid over the life of the loan, including fees. Two lenders quoting different rates can be compared only on that basis, and a key fact statement required before a retail loan is signed now makes the comparison possible in a common format — the all-in cost, the rate and the charges in one document. A borrower who reads it before signing is in a very different position from one who reconciles it afterwards.' },

      { kind: 'h', text: 'The four levers, ranked by what they move' },
      {
        kind: 'table',
        caption: 'Where the rupees are in a loan' ,
        headers: ['Lever', 'Effect on the instalment', 'Effect on the total'],
        rows: [
          ['Rate', 'Direct and immediate', 'The largest single influence over a long term'],
          ['Tenure', 'Lower instalment for a longer term', 'Higher total: the extra years are paid for in interest'],
          ['Fees', 'Small monthly effect when financed', 'One-time, negotiable at sanction, and cheap to ask for'],
          ['Prepayment', 'Little or no change to the instalment', 'The largest saving available, since it removes future interest entirely'],
          ['Balance transfer', 'A new instalment and a new term', 'Worth it only where the saving beats the transfer cost'],
        ],
      },
      l5Rule(
        'Prepayment, penalties and what has to be disclosed',
        'Charges for prepayment or foreclosure are not permitted on floating-rate loans to individuals and small enterprises from 1 January 2026, whether the repayment is partial or in full, and this covers the situation where a borrower switches to another lender. Penalties on loans are levied as penal charges rather than as penal interest and may not be capitalised. A lender must give notice before changing the terms of a loan, terms of the loan may not be changed unilaterally without the borrower’s consent, and a key fact statement setting out the all-in cost, the rate and the charges must be provided before a retail or small-enterprise loan is signed. Where a floating rate resets, the borrower must be informed and offered the choice between a revised instalment and a revised tenure. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'Reading a sanction letter the way a lender reads it' },
      { kind: 'p', text: 'The sanction letter and the key fact statement together answer the questions that decide the cost: the rate and its benchmark, the spread, the reset frequency, the processing and other charges, the penal charge, the prepayment terms, the security, and who the recovery agents are where recovery is outsourced. Three of those are worth insisting on before signing. The reset terms, because a rate that resets often transfers interest-rate risk to the borrower. The prepayment terms, because an agreement that charges for leaving binds the borrower to the lender. And the penal terms, because this is where the form of the charge decides how much a bad month costs.' },
      { kind: 'p', text: 'A balance transfer belongs in the same arithmetic rather than in a separate decision. It costs a new processing fee, often a legal and valuation charge, time, and the risk of the transfer completing after the new rate has already moved. It is worth doing where the saving over the remaining term clearly exceeds those costs, and the calculation is a straightforward one: the difference in interest over the remaining months, against the fees and charges of moving. What is not worth doing is transferring for a lower headline rate while lengthening the term, which reduces the instalment and raises the total.' },
      { kind: 'p', text: 'Finally, the choices after sanction. Where the borrower has surplus cash and a loan, the arithmetic usually favours prepaying the loan rather than investing at the same or a lower rate, because prepayment returns the loan rate with certainty and with no tax drag. That is a comparison of a certain return against an uncertain one, not a preference for being debt-free — and where cheap fixed-rate borrowing is available, the certainty of the loan rate is exactly what makes the comparison unwinnable by the investment.' },
      sim('l5-loan-negotiation', 'Change the rate, the tenure, the fee and the prepayment and watch which of the four moves the total by the most rupees.'),
      l5Illustrative('The amounts, rates, fees and prepayments in the lab are invented for practice. The bar on prepayment charges for floating-rate loans to individuals and small enterprises, the requirement that penalties be levied as charges without capitalisation, the key fact statement before a retail loan, and the disclosure of reset choices to the borrower, are the real framework verified on 15 October 2026 and linked below.'),

      { kind: 'h', text: 'The order of the ask' },  
      { kind: 'list', ordered: true, items: [
        'Get the key fact statement before signing, and compare lenders on the all-in cost rather than the headline rate.',
        'Negotiate the rate first, and check whether it is offset by a fee or a longer tenure.',
        'Ask for the processing fee to be waived or reduced while the lender is still competing for the account.',
        'Choose the tenure for cash flow, and know the extra total cost you are accepting for the lower instalment.',
        'Confirm the prepayment terms in writing, including that partial prepayment carries no charge.',
        'Price a balance transfer as a new loan: fees, charges and the remaining term, against the interest saved.',
      ] },
      { kind: 'p', text: 'One habit makes all of this cheaper and is worth adopting before the first loan is taken: keep the total repaid figure in view from the beginning. It is the number that does not change with a repackaged instalment, it is the number a fee waiver improves, and it is the number that makes a balance transfer comparable with staying put. Where a lender presents options, the request that cuts through the presentation is to see the total repaid under each one.' },
      { kind: 'terms', items: [
        { term: 'All-in cost', meaning: 'The total cost of a loan including interest and charges, expressed so that two offers can be compared.' },
        { term: 'Key fact statement', meaning: 'The summary a lender must give before a retail loan is signed, covering the rate, the charges and the all-in cost.' },
        { term: 'Reset', meaning: 'The revision of a floating rate, where the borrower may choose between a changed instalment and a changed tenure.' },
        { term: 'Prepayment', meaning: 'Repaying part or all of a loan early, which carries no charge on floating-rate loans to individuals.' },
        { term: 'Balance transfer', meaning: 'Moving a loan to another lender, which is worth doing only where the interest saved exceeds the cost of moving.' },
      ] },
      l5Sources(['rbi'], [
        'The directions on retail lending and the key fact statement, the rules on prepayment and foreclosure charges including the bar on floating-rate loans to individuals, the treatment of penal charges in loan accounts, and the reset of floating-rate loans with the options to be offered to a borrower',
      ]),
    ],
    quiz: [
      {
        q: 'A lender offers a lower rate but a five-year longer tenure, and says the instalment will be almost the same. What should you check?',
        options: [
          { text: 'Nothing: the same instalment at a lower rate is an improvement', why: 'The instalment is not the cost. The extra years are paid for in interest, and the total repaid is what changes.' },
          { text: 'The total repaid over the life of the loan, because a longer tenure raises it even when the rate falls', correct: true, why: 'Rate and tenure work in opposite directions on the total, so the comparison has to be made on the total repaid rather than on the monthly figure.' },
          { text: 'The processing fee only', why: 'Fees matter at the margin, but the tenure change is what moves the total materially.' },
          { text: 'Whether the rate is fixed or floating', why: 'That is worth knowing for other reasons, but it does not answer the question about the longer tenure.' },
        ],
      },
      {
        q: 'You want to pay off a floating-rate home loan five years early. What charge can the lender levy?',
        options: [
          { text: 'A foreclosure charge as stated in the agreement', why: 'A contractual clause cannot override a direction, and the charge is barred for this category of loan.' },
          { text: 'None: prepayment charges are not permitted on floating-rate loans to individuals, whether partial or in full, including where you switch lenders', correct: true, why: 'The bar is on the category of loan and borrower rather than on the size or the form of the repayment, which is what makes prepayment the strongest lever a borrower holds.' },
          { text: 'A charge only on the final instalment', why: 'There is no such exception; the bar covers partial repayment and foreclosure alike.' },
          { text: 'A charge only if you switch to another lender', why: 'Switching is one of the situations the bar protects, not an exception to it.' },
        ],
      },
      {
        q: 'Your floating rate rises and the lender extends the tenure instead of the instalment. What is required of the lender?',
        options: [
          { text: 'Nothing, as long as the instalment stays the same', why: 'The borrower has to be informed of the reset and offered the choice, because the two options are not equivalent in cost.' },
          { text: 'Informing you of the reset and offering the choice between a revised instalment and a revised tenure', correct: true, why: 'A quiet tenure extension adds years of interest, which is why the disclosure of the reset and the choice between the two options matters to the borrower rather than only to the lender.' },
          { text: 'A fresh loan agreement to be signed', why: 'A reset adjusts the existing agreement rather than replacing it.' },
          { text: 'Only a change in the benchmark to be published', why: 'A published benchmark does not discharge the duty to explain what the reset does to the borrower’s loan.' },
        ],
      },
    ],
    takeaway: 'Compare offers on the total repaid, negotiate the rate and the fee before sanction, and use prepayment as the lever that removes future interest entirely.',
  },

  'l5-070': {
    id: 'l5-070',
    title: 'Contracts And Freelance Rates',
    subtitle: 'A rate is a business calculation wearing the clothes of a personal one, and that is why it is underpriced.',
    minutes: 12,
    blocks: [
      scene('freelance-rate-build', 'A rate built from living costs, fixed costs, billable hours and tax, with the revision count and payment terms drawn as the two clauses that quietly reduce it.'),
      { kind: 'p', text: 'Freelance work inverts the arithmetic of a salary. A salaried employee receives a monthly amount and the employer carries the costs of selling the work, the cost of idle time, the contributions to retirement, the equipment and the risk that a client does not pay. A freelancer carries all of them, and then has to earn the overhead in the rate. This is why a freelancer charging the hourly equivalent of their old salary is earning substantially less than the salary: the rate has to cover everything the employer used to provide, grossed up for tax, before it is compared with anything.' },
      { kind: 'p', text: 'The build-up is mechanical. Start from the take-home needed and the fixed costs of working, gross them up for tax, because the invoice is not the income, and divide by the hours that can actually be sold in a year. Those hours are the trap. A forty-hour week does not contain forty billable hours: sales, proposals, invoicing, learning, administration and the gaps between projects are all real work and none of it is billed. A freelancer who prices on forty billable hours a week has understated the rate by roughly half, and will discover it as a year of long weeks with income that does not match.' },
      { kind: 'p', text: 'The second part of the rate is protecting it, which is a matter of contract rather than confidence. Scope creep is the largest cause of a practice earning less per hour every year while working more: a quotation is given for a piece of work, the work grows by amendment, and the price does not. The defence is specific and unglamorous — the scope in numbered deliverables, a stated number of revisions, a rate for work beyond it, a stage payment on signing, and payment terms with a consequence for delay. Each clause converts a negotiation that would otherwise happen mid-project into a term agreed at the start.' },

      { kind: 'h', text: 'The clauses that protect a rate' },
      {
        kind: 'table',
        caption: 'Five terms that keep the quoted rate intact',
        headers: ['Term', 'Purpose', 'What happens without it'],
        rows: [
          ['Scope in deliverables', 'Defines what is being bought', 'The work expands while the price stays fixed'],
          ['Revision count', 'Prices the iteration explicitly', 'Every round of feedback reduces the effective hourly rate'],
          ['Rate for extra work', 'Prices anything beyond the scope', 'Additional work is done free, because the alternative is an argument'],
          ['Stage payment on signing', 'Funds the work before delivery', 'The practice finances the whole job and the client’s cash flow'],
          ['Payment terms and consequences', 'Makes the invoice date real', 'Long payment cycles turn profitable work into a cash shortage'],
        ],
      },
      l5Rule(
        'Presumptive tax for professionals, and which taxes apply',
        'A professional with gross receipts within the prescribed ceiling may use the presumptive scheme, under which half of the gross receipts are deemed to be income and taxed accordingly, and the ceiling is higher where receipts are substantially received through banking channels rather than in cash. Where the scheme is used, the professional is not required to maintain books or have the accounts audited, provided the conditions are met. Where it is not used, the professional keeps books, has them audited above the prescribed turnover limit, and pays tax in advance in instalments through the year, with interest for shortfalls. Where a client is required to deduct tax at source on professional fees, the deduction applies at the prescribed rate, and tax on the receipts is still payable in advance by quarterly instalments rather than in a single payment at the end of the year. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'Cash flow is the constraint, not the rate' },
      { kind: 'p', text: 'Most freelance businesses do not fail because the rate is too low; they fail because the money arrives late. A practice with a ₹6 lakh quotation, a 30% advance and payment on sixty-day terms has funded the remaining ₹4.2 lakh of its own work for two months, and if it has two such projects running, the funding requirement is larger than its annual profit. That is why the payment terms and the advance belong in the same conversation as the price: they determine how much working capital the practice needs, and working capital is what runs out first.' },
      { kind: 'p', text: 'The advance is also the cheapest way to test a client. A client who refuses a stage payment on signing while insisting on a long payment cycle is telling the practice something about how the invoice will be treated, and the information arrives before the work is done rather than after. For work quoted in stages, aligning payments with deliverables — a third on signing, a third on interim delivery, a third on completion — keeps the funding balanced against the work actually delivered.' },
      { kind: 'p', text: 'One structural decision follows from all of this: whether to quote by the hour, by the project or by a retainer. Hourly rates are transparent and punish efficiency, since doing work faster reduces the invoice. Project pricing rewards the practice for being quick and transfers the risk of estimate error to it. Retainers are the most stable and the most valued, because they convert a series of negotiations into a relationship with a monthly commitment. Most practices end up with a mixture, and the mixture is a business decision rather than a pricing preference — which is exactly why the rate deserves to be calculated rather than sensed.' },
      sim('l5-freelance-rate', 'Build a rate from living costs, fixed costs, billable hours and tax, then add revisions and payment terms to see the effective rate fall.'),
      l5Illustrative('The income targets, hours, rates and terms in the lab are invented for practice. The presumptive scheme for professionals with its deemed-income share and receipts ceiling, the requirement to pay advance tax in instalments, the auditing threshold above the prescribed turnover, and the deduction of tax at source on professional fees, are the real framework verified on 15 October 2026 and linked below.'),

      { kind: 'h', text: 'Setting up a practice to be paid properly' },  
      { kind: 'list', ordered: true, items: [
        'Calculate the required annual gross from living costs, fixed costs and tax, before deciding on any rate.',
        'Estimate billable hours honestly, after vacations, sales, administration and learning, and divide by that number.',
        'Quote a scope in numbered deliverables, with a stated number of revisions and a rate for work beyond it.',
        'Ask for a stage payment on signing, and align the rest with deliverables rather than with dates.',
        'Set payment terms with a consequence, and keep a record of invoices raised and payments received.',
        'Set aside tax through the year, and pay advance tax in instalments rather than in a lump at the end.',
        'Raise the rate at least annually, quoting the record of delivered work and the outcomes rather than the need.',
      ] },
      { kind: 'p', text: 'The last habit is the one practitioners avoid: raising the rate. A rate is a price and prices move with demand, with a track record and with the cost of the practice. A freelancer who has never raised a rate has been accepting a pay cut every year, because costs rise and the same quote buys less. The moment to raise it is at the start of a new engagement, with a record of what the last one delivered — which is why the same document discipline that protects the work also ends up pricing it.' },
      { kind: 'terms', items: [
        { term: 'Billable hours', meaning: 'Hours that can actually be sold, after vacations, sales, administration and learning are excluded.' },
        { term: 'Scope creep', meaning: 'The growth of work beyond what was quoted, which reduces the effective rate unless it is priced.' },
        { term: 'Stage payment', meaning: 'A part of the fee paid on signing or on a deliverable, which funds the work as it proceeds.' },
        { term: 'Presumptive scheme', meaning: 'A tax regime under which a prescribed share of gross receipts is deemed income, avoiding books and audit within limits.' },
        { term: 'Advance tax', meaning: 'Tax paid in quarterly instalments through the year, with interest for a shortfall.' },
        { term: 'Retainer', meaning: 'A recurring monthly fee for an agreed availability or output, which stabilises both the practice and the client.' },
      ] },
      l5Sources(['incometax', 'rbi'], [
        'The presumptive scheme for professionals and its receipts ceiling, the requirement to maintain books and have accounts audited above the prescribed limits, advance tax instalments and interest for a shortfall, and the deduction of tax at source on professional fees',
        'The rules on payments and receipts, and the bank and payment system provisions that decide how a professional invoices, collects and records a receipt from a client',
      ]),
    ],
    quiz: [
      {
        q: 'A freelancer wants to earn ₹1 lakh a month take-home, has ₹30,000 of monthly fixed costs, and can bill 20 hours a week over 42 working weeks. What does the rate work out to before adding tax?',
        options: [
          { text: 'About ₹1,500 an hour', why: 'That divides ₹1.3 lakh by 84 hours, which is the wrong denominator: the hours have to be annual, and the target has to be grossed up for tax before the rate is stated.' },
          { text: 'About ₹2,400 an hour before grossing up for tax, since ₹1.3 lakh a month over 840 billable hours a year is roughly that', correct: true, why: 'The build-up is ₹1 lakh plus ₹30,000 of costs, divided by 20 hours a week for 42 weeks, which is about 840 hours a year — and the result still has to be grossed up for tax, because the invoice is not the income.' },
          { text: 'About ₹625 an hour, using a forty-hour week', why: 'A forty-hour week assumes everything is billable, which is the error that sets rates too low.' },
          { text: 'It cannot be calculated without knowing the client’s budget', why: 'The client’s budget decides whether the work is taken, not what the rate has to be. The rate comes from the costs.' },
        ],
      },
      {
        q: 'A client asks for four revisions on a fixed quote that allowed one. What has happened to the rate, and what should the agreement have said?',
        options: [
          { text: 'Nothing, because the client is entitled to iterate', why: 'Iteration is normal, but it is work, and work that is not priced reduces the effective rate on everything else in the job.' },
          { text: 'The effective rate has fallen, and the agreement should have stated a number of revisions with a rate for work beyond it', correct: true, why: 'The revision count is the clause that prices iteration, which is why scope creep is the largest cause of a falling hourly rate in a growing practice.' },
          { text: 'The rate is unchanged because the quote was fixed', why: 'A fixed quote does not preserve the rate when the work grows; it converts the extra work into unpaid hours.' },
          { text: 'The client should be billed for the whole project again', why: 'Re-billing the project is unrealistic; the remedy is a rate for the additional work, agreed in advance.' },
        ],
      },
      {
        q: 'You have gross receipts within the presumptive scheme’s ceiling and choose to use it. What follows?',
        options: [
          { text: 'No tax is payable, since the scheme presumes income', why: 'The scheme presumes a share of receipts to be income, which is then taxed; it does not exempt the receipts.' },
          { text: 'A prescribed share of gross receipts is treated as income, books and audit are not required within the limits, and tax is still payable in advance in instalments', correct: true, why: 'The scheme removes the bookkeeping and audit burden, not the tax or the instalment schedule: advance tax is paid quarterly, with interest for a shortfall, and a client may still deduct tax at source on the fees.' },
          { text: 'GST is not payable on professional services', why: 'Goods and services tax has its own threshold and does not depend on the income-tax scheme chosen.' },
          { text: 'The rate charged to clients must be declared to the department', why: 'Rates are commercial, not a matter of disclosure to the tax department; the receipts are what is reported.' },
        ],
      },
    ],
    takeaway: 'Build the rate from costs, tax and realistically billable hours, then protect it in writing with scope, revisions, stage payments and payment terms.',
  },
}
