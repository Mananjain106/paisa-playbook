import type { Chapter } from '../../types'
import { scene, sim } from '../../lib/chapter-blocks'
import { l5Illustrative, l5Rule, l5Sources } from '../../lib/l5-blocks'

/**
 * Level 5, band two, batch 2 — chapters l5-030 to l5-039.
 *
 * The long-horizon half of mastery: the assets that cannot be sold, the costs
 * that never appear on a factsheet, the tax year planned rather than reported,
 * and then the three questions every plan eventually faces — when the salary
 * stops, how much is enough, and which income streams survive without you.
 *
 * Facts verified on 15 October 2026 and linked from each chapter: the base
 * expense ratio reported from April 2026 under the mutual fund regulations of
 * 2026; capital gains at 20% short term and 12.5% long term for listed equity
 * above a ₹1.25 lakh exemption, with twelve months for listed equity and
 * twenty-four for other assets and capital losses carried forward eight years;
 * the ₹1 crore minimum for an alternative investment fund and ₹50 lakh for a
 * portfolio management service; the ₹25 lakh angel-fund threshold; the NPS exit
 * rule of up to 80% as a lump sum with at least 20% to an annuity after the
 * December 2025 amendment, and the tax treatment of each part; interest on own
 * provident fund contributions above ₹2.5 lakh a year being taxable; the income
 * tax rates, standard deduction and rebate for tax year 2026-27 under the
 * Income-tax Act, 2025; the health-insurance moratorium of five years; and tax
 * collected at source on rent above ₹6 lakh a year and dividends above ₹10,000.
 */
export const l5RetireA: Record<string, Chapter> = {
  'l5-030': {
    id: 'l5-030',
    title: 'Private Equity',
    subtitle: 'Fees first, exits later: the shape of a fund that cannot be sold.',
    minutes: 11,
    blocks: [
      scene('j-curve', 'Money committed at the start, fees charged from year one, write-downs in the early years, and the exits that arrive a decade later.'),
      { kind: 'p', text: 'Private equity is money invested in companies that are not listed on an exchange. A fund raises a pool from investors, buys businesses or large stakes in them, improves or restructures them over several years, and sells. The investors do not hold shares they can sell on a Tuesday; they hold a commitment to a fund that decides when to call the money and when to return it.' },
      { kind: 'p', text: 'The consequence of that structure is the single most important thing to understand about the asset class: the fund decides the calendar, not you. You commit at the start, the money is drawn down over four or five years as deals are found, and your capital comes back when the manager sells, which is typically seven to ten years after the first cheque. In between, the reported value of your holding is somebody\'s estimate.' },

      { kind: 'h', text: 'The J curve' },
      { kind: 'p', text: 'A private equity fund usually shows losses for its first several years. Two forces cause it. The first is fees: management fees are charged on committed capital, not on invested capital, so you pay on money that is still sitting in your bank account. The second is accounting convention: unlisted holdings are carried at cost until something proves they are worth more, while the fees and any early write-downs land immediately. The combination produces a curve that dips before it rises — the J.' },
      {
        kind: 'table',
        caption: 'Where the money goes, and in what order',
        headers: ['Line', 'How it is charged', 'What it means for you'],
        rows: [
          ['Management fee', 'A percentage of committed capital, every year, whether or not it is invested', 'You pay on the whole commitment from year one, which deepens the early trough'],
          ['Fund expenses', 'Legal, audit, administration — billed to the fund', 'Small individually, and they sit on the same side of the ledger as the fee'],
          ['Carried interest', 'A share of the profit above a hurdle rate, taken by the manager', 'It is a claim on the upside you were sold, and it is charged before your return is reported'],
          ['Your proceeds', 'Whatever is left after the above, when the exits happen', 'The net multiple, which is the only number that matters'],
        ],
      },
      l5Rule(
        'How a resident individual reaches private equity at all',
        'A resident individual cannot buy into a private fund freely. In India the route is an alternative investment fund, regulated by SEBI in three categories, and the category that holds private equity is a privately placed vehicle with a minimum investment of ₹1 crore per investor and a minimum corpus of ₹20 crore per scheme. There is no secondary market in its units, so the exit is at the manager\'s discretion or at the end of the fund\'s life. A portfolio management service, the other route to concentrated unlisted and long-only strategies, requires at least ₹50 lakh per client. Both thresholds are access limits rather than suitability tests: they are a crude proxy for being able to lose the money and wait. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'What to ask before committing' },
      { kind: 'list', ordered: true, items: [
        'What is the vintage, and what did the fund\'s peers do in that year? Returns in this asset class are dominated by when the money was invested, because entry prices are set by the market at that moment.',
        'Who values the holdings, and how often? A valuation policy you can read is worth more than a reported internal rate of return you cannot.',
        'What has the fund actually returned in cash to investors, as opposed to what its holdings are marked at? The two numbers diverge for years at a time.',
        'How much of the fund is still uninvested, and what happens if it cannot be deployed — does the fee continue on capital that was never invested?',
        'How much of the manager\'s own money is in the fund, on the same terms as yours?',
        'What is the exit assumption for each large holding, and does it depend on a market window that may not be open?',
      ] },
      { kind: 'p', text: 'None of this makes private equity a bad asset class. It makes it an asset class with an unusual cost structure and an unusual liquidity profile, which some portfolios benefit from: private businesses are not priced every day, so their returns are less correlated with the listed market you already own. The price of that diversification is that the money is genuinely unavailable for a decade, and that the fee is charged before the return is known.' },
      sim('l5-pe-waterfall', 'Commit capital, pay the management fee each year, split the carry above a hurdle, and see the net multiple that results.'),
      l5Illustrative('The fund, fee rates and multiples in this chapter and its lab are invented for teaching. The ₹1 crore minimum investment and ₹20 crore corpus for an alternative investment fund, and the ₹50 lakh threshold for a portfolio management service, are the real regulatory limits verified on 15 October 2026 and linked below.'),

      { kind: 'p', text: 'A final caution about numbers in this asset class. Because holdings are not priced by a market, a fund can report a steady internal rate of return for years that is really a valuation opinion, and those opinions are formed by the same manager who is paid on them. The discipline is to weight cash actually returned far above marks, and to treat any multiple that has not been realised as a scenario rather than a result.' },
      { kind: 'terms', items: [
        { term: 'Committed capital', meaning: 'The amount you have promised to a fund, which it can call down over the investment period.' },
        { term: 'J curve', meaning: 'The shape of early losses followed by later gains, caused by fees charged from year one and by conservative valuations.' },
        { term: 'Carried interest', meaning: 'The manager\'s share of profits above a hurdle rate, paid out of your return rather than in addition to it.' },
        { term: 'Vintage', meaning: 'The year a fund began investing, which has more influence on its outcome than almost any other characteristic.' },
        { term: 'Dry powder', meaning: 'Committed capital that has not yet been invested, and on which fees may still be charged.' },
      ] },
      l5Sources(['sebi'], [
        'The alternative investment fund regulations: the categories, the ₹1 crore minimum investment, the ₹20 crore corpus, and the valuation and disclosure obligations — read the current text, because these thresholds have been revised more than once',
      ]),
    ],
    quiz: [
      {
        q: 'Why does a private equity fund usually show losses for its first few years?',
        options: [
          { text: 'Because the investments are bad and are written off', why: 'The early losses are mostly fees and accounting convention, not a verdict on the holdings.' },
          { text: 'Because fees are charged on committed capital from the start, while unlisted holdings are carried at cost until something proves otherwise', correct: true, why: 'Costs land immediately and gains are recognised late, so the reported curve dips before it rises. The dip says nothing about the eventual outcome.' },
          { text: 'Because the fund borrows heavily to invest', why: 'Borrowing at the fund level is restricted, and interest is not the driver of the early trough.' },
          { text: 'Because investors withdraw money early', why: 'Investors cannot withdraw. That is precisely what makes the calendar the manager\'s rather than yours.' },
        ],
      },
      {
        q: 'A fund reports a 16% internal rate of return on its fourth-year marks. What is the right way to read it?',
        options: [
          { text: 'As the return you have earned so far', why: 'Nothing has been sold at that price. On an unlisted portfolio the number is a valuation, formed by the manager.' },
          { text: 'As an estimate of what the portfolio would return if the current marks were realised, which should be weighted far below cash actually returned', correct: true, why: 'Marks on unlisted assets are opinions until a transaction tests them. Cash returned to investors is the only number that cannot be revised.' },
          { text: 'As a guarantee, because the valuation is audited', why: 'An audit tests whether the valuation process was followed, not whether the price is right.' },
          { text: 'As a loss, because it is unrealised', why: 'Unrealised gains are not losses. They are simply not yet evidence either.' },
        ],
      },
      {
        q: 'Why is the ₹1 crore minimum for an alternative investment fund described as an access limit rather than a suitability test?',
        options: [
          { text: 'Because rich investors need less protection', why: 'The limit restricts who bears the risk. It does not establish that they understand it.' },
          { text: 'Because it screens for the ability to lose the money and wait, which is the practical requirement of an asset with no secondary market', correct: true, why: 'The regulation cannot ask whether you can afford a total loss, so it uses a size limit as a proxy, alongside the corpus and disclosure rules.' },
          { text: 'Because the fund cannot accept smaller amounts technically', why: 'Private funds could accept smaller tickets. The minimum is a regulatory choice, not a mechanical constraint.' },
          { text: 'Because the returns are guaranteed above that level', why: 'Nothing about this asset class is guaranteed, at any size.' },
        ],
      },
    ],
    takeaway: 'Commit only money you can leave alone for a decade, read cash returned rather than marks, and remember that the fee is charged from year one on capital the fund has not yet invested.',
  },

  'l5-031': {
    id: 'l5-031',
    title: 'Venture Capital',
    subtitle: 'Most of the bets fail; a few pay for all of them.',
    minutes: 11,
    blocks: [
      scene('power-law', 'One position at 22 times, two small wins, and seven that return nothing — the distribution that decides how venture should be held.'),
      { kind: 'p', text: 'Venture capital is money for young companies with no history of profit, where the outcome depends on whether a handful of them become large. That sentence contains the whole discipline: because the returns are concentrated in a very small number of winners, the arithmetic of the asset class is about the number of bets and the size of each one, not about picking well in any normal sense.' },
      { kind: 'p', text: 'A power-law distribution is the technical name. Roughly, the best holding in a venture portfolio returns far more than everything else combined, several holdings return their money, and most return nothing. The average outcome is therefore always better than the typical outcome, and the typical outcome is a total loss.' },

      { kind: 'h', text: 'What follows from a power law' },
      {
        kind: 'table',
        caption: 'Three consequences that change how you invest',
        headers: ['Consequence', 'Why', 'What it demands of you'],
        rows: [
          ['Position size assumes zero', 'Most positions will return nothing, and which ones cannot be known in advance', 'Only risk money that a total loss would not change your plan'],
          ['Diversification is the strategy', 'The winner cannot be identified beforehand, so the only control is how many chances you take', 'A single company is speculation; a fund is diversification; several funds is a portfolio'],
          ['The mark is not the outcome', 'A young company has no market price, so its valuation is a negotiated number from its last funding round', 'Track dilution and the exit path, not the headline valuation'],
        ],
      },
      l5Rule(
        'Who an individual may invest through, and in what size',
        'A resident individual reaches venture capital mainly through an angel fund, which sits inside category I of the alternative investment fund regulations: the minimum investment is ₹25 lakh per investor and the minimum corpus is ₹10 crore, both lower than for other categories because the strategy is inherently smaller. Investing directly into a private company instead is a private placement under company law, with its own limits and disclosures, and it brings the obligations of being a shareholder. Either route carries the same economic fact: the shares are unlisted, so there is no market, no daily price, and no exit you control. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'Dilution, follow-on and the exit' },
      { kind: 'p', text: 'Two things erode a venture position between the day you invest and the day it pays. The first is dilution: a company that raises again issues new shares, so your percentage falls unless you put in more money, and the follow-on decision is where most of a venture portfolio\'s capital actually goes. The second is that the exit is not in your hands at all: a venture return arrives only if the company is acquired or lists, and both depend on markets that may be shut for years.' },
      { kind: 'p', text: 'The practical test of whether an individual should hold this asset class is therefore not enthusiasm for a company. It is whether the money is genuinely spare for a decade, whether the position is small enough that a total loss is an anecdote rather than a plan change, and whether there are enough positions for the arithmetic to work. A single bet on a business you like is not venture investing; it is an investment in one company with the risk of a venture fund and none of its diversification.' },
      { kind: 'list', items: [
        'Decide the total amount for the asset class first, then split it into positions. Individual decisions cannot be made sensibly before the total is fixed.',
        'Assume the money is gone. If that assumption changes your other plans, the amount is too large.',
        'Read the cap table, not the pitch. Who owns what after the next round, and what happens to your share if you do not participate in it?',
        'Ask what the exit would look like. A company whose only path is an acquisition needs an acquirer, and acquirers buy in cycles.',
        'Prefer a fund or a syndicate to a single company unless you are prepared to lose the whole amount and to be a shareholder for a decade.',
      ] },
      sim('l5-vc-portfolio', 'Size the positions, set the failure rate and the multiple of one winner, and watch the average and the middle position disagree.'),
      l5Illustrative('The companies, multiples and failure rates in this chapter and its lab are invented for teaching. The ₹25 lakh minimum investment and ₹10 crore corpus for an angel fund are the real limits verified on 15 October 2026 and linked below.'),

      { kind: 'p', text: 'One claim deserves to be retired here. Venture is not a way to earn a reliably higher return than a listed portfolio; it is a way to hold a different kind of risk, in a portfolio built for a power-law outcome, inside a wrapper that cannot be sold. Held that way and sized that way, it can add something. Held as a way to own one exciting company, it is a coin toss with paperwork.' },
      { kind: 'terms', items: [
        { term: 'Power law', meaning: 'A distribution in which a very small number of outcomes account for most of the total, which is how venture returns behave.' },
        { term: 'Angel fund', meaning: 'A category I alternative fund that pools money to invest in early-stage companies, with a lower minimum than other categories.' },
        { term: 'Dilution', meaning: 'The fall in your percentage ownership when a company issues new shares to other investors.' },
        { term: 'Follow-on', meaning: 'The additional money invested in a company that is already in the portfolio, which is where much of the capital goes.' },
        { term: 'Exit', meaning: 'The event that converts a holding into cash — a sale of the company or a listing — neither of which you control.' },
      ] },
      l5Sources(['sebi'], [
        'The alternative investment fund regulations: the angel fund category, the ₹25 lakh minimum investment and the ₹10 crore corpus, and the disclosure obligations of a venture fund',
      ]),
    ],
    quiz: [
      {
        q: 'Ten positions, one returns twenty times, seven return nothing. What does the portfolio multiple hide?',
        options: [
          { text: 'Nothing, because the portfolio is what you own', why: 'The multiple is the outcome of the portfolio, and the typical position is a loss. Both facts matter when deciding whether to hold a single company.' },
          { text: 'That the median position is a total loss, so a portfolio of one company is a bet on being in the minority', correct: true, why: 'The average is carried by the rare winner. With one position, you are not getting the average, you are getting a single draw from the distribution whose most likely outcome is zero.' },
          { text: 'That the winners can be identified in advance', why: 'If they could, position sizing would not matter. The impossibility of identification is what makes the number of bets the control.' },
          { text: 'That the fund will return twenty times', why: 'One holding at twenty times does not make the fund a twenty-times fund; the other nine outcomes decide that.' },
        ],
      },
      {
        q: 'A company you hold raises again at a higher valuation. What has happened to your position?',
        options: [
          { text: 'It is worth more, and your percentage is unchanged', why: 'A higher price per share does not mean your share count grew. If new shares were issued, your percentage fell.' },
          { text: 'The reported value per share has risen while your ownership share has fallen, and keeping your share means investing more', correct: true, why: 'Dilution is the quiet cost of a company that keeps raising, and the follow-on decision is where most venture capital is actually committed.' },
          { text: 'Nothing, until the company lists', why: 'Valuation, dilution and control all change at each round, whether or not a listing ever happens.' },
          { text: 'Your position has become liquid, because there is now a price', why: 'A round price is a negotiated number for a primary issue. It is not a market you can sell into.' },
        ],
      },
      {
        q: 'Why is the right first decision the total amount for the asset class rather than the choice of company?',
        options: [
          { text: 'Because the companies cannot be researched', why: 'They can be researched, but research does not change the distribution of outcomes enough to fix a position that is too large.' },
          { text: 'Because the size of the whole allocation, and of each position within it, is what makes a total loss survivable and diversification possible', correct: true, why: 'In a power-law asset class the arithmetic comes first: enough positions, small enough that the expected losses do not change your life.' },
          { text: 'Because regulation requires an allocation cap', why: 'The rules set minimum ticket sizes, not caps. The cap is your own decision and nobody else can make it for you.' },
          { text: 'Because the fund manager decides the position size', why: 'A manager sizes positions inside the fund. How much you commit to the fund is still your decision.' },
        ],
      },
    ],
    takeaway: 'Invest in a number of positions rather than in a company, size each one as though it will return nothing, and treat the valuation on the last funding round as an opinion rather than a price.',
  },

  'l5-032': {
    id: 'l5-032',
    title: 'Liquidity',
    subtitle: 'What can be produced in a week without regret.',
    minutes: 10,
    blocks: [
      scene('liquidity-ladder', 'Every holding, arranged by how fast it becomes spendable cash — because a date, not a rating, decides whether something is liquid.'),
      { kind: 'p', text: 'Liquidity is not a property of an asset. It is the relationship between an asset and the date you need the money, and it changes with circumstances: a share you never intended to sell is liquid; the same share sold in a falling market in the fourth month of a job loss is not.' },
      { kind: 'p', text: 'That distinction is why liquidity belongs beside the emergency fund in a plan rather than in a list of product features. The question a plan has to answer is not "is this investment liquid?" but "if income stopped on the first of next month, how many months could I fund without selling anything I would regret selling?"' },

      { kind: 'h', text: 'Ladder the money by date' },
      {
        kind: 'table',
        caption: 'Four buckets, and the only question each one answers',
        headers: ['Bucket', 'Where it sits', 'What it is for', 'What must not be here'],
        rows: [
          ['Same day', 'Savings and sweep balances', 'The month itself — bills, food, an unexpected repair', 'Anything you would have to sell to fund next month'],
          ['Weeks', 'Liquid and overnight funds', 'A job loss, a medical advance, an emergency flight', 'Yields chased with credit risk: this money has a date, not a return mandate'],
          ['Three to seven years', 'Short-duration debt, a few equity funds for longer goals', 'A planned purchase, school fees, a car', 'Money for next quarter, and money for a goal you cannot move'],
          ['A decade and beyond', 'Equity, provident fund, property', 'Retirement and long goals', 'The emergency fund, counted as an asset but not as a resource'],
        ],
      },
      l5Rule(
        'Where the locks are, and how long they last',
        'Some holdings cannot be sold at any price inside a fixed period, and the periods are set by rules rather than by the market. Units of an equity-linked savings scheme are locked for three years from each instalment — not from the start of the investment, so a monthly subscription unlocks monthly, three years after each payment. A tax-saver fixed deposit runs five years. The Public Provident Fund runs fifteen years. The pension system does not permit exit before sixty, except in the narrow cases it defines. Beyond lock-ins, a fund may charge an exit load on early redemption, and the load is disclosed in the scheme document, with a change requiring advance notice to unitholders. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'Liquidity in a stress, which is the only test that counts' },
      { kind: 'p', text: 'Three things happen at once in a bad month. Income stops, the market falls, and the expense that caused the problem is usually the one you cannot postpone. Under those conditions, liquidity is decided by what fraction of the portfolio is available without crystallising a loss. Because a 40% fall is not a theoretical number — it has happened in Indian equity twice in the last two decades — the arithmetic is harsh: funding an eight-month gap from equity in such a year requires selling nearly twice the amount you need.' },
      { kind: 'p', text: 'Two further points belong here. Deposit insurance covers bank deposits only up to ₹5 lakh per depositor per bank, which is a guarantee of safety rather than of availability: the money is protected against the bank failing, not freed up when you want it in a hurry. And a physical asset you could sell, at a price you would accept, having found a buyer, is not a liquid asset; property is bought with a decision and sold with a discount.' },
      { kind: 'list', items: [
        'Count only cash, sweep balances and liquid funds as the emergency fund. Everything else is an asset, which is a different thing from a resource.',
        'Hold six months of essential expenses in the top two buckets, and nine to twelve if your income is variable or you are the only earner.',
        'Keep goal money and emergency money separate, even if both sit in the same scheme — the calendar for each is different.',
        'Before buying a lock-in product, write down the date the money is next needed. If the lock extends past it, the extra return is not a return.',
        'In a crisis, sell in order of cost: cash first, then liquid funds, then the taxable positions, and never the locked ones, which cannot be sold anyway.',
      ] },
      sim('l5-liquidity-map', 'Lay out what you own by conversion speed, cut off the income, and see which holdings are available and what a forced sale actually costs.'),
      l5Illustrative('The amounts and the interruption in this chapter and its lab are invented. The three-year lock-in on each instalment of an equity-linked savings scheme, the five-year tax-saver deposit, the fifteen-year provident fund horizon, the pension age restriction and the ₹5 lakh deposit-insurance cover are the real rules verified on 15 October 2026 and linked below.'),

      { kind: 'p', text: 'The last point to carry away is that liquidity has a price, and paying it is usually correct. A liquid fund earns less than a long-duration bond fund over five years; that difference is the fee for not being forced to sell at the wrong moment. Plans rarely fail because the emergency fund earned 6% instead of 8%. They fail because the emergency fund was not there.' },
      { kind: 'terms', items: [
        { term: 'Liquidity', meaning: 'How quickly and how predictably a holding can be converted into cash without a significant loss of value.' },
        { term: 'Lock-in', meaning: 'A period fixed by rule during which a holding cannot be redeemed at all, however urgent the need.' },
        { term: 'Exit load', meaning: 'A charge levied when units are redeemed early, disclosed in the scheme document.' },
        { term: 'Liquidity ladder', meaning: 'Holding money at several conversion speeds so that each date has a matching bucket.' },
        { term: 'Deposit insurance', meaning: 'Cover of bank deposits to ₹5 lakh per depositor per bank, which protects against the bank failing rather than against your own timing.' },
      ] },
      l5Sources(['sebi', 'rbi'], [
        'The lock-in and exit-load rules for mutual fund schemes, the settlement cycle for redemptions, and the disclosure requirements when a load changes',
        'The deposit-insurance limit and the rules on savings and current accounts, which together decide how much can be produced on the day',
      ]),
    ],
    quiz: [
      {
        q: 'A friend says their portfolio is liquid because it is all in mutual funds. What is missing from that claim?',
        options: [
          { text: 'Nothing — mutual funds can be redeemed', why: 'Most can, but each has a settlement date and some are locked. Both matter when the need is next month.' },
          { text: 'The date: an equity fund sold in a 40% fall is available but expensive, and an equity savings scheme is not available at all', correct: true, why: 'Liquidity is speed plus price. A holding that must be sold at the bottom is technically liquid and practically a loss.' },
          { text: 'Only the exit load', why: 'The load is one cost among the settlement delay and the market price you sell into.' },
          { text: 'That funds are not insured', why: 'Market-linked investments are not insured, but that is a different risk from liquidity.' },
        ],
      },
      {
        q: 'Why does a three-year lock-in on an equity savings scheme not mean your whole investment is locked for three years?',
        options: [
          { text: 'Because the lock applies to the NAV rather than to units', why: 'The lock applies to units, and the NAV is not what is restricted.' },
          { text: 'Because each instalment is locked for three years from its own date, so a monthly subscription unlocks monthly from the start', correct: true, why: 'It is a rolling lock. The first instalments are available once three years have passed for them, which is why a long-running subscription behaves very differently from a lump sum.' },
          { text: 'Because switches are permitted', why: 'A switch into another scheme is a redemption for this purpose, and a switch within the same fund house is still a redemption.' },
          { text: 'Because the lock can be waived on request', why: 'It cannot. The lock-in is a condition of the tax treatment, not a commercial term.' },
        ],
      },
      {
        q: 'What is the real cost of holding six months of expenses in a liquid fund at 1.5% less than a longer fund?',
        options: [
          { text: 'A permanent loss of return with no benefit', why: 'The benefit is the ability to fund an interruption without selling anything into a fall, which the next question prices.' },
          { text: 'A known, small drag that buys the option to avoid forced selling, which is usually cheaper than the loss it prevents', correct: true, why: 'Forced selling in a 40% drawdown converts a need of one amount into a sale of nearly double it. The drag is the premium on that option.' },
          { text: 'Nothing, because returns even out', why: 'Returns do not even out between instruments with different credit and duration risk; that is the point of holding the safer one.' },
          { text: 'A tax cost that exceeds the return', why: 'Tax applies to whichever instrument you hold. It does not change the comparison being made here.' },
        ],
      },
    ],
    takeaway: 'Match every bucket to a date rather than a return, keep six months of essentials in the two fastest buckets, and treat a lock-in that outlasts your next need as a decision you cannot reverse.',
  },

  'l5-033': {
    id: 'l5-033',
    title: 'Fees And Access Restrictions',
    subtitle: 'A fee is a percentage of your money and a rupee amount of your time.',
    minutes: 11,
    blocks: [
      scene('fee-stack', 'Every layer of cost on one holding, from the expense ratio inside the fund to the spread on the trade, and which of them the headline number hides.'),
      { kind: 'p', text: 'Costs in investing arrive in two shapes. Some are percentages of what you own, charged every year, and they look like housekeeping. Others are charged per transaction, once, and they feel like the price of doing business. Both reduce your outcome, and the first kind does it permanently: a fee taken out of the corpus each year is a fee taken out of every year of compounding that follows.' },
      { kind: 'p', text: 'Why this is worth a whole chapter is the arithmetic. A one percentage point difference in annual cost, on a corpus held for twenty-five years, changes the outcome by roughly a fifth — before any difference in the manager\'s skill, which is the harder thing to buy.' },

      { kind: 'h', text: 'The stack, and who charges it' },
      {
        kind: 'table',
        caption: 'Every layer, and where it is visible',
        headers: ['Cost', 'Who receives it', 'Where it appears'],
        rows: [
          ['Base expense ratio', 'The fund house, for managing the scheme', 'Deducted inside the fund daily, and disclosed as a ratio'],
          ['Distribution cost, regular plan', 'The distributor who sold the scheme', 'Inside the fund, and no longer part of the base expense ratio that is reported'],
          ['Advisory or platform fee', 'The adviser or the platform you use', 'Billed to you separately, or through a plan with a higher cost'],
          ['Entry and exit loads', 'The scheme, to protect remaining unitholders', 'Charged on the transaction, disclosed in the scheme document'],
          ['Brokerage, stamp duty, spread', 'The broker, the government and the other side of the trade', 'Per trade, and the spread is invisible unless you look at the order book'],
          ['Tax on the gain', 'The government', 'On realisation, at rates set by the holding period rather than by the product'],
        ],
      },
      l5Rule(
        'The reporting basis changed in April 2026',
        'The mutual fund regulations of 2026 came into force on 1 April 2026 and changed how scheme costs are reported: the headline number published for a scheme is now a base expense ratio that excludes the distribution component, and separate, lower caps apply to categories such as index funds and exchange-traded funds. The practical consequence is that two historically comparable numbers are not comparable any more. A regular plan pays a distribution cost that no longer sits inside the reported ratio, so it is not more expensive because the ratio looks the same — it is more expensive because a further layer exists outside it. Direct plans have the same portfolio without that layer, which is why the two plans differ in cost and not in holdings. Verified 15 October 2026 — check the current caps and definitions at SEBI before relying on any figure.',
      ),

      { kind: 'h', text: 'Access restrictions, and what they are really for' },
      { kind: 'list', items: [
        'A portfolio management service must take at least ₹50 lakh from a client, and a 2026 framework adds a mutual-fund-only route with a lower minimum and a capped fee — check the current thresholds, because this is being revised.',
        'An alternative investment fund requires ₹1 crore per investor, with ₹25 lakh for angel funds and for employees and directors of the manager.',
        'A private fund has no secondary market, so the minimum is standing in for an ability to wait rather than a willingness to invest.',
        'A traded trust — a listed REIT or InvIT — has none of these minimums beyond the unit size, which is the clearest comparison available: the same underlying assets, without the access restriction, because there is a market.',
        'An accredited-investor route exists with far higher minimums and lighter rules; its purpose is to allow products that cannot be sold to the public, which is not the same as products that are better.',
      ] },
      { kind: 'p', text: 'The useful way to read a fee is per unit of outcome. A 1% annual fee on a corpus of ₹50 lakh is ₹50,000 a year — enough to pay for advice if the advice changes decisions, and a pure loss if it buys nothing but access to a scheme you could have bought directly. The same test applies to a 1% exit load charged on a round trip you did not need, and to a 2% adviser fee on a portfolio that is rebalanced twice a decade.' },
      sim('l5-total-cost-of-ownership', 'Add every layer of cost on one holding, convert it to rupees a year, and compare what the same portfolio returns through a direct plan.'),
      l5Illustrative('The amounts, rates and products in this chapter and its lab are invented for teaching. The change of reporting basis from April 2026, the lower caps for index and exchange-traded categories, the ₹50 lakh portfolio-management minimum and the ₹1 crore alternative-fund minimum are the real rules verified on 15 October 2026 and linked below.'),

      { kind: 'p', text: 'One asymmetry is worth stating plainly, because it decides most fee arguments. Fees are certain and returns are not. A fund that charges 2% may still beat one that charges 0.5%; it has to do so by 1.5 percentage points a year, every year, before you are even. Managers do achieve that, and the ones who do rarely need to be sold. That is why the sensible order of operations is to remove the costs that buy nothing, keep the ones that buy decisions, and then judge the remaining manager on evidence rather than on the fee.' },
      { kind: 'terms', items: [
        { term: 'Base expense ratio', meaning: 'The expense ratio reported for a scheme from April 2026, which excludes the distribution component.' },
        { term: 'Direct plan', meaning: 'The same scheme without a distributor, and therefore without the distribution cost inside it.' },
        { term: 'Exit load', meaning: 'A charge on early redemption, disclosed in the scheme document, which protects the remaining unitholders from the cost of your exit.' },
        { term: 'Access restriction', meaning: 'A minimum investment or an eligibility rule that limits who can buy a product, used as a proxy for the ability to bear its risk.' },
        { term: 'Accredited investor', meaning: 'A category for investors who meet a higher threshold and may therefore be offered products that cannot be sold to the public.' },
      ] },
      l5Sources(['sebi', 'amfi'], [
        'The mutual fund regulations of 2026 and the master circular: the base expense ratio and its caps, the treatment of distribution costs, and the disclosure rules for exit loads',
        'The published expense ratios and the industry material on the difference between direct and regular plans and between tracking error and tracking difference',
      ]),
    ],
    quiz: [
      {
        q: 'Since April 2026 a regular plan and a direct plan can show the same headline expense ratio. Why can the regular plan still cost more?',
        options: [
          { text: 'Because it holds different securities', why: 'The portfolios are the same. Only the way it is bought and paid for differs.' },
          { text: 'Because the reported ratio now excludes the distribution cost, which a regular plan still pays inside the fund', correct: true, why: 'The reporting basis changed, not the underlying economics. The commission still leaves the scheme, and the scheme is where your money is.' },
          { text: 'Because the direct plan has lower tax', why: 'Tax follows the asset and the holding period, not the plan you bought it through.' },
          { text: 'Because the regular plan has a better manager', why: 'The manager is the same person running the same scheme.' },
        ],
      },
      {
        q: 'An adviser charges 0.8% a year on a ₹60 lakh portfolio. What is the honest test of that fee?',
        options: [
          { text: 'Whether it is below the industry average', why: 'Being typical is not evidence of value. The comparison is against what the fee buys.' },
          { text: 'Whether it changes decisions — asset allocation, tax timing, behaviour in a fall — enough to be worth ₹48,000 a year', correct: true, why: 'Advice is worth paying for when it changes what you do. If the portfolio would be identical without it, the fee is a cost rather than a fee for a service.' },
          { text: 'Whether the portfolio beat the index last year', why: 'One year is noise, and the adviser did not choose the index return. The question is what decisions changed.' },
          { text: 'Whether the fee is a percentage or a flat amount', why: 'The form of the charge matters less than the amount and what it purchases.' },
        ],
      },
      {
        q: 'Why does a listed REIT or InvIT make a useful comparison when thinking about access restrictions?',
        options: [
          { text: 'Because it is safer than an unlisted fund', why: 'It has market risk of its own. The point being made is about liquidity and access, not safety.' },
          { text: 'Because it holds similar assets to some private vehicles but trades on an exchange, so the minimum is a unit rather than ₹1 crore', correct: true, why: 'Where a market exists, the access restriction is unnecessary. Where one does not, the minimum stands in for the illiquidity the investor is accepting.' },
          { text: 'Because REITs and InvITs pay no tax', why: 'They pay tax on components of their distributions; the exempt dividend component was a change made in 2026.' },
          { text: 'Because they are regulated by the same body', why: 'They are all SEBI-regulated, which is true and not the point being made.' },
        ],
      },
    ],
    takeaway: 'Total every layer of cost in rupees a year before comparing products, pay only for fees that change decisions, and read an access minimum as a statement about illiquidity rather than about quality.',
  },

  'l5-034': {
    id: 'l5-034',
    title: 'Advanced Tax Planning',
    subtitle: 'Dates, offsets and records: how a tax year is planned rather than reported.',
    minutes: 12,
    blocks: [
      scene('tax-year-grid', 'Each asset class against the holding period that decides its rate, with the set-off rule that lets a loss in one row pay for a gain in another.'),
      { kind: 'p', text: 'Tax planning at this level is not about finding a clever product. It is about three dates and one habit. The dates are the points at which a holding changes character — twelve months for listed equity, twenty-four for most other assets — the end of the tax year, by which time a loss must have been realised to be usable against this year\'s gains, and the day the return is filed, because an unused loss has to be reported in the year it arose to survive at all.' },
      { kind: 'p', text: 'The rates are the framework you already have. For listed equity and equity-oriented funds, a gain held twelve months or less is short term and taxed at 20%; beyond that it is long term and taxed at 12.5% above an annual exemption of ₹1.25 lakh. Most other assets become long term after twenty-four months, with short-term gains taxed at your slab rate and long-term gains at 12.5% without indexation.' },

      { kind: 'h', text: 'Set-off and carry-forward, which is where the planning lives' },
      {
        kind: 'table',
        caption: 'What a loss can be used against',
        headers: ['Loss', 'Can be set off against', 'Carry forward', 'Cannot touch'],
        rows: [
          ['Short-term capital loss', 'Short-term gains, and long-term gains', 'Eight assessment years, against capital gains only', 'Salary income, in any year'],
          ['Long-term capital loss', 'Long-term gains only', 'Eight assessment years, against long-term gains only', 'Short-term gains, and salary'],
          ['House property loss', 'Other income, up to ₹2 lakh in the year', 'Eight years, against house property income', 'Salary beyond the annual limit'],
          ['Business loss', 'Most heads except salary', 'Eight years, against business income', 'Salary income'],
        ],
      },
      l5Rule(
        'Carrying a loss forward requires the loss to have been reported',
        'A capital loss is only carried forward for the eight assessment years the law allows if the year in which it arose was filed with that loss in it, by the due date. A loss that was not reported is not a loss for tax purposes at all, whatever the broker statement says. This is what makes the habit of filing a full return every year — including years with no gains and years with nothing but a loss — the single most valuable piece of tax planning available, and it costs nothing. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'The decisions that are actually worth taking' },
      { kind: 'list', items: [
        'Hold to the twelve-month mark where a sale is a choice rather than a need: the same gain is taxed at 20% or 12.5%, which is the cheapest rate cut available to you.',
        'Use the ₹1.25 lakh annual exemption deliberately, in the years in which it is available. An exemption that is not used in a year does not roll over.',
        'Realise losses in the same year as the gains they can offset. A loss sitting in an unsold position offsets nothing.',
        'Harvest, but do not churn: selling to book a loss and buying back the same exposure resets the holding period for the new units.',
        'Run the regime question every year rather than once. Under the old regime the deductions for investments, health cover and home-loan interest still exist; under the new regime the rates are lower and those deductions are gone.',
        'Keep the records: contract notes, the holding period of each lot, and the statement of gains for every year, because eight years is longer than any broker keeps a portal open.',
      ] },
      { kind: 'p', text: 'Two limits keep this honest. Capital losses cannot be set off against salary, so a bad portfolio year cannot reduce the tax on your work; and the offsetting of a loss against a gain does not create money, it only defers or avoids tax on a gain you chose to realise. Tax planning that improves a real decision — when to sell, which lot to sell, which regime to choose — is worth the effort. Tax planning that creates a transaction solely to move a number is usually a cost with a story attached.' },
      sim('l5-tax-planner', 'Enter gains and losses, apply the set-off order and the exemption, price a holding period that has not run yet, and see the tax for the year.'),
      l5Illustrative('The gains, salaries and losses in this chapter and its lab are invented. The rates of 20% and 12.5%, the ₹1.25 lakh exemption, the twelve and twenty-four month holding periods, the set-off ordering, the eight-year carry-forward and the ₹2 lakh annual limit on house-property loss set-off are the real rules verified on 15 October 2026 and linked below.'),

      { kind: 'p', text: 'Under the Income-tax Act, 2025, which applies from tax year 2026-27, the framework is otherwise the one you have already met in this level: the new regime is the default with a ₹75,000 standard deduction, the rebate extinguishes tax on taxable income up to ₹12 lakh, marginal relief applies just above that, and the slab rates are unchanged. Quote the rule rather than the section number when you explain it, because the renumbering is still working its way through the documentation.' },
      { kind: 'terms', items: [
        { term: 'Short-term capital gains', meaning: 'Gains on an asset held for less than the period that makes it long term — twelve months for listed equity, generally twenty-four for others.' },
        { term: 'Set-off', meaning: 'Using a loss to reduce a gain of a permitted kind in the same year, under the ordering rules.' },
        { term: 'Carry forward', meaning: 'Using a loss that could not be set off against gains in a later year, for up to eight assessment years.' },
        { term: 'Tax harvesting', meaning: 'Deliberately realising a gain or a loss to use the exemption or to offset a gain, and repurchasing the exposure where appropriate.' },
        { term: 'Marginal relief', meaning: 'The limit that stops a small rise in income producing a disproportionate rise in tax just above a rebate threshold.' },
      ] },
      l5Sources(['incometax', 'incometaxRates', 'indiabudget'], [
        'How to set off and carry forward each kind of loss, the eight-year limit, and the requirement to report a loss in the year it arose',
        'The rates and holding periods for capital gains, the annual exemption, and the slab rates and standard deduction for the year',
        'The Finance Act changes for the year, and the notified provisions that take effect under the income tax law in force',
      ]),
    ],
    quiz: [
      {
        q: 'You have a ₹2 lakh short-term capital loss and a ₹3 lakh long-term capital gain, with a ₹25 lakh salary. What can the loss offset?',
        options: [
          { text: 'The salary, because it is the largest number', why: 'Capital losses cannot be set off against salary in any year, whatever the relative sizes.' },
          { text: 'The long-term gain, because a short-term loss may be set off against either kind of capital gain', correct: true, why: 'That is the asymmetry: a short-term loss is more flexible than a long-term loss, which can only be used against long-term gains.' },
          { text: 'It cannot be used at all', why: 'It can, against capital gains, and any unused part survives for eight years against future capital gains.' },
          { text: 'Only half of it, because the gains are long term', why: 'There is no such limit. Flexibility runs the other way: a short-term loss reaches both buckets.' },
        ],
      },
      {
        q: 'Why must a loss year be filed even when there is nothing to pay?',
        options: [
          { text: 'Because filing is compulsory for everyone above the exemption', why: 'That is a separate obligation. The reason here is specific to the loss.' },
          { text: 'Because an unreported loss cannot be carried forward, so it ceases to exist for tax purposes', correct: true, why: 'The carry-forward is conditional on the loss appearing in a return filed for the year it arose. Nothing in a broker statement can substitute for that.' },
          { text: 'Because the broker reports it automatically', why: 'The broker reports what happened in the account. The claim to carry the loss forward is made in your return.' },
          { text: 'Because it converts the loss into a deduction from salary', why: 'Nothing converts a capital loss into a deduction from salary.' },
        ],
      },
      {
        q: 'A holding shows a ₹3 lakh gain and has been held eleven months. What is the cost of not waiting one more month?',
        options: [
          { text: 'Nothing, because the exemption covers it', why: 'The ₹1.25 lakh exemption applies to long-term gains only. A short-term gain is taxed at 20% with no exemption at all.' },
          { text: 'Just over ₹38,000: ₹60,000 now at 20%, against ₹21,875 on the same gain once it is long term', correct: true, why: 'After twelve months the ₹1.25 lakh exemption reduces the taxable gain to ₹1.75 lakh at 12.5%, which is ₹21,875. The difference is the price of one month, and it dwarfs most investment decisions.' },
          { text: 'The exit load only', why: 'A load may apply as well, but the tax difference is the larger amount by far.' },
          { text: 'It cannot be sold before twelve months', why: 'It can be sold at any time. The lock-in belongs to specific products such as the equity savings scheme, not to listed equity itself.' },
        ],
      },
    ],
    takeaway: 'Plan the year rather than the trade: hold past the twelve-month mark where the sale is optional, use the exemption deliberately, realise losses in the year they can be used, and file every year so a loss survives to be carried forward.',
  }, 
  'l5-035': {
    id: 'l5-035',
    title: 'Retirement Planning',
    subtitle: 'Replace a salary with streams, and keep the streams rising.',
    minutes: 12,
    blocks: [
      scene('retirement-bridge', 'Years of paying in, a date you choose, and the streams that have to fund the same life at rising prices.'),
      { kind: 'p', text: 'Retirement planning is a replacement exercise. Until a date you choose, a salary pays for a life; after it, that life has to be paid for by streams from a corpus. The plan is the bridge between the two, and its difficulty is not the saving — it is that the target moves while you are aiming at it.' },
      { kind: 'p', text: 'Everything else follows from two numbers. The first is what the life costs at the date, not today: at 6% inflation a monthly expense of ₹60,000 becomes nearly ₹3.45 lakh in thirty years, and the target is that number. The second is how long the money has to last, which is the one input nobody can supply, and which is why part of every sensible retirement plan is an income that cannot be outlived.' },

      { kind: 'h', text: 'The three streams, and what the rules say about each' },
      {
        kind: 'table',
        caption: 'Where retirement income comes from',
        headers: ['Stream', 'How it is produced', 'How it is taxed', 'What it cannot do'],
        rows: [
          ['Provident fund', 'Accumulated monthly contributions with interest, paid at retirement', 'Exempt after five years of continuous service, subject to the tax on interest on very large own contributions', 'Index itself: a corpus paid once has to be invested'],
          ['Pension system', 'A corpus built from contributions, taken at exit as a lump sum and an annuity', 'The lump sum is exempt up to the permitted share; annuity income is taxed as it is received', 'Grow after it is annuitised, and the capital is gone'],
          ['Your own portfolio', 'Withdrawals from equity and debt, plus rent or other income', 'Tax depends on the asset and the holding period, not on the fact that you are retired', 'Guarantee a payment for life: it can run out'],
        ],
      },
      l5Rule(
        'What the pension system allows at exit, and what it costs',
        'On exit from the National Pension System the non-government subscriber may now take up to 80% of the corpus as a lump sum, with at least 20% used to buy an annuity — a change made by the regulator in December 2025, easing the earlier requirement of a minimum 40% annuity. The lump sum is exempt from tax under the relevant provision, up to the share permitted, and the annuity income is taxed as it is received. Contributions attract relief in both regimes in different forms: an employer contribution is deductible up to 14% of basic pay under the new regime, an own contribution gets an additional ₹50,000 of deduction under the old regime only, and the scheme now permits a far higher equity share for those who want it. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'The annuity decision, stated honestly' },
      { kind: 'p', text: 'An annuity is insurance against living a long time. You hand over capital and receive a payment for as long as you live, which is the only instrument in this chapter that cannot be outlived. The cost is that the capital is gone: nothing is left for heirs, nothing can be spent on a house repair at seventy, and the payment does not rise with prices unless you buy an escalating version at a lower starting rate. That is not a flaw; it is the price of the guarantee. What makes the decision manageable is that it is a decision about a share, not about everything: the pension system requires at least 20%, and the rest can stay invested and stay yours.' },
      { kind: 'list', items: [
        'Price the target at the date, not today. Every year of delay in doing that is a year of aiming at the wrong number.',
        'Fund the essentials first. The plan should cover rent, food, health and utilities before any discretionary spending is included.',
        'Keep the annuity share as small as the rules and your comfort allow, and no larger: it buys longevity insurance, not growth.',
        'Plan the years between stopping work and the pension date separately. If that gap exists, it is funded entirely from the corpus.',
        'Re-price the plan once a year, using actual inflation for the things you actually buy, and treat a shortfall as a contribution problem before an asset-mix problem.',
      ] },
      sim('l5-retirement-projector', 'Build the corpus, inflate the expense, split it into an annuity and a withdrawal, and see which streams cover the month and which do not.'),
      l5Illustrative('The expenses, returns and annuity rates in this chapter and its lab are invented for teaching. The exit rule of up to 80% as a lump sum with at least 20% to an annuity, the exemption of the lump sum, the treatment of annuity income, the deduction for an employer contribution up to 14% of basic pay and the additional ₹50,000 for own contributions under the old regime are the real rules verified on 15 October 2026 and linked below.'),

      { kind: 'p', text: 'One further rule decides how much of a provident fund balance actually reaches you intact. Accumulated balances are exempt when there have been five years of continuous service, and interest attributable to an employee\'s own contributions above ₹2.5 lakh in a year — ₹5 lakh where there is no employer contribution — is taxable. That threshold is high enough that most salaried savers never meet it, and low enough that a voluntary contribution programme can cross it without warning. Check the figure before deciding to contribute aggressively for the tax deduction alone.' },
      { kind: 'terms', items: [
        { term: 'Corpus', meaning: 'The accumulated pot at the retirement date, before any of it is converted into income.' },
        { term: 'Annuity', meaning: 'A contract that pays an income for life in exchange for capital, providing longevity insurance rather than growth.' },
        { term: 'Withdrawal rate', meaning: 'The share of the corpus taken as income each year, which together with inflation and returns decides how long it lasts.' },
        { term: 'Replacement ratio', meaning: 'Retirement income as a share of the income earned while working, used as a rough test of whether the plan is in the right range.' },
        { term: 'Systematic withdrawal', meaning: 'Taking a fixed or rising amount from a portfolio at intervals, which keeps the capital invested and under your control.' },
      ] },
      l5Sources(['pfrda', 'epfo', 'incometax'], [
        'The exit and withdrawal rules: the permitted lump sum and annuity shares, the deferment options, and the equity limits within the scheme',
        'The provident fund rules: the five-year condition for an exempt payout, the wage ceiling for contributions, and the interest credited each year',
        'The exemption of the lump sum, the tax on annuity income, and the deduction available for an employer contribution and for own contributions',
      ]),
    ],
    quiz: [
      {
        q: 'A retirement target of ₹1 crore is set today, for thirty years from now. What is the most likely error in that plan?',
        options: [
          { text: 'It is too large, because expenses fall in retirement', why: 'Some expenses fall and health costs usually rise. Assuming a decline is as arbitrary as assuming no change.' },
          { text: 'It ignores inflation: at 6% the same life costs several times as much by the date the money is needed', correct: true, why: 'The target is a number at the date. At 6% a cost roughly triples in twenty years, and the contribution has to fund that number, not today\'s.' },
          { text: 'It assumes a return that is too low', why: 'The return assumption is a separate question. The error here is the date on which the target is measured.' },
          { text: 'There is no error, because expenses are personal', why: 'Expenses are personal, but the arithmetic of prices applies to everyone.' },
        ],
      },
      {
        q: 'Why does an annuity belong in a retirement plan at all, given that it gives up the capital?',
        options: [
          { text: 'Because it earns the highest return available', why: 'It usually earns less than a diversified portfolio. It is not bought for return.' },
          { text: 'Because it is the only instrument that cannot be outlived, which is the one risk a portfolio cannot insure itself against', correct: true, why: 'Living a long time is the risk that a withdrawal plan handles worst, because the payments continue while the corpus shrinks. An annuity transfers that risk to the insurer.' },
          { text: 'Because it is tax-free while the corpus is not', why: 'Annuity income is taxed as it is received; the lump-sum portion is the part with the exemption.' },
          { text: 'Because it is required for the entire corpus', why: 'The requirement is a minimum share of 20% at exit, and the rest can remain invested.' },
        ],
      },
      {
        q: 'You plan to stop working at 50 and want to use your provident fund and pension to fund retirement. What does that plan have to handle?',
        options: [
          { text: 'Nothing unusual: both are available whenever you stop working', why: 'The pension gives access at sixty, with narrow exceptions, and provident fund withdrawals are subject to their own conditions.' },
          { text: 'A gap: from 50 to 60 the corpus funds everything, and health cover has to be bought at the age you arrive', correct: true, why: 'The years before the pension date are the most exposed part of an early plan, because nothing arrives automatically and the corpus is drawing down.' },
          { text: 'Only the tax on the provident fund payout', why: 'Tax matters, but the timing of access is the larger constraint on this plan.' },
          { text: 'An increase in the annuity share is compulsory', why: 'There is no such rule; the requirement is a minimum share, not a maximum.' },
        ],
      },
    ],
    takeaway: 'Fund the inflated cost of the life you will actually live, keep enough liquid to reach the pension date, and buy only as much annuity as you need for the risk a portfolio cannot handle.',
  },

  'l5-036': {
    id: 'l5-036',
    title: 'Financial Independence',
    subtitle: 'A multiple of your spending, not a number someone else chose.',
    minutes: 11,
    blocks: [
      scene('multiple-ladder', 'Twenty times spending or forty, each with the withdrawal rate it implies and the margin it leaves for a bad decade.'),
      { kind: 'p', text: 'Financial independence is the point at which work becomes optional, and it is expressed as a multiple of what you spend rather than as an absolute amount. That is the useful part of the idea: the target scales with your life, so two people with very different incomes can both reach it, and the fastest way to move the date is usually to need less.' },
      { kind: 'p', text: 'The arithmetic is division. If you take 4% of a corpus a year, you need twenty-five times annual spending. At 3% you need thirty-three times, and at 2.5% you need forty. The withdrawal rate is not a fact about markets; it is an assumption about how much margin you want for the things that are not in the model — inflation above your guess, health costs, a bad first decade, and the possibility of living longer than you assumed.' },

      { kind: 'h', text: 'Why the multiple is a range and not a number' },
      {
        kind: 'table',
        caption: 'What each multiple buys, and what it assumes away',
        headers: ['Multiple', 'Withdrawal', 'What it assumes', 'Suitable if'],
        rows: [
          ['20x', '5%', 'Returns comfortably above inflation and a shorter horizon', 'There is another income stream behind it'],
          ['25x', '4%', 'The most widely quoted calibration, from a particular market and horizon', 'The plan can be cut back in a bad decade'],
          ['30x', '3.3%', 'A margin for a slow start and rising health costs', 'The corpus funds everything with no fallback'],
          ['40x', '2.5%', 'Decades of spending, long life, and expensive late-life care', 'The plan has to be robust rather than efficient'],
        ],
      },
      l5Rule(
        'The only payments that cannot be outlived come with rules',
        'A withdrawal plan is a decision you keep making, and a corpus can run out. An annuity is the one instrument that transfers the risk of a long life to an insurer, and the pension system makes part of it compulsory at exit: at least 20% of the corpus must buy an annuity, while up to 80% may be taken as a lump sum, and the two parts are taxed differently. The rest of your income in retirement keeps whatever tax treatment its own source has, whatever you call it — one of the reasons "passive income" is a description of effort rather than a tax category. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'The two levers, and why one is faster' },
      { kind: 'p', text: 'The multiple has a numerator and a denominator, and both are decisions. Lowering what you spend reduces the target immediately and permanently, because it changes the number being multiplied as well as the amount being saved. Raising the corpus takes time, and returns do not cooperate on a schedule. This is why the spending side deserves more attention than it usually gets: a decision to live on 10% less is worth roughly a tenth of the corpus, which at a 20% savings rate is several years of saving.' },
      { kind: 'p', text: 'Two items do not belong inside the monthly number. Health cover is a premium that rises with age and has to be paid whether or not you are well, so capitalise it separately rather than averaging it into a month. And the expenses that arrive whole — a roof, a wedding, a replacement vehicle — are best met from a provision rather than from the withdrawal rate, because a single large withdrawal early in retirement is exactly the sequence risk the multiple is meant to protect against.' },
      { kind: 'list', items: [
        'Pick the multiple deliberately and write down why. The number is a trade between how soon you want it and how much margin you want when you have it.',
        'Fund essentials first. A life that can be cut to its essentials in a bad decade is worth several multiples of one that cannot.',
        'Keep a provision for whole expenses rather than averaging them into a month.',
        'Treat health cover as a separate, indexed line, and keep it continuous, because a break restarts waiting periods.',
        'Recalculate the date each year with actual numbers. The date moves when spending, income or returns move, and pretending otherwise is how a plan becomes a hope.',
      ] },
      sim('l5-independence-number', 'Set your spending, the discretionary share and the withdrawal rate, and see the number, the date, and what each assumption does to both.'),
      l5Illustrative('The spending figures, returns and dates in this chapter and its lab are invented for teaching. The rule that at least 20% of a pension corpus must buy an annuity, with up to 80% available as a lump sum, is the real regulatory position verified on 15 October 2026 and linked below.'),

      { kind: 'p', text: 'One honest limit belongs at the end of this chapter. The multiples above come from historical return sequences in particular markets, and they are used here as a way of reasoning rather than as a promise. Nobody can tell you the safe withdrawal rate for the next forty years, because it depends on returns that have not happened. What you can control is the margin: a lower withdrawal rate, a life with a large discretionary share, and separate provision for health and for the expenses that arrive whole.' },
      { kind: 'terms', items: [
        { term: 'Financial independence', meaning: 'The point at which income from assets covers the life you have chosen, so that paid work becomes optional.' },
        { term: 'Multiple', meaning: 'The corpus expressed as a multiple of one year of spending, which is the same as the inverse of the withdrawal rate.' },
        { term: 'Withdrawal rate', meaning: 'The percentage of the corpus taken as income each year, which is a choice about margin rather than a market fact.' },
        { term: 'Discretionary spending', meaning: 'The part of your spending you could cut without changing how you live, which is the shock absorber in a bad decade.' },
        { term: 'Sequence risk', meaning: 'The risk that poor returns early in a withdrawal phase do more damage than the same average returns in a different order.' },
      ] },
      l5Sources(['pfrda', 'sebi'], [
        'The exit rules and the requirement that a minimum share of a pension corpus buy an annuity, which is the only income designed not to be outlived',
        'The investor education material on systematic withdrawals and on the risk of drawing down a corpus without a plan',
      ]),
    ],
    quiz: [
      {
        q: 'Two people have the same corpus. One spends twice as much as the other. Who is closer to independence?',
        options: [
          { text: 'The higher spender, because a larger life needs more capital to be worth funding', why: 'Independence is measured against the life the corpus has to fund, so more spending means a higher target.' },
          { text: 'The lower spender, at the same multiple, because the target is a multiple of spending and theirs is half as large', correct: true, why: 'The corpus only matters in relation to what it has to cover. Halving the need halves the target, which is why the spending decision is the faster lever.' },
          { text: 'They are equally close, because the corpus is the same', why: 'A corpus is not a score. It is a resource measured against a requirement.' },
          { text: 'It depends only on their investment returns', why: 'Returns affect the time to reach a target. They do not change what the target is.' },
        ],
      },
      {
        q: 'Why is a lower withdrawal rate a decision about margin rather than about forecasting?',
        options: [
          { text: 'Because it guarantees the corpus never runs out', why: 'Nothing guarantees that. A low rate makes ruin much less likely, which is not the same thing.' },
          { text: 'Because nobody can know future returns, so the rate encodes how much room you want for inflation, health costs and a bad first decade', correct: true, why: 'The rate is chosen before the returns are known, which is precisely why the choice should be about how much margin the plan needs rather than about a predicted number.' },
          { text: 'Because the regulator sets a maximum withdrawal rate', why: 'No regulator sets a withdrawal rate from your own portfolio. The rules apply to pension products, not to your corpus.' },
          { text: 'Because a lower rate earns a higher return', why: 'Withdrawing less does not change the return on what remains; it preserves more capital to earn that return.' },
        ],
      },
      {
        q: 'Why is health cover treated as a separate line rather than part of monthly spending?',
        options: [
          { text: 'Because premiums are optional after retirement', why: 'They are not optional if you want cover, and dropping cover is the decision that ends the most plans.' },
          { text: 'Because premiums rise with age in a way that a fixed monthly figure cannot capture, and a break in cover restarts waiting periods', correct: true, why: 'Health costs are the largest unindexed line in most retirement plans, and continuity of cover is what makes a pre-existing condition insurable later.' },
          { text: 'Because it is tax-deductible', why: 'Deductions may be available, but the reason to separate it is the shape of the cost, not the tax.' },
          { text: 'Because insurers require a separate account', why: 'There is no such requirement. The separation is a planning decision.' },
        ],
      },
    ],
    takeaway: 'Choose the multiple deliberately and fund essentials first, because a corpus is only a resource against a requirement — and the requirement is the fastest thing you can change.',
  },

  'l5-037': {
    id: 'l5-037',
    title: 'FIRE',
    subtitle: 'The gap years, and the decade of returns that decides them.',
    minutes: 12,
    blocks: [
      scene('fire-timeline', 'The years of paying in, the date you stop, the exposed stretch before the pension is available, and the horizon the money has to reach.'),
      { kind: 'p', text: 'FIRE — financial independence, retire early — is a retirement plan with two features added. The accumulation phase is compressed, so a larger share of the corpus comes from contributions than from compounding. And there is a gap between the day you stop working and the day the pension system opens, which in India is generally sixty. In that gap, nothing arrives automatically.' },
      { kind: 'p', text: 'Compression and a gap change the risk, not the arithmetic. A plan that runs from sixty with a provident fund balance behind it has a fallback; a plan that starts at forty-five has only the corpus, and the corpus has to fund both the gap and the decades after it.' },

      { kind: 'h', text: 'The two risks that early retirement amplifies' },
      {
        kind: 'table',
        caption: 'What an early date changes',
        headers: ['Risk', 'Why it is larger here', 'What reduces it'],
        rows: [
          ['Sequence of returns', 'The corpus is drawn on for longer, so a poor first decade is paid for out of capital that would otherwise have compounded', 'A lower withdrawal rate, a cash and debt buffer for the first years, and a willingness to earn something if the decade is bad'],
          ['The gap years', 'No salary, no provident fund, no pension and no annuity income until sixty, while health cover has to be bought at the age you arrive', 'Fund the gap as its own bucket, and keep health cover continuous from the day you stop'],
          ['Health costs', 'Premiums rise with age and a break in cover restarts waiting periods, which can make a condition uninsurable later', 'Buy cover before you retire, never let it lapse, and budget the premium as an indexed line'],
          ['Purpose and structure', 'Work supplies a routine and often a social life, and the plan has to replace them without replacing the spending', 'Decide what the days are for before the date, and test the plan with a long break first'],
        ],
      },
      l5Rule(
        'Health cover is a continuity decision, not a purchase',
        'Health insurance regulation now gives a policyholder real protection for staying insured. After five years of continuous coverage — reduced from eight, with effect from April 2024 — the policy enters a moratorium, after which a claim cannot be rejected on grounds other than fraud or non-disclosure, and the insurer cannot impose fresh waiting periods. The waiting period before a pre-existing condition is covered is capped at thirty-six months. The practical consequence for anyone contemplating early retirement is the whole point of this chapter: a lapse in cover between jobs, or between a salaried policy and an individual one, restarts the clock, and a new policy bought at fifty with a history is priced accordingly. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'Stress the plan before you choose the date' },
      { kind: 'p', text: 'The right way to test an early retirement is not to ask whether it works if returns are average. It is to ask what happens if the first decade is poor — because a decade of low returns at the start of a withdrawal phase is the scenario that ends plans, and it is not a remote one. Two repairs are available and both are cheap. The first is a buffer: two to three years of spending in cash and short debt, so a bad market year is survived by not selling. The second is flexibility: a plan that allows a few years of part-time work, or a cut in discretionary spending, survives a decade that a rigid plan does not.' },
      { kind: 'p', text: 'Note also what the gap does to the arithmetic of the corpus. If you stop at forty-five and the pension is available at sixty, fifteen years of spending comes out of the corpus before anything arrives to help. At today\'s prices that might be ₹80 lakh, and it is the single largest item in the plan — larger than any difference in the return you assume, because it is certain where the return is not.' },
      { kind: 'list', ordered: true, items: [
        'Fund the gap years as a separate bucket, in instruments whose value does not depend on the market.',
        'Keep health cover continuous through the transition, and treat the premium as an indexed cost, not a fixed one.',
        'Test the plan against a first decade of poor returns, and write down what you would do if it happened.',
        'Decide the discretionary share of spending you could cut, and check that the plan still works at that lower number.',
        'Take a long break before committing to a permanent one, because a plan is a model of a life, and the life is the part that is hard to forecast.',
      ] },
      sim('l5-fire-stress-test', 'Set an early date, give the first decade poor returns, and raise health premiums with age. Then watch which year the money runs out and which repair defers it.'),
      l5Illustrative('The expenses, returns and dates in this chapter and its lab are invented for teaching. The five-year moratorium on health insurance after continuous coverage, the thirty-six-month cap on the pre-existing-disease waiting period, and the pension exit rules are the real positions verified on 15 October 2026 and linked below.'),

      { kind: 'p', text: 'The honest summary is that FIRE is not a different kind of plan; it is the same plan with less time to correct it. Everything in the retirement chapter still applies — the inflated target, the streams, the annuity question — and two new constraints are added: a gap with no income at all, and a longer exposure to the returns that arrive first. A plan that handles those two is not optimistic, it is just properly stressed. A plan that ignores them is a savings target with a date attached.' },
      { kind: 'terms', items: [
        { term: 'Lean and fat FIRE', meaning: 'Descriptions of how much the early-retirement life costs: a lean plan cuts spending to the essentials, a fat one keeps it generous.' },
        { term: 'Sequence risk', meaning: 'The damage done by poor returns early in a withdrawal phase, which is larger than the same average returns in a different order.' },
        { term: 'Moratorium', meaning: 'The point after a set period of continuous health cover at which a claim cannot be rejected except for fraud or non-disclosure.' },
        { term: 'Buffer', meaning: 'Cash and short-term debt held so that market years are funded without selling anything at a loss.' },
        { term: 'Gap years', meaning: 'The period between stopping work and the date at which a pension, provident fund or annuity becomes available.' },
      ] },
      l5Sources(['pfrda', 'irdai', 'sebi'], [
        'The exit age and the withdrawal rules for the pension system, which decide how long the gap years last',
        'The health-insurance rules on the moratorium after continuous coverage and on the maximum waiting period for a pre-existing condition',
        'The framework for funds and withdrawals, including the disclosure of exit loads and the treatment of a systematic withdrawal plan',
      ]),
    ],
    quiz: [
      {
        q: 'Why does an early retirement depend more on the order of returns than a later one?',
        options: [
          { text: 'Because markets are more volatile for younger investors', why: 'Volatility is a property of the market, not of the investor\'s age.' },
          { text: 'Because the corpus is drawn on for longer, so money sold in a bad decade is money that never compounds again', correct: true, why: 'The same average return in a different order produces different outcomes when withdrawals are being made, and a longer withdrawal phase exposes the plan to more of that effect.' },
          { text: 'Because taxation is higher before sixty', why: 'Tax depends on the asset and the holding period. It is not a function of when you retire.' },
          { text: 'Because pensions pay more to those who wait', why: 'The pension system may pay more for deferment, but that is not what makes sequence risk larger.' },
        ],
      },
      {
        q: 'You stop work at 45 and buy a fresh health policy at that age with a medical history. What has that cost you?',
        options: [
          { text: 'Nothing, because pre-existing conditions must be covered immediately', why: 'There is a waiting period, capped at thirty-six months, before cover for a pre-existing condition begins.' },
          { text: 'The waiting period starts again, and the premium is priced at your current age, with a condition that may be excluded for years', correct: true, why: 'Continuity is the asset. A break in cover resets the clock and discards the progress towards the moratorium after which claims cannot be rejected.' },
          { text: 'Only a higher premium, because cover is otherwise the same', why: 'The waiting period on a pre-existing condition is the larger cost, because it is exactly when a claim is most likely.' },
          { text: 'Nothing, if the previous employer covered you', why: 'A group policy ends with the employment. The continuity that matters is your own policy, kept without a gap.' },
        ],
      },
      {
        q: 'What is the argument for funding the gap years separately rather than inside the main portfolio?',
        options: [
          { text: 'Because it earns a higher return in cash', why: 'Cash earns less. The reason is certainty of value, not return.' },
          { text: 'Because the need is certain and close, while the portfolio is volatile, so funding it from a separate bucket avoids selling in a bad year', correct: true, why: 'Money needed in a known window should not depend on the market of that window. Separating it turns a market risk into a planning decision.' },
          { text: 'Because the pension system requires it', why: 'No rule requires it. It is a choice that makes the plan robust.' },
          { text: 'Because cash is not counted in the corpus', why: 'It is counted; it is simply held where its value does not move.' },
        ],
      },
    ],
    takeaway: 'Stress the plan against a poor first decade, fund the gap years in something that does not fall, and keep health cover unbroken — because a plan that needs everything to go well is a date rather than a decision.',
  },

  'l5-038': {
    id: 'l5-038',
    title: 'Savings Rate',
    subtitle: 'The one input you control every month.',
    minutes: 10,
    blocks: [
      scene('rate-lever', 'Years to a funded life at each savings rate, on the same real return: the lever is not the return, it is the rate.'),
      { kind: 'p', text: 'The savings rate is the share of income that is not spent, and it is the only input in a financial plan that you decide every month. Return has to be forecast, inflation has to be estimated, and longevity is unknown. The rate is delivered by a decision, and it compounds in the same way returns do — except that it never disappoints.' },
      { kind: 'p', text: 'Measured honestly, the rate has a definition attached: gross or net income. On gross income it cannot be flattered by a smaller tax bill or a larger deduction, which is why it is the better measure. It also makes the rate comparable across years, job changes and regimes, which the net version does not.' },

      { kind: 'h', text: 'What actually moves the rate' },
      {
        kind: 'table',
        caption: 'Three kinds of decision, in the order of their size',
        headers: ['Decision', 'Typical effect on the rate', 'How reversible'],
        rows: [
          ['Housing: rent or a home loan', 'The largest single line for most households, and the hardest to change once signed', 'Reversible only by moving, which costs money'],
          ['Transport and the loan attached to it', 'Large, and often financed at a high rate for a depreciating asset', 'Reversible at the next sale, at a loss'],
          ['Everything else, month to month', 'Small individually, and easily absorbed by rising income without a decision', 'Fully reversible, and the easiest to let drift'],
        ],
      },
      l5Rule(
        'Know your marginal rate before you optimise a deduction',
        'Under the income tax framework for tax year 2026-27 the new regime is the default, with a standard deduction of ₹75,000 for salary income, and a rebate that extinguishes tax on taxable income up to ₹12 lakh, with marginal relief just above it. The practical consequence for a savings rate is that a rupee of additional income is taxed at your marginal slab rate, while a deduction is worth the same rate only where the deduction is allowed — and in the new regime most of them are not. So the arithmetic that decides whether to save for a deduction, or to take the money and invest it yourself, is a comparison of a certain relief now against a future tax on a larger corpus. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'Why the rate beats the return' },
      { kind: 'p', text: 'Ten percentage points of extra return would move most plans forward by years, and nobody can promise them. Ten percentage points of extra saving is a decision, and the same years come out of it. The lab makes the asymmetry visible: raising the rate moves the date forward by more than lowering it pushes it back, because a rupee saved early is a rupee that compounds for the whole term, while a rupee spent is simply gone.' },
      { kind: 'p', text: 'Two honest qualifications. A very high rate is easier to reach on a high income than through discipline, and pretending otherwise makes the advice useless to anyone whose fixed commitments — rent and loan instalments in the same city as the job — take half their take-home. And a rate that is achieved by removing everything pleasant is a rate that does not survive the year. The realistic target is a rate that holds in a bad month as well as a good one, because it is the months that decide the average.' },
      { kind: 'list', items: [
        'Measure on gross income, and measure the same way every year.',
        'Review the fixed commitments annually, because they are what the rate is actually made of.',
        'Automate the transfer on the day income arrives, so the rate is a decision made once rather than a negotiation each month.',
        'Raise the rate when income rises, before the new income becomes part of the baseline: half of every increase is a rule that survives.',
        'Treat a windfall as income to be saved at a higher rate rather than as a month with no expenses.',
      ] },
      sim('l5-savings-rate-lab', 'Enter income, deductions and the three big commitments, and see the rate on gross and net, the funded date, and what ten points of rate does to it.'),
      l5Illustrative('The incomes and expenses in this chapter and its lab are invented for teaching. The slab structure, the ₹75,000 standard deduction, the rebate that extinguishes tax on taxable income up to ₹12 lakh and the marginal relief above it are the real rules for tax year 2026-27 verified on 15 October 2026 and linked below.'),

      { kind: 'p', text: 'The final point is about what the rate is for. A savings rate is not a virtue; it is the mechanism that converts income into a corpus, and the corpus is what buys time, options and the ability to say no. Someone saving 40% is not more disciplined than someone saving 15%; they may simply have lower fixed costs or a higher income. The useful question is never whether the rate is respectable, but whether an extra point is available without making the life worse — and if it is, it is usually the cheapest thing in the plan.' },
      { kind: 'terms', items: [
        { term: 'Savings rate', meaning: 'The share of income not spent, measured on gross income so that it is comparable across years and cannot be flattered by deductions.' },
        { term: 'Marginal rate', meaning: 'The rate of tax on the next rupee of income, which is what a deduction or an extra earning decision is actually worth.' },
        { term: 'Fixed commitments', meaning: 'Rent and loan instalments, which decide how much of a rate is available before any month-to-month decision is made.' },
        { term: 'Pay yourself first', meaning: 'Transferring savings on the day income arrives, so the rate is decided once rather than negotiated every month.' },
        { term: 'Lifestyle inflation', meaning: 'The tendency of spending to rise with income, which quietly lowers the rate unless part of each increase is saved by rule.' },
      ] },
      l5Sources(['incometax'], [
        'The slab rates, the standard deduction, the rebate and the marginal relief that apply for the year — these decide the marginal value of a deduction and of an extra rupee of income',
      ]),
    ],
    quiz: [
      {
        q: 'Two households save the same rupee amount. One earns twice as much. Whose savings rate is higher, and does it matter?',
        options: [
          { text: 'The higher earner, because the same rupees are a smaller share of income', why: 'It is the reverse: the same amount is a smaller share of the larger income, so their rate is lower.' },
          { text: 'The lower earner, and it matters because the rate is what determines the date, not the amount', correct: true, why: 'The date depends on the share of income saved and the share of income needed later. An amount without the income it comes from cannot be compared across households.' },
          { text: 'They are equal, because the amount saved is equal', why: 'The rate is a ratio. Equal amounts on different incomes are different rates.' },
          { text: 'It cannot be compared', why: 'It can, provided both are measured on the same basis — which is why gross income is the right denominator.' },
        ],
      },
      {
        q: 'Why is the savings rate measured on gross income rather than take-home pay?',
        options: [
          { text: 'Because gross income is larger, so the rate looks better', why: 'The rate comes out lower on gross, not higher. That is not the reason.' },
          { text: 'Because gross income is not affected by the size of a deduction or a regime choice, so the rate is comparable across years and jobs', correct: true, why: 'A rate that rises because a deduction shrank is not an improvement in saving. Measuring on gross keeps the number honest and comparable.' },
          { text: 'Because taxation is ignored in planning', why: 'Tax is planned explicitly, in the chapter before this one. It simply should not be allowed to flatter the ratio.' },
          { text: 'Because provident fund contributions are pre-tax', why: 'Some contributions are pre-tax and some are not, which is exactly why a measure that depends on the mix is not comparable.' },
        ],
      },
      {
        q: 'Income rises 15% and the savings rate is unchanged in percentage terms. What has happened to the money saved?',
        options: [
          { text: 'Nothing, because the rate is the same', why: 'The rate is a share. An unchanged share of a larger income is more money saved.' },
          { text: 'More money is saved in rupees, which is the point of a rule that saves part of every increase', correct: true, why: 'Keeping the rate constant while income rises means the extra income is shared between spending and saving rather than absorbed entirely by spending.' },
          { text: 'Less, because costs rise with income', why: 'Costs may rise, and that is precisely what keeping the rate constant prevents them from doing to the whole increase.' },
          { text: 'It depends entirely on the return earned', why: 'The return affects what the saved rupees become later, not the amount saved this year.' },
        ],
      },
    ],
    takeaway: 'Measure the rate on gross income, review the fixed commitments that decide it, and raise it by rule when income rises — because the rate is the only input you deliver rather than forecast.',
  },

  'l5-039': {
    id: 'l5-039',
    title: 'Passive Income',
    subtitle: 'Effort, concentration and tax head: three tests before the word applies.',
    minutes: 11,
    blocks: [
      scene('income-stream-types', 'Streams arranged by how much effort they take and which head of income they fall under, because the tax code does not have a passive category.'),
      { kind: 'p', text: 'Passive income is a description of effort rather than a product category. A rental flat, a dividend, a royalty and a business you own but do not run are all called passive, and they are taxed in four different ways, carry four different risks and demand four different amounts of your attention.' },
      { kind: 'p', text: 'So the useful approach is an audit rather than a wish list. Three tests decide whether a stream deserves the name: how many hours a month it costs you, what share of your income stops if one counterparty changes their mind, and which head of income it falls under for tax. A stream that fails two of the three is not passive income; it is a job with an asset attached, or a concentration risk with a yield.' },

      { kind: 'h', text: 'Every stream keeps its own tax head' },
      {
        kind: 'table',
        caption: 'How the common streams are actually taxed',
        headers: ['Stream', 'Head of income', 'What that means in practice'],
        rows: [
          ['Rent', 'House property', 'A standard deduction of 30% of the rent is allowed, and tax is collected at source by the tenant once the rent crosses the annual threshold'],
          ['Dividends', 'Other sources', 'Received after tax has been deducted at source above a small annual threshold, and fully taxable at your slab rate'],
          ['Interest', 'Other sources', 'Fully taxable at your slab rate, with deduction at source on some deposits and not others'],
          ['Royalty or licence fee', 'Other sources or business', 'Depends on whether it is incidental or a business, and the treatment is decided by what you actually do'],
          ['A business you do not run', 'Business income', 'Its own compliance, its own presumptive options for small businesses, and profit that is taxed whether or not it is withdrawn'],
        ],
      },
      l5Rule(
        'Where tax is deducted on the way to you',
        'Two thresholds are worth knowing because they decide who files paperwork on your behalf. Rent attracts tax deducted at source at 10% once it crosses ₹6 lakh in a year — ₹50,000 a month — under the provision that applies to rent of land and buildings, so the tenant deducts it and issues the certificate. A dividend attracts deduction at source at 10% once it crosses ₹10,000 in a year, raised from the earlier ₹5,000. In both cases the deduction is a payment of your tax rather than an additional cost: the full amount is your income, and the amount already deducted is credited against your liability. Verified 15 October 2026.',
      ),

      { kind: 'h', text: 'The three tests, applied' },
      { kind: 'list', ordered: true, items: [
        'Effort: hours a month, converted into rupees an hour before tax. A stream paying ₹15,000 a month for eight hours of work is ₹1,875 an hour, which is excellent; the same rupees for forty hours is a part-time job, and should be compared against the other uses of that time.',
        'Concentration: what share of your income stops if one tenant leaves, one dividend is cut or one platform changes its terms. Above about half, the stream is a dependency, and its risks have become your income\'s risks.',
        'Tax head: rent gets the 30% standard deduction and the property has its own rules on interest and set-off; dividends and interest are taxed in full; a business keeps its own regime. Two streams paying the same rupee can leave you with different amounts.',
        'Reinvestment: a stream that is spent rather than partly reinvested erodes in real terms, because rent and dividends do not rise with prices by themselves.',
        'Continuity: for a rental, budget the vacancy. Two months without a tenant in a year costs more than a month\'s rent, because the outgoings do not stop.',
      ] },
      { kind: 'p', text: 'One claim deserves to be retired. Dividends are not free money arriving from outside your portfolio: a company that pays a dividend has retained less, and the share price adjusts. Rent is not free either; it is the return on capital that is otherwise illiquid and undiversified. Treating a stream as income from nowhere leads to the mistake of spending it while the asset that produces it decays, which is how a portfolio that looked like a second salary ends up as a smaller portfolio.' },
      sim('l5-passive-income-audit', 'List your streams, set the hours each one costs and the vacancy risk, and score them on effort, concentration and the tax each rupee carries.'),
      l5Illustrative('The streams, amounts and hours in this chapter and its lab are invented for teaching. The 30% standard deduction on rental income, the ₹6 lakh annual threshold for tax deducted at source on rent and the ₹10,000 threshold on dividends are the real rules verified on 15 October 2026 and linked below.'),

      { kind: 'p', text: 'The last point is about sequencing. Passive streams are usually built with capital that was saved from active income, so they come late and they come from a portfolio that already exists. That makes them a use of accumulated capital rather than a shortcut to it, which is worth saying plainly in a chapter that sits at the end of a level about mastery. The most reliable passive income is the one produced by a portfolio you already own; the least reliable is the one a seller is describing.' },
      { kind: 'terms', items: [
        { term: 'Passive income', meaning: 'Income that does not require your hours, which is a description of effort rather than a category in the tax code.' },
        { term: 'Standard deduction on rent', meaning: 'The flat 30% reduction allowed against rental income under the house property head, before any other deduction.' },
        { term: 'Tax deducted at source', meaning: 'Tax withheld by a tenant, company or bank and paid on your behalf, credited against your final liability.' },
        { term: 'Concentration risk', meaning: 'The exposure created when one tenant, payer or platform accounts for most of a stream.' },
        { term: 'Reinvestment', meaning: 'Returning part of a stream to the asset that produces it, so that it keeps pace with prices over time.' },
      ] },
      l5Sources(['incometax', 'sebi'], [
        'The heads of income, the standard deduction on house property, and the thresholds at which tax is deducted at source on rent and on dividends',
        'The disclosure rules for genuine yield products and the investor material on how distributions from a scheme differ from a guaranteed payment',
      ]),
    ],
    quiz: [
      {
        q: 'A flat produces ₹30,000 a month and takes twelve hours a year to manage. Is it passive income?',
        options: [
          { text: 'Yes, because the hours are few', why: 'The hours are only one of the three tests. Concentration and the tax head still apply, and the capital itself is undiversified.' },
          { text: 'On the effort test yes, but it fails concentration if it is most of your income, and the capital is locked in one property', correct: true, why: 'Effort, concentration and tax head are separate tests. A low-effort stream can still be a dependency, which is why the audit scores all three.' },
          { text: 'No, because rent is not passive', why: 'Rent can be low-effort. Whether it is passive depends on the hours and on what else you hold.' },
          { text: 'Only if the tenant pays by bank transfer', why: 'The payment method affects the record, not whether the income is passive.' },
        ],
      },
      {
        q: 'Your rent is ₹60,000 a month and your tenant deducts tax at source. What does that mean for your return?',
        options: [
          { text: 'The rent is reduced, so declare the net amount', why: 'The deduction is on account of your tax. The full rent is your income and the deduction is credited against what you owe.' },
          { text: 'The full amount is still your income, the tax is paid on your behalf, and the certificate credits it against your liability', correct: true, why: 'Once rent crosses ₹6 lakh a year the tenant must deduct at 10%. It is a collection mechanism, not a reduction in income.' },
          { text: 'No tax applies, because the tenant has paid it', why: 'Deducted tax is tax paid on account. Your final liability depends on your total income and the rate that applies to it.' },
          { text: 'The standard deduction no longer applies', why: 'The 30% standard deduction under house property is a separate rule and is unaffected by deduction at source.' },
        ],
      },
      {
        q: 'Why is a dividend not free income from your portfolio?',
        options: [
          { text: 'Because it is taxed at your slab rate', why: 'Taxation is real but it is not the main point. The point is where the money came from.' },
          { text: 'Because the company that paid it retained less, so the value of your holding adjusts for the payout', correct: true, why: 'A distribution moves value from the company to you. Spending all of it while treating the holding as unchanged is how a portfolio quietly shrinks.' },
          { text: 'Because dividends are declared twice a year at most', why: 'Frequency does not change the nature of the payment.' },
          { text: 'Because it is subject to deduction at source', why: 'Deduction at source is an administrative detail about who pays the tax first.' },
        ],
      },
    ],
    takeaway: 'Score every stream on effort, concentration and its tax head, reinvest part of what it pays, and remember that it was built from capital you saved rather than replacing the need to save.',
  },
}
