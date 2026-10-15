import type { Chapter } from '../../types'
import { scene, sim } from '../../lib/chapter-blocks'
import { l5Illustrative, l5Rule, l5Sources } from '../../lib/l5-blocks'

/**
 * Level 5, band three, batch 1 — chapters l5-040 to l5-049.
 *
 * Institutions and contracts: the bodies that stand behind a product, the
 * registers they publish, the contracts they enforce, and the checks a person
 * can run in five minutes before money moves. The band is deliberately
 * unglamorous. It is also where most avoidable losses in this level are
 * prevented, because every one of these chapters ends in something you can look
 * up rather than something you have to believe.
 *
 * Facts verified on 15 October 2026 and linked from each chapter: the split of
 * product regulation between RBI, SEBI, IRDAI and PFRDA and the registers each
 * one publishes; deposit insurance of ₹5 lakh per depositor per bank through the
 * deposit insurance corporation, its exclusion of non-bank deposits, and the
 * single-window banking ombudsman covering banks, non-bank lenders and payment
 * operators; the ₹1 lakh ceiling on a recurring payment mandate executed without
 * additional authentication, subject to advance notice before each debit; the
 * ₹2 lakh per-customer balance ceiling at a payments bank; the ₹50 lakh ceiling
 * on an Insurance Ombudsman award with a one-year window to complain; the
 * requirement that an insurer hold assets above 150% of liabilities; the
 * thirty-day free-look period; the health-claim timelines of one hour for
 * cashless authorisation and three hours for discharge authorisation; health
 * portability preserving the waiting periods already served; the pension exit
 * rule of up to 80% as a lump sum with at least 20% to an annuity, the 14% of
 * basic pay employer deduction, the additional ₹50,000 own-contribution
 * deduction and the tax treatment of each part; the 14% ceiling used for the
 * employer contribution; and settlement through a clearing corporation, which
 * guarantees a matched trade settles even if a broker fails.
 */
export const l5InstA: Record<string, Chapter> = {
  'l5-040': {
    id: 'l5-040',
    title: 'Financial Regulators',
    subtitle: 'Four owners for four product families, and one question that settles the rest.',
    minutes: 11,
    blocks: [
      scene('regulator-map', 'Deposits and loans under one regulator, securities under another, insurance under a third and pensions under a fourth — and the products that sit outside all of them.'),
      { kind: 'p', text: 'India regulates financial products by what they are, not by who sells them. A bank selling insurance is offering an insurance product, and the insurance regulator owns that contract; the same bank selling a mutual fund is distributing a security, and the market regulator owns it. That split is why a salesperson can be entirely wrong about whose rules apply — and why the first useful question about any product is not "what does it return" but "which regulator owns this".' },
      { kind: 'p', text: 'The reason to ask is practical. Each regulator publishes a register of the entities it permits to operate, sets the documents those entities must give you, and runs a complaint route. If you know which one owns the product, you can check the seller in a few minutes, read the two documents that matter, and know where to go when something goes wrong. If you do not, you are relying on the seller to describe their own supervision.' },

      { kind: 'h', text: 'Who owns which product' },
      {
        kind: 'table',
        caption: 'The four regulators, and the registers they keep',
        headers: ['Product or activity', 'Regulator', 'What you can look up'],
        rows: [
          ['Bank deposits, loans, cards, payment apps', 'Reserve Bank of India (RBI)', 'Whether the bank or lender is licensed, which entities are authorised, and what the caution and alert lists say'],
          ['Shares, mutual funds, brokers, advisers, pooled funds', 'Securities and Exchange Board of India (SEBI)', 'Whether the intermediary or scheme is registered, who has been debarred, and the documents a scheme must publish'],
          ['Life and health insurance, insurers, agents, brokers', 'Insurance Regulatory and Development Authority of India (IRDAI)', 'Whether the insurer, agent or broker is licensed, and the serviced and grievance records of each insurer'],
          ['Pension accounts and the managers behind them', 'Pension Fund Regulatory and Development Authority (PFRDA)', 'The pension funds, the annuity providers and the points of presence allowed to open an account'],
        ],
      },
      { kind: 'p', text: 'The pattern in that table is worth stating plainly. What looks like one industry — "financial services" — is four regulatory regimes with different registers, different disclosure duties and different escalation ladders. The body that supervises a bank has no authority over the insurer whose policy the bank just sold you, and complaining to the wrong one costs the weeks it takes to be redirected.' },

      { kind: 'h', text: 'Where the map runs out' },
      { kind: 'p', text: 'The map is not exhaustive, and the gaps are informative. Crypto assets have no product regulator in India: they are legal to hold, taxable when sold, and covered by no register and no protection scheme. Deposit-taking by anyone who is not permitted to do it is prohibited outright, which is why the RBI publishes a list of entities it has named for collecting money without authority. Unregistered investment advice is likewise a violation rather than a grey area, whether it arrives by message, by video or in person.' },
      l5Rule(
        'A regulated product has a regulator, a register and a complaint route',
        'RBI licenses and supervises banks, non-bank lenders, cooperative banks and payment system operators, and publishes lists of authorised entities alongside caution and alert lists. SEBI registers market intermediaries, advisers, research analysts, portfolio managers, pooled funds and mutual fund schemes, and publishes the register and a list of debarred entities. IRDAI licenses insurers, agents, brokers and third-party administrators, and discloses each insurer\u2019s solvency, claim settlement and grievance figures. PFRDA regulates pension accounts and the pension funds and annuity providers that operate under them. Each of the four runs its own grievance route, and the market and insurance regulators additionally run their own complaint systems. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'How to use the map' },
      { kind: 'list', ordered: true, items: [
        'Name the product, not the seller: a fixed deposit, a mutual fund scheme, an insurance policy, a pension account, a loan. The product decides the regulator.',
        'Find the entity on that regulator\u2019s register before any money moves. Registers are public, searchable and current, which makes this the one check that cannot be argued around.',
        'Read the two documents that matter for the product: the one that states the terms, and the disclosure that states the costs. Almost every surprise later is in something that was available at the start.',
        'Learn the escalation order for that regulator — the seller first, then the product provider, then the regulator\u2019s complaint system, then a forum with the power to award against the entity.',
        'Check the caution and alert lists periodically rather than once. Names are added over time, and the lists are cumulative rather than historical.',
      ] },
      { kind: 'p', text: 'One habit makes the whole map usable. Whenever you are offered something new, ask the seller to name the regulator and show you the registration, and watch what happens. An entity that is registered will answer immediately and usually with pride; an entity that is not will explain why the question does not apply to it, which is the answer you needed.' },
      sim('l5-jurisdiction-finder', 'Name the product, get its regulator, the register to search, the complaint route and the flag to watch — then tick the four checks before paying anything.'),
      l5Illustrative('The products offered in the lab are generic and the flags shown are teaching examples, not allegations about any named firm. The allocation of products to regulators, and the existence of the registers themselves, are the real structure verified on 15 October 2026 and linked below.'),
      { kind: 'p', text: 'The map also explains a frustration that people report constantly: being sent from one office to another. The redirect is usually not obstruction. It is a product that belongs to a regulator the first office cannot answer for, which is why knowing the owner in advance saves the round trip.' },
      { kind: 'terms', items: [
        { term: 'Regulator', meaning: 'The statutory body that owns the rules for a product family and licenses the entities permitted to sell it.' },
        { term: 'Registered intermediary', meaning: 'A firm allowed to operate in the market only after registration: a broker, an adviser, a portfolio manager, a distributor.' },
        { term: 'Grievance route', meaning: 'The defined escalation ladder for a product: the seller, then the provider, then the regulator\u2019s complaint system or a forum that can award against them.' },
        { term: 'Alert list', meaning: 'A regulator\u2019s published list of entities it has cautioned against, typically for collecting money or offering products without authority.' },
        { term: 'Debarred entity', meaning: 'An intermediary barred by the market regulator from operating, listed publicly so investors can check a name before dealing.' },
      ] },
      l5Sources(['rbi', 'sebi', 'irdai', 'pfrda'], [
        'The lists of licensed banks, non-bank lenders and payment system operators, plus the caution and alert lists',
        'The register of intermediaries and schemes, and the list of debarred entities',
        'The register of insurers, agents, brokers and third-party administrators, with each insurer\u2019s disclosed figures',
        'The pension funds, annuity providers and the complaint route for a pension account',
      ]),
    ],
    quiz: [
      {
        q: 'A bank branch sells you a life insurance policy. Which regulator\u2019s rules govern the policy itself?',
        options: [
          { text: 'The banking regulator, because the sale happened at a bank', why: 'The bank is supervised where it takes deposits and lends. That supervision does not reach the terms of an insurance contract.' },
          { text: 'The insurance regulator, because regulation follows the product rather than the seller', correct: true, why: 'A contract of insurance is owned by the insurance regulator wherever it is sold. The bank may need permission to distribute, but the policy runs on insurance rules.' },
          { text: 'Both regulators jointly, under a combined agreement', why: 'There is no joint regulator for a single contract. One product, one rulebook.' },
          { text: 'Whichever regulator the insurer chose when it filed the product', why: 'The insurer cannot choose. Products are filed with the regulator that owns that product family.' },
        ],
      },
      {
        q: 'What is the practical reason for identifying a product\u2019s regulator before buying?',
        options: [
          { text: 'Regulated products always earn more', why: 'Regulation changes who is accountable. It makes no claim about returns, and often the same product is a little more expensive for it.' },
          { text: 'Each regulator publishes a register, imposes documents and runs a complaint route, which together are the checks you can actually perform', correct: true, why: 'Knowing the owner converts "trust me" into three verifiable steps: search the register, read the documents, know where a complaint goes.' },
          { text: 'It tells you whether the product is a good investment', why: 'It tells you nothing about quality. It tells you whether the seller is permitted to sell it and who is accountable afterwards.' },
          { text: 'It decides how the returns are taxed', why: 'Taxation follows the product and your holding period, not which regulator supervises it.' },
        ],
      },
      {
        q: 'A person offers a deposit scheme promising a fixed monthly return, saying no regulator is needed because it is a private arrangement. What is the correct reading?',
        options: [
          { text: 'A private arrangement between individuals is outside regulation', why: 'Collecting money from the public against a promise of return is what deposit regulation exists to control, and doing it without authority is prohibited.' },
          { text: 'Collecting deposits without authority is prohibited, and the regulator publishes lists of entities it has named', correct: true, why: 'Deposit-taking requires permission. Where it is absent, the offer itself is the warning, and the published lists exist so that a name can be checked before money moves.' },
          { text: 'It is legal if the amount collected stays small', why: 'Size is not the test. Authority is.' },
          { text: 'It is legal if the returns are actually paid for a while', why: 'Early payments are exactly how these schemes buy time. Being paid once proves nothing about authority.' },
        ],
      },
    ],
    takeaway: 'Regulation follows the product, not the seller: name the product, find its regulator\u2019s register, and you will know within minutes whether the person in front of you may sell it and where to complain if it goes wrong.',
  },

  'l5-041': {
    id: 'l5-041',
    title: 'RBI',
    subtitle: 'Insurance for deposits, rules for payments, a single door for complaints, and a list of names to avoid.',
    minutes: 11,
    blocks: [
      scene('rbi-tools', 'The four tools a depositor actually uses: the deposit protection, the payment rules, the complaint door, and the caution lists.'),
      { kind: 'p', text: 'The banking regulator supervises the institutions that hold most households\u2019 money, and its relevance to an individual is concentrated in four things. Two of them protect you before a problem — deposit insurance and the rules on how payments may be taken. Two of them matter after one — the complaint route and the published lists of entities you should not be dealing with at all. Everything else about central banking, from monetary policy to currency management, is background to those four.' },

      { kind: 'h', text: 'What the deposit protection actually covers' },
      { kind: 'p', text: 'Deposits in a bank are insured up to ₹5 lakh per depositor per bank, principal and interest together, through the deposit insurance corporation. Three details decide whether that cover helps you in practice. It applies per bank, not per account, so two accounts in one bank share a single limit while a second bank brings a second limit. It applies to banks, which includes cooperative banks, and not to non-bank lenders, however much their paperwork resembles a deposit receipt. And it is a reimbursement after failure, not a guarantee of access on the morning it happens — the payout follows the liquidation process.' },
      {
        kind: 'table',
        caption: 'The cover, and the cases where it does not reach',
        headers: ['Situation', 'Insured?', 'What to do about it'],
        rows: [
          ['Fixed deposit and savings balance in one bank, totalling ₹4 lakh', 'Yes, in full', 'Nothing. The limit comfortably covers it'],
          ['Same depositor holding ₹12 lakh across two accounts in one bank', 'Only ₹5 lakh', 'Split across banks. A second bank brings its own ₹5 lakh limit'],
          ['Deposit with a non-bank lender offering a higher rate', 'No cover at all', 'Treat it as lending, not as a deposit, and lend only what you could lose'],
          ['Balance in a payments bank', 'Insured, but capped', 'Remember the product ceiling before planning around it'],
        ],
      },
      l5Rule(
        'The two ceilings that decide where money can sit',
        'Deposit insurance covers ₹5 lakh per depositor per bank, principal and interest together, and the scheme extends to commercial and cooperative banks rather than to non-bank lenders. A payments bank may hold at most ₹2 lakh per customer, and its licence does not include lending that balance out, so its ceiling is a condition of the permission rather than a service limit. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'How payments may be taken from you' },
      { kind: 'p', text: 'Rules on payment mandates matter more than most people expect, because the expensive version of a mistake here is a debit you did not authorise or did not notice. A recurring mandate up to ₹1 lakh per transaction is executed without additional authentication, provided the amount is within the limit you set and you receive advance notice before each debit. Above that level the debit needs your authentication. Both halves of that rule are useful: the notice tells you what is coming, and the ceiling tells you the amount at which the system will stop and ask.' },

      { kind: 'h', text: 'Where a complaint goes' },
      { kind: 'p', text: 'For banks, non-bank lenders and payment operators there is now a single complaint door rather than a set of separate schemes. The sequence is fixed: the entity first, and then the ombudsman, whose route opens once the entity has had a defined period to answer. There is no fee, no lawyer is needed, and the process is designed for a written complaint with documents attached — which is another argument for keeping statements, screenshots and complaint reference numbers.' },
      { kind: 'list', ordered: true, items: [
        'Raise the complaint with the bank, lender or app in writing and keep the reference number. A verbal complaint leaves no record.',
        'Allow the entity the defined window to respond, and keep whatever it sends back, including automated replies.',
        'Escalate to the single-window ombudsman through its portal, attaching the complaint trail and the documents that support your version.',
        'Keep the ombudsman\u2019s decision with your papers. Where an award is made, compliance is part of what the scheme enforces.',
      ] },
      { kind: 'p', text: 'The caution and alert lists are the last of the four tools and the only one you can use before anything has gone wrong. They name entities flagged for offering products without authority, typically foreign-exchange platforms and deposit schemes, and they are worth a check whenever a return looks detached from the rate a bank is offering. The lists are deliberately unglamorous: no commentary, just names and dates, which is exactly what makes them useful.' },
      sim('l5-rbi-checklist', 'Spread deposits against the ₹5 lakh limit, put a non-bank deposit in its place, test a recurring mandate against the ₹1 lakh ceiling, and see when the ombudsman door opens.'),
      l5Illustrative('Account sizes, mandate amounts and the complaint timeline in the lab are invented for practice. The insurance limit, the non-bank exclusion, the ₹1 lakh mandate ceiling and the ₹2 lakh payments-bank cap are the real rules verified on 15 October 2026 and linked below.'),
      { kind: 'p', text: 'The whole chapter reduces to a short routine: know how much you hold at each bank against the cover, keep non-bank lending in a separate mental category, notice what your mandates will debit, and know that a written complaint with a reference number is the entry ticket to everything above it.' },
      { kind: 'terms', items: [
        { term: 'Deposit insurance', meaning: 'Protection of bank deposits up to ₹5 lakh per depositor per bank, principal and interest together, paid out when a bank fails.' },
        { term: 'Per depositor, per bank', meaning: 'The unit of cover: all your accounts in one bank share one limit, while each different bank brings its own.' },
        { term: 'Payment mandate', meaning: 'A standing instruction that lets a merchant or lender debit your account, subject to the ceiling and notice rules.' },
        { term: 'Ombudsman', meaning: 'A free, single-window complaint forum for banks, non-bank lenders and payment operators, reached after the entity has had its turn.' },
        { term: 'Alert list', meaning: 'The regulator\u2019s published names of entities flagged for unauthorised activity, checkable before you pay anyone.' },
      ] },
      l5Sources(['rbi', 'rbiSachet', 'npci'], [
        'The deposit insurance rules, the list of insured banks and the payment system rules including mandates and transaction ceilings',
        'The published caution and alert lists, and the portal for reporting unauthorised deposit or investment schemes',
        'The operational rules for recurring payments and the limits that trigger additional authentication',
      ]),
    ],
    quiz: [
      {
        q: 'You hold ₹4 lakh in savings and ₹3 lakh in a fixed deposit at the same bank. How much is insured?',
        options: [
          { text: '₹7 lakh, because each account is insured separately', why: 'Cover is counted per depositor per bank, not per account, so multiple accounts in one bank share one limit.' },
          { text: '₹5 lakh, with the remaining ₹2 lakh exposed to the bank\u2019s failure', correct: true, why: 'The limit is ₹5 lakh per depositor per bank, principal and interest together, so the second account consumes the same cover rather than adding to it.' },
          { text: '₹3 lakh, because only fixed deposits are insured', why: 'Savings and fixed deposits are both deposits, and both are counted towards the same limit.' },
          { text: 'Nothing, until the bank actually fails', why: 'The insurance exists continuously. What happens on failure is the payout, not the cover.' },
        ],
      },
      {
        q: 'A recurring mandate of ₹80,000 a month is set up for a subscription, with the amount within your limit. What should you expect?',
        options: [
          { text: 'The debit executes without further authentication, with advance notice before each debit', correct: true, why: 'Mandates up to ₹1 lakh per transaction run on notice rather than on re-authentication, which is why the notice is the thing to read.' },
          { text: 'You must authenticate every debit regardless of amount', why: 'That applies above the ceiling. Below ₹1 lakh the system uses notice instead of another authentication.' },
          { text: 'The debit cannot exceed ₹5,000 without a bank visit', why: 'No such threshold exists. The relevant ceiling is the ₹1 lakh mandate limit.' },
          { text: 'The mandate can be cancelled only at a branch', why: 'Cancellation is available through the channels that offer the facility; there is no branch-only rule.' },
        ],
      },
      {
        q: 'Why is a written complaint with a reference number worth the extra effort?',
        options: [
          { text: 'Because banks respond faster to writing', why: 'Speed is not the point, and the response time is set by rules rather than by channel.' },
          { text: 'Because the escalation forum opens only after the entity has had its defined window to answer, and the record is what proves it did', correct: true, why: 'The complaint trail is the evidence that the first step was taken and that the window has run, which is what makes the free escalation route available.' },
          { text: 'Because written complaints are legally binding admissions', why: 'They are not admissions. They are a record, which is what the next stage needs.' },
          { text: 'Because the ombudsman charges a fee for verbal complaints', why: 'The route is free in both forms, but a complaint without a trail cannot show that the entity was given its chance.' },
        ],
      },
    ],
    takeaway: 'Treat the ₹5 lakh limit as a per-bank budget, keep non-bank lending in a different category from deposits, read your mandates, and always get the complaint reference number.',
  },

  'l5-042': {
    id: 'l5-042',
    title: 'SEBI',
    subtitle: 'Registration, disclosure and a complaint system: what the market regulator can and cannot do for you.',
    minutes: 11,
    blocks: [
      scene('sebi-shield', 'A registered intermediary inside the shield of registration, disclosure and record-keeping; unregistered advice and promised returns outside it.'),
      { kind: 'p', text: 'The market regulator supervises everyone who stands between an investor and a security: brokers, advisers, research analysts, portfolio managers, fund houses, depository participants and the pooled vehicles that collect money privately. Its leverage over each of them is permission. A firm sells to the public because it is registered, and registration can be taken away, which is why the register is the most useful document the regulator publishes.' },
      { kind: 'p', text: 'Three duties run through the rulebook and are worth knowing not as legal detail but as expectations you can hold a counterparty to. Registered intermediaries must keep client money and securities separate from their own. They must disclose what they charge and what a product is, in documents you are entitled to read before buying. And they must answer complaints through a documented process, with the regulator\u2019s complaint system behind them when that fails.' },

      { kind: 'h', text: 'The register is the first check, and the fastest' },
      { kind: 'p', text: 'Before paying anyone in the market, look for the registration number and match it against the regulator\u2019s published register. The categories matter, because the permission is specific: a firm registered as a broker is not thereby permitted to advise, and a distributor who is not an adviser may not describe a product as advice. Unregistered investment advice and unregistered research are violations in themselves, whether they arrive through a chat group, a video channel or a paid newsletter — and the regulator has been explicit that popularity does not create a permission.' },
      {
        kind: 'table',
        caption: 'What a registration obliges the firm to do for you',
        headers: ['Obligation', 'What it looks like in practice'],
        rows: [
          ['Segregation of client assets', 'Client funds and securities are held apart from the firm\u2019s own money and are not available to its creditors'],
          ['Disclosure', 'Charges stated up front, terms of the agreement in writing, and scheme or product documents that can be read before you commit'],
          ['Suitability and record-keeping', 'Risk profile and instructions documented, which is what makes a dispute decidable later rather than a matter of recollection'],
          ['Grievance handling', 'A documented complaint process inside the firm, an escalation point, and reference numbers you can carry to the regulator'],
        ],
      },
      l5Rule(
        'Registration, segregation and the complaint route',
        'SEBI registers and supervises market intermediaries, investment advisers, research analysts, portfolio managers, pooled funds and mutual fund schemes, and publishes the register along with the list of entities it has debarred. Registered intermediaries must keep client funds and securities segregated from their own assets. Complaints go first to the firm and then to the regulator\u2019s investor complaint system, which tracks the complaint to resolution and makes the status visible to the investor. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'What the regulator cannot do' },
      { kind: 'p', text: 'The useful discipline in this chapter is knowing the boundary. The regulator can act against a firm for selling without registration, for mis-selling, for failing to segregate client assets, or for making promises the rules forbid. It cannot recover money that a market move took, decide that a scheme picked badly, or tell you whether a stock will rise. Nor will it make you whole because a tip unravelled. When someone tells you that a complaint to the regulator will get your losses back, they are describing a process that does not exist.' },
      { kind: 'p', text: 'There is also a boundary around the register itself. Being registered is evidence that the firm may operate and that somebody is accountable; it is not a rating. Registered firms have failed investors, and the register lists firms against whom action has been taken precisely because registration alone was not enough — which is why the second check is always the documents, not the certificate.' },
      sim('l5-sebi-verify', 'Pick the intermediary, see what its registration obliges it to do, then score the claims you have heard and watch three of them end the conversation.'),
      l5Illustrative('The intermediary categories and the claims listed in the lab are generic teaching examples. The registers, the segregation requirement and the existence of the complaint system are the real structure verified on 15 October 2026 and linked below.'),
      { kind: 'h', text: 'A five-minute routine' },
      { kind: 'list', ordered: true, items: [
        'Search the entity on the regulator\u2019s register and confirm the permission matches what it is offering to do.',
        'Ask for the fee disclosure and the product document, and read the exit terms and the risk labelling before the return figures.',
        'Check the debarred list if you are considering an advisory relationship, particularly one that arrived unprompted.',
        'Keep the agreement, the statements and the reference numbers for any instruction given over a call.',
        'Raise anything that goes wrong with the firm first, in writing, and escalate to the complaint system with the trail attached.',
      ] },
      { kind: 'terms', items: [
        { term: 'Registered intermediary', meaning: 'A firm permitted to operate in the market only after registration, and whose permission can be withdrawn.' },
        { term: 'Segregation of client assets', meaning: 'The requirement that client money and securities be held apart from the firm\u2019s own, so its failure is not automatically yours.' },
        { term: 'Unregistered advice', meaning: 'Investment advice or research given without registration, which is a violation regardless of the channel or the following it has.' },
        { term: 'Debarred list', meaning: 'The published list of entities barred from the market, checkable before you start a relationship.' },
        { term: 'Complaint system', meaning: 'The regulator\u2019s route for investor grievances, reached after the firm has had its turn and used to track a complaint to resolution.' },
      ] },
      l5Sources(['sebi', 'sebiScores'], [
        'The register of intermediaries and schemes, the debarred list, and the regulations on segregation of client funds and conduct',
        'The investor complaint system: how to file, what to attach, and how the complaint is tracked to resolution',
      ]),
    ],
    quiz: [
      {
        q: 'A firm registered as a stock broker offers to manage your money on a discretionary basis for a share of profits. What is the problem?',
        options: [
          { text: 'Nothing, as long as the firm is registered in some category', why: 'Permission in the market is category-specific. Registering as a broker does not authorise discretionary portfolio management or profit sharing.' },
          { text: 'Discretionary management and profit sharing fall under different permissions, so the registration must match the activity', correct: true, why: 'Each category carries its own obligations and capital requirements. A firm acting outside its category is operating without authorisation for that activity.' },
          { text: 'Only the profit-sharing element is prohibited', why: 'The activity itself needs the appropriate registration; the compensation term is a separate problem.' },
          { text: 'It is allowed if the profits are shared only on gains', why: 'Compensation terms do not create a permission. The activity does, and it needs the matching registration.' },
        ],
      },
      {
        q: 'What does segregation of client assets actually protect you from?',
        options: [
          { text: 'A fall in the market', why: 'Segregation is about whose assets they are, not about what they are worth. Market risk stays entirely with you.' },
          { text: 'The firm\u2019s own failure taking your money with it, because client assets are held apart from its own', correct: true, why: 'If client funds and securities sit separately from the firm\u2019s balance sheet, its creditors have no claim on them, which is the point of the requirement.' },
          { text: 'Fraud by an employee', why: 'Segregation reduces the consequences of some frauds, but it does not prevent fraud and it is not a guarantee against it.' },
          { text: 'Being charged excessive fees', why: 'Fees are addressed by disclosure rules, not by segregation.' },
        ],
      },
      {
        q: 'Which of these can you reasonably expect the market regulator to do?',
        options: [
          { text: 'Recover your losses when a recommended share falls', why: 'The regulator has no power to make a market loss good. That is the boundary of the regime.' },
          { text: 'Act against an unregistered adviser who sold advice and promised returns, and require firms to keep client assets segregated', correct: true, why: 'Both are within the rules the regulator enforces: registration for advice, and the segregation and conduct obligations that go with it.' },
          { text: 'Decide whether a mutual fund scheme is a good investment', why: 'Scheme quality is your decision. Registration and disclosure are what the regulator provides.' },
          { text: 'Insure your portfolio against fraud up to a fixed amount', why: 'There is no such insurance scheme. Recoveries depend on the assets actually being found.' },
        ],
      },
    ],
    takeaway: 'Check the registration and match it to the activity, read the documents rather than the certificate, and remember that the regulator can act against a firm but can never make a market loss good.',
  },

  'l5-043': {
    id: 'l5-043',
    title: 'IRDAI',
    subtitle: 'Verify the seller, then know the claim rights that exist before you need them.',
    minutes: 12,
    blocks: [
      scene('irdai-records', 'The registers to check before a policy, the timelines that apply at claim time, and the escalation ladder that follows a refusal.'),
      { kind: 'p', text: 'Insurance is bought on a description and paid on a contract, and the gap between those two moments is where the insurance regulator\u2019s rules do their work. Its registers tell you whether the insurer, the agent or the broker may sell you the policy at all. Its conduct rules define what happens at claim time, in hours and days rather than in goodwill. And its grievance architecture — the insurer, then the regulator\u2019s complaint route, then an ombudsman with the power to award against the insurer — is the ladder a refused claim climbs.' },
      { kind: 'p', text: 'Start with the seller, because that check is the one that cannot be fixed later. An insurer on the register is a licensed entity with capital and solvency obligations. An agent or broker with a licence is accountable for how the product was described. And the premium must go to the insurer: paid to an individual in cash, the money and the policy both become somebody\u2019s word, and the most common way a policy turns out never to have existed is exactly that.' },

      { kind: 'h', text: 'The rights that matter at claim time' },
      {
        kind: 'table',
        caption: 'What applies when, and for how long',
        headers: ['Right', 'The rule', 'Why it matters'],
        rows: [
          ['Cashless authorisation', 'The insurer decides within one hour of the request from the hospital', 'Delay at this point is measured in a hospital corridor, not in a call centre queue'],
          ['Discharge authorisation', 'Final authorisation within three hours of the discharge request', 'This is the step where families wait with paperwork in hand'],
          ['Free look', 'Thirty days from receiving the policy document to return it and get the premium refunded, less permitted costs', 'The only right that undoes a purchase rather than fighting it — and the shortest-lived'],
          ['Portability', 'Moving a health policy to another insurer carries the waiting periods already served', 'Switching insurers does not reset the clock you have already paid in years for'],
          ['Grievance escalation', 'The insurer first, then the regulator\u2019s grievance route, then the ombudsman', 'Each step has its own window, and skipping one delays rather than accelerates the claim'],
        ],
      },
      l5Rule(
        'The claim timelines, the free look and the ombudsman',
        'Insurers are required to decide a cashless authorisation within one hour and to give final authorisation for discharge within three hours. A policyholder has thirty days from receiving the policy document to return a policy under the free-look provision and receive the premium back less the costs the rules permit. A health policy moved to another insurer retains the waiting periods already served, so portability does not restart them. Where a claim is refused, the route runs from the insurer to the regulator\u2019s grievance mechanism and then to the Insurance Ombudsman, whose awards insurers must comply with, whose ceiling is ₹50 lakh, and which requires the complaint to be made within a year of the refusal. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'Mis-selling, and what can actually be done about it' },
      { kind: 'p', text: 'Mis-selling usually takes one of three forms: a policy sold as a savings product with a return that the contract does not promise, a cover described as wider than its exclusions, or a premium loaded with riders nobody explained. The remedies differ by how much time has passed. Inside the free-look window, the policy goes back. Outside it, the remedies are the grievance route, a complaint against the seller\u2019s licence, and for a health policy, portability to an insurer whose terms you have now read. There is no general power to rewrite a contract because it was described badly, which is why reading the document during the free-look period is the single most valuable half hour in the whole process.' },
      { kind: 'p', text: 'One more thing is worth building into the habit of buying. Keep the proposal form, the policy document, the premium receipts and the correspondence together, physically or digitally, in one place that somebody else could find. A claim is an evidence exercise conducted by people who are frightened and in a hurry, and the family that can produce the papers is the family whose claim moves.' },
      sim('l5-insurer-verify', 'Verify the seller, then run a claim through the timelines, test the free-look window, and see exactly when the ombudsman door opens.'),
      l5Illustrative('The claim amount, the hours of delay and the policy ages in the lab are invented for practice. The one-hour and three-hour authorisation timelines, the thirty-day free look, the portability rule and the ₹50 lakh ombudsman ceiling are the real rules verified on 15 October 2026 and linked below.'),
      { kind: 'h', text: 'Before you sign, and after you claim' },
      { kind: 'list', ordered: true, items: [
        'Check the insurer on the register and the seller\u2019s licence, and pay the insurer rather than a person.',
        'Read the policy document in the free-look period, and count the exclusions rather than the coverage highlights.',
        'Note the two claim timelines and the contact for authorisation, so that a delay is documented as it happens rather than remembered later.',
        'For a health policy, record the waiting periods already served; they travel with you if you switch insurers.',
        'If a claim is refused, put the request for reconsideration to the insurer in writing, then escalate within the year the ombudsman route allows.',
      ] },
      { kind: 'terms', items: [
        { term: 'Free look', meaning: 'The thirty days from receiving a policy document in which it can be returned and the premium refunded, less permitted costs.' },
        { term: 'Cashless authorisation', meaning: 'The insurer\u2019s decision, required within one hour of the hospital\u2019s request, that treatment will be paid directly.' },
        { term: 'Portability', meaning: 'Moving a health policy between insurers while keeping the waiting periods already served.' },
        { term: 'Ombudsman award', meaning: 'A decision by the insurance ombudsman that the insurer must comply with, up to a ₹50 lakh ceiling, on a complaint made within a year.' },
        { term: 'Third-party administrator', meaning: 'The firm handling claims and hospital networks for an insurer, licensed and listed alongside insurers and agents.' },
      ] },
      l5Sources(['irdai'], [
        'The register of insurers, agents, brokers and third-party administrators, the claim timelines and the free-look provision, each insurer\u2019s disclosed solvency and claim figures, and the insurance ombudsman rules including the award ceiling and the one-year window',
      ]),
    ],
    quiz: [
      {
        q: 'A hospital requests cashless authorisation on Tuesday morning. What should happen within the hour?',
        options: [
          { text: 'The insurer must give the hospital its decision on authorisation', correct: true, why: 'Authorisation within one hour of the request is a rule, not a service aspiration, and the timestamps are what a complaint is later built on.' },
          { text: 'The insurer must settle the entire claim', why: 'Settlement comes at the end, after treatment and the final bill. This step is the agreement to pay directly.' },
          { text: 'The policyholder must pay a deposit to the hospital', why: 'Where cashless authorisation is in place, the point of it is to avoid exactly that.' },
          { text: 'Nothing, until the discharge summary is complete', why: 'That is the later step, with its own three-hour timeline for final authorisation.' },
        ],
      },
      {
        q: 'You realise a policy was mis-sold, forty days after the document arrived. What is the position?',
        options: [
          { text: 'You can still return it under the free look', why: 'The free-look window is thirty days from receipt of the document. At forty days it has closed.' },
          { text: 'The free look has closed, so the remaining routes are the grievance process and, for health cover, portability to another insurer', correct: true, why: 'The remedies change with time: return within the free-look period, and afterwards the complaint and escalation routes, with portability preserving a health policy\u2019s served waiting periods.' },
          { text: 'Nothing can be done at any point, so the lesson is purely forward-looking', why: 'Complaint routes exist, and a seller\u2019s licence can be challenged, even though the contract itself is not rewritten.' },
          { text: 'Portability resets the waiting periods, so never switch insurers', why: 'Portability carries the waiting periods already served. It does not reset them, which is why switching is a genuine option.' },
        ],
      },
      {
        q: 'An insurer refuses a claim. What is the correct sequence?',
        options: [
          { text: 'Go straight to the ombudsman, because the insurer has already decided', why: 'The insurer is given its chance to reconsider first. Skipping the step delays rather than accelerates the escalation.' },
          { text: 'Ask the insurer to reconsider in writing, then use the regulator\u2019s grievance route, then the ombudsman within the one-year window', correct: true, why: 'Each step has its own place and time limit, and the ombudsman route — free, no lawyer needed, awards binding on the insurer up to a ceiling — opens after the earlier steps have been taken.' },
          { text: 'File a criminal case against the agent', why: 'A dispute about a contract is not a criminal matter unless there is fraud, and that route does not fix the claim.' },
          { text: 'Wait for the policy to lapse, then claim again', why: 'A lapsed policy creates a new and larger problem rather than a remedy.' },
        ],
      },
    ],
    takeaway: 'Verify the seller and pay the insurer, use the free-look window to read the contract you actually bought, and treat the one-hour and three-hour claim timelines as rights with timestamps.',
  },

  'l5-044': {
    id: 'l5-044',
    title: 'PFRDA',
    subtitle: 'A structure rather than a product: who holds the money, who manages it, and what the exit costs.',
    minutes: 12,
    blocks: [
      scene('pension-architecture', 'The regulator, the trust, the recordkeeper, the managers and the annuity providers — and which of them you can change.'),
      { kind: 'p', text: 'A pension account is the clearest example in this level of the difference between owning an asset and being entitled to a set of rights over it. You do not hold the securities in a pension account; a trust does, on your behalf, under rules set by the pension regulator. You do not choose the recordkeeper that maintains your account, though your choice of manager and allocation sits inside the structure. That separation is not an administrative annoyance. It is the protection: the money is held apart from the firms that manage it, so the failure of a manager is not the failure of your retirement.' },
      { kind: 'p', text: 'Understanding the structure answers questions that otherwise look arbitrary. Why can the contributions only be allocated between a fixed set of funds? Because those funds are registered and audited on set terms. Why does the account survive a change of employer, and often a change of manager? Because the account attaches to you through the recordkeeper, not to any job. And why does part of the corpus have to buy an annuity? Because the framework is designed so that a part of the money cannot be outlived, which no market-linked drawdown can promise.' },

      { kind: 'h', text: 'The pieces, and which ones move' },
      {
        kind: 'table',
        caption: 'Who does what in a pension account',
        headers: ['Piece', 'Role', 'Can you change it?'],
        rows: [
          ['Regulator', 'Sets the rules for contributions, allocation, exit and grievance', 'No — it is the framework'],
          ['Trust', 'Holds the assets on behalf of subscribers, separate from the managers', 'No — that is the point of it'],
          ['Recordkeeper', 'Maintains your account, statements and transactions', 'No, but you may operate through different points of presence'],
          ['Fund managers', 'Invest the contributions in the scheme\u2019s funds as you allocate', 'Yes — you can switch, within the permitted limits and frequency'],
          ['Annuity provider', 'Converts the annuity portion into an income at exit', 'Yes — the choice is made at exit, on the terms then available'],
          ['Points of presence', 'Open and service the account', 'Yes — banks and other entities act as access points'],
        ],
      },
      { kind: 'p', text: 'The investment choices are where most of the practical decisions sit. Under the active choice a subscriber allocates between funds with different risk levels, subject to limits that changed in recent years to permit a full-equity option for those who want it; under the automatic choice, the allocation follows the age-based lifecycle path and de-risks as retirement approaches. Both are legitimate, and the choice between them is really a statement about how much attention you will pay over decades. The auto path exists for people who will not, and it is a reasonable default rather than a punishment.' },

      { kind: 'h', text: 'Contributions, deductions and the exit' },
      l5Rule(
        'What a pension account offers, and what it demands at the end',
        'The pension framework permits an employer contribution up to 14% of basic pay to be deducted in the current regime, and an additional deduction of up to ₹50,000 for own contributions under the old regime. At exit, up to 80% of the corpus may be taken as a lump sum, with at least 20% used to purchase an annuity; the lump sum is exempt from tax and the annuity is taxed as income when received. Partial withdrawals before exit are permitted only on the grounds the rules set out. Verified 15 October 2026.',
      ),
      { kind: 'p', text: 'The exit split deserves a longer look, because it is where the arithmetic of the structure becomes personal. Taking the maximum lump sum gives you the most flexibility and the least protection: the money is yours to invest, and it can also be spent. Leaving more in the annuity buys an income that arrives for as long as you live, at a rate that is fixed at the moment of purchase, in exchange for a lower amount of money you control. What makes the choice manageable is understanding that an annuity is not an investment. It is insurance against outliving your money, and like all insurance it costs something, which is why the sensible split depends on how much of your essential spending other guaranteed income already covers.' },
      { kind: 'p', text: 'Two smaller rules carry real weight. Partial withdrawals before exit are allowed only for the purposes named in the rules — the framework is not a bank account, and treating it as one is how an account is emptied long before retirement. And the annuity rate you are offered at exit depends on rates and on your age at that moment, which is why the annuity portion of the corpus should be planned as a recurring decision rather than a fixed number written down years in advance.' },
      sim('l5-pension-setup', 'Set a contribution, an allocation and an exit split, and see the corpus, the lump sum, the monthly annuity and the tax on each part.'),
      l5Illustrative('Contribution amounts, the equity share and the annuity rate in the lab are invented for practice, and the annuity rate is an input rather than a market quote. The 80/20 exit split, the 14% employer deduction, the ₹50,000 own-contribution deduction and the tax treatment of each part are the real rules verified on 15 October 2026 and linked below.'),
      { kind: 'h', text: 'Operating the account well' },
      { kind: 'list', ordered: true, items: [
        'Open the account through a registered point of presence, and keep the account number and the statement access with your papers — the account travels with you, but only if you can find it.',
        'Match the employer contribution, because it is the highest-return rupee available to you: it reduces tax today and becomes income later.',
        'Choose between active and automatic allocation deliberately, and if you choose active, review the allocation at the intervals the scheme permits rather than reacting to a bad quarter.',
        'Nominate a beneficiary, and keep the nomination current: it decides who can operate the account without a succession process.',
        'Plan the exit split in advance against your other guaranteed income, and compare annuity rates at the point of purchase rather than from an illustration years old.',
      ] },
      { kind: 'p', text: 'Grievances follow the structure rather than cutting across it: the recordkeeper and the trust first, and the regulator\u2019s complaint route where the matter is not resolved. In practice, most problems with a pension account are documentary — a contribution that did not reach the account, a bank detail that was never updated, a nomination that predates a marriage — and they are all resolved faster when the statement is in hand.' },
      { kind: 'terms', items: [
        { term: 'Recordkeeper', meaning: 'The firm that maintains a subscriber\u2019s account, statements and transactions, and through which the account is operated.' },
        { term: 'Trust', meaning: 'The body that holds the pension assets on subscribers\u2019 behalf, separately from the managers who invest them.' },
        { term: 'Active choice', meaning: 'Investing contributions yourself across the permitted funds, within regulatory limits on how much may go to each.' },
        { term: 'Automatic choice', meaning: 'An age-based lifecycle allocation that de-risks the portfolio automatically as retirement approaches.' },
        { term: 'Annuity', meaning: 'An insurance contract bought with part of the corpus that pays an income for life; income, not investment, and taxed as it arrives.' },
      ] },
      l5Sources(['pfrda', 'nps', 'incometax'], [
        'The pension regulations: the exit split, the permitted grounds for partial withdrawal, the investment choices and the grievance route',
        'The scheme structure and the funds available to a subscriber, together with the account statement access',
        'The deduction limits for employer and own contributions and the tax treatment of the lump sum and the annuity',
      ]),
    ],
    quiz: [
      {
        q: 'At exit from a pension account, what does the 80/20 rule require?',
        options: [
          { text: '80% must be used to buy an annuity', why: 'The proportions are the other way round: the larger share may be taken as a lump sum.' },
          { text: 'Up to 80% may be taken as a lump sum, with at least 20% used to purchase an annuity', correct: true, why: 'The framework permits most of the corpus as a lump sum, exempt from tax, while insisting that a fifth buys an income that cannot be outlived — and the annuity is taxed as it is received.' },
          { text: '80% must remain in the account until age 75', why: 'There is no such deferral requirement. The exit split is the rule that applies.' },
          { text: 'Both parts must be withdrawn at the same time in equal instalments', why: 'No such condition exists; the split is by purpose, not by timing into instalments.' },
        ],
      },
      {
        q: 'Why does the account separate the money from the managers who invest it?',
        options: [
          { text: 'To increase the returns of the funds', why: 'Separation does not raise returns. It changes what happens if a manager fails.' },
          { text: 'So that a manager\u2019s failure does not become the subscriber\u2019s loss, because the assets are held by a trust', correct: true, why: 'The trust holds the assets on subscribers\u2019 behalf, so the managers are running money that is not on their own balance sheet — the failure of a fund is a problem for the framework rather than for the individual account.' },
          { text: 'Because the regulator requires all investments to be held in cash', why: 'The assets are invested. The question is whose name they are held in.' },
          { text: 'To prevent subscribers from changing their allocation', why: 'Subscribers can change managers and allocations within the permitted limits. That is a separate feature.' },
        ],
      },
      {
        q: 'What is the honest way to think about the annuity portion?',
        options: [
          { text: 'As an investment with a guaranteed return', why: 'An annuity is not an investment. Its pricing bundles longevity protection with assumptions about interest rates, and a guaranteed nominal income can still lose ground to inflation.' },
          { text: 'As insurance against outliving your money, priced at the moment of purchase and taxed as income', correct: true, why: 'You are buying longevity protection, and the cost of that protection is a lower level of money you control. Treating it as an investment is what makes people feel cheated by a contract that did exactly what it said.' },
          { text: 'As a tax-free income stream', why: 'The annuity is taxed as income when received. It is the lump-sum portion that is exempt.' },
          { text: 'As something to be avoided in every case', why: 'It is the only part of the plan that cannot be outlived, which matters a great deal for essential spending late in life.' },
        ],
      },
    ],
    takeaway: 'Understand the structure before the numbers: a trust holds the assets, you choose the managers and allocation, the employer contribution is the best rupee you can get, and the exit must reserve at least a fifth for income you cannot outlive.',
  },
  'l5-045': {
    id: 'l5-045',
    title: 'Banks',
    subtitle: 'They differ by licence, by cost and by what they will do when something goes wrong.',
    minutes: 11,
    blocks: [
      scene('bank-choice-grid', 'Four kinds of bank scored on the deposit limit, the charges, the reach and the complaint record — the comparison that actually decides.'),
      { kind: 'p', text: 'The word "bank" covers entities with quite different licences. A large public-sector bank, a foreign bank with three branches, a small finance bank, a cooperative bank, a payments bank and a regional rural bank are all banks, and they differ in what they may do with your money, how much of it they may hold, what they charge, and how quickly they will answer when something goes wrong. Choosing between them is therefore not a question of brand. It is a question of which licence fits what you need the account to do.' },
      { kind: 'p', text: 'The deposit protection applies across them: deposits in a bank are insured up to ₹5 lakh per depositor per bank, principal and interest together, and cooperative banks are included. That single rule does most of the work of turning bank choice from a question of safety into a question of cost and service — with one important exception, which is the payments bank.' },

      { kind: 'h', text: 'The licences, in one table' },
      {
        kind: 'table',
        caption: 'What each kind of bank may do, and what that means for a depositor',
        headers: ['Kind', 'What is distinctive', 'What to watch'],
        rows: [
          ['Public and private sector banks', 'Full banking: deposits, lending, payments, cards, foreign exchange', 'Charges on minimum balances and cash transactions vary more than people expect'],
          ['Small finance banks', 'Full banking on a mandate to serve smaller customers and priority sectors', 'Often better rates on deposits; check the branch and digital service you will actually use'],
          ['Payments banks', 'Deposits and payments only — at most ₹2 lakh per customer, and no lending', 'The ceiling is a licence condition. It is a good second account, not a place for savings'],
          ['Cooperative banks', 'Locally owned, deposit-insured, supervised under the banking framework', 'Rates can be higher; solvency and governance vary more than at large banks, so stay inside the cover'],
          ['Foreign banks', 'Often corporate and wealth focused, with few branches', 'Deposit protection applies, but retail service may be thin and charges high'],
        ],
      },
      { kind: 'p', text: 'Two conventions in that table are worth holding on to. The payments bank ceiling is per customer and not per account, and the licence does not permit lending your balance out. And cooperative banks are genuinely covered by deposit insurance, which is why the sensible response to a cooperative bank offering a high rate is not to avoid it but to keep the balance inside ₹5 lakh.' },

      { kind: 'h', text: 'Cost, which is visible if you look for it' },
      { kind: 'p', text: 'Every bank publishes a schedule of charges, and it is the least-read document in retail finance. Between free-transaction allowances, minimum-balance requirements and their penalties, cash withdrawal limits at branches and at other banks\u2019 machines, and charges for services that used to be included, the annual cost of two accounts can differ by thousands of rupees for identical use. The rough rule is that the cheaper account is usually the one whose minimum-balance requirement matches the balance you actually keep, because penalties on a shortfall are the most avoidable charge in banking.' },
      l5Rule(
        'The two numbers that govern a bank account',
        'Deposit insurance covers ₹5 lakh per depositor per bank, principal and interest together, and applies to commercial and cooperative banks rather than to non-bank lenders. A payments bank may hold at most ₹2 lakh per customer, and its licence does not include lending, so that ceiling is part of the permission rather than a limitation of service. Complaints run from the bank to the single-window banking ombudsman, which covers banks, non-bank lenders and payment system operators and opens after the entity has had its window to answer. Verified 15 October 2026.',
      ),
      { kind: 'p', text: 'Two features deserve a mention because they are free and rarely used. A nomination on the account decides who can operate it without a succession process, and it takes minutes to add. A joint account with an either-or-survivor instruction achieves a similar result for day-to-day money. Neither substitutes for a will, and both save months of paperwork at the worst possible moment.' },

      { kind: 'h', text: 'What to compare, in order' },
      { kind: 'list', ordered: true, items: [
        'The licence, because it decides what the account can do at all: a payments bank cannot be the home of your savings, and a cooperative bank should not hold more than the insured amount.',
        'The schedule of charges, read against how you actually use the account rather than against the headline interest rate.',
        'The reach and the digital service you will use in practice: your own branch and machine network, the quality of the app, and how quickly the bank resolves a failed transaction.',
        'The interest rate on the balance you keep, which matters far less than the charge structure for most salaried accounts and far more for money genuinely parked in deposits.',
        'The complaint record, which is published by the regulator and is a better guide to service than any advertising.',
      ] },
      sim('l5-bank-picker', 'Spread balances across four kinds of bank, watch the insured amount change, and price the free-transaction allowances and penalties you would actually pay.'),
      l5Illustrative('The four accounts, balances and charge assumptions in the lab are invented for practice. The ₹5 lakh insurance limit, the payments-bank ceiling of ₹2 lakh and the ombudsman route are the real rules verified on 15 October 2026 and linked below.'),
      { kind: 'p', text: 'The practical arrangement many households end up with, once they have done this comparison, is two or three accounts with different jobs: a salary account whose charges fit their balance, a deposit account at the bank paying the best rate on the amount they can keep inside the insurance limit, and possibly a payments bank or a small finance bank account for the payments work it does cheaply. The point is not complexity. It is that each account is chosen for what it does rather than for the logo on the door.' },
      { kind: 'terms', items: [
        { term: 'Payments bank', meaning: 'A bank licensed to take deposits and move payments, capped at ₹2 lakh per customer, and not permitted to lend.' },
        { term: 'Small finance bank', meaning: 'A full-service bank with a mandate to serve smaller customers and priority sectors, often paying better deposit rates.' },
        { term: 'Cooperative bank', meaning: 'A locally owned bank, covered by deposit insurance and supervised within the banking framework.' },
        { term: 'Schedule of charges', meaning: 'The published list of what a bank charges, including minimum-balance penalties and free-transaction allowances.' },
        { term: 'Nomination', meaning: 'A registered instruction naming who receives or operates the balance on death, avoiding a succession process for the account.' },
      ] },
      l5Sources(['rbi'], [
        'The licensing rules for each kind of bank, the deposit insurance framework and its ₹5 lakh limit, and the published complaint data and ombudsman route',
      ]),
    ],
    quiz: [
      {
        q: 'A payments bank offers a higher interest rate than your salary bank. What limits how much you can keep there?',
        options: [
          { text: 'Nothing, as long as the bank is licensed', why: 'The licence itself carries the restriction. This is the difference between a payments bank and a small finance bank.' },
          { text: 'At most ₹2 lakh per customer, because a payments bank may hold balances only up to that ceiling and cannot lend them out', correct: true, why: 'The ceiling is a condition of the licence. It makes a payments bank a good operating account and a poor place for savings.' },
          { text: '₹5 lakh, the same as the deposit insurance limit', why: 'Deposit insurance and the product ceiling are different things. The insurance limit is ₹5 lakh per bank; the payments-bank balance ceiling is ₹2 lakh per customer.' },
          { text: 'It depends on whether you also hold a loan with the bank', why: 'A payments bank does not lend, so the question does not arise.' },
        ],
      },
      {
        q: 'A cooperative bank in your area pays a full percentage point more than a large private bank. What is the reasonable response?',
        options: [
          { text: 'Avoid it, because cooperative banks are not covered by deposit insurance', why: 'Cooperative banks are covered by deposit insurance under the same ₹5 lakh limit. Avoiding them entirely gives up real interest for no reason.' },
          { text: 'Use it and keep the balance inside the ₹5 lakh of cover, because governance and solvency vary more than at larger banks', correct: true, why: 'This is the sensible reading, and it is also the reason the cover is set per bank.' },
          { text: 'Deposit as much as possible, because higher rates are always worth the risk', why: 'Above the insured amount you are an unsecured lender to the bank, and the extra interest is small compared with the loss you are risking.' },
          { text: 'Ask the branch manager whether the bank is safe', why: 'The published figures and the licence are the evidence. A manager\u2019s assurance is not.' },
        ],
      },
      {
        q: 'Why is a nomination on a bank account worth the two minutes it takes?',
        options: [
          { text: 'Because it increases the interest rate', why: 'Nomination has no effect on the rate. It affects what happens on death.' },
          { text: 'Because it lets the named person receive the balance without the account entering a succession process', correct: true, why: 'A nomination is a specific remedy for a specific problem: access to the balance at a moment when the family can least afford a paperwork delay. It does not replace a will for the rest of the estate.' },
          { text: 'Because it makes the account joint', why: 'Joint holding and nomination are different arrangements, though both help with transmission.' },
          { text: 'Because banks charge a penalty for an un-nominated account', why: 'There is no such penalty. The cost of not nominating is paid later, in delay.' },
        ],
      },
    ],
    takeaway: 'Compare banks on the licence, the schedule of charges and the complaint record, keep every balance inside the ₹5 lakh cover, and never leave an account without a nomination.',
  },

  'l5-046': {
    id: 'l5-046',
    title: 'NBFCs',
    subtitle: 'A lender, not a bank: what the registration permits, and what it does not cover.',
    minutes: 11,
    blocks: [
      scene('nbfc-boundary', 'The line a non-bank lender cannot cross: lending and borrowing for its own book on one side, deposits from the public and insurance cover on the other.'),
      { kind: 'p', text: 'A non-bank financial company is a registered company that lends or invests, and it exists because lending does not require a banking licence. That single fact explains both its usefulness and its risk. Because an NBFC does not take demand deposits, it does not need the capital, the reserve requirements or the deposit-protection apparatus of a bank — and because it does not have them, the rules around what it may do with your money are different in a way that matters precisely when something goes wrong.' },
      { kind: 'p', text: 'Non-bank lenders finance what banks find inconvenient: used vehicles, small business working capital, consumer durables, gold, short-term personal loans, and the entire digital lending market. They are frequently faster and more flexible than a bank, and they are frequently more expensive. Neither of those is a defect; the defect is dealing with one without knowing which of the two you are facing.' },

      { kind: 'h', text: 'What an NBFC may not do' },
      {
        kind: 'table',
        caption: 'Bank and non-bank lender side by side',
        headers: ['Feature', 'A bank', 'A non-bank lender'],
        rows: [
          ['Demand deposits', 'May accept them', 'May not'],
          ['Term deposits', 'May accept them, insured', 'Acceptable only by the small category permitted to, and not insured'],
          ['Deposit insurance', '₹5 lakh per depositor per bank', 'Does not apply at all'],
          ['Lender of last resort access', 'Yes, through the central bank', 'No'],
          ['Grievance route', 'Bank first, then the ombudsman', 'The lender first, then the ombudsman, which covers these lenders'],
        ],
      },
      { kind: 'p', text: 'The table is worth reading twice, because the practical consequences are asymmetric. A bank can fail and you have ₹5 lakh protected and a liquidation process behind it. A non-bank lender can fail and what you are owed depends entirely on what assets it holds and who else is claiming them. That is why any offer of a deposit-level return from a non-bank lender deserves suspicion: you are being paid a little extra to carry risk that a bank depositor does not carry at all.' },

      { kind: 'h', text: 'The two checks that take minutes' },
      { kind: 'p', text: 'Before borrowing, do two things. First, find the entity on the register of non-bank financial companies — the name on the register is the lender you can complain about, and the name that must appear in your agreement. Second, make sure the app or website names that lender. A digital lending platform that does not disclose whose book the loan sits on has left you without a counterparty you can identify, and the regulator\u2019s guidance on digital lending is explicit that the lender must be named, that disbursal must go to your bank account and repayment must come from it, and that any collection practice reaching beyond the loan — contacts, photographs, social pressure — is prohibited.' },
      l5Rule(
        'What the registration permits, and what protects the borrower',
        'A non-bank financial company must be registered with the central bank, and deposit-taking is permitted only to the limited category authorised for it and only on the terms set for that category. Deposit insurance does not extend to non-bank deposits. Digital lending rules require the lender to be identified to the borrower, funds to be disbursed to and repaid from the borrower\u2019s own bank account, fees to be disclosed in advance, and no access to contacts or other data beyond what the loan requires with explicit consent. Complaints run from the lender to the banking ombudsman, whose coverage extends to these lenders. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'Cost, where the non-bank lender actually competes' },
      { kind: 'p', text: 'The quoted rate is never the cost of a non-bank loan, because the processing fee is usually the second largest number on the agreement. A fee of three per cent on a loan of several lakh rupees, financed into the principal and repaid over the term, adds a meaningful amount on top of the advertised rate — and it is visible in the agreement before you sign, which is the only time it is free to notice. Two comparisons settle most decisions: the total amount repaid against a bank loan of the same size and term, and the same amount borrowed against your own deposit rather than against your income.' },
      { kind: 'p', text: 'The third cost is the one people remember afterwards: the penalty structure. Loans with very high rates tend to have penalties that compound the problem rather than price it, and a missed payment can move the effective cost far above the number that was discussed. Reading the penalty clause, and not the rate, is what prevents the surprise.' },
      sim('l5-nbfc-check', 'Load the fee into the cost, compare the total repaid with a bank loan, and run the two register checks that decide whether the loan is enforceable.'),
      l5Illustrative('The loan amounts, rates, fees and the bank comparison rate in the lab are invented for practice. The registration requirement, the deposit-taking restriction, the exclusion of non-bank deposits from insurance and the digital lending obligations are the real framework verified on 15 October 2026 and linked below.'),
      { kind: 'list', ordered: true, items: [
        'Find the lender on the register, and confirm that the name in your agreement is a registered entity rather than a brand or an app.',
        'Price the loan by total repayment including the fee, not by the quoted rate.',
        'Check the penalty clause and the prepayment terms, because those decide what a bad month costs and whether you can get out early.',
        'Insist that disbursal and repayment run through your bank account, and decline any request for contact access or for credentials.',
        'Keep the agreement, the sanction letter and the repayment schedule: a lender\u2019s complaint route starts with documents, as everyone else\u2019s does.',
      ] },
      { kind: 'terms', items: [
        { term: 'Non-bank financial company', meaning: 'A registered company that lends or invests, and is not permitted to accept demand deposits.' },
        { term: 'Deposit-taking NBFC', meaning: 'The limited category authorised to accept term deposits, on conditions set for it and without deposit insurance.' },
        { term: 'Digital lending', meaning: 'Loans originated or serviced through apps, where the registered lender must be named and funds must move through the borrower\u2019s own bank account.' },
        { term: 'Processing fee', meaning: 'A charge deducted or financed at disbursal, which raises the real cost above the quoted interest rate.' },
        { term: 'Co-lending', meaning: 'An arrangement where a bank and a non-bank lender share a loan, which changes who holds how much of the risk.' },
      ] },
      l5Sources(['rbi', 'rbiSachet'], [
        'The register of non-bank financial companies, the deposit-taking rules for the category permitted to accept deposits, and the digital lending framework',
        'The list of entities flagged for unauthorised activity, worth checking before dealing with an unfamiliar lender',
      ]),
    ],
    quiz: [
      {
        q: 'Which statement about a non-bank lender is correct?',
        options: [
          { text: 'It is a bank with fewer branches', why: 'It is a different licence altogether. Fewer branches would be a description, not a limitation of what it may do.' },
          { text: 'It may not accept demand deposits, and any deposit it accepts is outside deposit insurance', correct: true, why: 'The deposit-taking restriction is what separates it from a bank, and the insurance scheme covers banks rather than these lenders, so a deposit with one carries the lender\u2019s credit risk in full.' },
          { text: 'It may accept deposits but pays no interest on them', why: 'The restriction is on the activity, not on the interest rate.' },
          { text: 'Its deposits are insured up to ₹2 lakh', why: 'No such insurance exists. The ₹2 lakh figure belongs to the payments-bank balance ceiling, which is a different rule.' },
        ],
      },
      {
        q: 'An app offers a personal loan at 15% with a 3% processing fee financed into the loan. What is the effect of the fee?',
        options: [
          { text: 'None, because it is a one-time charge', why: 'A one-time charge that is borrowed and repaid with interest is not an immaterial one. It is part of the principal from day one.' },
          { text: 'It raises the total repaid above what the stated rate implies, so the loan must be compared on total repayment', correct: true, why: 'Financing the fee converts it into principal, on which interest is then charged for the whole term. The only honest comparison is the total repaid against an alternative.' },
          { text: 'It reduces the effective rate because the loan is larger', why: 'A larger principal repaid with interest raises the cost, and the rupees you receive are unchanged.' },
          { text: 'It is refunded if the loan is repaid early', why: 'Refundability is a term to check, not an assumption, and processing fees are commonly non-refundable.' },
        ],
      },
      {
        q: 'A lending app asks for access to your contacts before approving a loan. How should that be read?',
        options: [
          { text: 'As normal underwriting, since contacts show creditworthiness', why: 'Contacts say nothing about creditworthiness. They are collection leverage.' },
          { text: 'As a practice the lending framework prohibits, since data access must be limited to what the loan requires and given with explicit consent', correct: true, why: 'Contact access for collection is precisely what the digital lending rules rule out. The lender must also be named, and money must move through your own bank account.' },
          { text: 'As acceptable if the loan is small', why: 'Loan size does not change the rule, and small loans are where these practices are most common.' },
          { text: 'As a matter for the app store rather than the lender', why: 'The registered lender is accountable for the conduct of its lending service, however it reaches you.' },
        ],
      },
    ],
    takeaway: 'A non-bank lender is a lender, not a bank: no deposit insurance, a register to check, a named entity to complain against, and a total repayment figure that matters more than the quoted rate.',
  },

  'l5-047': {
    id: 'l5-047',
    title: 'Insurance Companies',
    subtitle: 'Four published figures, in the right order, decide more than any brochure.',
    minutes: 11,
    blocks: [
      scene('insurer-scoreboard', 'Solvency, claim settlement, complaints and network, scored against each other rather than quoted one at a time.'),
      { kind: 'p', text: 'A policy is one of the longest relationships most people enter without thinking of it that way: thirty or forty years of premiums in exchange for a promise that is tested once. That asymmetry is why the insurer matters more than the policy\u2019s illustrations. What you are buying is a counterparty that has to be solvent, willing to pay and reachable at the end, and every one of those three things is disclosed annually rather than described by a salesperson.' },
      { kind: 'p', text: 'The disclosures are unglamorous and they are the whole decision. Solvency is a balance-sheet test. The claim settlement ratio is a share of claims paid. Complaints per claim is the normalised measure of friction. Network size is a measure of reach. Read in that order, they answer the question the brochure avoids: not what the insurer says it will do, but what the record shows it did.' },

      { kind: 'h', text: 'Solvency first, because it is a floor' },
      { kind: 'p', text: 'Insurers are required to keep assets above a set proportion of their liabilities, and the level is 150% — a solvency ratio of 1.5 or better. A firm below that line is not offering a discount; it is a supervisory problem, and the regulator\u2019s response can include restrictions on new business until it is repaired. A ratio well above the floor is not automatically better for a policyholder either, since capital held against liabilities is capital not deployed — but a firm at or below the line should be noticed, and its trend over several years read rather than its latest print.' },
      { kind: 'p', text: 'The second and third figures have to be read together, and this is where most comparisons go wrong. A high claim settlement ratio means the insurer pays most claims; it does not say how many claims it discouraged, how many were rejected on grounds discovered at claim stage, or how long payment took. That is what the complaint figure adds, measured per ten thousand claims, which normalises for size in a way an absolute count cannot. A firm with a settlement ratio slightly below its competitor and half the complaint load may well be the better counterparty, and the numbers alone will not tell you — the reason for each rejection will.' },
      {
        kind: 'table',
        caption: 'The four figures, what each measures and what it misses',
        headers: ['Figure', 'What it measures', 'What it does not tell you'],
        rows: [
          ['Solvency ratio', 'Assets against liabilities, with a required floor of 150%', 'Whether claims are paid smoothly — that is a service question'],
          ['Claim settlement ratio', 'The share of claims paid', 'How long payment took, or how many claims were never made'],
          ['Complaints per claim', 'Friction in service, normalised for size', 'Whether the complaints were about timing, amount, or rejection'],
          ['Network and servicing', 'Cashless reach and the insurer\u2019s ability to handle requests', 'Whether the specific hospital you will use is in the network, which you must check yourself'],
        ],
      },
      l5Rule(
        'The figures an insurer must disclose, and the floor it must hold',
        'Insurers are required to maintain a solvency ratio above 150%, meaning assets above 1.5 times liabilities, and the insurance regulator publishes each insurer\u2019s disclosed figures along with the complaint data used to compare their service. Where an insurer exits a line of business, its policies may be transferred to another insurer only through a process that requires regulatory approval and protects policyholders. Policyholders\u2019 remedies run from the insurer to the regulator\u2019s grievance route and then to the Insurance Ombudsman. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'Where the incentive sits, and why it is worth knowing' },
      { kind: 'p', text: 'An insurer earns from premiums invested between receipt and claim, and its profits depend on underwriting discipline, expense control and investment returns. A distributor, meanwhile, earns from the premium at the moment of sale — a commission that is highest on the products that are least efficient for the buyer, which is why an endowment or unit-linked policy so often arrives with an investment story attached. None of that requires anybody to behave badly. It explains why the recommendation at a bank counter and the figures published by the insurer are two different things, and why reading the figures rather than the recommendation is not cynicism but ordinary diligence.' },
      { kind: 'p', text: 'There is one more consideration particular to insurance: the contract has to be serviceable at the moment of claim, and that moment may be decades away. An insurer that has changed hands twice, exited a business line, or restructured its servicing is not disqualified — policyholder rights travel with the portfolio, and transfers require approval — but it is a reason to prefer a firm whose service record is visible and whose papers you have stored properly.' },
      sim('l5-insurer-scorecard', 'Score insurers on solvency, claims, complaints and network, and see why quoting one figure out of four is how a poor choice is made to look strong.'),
      l5Illustrative('The insurers scored in the lab are generated from the sliders rather than named from real disclosures; the figures you move are yours to choose. The 150% solvency requirement and the existence of the disclosed claim and complaint data are the real framework verified on 15 October 2026 and linked below.'),
      { kind: 'h', text: 'How to run the comparison' },
      { kind: 'list', ordered: true, items: [
        'Check the disclosure for the current year and the trend over three or four years, not a single print.',
        'Read the claim settlement ratio with its complaint figure beside it, and treat a gap between them as a question rather than a conclusion.',
        'Check that the hospitals you would actually use are in the network, rather than accepting a national count.',
        'For a term policy, compare the price of the same cover between insurers whose records are all acceptable; for a health policy, weight the service measures more heavily, because claims are frequent.',
        'Ignore any illustration of returns attached to a protection product, and price protection and investment separately.',
      ] },
      { kind: 'terms', items: [
        { term: 'Solvency ratio', meaning: 'Assets measured against liabilities, required to stay above 150%, and the first test of an insurer as a counterparty.' },
        { term: 'Claim settlement ratio', meaning: 'The share of claims an insurer settled, which says nothing on its own about how long settlement took.' },
        { term: 'Complaints per claim', meaning: 'Service complaints normalised by claim volume, and the fairest way to compare insurers of different sizes.' },
        { term: 'Bancassurance', meaning: 'Insurance distributed through a bank, where the bank earns commission on the premium regardless of which insurer fits best.' },
        { term: 'Portfolio transfer', meaning: 'The movement of a block of policies to another insurer, permitted through a process that requires approval and preserves policyholder rights.' },
      ] },
      l5Sources(['irdai'], [
        'Each insurer\u2019s disclosed solvency, claim settlement and grievance figures, the 150% solvency requirement, the rules on portfolio transfer, and the complaint and ombudsman routes for policyholders',
      ]),
    ],
    quiz: [
      {
        q: 'An insurer reports a solvency ratio of 1.32. What does that mean?',
        options: [
          { text: 'It is comfortably solvent, since the ratio is above 1', why: 'The regulatory floor is not 1. A ratio below 150% is below what insurers are required to hold.' },
          { text: 'It is below the 150% level insurers are required to maintain, which is a supervisory concern rather than a selling point', correct: true, why: 'The floor exists to absorb shocks. A firm beneath it can be restricted on new business until it repairs its capital, which is why the figure comes before any comparison of products.' },
          { text: 'It means claims will be rejected', why: 'Solvency does not decide individual claims. It is a balance-sheet test about the firm\u2019s ability to meet obligations overall.' },
          { text: 'It is a figure that applies only to listed insurers', why: 'The requirement applies to insurers, and the disclosure is available for them.' },
        ],
      },
      {
        q: 'Insurer A settles 98% of claims with 30 complaints per ten thousand; insurer B settles 96% with 9. What is the sound reading?',
        options: [
          { text: 'A is better, because two points of settlement ratio is a large gap', why: 'Two points is a large number of claims, but the complaint figure suggests those claims were paid with friction — or that claims were discouraged before being filed.' },
          { text: 'B is worth a closer look, because the settlement difference is small next to a threefold difference in complaints', correct: true, why: 'The two figures measure different things: whether claims are paid, and how painful the process is. A small settlement gap beside a large complaint gap is the pattern that deserves the questions.' },
          { text: 'Neither figure is usable, because settlement ratios are meaningless', why: 'They are meaningful when read with the complaint data, and the trend over years. Discarding them gives up the only published evidence.' },
          { text: 'Complaints per claim is the only figure that matters', why: 'It misses the question of whether claims are paid at all, which is what most policyholders care about first.' },
        ],
      },
      {
        q: 'Why does a commission on the premium create a conflict at a bank counter?',
        options: [
          { text: 'Because banks are not allowed to sell insurance', why: 'Banks may distribute insurance. The issue is the incentive, not the permission.' },
          { text: 'Because the bank is paid for the sale regardless of which insurer suits you and regardless of the product\u2019s efficiency', correct: true, why: 'Commission is earned at the point of sale, often highest on the products that are least efficient for a buyer, so the recommendation reflects the distribution economics as well as your need.' },
          { text: 'Because the commission is paid by the buyer as an extra charge', why: 'It is paid by the insurer out of the premium, which is why it shows up as a lower return or a higher price rather than as a line item.' },
          { text: 'Because the insurer can withdraw the commission later', why: 'Commission terms are a matter between the insurer and the bank. The buyer\u2019s conflict of interest is present either way.' },
        ],
      },
    ],
    takeaway: 'Check solvency before anything, read the claim settlement ratio together with complaints per claim, verify the network you would actually use, and price protection separately from investment.',
  },

  'l5-048': {
    id: 'l5-048',
    title: 'AMCs',
    subtitle: 'A business that earns on the size of your money, running a trust that holds it for you.',
    minutes: 11,
    blocks: [
      scene('amc-economics', 'Assets under management on one side, the expense ratio on the other, and the manager\u2019s revenue sitting in the middle of the two.'),
      { kind: 'p', text: 'An asset management company is two things at once, and confusing them causes most of the disappointment in mutual funds. It is a business that earns a percentage of the assets it manages, so its revenue rises when assets rise and does not fall when returns do. And it is the manager of a trust, whose assets are held for unit holders by a trustee and a custodian, so its own financial trouble is not your financial trouble. Hold both facts at once and the industry becomes legible: the incentives are about size, the structure is about separation, and the only figure that captures the cost to you is the expense ratio, applied over decades.' },
      { kind: 'p', text: 'The expense ratio deserves its reputation as the most important number in a fund. It is charged on the whole balance every year, which means it compounds against you exactly as returns compound for you. One percentage point does not sound like much on a form and is worth a substantial share of a long-term corpus, which is why the difference between a direct plan and a plan bought through a distributor is not a rounding error over twenty years.' },

      { kind: 'h', text: 'The two accounts, kept apart' },
      {
        kind: 'table',
        caption: 'Where the money sits, and what each party earns',
        headers: ['Piece', 'What it holds or does', 'What happens if it fails'],
        rows: [
          ['The scheme', 'Holds the securities, owned by unit holders, held through a custodian', 'Its holdings are unaffected by anything except market prices and the manager\u2019s decisions'],
          ['The trustee', 'Oversees the manager on behalf of unit holders', 'Replaced if it fails; the scheme continues'],
          ['The AMC', 'Manages the portfolio and earns the expense ratio', 'The schemes are transferred to another manager rather than liquidated'],
          ['The custodian', 'Safeguards the securities in the scheme\u2019s name', 'Replaced; the assets are the scheme\u2019s, not the custodian\u2019s'],
          ['The distributor', 'Sells the regular plan and earns a trail from it', 'Irrelevant to the scheme; relevant to your cost'],
        ],
      },
      { kind: 'p', text: 'That table is the reason a mutual fund failure, in the sense people fear, does not exist in the way it does for a bank. The AMC can be sold, merged or shut, and the schemes continue under new management because the assets never belonged to the company. What genuinely can go wrong is narrower and worth naming: the manager can hold a portfolio you would not have chosen, the scheme can be merged into another with a different mandate, and the cost can quietly rise. Those are the risks to diligence, and all three are disclosed.' },

      { kind: 'h', text: 'Reading a factsheet as an owner' },
      { kind: 'p', text: 'A monthly factsheet is a disclosure rather than a sales document, and it answers five questions if read in order. What is the scheme\u2019s size, and is it large enough to survive on its own economics? What is the expense ratio, and is it the direct plan? How much did the portfolio turn over, because trading costs come out of the portfolio before the expense ratio is even calculated? How long has the current manager been running it, because a record travels with the scheme and not with the person describing it? And what does the portfolio actually hold, which three sectors or companies would hurt most if they went wrong?' },
      l5Rule(
        'The structure that protects the assets, and the disclosure that prices them',
        'A mutual fund scheme is a trust: the assets are owned by unit holders and held through a custodian, separate from the asset manager\u2019s own balance sheet, and the manager earns the expense ratio disclosed for the scheme. The market regulator requires schemes to publish their portfolio, costs and performance on a defined basis, distinguishes direct plans from plans sold through distributors, and requires any change of mandate or merger of schemes to go through a process that unit holders are informed of. Verified 15 October 2026.',
      ),
      { kind: 'p', text: 'Two commercial habits follow from the revenue model and are worth recognising for what they are. New fund offers exist because new assets earn fees, while an existing scheme with a long record costs the investor nothing extra to choose; and a scheme is rarely closed to new money, because closure stops the growth the business is built on. Neither habit is misconduct. Both mean the launch calendar and the performance tables are commercial documents as well as financial ones, and your decision does not have to follow either.' },
      sim('l5-amc-diligence', 'Compute the manager\u2019s revenue, the fee drag over twenty years, and the record that belongs to the scheme rather than to whoever is describing it.'),
      l5Illustrative('The scheme size, expense ratio and turnover in the lab are invented for practice, and the twenty-year figures use an assumed growth rate. The trust structure, the segregation of assets, the direct-plan distinction and the disclosure duties are the real framework verified on 15 October 2026 and linked below.'),
      { kind: 'h', text: 'Diligence in five questions' },
      { kind: 'list', ordered: true, items: [
        'Is the expense ratio the direct plan\u2019s, and does it still look reasonable when applied to your balance for twenty years rather than for one?',
        'What is the portfolio turnover, and therefore what cost is being paid inside the portfolio rather than disclosed as a fee?',
        'How long has this manager run this scheme, and does the record being shown predate that tenure?',
        'Is the scheme large enough to be viable, and does it have a clear mandate you could explain to somebody else in one sentence?',
        'Is the relationship between the scheme\u2019s benchmark and its portfolio honest, or is the scheme being compared with something it does not resemble?',
      ] },
      { kind: 'terms', items: [
        { term: 'Asset management company', meaning: 'The firm that manages a scheme\u2019s portfolio and earns the expense ratio, and whose own balance sheet is separate from the scheme\u2019s assets.' },
        { term: 'Expense ratio', meaning: 'The annual cost charged to a scheme, applied to the whole balance, which compounds against the investor like a negative return.' },
        { term: 'Direct plan', meaning: 'The version of a scheme bought without a distributor, and therefore with a lower expense ratio.' },
        { term: 'Portfolio turnover', meaning: 'How much of the portfolio is traded in a year, and a source of costs that sit outside the disclosed expense ratio.' },
        { term: 'Segregation of assets', meaning: 'The holding of scheme assets through a custodian in the unit holders\u2019 interest, apart from the manager\u2019s own assets.' },
      ] },
      l5Sources(['amfi', 'sebi'], [
        'The scheme-level disclosure of costs, portfolio and performance, and the industry data on expenses and categories',
        'The regulations on trust structure, custodian arrangements, direct plans, disclosure obligations and scheme mergers',
      ]),
    ],
    quiz: [
      {
        q: 'An asset manager goes out of business. What happens to the schemes it ran?',
        options: [
          { text: 'Unit holders become creditors of the company and join the queue', why: 'The assets were never the company\u2019s. That is the purpose of the trust and custodian structure.' },
          { text: 'The schemes continue, with the assets intact, under a new manager through a regulated process', correct: true, why: 'The assets are owned by unit holders and held through a custodian, so a change of manager changes who runs the money rather than whether it exists.' },
          { text: 'The schemes are liquidated and the proceeds returned', why: 'Liquidation is not the default, and the process exists precisely to avoid forced selling on a manager\u2019s exit.' },
          { text: 'The regulator takes over the portfolio directly', why: 'The regulator supervises the transition; the day-to-day management passes to another manager.' },
        ],
      },
      {
        q: 'Why does portfolio turnover matter to a cost-conscious investor?',
        options: [
          { text: 'It is part of the expense ratio and already disclosed', why: 'The expense ratio does not capture the trading costs incurred inside the portfolio. Turnover is the reason two schemes with the same ratio can cost different amounts.' },
          { text: 'Because trading inside the portfolio creates costs that are paid by the scheme before the expense ratio is calculated', correct: true, why: 'Brokerage, taxes and market impact come out of the portfolio, so high turnover makes the visible fee understate the real cost.' },
          { text: 'It has no cost effect, since the scheme pays no brokerage', why: 'Schemes pay transaction costs, and they are borne by unit holders in the portfolio\u2019s performance rather than as a line item.' },
          { text: 'It determines whether the scheme is a direct plan', why: 'The direct plan is about distribution and the expense ratio, not about trading activity.' },
        ],
      },
      {
        q: 'A new fund offer is being advertised, and an existing scheme in the same category has a twelve-year record. What is the reasoned position?',
        options: [
          { text: 'The new offer is better because it starts at a lower unit price', why: 'Unit price carries no advantage. A new scheme starting at ten rupees and an old one at a hundred can hold identical portfolios.' },
          { text: 'There is no inherent advantage to the new scheme, and the new offer exists because new assets earn fees', correct: true, why: 'Launch calendars are commercial. A record you can read is the scarce input, and choosing an established scheme in the same category costs nothing extra.' },
          { text: 'The existing scheme is stale and its manager has lost the ability to adapt', why: 'Length of record is evidence, not a defect. If a mandate has drifted, that shows up in the holdings rather than in the scheme\u2019s age.' },
          { text: 'The new offer is better because its expense ratio is always lower', why: 'New schemes do not automatically cost less, and the disclosed ratio is the figure to compare rather than an assumption.' },
        ],
      },
    ],
    takeaway: 'Separate the business from the trust: the manager earns on assets and never on your returns, the assets are held apart from it, and the expense ratio applied over decades is the number that decides what you keep.',
  },

  'l5-049': {
    id: 'l5-049',
    title: 'Stock Exchanges',
    subtitle: 'A market, a supervisor and a guarantee — for settlement, not for price.',
    minutes: 11,
    blocks: [
      scene('exchange-plumbing', 'An order matched, a clearing corporation standing between the two sides, shares landing in the depository, and the price risk staying where it always was.'),
      { kind: 'p', text: 'An exchange is two businesses wearing one name, and the distinction explains almost everything people get wrong about the market. As a market, it matches orders and arranges settlement through a clearing corporation that stands between the buyer and the seller. As a supervisor, it polices its members and the companies it lists, through registration, disclosure, surveillance, price bands and trading rules. What it does not do is carry your market risk, and the confidence people feel because a trade settles reliably is frequently mistaken for a belief that the investment is protected.' },
      { kind: 'p', text: 'The settlement half is genuinely a form of protection, and it is worth understanding precisely. When a trade is matched, the clearing corporation becomes the counterparty to both sides — a process called novation — so the failure of the person on the other side, or of the broker through whom you dealt, does not prevent your trade from settling. Settlement in Indian equity markets runs on a one-day cycle, with an optional same-day cycle available for a limited set of shares. Once the shares are in your depository account, they are yours, not the broker\u2019s.' },

      { kind: 'h', text: 'What is guaranteed, and what is not' },
      {
        kind: 'table',
        caption: 'Four kinds of trouble, and who bears them',
        headers: ['What happened', 'Who bears it', 'Why'],
        rows: [
          ['A broker fails after your trade, before settlement', 'The clearing corporation completes settlement', 'Novation makes the clearing corporation the counterparty, so the trade does not depend on the broker surviving it'],
          ['A broker fails owing you money or securities beyond the settlement', 'A claim on the investor protection fund, within a regulatory cap', 'The fund exists for genuine shortfalls caused by a member\u2019s failure, and it is claimed through the exchange'],
          ['The share you bought falls in price', 'You, entirely', 'No part of the market infrastructure takes price risk. That is what you accepted by owning the share'],
          ['You acted on advice that was wrong or dishonest', 'You, with a possible grievance against the adviser', 'The exchange regulates trading and disclosure, not the quality of advice you received'],
        ],
      },
      { kind: 'p', text: 'The third row is the one that needs repeating, because it is where the confusion survives. Settlement guarantees are about whether a transaction completes as agreed, not about whether the transaction was a good idea. A market where trades always settle is compatible with a portfolio that loses half its value, and the two facts have nothing to do with each other.' },
      l5Rule(
        'Settlement, listing and the limits of the guarantee',
        'Trades on an exchange settle through a clearing corporation that becomes the counterparty to both sides, so a matched trade completes even if a broker fails during the settlement window; settlement in Indian equity markets runs on a one-day cycle, with an optional same-day cycle for a limited set of shares. Where a broker\u2019s failure leaves a genuine shortfall in money or securities it owed a client, the investor protection fund of the exchange answers for a capped claim. The exchange also supervises its members and the listed companies through registration, disclosure, price bands and surveillance, and prohibits trading on unpublished price-sensitive information. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'The other half: the exchange as a supervisor' },
      { kind: 'p', text: 'Listing is a set of continuing obligations rather than a one-time event. A listed company must disclose results, material events and the shareholding pattern on a schedule, must follow the corporate governance rules its category carries, and is subject to surveillance for price and volume movements that look unusual. Price bands and circuit filters pause trading when a price moves beyond set limits, which slows a panic without preventing a decline. None of this makes a listed company a good business or a safe share; it means the company reports, and that somebody is watching for manipulation.' },
      { kind: 'p', text: 'There is a structural tension worth naming, since exchanges are themselves listed companies now. A listed exchange earns from trading volumes, and it also supervises the market that generates them. That conflict is managed through regulation rather than resolved by goodwill: the regulatory functions are defined by the market regulator, and the settlement and supervision obligations attach to the exchange regardless of its commercial interest. For the individual investor, the practical consequence is simply that the exchange\u2019s guarantee should be understood as a piece of infrastructure rather than as a general assurance about the market.' },
      sim('l5-exchange-role', 'Fail a broker mid-settlement, move the price, take a bad tip, and see exactly which rupee the clearing guarantee answers for and which one it never will.'),
      l5Illustrative('The trade value, price move and tip loss in the lab are invented for practice. The settlement guarantee through a clearing corporation, the one-day settlement cycle with an optional same-day cycle, the investor protection fund and its cap, and the surveillance and disclosure obligations are the real framework verified on 15 October 2026 and linked below.'),
      { kind: 'h', text: 'The habit this chapter is for' },
      { kind: 'list', ordered: true, items: [
        'Keep your holdings in your own depository account with a nomination, because the shares are yours once settled and the account is your evidence.',
        'Check your contract notes and statements, since a discrepancy is far easier to resolve the week it appears than a year later.',
        'If a broker defaults, act through the exchange that ran the trade: settlement is handled by the clearing corporation, and any shortfall claim goes to that exchange\u2019s protection fund.',
        'Read the fund\u2019s or company\u2019s continuing disclosures rather than relying on price movements to tell you what is happening.',
        'Treat price risk as entirely yours. No exchange, broker or regulator insures a share against falling.',
      ] },
      { kind: 'terms', items: [
        { term: 'Clearing corporation', meaning: 'The entity that guarantees settlement of matched trades by becoming the counterparty to both sides.' },
        { term: 'Novation', meaning: 'The process by which the clearing corporation substitutes itself as counterparty, so a trade no longer depends on the other side\u2019s survival.' },
        { term: 'Settlement cycle', meaning: 'The period between a trade and the exchange of money and securities, now one day for most equity trades with a same-day option for some shares.' },
        { term: 'Investor protection fund', meaning: 'A fund held by an exchange to answer capped claims arising from a member\u2019s failure to return client money or securities.' },
        { term: 'Circuit filter', meaning: 'A price band that pauses trading when a move exceeds a set limit, slowing an extreme move without preventing it.' },
      ] },
      l5Sources(['nse', 'bse', 'sebi'], [
        'The settlement process and the investor protection fund, together with the investor grievance route',
        'The listing obligations, the surveillance measures and the exchange\u2019s own investor protection arrangements',
        'The rules on settlement, disclosure by listed companies, market surveillance and the prohibition on insider trading',
      ]),
    ],
    quiz: [
      {
        q: 'You buy shares, and the day before settlement your broker is placed under restrictions. What happens to the trade?',
        options: [
          { text: 'It is cancelled and your money is returned', why: 'A matched trade is not cancelled because a member fails. Settlement does not depend on the broker surviving it.' },
          { text: 'The clearing corporation completes settlement, because it is the counterparty to both sides', correct: true, why: 'Novation puts the clearing corporation between buyer and seller, so the trade completes even when an intermediary fails during the settlement window.' },
          { text: 'You lose the money and join the broker\u2019s creditors', why: 'That would be true of a bilateral trade with no clearing house. The guarantee exists precisely to avoid it.' },
          { text: 'The exchange decides case by case whether to settle', why: 'Settlement is automatic machinery rather than a discretionary decision.' },
        ],
      },
      {
        q: 'A share you bought has fallen 30% and the company has been fined by the exchange for disclosure failures. Which loss can you claim?',
        options: [
          { text: 'The fall in price, because disclosure failures misled the market', why: 'Recovering a market loss on a disclosure failure is a legal claim about causation and reliance, not a settlement guarantee, and it is not a claim on the protection fund.' },
          { text: 'None of it through the exchange\u2019s protection fund, which covers shortfalls caused by a member\u2019s failure rather than investment losses', correct: true, why: 'The fund answers for money or securities a defaulting member failed to return. Price risk belongs entirely to the investor, however the price moved.' },
          { text: 'The exchange must compensate investors when a listed company is fined', why: 'The fine is part of supervision. It does not create a fund for investors who lost money.' },
          { text: 'The registrar must return the shares and refund the cost', why: 'The registrar maintains records of holdings; it does not insure value.' },
        ],
      },
      {
        q: 'What does the exchange\u2019s supervision of a listed company actually give you?',
        options: [
          { text: 'Assurance that the company is a sound business', why: 'Listing obligations concern disclosure and governance, not quality. A thoroughly compliant company can still be a poor investment.' },
          { text: 'A guarantee of scheduled reporting, governance conditions and surveillance for manipulation, which is information rather than quality', correct: true, why: 'The exchange enforces the flow of information and watches for abuse. Whether the information describes a good business is your judgement to make.' },
          { text: 'Protection of the share price during volatile periods', why: 'Circuit filters pause trading; they do not support a price.' },
          { text: 'A right to sell at your purchase price if the company performs badly', why: 'No such right exists anywhere in the market. Price risk is never underwritten.' },
        ],
      },
    ],
    takeaway: 'Separate the two businesses: settlement is guaranteed through a clearing corporation and shortfalls caused by a broker\u2019s failure are covered within a cap, while price risk, advice and judgement remain entirely yours.',
  },
}
