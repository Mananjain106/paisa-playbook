import re, sys
sys.stdout.reconfigure(encoding='utf-8')

d = open('src/data/curriculum.generated.ts', encoding='utf-8').read()
needle4 = '"level": 4'
needle5 = '"level": 5'
i = d.find(needle4)
j = d.find(needle5, i)
block = d[i:j]

# id then slug then title within same object
pat = re.compile(r'"id": "(l4-\d+)".*?"slug": "([^"]+)".*?"title": "([^"]+)"', re.S)
chapters = pat.findall(block)

for cid, slug, title in chapters:
    print(cid + '\t' + slug + '\t' + title)
print()
print('Total: ' + str(len(chapters)) + ' chapters')
