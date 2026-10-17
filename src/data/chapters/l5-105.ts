import type { Chapter } from '../../types'
import { scene, sim } from '../../lib/chapter-blocks'
import { l5Illustrative, l5Rule, l5Sources } from '../../lib/l5-blocks'

/** Level 5, band three, batch 4 — chapters l5-101 to l5-113.
 * The fraud & due diligence half: crypto scams, and how to judge claims.
 *
 * Facts verified on 15 October 2026 and linked from each chapter.
 */

/** Crypto custody layers: the custody, verification and exit reality check. */
export const l5_105: Chapter = {
  id: 'l5-105',
  title: 'Crypto Scams',
  subtitle: 'Judge crypto claims by custody, verification and exit reality, not by the returns quoted.',
  minutes: 12,
  blocks: [
    scene('crypto-custody-layers', 'A three-layer diagram: on-chain custody, exchange custody, and self-custody. Each has different risk and exit properties.'),
    { kind: 'p', text: 'Crypto scams typically begin with a promise of guaranteed returns, "risk-free" income, or opaque "trading strategies" that generate consistent monthly profits. The scam may operate as a fake exchange, a "mining pool", a "staking program", or a "lending" platform that pays high interest. The returns quoted look real, and the platform may show a dashboard with growing balances. The critical question is not what returns are quoted, but whether the user actually controls the private keys, whether the platform is registered with the regulator, and whether the promised exit is real.' },
    { kind: 'p', text: 'The three custody layers matter. In on-chain custody, you hold the private key and the assets are on the public ledger. In exchange custody, the platform holds the key and your balances are entries in a private database. In self-custody using a hardware wallet, you control the key but bear full responsibility for loss or theft. Scams almost always use exchange custody or a fake on-chain interface, and the promised returns are funded by new entrants\' deposits rather than by any real trading or lending activity. When the platform stops allowing withdrawals, or when the "trading strategy" changes, the realised loss falls on the last entrants.' },
    { kind: 'h', text: 'The three exit reality checks' },
    { kind: 'list', ordered: true, items: [
      'Can you withdraw to your own wallet? If the platform requires you to keep funds on-platform, or makes withdrawal difficult, the custody is not yours.',
      'Is the provider registered where the law requires it? Virtual digital asset service providers must register with the Financial Intelligence Unit under the money-laundering framework, while the RBI has repeatedly warned that virtual currencies are not legal tender and that it has authorised no entity to deal in them.',
      'What is the actual exit path? If the only way out is to find another buyer at a higher price, the "return" is dependent on greater fool theory, not on the platform\'s activity.',
    ] },
    l5Rule(
      'How to judge any crypto claim',
      'Before committing money, check three things: (1) Can you withdraw to a wallet you control? (2) Is the provider registered where the law requires it — for a virtual digital asset service provider, with the Financial Intelligence Unit under the money-laundering rules? (3) Does the return depend on new entrants rather than on real activity? If any answer is unfavourable, the claim is likely a scam. Note that India has no law making crypto legal tender and no dedicated regulator for it, so the registration check is a floor, not a guarantee.',
    ),
    { kind: 'h', text: 'How the simulator works' },
    sim('l5-crypto-claim-check', 'You are shown a crypto platform dashboard with a quoted daily return of 1%. You attempt a small withdrawal and a large withdrawal. The lab records whether the withdrawal succeeds, what obstacles appear, and whether the platform requires you to keep funds on-platform. This trains you to recognise the custody and exit red flags before you face them with real money.'),
    l5Illustrative('The dashboard figures and withdrawal times in the lab are invented for practice. The three exit reality checks — withdrawal control, registration, and return source — are the real framework verified on 15 October 2026 and linked below.'),
    { kind: 'p', text: 'The deeper point is that the quoted return is the least important number. What matters is custody: who holds the private key, whether you can exit, and whether the return is funded by new money rather than by real trading or lending. The lesson is to verify custody and registration before you believe any return number.' },
    { kind: 'terms', items: [
      { term: 'On-chain custody', meaning: 'You hold the private key and the assets are recorded on the public ledger. You have full control and full responsibility.' },
      { term: 'Exchange custody', meaning: 'The platform holds the private key and your balances are entries in a private database. You do not control the key and must trust the platform.' },
      { term: 'Self-custody', meaning: 'You hold the private key on a hardware wallet or secure device. You have full control and full responsibility for loss or theft.' },
      { term: 'Greater fool theory', meaning: 'The price is supported not by real value but by the belief that another buyer (the "greater fool") will pay more.' },
    ] },
    l5Sources(['rbi', 'cyberCrime', 'incometax'], [
      'RBI warnings that virtual currencies are not legal tender, that the RBI has authorised no entity to deal in them, and that anyone dealing in them does so at their own risk',
      'Indian Computer Emergency Response Team (CERT-In) advisories on crypto-related fraud',
      'The 30% tax on income from the transfer of a virtual digital asset, the 1% tax deducted at source on such transfers, and the requirement to report them',
    ]),
  ],
  quiz: [
    {
      q: 'You see a crypto platform that promises a guaranteed 1% daily return on your investment. The platform is not listed on any regulator\'s register. What does this indicate?',
      options: [
        { text: 'The return is guaranteed because the platform is experienced', why: 'No legitimate platform guarantees daily returns, especially not 1%, and an unregistered platform is a strong red flag.' },
        { text: 'The platform is likely a scam: guaranteed returns + unregistered = classic crypto scam pattern', correct: true, why: 'The combination of guaranteed returns (which no legitimate crypto service offers) and the absence from the regulator\'s register are the two strongest red flags. The return is likely funded by new entrants\' deposits.' },
        { text: 'The platform is safe because it has a professional website and dashboard', why: 'A professional interface does not indicate legitimacy or regulation.' },
        { text: 'The return is real because many people are investing in it', why: 'Popularity does not make a claim legitimate; unregulated platforms rely exactly on this effect.' },
      ],
    },
    {
      q: 'Which of the following is the most important question to ask before investing in a crypto platform?',
      options: [
        { text: 'What is the daily return rate?', why: 'The return rate is the least important number; what matters is custody and registration.' },
        { text: 'Can I withdraw my funds to a wallet I control at any time?', correct: true, why: 'Custody is the primary risk. If you cannot withdraw to a wallet you control, the platform holds the key and can restrict or deny your exit.' },
        { text: 'What is the trading strategy that generates the return?', why: 'The strategy may be opaque or nonexistent. Custody and registration are more concrete checks.' },
        { text: 'How long has the platform been operating?', why: 'A long operating history does not guarantee legitimacy; many scams operate for years.' },
      ],
    },
    {
      q: 'You deposit crypto into a platform and are told you cannot withdraw to your own wallet, only to another account on the same platform. What should you do?',
      options: [
        { text: 'Accept it, because most platforms keep funds on-platform', why: 'This is a major red flag. If you cannot withdraw to a wallet you control, you do not have real custody.' },
        { text: 'Treat it as a high-risk situation: you have exchange custody, not self-custody, and the platform can restrict or deny withdrawal at any time', correct: true, why: 'The defining characteristic of exchange custody is that the platform holds the key. If withdrawal to your own wallet is not possible, you are relying entirely on the platform\'s goodwill, which is the primary risk in crypto scams.' },
        { text: 'Try to withdraw a small amount first; if it works, the platform is legitimate', why: 'A small successful withdrawal is the same "bait" pattern seen in fake trading platforms. It does not guarantee large withdrawals later.' },
        { text: 'Move your funds to a different platform that also does not allow withdrawals to personal wallets', why: 'All platforms that do not allow personal withdrawals carry the same risk.' },
      ],
    },
    {
      q: 'A crypto lending platform offers 18% annual interest on your Bitcoin, with monthly payouts. The platform is registered with the RBI. What additional check should you make?',
      options: [
        { text: 'Check whether the interest is paid from real trading or lending activity, or from new entrants\' deposits', correct: true, why: 'The return source is the critical question. Even if the platform is registered, if the yield is funded by new deposits rather than real activity, it is a pyramid-like structure that will collapse when new entrants stop.' },
        { text: 'Check the platform\'s website design and user reviews', why: 'These are secondary to the return-source question.' },
        { text: 'Verify the private key is stored in a hardware security module', why: 'This is technically relevant but less important than the return-source and registration checks.' },
        { text: 'Confirm the platform has insurance for crypto losses', why: 'Insurance is useful but does not address the fundamental question of where the yield comes from.' },
      ],
    },
    {
      q: 'Which of these findings on a crypto platform is the least worrying?',
      options: [
        { text: 'It offers a fixed return of 1% a day whatever the market does', why: 'A fixed daily return is the core of the scheme, because no trading or lending activity produces a fixed daily result. The number is not a forecast; it is the bait.' },
        { text: 'The provider is registered with the Financial Intelligence Unit as a virtual digital asset service provider and publishes reserve attestations', correct: true, why: 'Registration under the money-laundering framework is a verifiable fact, and published reserve attestations are something to test rather than to trust blindly. It is a floor, not a guarantee, but it is the one item on this list that is not a warning.' },
        { text: 'The return is funded by new deposits rather than by any trading or lending activity', why: 'This is the greater-fool pattern: the payout exists only while new money arrives, so the last entrants absorb the whole loss.' },
        { text: 'Withdrawals are allowed only if the balance stays on the platform and a "release fee" is paid first', why: 'A fee charged to release your own money is the exit being closed while it is still called open. It is the clearest sign that custody is not yours.' },
      ],
    },
  ],
  takeaway: 'The quoted return is the least important number. What matters is custody (who holds the private key), whether the provider is registered where the law requires it, and whether the return is funded by real activity or by new entrants\' deposits. Verify all three before committing money.',
}