import type { Chapter } from '../../types'
import { scene, sim } from '../../lib/chapter-blocks'
import { l5Illustrative, l5Rule, l5Sources } from '../../lib/l5-blocks'

/** Level 5, band three, batch 4 — chapters l5-101 to l5-113.
 * The fraud & due diligence half: how to spot pump-and-dump schemes,
 * deepfakes, fake platforms, and other cons, and how to verify
 * before committing money.
 *
 * Facts verified on 15 October 2026 and linked from each chapter.
 */

/** Pump-and-dump schematic: the cascade that makes a thin market look thick. */
export const l5_101: Chapter = {
  id: 'l5-101',
  title: 'Pump-And-Dump Schemes',
  subtitle: 'Recognise a pump-and-dump while it is happening, including the tip-cascade that makes it look popular.',
  minutes: 11,
  blocks: [
    scene('pump-dump-cycle', 'A steep climb on heavy volume, a cascade of "hot tips", and the sudden cliff as the insiders exit.'),
    { kind: 'p', text: 'A pump-and-dump is a coordinated effort to inflate the price of an illiquid asset — typically a micro-cap stock, a thinly traded cryptocurrency, or a penny security — by spreading exaggerated or false claims, then selling the inflated holdings at the peak. The "pump" is the promotion; the "dump" is the exit. The tip-cascade that makes it look popular is the core mechanism: each person who passes on the tip believes they are the first to discover it, but the price only moves because each new entrant adds demand to the already thin order book.' },
    { kind: 'p', text: 'The pump usually follows a pattern. An illiquid asset is quietly accumulated. Then a story spreads — "breakthrough technology", "private placement about to be announced", "regulatory approval imminent" — and social-media groups, messaging lists, or paid promoters amplify it. As the price rises, more retail traders enter, attracted by the rising chart and the fear of missing out. The dump occurs when the promoters or early insiders sell into the newly created demand, causing the price to collapse and the late entrants to be left with an asset they cannot exit without a large loss.' },
    { kind: 'h', text: 'The five tell-tales of a pump-and-dump' },
    { kind: 'list', ordered: true, items: [
      'The asset is illiquid: low daily volume, wide spreads, and a small float make price movements exaggerated.',
      'The promotion is repetitive: the same claims appear across unrelated channels, suggesting a coordinated source.',
      'The claims cannot be verified: no public document, no SEC filing, no audited accounts support the story.',
      'The price rise is disconnected from fundamentals: no earnings, no revenue, no cash flow to justify the level.',
      'The "tips" create a cascade: each new recipient posts the same message, amplifying the original signal without adding new information.',
    ] },
    l5Rule(
      'How to spot a pump-and-dump',
      'If the price rise is driven by promotion rather than by new information about the asset, if the asset has little or no liquidity, and if the promoters stand to gain from your entry, the pattern is a pump-and-dump. The safest response is to decline to buy and, if you already hold the asset, to exit slowly rather than averaging down.',
    ),
    { kind: 'h', text: 'How the simulator works' },
    sim('l5-pump-dump-detective', 'Observe a price chart with artificial volume spikes, read the tip-cascade in the chat feed, and decide when to enter or exit. The lab records your entry price, the peak you saw, and the loss you would have taken if you bought at the top.'),
    l5Illustrative('The price numbers and volume figures in the lab are invented for practice. The pattern — rapid rise on thin volume, the cascade of tips, and the sudden decline when insiders exit — is the real framework verified on 15 October 2026 and linked below.'),
    { kind: 'p', text: 'The deeper point is that a pump-and-dump exploits the gap between information and price. In a liquid market, price reflects new information quickly. In a thin market, a small amount of promotion can move the price far from any fundamental value. The lesson is not to try to time the exit — it is to recognise the pattern before committing capital.' },
    { kind: 'terms', items: [
      { term: 'Pump', meaning: 'Coordinated promotion that inflates the price of an illiquid asset through exaggerated or false claims.' },
      { term: 'Dump', meaning: 'The insiders\' exit, selling into the inflated demand and causing the price to collapse.' },
      { term: 'Tip-cascade', meaning: 'A chain of people each passing on the same tip, making it appear widely known when it is actually coordinated.' },
      { term: 'Micro-cap', meaning: 'A company with a very small market capitalisation, typically having low liquidity and high price volatility.' },
    ] },
    l5Sources(['sebi', 'nse', 'bse'], [
      'SEBI regulations on market manipulation and the unauthorised dissemination of price-sensitive information',
      'NSE surveillance reports on abnormal price and volume activity, and the exchange\'s investor grievance route',
      'BSE surveillance and listing-compliance disclosures, for the same kind of abnormal price and volume movement',
    ]),
  ],
  quiz: [
    {
      q: 'What is the primary mechanism that makes a pump-and-dump appear popular?',
      options: [
        { text: 'Organised advertising campaigns with a budget', why: 'While advertising can amplify a story, the core mechanism is the tip-cascade, where each recipient independently forwards the tip, creating the appearance of widespread interest without any central budget.' },
        { text: 'The tip-cascade, where each person who receives the tip forwards it to others, making the promotion appear organic and widespread', correct: true, why: 'Each person believes they are the first to discover the opportunity, but the cumulative effect of many people passing on the same tip creates the appearance of a popular, spontaneous movement.' },
        { text: 'Paid actors posting on social media', why: 'Paid actors can contribute, but the pump-and-dump pattern works even without them, through the natural cascade of word-of-mouth forwarding.' },
        { text: 'Regulatory filings that suddenly become positive', why: 'Pump-and-dumps rely on misinformation or unverified claims, not on legitimate disclosures.' },
      ],
    },
    {
      q: 'Which of the following is the most reliable sign that a price rise is a pump-and-dump?',
      options: [
        { text: 'The asset has high daily trading volume and tight spreads', why: 'High volume and tight spreads are signs of a liquid market, which makes a pump-and-dump harder to execute.' },
        { text: 'The price rise is accompanied by a cascade of unverified "hot tips" across unrelated channels', correct: true, why: 'The tip-cascade is the hallmark of a pump-and-dump: many people passing on the same tip without new information, creating the appearance of widespread interest.' },
        { text: 'The company has announced a new product line and earnings are rising', why: 'A genuine business development would be supported by audited financials and public disclosures, not by vague claims.' },
        { text: 'The asset is listed on a major exchange with many analysts covering it', why: 'Major exchanges and analyst coverage provide transparency, which makes a pump-and-dump difficult to sustain.' },
      ],
    },
    {
      q: 'After the "dump", what typically happens to the asset\'s price?',
      options: [
        { text: 'The price stabilises at a slightly lower level as the market absorbs the new supply', why: 'In a thin market, the price can collapse sharply because there are few buyers at any price.' },
        { text: 'The price collapses as the insiders sell into the inflated demand, leaving late entrants with an asset they cannot exit without a large loss', correct: true, why: 'The dump is the exit of the insiders or early promoters. In an illiquid market, even a modest sale can swamp the bid side, and the price falls rapidly.' },
        { text: 'The price continues to rise as more investors enter the "re-accumulation" phase', why: 'The dump by definition ends the inflation phase; any further rise would require new fundamental demand.' },
        { text: 'The exchange automatically suspends trading until the price is verified', why: 'Exchanges may halt trading for volatility reasons, but there is no automatic price-verification mechanism that prevents a collapse.' },
      ],
    },
    {
      q: 'You see a micro-cap stock double in two days on heavy promotional messages in your messaging groups. What should you do?',
      options: [
        { text: 'Buy immediately, because the price will keep rising as more people discover it', why: 'In a thin market, the price can move quickly in either direction, and chasing the rise often means buying at the top.' },
        { text: 'Treat it as a potential pump-and-dump: verify the claims, check the company\'s financials, and do not buy until you can confirm the rise is based on fundamentals', correct: true, why: 'The defining characteristic of a pump-and-dump is a price rise driven by promotion rather than by new information. Until you can verify the fundamentals, the safest action is to stay out.' },
        { text: 'Wait for the company to file a press release, because only verified news can move the price sustainably', why: 'A press release may help, but even verified news about a micro-cap can be misleading if the company has no viable business model.' },
        { text: 'Set a limit order at the current price, because the trend is your friend', why: 'Trend-following does not work when the trend is artificially created by a pump-and-dump.' },
      ],
    },
  ],
  takeaway: 'A pump-and-dump exploits the gap between promotion and fundamentals in thin markets. The tip-cascade makes it look popular, but the price rise is not supported by verifiable information. The safest response is to recognise the pattern and decline to buy.',
}