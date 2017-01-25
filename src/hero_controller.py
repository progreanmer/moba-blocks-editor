from bs4 import BeautifulSoup
from html.parser import HTMLParser

f = open("../html1/hero_controller.html")
html = f.read()
f.close()
f2 = open('hero_controller.js','w')
soup = BeautifulSoup(html, 'html.parser')
i = 0

for met in soup.find_all("dl", attrs={"class": "method"}):
    num_arg = 0
    arg={}
    j = 0
    code_temp = {}

    #write message of each block
    for arg_name in met.find_all('em'):
        arg[j] = arg_name.get_text()
        j = j + 1
    for func in met.find_all('code'):
        code_temp[i] = func.get_text()
        f2.write('var ' + code_temp[i] + '={' +
        '\n     "message0":' + '"' + code_temp[i] + ' ')
        num_arg = 0
        for a in met.find_all('em'):
            f2.write(a.get_text() + ' ' + '='+ ' ' + '%')
            f2.write(str(num_arg+1) + ' ')
            num_arg += 1
        f2.write('.",\n')

    #filter p tag and split in p_text list
    p_text = {}
    p_text[0] = ''
    p_text[1] = ''
    type_check = {}
    type_check[0] = 'Number'
    type_check[1] = 'Number'
    type_check[2] = 'Number'
    type_check[3] = 'Number'
    k = 0
    for p_find in met.find_all('p'):
        h = HTMLParser()
        p_text[k] = h.unescape(p_find.get_text())
        k = k+1
    #get type of each variable in list type_check
    k = 0 #Reset k
    if(p_text[1] != ''):
        for check in p_text[1].split(','):
            for c_type in check.split():
                print(c_type)
                if( c_type ==  'integer' or c_type == 'float'):
                    type_check[k] = '"Number"'
                elif( c_type == 'string'):
                    type_check[k] = '["String", "Array"]'
                # print(type_check[k])
            k = k+1

    f2.write(' "args0": [\n')
    k=0 #Reset k
    for b in met.find_all('em'):
        f2.write('{"type":"input_value", "name":'+ ' "'+b.get_text()+'",' + '"check":' + type_check[k])
        if(type_check[k+1]!=''):
            f2.write('},\n')
        else:
            f2.write('}\n')
        k = k+1
    # f2.write('{"type":"input_value", "name": "ms", "check":["String", "Array"]}\n')
    f2.write('],\n')
    f2.write('"previousStatement": null,\n')
    f2.write('"nextStatement": null,\n')
    f2.write('"colour": 430\n};\n')
    f2.write('Blockly.Blocks["' + code_temp[i] + '"] = {\n')
    f2.write('  init: function() {\n')
    f2.write('this.jsonInit('+ code_temp[i] +');\n')
    f2.write('var thisBlock = this;\n')
    f2.write('    this.setTooltip(function() {\n')
    f2.write('  return'+ ' ' + '"' )
    tip = p_text[0]
    tip_text = ""
    for t in tip.split('\n'):
        tip_text += t
    f2.write(tip_text +'"' + '\n')
    f2.write('    });\n  }\n};\n')
    f2.write('\n')
    i = i + 1

f2.close()
