import type { Chapter } from '../../types'

/** Level 2, chapters 68–74: the thinking errors behind financial mistakes. */
export const psychology: Record<string, Chapter> = {
  'l2-068': {
    id: 'l2-068',
    title: 'Financial Psychology',
    subtitle: 'Your biases are more expensive than your mistakes',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'opportunity-fork', caption: 'Every decision closes a path you could have taken. Bias decides which fork you regret.' },
      { kind: 'p', text: 'Financial psychology studies the predictable ways people think about money. The frustrating conclusion of decades of research is that most financial errors are not caused by ignorance — they are caused by normal, universal tendencies in how we attend, remember, and feel.' },
      {
        kind: 'table',
        caption: 'Common biases and their money consequences',
        headers: ['Bias', 'What it does', 'Financial damage'],
        rows: [
          ['Loss aversion', 'Losses hurt more than gains feel good', 'Holding losing investments too long'],
          ['Herding / FOMO', 'Buying what everyone else is buying', 'Buying at the top, panic selling at the bottom'],
          ['Confirmation bias', 'Seeking only supporting information', 'Staying in a bad loan or a failing career'],
          ['Recency bias', 'Extrapolating the recent past', 'Over-investing after a bull run'],
          ['Present bias', 'Favouring now over the future', 'No savings, too much consumption'],
          ['Anchoring', 'Fixating on a first number', 'Paying too much based on the original price'],
          ['Optimism bias', 'Underestimating your own risks', 'Too little insurance and emergency fund'],
          ['Mental accounting', 'Treating money as different kinds', 'Spending "bonus" money faster'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'You cannot remove bias, only build defences in advance',
        text: 'Nobody thinks clearly about money in the moment — at 11pm, at a bank counter, or during a market crash. Biases cannot be willed away at the point of decision, which means defences have to be built while you are calm: automation, written rules, and lists.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Design for your worst day',
        text: 'The right question is not "will I be disciplined?" but "what should happen when I am not?" Build structures so that the tired, rushed or excited version of you still makes a decent choice. That is the whole philosophy behind automation and cooling-off rules.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Automate savings so future you is protected from present you.',
          'Use a 24-hour rule for anything non-essential.',
          'Set decision rules in advance, when you are calm.',
          'Keep a written list of what you own and what you owe.',
          'Suspect any financial advice that arrives with urgency.',
        ],
      },
    ],
    quiz: [
      {
        q: 'The main conclusion of financial psychology is that:',
        options: [
          { text: 'People are simply not capable of managing money', correct: false, why: 'Overly pessimistic and not the finding.' },
          { text: 'Most financial errors come from universal biases rather than from ignorance', correct: true, why: 'Exactly right.' },
          { text: 'Only some people are affected by bias', correct: false, why: 'Bias is near-universal, which is the problem.' },
        ],
      },
      {
        q: 'The practical response to your own bias is to:',
        options: [
          { text: 'Rely on willpower in the moment of decision', correct: false, why: 'Unreliable exactly when it is needed.' },
          { text: 'Build systems and rules in advance, when you are calm', correct: true, why: 'Exactly right.' },
          { text: 'Avoid thinking about money', correct: false, why: 'That avoids nothing.' },
        ],
      },
      {
        q: 'Mental accounting refers to:',
        options: [
          { text: 'Keeping accurate books', correct: false, why: 'Different thing.' },
          { text: 'Treating different pools of money as psychologically different', correct: true, why: 'Exactly right.' },
          { text: 'Budgeting by category', correct: false, why: 'Budgeting is the discipline; mental accounting is the bias.' },
        ],
      },
    ],
    takeaway: 'Most financial errors come from universal biases, not ignorance. You cannot remove bias in the moment, so build defences in advance: automation, rules and lists.',
  },

  'l2-069': {
    id: 'l2-069',
    title: 'FOMO',
    subtitle: 'Buying at the top because everyone else is',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'fomo-chase', caption: 'Attention peaks at the top, which is exactly when the worst purchases happen.' },
      { kind: 'p', text: 'Fear of Missing Out is the anxiety that you are missing an opportunity others are capturing. In markets it produces the most reliable pattern of loss: buying when every conversation is about the asset, and selling when nobody mentions it.' },
      {
        kind: 'table',
        caption: 'The FOMO cycle',
        headers: ['Stage', 'What you feel', 'What is actually happening'],
        rows: [
          ['Silence', 'Boredom, "I should start"', 'Nobody is interested — best entry'],
          ['Early chatter', 'Curiosity', 'Some informed interest'],
          ['Enthusiasm', 'Urgency, "now or never"', 'Late entrants arriving'],
          ['Everyone talking', 'FOMO at its peak', 'Most retail money already in'],
          ['Silence again', 'Shame, "I am out"', 'Price has collapsed'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Attention is the signal, not the information',
        text: 'When an asset is discussed everywhere, the price already reflects that attention. The information you are getting is not new — it is the reason the price is high. By the time something is easy to discuss, the easy money has been made.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'The same force works in consumer spending',
        text: 'FOMO is not only financial. Limited-stock urgency, "everyone is wearing this", and group trips apply identical pressure to purchases. The mechanism is identical, so the defence is identical: a waiting period and a question about what you would buy without the social pressure.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Pre-commit before the feeling arrives',
        text: 'Write down now: what you will invest, how much per month, and on what schedule. Then follow it regardless of what is happening. A rule made calmly in advance is nearly impossible for a frightened, excited person to override.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Invest on a schedule, not on news or conversation.',
          'Ignore investment advice from people who found it profitable.',
          'Notice when you want to act because everyone else is.',
          'Apply the 24-hour rule to impulsive consumer purchases.',
          'Remember that nobody regrets missing a rally; many regret chasing one.',
        ],
      },
    ],
    quiz: [
      {
        q: 'FOMO in investing most reliably leads to:',
        options: [
          { text: 'Buying after enthusiasm peaks, then selling during the silence', correct: true, why: 'Exactly right.' },
          { text: 'Buying early and holding patiently', correct: false, why: 'That is the opposite.' },
          { text: 'Avoiding risk entirely', correct: false, why: 'Not usually.' },
        ],
      },
      {
        q: 'When an asset is widely discussed, that attention is:',
        options: [
          { text: 'Evidence the asset is undervalued', correct: false, why: 'Usually the opposite.' },
          { text: 'Already reflected in the price, which is why easy discussion comes late', correct: true, why: 'Exactly right.' },
          { text: 'A reliable buy signal', correct: false, why: 'It is more often a sell signal.' },
        ],
      },
      {
        q: 'The most effective defence against FOMO is to:',
        options: [
          { text: 'Follow your friends\' tips', correct: false, why: 'They may be late too.' },
          { text: 'Decide your plan calmly in advance and follow it regardless of chatter', correct: true, why: 'Exactly right.' },
          { text: 'Trade more frequently to stay informed', correct: false, why: 'That increases costs and risk.' },
        ],
      },
    ],
    takeaway: 'FOMO makes you buy when attention peaks and sell when nobody cares. Commit to a plan calmly in advance, then follow it regardless of what everyone is discussing.',
  },

  'l2-070': {
    id: 'l2-070',
    title: 'Herd Mentality',
    subtitle: 'Doing what everyone does, with everyone else\'s money',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'fomo-chase', caption: 'The crowd arrives at the top. That is the whole problem.' },
      { kind: 'p', text: 'Herd mentality is following the crowd because it feels safer than being wrong alone. It is occasionally informative — crowds do detect real risk — but as an investment strategy it has no edge at all, because you are then acting on exactly the same information as everyone else.' },
      {
        kind: 'table',
        caption: 'Herding in Indian financial life',
        headers: ['Where you see it', 'What it produces'],
        rows: [
          ['Everyone buys the same "safe" stock', 'Buying at the top'],
          ['Real estate as the universal wealth answer', 'Overpaying in cities with no jobs'],
          ['Gold as a universal crisis hedge', 'Buying at record highs'],
          ['Children\'s education as the sole priority', 'Under-funding retirement'],
          ['Taking a home loan to the maximum tenure', 'Optimising EMI, not total cost'],
          ['Following the largest WhatsApp group tip', 'Buying late, exiting early'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Popular and correct are different things',
        text: 'By the time an asset is universally recommended, the easy gains are gone. A useful test: if a sensible person gave you the recommendation with no money involved, would you still want it? Most crowd recommendations fail this test once the crowd is stripped away.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Consensus is dangerous in single-asset households',
        text: 'If everyone in your family and office owns the same asset, nobody in your circle is checking whether it is appropriate for you. Losing money together is still losing money — social proof has no bearing on valuation.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Diversify across opinions, not just assets',
        text: 'If everyone you talk to holds only one type of investment, you have a single point of view. Building a diversified portfolio partly means holding something your peers dismiss, so that your decisions are not all derived from the same assumptions.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Ask whether a recommendation survives removing the social proof.',
          'Diversify so you are not exposed to one consensus view.',
          'Be suspicious of any asset described as risk-free by everyone.',
          'Review your portfolio against your own plan, not your peers\' holdings.',
          'Remember that crowded trades exit poorly.',
        ],
      },
    ],
    quiz: [
      {
        q: 'Following the crowd is most dangerous when:',
        options: [
          { text: 'The crowd is small and experienced', correct: false, why: 'Less likely to be a late-cycle crowd.' },
          { text: 'Everyone holds the same asset, so you have no independent check on the decision', correct: true, why: 'Exactly right.' },
          { text: 'You invest gradually', correct: false, why: 'Gradual investing reduces timing risk.' },
        ],
      },
      {
        q: 'A universally recommended asset is:',
        options: [
          { text: 'Guaranteed to perform well', correct: false, why: 'No guarantee exists.' },
          { text: 'Likely already priced for the enthusiasm, so the easy gains are behind', correct: true, why: 'Exactly right.' },
          { text: 'A better investment than an obscure one', correct: false, why: 'Popularity is not a valuation.' },
        ],
      },
      {
        q: 'Diversifying across opinions means:',
        options: [
          { text: 'Holding only what your friends hold', correct: false, why: 'That is herding.' },
          { text: 'Holding some assets your peers dismiss, so you are not relying on one shared view', correct: true, why: 'Exactly right.' },
          { text: 'Avoiding all investments', correct: false, why: 'That is avoidance, not diversification.' },
        ],
      },
    ],
    takeaway: 'Popular is not the same as correct. Ask whether a recommendation survives removing the social proof, and diversify so you are not relying on one shared view.',
  },

  'l2-071': {
    id: 'l2-071',
    title: 'Loss Aversion',
    subtitle: 'Why losing hurts two or three times as much',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'interest-growth', caption: 'The same curve that rewards patience when rising punishes holding when falling.' },
      { kind: 'p', text: 'Loss aversion is the well-documented finding that a loss feels significantly worse than an equivalent gain feels good — typically two to three times worse. It is the single most important behavioural finding in finance, because it explains most bad decisions at both ends of the market.' },
      {
        kind: 'table',
        caption: 'Loss aversion in action',
        headers: ['Situation', 'Rational action', 'The biased action'],
        rows: [
          ['Investment down 40%', 'Sell if the thesis has changed', 'Hold, hoping it recovers'],
          ['Investment up 40%', 'Consider selling some', 'Hold, hoping it rises more'],
          ['Selling at a loss', 'Accept it and move on', 'Hold indefinitely to avoid the loss'],
          ['A share is up 2x', 'Take some profit', 'Ride it to zero out of greed'],
          ['A "guaranteed" scheme failed', 'Report and move on', 'Invest again to recover the loss'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'The end-result fallacy',
        text: 'Because losses loom larger, people hold a losing investment far too long — the pain of realising the loss outweighs the rational move. The money is already lost either way. Selling now frees capital for something working; holding preserves only the hope.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Loss aversion is weaponised against you',
        text: 'Every casino, every "limited time" offer and every recovery scheme is built on this bias. "Get your money back" is the most profitable sentence in marketing, because it targets the part of your brain that cannot tolerate realising a loss. The correct response to a recovery offer is to ask what the original offer was.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Defeat it with pre-commitment',
        text: 'Write your exit conditions down while you are not emotionally involved: what price, what fundamentals, what time horizon. Then follow the written rule. A rule made calmly is almost impossible for a panicked mind to override.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Write exit conditions before entering a position.',
          'Judge a holding on its future prospects, not its purchase price.',
          'Never invest more to "recover" a loss.',
          'Realise that a sunk cost is already gone regardless of your decision.',
          'Report losses quickly and move on.',
        ],
      },
    ],
    quiz: [
      {
        q: 'Loss aversion means:',
        options: [
          { text: 'Gains and losses feel equally', correct: false, why: 'That is the opposite.' },
          { text: 'A loss feels two to three times worse than an equal gain feels good', correct: true, why: 'Exactly right.' },
          { text: 'Most people lose money', correct: false, why: 'Unrelated.' },
        ],
      },
      {
        q: 'The end-result fallacy causes you to:',
        options: [
          { text: 'Sell investments too early to avoid regret', correct: false, why: 'Not the typical effect.' },
          { text: 'Hold a losing investment too long because realising the loss feels worse', correct: true, why: 'Exactly right.' },
          { text: 'Ignore all market news', correct: false, why: 'Unrelated.' },
        ],
      },
      {
        q: 'The most effective defence against loss aversion is to:',
        options: [
          { text: 'Never invest', correct: false, why: 'Avoidance is not the answer.' },
          { text: 'Set exit rules in advance, while not emotionally involved', correct: true, why: 'Exactly right.' },
          { text: 'Check prices more often', correct: false, why: 'That increases emotional exposure.' },
        ],
      },
    ],
    takeaway: 'Losses feel two or three times heavier than equal gains, which keeps you holding losers and chasing losses. Set exit rules in advance, and never invest more to recover a loss.',
  },

  'l2-072': {
    id: 'l2-072',
    title: 'Confirmation Bias',
    subtitle: 'Only hearing what you already believed',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'shield', caption: 'You are holding up the evidence that supports you, and filtering out everything else.' },
      { kind: 'p', text: 'Confirmation bias is the tendency to seek, notice and remember information that supports what you already believe, and to dismiss the rest. In finance it appears as holding a bad investment because you only read bullish commentary, or continuing in a bad career because you only hear from people who made it.' },
      {
        kind: 'table',
        caption: 'Where confirmation bias shows up',
        headers: ['Context', 'Biased behaviour'],
        rows: [
          ['An investment you hold', 'Following only accounts that agree with you'],
          ['A business you run', 'Reading only customers, ignoring the ones who left'],
          ['A career decision', 'Hearing only from people who succeeded'],
          ['A purchase', 'Reading reviews that ignore the complaints'],
          ['A financial belief', 'Treating contradicting evidence as foolishness'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'The most reliable position is a pre-mortem',
        text: 'Before a major decision, write down how it could fail. Assume it has already failed and explain why. This forces you to engage with disconfirming evidence deliberately, at a moment when you can still act on it.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Your feed is not a research department',
        text: 'Social media algorithms optimise for engagement, not accuracy. Financially, the most vocal opinions are frequently the least informed. If your information comes entirely from a feed, you have a narrow, distorted view — and you have no idea which parts are distorted.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Actively seek the other side',
        text: 'For any significant decision, deliberately read the strongest argument against your position. If you cannot find one, you are probably not looking hard enough — most real financial decisions have serious counterarguments.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Write a pre-mortem before any major financial decision.',
          'Deliberately read the best case against your position.',
          'Notice when you dismiss data because it is inconvenient.',
          'Keep a written record of why you made each decision.',
          'Follow sources that disagree with you, not only those that agree.',
        ],
      },
    ],
    quiz: [
      {
        q: 'Confirmation bias means:',
        options: [
          { text: 'Agreeing with the majority', correct: false, why: 'That is herd mentality.' },
          { text: 'Seeking and remembering only information that supports your existing view', correct: true, why: 'Exactly right.' },
          { text: 'Double-checking your figures', correct: false, why: 'That is diligence.' },
        ],
      },
      {
        q: 'A pre-mortem is a technique where you:',
        options: [
          { text: 'Estimate the likely profit', correct: false, why: 'Not what a pre-mortem does.' },
          { text: 'Write out in advance how the decision could fail, assuming it already has', correct: true, why: 'Exactly right.' },
          { text: 'Review past decisions', correct: false, why: 'That is a post-mortem.' },
        ],
      },
      {
        q: 'Why is a social media feed a poor research source?',
        options: [
          { text: 'Because it is always wrong', correct: false, why: 'Too strong.' },
          { text: 'Because it is optimised for engagement rather than accuracy, and there is no way to see what is missing', correct: true, why: 'Exactly right.' },
          { text: 'Because it costs money', correct: false, why: 'It is usually free.' },
        ],
      },
    ],
    takeaway: 'Confirmation bias makes you seek only supporting information. Run a pre-mortem before big decisions, and deliberately read the strongest argument against your position.',
  },

  'l2-073': {
    id: 'l2-073',
    title: 'Instant Gratification',
    subtitle: 'The strongest force working against your savings',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'spend-leak', caption: 'Immediate gratification leaks out of a budget far faster than any one large decision.' },
      { kind: 'p', text: 'Instant gratification is preferring immediate reward over greater future reward. It is not a character flaw — it is the default wiring of a brain evolved over millions of years to solve problems that required immediate action, not one requiring a discount rate of 12% over thirty years.' },
      {
        kind: 'formula',
        label: 'The discount that makes saving feel irrational',
        expr: '₹100 today feels more valuable than ₹120 in three months',
        note: 'That is a roughly 60% annual discount rate. No real investment competes with that.',
      },
      {
        kind: 'table',
        caption: 'How instant gratification leaks money',
        headers: ['Pattern', 'Example'],
        rows: [
          ['Small daily purchases', 'A ₹200 delivery fee applied a hundred times a year'],
          ['Subscription accumulation', 'Nine services at ₹199, each once used'],
          ['Credit deferral', 'Buying today and feeling tomorrow\'s problem is smaller'],
          ['"I will save from next month"', 'Starting saving after a raise, never reaching next month'],
          ['Avoiding the account entirely', 'Not opening an account so there is nothing to check'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'You cannot out-think the discount rate',
        text: 'Trying to feel motivated about a distant goal rarely works. What works is removing the decision: automation, standing instructions, and defaults. The goal is not to become more disciplined — it is to stop requiring discipline.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Credit is engineered for this weakness',
        text: 'Buy-now-pay-later and instant credit are not neutral conveniences. They are specifically designed to exploit present bias — which is why they work so reliably, and why they are so widespread.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Make the good choice the easy one',
        text: 'Automate the saving transfer for payday. Put the savings in an account that is inconvenient to spend from. Unsubscribe from everything as a default. These change behaviour without requiring a change in you.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Automate savings on payday so no decision is required.',
          'Make savings harder to access than spending.',
          'Remove subscriptions you use rarely, on a schedule.',
          'Delay non-essential purchases by 24 hours.',
          'Celebrate completed actions, not intentions.',
        ],
      },
    ],
    quiz: [
      {
        q: 'Instant gratification in money terms means:',
        options: [
          { text: 'Buying the cheapest available option', correct: false, why: 'That is value-seeking.' },
          { text: 'Preferring a smaller reward now over a larger one later', correct: true, why: 'Exactly right.' },
          { text: 'Spending only on things you enjoy', correct: false, why: 'Not the same concept.' },
        ],
      },
      {
        q: 'The most effective response to present bias is to:',
        options: [
          { text: 'Try harder to motivate yourself', correct: false, why: 'Motivation is unreliable.' },
          { text: 'Remove the decision through automation and defaults', correct: true, why: 'Exactly right.' },
          { text: 'Set larger goals', correct: false, why: 'Larger goals feel even less appealing.' },
        ],
      },
      {
        q: 'BNPL products work well because they:',
        options: [
          { text: 'Charge lower interest than cards', correct: false, why: 'Not always.' },
          { text: 'Exploit present bias by turning one purchase into several small immediate-feeling payments', correct: true, why: 'Exactly right.' },
          { text: 'Have no fees at all', correct: false, why: 'They usually do.' },
        ],
      },
    ],
    takeaway: 'Present bias makes distant rewards feel worthless. You cannot out-think a 60% discount rate, so remove the decision: automate saving and make the good choice the easy one.',
  },

  'l2-074': {
    id: 'l2-074',
    title: 'Lifestyle Inflation',
    subtitle: 'Why every raise disappears',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'lifestyle-inflation', caption: 'Income rises, spending rises with it, and savings stay exactly where they were.' },
      { kind: 'p', text: 'Lifestyle inflation is the gradual rise in spending that matches or exceeds every rise in income, so more earning produces no more saving. It is rarely a decision. It is a hundred small approvals, each of which feels entirely reasonable on its own.' },
      {
        kind: 'formula',
        label: 'The mechanism',
        expr: 'If spending rises in line with income, your savings rate never improves',
        note: '₹1 lakh with 10% saved and ₹3 lakh with 10% saved is a 50% lifestyle upgrade and no progress.',
      },
      {
        kind: 'table',
        caption: 'Where lifestyle inflation hides',
        headers: ['Where it shows', 'What changed'],
        rows: [
          ['After a promotion', 'Dining out, delivery, a car upgrade'],
          ['After a bonus', 'Treating it as spendable rather than a windfall'],
          ['After a pay rise', 'A larger flat, more subscriptions'],
          ['After a good year', 'A holiday nobody could previously afford'],
          ['After a raise for the family', 'Private schooling, bigger car, more help'],
          ['With a windfall', 'A purchase that permanently raises the baseline'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'It is not about the amount — it is about the pattern',
        text: 'A ₹1 lakh holiday after a bonus is a fine decision. The same holiday every year is lifestyle inflation. The test is not what you spend but whether your spending baseline has moved permanently.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Windfalls are the biggest opportunity',
        text: 'Bonuses, tax refunds and inheritance arrive as a lump and are the easiest money to save — yet they are most often fully spent. A simple rule that pays for itself: take any windfall, move half of it to savings first, then spend the rest guilt-free.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Save half of every raise',
        text: 'Raise your saving by half of each increment and the rest is genuinely yours to spend. This is the only reliable defence, because it requires no ongoing willpower and it still feels good — you are spending more, just less than you could.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Increase your savings rate by half with every raise.',
          'Save half of every bonus or refund before spending.',
          'Let the saving rate rise first, spending second.',
          'Review your fixed costs annually for drift.',
          'Track your savings rate, not just your balance.',
        ],
      },
      { kind: 'sim', name: 'budget', caption: 'Set your income and see how quickly spending can absorb every increase.' },
    ],
    quiz: [
      {
        q: 'Lifestyle inflation means:',
        options: [
          { text: 'Spending rises with income, so savings never improve', correct: true, why: 'Exactly right.' },
          { text: 'Prices rising every year', correct: false, why: 'That is inflation.' },
          { text: 'Buying cheaper goods than before', correct: false, why: 'The opposite.' },
        ],
      },
      {
        q: 'The most effective defence against lifestyle inflation is to:',
        options: [
          { text: 'Never increase spending at all', correct: false, why: 'Unrealistic and unnecessary.' },
          { text: 'Increase your savings rate by half of every raise', correct: true, why: 'Exactly right.' },
          { text: 'Save every rupee of income', correct: false, why: 'Unsustainable.' },
        ],
      },
      {
        q: 'Windfalls such as bonuses are best handled by:',
        options: [
          { text: 'Spending them entirely, since they are not regular income', correct: false, why: 'They are the easiest money to save.' },
          { text: 'Moving half to savings before spending the rest', correct: true, why: 'Exactly right.' },
          { text: 'Ignoring them', correct: false, why: 'Unrealistic.' },
        ],
      },
    ],
    takeaway: 'Lifestyle inflation is spending rising with income, so savings never improve. Raise your savings rate by half with every increment, and save half of any windfall before spending it.',
  },
}