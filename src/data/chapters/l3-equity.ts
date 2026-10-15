import type { Chapter } from '../../types'

/**
 * Level 3, chapters 21–35: the equity market, end to end.
 *
 * Written for an Indian reader who will actually open a broker app: every
 * chapter names real instruments, real institutions (SEBI, NSE, BSE, NSDL,
 * CDSL) and real Indian market events, so the concepts attach to something
 * that can be looked up on the exchange website afterwards.
 */
export const equity: Record<string, Chapter> = {
  'l3-021': {
    id: 'l3-021',
    title: 'Stocks',
    subtitle: 'Owning a slice of a business, not a lottery ticket',
    minutes: 8,
    blocks: [
      { kind: 'scene', name: 'share-slice', caption: 'One company cut into crores of identical slices. Buy a few slices and you own a few of them.' },
      { kind: 'p', text: 'A stock (an equity share) is a unit of ownership in a company. When you buy one share of Infosys or ITC, you become a part-owner of that business — its factories, its brand, its profits and its problems — in proportion to how many shares you hold. You do not own a number that moves on a screen; you own a fraction of a real enterprise, and the number on the screen is simply what someone else is willing to pay for that fraction today.' },
      {
        kind: 'p',
        text: 'That single idea separates investing from gambling. A gambler buys the screen. An investor buys a slice of a business and then waits while the business earns money for him.',
      },
      {
        kind: 'table',
        caption: 'What one share actually gives you',
        headers: ['Right', 'What it means in practice'],
        rows: [
          ['Claim on profit', 'You get a dividend when the board decides to share profits'],
          ['A vote', 'One share, one vote on resolutions at the annual general meeting'],
          ['Information', 'The company must publish quarterly results and an annual report you can read'],
          ['Rights issue', 'You can usually subscribe to new shares before outsiders can'],
          ['Buyback participation', 'You can usually tender shares when the company buys its own back'],
          ['Limited liability', 'You cannot lose more than the money you put in — lenders cannot come after you'],
        ],
      },
      {
        kind: 'table',
        caption: 'The Nifty 50 is the list of businesses most Indian investors already know',
        headers: ['Family name', 'What the company mostly does'],
        rows: [
          ['Reliance Industries', 'Oil, telecom (Jio), retail'],
          ['HDFC Bank, ICICI Bank, SBI, Axis Bank', 'Banking'],
          ['TCS, Infosys, HCLTech, Wipro', 'IT services exported to the world'],
          ['Hindustan Unilever, ITC, Nestlé India, Britannia', 'FMCG — the brands in your kitchen'],
          ['Bharti Airtel', 'Telecom'],
          ['Larsen & Toubro', 'Infrastructure and engineering'],
          ['Maruti Suzuki, Tata Motors, Bajaj Auto, M&M', 'Automobiles'],
          ['Sun Pharma, Cipla, Dr Reddy’s, Apollo Hospitals', 'Healthcare'],
          ['Asian Paints, Titan, Bajaj Finance', 'Consumption and lending'],
          ['Power Grid, NTPC, ONGC, Coal India', 'Energy and utilities'],
        ],
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'You already own the Nifty 50 if you hold an index fund',
        text: 'A Nifty 50 index fund buys these fifty companies in the same proportion as the index, which is why one ₹500 SIP quietly makes you a part-owner of Reliance, HDFC Bank, Infosys, ITC and forty-six others. It is the cheapest legal way to own a slice of the whole Indian economy.',
      },
      {
        kind: 'table',
        caption: 'Where an equity investor’s money comes from',
        headers: ['Source', 'How it reaches you', 'Is it guaranteed?'],
        rows: [
          ['Price appreciation', 'You sell a share for more than you paid', 'No'],
          ['Dividends', 'Cash credited to your bank account', 'Only once declared'],
          ['Buybacks', 'Company buys your shares at a set price', 'No'],
          ['Bonus shares', 'Extra free shares, price adjusts down — no new value', 'No'],
          ['Rights issue', 'Chance to buy more, usually below market', 'No'],
          ['Demat/off-market transfer', 'Gifting or inheritance, tax rules apply', '—'],
        ],
      },
      {
        kind: 'example',
        title: 'Two IPOs, two very different first days',
        text: 'In May 2022 the Government sold 3.5% of LIC in India’s largest ever IPO — ₹20,557 crore raised, retail portion oversubscribed several times. It listed at roughly 8% below the issue price, so anyone who bought on listing-day euphoria and sold in panic lost money on a business that was perfectly healthy. Months earlier, Paytm’s 2021 IPO listed about 27% below its issue price — the largest listing-day loss for a big Indian issue up to then. Meanwhile Zomato’s 2021 listing opened at a strong premium. The lesson is not that IPOs are bad: it is that a listing-day price tells you about demand on one morning, not about the business.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Equity is the asset class most likely to halve',
        text: 'The Sensex fell from about 21,000 in January 2008 to below 8,000 in October 2008 — a fall of roughly 60%. In early 2020 it lost about 38% in under two months. Both times it went on to make new highs, but only for people who did not have to sell. Assume a 40–50% fall is possible at any time you own shares.',
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Long term means business, not chart',
        text: 'If you cannot explain in one sentence how a company makes money, you are not investing in it — you are renting its ticker. The four questions worth asking: what does it sell, to whom, at what margin, and how much debt does it carry?',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Start with an index fund or a large-cap fund rather than a single stock — you will learn the same lessons with a fraction of the risk.',
          'If you do buy a stock, size it small: a position you can lose entirely without changing your life.',
          'Read the last two annual reports before adding to it.',
          'Write down why you bought it. That single sentence is what stops you selling because a chart turned red.',
        ],
      },
      { kind: 'sim', name: 'market', caption: 'Run a bull, bear and crash and watch what owning a stock really does to your money.' },
      {
        kind: 'terms',
        items: [
          { term: 'Equity share', meaning: 'A unit of ownership in a company, carrying a claim on residual profits, a vote and limited liability. You are paid last if the business fails.' },
          { term: 'Initial public offering (IPO)', meaning: 'The first sale of shares to the public. The listing-day price tells you about demand that morning, not about the quality of the business.' },
          { term: 'Buyback', meaning: 'A company buying back its own shares, which reduces the share count so each remaining share owns more. TCS has run some of India\'s largest buybacks.' },
          { term: 'Rights issue', meaning: 'An offer of new shares first to existing owners, usually at a discount. Reliance\'s 2020 issue raised about ₹53,124 crore — India\'s largest — and ignoring it dilutes your stake.' },
          { term: 'Bonus issue', meaning: 'Free extra shares given in proportion to what you hold. The share count rises and the price falls by the same proportion: your holding is worth exactly the same.' },
          { term: 'Securities Transaction Tax (STT)', meaning: 'The tax paid on every exchange trade of listed equity (0.1% on delivery, both sides). It is collected through your broker and shown on the contract note.' },
        ],
      },
    ],
    quiz: [
      {
        q: 'You buy 10 shares of a company. What have you actually acquired?',
        options: [
          { text: 'A loan to the company that pays fixed interest', why: 'That is a bond or debenture. Equity has no fixed payment attached to it.' },
          { text: 'A proportional ownership stake in the business', correct: true, why: 'You own a fraction of the enterprise — its assets, its profits and its voting rights in that proportion.' },
          { text: 'A promise that the price will rise', why: 'Nothing in the market promises a higher price; only the business performance and the price others will pay decide that.' },
          { text: 'A priority claim over lenders on the company’s assets', why: 'It is the opposite: equity holders are paid last, after every lender and creditor.' },
        ],
      },
      {
        q: 'LIC’s 2022 IPO was India’s largest ever, yet it listed below its issue price. What is the right conclusion?',
        options: [
          { text: 'IPOs are always bad investments', why: 'Too absolute. Many IPOs do well; the point is that listing-day demand is not a quality signal.' },
          { text: 'A large, heavily subscribed IPO can still list below issue price, so subscribe on the business, not the hype', correct: true, why: 'Size and oversubscription measure demand at a single moment. The business and the price you pay are what decide your return.' },
          { text: 'The government should not list companies', why: 'The disinvestment programme is a policy question, unrelated to what a beginner should conclude about IPO pricing.' },
          { text: 'Retail investors are barred from large IPOs', why: 'Nothing of the sort — retail has a reserved portion in every mainboard IPO.' },
        ],
      },
      {
        q: 'Which of these is NOT a way a shareholder gets paid?',
        options: [
          { text: 'Dividends', why: 'This genuinely is one — cash paid out of profits, credited to your bank account.' },
          { text: 'Buyback', why: 'Real too — the company buys shares back, often at a premium to the market.' },
          { text: 'Fixed monthly interest on your investment', correct: true, why: 'Equity pays nothing on a schedule. Coupons belong to bonds; a shareholder is paid only when the business decides to.' },
          { text: 'Selling the share at a higher price', why: 'That is the main source of equity returns over the long run.' },
        ],
      },
      {
        q: 'The Sensex fell roughly 60% between January and October 2008. What does that tell you about holding only stocks?',
        options: [
          { text: 'Equity is unsuitable for anyone', why: 'Far too strong. Over long periods Indian equity has been the best-performing asset class — the point is the size of the fall and who can survive it.' },
          { text: 'You should plan for falls of this size and hold enough outside equity to avoid being a forced seller', correct: true, why: 'Crashes are not anomalies to be avoided; they are a known feature to be survived. That is what an emergency fund and a debt allocation are for.' },
          { text: 'You should sell everything when the index falls 10%', why: 'Selling into a fall locks in the loss and guarantees you miss the recovery.' },
          { text: 'The index will never fall again', why: 'It fell again in 2020 and has fallen many times in between.' },
        ],
      },
    ],
    takeaway: 'A stock is a slice of a real business: you are paid when it earns, you are last in line if it fails, and the price can halve for reasons that have nothing to do with you. Own the business case, not the ticker.',
  },

  'l3-022': {
    id: 'l3-022',
    title: 'Shares',
    subtitle: 'The unit of ownership and how it is measured',
    minutes: 6,
    blocks: [
      { kind: 'scene', name: 'share-slice', caption: 'A share is a unit — you buy whole units, and the price of a unit is what a buyer and seller agree on.' },
      { kind: 'p', text: 'A share is the unit in which ownership is counted. A company divides itself into a fixed number of shares; each share is identical to every other share of the same class. Two numbers matter and beginners often confuse them: the face value, a bookkeeping figure such as ₹1, ₹2, ₹5 or ₹10, and the market price, which is what someone will pay for it today and has almost nothing to do with the face value.' },
      {
        kind: 'formula',
        label: 'The identity that ties a company to its shares',
        expr: 'Market capitalisation = market price per share × number of shares outstanding',
        note: 'A ₹1,500 price with 100 crore shares means a company valued at ₹1.5 lakh crore. Price alone tells you nothing — the number of shares decides the size.',
      },
      {
        kind: 'table',
        caption: 'Face value versus market price, with real Indian examples',
        headers: ['Company', 'Typical face value', 'What the market price reflects'],
        rows: [
          ['Reliance Industries', '₹10', 'Oil, Jio and retail earnings, and the market’s view of them'],
          ['Infosys', '₹5', 'IT services revenue, client spending, visa costs, buybacks'],
          ['ITC', '₹1', 'Cigarette volumes, FMCG growth, dividend policy'],
          ['Suzlon Energy', '₹2', 'A loss-making history, a recovery, and heavy dilution over the years'],
        ],
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'India is a whole-unit market',
        text: 'You cannot buy 0.4 of a Reliance share on the NSE or BSE — the cash market trades in whole shares, with a tick size of ₹0.05 for most scrips, and a market lot only in the derivatives segment. That is one reason systematic investing is easy through mutual funds (any amount from ₹100) and clumsy through direct stocks.',
      },
      {
        kind: 'example',
        title: '₹10,000 into two very different shares',
        text: 'Take a large-cap trading at ₹1,000: ₹10,000 buys 10 shares. Take a small-cap trading at ₹16: ₹10,000 buys 625 shares. Both positions are ₹10,000 of ownership, but the second can lose 40% of its value in a week while the first barely moves. Nominal price is not risk — but it does bend the psychology of beginners, who are far more willing to gamble on a ₹16 share than on a ₹1,000 one.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Bonus and split change the count, not the value',
        text: 'When a company gives a 1:1 bonus or splits ₹10 into ₹2, your share count rises and the price falls in proportion. Your holding is worth exactly the same the minute after. It is bookkeeping, not a windfall — but it does improve liquidity and make the share feel more affordable.',
      },
      {
        kind: 'list',
        items: [
          'Two classes exist: ordinary equity (everything here) and preference shares, which pay a fixed dividend ahead of equity but usually carry no vote.',
          'Listed means the shares trade on an exchange; unlisted (like NSE itself for years, or most Indian startups) means you cannot casually buy or sell them.',
          'Every Indian demat holding carries an ISIN, a 12-character code that identifies the security across both depositories — the same Reliance share has the same ISIN whether you hold it with NSDL or CDSL.',
        ],
      },
      { kind: 'sim', name: 'market', caption: 'Test how a share’s price moves when market sentiment changes — and what that means for the value of your units.' },
      {
        kind: 'terms',
        items: [
          { term: 'ISIN', meaning: 'The 12-character code that identifies a security in India. The same share has the same ISIN whether you hold it with NSDL or CDSL, or at any broker.' },
          { term: 'Tick size', meaning: 'The smallest permitted price movement, usually ₹0.05 for Indian equity. Two buyers cannot quote a smaller difference than a tick.' },
          { term: 'Free float', meaning: 'The proportion of a company\'s shares actually available to outside investors, excluding promoter and locked-in holdings. Index weights are based on free float, not total market value.' },
          { term: 'Preference share', meaning: 'A class of share that pays a fixed dividend ahead of ordinary equity but usually carries no voting rights, and ranks above equity if the company is wound up.' },
          { term: 'Share split', meaning: 'A change in face value that multiplies the number of shares and divides the price, so the holding is worth the same. It is bookkeeping, not a windfall.' },
        ],
      },
    ],
    quiz: [
      {
        q: 'A company with ₹1 face value shares trades at ₹250. What does the ₹1 tell you?',
        options: [
          { text: 'The company is worth ₹1 per share', why: 'Face value is a bookkeeping entry set at incorporation, not a valuation.' },
          { text: 'Nothing about value — it is the accounting value of the share, unrelated to the ₹250 price', correct: true, why: 'Face value sets the baseline for accounting (dividends are often declared as a percentage of it), but the market price is decided by buyers and sellers.' },
          { text: 'The share is overpriced 250 times over', why: 'Price-to-face-value has no interpretation as a valuation ratio.' },
          { text: 'The company must be small', why: 'Face value is unrelated to company size. ITC has ₹1 face value and is one of India’s largest companies.' },
        ],
      },
      {
        q: 'You have ₹5,000 and want a ₹1,750 share. What happens on the exchanges?',
        options: [
          { text: 'You buy 2 shares and the broker keeps the ₹1,500 balance as fractional units', why: 'Brokers cannot create fractional shares — the exchange trades whole units only.' },
          { text: 'You cannot buy any — the cash market trades whole shares, so only ₹1,750 or ₹3,500 of buying is possible', correct: true, why: 'Whole units only. The remainder stays in your account as cash, which is why small sums are better deployed through mutual funds.' },
          { text: 'You buy 2.86 shares', why: 'Fractional shares do not exist in the Indian cash market.' },
          { text: 'You must buy a minimum lot of 100 shares', why: 'That is a derivatives concept — the cash market lets you buy a single share.' },
        ],
      },
      {
        q: 'A company announces a 1:1 bonus issue. The next morning your 100 shares become 200 and the price halves. Are you richer?',
        options: [
          { text: 'Yes, twice the shares means twice the wealth', why: 'Twice the shares at half the price is the same money.' },
          { text: 'No — the value is identical; only the number of units and the nominal price changed', correct: true, why: 'Bonus issues and splits are unit bookkeeping. They can improve liquidity and sentiment, but they create no value.' },
          { text: 'Yes, because bonus shares are free', why: 'They are free in the same sense that splitting a ₹100 note into two ₹50 notes is free.' },
          { text: 'Only if you sell immediately', why: 'Selling quickly changes nothing about the value created — which is none.' },
        ],
      },
    ],
    takeaway: 'A share is a whole unit of ownership, priced by the market and bookkept at face value. Never judge a company by its share price, and never confuse a bonus or split with a gain.',
  },

  'l3-023': {
    id: 'l3-023',
    title: 'Equity Ownership',
    subtitle: 'What you actually get as part-owner',
    minutes: 6,
    blocks: [
      { kind: 'scene', name: 'share-slice', caption: 'Ownership comes with rights, obligations and one very uncomfortable ranking: you are last in line.' },
      { kind: 'p', text: 'Owning equity means owning the residual of a business — everything left after every other claim has been settled. That is why equity can earn the most, and why it can be wiped out completely while the company keeps operating. A share is not merely a claim on profit; it is a bundle of legal rights that you can exercise.' },
      {
        kind: 'table',
        caption: 'The rights you can actually use in India',
        headers: ['Right', 'How it works here'],
        rows: [
          ['Voting', 'One share, one vote on resolutions; e-voting before every AGM, so you can vote from your phone'],
          ['Attend and question', 'AGMs are held online and in person; you can ask the board questions'],
          ['Dividend', 'Declared by the board, paid to whoever holds shares on the record date'],
          ['Rights issue', 'Existing holders get first refusal on new shares, usually at a discount'],
          ['Buyback', 'You can tender shares when a company buys back its own stock'],
          ['Information', 'Annual report, quarterly results, and material events filed with the exchanges'],
          ['Sue for oppression', 'Company law and SEBI rules allow minority shareholders to seek redressal'],
        ],
      },
      {
        kind: 'example',
        title: 'Reliance’s 2020 rights issue: ₹53,124 crore from existing owners',
        text: 'In the middle of the pandemic, Reliance Industries raised India’s largest ever rights issue — about ₹53,124 crore — by offering one new share for every fifteen held at a sharp discount to the market price. Existing shareholders who subscribed protected their share of the company at a bargain price; those who ignored the letter let their ownership share be diluted. It is the clearest everyday example of why a rights issue matters and why the paperwork must not be binned.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Equity means you are last in line',
        text: 'In a winding up, the money recovered goes to employees and secured lenders, then other creditors, then tax dues, then preference shareholders, and only then to the equity holders — usually nothing. When Reliance Communications, DHFL and Yes Bank’s additional tier-1 bonds collapsed, ordinary shareholders were wiped out or nearly so while bondholders argued over the scraps.',
      },
      {
        kind: 'table',
        caption: 'Who owns Indian companies, and why it matters to you',
        headers: ['Ownership pattern', 'Example', 'What to watch'],
        rows: [
          ['Promoter-controlled', 'Tata Sons holds the majority of Tata Sons’ stake in TCS; the Ambani family controls Reliance', 'Promoter shareholding changes and pledged shares'],
          ['Professionally managed, no promoter', 'ITC has no promoter; British American Tobacco holds about a quarter', 'Board independence and takeover risk'],
          ['Government-owned (PSU)', 'SBI, NTPC, Coal India, IRCTC', 'Disinvestment and government policy'],
          ['Widely held/institution-led', 'Most of the Nifty 50 after years of institutional buying', 'FII flows and index flows'],
        ],
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'Promoter pledging is a red flag worth checking',
        text: 'Promoter shareholding is disclosed every quarter. If a large part of the promoter’s stake is pledged as collateral for loans, a fall in the share price can trigger forced selling — and the fall feeds itself. The information is public on the exchange websites; a few seconds of checking is worth a lot.',
      },
      {
        kind: 'list',
        items: [
          'Dilution is real wealth transfer: fresh shares issued to someone else shrink your slice of the same pie.',
          'Buybacks do the opposite — they shrink the share count, so each remaining share owns a little more.',
          'Nomination on your demat account is what decides who inherits the shares; without it, your family needs a succession certificate or probate.',
          'Equity holders cannot be asked for more money beyond what they have invested — limited liability is one of the few genuinely one-sided protections in finance.',
        ],
      },
      { kind: 'sim', name: 'valuation', caption: 'Ownership is a claim on profits — see how earnings drive the value of what you own.' },
      {
        kind: 'terms',
        items: [
          { term: 'Residual claim', meaning: 'The right of an equity holder to whatever is left after every lender, creditor and preference shareholder has been paid — which is why equity can be wiped out while a company keeps operating.' },
          { term: 'Promoter', meaning: 'The founder or controlling shareholder of an Indian company. Promoter holding and pledging are disclosed every quarter and belong in any ownership check.' },
          { term: 'Share pledging', meaning: 'A promoter borrowing against their own shares. If the price falls, forced selling can follow, and the fall feeds itself.' },
          { term: 'Dilution', meaning: 'The shrinking of your ownership percentage when the company issues fresh shares to somebody else. Rights issues, preferential allotments and ESOPs all dilute.' },
          { term: 'Annual general meeting (AGM)', meaning: 'The yearly meeting where shareholders vote on resolutions. Indian investors can attend and vote online through e-voting.' },
        ],
      },
    ],
    quiz: [
      {
        q: 'Which claim is paid first when a company is wound up?',
        options: [
          { text: 'Equity shareholders', why: 'They are paid last — the residual claim is exactly why equity is risky.' },
          { text: 'Secured lenders and employees', correct: true, why: 'Wages, secured debt, other creditors and taxes all rank ahead of equity. Shareholders receive what, if anything, remains.' },
          { text: 'Preference shareholders', why: 'They rank above ordinary equity but below lenders and employees.' },
          { text: 'Whichever class complains loudest', why: 'Insolvency distribution follows a strict legal order, not negotiation.' },
        ],
      },
      {
        q: 'Reliance offered a rights issue at a discount. What happens if a shareholder ignores it?',
        options: [
          { text: 'Nothing — rights issues are optional and free', why: 'They are optional, but ignoring one is not free: your share of the company falls.' },
          { text: 'Their ownership slice of the company is diluted', correct: true, why: 'New shares were issued to others at a discount, so the ignored holder owns a smaller percentage of the same business.' },
          { text: 'Their existing shares are cancelled', why: 'Existing shares are unaffected in number — only the percentage they represent shrinks.' },
          { text: 'They automatically receive the new shares later', why: 'Rights lapse if not subscribed within the window.' },
        ],
      },
      {
        q: 'A promoter has pledged 60% of their shareholding. Why should a minority investor care?',
        options: [
          { text: 'They should not — pledge details are private', why: 'Pledging is disclosed quarterly and visible on the exchange websites.' },
          { text: 'A price fall can trigger forced sale of those shares, deepening the fall', correct: true, why: 'Pledged shares sold to repay loans add selling pressure exactly when the price is already weak.' },
          { text: 'It means the promoter is buying more shares', why: 'Pledging is borrowing against shares, not buying.' },
          { text: 'It guarantees higher dividends', why: 'It has no positive effect on dividends.' },
        ],
      },
    ],
    takeaway: 'Equity ownership is a bundle of real rights — a vote, a dividend claim, a residual claim on assets — with the weakest position in the queue. Understand what the promoter owns and pledges before you buy in.',
  },

  'l3-024': {
    id: 'l3-024',
    title: 'Dividends',
    subtitle: 'Cash handed to you for owning the business',
    minutes: 6,
    blocks: [
      { kind: 'scene', name: 'dividend-stream', caption: 'A dividend is a stream of cash in your hand — it does not depend on someone else wanting to buy the share.' },
      { kind: 'p', text: 'A dividend is a share of profit paid out in cash, per share held. Unlike a price rise, it does not require another buyer to come along: the company simply transfers money into your bank account. In India, large mature businesses — ITC, Coal India, PSU banks, TCS, Hindustan Unilever — pay substantial dividends, while young growth companies tend to reinvest everything.' },
      {
        kind: 'formula',
        label: 'The three dividend numbers',
        expr: 'Dividend per share  |  Dividend yield = DPS ÷ price  |  Payout ratio = dividends ÷ net profit',
        note: 'Yield is what you get for the price you pay today. Payout ratio tells you how much of profit is being shared versus kept for growth.',
      },
      {
        kind: 'table',
        caption: 'Real Indian dividend profiles',
        headers: ['Type of payer', 'Examples', 'What to expect'],
        rows: [
          ['Cash-machine FMCG', 'ITC, Hindustan Unilever, Nestlé India', 'Steady, rising dividends, moderate yield'],
          ['High-yield PSUs', 'Coal India, Power Grid, NTPC, PSU banks', 'Yields often the highest in the market, but the business may not grow'],
          ['Cash-rich IT majors', 'TCS, Infosys', 'Huge payouts mostly through dividends and buybacks'],
          ['Growth businesses', 'Most new-age listed companies', 'Little or no dividend — cash is reinvested'],
          ['Stretched balance sheets', 'Some high-yield leveraged companies', 'Yield looks great because the price has collapsed — and the payout may not survive'],
        ],
      },
      {
        kind: 'example',
        title: 'Dividends are taxed in your hands now',
        text: 'The dividend distribution tax was abolished in 2020: dividends are now added to your income and taxed at your slab rate, with TDS applied once your dividend from a company crosses a small annual threshold. So a 6% dividend yield is not a 6% post-tax return for a person in the 30% bracket — the net is closer to 4.2%. For FMCG-type companies with steadier share prices this tax drag matters more than most investors assume.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'A high dividend yield can be a warning',
        text: 'Yield rises either because the dividend grows or because the price falls. Coal India’s and PSU bank yields have looked spectacular at times for both reasons. Before you buy a 9% yielder, ask whether the payout is covered by free cash flow and whether the business is shrinking. A dividend cut usually arrives at the same moment the price does.',
      },
      {
        kind: 'table',
        caption: 'Dividend dates you must know',
        headers: ['Date', 'Meaning'],
        rows: [
          ['Announcement date', 'Board declares the dividend (or withholds it)'],
          ['Record date', 'The day the company checks who owns the shares. You are on the register at the end of the previous trading day (T+1 settlement)'],
          ['Ex-dividend date', 'Buy on or after this date and the seller keeps the dividend, not you'],
          ['Payment date', 'Typically within 30 days of declaration, straight into your registered bank account'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Do not buy just before the record date to capture a dividend',
        text: 'On the ex-date, the price typically drops by roughly the dividend amount. You have not gained anything — and you have created a tax liability in your hands. Dividend capture is a game for people who do not pay your tax rates.',
      },
      {
        kind: 'list',
        items: [
          'In mutual funds, a payout used to be called “dividend”; SEBI renamed it IDCW — Income Distribution cum Capital Withdrawal — because it is partly your own capital coming back.',
          'Dividends are not free money: the share goes down by what is paid out.',
          'Prefer a company that raises dividends steadily out of profits to one that pays a huge one-off from asset sales.',
        ],
      },
      { kind: 'sim', name: 'market', caption: 'Watch total return split into the price change and the dividend that actually reaches your bank account.' },
      {
        kind: 'terms',
        items: [
          { term: 'Dividend yield', meaning: 'Annual dividend per share divided by the share price. It rises either because the dividend grew or because the price fell — check which before buying a high yielder.' },
          { term: 'Payout ratio', meaning: 'The share of profit paid out as dividends. A very high payout leaves less for growth; a very low one may mean the cash is being reinvested or hoarded.' },
          { term: 'Record date', meaning: 'The date the company checks who owns the shares and is entitled to a dividend. You must be on the register at the end of the previous trading day.' },
          { term: 'Ex-dividend date', meaning: 'The day from which a new buyer no longer receives the declared dividend. The price typically drops by roughly the dividend amount on that day.' },
          { term: 'TDS on dividend', meaning: 'Tax deducted at source once your dividend income from a company crosses the annual threshold. Dividends have been taxed in the investor\'s hands since 2020.' },
        ],
      },
    ],
    quiz: [
      {
        q: 'The government abolished the dividend distribution tax in 2020. What changed for an investor in the 30% bracket?',
        options: [
          { text: 'Dividends became tax-free', why: 'They became taxable in your hands — the opposite.' },
          { text: 'Dividends are now taxed at the investor’s slab rate, so the net yield is lower than advertised', correct: true, why: 'What the company used to pay as DDT now arrives as your income, taxed at your marginal rate with TDS above a small threshold.' },
          { text: 'Only dividends above ₹10 lakh are taxed', why: 'That threshold applies to TDS for certain cases, not to the taxability of the dividend itself.' },
          { text: 'Nothing — DDT was only for foreign investors', why: 'DDT applied to domestic companies paying dividends to Indian shareholders.' },
        ],
      },
      {
        q: 'A stock yields 9%, well above the market average. What is the most likely explanation?',
        options: [
          { text: 'It is a bargain the market has missed', why: 'Sometimes, but a persistent 9% yield in a 1–2% yield market usually means the price has fallen for a reason.' },
          { text: 'Either the payout is unusually high or the price has fallen — both need checking against free cash flow', correct: true, why: 'High yield is a question, not an answer. Test whether the dividend is covered by cash earnings and whether the business is shrinking.' },
          { text: 'The company is growing faster than others', why: 'High-growth businesses usually pay nothing at all.' },
          { text: 'The exchange guarantees the dividend', why: 'No exchange guarantees a dividend; boards cut them routinely.' },
        ],
      },
      {
        q: 'A stock trading at ₹500 goes ex-dividend on a ₹20 dividend. What should you expect?',
        options: [
          { text: 'The price opens around ₹480 and you are no better off having bought to capture it', correct: true, why: 'The value leaves the company with the cash. Buying the day before for the dividend creates a tax liability without any economic gain.' },
          { text: 'The price stays at ₹500 and you also get ₹20', why: 'That would be money created out of nothing.' },
          { text: 'The price rises to ₹520', why: 'Paying out cash cannot increase the value of the business.' },
          { text: 'The dividend is cancelled', why: 'The dividend is still paid to holders on the record date — the price simply adjusts.' },
        ],
      },
    ],
    takeaway: 'Dividends are real cash that does not depend on a buyer showing up — and they are taxed in your hands now. Judge a dividend by its coverage and consistency, not by its headline yield.',
  },

  'l3-025': {
    id: 'l3-025',
    title: 'Capital Gains',
    subtitle: 'Profit from a change in price — where most returns actually come from',
    minutes: 7,
    blocks: [
      { kind: 'scene', name: 'gain-pre-post-tax', caption: 'The gain on paper and the gain after tax are two different numbers — the second one is what you keep.' },
      { kind: 'p', text: 'A capital gain is the profit when you sell an asset for more than you paid. For Indian equity, most of the long-run return comes from this, not from dividends. The distinction that matters is between short-term and long-term capital gains, because the tax rates differ sharply — and the boundary is the holding period.' },
      {
        kind: 'table',
        caption: 'Indian equity capital gains tax, for listed shares and equity mutual funds',
        headers: ['Holding period', 'Tax treatment', 'Notes'],
        rows: [
          ['Up to 12 months (short term)', '20% on the gain, plus surcharge and cess', 'Raised from 15% with effect from 23 July 2024'],
          ['More than 12 months (long term)', '12.5% on gains above ₹1.25 lakh a year', 'The exemption was raised from ₹1 lakh, and the rate from 10%, at the same time'],
          ['Stocks sold through a recognised exchange', 'STT is already paid; gains are treated as capital gains, not business income', 'Delivery-based investing only'],
          ['Intraday equity', 'Treated as speculative business income — taxed at your slab rate', 'Losses can only be set off against speculative gains'],
          ['Futures and options', 'Non-speculative business income — slab rate, and it needs books and audit checks beyond a turnover limit', 'The most commonly mishandled line item in retail tax returns'],
        ],
      },
      {
        kind: 'example',
        title: 'The same ₹80,000 profit, taxed two ways',
        text: 'Suppose you invest ₹1,00,000 in an equity fund and sell for ₹1,80,000. If you held for 11 months: the whole ₹80,000 is short-term, taxed at 20% — roughly ₹16,000 in tax. If you held for 13 months: the gain is long-term, only ₹1.25 lakh a year is exempt, so ₹80,000 is fully taxable at 12.5% — about ₹10,000. Same investment, same profit, ₹6,000 more left in your pocket simply from waiting two months. The rate difference is not the main reason to hold long — but it is a real bonus for doing so.',
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'Set-off and carry-forward are your legal right',
        text: 'A loss on one share can be set off against a gain on another in the same year, and short-term and long-term buckets have their own rules. Unused capital losses can be carried forward for eight years — provided you file your return on time, which is exactly the requirement most people miss.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Holding longer is not just about tax',
        text: 'If a position is only worth holding because of the tax rate, it is not an investment thesis — it is a tax arbitrage with real money at risk. Hold because the business is compounding; take the lower tax rate as the reward for patience, not as the plan.',
      },
      {
        kind: 'list',
        items: [
          'Shares bought before 31 January 2018 were grandfathered: their cost is stepped up to the higher of actual cost or the 31 January 2018 price, which limits the tax on very old gains.',
          'Every purchase is a separate lot. Use the actual cost of the units you sell, not an average across years, when it works in your favour and documents it.',
          'Your broker’s capital-gains statement (P&L statement) is the starting point, not the final answer — it cannot see an off-market transfer or an inheritance.',
          'Equity mutual fund gains follow the same 12-month and rate rules, but do not carry STT treatment identical to direct shares.',
        ],
      },
      { kind: 'sim', name: 'market', caption: 'Hold through different paths and see how much of the gain survives to your account.' },
      {
        kind: 'terms',
        items: [
          { term: 'Short-term capital gains', meaning: 'Gains on listed equity held for 12 months or less, taxed at 20% since 23 July 2024.' },
          { term: 'Long-term capital gains', meaning: 'Gains on listed equity held for more than 12 months, taxed at 12.5% on the amount above ₹1.25 lakh in a financial year.' },
          { term: 'Set-off and carry-forward', meaning: 'Your legal right to offset a loss on one investment against a gain on another, and to carry unused capital losses forward for up to eight years if you file your return on time.' },
          { term: 'Grandfathering', meaning: 'The rule that gives shares bought before 31 January 2018 a stepped-up cost based on that day\'s price, limiting tax on very old gains.' },
          { term: 'Speculative business income', meaning: 'How intraday equity trading is taxed — at your slab rate. Losses can be set off only against other speculative gains.' },
          { term: 'Non-speculative business income', meaning: 'How futures and options are taxed — at your slab rate, with books and turnover limits that can require an audit.' },
        ],
      },
    ],
    quiz: [
      {
        q: 'You sell listed shares after holding them for 13 months with a gain of ₹90,000. What tax applies?',
        options: [
          { text: '20% short-term rate', why: 'At 13 months the gain is long term, not short term.' },
          { text: '12.5% long-term rate, with the ₹1.25 lakh annual exemption effectively covering the whole gain', correct: true, why: 'Holding beyond 12 months shifts the gain to the long-term bucket, where ₹1.25 lakh a year is exempt and the balance is taxed at 12.5%.' },
          { text: '30% slab rate', why: 'That applies only if the gains are business income — for example from intraday trading or F&O.' },
          { text: 'Nothing at all, ever', why: 'The exemption has a limit. Above ₹1.25 lakh of long-term gains a year, tax applies.' },
        ],
      },
      {
        q: 'Which activity is taxed as speculative business income rather than capital gains?',
        options: [
          { text: 'Selling shares held for three years', why: 'Long-term capital gains.' },
          { text: 'Buying shares in an F&O contract and holding them for a month', why: 'Futures and options are non-speculative business income, not speculative — a different bucket with different rules.' },
          { text: 'Intraday equity trades squared off the same day', correct: true, why: 'No delivery means no capital asset was ever held: intraday equity is speculative business income, and its losses can only be set off against speculative gains.' },
          { text: 'Holding an equity mutual fund for ten years', why: 'Long-term capital gains, taxed at 12.5% above the exemption.' },
        ],
      },
      {
        q: 'You made a ₹40,000 capital loss on one stock and a ₹70,000 gain on another this year. What is the sensible, legal treatment?',
        options: [
          { text: 'Ignore the loss — only gains are taxable', why: 'Ignoring a loss is simply paying tax you do not owe.' },
          { text: 'Set the loss off against the gain, so you pay tax on ₹30,000, and carry forward anything unused for up to eight years', correct: true, why: 'Set-off in the same year, then carry-forward, is a legal entitlement — conditional on filing your return on time.' },
          { text: 'Offset it against your salary income', why: 'Capital losses cannot be set off against salary income.' },
          { text: 'Claim it only if you also sold the winner in the same week', why: 'The set-off window is the financial year, not the week.' },
        ],
      },
    ],
    takeaway: 'Most equity wealth arrives as capital gains, and the tax on them depends on how long you held. Twelve months, set-off, carry-forward and a filed return are the four levers that decide what you actually keep.',
  },

  'l3-026': {
    id: 'l3-026',
    title: 'Stock Exchanges',
    subtitle: 'The marketplace where shares change hands',
    minutes: 7,
    blocks: [
      { kind: 'scene', name: 'money-flow', caption: 'You never hand money to the seller directly: broker to exchange to clearing corporation, and back again.' },
      { kind: 'p', text: 'A stock exchange is a regulated marketplace where buyers and sellers meet through brokers, with one price discovered for everyone at the same moment. It does three jobs that no individual could do alone: it discovers a price, it provides liquidity so you can exit, and it stands behind every trade through a clearing corporation so a stranger’s default cannot cost you your shares.' },
      {
        kind: 'table',
        caption: 'India’s recognised exchanges you can actually trade on',
        headers: ['Exchange', 'Founded', 'Known for', 'Retail relevance'],
        rows: [
          ['BSE', '1875', 'Asia’s oldest exchange, the Sensex, the largest number of listed companies in the world', 'Small caps, SME listings, BSE StAR MF for direct mutual funds'],
          ['NSE', '1992, operations from 1994', 'Nifty 50, screen-based trading, dominant share of equity and derivatives turnover', 'The default venue for most large-cap trades'],
          ['MCX', '2003', 'Commodity futures: gold, silver, crude oil, natural gas', 'Only for people who understand leverage and margins'],
          ['NCDEX', '2003', 'Agricultural commodity futures', 'Very specialised'],
          ['MSEI', '2008', 'A third equity exchange', 'Negligible liquidity — most investors never use it'],
        ],
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'SEBI regulates the market; the exchanges police it day to day',
        text: 'The Securities and Exchange Board of India licenses exchanges, brokers and mutual funds, and the exchanges run surveillance, price bands and circuit breakers. If a broker misleads you, you have a formal route: the broker’s grievance cell, then SEBI’s SCORES portal, then the SMART ODR online dispute resolution platform. Very few retail investors use it, and almost everyone who does gets a documented answer.',
      },
      {
        kind: 'table',
        caption: 'How the plumbing protects you',
        headers: ['Layer', 'What it does'],
        rows: [
          ['Broker', 'Takes your order, checks your margin, routes it to the exchange'],
          ['Exchange', 'Matches orders, publishes prices, sets price bands'],
          ['Clearing corporation', 'Becomes the buyer to every seller and seller to every buyer — novation'],
          ['Settlement guarantee fund', 'Steps in if a member fails to deliver'],
          ['Depositories (NSDL, CDSL)', 'Hold the shares electronically in your name'],
          ['Investor Protection Fund', 'Compensates clients up to a cap if a broker defaults'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Where a share trades does not change what it is',
        text: 'Reliance trades on both NSE and BSE as the same security with the same ISIN and almost the same price. Choosing an exchange changes your execution and costs slightly; it changes nothing about your ownership. What does matter is which venue gives the best liquidity for that particular scrip.',
      },
      {
        kind: 'example',
        title: '13 and 23 March 2020: the circuit breakers fired twice',
        text: 'Indian exchanges halt trading market-wide when the indices fall 10%, 15% or 20% in a day; the first halt lasts 45 minutes. During the pandemic crash, the 10% trigger was hit twice in ten days: on 13 March and again on 23 March 2020, when the Sensex fell about 13% in a single session. Those halts exist so that panic cannot feed on itself without a pause — a good reminder that the market’s mechanics are designed around the assumption that crowds behave badly under stress.',
      },
      {
        kind: 'list',
        items: [
          'Normal equity hours are 9:15 am to 3:30 pm IST, with a pre-open auction from 9:00 to 9:15 am where the opening price is discovered.',
          'Price bands (typically 2%, 5%, 10% or 20%) cap how far a stock can move in a day; they are wider for large caps and tighter for illiquid scrips.',
          'Derivatives, currency and commodity segments have their own timings — some run into the evening.',
          'A circuit-breaker halt is not a market failure; an illiquid stock hitting its 20% band with no sellers is a normal, if painful, day.',
        ],
      },
      { kind: 'sim', name: 'market', caption: 'A screen full of buyers and sellers — see how an exchange turns orders into one price.' },
      {
        kind: 'terms',
        items: [
          { term: 'Clearing corporation', meaning: 'The institution that becomes buyer to every seller and seller to every buyer, so a stranger\'s default cannot cost you your shares.' },
          { term: 'Novation', meaning: 'The legal step by which the clearing corporation substitutes itself as counterparty to both sides of your trade, removing counterparty risk.' },
          { term: 'Settlement guarantee fund', meaning: 'The pool that steps in when a trading member fails to deliver, so settlement still completes.' },
          { term: 'Circuit breaker', meaning: 'An exchange-wide halt triggered when the index falls 10%, 15% or 20% in a day. India\'s breakers fired on 13 and 23 March 2020.' },
          { term: 'Price band', meaning: 'The daily limit on how far a single scrip may move — commonly 20% for large caps and narrower for illiquid names. A locked band means orders cannot fill.' },
          { term: 'SCORES', meaning: 'SEBI\'s online complaint system for investors, the first formal escalation after a broker\'s own grievance cell.' },
        ],
      },
    ],
    quiz: [
      {
        q: 'What does the clearing corporation actually do for you?',
        options: [
          { text: 'Sets the price of every stock', why: 'Prices come from the order book; the clearing corporation handles obligations after the match.' },
          { text: 'Becomes the counterparty to every trade, so a stranger’s default cannot cost you your shares', correct: true, why: 'Novation removes counterparty risk from the trade entirely — that is why you can safely trade with anonymous counterparties.' },
          { text: 'Holds your shares permanently', why: 'Depositories hold shares; clearing corporations settle the delivery and payment obligations.' },
          { text: 'Insures your investment against a price fall', why: 'No institution insures market losses.' },
        ],
      },
      {
        q: 'On 23 March 2020 trading halted because the Sensex fell about 13%. Why do exchanges halt trading?',
        options: [
          { text: 'To let brokers recover their losses', why: 'Brokers settle through margins and the clearing corporation, not through halts.' },
          { text: 'To force a pause so panic selling cannot cascade uninterrupted', correct: true, why: 'Circuit breakers give the market a breather. They also exist in most major markets for the same reason.' },
          { text: 'To prevent you from selling', why: 'Trading resumes after the halt; it is a pause, not a closure.' },
          { text: 'Because SEBI cancels all orders that day', why: 'Orders are not cancelled — trading halts and then resumes.' },
        ],
      },
      {
        q: 'Reliance trades on both NSE and BSE at nearly identical prices. What should a beginner conclude?',
        options: [
          { text: 'It is two different investments with different risk', why: 'Same company, same ISIN, same claim — identical risk.' },
          { text: 'The exchange is a venue, not the asset — what matters is liquidity and cost, not the venue’s brand', correct: true, why: 'One security, two marketplaces. Your broker routes to the best available price, and the ownership you end up with is the same.' },
          { text: 'The BSE price is always the better one', why: 'Prices differ only by the size of the spread and momentary liquidity.' },
          { text: 'You must register separately with each exchange', why: 'Registration is with your broker, not the exchange.' },
        ],
      },
    ],
    takeaway: 'An exchange is infrastructure: a price discovery machine, a liquidity provider and a settlement guarantee, all under SEBI. The venue does not change what you own, but its liquidity changes what you pay.',
  },

  'l3-027': {
    id: 'l3-027',
    title: 'NSE',
    subtitle: 'India’s largest exchange by trading volume',
    minutes: 6,
    blocks: [
      { kind: 'scene', name: 'nifty-50', caption: 'The Nifty 50 is the NSE’s flagship product — fifty companies, weighted by the value the market floats.' },
      { kind: 'p', text: 'The National Stock Exchange was set up in 1992 and began operations in 1994, deliberately designed as a nationwide, screen-based, demutualised exchange at a time when Indian trading was still conducted by open outcry on the floors of regional exchanges. Its arrival changed the market permanently: a broker in Coimbatore and one in Mumbai saw the same price at the same instant.' },
      {
        kind: 'table',
        caption: 'What the NSE is actually made of',
        headers: ['Piece', 'Detail'],
        rows: [
          ['Flagship index', 'Nifty 50 — the benchmark that most mutual funds are compared against'],
          ['Other indices', 'Nifty Bank, Nifty Next 50, Nifty Midcap 150, Nifty Smallcap 250, Nifty 500, sector indices'],
          ['Listed companies', 'Over two thousand, including a dedicated SME platform, NSE Emerge'],
          ['Cash market turnover', 'Roughly half of India’s total equity cash turnover, and the leading venue for large caps'],
          ['Derivatives', 'The dominant venue for index futures and options in India'],
          ['Clearing arm', 'NSE Clearing, with a settlement guarantee fund behind every trade'],
          ['Shareholding', 'Institutional and public, but the exchange itself is not listed'],
        ],
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'Why the NSE’s depth is worth real money to you',
        text: 'Deep liquidity means tight bid-ask spreads. On a Nifty 50 stock the gap between the best buy and best sell price is often one paisa or five paise — a rounding error on a ₹1,000 share. On a small cap with few buyers, the same gap can be ₹2 on a ₹200 share: a 1% cost the moment you enter. That difference, repeated across a portfolio and over years, is one of the quiet reasons beginners should start with large caps or index funds.',
      },
      {
        kind: 'example',
        title: 'One exchange routed to, two different experiences',
        text: 'Place a market order for 500 shares of a Nifty 50 company and it fills almost instantly at close to the screen price on either exchange. Place the same order in an illiquid SME scrip and you may move the price several percent, or wait days for a buyer at your limit. Nothing about the company changed — only the venue’s depth did.',
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Your broker chooses the venue for you',
        text: 'When you tap “buy”, your broker’s system decides where to send the order — usually whichever exchange shows the better price for your size. You do not need to pick NSE or BSE; you need to care about which security you are buying and how liquid it is.',
      },
      {
        kind: 'list',
        items: [
          'NSE Indices Ltd maintains and publishes the index methodology for every Nifty index, including the rules on eligibility and the semi-annual rebalancing dates.',
          'SEBI requires equity schemes to benchmark against the Total Return Index of their benchmark, so a fund tracking the Nifty 50 is measured against the Nifty 50 TRI, which includes dividends.',
          'F&O in India is overwhelmingly an NSE game — index and stock derivatives are where the NSE’s turnover dwarfs everything else.',
          'The Nifty 50 itself is covered in detail in chapter 62; this chapter is about the venue it lives on.',
        ],
      },
      { kind: 'sim', name: 'market', caption: 'The NSE order book in miniature — run a cycle and watch how continuous trading sets the price.' },
      {
        kind: 'terms',
        items: [
          { term: 'Order book depth', meaning: 'How much quantity sits at each price on the buy and sell side. Depth is what lets a large order fill without moving the price.' },
          { term: 'Impact cost', meaning: 'The penalty you pay for size: how much worse your average fill is than the quoted price. NSE uses it as a liquidity filter for index inclusion.' },
          { term: 'NSE Emerge', meaning: 'The NSE\'s platform for listing small and medium enterprises, where liquidity is thin and spreads are wide.' },
          { term: 'NSE Clearing', meaning: 'The NSE\'s clearing arm, which settles trades and runs the settlement guarantee fund behind them.' },
        ],
      },
    ],
    quiz: [
      {
        q: 'What did the NSE’s screen-based, demutualised model really change for an ordinary investor?',
        options: [
          { text: 'It guaranteed profits for retail investors', why: 'No exchange can make anyone profitable.' },
          { text: 'One national order book meant one visible price for everyone, and much better liquidity', correct: true, why: 'Electronic trading with members from all over India replaced fragmented floor trading — that is the source of today’s tight spreads on large caps.' },
          { text: 'It removed the need for brokers', why: 'Brokers remain the retail route to the exchange; the NSE is a members-only marketplace.' },
          { text: 'It ended SEBI regulation of trading', why: 'SEBI regulation grew stronger, not weaker, with dematerialised, exchange-based trading.' },
        ],
      },
      {
        q: 'Why is a Nifty 50 stock usually cheaper to trade than an SME scrip?',
        options: [
          { text: 'Because it is cheaper per share', why: 'Share price is irrelevant to trading cost.' },
          { text: 'Because deep liquidity narrows the bid-ask spread and reduces the price impact of your order', correct: true, why: 'Many buyers and sellers at all times means you cross the spread cheaply and your order does not move the price.' },
          { text: 'Because the exchange charges less on large caps', why: 'Exchange charges do not depend on market capitalisation in that way.' },
          { text: 'Because SME shares cannot be sold', why: 'They can be sold — just slowly, and often at a painful price.' },
        ],
      },
      {
        q: 'A fund says it is benchmarked to the Nifty 50. Which benchmark is SEBI’s standard?',
        options: [
          { text: 'The Nifty 50 price index', why: 'Price indices exclude dividends, so they understate what an investor actually earns.' },
          { text: 'The Nifty 50 Total Return Index, which counts dividends as reinvested', correct: true, why: 'SEBI has required equity schemes to use the TRI of their benchmark so the comparison reflects total shareholder return.' },
          { text: 'The Sensex', why: 'A fund tracking the Nifty 50 is not benchmarked to a different index.' },
          { text: 'Whatever index the fund house prefers', why: 'SEBI prescribes the benchmark discipline; it is not the fund house’s choice.' },
        ],
      },
    ],
    takeaway: 'The NSE is where most Indian equity and derivative volume happens, and its depth is why large caps trade so cheaply. You do not choose the venue — your broker does — but liquidity is a cost you should choose deliberately.',
  },

  'l3-028': {
    id: 'l3-028',
    title: 'BSE',
    subtitle: 'Asia’s oldest exchange, and the home of the Sensex',
    minutes: 6,
    blocks: [
      { kind: 'scene', name: 'timeline', caption: '1875 to today: one exchange outlasts the Raj, the licence era and the reform era.' },
      { kind: 'p', text: 'The Bombay Stock Exchange traces its origins to 1875, when a handful of brokers formed “The Native Share & Stock Brokers’ Association” and traded under a banyan tree in what is now Dalal Street. It is Asia’s oldest stock exchange. The Sensex, launched in 1986 with a base year of 1978-79 set at 100, became the number Indians quoted on the evening news long before any of them owned a share.' },
      {
        kind: 'table',
        caption: 'What the BSE is known for',
        headers: ['Feature', 'Detail'],
        rows: [
          ['Age', 'Founded 1875 — Asia’s oldest exchange'],
          ['Listings', 'The largest number of listed companies of any exchange in the world, several thousand strong'],
          ['Flagship index', 'Sensex, 30 companies, base year 1978-79 = 100'],
          ['Other indices', 'BSE 100, BSE 500, BSE MidCap, BSE SmallCap, BSE Bankex, BSE IT, BSE Healthcare, BSE PSU'],
          ['SME platform', 'BSE SME — one of the largest SME listing venues in the world'],
          ['Retail innovation', 'BSE StAR MF, the first exchange-based mutual fund transaction platform'],
          ['Ownership', 'Demutualised and listed on the NSE in 2017 — India’s first listed exchange'],
        ],
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'The genuinely useful BSE feature for a small investor',
        text: 'BSE StAR MF lets you buy direct plans of mutual funds through your broker’s platform or the exchange route with no distributor commission at all. Over a fifteen-year horizon the difference between a regular and a direct plan on the same fund is typically several lakh rupees on a growing SIP — and the exchange platform is one of the cleanest ways to get the direct version.',
      },
      {
        kind: 'example',
        title: 'Same company, two listings',
        text: 'Most large Indian companies list on both exchanges. Reliance, TCS and HDFC Bank are quoted on the BSE and the NSE all day, and the two prices differ by a few paise. But thousands of smaller companies trade only, or mainly, on the BSE — which is exactly where an investor looking beyond the Nifty universe ends up, and exactly where liquidity has to be checked before you buy.',
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'The oldest exchange is not the cheapest venue',
        text: 'BSE’s cash equity volumes are a fraction of the NSE’s, so for a large-cap order your broker will usually route to the NSE for a better fill. The BSE still matters enormously as a listing venue, as the index provider for the Sensex family, and for the long tail of smaller listed companies.',
      },
      {
        kind: 'list',
        items: [
          'The Sensex fell from about 21,000 in January 2008 to under 8,000 in October 2008; it first closed above 50,000 in January 2021. A 100-rupee investment at the base year is a very large number today — that is what decades of business growth do.',
          'BSE indices use free-float market capitalisation too, so promoter holdings do not inflate a company’s weight.',
          'BSE’s corporate filings, announcements and annual reports are public and free — a genuine research resource for small companies nobody writes about.',
        ],
      },
      { kind: 'sim', name: 'market', caption: 'India’s oldest exchange in miniature — test a full market cycle on a screen that did not exist when the banyan tree did.' },
      {
        kind: 'terms',
        items: [
          { term: 'BSE StAR MF', meaning: 'The BSE\'s exchange-based mutual fund platform, where you can buy direct plans without distributor commission — often the cheapest route in India.' },
          { term: 'Dalal Street', meaning: 'The Mumbai address of the BSE and the shorthand Indian media use for the stock market itself. The exchange began under a banyan tree in 1875.' },
          { term: 'SME platform', meaning: 'The BSE and NSE segments where small companies list. Cheaper for the company to list, but thinly traded and risky for small investors.' },
        ],
      },
    ],
    quiz: [
      {
        q: 'Which statement about the BSE is accurate?',
        options: [
          { text: 'It is the largest exchange in India by equity turnover', why: 'The NSE dominates cash equity and derivatives turnover.' },
          { text: 'It is Asia’s oldest exchange, with the largest number of listed companies in the world', correct: true, why: 'Founded in 1875, the BSE lists several thousand companies — the widest listing base globally.' },
          { text: 'It was set up in 1992 along with SEBI', why: 'That is the NSE’s timeline; the BSE predates SEBI by more than a century.' },
          { text: 'It does not publish index data', why: 'The BSE maintains the Sensex and a large family of indices.' },
        ],
      },
      {
        q: 'A small company is listed only on the BSE. What is the first thing to check?',
        options: [
          { text: 'Whether the BSE is a “real” exchange', why: 'It is a full SEBI-recognised exchange; that is not the issue.' },
          { text: 'The bid-ask spread and average daily volume, because thin liquidity is a real cost and exit risk', correct: true, why: 'For single-listed small caps, liquidity decides both what you pay to enter and whether you can leave at a fair price.' },
          { text: 'Whether the Sensex is up today', why: 'The index level says little about a specific illiquid scrip.' },
          { text: 'Whether it is in the Nifty 50', why: 'By definition a small cap will not be in the Nifty 50.' },
        ],
      },
      {
        q: 'Why might a cost-conscious investor use BSE StAR MF?',
        options: [
          { text: 'It buys shares at a discount', why: 'It is a mutual fund transaction platform, not a share dealing venue.' },
          { text: 'It provides a route to direct plans of mutual funds without distributor commission', correct: true, why: 'Direct plans carry a lower expense ratio because no trail commission is paid, and the saving compounds over the years you hold.' },
          { text: 'It guarantees a higher NAV', why: 'NAV is the same for everyone; only the expense ratio differs between plans.' },
          { text: 'It is the only way to buy mutual funds', why: 'AMC websites, RTA platforms and brokers all offer direct plans too.' },
        ],
      },
    ],
    takeaway: 'The BSE is the oldest marketplace in Asia and the widest listing venue in the world. Its Sensex is the number India grew up quoting, and its direct mutual fund platform is a genuinely free lunch for small investors.',
  },

  'l3-029': {
    id: 'l3-029',
    title: 'Brokers',
    subtitle: 'The gateway between you and the exchange',
    minutes: 7,
    blocks: [
      { kind: 'scene', name: 'broker-costs', caption: 'No single charge looks big. Stacked across a few trades a month, they quietly take a slice of your return.' },
      { kind: 'p', text: 'A broker is a SEBI-registered member of an exchange who takes your order and puts it into the market. In India there are two broad kinds. Full-service brokers such as ICICI Direct, HDFC Securities, Kotak Securities or Motilal Oswal bundle research, advisory and relationship managers, and charge for it. Discount brokers such as Zerodha, Groww, Upstox and Angel One stripped all of that out and made delivery investing almost free, which is why a whole generation opened its first account through one of them.' },
      {
        kind: 'table',
        caption: 'What one ₹50,000 delivery buy-and-sell actually costs, at today’s statutory rates',
        headers: ['Charge', 'Who takes it', 'Roughly what it costs'],
        rows: [
          ['Brokerage', 'Your broker', '₹0 delivery at most discount brokers; 0.2–0.5% at full-service brokers'],
          ['STT', 'Government', '0.1% on both buy and sell of delivery equity'],
          ['Exchange transaction charge', 'The exchange', 'About 0.003% per side'],
          ['SEBI turnover fee', 'Regulator', '₹10 per crore, effectively a rounding error'],
          ['Stamp duty', 'State governments', '0.015% on the buy side only'],
          ['GST', 'Government', '18% on brokerage and transaction charges'],
          ['DP charge', 'Your depository participant', 'Around ₹13.50 + GST per scrip on the sell side'],
        ],
      },
      {
        kind: 'example',
        title: 'The same trade at two brokers',
        text: 'Buy ₹50,000 of a large-cap and sell it a year later. At a discount broker: STT about ₹100, exchange charges about ₹3, stamp duty about ₹7.50, a DP charge of about ₹16 on the exit, GST on all of it — a total of roughly ₹130, or 0.26% of the round trip. At a full-service broker charging 0.3% brokerage, add about ₹300. On twelve such trades a year that ₹300 becomes ₹3,600 — the price of a decent meal every month, paid for nothing. Brokerage is the one cost you can negotiate or avoid entirely.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'The transfer trap',
        text: 'Moving shares from one broker to another is an off-market transfer through the depository, and it costs money and paperwork per ISIN. Before closing an old account in irritation, ask whether you will be back: reopening is easy, but re-verifying KYC, re-adding nominees and re-linking bank accounts is not free of your time. Also check whether the old broker charges for closure — some do.',
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'How to check a broker before you trust one',
        text: 'Every legitimate broker has a SEBI registration number you can verify on the SEBI website, and every broker must route client complaints through its own grievance cell, then SEBI’s SCORES portal, then the SMART ODR online dispute resolution platform. Client money is protected by the exchange’s Investor Protection Fund up to a capped amount if a member defaults — which is another reason to keep only what you need in the trading account.',
      },
      {
        kind: 'list',
        items: [
          'Brokers earn in other ways too: margin trading facility interest (often 12–18% a year), charges on pledge and margin transfers, and any advisory or research subscription you opt into.',
          'A discount broker is not automatically better: if you need research and hand-holding, you may genuinely get value from a full-service relationship. Just know what you are paying.',
          'Never share your trading password or OTP with anyone, including a “relationship manager” — a genuine broker never needs your credentials.',
        ],
      },
      { kind: 'sim', name: 'feedrag', caption: 'Set a trading frequency and watch brokerage, STT, stamp duty and GST quietly compound against you.' },
      {
        kind: 'terms',
        items: [
          { term: 'Discount broker', meaning: 'A broker that charges little or nothing on delivery trades — Zerodha, Groww, Upstox and Angel One — by dropping research and relationship management. Statutory charges still apply.' },
          { term: 'Full-service broker', meaning: 'A broker bundling research, advisory and a relationship manager, typically charging 0.2–0.5% brokerage. Worth it only if you use what you pay for.' },
          { term: 'Stamp duty', meaning: 'A state levy on the buy side of a trade, about 0.015% for delivery equity. Small per trade, but it is charged on every purchase you ever make.' },
          { term: 'Exchange transaction charge', meaning: 'The exchange\'s own fee, roughly 0.003% per side, on which GST is also charged. It is small but unavoidable.' },
          { term: 'DP charge', meaning: 'What your depository participant takes for debiting shares when you sell — about ₹13.50 plus GST per scrip. It applies whether the sale is ₹5,000 or ₹5 lakh.' },
          { term: 'Investor Protection Fund', meaning: 'The exchange fund that compensates clients up to a capped amount if a member broker defaults, which is why you keep only trading money with a broker.' },
          { term: 'Margin Trading Facility (MTF)', meaning: 'A broker lending you part of the cost of a delivery purchase at interest, often 12–18% a year. It magnifies both the gain and the loss.' },
        ],
      },
    ],
    quiz: [
      {
        q: 'Two brokers: one charges ₹0 brokerage on delivery, the other 0.3%. Both are SEBI-registered. Which statement is right?',
        options: [
          { text: 'The free one is a scam', why: 'Zero delivery brokerage is a legitimate, common Indian model — many discount brokers make money elsewhere.' },
          { text: 'The free one is almost certainly cheaper unless you actually use the paid broker’s research and advice', correct: true, why: 'You pay for full service only if you use it. Fifteen years of 0.3% round trips on a growing portfolio is a large, certain cost.' },
          { text: 'They cost exactly the same because statutory charges dominate', why: 'Statutory charges are small; brokerage is the biggest controllable line item.' },
          { text: 'Brokerage is refundable if you complain to SEBI', why: 'SEBI can act on misconduct, but it does not refund agreed brokerage.' },
        ],
      },
      {
        q: 'You sell 5 positions from your demat account on the same day, each in a different company. What should you expect?',
        options: [
          { text: 'One DP charge for the whole day', why: 'DP charges are applied per scrip per sell instruction, not once per day per investor.' },
          { text: 'A separate DP charge per scrip, so about five times the per-scrip fee', correct: true, why: 'This is why consolidating many tiny holdings into an index fund can be cheaper than it first appears.' },
          { text: 'No charge, because DP charges apply only to buys', why: 'They apply on the sell side, when shares are debited from your account.' },
          { text: 'A percentage of the sale value', why: 'DP charges are flat per scrip, not ad valorem.' },
        ],
      },
      {
        q: 'A broker’s “relationship manager” asks for your trading password and OTP to fix a problem. What do you do?',
        options: [
          { text: 'Share it — they work for the broker', why: 'No genuine staff member ever needs your credentials. Sharing them is how accounts get emptied.' },
          { text: 'Refuse, and raise it with the broker’s compliance cell or SEBI', correct: true, why: 'Credentials and OTP are the entire security of your account, and asking for them is a serious red flag worth reporting.' },
          { text: 'Share only the OTP, never the password', why: 'The OTP alone is enough to authorise a fraudulent transaction.' },
          { text: 'Post it on social media to warn others', why: 'Report through official channels; public posting risks exposing details that harm you.' },
        ],
      },
    ],
    takeaway: 'Your broker is a regulated intermediary, not the market itself. Choose on cost, keep only what you need with them, verify the SEBI registration, and never hand over credentials.',
  },

  'l3-030': {
    id: 'l3-030',
    title: 'Demat Accounts',
    subtitle: 'Where your shares actually live',
    minutes: 8,
    blocks: [
      { kind: 'scene', name: 'money-flow', caption: 'When you sell, the shares leave your demat account and the money arrives in your bank — two different systems talking to each other.' },
      { kind: 'p', text: 'Shares live electronically in a demat account, held with one of India’s two depositories: NSDL, set up in 1996, and CDSL, set up in 1999. You do not open an account with a depository directly; you open it through a broker or bank that acts as a Depository Participant, or DP. Well over fifteen crore demat accounts are now open in India, and the fastest growth has been among investors under thirty — this account is the ordinary starting point of an investing life, not a specialist tool.' },
      {
        kind: 'table',
        caption: 'Three accounts, three different jobs',
        headers: ['Account', 'What it holds', 'Who keeps it'],
        rows: [
          ['Bank account', 'Money', 'Your bank'],
          ['Trading account', 'Your ability to place orders and the margin against them', 'Your broker'],
          ['Demat account', 'The shares and other securities you own, with an ISIN for each', 'NSDL or CDSL, through your broker as DP'],
        ],
      },
      {
        kind: 'table',
        caption: 'What a demat account costs, and what it does for you',
        headers: ['Feature', 'Detail'],
        rows: [
          ['Annual maintenance', 'Free at most discount brokers; basic accounts (BSDA) pay nothing below roughly ₹4 lakh of holdings and a capped ₹100 a year up to ₹10 lakh'],
          ['DP charge on selling', 'About ₹13.50 + GST per scrip per sell instruction'],
          ['Corporate actions', 'Bonus shares, splits and dividends are credited automatically, with dividend going to your linked bank account'],
          ['Action still needed from you', 'Rights issues must be subscribed, buybacks must be tendered — silence costs you money'],
          ['Nomination', 'One nominee per account, or you can opt out in writing — do this the day you open the account'],
          ['Verification', 'NSDL and CDSL email you a Consolidated Account Statement of everything held in your PAN; use it to confirm holdings you think are elsewhere'],
        ],
      },
      {
        kind: 'example',
        title: 'The 1990s share certificate in the cupboard',
        text: 'A very common Indian situation: a parent bought 200 physical shares in the 1990s, the certificate is in a steel almirah, and nobody knows what to do with it. The answer is a Demat Request Form routed through a DP with the original certificate, which typically completes in a few weeks. But note what changed: SEBI disallowed transfer of listed securities in physical form from April 2019, so the shares must be dematerialised to be sold. If the holder has died without a nomination, the family needs a death certificate, KYC and the transmission forms, and a succession certificate or probate in the harder cases. The paperwork is cheap to do today and expensive to do twenty years later.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Two things that make shares disappear from your life',
        text: 'First, unclaimed dividends for seven years and shares of companies that have not paid dividends for seven years can be transferred to the government’s Investor Education and Protection Fund — reclaimable, but only through a formal IEPF claim. Second, a demat account that goes unused gets marked dormant, and corporate-action mail stops reaching you even though the holdings remain. Keep your email, mobile and bank details current, and log in at least once a year.',
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'A dead demat account is a serious problem',
        text: 'A frozen or dormant demat account cannot receive a bonus issue or a buyback payout, and it blocks a clean transfer to your heirs. Reactivate it while you are healthy and the paperwork is a form, not a court case.',
      },
      {
        kind: 'list',
        items: [
          'Shares held in a demat account are yours, not your broker’s — moving brokers transfers the holdings, not the ownership.',
          'You can hold the same security with two different DPs; it is the same ISIN in both places.',
          'Mutual fund units usually sit in a folio with the AMC’s registrar rather than in your demat account. Both are fine; a folio is simpler for SIPs, and demat is convenient if you also pledge or trade.',
          'Nomination overrides nothing about your will, but it removes months of delay. In practice, an un-nominated account is the single most common reason families lose access to inherited investments.',
        ],
      },
      { kind: 'sim', name: 'market', caption: 'Buy, hold and sell — the demat account is where the shares actually sit between those moments.' },
      {
        kind: 'terms',
        items: [
          { term: 'Demat account', meaning: 'The electronic account that holds your shares and other securities, opened through a broker or bank acting as a depository participant.' },
          { term: 'Depository', meaning: 'NSDL or CDSL — the institution that actually keeps the securities in your name. Your broker is only the front end to it.' },
          { term: 'Depository Participant (DP)', meaning: 'A SEBI-registered intermediary, usually your broker or bank, through which you open and operate a demat account.' },
          { term: 'Basic Services Demat Account (BSDA)', meaning: 'A low-cost demat account: no annual maintenance charge below roughly ₹4 lakh of holdings and a capped fee up to ₹10 lakh.' },
          { term: 'Transmission', meaning: 'The process of moving shares to heirs after an account holder dies. With a nomination it is paperwork; without one it can need a succession certificate or probate.' },
          { term: 'Nomination', meaning: 'The person you name to receive your demat holdings. It overrides nothing in a will, but it removes months of delay for your family.' },
          { term: 'Corporate action', meaning: 'Anything a company does that affects your holding — bonus, split, dividend, rights issue, buyback. Most are credited automatically; rights issues and buybacks need action from you.' },
          { term: 'IEPF', meaning: 'The Investor Education and Protection Fund, to which unclaimed dividends and long-unclaimed shares can be transferred after seven years. Reclaiming needs a formal application.' },
        ],
      },
    ],
    quiz: [
      {
        q: 'Who actually holds your shares in a demat account?',
        options: [
          { text: 'Your broker', why: 'The broker is only the Depository Participant — the interface. It does not own or hold the securities.' },
          { text: 'A depository — NSDL or CDSL — with your broker acting as the DP', correct: true, why: 'The depository keeps the securities in your name; the DP is the front end through which you operate the account.' },
          { text: 'The exchange', why: 'The exchange matches trades; it does not hold long-term holdings.' },
          { text: 'SEBI', why: 'SEBI regulates the market; it does not custody your shares.' },
        ],
      },
      {
        q: 'Why must a 1990s physical share certificate be dematerialised before it can be sold?',
        options: [
          { text: 'Physical shares have no value any more', why: 'They still represent ownership — they simply cannot be transferred or sold in physical form.' },
          { text: 'SEBI disallowed transfer of listed securities in physical form from April 2019, so demat is the only route to a sale', correct: true, why: 'The certificate has to be converted into electronic form through a Demat Request Form before it can be sold on an exchange.' },
          { text: 'Because companies stopped honouring them', why: 'Companies still honour them for dividends and corporate actions.' },
          { text: 'Only if the value exceeds ₹1 lakh', why: 'There is no such value threshold — the rule applies to all listed securities.' },
        ],
      },
      {
        q: 'Dividends unclaimed for seven years can be transferred to the IEPF. What is the practical lesson?',
        options: [
          { text: 'Dividends are not worth claiming', why: 'They are your money and they compound away from you once they leave your reach.' },
          { text: 'Keep bank and contact details updated and claim promptly — reclaiming from the IEPF later is a formal process', correct: true, why: 'Uncashed dividends and long-unclaimed shares can end up with the IEPF, where recovery needs an application and proof, often years later.' },
          { text: 'The government keeps the money permanently', why: 'It is reclaimable — but only through a claim process with original documents.' },
          { text: 'It only applies to physical shares', why: 'It applies to dividends on demat holdings too.' },
        ],
      },
    ],
    takeaway: 'Your demat account is the legal home of everything you own in the market, and it is administered by a depository through your broker. Nominate it, keep it active, keep the contact details fresh, and read the statement the depository emails you.',
  },

  'l3-031': {
    id: 'l3-031',
    title: 'Trading Accounts',
    subtitle: 'The account that tells the exchange what to do with your money',
    minutes: 6,
    blocks: [
      { kind: 'scene', name: 'money-flow', caption: 'Money and shares travel on different rails, and the trading account is the control room for the money rail.' },
      { kind: 'p', text: 'The trading account is what you actually log into: it places orders, holds your margin, and shows what is settled and what is due. The demat account stores the shares. They are usually opened together through the same broker, and forgetting which is which is the source of most first-year confusion — “my money is in the trading account but the shares are nowhere” simply means a trade has been executed but not yet settled.' },
      {
        kind: 'table',
        caption: 'The trading account rules that changed retail trading in India',
        headers: ['Rule', 'What it means'],
        rows: [
          ['Upfront margin', 'You must have the margin in the account before the order is accepted — no casual over-trading'],
          ['Peak margin, enforced at 100%', 'The practice of taking intraday positions far beyond your capital was effectively retired by SEBI'],
          ['Client fund upstreaming', 'Brokers must move client funds to the clearing corporation rather than holding them, so your idle money is not sitting on a broker’s balance sheet'],
          ['Margin Trading Facility', 'Brokers may fund part of a delivery purchase at interest — useful, and expensive if the position falls'],
          ['Auto square-off', 'Risk management by the broker can close your intraday position without asking you'],
        ],
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'Keep only what you need in the trading account',
        text: 'Money parked in a trading account earns nothing and, if a broker fails, the Investor Protection Fund will only make you whole up to a capped amount. Keep the month’s planned investments there; keep the emergency fund and the long-term corpus in your bank or a liquid fund, where they earn something.',
      },
      {
        kind: 'example',
        title: 'The ₹2 lakh that quietly became a margin loan',
        text: 'An investor keeps ₹2 lakh idle in the trading account while “waiting for the right time”. Over a year that is roughly ₹13,000 of forgone interest on a 6.5% liquid fund — real money spent on indecision. The other version of the same story: using Margin Trading Facility for a ₹2 lakh delivery buy at about 15% a year, which costs ₹30,000 in interest. The leverage doubles the gain and the loss; it does not improve the decision.',
      },
      {
        kind: 'list',
        items: [
          'Sale proceeds are typically available for further trading on the same day, but withdrawable only after settlement.',
          'If you trade F&O or intraday regularly, keep a separate account and separate books: the tax treatment is different and mixing makes the year-end reconciliation painful.',
          'Broker app nudges — “most bought today”, “trending now” — are marketing, not research. They are optimised for your engagement, not your return.',
        ],
      },
      { kind: 'sim', name: 'market', caption: 'Place a trade and watch how the order type, the margin and the settlement timing interact.' },
      {
        kind: 'terms',
        items: [
          { term: 'Trading account', meaning: 'The account through which you place orders and hold margin. It is separate from the demat account, which holds the shares themselves.' },
          { term: 'Upfront margin', meaning: 'The requirement that you have the margin available before an order is accepted, which ended the era of casual over-trading.' },
          { term: 'Peak margin', meaning: 'The rule that margin must cover the largest position you take during the day, enforced at 100% since 2021.' },
          { term: 'Client fund upstreaming', meaning: 'The requirement that brokers move client funds to the clearing corporation rather than holding them, so idle money is not sitting on a broker\'s balance sheet.' },
          { term: 'Auto square-off', meaning: 'The broker\'s risk system closing an intraday position without asking you, once the margin supporting it runs out.' },
        ],
      },
    ],
    quiz: [
      {
        q: 'You buy shares on Monday and the money is debited but no shares show in your demat account by evening. What is happening?',
        options: [
          { text: 'The trade has failed', why: 'Nothing has failed — delivery happens on the settlement date, not on the trade date.' },
          { text: 'The trade is executed and awaiting settlement; the shares will be credited on the settlement day', correct: true, why: 'Under T+1, execution and settlement are one working day apart. The share simply has not arrived yet.' },
          { text: 'The broker has stolen the shares', why: 'Nothing suspicious: execution and settlement are separate events in every market.' },
          { text: 'You bought futures instead of shares', why: 'Futures are a different segment with its own ticket; a normal equity buy behaves exactly as described.' },
        ],
      },
      {
        q: 'What did SEBI’s move to full upfront and peak-margin collection change for a beginner?',
        options: [
          { text: 'It made trading free', why: 'It reduced risky leverage; costs were never the target.' },
          { text: 'It ended the era of large intraday leverage, so a ₹10,000 account can no longer hold ₹2 lakh of positions', correct: true, why: 'Margin must be available before and throughout the position, which caps how much a small account can control.' },
          { text: 'It banned intraday trading', why: 'Intraday trading remains legal — it simply needs real margin behind it.' },
          { text: 'It only applies to F&O', why: 'Margin rules apply across equity cash and derivatives.' },
        ],
      },
      {
        q: 'Why is leaving a large idle balance in the trading account a mistake?',
        options: [
          { text: 'Because the broker charges you rent on it', why: 'There is no rent; the cost is the interest you did not earn.' },
          { text: 'It earns nothing, and if the broker defaults only a capped amount is protected', correct: true, why: 'Idle cash in the trading account is unproductive and carries an institutional risk that a bank deposit or liquid fund does not.' },
          { text: 'It blocks you from receiving dividends', why: 'Dividends go to the bank account linked to your demat, not the trading balance.' },
          { text: 'It increases your tax liability', why: 'An idle balance has no tax consequence.' },
        ],
      },
    ],
    takeaway: 'The trading account is your order desk and your margin box, not a savings account. Fund only what you plan to invest, and remember that execution today and settlement tomorrow are two different events.',
  },

  'l3-032': {
    id: 'l3-032',
    title: 'Bid and Ask',
    subtitle: 'The two sides of every trade',
    minutes: 6,
    blocks: [
      { kind: 'scene', name: 'fee-drag-visual', caption: 'The bid-ask spread is the first cost of owning anything, and it never appears on a contract note.' },
      { kind: 'p', text: 'Every quote has two prices. The bid is the highest price someone is currently willing to pay; the ask (or offer) is the lowest price someone is willing to sell at. The bid is always below the ask — the gap between them is the spread, and it is the fee you pay to a market you have never met. Buy at the ask and sell at the bid, and you have lost the spread before the price has moved at all.' },
      {
        kind: 'table',
        caption: 'What a spread looks like across Indian market segments',
        headers: ['Segment', 'Typical spread', 'What it feels like in rupees'],
        rows: [
          ['Nifty 50 large cap', 'A few paise on a ₹1,000+ share', 'Negligible — often under 0.05%'],
          ['Nifty Next 50 / mid cap', '₹0.20–1 on a ₹500 share', 'About 0.1–0.2%'],
          ['Small cap', '₹1–5 on a ₹200 share', 'Frequently 1–2%'],
          ['SME / barely traded scrip', '₹5–20 on a ₹100 share', 'Several percent, or no quote at all'],
          ['Thinly traded ETFs', 'Wider than the shares they hold', 'A real surprise for first-time ETF buyers'],
        ],
      },
      {
        kind: 'example',
        title: 'The same ₹1 lakh, three different entries',
        text: 'Buy ₹1,00,000 of a Nifty 50 stock: the spread costs perhaps ₹40. Buy ₹1,00,000 of a small cap with a 1.5% spread: about ₹1,500 — gone before the price has moved. Buy ₹1,00,000 of a thinly traded ETF at a 2% premium to its own underlying value and you have paid ₹2,000 to hold exactly what an index fund would have given you at NAV. Ten such decisions a year is a car, over a decade.',
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Liquidity is priced into the spread',
        text: 'Nobody sets the spread out of spite. Market makers and traders quote a wider gap on names they may struggle to exit, because that is their compensation for the risk of being stuck. A wide spread is a market telling you, honestly, that this asset is hard to trade.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Do not use market orders where the spread is wide',
        text: 'A market order in a thin scrip can fill far above the last traded price, because it walks through every level of the book until it is filled. In a wide-spread name, place a limit order at the price you consider fair and wait, or accept that you will not get filled today.',
      },
      {
        kind: 'list',
        items: [
          'A falling spread over a security’s life is usually a sign of growing interest and better depth.',
          'For ETFs, compare the exchange price with the day’s indicative NAV before buying — buying an ETF at a premium is paying for something you could get at par.',
          'The spread is a cost you pay even when your broker charges nothing. “Free” brokerage does not mean a free trade.',
        ],
      },
      { kind: 'sim', name: 'market', caption: 'Watch the gap between the best buy and best sell price — that gap is the first cost of any trade.' },
      {
        kind: 'terms',
        items: [
          { term: 'Bid', meaning: 'The highest price a buyer is currently willing to pay. Selling at market means selling to the bid.' },
          { term: 'Ask (offer)', meaning: 'The lowest price a seller is currently willing to accept. Buying at market means paying the ask.' },
          { term: 'Bid-ask spread', meaning: 'The gap between the bid and the ask — the first, invisible cost of any trade. It is a few paise on a Nifty 50 stock and several percent on an illiquid small cap.' },
          { term: 'Liquidity', meaning: 'How quickly and cheaply an asset can be bought or sold without moving its price. Thin liquidity shows up as a wide spread and painful fills.' },
        ],
      },
    ],
    quiz: [
      {
        q: 'A share has a bid of ₹998 and an ask of ₹1,002. You buy and immediately sell at market. What happens?',
        options: [
          { text: 'You break even', why: 'You cannot buy at the bid and sell at the ask — those are the prices on the wrong side for you.' },
          { text: 'You lose about ₹4 on the round trip, before any brokerage', correct: true, why: 'You buy at ₹1,002 and sell at ₹998. That ₹4 spread is the market’s charge for immediate execution in both directions.' },
          { text: 'You gain ₹4', why: 'The spread works against the person crossing it, which is you.' },
          { text: 'The exchange refunds the spread', why: 'No exchange refunds the cost of liquidity.' },
        ],
      },
      {
        q: 'Why is the spread on an illiquid small cap so much wider than on a Nifty 50 stock?',
        options: [
          { text: 'Because small caps are more expensive to hold', why: 'Holding cost is unrelated to the quoted spread.' },
          { text: 'Because whoever quotes a price there is being paid for the risk of not being able to exit quickly', correct: true, why: 'Market makers widen quotes where inventory risk is high. The wide spread is the price of poor liquidity.' },
          { text: 'Because the exchange sets wider bands for small caps', why: 'Price bands limit daily movement; they do not determine the spread.' },
          { text: 'Because brokerage is higher on small caps', why: 'Brokerage is usually the same regardless of the scrip.' },
        ],
      },
      {
        q: 'What is the practical rule when the spread is wide?',
        options: [
          { text: 'Use a market order so you definitely get filled', why: 'That guarantees the worst possible fill, potentially several percent away from the screen price.' },
          { text: 'Use a limit order at a price you are willing to pay, and accept that you may not get filled today', correct: true, why: 'A limit order caps what you pay; waiting is usually cheaper than crossing a wide spread in a hurry.' },
          { text: 'Split the order into fifty tiny orders', why: 'That multiplies DP and brokerage charges and does not fix the spread.' },
          { text: 'Buy from another investor directly', why: 'Off-market transfers between individuals are possible but do not solve the liquidity problem of a thin scrip.' },
        ],
      },
    ],
    takeaway: 'Every trade pays a spread, and the thinner the market, the more it costs. Check the spread before you check the chart — a low price is not a cheap purchase if exiting it costs 2%.',
  },

  'l3-033': {
    id: 'l3-033',
    title: 'Market Orders',
    subtitle: 'Execute now, at whatever the price is',
    minutes: 5,
    blocks: [
      { kind: 'scene', name: 'safe-vs-risk', caption: 'A market order trades price certainty for execution certainty. That trade is worth making only when the market is deep.' },
      { kind: 'p', text: 'A market order says: fill me now, at the best available price. It guarantees execution and guarantees nothing about price. In a Nifty 50 stock that is a perfectly reasonable instruction — you will fill within a few paise of the screen price. In a thin small cap or an SME scrip it is closer to writing a blank cheque, because your order walks up (or down) the order book until it is exhausted.' },
      {
        kind: 'table',
        caption: 'When a market order is fine, and when it is not',
        headers: ['Situation', 'Market order?', 'Why'],
        rows: [
          ['Large-cap stock, normal hours', 'Fine', 'Deep book, tiny spread, essentially no slippage'],
          ['First few minutes after the open', 'Risky', 'The opening auction can be wildly wide before the book settles'],
          ['Illiquid small cap', 'Avoid', 'Slippage of several percent is routine'],
          ['ETF with a thin secondary market', 'Avoid', 'You can pay well above the fund’s own NAV'],
          ['Exiting in a panic on a limit-down day', 'Pointless', 'There may be no buyers at any price you would accept'],
        ],
      },
      {
        kind: 'example',
        title: 'The classic retail loss',
        text: 'A ₹40,000 market order in a small cap quoted at ₹210, with only 30 shares available at that price. The order fills at ₹210 for 30 shares, ₹214 for the next 100, ₹219 for the next 200 and ₹226 for the rest — an average of about ₹220. The screen still shows ₹210 when you look again two minutes later, and you are already 4.5% down on the position with the price yet to move. The same order as a limit at ₹212 would have filled partly, or not at all, which is exactly the outcome you should want.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'The five-second fix',
        text: 'Before every market order, look at the depth on the buy and sell side of the order book. If the first few levels hold far less quantity than you are trying to buy, switch to a limit order with a small buffer above the ask — usually two or three paise on a liquid name, more on a thin one.',
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'Price bands and circuit limits change the rules mid-order',
        text: 'Every scrip has a daily price band — commonly 20% for large caps and narrower for illiquid names. If a stock locks at the upper or lower circuit, a market order cannot fill at all, because there are no counterparties inside the band. Your order sits pending until the price re-enters the band. This happens in real Indian small caps every week, and it is a liquidity risk no strategy can trade its way out of.',
      },
      { kind: 'sim', name: 'market', caption: 'A market order accepts whatever the book offers — try it in a deep market and then in a thin one.' },
      {
        kind: 'terms',
        items: [
          { term: 'Market order', meaning: 'An instruction to buy or sell immediately at the best available price. It guarantees execution, never the price.' },
          { term: 'Slippage', meaning: 'The difference between the price you saw and the price you got. It is negligible in a deep market and expensive in a thin one.' },
          { term: 'Pre-open session', meaning: 'The 9:00–9:15 am auction that discovers the opening price before continuous trading begins.' },
        ],
      },
    ],
    quiz: [
      {
        q: 'You need to buy 1,000 shares of a Nifty 50 company today. What is normally the right instruction?',
        options: [
          { text: 'A market order is fine — the book is deep and slippage will be negligible', correct: true, why: 'With thousands of shares available at every level, a market order fills within a paise or two of the screen price.' },
          { text: 'Never use a market order under any circumstances', why: 'Too absolute. In liquid names the execution benefit of a market order outweighs a difference measured in paise.' },
          { text: 'Split it into 100 orders of 10 shares', why: 'That multiplies charges and delays without meaningfully improving the fill.' },
          { text: 'Only trade at the opening auction', why: 'The open is one of the most volatile moments of the day for a large order.' },
        ],
      },
      {
        q: 'A stock is locked at its 20% upper circuit for the day. You place a market buy order. What happens?',
        options: [
          { text: 'It fills instantly at the circuit price', why: 'A locked circuit means there are no sellers inside the band, so nothing fills.' },
          { text: 'It stays pending because there are no counterparties inside the allowed price band', correct: true, why: 'Circuit limits cap how far a scrip can move in a day. Once locked, buyers and sellers cannot meet, and orders queue until the band reopens.' },
          { text: 'It is rejected by the exchange', why: 'The order is accepted and pending, not rejected.' },
          { text: 'The exchange raises the band for you', why: 'Bands are applied uniformly across all participants.' },
        ],
      },
      {
        q: 'Why is placing market orders in the first two minutes after 9:15 am a bad habit?',
        options: [
          { text: 'The exchange is closed then', why: 'Trading is open from 9:15 am; the pre-open session runs before it.' },
          { text: 'The book is thin and volatile right after the open, so the price you get can be far from the one you saw', correct: true, why: 'Overnight news is absorbed in the first minutes, and depth builds gradually. Waiting for the book to settle usually gets a better fill.' },
          { text: 'Brokerage is higher at the open', why: 'Brokerage does not vary by time of day.' },
          { text: 'Only institutional investors may trade at the open', why: 'Everyone can trade from the open.' },
        ],
      },
    ],
    takeaway: 'A market order buys certainty of execution and sells certainty of price. Use it where the market is deep, avoid it where it is thin, and always check the depth before you tap buy.',
  },

  'l3-034': {
    id: 'l3-034',
    title: 'Limit Orders',
    subtitle: 'Choose your price, accept the risk of no trade',
    minutes: 6,
    blocks: [
      { kind: 'scene', name: 'opportunity-fork', caption: 'Two roads: guaranteed execution with uncertain price, or a guaranteed price with uncertain execution.' },
      { kind: 'p', text: 'A limit order states the worst price you will accept. “Buy 50 at ₹1,200” fills only at ₹1,200 or lower. It gives you price control in exchange for execution risk: the market may never come to your price, in which case you simply do not trade — which is often the correct outcome.' },
      {
        kind: 'table',
        caption: 'The order types an Indian retail investor actually uses',
        headers: ['Order type', 'What it does', 'Where it helps'],
        rows: [
          ['Limit (DAY)', 'Rests in the book for the trading day at your price', 'Most buying and selling'],
          ['Limit (IOC)', 'Immediate or cancel — fills what it can at once, cancels the rest', 'Avoiding a resting order you may forget'],
          ['Stop-loss (SL) and SL-M', 'Triggers a market or limit order once a trigger price trades', 'Capping a loss on a position you cannot watch all day'],
          ['Cover order / bracket order', 'An intraday entry with an attached stop and target', 'Intraday risk control, not investing'],
          ['GTT — good till triggered', 'A broker feature that watches your price for weeks or months', 'Buying dips and booking profits without logging in daily'],
        ],
      },
      {
        kind: 'example',
        title: 'Two ways to buy the same ₹1,000 stock',
        text: 'Investor A puts in a market order at 9:20 am on a nervous morning and buys at ₹1,028 — ₹28 above the previous close. Investor B places a limit at ₹1,000 and it fills three days later during a routine pullback. Same company, same ₹1,00,000 invested, but B owns about 3% more shares for the same money. Over a decade and a dozen such decisions, that gap is a meaningful part of the difference between two identical investors.',
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'A limit order is also a discipline device',
        text: 'The moment you must name a price you are willing to pay, you have to decide what the business is worth. That single act kills most impulse buying. If you cannot justify ₹1,200, you have no business buying at ₹1,250 because the chart looks excited.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Stop-losses are not free insurance in India',
        text: 'On an illiquid or circuit-locked scrip, an SL-M order can trigger and then fill far below your trigger price, because the market gaps through the level. A stop-loss protects you from a slow decline, not from a crash or a lower-circuit day. Size the position so that the gap risk is survivable.',
      },
      {
        kind: 'list',
        items: [
          'A resting limit order you have forgotten about is a real risk: check open orders once a week, and clear the ones you no longer want.',
          'For SIP-style buying of a single stock, a standing GTT at a fixed price is a reasonable mechanic — but it is not a substitute for a mutual fund SIP, which invests on a date regardless of price.',
          'Partial fills are normal: a ₹1,00,000 limit order may fill ₹60,000 today and the rest tomorrow. That is the market working as designed.',
        ],
      },
      { kind: 'sim', name: 'market', caption: 'A limit order sets your price; the trade may or may not happen — watch both possibilities play out.' },
      {
        kind: 'terms',
        items: [
          { term: 'Limit order', meaning: 'An order stating the worst price you will accept. It gives you price control and takes away the guarantee of getting filled.' },
          { term: 'Stop-loss order', meaning: 'An order that becomes live once a trigger price trades. Useful for capping a loss, but it guarantees the trigger, not the fill.' },
          { term: 'Good Till Triggered (GTT)', meaning: 'A broker feature that keeps a buy or sell instruction alive for weeks or months until your price trades, so you need not log in daily.' },
          { term: 'Immediate or cancel (IOC)', meaning: 'An order instruction that fills what it can at once and cancels the rest, leaving nothing resting in the book.' },
          { term: 'Cover order', meaning: 'An intraday order with an attached stop-loss, so the risk is defined when you enter the trade.' },
        ],
      },
    ],
    quiz: [
      {
        q: 'You place a buy limit at ₹500 while the stock trades at ₹505. What happens?',
        options: [
          { text: 'It fills immediately at ₹505', why: 'A limit order never pays more than your limit price.' },
          { text: 'It rests in the book and fills only if the price falls to ₹500 or below before the order expires', correct: true, why: 'That is exactly the trade-off: price certainty bought with execution uncertainty.' },
          { text: 'It converts to a market order at the close', why: 'Day orders expire unfilled at the close of trading.' },
          { text: 'The broker adjusts the price automatically', why: 'No broker modifies your limit price.' },
        ],
      },
      {
        q: 'When can a stop-loss market order hurt you more than it helps?',
        options: [
          { text: 'Never — stop-losses guarantee your exit price', why: 'They guarantee a trigger, not a price. In a gap or a locked circuit, the fill can be far below the trigger.' },
          { text: 'On an illiquid or circuit-locked scrip, where the fill can be much worse than the trigger price', correct: true, why: 'Stop orders become market orders once triggered, so the same slippage risk applies — precisely in the situation you were trying to survive.' },
          { text: 'Only on a Friday', why: 'There is no day-of-week effect on stop-losses.' },
          { text: 'When the stock is rising', why: 'A stop-loss on a rising position simply does not trigger.' },
        ],
      },
      {
        q: 'A ₹1,00,000 limit order fills for only ₹60,000. What should you do?',
        options: [
          { text: 'Cancel the rest and use a market order for the balance', why: 'That reintroduces exactly the price risk the limit order was meant to avoid.' },
          { text: 'Leave the remainder resting if you are still happy with the price, or adjust it if your view changed', correct: true, why: 'Partial fills are normal, and the resting quantity keeps your price discipline intact.' },
          { text: 'Complain to SEBI', why: 'Partial fills are expected market behaviour, not misconduct.' },
          { text: 'Nothing is possible — the order is void', why: 'The unfilled quantity stays live until the order expires or you cancel it.' },
        ],
      },
    ],
    takeaway: 'A limit order is the beginner’s best friend: it caps your price, forces you to decide what something is worth, and makes “no trade” an acceptable outcome. Use market orders only where the book is deep.',
  },

  'l3-035': {
    id: 'l3-035',
    title: 'Settlement',
    subtitle: 'When the trade actually becomes real',
    minutes: 7,
    blocks: [
      { kind: 'scene', name: 'timeline', caption: 'Trade today, shares and money tomorrow. India shortened that gap more aggressively than almost any major market.' },
      { kind: 'p', text: 'A trade is a promise; settlement is the delivery. Settlement is the process in which your money reaches the seller and the shares reach your demat account, through the exchange’s clearing corporation. In India the standard cycle is T+1 — trade day plus one working day — and since 27 January 2023 it has applied to the entire equity cash market, after a phased rollout that began in early 2021 with the least liquid scrips. India was among the first major markets in the world to get there; most developed markets were still on T+2.' },
      {
        kind: 'table',
        caption: 'What actually happens between T and T+1',
        headers: ['Stage', 'When', 'What happens'],
        rows: [
          ['Order match', 'T, instantly', 'The exchange matches your buy with someone’s sell'],
          ['Trade confirmation', 'T, same day', 'Both sides are contractually obliged — no casual cancellation'],
          ['Funds blocking', 'T', 'The buy value is blocked or debited; sale proceeds are typically usable for further trading the same day'],
          ['Pay-in', 'T+1, morning', 'You deliver money or shares to the clearing corporation'],
          ['Pay-out', 'T+1, by early afternoon', 'Shares land in your demat account or money in your bank'],
          ['Withdrawal', 'After pay-out', 'Money leaves the broker’s books once settlement completes'],
        ],
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'T+1 changed the game, quietly',
        text: 'Shorter settlement means your money is not sitting in limbo for two days while a price moves against you. It also shrinks the window for the practice of selling shares you have not yet received — “buy today, sell tomorrow” — because the shares arrive sooner than they used to. India began an optional beta of even shorter T+0 settlement in 2024 for a small, expanding list of scrips, which is where this is eventually heading.',
      },
      {
        kind: 'example',
        title: 'What happens when delivery fails',
        text: 'If a seller does not deliver shares by pay-in, the exchange conducts an auction on the next trading day: it buys the shares from the open market at whatever price prevails, and the defaulting member bears the cost plus a penalty. As a buyer you still receive your shares — that is exactly what the clearing corporation’s guarantee is for. As a beginner the practical warning is different: never sell shares you have not yet received and cannot be sure of delivering, because a failed delivery turns a bad trade into a bill.',
      },
      {
        kind: 'table',
        caption: 'Three timing facts that affect real decisions',
        headers: ['Question', 'Answer'],
        rows: [
          ['Can I sell a share I bought today?', 'Usually yes, and the exchange nets the obligations — but you must be able to deliver, so treat it as dealing, not investing'],
          ['When do I get a dividend after buying?', 'You must be on the register at the end of the day before the ex-date, so settle before you assume the dividend is yours'],
          ['When can I move sale money to my bank?', 'After pay-out on the settlement day, not on the day you sell'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Settlement speed is a measure of market quality',
        text: 'The faster the settlement, the less capital is tied up in transit, the smaller the risk of a counterparty walking away, and the cheaper it is for everyone to trade. When you read that India moved to T+1, this is what it bought: not a cheaper fee, but a structurally safer market for you.',
      },
      { kind: 'sim', name: 'market', caption: 'You pay now and receive the shares a day later — see the timing at work across a full cycle.' },
      {
        kind: 'terms',
        items: [
          { term: 'Settlement cycle (T+1)', meaning: 'India\'s equity settlement standard since 27 January 2023: trade today, shares and money tomorrow. An optional T+0 beta began in 2024.' },
          { term: 'Pay-in and pay-out', meaning: 'The stages on the settlement day when money and shares are handed to the clearing corporation and then delivered to the buyer.' },
          { term: 'Short delivery auction', meaning: 'What the exchange runs when a seller fails to deliver: it buys the shares in the open market and charges the defaulting member the cost plus a penalty.' },
          { term: 'Buy today, sell tomorrow (BTST)', meaning: 'Selling shares before you have received delivery, relying on the exchange to net the obligations. It works, but a failed delivery turns a bad trade into a bill.' },
        ],
      },
    ],
    quiz: [
      {
        q: 'You sell shares on Tuesday. When can you expect the money to be withdrawable from your account?',
        options: [
          { text: 'On Tuesday, immediately after the sale', why: 'The proceeds become usable for trading the same day, but they are not withdrawable until settlement.' },
          { text: 'On Wednesday, after the T+1 pay-out', correct: true, why: 'Under T+1, the seller’s money is paid out on the next working day, once the delivery obligation is settled.' },
          { text: 'On Friday', why: 'That was the old T+2-era assumption; India has settled on T+1 since January 2023.' },
          { text: 'Only when the buyer confirms receipt', why: 'The clearing corporation guarantees settlement; you do not wait on the buyer’s goodwill.' },
        ],
      },
      {
        q: 'A member fails to deliver shares it promised to sell. What happens to you as the buyer?',
        options: [
          { text: 'You lose the money you paid', why: 'The clearing corporation stands behind the trade — that is precisely what novation means.' },
          { text: 'The exchange auctions the shares and recovers the cost from the defaulting member, and you still receive your shares', correct: true, why: 'Auction plus penalty on the defaulter is the standard Indian mechanism. Your settlement is protected.' },
          { text: 'You must buy the shares again yourself', why: 'That would leave you exposed to a price move you did not cause.' },
          { text: 'Your broker pays for them out of pocket', why: 'The clearing corporation and the defaulter bear the cost, not your broker.' },
        ],
      },
      {
        q: 'Why does settlement timing matter for a dividend you are trying to capture?',
        options: [
          { text: 'It does not — dividends follow the trade date', why: 'Entitlement follows the record date and the ex-date, not the day you clicked buy.' },
          { text: 'You must be a holder of record by the end of the day before the ex-date, so you need to settle before then', correct: true, why: 'Buying on or after the ex-date means the seller keeps the dividend, and the price adjusts accordingly anyway.' },
          { text: 'Settlement speed decides the dividend amount', why: 'The amount is declared per share; settlement timing only affects who receives it.' },
          { text: 'Dividends are paid only on T+1', why: 'Dividend payments follow the record and payment dates declared by the company.' },
        ],
      },
    ],
    takeaway: 'Settlement is where a promise becomes ownership: T+1 in India, guaranteed by the clearing corporation, with auctions to punish failed delivery. Money and shares move a day after you trade — plan your cash around that.',
  },
}
