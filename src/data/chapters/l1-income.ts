import type { Chapter } from '../../types'

/** Level 1, chapters 13–16: the ways people earn, and how the work differs. */
export const income: Record<string, Chapter> = {
  'l1-013': {
    id: 'l1-013',
    title: 'Wages',
    subtitle: 'Paid by the hour, paid by the piece, paid by the day',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'expense-bars', caption: 'Wage earners have the least predictable income and usually the least support — so buffers matter most.' },
      { kind: 'p', text: 'A wage is payment for labour, calculated by a simple unit — an hour, a day, a piece or a task. Wages predate salary structures and remain the default for most of the workforce outside organised industry.' },
      { kind: 'table',
        caption: 'How wages are commonly calculated',
        headers: ['Basis', 'How it works', 'Example'],
        rows: [
          ['Hourly', 'Rate × hours worked', '₹150 an hour, 8 hours = ₹1,200 a day'],
          ['Daily', 'Fixed rate per day', 'Wage of ₹700 a day for a helper'],
          ['Piece rate', 'Rate per unit produced', '₹12 per garment stitched'],
          ['Task rate', 'Fixed amount per job', '₹200 per account opened'],
          ['Skill-based', 'Rate set by qualification', 'Electrician vs helper'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Why wage earners often have no buffer',
        text: 'Daily and hourly wages are paid at the end of the week or month, and the job can disappear without notice. With no employer PF, no leave pay and no bonus, a single bad week becomes a borrowing event. This is exactly the group that most needs a small emergency fund — and least likely to build one.',
      },
      {
        kind: 'formula',
        label: 'Effective hourly wage after your costs',
        expr: 'Total monthly wage ÷ working days ÷ 8 − (travel, food, transport spent to earn it)',
        note: 'A ₹20,000 wage with ₹6,000 of daily travel and food is effectively a ₹14,000 wage.',
      },
      {
        kind: 'example',
        title: 'Piece rate and the wrong question',
        text: 'A tailor earns ₹12 per shirt. On a good week she makes 60 shirts for ₹720 — but at a rate that invites speeding, a mistake means the piece is rejected, and there is no paid sick leave. The rate looks simple, but the risk is entirely on the worker. Always convert a piece rate into an hourly rate before comparing offers.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Know the legal floor',
        text: 'India has a statutory minimum wage that varies by state and skill level, plus an Equal Remuneration principle that requires equal pay for equal work regardless of gender. If you are paid below the state floor, that is a legal issue, not just a bad deal.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'How to raise a wage income',
        text: 'Certification in your trade, learning the machine or software next to yours, or becoming the person others are supervised by are the reliable routes. Each of these is a negotiation backed by a specific, demonstrable skill rather than by asking for more.',
      },
    ],
    quiz: [
      {
        q: 'A worker is paid ₹150 per hour and works 8 hours a day, 26 days a month. Their gross wage is about:',
        options: [
          { text: '₹31,200', correct: true, why: '150 × 8 × 26 = ₹31,200.' },
          { text: '₹1,200', correct: false, why: 'That is one day, not a month.' },
          { text: '₹3,900', correct: false, why: 'That is one week at 5 days.' },
        ],
      },
      {
        q: 'The main financial risk that wage earners face is:',
        options: [
          { text: 'Paying too much income tax', correct: false, why: 'Low incomes often pay little or no tax.' },
          { text: 'Irregular or abruptly ending work with no savings buffer', correct: true, why: 'Correct — unstable income with no PF or severance makes an emergency fund critical.' },
          { text: 'Being unable to open a bank account', correct: false, why: 'Accounts are widely available.' },
        ],
      },
      {
        q: 'Why convert a piece rate into an hourly rate before accepting a job?',
        options: [
          { text: 'Because hourly rates are always higher', correct: false, why: 'Conversion is about comparison, not direction.' },
          { text: 'Because piece rates can look generous while being poor once rejected work and unpaid time are counted', correct: true, why: 'Exactly — it exposes the hidden costs.' },
          { text: 'Because employers cannot pay by the piece', correct: false, why: 'Piece-rate payment is legal and common.' },
        ],
      },
    ],
    takeaway: 'Wages are simple to calculate and often simple to lose. Convert every rate to an effective hourly figure, and build a buffer because income can stop without warning.',
  },

  'l1-014': {
    id: 'l1-014',
    title: 'Business Income',
    subtitle: 'Profit is what is left, not what you take in',
    minutes: 5,
    blocks: [
      { kind: 'scene', name: 'income-streams', caption: 'Business profit is the return on your capital and your effort combined.' },
      { kind: 'p', text: 'Business income is the profit left after every cost of running a business — not the money customers pay you. The gap between those two numbers decides whether a business is a livelihood, a career, or a slow way to lose savings.' },
      { kind: 'formula',
        label: 'From sales to what you keep',
        expr: 'Profit = Sales − raw materials − wages − rent − utilities − transport − marketing − interest',
        note: 'Only what survives this line is yours to save, invest, or take out.',
      },
      {
        kind: 'table',
        caption: 'A month in a small business',
        headers: ['Line', 'Amount', 'Note'],
        rows: [
          ['Sales', '₹3,00,000', 'What customers paid'],
          ['Materials', '−₹1,10,000', 'Direct cost'],
          ['Wages (3 staff)', '−₹66,000', 'Fixed regardless of sales'],
          ['Rent', '−₹25,000', 'Fixed'],
          ['Electricity and internet', '−₹9,000', 'Semi-fixed'],
          ['Transport and fuel', '−₹12,000', 'Grows with orders'],
          ['Marketing', '−₹8,000', 'Optional but necessary'],
          ['Loan interest', '−₹6,000', 'Cost of past borrowing'],
          ['Profit', '₹64,000', '21% margin'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Separating money from the business',
        text: 'The single most common failure is treating business money as personal money. Until profit is paid out to you as salary or dividend, it belongs to the business — it still has to cover the next purchase of stock. Many businesses die from profitable months and empty bank accounts.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Cash flow kills more businesses than loss',
        text: 'A business can be profitable on paper and still fail, because customers pay in 60 days while suppliers demand payment in 7. You are financing your suppliers with your own credit line. Track payment terms as carefully as margins.',
      },
      {
        kind: 'example',
        title: 'The one-month rule',
        text: 'Many small businesses in India pay themselves a fixed modest salary and take the rest as profit. This creates two benefits: the owner is not tempted to raid working capital, and the business can survive a bad personal month. It is a habit worth copying in any business.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Keep business and personal accounts strictly separate.',
          'Pay yourself a fixed salary, not "whatever is there".',
          'Know your break-even point in sales per month.',
          'Keep 3–6 months of costs as business reserve before taking growth decisions.',
          'Review margins on your top five customers, not your average.',
        ],
      },
    ],
    quiz: [
      {
        q: 'A business with ₹5,00,000 monthly sales and ₹4,20,000 monthly costs has:',
        options: [
          { text: '₹5,00,000 profit', correct: false, why: 'That is revenue, not profit.' },
          { text: '₹80,000 profit, a 16% margin', correct: true, why: 'Correct — 5,00,000 − 4,20,000 = ₹80,000.' },
          { text: 'A loss, because sales are not profit', correct: false, why: 'There is a genuine profit here.' },
        ],
      },
      {
        q: 'Why pay yourself a fixed salary from a business?',
        options: [
          { text: 'To reduce your income tax', correct: false, why: 'That is a side effect at best, not the reason.' },
          { text: 'To stop the owner draining working capital needed to keep trading', correct: true, why: 'Exactly — profit stays in the business and the owner still gets paid.' },
          { text: 'Because the government requires it', correct: false, why: 'Not a legal requirement for most private businesses.' },
        ],
      },
      {
        q: 'A profitable business can still fail because of:',
        options: [
          { text: 'Poor accounting only', correct: false, why: 'Bad books are a risk but not the classic cause.' },
          { text: 'Cash flow — collecting slowly from customers while paying suppliers quickly', correct: true, why: 'Correct — timing of cash flows kills more businesses than margins do.' },
          { text: 'Being too profitable', correct: false, why: 'Profit is a strength, not a risk.' },
        ],
      },
    ],
    takeaway: 'Business income is profit after every cost, and cash flow matters more than margin. Keep business money separate from personal money.',
  },

  'l1-015': {
    id: 'l1-015',
    title: 'Freelance Income',
    subtitle: 'Trading stability for ownership',
    minutes: 4,
    blocks: [
      { kind: 'scene', name: 'freelance-climb', caption: 'Freelancing shortens the climb to a bigger income — if you can survive the gaps on the way.' },
      { kind: 'p', text: 'Freelancing means selling your skills directly to clients without an employer. You gain freedom and ownership, and you take on the problems of an employer — irregular income, no benefits, and the need to find your own next project.' },
      { kind: 'table',
        caption: 'Employee vs freelancer, honestly',
        headers: ['Dimension', 'Employee', 'Freelancer'],
        rows: [
          ['Income', 'Predictable monthly', 'Lumpy, project-based'],
          ['Risk', 'Low — salary continues', 'High — a quiet month means no income'],
          ['Benefits', 'PF, ESI, leave, insurance', 'You arrange everything yourself'],
          ['Pricing', 'Set by the company', 'You set it, and must justify it'],
          ['Upside', 'Limited without a promotion', 'Unlimited — no ceiling on earnings'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'The real cost is the gap',
        text: 'Freelancers often earn 40–60% more per hour than employees, then discover that the difference is consumed by gaps between projects, unpaid admin, health insurance, EPF contributions, and equipment. Model the full cost before assuming a raise is income.',
      },
      {
        kind: 'formula',
        label: 'Your real freelance hourly rate',
        expr: 'Annual billed income ÷ (billable hours + admin + marketing + sales time)',
        note: 'If you bill ₹12 lakh and spend only half your working time billing, your true rate is half the headline.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Build a runway before you quit',
        text: 'Keep expenses below income for 6–12 months while building a client base, a portfolio, and ideally 3–6 months of expenses in liquid savings. Quitting with two months of savings converts a temporary gap into permanent debt.',
      },
      {
        kind: 'example',
        title: 'Why rates must rise with experience',
        text: 'A designer charging ₹500 an hour in year one is not underpaid relative to their skill. The mistake is staying at ₹500 in year five because early clients set the anchor. Raise rates deliberately every 12–18 months, and raise them more for new clients than for existing ones.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Invoice with advance payments — 30–50% upfront is normal and protects you.',
          'Save for tax as a separate percentage of every payment received.',
          'Keep contracts short but written, with scope and payment terms.',
          'Maintain at least two active clients so no single one can vanish.',
        ],
      },
    ],
    quiz: [
      {
        q: 'A freelancer bills ₹12,00,000 a year but spends only 50% of time on billable work. The effective hourly rate is:',
        options: [
          { text: 'The same as an employee\'s rate', correct: false, why: 'That ignores the unpaid half.' },
          { text: 'Half the headline rate, because admin and selling time still must be paid for', correct: true, why: 'Correct — effective rate is billed income divided by total hours worked.' },
          { text: 'Double, because no employer overhead', correct: false, why: 'Overhead savings do not double the hours you can bill.' },
        ],
      },
      {
        q: 'The most important financial preparation before leaving a job to freelance is:',
        options: [
          { text: 'A large investment portfolio', correct: false, why: 'Helpful, but not the priority.' },
          { text: 'Six to twelve months of expenses saved and a client base built first', correct: true, why: 'Exactly right — a runway and demand evidence before you cut the safety net.' },
          { text: 'A registered company', correct: false, why: 'A formality compared with cash runway and demand.' },
        ],
      },
      {
        q: 'Asking new clients for advance payments is:',
        options: [
          { text: 'Unprofessional', correct: false, why: 'Advance payments are standard practice in freelancing.' },
          { text: 'Normal and protective, because it funds your work and limits your risk', correct: true, why: 'Correct — it protects against non-payment.' },
          { text: 'Only allowed for large projects', correct: false, why: 'Advance terms can apply at any project size.' },
        ],
      },
    ],
    takeaway: 'Freelancing trades stability for ownership. Model your true hourly rate, build a 6–12 month runway, and never let one client be your whole income.',
  },

  'l1-016': {
    id: 'l1-016',
    title: 'Active Vs Passive Income',
    subtitle: 'Money that needs your time, and money that does not',
    minutes: 5,
    blocks: [
      { kind: 'p', text: 'Active income requires your ongoing time and effort — a salary, a business you run, freelance work. Passive income needs an asset you already own; it pays you whether or not you work this month. Most genuine wealth sits between these two extremes, and the goal is to move income from the first column to the second.' },
      {
        kind: 'table',
        caption: 'Income classified by effort',
        headers: ['Type', 'Examples', 'Effort after setup'],
        rows: [
          ['Active', 'Salary, daily wage, consulting', 'Full time, continuously'],
          ['Semi-active', 'Small business run by staff, rental property, freelance retainers', 'Periodic oversight'],
          ['Passive', 'Bank FD interest, dividends, index funds, rent from a let-out flat', 'Very little'],
        ],
      },
      {
        kind: 'callout',
        tone: 'insight',
        title: 'Passive is not effortless',
        text: 'Setting up an asset usually takes real work — years, sometimes decades. The honest description is "front-loaded effort, then low ongoing effort". Anyone selling you effortless passive income today is selling you a cost today.',
      },
      {
        kind: 'formula',
        label: 'Passive income target',
        expr: 'Annual expenses × 4 = the yearly income your assets must generate',
        note: 'If you need ₹4,00,000 a year, at 7% you need about ₹57 lakh invested.',
      },
      {
        kind: 'example',
        title: 'The ₹20,000-a-month target',
        text: 'A ₹25,000 monthly lifestyle needs ₹3,00,000 a year. At a 7% FD rate that is about ₹43 lakh in deposits. At a long-run equity return it might need ₹30 lakh. Same lifestyle, two very different amounts — which is why the return assumption is the whole decision.',
      },
      {
        kind: 'callout',
        tone: 'warning',
        title: 'Where fake "passive income" hides',
        text: 'MLMs, franchise reselling, and "passive income" courses charge you upfront for the privilege of buying the next person\'s opportunity. Genuine passive income requires you to build or own something real: a deposit, a house, a shareholding, a product.',
      },
      {
        kind: 'sim',
        name: 'compound',
        caption: 'Passive income is the compounding curve you have already built — this is the same machine, aimed at covering monthly expenses.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'The practical sequence',
        text: 'Build active income first — it is the only input. Use it to fund assets (passive income). Never try to skip step one, because almost every "passive income" scheme is really selling you step one in disguise.',
      },
    ],
    quiz: [
      {
        q: 'Passive income is best described as:',
        options: [
          { text: 'Income that requires no setup effort at all', correct: false, why: 'Setup effort is often the largest part.' },
          { text: 'Income from an asset you already own, requiring little ongoing effort', correct: true, why: 'Exactly — the asset does the work after setup.' },
          { text: 'Any income received electronically', correct: false, why: 'The medium of payment says nothing about effort.' },
        ],
      },
      {
        q: 'To generate ₹3,00,000 a year passively from an FD at about 7%, you would need roughly:',
        options: [
          { text: '₹3,00,000', correct: false, why: 'That would yield about 7% a year, not ₹3 lakh.' },
          { text: 'About ₹43 lakh', correct: true, why: '3,00,000 / 0.07 ≈ ₹42.9 lakh.' },
          { text: '₹21 lakh', correct: false, why: 'That is 3,00,000 × 7 — confusing a percentage with a multiplier.' },
        ],
      },
      {
        q: 'Why is "guaranteed effortless passive income" a red flag?',
        options: [
          { text: 'Because all passive income requires daily manual work', correct: false, why: 'Not true — assets do generate income with little effort.' },
          { text: 'Because real assets require significant setup effort, so anyone claiming otherwise is selling you a cost', correct: true, why: 'Correct — the absence of effort is where the sales pitch is.' },
          { text: 'Because passive income is illegal in India', correct: false, why: 'It is entirely legal.' },
        ],
      },
    ],
    takeaway: 'Build active income first, then convert it into assets. Passive means low ongoing effort, not zero setup — and any pitch promising otherwise is selling you a cost.',
  },
}