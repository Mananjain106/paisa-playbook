import type { Chapter } from '../../types'
import { scene4 } from '../../lib/chapter-blocks'
export const business: Record<string, Chapter> = {
  'l4-083': {
    id: 'l4-083',
    title: 'Business Finance',
    subtitle: 'Money in a business is not the same as money in your pocket.',
    minutes: 7,
    blocks: [
      scene4('money-allocation', 'Business money and personal money are two different pools — never one.'),
      { kind: 'p', text: "Business finance is the management of money inside a business: how it comes in, how it is spent, how it is kept safe, and how it is used to grow or survive. For a founder, the hardest lesson is often the simplest one: the business account and the personal account are not the same thing, even when the business is tiny. Mixing them makes every decision harder to understand and every problem harder to fix." },
      { kind: 'h', text: 'What business finance is really about' },
      { kind: 'list', items: [
        'Cash flow: the timing of money in and money out, which matters even more than profit on paper.',
        'Profit and margins: whether the business model makes money after its costs, and how much.',
        'Working capital: the money needed to keep the business operating day to day.',
        'Financing: whether the business uses owner money, loans, or outside investment, and what that costs.',
        'Separation: keeping business money, business records, and business decisions distinct from personal ones.',
      ] },
      { kind: 'callout', tone: 'tip', title: 'Start with cash, then profit, then structure', text: "A business can be profitable on paper and still run out of cash if receivables are slow, stock is high, or expenses arrive before the money does. The practical order is to understand cash flow first, then profit, then financing. A good structure does not fix bad cash management." },
      { kind: 'example', title: 'The founder trap', text: "A founder who pays personal groceries from the business account, or pays business bills from a personal card without recording them, slowly loses track of what the business is actually doing. The business may still be fine, but the picture becomes muddy. The fix is boring and powerful: separate accounts, clear records, and a habit of asking what the business can actually afford." },
      { kind: 'terms', items: [
        { term: 'business finance', meaning: 'the management of money in a business, including cash flow, profit, working capital, financing, and the separation of business and personal money.' },
        { term: 'working capital', meaning: 'the short-term money a business needs to keep operating, including stock, receivables, payables, and cash in hand.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the most useful first habit for a new founder in business finance?',
        options: [
          { text: 'Keep business money and personal money clearly separate, and track cash flow before celebrating profit.', correct: true, why: 'Separation and cash awareness make the business legible. Without them, even a profitable business can become confusing and fragile.' },
          { text: 'Pay yourself as much as possible from day one, because the founder should benefit immediately.', correct: false, why: 'Taking too much early can starve the business of cash; founder pay should fit the business’s actual position.' },
          { text: 'Focus only on revenue growth, since profit and cash will sort themselves out later.', correct: false, why: 'Revenue without cash discipline can hide trouble; growth without cash control can make a business fail faster.' },
        ],
      },
    ],
    takeaway: 'Business finance is about cash, profit, structure, and separation. The first and most useful discipline is to keep the business’s money and records distinct from your own.',
  },

  'l4-084': {
    id: 'l4-084',
    title: 'Sole Proprietorship',
    subtitle: 'The simplest business form, and the one where you are fully on the hook.',
    minutes: 6,
    blocks: [
      scene4('dashboard', 'One owner, with personal assets fully exposed to the business.'),
      { kind: 'p', text: "A sole proprietorship is a business owned and run by one person, where the business and the owner are treated as one for many legal and tax purposes. It is the simplest structure to start, which is why so many small businesses begin that way. The trade-off is simplicity now in exchange for direct personal exposure later: the owner is usually personally responsible for the business’s obligations." },
      { kind: 'h', text: 'What defines a sole proprietorship' },
      { kind: 'list', items: [
        'One owner who runs the business and keeps the profits.',
        'Simple to set up and operate, with fewer formalities than some other structures.',
        'The owner is typically personally liable for business debts and obligations.',
        'The business income is generally taxed in the hands of the owner, depending on the law.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'Simplicity can come with personal risk', text: "A sole proprietorship can be a good starting point for a small, low-risk venture. But if the business takes on debt, faces lawsuits, or runs into trouble, the owner’s personal assets can be exposed in ways they would not be in a more separate structure. The simplicity is real; so is the personal risk." },
      { kind: 'example', title: 'A small start, a careful plan', text: "A freelancer or small shopkeeper might begin as a sole proprietor because the structure is quick and easy. If the business grows, takes on employees, or begins carrying meaningful debt, the owner may want to revisit the structure. The right form depends on the business’s size, risk, and plans, not just on what is easiest today." },
      { kind: 'terms', items: [
        { term: 'sole proprietorship', meaning: 'a business owned and run by one person, where the owner and business are closely tied together, often with the owner personally liable for business obligations.' },
        { term: 'personal liability', meaning: 'the situation where an individual is personally responsible for obligations, so personal assets may be at risk beyond the business itself.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the most important trade-off of a sole proprietorship?',
        options: [
          { text: 'It is simple and easy to start, but the owner is typically personally liable for business obligations.', correct: true, why: 'A sole proprietorship is attractive for simplicity, but that simplicity often comes with direct personal exposure to business risk.' },
          { text: 'It is the most formal and complex structure, suitable only for large companies.', correct: false, why: 'A sole proprietorship is usually one of the simplest structures, not the most formal.' },
          { text: 'It keeps the owner completely separate from all business liabilities, like a corporation.', correct: false, why: 'A sole proprietorship does not create the same separation as some other structures; the owner is often personally on the hook.' },
        ],
      },
    ],
    takeaway: 'A sole proprietorship is simple and popular for small starts, but it often leaves the owner personally responsible for the business. Use it when simplicity fits the risk; revisit it when the risk grows.',
  },

  'l4-085': {
    id: 'l4-085',
    title: 'Partnership',
    subtitle: 'A business owned by two or more people — and the agreements that keep it working.',
    minutes: 6,
    blocks: [
      scene4('share-slice', 'Two or more owners splitting one pie — the agreement decides the slices.'),
      { kind: 'p', text: "A partnership is a business owned by two or more people who agree to share the work, the profits, and the responsibilities. It is a natural structure when a business is founded by more than one person, because it lets them pool skills, money, and time. The hard part is not starting the partnership; it is managing the relationship when the business gets harder, because partners can disagree on money, direction, effort, and exit." },
      { kind: 'h', text: 'What makes partnerships work or fail' },
      { kind: 'list', items: [
        'The written agreement: who does what, who puts in what, how profits are shared, and what happens if someone leaves.',
        'Trust and roles: partners need clarity on responsibilities, because vague roles create friction.',
        'Capital and contribution: how much money, time, or skill each partner brings, and whether that is fair.',
        'Exit and dispute mechanisms: what happens if a partner wants out, becomes unable to continue, or disagrees fundamentally.',
      ] },
      { kind: 'callout', tone: 'tip', title: 'Write the business marriage before the business starts', text: "A partnership without a clear agreement is a recipe for pain later. The best time to decide how profits are shared, how decisions are made, and how a partner can exit is before the business is under stress. Once money and emotion are involved, every question gets harder." },
      { kind: 'example', title: 'A simple partnership agreement', text: "Two friends start a small service business. One handles sales, the other handles delivery. They agree on how profits are split, what happens if one wants to leave, and how new decisions are approved. The agreement does not prevent every problem, but it gives them a shared playbook. Without it, the same situation would likely become a fight when stress appears." },
      { kind: 'terms', items: [
        { term: 'partnership', meaning: 'a business owned by two or more people who agree to share the profits, responsibilities, and risks of the business.' },
        { term: 'partnership agreement', meaning: 'the written terms that define how partners share profits, make decisions, contribute capital, and exit the business.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the most important practical element of a partnership?',
        options: [
          { text: 'A clear written agreement covering roles, profit sharing, decision-making, and exit, so partners know what to expect.', correct: true, why: 'Partnerships live or die on clarity. Without an agreement, money and stress will force the questions anyway, usually worse.' },
          { text: 'Choosing partners only from the same family, since that guarantees trust.', correct: false, why: 'Family can help or hurt; trust comes from clarity and behaviour, not just relation.' },
          { text: 'Avoiding any written document so the partnership stays flexible.', correct: false, why: 'Flexibility without clarity usually becomes conflict; a written agreement is what keeps flexibility usable.' },
        ],
      },
    ],
    takeaway: 'A partnership lets people share ownership and work, but it needs a clear agreement from the start. The biggest risk is not the business failing; it is the partners failing to agree on how to run it.',
  },

  'l4-086': {
    id: 'l4-086',
    title: 'LLP',
    subtitle: 'A partnership-like structure with more separation from personal risk.',
    minutes: 6,
    blocks: [
      scene4('balance-sheet', 'A partnership feel, with a cleaner liability position behind it.'),
      { kind: 'p', text: "An LLP, or Limited Liability Partnership, is a business structure that combines features of a partnership with a layer of limited liability for the partners. It is often used by professional firms and small-to-medium businesses that want more flexibility than a company but more protection than a traditional partnership. The key idea is that the partners can share the business while limiting their personal exposure to some extent." },
      { kind: 'h', text: 'What an LLP is designed for' },
      { kind: 'list', items: [
        'A structure that feels partnership-like in management and profit sharing.',
        'Limited liability for the partners within the law’s framework, so personal exposure is not unlimited.',
        'More formality than a simple partnership, with registration and compliance requirements.',
        'Flexibility in how the business is run, depending on the LLP agreement and the law.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'Limited liability is not a magic force field', text: "An LLP can reduce personal exposure compared with a traditional partnership, but it is not a licence to ignore risk or compliance. The protection depends on the law, the structure, and the conduct of the business. Good owners still keep the business clean, because a badly run LLP can create trouble of its own." },
      { kind: 'example', title: 'Choosing an LLP', text: "A small professional practice with several owners may prefer an LLP so that the owners can run the business jointly while having more protection than in a plain partnership. The choice is often about balance: partnership-style flexibility, plus a better liability and structure position for a growing business." },
      { kind: 'terms', items: [
        { term: 'LLP', meaning: 'Limited Liability Partnership — a business structure that blends partnership-style management with limited liability for the partners.' },
        { term: 'limited liability', meaning: 'the idea that the owners’ personal risk is limited to a defined extent, so personal assets are not automatically fully exposed to business obligations.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the main reason a business might choose an LLP?',
        options: [
          { text: 'To combine partnership-style management with limited liability for the partners.', correct: true, why: 'An LLP is often chosen for the mix of shared management and a better liability position than a traditional partnership.' },
          { text: 'To create a structure with no formalities whatsoever.', correct: false, why: 'An LLP has registration and compliance requirements; it is not a no-formalities structure.' },
          { text: 'To make the owners fully personally liable for everything the business does.', correct: false, why: 'An LLP is chosen in part for limited liability, not to increase personal exposure.' },
        ],
      },
    ],
    takeaway: 'An LLP is a partnership-like structure with limited liability for the partners. It suits businesses that want flexibility with a better liability and formal structure than a simple partnership.',
  },

  'l4-087': {
    id: 'l4-087',
    title: 'Company Formation',
    subtitle: 'The point where a business becomes a separate legal entity.',
    minutes: 6,
    blocks: [
      scene4('share-slice', 'Incorporation turns owners into shareholders of one separate entity.'),
      { kind: 'p', text: "A company is a business that has a separate legal identity from its owners. That separation is the big idea: the company can own property, take on debt, sign contracts, and be sued in its own name. For founders, that changes the relationship between the business and their personal assets, and it brings more formality, more compliance, and more discipline." },
      { kind: 'h', text: 'Why people incorporate a business' },
      { kind: 'list', items: [
        'Separation between the business and the owners, which can limit personal exposure within the law.',
        'The ability to raise capital more structurally, through equity or debt in the company’s name.',
        'A clearer framework for ownership, decision-making, and continuity.',
        'More credibility in some contexts, especially with larger clients, investors, or lenders.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'Incorporation is a tool, not a badge of seriousness', text: "People sometimes think a company is automatically better than a simpler structure. It is not. A company adds formality and compliance, and those have costs. The right question is whether the business needs the separation, the fundraising path, or the ownership structure a company provides." },
      { kind: 'example', title: 'Simple business, bigger ambitions', text: "A small shop may be fine as a simpler structure at first, but if it wants to raise investment from outsiders, add co-founders cleanly, or separate liability more clearly, a company can make sense. The structure should fit the business’s next stage, not just its current size." },
      { kind: 'terms', items: [
        { term: 'company', meaning: 'a business entity with a legal identity separate from its owners, able to own assets, incur liabilities, and operate under formal rules.' },
        { term: 'incorporation', meaning: 'the process of forming a company so that it becomes a separate legal entity from its owners.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the main advantage of forming a company?',
        options: [
          { text: 'It creates a legal entity separate from the owners, which can help with liability, ownership structure, and fundraising.', correct: true, why: 'The core benefit of a company is the separation between the business and the owners, along with the structure that brings.' },
          { text: 'It removes all personal responsibility for the founders forever.', correct: false, why: 'A company changes the structure but does not erase all personal responsibility in every situation; the protection has limits.' },
          { text: 'It is always the cheapest and simplest option for any business.', correct: false, why: 'A company usually adds formalities and compliance costs, so it is not always the simplest option.' },
        ],
      },
    ],
    takeaway: 'A company is a separate legal entity from its owners, which can bring liability separation, ownership clarity, and fundraising options. It is a tool for a business stage and strategy, not automatically the best choice for everyone.',
  },

  'l4-088': {
    id: 'l4-088',
    title: 'Business Registration',
    subtitle: 'The paperwork that makes a business legitimate to the system.',
    minutes: 5,
    blocks: [
      scene4('dashboard', 'Registration is the business appearing on the system map.'),
      { kind: 'p', text: "Business registration is the process of bringing the business into the formal system: getting the identifiers, licences, and tax registrations the business needs to operate legally and cleanly. The exact forms depend on the structure and the activity, but the principle is the same: a business that wants to transact, hire, sign contracts, and file taxes properly usually needs to be registered in more than one place." },
      { kind: 'h', text: 'Why registration matters' },
      { kind: 'list', items: [
        'It gives the business a formal identity, which it needs to open accounts, sign contracts, and operate properly.',
        'It connects the business to tax and compliance systems, which is part of running it responsibly.',
        'It can be required before certain activities, licences, or government schemes are available.',
        'It helps keep the business distinct from the owner’s personal affairs, especially in a company or similar structure.',
      ] },
      { kind: 'callout', tone: 'tip', title: 'Do not treat registration as a one-time formality', text: "Registration is not the end of compliance; it is the start. After it comes filings, tax registrations, renewals, and records. The useful habit is to build the compliance calendar from day one, because late paperwork tends to become expensive paperwork." },
      { kind: 'example', title: 'A clean setup', text: "A new business that registers properly, gets its tax and business identifiers in order, and keeps its records tidy starts with fewer headaches than one that delays and then has to untangle a messy history. The setup work is boring, but it saves time later when the business actually needs to operate seriously." },
      { kind: 'terms', items: [
        { term: 'business registration', meaning: 'the process of formally recording a business with the relevant authorities so it can operate, transact, and comply with the law.' },
        { term: 'compliance', meaning: 'following the legal and regulatory requirements that apply to the business, including filings, taxes, and renewals.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the most useful way to think about business registration?',
        options: [
          { text: 'As the first step in a compliance process that makes the business formal, operable, and properly connected to the systems it must use.', correct: true, why: 'Registration is not just a formality; it is how the business enters the system and becomes able to operate cleanly.' },
          { text: 'As an optional luxury that only big companies need.', correct: false, why: 'Many businesses need registration and tax identifiers to operate properly, not just large ones.' },
          { text: 'As a one-time task that never needs attention again.', correct: false, why: 'Registration is followed by ongoing filings, renewals, and compliance work.' },
        ],
      },
    ],
    takeaway: 'Business registration is what makes a business formal in the eyes of the system. Treat it as the start of compliance, not the end of it, and keep the paperwork tidy from the beginning.',
  },

  'l4-089': {
    id: 'l4-089',
    title: 'Business Taxation',
    subtitle: 'Taxes on a business are different from taxes on a salary.',
    minutes: 6,
    blocks: [
      scene4('tax-bracket', 'Business income, GST and payroll — tax that a salary never faces.'),
      { kind: 'p', text: "Business taxation is the set of taxes a business may owe on its income, transactions, employees, and activities. It is broader than personal income tax because a business can have many moving parts: revenue, expenses, payroll, sales tax or GST, withholding, and different rules for different types of income. The first lesson is that business tax is not the same as the tax on an individual’s salary, and the second is that the structure of the business matters." },
      { kind: 'h', text: 'What business tax usually involves' },
      { kind: 'list', items: [
        'Tax on business income, depending on the structure and the law.',
        'GST or similar indirect taxes on sales and purchases, where applicable.',
        'Payroll-related obligations if the business has employees.',
        'Filings and records that show income, expenses, and the tax position.',
        'Planning opportunities that are lawful, like choosing structure, timing, and allowable deductions sensibly.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'Good business tax is clean, not clever', text: "A business should pay what the law asks and use the lawful tools the law gives it. The risk comes when owners try to be too clever: mixing personal and business expenses, under-reporting income, or treating the business like a personal wallet. Clean records and a proper structure are usually more valuable than aggressive shortcuts." },
      { kind: 'example', title: 'The structure tax effect', text: "The way a business is structured can change how it is taxed and how money moves out to the owners. That is one reason founders think about registration and structure early. The tax details are a reason to get professional advice, not to wing it with a spreadsheet and good intentions." },
      { kind: 'terms', items: [
        { term: 'business taxation', meaning: 'the taxes and compliance obligations that apply to a business, including income tax, indirect taxes, payroll obligations, and filings.' },
        { term: 'GST', meaning: 'Goods and Services Tax — an indirect tax on the supply of goods and services, administered under the law in India.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the most important lesson about business taxation?',
        options: [
          { text: 'Business tax is different from personal salary tax, and the business’s structure and records matter as much as the numbers.', correct: true, why: 'Business taxation covers income, indirect taxes, payroll, and filings, and it depends heavily on structure and cleanliness.' },
          { text: 'Business tax is identical to personal income tax, so the same rules apply in every case.', correct: false, why: 'Business taxation is broader and often more complex than personal income tax.' },
          { text: 'Tax for a business is mostly a problem for accountants and not worth thinking about early.', correct: false, why: 'Tax and structure decisions early can matter a lot, so it is worth understanding the basics before habits are fixed.' },
        ],
      },
    ],
    takeaway: 'Business taxation is not the same as salary taxation. Keep the records clean, choose the structure well, use lawful planning, and get professional help when the structure or scale makes it worth it.',
  },

  'l4-090': {
    id: 'l4-090',
    title: 'Business Records',
    subtitle: 'If it is not recorded, it does not exist for the business.',
    minutes: 5,
    blocks: [
      scene4('balance-sheet', 'Records are the written memory of every rupee the business moves.'),
      { kind: 'p', text: "Business records are the written and digital evidence of what the business did: sales, purchases, payments, receipts, payroll, taxes, and contracts. Good records are not only for compliance; they are the business’s memory. They tell you whether the business is healthy, whether a decision worked, and what happened in any given month. A business without records is flying partly blind." },
      { kind: 'h', text: 'Records worth keeping well' },
      { kind: 'list', items: [
        'Sales and income records, including invoices and payment evidence.',
        'Expense records, including bills, receipts, and the purpose of each expense.',
        'Bank and payment records, so the flow of money can be reconciled.',
        'Payroll and contractor records, if the business pays people.',
        'Tax and filing records, including returns, assessments, and supporting documents.',
      ] },
      { kind: 'callout', tone: 'tip', title: 'Make records boring and reliable', text: "The best record system is not the fanciest one; it is the one you actually use every month. Keep it simple, keep it consistent, and keep source documents with the records. When tax time or a loan application comes, a boring system is a gift." },
      { kind: 'example', title: 'A messy business becomes a messy decision', text: "If a business has sales happening but no proper invoices, expenses paid but no receipts, and money moving without reconciliation, the owner cannot trust the numbers. That makes every decision harder: pricing, hiring, borrowing, and tax. Good records do not just satisfy the government; they let the owner think clearly." },
      { kind: 'terms', items: [
        { term: 'business records', meaning: 'the documents and data that evidence a business’s transactions, finances, and compliance, including income, expenses, payroll, and filings.' },
        { term: 'reconciliation', meaning: 'the process of checking that two sets of records, such as the books and the bank statement, agree with each other.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the most useful habit for business records?',
        options: [
          { text: 'Keep records simple, consistent, and complete every month, with source documents attached where possible.', correct: true, why: 'Records are useful only if they are maintained regularly and can be trusted, which simple consistency makes possible.' },
          { text: 'Keep records only when the tax department asks for them.', correct: false, why: 'Waiting until someone asks usually means the records are incomplete or missing when they matter most.' },
          { text: 'Rely on memory and a rough notebook, since formal records are unnecessary for small businesses.', correct: false, why: 'Even small businesses benefit from proper records; memory is unreliable once money and decisions accumulate.' },
        ],
      },
    ],
    takeaway: 'Business records are the memory and proof of the business. Keep them simple, complete, and current, because good records make cash, tax, and decisions much easier.',
  },

  'l4-091': {
    id: 'l4-091',
    title: 'Growth Planning',
    subtitle: 'Growing a business without breaking its finances.',
    minutes: 6,
    blocks: [
      scene4('goal-ladder', 'Growth is a climb that needs cash for every rung.'),
      { kind: 'p', text: "Growth is exciting, and it is also dangerous. A business can grow revenue and still run into cash trouble if the growth requires more money, more stock, more staff, or more investment than the cash flow can support. Growth planning is the discipline of expanding in a way that the business can actually sustain, not just in a way that looks impressive on a graph." },
      { kind: 'h', text: 'What growth planning should answer' },
      { kind: 'list', items: [
        'What growth requires in cash, staff, stock, and time before the money comes back.',
        'How the business will fund the growth: from profits, savings, debt, or outside capital.',
        'Whether the growth improves margins or just adds activity.',
        'What risks grow with the business: concentration, fixed costs, over-hiring, and cash gaps.',
        'What the slowdown plan is, if the growth does not arrive as expected.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'Growth can kill a business that is otherwise healthy', text: "It sounds strange, but fast growth can drain a business faster than stagnation. If every new sale requires upfront cash and the business is already tight, growth can expose a bad model or bad timing. Plan for growth as a financial commitment, not just a marketing outcome." },
      { kind: 'example', title: 'Growth with a cash plan', text: "A business that wants to double sales should first check whether it has the cash to buy the stock, hire the people, and wait for the receivables. If it does not, the growth plan needs financing or a slower ramp. A growth plan that ignores cash is a wish, not a plan." },
      { kind: 'terms', items: [
        { term: 'growth planning', meaning: 'the process of planning business expansion in a way that accounts for the cash, costs, risks, and funding needed to sustain it.' },
        { term: 'overtrading', meaning: 'a situation where a business grows so fast that it runs into cash trouble because it has to fund more activity before the money comes back.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the most common growth mistake?',
        options: [
          { text: 'Growing so fast that the business runs out of cash because the funding and timing were never planned.', correct: true, why: 'Growth can strain cash and fixed costs, so a plan that ignores funding and timing can break a business that otherwise looks successful.' },
          { text: 'Growing too slowly, because slow growth always means failure.', correct: false, why: 'Slow growth can be safer and more sustainable than reckless growth; pace matters more than speed alone.' },
          { text: 'Hiring too few people, since hiring is never a financial risk.', correct: false, why: 'Hiring adds fixed costs and obligations; it can be a significant financial risk if growth does not materialise.' },
        ],
      },
    ],
    takeaway: 'Growth planning is about expanding without outrunning the business’s cash and structure. Before chasing growth, know what it costs, how it is funded, and what happens if it is slower than hoped.',
  },

  'l4-092': {
    id: 'l4-092',
    title: 'Startup Finance',
    subtitle: 'Early-stage money is mostly about runway, not glamour.',
    minutes: 6,
    blocks: [
      scene4('corpus-ladder'),
      { kind: 'p', text: "Startup finance is the money management of an early-stage business that may not yet be profitable and may be spending faster than it earns. That means the central question is usually runway: how long can the business keep going before it runs out of cash? The glamour of funding rounds and valuations matters less than the boring reality of burn, income, and timing." },
      { kind: 'h', text: 'The startup finance basics' },
      { kind: 'list', items: [
        'Runway: how many months the business can survive at its current burn rate.',
        'Burn rate: how fast the business spends money, especially when income is still small or unstable.',
        'Funding sources: founder money, friends and family, loans, grants, angels, venture capital, or revenue.',
        'Milestones: what the business needs to achieve to justify the next step, whether that is revenue, users, or product completion.',
        'Reality checks: whether the business model can become sustainable, not just fundable.',
      ] },
      { kind: 'callout', tone: 'warning', title: 'Funding is not success; runway is survival', text: "A startup can raise money and still fail if it burns through the money without reaching a sustainable path. The money buys time, not victory. Good startup finance is about buying the right kind of time and using it to get to a real business, not just to keep moving." },
      { kind: 'example', title: 'A runway calculation habit', text: "If the business has a certain amount of cash and spends a certain amount each month, the runway is the months left before the cash is gone. That number should change how decisions are made: hiring, spending, pricing, and fundraising. A startup that does not know its runway is flying without a fuel gauge." },
      { kind: 'terms', items: [
        { term: 'runway', meaning: 'how long a business can continue operating before it runs out of cash, given its current spending and income.' },
        { term: 'burn rate', meaning: 'the rate at which a business spends money, especially in early stages when spending may exceed income.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the most useful number to know in startup finance?',
        options: [
          { text: 'Runway: how long the business can keep operating before cash runs out at the current burn rate.', correct: true, why: 'Runway tells the startup how much time it has to reach stability or the next milestone, which shapes every spending decision.' },
          { text: 'The valuation of the company, because that is the best measure of success early on.', correct: false, why: 'Valuation can be misleading early; runway is more practical because it measures survival time.' },
          { text: 'The number of employees, since more people always means more progress.', correct: false, why: 'Headcount is not a measure of success by itself; spending and runway matter more in early stages.' },
        ],
      },
    ],
    takeaway: 'Startup finance is mostly about runway, burn, and milestones. Money buys time, and the job is to use that time to build a business that can eventually stand on its own.',
  },

  'l4-093': {
    id: 'l4-093',
    title: 'Exit Planning',
    subtitle: 'Thinking about the end before the business gets expensive.',
    minutes: 6,
    blocks: [
      scene4('dashboard', 'A business that can run without you is worth far more on exit.'),
      { kind: 'p', text: "Exit planning is the process of thinking about how a business owner will eventually leave the business, whether by selling it, shutting it down, passing it on, or some other path. It sounds premature in a young business, but the decisions made early affect the exit later. The value of a business is easier to protect and shape when the owner thinks about the end from time to time." },
      { kind: 'h', text: 'Why exit planning is useful early' },
      { kind: 'list', items: [
        'It shapes how the business is built: clean records, separate accounts, and good contracts make the business more transferable.',
        'It reduces the chance of being trapped in a business you cannot leave cleanly.',
        'It helps align the business with a possible future buyer, successor, or closure path.',
        'It encourages the owner to think about value, not just activity.',
      ] },
      { kind: 'callout', tone: 'tip', title: 'Build the business as if you might sell it one day, even if you do not plan to', text: "Thinking about exit does not mean thinking about quitting every day. It means building a business that is legible, valuable, and not dependent on one person in a way that destroys value on exit. A business that can run without the founder is more valuable in almost any exit." },
      { kind: 'example', title: 'A business that is easier to exit', text: "A founder who keeps clean books, maintains customer relationships that belong to the business rather than only to the founder, and documents how the business works is in a stronger exit position than one who builds everything around their personal involvement. The exit is easier when the business is less personal." },
      { kind: 'terms', items: [
        { term: 'exit planning', meaning: 'the process of preparing a business for a future departure by the owner, whether through sale, succession, closure, or another path.' },
        { term: 'successor', meaning: 'a person or group that takes over the business or its ownership when the current owner leaves.' },
      ] },
    ],
    quiz: [
      {
        q: 'What is the most useful habit in exit planning, even for a young business?',
        options: [
          { text: 'Building the business so it is clean, transferable, and not wholly dependent on the founder.', correct: true, why: 'A business that is well documented and less founder-dependent is easier to sell, pass on, or wind down later.' },
          { text: 'Selling the business as soon as possible, before it has any real value.', correct: false, why: 'An early sale of a business with little value is usually not a good plan; exit planning is about building optionality, not rushing out.' },
          { text: 'Ignoring the future and focusing only on today’s revenue.', correct: false, why: 'Ignoring the end can create a business that is hard to exit cleanly; early thinking improves later options.' },
        ],
      },
    ],
    takeaway: 'Exit planning is about thinking ahead so the business can be sold, passed on, or closed cleanly if needed. Build it as something that can exist without you, and the exit becomes more valuable and less painful.',
  },
}