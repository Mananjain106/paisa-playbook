import type { Chapter } from '../../types'
import { scene4, sim } from '../../lib/chapter-blocks'
export const analysis: Record<string, Chapter> = {
  'l4-001': {
    id: 'l4-001',
    title: 'Advanced Stock Analysis',
    subtitle: 'Reading a company through its own numbers, not through a broker headline.',
    minutes: 7,
    blocks: [
      scene4('growth-vs-value', 'Growth and value are two different ways to miss the same price.'),
      sim('valuation', 'Try the valuation lab on two pretend companies with opposite stories.'),
      sim('valuation', ''),
      { kind: 'p', text: "Level 3 taught you what the ratios *are*. Level 4 is about what they *do* when you compare a company to its own history, to its sector, and to the cash it actually produces. A high P/E is not automatically expensive; a low P/E is not automatically cheap. The question is what you are paying for, and whether the cash is real." },
      { kind: 'p', text: "Start every screen with the same four questions: how does this business make money, how reliable is that money, how much does it keep, and what could change the answer quickly. Brains are for the last question; humility is for the rest." },
      { kind: 'callout', tone: 'india', title: 'What Indian investors actually get wrong', text: "We chase headline EPS and build a thesis on a once-in-a-decade quarter, then act surprised when the stock resets. The first habit is to read more than one quarter, and the second is to treat outlier results as a warning, not as the new normal." },
      sim('valuation', 'Try the valuation lab on two pretend companies with opposite stories.'),
      { kind: 'h', text: 'The four lenses, in plain English' },
      { kind: 'list', items: [
        'Business model — what actually produces the revenue, and what must happen for it to keep producing it.',
        'Financial statements — revenue, expenses, profit, assets, liabilities, cash flow: the five numbers you must be able to explain in one sentence each.',
        'Valuation — what you pay today for a stream that is uncertain and arrives over years, not a stream you can time precisely.',
        'Risk — what breaks first: demand, competition, regulation, financing, or execution.',
      ] },
      sim('valuation', ''),
      { kind: 'formula', label: 'Rough fair value sanity check', expr: 'price ≈ (earnings this year) × (reasonable multiple)' },
      { kind: 'p', text: "The multiple is the part you argue about. Two people can agree on the earnings and still disagree on the price by a factor of two. That is normal. What is not normal is pretending the multiple is a fact instead of a judgement." },
      { kind: 'callout', tone: 'tip', text: "If you cannot describe how the company makes money in three sentences, do not buy a single share on a story. Stories are free; due diligence is not." },
      { kind: 'terms', items: [
        { term: 'thesis', meaning: 'your current best explanation of why a stock is mispriced — written down so you can refute it later.' },
        { term: 'multiple', meaning: 'a price compared to a single accounting number — P/E, P/B, EV/EBITDA, etc. Useful for comparison, dangerous as a verdict.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the first thing you check before you look at any valuation multiple?',
        options: [
          { text: 'The company’s last twelve months of revenue, profit and cash — and how they compare to its own history.', correct: true, why: 'Multiples are meaningless without the underlying business: you need to know what you are pricing before you price it.' },
          { text: 'The sector average P/E so you know whether the stock is cheap by comparison.', correct: false, why: 'A sector average is a comparison after the fact; you still need to know the business first.' },
          { text: 'The latest quarterly results, because the most recent number is the most relevant.', correct: false, why: 'A single quarter is often an outlier and can mislead if treated as the new normal.' },
        ],
      },
    ],
    takeaway: 'Advanced stock analysis is not about knowing more ratios. It is about asking the same four questions every time, and refusing to buy a story you cannot explain.',
  },

  'l4-002': {
    id: 'l4-002',
    title: 'Fundamental Analysis',
    subtitle: 'Studying the business behind the ticker.',
    minutes: 7,
    blocks: [
      { kind: 'p', text: "Fundamental analysis means judging a company by what it does and what it reports, not by where the chart happened to draw the last candle. The tools are financial statements, ratios, and a written thesis about the business. The substance is the business; everything else is comparison work." },
      sim('valuation', ''),
      { kind: 'h', text: 'Two schools, one practical middle ground' },
      { kind: 'list', items: [
        'Value-minded: focus on what the company is worth today relative to what you pay, with enough margin of safety to survive being partly wrong.',
        'Growth-minded: pay more today because the business can compound for years; the risk is overpaying for growth that never arrives.',
        'Practical: most good investors mix both — buy a business that can grow *and* that is not priced for perfection.',
      ] },
      { kind: 'p', text: "In an Indian context, the practical edge is usually sector architecture: knowing where a business sits in a market that is still formalising, where regulation matters, where credit cycles bite, and where consumption is still forming." },
      sim('valuation', ''),
      { kind: 'callout', tone: 'india', title: 'Watch for these in Indian fundamentals', text: "High promoter dependence, related-party transactions that look convenient rather than commercial, financials that jump because a single quarter was unusual, and banking/NBFC names where the asset-quality story is hiding behind a headline provision number. The financials can be honest and still hard to read if you do not know what to look for." },
      { kind: 'example', title: 'A quick fundamental read', text: '1. What is the product and who pays for it?\n2. What are the unit economics: revenue per customer, cost per customer, repeat rate?\n3. How much cash does the business generate after maintenance capex?\n4. What is the one thing that could break this fast?\n5. What range of outcomes is reasonable, not just the one you hope for?' },
      { kind: 'terms', items: [
        { term: 'fundamental analysis', meaning: 'judging a company by its business model, financials, competitive position and future cash-generating ability, not by chart patterns or short-term sentiment.' },
        { term: 'margin of safety', meaning: 'buying at a meaningful discount to your own estimate of value, so that you can be partly wrong and still do okay.' },
      ] },
    ],
    quiz: [
      {
        q: 'Which is the better way to use a P/E ratio?',
        options: [
          { text: 'As one input alongside business quality, history, cash flow and uncertainty — never as a verdict on its own.', correct: true, why: 'A multiple tells you what others are paying, not whether that is justified. Use it with the business, not instead of it.' },
          { text: 'As the single number that decides whether to buy, since a low multiple always means value.', correct: false, why: 'A low multiple can mean value, or it can mean a deteriorating business, fraud risk, or a structural slowdown. It never speaks for itself.' },
          { text: 'By comparing it to last year’s P/E only, since trends matter more than levels.', correct: false, why: 'A trend is useful but still incomplete without the level, the earnings quality, and the business context.' },
        ],
      },
    ],
    takeaway: 'Fundamental analysis is the discipline of studying the business first and the price second. The price only matters once you know what you are paying for.',
  },

  'l4-003': {
    id: 'l4-003',
    title: 'Technical Analysis',
    subtitle: 'Reading price behaviour as one input, not as a crystal ball.',
    minutes: 6,
    blocks: [
      { kind: 'p', text: "Technical analysis studies price, volume and time, not business fundamentals. Practitioners use charts, trends, support and resistance, moving averages, and volume clues. The point is not to predict exact tops and bottoms; the point is to understand how other market participants are behaving right now, and where the crowd has concentrated its bets." },
      sim('valuation', ''),
      { kind: 'h', text: 'What charts can and cannot do' },
      { kind: 'list', items: [
        'Can suggest momentum and sentiment, and whether a stock is being accumulated or sold into strength.',
        'Can help with timing a position, setting a stop level, and understanding a short-term range.',
        'Cannot tell you whether a company is good, whether the valuation is reasonable, or whether the business will survive a recession.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'The trap', text: "A chart can look like a story, and the danger is confusing a pattern with a proof. A ‘breakout’ can be a genuine shift in supply and demand, or a squeeze that reverses by the next session. Treat technical work as a timing lens, not a fundamental substitute. And in India especially, do not let a chart talk you into paying up for a stock whose fundamentals you have not checked." },
      sim('valuation', ''),
      { kind: 'example', title: 'When technicals can help', text: 'A stock you like fundamentally is trading in a range. The chart may tell you whether the range is being tested from below or from above, and whether volume is supporting or contradicting the move. That can help you choose an entry zone and a stop — it does not replace the fundamental case.' },
      { kind: 'terms', items: [
        { term: 'support', meaning: 'a price level where a stock has repeatedly found buyers, so the price tends to bounce or pause there.' },
        { term: 'resistance', meaning: 'a price level where a stock has repeatedly run into sellers, so the price tends to stall or reverse there.' },
        { term: 'trend', meaning: 'the general direction of price over a period — up, down, or sideways — and the patience of the market in holding it.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the best way to think about technical analysis?',
        options: [
          { text: 'As one lens on price behaviour and sentiment, useful for timing and risk control, but not a substitute for fundamentals.', correct: true, why: 'Chart work can describe what the market is doing now; it cannot tell you whether the underlying business is sound or fairly priced.' },
          { text: 'As the main decision tool, because price is the only truth that matters.', correct: false, why: 'Price can be wrong for a long time. A chart can be right about momentum and still be participating in a bad business.' },
          { text: 'As a way to find exact tops and bottoms every time.', correct: false, why: 'No method finds tops and bottoms consistently. Even when it seems to, the next one will be different.' },
        ],
      },
    ],
    takeaway: 'Technical analysis is about how the market is behaving right now. Use it for timing and risk, not for pretending a price pattern is a business thesis.',
  },

  'l4-004': {
    id: 'l4-004',
    title: 'Company Valuation',
    subtitle: 'What you pay for a stream of money you do not yet know.',
    minutes: 7,
    blocks: [
      { kind: 'p', text: "Valuation is the part where everyone develops an opinion and few people admit how much of it is judgement. The honest version is this: you estimate a future stream of money the company can generate, you decide what that stream is worth today, and then you compare that to the price. The estimate is uncertain, the multiple is a preference, and the margin of safety is your concession to being wrong." },
      sim('valuation', ''),
      { kind: 'h', text: 'Three ways to value the same company (and why they differ)' },
      { kind: 'list', items: [
        'Earnings-based: price the company against its profits, adjusted for quality, growth, and the cycle. The risk is that earnings can be manipulated for a quarter and smoothed over a year.',
        'Cash-flow-based: estimate free cash flow and discount it to today. More grounded, but also more sensitive to your assumptions about the distant future.',
        'Asset-based: what could the company be dismantled for? Useful for some businesses, misleading for companies whose value is in relationships, brand, or intangibles.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'The valuation illusion', text: "The biggest mistake is to use one method and one set of assumptions and then call it a number. Valuation is better understood as a range. If the business can do well, poorly, and somewhere in between, you want to know what you are paying in each case. If the downside case is still tolerable, you have a position. If the upside is required for the purchase to make sense, you do not — you have a gamble." },
      sim('valuation', ''),
      { kind: 'formula', label: 'Discounted cash flow, in words', expr: 'value = sum of future cash flows, each discounted back to today' },
      { kind: 'p', text: "The discounting part matters. A rupee of cash you will receive in ten years is not the same as a rupee today, partly because of time preference and partly because the future is uncertain. That is why two people looking at the same company can arrive at very different values: they differ on growth, on the terminal value, and on the discount rate, not on the formula." },
      { kind: 'example', title: 'A simple valuation habit', text: '1. Write down your best estimate of the company’s capacity to generate cash over the next several years.\n2. Write down a pessimistic case where growth is slower, margins are thinner, and the cycle turns.\n3. Compare the price to both cases.\n4. Buy only if the price leaves enough room for the pessimistic case to still be acceptable.' },
      { kind: 'terms', items: [
        { term: 'terminal value', meaning: 'the value assigned to cash flows beyond the explicit forecast period; often the largest, most uncertain part of a DCF.' },
        { term: 'margin of safety', meaning: 'buying below your estimate of value so that being partly wrong does not ruin the decision.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the most honest way to present a valuation?',
        options: [
          { text: 'As a range of outcomes under different assumptions, with the downside case that still works for you clearly written down.', correct: true, why: 'Valuation is uncertain; a single number pretends otherwise. A range and a stress case make the uncertainty visible.' },
          { text: 'As a single precise number, because precision makes the decision feel solid.', correct: false, why: 'Precision in an uncertain estimate is false confidence. The number looked precise, the assumptions were not.' },
          { text: 'As whatever DCF output the spreadsheet gives, without questioning the inputs.', correct: false, why: 'A spreadsheet is only as honest as the assumptions you feed it. The model can be right and the inputs can be wishful.' },
        ],
      },
    ],
    takeaway: 'Valuation is not the art of finding a number. It is the art of building a range you can defend, and buying only where even the weaker case still leaves you okay.',
  },

  'l4-005': {
    id: 'l4-005',
    title: 'Growth Vs Value',
    subtitle: 'Two ways to be wrong — and how to tell them apart.',
    minutes: 6,
    blocks: [
      scene4('growth-vs-value', 'Growth and value are not opposites; they are different risks dressed in different clothes.'),
      { kind: 'p', text: "Growth investing asks: can this company keep expanding, and is the expansion profitable and repeatable? Value investing asks: am I paying less than the business is worth today, with enough cushion to survive being partly wrong? A healthy investor of either type can end up in the same company, for different reasons." },
      sim('valuation', ''),
      { kind: 'h', text: 'What each style is really paying for' },
      { kind: 'list', items: [
        'Growth: the future. You pay up today for more tomorrow. If the growth slows, the multiple can compress and the stock can fall even if the business is fine.',
        'Value: the present, judged against a discounted price. You accept less growth if the price is low enough and the business is sturdy enough.',
        'Growth at a reasonable price (GARP): the middle ground, where a company grows and is not priced for perfection. Not a separate magic category — just a reasonable one.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'The growth trap', text: "A stock can be a strong business and still be a bad investment if the price already bakes in the best-case story. Growth investors sometimes buy because the numbers are going up, not because the price leaves room for error. That is how good companies become bad holdings: not because they failed, but because the price was too optimistic." },
      sim('valuation', ''),
      { kind: 'example', title: 'A useful comparison', text: 'Compare two companies with the same revenue growth but different margins, different reinvestment needs, and different balance-sheet strength. Growth in revenue means very little if the business keeps burning cash to get it. The better growth story is often the one that converts revenue into durable cash, not the one with the loudest headline numbers.' },
      { kind: 'terms', items: [
        { term: 'growth investing', meaning: 'buying companies expected to expand over time; the risk is paying a high multiple for growth that is uncertain, slower, or less profitable than hoped.' },
        { term: 'value investing', meaning: 'buying at a discount to what you believe the company is worth, with enough cushion to survive a wrong estimate; the risk is catching a falling knife disguised as cheap.' },
      ] },
    ],
    quiz: [
      {
        q: 'When is a high-growth company a bad investment even if the business is strong?',
        options: [
          { text: 'When the price already reflects the optimistic case so that only good news keeps it rising.', correct: true, why: 'A strong business can still be a poor investment if the price leaves no room for anything less than perfection.' },
          { text: 'When it has never paid a dividend, because growth companies should not be bought if they do not pay out.', correct: false, why: 'Dividends are not required for a good investment; reinvested profit can be more valuable than a payout if it earns a high return.' },
          { text: 'When the sector is popular, because popular sectors always fall next.', correct: false, why: 'Popularity can compress returns, but it is not a rule. Some popular sectors keep growing and keep attracting capital for years.' },
        ],
      },
    ],
    takeaway: 'Growth asks what the company can become; value asks what it is worth today. The best positions are often the overlap: real growth, bought at a price that lets you be partly wrong.',
  },

  'l4-006': {
    id: 'l4-006',
    title: 'Competitive Advantages',
    subtitle: 'What lets a company keep its rewards after others try to take them.',
    minutes: 6,
    blocks: [
      { kind: 'p', text: "A competitive advantage — often called a moat — is not a slogan. It is a reason a business can keep earning more than its cost of capital when competitors would like to take that profit. If you cannot name the moat, you probably do not have one; you have a nice quarter and a story." },
      sim('valuation', ''),
      { kind: 'h', text: 'Common, testable moats' },
      { kind: 'list', items: [
        'Scale and cost: being big enough or efficient enough that rivals cannot easily match the price without losing money.',
        'Switching costs: customers would pay a real price to leave — in time, money, risk, or inconvenience — so they stay.',
        'Network effects: the service becomes more valuable as more people use it, which raises the bar for a new entrant.',
        'Brand and trust: people pay for familiarity, reliability, or status, and that trust is hard to copy from a brochure.',
        'Regulatory or structural position: a licence, a franchise-like position, or a business built around a rule that is hard to change overnight.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'Moats erode', text: "Nothing is permanently protected. Technology, regulation, customer taste, and new entrants all erode moats over time. The right question is not whether a moat exists, but how strong it is today and how fast it is changing. A moat is a start, not a destination." },
      sim('valuation', ''),
      { kind: 'example', title: 'How to test a moat', text: "Ask: could a new competitor enter with enough capital, enough time, and enough patience to take share? If the answer is yes and the moat is only a headline, the moat is probably weaker than the story. If the answer is there are real, repeated, structural barriers — then you have something worth studying." },
      { kind: 'terms', items: [
        { term: 'moat', meaning: 'a durable advantage that helps a company keep profits and market position even when others compete for them.' },
        { term: 'competitive advantage', meaning: 'the same idea viewed practically: a reason you can stay ahead of rivals for longer than they can afford to wait.' },
      ] },
    ],
    quiz: [
      {
        q: 'Which is the strongest sign of a real competitive advantage?',
        options: [
          { text: 'A structural reason customers stay or rivals cannot easily enter, that shows up in durable profits, not just a story.', correct: true, why: 'A moat is proved by persistence and obstacles to competition, not by a good narrative.' },
          { text: 'A single quarter of very high margins, because a high margin is proof of a moat.', correct: false, why: 'A high margin can come from a temporary tailwind, low competition for a year, or accounting. It is not itself a moat.' },
          { text: 'A large advertising budget, which proves the brand is powerful.', correct: false, why: 'Ad spend can buy attention and still leave the business vulnerable if customers leave easily or a rival undercuts price.' },
        ],
      },
    ],
    takeaway: 'A competitive advantage is not having a good story. It is having a structural reason customers stay, rivals are deterred, and profits survive the next cycle.',
  },

  'l4-007': {
    id: 'l4-007',
    title: 'Business Models',
    subtitle: 'How a company actually makes money, in plain language.',
    minutes: 6,
    blocks: [
      { kind: 'p', text: "Before you analyse a company, you need to be able to say how it makes money. Revenue source, unit economics, what the customer pays, what it costs to serve them, what has to happen for the model to keep working. A business model is the simplest case for the company; if the case is muddy, the rest is guesswork." },
      sim('valuation', ''),
      { kind: 'h', text: 'The model questions that matter' },
      { kind: 'list', items: [
        'Who pays, and how often? A business that collects once is not the same as one that collects every month.',
        'What is the revenue for, and what is the cost to deliver it? Margin tells you how much of the revenue is kept after the work is done.',
        'Does the model need growth to survive, or does it make sense at a steady size? Some businesses are fine at scale; some only look good while they are expanding.',
        'What is the worst plausible case for the model? Where does it break: demand, credit, regulation, cost, or competition?',
      ] },
      { kind: 'callout', tone: 'tip', title: 'A quick model test', text: "Explain the business to a smart person who knows nothing about it, in three minutes, without using jargon that you cannot define. If you stall, the model is not as clear as you think." },
      sim('valuation', ''),
      { kind: 'example', title: 'Different models, different risks', text: "A subscription software business and a footwear retailer have very different economics. One earns recurring revenue from fewer, stickier customers; the other earns from volume, inventory turns, and footfall. They can both be good businesses, but the risks are different, and the valuation should reflect that. Do not compare models as if they were the same just because they are both ‘businesses’." },
      { kind: 'terms', items: [
        { term: 'business model', meaning: 'the description of how a company earns revenue, what it costs to deliver, and what must hold true for the model to keep working.' },
        { term: 'unit economics', meaning: 'the economics of serving one customer or unit — revenue per unit, cost per unit, and what is left after both.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the most useful first question when you analyse a new business model?',
        options: [
          { text: 'Who pays, how often, and what has to be true for the company to keep earning that way.', correct: true, why: 'A business model is only as good as the repeatable mechanics behind it: you need to know the source of money before you study the amount.' },
          { text: 'How fast the revenue grew last year, since growth is the clearest sign of a good model.', correct: false, why: 'Growth can come from many sources, including borrowing, one-off wins, or spending that is not sustainable. It is not a model on its own.' },
          { text: 'What the market capitalisation is, because that tells you the model’s value.', correct: false, why: 'Market cap is the market’s opinion, not the model. A model can be sound and still be priced up, or weak and still be cheap.' },
        ],
      },
    ],
    takeaway: 'A business model is the simplest honest account of how a company earns money. If you cannot explain that in plain language, you are not ready to value the stock.',
  },

  'l4-008': {
    id: 'l4-008',
    title: 'Annual Reports',
    subtitle: 'The company’s own story, with all the footnotes you are supposed to read.',
    minutes: 7,
    blocks: [
      { kind: 'p', text: "An annual report is the company’s best-written case for itself, and the part you must read carefully is not only the glossy pages. The balance sheet, the profit and loss account, the cash flow statement, and especially the notes and risk factors are where the real information lives. The narrative is marketing; the numbers are the record." },
      sim('valuation', ''),
      { kind: 'h', text: 'What to look at first' },
      { kind: 'list', items: [
        'The business description and products: does the report say, in plain language, what the company does and who buys it?',
        'The financial statements, three years if you can: revenue, profit, assets, liabilities, and cash flow — not just the current year.',
        'The notes: accounting policies, related-party transactions, contingencies, debt details, and any one-off items that flatter the headline.',
        'Risk factors and forward-looking statements: the company is telling you what could go wrong. Read that before you decide what could go right.',
      ] },
      { kind: 'callout', tone: 'india', title: 'Read the notes even when they are boring', text: "Indian annual reports can be long and dense, and the temptation is to skim. Resist that. The notes often describe accounting choices, related-party dealings, borrowings, leases, and contingent liabilities that the headline never mentions. A clean headline and a crowded note can be the same company on the same day." },
      sim('valuation', ''),
      { kind: 'example', title: 'A practical reading order', text: "1. Skim the business section to understand what the company does.\n2. Read the three-year summary of income, balance sheet, and cash flow.\n3. Look at the notes on accounting policies, debt, related parties, and any unusual items.\n4. Check the risk factors and the management discussion.\n5. Ask: what is the company really earning, and what could change that quickly?" },
      { kind: 'terms', items: [
        { term: 'annual report', meaning: 'the company’s yearly disclosure of its financial statements, business description, risks, and management commentary — the primary document for understanding what the company is and how it has performed.' },
        { term: 'footnotes / notes', meaning: 'the explanatory detail behind the numbers: accounting policies, breakdowns, contingencies, and anything that matters but does not fit in the summary tables.' },
      ] },
    ],
    quiz: [
      {
        q: 'Which part of an annual report usually carries the most decision-relevant detail?',
        options: [
          { text: 'The financial statements and their notes — especially accounting policies, related-party transactions, debt, contingencies, and unusual items.', correct: true, why: 'The summary tables can be clean; the notes often hold the details that change your view of the quality and risk of the numbers.' },
          { text: 'The glossy marketing pages, because they explain the company’s vision best.', correct: false, why: 'Vision pages are useful for context, but they are not the record of performance and risk. The numbers and notes are.' },
          { text: 'Only the current year’s profit figure, because past years are less relevant.', correct: false, why: 'One year can be misleading; trends, comparisons, and the notes are usually more informative than a single headline.' },
        ],
      },
    ],
    takeaway: 'An annual report is not a brochure you skim. It is the source document: read the statements and the notes, because the numbers and their fine print are what you are really paying for.',
  },

  'l4-009': {
    id: 'l4-009',
    title: 'Balance-Sheet Analysis',
    subtitle: 'What the company owns, what it owes, and how durable it looks.',
    minutes: 6,
    blocks: [
      { kind: 'p', text: "The balance sheet is a snapshot of a company’s financial position at a point in time: assets on one side, liabilities and equity on the other. It tells you what the company has, what it owes, and how much of the business is financed by owners versus borrowed money. In India, the balance sheet is also where you often find the clues about funding quality, borrowings, guarantees, and one-off items." },
      sim('valuation', ''),
      { kind: 'h', text: 'The parts worth learning to read cold' },
      { kind: 'list', items: [
        'Assets: current assets like cash, inventory, receivables; non-current assets like property, plant, intangibles; and goodwill that can hide overpayment in acquisitions.',
        'Liabilities: short-term and long-term borrowings, trade payables, deferred items, provisions, and any contingent liabilities in the notes.',
        'Equity: share capital, reserves, retained earnings — and what has been set aside versus what has been accumulated over time.',
        'The structure: how much is funded by debt, how much by owners, and how that mix changes year to year.',
      ] },
      { kind: 'callout', tone: 'india', title: 'Watch for these in Indian balance sheets', text: "Loans and advances that are large relative to the business, borrowings that are restructured or refinanced in ways that look convenient, guarantees and commitments hidden in the notes, inventory that grows faster than sales, and receivables that keep swelling without a matching revenue rise. These are not automatic red flags, but they are exactly the places where you should slow down and ask questions." },
      sim('valuation', ''),
      { kind: 'example', title: 'A balance-sheet habit', text: "Do not look at the balance sheet in isolation. Compare it to the income statement and the cash flow statement: do the assets seem to be generating the cash the company says it is making? Is debt growing faster than the business? Are receivables and inventory outpacing revenue? The balance sheet is most useful when you read it together with the rest of the report." },
      { kind: 'terms', items: [
        { term: 'balance sheet', meaning: 'a statement of a company’s assets, liabilities and equity at a point in time; the snapshot of what it owns and owes.' },
        { term: 'working capital', meaning: 'the short-term assets minus short-term liabilities a company needs to run its day-to-day operations — inventory, receivables, cash, and payables.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the most useful way to read a balance sheet?',
        options: [
          { text: 'Together with the income statement and cash flow statement, and with attention to debt, working capital, and the notes for guarantees and one-offs.', correct: true, why: 'A balance sheet is a snapshot; it makes the most sense when you compare it to the flow of earnings and cash, and when you check the fine print for what is not obvious.' },
          { text: 'By itself, focusing only on the total assets figure.', correct: false, why: 'Total assets alone tell you very little about quality, funding, or how well those assets are being used.' },
          { text: 'By comparing only the share capital to last year, since that is the cleanest measure.', correct: false, why: 'Share capital is only one line and is not the most informative part of the balance sheet for most analysis questions.' },
        ],
      },
    ],
    takeaway: 'A balance sheet is a snapshot, not a verdict. The useful reading is structural: what the company owns, what it owes, how it is funded, and whether the notes reveal anything the headline hides.',
  },

  'l4-010': {
    id: 'l4-010',
    title: 'Income-Statement Analysis',
    subtitle: 'How the company turns revenue into profit — and where that profit might be fragile.',
    minutes: 6,
    blocks: [
      { kind: 'p', text: "The income statement tells the story of revenue arriving, costs being incurred, and what is left. Sales, expenses, operating profit, other income, profit before tax, tax, and profit after tax — the line items and their trends matter more than any single number. In India, the income statement is also where you often see one-off gains, the effect of seasonality, and the difference between headline profit and cash actually generated." },
      sim('valuation', ''),
      { kind: 'h', text: 'The lines to watch' },
      { kind: 'list', items: [
        'Revenue trend: is it growing steadily, jumping around, or flat? What is driving it — volume, price, mix, or one big customer?',
        'Gross profit and margins: how much is left after direct costs, and is that margin stable, expanding, or under pressure?',
        'Operating expenses: are costs growing in line with revenue, or faster? SG&A, marketing, R&D, depreciation — the shape of the cost base matters.',
        'Other income and one-offs: gains on sale, subsidised income, changes in accounting, or one-time items that flatter profit this year and may not repeat.',
        'Tax and profit after tax: what the company actually keeps after the government’s cut, and whether that is stable and comparable.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'Profit can be clean and still misleading', text: "A company can report strong profit and still be consuming cash. Depreciation, working capital changes, and non-cash items can separate reported profit from cash in hand. Read the income statement alongside the cash flow statement so you know whether the profit is backed by real cash or partly accounting." },
      sim('valuation', ''),
      { kind: 'example', title: 'A quick income-statement read', text: "Compare revenue, gross margin, operating margin, and profit after tax across three years. Ask whether the profit is coming from the core business or from one-off items. Then check the cash flow statement: is operating cash roughly tracking or exceeding profit, or is there a gap that needs explaining?" },
      { kind: 'terms', items: [
        { term: 'income statement', meaning: 'the statement that shows revenue, expenses, and profit over a period; the record of how the company turned sales into profit.' },
        { term: 'operating profit', meaning: 'profit from the core business before financing, other income, and tax; a useful measure of how the main operations are doing.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the best way to check whether reported profit is supported by real cash?',
        options: [
          { text: 'Read the income statement alongside the cash flow statement and compare operating cash flow with profit over time.', correct: true, why: 'Profit and cash can diverge; comparing them over several periods reveals whether earnings are backed by cash or inflated by timing and accounting.' },
          { text: 'Trust the profit after tax figure, because it is the bottom line and the most reliable.', correct: false, why: 'The bottom line can still be affected by non-cash items and one-offs; it is not by itself a proof of cash generation.' },
          { text: 'Look only at revenue growth, since growing top-line revenue usually means cash is healthy.', correct: false, why: 'Revenue can grow while cash flow lags, especially if receivables or inventory swell. Top-line growth is not cash.' },
        ],
      },
    ],
    takeaway: 'The income statement shows the path from revenue to profit. Read the trend, the quality of the profit, and the cash behind it — not just the headline number.',
  },

  'l4-011': {
    id: 'l4-011',
    title: 'Cash-Flow Analysis',
    subtitle: 'Where the money actually comes from, and where it actually goes.',
    minutes: 6,
    blocks: [
      { kind: 'p', text: "Cash flow is the part of the financials that refuses to lie about timing. Profit can be restated, deferred, or boosted by accounting choices; cash flow shows the actual movement of money. The best habit is to read operating cash flow, investing cash flow, and financing cash flow together, and to compare them with the profit number rather than taking any one in isolation." },
      sim('valuation', ''),
      { kind: 'h', text: 'Three flows, one question' },
      { kind: 'list', items: [
        'Operating cash flow: money from the main business, after working capital changes. If this is weak or negative while profit is strong, ask why.',
        'Investing cash flow: money spent on assets, acquisitions, and investments. Large outflows here can be good capex or bad acquisitions; the context tells you which.',
        'Financing cash flow: money raised or repaid through debt or equity. This tells you how the business is funded and whether owners or lenders are putting cash in or taking it out.',
      ] },
      { kind: 'callout', tone: 'india', title: 'Watch the sign of the flows', text: "A company that reports profit but consistently burns operating cash, or that keeps funding itself through borrowing while investing heavily, is not automatically bad — but it is exactly the kind of company that deserves a slower, deeper look. Cash flow is where the story either holds together or starts to come apart." },
      sim('valuation', ''),
      { kind: 'example', title: 'A useful cash-flow test', text: "Compare operating cash flow with profit over a few years. If cash flow consistently lags profit, look at receivables, inventory, and any one-off items. If the gap is large and persistent, the profit quality may be weaker than the headline suggests, and the valuation should reflect that." },
      { kind: 'terms', items: [
        { term: 'cash flow statement', meaning: 'the statement that shows cash coming in and going out across operating, investing, and financing activities; the reality check against profit.' },
        { term: 'free cash flow', meaning: 'cash generated after the capital spending needed to maintain the business; often used as a cleaner measure of what the company keeps for owners.' },
      ] },
    ],
    quiz: [
      {
        q: 'When is the cash flow statement most useful?',
        options: [
          { text: 'When you compare it with profit over time, to see whether earnings are backed by actual cash and to understand how the company is funded and investing.', correct: true, why: 'Cash flow reveals timing, quality, and funding dynamics that the profit number alone can hide.' },
          { text: 'Only when the company is losing money, because profitable companies do not need a cash flow check.', correct: false, why: 'Even profitable companies can have weak cash conversion, unusual working capital swings, or funding issues that the cash flow statement exposes.' },
          { text: 'Only to check the dividend payout, since that is the only cash flow number that matters.', correct: false, why: 'Dividends are one part of financing cash flow, but operating and investing cash flows tell you much more about the health of the business.' },
        ],
      },
    ],
    takeaway: 'Cash flow is the reality check on profit. Read the three flows together, compare them with earnings, and ask whether the money is coming from the business or from the spreadsheet.',
  },

  'l4-012': {
    id: 'l4-012',
    title: 'Accounting Quality',
    subtitle: 'How honest and useful the numbers really are.',
    minutes: 6,
    blocks: [
      { kind: 'p', text: "Accounting quality is how much trust you can place in a company’s reported numbers. High quality means the figures are conservative, transparent, consistent, and tied to real economic activity. Low quality means the numbers are shaped by aggressive accounting, one-off items, complex structures, or choices that flatter the headline while weakening the underlying story. This is not an accusation against any company; it is a habit of scrutiny." },
      sim('valuation', ''),
      { kind: 'h', text: 'Signs of good and weak accounting quality' },
      { kind: 'list', items: [
        'Consistency: the same accounting policies year after year, and any changes clearly explained in the notes.',
        'Transparency: clear notes, readable breakdowns, and honest disclosure of risks, related parties, and unusual items.',
        'Cash conversion: operating cash flow that broadly supports reported profit over time, instead of a persistent gap that needs explaining.',
        'Conservatism: provision for bad debts, impairment, and contingencies that are taken seriously rather than optimistically deferred.',
        'Red flags: frequent restatements, large related-party transactions, growing receivables or inventory without matching revenue, and profit that depends heavily on non-operating items.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'Do not let a clean headline persuade you', text: "A good-looking profit figure can still rest on weak accounting quality if the notes hide the moving parts. The wrong lesson is to trust the number because it is clean. The right lesson is to ask what is behind it: how was it arrived at, what is excluded, and what could be restated later." },
      sim('valuation', ''),
      { kind: 'example', title: 'A practical check', text: "Look at the notes on accounting policies and related-party transactions. Compare revenue growth with receivables and inventory growth. Compare profit with operating cash flow. If any of these diverge persistently, slow down and investigate before you use the numbers as the basis for a valuation." },
      { kind: 'terms', items: [
        { term: 'accounting quality', meaning: 'the degree to which a company’s financial statements are reliable, transparent, conservative, and consistent; a measure of how much the numbers can be trusted.' },
        { term: 'related-party transaction', meaning: 'a transaction with a person or entity connected to the company; useful and sometimes legitimate, but always worth reading carefully because it can be arranged in ways that do not reflect normal market terms.' },
      ] },
    ],
    quiz: [
      {
        q: 'Which is the strongest sign of weak accounting quality?',
        options: [
          { text: 'A persistent gap between reported profit and operating cash flow, plus notes that obscure related-party dealings or one-off items.', correct: true, why: 'When profit repeatedly does not convert to cash, or the notes leave important things unclear, the numbers deserve extra scrutiny rather than automatic trust.' },
          { text: 'A single year of unusually high profit, because high profit always means poor quality.', correct: false, why: 'A high profit year can be legitimate and repeatable; it is not by itself a sign of poor accounting.' },
          { text: 'A company that explains its accounting policies clearly in the notes.', correct: false, why: 'Clear notes are a sign of better transparency and quality, not weaker quality.' },
        ],
      },
    ],
    takeaway: 'Accounting quality is about whether the numbers are trustworthy. Read the notes, check consistency, and compare profit with cash — because the headline is only as good as the accounting behind it.',
  },

  'l4-013': {
    id: 'l4-013',
    title: 'Debt Analysis',
    subtitle: 'Who the company owes, when, and what happens if things slow down.',
    minutes: 6,
    blocks: [
      { kind: 'p', text: "Debt is not automatically bad, and equity is not automatically safe. The question is whether the company can service its debt through ordinary operations, and whether the debt is the kind that helps or the kind that hides weakness. Debt analysis looks at the amount, the terms, the maturity profile, the interest cost, and the cushion between debt and the cash the business can generate." },
      sim('valuation', ''),
      { kind: 'h', text: 'The debt questions' },
      { kind: 'list', items: [
        'How much is owed, and to whom? Borrowings, secured and unsecured, leases, guarantees, and any debt in the notes that does not sit on the face of the balance sheet.',
        'When is it due? A maturity wall — a lot of debt coming due at once — can stress a company even if the debt looks manageable on average.',
        'What is the interest cost? Rising interest rates can change a comfortable debt burden into a painful one, especially for floating-rate or short-term borrowings.',
        'How is it funded? Cash flow versus refinancing, capital market access, and the lenders’ willingness to keep supporting the business.',
        'What is the equity cushion? Debt against a thin equity base is much riskier than debt against a strong one.',
      ] },
      { kind: 'callout', tone: 'india', title: 'India-specific debt watchpoints', text: "Promoter borrowings that look personal but are linked to the company, inter-corporate loans that can move risk around without reducing it, refinancing that papers over a cash-flow problem, and debt hidden in special purpose vehicles or guarantees. Read the notes carefully; the balance sheet face is only part of the story." },
      sim('valuation', ''),
      { kind: 'example', title: 'A debt check to build the habit', text: '1. Add up the borrowings you see, then search the notes for any debt, lease, or guarantee that is not on the main line.\n2. Look at when the debt is due and whether the company has the cash or access to refinance it.\n3. Compare interest cost with operating cash flow.\n4. Ask how the debt would behave if revenue fell 20% and interest rates rose.' },
      { kind: 'terms', items: [
        { term: 'debt analysis', meaning: 'the study of a company’s borrowings — amount, terms, maturity, interest cost, funding, and cushion — to judge how safely it can service its obligations.' },
        { term: 'leverage', meaning: 'the use of borrowed money in a business; more leverage can amplify gains but also amplifies losses and the risk of financial stress.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the most important question in debt analysis?',
        options: [
          { text: 'Can the company service its debt through normal operations, and what happens to that ability if revenue falls or rates rise?', correct: true, why: 'Debt is only a problem if the company cannot handle it under stress. The service ability under different scenarios is the core question.' },
          { text: 'Whether the company has any debt at all, because debt is always bad.', correct: false, why: 'Debt can be useful when it is well-structured and serviceable. The issue is not the existence of debt but its size, terms, and risk.' },
          { text: 'Only the interest rate, since a low rate means the debt is safe.', correct: false, why: 'A low rate is helpful but not sufficient; maturity, amount, cash flow, and refinancing risk also matter a great deal.' },
        ],
      },
    ],
    takeaway: 'Debt analysis is about serviceability, not just size. Look at amount, terms, maturity, interest cost, cash flow, and the notes — and ask what happens in a worse year, not just a normal one.',
  },

  'l4-014': {
    id: 'l4-014',
    title: 'Corporate Actions',
    subtitle: 'What companies do to shares, money, and ownership — and how to read it.',
    minutes: 7,
    blocks: [
      { kind: 'p', text: "A corporate action is something a company does that affects shareholders, the share structure, or the cash in the account. Dividends, stock splits, bonus issues, buybacks, rights issues, mergers and demergers — these can be value-creating, value-neutral, or value-destroying. The trick is to read the action for what it actually does, not for the marketing around it." },
      sim('valuation', ''),
      { kind: 'h', text: 'Common actions and what they really mean' },
      { kind: 'list', items: [
        'Dividend: a cash return to shareholders. Useful if the company has excess cash and limited better uses; less useful if the payout comes from borrowing or from cutting reinvestment that would earn more.',
        'Stock split / bonus issue: more shares for the same ownership. Usually value-neutral in itself; it changes the share count and price, not the business. Watch the reason: it can improve liquidity, or it can simply be window dressing.',
        'Buyback: the company buys its own shares. Can be a good use of cash if shares are cheap and the business has excess capital; less good if it is timed for optics rather than value.',
        'Rights issue / preferential issue: raising money from shareholders or selected investors. Dilution, price, and the reason for the raise matter a lot.',
        'Merger / demerger / scheme of arrangement: restructuring ownership or combining businesses. Often complex; the value depends on what is combined, at what price, and why.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'Do not confuse excitement with value', text: "A stock split or bonus issue can feel like a gift, but in terms of value it is usually neutral. The headline is loud; the economics are not. Ask what changes for the business, for the cash, and for the ownership, and ignore the part that is just a cosmetic change." },
      sim('valuation', ''),
      { kind: 'example', title: 'How to react to a corporate action', text: "1. Read the announcement and the rationale, not just the headline.\n2. Work out what happens to the share count, the price, the cash, and the ownership.\n3. Decide whether the action is value-creating, neutral, or dilutive.\n4. Update your thesis accordingly — do not let the action replace the thesis." },
      { kind: 'terms', items: [
        { term: 'corporate action', meaning: 'an action by a company that affects shareholders or the share structure — dividends, splits, bonuses, buybacks, rights issues, mergers, and similar events.' },
        { term: 'bonus issue', meaning: 'additional shares given to existing shareholders for free, in proportion to their holding; usually increases the share count without changing the underlying ownership value.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the most important question to ask about any corporate action?',
        options: [
          { text: 'What does it actually change for the business, the cash, and the shareholders — and is that change value-creating, neutral, or dilutive?', correct: true, why: 'Corporate actions can look like gifts or disasters. The right filter is the actual economic effect, not the noise around them.' },
          { text: 'Whether the market reacted positively, because a positive reaction proves the action is good.', correct: false, why: 'Market reaction is short-term sentiment; it can be wrong and can reverse. It is not a verdict on value.' },
          { text: 'Only whether the share price went up or down on the day, because that is all that matters.', correct: false, why: 'A one-day price move tells you little about the underlying economics of the action or its longer-term effect.' },
        ],
      },
    ],
    takeaway: 'A corporate action is worth studying for its real effect on ownership, cash, and structure. Excitement is cheap; the economics are what you should care about.',
  },

  'l4-015': {
    id: 'l4-015',
    title: 'Dividends',
    subtitle: 'Cash returning to shareholders — and when it helps or hurts.',
    minutes: 6,
    blocks: [
      { kind: 'p', text: "A dividend is a cash payout from the company to shareholders. It can be a sign of financial health and disciplined capital allocation, or it can be a distraction if it comes from borrowing, cuts into reinvestment that would earn more, or is used mainly for optics. The useful lens is capacity and purpose: does the company have the cash, and is the payout the best use of it?" },
      sim('valuation', ''),
      { kind: 'h', text: 'What to look at' },
      { kind: 'list', items: [
        'Payout ratio: how much of profit or cash is being paid out, and whether that is sustainable.',
        'Dividend history: consistency, growth, and whether the dividend is maintained through ordinary cycles or only in good years.',
        'Source of funds: is the dividend coming from operating cash, or from borrowing or one-off gains?',
        'Opportunity cost: could the money earn more inside the business than outside it? A payout is best when reinvestment opportunities are weak or when cash has no better home.',
      ] },
      { kind: 'callout', tone: 'tip', title: 'A dividend is not automatically safer than growth', text: "A high dividend yield can look conservative, but if the business is deteriorating or the payout is funded by debt, the yield can be a trap. The safety is in the cash and the business, not in the dividend label. Treat dividends as one part of a capital-allocation story, not as a substitute for it." },
      sim('valuation', ''),
      { kind: 'example', title: 'Dividend decision test', text: '1. Is the dividend covered by operating cash over time?\n2. Is the payout ratio sustainable without starving reinvestment?\n3. Is the company growing, stable, or declining, and which does the payout fit?\n4. If the dividend is cut, would the business actually be better or worse off?' },
      { kind: 'terms', items: [
        { term: 'dividend', meaning: 'a cash distribution to shareholders, usually paid from profits or cash reserves; a way for a company to return capital rather than reinvest it.' },
        { term: 'dividend yield', meaning: 'the annual dividend per share divided by the share price; a measure of cash return relative to price, not a measure of safety by itself.' },
      ] },
    ],
    quiz: [
      {
        q: 'When is a dividend most likely to be a good use of cash?',
        options: [
          { text: 'When the company has excess cash, limited higher-return reinvestment opportunities, and a sustainable payout the business can keep through a normal cycle.', correct: true, why: 'A dividend is best when it returns cash that has no better use, and when it can be sustained without hurting the business.' },
          { text: 'Whenever the yield is high, because a high yield always means the payout is safe and attractive.', correct: false, why: 'A high yield can come from a falling price, a deteriorating business, or an unsustainable payout. It is not by itself a sign of safety.' },
          { text: 'Only when the dividend is increasing every year, because growth in the dividend is the only sign of quality.', correct: false, why: 'A rising dividend can be good, but it can also be funded unsustainably. Sustainability and source matter more than the direction of the number.' },
        ],
      },
    ],
    takeaway: 'A dividend is capital returning to owners. Judge it by sustainability, source, and opportunity cost — not by the headline yield alone.',
  },

  'l4-016': {
    id: 'l4-016',
    title: 'Stock Splits',
    subtitle: 'More shares, same ownership, usually the same value.',
    minutes: 5,
    blocks: [
      { kind: 'p', text: "A stock split increases the number of shares and reduces the price per share in proportion, so your ownership value is essentially unchanged by the split itself. The main effects are practical: the share price becomes smaller, which can widen the investor base and improve liquidity, and the psychology can feel different even though the economics are not." },
      sim('valuation', ''),
      { kind: 'h', text: 'What changes and what does not' },
      { kind: 'list', items: [
        'Ownership: unchanged. You hold more shares of a smaller piece each; the proportion of the company is the same.',
        'Value: essentially unchanged by the split. The market may move for other reasons, but the split itself does not create value.',
        'Price and liquidity: the lower nominal price can make the stock easier to trade for some investors and can improve the share count’s practicality.',
        'Signals: sometimes a split signals management confidence or a desire to broaden the shareholder base; sometimes it is just an administrative action.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'Do not buy a split for the split', text: "A stock split is not a dividend, not a buyback, and not a growth story. It is a change in the share count. If you buy because you heard the word ‘split’, you are buying a feeling, not a reason. Read the business and the price first; the split is a detail, not a thesis." },
      sim('valuation', ''),
      { kind: 'example', title: 'A split example', text: "If a share is ₹1,000 and splits 2-for-1, you now hold two shares at ₹500 each. The value of your holding is the same if the market does nothing else. The company’s business did not change because the share count did. That is the simplicity of a split: cosmetic, not fundamental." },
      { kind: 'terms', items: [
        { term: 'stock split', meaning: 'an action that increases the number of shares and proportionately reduces the price per share, leaving ownership value essentially unchanged.' },
        { term: 'bonus issue', meaning: 'a free issue of additional shares to existing shareholders; often similar in effect to a split in increasing share count and reducing price per share.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the main economic effect of a stock split?',
        options: [
          { text: 'Almost none on value — the share count rises and the price per share falls proportionately, leaving ownership value broadly unchanged.', correct: true, why: 'A split changes the number of shares and the price per share, not the underlying ownership value or the business itself.' },
          { text: 'It immediately increases the value of the holding because the share price goes up.', correct: false, why: 'A split does not by itself add value; any price move after is a market reaction, not the split’s direct effect.' },
          { text: 'It is the same as a dividend and therefore increases what shareholders receive.', correct: false, why: 'A split is not a cash distribution; it does not pay shareholders anything. A dividend does.' },
        ],
      },
    ],
    takeaway: 'A stock split is a change in the share count, not a change in value. Treat it as a mechanical detail and keep your focus on the business and the price.',
  },

  'l4-017': {
    id: 'l4-017',
    title: 'Buybacks',
    subtitle: 'When a company buys its own shares — and whether it is a good idea.',
    minutes: 6,
    blocks: [
      { kind: 'p', text: "A buyback is when a company spends cash to purchase its own shares, reducing the share count and returning capital to selling shareholders. It can be a strong use of capital when the shares are genuinely undervalued and the business has excess cash with limited better uses. It can be weak when it is timed for optics, done at a high valuation, or used to mask a weak capital-allocation strategy." },
      sim('valuation', ''),
      { kind: 'h', text: 'What makes a buyback attractive or not' },
      { kind: 'list', items: [
        'Price: a buyback is more compelling when shares are cheap relative to value than when they are expensive. Buying high and retiring low is not a good use of cash.',
        'Cash position: the company should not borrow to fund a buyback if that weakens liquidity or serviceability. Excess cash with few reinvestment options is the better setting.',
        'Earnings and cash: the buyback should be backed by real cash generation, not by one-off gains or accounting that flatters the balance sheet.',
        'Rationale: a buyback is stronger when the company says, in effect, we have no better use for this cash than to retire shares at a good price. It is weaker when the message is mostly about share-price optics.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'Buybacks can be value-destroying', text: "A buyback at a stretched valuation, funded by cash that could have been reinvested at a high return, is a poor allocation. It can reduce the share count while leaving the business weaker, or it can flatter per-share numbers without actually creating value. Judge buybacks the same way you judge any capital deployment: price, purpose, and alternative uses." },
      sim('valuation', ''),
      { kind: 'example', title: 'Buyback test', text: '1. Is the share price low relative to a reasonable estimate of value?\n2. Does the company have genuine excess cash, not just a headline cash balance?\n3. Could the same cash earn a higher return elsewhere in the business?\n4. Is the buyback being done for value or for optics? If the answer to value is unclear, be cautious.' },
      { kind: 'terms', items: [
        { term: 'buyback', meaning: 'an action in which a company buys its own shares, often retiring them or holding them as treasury stock, reducing the share count and returning capital to selling shareholders.' },
        { term: 'treasury stock', meaning: 'shares the company has bought back and holds rather than retiring; they usually do not carry voting or dividend rights the same way.' },
      ] },
    ],
    quiz: [
      {
        q: 'Which is the best reason for a company to do a buyback?',
        options: [
          { text: 'It has genuine excess cash and believes its shares are undervalued, so retiring them is a better use of capital than the alternatives.', correct: true, why: 'A buyback is most compelling when the price is attractive and the cash has no higher-return home inside the business.' },
          { text: 'The share price is near an all-time high and management wants to support it.', correct: false, why: 'Buying at a high price is a poor use of cash and can destroy value rather than create it.' },
          { text: 'The company wants to increase the dividend yield without paying cash.', correct: false, why: 'A buyback can change per-share metrics, but using it primarily to manufacture a yield effect is not the same as a value-based capital decision.' },
        ],
      },
    ],
    takeaway: 'A buyback is good capital allocation when the price is attractive and the cash has no better home. It is a flag, not a favour — judge it by price, cash, and alternatives, not by the headline.',
  },
}