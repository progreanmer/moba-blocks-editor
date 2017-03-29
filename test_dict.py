
import json
import xmltodict
f1 = open("xml/hero_controller.xml")
x = f1.read()
f1.close()
y = json.dumps(xmltodict.parse(x, process_namespaces=True))
f2 = open("dic.json","w")
f2.write(y)
f2.close()
