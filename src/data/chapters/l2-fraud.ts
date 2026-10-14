import type { Chapter } from '../../types'

/** Level 2, chapters 61–67: recognising and surviving financial fraud. */
export const fraud: Record<string, Chapter> = {
  'l2-061': {
    id: 'l2-061',
    title: 'Financial Fraud',
    subtitle: 'The patterns, and why they work on smart people',
    minutes: 5,
    blocks: [
      { kind: 'p', text: 'Financial fraud in India is now dominated by a small number of repeatable schemes, almost all delivered by phone, SMS or a message app. The people caught are not usually careless — they are responding rationally to urgent, credible-seeming information from an apparently official source.' },
      {
        kind: 'table',
        caption: 'Fraud losses and where they come from',
        headers: ['Category', 'Typical pattern'],
        rows: [
          ['Investment and trading', 'Fake platforms showing fictitious profits'],
          ['Impersonation of authorities', 'Fake police, ED, CBI, tax or bank officials'],
          ['Task / job scams', 'Small tasks that pay, then a "deposit" is required'],
          ['Loan and app scams', 'Instant loans with hidden, escalating fees'],
          ['KYC and account takeover', 'Fake links capturing OTPs and PINs'],
          ['Fake customer support', 'Fraud helplines placed in search results'],
          ['E-commerce fraud', 'Fake payment links and QR codes'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'The four-step pattern',
        text: 'Create a hook (prize, refund, account problem, investment), establish authority (bank, government, SEBI-registered agent), create urgency (a deadline or a limited window), then request either credentials or an advance payment. Recognising the four steps means recognising the script, whatever the costume.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'No legitimate party asks for these',
        text: 'No bank, government department, police force, or company ever asks for an OTP, PIN, password, or CVV. No authority threatens arrest over a phone call. Any message claiming otherwise is fraud, regardless of how official it looks or who it claims to be.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'The pause is the defence',
        text: 'Whenever a financial request arrives by call or message, end the contact and verify independently — using the number on your card, the official app, or walking into a branch. The urgency in the message exists precisely to stop you doing this.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Never share an OTP, PIN, password or CVV with anyone.',
          'Verify independently through an official channel you found yourself.',
          'Treat urgency, authority and reward as the three warning signs.',
          'Report to 1930 and cybercrime.gov.in, and tell your bank immediately.',
          'Keep a small emergency fund so a crisis is not solved by a fraudster\'s offer.',
        ],
      },
      { kind: 'sim', name: 'scam-spotter', caption: 'Work through seven realistic scam messages and hunt the red flags.' },
    ],
    quiz: [
      {
        q: 'Why do people fall for financial fraud despite being careful?',
        options: [
          { text: 'Because they are all careless', correct: false, why: 'That is rarely true and not useful.' },
          { text: 'Because the schemes use urgent, credible-seeming messages that suppress careful checking', correct: true, why: 'Exactly right.' },
          { text: 'Because banks are poor at detecting fraud', correct: false, why: 'Banks detect a great deal of it.' },
        ],
      },
      {
        q: 'Which is never legitimately requested by anyone?',
        options: [
          { text: 'Your account number', correct: false, why: 'It is asked for legitimate purposes.' },
          { text: 'Your OTP, PIN or CVV', correct: true, why: 'Exactly right — no legitimate party asks.' },
          { text: 'Your name', correct: false, why: 'Asked routinely.' },
        ],
      },
      {
        q: 'The correct response to an urgent financial request by phone is to:',
        options: [
          { text: 'Comply quickly to avoid trouble', correct: false, why: 'Urgency is the trap.' },
          { text: 'End the contact and verify through an official channel you find yourself', correct: true, why: 'Exactly right.' },
          { text: 'Ask the caller for their employee ID', correct: false, why: 'Verifiable IDs are easy to fake.' },
        ],
      },
    ],
    takeaway: 'Fraud runs on hook, authority, urgency and a request for credentials or money. Never share an OTP or PIN, and always verify independently through a channel you found yourself.',
  },

  'l2-062': {
    id: 'l2-062',
    title: 'Ponzi Schemes',
    subtitle: 'Old returns paid by new investors',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'ponzi-chain', caption: 'Early investors are paid from new investors\' money. That cannot continue indefinitely.' },
      { kind: 'p', text: 'A Ponzi scheme pays existing investors with money taken from new investors, rather than from any real business activity. It is named after Charles Ponzi in 1932 and is illegal in every major jurisdiction, including India under the BSE and NSE rules and the SEBI regulations.' },
      {
        kind: 'table',
        caption: 'Ponzi scheme vs genuine scheme',
        headers: ['Ponzi scheme', 'Genuine investment'],
        rows: [
          ['Returns come from new investors', 'Returns come from real business activity or asset performance'],
          ['No disclosure of how money is earned', 'Transparent, audited, reported structure'],
          ['Early investors paid disproportionately', 'All investors share the same risk and return'],
          ['Cannot explain the underlying business', 'Can explain clearly where returns come from'],
          ['Secrecy and pressure to invest fast', 'Time to review; no urgency'],
          ['Grows exponentially to sustain payouts', 'Grows with genuine demand for the product'],
        ],
      },
      {
        kind: 'formula',
        label: 'Why it must collapse',
        expr: 'If the scheme pays 12% a month, the investor base must grow about 12% a month just to stay level',
        note: 'Doubling roughly every six months is impossible to sustain, so the scheme ends in a run.',
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'The early returns are the marketing',
        text: 'A Ponzi scheme must pay early investors reliably and on time, because those payments are its only advertisement. So the earliest participants genuinely receive money — which is exactly what creates the testimonials that recruit everyone else.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Recovering money from a collapsed Ponzi',
        text: 'Money already withdrawn by early investors is generally treated as bona fide settlement and is difficult to claw back. Recovery usually comes from assets seized by police, which are shared among all victims. Reporting early helps, but expectations should be low — the priority is stopping further loss.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'How to spot one quickly',
        text: 'Ask two questions: where exactly does the return come from, and who audits it? If the answer is "from other investors joining" or "trading profits, ask for audited accounts", you have your answer. Verified SEBI registration is a starting point, not a guarantee.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Ask where returns come from and who audits the entity.',
          'Verify SEBI registration directly on sebi.gov.in, not on a link provided to you.',
          'Treat guaranteed high returns as disqualifying.',
          'Never join because early investors are showing profits.',
          'Report suspected schemes to SEBI or the police, and stop further payments.',
        ],
      },
    ],
    quiz: [
      {
        q: 'A Ponzi scheme pays investors using:',
        options: [
          { text: 'Genuine profits from its underlying business', correct: false, why: 'That would be a legitimate scheme.' },
          { text: 'Money contributed by newer investors', correct: true, why: 'Exactly right.' },
          { text: 'A government guarantee fund', correct: false, why: 'No such fund backs these.' },
        ],
      },
      {
        q: 'Why are early investors paid reliably in a Ponzi scheme?',
        options: [
          { text: 'Because they invested more', correct: false, why: 'Their size is not the reason.' },
          { text: 'Because their word-of-mouth testimonials are the scheme\'s main advertisement', correct: true, why: 'Exactly right.' },
          { text: 'Because the law requires it', correct: false, why: 'No such law applies.' },
        ],
      },
      {
        q: 'A scheme offering a guaranteed 12% monthly return with audited by an unnamed firm is:',
        options: [
          { text: 'A safe investment', correct: false, why: 'Guaranteed high monthly returns are a warning sign.' },
          { text: 'Disqualifying on its face, since no legitimate investment guarantees that', correct: true, why: 'Exactly right.' },
          { text: 'Fine if registered with SEBI', correct: false, why: 'Registration alone does not legitimise impossible returns.' },
        ],
      },
    ],
    takeaway: 'A Ponzi scheme pays old investors with new investors\' money and must collapse. Ask where returns come from and who audits — guaranteed high returns disqualify any offer.',
  },

  'l2-063': {
    id: 'l2-063',
    title: 'Pyramid Schemes',
    subtitle: 'Where the money is recruitment, not products',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'pyramid', caption: 'Only the top of the pyramid recovers the money they put in.' },
      { kind: 'p', text: 'A pyramid scheme pays members primarily for recruiting new members rather than for selling products or services. Because the structure is finite, only those near the top can recover their investment — everyone below them loses, by mathematical necessity rather than by bad luck.' },
      {
        kind: 'table',
        caption: 'Pyramid vs legitimate direct selling',
        headers: ['Pyramid scheme', 'Legitimate direct selling'],
        rows: [
          ['Income primarily from recruitment', 'Income primarily from selling products'],
          ['Requires purchase to participate in the scheme', 'No purchase required to join'],
          ['Retail income is the main compensation', 'Retail sales and repeat customers are the focus'],
          ['Rapid expansion demanded', 'Sustainable, service-based growth'],
          ['Compensation plan based on downline size', 'Compensation based on retail volume'],
          ['Stock is hard to sell on', 'Genuine demand for the product'],
        ],
      },
      {
        kind: 'formula',
        label: 'The mathematics of a pyramid',
        expr: 'To earn meaningfully, you typically need to recruit more people than exist in the population below you',
        note: 'In a scheme paying a 10% level bonus, the arithmetic quickly becomes impossible.',
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Why the top looks successful',
        text: 'Every pyramid has members who genuinely earned money and genuinely believe in the product. Their success is not evidence the scheme works — it is evidence the top levels work. Their experience is then used to recruit you, using perfectly real testimonials.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Stock loading and compulsory purchases',
        text: 'Members are often required to buy products to qualify for commissions. This lets the scheme collect cash from members while shifting unsold stock to new recruits. If you must buy inventory to participate in the scheme, it is a pyramid.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'The simple test',
        text: 'Ask: if I stopped recruiting entirely and only sold the product, would I still earn enough to justify the time and money? If the answer is no, the money is in recruitment, and it is a pyramid.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Check whether income comes from retail sales or from recruitment.',
          'Ask whether you must buy stock to participate.',
          'Be sceptical of lifestyle evidence rather than income evidence.',
          'Avoid anything promising a "capillary income" or "referral income" as the main source.',
          'Report it to the consumer helpline or police if you are already invested.',
        ],
      },
    ],
    quiz: [
      {
        q: 'In a pyramid scheme, income is primarily generated by:',
        options: [
          { text: 'Selling useful products to end customers', correct: false, why: 'That would be legitimate.' },
          { text: 'Recruiting new members into the scheme', correct: true, why: 'Exactly right.' },
          { text: 'Government grants', correct: false, why: 'No such thing.' },
        ],
      },
      {
        q: 'Being required to buy stock in order to join and earn indicates:',
        options: [
          { text: 'That the products are genuinely popular', correct: false, why: 'It indicates stock loading.' },
          { text: 'A pyramid scheme, since the purchase is a recruitment fee in disguise', correct: true, why: 'Exactly right.' },
          { text: 'That you will receive a guaranteed bonus', correct: false, why: 'No guarantee exists.' },
        ],
      },
      {
        q: 'Why do successful members vouch for pyramid schemes?',
        options: [
          { text: 'They are lying', correct: false, why: 'They often genuinely earned money.' },
          { text: 'Because the top levels really do pay, and their testimonials recruit new members', correct: true, why: 'Exactly right.' },
          { text: 'Because they are victims too', correct: false, why: 'Not generally true.' },
        ],
      },
    ],
    takeaway: 'A pyramid scheme pays for recruitment, not products. Ask whether you would still earn by only selling — if not, and if buying stock is required, it is a pyramid.',
  },

  'l2-064': {
    id: 'l2-064',
    title: 'Fake Investment Schemes',
    subtitle: 'Profitable screens, non-existent money',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'ponzi-chain', caption: 'A fake platform runs on the same logic: new money pays old claims.' },
      { kind: 'p', text: 'Fake investment schemes combine real technology with non-existent assets. The app is genuine, the charts are genuine, the profits shown are genuine — and none of the money exists. Deposits appear in your account as balances, and withdrawals fail or are paid from new deposits.' },
      {
        kind: 'table',
        caption: 'The anatomy of a fake platform',
        headers: ['Surface', 'Reality'],
        rows: [
          ['A polished trading app with live charts', 'Software built for this purpose'],
          ['Profitable account shown at login', 'A number, not money'],
          ['Small withdrawals succeed initially', 'Paid from other investors\' deposits'],
          ['"Withdrawals delayed due to compliance"', 'The fund for withdrawals has run out'],
          ['Adviser on a video call from an office', 'Often a rented or shared setup'],
          ['Registered company and SEGI-claimed ID', 'Registration may be real but unrelated'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'The small withdrawal is the crucial trick',
        text: 'Fraudsters allow you to withdraw a small amount early — sometimes within hours. This proves "the platform works", removes your doubt, and usually increases how much you deposit. It is the most effective part of the con, because it substitutes experience for scepticism.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Genuine returns need genuine risks',
        text: 'Any investment that shows steady profits with no losses is not making money — it is printing numbers. Genuine investing involves periods of flat or negative returns. The absence of risk is the clearest evidence that the risk is being hidden rather than avoided.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Only ever invest through regulated channels',
        text: 'Use SEBI-registered intermediaries, whose names you verify on sebi.gov.in yourself. Never send money to a personal account, a UPI ID of a stranger, or a "client account" provided by someone online. Genuine platforms withdraw from your own registered bank account, not to a new beneficiary.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Verify SEBI registration on the regulator\'s own website.',
          'Never deposit to a personal or third-party account.',
          'Treat guaranteed returns as disqualifying.',
          'Be suspicious of apps not downloadable from an official store.',
          'Do not accept "withdrawal under compliance review" as normal.',
        ],
      },
    ],
    quiz: [
      {
        q: 'Why do fake platforms allow small early withdrawals?',
        options: [
          { text: 'To be fair to early investors', correct: false, why: 'That is not the mechanism.' },
          { text: 'To prove the platform works and remove the investor\'s doubt before a larger deposit', correct: true, why: 'Exactly right.' },
          { text: 'Because regulators require it', correct: false, why: 'No such requirement.' },
        ],
      },
      {
        q: 'A genuine investment adviser should be:',
        options: [
          { text: 'Reachable on WhatsApp at night', correct: false, why: 'Not a criterion.' },
          { text: 'Registered with SEBI, verifiable on the regulator\'s website', correct: true, why: 'Exactly right.' },
          { text: 'A friend of the promoter', correct: false, why: 'Irrelevant.' },
        ],
      },
      {
        q: 'A trading platform showing constant steady profits with no losing months is:',
        options: [
          { text: 'Well managed', correct: false, why: 'That is implausible.' },
          { text: 'Almost certainly displaying fictitious numbers', correct: true, why: 'Exactly right — genuine investing has losing periods.' },
          { text: 'Low risk', correct: false, why: 'Constant profit claims indicate hidden risk.' },
        ],
      },
    ],
    takeaway: 'Fake platforms use real software and fake money, and allow small withdrawals to build trust before taking a large deposit. Only invest through SEBI-registered intermediaries you verify yourself.',
  },

  'l2-065': {
    id: 'l2-065',
    title: 'Fake Loan Apps',
    subtitle: 'Instant money, compounding fees',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'phishing-hook', caption: 'The app is real, the permission request is real, and the money is not.' },
      { kind: 'p', text: 'Fake loan apps advertise instant, no-collateral, low-interest loans through social media ads. They release a small amount, and then charge a series of fees — processing, documentation, insurance, registration, "verification" — until the amount repaid far exceeds the amount received.' },
      {
        kind: 'table',
        caption: 'The fee escalation pattern',
        headers: ['Stage', 'Typical demand'],
        rows: [
          ['Application', 'Registration, processing fee up front'],
          ['Disbursement', 'Documentation, insurance, "security deposit"'],
          ['After a few days', 'Late fees for "delayed processing"'],
          ['On first repayment', 'Mandatory charges not disclosed upfront'],
          ['If you object', 'Threats of legal action and harassment'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'The costs are deliberately obscured',
        text: 'Regulated lenders are required to disclose an annualised percentage rate, all fees and the total amount repayable before you accept. Fake apps show only an EMI or an interest figure. Undisclosed cost is by itself sufficient reason to walk away from any Indian lender.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Data harvesting comes with the app',
        text: 'These apps request extensive permissions — contacts, SMS, photos, call logs — and much of the data is sold. The real product is often your personal data rather than the loan. Download from an official store only, and never grant contacts or SMS access to a loan app.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Harassment means escalate, do not pay more',
        text: 'If a lender begins threatening contacts or police, most legitimate lenders stop once a complaint is filed. Do not keep paying into an escalating demand. Complain to the RBI integrated ombudsman and to cyber police simultaneously.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Require the APR, the fee schedule and total repayable in writing.',
          'Refuse to pay any fee before disbursement to a personal account.',
          'Download loan apps from official stores only.',
          'Never grant contacts, SMS or photo permissions.',
          'If threatened, complain to the RBI ombudsman and cyber police.',
        ],
      },
    ],
    quiz: [
      {
        q: 'A legitimate Indian lender must disclose before you borrow:',
        options: [
          { text: 'Only the monthly EMI', correct: false, why: 'That is insufficient and a warning sign.' },
          { text: 'The annualised percentage rate, all fees and the total amount repayable', correct: true, why: 'Exactly right.' },
          { text: 'Nothing, since terms come later', correct: false, why: 'Disclosure is required.' },
        ],
      },
      {
        q: 'Fake loan apps charge a series of fees designed to:',
        options: [
          { text: 'Cover genuine processing costs', correct: false, why: 'The pattern is designed to extract more than the loan.' },
          { text: 'Escalate until repayment far exceeds the amount disbursed', correct: true, why: 'Exactly right.' },
          { text: 'Reduce your interest rate', correct: false, why: 'Unrelated.' },
        ],
      },
      {
        q: 'If a fake loan app begins threatening you or your contacts, you should:',
        options: [
          { text: 'Pay more to make it stop', correct: false, why: 'It usually escalates.' },
          { text: 'Complain to the RBI ombudsman and cyber police', correct: true, why: 'Exactly right.' },
          { text: 'Pay and never tell anyone', correct: false, why: 'That helps the scammer and nobody else.' },
        ],
      },
    ],
    takeaway: 'Fake loan apps hide costs and escalate fees while harvesting your data. Require written APR and total repayable, never pay upfront fees, and escalate harassment to the RBI ombudsman.',
  },

  'l2-066': {
    id: 'l2-066',
    title: 'Identity Theft',
    subtitle: 'When someone becomes you',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'phishing-hook', caption: 'One fake KYC page can be enough to hand over everything a fraudster needs.' },
      { kind: 'p', text: 'Identity theft is when someone uses your personal information to open accounts, take loans, or conduct transactions. In India it typically begins with a lost document, an Aadhaar or PAN leak, or an OTP captured through a fake link — and it can take months to discover.' },
      {
        kind: 'table',
        caption: 'Common vectors in India',
        headers: ['Vector', 'How it happens'],
        rows: [
          ['Lost documents', 'Aadhaar, PAN, passport left in lost property or shared carelessly'],
          ['Fake KYC links', 'Capturing name, DOB, account and OTP details'],
          ['OTP interception', 'Sim swap or a fraudulent OTP forwarded to the fraudster'],
          ['Document uploads to unknown sites', 'Storing scans on unencrypted sites'],
          ['Insider access', 'At a bank, retailer or office'],
          ['Phishing sites', 'Data captured and sold on'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'How it is discovered, usually late',
        text: 'Most identity theft in India surfaces through a loan application that is rejected, a card you did not apply for, or an unpaid EMI on a loan you do not recognise. By then the damage may be months old. Checking your credit report quarterly is the fastest detection available.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'One leaked credential can be reused everywhere',
        text: 'Fraudsters take a set of leaked credentials and try them across banks, insurers and lenders. Holding the same phone number and email across a dozen services means one breach exposes all of them. Unique passwords limit the blast radius.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'The first-hour response',
        text: 'If you suspect identity misuse: freeze your UPI and change your mobile banking PIN immediately, then call your bank to block cards and report a fraud. Next, contact the UIDAI or document-issuing authority to update or re-issue, and check your credit report for accounts you did not open.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Keep Aadhaar, PAN and passport originals secured.',
          'Use masked Aadhaar where available instead of sharing the full number.',
          'Never upload document scans to unknown websites.',
          'Use unique passwords and two-factor authentication on email.',
          'Check your credit report at least once a year for accounts you did not open.',
        ],
      },
    ],
    quiz: [
      {
        q: 'Identity theft is usually discovered:',
        options: [
          { text: 'Immediately, when it happens', correct: false, why: 'Usually much later.' },
          { text: 'Through a rejected application, an unfamiliar card, or an unknown EMI', correct: true, why: 'Exactly right.' },
          { text: 'By the police automatically', correct: false, why: 'Not automatically.' },
        ],
      },
      {
        q: 'The fastest way to detect identity theft in India is:',
        options: [
          { text: 'Waiting for a bank statement', correct: false, why: 'Too late.' },
          { text: 'Checking your credit report periodically for accounts you did not open', correct: true, why: 'Exactly right.' },
          { text: 'Checking your phone', correct: false, why: 'Unrelated.' },
        ],
      },
      {
        q: 'Reusing the same password across many services means:',
        options: [
          { text: 'Nothing significant', correct: false, why: 'It matters a great deal.' },
          { text: 'One breach can expose every account you hold', correct: true, why: 'Exactly right.' },
          { text: 'Your phone will be faster', correct: false, why: 'Unrelated.' },
        ],
      },
    ],
    takeaway: 'Identity theft in India is discovered late, often through a rejected loan or unknown EMI. Use unique passwords, protect your documents, and check your credit report once a year.',
  },

  'l2-067': {
    id: 'l2-067',
    title: 'SIM-Swap Scams',
    subtitle: 'Taking over the number your bank trusts',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'shield', caption: 'A SIM swap reroutes every OTP your bank sends. The shield goes with it unless you add one.' },
      { kind: 'p', text: 'A SIM swap redirects your mobile number to a new SIM card. Every OTP your bank sends goes to the new card instead of you. Because OTPs are the primary authentication for Indian banking, this single step gives an attacker control of your accounts.' },
      {
        kind: 'table',
        caption: 'How a swap happens',
        headers: ['Stage', 'What the attacker does'],
        rows: [
          ['Data gathering', 'Collects your name, DOB, address and phone number from leaks or social media'],
          ['Social engineering', 'Calls the carrier impersonating you, or an insider does it directly'],
          ['Fraudulent activation', 'A new SIM is issued in your name, or ported from your old one'],
          ['OTP capture', 'Your bank\'s OTPs now arrive on the attacker\'s phone'],
          ['Account takeover', 'Card details, PIN resets, UPI transfers and withdrawals follow'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Carrier PIN and porting protection are essential',
        text: 'Indian carriers support a registered "porting PIN" or "swap PIN" that must be supplied to authorise a port or SIM change, and a "SIM change PIN" for in-store swaps. Setting these is the single most effective protection against this attack, and takes one call.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Losing signal suddenly deserves attention',
        text: 'If your mobile shows "No service" for more than a few hours without any known reason, or your number stops working, contact your carrier immediately and ask whether a SIM change has been requested. Attackers often wait days before using the line, hoping you will assume it is a network fault.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Use a banking PIN the SMS cannot reach',
        text: 'Many Indian bank apps support a separate app or transaction PIN that is never sent by SMS. Setting one means an intercepted OTP alone is not enough to move money. It is a cheap, high-value setting — do it when your carrier offers it.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Set a porting PIN and SIM change PIN with your carrier.',
          'Enable two-factor authentication in your banking app, not by SMS alone.',
          'Set a transaction or app PIN where available.',
          'Investigate any unexplained loss of mobile signal.',
          'Never share your number along with your date of birth and address.',
        ],
      },
    ],
    quiz: [
      {
        q: 'Why does a SIM swap give an attacker access to your bank?',
        options: [
          { text: 'Because it gives them your internet banking password', correct: false, why: 'It does not.' },
          { text: 'Because OTPs sent to your number now reach them instead', correct: true, why: 'Exactly right.' },
          { text: 'Because it reveals your card number', correct: false, why: 'Unrelated.' },
        ],
      },
      {
        q: 'The most effective protection against SIM swap is:',
        options: [
          { text: 'Changing your phone every year', correct: false, why: 'Unrelated.' },
          { text: 'Setting a porting PIN and SIM change PIN with your carrier', correct: true, why: 'Exactly right.' },
          { text: 'Avoiding UPI entirely', correct: false, why: 'Too drastic.' },
        ],
      },
      {
        q: 'Unexplained loss of mobile signal for several hours should prompt you to:',
        options: [
          { text: 'Wait for it to fix itself', correct: false, why: 'That is what the attacker wants.' },
          { text: 'Contact your carrier immediately and ask whether a SIM change was requested', correct: true, why: 'Exactly right.' },
          { text: 'Buy a new SIM', correct: false, why: 'That does not address it.' },
        ],
      },
    ],
    takeaway: 'A SIM swap redirects your OTPs and hands over your accounts. Set a porting and SIM-change PIN, enable app-based two-factor authentication, and investigate unexplained signal loss immediately.',
  },
}