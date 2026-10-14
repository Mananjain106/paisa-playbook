import type { Chapter } from '../../types'

/** Level 3, chapters 21–35: owning equity, from shares to settlement. */
export const equity: Record<string, Chapter> = {
  'l3-021': {
    id: 'l3-021',
    title: 'Stocks',
    subtitle: 'Owning a slice of a business, not a lottery ticket',
    minutes: 6,
    blocks: [
      { kind: 'scene', name: 'share-slice', caption: 'A share is a slice of the whole company — including its debt and its risks.' },
      { kind: 'p', text: 'A stock is a unit of ownership in a company. When you own shares, you own a slice of its factories, its brand, its cash and its problems. Stock prices move because that slice is being re-valued in the market millions of times a day.' },
      {
        kind: 'table',
        caption: 'What a share price reflects',
        headers: ['Pushes price up', 'Pushes price down'],
        rows: [
          ['Rising profits', 'Falling profits'],
          ['Debt being repaid', 'Rising debt'],
          ['A new product or market', 'A failed product or lost market'],
          ['Stable regulation', 'Regulatory or tax shocks'],
          ['Expansion into a new geography', 'A scandal or governance failure'],
          ['A broader market rally', 'A sector-wide sell-off'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Long term means business, not chart',
        text: 'Over ten years, a company that grew profits will usually have a higher share price. What usually destroys that outcome is not bad analysis — it is buying or selling at the wrong time.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Equity is the asset class most likely to halve',
        text: 'Globally, equities have had multi-year periods with negative total returns. In India the longest were painful but survivable. This is not a niche risk; it is the price of the asset class.',
      },
    ],
    quiz: [
      {
        q: 'A company\'s profits rise 20% but its share price falls 15% over the same year. The most likely reason:',
        options: [
          { text: 'The market has stopped caring about profits', why: 'Profits are the main thing the market cares about over time.' },
          { text: 'The market now expects even faster growth next year', correct: true, why: 'A price reflects expectations, not just reality. Good news already priced in produces a fall when the bar moves higher.' },
          { text: 'The company issued more shares', why: 'Dilution can do this, but the general explanation is expectations, not dilution.' },
          { text: 'Profits are a poor measure of business health', why: 'Cash flow and margins matter too, but this is not the usual explanation for a fall on rising profit.' },
        ],
      },
    ],
    takeaway: 'A share is a real business. Over long periods, business growth drives prices — but expectations and timing decide what happens to you in the years that matter.',
  },

  'l3-022': {
    id: 'l3-022',
    title: 'Shares',
    subtitle: 'The unit of ownership and how it is measured',
    minutes: 5,
    blocks: [

      { kind: 'scene', name: 'share-slice', caption: 'One unit of ownership — your slice of the whole company.' },


      { kind: 'p', text: 'A share is one unit of ownership. Your ownership percentage is your shares divided by the company\'s total shares. Owning 100 of a company with 10,000 shares outstanding means you own 1% — and you are entitled to 1% of the dividends and, eventually, 1% of what is left after every creditor is paid.' },
      {
        kind: 'formula',
        label: 'Your actual ownership',
        expr: 'Ownership % = (Your shares ÷ Total shares outstanding) × 100',
        note: 'Market capitalisation is simply the share price multiplied by total shares.',
      },
      {
        kind: 'table',
        caption: 'Two things shares are not',
        headers: ['Not this', 'Because'],
        rows: [
          ['A lottery ticket', 'Your chance of profiting is good if the business is sound and you hold long enough'],
          ['A guaranteed saving', 'The price can halve and stay there for years'],
          ['Something you can predict daily', 'It is re-priced continuously by millions of buyers and sellers'],
        ],
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Owning a small amount is a real lesson',
        text: 'Buying a small position in a few well-run companies teaches you how the market actually feels — the boredom, the panic and the paperwork — for a stake small enough that a mistake does not hurt.',
      },
    ],
    quiz: [
      {
        q: 'You own 500 shares in a company with 100,000 shares outstanding. Your ownership is:',
        options: [
          { text: '5%', correct: true, why: '500 ÷ 100,000 = 0.5%. The share price is irrelevant to the percentage.' },
          { text: '0.5%', why: 'That is the correct answer; this option states it as the incorrect one.' },
          { text: '500%', why: 'Ownership cannot exceed 100%.' },
          { text: 'It depends on the share price', why: 'Price affects what your stake is worth, not what fraction of the company it represents.' },
        ],
      },
    ],
    takeaway: 'Shares divide a company into equal slices. Your percentage is fixed by share counts, while the value of that slice changes every single trading day.',
  },

  'l3-023': {
    id: 'l3-023',
    title: 'Equity Ownership',
    subtitle: 'What you actually get as part-owner',
    minutes: 5,
    blocks: [

      { kind: 'scene', name: 'share-slice', caption: 'As an owner you get votes, dividends if declared, and a residual claim.' },


      { kind: 'p', text: 'Owning equity means three rights: a share of the profits if the board declares a dividend, a vote on decisions at the annual general meeting, and a claim on what remains if the company is wound up — but only after every creditor has been paid first.' },
      {
        kind: 'table',
        caption: 'Your rights, honestly',
        headers: ['Right', 'Reality'],
        rows: [
          ['Vote', 'One vote per share, or one vote per share for most Indian companies — tiny holders rarely sway votes'],
          ['Dividend', 'Only if the board declares one. Dividends are not guaranteed and can be cut.'],
          ['Residual claim', 'You come last, after employees, lenders and preferred holders'],
          ['Information', 'Quarterly results, annual report and disclosures on exchange filings'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Equity means you are last in line',
        text: 'In a bankruptcy, secured lenders, then unsecured lenders, then preference shareholders, and only then ordinary shareholders. The equity holder absorbs the largest loss — and that is exactly why equity earns the highest long-run return.',
      },
    ],
    quiz: [
      {
        q: 'In a company winding up, who is paid first?',
        options: [
          { text: 'Ordinary shareholders', why: 'They are last — that residual risk is precisely what they are compensated for.' },
          { text: 'Secured and unsecured lenders', correct: true, why: 'Debt holders have contractual claims paid before equity ever sees anything.' },
          { text: 'The founders', why: 'Founders usually hold shares, which puts them at the same last-in-line position.' },
          { text: 'Employees', why: 'Employee dues have priority in Indian insolvency, ahead of shareholders, though after secured creditors.' },
        ],
      },
    ],
    takeaway: 'As an owner you can vote, receive dividends if declared, and share in what is left after everyone else. Being last in line is the risk that pays you for owning equity.',
  },

  'l3-024': {
    id: 'l3-024',
    title: 'Dividends',
    subtitle: 'Cash handed to you for owning the business',
    minutes: 5,
    blocks: [
      { kind: 'scene', name: 'dividend-stream', caption: 'Dividends arrive without any action from you. Growth on top is the part that compounds.' },
      { kind: 'p', text: 'A dividend is a portion of profit distributed to shareholders, usually as cash. The amount is decided by the board, not guaranteed, and can be cut in a bad year. India abolished Dividend Distribution Tax in 2020 — dividends are now taxable in your hands at your slab rate, with TDS deducted above ₹5,000 a year.' },
      {
        kind: 'formula',
        label: 'Dividend yield',
        expr: 'Dividend yield = Annual dividend per share ÷ Share price × 100',
        note: 'A ₹2 dividend on a ₹200 share is a 1% yield — much lower than most people assume when they see a "big" dividend number.',
      },
      {
        kind: 'table',
        caption: 'Dividend or capital gain?',
        headers: ['Dividend', 'Capital gain'],
        rows: [
          ['Income now', 'Income when you sell'],
          ['Paid from cash the company holds', 'Paid from price appreciation'],
          ['Taxed at your slab rate, with TDS above ₹5,000', 'LTCG on listed equity taxed at 12.5% above ₹1.25 lakh'],
          ['Not guaranteed', 'Also not guaranteed'],
          ['Useful for ongoing income', 'Better for long-term growth in most cases'],
        ],
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'A high dividend yield can be a warning',
        text: 'A yield far above the sector usually means the share price has collapsed, not that the company is generous. Before buying a "9% yield" stock, check whether profits are falling — the dividend may be about to be cut.',
      },
    ],
    quiz: [
      {
        q: 'A share at ₹500 pays a ₹40 dividend. Its dividend yield is:',
        options: [
          { text: '8%', correct: true, why: '40 ÷ 500 = 8%. This is a high yield, which is worth questioning rather than celebrating.' },
          { text: '40%', why: 'That would be 40 ÷ 100 — not how yield works.' },
          { text: '12.5%', why: 'That is 500 ÷ 40, the inverse.' },
          { text: '₹40 per share', why: 'That is the dividend amount, not the yield.' },
        ],
      },
      {
        q: 'A stock suddenly offers a 12% dividend yield, far above its sector. What should you check first?',
        options: [
          { text: 'Nothing — a high yield is obviously good', why: 'A very high yield usually signals a problem, not generosity.' },
          { text: 'Whether the share price has collapsed and profits are falling', correct: true, why: 'Yield rises when price falls. An imminent dividend cut is a common reason for the apparent value.' },
          { text: 'Whether the company is large-cap', why: 'Company size does not explain an unusual yield.' },
          { text: 'Whether it is a dividend-arbitrage opportunity', why: 'There is no free arbitrage in a dividend that is about to be cut.' },
        ],
      },
    ],
    takeaway: 'Dividends are income you receive for owning, not a guaranteed payment. And a yield much higher than the sector usually signals falling price or falling profits rather than a bargain.',
  },

  'l3-025': {
    id: 'l3-025',
    title: 'Capital Gains',
    subtitle: 'Profit from a change in price — where most returns actually come from',
    minutes: 6,
    blocks: [

      { kind: 'scene', name: 'profit-waterfall', caption: 'Most long-term returns are capital gains, not dividends.' },


      { kind: 'p', text: 'Capital gain is the profit you make when the sale price exceeds the purchase price. For most long-term investors it is the dominant source of return — dividends typically contribute a fraction of it. Indian tax rates depend on how long you held.' },
      {
        kind: 'table',
        caption: 'Holding period decides the tax treatment',
        headers: ['Held for', 'Category', 'Indicative tax'],
        rows: [
          ['Listed equity — under 12 months', 'Short-term', '20% on listed equity (s.111A)'],
          ['Listed equity — 12 months or more', 'Long-term', '12.5% above ₹1.25 lakh, no indexation (s.112A)'],
          ['Debt funds & deposits — any holding', 'Slab', 'Taxed at your slab rate; no indexation'],
          ['Property — 24 months or more', 'Long-term', '12.5% without indexation (20% with it only for pre-23-Jul-2024 buys)'],
        ],
      },
      {
        kind: 'formula',
        label: 'How the gain is measured',
        expr: 'Capital gain = Selling price − (Purchase price + transaction costs)',
        note: 'Stamp duty, brokerage and SEBI charges all count toward your cost. Buy and sell charges can quietly shave 1–2% off a round trip.',
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'Holding longer is not just about tax',
        text: 'Crossing twelve months removes the short-term penalty and, more importantly, keeps you out of the frequent-trading trap. Money that moves constantly is paying costs and crystallising gains before they compound.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Set-off losses have rules',
        text: 'Capital losses can be set off only against capital gains — a short-term loss against any gain, a long-term loss against long-term gains only — and unabsorbed losses carry forward for up to eight years. They cannot be set off against salary or other income, so this is where a CA earns their fee.',
      },
    ],
    quiz: [
      {
        q: 'You buy at ₹100 and sell at ₹150 after two years. Your gross capital gain is:',
        options: [
          { text: '₹50, or 50%', correct: true, why: '₹150 − ₹100 = ₹50, a 50% gain on your cost, before charges and tax.' },
          { text: '₹50, or 33%', why: 'The gain is ₹50; expressing it against the final value (₹50 of ₹150) gives 33%, but returns are measured against what you paid — 50%.' },
          { text: '₹150', why: 'That is the selling price, not the gain.' },
          { text: '₹25, after tax', why: 'Tax depends on your slab and holding period; ₹25 is not a standard outcome.' },
        ],
      },
      {
        q: 'Why does holding a stock beyond twelve months usually help?',
        options: [
          { text: 'The company pays you more dividend', why: 'Dividends do not depend on your holding period.' },
          { text: 'It moves you to a lower long-term tax rate and reduces the urge to trade', correct: true, why: 'LTCG is taxed far more lightly than short-term gains, and long holding periods cut transaction costs and behavioural errors.' },
          { text: 'The share price is guaranteed to be higher', why: 'Nothing guarantees a higher price.' },
          { text: 'Brokerage stops applying', why: 'Brokerage applies on every trade regardless of holding period.' },
        ],
      },
    ],
    takeaway: 'Most long-term returns are capital gains, not dividends. Measure your gain against what you paid, include transaction costs, and hold long enough for both the tax and the behaviour to work in your favour.',
  },

  'l3-026': {
    id: 'l3-026',
    title: 'Stock Exchanges',
    subtitle: 'The marketplace where shares change hands',
    minutes: 5,
    blocks: [

      { kind: 'scene', name: 'market-cap-ladder', caption: 'The exchange is the regulated marketplace where shares change hands.' },


      { kind: 'p', text: 'A stock exchange is a regulated marketplace where shares are bought and sold. In India every listed company trades on one of two exchanges, and both must follow SEBI\'s rules on disclosure, listing and settlement.' },
      {
        kind: 'table',
        caption: 'What an exchange does for you',
        headers: ['Function', 'Why it matters'],
        rows: [
          ['Listing standards', 'A listed company must publish audited results and regular disclosures'],
          ['Trading mechanism', 'Ensures shares can actually be bought and sold at a fair price'],
          ['Settlement guarantee', 'The exchange guarantees delivery — you get the shares, not a promise'],
          ['Surveillance', 'Reduces manipulation and insider trading'],
          ['Regulation link', 'SEBI oversees the exchange and the brokers on it'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Where a share trades does not change what it is',
        text: 'The same Infosys share can trade on both NSE and BSE at slightly different prices. You are buying the identical ownership either way — exchange choice affects liquidity and fees, not fundamentals.',
      },
    ],
    quiz: [
      {
        q: 'A company is listed only on the BSE, not the NSE. What does this mean for you?',
        options: [
          { text: 'You cannot buy its shares at all', why: 'You can buy on the BSE; it is one of India\'s two main exchanges.' },
          { text: 'You can buy on the BSE; the shares are the same wherever they trade', correct: true, why: 'Exchange choice affects liquidity and charges, not the underlying ownership.' },
          { text: 'The share is less trustworthy', why: 'Listing standards are SEBI-mandated and comparable across exchanges.' },
          { text: 'You can only buy in the company\'s home city', why: 'There is no geographic restriction.' },
        ],
      },
    ],
    takeaway: 'The exchange is the regulated marketplace that guarantees delivery and disclosure. Which one you use changes costs and liquidity, not the fundamental asset you own.',
  },

  'l3-027': {
    id: 'l3-027',
    title: 'NSE',
    subtitle: 'India\'s largest exchange by trading volume',
    minutes: 4,
    blocks: [

      { kind: 'scene', name: 'market-cap-ladder', caption: 'The NSE handles most Indian equity volume — tighter spreads matter more than small fee differences.' },


      { kind: 'p', text: 'The National Stock Exchange of India runs the NSE, which handles the large majority of India\'s cash-market trading volume. Its Nifty indices are the most widely quoted benchmark for Indian equities.' },
      {
        kind: 'list',
        items: ['Over 4,000 listed companies.', 'Drives most of the derivative and index-segment volume too.', 'Lower spreads on heavily traded large caps than most other venues.', 'Nifty 50 and Nifty Next 50 indices are computed here.'] },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Liquidity beats a small fee saving',
        text: 'A ₹0.50 cheaper trade on a thinly traded stock is worth less than a ₹0.01 cost on a liquid one, because a wide spread means you pay more on the other side anyway. For ordinary retail investors, default to the most liquid venue.',
      },
    ],
    quiz: [
      {
        q: 'Why do most Indian retail investors get better execution on the NSE than on a thin regional exchange?',
        options: [
          { text: 'The NSE charges lower brokerage', why: 'Brokerage is usually a flat amount regardless of exchange, and some other venues charge less.' },
          { text: 'Tighter spreads mean the buy and sell prices are closer together', correct: true, why: 'On a liquid stock you pay a smaller spread, which is a real, immediate saving on every trade.' },
          { text: 'The NSE has better companies', why: 'The same company may be listed on several exchanges.' },
          { text: 'Other exchanges are unregulated', why: 'They are regulated too.' },
        ],
      },
    ],
    takeaway: 'The NSE is where most Indian equity volume happens. Higher liquidity means tighter spreads, which matters more to a retail investor than small differences in stated fees.',
  },

  'l3-028': {
    id: 'l3-028',
    title: 'BSE',
    subtitle: 'Asia\'s oldest exchange, and the home of the Sensex',
    minutes: 4,
    blocks: [

      { kind: 'scene', name: 'market-cap-ladder', caption: 'The BSE is Asia\'s oldest exchange and home of the Sensex.' },


      { kind: 'p', text: 'The Bombay Stock Exchange, established in 1875, is Asia\'s oldest stock exchange. It lists more companies than the NSE and hosts the Sensex, the index most Indian newspapers quote.' },
      {
        kind: 'table',
        caption: 'NSE and BSE side by side',
        headers: ['Feature', 'NSE', 'BSE'],
        rows: [
          ['Started', '1994', '1875 (as a traders\' association)'],
          ['Index', 'Nifty 50', 'Sensex 30'],
          ['Typical volume', 'Much higher', 'Lower'],
          ['Long-standing companies', 'Many', 'Many'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Your broker will handle this for you',
        text: 'For most retail investors the choice between NSE and BSE is made automatically by the app. It matters only when you are trading something unusual or very thinly traded, where the spread can be wide.',
      },
    ],
    quiz: [
      {
        q: 'Which index belongs to the BSE?',
        options: [
          { text: 'Nifty 50', why: 'The Nifty is computed by the NSE.' },
          { text: 'Sensex 30', correct: true, why: 'The Sensex is the BSE benchmark of 30 established companies.' },
          { text: 'Both are BSE indices', why: 'Only the Sensex is.' },
          { text: 'Neither is an Indian index', why: 'Both are Indian benchmarks.' },
        ],
      },
    ],
    takeaway: 'The BSE is the older exchange and home of the Sensex; the NSE handles more volume and hosts the Nifty. For most retail trades the choice is made for you and makes little difference.',
  },

  'l3-029': {
    id: 'l3-029',
    title: 'Brokers',
    subtitle: 'The gateway between you and the exchange',
    minutes: 5,
    blocks: [

      { kind: 'scene', name: 'money-allocation', caption: 'Your broker executes and holds your securities — compare total cost, not just the advertised fee.' },


      { kind: 'p', text: 'You cannot buy shares directly from an exchange. A SEBI-registered broker executes your order, holds your securities and settles the money. Choosing one well is mostly about cost, reliability and the app you can actually use.' },
      {
        kind: 'table',
        caption: 'Broker types in India',
        headers: ['Type', 'How you are charged', 'Best for'],
        rows: [
          ['Full-service', 'Brokerage plus platform and other charges', 'Beginners and advisers'],
          ['Discount', 'A flat low fee per executed order', 'Most self-directed investors'],
          ['Bank-based', 'Often higher fees', 'Convenience'],
          ['Robo/advisory', 'Fee plus managed portfolio', 'Hands-off investors'],
        ],
      },
      {
        kind: 'list',
        items: ['Check that the broker is SEBI-registered (INR prefix on SEBI\'s list).', 'Compare the full cost: brokerage, STT, stamp duty, exchange and SEBI charges.', 'Check what happens to your holdings if you change broker — the transfer process is genuinely painful.', 'Test support and the app before you need them.'] },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'The transfer trap',
        text: 'Moving holdings between brokers in India means giving a delivery instruction, physically moving securities or having the new broker pull them, and waiting out settlement. It can take weeks and cost real money. Choose a broker you can stay with, or at least expect to stay with.',
      },
    ],
    quiz: [
      {
        q: 'Broker A charges ₹20 per order and Broker B charges ₹0. Which is cheaper for a ₹2,000 trade?',
        options: [
          { text: 'Broker A, because a flat fee looks cheaper', why: '₹20 on ₹2,000 is 1% — more than the stamp duty and transaction charges alone.' },
          { text: 'Depends only on the advertised brokerage', correct: true, why: 'STT, stamp duty, exchange and SEBI charges apply on both, so total cost is what matters.' },
          { text: 'It depends on which exchange trades on', why: 'Exchange charges apply to both brokers; this is not the deciding factor.' },
          { text: 'Always the higher brokerage broker, because it includes tax filing', why: 'No brokerage plan includes your income-tax filing.' },
        ],
      },
    ],
    takeaway: 'Your broker executes and holds your securities. Compare the total cost including statutory charges, verify SEBI registration, and pick one you can live with — switching is slow and expensive.',
  },

  'l3-030': {
    id: 'l3-030',
    title: 'Demat Accounts',
    subtitle: 'Where your shares actually live',
    minutes: 5,
    blocks: [

      { kind: 'scene', name: 'money-allocation', caption: 'The demat is where your securities live electronically — one account is enough for everything.' },


      { kind: 'p', text: 'Since 1996, Indian shares have been held in dematerialised form — in electronic records rather than paper certificates. A demat account is where those securities sit, held by your broker or a depository participant.' },
      {
        kind: 'formula',
        label: 'How many you need',
        expr: 'One demat + one trading account is enough for all your Indian investments',
        note: 'You can hold every share, ETF and mutual fund unit in a single demat account. More accounts are unnecessary complexity.',
      },
      {
        kind: 'table',
        caption: 'What lives in the demat',
        headers: ['Holds', 'Does not hold'],
        rows: [
          ['Shares, ETFs, mutual fund units, bonds, SGBs', 'Money — that sits in your bank account'],
        ],
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'A dead demat is a serious problem',
        text: 'If your demat gets frozen — often because of a signature mismatch, an unpaid demat charges bill, or KYC issues — you still own the shares but cannot sell them. Keep your KYC current, your mobile number linked, and check for outstanding demat charges annually.',
      },
    ],
    quiz: [
      {
        q: 'Your demat account is frozen. What happens to shares already held in it?',
        options: [
          { text: 'They are sold automatically to avoid risk', why: 'Nothing is sold; a freeze restricts your ability to transact.' },
          { text: 'You still own them but cannot sell or transfer them', correct: true, why: 'Ownership is unaffected, but your ability to act is blocked until the freeze is resolved.' },
          { text: 'You lose them', why: 'Freezes are administrative, not forfeiture.' },
          { text: 'The broker keeps the profit', why: 'A frozen account does not transfer ownership or gains to the broker.' },
        ],
      },
    ],
    takeaway: 'The demat is where your securities are held electronically. One account is enough for everything — but a frozen demat blocks you from selling, so keep KYC and charges current.',
  },

  'l3-031': {
    id: 'l3-031',
    title: 'Trading Accounts',
    subtitle: 'The account that tells the exchange what to do with your money',
    minutes: 4,
    blocks: [

      { kind: 'scene', name: 'money-allocation', caption: 'The trading account holds the cash that backs your orders; the demat holds the securities.' },


      { kind: 'p', text: 'The trading account holds the funds that back your orders. When you place a buy, the broker commits money from it. When you sell, proceeds arrive after settlement. It is separate from the demat account because the two hold different things — securities and cash.' },
      {
        kind: 'table',
        caption: 'The two accounts, side by side',
        headers: ['Account', 'Holds', 'Freezes when'],
        rows: [
          ['Trading account', 'Cash for buying and selling', 'Bank compliance, unpaid obligations'],
          ['Demat account', 'Shares, units, ETFs', 'KYC gaps, signature issues, unpaid demat charges'],
        ],
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Keep only what you need in the trading account',
        text: 'Idle balances sitting in a trading account earn nothing. Sweep them back to your savings account, or fund the trading account as needed from your bank.',
      },
    ],
    quiz: [
      {
        q: 'A freeze appears on your trading account but not your demat. What are you likely unable to do?',
        options: [
          { text: 'View your holdings', why: 'Holdings sit in the demat account and remain visible.' },
          { text: 'Place new buy or sell orders', correct: true, why: 'The trading account holds the funds that back orders, so a freeze stops you transacting.' },
          { text: 'Receive dividends', why: 'Dividends relate to your demat holdings and are usually unaffected.' },
          { text: 'Download statements', why: 'Statement access is a reporting function, not a transaction.' },
        ],
      },
    ],
    takeaway: 'The trading account holds the cash that backs your orders; the demat holds the securities. They can freeze independently, so keep both in good standing.',
  },

  'l3-032': {
    id: 'l3-032',
    title: 'Bid and Ask',
    subtitle: 'The two sides of every trade',
    minutes: 5,
    blocks: [

      { kind: 'scene', name: 'market-cap-ladder', caption: 'You buy at the ask and sell at the bid — the spread is an immediate cost on every trade.' },


      { kind: 'p', text: 'The bid is the highest price a buyer will currently pay. The ask (or offer) is the lowest price a seller will accept. The difference between them is the spread — the immediate cost of trading.' },
      {
        kind: 'formula',
        label: 'Spread',
        expr: 'Spread = Ask price − Bid price',
        note: 'On a liquid large-cap the spread might be ₹0.05. On a thinly traded small-cap it might be ₹5 — 2% of the price, paid before you even start.',
      },
      {
        kind: 'table',
        caption: 'Spread costs you money either way',
        headers: ['Trade', 'What you pay'],
        rows: [
          ['Buy at ₹100, sell at ₹100', 'You have already lost the spread, round trip'],
          ['Immediate buy then sell', 'Two spreads plus statutory charges — a guaranteed loss'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Liquidity is priced into the spread',
        text: 'Wide spreads are the market telling you it is expensive to enter or exit. This is the practical meaning of "illiquid" — you are not just waiting longer, you are paying more at both ends.',
      },
    ],
    quiz: [
      {
        q: 'A stock has bid ₹99.95 and ask ₹100.05. You buy and sell immediately at those prices. Your gross result before charges is:',
        options: [
          { text: 'Break-even', why: 'You paid the ask and sold at the bid, so you lost the spread.' },
          { text: 'A loss of ₹0.10 per share', correct: true, why: '₹100.05 − ₹99.95 = ₹0.10, and you already lost it before brokerage and taxes.' },
          { text: 'A profit of ₹0.10', why: 'The spread always works against the trader who crosses it.' },
          { text: 'Break-even after charges', why: 'Charges only add to the loss.' },
        ],
      },
    ],
    takeaway: 'You buy at the ask and sell at the bid, so the spread is an immediate, guaranteed cost. It is small on liquid stocks and can be ruinous on thin ones.',
  },

  'l3-033': {
    id: 'l3-033',
    title: 'Market Orders',
    subtitle: 'Execute now, at whatever the price is',
    minutes: 4,
    blocks: [

      { kind: 'scene', name: 'market-cap-ladder', caption: 'A market order guarantees execution, not price.' },


      { kind: 'p', text: 'A market order says "buy or sell immediately at the best price available". It guarantees execution but not price. On a fast-moving or illiquid stock, the price you get can be much worse than the one you saw.' },
      {
        kind: 'table',
        caption: 'Market versus limit',
        headers: ['Market order', 'Limit order'],
        rows: [
          ['Guaranteed execution', 'Price guaranteed if reached'],
          ['Price not guaranteed', 'Execution not guaranteed'],
          ['Best for liquid stock, small size', 'Best for everything else'],
          ['Risk of a bad fill in a gap', 'Order simply does not fill'],
        ],
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'The classic retail loss',
        text: 'Placing a market order in a stock right after a big announcement is how people buy at ₹400 what was worth ₹350. If you do not need the fill today, use a limit order.',
      },
    ],
    quiz: [
      {
        q: 'A stock you want is quoted at ₹100 with a ₹2 spread. You need to sell urgently. What is your likely outcome?',
        options: [
          { text: 'You sell at ₹100', why: 'You will sell into the bid, not the last-traded price.' },
          { text: 'You sell at about ₹98', correct: true, why: 'Sellers hit the bid, so a ₹2 spread on ₹100 is a 2% instant cost.' },
          { text: 'You sell at ₹102', why: 'Only the buyer pays the ask; a seller receives the bid.' },
          { text: 'The exchange decides', why: 'The exchange matches orders; the spread is set by the market makers.' },
        ],
      },
    ],
    takeaway: 'A market order guarantees you trade, not that you get a good price. Use it only for liquid stocks and small sizes; use a limit order for everything else.',
  },

  'l3-034': {
    id: 'l3-034',
    title: 'Limit Orders',
    subtitle: 'Choose your price, accept the risk of no trade',
    minutes: 5,
    blocks: [

      { kind: 'scene', name: 'market-cap-ladder', caption: 'A limit order trades control of price back to you at the cost of possible non-execution.' },


      { kind: 'p', text: 'A limit order sets the price you will accept and waits. Buy limits execute at that price or lower, sell limits at that price or higher. If the price never reaches it, the order simply does not fill.' },
      {
        kind: 'list',
        ordered: true,
        items: ['Decide the price before you place the order.', 'Place a buy limit a little below the current price if you want a chance at a better entry.', 'Do not keep moving the price to chase a rising stock — that defeats the purpose.', 'If it does not fill, decide deliberately whether to cancel or leave it.'] },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'A limit order is also a discipline device',
        text: 'Writing your price down before you trade removes the emotion from the decision. It is harder to panic-sell at ₹90 when you have already decided you would only sell above ₹140.',
      },
    ],
    quiz: [
      {
        q: 'You place a buy limit at ₹95. The stock is at ₹100 and falls to ₹93 without trading. Your order:',
        options: [
          { text: 'Does not fill, because the price skipped past ₹95', why: 'A limit order fills when the price reaches your level or better. ₹93 is better than ₹95, so it should fill.' },
          { text: 'Fills at ₹95 or lower', correct: true, why: 'It would likely fill at ₹93 — which is better than the price you specified.' },
          { text: 'Fills at ₹93.05, adding slippage', why: 'Limit orders do not add slippage; that is the market-order problem they exist to avoid.' },
          { text: 'Is cancelled automatically', why: 'Limit orders typically remain valid for the day or until cancelled, depending on the broker.' },
        ],
      },
    ],
    takeaway: 'A limit order trades control of price back to you at the cost of possible non-execution. Set the price before you place it, and treat that as a commitment.',
  },

  'l3-035': {
    id: 'l3-035',
    title: 'Settlement',
    subtitle: 'When the trade actually becomes real',
    minutes: 5,
    blocks: [

      { kind: 'scene', name: 'time-horizon', caption: 'India settles equity trades on T+1 — money leaves when you buy, proceeds arrive the next working day.' },


      { kind: 'p', text: 'Settlement is the process of completing a trade: shares move to the buyer and money moves to the seller. Under the T+1 cycle in India, that happens on the next working day after execution.' },
      {
        kind: 'table',
        caption: 'The Indian equity T+1 cycle',
        headers: ['Day', 'What happens'],
        rows: [
          ['T (trade day)', 'Order executes at a price'],
          ['T+1', 'Funds debited, shares credited to your demat'],
          ['After T+1', 'You can sell the shares; earlier and you cannot'],
        ],
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'T+1 changed the game',
        text: 'Before 2023 India was T+2. Now the money leaves your account almost immediately, so intraday speculation is far harder. It also means you cannot buy on Monday and use that same money for something else on Monday.',
      },
      {
        kind: 'list',
        items: ['Funds must be available immediately — no leverage on unsettled sales.', 'A sale on Monday cannot fund a purchase on Monday.', 'Settlement cycles vary internationally: the US is also T+1, while some markets remain T+2.'] },
    ],
    quiz: [
      {
        q: 'You sell shares on Monday. When is the money available to buy something else?',
        options: [
          { text: 'Immediately on Monday', why: 'Not under T+1 — the sale completes the next working day.' },
          { text: 'Tuesday, under the T+1 cycle', correct: true, why: 'T+1 means settlement on the next working day, so proceeds credit on Tuesday.' },
          { text: 'Wednesday', why: 'That was the old T+2 timeline.' },
          { text: 'It depends on the broker', why: 'The cycle is set by the regulator and the exchanges, not individual brokers.' },
        ],
      },
    ],
    takeaway: 'India settles equity trades on T+1. Money leaves your account as soon as you buy, and sale proceeds arrive the next working day — which makes short-term speculation far harder than it used to be.',
  },
}
