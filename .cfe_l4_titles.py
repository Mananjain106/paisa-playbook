import re, sys
sys.stdout.reconfigure(encoding='utf-8')
d = open('src/data/curriculum.generated.ts', encoding='utf-8').read()
i = d.find(chr(34) + 'level' + chr(34) + ': 4')
j = d.find(chr(34) + 'level' + chr(34) + ': 5', i)
block = d[i:j]
chapters = re.findall(r'"id": "(l4-\d+)".*?"title": "([^"]+)"', block)
for cid, title in chapters:
    print(cid + chr(9) + title)
print()
print('Total: ' + str(len(chapters)) + ' chapters')
