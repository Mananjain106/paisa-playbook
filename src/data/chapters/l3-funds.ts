import type { Chapter } from '../../types'

/**
 * Level 3, chapters 51–63: mutual funds, index products and the benchmarks
 * India quotes every evening.
 *
 * The fund industry is where most Indian households actually invest, so these
 * chapters use the real names, the real regulatory categories and the real
 * numbers that a retail investor meets on an AMC factsheet — SEBI's 2017
 * scheme categorisation, direct versus regular plans, expense-ratio caps,
 * NAV cut-off times, the Nifty family and the Sensex family.
 */
export const funds: Record<string, Chapter> = {
  'l3-051': {
    id: 'l3-051',
    title: 'Mutual Funds',
    subtitle: 'Pooling money so a professional invests it for you',
    minutes: 9,
    blocks: [
      { kind: 'scene', name: 'mf-pool', caption: 'Thousands of investors’ rupees go into one basket, and each investor owns units of that basket in proportion to what they put in.' },
      { kind: 'p', text: 'A mutual fund is a trust that pools money from many investors and invests it according to a stated mandate. You own units of the pool, not the underlying shares directly, and the pool’s value per unit is its NAV. In India this is the vehicle through which most households first own equity: the industry manages well over ₹60 lakh crore, and the number of investor folios runs into crores. It exists because a single ₹500 cannot buy a diversified portfolio, but ₹500 alongside a crore of other investors’ money can.' },
      {
        kind: 'table',
        caption: 'How a mutual fund is put together',
        headers: ['Entity', 'Job'],
        rows: [
          ['AMC (e.g. SBI Mutual Fund, HDFC AMC, Nippon India MF)', 'Runs the schemes, employs the fund managers, charges the expense ratio'],
          ['Trustee company', 'Watches the AMC on behalf of unitholders, approves valuations and compliance'],
          ['Custodian', 'Safely holds the scheme’s shares and bonds, separate from the AMC’s own balance sheet'],
          ['RTA (CAMS, KFintech)', 'Maintains your folio and sends statements'],
          ['Depositories (NSDL, CDSL)', 'Hold units if you choose to hold them in demat form'],
          ['SEBI', 'Licenses the AMC, prescribes scheme categories, caps expenses, audits conduct'],
          ['AMFI', 'Industry body that publishes monthly data and runs investor awareness'],
        ],
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'SEBI prescribes what a scheme may hold — that is why labels matter',
        text: 'Since October 2017, every open-ended scheme must fit a defined category. A large-cap fund must hold at least 80% in the top 100 companies by market capitalisation. A mid-cap fund must hold 65% in ranks 101–250. A small-cap fund must hold 65% in rank 251 and below. A multi-cap fund must hold at least 25% each in large, mid and small caps. A focused fund holds a maximum of 30 stocks. The label on the cover is a rule, not marketing — you can verify the portfolio in the monthly factsheet.',
      },
      {
        kind: 'table',
        caption: 'The categories you will actually meet',
        headers: ['Group', 'Categories', 'What they do in a portfolio'],
        rows: [
          ['Equity', 'Large cap, mid cap, small cap, large & mid cap, flexi cap, multi cap, focused, value, contra, dividend yield, sectoral/thematic, ELSS, index/ETF', 'Growth over long horizons'],
          ['Debt', 'Overnight, liquid, ultra short, low duration, money market, short/medium/long duration, corporate bond, credit risk, banking & PSU, gilt, floater, dynamic bond', 'Stability, short-horizon parking, income'],
          ['Hybrid', 'Conservative, balanced, aggressive, dynamic asset allocation, multi-asset, equity savings, arbitrage', 'One-fund portfolios with a managed mix'],
          ['Solution-oriented', 'Retirement and children’s funds', 'Locked-in, goal-specific'],
        ],
      },
      {
        kind: 'table',
        caption: 'Direct or regular? Growth or IDCW?',
        headers: ['Choice', 'What it means', 'Which to pick'],
        rows: [
          ['Direct plan', 'You buy straight from the AMC. No distributor commission, so a lower expense ratio', 'Almost always, if you do not need advice'],
          ['Regular plan', 'Bought through a distributor who earns a trail commission from the expense ratio', 'Only if the advice is genuinely worth the annual fee'],
          ['Growth option', 'Profits stay in the scheme and lift the NAV. No payouts, no tax until you redeem', 'Default choice for wealth building'],
          ['IDCW option', 'Income Distribution cum Capital Withdrawal — a payout that is partly your own capital returning', 'Rarely useful; it also creates a tax event each time'],
        ],
      },
      {
        kind: 'example',
        title: 'What 0.8% a year costs a SIP of ₹5,000 in India',
        text: 'A regular plan charging 1.8% a year versus a direct plan charging 1.0% on the same portfolio, over 20 years at 12% gross. The direct plan compounds to roughly ₹49.5 lakh; the regular plan to roughly ₹44.4 lakh. The commission takes about ₹5 lakh — over ten times the amount invested in a single year. On a small SIP the difference feels like nothing; it is the single most reliable, controllable saving available to an Indian investor.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Ten funds is not ten times better than one',
        text: 'Holding eight equity funds that each own the same hundred large-cap names gives you one portfolio with eight sets of expense ratios, and it makes rebalancing and tax-loss harvesting far harder. Two or three well-chosen funds cover most portfolios; the fifth fund adds paperwork, not diversification.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Decide the asset split first: how much equity, debt and gold you want.',
          'Then pick one broad, cheap fund per sleeve — an index fund is a perfectly good answer.',
          'Choose the direct, growth option and start a SIP.',
          'Read the portfolio disclosure every six months to check the fund still does what its label promises.',
        ],
      },
      { kind: 'sim', name: 'portfolio', caption: 'See why one pooled basket beats your own ₹5,000 spread across five shares.' },
      {
        kind: 'terms',
        items: [
          { term: 'Mutual fund', meaning: 'A SEBI-regulated trust that pools money from many investors and invests it per a stated mandate. You own units of the pool, not the underlying shares directly.' },
          { term: 'Folio', meaning: 'Your account with a fund house or its registrar, holding your units. Units can also be held in a demat account.' },
          { term: 'Open-ended scheme', meaning: 'A fund that issues and redeems units continuously at NAV, which is almost every Indian equity and debt fund.' },
          { term: 'ELSS', meaning: 'Equity-linked savings scheme: at least 80% equity with a three-year lock-in, and the shortest lock-in available under Section 80C — old tax regime only.' },
          { term: 'New fund offer (NFO)', meaning: 'The initial subscription period when a scheme opens. A new fund is not better than an existing one with a track record, and often costs more.' },
        ],
      },
    ],
    quiz: [
      {
        q: 'A scheme is labelled “mid cap”. What does SEBI’s rule require it to do?',
        options: [
          { text: 'Hold at least 65% in companies ranked 101–250 by market capitalisation', correct: true, why: 'The 2017 categorisation fixes the range each label must respect, so mid cap means the middle of the listed universe, not “middling quality”.' },
          { text: 'Hold only companies worth between ₹1,000 and ₹10,000 crore', why: 'The ranks are by market capitalisation across the market, not a fixed rupee band.' },
          { text: 'Hold any companies it likes, as long as the name contains “mid”', why: 'Names are regulated, not decorative.' },
          { text: 'Hold at least 80% in the top 100 companies', why: 'That is the large-cap rule.' },
        ],
      },
      {
        q: 'Two versions of the same fund: regular plan with 1.8% expenses, direct with 1.0%. A ₹5,000 monthly SIP runs for 20 years. What is the realistic conclusion?',
        options: [
          { text: 'The difference is trivial at these amounts', why: 'It is on the order of five lakh rupees over twenty years — hardly trivial.' },
          { text: 'The direct plan leaves roughly ₹5 lakh more in your hands over 20 years', correct: true, why: 'The expense ratio is charged on the whole corpus every year, so a 0.8% difference compounds into a very large number.' },
          { text: 'Regular plans are illegal', why: 'They are legal and common; the distributor who sells them is paid from the expense ratio.' },
          { text: 'The direct plan is riskier', why: 'Identical portfolio, identical manager, lower cost — so it is neither riskier nor better managed, only cheaper.' },
        ],
      },
      {
        q: 'You hold eight equity funds that all own the same large-cap names. What have you actually built?',
        options: [
          { text: 'A highly diversified portfolio', why: 'Overlap is not diversification; the same hundred companies are just held eight times over.' },
          { text: 'One concentrated portfolio carrying eight expense ratios', correct: true, why: 'Real diversification would come from different asset classes or clearly different mandates, not more wrappers around the same stocks.' },
          { text: 'A hedge against fund manager risk', why: 'Manager risk is reduced only if the managers are doing genuinely different things.' },
          { text: 'A tax-efficient structure', why: 'More funds means more transactions to track and more exit loads, which is worse for tax, not better.' },
        ],
      },
      {
        q: 'Why does SEBI require the “IDCW” option rather than calling it a dividend?',
        options: [
          { text: 'Because dividends from equity funds are tax-free', why: 'Payouts from a fund are a redemption of units, and tax applies as a capital gain.' },
          { text: 'Because the payout can include your own capital, not only distributable profit', correct: true, why: 'Income Distribution cum Capital Withdrawal is an accurate name: the money may simply be your own investment coming back, net of a tax event.' },
          { text: 'Because AMCs are not allowed to distribute profits', why: 'They are, from distributable surplus as per SEBI rules.' },
          { text: 'Because it is a different asset class', why: 'It is only an option within the same scheme.' },
        ],
      },
    ],
    takeaway: 'A mutual fund is a regulated pool that gives a small investor instant diversification and professional management at a visible cost. Choose the category deliberately, buy the direct growth option, and judge the expense ratio as a permanent cost of ownership.',
  },

  'l3-052': {
    id: 'l3-052',
    title: 'Asset Management Company',
    subtitle: 'The company that actually runs your fund',
    minutes: 6,
    blocks: [
      { kind: 'scene', name: 'amc-expense', caption: 'Your gross return first pays the AMC’s expenses, and only what is left becomes the NAV you own.' },
      { kind: 'p', text: 'The AMC is the business behind the scheme. SBI Mutual Fund, HDFC AMC, ICICI Prudential AMC, Nippon India MF, UTI MF and their peers earn by charging an expense ratio on the assets they manage — which is why AUM matters so much to them. The AMC is separate from the trust that owns your money, and it is not allowed to treat scheme assets as its own. Since Indian AMCs are listed companies themselves — HDFC AMC, Nippon Life India, UTI AMC and Aditya Birla Sun Life AMC all trade on the exchanges — you can even read their annual reports and see exactly how the business earns.' },
      {
        kind: 'table',
        caption: 'Who does what inside a fund house',
        headers: ['Role', 'Responsibility'],
        rows: [
          ['Fund manager', 'Makes the buy and sell decisions for the scheme within its mandate'],
          ['Chief Investment Officer', 'Sets the house view and oversees all managers'],
          ['Research team', 'Models companies and sectors, and checks them against reality — site visits included'],
          ['Compliance officer', 'Enforces SEBI’s limits on concentration, category and disclosure'],
          ['Risk team', 'Monitors liquidity, credit quality and tracking error in real time'],
          ['Sales and distribution', 'Pushes AMC schemes through brokers, banks, apps and online platforms'],
        ],
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'Since 2021, fund managers must hold skin in the game',
        text: 'SEBI requires fund managers to invest a part of their own compensation — for senior managers, a fifth of salary — in the very schemes they manage, with a lock-in on those units. It has not turned bad funds into good ones, but it does mean the person making your decisions is exposed to the same NAV you are.',
      },
      {
        kind: 'example',
        title: 'Where a regular plan’s money goes',
        text: 'On a ₹1,00,000 holding in a regular equity plan with a 1.8% expense ratio, the AMC collects about ₹1,800 a year. Roughly ₹500–1,100 of that leaves immediately as the distributor’s trail commission; the rest funds the fund manager, research, dealing, custodian, RTA, audit and profit. That is why the same scheme in its direct plan costs about 1%: the commission line is simply missing. Nothing about the portfolio changes.',
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'You are paying for a skill, so check whether it exists',
        text: 'Actively managed equity funds charge 1–2.25% — many times an index fund’s fee — on the explicit promise of beating the market. Check the fund’s long-term record against its own benchmark Total Return Index, net of expenses, and check whether the same manager was actually running it during that period. That is the whole audit.',
      },
      {
        kind: 'list',
        items: [
          'One AMC runs dozens of schemes; a fund house with a great small-cap fund may run a mediocre liquid fund. Judge schemes, not brands.',
          'A change of fund manager is a real event: watch the disclosure and give the new manager a full cycle before judging, but do not assume continuity.',
          'AUM can hurt performance: a small-cap fund that grows very large struggles to build positions without moving prices — the reason some good funds close to fresh money.',
          'AMFI publishes monthly data for the whole industry; the AMC factsheet is the primary document and it is free.',
        ],
      },
      { kind: 'sim', name: 'feedrag', caption: 'The AMC takes its expense ratio off the top every single year — see what that does over two decades.' },
      {
        kind: 'terms',
        items: [
          { term: 'Asset management company (AMC)', meaning: 'The company that runs a fund house\'s schemes and earns the expense ratio investors pay — for example SBI Mutual Fund, HDFC AMC or Nippon India MF.' },
          { term: 'Assets under management (AUM)', meaning: 'The total value a fund house manages. It drives the AMC\'s revenue and, when it gets very large, can hurt a small-cap fund\'s ability to trade.' },
          { term: 'Trustee company', meaning: 'The entity that supervises the AMC on behalf of unitholders, approving valuations and watching compliance.' },
          { term: 'Custodian', meaning: 'The institution that holds a scheme\'s securities safely, separate from the AMC\'s own balance sheet.' },
          { term: 'Registrar and transfer agent (RTA)', meaning: 'CAMS or KFintech — the registrar that maintains your folio and sends your statements.' },
          { term: 'Trail commission', meaning: 'The annual fee a regular plan pays a distributor out of its expense ratio. It is why direct plans cost 0.5–1.1% less.' },
        ],
      },
    ],
    quiz: [
      {
        q: 'Where does the money in your fund’s expense ratio actually go?',
        options: [
          { text: 'Entirely to the government as tax', why: 'Tax on gains is a separate matter; the expense ratio is the fund’s operating cost.' },
          { text: 'To fund managers, research, operations, distribution commissions and the AMC’s profit', correct: true, why: 'It is the annual operating budget of the scheme, and in regular plans a large slice is the distributor’s trail.' },
          { text: 'Into a reserve that is returned at redemption', why: 'There is no such reserve — expenses are incurred and gone.' },
          { text: 'To the custodian only', why: 'The custodian is just one of several lines in the expense ratio.' },
        ],
      },
      {
        q: 'A fund house is famous for one outstanding small-cap fund. What can you conclude about its other schemes?',
        options: [
          { text: 'They must be equally good', why: 'Brand quality does not transfer between mandates; different managers run them.' },
          { text: 'Nothing — each scheme has its own mandate, manager and record to check', correct: true, why: 'Judge the scheme against its own benchmark, not the reputation of the AMC on its best product.' },
          { text: 'They must be worse', why: 'They may be perfectly good; the point is that the AMC’s reputation is not evidence either way.' },
          { text: 'They all share the same portfolio', why: 'Different categories hold different securities by SEBI rule.' },
        ],
      },
      {
        q: 'Why can a very large AUM hurt an actively managed small-cap fund?',
        options: [
          { text: 'Because SEBI caps AUM', why: 'SEBI does not cap AUM; it prescribes category and concentration limits.' },
          { text: 'Because building and exiting positions in small companies without moving their prices becomes difficult', correct: true, why: 'Liquidity is finite in small caps, so a huge fund either takes oversized bets or drifts towards more liquid, larger names.' },
          { text: 'Because expenses rise with size', why: 'Economies of scale generally push expense ratios down as assets grow.' },
          { text: 'Because the fund manager will leave', why: 'Manager turnover is a separate risk.' },
        ],
      },
    ],
    takeaway: 'The AMC is a business paid from your corpus every year. Understand its incentives, read the factsheet, and remember that the fee for active management is only worth paying when the long-term, net-of-cost record supports it.',
  },

  'l3-053': {
    id: 'l3-053',
    title: 'NAV',
    subtitle: 'The price of one unit of a fund',
    minutes: 7,
    blocks: [
      { kind: 'scene', name: 'nav-calc', caption: 'Everything the scheme owns, minus what it owes, divided by every unit in issue — that is the NAV.' },
      { kind: 'p', text: 'NAV, or Net Asset Value, is the price of one unit of a scheme. It is calculated by adding up the market value of everything the fund owns, subtracting what it owes, and dividing by the number of units outstanding. Indian funds compute it every business day after the market closes, and AMFI publishes it for every scheme.' },
      {
        kind: 'formula',
        label: 'The arithmetic',
        expr: 'NAV = (value of all scheme assets − liabilities) ÷ units outstanding',
        note: 'When you invest, units are allotted as amount ÷ NAV. When you redeem, units cancel at that day’s NAV.',
      },
      {
        kind: 'example',
        title: '₹50,000 in, and what the units are worth later',
        text: 'You invest ₹50,000 in an equity fund when the NAV is ₹48.6226. You are allotted 50,000 ÷ 48.6226 = 1,028.3 units. If the NAV later rises to ₹55, your holding is 1,028.3 × 55 = ₹56,557 — a gain of about ₹6,557, and you still hold exactly 1,028.3 units. Nothing about your unit count changes with the market: only the price of each unit does.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'A low NAV does not mean a cheap fund',
        text: 'A fund with a ₹10 NAV is not cheaper than a fund with a ₹500 NAV. Two funds with different NAVs can hold identical portfolios; the NAV is simply the accumulated history of the scheme divided by its units. The only sensible comparison is the return over the same period, using the same starting and ending dates.',
      },
      {
        kind: 'table',
        caption: 'The cut-off rule that decides which day’s NAV you get',
        headers: ['Scheme type', 'Cut-off', 'What it means'],
        rows: [
          ['Equity, hybrid, most debt schemes', '3:00 pm', 'Application and funds received before 3:00 pm get that day’s NAV; after, the next business day’s NAV'],
          ['Liquid and overnight funds', '1:30 pm', 'A much earlier cut-off, reflecting how tightly these funds manage their portfolios'],
          ['Weekend or holiday investment', '—', 'Money received on a non-business day gets the NAV of the next business day'],
        ],
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'Swing pricing — when the NAV itself is adjusted',
        text: 'When a very large redemption hits an open-ended debt scheme, the fund may have to sell securities quickly at a discount, and the cost would otherwise fall on the investors who stayed. Swing pricing lets the AMC adjust the NAV up or down for the transacting investors on such days, so the people leaving pay for their own exit rather than diluting everyone else. It is a genuine protection — and a reminder that NAV is a computed number, not a market tick.',
      },
      {
        kind: 'list',
        items: [
          'An equity fund’s NAV changes only when the market moves or the fund trades — the calculation is not continuous during the day, and it is not a live quote.',
          'ETFs have a market price that can differ from their NAV: the intraday indicative value is what the exchange shows, and the day’s closing NAV is what the fund reports.',
          'A fund’s NAV and its return are not the same thing for you: dividends/payouts reduce NAV, and tax and exit loads sit between the NAV move and your money.',
        ],
      },
      { kind: 'sim', name: 'portfolio', caption: 'NAV is assets minus liabilities, per unit — move the portfolio and watch it respond.' },
      {
        kind: 'terms',
        items: [
          { term: 'Net asset value (NAV)', meaning: 'The per-unit value of a fund: total assets minus liabilities, divided by units outstanding. A low NAV does not make a fund cheap.' },
          { term: 'Cut-off time', meaning: 'The time your application and money must reach the fund to get that day\'s NAV — 3:00 pm for most schemes, 1:30 pm for liquid funds.' },
          { term: 'Swing pricing', meaning: 'An adjustment to NAV on days of very large redemptions, so the investors leaving bear the cost of their exit instead of diluting everyone else.' },
        ],
      },
    ],
    quiz: [
      {
        q: 'Fund A has an NAV of ₹10 and Fund B of ₹450. Both hold nearly identical portfolios and returned 13% last year. Which is the better buy?',
        options: [
          { text: 'Fund A, because you get more units', why: 'Unit count is irrelevant — more units of a smaller NAV is the same money.' },
          { text: 'Fund B, because it has a track record', why: 'A high NAV is not a track record; only a return measured over a period is.' },
          { text: 'Neither is better on this information alone — compare total return, expenses and mandate', correct: true, why: 'NAV level says nothing about value. Returns, cost and portfolio decide.' },
          { text: 'Fund A, because a low NAV has more room to grow', why: 'NAV has no ceiling or floor that restricts growth.' },
        ],
      },
      {
        q: 'You submit an equity fund purchase at 4:30 pm on Tuesday using money already in your account. Which NAV applies?',
        options: [
          { text: 'Tuesday’s NAV', why: 'The 3:00 pm cut-off has passed, so Tuesday’s NAV is no longer available to you.' },
          { text: 'Wednesday’s NAV, since the application missed the cut-off', correct: true, why: 'Money and application must both arrive before the cut-off to get that day’s NAV.' },
          { text: 'Tuesday’s NAV plus a late fee', why: 'There is no late fee — you simply roll to the next business day.' },
          { text: 'Whichever NAV is higher', why: 'Nobody can choose the better of two NAVs; the cut-off rule decides.' },
        ],
      },
      {
        q: 'What problem does swing pricing solve in debt funds?',
        options: [
          { text: 'It guarantees a minimum NAV', why: 'It does not guarantee returns; it adjusts for the cost of a large transaction.' },
          { text: 'It ensures the investors who redeem in large size bear the cost their exit imposes on the others', correct: true, why: 'Otherwise the whole scheme absorbs the transaction cost, which is a transfer of wealth from loyal unitholders to the ones leaving.' },
          { text: 'It removes interest-rate risk', why: 'Duration risk remains a feature of bond funds.' },
          { text: 'It lets the AMC avoid disclosure', why: 'Disclosure rules apply regardless.' },
        ],
      },
    ],
    takeaway: 'NAV is the per-unit value of the pool: useful for computing units and returns, useless for comparing funds. The cut-off time decides which day’s NAV you get, and a large exit is now partly paid for by the investor exiting.',
  },

  'l3-054': {
    id: 'l3-054',
    title: 'The Fund Manager',
    subtitle: 'The person actually deciding what you own',
    minutes: 6,
    blocks: [
      { kind: 'scene', name: 'manager-discretion', caption: 'A manager takes discretionary calls; an index simply follows the market. The fee you pay reflects which of these you bought.' },
      { kind: 'p', text: 'The fund manager is the individual who decides what the scheme buys. In an actively managed fund that person has real discretion, and the scheme’s future is genuinely tied to their judgement, their process and their temperament. In an index fund or ETF, there is no equivalent decision worth paying for: the manager’s job is to hold the index and keep tracking error small.' },
      {
        kind: 'table',
        caption: 'What actually changes when a manager changes',
        headers: ['Situation', 'Risk to you'],
        rows: [
          ['Index fund/ETF manager changes', 'Minimal — the mandate is a rulebook, not an opinion'],
          ['Active fund manager leaves after ten years', 'High — the record you bought may have left with them'],
          ['House style survives the change', 'Moderate — decisions stay consistent, but execution quality may vary'],
          ['Manager runs a dozen schemes', 'Moderate — attention is finite; small and mid-cap mandates suffer first'],
          ['Manager co-invests their own money with a lock-in', 'Lower — SEBI requires this, and it aligns incentives'],
        ],
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'Check who actually manages the fund now',
        text: 'The factsheet and the monthly portfolio disclosure name the managers. A ten-year track record is only evidence about the people who were present for it. In Indian mid-cap and small-cap funds, manager moves are frequent enough that the manager, the team and the AMC’s process matter more than the scheme’s long-run chart.',
      },
      {
        kind: 'example',
        title: 'The record that was built by someone else',
        text: 'Consider a small-cap fund with a spectacular ten-year record that a star manager left three years ago. Investors looking at the ten-year number are buying a result they can no longer receive — the next ten years will be built by a different team, in a different market. The disciplined version of the same decision is to compare the fund’s performance since the change against its category and its benchmark TRI, and to ask whether the AMC’s process, not the individual, produced the earlier returns.',
      },
      {
        kind: 'list',
        items: [
          'A manager with a stated, repeatable process is safer than a manager with one lucky decade.',
          'Read the manager’s commentary in the factsheet — it is the cheapest way to see whether they understand why their fund went up.',
          'For an index fund, the numbers to check are tracking error and tracking difference, not the manager’s CV.',
          'If you cannot tell who manages your fund, that is a sign you are holding something you have not yet examined.',
        ],
      },
      { kind: 'sim', name: 'market', caption: 'A full cycle under a manager’s discretion — see how much of the outcome came from the market and how much from the calls.' },
      {
        kind: 'terms',
        items: [
          { term: 'Fund manager', meaning: 'The person deciding what an actively managed scheme buys. In an index fund the role is mechanical, so manager risk all but disappears.' },
          { term: 'Investment mandate', meaning: 'The rulebook a scheme must follow — category limits, concentration caps and what it may hold. It is what makes a scheme\'s label enforceable.' },
          { term: 'Co-investment requirement', meaning: 'SEBI\'s rule since 2021 that senior fund managers invest part of their own compensation in the schemes they manage, with a lock-in.' },
        ],
      },
    ],
    quiz: [
      {
        q: 'A fund’s ten-year record is excellent but the manager who built it left two years ago. What is the sensible check?',
        options: [
          { text: 'Ignore it — records belong to the scheme', why: 'The record belongs to whoever made the decisions at the time.' },
          { text: 'Compare performance since the change against the category and benchmark TRI', correct: true, why: 'That isolates what the new team has actually delivered, rather than blending it with a decade built by someone else.' },
          { text: 'Sell immediately, whatever the data says', why: 'A manager change is a reason to look, not an automatic sell signal — house processes can outlast individuals.' },
          { text: 'Buy more, because the fund is on sale', why: 'A manager change is not a discount.' },
        ],
      },
      {
        q: 'Why does fund manager risk matter much less in an index fund?',
        options: [
          { text: 'Because index funds have no fund manager at all', why: 'They have one, but the mandate is mechanical.' },
          { text: 'Because the mandate is a rulebook — hold the index — so discretion is minimal', correct: true, why: 'The manager implements the index, so personal judgement has far less room to change your outcome.' },
          { text: 'Because index funds are guaranteed', why: 'They carry full market risk; they are simply not exposed to stock-selection risk.' },
          { text: 'Because SEBI appoints the manager', why: 'AMCs appoint managers; SEBI regulates the framework.' },
        ],
      },
      {
        q: 'A manager runs eleven different schemes across three categories. Why does this matter?',
        options: [
          { text: 'It does not — fund managers are interchangeable', why: 'Attention is finite, and the smaller, less liquid mandates are where overload shows first.' },
          { text: 'Divided attention is a real risk, especially in small and mid-cap mandates that need deep research', correct: true, why: 'The same person cannot research 200 small companies across several funds as thoroughly as a dedicated team can.' },
          { text: 'It guarantees the funds will all perform identically', why: 'Different mandates produce different portfolios by design.' },
          { text: 'It reduces the expense ratio', why: 'Manager workload has no direct effect on the expense ratio.' },
        ],
      },
    ],
    takeaway: 'In an active fund you are buying a person’s judgement, so verify they are still there and still doing what made the record. In an index fund you are buying a rule, so judge the tracking, not the biography.',
  },

  'l3-055': {
    id: 'l3-055',
    title: 'Equity Funds',
    subtitle: 'The growth engine of a long-term portfolio',
    minutes: 9,
    blocks: [
      { kind: 'scene', name: 'risk-return-curve', caption: 'Equity funds sit high on the return axis — and equally high on the uncertainty axis.' },
      { kind: 'p', text: 'An equity fund must hold at least 65% of its assets in shares; most hold far more. It is the core growth engine of an Indian household portfolio, and also the asset class most likely to show a deep negative return in any given year. What separates a sensible choice from a mistake is not the fund’s name but the category — which slice of the market it is required to own — and the time horizon over which you can leave it alone.' },
      {
        kind: 'table',
        caption: 'SEBI’s equity categories, in plain language',
        headers: ['Category', 'Must hold', 'Suits'],
        rows: [
          ['Large cap', 'At least 80% in the top 100 companies', 'A first equity fund; steadier, lower return potential'],
          ['Large & mid cap', 'At least 35% in large caps and 35% in mid caps', 'Investors wanting a foot in both'],
          ['Mid cap', 'At least 65% in companies ranked 101–250', '10+ year horizons and strong stomachs'],
          ['Small cap', 'At least 65% in companies ranked 251 and below', 'Very long horizons; expect 40%+ drawdowns'],
          ['Flexi cap', 'At least 65% in equity, spread wherever the manager chooses', 'Investors who want the manager to decide the size mix'],
          ['Multi cap', 'At least 25% each in large, mid and small caps', 'Built-in spread across market sizes'],
          ['Focused', 'A maximum of 30 stocks, minimum 65% equity', 'Concentrated conviction — more volatile'],
          ['Value / contra', 'At least 65% following a value or contrarian approach', 'Investors who will tolerate long stretches of underperformance'],
          ['Dividend yield', 'At least 65% in higher dividend-yielding stocks', 'Income-leaning equity investors'],
          ['Sectoral / thematic', 'At least 80% in one sector or theme', 'A deliberate bet, not a core holding'],
          ['ELSS', 'At least 80% in equity, with a three-year lock-in', 'Tax saving under Section 80C, old regime only'],
          ['Index / ETF', 'At least 95% in the securities of a chosen index', 'Cheapest way to own the market'],
        ],
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'Why the label is legally binding and the name is not',
        text: 'A scheme that calls itself large cap must keep 80% in the top 100; a fund house cannot quietly turn a large-cap fund into a small-cap fund because small caps are running. This is why reading the category is enough to know the basic risk of what you are buying — and why multi-cap funds had to rebalance their portfolios in 2021 after SEBI enforced the 25/25/25 rule.',
      },
      {
        kind: 'example',
        title: 'Two mirrors of the same market',
        text: 'In the crash of March 2020, the Nifty 50 fell about 38% from its February high. Small-cap indices fell harder, and many small-cap funds showed drawdowns that frightened first-time investors into redeeming at the bottom. Then, over the next two years, small caps recovered far more than large caps — the exact sequence that punishes investors who choose a category they cannot hold through a fall. The category did what it promised; the investor’s horizon was the problem.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Sector funds are a bet, not a portfolio',
        text: 'A pharma, IT, PSU bank or defence fund is a concentrated wager on one part of the economy, and it will look brilliant for years and then terrible for years. If you buy one, size it small, know what you are betting on, and do not mistake a good run for a strategy. Most investors are better served by a broad index fund plus, at most, a small thematic position.',
      },
      {
        kind: 'table',
        caption: 'What actually drives an equity fund’s long-term return',
        headers: ['Driver', 'Effect'],
        rows: [
          ['Earnings growth of the companies held', 'The dominant, durable force over a decade'],
          ['Change in valuation multiples', 'Adds or subtracts huge amounts over 3–5 year windows'],
          ['Expense ratio and exit load', 'A certain, permanent drag of 0.1–2.25% a year'],
          ['Cash holdings and redemption pressure', 'A silent drag when the fund is forced to sell into a falling market'],
          ['Your own buying and selling', 'Usually the largest single determinant of your realised return'],
        ],
      },
      {
        kind: 'list',
        items: [
          'ELSS gives an 80C deduction of up to ₹1.5 lakh a year with the shortest lock-in of any tax-saving option (three years), but the deduction is only available under the old tax regime.',
          'A fund’s benchmark is its own category index, so a small-cap fund should be compared against a small-cap index TRI — not the Nifty 50.',
          'Expect a 30–50% temporary fall at some point in a 15-year holding period. If that sentence makes you uncomfortable, the equity allocation is too high, not the fund too aggressive.',
          'Ignore one-year numbers. A category can be out of favour for three years and still be exactly what a long-term portfolio needs.',
        ],
      },
      { kind: 'sim', name: 'market', caption: 'Run a bull, a bear and a crash through a large-cap and a small-cap fund, and compare the two.' },
      {
        kind: 'terms',
        items: [
          { term: 'Equity fund', meaning: 'A scheme holding at least 65% in shares. It is the growth engine of a long-term portfolio and the asset most likely to fall 30–50% in a bad year.' },
          { term: 'Market-cap categorisation', meaning: 'SEBI\'s fixed definitions that make labels meaningful: large cap is the top 100, mid cap ranks 101–250, small cap ranks 251 and below.' },
          { term: 'Flexi-cap fund', meaning: 'An equity fund with at least 65% in shares, where the manager chooses how to spread between large, mid and small caps.' },
          { term: 'Multi-cap fund', meaning: 'An equity fund required to hold at least 25% each in large, mid and small caps, so it cannot drift entirely into one corner.' },
          { term: 'Sectoral fund', meaning: 'A fund investing at least 80% in one sector such as IT, pharma or PSU banks. It is a deliberate bet, not a core holding.' },
          { term: 'Focused fund', meaning: 'An equity fund holding a maximum of 30 stocks — concentrated conviction, and more volatile for it.' },
          { term: 'Value fund', meaning: 'An equity fund following a value approach, buying businesses the market has marked down. It can lag for years at a time.' },
        ],
      },
    ],
    quiz: [
      {
        q: 'A scheme is called a small-cap fund. What is it required to hold?',
        options: [
          { text: 'At least 65% in companies ranked 251 and below by market capitalisation', correct: true, why: 'SEBI fixes the range for each label, so “small cap” has a precise meaning rather than an impressionistic one.' },
          { text: 'Companies with a share price below ₹100', why: 'Small cap is about market capitalisation rank, not price per share.' },
          { text: 'Any stocks the manager considers small', why: 'The rule is mechanical, based on market-cap rank.' },
          { text: 'At least 80% in the top 100 companies', why: 'That is the large-cap requirement.' },
        ],
      },
      {
        q: 'Small-cap funds fell about 40% in March 2020 and then recovered strongly. What is the right lesson?',
        options: [
          { text: 'Small caps should never be owned', why: 'They have been among the best long-run performers for patient investors.' },
          { text: 'Match the category to a horizon you can hold through a 40% fall', correct: true, why: 'The category behaved as advertised. The damage came from investors who owned it with short horizons or thin nerves.' },
          { text: 'Sell at the first 10% fall', why: 'Repeatedly selling into falls is what converts volatility into permanent loss.' },
          { text: 'Buy small caps only after they have risen 50%', why: 'That is buying at the point of maximum enthusiasm.' },
        ],
      },
      {
        q: 'You want to save tax under Section 80C but refuse lock-ins longer than necessary. What fits best among equity funds?',
        options: [
          { text: 'An ELSS fund, with its three-year lock-in', correct: true, why: 'ELSS has the shortest lock-in among 80C instruments and gives you equity exposure while you save tax — but only under the old regime.' },
          { text: 'A liquid fund', why: 'A liquid fund gets no 80C deduction.' },
          { text: 'A small-cap fund', why: 'No 80C benefit, and a volatile category to be locked into for a tax goal.' },
          { text: 'A gilt fund', why: 'Gilt funds are debt and offer no Section 80C deduction.' },
        ],
      },
      {
        q: 'Which is NOT a reason to avoid a single thematic fund as your core equity holding?',
        options: [
          { text: 'It must hold at least 80% in one theme, so it cannot diversify across the economy', why: 'That is a genuine structural reason.' },
          { text: 'It can be out of favour for several years in a row', why: 'This is exactly what happens to themes, and a real reason.' },
          { text: 'It will always underperform an index fund over any period', correct: true, why: 'Not true as a blanket claim — a theme can lead the market for years; that is not the reason it makes a poor core holding.' },
          { text: 'It makes rebalancing your overall portfolio harder', why: 'A concentrated, correlated sleeve genuinely complicates rebalancing.' },
        ],
      },
    ],
    takeaway: 'Equity funds are the growth engine of a long-term plan, and the category label — not the brand — tells you the risk you are taking. Pick the slice of the market you can hold through a 40% fall, and hold it for a decade, not a quarter.',
  },

  'l3-056': {
    id: 'l3-056',
    title: 'Debt Funds',
    subtitle: 'The ballast in a portfolio',
    minutes: 8,
    blocks: [
      { kind: 'scene', name: 'debt-fund-nav', caption: 'Debt funds own bonds, so their returns follow the yields in this curve — and their NAV moves when the curve shifts.' },
      { kind: 'p', text: 'A debt fund holds bonds, treasury bills and money-market instruments, and earns the interest on them. It is the quieter half of a portfolio, but it is not a fixed deposit: the NAV moves every day with interest rates and credit conditions. What you get is a professionally managed, diversified portfolio of debt, with daily liquidity that an FD or a bond cannot match — and without a guaranteed return.' },
      {
        kind: 'table',
        caption: 'The debt categories, sorted by how long they hold',
        headers: ['Category', 'Portfolio maturity', 'Typical use'],
        rows: [
          ['Overnight fund', '1 day', 'Sweeping idle cash in and out, safely'],
          ['Liquid fund', 'Up to 91 days', 'Emergency money and money needed within months'],
          ['Ultra short / low duration', '3–12 months', 'Short parking before a known expense'],
          ['Money market / short duration', 'Up to 1 year / 1–3 years', 'Slightly better yield with modest interest-rate risk'],
          ['Corporate bond', 'At least 80% in AA+ and above paper', 'Higher credit quality and steadier returns'],
          ['Banking & PSU', 'At least 80% in banks, PSUs and public financial institutions', 'Conservative debt with decent yields'],
          ['Credit risk', 'At least 65% in below-AA+ paper', 'Higher yield, materially higher default risk'],
          ['Gilt', 'At least 80% in government securities', 'No credit risk, full interest-rate risk'],
          ['Long duration / gilt with 10-yr constant duration', 'Long bonds', 'A deliberate bet on falling interest rates'],
          ['Dynamic bond', 'Whatever the manager wants, whenever', 'A manager who can shift duration for you'],
        ],
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'Instant redemption: the reason liquid funds replaced the savings account for many people',
        text: 'SEBI allows liquid and overnight funds to offer instant redemption — up to ₹50,000 or 90% of the folio value, whichever is lower, per investor, per scheme, per day, into your bank account within minutes. For an emergency fund it means the money is genuinely reachable on a bad afternoon, with a better return than a savings account and no FD penalty.',
      },
      {
        kind: 'example',
        title: 'Two Indian debt-fund shocks worth remembering',
        text: 'In 2018, the IL&FS default froze a giant infrastructure lender and hit short-term debt funds that held its paper — several schemes lost money on instruments that had looked like cash. Then in April 2020, Franklin Templeton wound up six debt schemes holding over ₹25,000 crore and suspended redemptions: investors got their money back only gradually over the following years. Both events taught the same lesson: “debt” is not synonymous with “safe”, and credit risk funds are not parking places.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Long-duration debt funds are not “safe”',
        text: 'A fund with an average maturity of ten years can lose several percent in a month if yields rise by half a percentage point; the rule of thumb is that a one percentage point rise in yields costs roughly the fund’s duration in percent. You buy duration because you expect rates to fall, not because you want safety. For safety, use liquid, ultra-short or banking & PSU funds.',
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'The tax rule that most surprises Indian investors',
        text: 'Debt fund gains are added to your income and taxed at your slab rate, regardless of how long you held the fund. There is no 12-month or 36-month long-term rate — the old indexation benefit for debt funds is gone, and since 2023 the regime has tightened further with the “specified mutual fund” definition for funds holding over 65% in debt. Compare the post-tax return with an FD before assuming the fund wins.',
      },
      { kind: 'list',
        items: [
          'A debt fund for your emergency corpus should be a liquid or ultra-short fund — not a credit risk or long-duration fund chasing yield.',
          'Check the fund’s portfolio disclosure for what it actually holds: the scheme’s name matters far less than the credit quality and maturity of the paper inside it.',
          'Gilt funds and liquid funds are on opposite ends of the same asset class: one is a rate bet, the other is almost cash.',
        ],
      },
      { kind: 'sim', name: 'bond', caption: 'Move the yield on a bond fund’s holdings and watch the NAV respond — slowly or violently, depending on duration.' },
      {
        kind: 'terms',
        items: [
          { term: 'Debt fund', meaning: 'A scheme holding bonds and money-market instruments. Its NAV moves with interest rates and credit conditions — it is not a fixed deposit.' },
          { term: 'Liquid fund', meaning: 'A debt fund holding paper maturing within 91 days, used for emergency money and short parking. SEBI allows instant redemption of up to ₹50,000 a day.' },
          { term: 'Gilt fund', meaning: 'A debt fund holding at least 80% government securities: no credit risk, but full interest-rate risk.' },
          { term: 'Banking & PSU fund', meaning: 'A debt fund holding at least 80% in banks, public-sector undertakings and public financial institutions, for conservative credit exposure.' },
          { term: 'Corporate bond fund', meaning: 'A debt fund holding at least 80% in AA+ and above corporate paper, giving steadier returns than a credit-risk fund with less default risk.' },
          { term: 'Credit risk fund', meaning: 'A debt fund holding at least 65% in paper rated below AA+. Higher yield, and real default risk — the category caught out by the 2018–2020 Indian credit events.' },
          { term: 'Dynamic bond fund', meaning: 'A debt fund whose manager freely shifts the portfolio\'s maturity. The interest-rate call is the manager\'s, not yours.' },
        ],
      },
    ],
    quiz: [
      {
        q: 'You are parking money for a house payment due in four months. Which debt fund fits?',
        options: [
          { text: 'A long-duration gilt fund', why: 'Its NAV can fall sharply if yields rise, and four months is far too short to wait out a fall.' },
          { text: 'A liquid or ultra-short fund', correct: true, why: 'Short maturity means little interest-rate risk, and instant redemption makes the money genuinely reachable.' },
          { text: 'A credit risk fund, for the higher yield', why: 'You would be taking default risk with money you need soon, for a small extra yield.' },
          { text: 'A small-cap fund', why: 'Equity is completely unsuitable for a payment due in four months.' },
        ],
      },
      {
        q: 'A debt fund holds bonds with an average duration of about 7 years. Yields rise 1%. What should you expect?',
        options: [
          { text: 'The NAV rises about 7%', why: 'The relationship is inverse: rising yields mean falling prices.' },
          { text: 'The NAV falls by roughly 7%, since price sensitivity is approximately equal to duration', correct: true, why: 'Duration is the standard shorthand for how much a bond portfolio loses when yields rise by one percentage point.' },
          { text: 'Nothing — debt funds are stable', why: 'That is true of liquid funds, not of long-duration ones.' },
          { text: 'The fund guarantees the interest and ignores the price', why: 'Investors in the fund own units, not a promise; the NAV reflects the price move.' },
        ],
      },
      {
        q: 'How are gains from a debt fund taxed in India?',
        options: [
          { text: 'At 12.5% after 12 months, like equity', why: 'That is the equity rule; debt funds no longer get that treatment.' },
          { text: 'At your slab rate, whatever the holding period', correct: true, why: 'Debt fund gains are simply added to your income — the reason post-tax comparisons with FDs matter so much.' },
          { text: 'Tax-free if held over three years', why: 'Indexation and long-term rates for debt funds have been withdrawn.' },
          { text: 'Only if you redeem more than ₹1 lakh', why: 'The ₹1.25 lakh exemption applies to long-term equity gains, not debt.' },
        ],
      },
    ],
    takeaway: 'Debt funds are the ballast of a portfolio and a better parking place than most people expect — but only if you pick the maturity and credit quality to match the job. Long duration is a bet, and credit risk funds are not cash.',
  },

  'l3-057': {
    id: 'l3-057',
    title: 'Hybrid Funds',
    subtitle: 'Somewhere between the two extremes',
    minutes: 6,
    blocks: [
      { kind: 'scene', name: 'hybrid-mix', caption: 'One fund, a managed mix of equity and debt — useful when you want the decision handled for you.' },
      { kind: 'p', text: 'A hybrid fund holds both equity and debt in one scheme, and the category fixes roughly how much. It is the answer for an investor who wants a single product for a long-term goal, or wants a smoother ride than pure equity without building a portfolio themselves. The reason this works so well in India is tax: rebalancing inside a fund is not a taxable event for you, whereas selling shares to rebalance your own portfolio triggers capital gains tax.' },
      {
        kind: 'table',
        caption: 'The hybrid categories and what they hold',
        headers: ['Category', 'Equity range', 'Who it suits'],
        rows: [
          ['Conservative hybrid', '10–25%', 'Retirees wanting some growth with mostly debt stability'],
          ['Balanced hybrid', '40–60%', 'First-time investors building a core holding'],
          ['Aggressive hybrid', '65–80%', 'Long-horizon investors who want some cushion'],
          ['Dynamic asset allocation / BAF', '0–100%, moves with valuations', 'People who want the fund to buy low and sell high automatically'],
          ['Multi asset allocation', 'At least 10% in each of three asset classes', 'One-fund diversification across equity, debt and gold'],
          ['Equity savings', 'At least 65% in equity and arbitrage, with at least 10% in equity', 'Tax-efficiency with low volatility'],
          ['Arbitrage', 'At least 65% in arbitrage positions', 'Cash-like returns with equity taxation'],
        ],
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'The real question is: who adjusts the mix, and when?',
        text: 'A balanced hybrid keeps a roughly fixed split and rebalances. A dynamic asset allocation fund changes the equity-debt mix with valuations or momentum, which is exactly the behaviour most investors cannot manage on their own. A “balanced advantage” fund that cut equity after the 2021 rally and held cash did more for its unitholders’ behaviour than any advisory session would have.',
      },
      {
        kind: 'example',
        title: 'Why a hybrid can beat two funds in a taxable portfolio',
        text: 'Say you hold equity and debt funds separately and rebalance once a year back to 60:40. That rebalance means selling units — a taxable event every year, at 20% short-term or 12.5% long-term rates if the sale is from equity. Inside a balanced hybrid, the fund rebalances the same way without you realising a gain. In the accumulation years that tax deferral is worth real money, though it comes at the price of whatever expense ratio the fund charges.',
      },
      {
      kind: 'list',
        items: [
          'A hybrid fund is not automatically safer than equity: an aggressive hybrid can still fall 25–30% in a bad year.',
          'Check the actual equity percentage on the factsheet — the category allows a range, and funds sit at different points within it.',
          'For a very long horizon, a pure equity index fund plus a separate debt fund is usually cheaper than a hybrid. Hybrids earn their fee through convenience and tax deferral.',
        ],
      },
      { kind: 'sim', name: 'portfolio', caption: 'Blend equity and debt and watch the trade-off between return and swing.' },
      {
        kind: 'terms',
        items: [
          { term: 'Hybrid fund', meaning: 'A scheme holding both equity and debt, with category rules fixing roughly how much. Rebalancing inside the fund is not a taxable event for you.' },
          { term: 'Balanced advantage fund', meaning: 'A hybrid that moves its equity allocation with valuations or momentum, between 0% and 100%. It is also called dynamic asset allocation.' },
          { term: 'Multi-asset allocation fund', meaning: 'A hybrid holding at least 10% in each of three asset classes, usually equity, debt and gold — a one-fund portfolio.' },
          { term: 'Equity savings fund', meaning: 'An equity-taxed hybrid using arbitrage positions to lower volatility while keeping a small equity core.' },
          { term: 'Arbitrage fund', meaning: 'A fund that profits from price gaps between the cash and futures markets, giving cash-like returns with equity taxation.' },
        ],
      },
    ],
    quiz: [
      {
        q: 'What is the main practical advantage of rebalancing inside a hybrid fund rather than in your own portfolio?',
        options: [
          { text: 'The fund pays no tax at all', why: 'The fund’s own transactions have tax consequences, but they are not yours to pay each year.' },
          { text: 'Rebalancing inside the fund is not a taxable event for you', correct: true, why: 'Your units stay untouched, so no capital gains arise from the internal buying and selling — a real advantage over rebalancing yourself every year.' },
          { text: 'Hybrid funds guarantee a positive return', why: 'No market-linked fund guarantees a return.' },
          { text: 'You can avoid exit loads', why: 'Hybrid funds often charge exit loads on short holding periods.' },
        ],
      },
      {
        q: 'An “aggressive hybrid” is labelled 65–80% equity. What does that permit?',
        options: [
          { text: 'It must always hold exactly 72.5%', why: 'The category gives a range; the fund may sit anywhere within it.' },
          { text: 'It can hold up to 35% in debt, and can still fall 25–30% in a bad year', correct: true, why: 'The debt cushion softens but does not remove equity risk, and the fund can sit at the top of the band.' },
          { text: 'It is a debt fund with a small equity kicker', why: 'That is the conservative hybrid category.' },
          { text: 'It cannot lose money in a market crash', why: 'Nothing about a hybrid removes market risk.' },
        ],
      },
      {
        q: 'Which hybrid behaves least predictably in terms of its equity level?',
        options: [
          { text: 'Conservative hybrid', why: 'Its equity band is narrow — 10–25%.' },
          { text: 'Dynamic asset allocation / balanced advantage', correct: true, why: 'Its whole purpose is to move between 0% and 100% equity, so its risk profile changes materially over time.' },
          { text: 'Balanced hybrid', why: 'Its band is a moderate 40–60%.' },
          { text: 'Gilt fund', why: 'A gilt fund is not a hybrid at all.' },
        ],
      },
    ],
    takeaway: 'Hybrid funds are a convenience product with a genuine tax advantage during accumulation. Check the category rule and the fund’s actual equity level, and use them for goals rather than as a substitute for a plan.',
  },

  'l3-058': {
    id: 'l3-058',
    title: 'Expense Ratios',
    subtitle: 'A small number that costs you a fortune',
    minutes: 8,
    blocks: [
      { kind: 'scene', name: 'fee-drag-visual', caption: 'One percent a year sounds like nothing until you see what it does to a corpus over thirty years.' },
      { kind: 'p', text: 'The expense ratio, or Total Expense Ratio, is the percentage of a scheme’s assets taken every year to run it: the fund manager’s team, research, dealing, the custodian, the registrar, audit, marketing and the distributor’s commission. It is deducted from the scheme’s NAV daily, so you never write a cheque for it and you never see a line item on a statement. SEBI caps it: equity schemes can charge roughly 2.25% on the first ₹500 crore of assets, sliding towards about 1.6% for the largest funds, with lower caps for debt schemes.' },
      {
        kind: 'table',
        caption: 'What ₹10 lakh grows to at 12% gross, after the fee',
        headers: ['Annual expense ratio', 'After 10 years', 'After 20 years', 'After 30 years'],
        rows: [
          ['0% (theoretical)', '₹31.1 lakh', '₹96.5 lakh', '₹3.00 crore'],
          ['0.2% (a typical index fund)', '₹30.6 lakh', '₹93.5 lakh', '₹2.86 crore'],
          ['0.5% (some index and passive funds)', '₹29.7 lakh', '₹88.2 lakh', '₹2.62 crore'],
          ['1.0% (a cheap direct active fund)', '₹28.4 lakh', '₹80.6 lakh', '₹2.29 crore'],
          ['2.0% (a large regular active plan)', '₹25.9 lakh', '₹67.3 lakh', '₹1.74 crore'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'This is the closest thing to free money in investing',
        text: 'Every other lever — timing, selection, allocation — requires a judgement that might be wrong. The expense ratio is a certain, permanent, compounded cost, and choosing the cheap version of the same portfolio is the only decision in this entire course with no downside. A 2% fee versus a 0.2% fee is the difference between ₹1.74 crore and ₹2.86 crore on the same ₹10 lakh and the same gross return.',
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'The distributor commission is invisible and expensive',
        text: 'In a regular plan the same scheme costs 0.5–1.1% a year more than its direct plan, and most of that difference is the trail commission paid to whoever sold it to you. It is not hidden — it is disclosed in the scheme’s expenses — but it never appears as a payment you make, which is why it survives so long on so many portfolios. If you bought through an app or a bank without an explicit advisory agreement, you are most likely in a regular plan without noticing.',
      },
      {
        kind: 'example',
        title: 'Switching the plan, not the fund',
        text: 'A common Indian situation: ₹8 lakh sitting in the regular plan of a large-cap fund since 2014, expense ratio 2.1%, while the direct plan of the same fund charges 1.1%. Moving the money switches the plan, not the portfolio — same manager, same holdings. If the units are more than a year old, the long-term capital gains exemption and 12.5% rate apply, so the tax cost of switching is far smaller than the future saving. It is one of the few “do it today” decisions in personal finance.',
      },
      {
        kind: 'list',
        items: [
          'A fund with a 2.25% expense ratio must beat a 0.2% index fund by more than 2 percentage points a year, every year, just to break even — most do not.',
          'Expense ratios are disclosed daily on the AMC website and in the monthly factsheet; they change, so check once a year.',
          'ETFs usually charge less than index funds but add a spread, brokerage and DP charges — the winner depends on how often you trade (chapter 61).',
          'Do not confuse expense ratio with exit load: the exit load is a one-time cost of leaving early, typically 1% within a year for equity funds.',
        ],
      },
      { kind: 'sim', name: 'feedrag', caption: 'Set a cost per year and a tenure, then watch how much of the final corpus the fee quietly owns.' },
      {
        kind: 'terms',
        items: [
          { term: 'Total expense ratio (TER)', meaning: 'The annual percentage of a scheme\'s assets taken to run it — fund management, custodian, registrar, marketing and, in regular plans, distribution. SEBI caps it.' },
          { term: 'Direct plan', meaning: 'The same scheme bought straight from the AMC with no distributor commission, so the expense ratio is meaningfully lower. Almost always the right plan for a self-directed investor.' },
          { term: 'Regular plan', meaning: 'The version of a scheme sold through a distributor, who is paid a trail commission out of the expense ratio. Identical portfolio, higher cost.' },
          { term: 'Exit load', meaning: 'A one-time charge for leaving a fund early — commonly 1% within a year for equity funds. It is separate from the expense ratio.' },
        ],
      },
    ],
    quiz: [
      {
        q: 'Two funds hold identical portfolios. One charges 2% a year, the other 0.2%. Over 30 years on ₹10 lakh at a 12% gross return, what is the difference?',
        options: [
          { text: 'About ₹2 lakh', why: 'Far more than that — the cost compounds on the whole corpus.' },
          { text: 'Roughly ₹1.1 crore', correct: true, why: 'About ₹1.74 crore versus ₹2.86 crore. A cost charged on the entire growing balance is very different from a cost charged on your contribution.' },
          { text: 'About ₹20,000', why: 'That would be true if the fee applied once to your original investment rather than annually to everything.' },
          { text: 'Nothing, because fees come out of returns', why: 'They come out of returns — which is precisely why the final corpus is smaller.' },
        ],
      },
      {
        q: 'Why do regular plans cost more than direct plans of the same scheme?',
        options: [
          { text: 'Regular plans hold better stocks', why: 'The portfolio is identical; only the expense structure differs.' },
          { text: 'Regular plans pay a trail commission to the distributor from the expense ratio', correct: true, why: 'If you did not explicitly hire an adviser, you are most likely paying for one through a commission you never see.' },
          { text: 'Direct plans have lower NAV', why: 'NAV differs only because costs differ; the level of NAV is not the point.' },
          { text: 'Regular plans are taxed less', why: 'Tax treatment is identical between plans of the same scheme.' },
        ],
      },
      {
        q: 'An active fund charges 2% a year. What must it do to be worth choosing over a 0.2% index fund?',
        options: [
          { text: 'Nothing — active management is always better', why: 'The evidence in India and worldwide does not support that.' },
          { text: 'Beat the index by more than the fee difference, consistently, after tax', correct: true, why: 'It starts roughly 1.8 percentage points behind every year. Only a persistent, net-of-cost edge justifies the fee.' },
          { text: 'Just match the index', why: 'Matching the index while charging ten times the fee leaves you poorer.' },
          { text: 'Have a famous fund manager', why: 'Fame is not a performance guarantee.' },
        ],
      },
    ],
    takeaway: 'The expense ratio is the one cost you control completely, and it compounds on your entire corpus. Buy the direct plan, prefer cheap passive funds, and treat every extra percent of fee as a promise the fund must keep for decades.',
  },

  'l3-059': {
    id: 'l3-059',
    title: 'SIPs',
    subtitle: 'The most useful investing habit in India',
    minutes: 9,
    blocks: [
      { kind: 'scene', name: 'interest-growth', caption: 'Small, regular amounts compounding quietly — the curve does almost all of the work in the last few years.' },
      { kind: 'p', text: 'A SIP, or Systematic Investment Plan, invests a fixed amount on a fixed schedule into a scheme, whatever the market is doing. In India you can start with as little as ₹100 or ₹500 a month at many AMCs, and the amount is collected automatically through an e-mandate, NACH or UPI autopay. Monthly SIP flows have grown into the tens of thousands of crores — a figure the industry now quotes as evidence that Indian households have changed how they save — and the reason is not cleverness in the market. It is the removal of a decision you would otherwise get wrong.' },
      {
        kind: 'formula',
        label: 'What ₹10,000 a month builds',
        expr: 'Corpus = P × [((1 + r)^n − 1) ÷ r]',
        note: 'At 12% a year, ₹10,000 a month for 20 years is roughly ₹99 lakh, of which you contributed only ₹24 lakh. The remaining ₹75 lakh is the market’s work.',
      },
      {
        kind: 'example',
        title: 'Two investors, one crash',
        text: 'Priya and Arjun both start a ₹10,000 SIP in the same index fund in January 2020. The market falls about 38% by late March. Priya keeps investing — her April to September instalments buy units far below her earlier cost. Arjun stops his SIP in a panic and never restarts. By the end of 2021 the index is well above its pre-crash level, and Priya owns far more units than she would have without the fall, while Arjun owns exactly what he had in March 2020. Nothing in the market rewarded one of them over the other; the only difference was whether the standing instruction survived a bad quarter.',
      },
      {
        kind: 'table',
        caption: 'The SIP mechanic and its Indian variations',
        headers: ['Feature', 'How it works', 'Who it suits'],
        rows: [
          ['Monthly SIP', 'A fixed amount on a chosen date each month', 'The default for everyone'],
          ['Weekly or daily SIP', 'Same idea, more frequent instalments, sometimes lower minimums', 'Salaried people paid weekly or on flexible income'],
          ['Step-up SIP', 'The instalment rises by a set percentage each year — often 10%', 'Anyone whose salary rises each year; the single highest-impact upgrade'],
          ['Top-up SIP', 'A one-off extra amount added to an existing SIP', 'Bonus, gift or freelance income'],
          ['Pause facility', 'Stop for a few months without closing the folio', 'A temporary cash crunch, instead of cancelling'],
          ['SWP', 'The reverse — a fixed withdrawal each month', 'Retirees converting a corpus into a salary'],
        ],
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'SIP does not make a risky fund safe',
        text: 'A SIP in a small-cap fund is still a small-cap fund. Rupee-cost averaging spreads your entry price; it does not protect the value of the money already invested. A 40% fall in a small-cap portfolio is a 40% fall whether you entered in one lump or over twelve months, and the averaging only helps the instalments that come after the fall.',
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'The ELSS nuance most people miss',
        text: 'Each instalment of an ELSS SIP is locked for three years from its own date, so a three-year SIP has instalments maturing month by month between years three and six. It is still the shortest lock-in among Section 80C options, and the deduction of up to ₹1.5 lakh a year is real — but the cash flow is not what a casual reader assumes.',
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Where SIP genuinely beats lump sum, and where it does not',
        text: 'In a market that rises over time, a lump sum invested earlier usually beats a SIP — your money is working for longer. SIP wins on three other things: you do not need a lump sum, you cannot pick the worst possible entry day, and a standing instruction does not panic. Those behavioural advantages are worth more to most people than the arithmetic edge of investing early.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Pick the scheme by category, not by last year’s return.',
          'Start with an amount you can honour for twelve months without thinking about it.',
          'Step it up every time your income rises — a 10% annual step-up changes a 20-year outcome more than most people expect.',
          'Set the date right after your salary credit, and never stop the SIP in a falling market. That is the whole strategy.',
        ],
      },
      { kind: 'sim', name: 'compound', caption: 'Set a monthly amount and a tenure — then try stepping it up by 10% a year and see what changes.' },
      {
        kind: 'terms',
        items: [
          { term: 'Systematic investment plan (SIP)', meaning: 'A standing instruction to invest a fixed amount at a fixed schedule, whatever the market does. Indian funds accept monthly amounts from ₹100–500.' },
          { term: 'Step-up SIP', meaning: 'A SIP whose instalment rises by a set percentage each year, matching a rising salary. It is the highest-impact upgrade available on a long horizon.' },
          { term: 'Systematic withdrawal plan (SWP)', meaning: 'The mirror of a SIP: a fixed amount withdrawn at intervals, used to turn a corpus into a monthly income.' },
          { term: 'Rupee cost averaging', meaning: 'The effect of investing equal amounts regularly, buying more units when prices are low and fewer when high.' },
          { term: 'e-mandate', meaning: 'The standing instruction through NACH or UPI autopay that lets a fund collect your SIP instalment automatically each month.' },
        ],
      },
    ],
    quiz: [
      {
        q: 'The market falls 35% three months after you start a SIP. What is the sensible response?',
        options: [
          { text: 'Stop the SIP and wait for the market to recover', why: 'Stopping removes the one mechanism that turns a fall into an advantage — buying more units at lower prices.' },
          { text: 'Continue, and treat the low prices as the reason the SIP exists', correct: true, why: 'Your later instalments buy more units per rupee. The fall is bad for money already invested and helpful for money yet to be invested.' },
          { text: 'Double the SIP into a small-cap fund instead', why: 'Moving to a more volatile category during a fall raises the risk that you stop later, which is what actually hurts.' },
          { text: 'Switch to a fixed deposit until the market is “safe”', why: 'There is no signal for that, and you will likely return after the recovery.' },
        ],
      },
      {
        q: 'You invest ₹8,000 a month for 15 years and your salary rises every year. What single change helps most?',
        options: [
          { text: 'Switch to weekly instalments', why: 'A marginal timing benefit at best, and more instructions to manage.' },
          { text: 'Add a 10% annual step-up to the instalment', correct: true, why: 'Step-up SIPs match your growing income and are among the largest single levers available on a long horizon.' },
          { text: 'Choose whichever fund topped last year’s returns', why: 'Chasing last year’s winner is one of the least reliable strategies in fund investing.' },
          { text: 'Stop the SIP whenever the market is up', why: 'That removes compounding from exactly the periods that fund later falls.' },
        ],
      },
      {
        q: 'Why does a lump sum usually beat a SIP in a steadily rising market?',
        options: [
          { text: 'Because markets always rise', why: 'They do not — but a rising trend does favour money being invested earlier.' },
          { text: 'Because the earlier money is invested, the longer it compounds', correct: true, why: 'SIP instalments arrive later, so they each have less time to grow. Behavioural discipline, not arithmetic, is the SIP’s real advantage.' },
          { text: 'Because SIPs have higher expense ratios', why: 'The expense ratio is the same for both routes.' },
          { text: 'Because SIPs pay more tax', why: 'The tax treatment of units is identical regardless of how they were bought.' },
        ],
      },
      {
        q: 'What is the practical significance of a SIP running for three years in an ELSS fund?',
        options: [
          { text: 'The entire folio unlocks together at three years', why: 'The lock-in applies individually to each instalment, not to the folio as a whole.' },
          { text: 'Each instalment unlocks three years after its own purchase date', correct: true, why: 'This is why ELSS redemptions trickle out over the years after the first instalment matures, and why a step-up changes the release schedule.' },
          { text: 'Nothing — ELSS units have no lock-in', why: 'ELSS has a three-year lock-in, the shortest among 80C instruments.' },
          { text: 'You can withdraw the amount of your deduction every year', why: 'No such withdrawal exists; the lock-in binds the units themselves.' },
        ],
      },
    ],
    takeaway: 'A SIP turns investing from a decision you must re-make every month into a standing instruction you cannot sabotage easily. Keep it running through falls, and step it up with your income.',
  },

  'l3-060': {
    id: 'l3-060',
    title: 'Index Funds',
    subtitle: 'Buying the whole market, cheaply',
    minutes: 8,
    blocks: [
      { kind: 'scene', name: 'passive-vs-active', caption: 'An index fund does not try to be clever. It buys the market and spends nothing on opinions.' },
      { kind: 'p', text: 'An index fund replicates an index. SEBI requires it to hold at least 95% of its assets in the securities of the index it tracks, in roughly the same proportions. There is no stock picking, no sector call, no clever timing — just the market, at a cost of roughly 0.1–0.3% a year. In India, the large index funds track the Nifty 50 and the Sensex, and there is a growing set tracking the Nifty Midcap 150, the Nifty Smallcap 250 and overseas indices.' },
      {
        kind: 'table',
        caption: 'The two numbers to judge an index fund by',
        headers: ['Measure', 'What it means', 'A good reading'],
        rows: [
          ['Expense ratio', 'The annual cost of running the fund', 'Below 0.3% for a Nifty 50 index fund'],
          ['Tracking difference', 'The gap between the fund’s return and the index TRI over the same period', 'Less than the expense ratio plus a small transaction drag'],
          ['Tracking error', 'How much the fund’s return bounces around relative to the index', 'Low and stable — a few basis points a month'],
          ['AUM and age', 'Whether the fund has enough scale to run efficiently', 'Not so small that fixed costs dominate'],
        ],
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'Compare against the TRI, not the index you see on TV',
        text: 'The Nifty 50 printed on the news is a price index — it ignores dividends. The Total Return Index assumes dividends are reinvested, which is what a fund actually receives. SEBI made the TRI the mandatory benchmark for equity schemes in 2018 precisely because price indices made every fund look better than it was. When you read a fund’s performance, check that it is being compared against a TRI.',
      },
      {
        kind: 'example',
        title: 'Why the majority of Indian large-cap funds trail the index',
        text: 'SPIVA scorecards, which measure Indian active funds against their benchmarks over rolling periods, have repeatedly found that a clear majority of large-cap funds underperform the Nifty 50 TRI over ten years. The arithmetic is unforgiving: an active fund charging 2% starts 2 percentage points behind an index fund charging 0.2%, and only a persistent edge closes that gap. Some managers do it; most do not, and nobody knows in advance which will.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Index funds are simple, not risk-free',
        text: 'A Nifty 50 index fund will fall roughly as much as the Nifty 50, and a Nifty Smallcap 250 index fund will fall far more. Passive describes the management style, not the risk of the underlying market. Do not move to a small-cap index fund because it has “no manager risk” and then discover the index can halve.',
      },
      {
        kind: 'list',
        items: [
          'Some index funds charge an exit load if you redeem within a few days or months — check before using one as a short-term parking place.',
          'Index funds rebalance when the index does, and the fund must absorb constituent changes such as the HDFC Ltd merger into HDFC Bank or a new entrant into the Nifty 50.',
          'A fund of funds investing overseas, such as a Nasdaq 100 FOF, can be a useful diversifier — but check whether investments are currently open, since Indian overseas investment limits have periodically forced such schemes to suspend fresh inflows.',
          'If you hold both an index fund and an active large-cap fund, check the overlap: you may be paying an active fee for the index portfolio plus a few extra positions.',
        ],
      },
      { kind: 'sim', name: 'feedrag', caption: 'Compare a 0.2% index fund with a 2% active fund and watch twenty years of compounding separate them.' },
      {
        kind: 'terms',
        items: [
          { term: 'Index fund', meaning: 'A scheme holding at least 95% in the securities of the index it tracks, with no stock picking, at roughly 0.1–0.3% a year.' },
          { term: 'Tracking error', meaning: 'How much an index fund\'s return bounces around relative to its index. Low and stable is what you want.' },
          { term: 'Tracking difference', meaning: 'The gap between the fund\'s return and the index return over a period — usually close to the expense ratio, plus a small transaction drag.' },
          { term: 'Total Return Index (TRI)', meaning: 'An index that assumes dividends are reinvested. SEBI requires equity schemes to benchmark against it, because a price index flatters funds by ignoring dividends.' },
          { term: 'Fund of funds (FoF)', meaning: 'A fund that invests in other funds, often used to give Indian investors overseas exposure such as a Nasdaq 100 FOF.' },
        ],
      },
    ],
    quiz: [
      {
        q: 'What is SEBI’s requirement for a fund calling itself an index fund?',
        options: [
          { text: 'At least 95% of assets in the securities of the tracked index', correct: true, why: 'That constraint is what makes the fund a replication rather than a management strategy — the small remainder covers expenses and cash.' },
          { text: 'At least 65% in the top 100 companies', why: 'That is the large-cap category rule, a different requirement.' },
          { text: 'A minimum of 50 holdings', why: 'The holding count follows from the index, not from a separate rule.' },
          { text: 'At least 10 years of track record', why: 'There is no such eligibility rule under SEBI’s framework.' },
        ],
      },
      {
        q: 'Why is the benchmark for an equity fund the Total Return Index rather than the price index?',
        options: [
          { text: 'Because the TRI always rises', why: 'It falls in falling markets just like the price index.' },
          { text: 'Because the TRI assumes dividends are reinvested, which is what a fund actually receives', correct: true, why: 'Comparing a fund against a price index understates the benchmark and flatters the fund; SEBI mandated the TRI to remove that illusion.' },
          { text: 'Because the price index is not published', why: 'It is published daily — it simply excludes dividends.' },
          { text: 'Because the TRI includes bond returns', why: 'A TRI is still a single-asset-class index; it just counts distributions.' },
        ],
      },
      {
        q: 'A Nifty Smallcap 250 index fund falls 45% in a bad year. What was wrong with the investor’s thinking?',
        options: [
          { text: 'Nothing — index funds cannot fall', why: 'They can fall exactly as far as their index does.' },
          { text: 'Confusing low cost and no manager risk with low market risk', correct: true, why: 'Passive management removes stock-selection risk, not the risk of the asset class. Small caps are volatile whether a manager or an index owns them.' },
          { text: 'The index fund must have made a mistake', why: 'Replicating the index means accepting its falls by design.' },
          { text: 'SEBI should have protected the fund', why: 'No regulator promises an index will not fall.' },
        ],
      },
    ],
    takeaway: 'An index fund buys the market at a fraction of the cost of active management and, in Indian large caps, usually wins net of fees. Judge it by expense ratio and tracking difference, and remember that passive management does not make the underlying market safe.',
  },

  'l3-061': {
    id: 'l3-061',
    title: 'ETFs',
    subtitle: 'Funds that trade like shares',
    minutes: 8,
    blocks: [
      { kind: 'scene', name: 'etf-wrapper', caption: 'Inside the wrapper is an index or a basket; outside, it behaves like a share on the exchange.' },
      { kind: 'p', text: 'An exchange-traded fund holds a basket of securities and trades on the exchange like a share. You buy it through your broker into your demat account at a market price, not at the day’s NAV. India’s first ETF was the Nifty BeES, launched in 2002; today the range includes equity ETFs tracking the Nifty 50, the Sensex, the Next 50, mid and small-cap indices, gold ETFs, overseas ETFs and a family of target-maturity debt ETFs like the Bharat Bond series.' },
      {
        kind: 'table',
        caption: 'Where the ETF’s savings can be given straight back',
        headers: ['Cost', 'Index fund', 'ETF'],
        rows: [
          ['Expense ratio', 'About 0.1–0.3%', 'Often 0.05–0.3%, sometimes lower'],
          ['Brokerage and STT', 'None', 'Brokerage plus 0.1% STT on both sides for equity ETFs'],
          ['Bid-ask spread', 'None — you deal at NAV', 'Your real cost, and it can exceed a year of expenses on a thin ETF'],
          ['DP charge on exit', 'None for folio holdings', 'Around ₹13.50 + GST per scrip when you sell delivery'],
          ['Demat requirement', 'Not needed', 'Required'],
          ['Automatic SIP', 'Yes, via the AMC', 'Not straightforward; some brokers offer a limited version'],
        ],
      },
      {
        kind: 'example',
        title: 'The premium problem in Indian ETFs',
        text: 'Several Indian ETFs trade thinly. On a quiet day, a mid-sized ETF might show very few units on the sell side, so a buyer pays ₹102.40 for a basket worth ₹100.60 — a 1.8% premium at the moment of purchase. That is more than six years of expense-ratio saving compared with a 0.3% index fund, paid in one click. Before buying any ETF, compare the exchange price with the indicative NAV for that day, and use a limit order near it rather than a market order.',
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'Target-maturity debt ETFs solved a real Indian problem',
        text: 'Bharat Bond ETFs, launched in 2019, track indices of AAA-rated public-sector bonds with a defined maturity year — April 2025, 2030, 2033 and more have followed. Buying one gives an approximate yield to maturity for that date without individual bond selection, no credit risk beyond AAA PSU issuers and a small expense ratio. It is the closest thing in India to simply holding bonds to maturity in a mutual fund wrapper.',
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'When the ETF wrapper is genuinely worth it',
        text: 'ETFs are excellent when the index is liquid and heavily traded — a Nifty 50 or Gold ETF, for instance — and when you already trade through a broker with near-zero delivery costs. Index funds win when you buy small amounts monthly, when liquidity is thin, or when you want an automated SIP. The wrapper matters far less than the spread you cross to get in.',
      },
      {
        kind: 'list',
        items: [
          'An ETF’s market price can close at a small premium or discount to its NAV, and arbitrage through authorised participants usually keeps them close — but only where the ETF is liquid.',
          'Gold ETFs let you hold gold without making charges; a gold ETF with a wide spread and DP charges can still cost more than a gold savings scheme over a short holding period.',
          'Liquid ETFs are popular with large investors for cash parking, but the dividend-stripping structure makes them fiddly for salaried savers — a liquid fund is simpler.',
          'The settlement cycle that applies to shares applies to ETFs too: T+1 in India.',
        ],
      },
      { kind: 'sim', name: 'portfolio', caption: 'A basket that trades like a share — check its allocation and how it drifts with the index.' },
      {
        kind: 'terms',
        items: [
          { term: 'Exchange-traded fund (ETF)', meaning: 'A fund that trades on the exchange like a share. It requires a demat account, and its market price can be above or below NAV.' },
          { term: 'Indicative NAV (iNAV)', meaning: 'The exchange\'s live estimate of an ETF\'s per-unit value, used to judge whether the traded price is at a premium or a discount.' },
          { term: 'Creation unit', meaning: 'A large block of ETF units that authorised participants create or redeem against the underlying securities, which is what keeps the price near NAV.' },
          { term: 'Target maturity ETF', meaning: 'A debt ETF whose portfolio matures in a defined year, so holding it to that date roughly delivers the yield to maturity you bought at.' },
          { term: 'Bharat Bond ETF', meaning: 'The target-maturity family launched in 2019, tracking indices of AAA-rated public-sector bonds maturing in specific years such as 2030 and 2033.' },
          { term: 'Gold ETF', meaning: 'An exchange-traded fund holding physical gold, giving gold exposure without making charges and without a locker.' },
        ],
      },
    ],
    quiz: [
      {
        q: 'At what price do you buy an ETF on the exchange?',
        options: [
          { text: 'At the day’s NAV, like any mutual fund', why: 'That is how an index fund works. An ETF trades at whatever price buyers and sellers agree on.' },
          { text: 'At a market price set by the order book, which can be above or below NAV', correct: true, why: 'The gap between price and NAV is the premium or discount, and arbitrage only keeps it small in liquid ETFs.' },
          { text: 'At the face value of ₹10', why: 'ETFs have no such fixed price.' },
          { text: 'At the index level divided by 100', why: 'There is no such mechanical relationship to the index level.' },
        ],
      },
      {
        q: 'A thinly traded ETF costs 0.1% a year versus 0.3% for an index fund, but you buy at a 1.5% premium. What do you conclude?',
        options: [
          { text: 'The ETF is cheaper overall', why: 'The premium is paid once on entry, while the expense difference saves only 0.2% a year — fifteen years to break even, ignoring the exit spread.' },
          { text: 'The index fund is the better deal for a small, regularly built position', correct: true, why: 'A thin ETF’s spread and premium dominate any expense-ratio advantage, and you avoid the demat and DP costs as well.' },
          { text: 'Premiums are impossible in ETFs', why: 'They are common in illiquid Indian ETFs, which is exactly why liquidity matters.' },
          { text: 'The AMC refunds the premium', why: 'There is no such refund mechanism.' },
        ],
      },
      {
        q: 'Why do target-maturity debt ETFs like the Bharat Bond series suit an investor with a fixed date in mind?',
        options: [
          { text: 'They guarantee a return regardless of interest rates', why: 'No fund guarantees a return; holding to maturity approximates the yield, but market prices move in the interim.' },
          { text: 'Their portfolio matures in a defined year, so the yield to maturity at purchase is roughly what you earn by holding to that date', correct: true, why: 'That is the same idea as holding individual bonds, with AAA PSU paper and a small expense ratio in a single instrument.' },
          { text: 'They are government-guaranteed regardless of the bonds inside', why: 'The paper is AAA-rated public-sector debt, not a sovereign guarantee of the scheme.' },
          { text: 'They can be redeemed early without any market risk', why: 'Selling early means selling at the prevailing price, which moves with rates.' },
        ],
      },
    ],
    takeaway: 'ETFs are cheap wrappers around a basket, and the wrapper only pays off when the ETF is liquid and you are not paying a premium to enter. Compare the exchange price with NAV, use limit orders, and choose an index fund when the amounts are small or the ETF is thin.',
  },

  'l3-062': {
    id: 'l3-062',
    title: 'Nifty',
    subtitle: 'The 50-company benchmark India quotes most',
    minutes: 9,
    blocks: [
      { kind: 'scene', name: 'nifty-weights', caption: 'Fifty companies placed on a ladder by how much of each one is actually available to buy — that ladder is the Nifty.' },
      { kind: 'p', text: 'The Nifty 50 is the index you hear quoted every evening, and it is the single most useful number in Indian investing. It was launched in April 1996 with a base date of 3 November 1995 set at 1,000, it is maintained by NSE Indices, and it holds fifty of the largest and most liquid companies listed on the NSE. It is not a list of India’s fifty biggest companies by any measure — it is a specific, rule-based portfolio, reviewed twice a year.', },
      {
        kind: 'table',
        caption: 'The rules that build the Nifty 50',
        headers: ['Rule', 'What it means in practice'],
        rows: [
          ['Free-float market capitalisation weighting', 'Only the shares actually available to outside investors count. A promoter holding is excluded'],
          ['Free-float example', 'Tata Sons owns roughly 72% of TCS, so only about a quarter of TCS counts towards the index weight'],
          ['Liquidity requirement', 'A company must trade enough, measured by impact cost, to be practically buyable'],
          ['Listed on the NSE', 'BSE-only listings are not eligible'],
          ['Reviewed twice a year', 'The replacement review happens in March and September, with corporate-action adjustments in between'],
          ['Rebalancing', 'Once weights change, every index fund and ETF must trade to match'],
        ],
      },
      {
        kind: 'table',
        caption: 'The Nifty family — the indices actually used in Indian funds and ETFs',
        headers: ['Index', 'What it covers', 'Where you meet it'],
        rows: [
          ['Nifty 50', 'The 50 largest, most liquid free-float companies', 'Every large-cap index fund, ETF and benchmark'],
          ['Nifty Next 50', 'The next 50 by size — often called the “junior Nifty”', 'Funds wanting a step beyond large cap'],
          ['Nifty 100 / 200 / 500', 'The top 100, 200 and 500 companies', 'Broad-market index funds'],
          ['Nifty Midcap 150', 'Companies ranked roughly 101–250', 'Mid-cap index funds and the category benchmark'],
          ['Nifty Smallcap 250', 'Companies ranked roughly 251–500', 'Small-cap index funds'],
          ['Nifty Bank (Bank Nifty)', 'The most liquid banking stocks', 'The most actively traded index option in India'],
          ['Sectoral indices', 'Nifty IT, Auto, FMCG, Pharma, Metal, Energy, PSU Bank, Realty, Infra, Defence', 'Sectoral funds and thematic portfolios'],
          ['Nifty 50 Total Return Index', 'The Nifty 50 with dividends reinvested', 'The mandated benchmark for equity schemes'],
          ['Nifty G-Sec indices', 'Government securities of defined maturities', 'The Bharat Bond family of ETFs'],
          ['India VIX', 'Expected volatility implied by Nifty option prices', 'The market’s fear gauge; it spikes in crashes'],
        ],
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'Free float is why the Nifty is not simply “the biggest companies”',
        text: 'A promoter-dominated company gets a smaller index weight than its headline market capitalisation suggests, because the promoter’s shares are not available to trade. This is good design: the index mirrors what an outside investor can actually own. It also means a divestment or a promoter stake sale can change a company’s index weight without the business changing at all.',
      },
      {
        kind: 'example',
        title: 'A journey from 1,000 to five figures',
        text: 'The Nifty 50 started at a base of 1,000 in November 1995. It first crossed 10,000 in October 2017 and 20,000 in September 2023, with two crashes that took it down 60% in 2008 and about 38% in early 2020 along the way. Nobody who lived through those years experienced the long-run average return; they experienced the sequence. That is the whole argument for a SIP and a long horizon.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'The index is concentrated, and getting more so',
        text: 'The ten largest companies usually account for around half the weight of the Nifty 50. That means “buying the Nifty” is not really buying fifty equal businesses — it is buying a handful of very large ones plus a long tail. It is still the best default in the Indian market, but it is not the same thing as being diversified across the whole economy.',
      },
      {
        kind: 'list',
        items: [
          'Inclusion or exclusion from the Nifty matters: index funds and ETFs collectively must buy a new entrant and sell an exit, which creates a temporary price effect.',
          'Most Indian investors’ portfolios are already benchmarked to the Nifty, so their “active” fund decisions are being measured against it whether they know it or not.',
          'The Nifty 50 futures and options are among the most heavily traded derivatives contracts in the world — a fact worth knowing, but not a reason for a beginner to trade them.',
          'If you want exposure beyond the largest companies, the Nifty Next 50 and the Midcap 150 are the natural next rungs, and both are far more volatile.',
        ],
      },
      { kind: 'sim', name: 'market', caption: 'The Nifty 50 in miniature — run a market cycle and watch how a fifty-stock index moves.' },
      {
        kind: 'terms',
        items: [
          { term: 'Nifty 50', meaning: 'The index of fifty large, liquid NSE-listed companies, launched in 1996 with a base of 1,000 on 3 November 1995. It is the benchmark Indian equity funds are measured against.' },
          { term: 'Nifty Next 50', meaning: 'The next fifty companies by size after the Nifty 50, sometimes called the junior Nifty — larger and more volatile than the top tier.' },
          { term: 'Nifty Midcap 150', meaning: 'The index of companies ranked roughly 101–250, and the usual yardstick for Indian mid-cap funds.' },
          { term: 'Nifty Smallcap 250', meaning: 'The index of companies ranked roughly 251–500, used as the benchmark for small-cap funds.' },
          { term: 'Bank Nifty', meaning: 'The index of India\'s most liquid banking stocks, and the most heavily traded index option contract in the country.' },
          { term: 'India VIX', meaning: 'The market\'s expected volatility derived from Nifty option prices — the Indian fear gauge, which spikes during crashes.' },
          { term: 'Index rebalancing', meaning: 'The periodic adjustment of index constituents and weights, reviewed twice a year for the Nifty 50, which every tracking fund must trade to match.' },
        ],
      },
    ],
    quiz: [
      {
        q: 'What does “free-float market capitalisation” mean in the Nifty 50?',
        options: [
          { text: 'The total value of all shares the company has issued', why: 'That is full market capitalisation, which includes promoter holdings that cannot be freely traded.' },
          { text: 'Only the shares available to outside investors count towards the company’s index weight', correct: true, why: 'Promoter and locked-in holdings are excluded, so the index reflects what an ordinary investor could actually buy.' },
          { text: 'The price at which the stock first listed', why: 'Listing price plays no part in index weighting.' },
          { text: 'A measure of how much the stock fluctuates', why: 'That is volatility, a different concept entirely.' },
        ],
      },
      {
        q: 'A company’s total market capitalisation is ₹20 lakh crore, but about three-quarters of its shares are held by its promoter. How does the index treat it?',
        options: [
          { text: 'At the full ₹20 lakh crore', why: 'Free-float weighting excludes locked-in promoter holdings.' },
          { text: 'At a much smaller effective weight, based only on the quarter that is free to trade', correct: true, why: 'This is exactly the TCS situation: huge company, smaller index weight than its headline size implies.' },
          { text: 'It is excluded entirely', why: 'High promoter holdings do not make a company ineligible.' },
          { text: 'It gets double weight as a large company', why: 'No index doubles weight for size; weights follow free-float value.' },
        ],
      },
      {
        q: 'The Nifty 50 crossed 10,000 in October 2017 and 20,000 in September 2023, with a 60% fall in 2008 in between. What is the sensible conclusion for a long-term investor?',
        options: [
          { text: 'The index always rises, so timing does not matter', why: 'It fell 60% once and about 38% another time; the falls are real and can last years.' },
          { text: 'The long-run trend has been upward, but the path included deep, prolonged falls that a portfolio must be able to survive', correct: true, why: 'Both facts are true and both matter: the destination rewards the patient, the path punishes anyone forced to sell.' },
          { text: 'You should sell at every new high', why: 'That is market timing, and it usually costs more than it saves.' },
          { text: 'Index funds would have avoided the 2008 fall', why: 'Index funds fall exactly as much as their index does.' },
        ],
      },
      {
        q: 'Which index would you use to benchmark a small-cap fund’s performance?',
        options: [
          { text: 'The Nifty 50', why: 'Comparing a small-cap fund to the Nifty 50 tells you about the size premium, not about the manager.' },
          { text: 'The Nifty Smallcap 250 Total Return Index', correct: true, why: 'Like-for-like comparison against the relevant category index TRI is the only fair test of a fund’s skill.' },
          { text: 'The Sensex', why: 'Thirty large caps are as unsuitable a yardstick as the Nifty 50 for a small-cap portfolio.' },
          { text: 'India VIX', why: 'VIX measures expected volatility of the Nifty, not small-cap returns.' },
        ],
      },
    ],
    takeaway: 'The Nifty 50 is a rule-based, free-float weighted portfolio of India’s fifty largest and most tradable companies, reviewed twice a year. It is the benchmark your funds are judged against and the cheapest exposure you can buy — concentrated at the top, but exceptionally efficient.',
  },

  'l3-063': {
    id: 'l3-063',
    title: 'Sensex',
    subtitle: 'India’s oldest benchmark, 30 companies in',
    minutes: 7,
    blocks: [
      { kind: 'scene', name: 'sensex-30', caption: 'Thirty companies, weighted by what the market actually floats — the index Indian families have quoted since 1986.' },
      { kind: 'p', text: 'The Sensex is the BSE’s flagship index: thirty companies, launched in January 1986 with the base year 1978-79 set at 100. It is the number that appeared on Doordarshan before anyone had a broker app, and it is still the default headline in most Indian newspapers. Its construction is nearly the same as the Nifty 50’s — free-float market capitalisation weighting, transparent selection rules, periodic review — with a smaller, more concentrated basket.' },
      {
        kind: 'table',
        caption: 'Sensex milestones worth knowing',
        headers: ['Level', 'When it first reached it', 'What was happening'],
        rows: [
          ['1,000', '1990', 'Just before the liberalisation era began'],
          ['10,000', 'February 2006', 'The India growth story of the mid-2000s'],
          ['20,000', 'December 2007', 'The peak of the pre-crisis bull market'],
          ['Below 8,000', 'October 2008', 'The global financial crisis — a fall of roughly 60%'],
          ['50,000', 'January 2021', 'The recovery from the pandemic crash'],
        ],
      },
      {
        kind: 'callout',
        tone: 'india',
        title: 'The BSE index family, and where it is used',
        text: 'Beyond the Sensex, the BSE maintains the BSE 100, BSE 200 and BSE 500 broad-market indices, mid-cap and small-cap indices, and sector indices such as the BSE Bankex, BSE IT and BSE Healthcare. Several ETFs and index products are built on them, and the BSE also runs the widest listing platform in the country — meaning for many smaller companies, the BSE is the only place where a market price exists at all.',
      },
      {
        kind: 'example',
        title: 'Sensex or Nifty? The honest answer',
        text: 'Over any long period the Sensex and the Nifty 50 deliver nearly identical returns, because they hold almost the same large companies in slightly different weights. The average Indian large-cap fund, however, is benchmarked to the Nifty 50, and most index funds and ETFs track it too. So the practical difference for a retail investor is not the index construction — it is the cost and liquidity of the vehicle tracking it. Choose the cheaper, more liquid product, whichever of the two benchmarks sits on its cover.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Both are heavily skewed by the largest few',
        text: 'Thirty companies means the top few names carry an even larger share of the index than in the Nifty 50. When the largest two or three Indian companies move — the way Reliance, HDFC Bank or TCS do — the Sensex moves with them regardless of what the other twenty-seven are doing. Owning “the market” through a single index is less diversified than the headline number of companies suggests.',
      },
      {
        kind: 'list',
        items: [
          'The BSE switched its main indices to free-float weighting in 2003, so old long-run return charts that quote the pre-2003 Sensex are not measuring exactly the same construction as today’s.',
          'Both Indian benchmarks are reviewed periodically, and constituent changes ripple through every fund that tracks them.',
          'If you hold a Sensex ETF and a Nifty 50 index fund, check the overlap before assuming you have diversified — you own the same giants twice.',
        ],
      },
      { kind: 'sim', name: 'market', caption: 'Thirty large companies, one number — test a full market cycle on the older of India’s two benchmarks.' },
      {
        kind: 'terms',
        items: [
          { term: 'Sensex', meaning: 'The BSE\'s benchmark index of 30 large companies, launched in 1986 with the base year 1978-79 set at 100. It is the number Indian newspapers quote most.' },
          { term: 'Base year and base value', meaning: 'The historical date and level from which an index is measured — 1978-79 at 100 for the Sensex, 1995 at 1,000 for the Nifty. Index levels are only comparable as percentage returns.' },
          { term: 'BSE Bankex', meaning: 'The BSE\'s banking sector index, used by sector funds and ETFs.' },
          { term: 'Broad-market index', meaning: 'An index covering a wide slice of the listed market — BSE 100, BSE 200, BSE 500 or Nifty 500 — used where a single benchmark is too narrow.' },
        ],
      },
    ],
    quiz: [
      {
        q: 'How many companies are in the Sensex, and what is its base year?',
        options: [
          { text: '30 companies, base year 1978-79 set at 100', correct: true, why: 'The Sensex was launched in 1986 with the 1978-79 base value of 100 — that is why its numbers are so much larger than the Nifty’s.' },
          { text: '50 companies, base year 1995 at 1,000', why: 'That is the Nifty 50’s construction.' },
          { text: '100 companies, base year 2000 at 1,000', why: 'That would be closer to a BSE 100 index, not the Sensex.' },
          { text: '30 companies, base year 1986 at 1,000', why: 'The launch year was 1986, but the base year and value are 1978-79 and 100.' },
        ],
      },
      {
        q: 'A friend argues the Sensex has “fallen behind” because its number is much bigger than the Nifty’s. What is wrong here?',
        options: [
          { text: 'Nothing — the higher number means better returns', why: 'The index levels are not comparable; they start from different bases and base values.' },
          { text: 'They have different base years and base values, so only percentage returns over the same period can be compared', correct: true, why: 'The Sensex starts at 100 in 1978-79; the Nifty starts at 1,000 in 1995. Only period-over-period returns are meaningful.' },
          { text: 'The Nifty is always ahead of the Sensex', why: 'Neither is systematically ahead; their long-run returns are very close.' },
          { text: 'The Sensex includes bonds', why: 'Both indices contain only equities.' },
        ],
      },
      {
        q: 'Why is a 30-stock index technically less diversified than a 50-stock index?',
        options: [
          { text: 'Because 30 is a smaller number of shares', why: 'The number of shares held by a fund is irrelevant; the number of companies and their weights matter.' },
          { text: 'Because the largest few companies carry a larger share of the index, so their moves dominate it', correct: true, why: 'Concentration at the top is the real point: a handful of giant companies drives most of the index’s movement.' },
          { text: 'Because the Sensex only holds PSUs', why: 'It holds large private and public companies across sectors.' },
          { text: 'Because the BSE has fewer listed companies', why: 'The BSE has the most listed companies in the world; the index size is a design choice.' },
        ],
      },
    ],
    takeaway: 'The Sensex is India’s oldest benchmark: 30 large companies, free-float weighted, with a base of 100 in 1978-79. Its long-run returns match the Nifty’s closely — so pick the cheaper, more liquid product rather than arguing about the label.',
  },
}
