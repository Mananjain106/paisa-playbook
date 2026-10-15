import type { Chapter } from '../../types'
import { scene4 } from '../../lib/chapter-blocks'
export const career: Record<string, Chapter> = {
  'l4-094': {
    id: 'l4-094',
    title: 'Career Finance',
    subtitle: 'Your career is your biggest money machine — manage it like one.',
    minutes: 6,
    blocks: [
      scene4('income-streams', 'Your salary is the stream that fills every other account.'),
      { kind: 'p', text: "Career finance is the part of personal finance that people most often ignore because it feels like a life issue, not a money issue. But your earning ability over a working life is usually the biggest driver of your financial outcome. A better job, a better raise, a better switch, and a better skill plan can matter more than fiddling with small expenses. The key idea is to treat your career as an asset you maintain and improve." },
      { kind: 'h', text: 'What career finance includes' },
      { kind: 'list', items: [
        'Your earning power: what you can command now, and what you can build toward.',
        'Your skill investments: training, certifications, and experience that raise your value.',
        'Your job choices: where to work, when to switch, and how to evaluate offers.',
        'Your risk management: building options so a job loss is a setback, not a catastrophe.',
        'Your compensation design: not just salary, but total pay, benefits, and flexibility.',
      ] },
      { kind: 'callout', tone: 'tip', title: 'The highest-return investment is often your own earning ability', text: "A course, a skill, a stretch project, or a well-timed job move can increase income by more than most spending cuts ever will. That does not mean every expense is waste; it means career capital deserves serious attention because the payoff can be huge and long-lived." },
      { kind: 'example', title: 'A career as an asset', text: "If your career is an asset, then education, networking, reputation, and skills are the maintenance and upgrades. A job is not just a paycheck; it is also a platform for the next job. People who think of their career as a long-term asset usually make better short-term decisions." },
      { kind: 'terms', items: [
        { term: 'career finance', meaning: 'the management of your earning power, skill investments, job choices, and career risk as part of personal finance.' },
        { term: 'earning power', meaning: 'the ability to earn income, now and in the future, based on skills, reputation, and opportunity.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the most useful way to think about your career in personal finance?',
        options: [
          { text: 'As an asset that generates income and can be improved through skills, choices, and risk management.', correct: true, why: 'A career is often the biggest driver of lifetime finances, so treating it like an asset makes the money implications clearer.' },
          { text: 'As something separate from money, because work is only about purpose, not income.', correct: false, why: 'Purpose matters, but a career has huge financial effects; ignoring that leaves a major part of personal finance unmanaged.' },
          { text: 'As something fixed at hiring, since your income path is decided once and never changes.', correct: false, why: 'Career income can change a lot through raises, switches, skills, and choices; it is not fixed at the first job.' },
        ],
      },
    ],
    takeaway: 'Your career is your biggest money machine for most of your working life. Manage it like an asset: invest in skills, make thoughtful job choices, and protect your earning power.',
  },

  'l4-095': {
    id: 'l4-095',
    title: 'Salary Negotiation',
    subtitle: 'The few conversations that can move your money for years.',
    minutes: 6,
    blocks: [
      scene4('salary-deductions', 'Negotiate the gross; the deductions decide what actually arrives.'),
      { kind: 'p', text: "Salary negotiation is one of the few moments where a relatively short conversation can change your income for a long time. The reason is compounding: a better starting salary or a better raise can lift every future paycheck, every future base for another job, and every future bonus calculation. People often leave money on the table because they are uncomfortable, unprepared, or under time pressure." },
      { kind: 'h', text: 'What good negotiation usually needs' },
      { kind: 'list', items: [
        'Preparation: knowing your market value, your achievements, and the range you want.',
        'Timing: asking at a reasonable moment, not always the first day and not always never.',
        'Clarity: knowing what you are negotiating — salary, variable pay, sign-on, flexibility, or benefits.',
        'A range and a walk-away point: knowing what good looks like and what you will not accept.',
        'Willingness to be calm and professional, even if the answer is no.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'Do not mistake politeness for weakness', text: "Negotiation is not about being aggressive; it is about being prepared and clear. You can be respectful and still ask for what you are worth. The mistake is often saying yes too quickly because you fear awkwardness, when a short awkward conversation could improve your finances for years." },
      { kind: 'example', title: 'A better starting number', text: "Two people join similar roles. One accepts the first number offered; the other negotiates based on market data and achievements and lands a meaningfully higher base. Over time, the difference can grow because later raises and offers often build on the starting base. The negotiation at the start had a long tail." },
      { kind: 'terms', items: [
        { term: 'salary negotiation', meaning: 'the discussion around compensation, usually with an employer, to reach a pay level, structure, or package that reflects value and market reality.' },
        { term: 'total compensation', meaning: 'the full pay package, including salary, bonus, benefits, allowances, and other elements, not just base salary alone.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the most useful preparation for salary negotiation?',
        options: [
          { text: 'Know your market value, your achievements, and the range you want, and enter the conversation with a clear target and a walk-away point.', correct: true, why: 'Good negotiation is preparation plus clarity. Without it, the conversation is just a mood.' },
          { text: 'Accept the first number immediately to avoid any awkwardness.', correct: false, why: 'Rushing to accept often leaves money on the table; awkwardness is usually shorter than the financial loss.' },
          { text: 'Demand a huge increase without any basis, since confidence alone gets results.', correct: false, why: 'Confidence without evidence can backfire; a strong case matters more than a big number delivered loudly.' },
        ],
      },
    ],
    takeaway: 'Salary negotiation can move your finances for years because pay compounds. Prepare well, know your range, and ask clearly and professionally — comfort is not the same as value.',
  },

  'l4-096': {
    id: 'l4-096',
    title: 'Raises',
    subtitle: 'How pay grows inside a job, and why you cannot assume it will.',
    minutes: 5,
    blocks: [
      scene4('raise-compounding', 'Raises are small annual additions to one long stream.'),
      { kind: 'p', text: "A raise is an increase in pay within the same job, usually tied to performance, market movement, tenure, or a review cycle. Many people assume raises will arrive automatically and generously. They often do not. The useful habit is to treat raises as something to earn, ask for, and track, not as a reward that arrives on its own." },
      { kind: 'h', text: 'Why raises are worth managing' },
      { kind: 'list', items: [
        'A raise can change your base for all future raises and offers.',
        'Inflation can erode the value of unchanged pay over time.',
        'Some workplaces reward visibility and timing as much as performance.',
        'Waiting for the ‘right time’ can mean missing a raise that could have been earned.',
      ] },
      { kind: 'callout', tone: 'tip', title: 'Do not let loyalty alone be your argument', text: "Staying a long time is not the same as being high-value. If you want a raise, build the case with achievements, market value, and the value you create. Loyalty is nice, but money usually follows contribution and evidence more than sentiment." },
      { kind: 'example', title: 'A raise conversation', text: "A strong raise request is usually concrete: what was delivered, what changed, what the market pays, and why the current pay is below the value provided. A vague request based on personal need is less persuasive. The business pays for value, not for need, so the case should connect the two." },
      { kind: 'terms', items: [
        { term: 'raise', meaning: 'an increase in pay within the same job, often tied to performance, review, or market adjustment.' },
        { term: 'performance review', meaning: 'a structured discussion of work outcomes and development, often used to guide pay and next steps.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the best basis for asking for a raise?',
        options: [
          { text: 'The value you have created, the market for your role, and a clear case for why your pay should catch up.', correct: true, why: 'Raises are more persuasive when they connect contribution and market reality rather than personal need alone.' },
          { text: 'How long you have been loyal without asking for anything.', correct: false, why: 'Loyalty is not the same as value; a raise case is stronger with evidence and market context.' },
          { text: 'A personal need, such as higher expenses, since employers pay to cover that.', correct: false, why: 'Personal need rarely drives business pay decisions; value and market do.' },
        ],
      },
    ],
    takeaway: 'Raises do not always arrive on their own. Treat them as something to earn and ask for with evidence, market context, and a clear case for the value you create.',
  },

  'l4-097': {
    id: 'l4-097',
    title: 'Promotions',
    subtitle: 'A promotion can raise income, responsibility, and options — or all three at once.',
    minutes: 5,
    blocks: [
      scene4('goal-ladder', 'A promotion is a rung — worth taking only if it leads upward.'),
      { kind: 'p', text: "A promotion is a move up in role, responsibility, or seniority. It often brings higher pay, but not always enough higher pay for the extra responsibility. The useful way to think about a promotion is as a package of changes: more scope, more accountability, possibly more stress, and often more money. Not every promotion is a good financial or life decision at the moment it is offered." },
      { kind: 'h', text: 'What to weigh in a promotion' },
      { kind: 'list', items: [
        'The pay increase relative to the extra responsibility.',
        'Whether the promotion builds your career capital or just adds work.',
        'The skills, visibility, and options it creates for the future.',
        'The workload and stress, and whether you can sustain them.',
        'The alternatives: staying put, switching companies, or building skills elsewhere.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'A promotion is not automatically a win', text: "A title change can feel like success even when the pay does not match the responsibility, or when the role is a trap that looks good on paper. A promotion should move your career and your finances in the right direction, not just your reporting line. If it does not, it is worth questioning." },
      { kind: 'example', title: 'A promotion that may or may not be worth it', text: "An employee offered a promotion might compare the pay bump with the extra hours, the new accountability, and whether the role opens the next door. If the pay is small and the work is much harder, the promotion may be a career dead-end in disguise. The right answer depends on the whole package, not the title alone." },
      { kind: 'terms', items: [
        { term: 'promotion', meaning: 'a move to a higher or broader role, usually with more responsibility and often with higher pay.' },
        { term: 'career capital', meaning: 'the skills, reputation, and options that make you more valuable and more employable over time.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the most useful way to evaluate a promotion?',
        options: [
          { text: 'As a package of pay, responsibility, career capital, and sustainability, not just a title change.', correct: true, why: 'A promotion affects more than status; the value depends on pay, scope, future options, and whether you can live with the workload.' },
          { text: 'Only by the new title, since titles are the best measure of success.', correct: false, why: 'A title can be impressive and still be a poor deal if the pay and scope are off.' },
          { text: 'As purely additional work, so it should always be declined.', correct: false, why: 'Promotions can be valuable; declining all of them is not sensible when some open real doors and pay well.' },
        ],
      },
    ],
    takeaway: 'A promotion changes pay, scope, and options together. Judge it by the whole package — money, responsibility, career capital, and sustainability — not by the title alone.',
  },

  'l4-098': {
    id: 'l4-098',
    title: 'Job Switching',
    subtitle: 'The move that can reset your income trajectory.',
    minutes: 6,
    blocks: [
      scene4('income-streams', 'A switch can lift the whole stream, not just the next paycheck.'),
      { kind: 'p', text: "Job switching is one of the most powerful ways people change their income, because a new role often comes with a new base, new responsibilities, and a new salary floor for the future. Staying too long in the same job can mean slower growth than moving, while moving too often can look unstable or cost you the benefits of deep experience. The useful skill is knowing when to stay and when to go." },
      { kind: 'h', text: 'What a job switch should accomplish' },
      { kind: 'list', items: [
        'A better match for your skills, market value, and career direction.',
        'A meaningful improvement in pay or opportunity that staying would not provide.',
        'A role that builds better career capital for the next move and the one after that.',
        'A realistic view of the risks: culture fit, probation, learning curve, and the loss of tenure.',
        'A clear reason for leaving, not just restlessness or escape.',
      ] },
      { kind: 'callout', tone: 'tip', title: 'Switch for value, not just for novelty', text: "A job change can be exciting, but the best switches usually improve the underlying career position: better role, better pay, better platform, or better skills. A move that is only about escape can leave you in a similar problem somewhere else. Make the next job better than the last one in a real way." },
      { kind: 'example', title: 'A switch with a better base', text: "Someone who stays in a low-growth role may earn modest raises year after year. Someone who switches to a better-fitting role with stronger market demand may reset the base higher and create a better path for future growth. The switch is valuable not because change is good, but because the new floor is higher." },
      { kind: 'terms', items: [
        { term: 'job switching', meaning: 'changing employers as a way to improve pay, role, skills, or career direction.' },
        { term: 'career trajectory', meaning: 'the general direction and pace of your career over time, including income, responsibility, and opportunity.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the best reason to switch jobs?',
        options: [
          { text: 'To improve your career position in a real way — better role, pay, skills, or opportunity — rather than only to escape a bad moment.', correct: true, why: 'A good switch improves the underlying trajectory; a move based only on impulse can repeat the same problems elsewhere.' },
          { text: 'To change jobs every year regardless of the situation, since movement always helps.', correct: false, why: 'Frequent moves are not always helpful; the value depends on what the move accomplishes.' },
          { text: 'Only when you are unhappy, since job switching should never be planned.', correct: false, why: 'Planned, strategic switches can be very valuable; waiting for misery is not the only or best reason to move.' },
        ],
      },
    ],
    takeaway: 'Job switching can reset your income and career trajectory. The best moves improve your real position — pay, role, skills, or platform — not just the immediate feeling.',
  },

  'l4-099': {
    id: 'l4-099',
    title: 'Side Income',
    subtitle: 'Extra money can help — or distract — depending on how you build it.',
    minutes: 6,
    blocks: [
      scene4('income-streams', 'A second stream helps only if it does not drain the first.'),
      { kind: 'p', text: "Side income is money earned outside your main job, from freelancing, a small business, consulting, or similar work. It can speed up savings, diversify your income, and build skills. It can also drain time, create tax complexity, and distract from the main job that pays most of the bills. The right approach is to treat side income as a tool with trade-offs, not as a default solution." },
      { kind: 'h', text: 'What to think about before building side income' },
      { kind: 'list', items: [
        'The time cost: how many hours it really takes, and what it takes from sleep, family, or the main job.',
        'The tax and legal side: income from other work is still income, and it may need to be reported and managed.',
        'The scalability: whether the side work is a time-for-money trap or can grow into something better.',
        'The conflict risk: whether the side activity is allowed with your employer or creates a conflict.',
        'The purpose: whether it is for cash flow, skill-building, or a possible future business.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'Side income is not automatically smart', text: "A side gig that pays a little but wrecks your main job, your health, or your focus can be a bad trade. The goal is not to be busy; it is to improve your financial position without creating a bigger problem elsewhere. If the side income is stressful or unsustainable, it is worth redesigning or stopping." },
      { kind: 'example', title: 'Side income with a plan', text: "A person who starts a small freelance skill on evenings might use it to learn, build a client base, and earn extra cash, while checking that it fits the main job and the tax picture. Another person might take on endless low-paid work that burns them out. The difference is not the word ‘side income’; it is the design." },
      { kind: 'terms', items: [
        { term: 'side income', meaning: 'income earned outside the main job, often from freelancing, consulting, or a small additional business.' },
        { term: 'scalability', meaning: 'whether a way of earning can grow beyond the direct hours put in, or whether it stays tied to time for money.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the most useful way to approach side income?',
        options: [
          { text: 'Treat it as a tool with trade-offs: check the time cost, tax side, conflicts, and whether it is scalable or just another time-for-money trap.', correct: true, why: 'Side income can be valuable, but it needs to be designed well enough to improve your position without harming the rest of your life.' },
          { text: 'Take on as much extra work as possible, since more hours always mean more progress.', correct: false, why: 'More hours can mean burnout or a weak main job; the goal is improvement, not just busyness.' },
          { text: 'Ignore the tax and legal side, because side income is too small to matter.', correct: false, why: 'Side income is still income and can have tax and legal implications, especially as it grows.' },
        ],
      },
    ],
    takeaway: 'Side income can accelerate savings and build skills, but it can also cost time and focus. Treat it as a tool: design it, watch the trade-offs, and do not let it quietly damage your main job or health.',
  },

  'l4-100': {
    id: 'l4-100',
    title: 'Career Risk',
    subtitle: 'Protecting your income source, not just your savings.',
    minutes: 5,
    blocks: [
      scene4('emergency-ladder', 'Career resilience is a ladder you climb before you need it.'),
      { kind: 'p', text: "Career risk is the risk that your income could be interrupted, reduced, or stranded because of job loss, industry change, skill obsolescence, a bad reputation, or a move that does not work out. People often insure their phone or bike and forget to insure the income that pays for everything else. The useful habit is to manage career risk the way you manage any other financial risk: identify it, reduce it, and keep a buffer." },
      { kind: 'h', text: 'What career risk often looks like' },
      { kind: 'list', items: [
        'Job loss or a contract ending unexpectedly.',
        'Skills becoming less relevant in a changing market.',
        'Over-reliance on one employer, one role, or one client.',
        'A reputation problem that follows you to the next opportunity.',
        'A move that turns out worse than the job you left.',
      ] },
      { kind: 'callout', tone: 'tip', title: 'Build career resilience before you need it', text: "The best time to reduce career risk is when you are not panicking. Keep skills current, keep a network alive, keep records and achievements clear, and keep some savings so a setback is a transition rather than a crisis. Resilience is built quietly over time." },
      { kind: 'example', title: 'A simple career risk plan', text: "A worker who keeps learning, maintains relationships, has an emergency fund, and knows what the job market looks like for their role is in a much stronger position than one who assumes the current job will always be there. The job may be fine, but the readiness makes the difference when something changes." },
      { kind: 'terms', items: [
        { term: 'career risk', meaning: 'the risk that your income or employability is disrupted by job loss, market change, skill gaps, or other career shocks.' },
        { term: 'employability', meaning: 'how easily and valuable you are likely to be as a worker, based on skills, experience, and market demand.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the most useful way to manage career risk?',
        options: [
          { text: 'Reduce it before you need it: keep skills current, maintain your network, keep a buffer, and avoid over-reliance on one income source.', correct: true, why: 'Career risk management works best as preparation, because the time to build resilience is before the crisis.' },
          { text: 'Assume your job is permanent and focus only on spending less.', correct: false, why: 'Even a stable job can change; relying only on spending cuts leaves the income risk unmanaged.' },
          { text: 'Only worry about career risk after you lose the job.', correct: false, why: 'Waiting until the loss has happened removes most of your options; preparation matters before the shock.' },
        ],
      },
    ],
    takeaway: 'Career risk is the risk to your income and employability. Manage it early with skills, network, savings, and optionality, so a setback becomes manageable rather than catastrophic.',
  },

  'l4-101': {
    id: 'l4-101',
    title: 'Professional Growth',
    subtitle: 'The steady compounding of skills, reputation, and options.',
    minutes: 5,
    blocks: [
      scene4('goal-ladder', 'Skill by skill, the ladder compounds across a career.'),
      { kind: 'p', text: "Professional growth is the slow build of what makes you more valuable over time: skills, judgment, relationships, credentials where they matter, and a reputation for reliability. It is not usually a single dramatic event; it is the compounding of small, consistent improvements. That is the point: professional growth is often the part of finance that looks like career stuff but acts like an investment." },
      { kind: 'h', text: 'What professional growth is built from' },
      { kind: 'list', items: [
        'Deliberate skill-building in areas that the market values.',
        'Stretch work that teaches more than comfortable repetition.',
        'Relationships and reputation, which open doors and create optionality.',
        'Feedback and reflection, so the growth is real rather than assumed.',
        'Patience, because compounding is powerful precisely because it is slow.',
      ] },
      { kind: 'callout', tone: 'tip', title: 'Grow where the market is going, not only where you enjoy being', text: "Enjoyment matters, but alignment with market demand matters too. The best professional growth often sits at the intersection of what you are good at, what you can sustain, and what other people will pay for. A skill that no one values is a hobby; a valued skill is career capital." },
      { kind: 'example', title: 'Compounding in a career', text: "A professional who improves a little each year — better communication, better judgment, better tools, better relationships — can end up far more valuable than one who changes dramatically once and then stalls. The small, sustained improvements are what create a strong long-term career, just as small, sustained savings create a strong long-term portfolio." },
      { kind: 'terms', items: [
        { term: 'professional growth', meaning: 'the ongoing development of skills, judgment, reputation, and relationships that increase your value as a worker over time.' },
        { term: 'career capital', meaning: 'the accumulated value of what makes you employable and valuable: skills, reputation, network, and optionality.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the most accurate description of professional growth?',
        options: [
          { text: 'A slow compounding of skills, reputation, and options that raises your value over time.', correct: true, why: 'Professional growth is usually a cumulative process, not a one-off event, which is why consistency matters.' },
          { text: 'A single dramatic certification that instantly makes you valuable forever.', correct: false, why: 'One credential can help, but durable value usually comes from ongoing development, not one moment.' },
          { text: 'Something that only matters in the first year of a career.', correct: false, why: 'Professional growth matters across a career; the value of skills and reputation tends to increase over time.' },
        ],
      },
    ],
    takeaway: 'Professional growth is the compounding of skills, reputation, and options. Invest in it steadily, because the slow improvements are often what create a valuable career over time.',
  },
}