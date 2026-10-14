import type { Chapter } from '../../types'
export const tricks: Record<string, Chapter> = {
  'l4-102': {
    id: 'l4-102',
    title: 'Financial Trick: Build A Net Worth Tracker',
    subtitle: 'See the whole picture, not just the latest paycheck.',
    minutes: 5,
    blocks: [
      { kind: 'scene', name: 'dashboard', caption: 'Assets minus liabilities is the only number that shows the whole picture.' },
      { kind: 'p', text: "A net worth tracker is a simple habit: once in a while, list what you own, what you owe, and the difference. It forces honesty. A single bank balance can lie because it ignores loans, credit card balances, and investments. Net worth does not care about the noise; it only cares about the gap between what you have and what you owe." },
      { kind: 'h', text: 'Why this trick is worth the bother' },
      { kind: 'list', items: [
        'It shows progress over time, not just the latest spending week.',
        'It makes debt visible in a way a bank balance does not.',
        'It helps you see whether saving, investing, and borrowing are working together.',
        'It gives you a single number to improve, which is easier than juggling ten vague goals.',
      ] },
      { kind: 'callout', tone: 'tip', title: 'Keep it simple and repeatable', text: "The best tracker is the one you actually update. Pick a cadence you can keep — monthly is common — and use a format you will not abandon. A spreadsheet, a notebook, or the app’s own net worth lab all work if you use them consistently. Consistency beats cleverness." },
      { kind: 'example', title: 'What changes the number', text: "Paying down a credit card, adding to an investment, or buying a house can all move net worth in different directions depending on the financing. The point of the tracker is to see those effects in one place instead of only noticing the cash outflow." },
      { kind: 'sim', name: 'networth', caption: 'Add what you own and what you owe, and watch a single net worth number appear.' },
      { kind: 'terms', items: [
        { term: 'net worth tracker', meaning: 'a regular record of assets, liabilities, and net worth, used to monitor financial progress over time.' },
        { term: 'net worth', meaning: 'what you own minus what you owe; the simplest measure of overall financial position.' },
      ] },
    ],
    quiz: [
      {
        q: 'What does a net worth tracker help you see that a bank balance does not?',
        options: [
          { text: 'The full position: what you own, what you owe, and the gap between them over time.', correct: true, why: 'A bank balance only shows one account; net worth shows the whole picture, including debt and other assets.' },
          { text: 'Only how much cash is in your account right now.', correct: false, why: 'That is what a bank balance already shows; the tracker goes beyond one account.' },
          { text: 'Your daily spending on coffee and meals.', correct: false, why: 'Net worth is about assets and liabilities, not the detail of daily expenses.' },
        ],
      },
    ],
    takeaway: 'A net worth tracker turns a scattered financial life into one picture. Update it regularly, keep it simple, and let the gap between assets and liabilities become your real score.',
  },

  'l4-103': {
    id: 'l4-103',
    title: 'Financial Trick: Track Your Subscriptions Visibly',
    subtitle: 'Small recurring charges are easy to forget and hard to ignore once listed.',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'expense-bars', caption: 'Individually small, collectively large — subscriptions are bars that never stop.' },
      { kind: 'p', text: "Subscriptions are the quiet budget leaks of modern life: streaming services, apps, memberships, storage plans, and set-and-forget payments that keep arriving whether you use them or not. The trick is to make them visible. Once you list them, the recurring total often shocks you, and the next step — keeping, pausing, or cancelling — becomes obvious." },
      { kind: 'h', text: 'A simple way to run the trick' },
      { kind: 'list', items: [
        'List every recurring charge you can find, including the amount and the renewal date.',
        'Mark each one as essential, optional, or unused.',
        'Challenge the optional ones first, because they are the easiest wins.',
        'Review the list every few months, because new subscriptions creep in without fanfare.',
      ] },
      { kind: 'callout', tone: 'tip', title: 'Make the list painful enough to act on', text: "If your subscriptions are scattered across cards, emails, and forgotten logins, they are hard to control. Consolidate the list somewhere you can see it. A visible list is a small piece of discipline that often pays for itself quickly." },
      { kind: 'example', title: 'The surprise total', text: "A person may think they spend a little on subscriptions and discover the combined total is a meaningful monthly amount once every service is written down. That total is what matters, not each individual line. The list turns a vague habit into a concrete number you can improve." },
      { kind: 'sim', name: 'budget', caption: 'Feed the real subscription total into a budget and see what it crowds out.' },
      { kind: 'terms', items: [
        { term: 'subscription', meaning: 'a recurring payment for ongoing access to a service or product, often set to renew automatically.' },
        { term: 'recurring charge', meaning: 'a payment that repeats on a schedule, such as monthly or yearly, whether or not you actively use the service.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the main value of listing your subscriptions?',
        options: [
          { text: 'It makes recurring charges visible, so the total is no longer hidden and you can decide what to keep or cancel.', correct: true, why: 'Subscriptions are easy to forget; a visible list turns a vague monthly drag into a concrete number you can improve.' },
          { text: 'It tells you exactly when each service will shut down automatically.', correct: false, why: 'A list helps you see what you pay, but cancellation timing depends on each service’s rules.' },
          { text: 'It guarantees you will never spend money again.', correct: false, why: 'Listing subscriptions helps reduce waste, but it does not eliminate spending.' },
        ],
      },
    ],
    takeaway: 'A subscription list makes recurring charges visible and decisions easier. Review it regularly, because little automatic payments are the easiest place to stop leaking money.',
  },

  'l4-104': {
    id: 'l4-104',
    title: 'Financial Trick: Run A Monthly Money Review',
    subtitle: 'A short, honest check-in that keeps the plan alive.',
    minutes: 5,
    blocks: [
      { kind: 'scene', name: 'dashboard', caption: 'A five-minute glance at the same few numbers every month keeps drift visible.' },
      { kind: 'p', text: "A monthly money review is a short, recurring check-in on your income, spending, savings, debts, and goals. It is not a full audit; it is a sanity check. The point is to catch drift before it becomes a problem, to notice what changed, and to decide whether your plan still fits your life. A plan you never revisit is a plan you are probably not following." },
      { kind: 'h', text: 'A review can be quick if you keep it focused' },
      { kind: 'list', items: [
        'Did you stay within your plan for the month, or where did you drift?',
        'Did you save and invest what you intended?',
        'Did any debt move in the wrong direction?',
        'Did any goal or obligation change that the plan should reflect?',
        'What is the one thing to fix before next month?',
      ] },
      { kind: 'callout', tone: 'tip', title: 'Tie the review to an existing habit', text: "The easiest review is the one that happens automatically. Anchor it to a monthly event — a pay day, a bill cycle, or a calendar reminder — so it does not depend on remembering. A five-minute review that happens every month is better than a perfect review that never happens." },
      { kind: 'example', title: 'A review that prevents a bigger mess', text: "A monthly review might reveal that a new subscription is eating into savings, or that car expenses are creeping up, or that the debt payment is slipping. Catching that early is much easier than fixing a six-month mess later. The review is small; the protection is large." },
      { kind: 'sim', name: 'budget', caption: 'Rebuild the month in the budget lab and check it against what you actually planned.' },
      { kind: 'terms', items: [
        { term: 'monthly money review', meaning: 'a short, regular check-in on income, spending, savings, debt, and goals to see whether the plan is still working.' },
        { term: 'drift', meaning: 'the slow movement away from a plan, often because small changes accumulate without being noticed.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the main purpose of a monthly money review?',
        options: [
          { text: 'To catch drift early and decide whether the plan still fits your life, before small problems become big ones.', correct: true, why: 'A monthly review is a sanity check that keeps the plan honest and current, which is what prevents slow drift from becoming a crisis.' },
          { text: 'To prepare a detailed tax return every month.', correct: false, why: 'A monthly review is a check-in, not a monthly tax filing.' },
          { text: 'To judge every purchase as good or bad in moral terms.', correct: false, why: 'The review is about the plan and the pattern, not about morally grading every single expense.' },
        ],
      },
    ],
    takeaway: 'A monthly money review is a short, honest check-in that keeps your plan alive. Keep it simple, keep it regular, and use it to make one small correction before the next month.',
  },

  'l4-105': {
    id: 'l4-105',
    title: 'Financial Trick: Set Up An Automatic Bill Review',
    subtitle: 'Catch wrong charges before they become permanent habits.',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'expense-bars', caption: 'Bill creep is a slow rise in the recurring bars — visible only if you look.' },
      { kind: 'p', text: "Automatic bill review is the habit of checking recurring bills and statements for errors, surprises, and creep. Prices rise, features change, mistakes happen, and forgotten services continue charging. The trick is not to distrust every bill; it is to verify them often enough that a wrong charge does not sit there for months before you notice." },
      { kind: 'h', text: 'What to look for' },
      { kind: 'list', items: [
        'Price increases that happened without your attention.',
        'New charges or add-ons you did not knowingly choose.',
        'Duplicate charges or billing mistakes.',
        'Services you no longer use but are still paying for.',
        'Payments leaving accounts you forgot about.',
      ] },
      { kind: 'callout', tone: 'tip', title: 'Review bills on a schedule, not only when something feels wrong', text: "If you wait until a bill feels too high, you may have been overpaying for months. A scheduled review — once a month or once a quarter — makes the check ordinary, which is when it works best. The goal is early detection, not drama." },
      { kind: 'example', title: 'A bill that quietly changed', text: "A service may raise its price by a small amount and rely on the customer not noticing. Over a year, that small increase can add up. A regular bill review is what spots the change while there is still time to decide whether to keep it, switch, or negotiate." },
      { kind: 'sim', name: 'budget', caption: 'Let the creeping bills into the budget and watch how much room is left.' },
      { kind: 'terms', items: [
        { term: 'automatic bill review', meaning: 'a regular check of bills and statements to catch errors, price changes, unused services, and unexpected charges.' },
        { term: 'bill creep', meaning: 'the slow rise in recurring costs as prices increase, add-ons appear, and forgotten services keep charging.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the most useful reason to review bills on a schedule?',
        options: [
          { text: 'To catch price changes, wrong charges, and unused services early, before they quietly run for months.', correct: true, why: 'Scheduled review is about early detection; waiting until a bill feels wrong often means you have already overpaid for a while.' },
          { text: 'To make sure every bill is paid late on purpose.', correct: false, why: 'Late payment is usually a bad idea; the review is about checking the bill, not delaying it.' },
          { text: 'To avoid ever seeing a bill again.', correct: false, why: 'The review means looking at bills deliberately, not avoiding them.' },
        ],
      },
    ],
    takeaway: 'An automatic bill review keeps recurring costs honest. Check on a schedule for price changes, mistakes, and unused services, so a bad charge does not live rent-free in your finances.',
  },

  'l4-106': {
    id: 'l4-106',
    title: 'Financial Trick: Stress-Test Your Plan Once A Year',
    subtitle: 'A good plan survives a bad year — check before it matters.',
    minutes: 5,
    blocks: [
      { kind: 'scene', name: 'emergency-ladder', caption: 'A stress test asks how many rungs of the emergency ladder you can still reach.' },
      { kind: 'p', text: "A stress test is the habit of asking what happens to your plan if things go worse than expected: a job loss, a medical bill, a market drop, a big repair, or a temporary income cut. The point is not to be gloomy; it is to find the weak spots while you still have time to fix them. A plan that only works in the best case is not a plan; it is a hope." },
      { kind: 'h', text: 'Questions a stress test should answer' },
      { kind: 'list', items: [
        'How many months could you keep going if income stopped or dropped sharply?',
        'Which expenses could be cut quickly if needed?',
        'Which debts would become dangerous first?',
        'Which part of the plan is most fragile: cash, insurance, liquidity, or over-commitment?',
        'What would you do first if things went wrong?',
      ] },
      { kind: 'callout', tone: 'tip', title: 'Make the stress test real, not abstract', text: "Do not just imagine ‘something bad’ in a vague way. Pick a scenario with numbers: a month or two of reduced income, a specific unexpected expense, or a market drop of a plausible size. A concrete scenario shows you where the plan actually breaks." },
      { kind: 'example', title: 'A stress test finding', text: "A family may discover that their plan looks fine in a normal year but would crack in three months without income because too much is committed to fixed payments and too little is liquid. That finding is not a disaster; it is useful early information. The fix might be building a bigger buffer or reducing fixed commitments." },
      { kind: 'sim', name: 'budget', caption: 'Cut the income line in the budget lab and see exactly what breaks first.' },
      { kind: 'terms', items: [
        { term: 'stress test', meaning: 'a check of how a plan would hold up under a worse-than-expected scenario, used to find weak spots before they become real problems.' },
        { term: 'liquidity', meaning: 'how easily you can access money when needed; low liquidity can make a plan fragile under stress.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the most useful purpose of an annual stress test?',
        options: [
          { text: 'To find the weak spots in your plan under a realistic bad scenario, so you can fix them before they become crises.', correct: true, why: 'A stress test is about weakness-detection; it helps you see what fails first under pressure.' },
          { text: 'To prove that nothing bad will ever happen to your finances.', correct: false, why: 'A stress test assumes bad things can happen; it is not a promise of safety.' },
          { text: 'To make your plan more complicated and impressive.', correct: false, why: 'The goal is resilience, not complexity; a stress test should simplify the fix, not add showmanship.' },
        ],
      },
    ],
    takeaway: 'An annual stress test asks what happens if things go wrong and finds the fragile parts of your plan. Do it while you have time to fix them, because a plan that only works in a good year is not a plan.',
  },

  'l4-107': {
    id: 'l4-107',
    title: 'Financial Trick: Keep An Emergency-Access Checklist',
    subtitle: 'When something goes wrong, the last thing you want is to search for the plan.',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'emergency-ladder', caption: 'The checklist is the map of which rung to reach for, and when.' },
      { kind: 'p', text: "An emergency-access checklist is a short, written list of what matters if money or access problems hit: where the emergency fund is, how to reach it, which accounts matter first, who to call, and what documents or passwords you need. In a real emergency, people do not think clearly. A checklist removes the need to remember everything at the worst possible moment." },
      { kind: 'h', text: 'What the checklist should cover' },
      { kind: 'list', items: [
        'Where the emergency money is held and how to access it quickly.',
        'Which accounts or cards are the most important to secure or use first.',
        'Key contacts: bank, insurer, employer, family, or professional help.',
        'Documents and information needed for a claim, loan, or urgent payment.',
        'A simple first-response sequence: what to do in the first hour and the first day.',
      ] },
      { kind: 'callout', tone: 'tip', title: 'Keep it accessible, but keep it safe', text: "The checklist should be easy to find when needed, but not so exposed that it creates new risk. A private note, a safe folder, or a trusted person who knows where it is can all work. The point is to reduce panic, not to create a new vulnerability." },
      { kind: 'example', title: 'A calm response instead of a scramble', text: "When a sudden expense or access problem hits, a checklist can tell you exactly where to look, who to call, and what to secure first. Without it, people often scramble through emails, statements, and memory. A checklist turns panic into a first step." },
      { kind: 'sim', name: 'budget', caption: 'Check that the emergency money is really liquid by fitting it into your monthly plan.' },
      { kind: 'terms', items: [
        { term: 'emergency-access checklist', meaning: 'a short written list of where money and access information are, who to contact, and what to do first in a financial emergency.' },
        { term: 'first response', meaning: 'the immediate actions taken when a problem hits, before the longer-term fix is arranged.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the main value of an emergency-access checklist?',
        options: [
          { text: 'It gives you a written, easy-to-follow set of first steps and key information so you can act quickly when things go wrong.', correct: true, why: 'In an emergency, memory is unreliable; a checklist makes the response faster and calmer.' },
          { text: 'It replaces the need for an emergency fund.', correct: false, why: 'A checklist helps you access and use resources; it does not replace having the resources in the first place.' },
          { text: 'It guarantees that no emergency will ever happen.', correct: false, why: 'A checklist does not prevent emergencies; it helps you handle them better.' },
        ],
      },
    ],
    takeaway: 'An emergency-access checklist turns panic into a first step. Keep it simple, keep it safe, and make sure the important accounts, contacts, and actions are written down before you need them.',
  },

  'l4-108': {
    id: 'l4-108',
    title: 'Financial Trick: Know Your Financial Red Flags',
    subtitle: 'Learn the signs that money is going wrong before it becomes a crisis.',
    minutes: 5,
    blocks: [
      { kind: 'scene', name: 'minpayment-trap', caption: 'Paying only the minimum while still spending is the classic red flag in motion.' },
      { kind: 'p', text: "Financial red flags are the warning signs that your finances are drifting into trouble. They are not moral failures; they are signals. The earlier you notice them, the easier they are to fix. The trick is to know the signs you personally need to watch, and to treat them as a cue to act, not to ignore or shame yourself." },
      { kind: 'h', text: 'Common red flags worth noticing' },
      { kind: 'list', items: [
        'Living on credit to cover everyday expenses month after month.',
        'Using one debt to pay another, or constantly shifting balances without reducing them.',
        'No emergency buffer, or using savings for ordinary spending repeatedly.',
        'Avoiding statements, balances, or money conversations because they feel too stressful.',
        'A growing sense that money is controlling you, rather than the other way around.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'Red flags are information, not insults', text: "A red flag should change your behaviour, not your self-worth. If you notice one, the response is to slow down, look honestly, and take one concrete step. Ignoring the flag because it feels uncomfortable is how small problems become large ones." },
      { kind: 'example', title: 'A flag that deserves attention', text: "If you find yourself paying only the minimum on a card while still using it for necessities, that is a sign the budget is under strain. The flag is not a verdict; it is a prompt to reduce expenses, increase income, or get help. The sooner you respond, the smaller the fix." },
      { kind: 'sim', name: 'minpayment', caption: 'Watch how long a balance survives when only the minimum is paid.' },
      { kind: 'terms', items: [
        { term: 'financial red flag', meaning: 'a warning sign that your finances are moving in an unhealthy direction and deserve attention now.' },
        { term: 'warning sign', meaning: 'an early indicator of a problem, meant to prompt action before the situation gets worse.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the most useful way to treat a financial red flag?',
        options: [
          { text: 'As a signal to slow down, look honestly, and take one concrete corrective step before the problem grows.', correct: true, why: 'A red flag is information, not a verdict; the useful response is action, not denial or shame.' },
          { text: 'As proof that you are bad with money and should give up.', correct: false, why: 'A red flag is a warning, not a life sentence; the helpful response is to act, not to collapse into shame.' },
          { text: 'As something to ignore until it becomes unavoidable.', correct: false, why: 'Ignoring a red flag usually makes it worse; the point of noticing it is to intervene earlier.' },
        ],
      },
    ],
    takeaway: 'Financial red flags are early warnings, not insults. Learn the signs that matter to you, and when one appears, take it seriously enough to make one real change.',
  },
}
