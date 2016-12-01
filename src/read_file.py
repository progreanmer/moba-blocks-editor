from bs4 import BeautifulSoup
f = open("../html/apaimanee.html")
html = f.read()
f.close()
f2 = open('gen_block.js','w')
soup = BeautifulSoup(html, 'html.parser')
i = 0

for met in soup.find_all("dl", attrs={"class": "method"}):
    num_arg = 0
    arg={}
    j = 0
    for arg_name in met.find_all('em'):
        arg[j] = arg_name.get_text()
    arg[j+1] = 'message'
    for func in met.find_all('code'):
        f2.write('var block' + str(i) + '={' +
        '\n     "message0":' + '"' + func.get_text() + ' ')
        num_arg = 0
        for a in met.find_all('em'):
            f2.write(a.get_text() + ' ' + '='+ ' ' + '%')
            f2.write(str(num_arg+1) + ' ')
            num_arg += 1
        f2.write('message = %' + str(num_arg+1) + '.",\n')
    f2.write(' "args0": [\n')
    for b in met.find_all('em'):
        f2.write('{"type":"input_value", "name":'+ ' "'+b.get_text()+'",' + '"check":"Number"},\n')
    f2.write('{"type":"input_value", "name": "ms", "check":["String", "Array"]}\n')
    f2.write('],\n')
    f2.write('"previousStatement": null,\n')
    f2.write('"nextStatement": null,\n')
    f2.write('"colour": 430\n};\n')
    f2.write('Blockly.Blocks["block' + str(i) + '"] = {\n')
    f2.write('  init: function() {\n')
    f2.write('this.jsonInit(block'+ str(i) +');\n')
    f2.write('var thisBlock = this;\n')
    f2.write('    this.setTooltip(function() {\n')
    f2.write('  return'+ ' ' + '"' )
    tip = met.find('p').get_text()
    tip_text = ""
    for t in tip.split('\n'):
        tip_text += t
    f2.write(tip_text +'"' + '\n')
    f2.write('    });\n  }\n};\n')
    f2.write('\n')
    i = i + 1

f2.close()
