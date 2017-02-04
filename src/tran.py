from bs4 import BeautifulSoup
from html.parser import HTMLParser
f = open("../html3/hero_controller.html")
html = f.read()
f.close()
f2 = open('tran.js','w')
soup = BeautifulSoup(html, 'html.parser')
name_block = {}
j = 0
for met in soup.find_all("dl", attrs={"class": "method"}):
    p_text = {}
    p_text[0] = ''
    p_text[1] = ''
    type_check = {}
    type_check[0] = ''
    type_check[1] = ''
    type_check[2] = ''
    type_check[3] = ''
    k = 0
    for p_find in met.find_all('p'):
        h = HTMLParser()
        p_text[k] = h.unescape(p_find.get_text())
        k = k+1
    k = 0
    if(p_text[1] != ''):
        for check in p_text[1].split(','):
            for c_type in check.split():
                if( c_type ==  'integer' or c_type == 'float'):
                    type_check[k] = '"Number"'
                elif( c_type == 'string'):
                    type_check[k] = '["String", "Array"]'
            k = k+1

    raw_code = met.find('dt')
    rep_code = raw_code.get('id').replace('hero_controller.HeroController','self.controller')
    for nb in met.find_all('code'):
        name_block[j] = nb.get_text()
    f2.write('Blockly.Python["' + name_block[j] + '"] = function(block) {\n\n')
    i=0
    for a in met.find_all('em'):
        f2.write('var arg'+ str(i+1) + ' = ' + 'Blockly.Python.valueToCode(block,'+'"' +a.get_text() + '") || ')
        if (type_check[i] == '"Number"'):
            f2.write('"0";\n')
            i +=1
        elif (type_check[i] == '["String", "Array"]'):
            f2.write('"";\n')
            i +=1
        else:
            f2.write('"";\n')
    f2.write('var code = '+ '"' + rep_code + '("')
    for num in range (i):
        f2.write('+ arg'+ str(num+1))
        if ( num < (i-1)):
            f2.write('+' + '","')
    f2.write('+' + '")' + '\\n' + '";\n')
    f2.write(' return code;\n' + '}' +'\n\n')
    j = j+1

#Here is addon translate block

#int_var
f2.write('Blockly.Python["int_var"] = function(block){\n')
f2.write('var arg1 = Blockly.Python.valueToCode(block,"int_name") || "";\n')
f2.write('var arg2 = Blockly.Python.valueToCode(block,"int_val") || "0";\n')
f2.write('var code = arg1 + " = " + arg2 + "\n";\n')
f2.write(' return code;\n}\n')

f2.close()
