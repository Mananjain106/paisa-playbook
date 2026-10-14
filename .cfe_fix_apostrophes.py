import sys
sys.stdout.reconfigure(encoding='utf-8')

fixes = [
    ('src/data/chapters/l3-equity.ts',
     "Asia's oldest exchange and home of the Sensex.",
     "Asia\\'s oldest exchange and home of the Sensex."),
    ('src/data/chapters/l3-valuation.ts',
     "ROE measures how well the owners' money is used",
     "ROE measures how well the owners\\' money is used"),
    ('src/data/chapters/l3-funds.ts',
     "NAV is the fund's price per unit, struck once daily",
     "NAV is the fund\\'s price per unit, struck once daily"),
    ('src/data/chapters/l3-assets.ts',
     "A gold ETF gives metal exposure at a fraction of physical gold's cost",
     "A gold ETF gives metal exposure at a fraction of physical gold\\'s cost"),
]

for filepath, old, new in fixes:
    with open(filepath, 'r', encoding='utf-8') as f:
        c = f.read()
    if old in c:
        c = c.replace(old, new)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(c)
        print(f'Fixed: {old[:40]}...')
    else:
        print(f'NOT FOUND: {old[:40]}...')
        # Show context
        idx = c.find(old[:20])
        if idx >= 0:
            print(repr(c[idx:idx+80]))
