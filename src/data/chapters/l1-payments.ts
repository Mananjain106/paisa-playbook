import type { Chapter } from '../../types'

/** Level 1, chapters 39–44: how money moves digitally in India. */
export const payments: Record<string, Chapter> = {
  'l1-039': {
    id: 'l1-039',
    title: 'UPI',
    subtitle: 'India\'s payment system that changed everyday money',
    minutes: 5,
    blocks: [
      { kind: 'scene', name: 'upi-flow', caption: 'UPI does not move money itself — it moves instructions between banks.' },
      { kind: 'p', text: 'Unified Payments Interface is an instant payment system built by NPCI that lets you transfer money between bank accounts using a phone number, virtual payment address (UPI ID) or QR code. It works 24 hours a day, 365 days a year, including holidays.' },
      { kind: 'h', text: 'How it actually works' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'You enter a UPI ID like yourname@bank, or scan a QR code.',
          'Your phone authenticates you — usually a UPI PIN, sometimes a biometric.',
          'Your bank checks the request and debits your account.',
          'The recipient\'s bank is credited through the NPCI clearing system.',
          'Both banks settle with each other later, usually the next working day.',
        ],
      },
      {
        kind: 'table',
        caption: 'What UPI changed',
        headers: ['Before UPI', 'With UPI'],
        rows: [
          ['Transfers often needed a form or a visit to a branch', 'Transfer from the phone in seconds'],
          ['Limited to banking hours', '24×7, including holidays'],
          ['Cards could attract a fee on small amounts', 'UPI itself is generally free for individuals'],
          ['Cash was needed for small vendors', 'QR code at the counter'],
          ['Receipts were often handwritten', 'Instant digital receipt and statement entry'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Collect request vs payment request',
        text: 'These two look identical in a UPI app and differ enormously in direction. A *payment request* asks you to send money to someone else. A *collect request* asks someone to send money to *you*. If you receive a collect request you did not expect, approving it takes money out of your account — this is the basis of a very common fraud.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'UPI is now a scam vector',
        text: 'Almost all UPI fraud begins with you entering your UPI PIN somewhere you should not. No bank or NPCI employee ever asks for a UPI PIN. If a screen asks for it, you are on a fake page — close it immediately.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Practical safety rules',
        text: 'Use your bank\'s official app. Turn off UPI for one-tap payments and use your PIN for every transaction. Never approve a collect request you did not initiate. Check your statement the same evening after unfamiliar transactions.',
      },
      { kind: 'sim', name: 'scam-spotter', caption: 'Put the collect-request rule to the test against real-style scam messages.' },
    ],
    quiz: [
      {
        q: 'A UPI "collect request" does what?',
        options: [
          { text: 'Takes money from your account and sends it to the requester', correct: true, why: 'Correct — this is why unexpected collect requests are dangerous.' },
          { text: 'Sends money to you from the requester', correct: false, why: 'That is a payment request, the opposite direction.' },
          { text: 'Adds money to your account as a cashback offer', correct: false, why: 'Not what a collect request does.' },
        ],
      },
      {
        q: 'Who will never ask you for your UPI PIN?',
        options: [
          { text: 'Your own bank\'s customer support', correct: false, why: 'Your bank will never ask for it either — they already have it.' },
          { text: 'NPCI or RBI staff', correct: true, why: 'Correct — nobody legitimate asks for a UPI PIN, ever.' },
          { text: 'Your mobile operator', correct: false, why: 'Also never; and operators do not need it.' },
        ],
      },
      {
        q: 'What makes UPI useful for small daily amounts?',
        options: [
          { text: 'It uses cash vouchers', correct: false, why: 'No vouchers are involved.' },
          { text: 'It is instant, works 24×7 and is generally free for individuals', correct: true, why: 'Exactly — convenience and zero cost for small payments.' },
          { text: 'It settles immediately between banks', correct: false, why: 'Settlement between banks typically happens later; the customer sees it as instant.' },
        ],
      },
    ],
    takeaway: 'UPI is instant, always open and free — but the same ease enables fraud. Never share a UPI PIN, and never approve an unexpected collect request.',
  },

  'l1-040': {
    id: 'l1-040',
    title: 'Digital Payments',
    subtitle: 'Convenience, and the new rules of verification',
    minutes: 4,
    blocks: [
      { kind: 'p', text: 'Digital payments cover everything from scanning a QR code to net banking transfers. They replaced cash for good reasons — speed, records, and no counting risk — but they also removed the physical distance that used to protect you.' },
      {
        kind: 'table',
        caption: 'The main digital payment methods in India',
        headers: ['Method', 'How it works', 'Typical cost to user'],
        rows: [
          ['UPI', 'App or QR, PIN or biometric', 'Free for most individuals'],
          ['Debit card', 'Card swipe or tap', 'Often free at point of sale'],
          ['Credit card', 'Borrow now, repay later', 'Interest if you revolve; high fees otherwise'],
          ['Net banking', 'Bank\'s website or app', 'Free'],
          ['NEFT / RTGS / IMPS', 'Bank-to-bank transfer', 'Generally free for individuals'],
          ['Wallets', 'Preloaded balance', 'Free to add, check for charges'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'What digital payments really changed: verification',
        text: 'With cash, a payment required physical presence, and reversing it was hard. Now any payment can be initiated from anywhere in seconds, which is precisely why verification became the central defence. Every scam in the next chapters works by faking one verification step.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Turn on transaction alerts for every payment method, and read them.',
          'Use biometric or PIN authorisation instead of saved one-tap payments where possible.',
          'Keep a separate low-limit account for everyday digital spending.',
          'Never install banking apps from links in messages or ads.',
          'Reconcile your statement monthly, not just when the balance looks wrong.',
        ],
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Convenience fraud',
        text: 'Some legitimate apps ask you to enter your UPI PIN to "verify" you or to "receive" money. This has no legitimate purpose. Banks verify you through your own app; receiving money never requires your PIN. Treat any such screen as hostile.',
      },
      {
        kind: 'sim', name: 'sheet', caption: 'Reconcile your monthly spending on the spreadsheet to see exactly where digital payments went.' },
    ],
    quiz: [
      {
        q: 'Why did digital payments create new fraud risks that cash did not?',
        options: [
          { text: 'Because digital payments are more expensive', correct: false, why: 'Mostly free.' },
          { text: 'Because any payment can now be initiated remotely in seconds, so verification became the weak link', correct: true, why: 'Exactly right.' },
          { text: 'Because cash is now illegal', correct: false, why: 'Cash remains legal and widely used.' },
        ],
      },
      {
        q: 'A legitimate reason to enter a UPI PIN is:',
        options: [
          { text: 'To receive money from someone', correct: false, why: 'Never. Receiving money requires no PIN.' },
          { text: 'To approve a payment you initiated yourself in your own bank app', correct: true, why: 'Correct — only when you are paying.' },
          { text: 'To verify your identity with customer support', correct: false, why: 'Banks already have your details and never ask.' },
        ],
      },
      {
        q: 'The most useful habit for catching unauthorised digital payments is:',
        options: [
          { text: 'Checking your balance daily', correct: false, why: 'Balance alone hides small debits.' },
          { text: 'Enabling transaction alerts and reviewing your statement regularly', correct: true, why: 'Exactly — alerts make small test debits visible.' },
          { text: 'Using only cash for large amounts', correct: false, why: 'Useful for privacy, but not the core defence.' },
        ],
      },
    ],
    takeaway: 'Digital payments removed physical distance and made verification the weak link. Enable alerts, approve only payments you start, and reconcile monthly.',
  },

  'l1-041': {
    id: 'l1-041',
    title: 'Debit Cards',
    subtitle: 'Your money, but with a plastic problem',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'shield', caption: 'A card plus a PIN is a powerful tool — which is exactly why it must be protected.' },
      { kind: 'p', text: 'A debit card spends money directly from your bank account. You cannot spend more than your balance — which is its main advantage over credit — but each transaction creates a window where the money has left your account before the goods are handed over.' },
      {
        kind: 'table',
        caption: 'Debit card types',
        headers: ['Type', 'Uses', 'Note'],
        rows: [
          ['ATM card', 'Withdrawal, balance check, some transfers', 'PIN based'],
          ['Debit card (Point of Sale)', 'Swipe, dip or tap in shops', 'Protected by PIN for large amounts'],
          ['RuPay card', 'India\'s domestic card network', 'Works on UPI too'],
          ['Prepaid / gift card', 'Limited value, often one vendor', 'Check expiry and fees'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Debit cards are usually better than credit cards',
        text: 'Because you can only spend what you have, debit spending cannot spiral into revolving debt. Many people who struggle with credit card debt do better simply by moving everyday spending to a debit card or UPI. The cost is not worth the flexibility.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Card skimming and card trapping',
        text: 'A skimmer copies your card data during a swipe; a card trapper physically retains the card at an ATM. Both are real in India. Use card covers, prefer contactless tap where available, always shield the ATM keypad, and choose ATMs located inside bank branches.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Enable and lower your daily card limit — you can raise it temporarily when needed.',
          'Keep the card number, expiry and CVV memorised or stored securely, never written where it can be found.',
          'Turn off international and contactless transactions if you do not travel or use tap.',
          'Register for real-time alerts; keep the customer care number saved offline.',
        ],
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'If a card is lost',
        text: 'Block it in the app first, then call the bank. Many banks also allow a temporary freeze and unfreeze without cancelling. Check your recent transactions before blocking — if the card is missing, someone may already have tested it.',
      },
    ],
    quiz: [
      {
        q: 'The main advantage of a debit card over a credit card is:',
        options: [
          { text: 'You can spend more than your balance', correct: false, why: 'The opposite is true.' },
          { text: 'You can only spend what you already have, so spending cannot become revolving debt', correct: true, why: 'Exactly right.' },
          { text: 'It earns interest on your balance', correct: false, why: 'Cards do not pay interest.' },
        ],
      },
      {
        q: 'Card skimming is best prevented by:',
        options: [
          { text: 'Using the card only on weekends', correct: false, why: 'Timing is irrelevant.' },
          { text: 'Using card covers, preferring contactless tap, and being careful at unfamiliar ATMs', correct: true, why: 'Correct — physical protection helps.' },
          { text: 'Sharing your PIN with your family', correct: false, why: 'Never share a PIN with anyone.' },
        ],
      },
      {
        q: 'Lowering your daily card limit is useful because:',
        options: [
          { text: 'It reduces your card fee', correct: false, why: 'Fees are unrelated to limits.' },
          { text: 'It limits the damage if the card is lost, stolen or cloned', correct: true, why: 'Exactly — it caps your exposure.' },
          { text: 'It increases your credit score', correct: false, why: 'Unrelated to card limits.' },
        ],
      },
    ],
    takeaway: 'Debit cards stop you borrowing to spend. Keep limits low, protect the card physically, and block it in the app the moment it goes missing.',
  },

  'l1-042': {
    id: 'l1-042',
    title: 'The ATM',
    subtitle: 'Convenience with real cash risks',
    minutes: 3,
    blocks: [
      { kind: 'scene', name: 'atm-machine', caption: 'The keypad is the most exposed part of the whole machine.' },
      { kind: 'p', text: 'An automated teller machine lets you withdraw cash, check balances and change your PIN using a card. In India, most bank ATMs are free for that bank\'s customers, though a small charge may apply to other banks\' cards.' },
      {
        kind: 'table',
        caption: 'ATM costs in India (typical)',
        headers: ['Transaction', 'Own bank ATM', 'Other bank ATM'],
        rows: [
          ['Withdrawal (own card)', 'Usually free', 'Often ₹10–₹20'],
          ['Balance enquiry', 'Usually free', 'Charges may apply'],
          ['PIN change', 'Free', 'Free'],
          ['Mini statement', 'Free', 'Charges may apply'],
          ['Withdrawal limit', '₹10,000–₹20,000 a day typically', 'Same'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'The daily withdrawal limit is a real financial tool',
        text: 'Cash withdrawal limits of ₹10,000–₹20,000 per day mean that even total fraud from one card is capped. People who frequently need more should manage liquidity with a card or UPI transfer instead of withdrawing cash.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Shoulder surfing and card trapping',
        text: 'Shield the keypad with your hand while typing your PIN. Choose ATMs inside bank branches or well-lit places with a camera. If the card is retained or the cash does not appear, do not let anyone nearby help — contact your bank directly using the number on your card.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Change your PIN if you think anyone has seen it.',
          'Never accept help from strangers at the machine.',
          'Keep a small emergency cash float; do not carry a large sum.',
          'Check your statement after any ATM you used outside your branch.',
        ],
      },
    ],
    quiz: [
      {
        q: 'Why is changing your ATM PIN advisable if someone may have seen you type it?',
        options: [
          { text: 'Because ATMs only work with certain PINs', correct: false, why: 'Unrelated.' },
          { text: 'Because a PIN seen by another person can be used to withdraw money from your account', correct: true, why: 'Exactly right.' },
          { text: 'Because banks require annual PIN changes', correct: false, why: 'Not a standard requirement.' },
        ],
      },
      {
        q: 'A helpful stranger offering to "fix" an ATM that has retained your card is:',
        options: [
          { text: 'A common banking service', correct: false, why: 'Banks do not send people to help at ATMs.' },
          { text: 'A card-trapping attempt to get your PIN', correct: true, why: 'Exactly — a well-known fraud technique.' },
          { text: 'Harmless, if the machine is not working', correct: false, why: 'Never accept help from strangers at an ATM.' },
        ],
      },
      {
        q: 'Daily ATM withdrawal limits mainly help you by:',
        options: [
          { text: 'Increasing your interest earned', correct: false, why: 'Unrelated.' },
          { text: 'Capping how much can be taken out quickly if a card is compromised', correct: true, why: 'Exactly — it limits exposure.' },
          { text: 'Guaranteeing cash availability', correct: false, why: 'Limits do not guarantee availability.' },
        ],
      },
    ],
    takeaway: 'ATMs are convenient but expose your card and PIN. Shield the keypad, refuse help from strangers, keep withdrawal limits low, and change your PIN if it was seen.',
  },

  'l1-043': {
    id: 'l1-043',
    title: 'NEFT',
    subtitle: 'Batch-based bank transfers, mostly free',
    minutes: 3,
    blocks: [
      { kind: 'scene', name: 'payment-rail', caption: 'NEFT sits between instant small payments and large-value settlement.' },
      { kind: 'p', text: 'National Electronic Funds Transfer is a system that moves money between bank accounts across India. Transfers are batched rather than sent instantly, so the timing depends on when the batch is processed — usually within a few hours.' },
      { kind: 'table',
        caption: 'How NEFT works',
        headers: ['Step', 'What happens'],
        rows: [
          ['1', 'You give your bank the recipient\'s account number, IFSC code and amount'],
          ['2', 'Your bank checks the details and debits your account'],
          ['3', 'The transfer is queued into a settlement batch'],
          ['4', 'The recipient\'s bank credits the account, usually the same working day'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Why NEFT still matters when UPI exists',
        text: 'NEFT is essential for transfers where the recipient has no UPI — a landlord, a school, a government department, an NRI account. It also handles amounts far larger than a typical UPI payment, and it works as a backup when UPI apps are down.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'IFSC codes must be verified carefully',
        text: 'A fraudster can give you an IFSC code for a bank branch they control, and a similar-looking account name. Before sending a large amount by NEFT, verify the IFSC code with the recipient through a second channel — a phone call, not a message.',
      },
      {
        kind: 'table',
        caption: 'Choosing the right rail',
        headers: ['Rail', 'Minimum', 'Best use'],
        rows: [
          ['UPI', '₹0.01', 'Everyday payments'],
          ['IMPS', '₹1', 'Instant small transfers'],
          ['NEFT', '₹1', 'Salary, rent, vendor payments'],
          ['RTGS', '₹2,00,000', 'Large value transfers'],
        ],
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Always get the UTR',
        text: 'After any NEFT transfer, save the UTR (Unique Transaction Reference) number. It is the only proof that can settle a dispute if money does not arrive or arrives twice.',
      },
    ],
    quiz: [
      {
        q: 'NEFT differs from UPI mainly because it is:',
        options: [
          { text: 'Instant and 24×7', correct: false, why: 'That describes IMPS and UPI.' },
          { text: 'Batch-processed, so credit happens in settlement windows rather than instantly', correct: true, why: 'Exactly right.' },
          { text: 'Only for international transfers', correct: false, why: 'NEFT is domestic.' },
        ],
      },
      {
        q: 'Why verify the IFSC code through a phone call before a large NEFT?',
        options: [
          { text: 'Because banks require voice confirmation for transfers above ₹1 lakh', correct: false, why: 'No such rule exists.' },
          { text: 'Because a fraudster can supply details for an account they control, and a separate channel catches that', correct: true, why: 'Exactly right — verify out of band.' },
          { text: 'Because IFSC codes expire daily', correct: false, why: 'They do not expire.' },
        ],
      },
      {
        q: 'The UTR number after a NEFT transfer is useful because it:',
        options: [
          { text: 'Confirms your account balance', correct: false, why: 'It does not show balance.' },
          { text: 'Provides proof of the transaction if it is disputed or not received', correct: true, why: 'Correct — it is the settlement reference.' },
          { text: 'Guarantees the money cannot be reversed', correct: false, why: 'It is a reference, not a guarantee.' },
        ],
      },
    ],
    takeaway: 'NEFT is the batch-based transfer rail — essential for salary, rent and recipients without UPI. Verify IFSC codes out of band and always save the UTR.',
  },

  'l1-044': {
    id: 'l1-044',
    title: 'RTGS',
    subtitle: 'Large value transfers, settlement-based',
    minutes: 3,
    blocks: [
      { kind: 'scene', name: 'payment-rail', caption: 'RTGS is the large-value rail, from ₹2 lakh upwards.' },
      { kind: 'p', text: 'Real Time Gross Settlement moves larger sums between bank accounts. Unlike NEFT\'s batch model, RTGS settles transactions individually in near real time, which is why it is used for high-value transfers where certainty of timing matters.' },
      {
        kind: 'table',
        caption: 'RTGS key facts',
        headers: ['Feature', 'Detail'],
        rows: [
          ['Minimum amount', '₹2,00,000'],
          ['Upper limit', 'No upper limit'],
          ['Settlement', 'Gross, near real time'],
          ['Operating hours', 'Typically extended beyond NEFT windows'],
          ['Typical use', 'Property, large corporate, high-value personal transfers'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: '"Gross" and "net" explained simply',
        text: 'A gross system settles each transaction fully and individually, so if ₹5 crore is sent, ₹5 crore moves right away. A net system would first net off what each party owes the other and move only the difference — faster, but it means money is not always in your account immediately.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'The big-transfer risk is verification, not the rail',
        text: 'Because RTGS transfers are usually large and irreversible in practice, the fraud is almost always upstream: a wrong account number, a wrong IFSC, or a spoofed request from someone you trust. For any large transfer, verify verbally and never act on instructions received only in a message.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'A practical rule for large transfers',
        text: 'Use the test-transfer method for unfamiliar payees: send ₹1 or ₹100 first, confirm it landed, then send the balance. This costs almost nothing and catches wrong-account errors immediately.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Never act on a payment request received by message or call alone.',
          'Confirm the account number digit by digit, reading it back.',
          'Keep the UTR and a screenshot of the confirmation for every large transfer.',
          'Use a different rail if the amount is below ₹2 lakh — RTGS adds no value.',
        ],
      },
    ],
    quiz: [
      {
        q: 'The minimum amount for an RTGS transfer is:',
        options: [
          { text: '₹1', correct: false, why: 'That is the minimum for IMPS and NEFT.' },
          { text: '₹2,00,000', correct: true, why: 'Correct.' },
          { text: '₹50,000', correct: false, why: 'Not the RTGS threshold.' },
        ],
      },
      {
        q: 'RTGS is described as a "gross settlement" system, meaning:',
        options: [
          { text: 'Each transaction settles fully and individually rather than netting against other obligations', correct: true, why: 'Exactly right.' },
          { text: 'Fees are deducted before transfer', correct: false, why: 'Unrelated to gross settlement.' },
          { text: 'Transfers are free of charge', correct: false, why: 'Fees may apply to some accounts.' },
        ],
      },
      {
        q: 'For a large transfer to an unfamiliar payee, the safest method is:',
        options: [
          { text: 'Send the full amount immediately to save time', correct: false, why: 'Risky if details are wrong.' },
          { text: 'Send a small test amount first, confirm receipt, then send the balance', correct: true, why: 'Exactly right — it catches wrong-account errors.' },
          { text: 'Split the amount across two days without verifying', correct: false, why: 'Splitting does not correct wrong details.' },
        ],
      },
    ],
    takeaway: 'RTGS handles ₹2 lakh and above with gross, near-real-time settlement. Large-transfer risk is verification, so confirm verbally and test-send first.',
  },
}