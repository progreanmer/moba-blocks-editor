from bs4 import BeautifulSoup
from html.parser import HTMLParser

f = open("../html3/hero_controller.html")
html = f.read()
f.close()
f2 = open('blockjs','w')
f3 = open('test.txt','w')
soup = BeautifulSoup(html, 'html.parser')
i = 0

for met in soup.find_all("dl", attrs={"class": "method"}):
    have_arg = 1 #variable for check if not have argument, defaule 1 is mean have arugent
    for docu in met.find_all("dd"):
        for check_none_arg in docu.find("p"):
            ck_tmp = check_none_arg.replace(" ","\n")
            ck = ck_tmp.split("\n")
            for loop_ck in ck:
                if(loop_ck == "return"):
                    have_arg = 0
