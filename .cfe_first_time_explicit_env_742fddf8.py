import sys
sys.stdout.reconfigure(encoding='utf-8')

# Map of chapter id -> (file, scene_name, scene_caption)
fixes = {
    # foundations
    'l3-009': ('src/data/chapters/l3-foundations.ts', 'interest-growth', 'Compounding needs time — the same money, the same rate, a very different result over 5 years versus 25.'),
    'l3-011': ('src/data/chapters/l3-foundations.ts', 'safe-vs-risk', 'For money needed within a year there is almost nothing safer than a government bill.'),
    'l3-014': ('src/data/chapters/l3-foundations.ts', 'yield-curve', 'Every bond term has its own yield — learn the vocabulary and you can read any quote.'),
    'l3-015': ('src/data/chapters/l3-foundations.ts', 'price-yield-inverse', 'The coupon is fixed; the price and yield move opposite to the market.'),
    'l3-016': ('src/data/chapters/l3-foundations.ts', 'price-yield-inverse', 'Face value never changes — but the price you pay and the yield you earn do.'),
    'l3-020': ('src/data/chapters/l3-foundations.ts', 'yield-curve', 'Credit risk and rate risk are different. One is about the borrower, the other about the market.'),
    # equity
    'l3-022': ('src/data/chapters/l3-equity.ts', 'shareslice', 'One unit of ownership — your slice of the whole company.'),
    'l3-023': ('src/data/chapters/l3-equity.ts', 'shareslice', 'As an owner you get votes, dividends if declared, and a residual claim.'),
    'l3-025': ('src/data/chapters/l3-equity.ts', 'profit-waterfall', 'Most long-term returns are capital gains, not dividends.'),
    'l3-026': ('src/data/chapters/l3-equity.ts', 'market-cap-ladder', 'The exchange is the regulated marketplace where shares change hands.'),
    'l3-027': ('src/data/chapters/l3-equity.ts', 'market-cap-ladder', 'The NSE handles most Indian equity volume — tighter spreads matter more than small fee differences.'),
    'l3-028': ('src/data/chapters/l3-equity.ts', 'market-cap-ladder', "The BSE is Asia's oldest exchange and home of the Sensex."),
    'l3-029': ('src/data/chapters/l3-equity.ts', 'money-allocation', 'Your broker executes and holds your securities — compare total cost, not just the advertised fee.'),
    'l3-030': ('src/data/chapters/l3-equity.ts', 'money-allocation', 'The demat is where your securities live electronically — one account is enough for everything.'),
    'l3-031': ('src/data/chapters/l3-equity.ts', 'money-allocation', 'The trading account holds the cash that backs your orders; the demat holds the securities.'),
    'l3-032': ('src/data/chapters/l3-equity.ts', 'market-cap-ladder', 'You buy at the ask and sell at the bid — the spread is an immediate cost on every trade.'),
    'l3-033': ('src/data/chapters/l3-equity.ts', 'market-cap-ladder', 'A market order guarantees execution, not price.'),
    'l3-034': ('src/data/chapters/l3-equity.ts', 'market-cap-ladder', 'A limit order trades control of price back to you at the cost of possible non-execution.'),
    'l3-035': ('src/data/chapters/l3-equity.ts', 'time-horizon', 'India settles equity trades on T+1 — money leaves when you buy, proceeds arrive the next working day.'),
    # valuation
    'l3-041': ('src/data/chapters/l3-valuation.ts', 'profit-waterfall', 'Assets range from cash to goodwill — judge each by how easily it converts to real money.'),
    'l3-042': ('src/data/chapters/l3-valuation.ts', 'profit-waterfall', 'Liabilities are ranked claims — equity sits at the bottom of the queue.'),
    'l3-043': ('src/data/chapters/l3-valuation.ts', 'profit-waterfall', 'Cash flow is the statement that cannot be dressed up — track it against profit.'),
    'l3-044': ('src/data/chapters/l3-valuation.ts', 'profit-waterfall', 'Twenty focused minutes with the three statements and the notes beats an hour of headlines.'),
    'l3-047': ('src/data/chapters/l3-valuation.ts', 'valuation', 'P/B compares price to accounting net assets — genuinely informative for banks.'),
    'l3-048': ('src/data/chapters/l3-valuation.ts', 'valuation', "ROE measures how well the owners' money is used — read it with debt-to-equity."),
    'l3-050': ('src/data/chapters/l3-valuation.ts', 'valuation', 'Margin is profit as a percentage of revenue — pricing power and efficiency in one number.'),
    # funds
    'l3-052': ('src/data/chapters/l3-funds.ts', 'fee-drag-visual', 'The AMC is the company you pay — judge it on net long-term performance after fees.'),
    'l3-053': ('src/data/chapters/l3-funds.ts', 'fee-drag-visual', "NAV is the fund's price per unit, struck once daily — what you see is not what you get."),
    'l3-057': ('src/data/chapters/l3-funds.ts', 'allocation-pie', 'Hybrid funds put you between equity and debt — check who controls the most important decision.'),
    'l3-061': ('src/data/chapters/l3-funds.ts', 'passive-vs-active', 'An ETF gives intraday access to an index — but check the premium to NAV before buying.'),
    'l3-063': ('src/data/chapters/l3-funds.ts', 'market-cap-ladder', 'The Sensex is the BSE benchmark of 30 companies — like the Nifty, it tracks the large end of the market.'),
    # assets
    'l3-068': ('src/data/chapters/l3-assets.ts', 'gold-role', 'Physical gold carries a 20–40% entry cost — for investment use a fund or ETF.'),
    'l3-069': ('src/data/chapters/l3-assets.ts', 'gold-role', "A gold ETF gives metal exposure at a fraction of physical gold's cost — watch the premium to NAV."),
    'l3-071': ('src/data/chapters/l3-assets.ts', 'gold-role', 'Silver is half precious, half industrial — roughly 1.5x as volatile as gold.'),
    'l3-072': ('src/data/chapters/l3-assets.ts', 'currency-erosion', 'Futures give leveraged exposure with daily settlement — size these positions very small.'),
    'l3-074': ('src/data/chapters/l3-assets.ts', 'property-cashflow', 'Land produces no income, is nearly impossible to mortgage and takes years to sell.'),
    'l3-075': ('src/data/chapters/l3-assets.ts', 'property-cashflow', 'Apartments are more liquid than land, but you owe maintenance every month for life.'),
    'l3-077': ('src/data/chapters/l3-assets.ts', 'property-cashflow', 'Appreciation is the main source of property return — and the hardest to forecast.'),
    'l3-078': ('src/data/chapters/l3-assets.ts', 'property-cashflow', 'Property tax is small but permanent — unpaid dues complicate a sale.'),
    'l3-079': ('src/data/chapters/l3-assets.ts', 'property-cashflow', 'Stamp duty and registration add 5–10% to a purchase — paid upfront, never recovered.'),
    'l3-080': ('src/data/chapters/l3-assets.ts', 'property-cashflow', 'Registration receipts prove your original cost — keep them for the life of the property.'),
    'l3-081': ('src/data/chapters/l3-assets.ts', 'property-cashflow', 'Maintenance never stops — treat property as a zero-coupon bond and subtract every running cost.'),
    'l3-083': ('src/data/chapters/l3-assets.ts', 'property-cashflow', 'Property is the least liquid major asset — concentrating your net worth in one flat is risky.'),
    # tricks
    'l3-088': ('src/data/chapters/l3-tricks.ts', 'time-horizon', 'Investing rests on an examinable track record; speculation rests on a guess about price.'),
    'l3-093': ('src/data/chapters/l3-tricks.ts', 'time-horizon', 'Keep a written record of every decision and your emotional state when you made it.'),
}

count = 0
for chap_id, (filepath, scene_name, caption) in fixes.items():
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find the chapter block
    marker = f"  '{chap_id}': {{"
    idx = content.find(marker)
    if idx == -1:
        print(f'NOT FOUND: {chap_id} in {filepath}')
        continue
    
    # Find the blocks array opening
    blocks_start = content.find('blocks: [', idx)
    if blocks_start == -1:
        print(f'NO BLOCKS: {chap_id} in {filepath}')
        continue
    
    # Find the closing ] of blocks array
    blocks_end = content.find('],', blocks_start)
    if blocks_end == -1:
        print(f'NO BLOCKS END: {chap_id} in {filepath}')
        continue
    
    # Insert scene block right after 'blocks: ['
    # Account for CRLF line endings
    insertion = '\r\n      { kind: \'scene\', name: \'' + scene_name + '\', caption: \'' + caption + '\' },\r\n'
    new_content = content[:blocks_start + len('blocks: [')] + insertion + content[blocks_start + len('blocks: ['):]
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    count += 1
    print(f'OK: {chap_id} -> {scene_name} in {filepath}')

print(f'\nTotal: {count} chapters patched')
