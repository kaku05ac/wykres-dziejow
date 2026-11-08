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
   "orth": "Prawosławie",
   "king": "Królowie Izraela i Judy"
  },
  "PAT": [
   [
    "Adam",
    "Rdz 5,3-5",
    "Pierwszy człowiek, którego imię oznacza po hebrajsku zarazem „człowieka” i „ludzkość”, bo w nim Biblia widzi cały rodzaj ludzki. Bóg umieszcza go w ogrodzie Eden, a po nieposłuszeństwie, mimo wygnania z raju, obiecuje zwycięstwo nad złem. Chrześcijanie nazywają Chrystusa „nowym Adamem”, który otwiera ludziom drogę z powrotem do Boga."
   ],
   [
    "Set",
    "Rdz 5,6-8",
    "Syn Adama i Ewy, urodzony po śmierci Abla; Ewa nazywa go darem od Boga. Od niego wywodzi się ród, z którego przychodzą Noe i Abraham, a Ewangelia według św. Łukasza wymienia go w rodowodzie Jezusa."
   ],
   [
    "Enosz",
    "Rdz 5,9-11",
    "Syn Seta, którego imię to poetyckie hebrajskie słowo na „człowieka”, to samo, które pojawia się w Psalmie: „Czym jest człowiek, że o nim pamiętasz?” (Ps 8,5). Przy jego narodzinach Biblia zapisuje, że „wtedy zaczęto wzywać imienia Pana”, czyli pierwszą wzmiankę o ludziach zwracających się do Boga w modlitwie."
   ],
   [
    "Kenan",
    "Rdz 5,12-14",
    "Syn Enosza i ojciec Mahalalela, jedno z ogniw długiego rodowodu od Adama do Noego. Choć Biblia nie opowiada o jego czynach, jego imię przetrwało w rodowodzie Jezusa."
   ],
   [
    "Mahalalel",
    "Rdz 5,15-17",
    "Syn Kenana, którego imię znaczy „chwała Boga”. Należy do pokoleń, którym Biblia przypisuje bardzo długie życie, co w starożytnych tekstach było znakiem błogosławieństwa i dawności rodu."
   ],
   [
    "Jered",
    "Rdz 5,18-20",
    "Syn Mahalalela i jeden z najdłużej żyjących patriarchów. Najbardziej znany jest jako ojciec Henocha, człowieka szczególnie bliskiego Bogu."
   ],
   [
    "Henoch",
    "Rdz 5,21-24",
    "O Henochu Biblia mówi pięknie: „żył w przyjaźni z Bogiem, a następnie zniknął, bo zabrał go Bóg”. Jako jedyny w tym rodowodzie nie umiera zwyczajnie, a List do Hebrajczyków stawia go wśród wzorów wiary. Jego 365 lat to tyle, ile dni ma rok."
   ],
   [
    "Metuszelach",
    "Rdz 5,25-27",
    "Syn Henocha i dziadek Noego, najdłużej żyjący człowiek w Biblii; stąd powiedzenie „wiek Matuzalema”. Według liczb tekstu hebrajskiego umiera w roku potopu."
   ],
   [
    "Lamek",
    "Rdz 5,28-31",
    "Syn Metuszelacha. Nadając synowi imię Noe, czyli „odpoczynek, pociecha”, wyraża nadzieję: „Ten nas pocieszy w naszej pracy i w trudzie rąk naszych”."
   ],
   [
    "Noe",
    "Rdz 5,32; 9,28-29",
    "„Człowiek prawy”, który na polecenie Boga zbudował arkę i ocalił w niej rodzinę oraz zwierzęta. Po potopie Bóg zawiera z nim przymierze z całą ludzkością, a jego znakiem jest tęcza. W tradycji chrześcijańskiej arka stała się obrazem Kościoła, który bezpiecznie niesie ludzi przez fale dziejów."
   ],
   [
    "Sem",
    "Rdz 11,10-11",
    "Najstarszy syn Noego, którego ojciec szczególnie pobłogosławił. Od jego imienia pochodzi nazwa Semitów, a jego potomkami są Abraham, naród Izraela i według Ewangelii sam Jezus."
   ],
   [
    "Arpachszad",
    "Rdz 11,12-13",
    "Syn Sema, urodzony dwa lata po potopie, pierwszy z rodowodu, który przyszedł na świat już na odnowionej ziemi. Jego imię przetrwało w rodowodzie Jezusa."
   ],
   [
    "Szelach",
    "Rdz 11,14-15",
    "Syn Arpachszada i ojciec Hebera. Ciekawostka: grecki przekład Biblii, a za nim Ewangelia według św. Łukasza, dodaje przed nim jeszcze jedno pokolenie, Kainama, którego nie ma w tekście hebrajskim."
   ],
   [
    "Heber",
    "Rdz 11,16-17",
    "Syn Szelacha, od którego imienia tradycja wywodzi nazwę „Hebrajczycy”. Pierwszym, kogo Biblia tak nazywa, jest jego potomek Abraham."
   ],
   [
    "Peleg",
    "Rdz 11,18-19",
    "Syn Hebera, którego imię znaczy „podział”, bo „za jego dni ziemia została podzielona”, czyli ludzie rozeszli się po świecie. Od jego pokolenia długość życia patriarchów wyraźnie maleje."
   ],
   [
    "Reu",
    "Rdz 11,20-21",
    "Syn Pelega i ojciec Seruga. Biblia nie opowiada o jego życiu, ale wiernie przechowuje jego imię w rodowodzie prowadzącym do Abrahama i do Jezusa."
   ],
   [
    "Serug",
    "Rdz 11,22-23",
    "Pradziad Abrahama. Jego imię brzmi jak nazwa starożytnej miejscowości Sarugi w północnej Mezopotamii, w okolicy, z której wyszła rodzina Abrahama."
   ],
   [
    "Nachor",
    "Rdz 11,24-25",
    "Dziadek Abrahama. Jego imię nosi również brat Abrahama, dziadek Rebeki, która później zostanie żoną Izaaka."
   ],
   [
    "Terach",
    "Rdz 11,26-32",
    "Ojciec Abrama, Nachora i Harana. Wyrusza z rodziną z Ur chaldejskiego w stronę Kanaanu, ale zatrzymuje się w Charanie i tam umiera."
   ],
   [
    "Abraham",
    "Rdz 25,7",
    "Patriarcha, któremu Bóg zmienia imię z Abram na Abraham, „ojciec mnóstwa narodów”. Ufa Bogu, zawiera z Nim przymierze i w starości otrzymuje syna Izaaka. Szanują go żydzi, chrześcijanie i muzułmanie, a Kościół wspomina go w każdej Mszy odprawianej z Kanonem Rzymskim."
   ],
   [
    "Sara",
    "Rdz 23,1",
    "Żona Abrahama, której Bóg zmienia imię z Saraj na Sara, „księżniczka”. W starości rodzi Izaaka, którego imię znaczy „śmiać się”. Jest jedyną kobietą w Biblii, której wiek przy śmierci jest podany."
   ],
   [
    "Izmael",
    "Rdz 25,17",
    "Pierworodny syn Abrahama i Hagar, egipskiej służącej Sary; jego imię znaczy „Bóg słyszy”. Gdy Hagar z chłopcem błąka się po pustyni, Bóg słyszy jego płacz, otwiera Hagar oczy na studnię i obiecuje, że z Izmaela wyprowadzi wielki naród. Razem z Izaakiem grzebie ojca; według tradycji arabskiej jest przodkiem Arabów."
   ],
   [
    "Izaak",
    "Rdz 35,28",
    "Syn Abrahama i Sary, urodzony, gdy rodzice byli już w podeszłym wieku; jego imię znaczy „śmiać się”. Żeni się z Rebeką, a jego synami są bliźnięta Ezaw i Jakub. Żyje najdłużej z trzech patriarchów, o których Bóg mówi: „Jestem Bogiem Abrahama, Izaaka i Jakuba”."
   ],
   [
    "Jakub",
    "Rdz 47,28",
    "Syn Izaaka i Rebeki, młodszy z bliźniąt. W drodze do Charanu śni o drabinie sięgającej nieba, a po nocnej walce otrzymuje od Boga nowe imię: Izrael, od którego pochodzi nazwa całego narodu. Jego dwunastu synów daje początek dwunastu pokoleniom Izraela."
   ],
   [
    "Lewi",
    "Wj 6,16",
    "Trzeci syn Jakuba i Lei. Od niego pochodzi pokolenie Lewiego, któremu Bóg powierzył służbę w przybytku, a później w świątyni; z tego pokolenia pochodzą Mojżesz i Aaron. Pokolenie Lewiego nie otrzymało własnej ziemi, bo, jak mówi Pismo, „Pan jest jego dziedzictwem” (Pwt 10,9)."
   ],
   [
    "Józef",
    "Rdz 50,26",
    "Ukochany syn Jakuba, sprzedany przez zazdrosnych braci do Egiptu. Dzięki mądrości i wyjaśnieniu snów faraona zostaje zarządcą kraju i ratuje przed głodem Egipt oraz własną rodzinę. Przebacza braciom słowami: „Wy zamierzaliście wyrządzić mi zło, Bóg jednak zamierzył to jako dobro” (Rdz 50,20)."
   ],
   [
    "Kehat",
    "Wj 6,18",
    "Syn Lewiego, który wraz z ojcem i dziadkiem Jakubem przybył do Egiptu (Rdz 46,11). Jego potomkowie, Kehatyci, nosili podczas wędrówki po pustyni najświętsze sprzęty przybytku, w tym Arkę Przymierza (Lb 4). Jest dziadkiem Mojżesza i Aarona."
   ],
   [
    "Amram",
    "Wj 6,20",
    "Wnuk Lewiego, mąż Jokebed i ojciec Aarona, Miriam i Mojżesza (Wj 6,20). Jego żona ukryła małego Mojżesza przed rozkazem faraona i powierzyła go wodom Nilu w koszyku (Wj 2). Wj 6 podaje skróconą genealogię: między Kehatem a Amramem mogło upłynąć więcej pokoleń."
   ],
   [
    "Aaron",
    "Lb 33,38-39",
    "Starszy brat Mojżesza, który przemawiał w jego imieniu przed faraonem. Bóg ustanowił go pierwszym arcykapłanem Izraela, a jego potomkowie sprawowali kapłaństwo w świątyni. Umiera na górze Hor. List do Hebrajczyków ukazuje Chrystusa jako doskonałego arcykapłana, którego zapowiadało kapłaństwo Aarona."
   ],
   [
    "Mojżesz",
    "Pwt 34,7",
    "Uratowany jako niemowlę z wód Nilu i wychowany na dworze faraona, spotyka Boga w płonącym krzewie, który objawia mu swoje imię. Wyprowadza Izraela z Egiptu, a na górze Synaj otrzymuje Dziesięć Przykazań. Umiera na górze Nebo, oglądając z daleka Ziemię Obiecaną, a w Ewangelii ukazuje się obok Jezusa na górze Przemienienia."
   ],
   [
    "Jozue",
    "Joz 24,29",
    "Sługa i następca Mojżesza, który przeprowadza Izraela przez Jordan do Ziemi Obiecanej. Jego hebrajskie imię, Jehoszua, znaczy „Pan zbawia”; w greckiej formie brzmi ono „Jezus”. Pod koniec życia wzywa lud: „Ja i mój dom służyć będziemy Panu” (Joz 24,15)."
   ],
   [
    "Heli",
    "1 Sm 4,15"
   ],
   [
    "Jojada",
    "2 Krn 24,15"
   ]
  ],
  "NAT": [
   [
    "Ród Kaina",
    "Rdz 4,17-22",
    "Potomkowie Kaina zakładają pierwsze miasto i rozwijają ludzkie umiejętności: Jabal jest ojcem pasterzy, Jubal grających na cytrze i flecie, a Tubal-Kain kowali brązu i żelaza. To biblijna opowieść o narodzinach kultury, rzemiosła i muzyki."
   ],
   [
    "Elam",
    "Rdz 10,22",
    "Starożytny lud na wschód od Babilonii, w dzisiejszym Iranie, ze stolicą w Suzie. W dniu Pięćdziesiątnicy Elamici są wśród tych, którzy słyszą apostołów we własnym języku."
   ],
   [
    "Asyria",
    "Rdz 10,22; 2 Krl 17",
    "Potężne królestwo nad Tygrysem ze stolicą w Niniwie, które w 722 p.n.e. podbiło północne królestwo Izraela. Księga Jonasza opowiada jednak, jak mieszkańcy Niniwy nawrócili się i doznali Bożego miłosierdzia."
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
    "Rdz 10,8-10",
    "Starożytne miasto w krainie Szinear, którego nazwę Księga Rodzaju łączy z pomieszaniem języków przy wieży Babel. Później stolica imperium Nabuchodonozora, który zburzył Jerozolimę. W Apokalipsie nazwa „Babilon” stała się symbolem potęgi przeciwnej Bogu."
   ],
   [
    "Egipt",
    "Rdz 10,6",
    "W biblijnej tablicy narodów to Misraim, syn Chama; tak Egipt nazywa się po hebrajsku do dziś. To kraj niewoli Izraela i wielkiego wyjścia, a później schronienie dla Świętej Rodziny. Wkrótce stał się jedną z kolebek chrześcijaństwa."
   ],
   [
    "Kanaan",
    "Rdz 10,15-19",
    "Kraj nazwany od Kanaana, wnuka Noego, zamieszkany przez wiele ludów, m.in. Sydończyków, Hetytów i Jebusytów. To ziemia obiecana Abrahamowi i jego potomkom. W Ewangelii Jezus chwali wiarę kobiety kananejskiej i uzdrawia jej córkę."
   ],
   [
    "Fenicja",
    "1 Krl 5"
   ],
   [
    "Ludy indoeuropejskie",
    "Rdz 10,2-5",
    "Potomkowie Jafeta, syna Noego, zamieszkują północ i wybrzeża morza; wśród nich są Medowie i Grecy. Biblijna tablica narodów przedstawia całą ludzkość jako jedną wielką rodzinę wywodzącą się od Noego."
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
    "Przez wieki chrześcijański Wschód i Zachód rozwijały się w różnych kulturach, greckiej i łacińskiej. Narastały różnice w liturgii i zwyczajach, w rozumieniu jedności Kościoła wokół następcy św. Piotra oraz w sprawie słów „i Syna” (Filioque) w Credo. W 1054 r. legaci papiescy i patriarcha Konstantynopola obłożyli się wzajemnie ekskomuniką; rozłam utrwalał się w kolejnych wiekach. W 1965 r. św. Paweł VI i patriarcha Atenagoras usunęli te ekskomuniki z pamięci Kościoła, otwierając drogę do pojednania, choć pełnej jedności jeszcze nie ma."
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
    "„Na początku Bóg stworzył niebo i ziemię”: uroczysty hymn wyznaje, że wszystko, co istnieje, pochodzi od Boga i jest dobre. Obrazowy rytm sześciu dni i odpoczynku siódmego ukazuje ład stworzenia, a jego szczytem jest człowiek, mężczyzna i niewiasta, stworzony na obraz Boga i powołany do troski o świat. Kościół czyta ten tekst nie jako opis przyrodniczy, lecz jako katechezę o Stwórcy i godności człowieka (KKK 337–343).",
    "Bez daty"
   ],
   [
    "Potop",
    "Rdz 7",
    "Gdy zło zalewa ziemię, Bóg zsyła potop, ocalając w arce Noego, jego rodzinę i zwierzęta. Po roku wody opadają, a Bóg obiecuje, że już nigdy nie zniszczy ziemi. Chrześcijanie widzą w tej historii zapowiedź chrztu, w którym woda oznacza nowy początek.",
    "AM 1656"
   ],
   [
    "Wieża Babel",
    "Rdz 11,1-9",
    "Ludzie mówiący jednym językiem budują miasto i wieżę „sięgającą nieba”, by zdobyć sławę. Bóg miesza ich języki i rozprasza ich po całej ziemi. W dniu Pięćdziesiątnicy dzieje się coś odwrotnego: ludzie różnych języków rozumieją apostołów, co Kościół uznaje za swoje narodziny.",
    "Bez daty"
   ],
   [
    "Powołanie Abrahama",
    "Rdz 12,1-4",
    "Bóg mówi do Abrama: „Wyjdź z twojej ziemi rodzinnej… do kraju, który ci ukażę”, i obiecuje, że przez niego będą błogosławione wszystkie ludy. Abram w wieku 75 lat wyrusza z Charanu do Kanaanu, nie znając drogi. Dlatego nazywa się go „ojcem wszystkich wierzących”.",
    null
   ],
   [
    "Ofiarowanie Izaaka",
    "Rdz 22",
    "Bóg poddaje Abrahama próbie i każe mu złożyć w ofierze ukochanego syna Izaaka na górze Moria. W ostatniej chwili anioł powstrzymuje jego rękę, a Abraham składa w ofierze baranka uwikłanego w zarośla. Księga Kronik umieszcza górę Moria w miejscu, gdzie Salomon zbudował świątynię (2 Krn 3,1), a chrześcijanie widzą w Izaaku niosącym drwa na ofiarę zapowiedź Chrystusa niosącego krzyż; Kościół czyta tę historię w Wigilię Paschalną.",
    null
   ],
   [
    "Wyjście z Egiptu",
    "Wj 12",
    "Bóg wyprowadza Izraelitów z niewoli egipskiej pod wodzą Mojżesza. Przed wyjściem spożywają baranka paschalnego, a krew na odrzwiach chroni ich domy; potem przechodzą suchą stopą przez morze. Żydzi wspominają to co roku w święto Paschy, a chrześcijanie widzą w nim zapowiedź Paschy Chrystusa, Jego śmierci i zmartwychwstania.",
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
    "Nabuchodonozor po raz pierwszy zdobywa Jerozolimę i uprowadza do Babilonu króla Jojakina wraz z elitą kraju; w 587 p.n.e. niszczy miasto i świątynię.",
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
    "Pierwszy człowiek, którego imię oznacza po hebrajsku zarazem „człowieka” i „ludzkość”, bo w nim Biblia widzi cały rodzaj ludzki. Bóg umieszcza go w ogrodzie Eden, a po nieposłuszeństwie, mimo wygnania z raju, obiecuje zwycięstwo nad złem. Chrześcijanie nazywają Chrystusa „nowym Adamem”, który otwiera ludziom drogę z powrotem do Boga.",
    "Rdz 1-3"
   ],
   [
    "Henoch",
    "Chodził z Bogiem",
    "O Henochu Biblia mówi pięknie: „żył w przyjaźni z Bogiem, a następnie zniknął, bo zabrał go Bóg”. Jako jedyny w tym rodowodzie nie umiera zwyczajnie, a List do Hebrajczyków stawia go wśród wzorów wiary. Jego 365 lat to tyle, ile dni ma rok.",
    "Rdz 5,24"
   ],
   [
    "Noe",
    "Budowniczy arki",
    "„Człowiek prawy”, który na polecenie Boga zbudował arkę i ocalił w niej rodzinę oraz zwierzęta. Po potopie Bóg zawiera z nim przymierze z całą ludzkością, a jego znakiem jest tęcza. W tradycji chrześcijańskiej arka stała się obrazem Kościoła, który bezpiecznie niesie ludzi przez fale dziejów.",
    "Rdz 6-9"
   ],
   [
    "Nimrod",
    "Dzielny myśliwy",
    "Syn Kusza, nazwany „pierwszym mocarzem na ziemi” i „dzielnym myśliwym przed Panem”. Zakłada królestwo w krainie Szinear, z miastami Babel, Erek i Akkad, a jego imię stało się przysłowiowe dla wielkich łowców.",
    "Rdz 10,8-10"
   ],
   [
    "Abraham",
    "Ojciec narodów",
    "Patriarcha, któremu Bóg zmienia imię z Abram na Abraham, „ojciec mnóstwa narodów”. Ufa Bogu, zawiera z Nim przymierze i w starości otrzymuje syna Izaaka. Szanują go żydzi, chrześcijanie i muzułmanie, a Kościół wspomina go w każdej Mszy odprawianej z Kanonem Rzymskim.",
    "Rdz 12"
   ],
   [
    "Izaak",
    "Syn obietnicy",
    "Syn Abrahama i Sary, urodzony, gdy rodzice byli już w podeszłym wieku; jego imię znaczy „śmiać się”. Żeni się z Rebeką, a jego synami są bliźnięta Ezaw i Jakub. Żyje najdłużej z trzech patriarchów, o których Bóg mówi: „Jestem Bogiem Abrahama, Izaaka i Jakuba”.",
    "Rdz 21"
   ],
   [
    "Jakub",
    "Izrael",
    "Syn Izaaka i Rebeki, młodszy z bliźniąt. W drodze do Charanu śni o drabinie sięgającej nieba, a po nocnej walce otrzymuje od Boga nowe imię: Izrael, od którego pochodzi nazwa całego narodu. Jego dwunastu synów daje początek dwunastu pokoleniom Izraela.",
    "Rdz 25-50"
   ],
   [
    "Józef",
    "Zarządca Egiptu",
    "Ukochany syn Jakuba, sprzedany przez zazdrosnych braci do Egiptu. Dzięki mądrości i wyjaśnieniu snów faraona zostaje zarządcą kraju i ratuje przed głodem Egipt oraz własną rodzinę. Przebacza braciom słowami: „Wy zamierzaliście wyrządzić mi zło, Bóg jednak zamierzył to jako dobro” (Rdz 50,20).",
    "Rdz 37-50"
   ],
   [
    "Mojżesz",
    "Prawodawca",
    "Uratowany jako niemowlę z wód Nilu i wychowany na dworze faraona, spotyka Boga w płonącym krzewie, który objawia mu swoje imię. Wyprowadza Izraela z Egiptu, a na górze Synaj otrzymuje Dziesięć Przykazań. Umiera na górze Nebo, oglądając z daleka Ziemię Obiecaną, a w Ewangelii ukazuje się obok Jezusa na górze Przemienienia.",
    "Wj 3-20"
   ],
   [
    "Jozue",
    "Zdobywca Kanaanu",
    "Sługa i następca Mojżesza, który przeprowadza Izraela przez Jordan do Ziemi Obiecanej. Jego hebrajskie imię, Jehoszua, znaczy „Pan zbawia”; w greckiej formie brzmi ono „Jezus”. Pod koniec życia wzywa lud: „Ja i mój dom służyć będziemy Panu” (Joz 24,15).",
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
    "Wraz z Licyniuszem ogłasza edykt mediolański (313), który daje chrześcijanom wolność wyznania i kończy prześladowania.",
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
    "Drukuje Biblię ruchomą czcionką; do ok. 1500 r. w całej Europie działają setki drukarń, a Pismo Święte staje się dużo łatwiej dostępne.",
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
    "Cesarz od 527 r.; spisuje prawo rzymskie (Kodeks Justyniana, 529–534) i buduje Hagię Sophię (537).",
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
    "Hidżra z Mekki do Medyny: powstaje wspólnota muzułmańska (umma), a od tej daty liczy się kalendarz islamski. Mahomet głosił od ok. 610 r.; islam zmienia Bliski Wschód i świat arabski.",
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
    "Niosą Ewangelię Słowianom na Morawach; Cyryl tworzy dla nich pismo (głagolicę), a bracia przekładają na język słowiański Pismo i liturgię.",
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
    "Po zamachu stanu w 1799 r. przejmuje władzę, a w 1804 r., w obecności Piusa VII, koronuje się na cesarza; jego wojny i kodeks niosą idee rewolucji przez Europę.",
    ""
   ],
   [
    "Leon XIII",
    "Papież",
    "Encyklika „Rerum novarum” o sprawie robotniczej; początek nowożytnej katolickiej nauki społecznej.",
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
    "Pisze „Wyznania” (ok. 397–400); łączy wiarę chrześcijańską z myślą Platona i kształtuje teologię Zachodu.",
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
    "Wybucha rewolucja we Francji, a w 1792 r. upada monarchia; hasła wolności, równości i braterstwa, a zarazem podporządkowanie Kościoła państwu (1790) i prześladowania duchownych i wiernych."
   ],
   [
    "Septuaginta",
    "",
    "Żydzi w Aleksandrii zaczynają tłumaczyć Stary Testament na grekę (etapami, od III w. p.n.e.); Nowy Testament często cytuje ten przekład."
   ]
  ],
  "KINGS": [
   [
    "Saul",
    "1 Sm 13,1; Dz 13,21",
    "40 lat"
   ],
   [
    "Dawid",
    "2 Sm 5,4",
    "40 lat"
   ],
   [
    "Salomon",
    "1 Krl 11,42",
    "40 lat"
   ],
   [
    "Roboam",
    "1 Krl 14,21",
    "17 lat"
   ],
   [
    "Abiam",
    "1 Krl 15,2",
    "3 lata"
   ],
   [
    "Asa",
    "1 Krl 15,10",
    "41 lat"
   ],
   [
    "Jozafat",
    "1 Krl 22,42",
    "25 lat"
   ],
   [
    "Joram",
    "2 Krl 8,17",
    "8 lat"
   ],
   [
    "Ochozjasz",
    "2 Krl 8,26",
    "1 rok"
   ],
   [
    "Atalia",
    "2 Krl 11,3",
    "6 lat"
   ],
   [
    "Joasz",
    "2 Krl 12,1-2",
    "40 lat"
   ],
   [
    "Amazjasz",
    "2 Krl 14,2",
    "29 lat"
   ],
   [
    "Azariasz (Ozjasz)",
    "2 Krl 15,2",
    "52 lata"
   ],
   [
    "Jotam",
    "2 Krl 15,33",
    "16 lat"
   ],
   [
    "Achaz",
    "2 Krl 16,2",
    "16 lat"
   ],
   [
    "Ezechiasz",
    "2 Krl 18,2",
    "29 lat"
   ],
   [
    "Manasses",
    "2 Krl 21,1",
    "55 lat"
   ],
   [
    "Amon",
    "2 Krl 21,19",
    "2 lata"
   ],
   [
    "Jozjasz",
    "2 Krl 22,1",
    "31 lat"
   ],
   [
    "Joachaz",
    "2 Krl 23,31",
    "3 miesiące"
   ],
   [
    "Jojakim",
    "2 Krl 23,36",
    "11 lat"
   ],
   [
    "Jojakin",
    "2 Krl 24,8",
    "3 miesiące"
   ],
   [
    "Sedecjasz",
    "2 Krl 24,18",
    "11 lat"
   ],
   [
    "Jeroboam I",
    "1 Krl 14,20",
    "22 lata"
   ],
   [
    "Nadab",
    "1 Krl 15,25",
    "2 lata"
   ],
   [
    "Baasza",
    "1 Krl 15,33",
    "24 lata"
   ],
   [
    "Ela",
    "1 Krl 16,8",
    "2 lata"
   ],
   [
    "Zimri",
    "1 Krl 16,15",
    "7 dni"
   ],
   [
    "Omri",
    "1 Krl 16,23",
    "12 lat"
   ],
   [
    "Achab",
    "1 Krl 16,29",
    "22 lata"
   ],
   [
    "Ochozjasz",
    "1 Krl 22,52",
    "2 lata"
   ],
   [
    "Joram",
    "2 Krl 3,1",
    "12 lat"
   ],
   [
    "Jehu",
    "2 Krl 10,36",
    "28 lat"
   ],
   [
    "Joachaz",
    "2 Krl 13,1",
    "17 lat"
   ],
   [
    "Joasz",
    "2 Krl 13,10",
    "16 lat"
   ],
   [
    "Jeroboam II",
    "2 Krl 14,23",
    "41 lat"
   ],
   [
    "Zachariasz",
    "2 Krl 15,8",
    "6 miesięcy"
   ],
   [
    "Szallum",
    "2 Krl 15,13",
    "1 miesiąc"
   ],
   [
    "Menachem",
    "2 Krl 15,17",
    "10 lat"
   ],
   [
    "Pekachiasz",
    "2 Krl 15,23",
    "2 lata"
   ],
   [
    "Pekach",
    "2 Krl 15,27",
    "20 lat"
   ],
   [
    "Ozeasz",
    "2 Krl 17,1",
    "9 lat"
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
   "orth": "Orthodox Church",
   "king": "Kings of Israel and Judah"
  },
  "PAT": [
   [
    "Adam",
    "Gen 5:3-5",
    "The first man, whose Hebrew name means both “man” and “humankind”, for in him the Bible sees the whole human race. God places him in the garden of Eden, and after his disobedience, though he must leave paradise, God promises victory over evil. Christians call Christ the “new Adam”, who opens the way back to God."
   ],
   [
    "Seth",
    "Gen 5:6-8",
    "Son of Adam and Eve, born after the death of Abel; Eve calls him a gift from God. From him comes the line of Noah and Abraham, and the Gospel of Luke names him in the genealogy of Jesus."
   ],
   [
    "Enosh",
    "Gen 5:9-11",
    "Son of Seth, whose name is a poetic Hebrew word for “man”, the same word as in the Psalm: “What is man that you are mindful of him?” (Ps 8:5). At his birth the Bible records that “people began to invoke the name of the Lord”, the first mention of people turning to God in prayer."
   ],
   [
    "Kenan",
    "Gen 5:12-14",
    "Son of Enosh and father of Mahalalel, one of the links in the long line from Adam to Noah. Though the Bible tells nothing of his deeds, his name lives on in the genealogy of Jesus."
   ],
   [
    "Mahalalel",
    "Gen 5:15-17",
    "Son of Kenan, whose name means “praise of God”. He belongs to the generations to whom the Bible gives very long lives, which in ancient texts was a sign of blessing and of a family’s great age."
   ],
   [
    "Jared",
    "Gen 5:18-20",
    "Son of Mahalalel and one of the longest-lived patriarchs. He is best known as the father of Enoch, a man especially close to God."
   ],
   [
    "Enoch",
    "Gen 5:21-24",
    "The Bible says of Enoch beautifully that he “walked with God, and he was no longer here, for God took him”. He is the only one in this line who does not die in the ordinary way, and the Letter to the Hebrews counts him among the examples of faith. His 365 years match the days of a year."
   ],
   [
    "Methuselah",
    "Gen 5:25-27",
    "Son of Enoch and grandfather of Noah, the longest-lived man in the Bible; hence the saying “as old as Methuselah”. By the numbers of the Hebrew text he dies in the year of the Flood."
   ],
   [
    "Lamech",
    "Gen 5:28-31",
    "Son of Methuselah. Naming his son Noah, “rest, comfort”, he speaks his hope: “This one will bring us relief from our work and the toil of our hands.”"
   ],
   [
    "Noah",
    "Gen 5:32; 9:28-29",
    "“A righteous man” who at God’s command built the ark and saved his family and the animals in it. After the Flood God makes a covenant with him and with all humankind, and its sign is the rainbow. In Christian tradition the ark became an image of the Church, carrying people safely through the waves of history."
   ],
   [
    "Shem",
    "Gen 11:10-11",
    "The eldest son of Noah, whom his father especially blessed. The word “Semite” comes from his name, and his descendants include Abraham, the people of Israel and, according to the Gospel, Jesus himself."
   ],
   [
    "Arpachshad",
    "Gen 11:12-13",
    "Son of Shem, born two years after the Flood, the first of this line born on the renewed earth. His name lives on in the genealogy of Jesus."
   ],
   [
    "Shelah",
    "Gen 11:14-15",
    "Son of Arpachshad and father of Eber. A curiosity: the Greek translation of the Bible, and after it the Gospel of Luke, adds one more generation before him, Cainan, who is not in the Hebrew text."
   ],
   [
    "Eber",
    "Gen 11:16-17",
    "Son of Shelah, from whose name tradition derives the word “Hebrews”. The first person the Bible calls a Hebrew is his descendant Abraham."
   ],
   [
    "Peleg",
    "Gen 11:18-19",
    "Son of Eber, whose name means “division”, because “in his time the earth was divided”, that is, people spread out across the world. From his generation on, the patriarchs’ lives grow clearly shorter."
   ],
   [
    "Reu",
    "Gen 11:20-21",
    "Son of Peleg and father of Serug. The Bible tells nothing of his life, but faithfully keeps his name in the line that leads to Abraham and to Jesus."
   ],
   [
    "Serug",
    "Gen 11:22-23",
    "Great-grandfather of Abraham. His name sounds like the ancient town of Sarugi in northern Mesopotamia, in the region Abraham’s family came from."
   ],
   [
    "Nahor",
    "Gen 11:24-25",
    "Grandfather of Abraham. Abraham’s brother also bears his name, and is the grandfather of Rebekah, who will later marry Isaac."
   ],
   [
    "Terah",
    "Gen 11:26-32",
    "Father of Abram, Nahor and Haran. He sets out with his family from Ur of the Chaldeans towards Canaan, but stops in Haran and dies there."
   ],
   [
    "Abraham",
    "Gen 25:7",
    "The patriarch whose name God changes from Abram to Abraham, “father of a multitude of nations”. He trusts God, makes a covenant with him and in old age receives a son, Isaac. He is honoured by Jews, Christians and Muslims, and the Church remembers him at every Mass celebrated with the Roman Canon."
   ],
   [
    "Sarah",
    "Gen 23:1",
    "Wife of Abraham, whose name God changes from Sarai to Sarah, “princess”. In old age she gives birth to Isaac, whose name means “he laughs”. She is the only woman in the Bible whose age at death is given."
   ],
   [
    "Ishmael",
    "Gen 25:17",
    "Firstborn son of Abraham and Hagar, Sarah’s Egyptian maid; his name means “God hears”. When Hagar wanders in the desert with the boy, God hears his cry, opens Hagar’s eyes to a well and promises to make of Ishmael a great nation. With Isaac he buries their father; Arab tradition regards him as the ancestor of the Arabs."
   ],
   [
    "Isaac",
    "Gen 35:28",
    "Son of Abraham and Sarah, born when his parents were already old; his name means “he laughs”. He marries Rebekah, and his sons are the twins Esau and Jacob. He lives the longest of the three patriarchs of whom God says: “I am the God of Abraham, the God of Isaac and the God of Jacob.”"
   ],
   [
    "Jacob",
    "Gen 47:28",
    "Son of Isaac and Rebekah, the younger of the twins. On the way to Haran he dreams of a ladder reaching to heaven, and after a night of wrestling he receives from God a new name: Israel, which became the name of the whole people. His twelve sons are the ancestors of the twelve tribes of Israel."
   ],
   [
    "Levi",
    "Ex 6:16",
    "Third son of Jacob and Leah. From him comes the tribe of Levi, to which God entrusted the service of the tabernacle and later of the temple; Moses and Aaron belong to this tribe. The tribe of Levi received no land of its own, because, as Scripture says, “the Lord is its heritage” (Deut 10:9)."
   ],
   [
    "Joseph",
    "Gen 50:26",
    "Jacob’s beloved son, sold into Egypt by his jealous brothers. Through wisdom and by explaining Pharaoh’s dreams he becomes governor of the land and saves Egypt and his own family from famine. He forgives his brothers with the words: “Even though you meant harm to me, God meant it for good” (Gen 50:20)."
   ],
   [
    "Kohath",
    "Ex 6:18",
    "Son of Levi, who came to Egypt with his father and his grandfather Jacob (Gen 46:11). His descendants, the Kohathites, carried the most holy objects of the tabernacle during the desert journey, among them the Ark of the Covenant (Num 4). He is the grandfather of Moses and Aaron."
   ],
   [
    "Amram",
    "Ex 6:20",
    "Grandson of Levi, husband of Jochebed and father of Aaron, Miriam and Moses (Ex 6:20). His wife hid the baby Moses from Pharaoh’s order and set him in a basket on the waters of the Nile (Ex 2). Exodus 6 gives a shortened genealogy: more generations may lie between Kohath and Amram."
   ],
   [
    "Aaron",
    "Num 33:38-39",
    "Elder brother of Moses, who spoke for him before Pharaoh. God made him the first high priest of Israel, and his descendants served as priests in the temple. He dies on Mount Hor. The Letter to the Hebrews presents Christ as the perfect high priest, foreshadowed by the priesthood of Aaron."
   ],
   [
    "Moses",
    "Deut 34:7",
    "Rescued as a baby from the waters of the Nile and raised at Pharaoh’s court, he meets God in the burning bush, who reveals His name to him. He leads Israel out of Egypt and on Mount Sinai receives the Ten Commandments. He dies on Mount Nebo, seeing the Promised Land from afar, and in the Gospel he appears beside Jesus on the mount of the Transfiguration."
   ],
   [
    "Joshua",
    "Josh 24:29",
    "Servant and successor of Moses, who leads Israel across the Jordan into the Promised Land. His Hebrew name, Yehoshua, means “the Lord saves”; in its Greek form it is “Jesus”. At the end of his life he calls the people: “As for me and my household, we will serve the Lord” (Josh 24:15)."
   ],
   [
    "Eli",
    "1 Sam 4:15"
   ],
   [
    "Jehoiada",
    "2 Chr 24:15"
   ]
  ],
  "NAT": [
   [
    "Line of Cain",
    "Gen 4:17-22",
    "Cain’s descendants found the first city and develop human skills: Jabal is the ancestor of herdsmen, Jubal of those who play the lyre and pipe, and Tubal-cain of smiths in bronze and iron. It is the Bible’s story of the birth of culture, craft and music."
   ],
   [
    "Elam",
    "Gen 10:22",
    "An ancient people east of Babylonia, in present-day Iran, with its capital at Susa. At Pentecost, Elamites are among those who hear the apostles in their own language."
   ],
   [
    "Assyria",
    "Gen 10:22; 2 Kgs 17",
    "A powerful kingdom on the Tigris with its capital at Nineveh, which conquered the northern kingdom of Israel in 722 BC. Yet the Book of Jonah tells how the people of Nineveh repented and received God’s mercy."
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
    "Gen 10:8-10",
    "An ancient city in the land of Shinar, whose name Genesis links with the confusion of languages at the tower of Babel. Later it was the capital of Nebuchadnezzar’s empire, which destroyed Jerusalem. In Revelation the name “Babylon” became a symbol of power set against God."
   ],
   [
    "Egypt",
    "Gen 10:6",
    "In the Bible’s table of nations it is Mizraim, son of Ham; this is still the Hebrew name for Egypt. It is the land of Israel’s slavery and of the great Exodus, and later a refuge for the Holy Family. Soon it became one of the cradles of Christianity."
   ],
   [
    "Canaan",
    "Gen 10:15-19",
    "The land named after Canaan, a grandson of Noah, home to many peoples, among them the Sidonians, Hittites and Jebusites. It is the land promised to Abraham and his descendants. In the Gospel Jesus praises the faith of a Canaanite woman and heals her daughter."
   ],
   [
    "Phoenicia",
    "1 Kgs 5"
   ],
   [
    "Indo-European peoples",
    "Gen 10:2-5",
    "The descendants of Japheth, son of Noah, live in the north and along the coasts; among them are the Medes and the Greeks. The Bible’s table of nations presents all humankind as one great family descended from Noah."
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
    "Over the centuries the Christian East and West grew up in different cultures, Greek and Latin. Differences deepened in liturgy and custom, in understanding the unity of the Church around the successor of St Peter, and over the words \"and the Son\" (Filioque) in the Creed. In 1054 the papal legates and the Patriarch of Constantinople excommunicated each other; the rift hardened over the following centuries. In 1965 St Paul VI and Patriarch Athenagoras removed those excommunications from the memory of the Church, opening the way to reconciliation, though full communion is not yet restored."
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
    "“In the beginning God created the heavens and the earth”: this solemn hymn proclaims that everything that exists comes from God and is good. The poetic rhythm of six days and a seventh day of rest shows the order of creation, crowned by the human being, man and woman, made in God’s image and called to care for the world. The Church reads this text not as a scientific account but as a teaching about the Creator and human dignity (CCC 337–343).",
    "Undated"
   ],
   [
    "The Flood",
    "Gen 7",
    "When evil floods the earth, God sends the Flood, saving Noah, his family and the animals in the ark. After a year the waters recede, and God promises never again to destroy the earth. Christians see in this story a foreshadowing of baptism, where water means a new beginning.",
    "AM 1656"
   ],
   [
    "Tower of Babel",
    "Gen 11:1-9",
    "People speaking one language build a city and a tower “with its top in the sky” to make a name for themselves. God confuses their language and scatters them over all the earth. At Pentecost the opposite happens: people of many languages understand the apostles, which the Church celebrates as her birth.",
    "Undated"
   ],
   [
    "Call of Abraham",
    "Gen 12:1-4",
    "God says to Abram: “Go forth from your land… to a land that I will show you”, and promises that through him all the families of the earth will be blessed. At 75 Abram sets out from Haran for Canaan, not knowing the way. That is why he is called “the father of all who believe”.",
    null
   ],
   [
    "Binding of Isaac",
    "Gen 22",
    "God tests Abraham and tells him to offer his beloved son Isaac on Mount Moriah. At the last moment an angel stops his hand, and Abraham offers instead a ram caught in a thicket. The Book of Chronicles places Mount Moriah where Solomon later built the temple (2 Chr 3:1), and Christians see in Isaac carrying the wood for the sacrifice a sign of Christ carrying the cross; the Church reads this story at the Easter Vigil.",
    null
   ],
   [
    "The Exodus",
    "Ex 12",
    "God leads the Israelites out of slavery in Egypt under Moses. Before they leave they eat the Passover lamb, and its blood on the doorposts protects their homes; then they cross the sea on dry ground. Jews remember this every year at Passover, and Christians see in it a sign of Christ’s Passover, His death and resurrection.",
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
    "Nebuchadnezzar first takes Jerusalem and deports King Jehoiachin and the leading men of the land to Babylon; in 587 BC he destroys the city and the temple.",
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
    "The first man, whose Hebrew name means both “man” and “humankind”, for in him the Bible sees the whole human race. God places him in the garden of Eden, and after his disobedience, though he must leave paradise, God promises victory over evil. Christians call Christ the “new Adam”, who opens the way back to God.",
    "Gen 1-3"
   ],
   [
    "Enoch",
    "Walked with God",
    "The Bible says of Enoch beautifully that he “walked with God, and he was no longer here, for God took him”. He is the only one in this line who does not die in the ordinary way, and the Letter to the Hebrews counts him among the examples of faith. His 365 years match the days of a year.",
    "Gen 5:24"
   ],
   [
    "Noah",
    "Builder of the ark",
    "“A righteous man” who at God’s command built the ark and saved his family and the animals in it. After the Flood God makes a covenant with him and with all humankind, and its sign is the rainbow. In Christian tradition the ark became an image of the Church, carrying people safely through the waves of history.",
    "Gen 6-9"
   ],
   [
    "Nimrod",
    "Mighty hunter",
    "Son of Cush, called “the first mighty man on earth” and “a mighty hunter before the Lord”. He founds a kingdom in the land of Shinar, with the cities of Babel, Erech and Akkad, and his name became proverbial for great hunters.",
    "Gen 10:8-10"
   ],
   [
    "Abraham",
    "Father of the nations",
    "The patriarch whose name God changes from Abram to Abraham, “father of a multitude of nations”. He trusts God, makes a covenant with him and in old age receives a son, Isaac. He is honoured by Jews, Christians and Muslims, and the Church remembers him at every Mass celebrated with the Roman Canon.",
    "Gen 12"
   ],
   [
    "Isaac",
    "Son of promise",
    "Son of Abraham and Sarah, born when his parents were already old; his name means “he laughs”. He marries Rebekah, and his sons are the twins Esau and Jacob. He lives the longest of the three patriarchs of whom God says: “I am the God of Abraham, the God of Isaac and the God of Jacob.”",
    "Gen 21"
   ],
   [
    "Jacob",
    "Israel",
    "Son of Isaac and Rebekah, the younger of the twins. On the way to Haran he dreams of a ladder reaching to heaven, and after a night of wrestling he receives from God a new name: Israel, which became the name of the whole people. His twelve sons are the ancestors of the twelve tribes of Israel.",
    "Gen 25-50"
   ],
   [
    "Joseph",
    "Ruler in Egypt",
    "Jacob’s beloved son, sold into Egypt by his jealous brothers. Through wisdom and by explaining Pharaoh’s dreams he becomes governor of the land and saves Egypt and his own family from famine. He forgives his brothers with the words: “Even though you meant harm to me, God meant it for good” (Gen 50:20).",
    "Gen 37-50"
   ],
   [
    "Moses",
    "Lawgiver",
    "Rescued as a baby from the waters of the Nile and raised at Pharaoh’s court, he meets God in the burning bush, who reveals His name to him. He leads Israel out of Egypt and on Mount Sinai receives the Ten Commandments. He dies on Mount Nebo, seeing the Promised Land from afar, and in the Gospel he appears beside Jesus on the mount of the Transfiguration.",
    "Ex 3-20"
   ],
   [
    "Joshua",
    "Conqueror of Canaan",
    "Servant and successor of Moses, who leads Israel across the Jordan into the Promised Land. His Hebrew name, Yehoshua, means “the Lord saves”; in its Greek form it is “Jesus”. At the end of his life he calls the people: “As for me and my household, we will serve the Lord” (Josh 24:15).",
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
    "With Licinius he issues the Edict of Milan (313), granting Christians freedom of worship and ending the persecutions.",
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
    "Prints the Bible with movable type; by about 1500 hundreds of presses work across Europe, and Scripture becomes far more widely available.",
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
    "Emperor from 527; codifies Roman law (the Code of Justinian, 529–534) and builds the Hagia Sophia (537).",
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
    "The Hijra from Mecca to Medina founds the Muslim community (ummah) and begins the Islamic calendar. Muhammad had preached since about 610; Islam transforms the Middle East and the Arab world.",
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
    "They bring the Gospel to the Slavs in Moravia; Cyril creates an alphabet for them (Glagolitic), and the brothers translate Scripture and the liturgy into Slavonic.",
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
    "After the coup of 1799 he takes power, and in 1804, with Pius VII present, crowns himself emperor; his wars and code carry the ideas of the Revolution across Europe.",
    ""
   ],
   [
    "Leo XIII",
    "Pope",
    "The encyclical Rerum novarum on the condition of workers; the beginning of modern Catholic social teaching.",
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
    "Writes the Confessions (c. 397–400); joins Christian faith with the thought of Plato and shapes Western theology.",
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
    "Revolution breaks out in France, and in 1792 the monarchy falls; the ideals of liberty, equality and fraternity, and also the Church placed under the state (1790) and the persecution of clergy and faithful."
   ],
   [
    "Septuagint",
    "",
    "Jews in Alexandria begin translating the Old Testament into Greek (in stages, from the 3rd century BC); the New Testament often quotes this translation."
   ]
  ],
  "KINGS": [
   [
    "Saul",
    "1 Sam 13:1; Acts 13:21",
    "40 years"
   ],
   [
    "David",
    "2 Sam 5:4",
    "40 years"
   ],
   [
    "Solomon",
    "1 Kgs 11:42",
    "40 years"
   ],
   [
    "Rehoboam",
    "1 Kgs 14:21",
    "17 years"
   ],
   [
    "Abijam",
    "1 Kgs 15:2",
    "3 years"
   ],
   [
    "Asa",
    "1 Kgs 15:10",
    "41 years"
   ],
   [
    "Jehoshaphat",
    "1 Kgs 22:42",
    "25 years"
   ],
   [
    "Jehoram",
    "2 Kgs 8:17",
    "8 years"
   ],
   [
    "Ahaziah",
    "2 Kgs 8:26",
    "1 year"
   ],
   [
    "Athaliah",
    "2 Kgs 11:3",
    "6 years"
   ],
   [
    "Joash",
    "2 Kgs 12:1-2",
    "40 years"
   ],
   [
    "Amaziah",
    "2 Kgs 14:2",
    "29 years"
   ],
   [
    "Azariah (Uzziah)",
    "2 Kgs 15:2",
    "52 years"
   ],
   [
    "Jotham",
    "2 Kgs 15:33",
    "16 years"
   ],
   [
    "Ahaz",
    "2 Kgs 16:2",
    "16 years"
   ],
   [
    "Hezekiah",
    "2 Kgs 18:2",
    "29 years"
   ],
   [
    "Manasseh",
    "2 Kgs 21:1",
    "55 years"
   ],
   [
    "Amon",
    "2 Kgs 21:19",
    "2 years"
   ],
   [
    "Josiah",
    "2 Kgs 22:1",
    "31 years"
   ],
   [
    "Jehoahaz",
    "2 Kgs 23:31",
    "3 months"
   ],
   [
    "Jehoiakim",
    "2 Kgs 23:36",
    "11 years"
   ],
   [
    "Jehoiachin",
    "2 Kgs 24:8",
    "3 months"
   ],
   [
    "Zedekiah",
    "2 Kgs 24:18",
    "11 years"
   ],
   [
    "Jeroboam I",
    "1 Kgs 14:20",
    "22 years"
   ],
   [
    "Nadab",
    "1 Kgs 15:25",
    "2 years"
   ],
   [
    "Baasha",
    "1 Kgs 15:33",
    "24 years"
   ],
   [
    "Elah",
    "1 Kgs 16:8",
    "2 years"
   ],
   [
    "Zimri",
    "1 Kgs 16:15",
    "7 days"
   ],
   [
    "Omri",
    "1 Kgs 16:23",
    "12 years"
   ],
   [
    "Ahab",
    "1 Kgs 16:29",
    "22 years"
   ],
   [
    "Ahaziah",
    "1 Kgs 22:52",
    "2 years"
   ],
   [
    "Joram",
    "2 Kgs 3:1",
    "12 years"
   ],
   [
    "Jehu",
    "2 Kgs 10:36",
    "28 years"
   ],
   [
    "Jehoahaz",
    "2 Kgs 13:1",
    "17 years"
   ],
   [
    "Jehoash",
    "2 Kgs 13:10",
    "16 years"
   ],
   [
    "Jeroboam II",
    "2 Kgs 14:23",
    "41 years"
   ],
   [
    "Zechariah",
    "2 Kgs 15:8",
    "6 months"
   ],
   [
    "Shallum",
    "2 Kgs 15:13",
    "1 month"
   ],
   [
    "Menahem",
    "2 Kgs 15:17",
    "10 years"
   ],
   [
    "Pekahiah",
    "2 Kgs 15:23",
    "2 years"
   ],
   [
    "Pekah",
    "2 Kgs 15:27",
    "20 years"
   ],
   [
    "Hoshea",
    "2 Kgs 17:1",
    "9 years"
   ]
  ]
 }
};

const UI = {
  pl: {
    bc: n => n + ' p.n.e.', ad: n => n + ' n.e.', approx: 'ok. ',
    years: n => (n === 1 ? 'rok' : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? 'lata' : 'lat'),
    creation: 'Stworzenie', undated: 'Bez daty', history: 'Historia', play: 'Odtwórz', pause: 'Pauza',
    lanes: { events: 'Wydarzenia', figures: 'Postacie', patriarchs: 'Patriarchowie', kings: 'Królowie', alive: 'Żyjący', nations: 'Narody', church: 'Kościół', history: 'Historia' },
    testaments: ['Stary Testament', 'Nowy Testament', 'Dzieje Kościoła'], testamentsShort: ['ST', 'NT', 'DK'], churchEvent: 'Wydarzenie w Kościele', historyEvent: 'Wydarzenie historyczne',
    born: 'ur. ', beforeSeamLower: 'przed 2000 p.n.e.', fromCain: 'od Kaina', from: 'od ',
    toggle: open => (open ? 'Ukryj' : 'Pokaż') + ' postacie, patriarchów i wykres żyjących',
    alivePat: 'Żyjący patriarchowie', aliveNat: 'Istniejące narody',
    natCain: 'Od Kaina do potopu.', beforeSeam: 'Przed 2000 p.n.e.', range: (a, b) => a + ' – ' + b, present: 'dziś',
    patAm: (s, n, yrs, e) => 'Urodzony w ' + s + '. Żył ' + n + ' ' + yrs + ', do ' + e + '.',
    patDated: (s, e, n, yrs) => 'Ur. ' + s + ', zm. ' + e + ' Pismo podaje ' + n + ' ' + yrs + '; daty są przybliżone.',
    age: (name, n) => name + ', wiek ' + n,
    hub: ['Przed potopem', 'Po potopie', 'Patriarchowie', 'Izrael i Juda', 'Imperia', 'Czas Kościoła'],
    legend: { patLine: 'Długość życia podana w Piśmie' },
    realm: { un: 'Zjednoczone królestwo', ju: 'Królestwo Judy', is: 'Królestwo Izraela' }, realmShort: { un: 'Izrael', ju: 'Juda', is: 'Izrael' },
    kingBody: (realm, range, age, reign) => realm + ', panowanie ' + range + (age ? ' Wiek przy objęciu tronu: ' + age + '.' : '') + ' Pismo podaje: ' + reign + ' panowania.',
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
    lanes: { events: 'Events', figures: 'Figures', patriarchs: 'Patriarchs', kings: 'Kings', alive: 'Alive', nations: 'Nations', church: 'Church', history: 'History' },
    testaments: ['Old Testament', 'New Testament', 'Church history'], testamentsShort: ['OT', 'NT', 'CH'], churchEvent: 'Church event', historyEvent: 'Historic event',
    born: 'born ', beforeSeamLower: 'before 2000 BC', fromCain: 'from Cain', from: 'from ',
    toggle: open => (open ? 'Hide' : 'Show') + ' figures, patriarchs and the alive chart',
    alivePat: 'Patriarchs alive', aliveNat: 'Nations alive',
    natCain: 'From Cain to the Flood.', beforeSeam: 'Before 2000 BC', range: (a, b) => a + ' to ' + b, present: 'present',
    patAm: (s, n, yrs, e) => 'Born ' + s + '. Lived ' + n + ' ' + yrs + ', to ' + e + '.',
    patDated: (s, e, n, yrs) => 'Born ' + s + ', died ' + e + ' Scripture gives ' + n + ' ' + yrs + '; the dates are approximate.',
    age: (name, n) => name + ', age ' + n,
    hub: ['Before the flood', 'After the flood', 'Patriarchs', 'Israel and Judah', 'Empires', 'Church age'],
    legend: { patLine: 'Lifespans given in Scripture' },
    realm: { un: 'United kingdom', ju: 'Kingdom of Judah', is: 'Kingdom of Israel' }, realmShort: { un: 'Israel', ju: 'Judah', is: 'Israel' },
    kingBody: (realm, range, age, reign) => realm + ', reign ' + range + (age ? ' Age at accession: ' + age + '.' : '') + ' Scripture gives ' + reign + ' of reign.',
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
  T.PAT.forEach((x, i) => { PAT[i][0] = x[0]; PAT[i][3] = x[1]; PAT[i][4] = x[2] || ''; });
  T.KINGS.forEach((x, i) => { KINGS[i][0] = x[0]; KINGS[i][4] = x[1]; KINGS[i][6] = x[2]; });
  T.NAT.forEach((x, i) => { NAT[i][0] = x[0]; NAT[i][4] = x[1]; NAT[i][5] = x[2] || ''; });
  T.EV.forEach((x, i) => { EV[i][0] = x[0]; EV[i][2] = x[1]; EV[i][3] = x[2]; if (x[3]) EV[i][4] = x[3]; else EV[i].length = 4; });
  T.ERAS.forEach((x, i) => { ERAS[i][0] = x; });
  T.CH_EV.forEach((x, i) => { CH_EV[i][0] = x[0]; CH_EV[i][2] = x[1]; CH_EV[i][3] = x[2]; });
  T.FIG.forEach((x, i) => { FIG[i][0] = x[0]; FIG[i][2] = x[1]; FIG[i][3] = x[2]; FIG[i][4] = x[3]; });
}
