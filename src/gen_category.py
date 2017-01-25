from bs4 import BeautifulSoup

f = open('../html1/hero_controller.html')
heroC = f.read()
f.close()
soup = BeautifulSoup(heroC, 'html.parser')
tab = "    "

f2 = open('gen_category.xml','w')
f2.write('<category name="Updatecategory">\n')

#logic category
f2.write( tab+ '<category name="Logic">\n')
f2.write( tab + tab + '<block type="controls_if"></block>\n')
f2.write( tab + tab + '<block type="logic_compare"></block>\n')
f2.write( tab + tab + '<block type="logic_operation"></block>\n')
f2.write( tab + tab + '<block type="logic_negate"></block>\n')
f2.write( tab + tab + '<block type="logic_boolean"></block>\n')
f2.write( tab + '</category>\n')

#loops category
f2.write( tab + '<category name="Loops">\n')
f2.write( tab + tab + '<block type="controls_repeat_ext">\n')
f2.write( tab + tab + tab + '<value name="TIMES">\n')
f2.write( tab + tab +  tab + tab + '<block type="math_number">\n')
f2.write( tab + tab +  tab + tab + tab + '<field name="NUM">10</field>\n')
f2.write( tab + tab +  tab + tab + '</block>\n')
f2.write( tab + tab + tab + '</value>\n')
f2.write( tab + tab +'</block>\n')
f2.write( tab + tab + '<block type="controls_whileUntil"></block>\n')
f2.write( tab + '</category>\n')

#Math type category
f2.write( tab + '<category name="Math">\n')
f2.write( tab + tab + '<block type="math_number"></block>\n')
f2.write( tab + tab + '<block type="math_arithmetic"></block>\n')
f2.write( tab + tab + '<block type="math_single"></block>\n')
f2.write( tab + tab + '<block type="math_change"></block>\n')
f2.write( tab + '</category>\n')

#Text type Category
f2.write( tab +'<category name="Text">\n')
f2.write( tab + tab + '<block type="text"></block>\n')
f2.write( tab + tab +'<block type="text_length"></block>\n')
f2.write( tab + tab +'<block type="text_print"></block>\n')
f2.write( tab + '</category>\n')

#hero_controller
f2.write( tab + '<category name="Hero Controller">\n')
for met in soup.find_all("dl", attrs={"class": "method"}):
    for hc in met.find("code"):
        f2.write( tab + tab +'<block type="' + hc + '"></block>\n')
f2.write( tab + '</category>\n')
f2.write('</category>')
f2.close()
