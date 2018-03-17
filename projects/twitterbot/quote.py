#!/usr/bin/env/python

import requests
from bs4 import BeautifulSoup

page = requests.get("https://www.brainyquote.com/quote_of_the_day")
quotehtml = BeautifulSoup(page.content, 'html.parser')

#print quotehtml

#quoteparser1 = quotehtml.find_all('div', class_="container")

#print quoteparser1

#for i in quoteparser1:
#	quote = i.find_all('p', class_="qt_382199").text
#        print quote.text()

quoteparser1 = quotehtml.find("a", attrs={"class":"b-qt qt_108901 oncl_q"}).text
quoteparser2 = quotehtml.find("a", attrs={"class":"bq-aut qa_108901 oncl_a"}).text

quote_of_the_day = '"'+quoteparser1+'"'+" \n -"+quoteparser2

print quote_of_the_day

#ok so this worked on 3/17 when you take inspect the element of "quote of the day" that's beside the other quotes at the bottom of the webpage


###
#logic for manipulating quote ***VERIFIED THIS WORKS***
#quote = open("/root/scripts/projects/twitterbot/twitter-code/quote.txt","w")
#quote.write("Hello World")
#quote.close

