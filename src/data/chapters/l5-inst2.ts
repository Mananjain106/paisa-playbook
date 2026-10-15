import type { Chapter } from '../../types'
import { scene, sim } from '../../lib/chapter-blocks'
import { l5Illustrative, l5Rule, l5Sources } from '../../lib/l5-blocks'

/**
 * Level 5, band three, batch 2 — chapters l5-050 to l5-059.
 *
 * The paperwork half of the institutions band: the market's plumbing (brokers
 * and depositories), the identity record every institution shares, the rules
 * that watch flows, the safety nets and their ceilings, the forums that decide
 * complaints, and then the three documents an adult signs — a loan agreement, an
 * insurance policy and everything else — read for the clauses that actually move
 * cost, risk and control.
 *
 * Facts verified on 15 October 2026 and linked from each chapter: securities
 * transaction tax of 0.1% on both sides of a delivery trade and stamp duty of
 * 0.015% on the purchase, with exchange and regulator levies and tax on the
 * charges; client funds and securities held apart from a broker's own, the
 * running account settled periodically and securities paid out directly to the
 * client's depository account; the basic services demat account slabs of nil up
 * to ₹4 lakh and ₹100 between ₹4 lakh and ₹10 lakh, in force since
 * 1 September 2024; periodic KYC refreshes at least every two years for high
 * risk, eight for medium and ten for low, and the use of the central registry's
 * fourteen-digit identifier instead of collecting documents again; cash
 * transaction reporting above ₹10 lakh in a month, suspicion reporting with no
 * threshold, and the ten per cent beneficial-ownership threshold; deposit
 * insurance of ₹5 lakh per depositor per bank; the investor protection fund
 * ceiling of ₹35 lakh per claim at one exchange and a different figure at
 * another; the banking ombudsman's increased compensation limits of ₹30 lakh and
 * ₹3 lakh under the 2026 scheme; the insurance ombudsman's ₹50 lakh ceiling and
 * one-year window; consumer commission limits of ₹50 lakh and ₹2 crore with a
 * two-year limitation period; the bar on prepayment charges for floating-rate
 * loans to individuals and small enterprises from 1 January 2026; penalties
 * charged as charges rather than interest, with no capitalisation, since
 * 1 January 2024; and health-insurance waiting periods of thirty days initially,
 * up to thirty-six months for pre-existing conditions, and a moratorium of sixty
 * months.
 */
export const l5InstB: Record<string, Chapter> = {
  'l5-050': {
    id: 'l5-050',
    title: 'Brokers',
    subtitle: 'The price has two halves, and only one of them is negotiable.',
    minutes: 11,
    blocks: [
      scene('broker-fee-anatomy', 'Every line that lands on a delivery trade, with the two that no broker can change and the two that only appear when you sell.'),
      { kind: 'p', text: 'A broker is a trading member of an exchange, registered with the market regulator and admitted by the exchange to bring orders to it. That is a specific role with specific rules: the broker takes your orders, settles them through the clearing corporation, holds no ownership of what you buy, and is required to keep your funds and securities apart from its own. Everything else about the relationship — what it costs, what it offers, how it behaves when something fails — is the part you choose between firms.' },
      { kind: 'p', text: 'Choosing on price alone is where most comparisons go wrong, because a broker\u2019s price has two halves. One half is set by law and is identical everywhere: taxes on the transaction, duty on the purchase, levies for the exchange and the regulator, and tax on the broker\u2019s own charges. The other half belongs to the firm: its brokerage, the depository charge it passes on for every scrip you sell, and whatever it charges for statements, physical documents and other services. A "free" account is free on the second half only, and usually not entirely.' },

      { kind: 'h', text: 'The cost stack, line by line' },
      {
        kind: 'table',
        caption: 'What a delivery trade costs, and who sets each line',
        headers: ['Line', 'Roughly', 'Set by'],
        rows: [
          ['Brokerage', 'Often nil on delivery, or a flat fee per order, or a small percentage', 'The broker'],
          ['Securities transaction tax', '0.1% of the trade, on the buy and again on the sell', 'The government'],
          ['Stamp duty', '0.015% of the trade, on the purchase only', 'The state'],
          ['Exchange and regulator levies', 'About 0.003% of turnover, plus a small turnover fee', 'The exchange and the regulator'],
          ['Tax on the charges', '18% on brokerage and the levies', 'The government'],
          ['Depository charge', 'A fixed amount per scrip, on each day you sell', 'The depository, collected by the broker'],
        ],
      },
      { kind: 'p', text: 'Two consequences follow from that table. The first is that the statutory half cannot be part of a price comparison, because every broker charges it identically and collects it through the trade rather than on an invoice. The second is that selling is more expensive than buying: the transaction tax is charged on both sides and the depository charge is levied per scrip on each sell, which is why a portfolio traded in many small lots pays far more than the same value traded once.' },
      l5Rule(
        'What a broker must do with your money, and what it must not',
        'A broker holds client funds and securities separately from its own assets, and the running account is settled periodically so that unused client money is returned rather than retained; securities bought are paid out directly to the client\u2019s depository account. Margins must be collected from clients in advance rather than funded by the member, and the member carries its own settlement obligations to the clearing corporation. A broker must be registered with the market regulator and be a member of the exchange on which it trades, and both lists are public. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'What to compare, beyond the price' },
      { kind: 'list', ordered: true, items: [
        'The annual total as a share of turnover, not the brokerage rate. A flat fee per order is cheap if you trade rarely and in size; a percentage plan is cheap if you trade often and in small lots.',
        'The depository charge, because it is billed per scrip per sell and it is the line most often left out of a comparison.',
        'Whether the account is a self-directed one or a relationship with a person, and what the difference costs: an advisory arrangement that pays by the trade creates an incentive to trade.',
        'How the firm handles money it is holding for you: settlement of the running account, and the route by which a surplus comes back to your bank.',
        'The grievance route and the complaint record, because a broker is the counterparty you will need to reach precisely when something has gone wrong.',
      ] },
      { kind: 'p', text: 'The last point is worth more than it sounds. When a settlement fails, a payment is not credited, or a corporate action is missed, the recovery does not depend on the broker\u2019s brand; it depends on whether there is a written trail of your instruction and whether the firm answers within the periods the rules set. That makes the account statement and the contract note the two documents that decide the outcome, which is why they are worth downloading rather than leaving in an app.' },
      sim('l5-broker-compare', 'Price a year of trading line by line, switch between a flat fee and a percentage plan, and see that the statutory half of the bill is the same at every broker.'),
      l5Illustrative('Turnover, order counts and charge rates in the lab are invented for practice, and the flat fee is a typical discount-broker figure rather than any firm\u2019s tariff. The transaction tax at 0.1% on both sides, stamp duty at 0.015% on the purchase, the depository charge per scrip on a sell, and the segregation of client funds are the real structure verified on 15 October 2026 and linked below.'),
      { kind: 'p', text: 'One habit makes the whole chapter practical. Before opening an account, ask two questions in writing: what is the annual cost for a holder who trades this often and this large, and how does unused money in my account come back to me. A firm that answers both precisely is a firm whose statements will make sense a year later.' },
      { kind: 'terms', items: [
        { term: 'Trading member', meaning: 'A broker admitted by an exchange to bring client orders to it, and registered with the market regulator.' },
        { term: 'Running account', meaning: 'The balance of client funds a broker holds, which must be settled back to the client periodically rather than retained.' },
        { term: 'Segregation of client funds', meaning: 'The requirement that client money and securities be held apart from the member\u2019s own assets.' },
        { term: 'Depository charge', meaning: 'A fee levied per scrip on each day it is sold, paid to the depository through the broker.' },
        { term: 'Upfront margin', meaning: 'The requirement that a position be funded before it is taken, collected from the client rather than advanced by the broker.' },
      ] },
      l5Sources(['sebi', 'nse'], [
        'The rules on segregation and settlement of client funds, margin collection, direct payout of securities and the register of registered intermediaries',
        'The trading-member obligations of an exchange, the current transaction charges, and the investor grievance and dispute-resolution routes for a defaulting or recalcitrant member',
      ]),
    ],
    quiz: [
      {
        q: 'A broker advertises zero brokerage on delivery trades. What does that mean for your total cost?',
        options: [
          { text: 'Trading is free, so cost is no longer a consideration', why: 'The transaction tax, stamp duty, levies and tax on charges are statutory and remain. Zero brokerage removes one line, not the bill.' },
          { text: 'One line is removed, while taxes, duty, levies and the depository charge on every sell remain', correct: true, why: 'The negotiable half of the cost has gone; the statutory half is identical at every broker and is collected through the trade itself.' },
          { text: 'The taxes are also waived because brokerage is nil', why: 'Statutory levies are charged on the transaction, not on the broker\u2019s fee. They do not disappear with it.' },
          { text: 'It is only free above a minimum monthly turnover', why: 'That describes a tiered plan, not the ceiling the question is about. The statutory costs apply at every size.' },
        ],
      },
      {
        q: 'Why does selling cost more than buying in a delivery account?',
        options: [
          { text: 'Because brokers charge a higher rate on sells', why: 'Brokerage may be nil on both sides at a discount broker. The difference is in the levies, not the brokerage.' },
          { text: 'Because the transaction tax applies on both sides and the depository charge is levied per scrip on each sell', correct: true, why: 'The tax is charged on the purchase and again on the sale, and the depository charge is a fixed amount per scrip per sale — so selling in many small lots is expensive out of proportion to the value sold.' },
          { text: 'Because the exchange charges more for a sale than a purchase', why: 'The exchange levy is charged on turnover, on both sides, at the same rate.' },
          { text: 'Because selling triggers capital gains tax immediately', why: 'Capital gains tax is a separate matter, and it depends on the holding period, the asset and the gain. It is not part of the transaction cost stack.' },
        ],
      },
      {
        q: 'What does holding client funds separately from its own money actually require of a broker?',
        options: [
          { text: 'That client money earns interest for the client automatically', why: 'Segregation is about whose money it is and where it sits, not about the return on it.' },
          { text: 'That client funds and securities are held apart from the member\u2019s own assets, with the running account settled periodically', correct: true, why: 'Separate holding means the member\u2019s failure does not make your money available to its creditors, and the periodic settlement of the running account is what stops a surplus from sitting with the firm indefinitely.' },
          { text: 'That the broker guarantees the value of your portfolio', why: 'No broker guarantees portfolio value. That is a promise only a fraud would make.' },
          { text: 'That the broker may not charge any fees beyond brokerage', why: 'Brokers charge for other services too. The requirement is about where the money is held, and about disclosing the charges.' },
        ],
      },
    ],
    takeaway: 'Compare brokers on the annual total measured against turnover, count the depository charge on every sell, and remember that the statutory half of the bill is the same everywhere.',
  },

  'l5-051': {
    id: 'l5-051',
    title: 'Depositories',
    subtitle: 'A record rather than a vault, and three settings that decide how it behaves.',
    minutes: 11,
    blocks: [
      scene('depository-layer', 'The depository holds, the participant interfaces, the holder owns — with a pledge blocking part of the balance and a nomination deciding who can operate it.'),
      { kind: 'p', text: 'There is no paper share certificate you can lose, and there is also no share certificate sitting in a broker\u2019s safe. What exists is a record: a depository holds securities in electronic form, a depository participant is the firm you interface with, and you are named in that record as the holder. The security carries an identifier that tells you exactly what it is, which is why a "share" in an app and the same share in another account can be compared directly.' },
      { kind: 'p', text: 'Almost every problem people have with a demat account is one of three settings rather than a missing holding. A pledge, which looks like an unavailable balance. A freeze, which looks like a loss of control. And a nomination, whose absence turns a straightforward transfer into months of paperwork for somebody else. None of the three involves the shares leaving your name, and all three change what can be done with them.' },

      { kind: 'h', text: 'What the account is, and what it is not' },
      {
        kind: 'table',
        caption: 'The three parties, and what each one holds',
        headers: ['Party', 'Holds', 'If it fails'],
        rows: [
          ['The depository', 'The electronic records of who owns which securities', 'A rare systemic event; holdings are records of your title and are reconciled against issuers'],
          ['Your participant', 'The account relationship and your instructions', 'You move the account to another participant; the holdings are unaffected'],
          ['You', 'The beneficial ownership, and the rights that go with it', 'Nomination or joint holding decides who can operate the account'],
        ],
      },
      l5Rule(
        'The charges, the pledge and the transmission',
        'A basic services demat account carries no annual maintenance charge on holdings up to ₹4 lakh and a charge of ₹100 a year on holdings between ₹4 lakh and ₹10 lakh, on the slabs in force since 1 September 2024, and one account per person may qualify. A pledge created through the depository system is a lien on the pledged quantity rather than a transfer of ownership, leaving the balance shown to the holder as the unpledged part. Transmission of holdings on the death of a holder is completed through nomination or joint holding, or otherwise through a succession process. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'The charges, which follow the scrip rather than the value' },
      { kind: 'p', text: 'A demat account has an annual maintenance charge that follows the value in the account, and a transaction charge that follows the number of scrips you sell rather than the amount. The slabs make the maintenance charge nil for small holdings and modest up to ₹10 lakh, so a long-term holder pays almost nothing to keep a portfolio — while a frequent seller pays for each scrip every time, which is the line that makes small and repeated sales expensive. Closing an account, by contrast, is free and is requested from the participant.' },
      { kind: 'p', text: 'Two other items are usually the only real friction: a charge for a physical statement, and a charge for converting holdings back to paper, which is rarely needed and always avoidable. Anything else on a demat invoice is worth reading with the schedule of charges open beside it, because the participant may charge for services the account holder will never use.' },
      sim('l5-demat-service-check', 'Audit a demat account: the maintenance slab by value, the per-scrip charge on sells, what a pledge does to the available balance, and whether a transmission would be simple.'),
      l5Illustrative('Holdings values, pledge amounts and sell counts in the lab are invented for practice. The ₹4 lakh and ₹10 lakh maintenance slabs, the per-scrip depository charge, the lien nature of a pledge and the route of transmission through nomination are the real structure verified on 15 October 2026 and linked below.'),
      { kind: 'h', text: 'The three settings, done properly' },
      { kind: 'list', ordered: true, items: [
        'Register a nomination, and keep it current: a nomination is the cheapest piece of estate planning available in an 11-minute chapter, and it decides who can operate the account without a succession process.',
        'If the account is jointly held, note that a nomination on top of joint holding still shortens the paperwork and does not conflict with it.',
        'Understand what is pledged. A pledge is a lien on a defined quantity, not a sale: the shares remain yours, and the available balance is what remains after the lien.',
        'Check the freeze first when a holding cannot be sold. A freeze allows credits and delivery of holdings but not sale, and the reason is always recorded somewhere you can ask for in writing.',
        'Keep the holdings statement, not just the app. A record on paper that you can produce is what resolves a dispute about what was held and when.',
      ] },
      { kind: 'terms', items: [
        { term: 'Depository', meaning: 'The entity that holds securities in electronic form and records transfers of ownership between accounts.' },
        { term: 'Depository participant', meaning: 'The firm you open the account with and instruct, acting as the interface to the depository.' },
        { term: 'ISIN', meaning: 'The identifier for a security, which tells you exactly which instrument is held.' },
        { term: 'Pledge', meaning: 'A lien over a quantity of securities held in the account, used as collateral without transferring ownership.' },
        { term: 'Transmission', meaning: 'The movement of holdings to survivors or nominees on the death of a holder, done by nomination or by a succession process.' },
      ] },
      l5Sources(['nsdl', 'sebi'], [
        'The account types and charge slabs, the pledge and re-pledge process, the nomination facility and the transmission procedure for holdings',
        'The depository regulations on records, participant obligations, the basic services account slabs and the investors\u2019 grievance routes',
      ]),
    ],
    quiz: [
      {
        q: 'Your demat account holds ₹3 lakh of shares and you sell six scrips in a year. What are you charged?',
        options: [
          { text: 'Nothing: small accounts are entirely free', why: 'The maintenance charge is nil below ₹4 lakh, but the per-scrip charge on selling still applies to each sale.' },
          { text: 'No annual maintenance charge, plus a per-scrip charge on each of the six sales', correct: true, why: 'The slabs in force since 1 September 2024 make maintenance nil up to ₹4 lakh, while the transaction charge follows the number of scrips sold — which is why repeated small sales are the expensive pattern.' },
          { text: 'A percentage of the sale value', why: 'The depository charge is a fixed amount per scrip, not a percentage, which is precisely why it hurts small lots.' },
          { text: 'A charge only when the account is closed', why: 'Closing is free and is requested from the participant. The annual and per-scrip charges are the ones that recur.' },
        ],
      },
      {
        q: 'A lender marks a pledge over ₹1 lakh of your ₹3 lakh holdings. What has happened?',
        options: [
          { text: 'The shares have been transferred to the lender', why: 'A pledge is not a transfer. Ownership stays with you, and the lien gives the pledgee defined rights only.' },
          { text: 'A lien exists over that quantity, so your available balance falls while ownership does not change', correct: true, why: 'The pledged portion is blocked pending the terms of the pledge, and the balance you can sell is the unpledged part. Ownership is untouched, which is why a pledge is reversible.' },
          { text: 'You can no longer receive dividends on the pledged shares', why: 'Benefits on the securities continue to flow according to the terms agreed with the pledgee; the lien does not by itself extinguish your entitlement.' },
          { text: 'The account is frozen until the pledge is released', why: 'A pledge affects the pledged quantity. A freeze is a different state, and it blocks selling more broadly.' },
        ],
      },
      {
        q: 'Why is a nomination the highest-value action available in a demat account?',
        options: [
          { text: 'Because it reduces the annual maintenance charge', why: 'Nomination has no effect on charges. It affects what happens on death.' },
          { text: 'Because it lets the named person receive the holdings without a succession process', correct: true, why: 'Without a nomination or a joint holder, surviving family has to establish title through a succession certificate or probate — which takes months and costs more than the account was ever charged.' },
          { text: 'Because it protects the holdings from the broker\u2019s creditors', why: 'Segregation already does that. The nomination answers a different question.' },
          { text: 'Because it transfers ownership immediately', why: 'A nomination takes effect on death. It is not a transfer during the holder\u2019s lifetime.' },
        ],
      },
    ],
    takeaway: 'Treat the demat account as a record with three settings: worthless without a nomination, partly unavailable while pledged, and unsellable while frozen.',
  },

  'l5-052': {
    id: 'l5-052',
    title: 'KYC',
    subtitle: 'One identity record, four places that hold it, and the rules a genuine request obeys.',
    minutes: 11,
    blocks: [
      scene('kyc-flow', 'Documents in, a record shared across registers, a refresh clock by risk category, and the requests a genuine update never makes.'),
      { kind: 'p', text: 'Know-your-customer rules exist because an institution has to know who it is dealing with and be able to show it later. That requirement produces a record, and the interesting part is what happens to it next: the same verified identity is reused across products, held in a central registry with its own identifier, and pulled again by the next institution instead of being collected from you. Once you see KYC as one record serving several registers, both its convenience and its vulnerabilities make sense.' },
      { kind: 'p', text: 'The convenience is real. Open a bank account and a demat account and a mutual fund, and you are not repeating the same document exercise three times; the record is pulled and confirmed. The vulnerability is also real, because the language of compliance is exactly what a fraud uses on a call. The whole defence is a single rule: KYC is completed inside the institution\u2019s own channels, and a request for a one-time password, a card number or remote access to your phone is not KYC at all.' },

      { kind: 'h', text: 'Where the record lives' },
      {
        kind: 'table',
        caption: 'The registers, and what each is used for',
        headers: ['Register', 'Holds', 'Practical effect'],
        rows: [
          ['Your bank or lender', 'The KYC record for that relationship, with documents verified at account opening', 'Refreshed periodically, and the basis for any product added later at the same bank'],
          ['The central KYC records registry', 'A single record with a fourteen-digit identifier, shared across the financial sector', 'The next institution can pull the record rather than collecting the documents again'],
          ['The securities-market registry', 'The record used by brokers, mutual funds and depositories', 'One record covers demat accounts and fund investments across firms'],
          ['Your insurer', 'Its own copy, attached to the policy file', 'Matters most at claim time, where the record is evidence of what was disclosed'],
        ],
      },
      l5Rule(
        'How often a record is refreshed, and what a genuine request does not ask for',
        'Periodic updation of a customer\u2019s KYC record is required at least once every two years for high-risk customers, eight years for medium-risk and ten years for low-risk customers. Records held by the central registry can be downloaded by an institution rather than collected again from the customer, and low-risk customers have been given the longest runway for that reason. Video-based identification is a permitted channel, and any genuine process runs inside the institution\u2019s own authenticated application. A request for a one-time password, a personal identification number, a card number or remote access to a device is fraudulent by definition. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'What triggers a refresh, apart from the clock' },
      { kind: 'p', text: 'The interval is a maximum rather than a schedule: a record that changes has to be updated sooner. A new address, a new phone number, a name change, or a document that has expired all put the record out of date, and an account whose contact details no longer reach the holder is one an institution may restrict, because it cannot be sure who is operating it. That is why the awkward part of KYC for most people is not the initial submission but keeping one detail current — the mobile number that receives the messages.' },
      { kind: 'p', text: 'On the receiving end of the fraud, the script is consistent. A caller already knows your name, your bank and part of an account number, mentions a deadline and an account that will be blocked, and then asks for something no bank needs: an one-time password, a screen-sharing session, a small payment to verify the account, or an application installed from a link. Each of those moves the attacker from knowing about your account to controlling it. The correct response is always the same and needs no judgement in the moment: end the call and contact the institution on the number on your statement, not the number on the screen.' },
      sim('l5-kyc-doctor', 'Find which register holds the record for a product, test whether a refresh is due for the risk category, and score a suspicious request against the signals that give it away.'),
      l5Illustrative('Risk categories, dates and the signals listed in the lab are illustrative for practice. The two, eight and ten-year refresh intervals, the use of the central registry identifier in place of fresh documents, and the fraud patterns are the real framework verified on 15 October 2026 and linked below.'),
      { kind: 'h', text: 'A routine that costs nothing' },
      { kind: 'list', ordered: true, items: [
        'Keep one set of documents ready as a scanned folder: identity, address, tax number. Most delays come from looking for them rather than from the verification itself.',
        'Note the record identifier from the central registry, if you have one, in the same folder. It converts a future update into a lookup instead of a fresh submission.',
        'Update the mobile number and the email address first, whenever anything else changes. They are the channels every other update travels through.',
        'Expect a refresh at the interval for your risk category, and treat the message from your own institution as a nudge to use its own app rather than a reason to answer a call.',
        'Never complete KYC through a link, a downloaded application or a remote-support session. There is no exception to that rule, and no urgency that justifies one.',
      ] },
      { kind: 'terms', items: [
        { term: 'KYC', meaning: 'The verification of a customer\u2019s identity and address that an institution must complete and keep current.' },
        { term: 'Periodic updation', meaning: 'The refresh of a KYC record at an interval set by the customer\u2019s risk category.' },
        { term: 'CKYC identifier', meaning: 'The fourteen-digit number attached to a customer\u2019s record in the central KYC records registry.' },
        { term: 'Video-based identification', meaning: 'A permitted remote channel for completing KYC, run inside the institution\u2019s own authenticated application.' },
        { term: 'Risk categorisation', meaning: 'The classification of a customer by risk, which decides how often the record is refreshed and what scrutiny it receives.' },
      ] },
      l5Sources(['rbi', 'sebi', 'uidai'], [
        'The KYC directions: the periodic updation intervals, video-based identification, the central registry and what an institution may not ask for',
        'The KYC standards in the securities market: the registry used by brokers and funds, and the complaint channels for a wrong record',
        'The position on identity verification: consent, authentication and the fact that no one else may ask you for it on their behalf',
      ]),
    ],
    quiz: [
      {
        q: 'Your record was last refreshed nine years ago and you are in the low-risk category. What is the position?',
        options: [
          { text: 'A refresh is overdue and the account will be closed', why: 'The interval for low-risk customers is the longest of the three, and an institution restricts rather than closes an account without an opportunity to comply.' },
          { text: 'A refresh is due, because the interval for low-risk customers is ten years and the record is approaching it', correct: true, why: 'The intervals are two years for high risk, eight for medium and ten for low, and they are maximums — so a low-risk record approaching ten years is due for both reasons: the clock and any change in your details.' },
          { text: 'Nothing is required, because low-risk customers are exempt', why: 'Low-risk customers have the longest interval, not an exemption.' },
          { text: 'A refresh is required every year regardless of category', why: 'There is no annual requirement for customers at low risk.' },
        ],
      },
      {
        q: 'A caller says your KYC has expired, your account will be blocked within two hours, and asks for the one-time password sent to your phone. What is this?',
        options: [
          { text: 'A standard verification step for an expiring record', why: 'No KYC process requires a one-time password. That request exists for one purpose: to authorise a transaction in your name.' },
          { text: 'A fraud attempt: no genuine verification asks for a one-time password, and urgency is part of the script', correct: true, why: 'The designed response is to end the call and contact the institution on the number from your statement. Any request for a credential is fraudulent regardless of what the caller knows about you.' },
          { text: 'Permissible, because the caller knew your account number', why: 'Knowing details about you is precisely what makes the script credible. It is not evidence of identity.' },
          { text: 'Acceptable if you share the password only after verifying the caller\u2019s employee number', why: 'There is no employee number worth trading a one-time password for. The credential authorises money leaving, whoever is on the line.' },
        ],
      },
      {
        q: 'What is the practical benefit of the central registry\u2019s identifier to a customer?',
        options: [
          { text: 'It improves the interest rate offered on deposits', why: 'It has no bearing on pricing. Its value is procedural.' },
          { text: 'An institution can pull the verified record using it instead of collecting the documents again', correct: true, why: 'The identifier lets a firm retrieve a verified record, which is why the same identity can be reused across products and institutions rather than resubmitted each time.' },
          { text: 'It replaces the need for a nomination', why: 'Nomination is a separate facility and is not replaced by anything in KYC.' },
          { text: 'It guarantees approval of any application', why: 'A verified record is a prerequisite, not an approval. The institution still decides.' },
        ],
      },
    ],
    takeaway: 'Keep one document set and the registry identifier in your own files, refresh the record at the interval for your risk category, and treat any request for a credential as fraud, whatever the caller knows.',
  },

  'l5-053': {
    id: 'l5-053',
    title: 'AML',
    subtitle: 'The system watches patterns, not intentions — and resolves queries with documents.',
    minutes: 12,
    blocks: [
      scene('aml-funnel', 'Every transaction passes through monitoring; most are cleared, some are reported as records, and a few draw a suspicion report that the customer never sees.'),
      { kind: 'p', text: 'Anti-money-laundering rules exist to keep the financial system from being used to store or move the proceeds of crime. Institutions are required to monitor what passes through them, keep records, verify who is behind a customer, and report what looks wrong to a central agency. None of that is aimed at the ordinary account, and the ordinary account still runs into it, because monitoring looks at patterns rather than intentions: a lawful transaction that resembles a pattern is treated as that pattern until it is explained.' },
      { kind: 'p', text: 'The value of understanding this is entirely practical. Half the frustration people describe — a transfer that needed a phone call, a deposit that triggered a letter, a lien that appeared without warning — comes from not knowing what an institution is obliged to do and what a document can settle. The other half comes from choices that look harmless at the time: accepting money for somebody else, keeping large sums in cash, or routing a payment through a relative\u2019s account.' },

      { kind: 'h', text: 'What gets reported, and at what point' },
      {
        kind: 'table',
        caption: 'The reports, and the thresholds that trigger them',
        headers: ['Report', 'Trigger', 'What it means for the customer'],
        rows: [
          ['Cash transaction report', 'Cash above ₹10 lakh in a month, counted as a series where the transactions are connected', 'A record is filed whether or not anything is wrong, and usually without you being told'],
          ['Suspicion report', 'No threshold at all: the pattern decides', 'Never disclosed to the customer, because disclosure would defeat its purpose'],
          ['Large wire transfers', 'Transfers above a set value, including across borders', 'An additional reporting obligation on the institution, not a restriction on you'],
          ['Beneficial ownership', 'Any natural person holding more than ten per cent of a client entity', 'Whoever is behind a company has to be identified, not only the company itself'],
        ],
      },
      l5Rule(
        'Thresholds, structuring and who counts as the owner',
        'Institutions report cash transactions above ₹10 lakh, counting transactions that are integrally connected as a single series, and report suspicions with no threshold at all, within the short period the rules allow. Splitting a payment to stay below a reporting line is itself a pattern the monitoring is designed to detect, and it converts an ordinary transaction into a reported series. For a client that is not an individual, the beneficial owner is any natural person holding more than ten per cent of the capital or profits, a threshold reduced from higher levels in 2023, and where no such person can be identified the senior managing official is treated as the owner. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'Why lawful money gets stopped, and what unsticks it' },
      { kind: 'p', text: 'A flag is a request for a source, not an accusation. A deposit that arrives from an unusual counterparty, a series of credits that individually sit under a line, a first large transfer to a new payee, a payment into an account that has been dormant — each of these is ordinary in some lives and anomalous in others, and the system cannot tell the difference without asking. What resolves the question is almost always documentary: the sale deed, the invoice, the statement from the other bank, the tax return. The practical lesson is therefore about filing rather than about amounts.' },
      { kind: 'p', text: 'A lien, a freeze and a failed transfer are three different things, and the first step is to find out which one you are dealing with. A lien from a complaint of cyber fraud typically covers the amount under dispute rather than the whole balance, and it is released by the agency investigating. A freeze placed by the institution follows an internal monitoring decision and is resolved with the branch. A transfer that will not go through may simply be a limit, a wrong beneficiary detail or an account that has not been activated for that payment type. Ask for the reason in writing, because an answer in writing tells you which of the three it is and who can lift it.' },
      sim('l5-aml-simulator', 'Run a month of transactions through the thresholds, watch a split payment become a reported series, and see which document resolves a query.'),
      l5Illustrative('The deposits, counts and patterns in the lab are invented for practice. The ₹10 lakh cash threshold with connected transactions counted as a series, suspicion reporting with no threshold, the ten per cent beneficial-ownership threshold and the nature of a lien are the real framework verified on 15 October 2026 and linked below.'),
      { kind: 'h', text: 'The habits that keep an account unremarkable' },
      { kind: 'list', ordered: true, items: [
        'Keep money moving between accounts in your own name, and never accept funds on behalf of somebody else, however brief the arrangement is meant to be.',
        'Avoid cash for large amounts: a transfer leaves a counterparty and a purpose, while a deposit leaves a number a cashier has to explain.',
        'Never split a payment to stay under a reporting line. Connected transactions are read together, and the split is what makes them interesting.',
        'Keep the source documents as you go rather than assembling them later. A query answered in a week costs a week; a lien resolved in a week costs a month of access.',
        'If a lien appears, ask the branch for the reason in writing, identify the agency involved, and supply the documents that show where the money came from.',
      ] },
      { kind: 'p', text: 'One boundary is worth stating plainly, because it is the one that turns a monitoring question into a serious matter. Your account is yours: lending it, receiving money for somebody else, or passing funds along at a third party\u2019s instruction makes you the account holder of record for transactions you cannot explain, and no explanation will be available when one is asked for. That is not a technicality. It is the entire mechanism the rules are designed to catch.' },
      { kind: 'terms', items: [
        { term: 'Cash transaction report', meaning: 'The report filed for cash above the stated value in a month, counting connected transactions as one series.' },
        { term: 'Suspicion report', meaning: 'A report filed on the institution\u2019s judgement with no value threshold, and never disclosed to the customer.' },
        { term: 'Structuring', meaning: 'Splitting payments to stay below a reporting line, which is itself the pattern being monitored for.' },
        { term: 'Beneficial owner', meaning: 'The natural person who ultimately owns or controls a client entity, above the stated shareholding threshold.' },
        { term: 'Lien', meaning: 'A hold on a specific amount in an account, typically while a fraud complaint covering that amount is investigated.' },
      ] },
      l5Sources(['rbi', 'incometax'], [
        'The reporting obligations for banks and other regulated entities, the thresholds and the customer due diligence requirements including beneficial ownership',
        'The position on undisclosed income and the reporting of high-value transactions, which is what makes a cash-heavy pattern worth avoiding for other reasons too',
      ]),
    ],
    quiz: [
      {
        q: 'You deposit ₹4 lakh in cash in each of three weeks, deliberately staying under ₹10 lakh for the month in total. What does the system see?',
        options: [
          { text: 'Nothing, because each deposit is below the threshold', why: 'The threshold applies to the series. Transactions integrally connected are counted together, so the total is what is measured.' },
          { text: 'A connected series that is counted together, and the splitting is itself the pattern', correct: true, why: 'Structuring to stay under a line converts ordinary deposits into a reported series, and the deliberate avoidance is the part that draws attention.' },
          { text: 'A single report is filed only if the deposits exceed ₹20 lakh', why: 'There is no such ₹20 lakh line. The relevant measure is connected cash above ₹10 lakh in a month.' },
          { text: 'The bank returns the deposits and asks you to use a transfer', why: 'An institution reports rather than refuses. The choice of channel is yours, and a transfer would have produced a counterparty and a purpose.' },
        ],
      },
      {
        q: 'A friend asks you to receive ₹5 lakh in your account and immediately transfer it to a supplier. What is the risk?',
        options: [
          { text: 'None, since the total is below the reporting threshold', why: 'Suspicion reporting has no threshold at all. It depends on the pattern, not the value.' },
          { text: 'The money passing through your account makes you the account holder of record for transactions you cannot explain', correct: true, why: 'You would be the one asked for the source, and no explanation would exist because the funds and the purpose are somebody else\u2019s. That is the mechanism the rules are built to catch.' },
          { text: 'It is safe as long as you charge no commission', why: 'Whether you profit is irrelevant to how the transaction is treated.' },
          { text: 'It is fine if the friend provides a written undertaking', why: 'An undertaking from a third party does not create the documentary trail the institution needs, which has to come from the funds themselves.' },
        ],
      },
      {
        q: 'A lien of ₹80,000 appears on an account holding ₹3 lakh after a cyber-fraud complaint elsewhere. What is the sensible reading?',
        options: [
          { text: 'The bank has taken the money and it is gone', why: 'A lien is a hold, not a transfer. The money remains in the account and the hold is released when the agency investigating resolves it.' },
          { text: 'A specific amount is held while a complaint covering that amount is investigated, leaving the rest usable', correct: true, why: 'A lien typically attaches to the disputed amount rather than the whole balance, and it is lifted by the investigating agency once the position is clear — which is why supplying source documents matters.' },
          { text: 'The account has been closed', why: 'A freeze and a lien are different states. A blanked-out account usually reflects a freeze or a lien on the whole balance, and either can be questioned.' },
          { text: 'It is a bank error and will clear automatically', why: 'Some are cleared, and the ones that matter are resolved by a document and an answer in writing rather than by waiting.' },
        ],
      },
    ],
    takeaway: 'Keep funds moving between your own accounts, never split a payment to stay under a line, and treat source documents as the thing that undoes a lien.',
  },

  'l5-054': {
    id: 'l5-054',
    title: 'Investor Protection',
    subtitle: 'Four nets, four ceilings, and one large category that no net covers.',
    minutes: 11,
    blocks: [
      scene('protection-layers', 'Deposit insurance, settlement, the protection fund and the ombudsman award — each with the ceiling that decides how much of a loss is answered for.'),
      { kind: 'p', text: 'There is a great deal of protection in the Indian financial system, and almost all of it has a number attached. Deposit insurance pays to a limit per depositor per bank. A trade settles because a clearing corporation stands between the two sides. A shortfall caused by a member\u2019s failure is a capped claim on that exchange\u2019s protection fund. A bank that fails to answer a service complaint can be ordered to compensate, up to a stated amount. Knowing the numbers is not pessimism; it is what turns spreading deposits and reading a contract into rational actions rather than superstition.' },
      { kind: 'p', text: 'The second thing to know is what no net covers. Protection in finance answers for process failures: an institution that becomes insolvent, a member that defaults, a payment taken without authority, a claim refused on grounds the rules do not allow. It has never answered for a judgement — a share that fell, a tip that misled you, a scheme nobody registered, a product sold by a seller with no regulator. The dividing line is not how careless the loss was. It is whether the loss came from the system failing or from the market being the market.' },

      { kind: 'h', text: 'The four nets, with their ceilings' },
      {
        kind: 'table',
        caption: 'What answers for what, and up to how much',
        headers: ['Net', 'Answers for', 'Ceiling'],
        rows: [
          ['Deposit insurance', 'A bank that fails, including a cooperative bank', '₹5 lakh per depositor per bank, principal and interest together'],
          ['Settlement guarantee', 'A matched trade completing even if an intermediary fails', 'The trade itself, through the clearing corporation'],
          ['Investor protection fund', 'A shortfall in money or securities caused by a member\u2019s default', 'A capped claim, set and revised by each exchange'],
          ['Ombudsman award', 'A service failure, an unauthorised charge, a refusal', '₹30 lakh for the loss plus ₹3 lakh for time and stress, in the banking scheme'],
        ],
      },
      { kind: 'p', text: 'Three details in that table are worth learning rather than looking up later. Deposit insurance is counted per depositor per bank, which is why a second bank buys a second limit while a second account at the same bank buys nothing. Non-bank deposits are outside the scheme entirely, so a rate above a bank\u2019s is a payment for carrying credit risk in full. And the protection fund ceiling is not a national number: each exchange sets its own and revises it, which is why the honest answer to "how much will I get if my broker defaults" is a figure to check at the exchange that ran the trade rather than a figure to remember.' },
      l5Rule(
        'The limits that decide how a loss is borne',
        'Deposit insurance covers ₹5 lakh per depositor per bank, principal and interest together, and does not extend to non-bank deposits. A trade settles through a clearing corporation that becomes the counterparty to both sides, so a member\u2019s failure during settlement does not prevent the trade completing. Where a member\u2019s default leaves a client short of money or securities, the exchange\u2019s investor protection fund answers for a claim within a ceiling the exchange sets and revises from time to time — ₹35 lakh per claim at the National Stock Exchange at the time of writing, with a lower figure elsewhere. Under the banking ombudsman scheme in force from 1 July 2026, compensation may be awarded up to ₹30 lakh for consequential loss and up to ₹3 lakh for time, expenses and harassment, with no limit on the value of the dispute itself. The insurance ombudsman may award up to ₹50 lakh, on a complaint made within a year. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'Using the nets rather than admiring them' },
      { kind: 'list', ordered: true, items: [
        'Spread deposits so that each bank holds no more than the insured amount. The cost of doing this is administrative; the cost of not doing it is uninsured credit risk for a few basis points of extra interest.',
        'Keep investments in your own depository account, with a nomination, because the record of ownership is the thing a claim is built on.',
        'For anything that fails, report it immediately rather than after gathering the full case. A fraudulent debit is treated differently depending on how promptly it was reported.',
        'Choose the forum by what you want, not by which sounds stronger: the ombudsman routes are free and bounded, the consumer commission is slower and wider.',
        'Read the ceiling before relying on the net. A ₹40 lakh deposit in a single bank is covered to ₹5 lakh, and the remaining ₹35 lakh is a position you have taken.',
      ] },
      sim('l5-protection-limits', 'Match a loss to the net that answers for it, move the size of the loss, and watch the covered and uncovered parts separate.'),
      l5Illustrative('The losses simulated in the lab are invented and the covered amounts follow the current ceilings. The deposit insurance limit of ₹5 lakh, the settlement guarantee, the exchange-set protection fund ceiling, the banking ombudsman limits of ₹30 lakh and ₹3 lakh under the 2026 scheme and the insurance ombudsman ceiling of ₹50 lakh are the real framework verified on 15 October 2026 and linked below.'),
      { kind: 'p', text: 'There is a final asymmetry worth noticing. Every net in this chapter is triggered by institutional failure, so the protections that matter most in an ordinary financial life are the ones you arrange: splitting deposits, holding securities in your own name, keeping the paper, reporting fast, and not concentrating money in a place whose failure would be personal rather than systemic.' },
      { kind: 'terms', items: [
        { term: 'Deposit insurance', meaning: 'Cover of ₹5 lakh per depositor per bank, principal and interest together, paid out when a bank fails.' },
        { term: 'Settlement guarantee', meaning: 'The completion of a matched trade through a clearing corporation, independent of the intermediary\u2019s survival.' },
        { term: 'Investor protection fund', meaning: 'A fund held by an exchange that answers capped claims where a member\u2019s default leaves a client short.' },
        { term: 'Consequential loss', meaning: 'The financial loss that follows from a service failure, for which the ombudsman may award compensation.' },
        { term: 'Ombudsman ceiling', meaning: 'The maximum compensation a scheme allows, separate from the value of the dispute itself.' },
      ] },
      l5Sources(['sebi', 'rbi', 'irdai'], [
        'The investor protection and investor services fund arrangements, the settlement guarantee and the grievance and dispute-resolution routes for a market loss that is not a market loss',
        'The deposit insurance scheme and its limit, and the banking ombudsman scheme with its compensation limits and its coverage of banks, lenders and payment operators',
        'The policyholder protection rules and the insurance ombudsman award ceiling and window',
      ]),
    ],
    quiz: [
      {
        q: 'You hold ₹9 lakh in one bank: ₹5 lakh in a fixed deposit and ₹4 lakh in savings. How much is insured, and why?',
        options: [
          { text: '₹9 lakh, because the two accounts are separate products', why: 'Cover is per depositor per bank. The number of accounts or products does not multiply the limit.' },
          { text: '₹5 lakh, because the limit applies per depositor per bank, principal and interest together', correct: true, why: 'The two accounts share one limit, so ₹4 lakh of the balance is exposed to the bank\u2019s failure. A second bank would bring its own limit.' },
          { text: '₹4 lakh, because savings deposits are not insured', why: 'Savings and fixed deposits are both deposits and are counted towards the same limit.' },
          { text: 'Nothing, until the bank actually fails', why: 'The cover exists continuously. Failure is when it is paid, not when it begins.' },
        ],
      },
      {
        q: 'A broker defaults leaving clients short of money it held. What should you expect?',
        options: [
          { text: 'Nothing, because broker failures are not covered anywhere', why: 'Settlement is guaranteed through the clearing corporation, and a shortfall in money or securities is answered by the exchange\u2019s investor protection fund within its ceiling.' },
          { text: 'Settlement of trades is completed by the clearing corporation, and any shortfall is a capped claim on the exchange\u2019s protection fund', correct: true, why: 'The two mechanisms cover different things: the guarantee completes the trade, while the fund answers for what the member failed to return — up to a ceiling that each exchange sets and revises.' },
          { text: 'The fund pays your market losses as well', why: 'The fund answers for a member\u2019s failure to return what it owed, not for what the securities were worth.' },
          { text: 'You are repaid in full, because there is no ceiling on the fund', why: 'There is a ceiling, and it is exchange-specific. It is the first thing to check rather than the last.' },
        ],
      },
      {
        q: 'Which of these losses is answered by no protection scheme?',
        options: [
          { text: 'A payment debited from your account without your authority', why: 'An unauthorised debit is squarely a process failure, and the bank\u2019s liability and the ombudsman route both apply.' },
          { text: 'A bank that becomes insolvent holding your deposit above the insured limit', why: 'The insured portion is paid, and the excess becomes a claim in the liquidation — a real risk, but not an uncovered category.' },
          { text: 'A share you bought falling thirty per cent after the company reported poor results', correct: true, why: 'Price risk belongs entirely to the holder. No fund, forum or guarantee answers for a judgement about what to own, however well informed it was.' },
          { text: 'An insurer refusing a claim the wording does not permit it to refuse', why: 'That is a service failure, and the grievance and ombudsman routes exist precisely for it.' },
        ],
      },
    ],
    takeaway: 'Learn the four ceilings, spread deposits against the insurance limit, hold securities in your own name — and accept that no scheme anywhere insures a judgement.',
  },
  'l5-055': {
    id: 'l5-055',
    title: 'Financial Complaints',
    subtitle: 'A file, not a feeling: the right forum, the evidence pack, and the clock on each rung.',
    minutes: 11,
    blocks: [
      scene('complaint-ladder', 'The entity, its grievance officer, the regulator\u2019s channel, the ombudsman and the consumer commission — with what each rung waits for.'),
      { kind: 'p', text: 'A complaint that fails usually fails for one of three reasons: it went to the wrong forum, it arrived before the entity had its window, or it asked for something nobody can grant. All three are drafting and timing problems rather than problems of merit, and all three are avoidable with a routine that takes about twenty minutes. The routine is to choose the channel by the entity, let the clock run, assemble the pack, and make a demand that names an amount or a correction.' },
      { kind: 'p', text: 'The reason the channel matters is that India runs separate redress systems for separate product families. A bank and a non-bank lender answer to one ombudsman. A broker, a fund house and an adviser answer to the market regulator\u2019s complaint system and, if the dispute needs adjudication, to an online dispute-resolution process. An insurer answers first to its own grievance officer and then to the insurance ombudsman. Sending a securities complaint to the banking ombudsman does not start a clock; it starts a delay.' },

      { kind: 'h', text: 'Where each kind of complaint goes' },
      {
        kind: 'table',
        caption: 'The channel, the wait, and what the forum can actually do',
        headers: ['Entity', 'Escalation', 'What it decides'],
        rows: [
          ['A bank or a non-bank lender', 'The entity, then the single-window banking ombudsman through the complaint portal', 'The complaint, with compensation up to ₹30 lakh for loss and ₹3 lakh for time and hardship, and no limit on the value of the dispute'],
          ['A broker, fund or adviser', 'The firm, then the market regulator\u2019s complaint system, then the online dispute-resolution route', 'Whether the firm must act, and where the matter is adjudicated rather than resolved'],
          ['An insurer', 'The grievance officer, then the regulator\u2019s channel, then the insurance ombudsman', 'Claims and service failures, with awards up to ₹50 lakh that the insurer must comply with'],
          ['Any of them, for a wider claim', 'The consumer commission, filed online', 'Refund, compensation, costs and a finding on the practice itself'],
        ],
      },
      l5Rule(
        'Windows, awards and the sequence to follow',
        'A complaint goes to the entity first and is escalated after the entity has had its defined period to respond, which the schemes set at thirty days for the banking route. Under the banking scheme in force from 1 July 2026, the ombudsman may award up to ₹30 lakh for consequential loss and up to ₹3 lakh for the complainant\u2019s time, expenses and hardship, there is no ceiling on the value of the dispute, and a decision can be appealed to the appellate authority within thirty days. Insurance complaints must reach the ombudsman within a year of the refusal, and its awards are binding on the insurer up to ₹50 lakh. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'The pack, and the demand' },
      { kind: 'p', text: 'A complaint is decided on a record, and the record is what you sent. Six items cover almost every case: the statement or contract note that shows the transaction, the entity\u2019s own complaint reference number, the correspondence including automated replies, the agreement or policy that states the terms, one page of dates and amounts, and the demand. The automated replies matter more than people expect, because they timestamp the entity\u2019s silence — which is often the complaint in itself.' },
      { kind: 'p', text: 'The demand then has to be something a forum can grant. "Take action against the bank" cannot be granted by anybody; "reverse the ₹18,400 charge debited on 3 June and confirm it in writing" can. A usable demand names the amount or the correction, the date it went wrong, the rule or the charge in dispute, and what you will do next. Four sentences, and the difference between a complaint that is forwarded and one that is decided.' },
      { kind: 'p', text: 'Keep the clock in view throughout. Each route has its own window — thirty days with the entity before the banking ombudsman, a year for an insurance complaint from the refusal, two years from the cause of action for a consumer case, and thirty days for an appeal against an ombudsman\u2019s decision. Almost everything that goes wrong at this stage goes wrong by being late rather than by being wrong, which is why the date-list page is the most useful document in the file.' },
      sim('l5-complaint-builder', 'Assemble the evidence, choose the rung, tick the elements of a specific demand, and see whether the window is open and the file is ready.'),
      l5Illustrative('The entity, day counts and evidence items in the lab are invented for practice. The thirty-day window, the ₹30 lakh and ₹3 lakh compensation limits and the thirty-day appeal window in the banking scheme, the insurance ombudsman\u2019s one-year window and ₹50 lakh ceiling, and the two-year consumer limitation are the real rules verified on 15 October 2026 and linked below.'),
      { kind: 'h', text: 'Writing it once' },
      { kind: 'list', ordered: true, items: [
        'Complain to the entity first, in writing, and keep the reference number. Only written complaints start a clock.',
        'Wait out the entity\u2019s window, then escalate to the channel for that entity, attaching the pack rather than describing it.',
        'State the demand in one sentence with an amount and a date, and set out what you will do next.',
        'Keep every escalation at the same reference number and change only the addressee, so the trail reads as one complaint rather than five.',
        'If an award goes against you, note the thirty-day appeal window — and if it goes for you, keep the decision with the papers that started it.',
      ] },
      { kind: 'p', text: 'One further habit is worth adopting before you ever need it. When something looks wrong, write a short note to the entity the same day, describing what you expected and what happened. It costs three minutes, it fixes the date, and it is the piece of the file that later cannot be argued with.' },
      { kind: 'terms', items: [
        { term: 'Grievance officer', meaning: 'The named person at an entity who receives complaints after the front line, and whose reply starts the escalation clock.' },
        { term: 'Ombudsman', meaning: 'A free forum for a defined class of complaints, with stated compensation limits and binding awards.' },
        { term: 'Evidence pack', meaning: 'The statement, reference numbers, correspondence and dates that a complaint is decided on.' },
        { term: 'Appellate authority', meaning: 'The body that hears an appeal against an ombudsman\u2019s decision, within the window the scheme sets.' },
        { term: 'Online dispute resolution', meaning: 'The market regulator\u2019s route for matters that need adjudication rather than a service fix.' },
      ] },
      l5Sources(['rbi', 'sebiScores', 'irdai'], [
        'The integrated ombudsman scheme, the complaint portal, the thirty-day window, the compensation limits and the appeal route',
        'The investor complaint system and the online dispute-resolution process: how to file, what to attach and how the complaint is tracked',
        'The policyholder grievance mechanism and the insurance ombudsman rules, including the one-year window and the award ceiling',
      ]),
    ],
    quiz: [
      {
        q: 'Your bank has not responded to a written complaint made twelve days ago. What should you do?',
        options: [
          { text: 'Escalate to the ombudsman immediately', why: 'The entity is entitled to its window first. Escalating early means the complaint is sent back rather than heard.' },
          { text: 'Wait out the entity\u2019s thirty-day window, keeping the complaint and its reference number, then escalate', correct: true, why: 'The escalation route opens once the entity has had its defined period to respond, and the written complaint plus the reference number is what proves the window ran.' },
          { text: 'File a consumer case instead, since it is faster', why: 'A consumer case is decided on the merits by a commission and takes longer than the ombudsman route for a service failure. Choose by what you want, not by which sounds stronger.' },
          { text: 'Stop paying the disputed amount', why: 'Withholding a payment creates a default in your name while resolving nothing. Dispute the charge, do not the account.' },
        ],
      },
      {
        q: 'Which of these demands can a forum actually grant?',
        options: [
          { text: 'Take strict action against the bank and its staff', why: 'Action against a regulated entity is a supervisory matter for the regulator, not a remedy a complaint forum grants to a complainant.' },
          { text: 'Reverse the ₹18,400 charge debited on 3 June 2026 and confirm the reversal in writing within fifteen days', correct: true, why: 'It names an amount, a date, the correction wanted and a deadline — the four elements that make a demand grantable rather than rhetorical.' },
          { text: 'Compensate me for the mental agony of this entire experience', why: 'Hardship can be compensated within a scheme\u2019s limits, but only alongside a specific underlying failure. On its own it asks for something with no anchor.' },
          { text: 'Investigate why this happened to me', why: 'An investigation is the regulator\u2019s business. A complaint asks for a defined correction or an amount.' },
        ],
      },
      {
        q: 'Why are automated acknowledgements worth keeping?',
        options: [
          { text: 'Because they prove you complained, and timestamp the entity\u2019s silence', correct: true, why: 'They establish that the first step was taken and when, which is exactly what the escalation route requires before it opens, and they often evidence the failure itself.' },
          { text: 'Because they contain the resolution', why: 'An acknowledgement contains nothing about the merits. Its value is evidential.' },
          { text: 'Because the regulator charges a fee without one', why: 'The ombudsman routes are free. The acknowledgement matters for the sequence, not the fee.' },
          { text: 'Because they extend the limitation period', why: 'Limitation runs from the cause of action or the refusal. An acknowledgement does not extend it.' },
        ],
      },
    ],
    takeaway: 'Channel by entity, evidence in a pack, demand with an amount and a date, and one eye on the clock — that is the whole of making a complaint work.',
  },

  'l5-056': {
    id: 'l5-056',
    title: 'Consumer Rights',
    subtitle: 'Three commissions, two years, and a forum that does not require a lawyer.',
    minutes: 11,
    blocks: [
      scene('rights-pathway', 'The district, state and national commissions sorted by value, with the two-year limitation and the reliefs a commission can order.'),
      { kind: 'p', text: 'Financial services are services, and a customer of a bank, an insurer, a broker or a lender is a consumer. That sentence is the whole foundation of this chapter, because it moves a dispute out of the regulator\u2019s complaint scheme and into a forum that can decide a claim, award compensation and rule on a practice rather than a transaction. The consumer law of 2019 modernised the older framework: it widened the definition of who is a consumer, named unfair trade practices and product liability, set out the reliefs a commission may order, and moved filing online.' },
      { kind: 'p', text: 'The two things that decide whether the route is available are value and time. Value decides which commission hears the case, and the thresholds were revised upward, so most individual financial disputes belong to the district commission. Time decides whether the case exists at all, because the limitation is two years from the date the problem arose — although a delay explained and recorded can be condoned, which is a discretion rather than a right.' },

      { kind: 'h', text: 'Sorting the case before writing it' },
      {
        kind: 'table',
        caption: 'The forum, the value, and the relief most often sought',
        headers: ['Forum', 'Value of the claim', 'Typical relief'],
        rows: [
          ['District commission', 'Up to ₹50 lakh', 'Refund of the amount charged, compensation for the loss, interest and costs'],
          ['State commission', 'More than ₹50 lakh and up to ₹2 crore', 'The same reliefs on a larger claim, and appeals from the district commission'],
          ['National commission', 'Above ₹2 crore', 'The same, and appeals from the state commission'],
        ],
      },
      { kind: 'p', text: 'Two kinds of wrong are recognised, and naming yours correctly is the first drafting decision. A deficiency in service is a failure to deliver what was promised: a charge the rules do not allow, a claim refused on grounds the wording does not permit, a transfer lost and never traced. An unfair trade practice is about the method rather than the instance: a cost built in without disclosure, a product described in a way the terms do not support, a condition whose only function is to keep you from leaving. A deficiency asks for the correction and the money back; a practice asks for the practice to stop, which can matter far more than one person\u2019s refund.' },
      l5Rule(
        'Where a financial dispute is heard, and how long you have',
        'The consumer framework fixes pecuniary jurisdiction at up to ₹50 lakh for the district commission, more than ₹50 lakh up to ₹2 crore for the state commission, and above ₹2 crore for the national commission, under the rules revised for that purpose. A complaint is to be filed within two years of the date on which the cause of action arose, and a commission may condone a delay for reasons it records. A complaint may be filed electronically, a consumer may appear in person or through an authorised representative rather than being required to instruct a lawyer, and the reliefs available include the removal of the deficiency, the return of the amount paid, compensation for the loss caused, and costs. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'Choosing between the forums' },
      { kind: 'p', text: 'The regulator\u2019s schemes and the consumer commissions are alternatives for the same relief rather than steps in a queue, and the trade-off is real. The ombudsman routes are free, usually faster and bounded: they operate within a scheme and a compensation ceiling, and they decide service failures well. A commission can decide wider claims, can address a practice rather than an incident, and can award compensation measured by the loss — in exchange for a filing, a documented case and, realistically, a longer timeline. The sensible sequence for a small, procedural failure is the free forum first; for a claim large enough to matter, or one where the practice itself is the problem, the commission is the right venue.' },
      { kind: 'p', text: 'What the commission expects is documentation rather than argument: the agreement or policy, the statement showing the charge, the correspondence with the entity, the reference numbers, and a short timeline. A case built on those five items is usually resolved on the papers; a case built on recollection spends its first hearing establishing what happened. Two further practical points decide outcomes more often than people expect. Filing is online and inexpensive, so the cost of being wrong about the venue is small; and the limitation period runs from the cause of action, not from the day you gave up arguing with the entity, which is why the date-list page belongs in the file from the first complaint onwards.' },
      sim('l5-consumer-case-builder', 'Enter the claim value, the nature of the wrong and the dates, and see which commission has jurisdiction, whether the limitation period is live, and what relief to ask for.'),
      l5Illustrative('Claim values, dates and document checklists in the lab are invented for practice. The ₹50 lakh and ₹2 crore commission limits, the two-year limitation period, the online filing facility and the reliefs available are the real framework verified on 15 October 2026 and linked below.'),
      { kind: 'h', text: 'The case, in five paragraphs' },
      { kind: 'list', ordered: true, items: [
        'Who you are, who the opposite party is, and the product or service involved.',
        'What was promised, quoting the term in the agreement, policy or published charge list rather than describing it.',
        'What happened, with dates and amounts, and what it cost you.',
        'Why it is a deficiency or an unfair practice, with the specific clause or charge identified.',
        'What you want, in numbered items with amounts, plus costs and any interest claimed.',
      ] },
      { kind: 'terms', items: [
        { term: 'Consumer', meaning: 'A person who buys goods or hires services for consideration, including financial services bought for personal use.' },
        { term: 'Deficiency in service', meaning: 'A shortfall in the quality, nature or manner of performance against what was promised.' },
        { term: 'Unfair trade practice', meaning: 'A method of selling or dealing, such as an undisclosed charge or a misleading description, rather than a single failure.' },
        { term: 'Pecuniary jurisdiction', meaning: 'The value band that decides which commission hears a claim.' },
        { term: 'Limitation period', meaning: 'The two years from the cause of action within which a complaint must be filed, subject to condonation.' },
      ] },
      l5Sources(['indiacode'], [
        'The consumer protection statute and the rules on pecuniary jurisdiction: the definition of a consumer and of a deficiency, the reliefs a commission may order, the two-year limitation, electronic filing and the appeal route',
      ]),
    ],
    quiz: [
      {
        q: 'A bank charge you dispute amounts to ₹60,000, and the problem arose fourteen months ago. Where does the case belong?',
        options: [
          { text: 'The national commission, because it involves a bank', why: 'Jurisdiction follows the value of the claim rather than the size of the entity.' },
          { text: 'The district commission, and the limitation period is still live with about ten months left', correct: true, why: 'The district commission hears claims up to ₹50 lakh, and the two-year limitation from the cause of action has not run — so the case is available on both counts.' },
          { text: 'No forum, because the amount is too small', why: 'The commission\u2019s jurisdiction is a ceiling, not a floor. Small claims are exactly what it is designed for.' },
          { text: 'The state commission, because the bank operates nationally', why: 'The place of operation does not move the forum. The value does.' },
        ],
      },
      {
        q: 'What distinguishes an unfair trade practice from a deficiency in service?',
        options: [
          { text: 'The amount involved: practices concern larger sums', why: 'Value decides the forum, not the nature of the wrong. A practice can be small and repeated.' },
          { text: 'A practice is about the method of selling or dealing, while a deficiency is a failure to perform what was promised', correct: true, why: 'One asks for the correction and the money back; the other asks for the practice to stop, which is why naming the wrong kind correctly changes the relief you seek.' },
          { text: 'A practice requires proof of intent, a deficiency does not', why: 'Neither requires proving intent. Both are tested against what was promised and what the rules allow.' },
          { text: 'Only a deficiency can be raised against a bank', why: 'Both can arise in financial services: an undisclosed charge built into a product is a practice, and a charge the rules do not permit is a deficiency.' },
        ],
      },
      {
        q: 'You have already obtained an ombudsman award on the same charge. What should you do about the consumer commission?',
        options: [
          { text: 'File a case there as well, to increase the compensation', why: 'The two routes are alternatives for the same relief. Pursuing both for one grievance invites the second to be dismissed rather than to add to the first.' },
          { text: 'Rely on the award, and use the commission only for a different or wider claim', correct: true, why: 'Choose by the relief you want: the free schemes decide service failures well within their ceilings, while the commission can decide a wider claim or address a practice — but not the same relief twice.' },
          { text: 'Withdraw the award and start afresh', why: 'An award you already hold is the stronger position. Replacing it with a fresh filing gives up a decided matter for an undecided one.' },
          { text: 'Nothing further is possible after an award', why: 'An unsatisfied award or a wider loss can still support a case, provided the relief sought is not the same one.' },
        ],
      },
    ],
    takeaway: 'Value decides the forum, two years decides whether you have a case, and a short documented timeline decides most outcomes.',
  },

  'l5-057': {
    id: 'l5-057',
    title: 'Reading Financial Contracts',
    subtitle: 'Eight clauses move cost, risk and control — and the rulebook outranks the wording.',
    minutes: 11,
    blocks: [
      scene('contract-anatomy', 'A page of clauses marked by what each one moves: three that set cost, three that shift risk, and three that hand over control.'),
      { kind: 'p', text: 'A financial contract is a risk allocation document wearing the clothes of a price list. The rate is on the first page and the consequences are in the annexures, which is why people who can quote an interest rate to two decimal places are often surprised by what a missed payment costs them. The remedy is not to read every word. It is to read for the clauses that move one of three things: cost, risk or control. Everything else is boilerplate that the law fills in anyway.' },
      { kind: 'p', text: 'The reason the exercise converges on a short list is that these documents are drafted from templates, and the templates are built around the same handful of decisions. What does the price depend on and how often can it change? What triggers a fee, and how are penalties computed? When does the whole amount become payable at once? What secures the obligation, and who else is on the hook? How does the arrangement end, and what survives it? What have you authorised the other side to do without asking again? Where do disagreements get heard, and at whose cost?' },

      { kind: 'h', text: 'The eight clauses, and what each one moves' },
      {
        kind: 'table',
        caption: 'Read for the clause, not the page count',
        headers: ['Clause', 'What it moves', 'What to do with it'],
        rows: [
          ['"At the discretion of" anything', 'Risk', 'Find out what is actually decided under discretion: approving a co-applicant, releasing security, waiving a fee'],
          ['Pricing, benchmark and reset', 'Cost', 'Note the benchmark, the spread and how often it resets, and whether a reset is communicated to you'],
          ['Fee schedule and its triggers', 'Cost', 'Ask for it in writing before signing. A fee quoted verbally is not part of the contract'],
          ['Default and acceleration', 'Risk', 'An acceleration clause makes the entire balance due on a default: look for the notice period before it bites'],
          ['Security, set-off and guarantor', 'Risk', 'Set-off reaches your deposits at the same institution; the guarantor clause hands the obligation to somebody else'],
          ['Renewal and termination', 'Control', 'Automatic renewal plus a notice period decides whether you can leave when you want to'],
          ['Authority you grant', 'Control', 'Standing instructions and debit authority act without asking again, so their limits are the clause to check'],
          ['Dispute resolution and jurisdiction', 'Control', 'A fixed city or a one-sided arbitration clause decides whether complaining is realistic at your size of claim'],
        ],
      },
      l5Rule(
        'Where the wording and the rule disagree',
        'A contract cannot override a statutory or regulatory requirement, so a clause that conflicts with a direction of the regulator is unenforceable to that extent. The clearest current example is prepayment: charges on floating-rate loans to individuals, and to small enterprises within the prescribed limit, are barred with effect from 1 January 2026, and conditions such as a minimum period before repayment, a minimum amount, or a cap on the number of prepayments may not be used to block an exit. Penalties on a missed payment must be levied as charges and not as interest, and must not be capitalised, since 1 January 2024. A clause of that kind in an older agreement is therefore not a term to negotiate — it is a term to have removed. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'How to read one in twenty minutes' },
      { kind: 'list', ordered: true, items: [
        'Find the definitions first. Half the traps live in a word that is defined more broadly than its everyday meaning.',
        'Read the pricing clause and the fee schedule together, and write the total annual cost of holding the product before you read anything else.',
        'Circle every appearance of "at the discretion" and decide whether you are comfortable not knowing the answer.',
        'Read the default clause for the notice period and the trigger, because that is the clause that converts a small problem into a large one.',
        'Read the termination, renewal and jurisdiction clauses last, and check the two that matter most: how you leave, and where a dispute is heard.',
      ] },
      { kind: 'p', text: 'Two habits make the reading worth doing. The first is to ask the seller to mark the clauses that answer those questions, which is a reasonable request and a revealing one — an evasive answer tells you more than the document would. The second is to keep the version you signed, including the annexures and the fee schedule, exactly as signed. Disputes are decided on the document that existed at signature; a revised schedule emailed later is a change to be examined rather than the baseline.' },
      sim('l5-contract-scanner', 'Mark each clause by what it moves, price the fees buried in the schedule, and see which clauses are negotiable and which ones the rules already answer.'),
      l5Illustrative('The amounts and fees in the lab are invented for practice. The rule that a contract cannot override a regulatory requirement, the bar on prepayment charges for floating-rate individual and small-enterprise loans from 1 January 2026, and the treatment of penalties as charges rather than interest since 1 January 2024 are the real framework verified on 15 October 2026 and linked below.'),
      { kind: 'p', text: 'One caveat closes the chapter honestly. Reading a contract well does not make it fair, and negotiating a clause is a different skill from spotting it. What the reading buys is a decision: whether the fee structure is one you can live with, whether the discretion is one you can tolerate, and whether the exit works for the life you actually expect to lead. A contract you understand and still sign is a choice; a contract you skim is a surprise with a date on it.' },
      { kind: 'terms', items: [
        { term: 'Acceleration clause', meaning: 'A term making the entire outstanding amount payable on a default, subject to whatever notice it requires.' },
        { term: 'Set-off', meaning: 'The right of an institution to apply money it holds for you against money you owe it, without going to court.' },
        { term: 'Unilateral variation', meaning: 'A clause allowing one side to change terms such as fees within the limits the rules allow.' },
        { term: 'Jurisdiction clause', meaning: 'The term fixing which courts hear a dispute, and often the city in which they sit.' },
        { term: 'Boilerplate', meaning: 'Standard terms that mostly restate what the law already provides, and where the risk clauses hide among the reassurance.' },
      ] },
      l5Sources(['indiacode', 'rbi'], [
        'The law on contracts, unfair terms and consumer protection, including how a term that conflicts with a statute is treated',
        'The directions on prepayment charges and on penal charges in loan accounts, which are the clearest examples of a rule that overrides a clause',
      ]),
    ],
    quiz: [
      {
        q: 'A loan agreement from a lender contains a 2% foreclosure charge on a floating-rate personal loan. What is the position?',
        options: [
          { text: 'It is enforceable, because you signed it', why: 'A contractual term cannot override a regulatory direction. A clause requiring a charge the rules prohibit is unenforceable to that extent, whatever was signed.' },
          { text: 'The clause cannot be applied, because prepayment charges on floating-rate loans to individuals are barred', correct: true, why: 'From 1 January 2026 such charges are not permitted, and restrictions such as a lock-in or a minimum prepayment amount cannot be used to block the exit either.' },
          { text: 'It applies only if you repay within the first year', why: 'There is no such carve-out for these loans; the restriction itself is not permitted.' },
          { text: 'It is enforceable because the charge is disclosed', why: 'Disclosure is necessary for charges that are allowed. It cannot make an allowed-by-nobody charge valid.' },
        ],
      },
      {
        q: 'Why is the definition section the first thing to read in a financial contract?',
        options: [
          { text: 'Because it contains the interest rate', why: 'The rate is in the pricing clause. The definitions decide what the pricing clause means.' },
          { text: 'Because defined terms are often broader than their everyday meaning, and the rest of the document is built on them', correct: true, why: 'Terms such as charges, default and due date are given specific meanings that decide when a fee applies and when an obligation is triggered.' },
          { text: 'Because it lists the parties', why: 'Knowing the parties matters, but the drafting risk sits in how obligations are defined.' },
          { text: 'Because definitions are the only clause a lender may not change', why: 'Definitions are changed by agreement like any other term; they are simply where the meaning of the contract is fixed.' },
        ],
      },
      {
        q: 'A contract says disputes go to arbitration in a city a thousand kilometres away. What is the practical significance?',
        options: [
          { text: 'None, since arbitration is cheap and quick in every case', why: 'Arbitration costs and travel can be large relative to a small claim, which is exactly why the clause is drafted that way.' },
          { text: 'It shapes whether complaining is realistic at all for a claim of your size, which is why it is a control clause', correct: true, why: 'A distant forum or a one-sided arbitration clause decides whether pursuing a genuine grievance is worth the cost, and that is control in practice.' },
          { text: 'It replaces your rights under the consumer law', why: 'Consumer remedies remain available; the clause affects the practical difficulty of pursuing a contractual dispute.' },
          { text: 'It means the lender has admitted liability', why: 'A dispute clause says nothing about liability. It only decides where and how disputes are heard.' },
        ],
      },
    ],
    takeaway: 'Read for cost, risk and control: the pricing and fee clauses, the acceleration and security clauses, and the ones that decide how you leave and where you are heard.',
  },

  'l5-058': {
    id: 'l5-058',
    title: 'Loan Agreements',
    subtitle: 'Reset, prepayment, penalty and security: four clauses that decide what the loan really costs.',
    minutes: 12,
    blocks: [
      scene('loan-clause-map', 'Six clauses from a loan agreement beside the rule that governs each one — the document and the rulebook, read together.'),
      { kind: 'p', text: 'A loan agreement is the one contract almost everybody signs and almost nobody reads, which is a poor combination given how much of a household\u2019s future it commits. The rate is the least interesting part. What decides the outcome is how the rate can change, what it costs to get out, what happens in a bad month, and what the lender can take if things go wrong. Each of those four questions is answered in a clause, and each clause is now governed by rules that constrain what a lender may write.' },
      { kind: 'p', text: 'Start with the structure rather than the number. A fixed rate puts the risk of the benchmark moving on the lender, and charges for it either in a slightly higher rate or in a prepayment charge. A floating rate moves that risk to you, and the protection you have in exchange is that the rules require the lender to explain a reset and to let you choose how to absorb it. Neither structure is better in the abstract; choosing without knowing which one you have chosen is the mistake.' },

      { kind: 'h', text: 'The reset, and what you are entitled to be told' },
      { kind: 'p', text: 'On a floating-rate loan the rate is a benchmark plus a spread, and the benchmark moves. When it does, the lender decides whether the instalment changes or the tenure does — and the rules require the borrower to be informed and given a choice rather than simply handed a new instalment. That sounds administrative and it is worth real money: if the rate rises and the tenure stretches instead, a fifteen-year loan can quietly become an eighteen-year loan, with the extra years paid for in interest. Reading the clause before the first reset is the difference between knowing that and discovering it in year nine.' },
      {
        kind: 'table',
        caption: 'Four clauses, and what the rules now require',
        headers: ['Clause', 'What the agreement may say', 'What governs it'],
        rows: [
          ['Rate reset', 'The benchmark, the spread, the reset frequency and how a change is applied', 'The borrower must be told what a reset does and offered the choice between a changed instalment and a changed tenure'],
          ['Prepayment', 'A charge for repaying early, or a lock-in before you may', 'Not permitted on floating-rate loans to individuals, or to small enterprises within the prescribed limit, from 1 January 2026'],
          ['Penalty for a missed payment', 'A charge, or interest on the overdue amount', 'Must be a penal charge rather than interest since 1 January 2024, disclosed in the agreement, and never capitalised'],
          ['Security and guarantor', 'A charge over an asset, a co-applicant, a guarantor, a set-off over deposits', 'Must be written, and released when the obligation is discharged'],
        ],
      },
      l5Rule(
        'What a loan agreement may not do',
        'Charges for prepayment or foreclosure on floating-rate loans to individuals are barred, and the bar extends to small enterprises within the prescribed limit, with effect from 1 January 2026; conditions such as a minimum lock-in period, a minimum prepayment amount or a limit on the number of prepayments may not be used to prevent or discourage prepayment. Penalties on default must be levied as penal charges and not as penal interest, must be disclosed in the loan agreement and in a schedule the lender publishes, and must not be capitalised — no further interest may be charged on the penalty itself — since 1 January 2024. On a floating-rate loan the lender must communicate a change in the benchmark and the resulting position to the borrower. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'The audit, before you sign' },
      { kind: 'list', ordered: true, items: [
        'Identify the benchmark, the spread and the reset frequency, and ask what the last reset did to a loan like yours: changed instalment, or changed tenure.',
        'Check the prepayment clause against the structure. On a floating-rate loan to an individual, a charge is not permitted, and neither is a lock-in that effectively prevents repayment.',
        'Read the penalty clause and confirm it is expressed as a charge in rupees or a rate on the overdue amount, with no interest charged on the penalty itself.',
        'Find the security clause, the set-off clause and the guarantor clause, and note what can be taken and from whom if you cannot pay.',
        'Look for bundled insurance and confirm it is optional, priced separately and consented to in writing rather than assumed.',
        'Note the processing fee, the documentation charge and the foreclosure terms for the fixed-rate version of the same loan, because that is the comparison that matters.',
      ] },
      { kind: 'p', text: 'One clause deserves a second look because it is easy to sign without noticing: the co-applicant. Adding a spouse or a parent as a co-applicant is often required for eligibility and is usually beneficial for tax, since both owners can claim the deduction. But a co-applicant is a borrower, not a witness, and their liability is not limited to their share of the property. The same is true of a guarantor, whose exposure is the whole obligation and whose credit record carries it.' },
      { kind: 'p', text: 'Finally, note that rule changes reach loans already in force. The bar on prepayment charges, the treatment of penalties, and the requirement to be told about a reset all apply to agreements signed earlier as well, which is why the productive way to review an old loan is to read it against the current rules rather than against what the lender said at the time. Where the two disagree, the rule wins — and the remedy is a written request, then a complaint, not a renegotiation.' },
      sim('l5-loan-agreement-audit', 'Audit a loan clause by clause, switch between a floating and a fixed structure, and see which clauses the rules already answer and what they are worth.'),
      l5Illustrative('The loan amounts, rates and clause terms in the lab are invented for practice. The bar on prepayment charges for floating-rate individual and small-enterprise loans from 1 January 2026, the treatment of penalties as charges rather than interest since 1 January 2024, and the requirement to communicate a reset are the real framework verified on 15 October 2026 and linked below.'),
      { kind: 'terms', items: [
        { term: 'Benchmark and spread', meaning: 'The reference rate a floating rate is built on, plus the fixed margin the lender adds to it.' },
        { term: 'Reset', meaning: 'The adjustment of a floating rate when the benchmark moves, which changes either the instalment or the tenure.' },
        { term: 'Prepayment charge', meaning: 'A fee for repaying a loan early, permitted on fixed-rate loans and barred on floating-rate loans to individuals and qualifying small enterprises.' },
        { term: 'Penal charge', meaning: 'The fee for a default, levied as a charge rather than as interest and never capitalised.' },
        { term: 'Set-off', meaning: 'The lender\u2019s right to take money it holds for you, such as a deposit, against an amount you owe it.' },
      ] },
      l5Sources(['rbi'], [
        'The directions on prepayment charges and on penal charges in loan accounts, the rules on reset of floating-rate loans including the options to be offered to the borrower, and the fair practices code for lenders',
      ]),
    ],
    quiz: [
      {
        q: 'Your floating-rate home loan agreement carries a 1% charge for foreclosure. What can the lender do?',
        options: [
          { text: 'Charge it, because the agreement says so', why: 'A contractual term cannot override a regulatory direction, and the charge is barred for this category of loan.' },
          { text: 'Nothing: prepayment charges on floating-rate loans to individuals are not permitted, and lock-ins cannot be used to block repayment', correct: true, why: 'The bar runs from 1 January 2026 and covers partial prepayment as well as foreclosure, so the clause is unenforceable rather than negotiable.' },
          { text: 'Charge it above a certain outstanding amount', why: 'The restriction is on the category of loan and borrower, not on the size of the balance.' },
          { text: 'Charge it only if you switch to another lender', why: 'Switching to another lender is one of the situations the bar is intended to protect, not an exception to it.' },
        ],
      },
      {
        q: 'The agreement says a missed instalment attracts penalty interest, and interest continues on the penalty. What is wrong with that?',
        options: [
          { text: 'Nothing, as long as the rate is disclosed', why: 'The form of the penalty is regulated, not only its disclosure. Penal interest with capitalisation is precisely what the directions prohibit.' },
          { text: 'Penalties must be levied as charges rather than interest, and must not be capitalised, so no further interest may be charged on the penalty itself', correct: true, why: 'Since 1 January 2024 the penalty is a charge, disclosed in the agreement and in a published schedule, and interest on the penalty itself is not permitted — which is what turns a bad month into a compounding problem.' },
          { text: 'The penalty is excessive, so it is unenforceable', why: 'Excessiveness is a matter of degree. The problem here is the form, which the rules settle outright.' },
          { text: 'Only the interest rate must be disclosed, and it is', why: 'Penal charges require their own disclosure, separately from the rate on the loan.' },
        ],
      },
      {
        q: 'Your floating rate rises. What should the lender tell you, and what may you choose?',
        options: [
          { text: 'Nothing, since the benchmark is public', why: 'The change has to be communicated to the borrower. A public benchmark does not discharge the obligation to explain what the reset does to your loan.' },
          { text: 'What the reset does, with the choice between a changed instalment and a changed tenure', correct: true, why: 'The borrower is entitled to be told what the change means and to choose how to absorb it — which is why a tenure extension that quietly adds years is worth noticing at the reset rather than a decade later.' },
          { text: 'That the rate has changed, with no further detail', why: 'Information without the consequence is not the requirement. The options are the substance of it.' },
          { text: 'A new agreement that must be re-signed', why: 'A reset adjusts an existing agreement. It is not a fresh contract.' },
        ],
      },
    ],
    takeaway: 'Before signing, price the reset, the exit and the penalty: an agreement that cannot charge you for leaving, cannot compound a penalty and must explain a reset is already protecting you.',
  },

  'l5-059': {
    id: 'l5-059',
    title: 'Insurance Policies',
    subtitle: 'The schedule states facts; the wording decides what is paid — and the waiting periods decide when.',
    minutes: 12,
    blocks: [
      scene('policy-anatomy', 'The schedule and the wording side by side, with the waiting-period ladder running from thirty days to thirty-six months to the sixty-month moratorium.'),
      { kind: 'p', text: 'An insurance policy is two documents, and confusing them is the most common reason a claim surprises its owner. The schedule states the facts: who is covered, for how much, from when, at what premium, and what endorsements have changed since. The wording states the terms: what is covered, what is excluded, how much of a particular expense counts, and how long you must wait before certain conditions are payable. The brochure that sold the policy is a third thing, and it carries no contractual weight at all.' },
      { kind: 'p', text: 'Reading the wording is therefore an exercise in finding the four clause families that decide most claims. Waiting periods decide whether the condition is covered yet. Sub-limits and the way they are applied decide how much of the bill counts. Exclusions decide what is never payable. Conditions decide what has to be done — when the claim must be intimated, what documents are needed, and whether the policy continues if a premium is late. Everything else in a policy document is largely repetition in different type sizes.' },

      { kind: 'h', text: 'The waiting-period ladder' },
      {
        kind: 'table',
        caption: 'What is not payable yet, and for how long',
        headers: ['Waiting period', 'Applies to', 'Practical effect'],
        rows: [
          ['Thirty days', 'All claims except accidents, from the start of the policy', 'A hospitalisation in the first month is usually not payable, which is why new cover is not a substitute for existing cover'],
          ['Up to thirty-six months', 'Pre-existing conditions, and treatments listed in the wording', 'The cap has been reduced over time, so an older policy may carry a longer period than a new one'],
          ['Sixty months', 'The moratorium, after which the claim cannot be contested on the ground of non-disclosure', 'Except for fraud: this is the strongest protection a long-held policy carries'],
          ['Portability', 'The waiting periods already served, when the policy moves to another insurer', 'Switching does not restart the clock, which is what makes comparing insurers at renewal realistic'],
        ],
      },
      l5Rule(
        'The waiting periods, the moratorium and the free look',
        'Health policies carry an initial waiting period of thirty days, except for claims arising from accidents, and a waiting period for pre-existing conditions capped at thirty-six months, reduced from longer periods in earlier rules. After sixty months the moratorium runs out and a claim cannot be contested on the ground of non-disclosure, except where there is fraud. A policyholder may return a policy within thirty days of receiving the document under the free-look provision and receive the premium back less the costs the rules permit. Waiting periods already served travel with the policy when it is moved to another insurer, and claims are subject to the timelines the regulator sets for authorisation at the hospital. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'Sub-limits, and why the room rate matters most' },
      { kind: 'p', text: 'A health policy usually states a sum insured and then qualifies it. A room-rent limit is the qualification that costs the most, because it is applied proportionately rather than to the room charge alone: choose a room above the limit and the insurer reduces the whole admissible bill by the same ratio, from the surgeon\u2019s fee to the medicines. That is why a limit of ₹6,000 a room can cost more on a large bill than the difference in room rates suggests, and why the practical instruction is to check the room category at admission rather than at discharge.' },
      { kind: 'p', text: 'Co-payment works differently and more invisibly: a stated share of every admissible claim, permanent for the life of the policy. It is the clause that distinguishes two policies with identical sums insured, and it is the one that matters most in a policy you intend to hold for decades, because its cost grows as the claims get larger. Deductibles do something similar on an annual basis, and exclusions do it absolutely. Read together, the three answer the question the sum insured deliberately leaves open: what fraction of a large bill will actually be paid.' },
      { kind: 'p', text: 'For a life policy the equivalent clauses are different but equally worth finding: what the death benefit consists of, what riders have been added and what each costs, how a revival works after a missed premium, and how surrender value is calculated if the policy is discontinued early. One rule is worth knowing in relation to disclosure — after the policy has been in force for a number of years, an insurer cannot call it in question on the ground of a misstatement, which is why the proposal form is the document to be careful about at the start rather than the one to worry about later.' },
      sim('l5-policy-reader', 'Set a claim against the room limit, a co-payment and a waiting period, watch the payout fall, and see which clause did the reducing.'),
      l5Illustrative('The claim amounts, room limits and co-payment percentages in the lab are invented for practice. The thirty-day initial waiting period, the thirty-six month cap for pre-existing conditions, the sixty-month moratorium, the thirty-day free look and the rule that portability carries the waiting periods already served are the real framework verified on 15 October 2026 and linked below.'),
      { kind: 'h', text: 'The reading, in order' },
      { kind: 'list', ordered: true, items: [
        'The schedule first, because it gives the facts: sum insured, members, dates, premium and endorsements.',
        'The exclusions list next, and count it. A policy is defined more by what it removes than by the headline number.',
        'The waiting periods, matched against anything you already have: an existing condition and a new policy are a bad pair in the first years.',
        'The sub-limits, in the order that they are applied to a bill, with the room-rent limit checked at admission.',
        'The claim conditions, including when the insurer must be informed and what documents are needed, and the free-look and portability provisions that decide whether you stay.',
      ] },
      { kind: 'p', text: 'Two behaviours turn the reading into money. At renewal, compare on the clauses rather than the premium, because switching resets nothing — the waiting periods already served travel with you, so a better-worded policy is available at any renewal without penalty. And keep the policy wording with the policy document rather than only in an email, because a claim is made by somebody who may not be you, and the document with the exclusions explained is the one that decides how long the process takes.' },
      { kind: 'terms', items: [
        { term: 'Schedule', meaning: 'The page stating the facts of the cover: sum insured, members, dates, premium and endorsements.' },
        { term: 'Wording', meaning: 'The terms of the contract: cover, exclusions, waiting periods, sub-limits and claim conditions.' },
        { term: 'Sub-limit', meaning: 'A cap on a particular part of a claim, such as a room-rent limit, which can reduce the whole bill proportionately.' },
        { term: 'Co-payment', meaning: 'A stated share of every admissible claim the policyholder bears, permanently.' },
        { term: 'Moratorium', meaning: 'The period after which a claim cannot be contested on the ground of non-disclosure, except for fraud.' },
      ] },
      l5Sources(['irdai'], [
        'The protection of policyholders\u2019 interests: the waiting periods and the moratorium, the free-look provision, portability, the claim authorisation timelines and the grievance and ombudsman routes',
      ]),
    ],
    quiz: [
      {
        q: 'A hospital room costs ₹10,000 a night against a ₹6,000 limit in the policy, and the total bill is ₹3 lakh. What should you expect?',
        options: [
          { text: 'A deduction of the room difference only', why: 'The limit is applied proportionately, so the whole admissible bill is reduced by the same ratio rather than just the room charge.' },
          { text: 'The entire admissible bill reduced by roughly the ratio between the limit and the rate paid', correct: true, why: 'Proportionate deduction is why a room-rate breach on a large bill costs far more than the extra rent, and why the room category is worth settling at admission rather than at discharge.' },
          { text: 'Nothing, because the room limit is a guideline', why: 'It is a term of the contract, and it is applied to the claim.' },
          { text: 'The bill is paid in full but the premium rises at renewal', why: 'Deductions are applied at the claim. Renewal pricing is a separate matter.' },
        ],
      },
      {
        q: 'What does the sixty-month moratorium give a policyholder?',
        options: [
          { text: 'A discount on the premium after five years', why: 'The moratorium has no effect on pricing. It limits the insurer\u2019s ability to contest a claim.' },
          { text: 'Protection from a claim being contested on the ground of non-disclosure, except where there is fraud', correct: true, why: 'After the moratorium the disclosure in the proposal form can no longer be used to reject a claim in an ordinary case, which is the strongest protection a long-held policy carries.' },
          { text: 'A guaranteed renewal at the original premium', why: 'Renewal terms are separate, and premiums rise with age and claims experience.' },
          { text: 'Cover for pre-existing conditions from the first day', why: 'Pre-existing conditions carry their own waiting period, capped at thirty-six months, which is a shorter clock than the moratorium.' },
        ],
      },
      {
        q: 'You are unhappy with the wording of your health policy and it is day forty since the document arrived. What are the options?',
        options: [
          { text: 'Return it under the free-look provision', why: 'The free-look window is thirty days from receipt of the document, so it has closed by day forty.' },
          { text: 'Move to another insurer at renewal, carrying the waiting periods already served, and use the grievance route if the current terms were mis-described', correct: true, why: 'Portability preserves the waiting periods, so switching at renewal costs nothing in cover and is the normal remedy for a poorly worded policy — while a mis-description at the point of sale belongs in the grievance route.' },
          { text: 'Cancel immediately and start again with a new policy', why: 'Starting again restarts every waiting period, including the one for pre-existing conditions. That is the outcome portability exists to avoid.' },
          { text: 'Nothing can be changed after the free-look period', why: 'The free look closes at thirty days, but portability and the grievance routes remain open.' },
        ],
      },
    ],
    takeaway: 'Read the wording in the first thirty days: the exclusions define the cover, the waiting periods decide when it applies, and the sub-limits decide how much of a bill is actually paid.',
  },
}
