// Two languages: Polish (default) and English.
// TEXT holds the translatable fields of the data in data.js, index by index;
// UI holds the interface wording. setDataLang() writes one language into the data arrays.

const TEXT = {
 "pl": {
  "COL": {
   "cain": "Kain i jego potomkowie",
   "sem": "Semici",
   "ham": "Chamici",
   "jap": "Jafetyci",
   "chu": "Kościół katolicki",
   "ref": "Protestantyzm",
   "pat": "Patriarchowie",
   "orth": "Prawosławie"
  },
  "PAT": [
   [
    "Adam",
    "Rdz 5,3-5"
   ],
   [
    "Set",
    "Rdz 5,6-8"
   ],
   [
    "Enosz",
    "Rdz 5,9-11"
   ],
   [
    "Kenan",
    "Rdz 5,12-14"
   ],
   [
    "Mahalalel",
    "Rdz 5,15-17"
   ],
   [
    "Jered",
    "Rdz 5,18-20"
   ],
   [
    "Henoch",
    "Rdz 5,21-24"
   ],
   [
    "Metuszelach",
    "Rdz 5,25-27"
   ],
   [
    "Lamek",
    "Rdz 5,28-31"
   ],
   [
    "Noe",
    "Rdz 5,32; 9,28-29"
   ],
   [
    "Sem",
    "Rdz 11,10-11"
   ],
   [
    "Arpachszad",
    "Rdz 11,12-13"
   ],
   [
    "Szelach",
    "Rdz 11,14-15"
   ],
   [
    "Heber",
    "Rdz 11,16-17"
   ],
   [
    "Peleg",
    "Rdz 11,18-19"
   ],
   [
    "Reu",
    "Rdz 11,20-21"
   ],
   [
    "Serug",
    "Rdz 11,22-23"
   ],
   [
    "Nachor",
    "Rdz 11,24-25"
   ],
   [
    "Terach",
    "Rdz 11,26-32"
   ],
   [
    "Abraham",
    "Rdz 25,7"
   ],
   [
    "Izaak",
    "Rdz 35,28"
   ],
   [
    "Jakub",
    "Rdz 47,28"
   ],
   [
    "Józef",
    "Rdz 50,26"
   ],
   [
    "Mojżesz",
    "Pwt 34,7"
   ]
  ],
  "NAT": [
   [
    "Ród Kaina",
    "Rdz 4,17-22"
   ],
   [
    "Elam",
    "Rdz 10,22"
   ],
   [
    "Asyria",
    "Rdz 10,22; 2 Krl 17"
   ],
   [
    "Aram / Syria",
    "Rdz 10,22; 2 Krl 16,9"
   ],
   [
    "Arabowie",
    "Rdz 25,12-18"
   ],
   [
    "Izrael",
    "Joz 1; 2 Krl 25"
   ],
   [
    "Babilon",
    "Rdz 10,8-10"
   ],
   [
    "Egipt",
    "Rdz 10,6"
   ],
   [
    "Kanaan",
    "Rdz 10,15-19"
   ],
   [
    "Fenicja",
    "1 Krl 5"
   ],
   [
    "Ludy indoeuropejskie",
    "Rdz 10,2-5"
   ],
   [
    "Grecja",
    "Dn 8,21",
    "Kolebka filozofii, demokracji i nauki; po grecku spisano Nowy Testament."
   ],
   [
    "Persja",
    "Dn 8,20"
   ],
   [
    "Rzym",
    "Dn 7,7"
   ],
   [
    "Kościół katolicki",
    "Mt 16,18; Dz 2"
   ],
   [
    "Prawosławie",
    "",
    "Przez wieki chrześcijański Wschód i Zachód rozwijały się w różnych kulturach, greckiej i łacińskiej. Narastały różnice w liturgii i zwyczajach, w rozumieniu jedności Kościoła wokół następcy św. Piotra oraz w sprawie słów „i Syna” (Filioque) w Credo. W 1054 r. jedność między Rzymem a Konstantynopolem została zerwana. W 1965 r. św. Paweł VI i patriarcha Atenagoras znieśli wzajemne ekskomuniki, otwierając drogę do pojednania."
   ],
   [
    "Protestantyzm",
    ""
   ]
  ],
  "EV": [
   [
    "Stworzenie świata",
    "Rdz 1,1",
    "Na początku Bóg stworzył niebo i ziemię.",
    "Bez daty"
   ],
   [
    "Potop",
    "Rdz 7",
    "Noe wraz z rodziną wchodzi do arki; potop trwa rok.",
    "AM 1656"
   ],
   [
    "Wieża Babel",
    "Rdz 11,1-9",
    "Bóg pomieszał języki i rozproszył narody.",
    "Bez daty"
   ],
   [
    "Powołanie Abrahama",
    "Rdz 12,1-4",
    "Abraham w wieku 75 lat opuszcza Charan i wyrusza do Kanaanu.",
    null
   ],
   [
    "Ofiarowanie Izaaka",
    "Rdz 22",
    "Abraham zostaje wystawiony na próbę na górze Moria i ofiaruje swojego syna Izaaka.",
    null
   ],
   [
    "Wyjście z Egiptu",
    "Wj 12",
    "Izrael pod wodzą Mojżesza opuszcza Egipt.",
    null
   ],
   [
    "Świątynia Salomona",
    "1 Krl 6-8",
    "Świątynia w Jerozolimie zostaje poświęcona.",
    null
   ],
   [
    "Podział królestwa",
    "1 Krl 12",
    "Po śmierci Salomona Izrael i Juda się rozdzielają.",
    null
   ],
   [
    "Upadek Samarii",
    "2 Krl 17",
    "Asyria uprowadza mieszkańców królestwa północnego.",
    null
   ],
   [
    "Niewola babilońska",
    "2 Krl 24",
    "Nabuchodonozor zdobywa Jerozolimę i uprowadza króla Jojakina do Babilonu.",
    null
   ],
   [
    "Powrót z wygnania",
    "Ezd 1",
    "Cyrus pozwala Żydom wrócić do ojczyzny.",
    null
   ],
   [
    "Narodzenie Chrystusa",
    "Mt 2; Łk 2",
    "Jezus rodzi się w Betlejem, przed śmiercią Heroda w 4 p.n.e.",
    "ok. 6–4 p.n.e."
   ],
   [
    "Ukrzyżowanie i Pięćdziesiątnica",
    "Dz 2",
    "W Jerozolimie rodzi się Kościół.",
    "30 lub 33 n.e."
   ],
   [
    "Upadek Rzymu",
    "",
    "Upada zachodnie cesarstwo rzymskie. Przez kolejne tysiąc lat Kościół jednoczy Europę: klasztory chronią wiedzę, misjonarze chrzczą nowe ludy, powstają katedry i uniwersytety. Kościół daje też zalążek rozwojowi nauki: w jego szkołach i na uniwersytetach przekonanie, że stworzony świat jest rozumny i poznawalny, prowadzi do badania przyrody.",
    null
   ],
   [
    "Reformacja",
    "",
    "Luter ogłasza 95 tez. Spór o odpusty szybko przeradza się w szerszy ruch: Luter naucza o zbawieniu przez samą wiarę i o Piśmie Świętym jako jedynym autorytecie, odrzucając część nauczania i władzy Kościoła. Za nim idą inni reformatorzy, jak Zwingli i Kalwin, a w Anglii Henryk VIII zrywa z Rzymem. Dzięki drukowi i poparciu władców w ciągu kilku dekad zachodnie chrześcijaństwo dzieli się na katolików i protestantów. Kościół odpowiada odnową na Soborze Trydenckim (1545–1563).",
    null
   ]
  ],
  "ERAS": [
   "Od stworzenia do potopu",
   "Od potopu do Abrahama",
   "Od Abrahama do wyjścia z Egiptu",
   "Królestwa Izraela",
   "Całość"
  ],
  "FIG": [
   [
    "Adam",
    "Pierwszy człowiek",
    "Stworzony przez Boga i umieszczony w Edenie.",
    "Rdz 1-3"
   ],
   [
    "Henoch",
    "Chodził z Bogiem",
    "Zabrany przez Boga w wieku 365 lat.",
    "Rdz 5,24"
   ],
   [
    "Noe",
    "Budowniczy arki",
    "Ocalił rodzinę i zwierzęta podczas potopu.",
    "Rdz 6-9"
   ],
   [
    "Nimrod",
    "Dzielny myśliwy",
    "Założył królestwo w Babel, w krainie Szinear.",
    "Rdz 10,8-10"
   ],
   [
    "Abraham",
    "Ojciec narodów",
    "Powołany z Charanu, otrzymał obietnicę ziemi i potomstwa.",
    "Rdz 12"
   ],
   [
    "Izaak",
    "Syn obietnicy",
    "Syn Abrahama i Sary.",
    "Rdz 21"
   ],
   [
    "Jakub",
    "Izrael",
    "Ojciec dwunastu pokoleń.",
    "Rdz 25-50"
   ],
   [
    "Józef",
    "Zarządca Egiptu",
    "Sprzedany przez braci, później uratował rodzinę przed głodem.",
    "Rdz 37-50"
   ],
   [
    "Mojżesz",
    "Prawodawca",
    "Wyprowadził Izraela z Egiptu i otrzymał Prawo na Synaju.",
    "Wj 3-20"
   ],
   [
    "Jozue",
    "Zdobywca Kanaanu",
    "Przeprowadził Izraela przez Jordan.",
    "Joz 3"
   ],
   [
    "Debora",
    "Sędzia i prorokini",
    "Razem z Barakiem poprowadziła Izraela przeciw Syserze.",
    "Sdz 4-5"
   ],
   [
    "Samson",
    "Sędzia",
    "Wybawił Izraela z rąk Filistynów.",
    "Sdz 13-16"
   ],
   [
    "Saul",
    "Pierwszy król Izraela",
    "Namaszczony przez Samuela.",
    "1 Sm 10"
   ],
   [
    "Dawid",
    "Król Izraela",
    "Uczynił Jerozolimę swoją stolicą.",
    "2 Sm 5"
   ],
   [
    "Salomon",
    "Budowniczy świątyni",
    "Słynął z mądrości i zbudował świątynię w Jerozolimie.",
    "1 Krl 6"
   ],
   [
    "Eliasz",
    "Prorok",
    "Stawił czoła prorokom Baala na górze Karmel.",
    "1 Krl 18"
   ],
   [
    "Izajasz",
    "Prorok",
    "Powołany w roku śmierci króla Ozjasza.",
    "Iz 6,1"
   ],
   [
    "Ezechiasz",
    "Król Judy",
    "Odnowił kult i oparł się Asyrii.",
    "2 Krl 18-19"
   ],
   [
    "Daniel",
    "Prorok w Babilonie",
    "Uprowadzony do Babilonu, służył na dworze królewskim.",
    "Dn 1"
   ],
   [
    "Cyrus",
    "Król Persji",
    "Pozwolił Żydom wrócić do Jerozolimy.",
    "Ezd 1"
   ],
   [
    "Estera",
    "Królowa Persji",
    "Ocaliła Żydów przed spiskiem Hamana.",
    "Est 4-8"
   ],
   [
    "Nehemiasz",
    "Namiestnik",
    "Odbudował mury Jerozolimy.",
    "Ne 2-6"
   ],
   [
    "Jan Chrzciciel",
    "Poprzednik",
    "Przygotował drogę Chrystusowi.",
    "Łk 1"
   ],
   [
    "Jezus",
    "Chrystus",
    "Urodził się w Betlejem.",
    "Mt 2; Łk 2"
   ],
   [
    "Paweł",
    "Apostoł",
    "Zaniósł Ewangelię do całego świata rzymskiego.",
    "Dz 9-28"
   ],
   [
    "Konstantyn",
    "Cesarz rzymski",
    "Edyktem mediolańskim zakończył prześladowania chrześcijan.",
    ""
   ],
   [
    "Marcin Luter",
    "Reformator",
    "Zapoczątkował reformację w Niemczech.",
    ""
   ],
   [
    "Św. Tomasz z Akwinu",
    "Doktor Kościoła",
    "Rozpoczyna Sumę teologiczną, wielką syntezę wiary i rozumu, opartą na filozofii Arystotelesa.",
    ""
   ],
   [
    "Jan Gutenberg",
    "Drukarz",
    "Drukuje Biblię ruchomą czcionką; Pismo Święte trafia do całej Europy.",
    ""
   ],
   [
    "Kard. Stefan Wyszyński",
    "Prymas Tysiąclecia",
    "Zostaje prymasem Polski; więziony w latach 1953–1956, prowadzi Kościół w Polsce przez czasy komunizmu.",
    ""
   ],
   [
    "Św. Jan Paweł II",
    "Papież",
    "Kard. Karol Wojtyła zostaje wybrany na papieża; jego pielgrzymki do Polski wspierają drogę do wolności.",
    ""
   ],
   [
    "Justynian I",
    "Cesarz bizantyjski",
    "Spisuje prawo rzymskie (Kodeks Justyniana) i buduje Hagię Sophię (537).",
    ""
   ],
   [
    "Św. Grzegorz Wielki",
    "Papież",
    "Kształtuje średniowieczny Kościół, liturgię i misje; wysyła misjonarzy do Anglii.",
    ""
   ],
   [
    "Mahomet",
    "Założyciel islamu",
    "Hidżra z Mekki do Medyny; początek islamu, który zmienia Bliski Wschód i świat arabski.",
    ""
   ],
   [
    "Karol Wielki",
    "Cesarz",
    "Koronowany w Rzymie na cesarza; fundament chrześcijańskiej Europy.",
    ""
   ],
   [
    "Św. Cyryl i Metody",
    "Apostołowie Słowian",
    "Niosą Ewangelię Słowianom i tworzą dla nich pismo (głagolicę).",
    ""
   ],
   [
    "Mieszko I",
    "Książę Polan",
    "Przyjmuje chrzest; początek chrześcijaństwa i państwa polskiego.",
    ""
   ],
   [
    "Saladyn",
    "Sułtan",
    "Odbija Jerozolimę z rąk krzyżowców.",
    ""
   ],
   [
    "Krzysztof Kolumb",
    "Żeglarz",
    "Dopływa do Ameryki; zaczyna się epoka wielkich odkryć, a wraz z nią misje Kościoła w Nowym Świecie.",
    ""
   ],
   [
    "Mikołaj Kopernik",
    "Astronom",
    "Wydaje „O obrotach sfer niebieskich”: Ziemia krąży wokół Słońca.",
    ""
   ],
   [
    "Izaak Newton",
    "Uczony",
    "Wydaje „Principia”: prawa ruchu i powszechnego ciążenia.",
    ""
   ],
   [
    "Napoleon Bonaparte",
    "Cesarz Francuzów",
    "Przejmuje władzę po rewolucji francuskiej i koronuje się na cesarza; jego wojny i kodeks niosą idee rewolucji przez Europę.",
    ""
   ],
   [
    "Leon XIII",
    "Papież",
    "Encyklika „Rerum novarum” o sprawie robotniczej; początek katolickiej nauki społecznej.",
    ""
   ],
   [
    "Sokrates",
    "Filozof",
    "Twórca filozofii moralnej: w dialogu, metodą pytań, prowadzi rozmówców do samopoznania i szukania prawdy o dobru. Skazany przez Ateńczyków na śmierć, wybiera wierność sumieniu. Jego nauczanie przekazuje uczeń, Platon.",
    ""
   ],
   [
    "Platon",
    "Filozof",
    "Uczeń Sokratesa i założyciel Akademii w Atenach. Uczy, że ponad zmiennym światem istnieje wieczna prawda, dobro i piękno, a dusza człowieka jest nieśmiertelna. Jego myśl stanie się dla Ojców Kościoła językiem do mówienia o Bogu.",
    ""
   ],
   [
    "Arystoteles",
    "Filozof",
    "Uczeń Platona i wychowawca Aleksandra Wielkiego, założyciel Liceum. Porządkuje całą ówczesną wiedzę: tworzy logikę, etykę cnót i badanie przyrody, a rozumem dochodzi do Pierwszego Poruszyciela. Przez św. Tomasza z Akwinu staje się filarem myśli chrześcijańskiej.",
    ""
   ],
   [
    "Św. Augustyn",
    "Biskup Hippony, Doktor Kościoła",
    "Pisze „Wyznania”; łączy wiarę chrześcijańską z myślą Platona i kształtuje teologię Zachodu.",
    ""
   ]
  ],
  "CH_EV": [
   [
    "Sobór Nicejski I",
    "",
    "Sobór wyznaje bóstwo Chrystusa i ogłasza Credo nicejskie przeciw arianizmowi."
   ],
   [
    "Wielka schizma",
    "",
    "Rozłam między Kościołem na Zachodzie (katolickim) i na Wschodzie (prawosławnym)."
   ],
   [
    "Sobór Trydencki",
    "",
    "Odpowiedź Kościoła na reformację: odnowa nauczania, sakramentów i dyscypliny."
   ],
   [
    "Sobór Watykański II",
    "",
    "Odnowa liturgii i otwarcie Kościoła na świat współczesny."
   ],
   [
    "Rewolucja francuska",
    "",
    "Upadek monarchii we Francji; hasła wolności, równości i braterstwa, a zarazem prześladowanie Kościoła."
   ],
   [
    "Septuaginta",
    "",
    "Żydzi w Aleksandrii tłumaczą Stary Testament na język grecki; z tego przekładu korzystają później apostołowie."
   ]
  ]
 },
 "en": {
  "COL": {
   "cain": "Cain and descendants",
   "sem": "Semitic",
   "ham": "Hamitic",
   "jap": "Japhetic",
   "chu": "Catholic Church",
   "ref": "Protestantism",
   "pat": "Patriarchs",
   "orth": "Orthodox Church"
  },
  "PAT": [
   [
    "Adam",
    "Gen 5:3-5"
   ],
   [
    "Seth",
    "Gen 5:6-8"
   ],
   [
    "Enosh",
    "Gen 5:9-11"
   ],
   [
    "Kenan",
    "Gen 5:12-14"
   ],
   [
    "Mahalalel",
    "Gen 5:15-17"
   ],
   [
    "Jared",
    "Gen 5:18-20"
   ],
   [
    "Enoch",
    "Gen 5:21-24"
   ],
   [
    "Methuselah",
    "Gen 5:25-27"
   ],
   [
    "Lamech",
    "Gen 5:28-31"
   ],
   [
    "Noah",
    "Gen 5:32; 9:28-29"
   ],
   [
    "Shem",
    "Gen 11:10-11"
   ],
   [
    "Arpachshad",
    "Gen 11:12-13"
   ],
   [
    "Shelah",
    "Gen 11:14-15"
   ],
   [
    "Eber",
    "Gen 11:16-17"
   ],
   [
    "Peleg",
    "Gen 11:18-19"
   ],
   [
    "Reu",
    "Gen 11:20-21"
   ],
   [
    "Serug",
    "Gen 11:22-23"
   ],
   [
    "Nahor",
    "Gen 11:24-25"
   ],
   [
    "Terah",
    "Gen 11:26-32"
   ],
   [
    "Abraham",
    "Gen 25:7"
   ],
   [
    "Isaac",
    "Gen 35:28"
   ],
   [
    "Jacob",
    "Gen 47:28"
   ],
   [
    "Joseph",
    "Gen 50:26"
   ],
   [
    "Moses",
    "Deut 34:7"
   ]
  ],
  "NAT": [
   [
    "Line of Cain",
    "Gen 4:17-22"
   ],
   [
    "Elam",
    "Gen 10:22"
   ],
   [
    "Assyria",
    "Gen 10:22; 2 Kgs 17"
   ],
   [
    "Aram / Syria",
    "Gen 10:22; 2 Kgs 16:9"
   ],
   [
    "Arabs",
    "Gen 25:12-18"
   ],
   [
    "Israel",
    "Josh 1; 2 Kgs 25"
   ],
   [
    "Babylon",
    "Gen 10:8-10"
   ],
   [
    "Egypt",
    "Gen 10:6"
   ],
   [
    "Canaan",
    "Gen 10:15-19"
   ],
   [
    "Phoenicia",
    "1 Kgs 5"
   ],
   [
    "Indo-European peoples",
    "Gen 10:2-5"
   ],
   [
    "Greece",
    "Dan 8:21",
    "The cradle of philosophy, democracy and science; the New Testament was written in Greek."
   ],
   [
    "Persia",
    "Dan 8:20"
   ],
   [
    "Rome",
    "Dan 7:7"
   ],
   [
    "Catholic Church",
    "Matt 16:18; Acts 2"
   ],
   [
    "Orthodox Church",
    "",
    "Over the centuries the Christian East and West grew up in different cultures, Greek and Latin. Differences deepened in liturgy and custom, in understanding the unity of the Church around the successor of St Peter, and over the words \"and the Son\" (Filioque) in the Creed. In 1054 the unity between Rome and Constantinople was broken. In 1965 St Paul VI and Patriarch Athenagoras lifted the mutual excommunications, opening the way to reconciliation."
   ],
   [
    "Protestantism",
    ""
   ]
  ],
  "EV": [
   [
    "Creation",
    "Gen 1:1",
    "In the beginning God created the heavens and the earth.",
    "Undated"
   ],
   [
    "The Flood",
    "Gen 7",
    "Noah and his household enter the ark; the flood lasts a year.",
    "AM 1656"
   ],
   [
    "Tower of Babel",
    "Gen 11:1-9",
    "Languages are confused and the nations are dispersed.",
    "Undated"
   ],
   [
    "Call of Abraham",
    "Gen 12:1-4",
    "Abraham leaves Haran for Canaan at age 75.",
    null
   ],
   [
    "Binding of Isaac",
    "Gen 22",
    "Abraham is tested on Mount Moriah and offers his son Isaac.",
    null
   ],
   [
    "The Exodus",
    "Ex 12",
    "Israel leaves Egypt under Moses.",
    null
   ],
   [
    "Solomon's temple",
    "1 Kgs 6-8",
    "The temple at Jerusalem is dedicated.",
    null
   ],
   [
    "Kingdom divides",
    "1 Kgs 12",
    "Israel and Judah separate after Solomon.",
    null
   ],
   [
    "Fall of Samaria",
    "2 Kgs 17",
    "Assyria carries the northern kingdom away.",
    null
   ],
   [
    "Babylonian captivity",
    "2 Kgs 24",
    "Nebuchadnezzar takes Jerusalem and deports King Jehoiachin to Babylon.",
    null
   ],
   [
    "Return from exile",
    "Ezra 1",
    "Cyrus permits the Jews to return.",
    null
   ],
   [
    "Birth of Christ",
    "Matt 2; Luke 2",
    "Jesus is born in Bethlehem, before the death of Herod in 4 BC.",
    "c. 6–4 BC"
   ],
   [
    "Crucifixion and Pentecost",
    "Acts 2",
    "The church begins at Jerusalem.",
    "AD 30 or 33"
   ],
   [
    "Fall of Rome",
    "",
    "The western Roman empire ends. For the next thousand years the Church holds Europe together: monasteries preserve learning, missionaries baptise new peoples, cathedrals and universities rise. The Church also plants the seed of science: in its schools and universities the conviction that the created world is rational and knowable leads to the study of nature.",
    null
   ],
   [
    "Reformation",
    "",
    "Luther posts the 95 theses. The dispute over indulgences soon grows into a wider movement: Luther teaches salvation by faith alone and Scripture as the only authority, rejecting part of the Church's teaching and authority. Other reformers follow, such as Zwingli and Calvin, and in England Henry VIII breaks with Rome. With printing and the support of rulers, within a few decades Western Christianity divides into Catholics and Protestants. The Church responds with renewal at the Council of Trent (1545–1563).",
    null
   ]
  ],
  "ERAS": [
   "Creation to Flood",
   "Flood to Abraham",
   "Abraham to Exodus",
   "Kingdoms of Israel",
   "Full chart"
  ],
  "FIG": [
   [
    "Adam",
    "First man",
    "Created by God and placed in Eden.",
    "Gen 1-3"
   ],
   [
    "Enoch",
    "Walked with God",
    "Taken by God at age 365.",
    "Gen 5:24"
   ],
   [
    "Noah",
    "Builder of the ark",
    "Preserved his family and the animals through the flood.",
    "Gen 6-9"
   ],
   [
    "Nimrod",
    "Mighty hunter",
    "Began his kingdom at Babel in Shinar.",
    "Gen 10:8-10"
   ],
   [
    "Abraham",
    "Father of the nations",
    "Called from Haran and promised a land and a people.",
    "Gen 12"
   ],
   [
    "Isaac",
    "Son of promise",
    "Born to Abraham and Sarah.",
    "Gen 21"
   ],
   [
    "Jacob",
    "Israel",
    "Father of the twelve tribes.",
    "Gen 25-50"
   ],
   [
    "Joseph",
    "Ruler in Egypt",
    "Sold by his brothers, later saved his family from famine.",
    "Gen 37-50"
   ],
   [
    "Moses",
    "Lawgiver",
    "Led Israel out of Egypt and received the law at Sinai.",
    "Ex 3-20"
   ],
   [
    "Joshua",
    "Conqueror of Canaan",
    "Led Israel across the Jordan.",
    "Josh 3"
   ],
   [
    "Deborah",
    "Judge and prophetess",
    "Led Israel with Barak against Sisera.",
    "Judg 4-5"
   ],
   [
    "Samson",
    "Judge",
    "Delivered Israel from the Philistines.",
    "Judg 13-16"
   ],
   [
    "Saul",
    "First king of Israel",
    "Anointed by Samuel.",
    "1 Sam 10"
   ],
   [
    "David",
    "King of Israel",
    "Made Jerusalem his capital.",
    "2 Sam 5"
   ],
   [
    "Solomon",
    "Builder of the temple",
    "Known for wisdom and the temple at Jerusalem.",
    "1 Kgs 6"
   ],
   [
    "Elijah",
    "Prophet",
    "Confronted the prophets of Baal on Mount Carmel.",
    "1 Kgs 18"
   ],
   [
    "Isaiah",
    "Prophet",
    "Called in the year King Uzziah died.",
    "Isa 6:1"
   ],
   [
    "Hezekiah",
    "King of Judah",
    "Restored worship and withstood Assyria.",
    "2 Kgs 18-19"
   ],
   [
    "Daniel",
    "Prophet in Babylon",
    "Taken to Babylon and served in the court.",
    "Dan 1"
   ],
   [
    "Cyrus",
    "King of Persia",
    "Allowed the Jews to return to Jerusalem.",
    "Ezra 1"
   ],
   [
    "Esther",
    "Queen of Persia",
    "Saved the Jews from Haman's plot.",
    "Esth 4-8"
   ],
   [
    "Nehemiah",
    "Governor",
    "Rebuilt the walls of Jerusalem.",
    "Neh 2-6"
   ],
   [
    "John the Baptist",
    "Forerunner",
    "Prepared the way for Christ.",
    "Luke 1"
   ],
   [
    "Jesus",
    "Christ",
    "Born in Bethlehem.",
    "Matt 2; Luke 2"
   ],
   [
    "Paul",
    "Apostle",
    "Took the gospel across the Roman world.",
    "Acts 9-28"
   ],
   [
    "Constantine",
    "Roman emperor",
    "Ended the persecution of Christians with the Edict of Milan.",
    ""
   ],
   [
    "Martin Luther",
    "Reformer",
    "Began the Reformation in Germany.",
    ""
   ],
   [
    "St Thomas Aquinas",
    "Doctor of the Church",
    "Begins the Summa Theologiae, the great synthesis of faith and reason, built on the philosophy of Aristotle.",
    ""
   ],
   [
    "Johannes Gutenberg",
    "Printer",
    "Prints the Bible with movable type; Scripture spreads across Europe.",
    ""
   ],
   [
    "Cardinal Stefan Wyszyński",
    "Primate of the Millennium",
    "Becomes Primate of Poland; imprisoned 1953–1956, he leads the Church in Poland through the communist years.",
    ""
   ],
   [
    "St John Paul II",
    "Pope",
    "Cardinal Karol Wojtyła is elected pope; his pilgrimages to Poland support the road to freedom.",
    ""
   ],
   [
    "Justinian I",
    "Byzantine emperor",
    "Codifies Roman law (the Code of Justinian) and builds the Hagia Sophia (537).",
    ""
   ],
   [
    "St Gregory the Great",
    "Pope",
    "Shapes the medieval Church, its liturgy and missions; sends missionaries to England.",
    ""
   ],
   [
    "Muhammad",
    "Founder of Islam",
    "The Hijra from Mecca to Medina; the beginning of Islam, which transforms the Middle East and the Arab world.",
    ""
   ],
   [
    "Charlemagne",
    "Emperor",
    "Crowned emperor in Rome; the foundation of Christian Europe.",
    ""
   ],
   [
    "Sts Cyril and Methodius",
    "Apostles to the Slavs",
    "Bring the Gospel to the Slavs and create an alphabet for them (Glagolitic).",
    ""
   ],
   [
    "Mieszko I",
    "Duke of the Polans",
    "Is baptised; the beginning of Christianity and of the Polish state.",
    ""
   ],
   [
    "Saladin",
    "Sultan",
    "Retakes Jerusalem from the crusaders.",
    ""
   ],
   [
    "Christopher Columbus",
    "Navigator",
    "Reaches America; the age of discovery begins, and with it the Church's missions in the New World.",
    ""
   ],
   [
    "Nicolaus Copernicus",
    "Astronomer",
    "Publishes On the Revolutions of the Heavenly Spheres: the Earth moves around the Sun.",
    ""
   ],
   [
    "Isaac Newton",
    "Scientist",
    "Publishes the Principia: the laws of motion and universal gravitation.",
    ""
   ],
   [
    "Napoleon Bonaparte",
    "Emperor of the French",
    "Takes power after the French Revolution and crowns himself emperor; his wars and code carry the ideas of the Revolution across Europe.",
    ""
   ],
   [
    "Leo XIII",
    "Pope",
    "The encyclical Rerum novarum on the condition of workers; the beginning of Catholic social teaching.",
    ""
   ],
   [
    "Socrates",
    "Philosopher",
    "Founder of moral philosophy: through dialogue and questioning he leads others to self-knowledge and the search for the truth about the good. Sentenced to death by the Athenians, he chooses fidelity to his conscience. His teaching is handed down by his pupil, Plato.",
    ""
   ],
   [
    "Plato",
    "Philosopher",
    "Pupil of Socrates and founder of the Academy in Athens. He teaches that above the changing world stand eternal truth, goodness and beauty, and that the human soul is immortal. His thought will give the Fathers of the Church a language for speaking of God.",
    ""
   ],
   [
    "Aristotle",
    "Philosopher",
    "Pupil of Plato, tutor of Alexander the Great and founder of the Lyceum. He orders all the knowledge of his age: he creates logic, the ethics of virtue and the study of nature, and by reason arrives at a First Mover. Through St Thomas Aquinas he becomes a pillar of Christian thought.",
    ""
   ],
   [
    "St Augustine",
    "Bishop of Hippo, Doctor of the Church",
    "Writes the Confessions; joins Christian faith with the thought of Plato and shapes Western theology.",
    ""
   ]
  ],
  "CH_EV": [
   [
    "First Council of Nicaea",
    "",
    "The Council affirms the divinity of Christ and proclaims the Nicene Creed against Arianism."
   ],
   [
    "Great Schism",
    "",
    "The split between the Church in the West (Catholic) and in the East (Orthodox)."
   ],
   [
    "Council of Trent",
    "",
    "The Church answers the Reformation: renewal of teaching, sacraments and discipline."
   ],
   [
    "Second Vatican Council",
    "",
    "Renewal of the liturgy and the Church opening to the modern world."
   ],
   [
    "French Revolution",
    "",
    "The fall of the monarchy in France; the ideals of liberty, equality and fraternity, and also the persecution of the Church."
   ],
   [
    "Septuagint",
    "",
    "Jews in Alexandria translate the Old Testament into Greek; the apostles later use this translation."
   ]
  ]
 }
};

const UI = {
  pl: {
    bc: n => n + ' p.n.e.', ad: n => n + ' n.e.', approx: 'ok. ',
    years: n => (n === 1 ? 'rok' : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? 'lata' : 'lat'),
    creation: 'Stworzenie', undated: 'Bez daty', history: 'Historia', play: 'Odtwórz', pause: 'Pauza',
    lanes: { events: 'Wydarzenia', figures: 'Postacie', patriarchs: 'Patriarchowie', alive: 'Żyjący', nations: 'Narody', church: 'Kościół', history: 'Historia' },
    testaments: ['Stary Testament', 'Nowy Testament', 'Dzieje Kościoła'], testamentsShort: ['ST', 'NT', 'DK'], churchEvent: 'Wydarzenie w Kościele', historyEvent: 'Wydarzenie historyczne',
    born: 'ur. ', beforeSeamLower: 'przed 2000 p.n.e.', fromCain: 'od Kaina', from: 'od ',
    toggle: open => (open ? 'Ukryj' : 'Pokaż') + ' postacie, patriarchów i wykres żyjących',
    alivePat: 'Żyjący patriarchowie', aliveNat: 'Istniejące narody',
    natCain: 'Od Kaina do potopu.', beforeSeam: 'Przed 2000 p.n.e.', range: (a, b) => a + ' – ' + b, present: 'dziś',
    patAm: (s, n, yrs, e) => 'Urodzony w ' + s + '. Żył ' + n + ' ' + yrs + ', do ' + e + '.',
    patDated: (s, e, n, yrs) => 'Ur. ' + s + ', zm. ' + e + ' Pismo podaje ' + n + ' ' + yrs + '; daty są przybliżone.',
    age: (name, n) => name + ', wiek ' + n,
    hub: ['Przed potopem', 'Po potopie', 'Patriarchowie', 'Izrael i Juda', 'Imperia', 'Czas Kościoła'],
    legend: { patLine: 'Patriarchowie (linia Sema)' },
    ask: {
      lang: 'Polish', you: 'Ty',
      about: list => 'Opowiedz mi o: ' + (list.length > 1 ? list.slice(0, -1).join(', ') + ' i ' + list[list.length - 1] : list[0]) + '.', thinking: 'Myślę…', stopped: '(przerwano)',
      auto: (year, ev) => 'Co działo się w ' + year + '? Jestem przy wydarzeniu „' + ev + '”.',
      err: { rate_limited: 'Zbyt wiele pytań naraz. Spróbuj ponownie za chwilę.', session_expired: 'Zaloguj się ponownie do claude.ai, aby dalej pytać.',
        refused: 'Na to pytanie nie mogę odpowiedzieć. Spróbuj zapytać inaczej.', off: 'Czat jest niedostępny w tym widoku.', offline: 'Czat działa po otwarciu strony w claude.ai.',
        other: 'Nie udało się uzyskać odpowiedzi. Spróbuj ponownie.', cut: 'Odpowiedź została skrócona.' }
    },
    html: {
      docTitle: 'Wykres dziejów świata',
      eyebrow: 'Datowanie wg katolickich wydań Biblii · Od stworzenia do 2026 n.e.',
      title: 'Wykres dziejów świata',
      lede: 'Rozdziały 1–11 Księgi Rodzaju nie podają dat, dlatego liczymy je w latach od stworzenia świata (AM, <i>anno mundi</i>). Od Abrahama daty są zgodne z katolickimi wydaniami Biblii, a przed 722 p.n.e. są przybliżone. Naciśnij „Odtwórz” albo przeciągnij oś czasu.',
      periods: 'Okresy', aliveIn: 'Żyjący w', events: 'Wydarzenia', fullChart: 'Cały wykres',
      zoomIn: 'Powiększ', zoomOut: 'Pomniejsz', chart: 'Kołowy wykres chronologii', reel: 'Wydarzenia w obrazach',
      dock: 'Oś czasu: przeciągnij, aby zmienić rok, albo użyj klawiszy strzałek', lang: 'Język',
      askBar: 'Zapytaj o historię', askHello: 'dzień dobry',
      askIntro: 'Zapytaj o postać, wydarzenie albo epokę. Odpowiedź uwzględnia rok, w którym jesteś na osi czasu.',
      askPh: 'Np. kim był św. Augustyn?', askSend: 'Wyślij', askStop: 'Stop', askKnob: 'Zapytaj', askMode: 'Czat',
      askNote: 'Odpowiada Claude (AI) i może się mylić.', askLog: 'Rozmowa o historii'
    }
  },
  en: {
    bc: n => n + ' BC', ad: n => 'AD ' + n, approx: 'c. ',
    years: n => (n === 1 ? 'year' : 'years'),
    creation: 'Creation', undated: 'Undated', history: 'History', play: 'Play', pause: 'Pause',
    lanes: { events: 'Events', figures: 'Figures', patriarchs: 'Patriarchs', alive: 'Alive', nations: 'Nations', church: 'Church', history: 'History' },
    testaments: ['Old Testament', 'New Testament', 'Church history'], testamentsShort: ['OT', 'NT', 'CH'], churchEvent: 'Church event', historyEvent: 'Historic event',
    born: 'born ', beforeSeamLower: 'before 2000 BC', fromCain: 'from Cain', from: 'from ',
    toggle: open => (open ? 'Hide' : 'Show') + ' figures, patriarchs and the alive chart',
    alivePat: 'Patriarchs alive', aliveNat: 'Nations alive',
    natCain: 'From Cain to the Flood.', beforeSeam: 'Before 2000 BC', range: (a, b) => a + ' to ' + b, present: 'present',
    patAm: (s, n, yrs, e) => 'Born ' + s + '. Lived ' + n + ' ' + yrs + ', to ' + e + '.',
    patDated: (s, e, n, yrs) => 'Born ' + s + ', died ' + e + ' Scripture gives ' + n + ' ' + yrs + '; the dates are approximate.',
    age: (name, n) => name + ', age ' + n,
    hub: ['Before the flood', 'After the flood', 'Patriarchs', 'Israel and Judah', 'Empires', 'Church age'],
    legend: { patLine: 'Patriarchs (line of Shem)' },
    ask: {
      lang: 'English', you: 'You',
      about: list => 'Tell me about ' + (list.length > 1 ? list.slice(0, -1).join(', ') + ' and ' + list[list.length - 1] : list[0]) + '.', thinking: 'Thinking…', stopped: '(stopped)',
      auto: (year, ev) => 'What was happening in ' + year + '? I am at the event "' + ev + '".',
      err: { rate_limited: 'Too many questions at once. Try again in a moment.', session_expired: 'Sign in to claude.ai again to keep asking.',
        refused: 'I cannot answer that question. Try asking it another way.', off: 'Chat is not available in this view.', offline: 'Chat works when the page is opened in claude.ai.',
        other: 'Could not get an answer. Please try again.', cut: 'The answer was cut short.' }
    },
    html: {
      docTitle: 'World History Chart',
      eyebrow: 'Catholic study Bible dating · Creation to AD 2026',
      title: 'World history chart',
      lede: 'Genesis 1–11 gives no dates, so it is counted in years from Creation (AM, <i>anno mundi</i>). From Abraham on, dates follow Catholic study Bibles and are approximate before 722 BC. Press Play or drag the timeline.',
      periods: 'Periods', aliveIn: 'Alive in', events: 'Events', fullChart: 'Full chart',
      zoomIn: 'Zoom in', zoomOut: 'Zoom out', chart: 'Radial chronology chart', reel: 'Events in pictures',
      dock: 'Timeline: drag to change the year, or use the arrow keys', lang: 'Language',
      askBar: 'Ask about history', askHello: 'hello',
      askIntro: 'Ask about a person, an event or an era. The answer takes into account the year you are at on the timeline.',
      askPh: 'E.g. who was St Augustine?', askSend: 'Send', askStop: 'Stop', askKnob: 'Ask', askMode: 'Chat',
      askNote: 'Answered by Claude (AI), which can make mistakes.', askLog: 'Conversation about history'
    }
  }
};

// Write one language's text into the data arrays (years and structure never change).
function setDataLang(lang) {
  const T = TEXT[lang];
  Object.keys(T.COL).forEach(k => { COL[k][2] = T.COL[k]; });
  T.PAT.forEach((x, i) => { PAT[i][0] = x[0]; PAT[i][3] = x[1]; });
  T.NAT.forEach((x, i) => { NAT[i][0] = x[0]; NAT[i][4] = x[1]; NAT[i][5] = x[2] || ''; });
  T.EV.forEach((x, i) => { EV[i][0] = x[0]; EV[i][2] = x[1]; EV[i][3] = x[2]; if (x[3]) EV[i][4] = x[3]; else EV[i].length = 4; });
  T.ERAS.forEach((x, i) => { ERAS[i][0] = x; });
  T.CH_EV.forEach((x, i) => { CH_EV[i][0] = x[0]; CH_EV[i][2] = x[1]; CH_EV[i][3] = x[2]; });
  T.FIG.forEach((x, i) => { FIG[i][0] = x[0]; FIG[i][2] = x[1]; FIG[i][3] = x[2]; FIG[i][4] = x[3]; });
}
