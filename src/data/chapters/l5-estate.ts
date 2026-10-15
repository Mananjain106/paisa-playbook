import type { Chapter } from '../../types'
import { scene, sim } from '../../lib/chapter-blocks'
import { l5Illustrative, l5Rule, l5Sources } from '../../lib/l5-blocks'

/**
 * Level 5, band four, batch 1 — chapters l5-071 to l5-080.
 *
 * "Protection & life events" opens with the estate: how everything a person owns
 * actually passes to someone else, and the three mechanisms that decide it — a
 * nomination, a will, and the succession law that applies where neither says
 * anything. The batch then walks the family side of the same subject: household
 * money, marriage, and supporting parents.
 *
 * Facts verified on 15 October 2026 and linked from each chapter: registration
 * of a will being optional under section 18 of the Registration Act, 1908, with
 * probate generally optional and required only in the ordinary original civil
 * jurisdiction of certain High Courts; a nominee receiving money as a custodian
 * rather than as an owner, with the legal heirs retaining their claim, and a
 * bank being entitled to pay the nominee while informing heirs who object;
 * deposit insurance covering ₹5 lakh per depositor per bank, following the
 * depositor and not the nominee; a daughter being a coparcener by birth under
 * section 6 of the Hindu Succession Act, 1956 as amended in 2005, with Class I
 * heirs sharing equally on intestacy; a Muslim estate limiting a will to
 * one-third of the estate with the Quranic shares applying to the rest; section
 * 213 of the Indian Succession Act on the few jurisdictions where probate is
 * required; an inherited asset keeping the previous owner's cost of acquisition
 * and holding period under section 49(1) read with section 2(42A); long-term
 * capital gains at 12.5% without indexation for transfers on or after 23 July
 * 2024, with a 20%-with-indexation option for land and building acquired before
 * that date; no inheritance tax in India, and gifts from relatives and
 * inheritances exempt under section 56(2)(x); the clubbing provisions of section
 * 64 for income from an asset transferred to a spouse; and the section 80D
 * limits of ₹25,000 for self and family, ₹50,000 where a senior citizen, with a
 * matching limit for parents of ₹25,000 or ₹50,000, and a ₹5,000 ceiling for a
 * preventive health check-up within the overall limit, available in the old
 * regime.
 */
export const l5Estate: Record<string, Chapter> = {
  'l5-071': {
    id: 'l5-071',
    title: 'Estate Planning',
    subtitle: 'Everything you own has a destination already. Estate planning is deciding it rather than discovering it.',
    minutes: 12,
    blocks: [
      scene('estate-map', 'An inventory of where assets sit, with the route each one takes after a death: a nomination, a will, or the succession law that applies when neither exists.'),
      { kind: 'p', text: 'Estate planning has a reputation for being about wealth, and it is actually about paperwork. Every asset a person owns already has a destination the moment they die. What they control is whether that destination was chosen or defaulted into. Three mechanisms decide it, and they cover different things. A nomination tells an institution who may be paid. A will states who is entitled. Where neither says anything, the succession law that applies to the person’s religion divides the estate on its own terms.' },
      { kind: 'p', text: 'The reason this matters more than most people expect is that the three mechanisms overlap in ways that are easy to get wrong. A nomination on a mutual fund folio does not transfer ownership: the nominee receives the money and holds it for whoever is entitled to it, which is usually decided by the will or by the default rule. A joint holding with a survivor clause decides who the bank may pay, not who owns the balance. A business interest is governed by the firm’s own documents — a partnership deed or the articles of association — before any will is read. An estate plan is therefore less a document and more a reconciliation exercise: make the nominations, the will and the ownership records tell the same story.' },
      { kind: 'p', text: 'The starting point is an inventory, and it is the part people skip. Most adults, asked to list what they own, will remember the salary account and the flat and forget a dormant account from a first job, a mutual fund folio bought through an agent years ago, a provident fund account, and a small holding of shares in a demat account that was opened for one purpose and never used again. Each of those is a separate nomination and a separate claim. The second half of the exercise is just as unwritten: a document map, so that whoever has to act knows which institutions hold which assets, and where the records are.' },

      { kind: 'h', text: 'Where the pieces live, and what each one needs' },
      {
        kind: 'table',
        caption: 'The route each kind of asset takes, and what decides it',
        headers: ['What it is', 'How it passes', 'What you should do'],
        rows: [
          ['Bank deposits and small savings', 'Nomination, or the institution’s claim process', 'Leave a nomination on every account, including the ones you have stopped using'],
          ['Mutual funds, shares and insurance', 'Nomination, then transmission through the depository or registrar', 'Keep the folio and demat nominations current after every family change'],
          ['Immovable property', 'A will, or the succession law if there is none', 'Describe the property precisely in a will; a disputed description is what causes litigation'],
          ['Business interest', 'The firm’s documents first, then the will', 'Read the partnership deed or articles; a will cannot override what they say'],
          ['Gold, jewellery, vehicles', 'Whoever holds them, and a will', 'Record them; unattested valuables pass by possession, which is a poor rule'],
          ['Digital accounts and subscriptions', 'Usually no nominee at all', 'Leave instructions with the executor; most platforms have no transfer mechanism'],
        ],
      },
      l5Rule(
        'The formal requirements of an estate plan',
        'A nomination may be recorded by an account holder for a deposit, a mutual fund folio, a demat account or an insurance policy, and it may be changed at any time; the nominee receives the money as a custodian, and the legal heirs retain their claim on it. A will does not require registration to be valid: registration is optional under section 18 of the Registration Act, 1908. Probate is generally optional as well, and is mandatory only within the ordinary original civil jurisdiction of certain High Courts. There is no inheritance tax in India, and a transfer under a will or by inheritance is exempt from tax in the hands of the recipient under section 56(2)(x). Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'Why the boring version works better' },
      { kind: 'p', text: 'The estate plans that fail are rarely the sophisticated ones. They fail because an executor was never named, because the original will cannot be found, because an account opened in 1998 still names a person nobody in the family knows, or because one asset was never mentioned anywhere. None of that requires advice to fix. It requires a list, a nomination per account, a short will with a named executor and a residue clause, and one place where the whole thing is kept.' },
      { kind: 'p', text: 'There is a second reason to do it early, which is not about death at all. The inventory process is also the process of noticing what you own: duplicated folios, accounts paying no interest, an insurance policy nobody is sure about, a holding that should have been consolidated years ago. People discover these while assembling an estate plan far more often than they would while simply living their lives.' },
      sim('l5-estate-planner', 'Sort a real estate by the route each slice takes: nomination, will, or the default rule left to decide it.'),
      l5Illustrative('The asset values and the four readiness markers in the lab are invented for practice. The legal mechanisms described — nomination as custody rather than ownership, registration of a will being optional under the Registration Act, 1908, probate being generally optional, and inheritance being exempt from tax under section 56(2)(x) — are the framework verified on 15 October 2026 and linked below.'),

      { kind: 'h', text: 'Do these seven things' },
      { kind: 'list', ordered: true, items: [
        'Write the inventory: every account, folio, policy, property and business interest, with the institution that holds it.',
        'Put a nomination on each one, including accounts you no longer use, and change it when a family situation changes.',
        'Make a will with a named executor, specific descriptions of assets, and a residue clause for everything else.',
        'Sign the will in front of two witnesses who are present together, and note that a witness should not be a beneficiary.',
        'Check the firm’s documents for any business interest, since they decide a share on death before the will does.',
        'Keep the original somewhere findable, and tell the executor where it is.',
        'Revisit all of it after a birth, a marriage, a death, or a large purchase.',
      ] },
      { kind: 'p', text: 'The deepest point is that an estate plan is not for the person who makes it. It is for the family in the worst week of their lives, removing decisions they should not have to make while grieving. A list, a nomination and a clear will convert a period of uncertainty into a set of paperwork tasks with names beside them. That is the entire return on the effort.' },
      { kind: 'terms', items: [
        { term: 'Estate', meaning: 'Everything a person owns at death — assets, rights and interests — before liabilities are settled.' },
        { term: 'Nomination', meaning: 'An instruction to an institution to pay a named person, which releases the money without making the nominee the owner.' },
        { term: 'Intestate', meaning: 'Having died without a valid will, so that the succession law of the person’s religion divides the estate.' },
        { term: 'Executor', meaning: 'The person named in a will to carry out its instructions, including obtaining probate where required.' },
        { term: 'Residue clause', meaning: 'The part of a will that disposes of everything not specifically named, which is what prevents assets falling through.' },
      ] },
      l5Sources(['indiacode', 'mca'], [
        'The Registration Act, 1908 on the optional registration of wills, and the Indian Succession Act, 1925 on wills, executors and probate',
        'The rules governing a share in a firm on the death of a partner or a member, in the partnership law and the companies law',
      ]),
    ],
    quiz: [
      {
        q: 'You have recorded a nominee on your mutual fund folio, but your will names someone else for the same folio. What happens?',
        options: [
          { text: 'The nominee becomes the owner, because the nomination was made later in time', why: 'A nomination does not transfer ownership. Timing does not decide it either: a nominee receives the money as a custodian.' },
          { text: 'The nominee receives the money from the registrar and holds it for the person the will names', correct: true, why: 'The institution pays the nominee to release the money without a succession certificate, but ownership follows the will or the succession law, so the nominee holds it for whoever is entitled.' },
          { text: 'The will is invalid because it conflicts with a nomination', why: 'A conflict between a nomination and a will does not invalidate either document; it creates a custody situation that the nominee is expected to resolve for the heirs.' },
          { text: 'The registrar decides which of the two to pay, at its discretion', why: 'The registrar follows the nomination on record. It does not weigh the will, and that is precisely why the two documents should say the same thing.' },
        ],
      },
      {
        q: 'Which of these needs a will, because a nomination cannot reach it?',
        options: [
          { text: 'A fixed deposit in a bank', why: 'A nomination on a deposit is exactly what the mechanism is for.' },
          { text: 'A holding in a demat account', why: 'A demat account can carry a nomination, which is transmitted through the depository.' },
          { text: 'A flat owned in your own name', correct: true, why: 'Immovable property passes by a will or by the succession law; there is no nomination on a property title, which is why the deed and the will are the documents that matter.' },
          { text: 'A term insurance policy', why: 'A policy is one of the assets a nomination covers most directly.' },
        ],
      },
      {
        q: 'You are told that your will must be registered or it will not be valid. Is that right?',
        options: [
          { text: 'Yes, registration is mandatory for a will to be probated', why: 'Probate does not depend on registration. What probate proves is that the document is the last valid will of the deceased.' },
          { text: 'No. Registration of a will is optional, and a valid unregistered will is enforceable', correct: true, why: 'Registration is permissive under the Registration Act, 1908. Registration makes the document safer to prove and harder to tamper with, but it does not make it valid.' },
          { text: 'It depends on whether the estate is above a certain value', why: 'There is no value threshold for the validity of a will.' },
          { text: 'Yes, and a will must also be stamped like a property deed', why: 'A will is not stamped like a conveyance, and stamping is not what gives it effect.' },
        ],
      },
    ],
    takeaway: 'An estate plan is an inventory first. Nominate every account, state the rest in a clear will, remember that the firm’s documents govern a business interest, and keep the original where the executor can find it.',
  },

  'l5-072': {
    id: 'l5-072',
    title: 'Nominees',
    subtitle: 'A nomination releases money without a court order. It does not decide who owns it.',
    minutes: 11,
    blocks: [
      scene('nominee-grid', 'Eight places where money sits, audited one by one. Three have no nomination, which turns a one-page form into a claim with paperwork and a wait.'),
      { kind: 'p', text: 'A nomination exists for one practical reason: so that an institution can pay out a balance without waiting for a legal determination of who the heirs are. Without one, a bank, a registrar or an insurer has to satisfy itself that it is paying the right person, and that means documents — a succession certificate, an indemnity, or both, sometimes with a surety. With one, the institution is entitled to pay the named person and close the file. That is the whole function, and it is worth a great deal in the weeks after a death.' },
      { kind: 'p', text: 'What a nomination does not do is decide ownership. The nominee receives the money as a custodian, holding it for whoever is legally entitled to it — the person named in the will, or the heirs under the succession law. Courts have repeatedly treated a nominee that way, and the framework reflects it: a bank that pays the nominee is protected, while heirs who object can pursue their claim against the nominee, and a bank may open an account in the name of the estate of the deceased where the heirs require it.' },
      { kind: 'p', text: 'Which is why the practical instruction is not "name someone" but "name the right person and keep it current". A nomination signed a decade ago and never revisited is the most common defect in an otherwise careful plan. A policy that pays a parent while the person is now married, a folio that pays a sibling after the family has changed, an account still naming a person who has died before the account holder — each one is a claim that has to be argued rather than simply settled.' },

      { kind: 'h', text: 'Where nominations live, and what each one is subject to' },
      {
        kind: 'table',
        caption: 'A nomination is specific to an account, not to a person',
        headers: ['Where', 'What the nomination does', 'What to watch'],
        rows: [
          ['Bank deposits and savings accounts', 'Releases the balance to the nominee', 'Set it on dormant and long-forgotten accounts too, since those are the ones that take longest to settle'],
          ['Mutual fund folios', 'Transmits units through the registrar', 'The folio nomination applies across the schemes in that folio; a new folio means a new nomination'],
          ['Demat account', 'Transmits holdings through the depository', 'Check the nomination against the folios, so the two are consistent'],
          ['Insurance policies', 'Pays the nominee under the policy', 'A nominee on a policy is a beneficiary of a contract, and the money is paid directly rather than through the estate'],
          ['Provident fund and pension accounts', 'Pays through the employer and the fund', 'These sit in a portal of their own and need their own entry, separate from your bank records'],
          ['Joint accounts', 'The survivorship clause usually applies first', 'The nomination is a secondary route; keep both accurate and change them together'],
        ],
      },
      l5Rule(
        'Nomination, ownership and deposit insurance',
        'A nominee receives the money as a custodian and not as an owner, and the legal heirs retain their claim on it. Where heirs object to a payment, the institution acts on the nomination on record, and the objecting heirs may pursue the nominee or obtain an order of a competent court. Deposit insurance covers up to ₹5 lakh, including principal and interest, for each depositor in each bank, and it follows the depositor rather than the nominee, so spreading deposits across depositors and banks is what raises the total cover. Where a nominee is a minor, a guardian should be named in the nomination itself. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'The audit, and the two mistakes inside it' },
      { kind: 'p', text: 'The first mistake is coverage. Nominations are per account, per folio and per policy, so a household that has set three of them has not "done the nominations" — it has done three. The second is consistency. A nomination, a will and a joint holding can each point at a different person, and the institution will follow the one it has on record rather than the one that most reflects the intent. The fix for both is the same exercise: one page listing every account and its recorded nomination, reviewed once a year.' },
      { kind: 'p', text: 'A minor as a nominee deserves its own line in that audit. An institution may pay only through a guardian, so a nomination naming a child without naming a guardian leaves the family applying for a guardianship certificate — a court process that exists purely to solve a problem the form would have solved for free.' },
      sim('l5-nomination-audit', 'Tick each place money sits, and watch the uncovered share of the estate and the checks beside it change.'),
      l5Illustrative('The balances and the eight accounts in the lab are invented for practice. The rules described — a nominee as a custodian with the heirs retaining their claim, an institution acting on the nomination on record, and deposit insurance of ₹5 lakh per depositor per bank following the depositor — are the framework verified on 15 October 2026 and linked below.'),

      { kind: 'h', text: 'The nomination routine' },
      { kind: 'list', ordered: true, items: [
        'List every account, folio, policy and fund where money sits, including the ones you no longer use.',
        'Check the nomination recorded on each one, rather than the one you remember filling in.',
        'Name a person who will be easy to identify and reach, and name a guardian wherever a minor is involved.',
        'Make the nomination agree with the will, and where they conflict, change the one you did not intend.',
        'Review the whole list after a marriage, a birth, a death or a separation.',
      ] },
      { kind: 'p', text: 'The reason to bother is a comparison of two experiences. With a nomination, a family produces an identity document, a death certificate and a form, and the balance is released in days. Without one, the same balance waits on a succession certificate from a civil court, which needs a petition, evidence of heirship and time, and can cost more in effort than the balance is worth. The difference between those two outcomes is a signature on a form.' },
      { kind: 'terms', items: [
        { term: 'Nominee', meaning: 'A person named to receive a balance from an institution, who holds it as a custodian for whoever is legally entitled to it.' },
        { term: 'Succession certificate', meaning: 'A court order that establishes who is entitled to a deceased person’s assets where there is no nomination or will to rely on.' },
        { term: 'Transmission', meaning: 'The process of moving securities or units into a deceased holder’s heir’s name in the depository or registrar’s records.' },
        { term: 'Deposit insurance', meaning: 'Cover of up to ₹5 lakh of principal and interest per depositor per bank, following the depositor rather than any nominee.' },
        { term: 'Guardianship certificate', meaning: 'A court order appointing someone to hold money for a minor, needed where a minor receives a payout without a named guardian.' },
      ] },
      l5Sources(['rbi', 'irdai', 'nsdl'], [
        'The framework for settlement of claims in a deceased depositor’s account, including the facility for payment to a nominee and the treatment of a claim by heirs who object',
        'The rules on nomination in a life insurance policy, including the position of a nominee as a beneficiary of the contract and the provisions for a minor nominee',
        'The procedure for transmission of securities in a depository account following the death of the holder, and the nomination facility on a demat account',
      ]),
    ],
    quiz: [
      {
        q: 'Your father names you as the nominee on his fixed deposit, and his will leaves it to your sister. What is your position?',
        options: [
          { text: 'You own the deposit, because you are the nominee', why: 'A nomination does not transfer ownership. The institution may pay you, which is not the same as making you the owner.' },
          { text: 'You receive the money and hold it for your sister, who is entitled to it', correct: true, why: 'The nominee is a custodian. The institution is protected by paying the nominee, and the nominee is expected to account for it to the person entitled under the will.' },
          { text: 'The bank will refuse to pay either of you', why: 'The bank acts on the nomination on record. It is not required to adjudicate between a nominee and a beneficiary.' },
          { text: 'The will automatically overrides the nomination, so the bank pays your sister directly', why: 'The bank does not read the will. It pays the nominee, and the entitlement is settled between the nominee and the beneficiary afterwards.' },
        ],
      },
      {
        q: 'You have ₹9 lakh in fixed deposits in one bank, all in your own name. How much deposit insurance applies?',
        options: [
          { text: '₹9 lakh, because each deposit is separately insured', why: 'Cover is per depositor per bank, not per deposit, so several deposits in one name in one bank share a single limit.' },
          { text: '₹5 lakh, including principal and interest', correct: true, why: 'Deposit insurance covers up to ₹5 lakh per depositor per bank, and it follows the depositor rather than any nominee or account.' },
          { text: 'Nothing, because deposits in a private bank are not insured', why: 'Insured banks include commercial banks, and the cover applies across them.' },
          { text: '₹5 lakh for you and ₹5 lakh for each nominee you name', why: 'A nomination does not add cover: the limit attaches to the depositor, not to the people named on the accounts.' },
        ],
      },
      {
        q: 'You name your eight-year-old niece as a nominee on a deposit and name nobody else. What should you also have done?',
        options: [
          { text: 'Nothing more is needed; the institution will pay her directly', why: 'An institution cannot simply hand a balance to a minor, so without a guardian the money is held through a court-appointed arrangement.' },
          { text: 'Named a guardian in the nomination, so the money can be received and held for her', correct: true, why: 'A minor cannot legally give a discharge, so a guardian has to be named. Doing it on the form avoids a guardianship application later.' },
          { text: 'Made the deposit joint with her instead', why: 'A minor cannot operate an account, and adding a minor as a joint holder changes the account without solving the payout problem.' },
          { text: 'Increased the deposit so that a nomination on it becomes enforceable', why: 'There is no value threshold at which a minor nominee can receive money without a guardian.' },
        ],
      },
    ],
    takeaway: 'A nomination releases money; it does not decide who owns it. Set one on every account, name a guardian where a minor is involved, keep it consistent with the will, and review the list once a year.',
  },

  'l5-073': {
    id: 'l5-073',
    title: 'Beneficiaries',
    subtitle: 'A will can name anyone, but it operates on top of a default rule set by personal law.',
    minutes: 12,
    blocks: [
      scene('beneficiary-tree', 'One estate branching into the shares it is divided into. The same estate produces four different divisions depending on whether a will exists and which personal law applies.'),
      { kind: 'p', text: 'Choosing beneficiaries feels like a blank page and is actually a decision made against a background. Every person is subject to a succession law that applies to their estate when they die without a valid will, and which also limits what a will can do in some cases. The Hindu Succession Act governs Hindus, and the Indian Succession Act governs Christians and Parsis as well as some others; a Muslim estate follows the Quranic shares, with a will able to reach only one-third of the estate. Knowing which background applies to you is the first step, because a will that ignores it will still be read in its light.' },
      { kind: 'p', text: 'The Hindu framework is the one most readers will be dealing with. It sets out a list of heirs in order of preference, beginning with what are called Class I heirs — a spouse, children, and a mother, among others — who take the estate in equal shares when there is no will. Since the 2005 amendment, a daughter is a coparcener by birth in her own right, so a son no longer has a preferred position in the family’s ancestral property. This is a change many families have still not absorbed, and it is the reason a will cannot quietly reproduce an older idea of who inherits what.' },
      { kind: 'p', text: 'The Muslim framework works differently, in a way that has a direct practical consequence. Shares are specified rather than left to equal division: a spouse, children and a mother each take a defined fraction, sons generally take twice a daughter’s share of the residue, and a will may reach only one-third of the estate. The remaining two-thirds pass by the fixed shares whatever the will says. A plan that reads as though the whole estate is available will not deliver what it appears to promise.' },

      { kind: 'h', text: 'Two background rules, and what a will can change' },
      {
        kind: 'table',
        caption: 'Where a will helps, and where the rule has the last word',
        headers: ['Situation', 'Without a will', 'What a will can do'],
        rows: [
          ['A Hindu estate', 'Class I heirs share equally', 'Direct the estate as intended, describe each asset, and name a trust for a minor'],
          ['A Hindu coparcenary share', 'Devolution under the family law', 'Not discretionary in the same way: the share is shaped by the family law before a will is read'],
          ['A Muslim estate', 'Quranic shares apply to the whole estate', 'Reach one-third of the estate and no more; the rest follows the fixed shares'],
          ['An estate with a dependant', 'Maintenance obligations still apply', 'Cannot leave a dependant without provision; the law and the courts read the will in that light'],
          ['A minor beneficiary', 'The money is held through a guardianship arrangement', 'Name a guardian and, better, create a trust with a stated purpose'],
        ],
      },
      l5Rule(
        'The default rules a will works with',
        'A Hindu dying intestate has their estate divided among the heirs in the preferred class, who take equal shares; since the Hindu Succession (Amendment) Act, 2005, a daughter of a coparcener is by birth a coparcener in her own right in the same manner as a son. In a Muslim estate, the Quranic shares are specified and a will may generally dispose of only one-third of the estate, with the residue passing by those shares. Christians and Parsis are governed by the Indian Succession Act, 1925, and the same Act applies to wills made by persons of other faiths for the formal requirements. Gifts received under a will or by inheritance are exempt from tax under section 56(2)(x). Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'Naming people, and structuring what they receive' },
      { kind: 'p', text: 'Once the background is understood, the actual choices come down to three: who receives, in what form, and with what condition. Naming people is the easy part. Choosing the form is where a little thought pays: a specific bequest of an asset suits a person who can use it, a share of the residue suits everyone equally, and money held in trust suits a minor or a person who cannot manage it. Trusts sound elaborate and are simply a legal arrangement in which one person holds property for another — which is exactly what an inheritance paid to a child otherwise needs a guardian for.' },
      { kind: 'p', text: 'The last question is the most neglected one: the dispute surface. Disputes are rarely about the total. They are about a brother’s house that was part of the family while the estate was divided as though it were not, a jewellery set nobody can prove the ownership of, a bequest described as "my savings account" when four accounts exist. Every vagueness in a will is an argument waiting for a date. Reducing the dispute surface is not about being fair; it is about being specific, and about closing gaps instead of relying on goodwill to do the work of a sentence.' },
      sim('l5-beneficiary-designer', 'Compare the shares a will directs with the shares the default rule would produce, and see where a Muslim estate limits the will itself.'),
      l5Illustrative('The estate values, the heir counts and the shares in the lab are invented to teach the shapes of the rules, not to state any family’s entitlement. The framework described — Class I heirs sharing equally, a daughter as a coparcener by birth, and the one-third limit on a will in a Muslim estate — is verified on 15 October 2026 and linked below.'),

      { kind: 'h', text: 'Getting beneficiaries right' },
      { kind: 'list', ordered: true, items: [
        'Identify which succession law applies to you, and read the default division before writing anything.',
        'Decide whether the will should follow the default rule or depart from it, and be deliberate either way.',
        'Describe every asset specifically, and add a residue clause so nothing is left to the default rule by accident.',
        'Where a beneficiary is a minor or cannot manage money, use a trust with a stated purpose rather than a bare bequest.',
        'Leave no dependant without provision: a will that does is open to challenge regardless of its formal clarity.',
        'Make the nominations on your accounts, the will, and any joint holdings say the same thing.',
      ] },
      { kind: 'p', text: 'The underlying idea is that a will is a set of instructions layered on a system that already has an answer. It works best when the writer knows what the system would have done, and either accepts it or displaces it explicitly. That is what makes a will more than a wish: it is a decision about which default to replace.' },
      { kind: 'terms', items: [
        { term: 'Intestate succession', meaning: 'The division of an estate by law where there is no valid will, following the personal law that applies to the deceased.' },
        { term: 'Class I heir', meaning: 'A category of preferred heirs under the Hindu Succession Act — including a spouse, children and a mother — who share equally on intestacy.' },
        { term: 'Coparcener', meaning: 'A person with a right by birth in ancestral joint family property, including a daughter since the 2005 amendment.' },
        { term: 'Residue', meaning: 'What remains of an estate after specific gifts, disposed of by a clause that prevents anything falling to the default rule.' },
        { term: 'Trust', meaning: 'An arrangement in which one person holds property for the benefit of another, often used where a beneficiary is a minor.' },
      ] },
      l5Sources(['indiacode'], [
        'The Hindu Succession Act, 1956, including the list of heirs and the position of a daughter as a coparcener since the 2005 amendment; the Indian Succession Act, 1925 on wills and intestacy; and the personal law that specifies the Quranic shares',
      ]),
    ],
    quiz: [
      {
        q: 'A Hindu person dies without a will, leaving a spouse, two sons, one daughter and a mother. How is the estate divided?',
        options: [
          { text: 'Equally among the sons, with the spouse supported from the estate', why: 'Sons have no preferred position at intestacy; the equal-share rule applies across the preferred class of heirs.' },
          { text: 'Equally among the spouse, the two sons, the daughter and the mother', correct: true, why: 'They are all in the preferred class, and the estate is shared equally among them. The daughter has been a coparcener by birth since the 2005 amendment.' },
          { text: 'Half to the spouse and half divided among the children', why: 'There is no automatic half to a spouse under this framework; the spouse takes one equal share alongside the others in the class.' },
          { text: 'Entirely to the sons, with the daughter and mother excluded', why: 'Daughters and a mother are in the preferred class. A will could change the shape of a distribution, but an intestate estate follows the statute.' },
        ],
      },
      {
        q: 'You want to leave two-thirds of your estate to your daughter and one-third to a charity. You are subject to Muslim personal law. What is the effect?',
        options: [
          { text: 'The whole distribution is valid, because a will is the testator’s document', why: 'A will operates within limits set by the personal law, and the one-third ceiling is one of them.' },
          { text: 'Only one-third of the estate can pass by will, and the remaining two-thirds follows the Quranic shares', correct: true, why: 'A will may generally reach only one-third of a Muslim estate. Anything beyond that is not given effect, and the residue passes by the fixed shares.' },
          { text: 'The will is entirely void', why: 'The bequest is not void; the part within one-third takes effect and the rest follows the fixed shares.' },
          { text: 'The charity receives nothing in any case', why: 'A bequest to anyone, including a charity, is possible within the one-third limit, subject to the rules on consent where a bequest runs to an heir.' },
        ],
      },
      {
        q: 'Which change does the most to reduce the chance of a dispute after your lifetime?',
        options: [
          { text: 'Splitting the estate equally between all children', why: 'Equal division is often wise, but disputes usually arise over ambiguity and unrecorded assets rather than over the arithmetic.' },
          { text: 'Describing each asset precisely and adding a residue clause', correct: true, why: 'Nearly every dispute traces back to a vague description or an asset nobody wrote down. Specificity and a residue clause remove that surface.' },
          { text: 'Naming the eldest child as the sole beneficiary', why: 'Concentration can reduce argument among siblings, and it can also create a challenge from dependants left without provision. It does not address ambiguity.' },
          { text: 'Registering the will', why: 'Registration makes a document easier to prove. It does not make an ambiguous bequest clearer.' },
        ],
      },
    ],
    takeaway: 'A will is layered on a default rule. Learn the default for your personal law, decide deliberately whether to follow it or displace it, and describe every asset precisely so the argument has nothing to attach to.',
  },

  'l5-074': {
    id: 'l5-074',
    title: 'Wills',
    subtitle: 'Short, specific, witnessed and findable. Everything else about a will is optional.',
    minutes: 12,
    blocks: [
      scene('will-anatomy', 'The seven parts a will is assembled from. Only two of them — the witnesses and the findability of the original — are formalities, and both are the ones most often skipped.'),
      { kind: 'p', text: 'A will is the only document that can dispose of immovable property and of an unlisted business interest, which makes it the backbone of any estate plan. It is also a document almost anyone can write, with very few formal requirements. The law asks for the testator to be of sound mind and of the required age, for the will to be signed, and for it to be attested by two witnesses. It does not ask for a lawyer, for registration, or for a particular form of words. That simplicity is why wills fail: not because the rules are hard, but because they are easy to think you have met.' },
      { kind: 'p', text: 'The parts worth including are easy to list. Identify the testator clearly. Revoke earlier wills expressly, so an older document cannot be produced later and argued about. Name an executor, because somebody has to act, and that person needs the authority to collect assets, pay debts and distribute. Describe what goes to whom with enough precision to identify the asset unambiguously. Add a residue clause, which sweeps up everything not named — the clause that stops an asset falling to the default rule by accident. If a child is a minor, name a guardian. Then sign it in front of two witnesses, present together.' },
      { kind: 'p', text: 'Registration and probate are two separate questions, and both are usually optional. Registration of a will is permissive, not compulsory, so an unregistered will is perfectly valid, though registering it makes the original harder to tamper with and easier to prove. Probate is the court’s confirmation that the document is the deceased’s last will, and it is required only in a few jurisdictions; elsewhere an executor can act on the strength of the will itself, and institutions will usually accept it with an indemnity.' },

      { kind: 'h', text: 'The formal requirements, and where they go wrong' },
      {
        kind: 'table',
        caption: 'What makes a will effective, and the failure at each step',
        headers: ['Requirement', 'What it means in practice', 'How it fails'],
        rows: [
          ['Sound mind and age', 'The testator understands what they own and who they are giving it to', 'A will made in confusion or under pressure is challenged, so make it while clear-minded'],
          ['Signature', 'Signed by the testator, or with a mark if unable to sign', 'An unsigned draft, or a copy signed instead of the original'],
          ['Two witnesses', 'Both attest the signature, present at the same time', 'One witness, or two witnesses who signed on different days without seeing the signature'],
          ['Clear descriptions', 'Each asset identifiable from the words used', 'A bequest of "my bank account" or "the property in Pune" where several could match'],
          ['A named executor', 'Someone with the authority to act', 'An executor who has not been told, or who has died, leaving nobody willing to take it on'],
          ['Findability', 'The original can be produced when it is needed', 'A document kept somewhere nobody knew about, which is treated as though it never existed'],
        ],
      },
      l5Rule(
        'What the law requires of a will',
        'A will may be made by a person of sound mind who is not a minor. It is not required to be in any particular form, and it is not required to be stamped or registered: registration is optional under section 18 of the Registration Act, 1908. For persons to whom the Indian Succession Act, 1925 applies — including Hindus, Christians and Parsis — the testator must sign or affix a mark, and the will must be attested by two or more witnesses who have seen the testator sign and who each sign in the presence of the testator. Probate, which is the court’s certification of the will, is generally optional and is required within the ordinary original civil jurisdiction of certain High Courts under section 213 of that Act. A will may be revoked or altered at any time during the testator’s life. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'The clauses people leave out' },
      { kind: 'p', text: 'The residue clause is the most valuable sentence most wills do not contain. Without it, any asset not specifically named falls to the succession law, which may divide it in a way that conflicts with the rest of the will — so a document that carefully directs the house and the deposits quietly leaves the mutual funds and the gold to a rule. An express revocation clause is its twin: a will that does not revoke earlier ones leaves the family to work out which document governs, often with a stale will from a decade earlier being produced by somebody.' },
      { kind: 'p', text: 'Two more clauses earn their place. A guardian appointment for a minor child converts a court application into a sentence. And a statement of intent — a short paragraph saying why a particular bequest is made — does not bind anyone, but it has a real effect on how a contested distribution is read, and on whether the family accepts it. None of these needs legal drafting to be understood; they need a person to sit down and think about what the family will have to do without them.' },
      { kind: 'p', text: 'Then there is custody of the document. A will kept in a bank locker that nobody can open, or in a drawer nobody has been told about, is a will in name only: it will not be found, and the estate will be distributed under the default rule. Tell the executor where the original is, keep a copy somewhere separate, and revisit the will whenever a birth, a marriage, a death or a large purchase changes the picture. An obsolete will is worse than a missing one, because it directs assets that no longer exist and omits those that now do.' },
      sim('l5-will-builder', 'Assemble a will part by part. The five essential parts, the optional clauses, and how much of the estate is actually described.'),
      l5Illustrative('The estate values and the specific assets in the lab are invented for practice. The formal requirements — sound mind, signature, two witnesses present together, registration being optional under the Registration Act, 1908, and probate being generally optional under the Indian Succession Act, 1925 — are the framework verified on 15 October 2026 and linked below.'),

      { kind: 'h', text: 'A will checklist' },
      { kind: 'list', ordered: true, items: [
        'Write the inventory of assets first, so the will describes what exists rather than what you remember.',
        'Identify the testator, revoke earlier wills, and name an executor who has agreed to act.',
        'Describe specific bequests precisely, and add a residue clause for everything else.',
        'Name a guardian if a minor child or a minor beneficiary is involved.',
        'Sign in front of two witnesses, present together, neither of whom takes a benefit under the will.',
        'Register if you want the original protected, remembering that registration is optional.',
        'Tell the executor where the original is kept, and review the will after every major life change.',
      ] },
      { kind: 'p', text: 'The exercise is really about a trade. A will takes an afternoon. Without one, the same estate goes through the default rule, with the family producing documents to establish who the heirs are, and no mechanism at all for the intentions that only existed in someone’s head. For an afternoon, that is a very good trade.' },
      { kind: 'terms', items: [
        { term: 'Testator', meaning: 'The person who makes a will.' },
        { term: 'Attestation', meaning: 'The witnessing of a signature, which for a will requires two witnesses who are present together.' },
        { term: 'Probate', meaning: 'The court’s certification that a document is the deceased’s valid last will, generally optional and required only in certain jurisdictions.' },
        { term: 'Codicil', meaning: 'A separate document that amends a will without replacing it.' },
        { term: 'Specific bequest', meaning: 'A gift of a particular identified asset, which must be described precisely enough to be identifiable.' },
      ] },
      l5Sources(['indiacode'], [
        'The Indian Succession Act, 1925 on the making, attestation, revocation and probate of wills, including section 213; and the Registration Act, 1908 on the optional registration of a will under section 18',
      ]),
    ],
    quiz: [
      {
        q: 'You write a will and sign it, and one relative signs as a witness. Another signs two days later at their own home. Is the will validly attested?',
        options: [
          { text: 'Yes, because two people have signed it', why: 'The requirement is not just two signatures. Both witnesses must have seen the testator sign, and each must sign in the testator’s presence.' },
          { text: 'No. Both witnesses must be present together and sign in the testator’s presence', correct: true, why: 'Witnesses who sign separately, without seeing the signing, have not attested it, and the will fails the requirement regardless of how many approvals it carries.' },
          { text: 'Yes, because registration would cure the defect anyway', why: 'Registration is optional and does not repair an unattested will.' },
          { text: 'No, because a relative may never witness a will', why: 'A relative may witness it. The real caution is against a witness who takes a benefit under the will, which invites a challenge.' },
        ],
      },
      {
        q: 'Your will names the house and the bank deposits but says nothing about mutual funds worth a substantial amount. What happens to them?',
        options: [
          { text: 'They go to the person named in the will as the executor', why: 'An executor holds assets for distribution; the role does not make them a beneficiary.' },
          { text: 'They are divided by the succession law, unless a residue clause says otherwise', correct: true, why: 'Anything a will does not dispose of falls to the default rule, which is exactly why a residue clause exists and why leaving it out undoes careful work elsewhere.' },
          { text: 'The will is invalid for being incomplete', why: 'An incomplete distribution does not invalidate a will; it just leaves part of the estate to be decided by law.' },
          { text: 'They go to the eldest child automatically', why: 'There is no such default. The succession law of the person’s religion decides, and it rarely concentrates the estate in one child.' },
        ],
      },
      {
        q: 'You want to change one clause of your will without rewriting the whole document. What are your options?',
        options: [
          { text: 'Nothing can be changed; a will is final once signed', why: 'A will is revocable at any time during the testator’s life. That is a feature, not a defect.' },
          { text: 'Make a codicil amending the clause, or make a fresh will that expressly revokes the old one', correct: true, why: 'A codicil amends a will, and a new will that revokes the earlier one replaces it. Either way, state the change clearly so an older document cannot be produced later.' },
          { text: 'Strike out the clause by hand in the original', why: 'Alterations on the face of a will create disputes about whether they were made before attestation, and invite a challenge.' },
          { text: 'Ask the witnesses to confirm the change in writing', why: 'A witness attests a signature, and cannot amend the will by correspondence after the fact.' },
        ],
      },
    ],
    takeaway: 'A will needs sound mind, a signature and two witnesses present together — nothing more formal. Add an executor, precise descriptions, a residue clause, a named guardian, and tell someone where the original is kept.',
  },

  'l5-075': {
    id: 'l5-075',
    title: 'Inheritance',
    subtitle: 'A process with an order: establish what passes, settle liabilities, update records, and only then decide.',
    minutes: 12,
    blocks: [
      scene('inheritance-path', 'Four steps in the right order. The decision to hold or sell comes last, for reasons that are legal as well as emotional.'),
      { kind: 'p', text: 'An inheritance arrives as several problems at once: assets that have to be identified, liabilities that have to be settled, titles that have to be transferred, and a decision about what to keep. Taken in the wrong order, they produce a mess — a property sold before the loan against it was settled, a deposit distributed before the estate’s dues were paid, a decision made in the first fortnight that could have waited six months without any cost. Taken in order, they are ordinary paperwork.' },
      { kind: 'p', text: 'The first step is to establish what actually passes, and by which route. Nominations release deposits and policies; a survivorship clause lets a joint account be operated; a will states entitlement; anything not covered by those falls to the succession law. Each route has its own process and its own documents, and the same asset can be reachable by more than one — which is why the inventory comes first rather than the decision.' },
      { kind: 'p', text: 'The second step is liabilities. Debts of the deceased are settled out of the estate before distribution, and a loan secured against an asset stays attached to that asset: an heir who takes a mortgaged house takes the mortgage with it. This is the detail that catches families who treat the estate as though it were net. An unsecured loan cannot be ignored either, since the lender will pursue the estate, and settling it deliberately is cheaper than discovering it later.' },

      { kind: 'h', text: 'The order, and the tax position inside it' },
      {
        kind: 'table',
        caption: 'Inheritance, step by step',
        headers: ['Step', 'What it involves', 'The mistake to avoid'],
        rows: [
          ['1. Establish what passes', 'Inventory every asset with the nomination, joint holding or bequest that governs it', 'Deciding before knowing: an asset nobody listed is an asset nobody transfers'],
          ['2. Settle liabilities', 'Clear dues from the estate and identify what is secured on which asset', 'Selling a secured asset before clearing the loan against it'],
          ['3. Verify title', 'Transmission in the depository, mutation of property, name changes on accounts', 'Leaving records in the deceased’s name, which makes the asset unusable'],
          ['4. Hold, then decide', 'Wait, plan, and sell only for a reason', 'Making the largest financial decision of a lifetime in the first month'],
        ],
      },
      l5Rule(
        'How inherited assets are taxed',
        'There is no inheritance tax in India, and a transfer by will or inheritance is exempt in the recipient’s hands under section 56(2)(x). Where an inherited asset is later sold, the cost of acquisition is the cost incurred by the previous owner who acquired it, and the period for which that previous owner held it is included in the new holder’s holding period. A long-term capital gain on a transfer on or after 23 July 2024 is taxed at 12.5% without indexation for the classes of asset to which that rate applies; where land or building was acquired before 23 July 2024 by a resident individual, there is an option to compute the gain at 20% with indexation where that is more favourable. The rules on set-off, exemptions and the option are specific, so a computation should be checked against the Act rather than a rule of thumb. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'The holding period is the real protection' },
      { kind: 'p', text: 'The most useful thing to know about an inherited asset is that nothing is taxed until it is sold. There is no tax on receiving it, and no clock running that penalises you for waiting. Meanwhile, the cost of acquisition you inherit is the previous owner’s cost, not the value on the day they died, and their holding period is added to yours. Both of those point the same way: the gain measured later may be larger in absolute terms, but it is measured from an earlier and lower base, and the asset is almost always long-term from the moment it is yours.' },
      { kind: 'p', text: 'Which is why the fourth step is a deliberate pause. An inheritance is often the largest single sum a person has ever handled, arriving at a time when judgement is not at its best. The decisions that go wrong are the ones made in the first weeks: a property sold to settle a dispute quickly, a portfolio liquidated because it felt unfamiliar, a large deposit parked in a product that was sold rather than chosen. There is no tax reason to hurry, and every practical reason to finish the paperwork first and decide after the dust has settled.' },
      sim('l5-inheritance-processor', 'Work an inheritance in order: write the inventory, clear liabilities, transfer titles, and see the tax position on selling too early.'),
      l5Illustrative('The estate values and the illustrative previous owner’s cost in the lab are invented for practice. The tax framework described — no inheritance tax, exemption under section 56(2)(x), the previous owner’s cost and holding period carrying over, and long-term gains at 12.5% without indexation for transfers on or after 23 July 2024, with the option for land and building acquired before that date — is verified on 15 October 2026 and linked below.'),

      { kind: 'h', text: 'A first-month plan for an inheritance' },
      { kind: 'list', ordered: true, items: [
        'Write the inventory before deciding anything: every asset, and the document that governs it.',
        'Obtain the death certificate and enough copies, since almost every process begins with it.',
        'Establish what passes by nomination and what needs probate or a claim process, and start the slower route first.',
        'Clear liabilities deliberately, and identify which are secured on which asset.',
        'Update titles and records: transmission in the depository, mutation for property, name changes on accounts.',
        'Park the money somewhere safe and boring while the paperwork is completed.',
        'Decide about selling only after the records are clean, with a plan rather than a reaction.',
      ] },
      { kind: 'p', text: 'The wider point is that an inheritance is a transfer of responsibility as well as assets. The person who left it usually had a reason for holding what they held, and that reasoning is worth reconstructing before dismantling the portfolio. Understanding why a property was bought, why a particular fund was chosen and what the person intended the money to do turns an inheritance from a pile of assets into a plan that can be continued.' },
      { kind: 'terms', items: [
        { term: 'Cost of acquisition', meaning: 'For an inherited asset, the previous owner’s cost, so the gain on a later sale is measured from that cost rather than from the value at inheritance.' },
        { term: 'Holding period', meaning: 'The period used to decide whether a gain is short-term or long-term, which includes the previous owner’s period for an inherited asset.' },
        { term: 'Mutation', meaning: 'The updating of a municipal or revenue record to show a change of ownership, such as after an inheritance.' },
        { term: 'Transmission', meaning: 'The process of moving securities or deposits into an heir’s name in an institution’s records after a death.' },
        { term: 'Indexation', meaning: 'An adjustment of cost for inflation in computing a gain, available for some assets and subject to specific conditions since the 2024 change.' },
      ] },
      l5Sources(['incometax', 'indiacode'], [
        'The computation of capital gains on an inherited asset: the cost of acquisition taken from the previous owner under section 49(1), the inclusion of the previous owner’s holding period, the exemption for gifts and inheritances under section 56(2)(x), and the current rates and options',
        'The Indian Succession Act, 1925 and the Registration Act, 1908 on the processes that establish entitlement, and the Transfer of Property Act, 1882 on the transfer of immovable property',
      ]),
    ],
    quiz: [
      {
        q: 'You inherit a plot your father bought for ₹8 lakh in 2005. It is now worth ₹60 lakh and you sell it. What is your capital gain measured against?',
        options: [
          { text: 'The ₹60 lakh value, so the whole amount is taxable', why: 'That would treat the inheritance itself as a gain, which it is not; receiving an asset by inheritance is exempt.' },
          { text: 'The ₹8 lakh your father paid, because his cost is treated as yours', correct: true, why: 'An inherited asset keeps the previous owner’s cost of acquisition, so the gain is measured from what they paid rather than from the value on the day they died.' },
          { text: 'Zero cost, because you paid nothing for it', why: 'A nil cost would produce the largest possible taxable gain, and the law deliberately avoids it by carrying over the previous owner’s cost.' },
          { text: 'The value on the date of death, because that is when you acquired it', why: 'The date of death starts your ownership, but it does not reset the cost; the previous owner’s cost and holding period carry over.' },
        ],
      },
      {
        q: 'Your father had a ₹12 lakh home loan on the flat you have inherited, and ₹3 lakh of credit card dues. What should happen first?',
        options: [
          { text: 'Distribute the flat and let whoever takes it deal with the loan', why: 'A secured loan stays attached to the asset, so an heir receiving the flat receives the liability with it. That should be decided knowingly, not by default.' },
          { text: 'Settle the estate’s liabilities, recognising that the loan stays attached to the flat', correct: true, why: 'Debts are settled out of the estate before distribution, and a secured loan remains attached to the asset it is secured on, so both need to be addressed deliberately.' },
          { text: 'Ignore both, since a debt dies with the person', why: 'Debts do not disappear. They are enforceable against the estate and against the assets that pass.' },
          { text: 'Sell the flat immediately to clear everything', why: 'A quick sale is exactly the decision the fourth step is designed to postpone, and it may realise a worse price than the liabilities require.' },
        ],
      },
      {
        q: 'A relative hands you ₹5 lakh in cash as your share of an inheritance. Are you taxable on it?',
        options: [
          { text: 'Yes, as income from other sources, because it is a cash receipt', why: 'Receipts by inheritance are outside that treatment entirely.' },
          { text: 'No: inheritances and gifts from relatives are exempt under section 56(2)(x)', correct: true, why: 'There is no inheritance tax, and a transfer by will or inheritance is exempt in the recipient’s hands, as are gifts from relatives.' },
          { text: 'Yes, but only if it exceeds ₹50,000', why: 'The ₹50,000 threshold applies to gifts from non-relatives. A gift from a relative or an inheritance is exempt regardless of amount.' },
          { text: 'Only if the relative also gave you a written record', why: 'Documentation helps establish the nature of the transfer, and it is not what makes it exempt.' },
        ],
      },
    ],
    takeaway: 'Inheritance is a process: identify what passes, clear liabilities, transfer titles, and decide later. Nothing is taxed until you sell, and the previous owner’s cost travels with the asset.',
  },

  'l5-076': {
    id: 'l5-076',
    title: 'Succession',
    subtitle: 'A business interest is not distributed. It is handed over — ownership, control and knowledge moving at different speeds.',
    minutes: 12,
    blocks: [
      scene('succession-timeline', 'Ownership, control and the knowledge of how the business actually runs move along the same line at different rates. A plan that moves only the ownership has planned a distribution, not a succession.'),
      { kind: 'p', text: 'Succession and estate planning get used interchangeably, and they are different problems. An estate plan distributes what a person owns. Succession is about something continuing: a business, a practice, a farm or a family enterprise, where the value depends on the thing operating after the person who ran it stops. Distributing a business in equal shares among heirs who do not work in it is a reliable way to destroy it, and the standard planning answer is not a will at all — it is a set of arrangements that let the enterprise survive the handover.' },
      { kind: 'p', text: 'The first thing to check is not the will but the firm’s own documents. A partnership deed usually says what happens to a partner’s interest on death, and the articles of a company commonly give the remaining members rights over a share that passes to an heir. These documents bind first: a will cannot override them, and an executor cannot ignore them. A buy-sell agreement, where one exists, sets a price and a mechanism for the transfer so that nobody has to negotiate a valuation in the worst week of their life.' },
      { kind: 'p', text: 'Then there is the money question, which is the one people underestimate. A share has to be bought by someone if control is to stay inside the business, and a business interest is illiquid by nature. The funding for that purchase is the part of succession planning that gets neglected: keyman insurance, or a funded buy-sell arrangement, is what converts a legal right into an actual transfer of control without the estate having to sell a share in the market, or the remaining owners having to borrow hurriedly to buy it.' },

      { kind: 'h', text: 'What has to move, and what each one needs' },
      {
        kind: 'table',
        caption: 'Three transfers, three sets of documents',
        headers: ['What moves', 'Governed by', 'What goes wrong without it'],
        rows: [
          ['The share on death', 'The firm’s documents first, then the will', 'An heir inherits an interest without the right to use it, and the deed leaves no route out'],
          ['Control of the business', 'A shareholder or partnership agreement', 'Ownership moves but decisions do not, and the business stalls on the first vote'],
          ['The knowledge to run it', 'Time spent, and a real transition period', 'The person who knew the suppliers, the customers and the margins leaves with the knowledge intact and unusable'],
          ['The money to buy a share', 'Keyman insurance or a funded buy-sell agreement', 'The estate must sell on the open market, or the survivors must borrow at the worst moment'],
        ],
      },
      l5Rule(
        'The documents that bind before a will',
        'A share in a partnership is dealt with by the partnership deed, and a share in a company by its articles. Provisions for the transfer of a deceased member’s interest, for the valuation of a share, and for a compulsory transfer on death are matters of agreement, and they operate as between the parties independently of a will. Where a will conflicts with them, the firm’s documents govern the interest as an asset of the firm. A business interest described in a will should therefore be described as the interest it is, identified by the firm and the share, rather than as "my business", and the terms of the deed should be read before the clause is written. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'Running the handover as a project' },
      { kind: 'p', text: 'The transition period is what separates a succession from an inheritance. Ownership can move on a date; control should move over months, with decisions and signing authority handed across gradually while the person leaving is still available to be asked questions. Knowledge takes longest: a supplier relationship, a pricing instinct, a customer who deals with one person by preference — none of that transfers on a document, and all of it is part of what the enterprise is worth.' },
      { kind: 'p', text: 'The practical sequence is unglamorous. Read the firm’s documents and find out what already binds. Agree with the remaining owners what should happen and write it down, including a valuation method so nobody negotiates under pressure. Fund the buyout so the money exists when it is needed. Write the will clause to match, describing the interest precisely. Then run the handover as a project with dates attached, moving responsibility ahead of ownership. Family conversations are part of it, and the families that plan succession early are usually the ones where the business outlives its founder.' },
      sim('l5-succession-planner', 'Move a business through a handover: the firm’s documents, a will clause, funding for the buyout, and a transition measured in years.'),
      l5Illustrative('The business value, the number of successors and the funding figures in the lab are invented for practice. The framework described — a share on death being governed by the partnership deed or the articles before any will, and a business interest being described as the interest it is — is the position verified on 15 October 2026 and linked below.'),

      { kind: 'h', text: 'A succession checklist' },
      { kind: 'list', ordered: true, items: [
        'Read the partnership deed or the articles, and find out what already governs a share on death.',
        'Agree with the remaining owners what happens, in writing, with a valuation method attached.',
        'Fund the transfer, through keyman cover or a buy-sell arrangement, so money exists when it is needed.',
        'Write the will clause to match the deed, describing the interest by firm and share rather than in general terms.',
        'Appoint and train the successor, and hand over decisions before ownership.',
        'Set a transition period measured in years, with dates for each responsibility that moves.',
        'Review the whole arrangement when a partner leaves or a business changes shape.',
      ] },
      { kind: 'p', text: 'The stakes are why this deserves the effort. A distribution is a onetime act, while a succession determines whether value that took decades to build survives its inventor. The difference between the two is rarely the sophistication of the documents and almost always the willingness to have the difficult conversation early, while the person who built the thing is still around to answer questions.' },
      { kind: 'terms', items: [
        { term: 'Succession', meaning: 'The planned transfer of a business or asset so that it continues operating, as distinct from a distribution of an estate.' },
        { term: 'Buy-sell agreement', meaning: 'An arrangement among owners setting who may buy a departing owner’s share, at what price, and how the purchase is funded.' },
        { term: 'Keyman insurance', meaning: 'Cover on a person whose absence would damage the business, used to fund the purchase of their interest.' },
        { term: 'Articles of association', meaning: 'The document that governs a company’s internal affairs, including restrictions on the transfer of shares.' },
        { term: 'Transition period', meaning: 'The years over which control and knowledge move, deliberately running behind the transfer of ownership.' },
      ] },
      l5Sources(['mca', 'indiacode'], [
        'The framework governing a share in a firm on the death of a member, in the law relating to companies and limited liability partnerships, including the role of the articles and of a partnership deed',
        'The Indian Partnership Act, 1932 and the Indian Succession Act, 1925 on the position of a deceased partner’s interest and the effect of a will on it',
      ]),
    ],
    quiz: [
      {
        q: 'You are a partner in a firm, and your partnership deed requires a deceased partner’s share to be sold to the remaining partners at a formula price. Your will leaves that share to your son. What happens?',
        options: [
          { text: 'Your son becomes a partner, because a will overrides a partnership deed', why: 'A will cannot override the firm’s own agreement. The deed governs the interest as between the partners.' },
          { text: 'The deed governs: the share is transferred under the formula, and the proceeds form part of your estate', correct: true, why: 'The firm’s documents operate independently of a will, so the interest is dealt with under the deed and the resulting money passes under the will or the succession law.' },
          { text: 'The will and the deed cancel each other out, leaving the share to the remaining partners', why: 'There is no cancellation. The deed determines what happens to the interest, and the will determines where the resulting value goes.' },
          { text: 'Your son must be admitted to the firm by a court order', why: 'There is no automatic admission. Where a deed requires a sale, the interest is bought out and no admission question arises.' },
        ],
      },
      {
        q: 'Why is funding, such as keyman insurance or a funded buy-sell agreement, part of succession planning rather than just insurance?',
        options: [
          { text: 'Because it reduces the estate tax on the business interest', why: 'There is no inheritance tax in India, so this is not the reason.' },
          { text: 'Because it provides the money for a surviving owner to buy a share, so control stays inside the business', correct: true, why: 'A legal right to buy a share is useless without cash. Funding converts the arrangement into an actual transfer, and prevents a forced sale of the interest on the open market.' },
          { text: 'Because it removes the need for a will clause about the business', why: 'Funding addresses the money side; the will clause still has to describe the interest and where its value goes.' },
          { text: 'Because insurance proceeds are exempt from tax in the hands of the business', why: 'Tax treatment of proceeds is a separate question and is not the reason funding belongs in the succession plan.' },
        ],
      },
      {
        q: 'Ownership of a business has transferred to the next generation, but the founder still makes all the pricing and hiring decisions. What has gone wrong?',
        options: [
          { text: 'Nothing: keeping the founder involved is always safer', why: 'Involvement can be valuable, but a plan that never transfers control leaves the successor unable to act and the business dependent on one person.' },
          { text: 'Only ownership moved. Control and knowledge need to move too, over a transition period', correct: true, why: 'Succession has three elements, and transferring one while holding the others creates a business with a new owner and the old decision-maker, which stalls on the first conflict.' },
          { text: 'The valuation must have been wrong', why: 'Valuation affects price, not the transfer of control.' },
          { text: 'The shares should have gone to a single successor instead', why: 'Concentrating ownership does not address control: a single heir who cannot make decisions is in the same position.' },
        ],
      },
    ],
    takeaway: 'A business is not distributed, it is handed over. Read the firm’s documents first, fund the buyout, make the will clause match, and move control and knowledge over years rather than on a date.',
  },

  'l5-077': {
    id: 'l5-077',
    title: 'Joint Ownership',
    subtitle: 'The wording on an account decides who the bank may pay. It does not decide who owns the money.',
    minutes: 11,
    blocks: [
      scene('joint-holding-modes', 'Five ways to hold something, and five different endings. Only one of them — a single holder with no other heirs involved — makes the operational outcome and the ownership outcome agree.'),
      { kind: 'p', text: 'Joint ownership is popular for good reasons and misunderstood in the same way as a nomination. It is opened for convenience: a couple paying household bills from one account, a parent adding an adult child so that somebody can operate the account, two people buying a home together. The wording chosen at the counter then decides something quite narrow and quite important — how the account is operated, and who the institution may pay after a death — while ownership continues to follow the general law.' },
      { kind: 'p', text: 'The modes are worth knowing by name because the words are what operate. Held jointly, both signatures are required for everything, which is safe and slow. Either or survivor allows each holder to operate the account alone, and lets the survivor continue after a death. Former or survivor makes the first-named holder the operator during their lifetime, with the second acting only on death: a control arrangement rather than a shared one. Anyone or survivor is used in larger households where several people pay bills. And a singly held account with a nomination follows the nomination route instead.' },
      { kind: 'p', text: 'What the survivorship clause does is let the institution pay the survivor and close the account, without a succession certificate. What it does not do is make the survivor the owner. In most cases the survivor receives the money as a custodian, and the other heirs keep their claim on it. That is the sentence to keep in mind, because it is the one that family expectations most often contradict: adding a name to an account to help with bill payments feels like a gift, and it is not one.' },

      { kind: 'h', text: 'The modes, and what each one actually decides' },
      {
        kind: 'table',
        caption: 'Choosing the wording, and what follows from it',
        headers: ['Mode', 'How it is operated', 'What it decides on death'],
        rows: [
          ['Single, with a nomination', 'By the holder alone', 'The nominee may receive the balance, as a custodian for the heirs'],
          ['Either or survivor', 'By either holder alone', 'The survivor may operate the account; the other heirs keep their claim on the balance'],
          ['Former or survivor', 'By the first-named holder alone', 'The second holder acts only after a death, which suits a parent and an adult child'],
          ['Jointly', 'By both signatures for everything', 'The account is frozen until the claim process is completed'],
          ['Anyone or survivor', 'By any of several holders', 'The survivors may continue; useful where several people genuinely pay the bills'],
        ],
      },
      l5Rule(
        'Joint holdings, survivorship and tax',
        'A joint account may be operated in the mode the holders choose — jointly, either or survivor, former or survivor, or anyone or survivor — and the mode governs who the institution may pay after the death of a holder, without requiring a succession certificate in the ordinary case. That does not determine beneficial ownership: where other heirs exist, they retain their claim, and the institution may open an account in the name of the estate of the deceased where the heirs require it. Income from an asset is taxed by ownership and not by whose name appears on the account. Adding a co-owner to immovable property is a transfer with stamp duty and other consequences, and a gift between relatives is exempt under section 56(2)(x), subject to the clubbing rules for income from assets transferred to a spouse or a minor child. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'Adding a name, and what it costs' },
      { kind: 'p', text: 'Adding somebody to an account is quick. Adding somebody to a property is not, and it deserves care. A transfer of an interest in immovable property attracts stamp duty and registration, and it changes the ownership position permanently rather than for convenience. What looked like sharing a liability can become an irrevocable gift of a share, and reversing it later means another transfer with its own cost. If the purpose is only access — paying bills, operating the account, dealing with the bank — the right instrument is a mandate or an authorisation, not a change of ownership.' },
      { kind: 'p', text: 'There is a tax detail to keep in view as well. Income from an asset is taxed according to ownership rather than according to whose name is on the account, so a joint account does not split interest income unless the money is genuinely contributed and owned in shares. Where an asset is transferred to a spouse or a minor child, income arising from it may be clubbed with the transferor’s income, which can make an apparently sensible arrangement feel rather different on the return.' },
      { kind: 'p', text: 'The reason to get this right is not tidiness. Joint holding is the most common way that an intention to help quietly becomes an unintended gift, or that a survivor’s expectation collides with an heir’s entitlement. Both are avoidable with one habit: match the wording to the purpose, and make sure the nomination, the joint holding and the will all describe the same intention.' },
      sim('l5-joint-holding-chooser', 'Pick the wording on an account and the reason for it, and see what survives, who may be paid, and who keeps a claim.'),
      l5Illustrative('The values and the household situations in the lab are invented for practice. The framework described — the operational modes of a joint account, survivorship letting an institution pay the survivor without a succession certificate, the other heirs retaining their claim, tax following ownership rather than the name on the account, and the exemption for gifts between relatives subject to clubbing — is verified on 15 October 2026 and linked below.'),

      { kind: 'h', text: 'Choosing a joint holding properly' },
      { kind: 'list', ordered: true, items: [
        'Decide the purpose first: access for bill-paying, or a genuine transfer of ownership.',
        'For access only, use a mandate or authorisation rather than changing the ownership of the account.',
        'Match the mode to the use: either or survivor for a couple, former or survivor for a parent and an adult child.',
        'Record a nomination as well, and keep it consistent with the joint wording.',
        'For immovable property, treat a joint holding as the transfer it is, including stamp duty and registration.',
        'Remember that tax follows ownership, and that income from an asset transferred to a spouse or a minor child may be clubbed.',
        'Tell the other holders what the account does and does not do, so expectations match the wording.',
      ] },
      { kind: 'p', text: 'The summary is a single distinction worth carrying through the rest of the level. A joint holding is an instruction to an institution about who may operate an account and who may be paid. An estate plan is an instruction about who owns what. Where a family confuses the two, the paperwork that was meant to make things easier becomes the reason for an argument.' },
      { kind: 'terms', items: [
        { term: 'Survivorship clause', meaning: 'Wording such as either or survivor that lets the institution pay the surviving holder and close the account.' },
        { term: 'Former or survivor', meaning: 'A mode in which the first-named holder operates the account alone and the second acts only after a death.' },
        { term: 'Mandate', meaning: 'An authorisation to operate an account without transferring ownership of the balance.' },
        { term: 'Clubbing', meaning: 'The inclusion of income from an asset transferred to a spouse or a minor child in the transferor’s taxable income.' },
        { term: 'Custodian', meaning: 'A person who holds money or property for the benefit of another, which is what a survivor usually is in relation to other heirs.' },
      ] },
      l5Sources(['incometax', 'indiacode'], [
        'The treatment of income from an asset according to ownership, the exemption for gifts between relatives under section 56(2)(x), and the clubbing provisions for income from assets transferred to a spouse or a minor child',
        'The Transfer of Property Act, 1882 and the Registration Act, 1908 on the transfer of an interest in immovable property, and the succession law that determines entitlement where a holder dies',
      ]),
    ],
    quiz: [
      {
        q: 'You add your adult son to your savings account as an either-or-survivor holder, so he can pay your bills. You have two other children. What does the arrangement do?',
        options: [
          { text: 'It leaves the entire balance to your son, because he is a joint holder', why: 'The survivorship clause lets the bank pay him and close the account. It does not make him the owner, and the other heirs keep their claim.' },
          { text: 'It lets him operate the account and be paid on your death, while your other children keep their claim on the balance', correct: true, why: 'This is exactly the gap between convenience and ownership: the bank is protected in paying the survivor, and ownership follows the will or the succession law.' },
          { text: 'It gives each of the three children an equal share immediately', why: 'Naming one holder does not create shares for others, and it does not distribute anything during your lifetime.' },
          { text: 'It has no effect at all, since a joint holding cannot be added to a savings account', why: 'Joint holdings are routine on savings accounts, and the wording does have effect — just a narrower one than families usually assume.' },
        ],
      },
      {
        q: 'You want a joint account with your elderly mother so that you can pay her bills, but you want it clear that the money is hers. What is the cleanest approach?',
        options: [
          { text: 'Make it either or survivor so you can operate it', why: 'It solves the operational problem, and it also creates a survivorship expectation that may not match the intention.' },
          { text: 'Use a mandate authorising you to operate her account, leaving ownership untouched', correct: true, why: 'A mandate gives access without changing ownership, so nothing needs to be unwound later and no survivorship question arises.' },
          { text: 'Add your name to the title of her house instead', why: 'That is a transfer of an interest in immovable property, with stamp duty, registration and permanent consequences.' },
          { text: 'Have her name you as a nominee as well', why: 'A nominee receives the balance after death as a custodian. It does not solve access during her lifetime, which is the problem you started with.' },
        ],
      },
      {
        q: 'You hold a fixed deposit jointly with your spouse, and the interest is credited to the same account. How is the interest taxed?',
        options: [
          { text: 'Half to each spouse, because it is a joint holding', why: 'A joint holding does not automatically split income. Tax follows ownership rather than the names on the account.' },
          { text: 'According to who actually owns the money, since tax follows ownership rather than the account’s names', correct: true, why: 'Income is taxed by ownership, so the correct split depends on whose money funded the deposit, and a transfer between spouses can also bring the clubbing provisions into play.' },
          { text: 'To the first-named holder only', why: 'Naming order governs account operation, not the taxation of income.' },
          { text: 'It is exempt, because interest between spouses is not taxed', why: 'Interest on a deposit is taxable income; the relationship between the holders does not exempt it.' },
        ],
      },
    ],
    takeaway: 'A joint holding decides who may operate an account and who may be paid — not who owns it. Match the wording to the purpose, use a mandate for access, and keep the nomination and the will consistent with it.',
  },

  'l5-078': {
    id: 'l5-078',
    title: 'Family Finance',
    subtitle: 'A household is a small institution. Four questions cover almost all of its money problems.',
    minutes: 12,
    blocks: [
      scene('family-money-map', 'Three places the money lives and four things to agree. Almost every household money argument is one of those four questions being answered differently by two people.'),
      { kind: 'p', text: 'Household finance is not a harder version of personal finance. It is a different problem, because decisions that would be obvious for one person become negotiations for two or more, and because the defaults are not what most families assume. India has no joint tax status: income belongs to the person who earns it, deductions are claimed individually, and a married couple files as two taxpayers. There is no community of property either, so nothing becomes shared merely by being spent together. The household is a set of arrangements people choose, and the ones that work are the ones that were actually chosen rather than assumed.' },
      { kind: 'p', text: 'Four questions cover almost all of it. Who pays what. Who sees what. Who decides what. And what happens if one income stops. Answering them sounds unromantic, and it is precisely why it works: nearly every family money argument is one of those questions being answered differently by two people who never said their answers out loud. A written answer does not need to be elaborate. A sentence about who funds the shared account, a limit above which purchases are discussed, and an agreement that both partners can see the statements is enough to remove most of the friction.' },
      { kind: 'p', text: 'The structure that fits most households has three parts. A joint account for shared costs, funded in proportions that reflect income rather than split down the middle, so the arrangement is not quietly unfair to the lower earner. Individual accounts beside it, because money that is unambiguously yours is a dignity question as much as a financial one. And investments held in whichever name makes tax sense, tracked jointly, so that neither partner is managing a portfolio they cannot see. That last part is the difference between a couple that shares a plan and a couple where one person runs the money and the other hopes.' },

      { kind: 'h', text: 'The four questions, and the answers that work' },
      {
        kind: 'table',
        caption: 'What to decide, and why each one matters',
        headers: ['Question', 'A workable answer', 'What goes wrong without it'],
        rows: [
          ['Who pays what', 'A joint account for shared costs, split in proportion to income', 'One partner quietly subsidises the other, and resentment builds where nobody described the arrangement'],
          ['Who sees what', 'Both can see shared accounts and the plan', 'If one person is ill or away, nobody else can pay the bills or find the investments'],
          ['Who decides what', 'A limit above which a purchase is discussed', 'Every large purchase becomes a fresh negotiation at the moment it is wanted'],
          ['What if one income stops', 'A plan made while both are calm: which costs are cut first, which obligations continue', 'The decision is made under pressure, by the person least able to make it'],
        ],
      },
      l5Rule(
        'The tax position of a household',
        'There is no joint tax status for a married couple: each spouse is taxed separately on their own income, returns are filed separately where required, and deductions such as those for health insurance are claimed by the person who paid the premium. There is no community of property on marriage, so assets remain owned by the person who acquired them, subject to the rules on joint holdings and nominations. Where an asset is transferred to a spouse or a minor child, income arising from that asset may be clubbed with the income of the transferor under section 64. A gift from a relative is exempt from tax under section 56(2)(x). Where a loan is borrowed by one spouse, the liability is that person’s, though the household’s cash flows will usually bear it. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'Making the plan survive a bad month' },
      { kind: 'p', text: 'The test of a household arrangement is not an ordinary month. It is the month an income arrives late, a large bill lands, or somebody is in hospital. The arrangements that survive are the ones where the answer was decided in advance: which costs are protected because they are non-negotiable, which are cut first, and where the money comes from. A buffer in the joint account, sized to the household’s obligations rather than to a rule, is what turns those months from a crisis into an inconvenience.' },
      { kind: 'p', text: 'There is a subtler risk that families rarely name: concentration of knowledge. In many households one person holds every password, knows every account and handles every payment, while the other has a vague idea that things are under control. That is not a division of labour; it is a single point of failure. Sharing access to the accounts, the list of institutions and the plan is the cheapest form of insurance a household can buy, and it costs nothing but a conversation.' },
      sim('l5-family-finance-setup', 'Set shared and individual accounts, split the shared cost, and watch the surplus, the buffer and the checks respond.'),
      l5Illustrative('The incomes and shared costs in the lab are invented for practice. The framework described — no joint tax status, no community of property, separate liabilities, gifts between relatives being exempt, and income from assets transferred to a spouse or minor child being liable to clubbing — is verified on 15 October 2026 and linked below.'),

      { kind: 'h', text: 'Setting up a household, once' },
      { kind: 'list', ordered: true, items: [
        'Open a joint account for shared costs, and agree the split in proportion to income rather than by habit.',
        'Keep individual accounts for personal spending, so neither partner has to justify their own money.',
        'Agree a limit above which a purchase is discussed, and write the number down.',
        'Give both partners sight of the shared account and the investment plan.',
        'Write the plan for a month without one income: what is protected, what is cut, and where the buffer sits.',
        'Record the household’s institutions in one place, so either partner could operate everything if needed.',
        'Revisit the arrangement when a child arrives, a job changes, or a parent needs support.',
      ] },
      { kind: 'p', text: 'The point of writing this down is not control. It is the opposite: an arrangement that has been described does not have to be renegotiated every month, and money stops being a subject of tension because it is a subject of agreement. A household with a written constitution spends its energy on everything else.' },
      { kind: 'terms', items: [
        { term: 'Joint account', meaning: 'A shared account for household costs, operated in whatever mode the holders choose and distinct from each person’s own money.' },
        { term: 'Proportional split', meaning: 'Funding a shared cost in proportion to each person’s income, so the arrangement is not quietly unfair to the lower earner.' },
        { term: 'Clubbing', meaning: 'Taxing income from an asset transferred to a spouse or a minor child in the hands of the person who transferred it.' },
        { term: 'Single point of failure', meaning: 'A household where one person holds all the passwords and knowledge, so a disruption to them disrupts everything.' },
      ] },
      l5Sources(['incometax'], [
        'The position of a married couple as separate taxpayers with no joint status, the exemption for gifts between relatives under section 56(2)(x), and the clubbing of income from assets transferred to a spouse or a minor child under section 64',
      ]),
    ],
    quiz: [
      {
        q: 'You and your spouse both earn, and one of you has taken a home loan in a single name. What is the position of the other spouse in relation to that loan?',
        options: [
          { text: 'The other spouse is equally liable, because the household benefits', why: 'There is no joint liability for a spouse’s loan merely because the household benefits from it.' },
          { text: 'The liability belongs to the person who borrowed it, though the household’s cash flow usually bears the repayment', correct: true, why: 'Loans are personal obligations, so a spouse does not simply acquire a partner’s debt. The household still feels the repayment, which is why it belongs in the plan.' },
          { text: 'The other spouse becomes liable once they contribute to the EMI', why: 'Contributing to a repayment does not convert a personal loan into a joint liability, though it may give rise to a claim between the spouses.' },
          { text: 'It depends on whether the loan is secured or unsecured', why: 'Security affects what the lender can recover against, not whether the other spouse is personally liable.' },
        ],
      },
      {
        q: 'Why does splitting a shared household cost in proportion to income work better than splitting it equally?',
        options: [
          { text: 'Because the tax rules require proportional sharing', why: 'There is no tax rule requiring it; this is a fairness question rather than a tax one.' },
          { text: 'Because an equal split leaves the lower earner with less personal money for the same household contribution', correct: true, why: 'Equal rupees are not equal burden. Proportional funding leaves each partner a similar share of their own income, which is what keeps the arrangement stable.' },
          { text: 'Because it lets one partner claim a larger deduction', why: 'Household contributions do not create deductions of this kind.' },
          { text: 'Because a joint account cannot be funded unequally', why: 'A joint account can be funded in any proportion the holders agree; the point is which proportion is fair.' },
        ],
      },
      {
        q: 'In your household, one partner handles every payment and holds every password. What is the biggest financial risk?',
        options: [
          { text: 'The other partner might overspend without oversight', why: 'Overspending is a possibility, and it is not the structural risk that comes from concentrating every account in one person.' },
          { text: 'If that person is ill, away or unavailable, nobody else can operate the accounts or find the investments', correct: true, why: 'Concentration of access is a single point of failure. Sharing visibility costs nothing and prevents a household crisis from becoming an operational one as well.' },
          { text: 'The tax return cannot be filed jointly', why: 'Returns are filed individually, so this is unaffected by who pays the bills.' },
          { text: 'The joint account will be frozen if one partner stops operating it', why: 'There is no such automatic consequence; the risk is practical access rather than account status.' },
        ],
      },
    ],
    takeaway: 'A household runs on four questions: who pays what, who sees what, who decides what, and what happens if an income stops. Answer them in writing once, share access, and stop renegotiating money every month.',
  },

  'l5-079': {
    id: 'l5-079',
    title: 'Marriage Finances',
    subtitle: 'Marriage changes succession and the documents you signed. It does not pool assets, income or debt.',
    minutes: 12,
    blocks: [
      scene('marriage-money-defaults', 'What changes on marriage and what does not. The list is short, and the items that do change are mostly about who inherits rather than who owns.'),
      { kind: 'p', text: 'Marriage is the life event most often assumed to change a person’s financial status in ways it does not. India has no community of property, so assets do not become joint on marriage, income is not pooled for tax, and a married couple files as two separate taxpayers. What genuinely changes is succession: a spouse becomes an heir under the law that applies to the couple, which means that dying without a will now produces a different division than it did before. The second change is quieter and entirely within the couple’s control — the documents signed before the marriage now point at the wrong people.' },
      { kind: 'p', text: 'Start with what the law does. A spouse’s position as an heir depends on the succession law that applies. Under the Hindu framework, a spouse is an heir in the preferred class and shares equally with the children and the mother on intestacy. Under the Indian Succession Act, a spouse takes a defined share alongside the children. In a Muslim estate, a spouse takes a specified Quranic share, with children taking the residue. In each case the practical consequence is the same: without a will, the law decides, and it usually settles the spouse’s share at something less than most couples assume.' },
      { kind: 'p', text: 'Then the documents. A nomination, a beneficiary on a policy, an employer’s records, a jointly held flat, an old account opened by a parent as a convenience — each was set at some point in the past, and each may still name someone from a previous stage of life. This is not a legal problem so much as an administrative one, and it is the most common way that a marriage changes a plan on paper while leaving the paperwork saying something else entirely.' },

      { kind: 'h', text: 'What changes, and what does not' },
      {
        kind: 'table',
        caption: 'The defaults on marriage',
        headers: ['Item', 'Position on marriage', 'What to do about it'],
        rows: [
          ['Assets owned before', 'Remain that person’s own; there is no community of property', 'Keep records of what each partner brought in, and of what was acquired afterwards'],
          ['Income', 'Belongs to the earner, and is taxed separately', 'No joint filing, no joint status: plan around two returns'],
          ['Debt', 'A spouse does not inherit a partner’s debts', 'Disclose debts before they become a household cash-flow surprise, and plan their repayment'],
          ['Succession', 'A spouse becomes an heir under the applicable law', 'Make a will so the intended share is explicit rather than whatever the statute produces'],
          ['Gifts on marriage', 'Exempt from tax, whoever gives them', 'Keep a record of gifts, since mixed funds become hard to attribute later'],
          ['Nominations and policies', 'Unchanged by marriage unless updated', 'Update every nomination, beneficiary and record after the wedding'],
        ],
      },
      l5Rule(
        'Marriage, succession and property',
        'Marriage does not create community of property in India: each spouse continues to own what they acquire, subject to the rules on joint holdings, nominations and trusts. A spouse becomes an heir under the succession law applicable to the couple — in the preferred class and sharing equally on intestacy under the Hindu framework, taking a defined share under the Indian Succession Act, 1925, and taking a specified Quranic share in a Muslim estate. Property that a woman owns, including what she receives as a gift or inherits, is her own, and it is commonly referred to as streedhan. Gifts received on the occasion of a marriage are exempt from tax under section 56(2)(x), whoever the giver is. Where an asset is transferred to a spouse, income arising from it may be clubbed with the transferor’s income under section 64. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'The plan for a couple, in five moves' },
      { kind: 'p', text: 'The first move is records. Note what each partner brought into the marriage and what was acquired after it, because mixed funds become very difficult to attribute later, and attribution is what matters if the couple ever have to demonstrate ownership. The second is disclosure of debt: a spouse does not inherit a partner’s liabilities, and the household cash flow does feel them, so an undisclosed loan becomes a surprise rather than a shared problem.' },
      { kind: 'p', text: 'The third move is a will. Marriage changes who inherits by default, and a will converts that default into an intention — particularly where children from an earlier relationship, a parent who is dependent, or a business interest complicate the picture. The fourth is the paperwork sweep: every nomination, beneficiary, pension record and employer form, updated to reflect the marriage. The fifth is the household arrangement itself, which is the subject of the previous chapter: shared costs, individual money, and a plan for what happens if one income stops.' },
      { kind: 'p', text: 'One point deserves a mention because it is misunderstood in both directions. A gift between spouses is exempt from tax, and that exemption is not a licence to move assets around without consequence: income from property transferred to a spouse can be clubbed with the transferor’s income, so the tax advantage does not materialise the way people expect. Marriage alters who inherits and what the documents say, not who owns what, and treating the second as though it followed from the first is the mistake this chapter exists to prevent.' },
      sim('l5-marriage-finance-plan', 'Separate what each partner brings in from what marriage actually changes, and see the default share a will would replace.'),
      l5Illustrative('The asset values and debts in the lab are invented for practice. The framework described — no community of property, a spouse becoming an heir under the applicable succession law, streedhan remaining a woman’s own property, gifts on marriage being exempt under section 56(2)(x), and the clubbing of income from assets transferred between spouses — is verified on 15 October 2026 and linked below.'),

      { kind: 'h', text: 'What to do, in order' },
      { kind: 'list', ordered: true, items: [
        'Record what each partner owns and owes, and what was acquired after the marriage.',
        'Disclose debts deliberately, and fold their repayment into the household plan.',
        'Make or update a will, so the spouse’s share is intended rather than statutory.',
        'Update every nomination, beneficiary and employer record that still names someone from before.',
        'Agree how shared costs are met, and keep individual accounts alongside the shared one.',
        'Keep records of streedhan and of gifts received on marriage, since attribution gets harder with time.',
        'Revisit the whole plan when a child arrives, a property is bought, or a business starts.',
      ] },
      { kind: 'p', text: 'The deeper point is that marriage is a change in the default rules, not a change in ownership. Once that is clear, the work becomes a short list of documents rather than a rethink of everything. The couples who do it well are the ones who treat it as an administrative task with an emotional subject, and finish it in an afternoon rather than leaving it to be discovered years later.' },
      { kind: 'terms', items: [
        { term: 'Community of property', meaning: 'A regime in which assets acquired during a marriage become jointly owned. India does not apply it, so ownership continues to follow acquisition.' },
        { term: 'Streedhan', meaning: 'A woman’s own property — including gifts, inheritances and what she earns — which remains hers.' },
        { term: 'Quranic share', meaning: 'A specified fraction of an estate allocated to particular heirs in a Muslim estate.' },
        { term: 'Clubbing', meaning: 'Taxing income from an asset transferred to a spouse or minor child in the transferor’s hands.' },
        { term: 'Nomination update', meaning: 'Changing the person named to receive an account, policy or fund, which marriage rarely does automatically.' },
      ] },
      l5Sources(['indiacode', 'incometax'], [
        'The succession law applicable to a spouse — the Hindu Succession Act, 1956, the Indian Succession Act, 1925 and the personal law specifying Quranic shares — and the position of a woman’s own property',
        'The exemption for gifts on marriage under section 56(2)(x) and the clubbing of income from assets transferred to a spouse under section 64',
      ]),
    ],
    quiz: [
      {
        q: 'You marry, and neither of you makes a will. What changes about who inherits if one of you dies?',
        options: [
          { text: 'Nothing: marriage does not change succession', why: 'Marriage does change succession. A spouse becomes an heir under the law that applies to the couple, which is precisely why the documents should be revisited.' },
          { text: 'Your spouse becomes an heir, so the intestate division is different from before the marriage', correct: true, why: 'A spouse joins the class of heirs on marriage, so dying without a will produces a different division, usually settling the spouse’s share at less than most couples assume.' },
          { text: 'All your assets become jointly owned by your spouse', why: 'India has no community of property on marriage, so ownership does not change. Only succession does.' },
          { text: 'Your spouse inherits everything, displacing your parents', why: 'A spouse does not take everything on intestacy; they take a share alongside the other heirs in the applicable class.' },
        ],
      },
      {
        q: 'You bought a term insurance policy five years before your marriage, naming your father as nominee. You have not updated it. Who receives the money if you die now?',
        options: [
          { text: 'Your spouse, because marriage automatically updates the nomination', why: 'Marriage does not rewrite contractual documents. The nomination stands until it is changed.' },
          { text: 'Your father, as the recorded nominee, holding it for whoever is entitled to it', correct: true, why: 'The insurer pays the nominee on record, and the nominee holds the money as a custodian for the person entitled — which is why the documents need updating after a marriage.' },
          { text: 'It is divided equally between your spouse and your father', why: 'There is no automatic split. The insurer pays the recorded nominee and the entitlement is settled separately.' },
          { text: 'The policy becomes void because the details are out of date', why: 'A nomination that has not been updated is not void; it simply directs payment to the person still named.' },
        ],
      },
      {
        q: 'You transfer a fixed deposit to your spouse to take advantage of the gift exemption. What is the tax result of the interest?',
        options: [
          { text: 'The interest is untaxed, because gifts between spouses are exempt', why: 'The exemption is for the gift itself. Income the asset produces continues to be taxable somewhere.' },
          { text: 'The interest may be clubbed with your income, since it arises from an asset you transferred to your spouse', correct: true, why: 'The clubbing provisions attribute income from an asset transferred to a spouse back to the transferor, so the expected tax advantage often does not materialise.' },
          { text: 'The interest is taxed half to each spouse', why: 'There is no automatic half-share for spouses; clubbing attributes it to the transferor.' },
          { text: 'The transfer is void because a spouse cannot receive a gift', why: 'A spouse can receive a gift, and such a gift is exempt from tax. The question is where the resulting income is taxed.' },
        ],
      },
    ],
    takeaway: 'Marriage changes succession and the documents you signed — not ownership, income or debt. Update the will, the nominations and the household plan, and keep records of what each partner owns.',
  },

  'l5-080': {
    id: 'l5-080',
    title: 'Supporting Parents',
    subtitle: 'A recurring commitment with an uninsurable tail. Budget it in layers, and insure the part that can be insured.',
    minutes: 12,
    blocks: [
      scene('parent-support-plan', 'Five layers of cost in supporting a parent, only one of which is insurance. The medical buffer is the layer people discover they needed after the event.'),
      { kind: 'p', text: 'Supporting a parent is unlike the rest of personal finance because it is not a goal with a date. It is a recurring commitment with an unpredictable tail, and it usually begins gradually — a monthly transfer, then medicines, then a hospitalisation that consumes a year of the budget in a fortnight. The planning problem is therefore not "how do I fund this" but "which parts can be insured, which can be scheduled, and which have to be absorbed when they arrive". Separating those three is most of the work.' },
      { kind: 'p', text: 'Start with cover, because it is the only layer that can be transferred to somebody else. A parent needs a policy in their own name: your employer’s cover does not extend to them, and it disappears when you change jobs. Where a parent is still insurable, buying cover before they cross an age band is the single highest-return decision in this whole chapter, because premiums step up with age and pre-existing conditions accumulate waiting periods. Where they cannot be insured, the alternative is a dedicated medical buffer, which is simply self-insurance and works fine if it is actually funded.' },
      { kind: 'p', text: 'Then the recurring layer. A monthly transfer is the right instrument because it is predictable in both directions: the parent can rely on it, and it appears in your own budget rather than being improvised. Index it, because a fixed amount quietly shrinks in real terms — ₹15,000 a month is a different commitment five years from now. And put it on a scheduled transfer, since an amount paid when asked is the one that gets skipped in a tight month, which is exactly the month the support matters most.' },

      { kind: 'h', text: 'The layers, and how each one behaves' },
      {
        kind: 'table',
        caption: 'Five layers of parental support',
        headers: ['Layer', 'How it behaves', 'How to handle it'],
        rows: [
          ['Health cover in the parents’ names', 'Premiums rise with age, and waiting periods apply for pre-existing conditions', 'Buy early, in their names, and check the room limits and exclusions rather than only the premium'],
          ['Monthly support', 'Recurring and predictable, but erodes in real terms if it is not revised', 'Put it on a scheduled transfer, and review the amount every year'],
          ['Medicines and routine care', 'Small each month, large each year, and the line most budgets omit', 'Track it as a monthly expense from the start rather than discovering the annual total'],
          ['A medical contingency buffer', 'Arrives suddenly, and insurance pays after the event', 'Hold cash for the counter, and treat insurance as the reimbursement that follows'],
          ['Home help and comfort', 'Quality of life rather than treatment, and easy to underestimate', 'Budget it explicitly, since it is the layer most often funded from goodwill'],
        ],
      },
      l5Rule(
        'The tax position of supporting parents',
        'A premium paid for the health insurance of a parent is deductible under section 80D up to ₹25,000 in a year, or ₹50,000 where the parent is a senior citizen aged 60 or more. This is separate from the limit for the taxpayer, their spouse and dependent children, which is ₹25,000 and ₹50,000 for a senior citizen taxpayer, so the combined deduction can reach ₹1 lakh in a year where both the taxpayer and a parent are senior citizens. Medical expenditure incurred for a senior citizen parent who is not covered by insurance is also deductible under section 80D up to ₹50,000, within the same overall ceiling, and expenditure on a preventive health check-up is allowed up to ₹5,000 within the applicable limit. These deductions are available under the old regime; the new regime allows no such deductions. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'Planning for the part that cannot be scheduled' },
      { kind: 'p', text: 'The medical tail is what makes this different from every other commitment. Insurance pays after the event, and hospitals ask at the counter; so there are two things to hold. The first is cover, with the room limits, co-payment and waiting periods read rather than assumed, since a policy that covers the illness but caps the room rent can still leave a substantial bill. The second is a cash buffer dedicated to this purpose, so that a hospitalisation is a claim rather than a loan against your own savings or, worse, against a credit card at the most expensive rate in the household.' },
      { kind: 'p', text: 'Two further points are worth stating plainly. First, the tax benefit is real and secondary: choosing a policy for the deduction rather than for its cover and exclusions inverts the decision, and the deduction is available only in the old regime. Second, the arrangement should be discussed rather than assumed. Whether the support is a gift, a loan, or a share of a joint household; whether siblings contribute and in what proportion; what happens if a parent needs to move in — these are the questions that turn a family arrangement into a dispute when they are answered differently by different people. Writing them down once removes most of it.' },
      { kind: 'p', text: 'What makes this sustainable over years is treating it as a line in the budget rather than an act of occasional generosity. A parent supported on a plan receives something they can rely on; a parent supported on goodwill receives the residual of your month, which is a much less stable arrangement for both of you.' },
      sim('l5-parent-care-budget', 'Layer cover, a monthly transfer, medicines and a buffer into one annual number, and see the section 80D deduction beside it.'),
      l5Illustrative('The amounts, premiums, ages and buffer in the lab are invented for practice. The section 80D framework — ₹25,000 for parents, ₹50,000 where a parent is a senior citizen, a matching self-and-family limit, up to ₹5,000 for a preventive health check-up within those limits, the allowance for medical expenditure of an uninsured senior citizen parent, and the availability of these deductions in the old regime only — is verified on 15 October 2026 and linked below.'),

      { kind: 'h', text: 'Setting up parental support' },
      { kind: 'list', ordered: true, items: [
        'Buy health cover in the parents’ names, while they are still insurable, rather than relying on your employer’s policy.',
        'Read the room limits, the co-payment and the waiting periods, not just the premium.',
        'Put a monthly transfer on a schedule, and revise the amount every year.',
        'Track medicines and routine care as a monthly expense rather than discovering the annual total.',
        'Hold a dedicated medical buffer, since insurance reimburses after the event.',
        'Budget home help and comfort explicitly, because it is real cost and often funded informally.',
        'Agree with siblings who contributes what, and write it down before it is tested.',
        'Claim the section 80D deduction where you are in the old regime, and keep the premium receipts.',
      ] },
      { kind: 'p', text: 'The last thing to say is about sequencing. Cover first, then the buffer, then the monthly transfer, then the rest. A family that starts with the monthly transfer and leaves the cover for later has funded the smallest layer and left the largest one exposed, which is the arrangement that causes the most trouble at the worst moment.' },
      { kind: 'terms', items: [
        { term: 'Room rent limit', meaning: 'A cap on the daily room charge a policy will pay, which can reduce the settlement even when the illness is covered.' },
        { term: 'Waiting period', meaning: 'The time before a policy pays for a condition, which is longer for pre-existing conditions and matters most when cover is bought late.' },
        { term: 'Self-insurance', meaning: 'Holding your own cash against a risk instead of buying cover, which works only if the money is actually set aside.' },
        { term: 'Co-payment', meaning: 'The share of a claim the insured person bears, often applied to claims above a certain age.' },
      ] },
      l5Sources(['irdai', 'incometax'], [
        'The rules and disclosures that govern a health insurance policy — room rent limits, co-payment, waiting periods for pre-existing conditions, and the obligations of the insurer — and the framework for portability and grievance redressal',
        'The deduction under section 80D for a premium paid for a parent, the higher limit where a parent is a senior citizen, the allowance for medical expenditure of an uninsured senior citizen, and the ₹5,000 ceiling for a preventive health check-up',
      ]),
    ],
    quiz: [
      {
        q: 'Your parent is 62 and uninsured. You pay ₹40,000 in a year as their health insurance premium. How much can you deduct under section 80D, assuming you claim under the old regime?',
        options: [
          { text: '₹25,000, because that is the standard limit for a parent', why: 'The higher limit applies once a parent is a senior citizen, which a parent aged 62 is.' },
          { text: '₹40,000, since a senior citizen parent’s limit is ₹50,000', correct: true, why: 'The limit for a senior citizen parent is ₹50,000, so a premium of ₹40,000 is fully within it, subject to the overall structure of the section.' },
          { text: '₹50,000, regardless of what was actually paid', why: 'A deduction is limited by the amount actually paid as well as by the ceiling; you cannot deduct more than the premium.' },
          { text: 'Nothing, because a parent is not a dependant for this purpose', why: 'Section 80D specifically allows a deduction for a parent’s premium, whether or not the parent is financially dependent.' },
        ],
      },
      {
        q: 'Why is a policy in your parents’ names better than covering them on your employer’s group plan?',
        options: [
          { text: 'Because group cover pays a higher amount', why: 'Group cover is often cheaper but not necessarily more generous, and it does not address continuity.' },
          { text: 'Because employer cover does not reach parents and disappears when you change jobs', correct: true, why: 'You cannot cover parents on most employer plans at all, and even where a plan allows it, the cover ends with the employment — which is exactly when a parent most needs the continuity.' },
          { text: 'Because premiums in their names are always lower', why: 'Premiums rise sharply with age. The reason to buy in their names is continuity and availability, not price.' },
          { text: 'Because a policy in their names avoids the waiting period', why: 'Waiting periods still apply; buy early precisely because waiting periods are never waived for pre-existing conditions.' },
        ],
      },
      {
        q: 'A parent is hospitalised and the bill is settled after discharge. Why does a separate cash buffer still matter?',
        options: [
          { text: 'Because insurance is not legally binding', why: 'A policy is a contract and pays according to its terms. The issue is timing rather than enforceability.' },
          { text: 'Because the hospital requires payment before the insurer reimburses the claim', correct: true, why: 'Insurance reimburses after the event, and the counter asks during it, so cash is needed for the gap — even where a cashless facility applies, non-covered items are paid at the hospital.' },
          { text: 'Because the buffer earns a higher return than the policy', why: 'A buffer is held for liquidity rather than return, and it is not a competing investment.' },
          { text: 'Because premiums rise if you claim', why: 'A claim does not change an existing policy’s premium during its term, and this is not the reason for holding cash.' },
        ],
      },
    ],
    takeaway: 'Support a parent in layers: cover in their names first, then a medical buffer, then a scheduled monthly transfer, and medicines and comfort tracked as real costs. Choose the policy for its cover, not its deduction.',
  },
}
