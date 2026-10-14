import type { Chapter } from '../../types'

/** Level 1, chapters 51–56: recognising and preventing fraud. */
export const scams: Record<string, Chapter> = {
  'l1-051': {
    id: 'l1-051',
    title: 'Financial Scams',
    subtitle: 'The patterns behind almost every fraud',
    minutes: 5,
    blocks: [
      { kind: 'scene', name: 'scam-hook', caption: 'The bait almost always involves urgency, authority or an unexpected reward.' },
      { kind: 'p', text: 'Financial fraud in India runs on a small number of repeatable patterns. Once you know the patterns, most attempts become obvious — because the fraudster is running a script, and the script rarely changes.' },
      {
        kind: 'table',
        caption: 'The common fraud patterns',
        headers: ['Pattern', 'The hook', 'The tell'],
        rows: [
          ['KYC / account update fraud', '"Your account will be blocked"', 'Bank never asks for KYC over a link'],
          ['OTP fraud', '"Share the OTP to verify"', 'Nobody legitimate asks for an OTP'],
          ['Fake customer care', '"Call this number to fix your account"', 'Real banks never run helplines through ads'],
          ['Investment / trading scam', '"Guaranteed 40% returns"', 'Guaranteed high returns do not exist'],
          ['Job or task scam', '"Pay ₹5,000 to start earning"', 'You are asked to pay to earn'],
          ['Lottery / prize', '"You have won"', 'Unearned prizes always require a fee'],
          ['Loan harassment', 'Calls offering instant personal loans', 'Unsolicited offers of easy credit'],
          ['Fake social ads', 'Deepfake celebrity endorsements', 'Verify on official channels'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'The universal structure of financial fraud',
        text: 'Nearly every financial scam follows four steps: create a hook (prize, refund, KYC threat, guaranteed returns), build false authority (bank officer, government department, celebrity), create urgency (a deadline or a limited window), and then request either credentials or an advance payment. Recognise the steps and the script stops working.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'No bank, government department or company ever asks for an OTP, PIN, or password. Ever.',
          'No legitimate investment guarantees a specific return.',
          'No genuine prize requires you to pay a fee first.',
          'Any job that asks you to pay money to start is a scam.',
          'Verify independently — use the official app or the number printed on your card, never a number from the message.',
        ],
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'If it has happened to you',
        text: 'Act fast but calmly: call your bank immediately to freeze accounts and cards, then report to 1930 (the cybercrime helpline) and file a complaint on cybercrime.gov.in. Speed matters — money moved to a wrong account can sometimes be frozen before it is withdrawn. Do not be embarrassed; reporting helps others and improves your own recovery chances.',
      },
      { kind: 'sim', name: 'scam-spotter', caption: 'Read seven realistic scam messages and hunt the red flags before the answer is revealed.' },
    ],
    quiz: [
      {
        q: 'Which of these is a guaranteed sign of a financial scam?',
        options: [
          { text: 'The message mentions a bank', correct: false, why: 'Scammers impersonate banks constantly.' },
          { text: 'The message asks for an OTP, PIN or password, or asks you to pay a fee to receive money', correct: true, why: 'Exactly right — these have no legitimate purpose.' },
          { text: 'The message is written in English', correct: false, why: 'Language is not an indicator.' },
        ],
      },
      {
        q: 'The four steps of most financial scams are:',
        options: [
          { text: 'Hook, false authority, urgency, then request for credentials or payment', correct: true, why: 'Exactly the sequence to watch for.' },
          { text: 'Advertisement, discount, delivery, and refund', correct: false, why: 'That is an ordinary shopping flow.' },
          { text: 'Application, screening, interview and offer', correct: false, why: 'That is a hiring process.' },
        ],
      },
      {
        q: 'You realise you have been scammed. The best first step is to:',
        options: [
          { text: 'Wait a few days to see if the amount is reversed', correct: false, why: 'Delay usually kills recovery chances.' },
          { text: 'Contact your bank immediately to freeze the accounts, then report to 1930 and cybercrime.gov.in', correct: true, why: 'Exactly right — speed is critical.' },
          { text: 'Post about it on social media to warn others', correct: false, why: 'Helpful later, but reporting to the bank comes first.' },
        ],
      },
    ],
    takeaway: 'Almost every financial scam runs the same four steps. Learn to spot the pattern, never share an OTP or PIN, and if you are hit, call your bank and 1930 immediately.',
  },

  'l1-052': {
    id: 'l1-052',
    title: 'OTP Scams',
    subtitle: 'The six digits that can empty an account',
    minutes: 4,
    blocks: [
      { kind: 'p', text: 'A One-Time Password is a short code your bank sends to confirm a specific transaction. Its entire design rests on one assumption: only you should be able to act on it. Every OTP scam works by getting you to act on someone else\'s behalf.' },
      { kind: 'h', text: 'How OTP fraud works' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'The fraudster initiates a transaction on your account — a UPI collect request, a card-on-file payment, or a money transfer.',
          'Your bank sends the OTP to your phone.',
          'The fraudster calls or messages you claiming to be from the bank, a delivery company or an "officer", and asks for the OTP "to verify" or "to cancel" the transaction.',
          'You read out the OTP. The transaction completes, and the money is gone.',
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'The framing trick',
        text: 'Fraudsters rarely say "give me your OTP". They say "share the OTP so I can cancel this fraudulent transaction", or "we need it to verify your account", or "do not share this with anyone". The last phrase is used deliberately — because if you do not say it out loud, you feel you are breaking a rule.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Your OTP belongs to you, alone',
        text: 'Your bank will never call you to ask for an OTP, PIN, or CVV. Not for verification, not for cancellation, not for "security". If someone asks, it is a scam — and knowing this sentence is enough to defeat the entire category.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'If you already read out an OTP',
        text: 'Call your bank immediately and freeze your cards and UPI. Report to 1930. Speed genuinely matters — accounts are often frozen before the money is withdrawn. Do not wait to see if you "notice" something wrong, because by then the money has usually moved twice.',
      },
      {
        kind: 'sim', name: 'scam-spotter', caption: 'Practise spotting OTP-based fraud in realistic messages before it happens to you.' },
    ],
    quiz: [
      {
        q: 'An OTP is designed to be used by:',
        options: [
          { text: 'The person who initiated the transaction, acting for themselves', correct: true, why: 'Correct — an OTP authorises one specific action by you.' },
          { text: 'Bank customer support, to verify your identity', correct: false, why: 'Support never asks for an OTP.' },
          { text: 'Anyone calling from the bank', correct: false, why: 'That is exactly the assumption scammers exploit.' },
        ],
      },
      {
        q: 'A caller says, "Share the OTP so I can cancel this fraudulent transaction." What should you do?',
        options: [
          { text: 'Share it, since they are stopping a fraud', correct: false, why: 'This is the framing trick that defines OTP fraud.' },
          { text: 'Refuse and end the call — no bank asks for an OTP, and the "fraud" is usually being caused by the caller', correct: true, why: 'Exactly right.' },
          { text: 'Ask them to call back in an hour', correct: false, why: 'Delay does not help; end the call and verify via the official app.' },
        ],
      },
      {
        q: 'You already shared an OTP with someone. What is the priority?',
        options: [
          { text: 'Wait for the transaction to appear and then complain', correct: false, why: 'Delay destroys recovery chances.' },
          { text: 'Immediately call the bank to freeze cards and UPI, and report to 1930', correct: true, why: 'Exactly right — speed matters.' },
          { text: 'Change only your net banking password', correct: false, why: 'An OTP authorises transactions directly; freezing is what stops them.' },
        ],
      },
    ],
    takeaway: 'An OTP authorises one specific action by you alone. No bank ever asks for it — refuse, end the call, and if you already shared one, freeze your accounts immediately.',
  },

  'l1-053': {
    id: 'l1-053',
    title: 'Phishing',
    subtitle: 'Fraud dressed as something you trust',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'phishing-hook', caption: 'The domain is where phishing succeeds — read every character.' },
      { kind: 'p', text: 'Phishing is a message designed to look like it comes from a trusted source so you will act on it. In finance, phishing aims at one of three things: your credentials, an OTP, or a payment approval.' },
      {
        kind: 'table',
        caption: 'Where the fake domain hides',
        headers: ['Looks like', 'Actually', 'Trick'],
        rows: [
          ['hdfcbank.com', 'hdfcbank-secure.xyz', 'Extra word before the real domain'],
          ['rbi.org.in', 'rbi-kyc-update.info', 'Hyphenated lookalike'],
          ['incometax.gov.in', 'incometax.gov.in.verify.tk', 'Real domain used as a subdomain'],
          ['amazon.in', 'amazonn-sale.com', 'Extra letter'],
          ['Your bank app', 'A page inside the browser', 'No real app store, no icon'],
        ],
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Read the domain character by character, from the last dot backwards.',
          'Never click links in emails, SMS or WhatsApp for anything financial — navigate to the app yourself.',
          'Check for HTTPS, but understand it only proves encryption, not honesty.',
          'Be most suspicious of urgency: "your account will be closed in 2 hours".',
          'Enable two-factor authentication on email — it is the account everything else resets through.',
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Phishing works through your email first',
        text: 'Your email address is the master reset. A fraudster who controls it can reset your bank password, your UPI PIN, and everything else. This is why email security — a strong unique password plus two-factor authentication — protects your finances more broadly than any individual banking precaution.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Links in search results',
        text: 'Paid advertisements appear above organic search results for popular banking searches. These ads are a known phishing route. Type the bank\'s address into your browser directly, or use your existing bookmark or app, rather than clicking through search.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'The one-second test',
        text: 'If a message creates urgency, mentions an account problem, and includes a link — assume phishing until verified. Verify by opening the app yourself, never by replying to the message.',
      },
    ],
    quiz: [
      {
        q: 'The most reliable way to detect a phishing link is to:',
        options: [
          { text: 'Check that the page has HTTPS', correct: false, why: 'Phishing sites can have valid HTTPS certificates.' },
          { text: 'Read the actual domain character by character', correct: true, why: 'Exactly right — the domain is the giveaway.' },
          { text: 'Check how professional the email looks', correct: false, why: 'Phishing emails are often highly polished.' },
        ],
      },
      {
        q: 'Why is securing your email especially important for financial safety?',
        options: [
          { text: 'Because banks send OTPs by email', correct: false, why: 'They generally do not.' },
          { text: 'Because email is usually the master account used to reset everything else', correct: true, why: 'Exactly right — email resets your banking passwords.' },
          { text: 'Because phishing emails are forwarded automatically', correct: false, why: 'Not how it works.' },
        ],
      },
      {
        q: 'You receive "your account will be closed in 2 hours, click here to update KYC". The best response is to:',
        options: [
          { text: 'Click the link quickly to avoid the deadline', correct: false, why: 'That is exactly the trap.' },
          { text: 'Ignore the link, open your banking app directly, and check whether any action is actually required', correct: true, why: 'Exactly right — verify independently.' },
          { text: 'Forward it to your bank to ask if it is real', correct: false, why: 'Forwarding can spread it; open the app instead.' },
        ],
      },
    ],
    takeaway: 'Phishing succeeds through urgency and lookalike domains. Read the domain character by character, never click financial links, and secure your email first.',
  },

  'l1-054': {
    id: 'l1-054',
    title: 'Fake Customer Care',
    subtitle: 'When the help you called found you first',
    minutes: 4,
    blocks: [
      { kind: 'p', text: 'Fake customer care exploits a genuine instinct: when something goes wrong with an account, you want someone to fix it. Fraudsters create fake helplines through search ads and sponsored results, so searching "HDFC customer care number" can put you directly in a fraudster\'s call centre.' },
      { kind: 'h', text: 'The pattern' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'A sponsored search result advertises an official-looking helpline for your bank.',
          'You call, and a trained agent confirms your bank\'s name and details, which makes them sound legitimate.',
          'They ask for your OTP, card number, CVV or UPI PIN under the guise of "verification".',
          'They repeat the password or OTP back, which sounds like proof of authenticity — but it proves nothing.',
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Repeating your OTP back proves nothing',
        text: 'A common trick is to ask you to read the OTP and then "confirm" it. Hearing your own number repeated feels like security. It is not — the fraudster has already used it, and the call is theatre.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'The correct way to reach your bank',
        text: 'Use the number printed on your card or statement, the number in the official app, the number on your passbook, or walk into a branch. Save that number in your phone when you are not under pressure, so you never have to search for it in a moment of stress.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Never use a number from an advertisement, search result or message.',
          'Never allow screen sharing or remote access on a call claiming to be support.',
          'Bank staff will never ask for your CVV — anyone who does is a fraudster.',
          'If in doubt, hang up and call the bank yourself using a number you already had.',
        ],
      },
      { kind: 'sim', name: 'scam-spotter', caption: 'Test your recognition against fake-support-style messages before you need it.' },
    ],
    quiz: [
      {
        q: 'Why is searching for a bank\'s customer care number risky?',
        options: [
          { text: 'Because the number may be busy', correct: false, why: 'Convenience is not the risk.' },
          { text: 'Because sponsored ads can place a fraudster\'s fake helpline at the top of the results', correct: true, why: 'Exactly right.' },
          { text: 'Because banks do not publish numbers', correct: false, why: 'They do publish them, on cards and statements.' },
        ],
      },
      {
        q: 'A fake support agent asks you to read your OTP and confirm it back to them. Why is repeating it not a safety check?',
        options: [
          { text: 'Because OTPs change every minute', correct: false, why: 'That is true but not the reason.' },
          { text: 'Because the agent has already used the OTP; the repetition is theatre, not verification', correct: true, why: 'Exactly right.' },
          { text: 'Because OTPs are read-only', correct: false, why: 'They are transaction authorisations.' },
        ],
      },
      {
        q: 'Which number should you use to contact your bank?',
        options: [
          { text: 'The one in the advertisement that appears first in search', correct: false, why: 'That may be the fraudster.' },
          { text: 'The one printed on your card or shown in the official app', correct: true, why: 'Exactly right.' },
          { text: 'The one in the SMS you received', correct: false, why: 'Never trust a number supplied by the message.' },
        ],
      },
    ],
    takeaway: 'Fake helplines sit at the top of search results and sound convincing. Always reach your bank using a number you already had — printed on your card or in the official app.',
  },

  'l1-055': {
    id: 'l1-055',
    title: 'UPI Scams',
    subtitle: 'The biggest payment fraud in India',
    minutes: 5,
    blocks: [
      { kind: 'p', text: 'UPI fraud is now the most common form of financial fraud in India, and it works almost entirely through one mechanism: getting you to enter your UPI PIN on a page you should not be on, or approve a collect request you did not initiate.' },
      {
        kind: 'table',
        caption: 'The main UPI fraud patterns',
        headers: ['Scam', 'How it works', 'Defence'],
        rows: [
          ['Fake QR code', 'A tampered QR sends money to the fraudster\'s account', 'Verify the payee name shown before approving'],
          ['Collect request scam', 'Fraudster sends a collect request and you approve it', 'Approve only requests you initiated yourself'],
          ['"Cashback" / refund scam', 'You receive a small real refund, then are asked for your UPI ID "to reverse" it', 'Legitimate refunds need no UPI ID or PIN'],
          ['Fake lottery / task', 'Pay a small amount to "unlock" a large prize', 'Nobody pays you to win'],
          ['Screen-share fraud', 'Fraudster guides you while watching your screen', 'Never allow remote access or screen sharing'],
          ['Fake merchant QR', 'A sticker in a shop replaced with a fraudster\'s code', 'Check the payee name before approving'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Check the payee name, every time',
        text: 'Before approving a UPI payment, the app shows the name linked to the receiving account. If you expected a specific shop and see a different name, stop. This single check defeats a large share of QR tampering, because tampered codes send money to an account with an unrelated name.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'The genuine-refund trap',
        text: 'Fraudsters now send a real ₹10 or ₹50 refund to your account. It genuinely arrives. Then they message saying the refund failed and asking for your UPI ID or PIN to "return" the money. The refund already worked. No bank needs your UPI ID or PIN to process a refund.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'UPI PIN is only for paying',
        text: 'Your UPI PIN authorises money leaving your account. It is never needed to receive money, never needed to "verify" your identity, and never needed by a bank employee. If a screen asks for it while you are expecting to receive something, it is hostile.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Turn off one-tap UPI payments so every transaction requires your PIN.',
          'Verify the payee name against who you intended to pay.',
          'Never install banking apps from links or app advertisements.',
          'Keep transaction alerts on and check the same evening.',
          'Report to 1930 and cybercrime.gov.in, and call your bank immediately if something is wrong.',
        ],
      },
      { kind: 'sim', name: 'scam-spotter', caption: 'Work through seven realistic messages and identify the fraud pattern in each.' },
    ],
    quiz: [
      {
        q: 'You receive a genuine ₹50 refund, then are asked for your UPI ID to "complete" the refund. What is happening?',
        options: [
          { text: 'A genuine technical issue requiring your details', correct: false, why: 'No bank requires this.' },
          { text: 'The "cashback" scam — the money already arrived, and they now want your UPI ID or PIN to steal more', correct: true, why: 'Exactly right — a real small payment is used to build trust.' },
          { text: 'A bank policy change', correct: false, why: 'Not a policy.' },
        ],
      },
      {
        q: 'Your UPI app shows a payee name before you approve a payment. Why does this matter?',
        options: [
          { text: 'It confirms the payment will succeed', correct: false, why: 'It confirms nothing about the balance.' },
          { text: 'Because a tampered QR or fake request will usually show a name that does not match your intended payee', correct: true, why: 'Exactly right — check it every time.' },
          { text: 'It speeds up the transfer', correct: false, why: 'Unrelated.' },
        ],
      },
      {
        q: 'When is a UPI PIN legitimately required?',
        options: [
          { text: 'When receiving money from someone', correct: false, why: 'Never.' },
          { text: 'When you are paying and authorising the payment yourself', correct: true, why: 'Correct — only for outgoing payments.' },
          { text: 'When verifying your bank account details', correct: false, why: 'Never.' },
        ],
      },
    ],
    takeaway: 'UPI fraud works by stealing your PIN or tricking you into approving a request. Check the payee name, only pay what you initiated, and remember no refund ever needs your UPI ID.',
  },

  'l1-056': {
    id: 'l1-056',
    title: 'Basic Cybersecurity',
    subtitle: 'Your money now lives behind a password',
    minutes: 5,
    blocks: [
      { kind: 'scene', name: 'shield', caption: 'Four habits — password manager, 2FA on email, screen lock, alerts — stop most account takeovers.' },
      { kind: 'p', text: 'Banking is digital, so basic cybersecurity is now basic financial hygiene. Most account takeovers start with a weak password reused across sites, or with a phone that nobody has locked. These are the fundamentals that prevent the overwhelming majority of financial loss.' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Use a unique, long password for every financial account. Use a password manager — reuse is the single biggest risk.',
          'Turn on two-factor authentication, especially for email, which is the master reset account.',
          'Lock your phone with a PIN or biometric, and never install banking apps from links.',
          'Keep your banking app, phone and email on separate devices where practical.',
          'Update your phone and apps automatically — banking apps are a prime target for malware.',
          'Never share an OTP, PIN, CVV or password with anyone, including someone claiming to be from a bank.',
        ],
      },
      {
        kind: 'table',
        caption: 'Threats and what actually helps',
        headers: ['Threat', 'What actually helps'],
        rows: [
          ['Password reuse', 'A password manager, unique passwords'],
          ['Phishing', 'Never click financial links; navigate to the app yourself'],
          ['Lost phone', 'Screen lock plus remote wipe, minimal stored banking data'],
          ['SIM swap', 'Carrier-level PIN and a bank-registered number you can update'],
          ['Malware', 'Only official app stores, no APKs from links'],
          ['Public Wi-Fi banking', 'Use mobile data or a trusted VPN'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'The cheapest protection with the largest effect',
        text: 'Two-factor authentication on your email account prevents more account takeovers than every other measure combined. Anyone who controls your email can reset your bank password. Everyone who takes over a bank account almost certainly started with email.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Public Wi-Fi',
        text: 'Avoid banking on free public Wi-Fi at airports, cafés and hotels. If you must, use your mobile data or a trusted VPN. On an untrusted network, someone can intercept or redirect traffic on an unsecured connection.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Set up these four things tonight',
        text: 'Unique passwords in a password manager, 2FA on email, a screen lock on your phone, and transaction alerts on your bank. Under twenty minutes, and it prevents the vast majority of financial fraud attempts.',
      },
    ],
    quiz: [
      {
        q: 'Which account most needs two-factor authentication for financial protection?',
        options: [
          { text: 'Your email account', correct: true, why: 'Correct — email is the master reset for everything else.' },
          { text: 'A shopping app', correct: false, why: 'Less critical, though still advisable.' },
          { text: 'Your television', correct: false, why: 'Not related to money.' },
        ],
      },
      {
        q: 'Why is reusing one password across financial accounts dangerous?',
        options: [
          { text: 'Banks reject duplicate passwords', correct: false, why: 'They do not.' },
          { text: 'A breach at any one site then exposes every account where you used the same password', correct: true, why: 'Exactly right — reuse multiplies one breach into many.' },
          { text: 'Passwords expire when reused', correct: false, why: 'Not how passwords work.' },
        ],
      },
      {
        q: 'Should you bank on free public Wi-Fi?',
        options: [
          { text: 'Yes, modern encryption makes it fully safe', correct: false, why: 'Encryption helps but untrusted networks remain risky.' },
          { text: 'Preferably not — use mobile data or a trusted VPN for financial transactions', correct: true, why: 'Exactly right.' },
          { text: 'Yes, if the site shows HTTPS', correct: false, why: 'HTTPS alone does not make an untrusted network safe.' },
        ],
      },
    ],
    takeaway: 'Basic cybersecurity is now financial hygiene: unique passwords, 2FA on email, a locked phone and transaction alerts. Those four things stop most account takeovers.',
  },
}