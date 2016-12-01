from bs4 import BeautifulSoup
f = open("../html/apaimanee.html")
html = f.read()
f.close()
f2 = open('tran.js','w')
soup = BeautifulSoup(html, 'html.parser')
num_block = 0
for met in soup.find_all("dl", attrs={"class": "method"}):
    raw_code = met.find('dt')
    rep_code = raw_code.get('id').replace('apaimanee.HeroController','self.controller')
    f2.write('Blockly.Python["block'+ str(num_block) + '"] = function(block) {\n\n')
    i=1
    for a in met.find_all('em'):
        f2.write('var arg'+ str(i) + ' = ' + 'Blockly.Python.valueToCode(block,'+'"' +a.get_text() + '") || "0";\n')
        i+=1
    f2.write('var arg'+ str(i) + ' = ' +  'Blockly.Python.valueToCode(block, "ms") || "";\n')
    f2.write('var code = ' + '"' + rep_code + '("')
    for num in range (i-1):
        f2.write('+' + 'arg'+ str(num+1)+ '+' + '","')
    f2.write('+arg' + str(num+2) + '+' + '")' + '\\n' + '";\n')
    f2.write(' return code;\n' + '}' +'\n\n')
    num_block += 1
f2.close()
