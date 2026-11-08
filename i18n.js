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
    "1 Sm 4,15",
    "Kapłan w sanktuarium w Szilo, u którego wychowywał się prorok Samuel. To on nauczył chłopca odpowiadać Bogu: „Mów, Panie, bo sługa Twój słucha” (1 Sm 3,9)."
   ],
   [
    "Jojada",
    "2 Krn 24,15",
    "Kapłan w Jerozolimie, który ukrył małego Joasza przed królową Atalią i osadził go na tronie. Za to, że czynił dobro w Izraelu, pochowano go w grobach królewskich (2 Krn 24,16)."
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
    "Rdz 10,22; 2 Krl 16,9",
    "Starożytne królestwo Aramejczyków ze stolicą w Damaszku, sąsiad i częsty rywal Izraela. Ich język, aramejski, stał się powszechny na Bliskim Wschodzie; posługiwał się nim także Jezus."
   ],
   [
    "Arabowie",
    "Rdz 25,12-18",
    "Ludy Półwyspu Arabskiego; tradycja umieszcza tam krainę Saby, z której królowa przybyła do Salomona. W dniu Pięćdziesiątnicy wśród słuchaczy apostołów są także Arabowie (Dz 2,11)."
   ],
   [
    "Izrael",
    "Joz 1; 2 Krl 25",
    "Naród wywodzący się od dwunastu synów Jakuba, który po wyjściu z Egiptu osiedlił się w Kanaanie, a za Dawida i Salomona stworzył królestwo ze stolicą w Jerozolimie. Z tego narodu pochodzi Jezus, a św. Jan Paweł II nazwał Żydów „starszymi braćmi” chrześcijan w wierze."
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
    "1 Krl 5",
    "Kraina kupców i żeglarzy na wybrzeżu dzisiejszego Libanu, z miastami Tyr i Sydon; król Tyru dostarczył Salomonowi cedrów na budowę świątyni. Fenicjanie rozpowszechnili alfabet, od którego pochodzą nasze litery."
   ],
   [
    "Ludy indoeuropejskie",
    "Rdz 10,2-5",
    "Potomkowie Jafeta, syna Noego, zamieszkują północ i wybrzeża morza; wśród nich są Medowie i Grecy. Biblijna tablica narodów przedstawia całą ludzkość jako jedną wielką rodzinę wywodzącą się od Noego."
   ],
   [
    "Grecja",
    "Dn 8,21",
    "Kraina miast-państw, takich jak Ateny i Sparta, kolebka filozofii, demokracji, teatru i nauki. Dzięki podbojom Aleksandra Wielkiego greka stała się wspólnym językiem świata śródziemnomorskiego, i w tym języku spisano cały Nowy Testament."
   ],
   [
    "Persja",
    "Dn 8,20",
    "Imperium Achemenidów z ośrodkami w Suzie i Persepolis, jedno z największych państw starożytności, od Indii po Egipt. Jego królowie, zwłaszcza Cyrus, pozwolili Żydom wrócić z wygnania i odbudować świątynię."
   ],
   [
    "Rzym",
    "Dn 7,7",
    "Miasto założone według tradycji w 753 p.n.e., które stało się imperium obejmującym cały basen Morza Śródziemnego; za panowania jego pierwszego cesarza, Augusta, urodził się Jezus (Łk 2,1). W Rzymie ponieśli męczeństwo święci Piotr i Paweł, a miasto stało się siedzibą papieży i centrum Kościoła katolickiego."
   ],
   [
    "Kościół katolicki",
    "Mt 16,18; Dz 2",
    "„Katolicki” znaczy po grecku „powszechny”, bo od Pięćdziesiątnicy Kościół jest otwarty dla każdego narodu, języka i kultury. Z dwunastu apostołów wyrósł przez dwa tysiące lat we wspólnotę ponad 1,4 miliarda ludzi, którą prowadzi papież, następca św. Piotra."
   ],
   [
    "Prawosławie",
    "",
    "Przez wieki chrześcijański Wschód i Zachód rozwijały się w różnych kulturach, greckiej i łacińskiej. Narastały różnice w liturgii i zwyczajach, w rozumieniu jedności Kościoła wokół następcy św. Piotra oraz w sprawie słów „i Syna” (Filioque) w Credo. W 1054 r. legaci papiescy i patriarcha Konstantynopola obłożyli się wzajemnie ekskomuniką; rozłam utrwalał się w kolejnych wiekach. W 1965 r. św. Paweł VI i patriarcha Atenagoras usunęli te ekskomuniki z pamięci Kościoła, otwierając drogę do pojednania, choć pełnej jedności jeszcze nie ma."
   ],
   [
    "Protestantyzm",
    "",
    "Wspólnoty chrześcijańskie wyrosłe z reformacji XVI wieku, m.in. luteranie, kalwiniści i liczne Kościoły ewangelikalne, które podkreślają autorytet Pisma Świętego i zbawienie z łaski przez wiarę. Kościół katolicki uznaje ochrzczonych protestantów za braci w Chrystusie i prowadzi z nimi dialog ekumeniczny."
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
    "Bez daty"
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
    "Pierwsza świątynia w Jerozolimie, zbudowana przez Salomona jako dom dla Pana, w którym w najświętszym miejscu stała Arka Przymierza. Przez wieki była sercem modlitwy Izraela, aż do zburzenia przez Babilończyków w 587 p.n.e.",
    null
   ],
   [
    "Podział królestwa",
    "1 Krl 12",
    "Po śmierci Salomona jedno królestwo rozpada się na dwa: północne Królestwo Izraela pod wodzą Jeroboama i południową Judę z Jerozolimą, przy której zostaje dynastia Dawida. Oba królestwa istnieją obok siebie przez dwa stulecia.",
    null
   ],
   [
    "Upadek Samarii",
    "2 Krl 17",
    "Koniec północnego Królestwa Izraela: Asyria zdobywa jego stolicę, Samarię, i przesiedla mieszkańców w odległe krainy. Od tej krainy biorą nazwę Samarytanie, znani z przypowieści Jezusa o miłosiernym Samarytaninie.",
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
    "Perski król Cyrus pozwala Żydom uprowadzonym do Babilonu wrócić do ojczyzny i odbudować świątynię w Jerozolimie. Powracający, prowadzeni m.in. przez Zorobabela, odbudowują ją; druga świątynia zostaje ukończona ok. 515 p.n.e. (Ezd 6,15).",
    null
   ],
   [
    "Narodzenie Chrystusa",
    "Mt 2; Łk 2",
    "Jezus, Syn Boży, rodzi się z Maryi Dziewicy w Betlejem, mieście Dawida, i zostaje złożony w żłobie. Odwiedzają Go pasterze i Mędrcy ze Wschodu, a Kościół świętuje to wydarzenie w Boże Narodzenie.",
    "ok. 6–4 p.n.e."
   ],
   [
    "Ukrzyżowanie i Pięćdziesiątnica",
    "Dz 2",
    "Jezus umiera na krzyżu w Jerozolimie i trzeciego dnia zmartwychwstaje, a pięćdziesiąt dni później Duch Święty zstępuje na apostołów zgromadzonych z Maryją. Piotr wygłasza pierwsze kazanie, a tego dnia chrzest przyjmuje około trzech tysięcy osób: to narodziny Kościoła.",
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
    "Prorokini i jedna z sędziów, czyli przywódców Izraela przed czasami królów. Razem z wodzem Barakiem prowadzi lud do zwycięstwa nad Syserą, a jej pieśń (Sdz 5) uchodzi za jeden z najstarszych utworów Biblii.",
    "Sdz 4-5"
   ],
   [
    "Samson",
    "Sędzia",
    "Sędzia Izraela obdarzony przez Boga ogromną siłą, którą tracił, gdy obcięto mu włosy. Walczył z Filistynami, a List do Hebrajczyków wymienia go wśród bohaterów wiary (Hbr 11,32).",
    "Sdz 13-16"
   ],
   [
    "Saul",
    "Pierwszy król Izraela",
    "Pierwszy król Izraela, namaszczony przez proroka Samuela. Odważny wojownik, który z czasem przestaje słuchać Boga i ginie w bitwie z Filistynami.",
    "1 Sm 10"
   ],
   [
    "Dawid",
    "Król Izraela",
    "Pasterz z Betlejem, który pokonał Goliata, został królem Izraela i uczynił Jerozolimę stolicą; tradycja przypisuje mu wiele psalmów. Bóg obiecał, że jego dynastia będzie trwać na wieki, dlatego Jezus nazywany jest „Synem Dawida”.",
    "2 Sm 5"
   ],
   [
    "Salomon",
    "Budowniczy świątyni",
    "Syn Dawida i król Izraela, który poprosił Boga nie o bogactwo, lecz o mądrość. Słynął z mądrych wyroków i zbudował w Jerozolimie świątynię.",
    "1 Krl 6"
   ],
   [
    "Eliasz",
    "Prorok",
    "Jeden z największych proroków Izraela, który na górze Karmel ukazuje moc prawdziwego Boga wobec proroków Baala. Zostaje uniesiony do nieba w wichrze, a w Ewangelii ukazuje się obok Jezusa na górze Przemienienia.",
    "1 Krl 18"
   ],
   [
    "Izajasz",
    "Prorok",
    "Prorok z Jerozolimy, który zapowiada Emmanuela, którego pocznie Dziewica, i Sługę Pańskiego cierpiącego za grzechy innych. Kościół tak często czyta jego słowa w Adwencie, że św. Hieronim nazwał go raczej ewangelistą niż prorokiem.",
    "Iz 6,1"
   ],
   [
    "Ezechiasz",
    "Król Judy",
    "Pobożny król Judy, który oczyścił świątynię z bałwochwalstwa i odnowił obchody Paschy. Gdy Asyryjczycy oblegli Jerozolimę, zaufał Bogu za radą Izajasza, a miasto ocalało.",
    "2 Krl 18-19"
   ],
   [
    "Daniel",
    "Prorok w Babilonie",
    "Prorok, młody Judejczyk uprowadzony do Babilonu, który pozostał wierny Bogu na dworze królewskim i wyszedł nietknięty z jaskini lwów. W jego wizji pojawia się „ktoś podobny do Syna Człowieczego” (Dn 7,13); tak właśnie często nazywał siebie Jezus.",
    "Dn 1"
   ],
   [
    "Cyrus",
    "Król Persji",
    "Król Persji, który w 539 p.n.e. zdobył Babilon i pozwolił Żydom wrócić do Jerozolimy. Księga Izajasza nazywa go „pomazańcem” Pana, czyli władcą wybranym przez Boga do wykonania Jego planu (Iz 45,1).",
    "Ezd 1"
   ],
   [
    "Estera",
    "Królowa Persji",
    "Żydowska królowa Persji, żona króla Aswerusa, która z narażeniem życia wstawiła się za swoim ludem i ocaliła go przed zagładą zaplanowaną przez Hamana. Na pamiątkę tego ocalenia Żydzi obchodzą święto Purim.",
    "Est 4-8"
   ],
   [
    "Nehemiasz",
    "Namiestnik",
    "Żydowski podczaszy króla Persji, który został namiestnikiem Judy i odbudował mury Jerozolimy w 52 dni (Ne 6,15). Doprowadził też do tego, że lud uroczyście odnowił przymierze z Bogiem (Ne 10).",
    "Ne 2-6"
   ],
   [
    "Jan Chrzciciel",
    "Poprzednik",
    "Syn Zachariasza i Elżbiety, krewny Jezusa, który nad Jordanem wzywał do nawrócenia i udzielał chrztu, także samemu Jezusowi. Wskazał na Niego słowami „Oto Baranek Boży” (J 1,29), które Kościół powtarza w każdej Mszy Świętej.",
    "Łk 1"
   ],
   [
    "Jezus",
    "Chrystus",
    "„Tak Bóg umiłował świat, że Syna swego Jednorodzonego dał” (J 3,16): Jezus, Syn Boży i Syn Maryi, przychodzi na świat w Betlejem jako znak tej miłości. Przez swoje nauczanie, cuda, śmierć na krzyżu i zmartwychwstanie otwiera każdemu człowiekowi drogę do Boga.",
    "Mt 2; Łk 2"
   ],
   [
    "Paweł",
    "Apostoł",
    "Żyd z Tarsu, najpierw prześladowca chrześcijan, który po spotkaniu ze zmartwychwstałym Jezusem pod Damaszkiem został Apostołem Narodów. Zakładał wspólnoty w całym świecie rzymskim, jego listy stanowią dużą część Nowego Testamentu, a życie oddał jako męczennik w Rzymie.",
    "Dz 9-28"
   ],
   [
    "Konstantyn",
    "Cesarz rzymski",
    "Cesarz rzymski, który wraz z Licyniuszem ogłosił w 313 r. edykt mediolański, dający chrześcijanom wolność wyznania. Zwołał Sobór Nicejski, założył Konstantynopol, a sam przyjął chrzest u kresu życia.",
    ""
   ],
   [
    "Marcin Luter",
    "Reformator",
    "Niemiecki zakonnik augustiański i profesor teologii, którego 95 tez z 1517 r. zapoczątkowało reformację protestancką. Przetłumaczył Biblię na niemiecki; dziś katolicy i luteranie prowadzą dialog, a w 1999 r. podpisali wspólną deklarację o usprawiedliwieniu.",
    ""
   ],
   [
    "Św. Tomasz z Akwinu",
    "Doktor Kościoła",
    "Włoski dominikanin, jeden z największych teologów Kościoła, nazywany Doktorem Anielskim. W Sumie teologicznej połączył wiarę z rozumem, korzystając z filozofii Arystotelesa; jest patronem szkół i uczelni katolickich.",
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
    "Prymas Polski, który przez ponad 30 lat prowadził Kościół w czasach komunizmu; więziony w latach 1953–1956, nie ugiął się przed władzą. Wielką Nowenną przygotował Polaków do Tysiąclecia Chrztu Polski, a w 2021 r. został ogłoszony błogosławionym.",
    ""
   ],
   [
    "Św. Jan Paweł II",
    "Papież",
    "Karol Wojtyła z Wadowic, pierwszy papież Polak, wybrany w 1978 r., który w ciągu prawie 27 lat pontyfikatu odwiedził ponad 120 krajów. Jego słowa z 1979 r. „Niech zstąpi Duch Twój! I odnowi oblicze ziemi. Tej ziemi!” dodały Polakom odwagi w drodze do wolności; jest świętym od 2014 r.",
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
    "Papież i Doktor Kościoła, który troszczył się o ubogich, porządkował liturgię i wysłał misjonarzy do Anglii. Od jego imienia pochodzi nazwa chorału gregoriańskiego, a sam nazywał siebie „sługą sług Bożych”.",
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
    "Król Franków, koronowany w Rzymie na cesarza przez papieża Leona III w Boże Narodzenie 800 r. Zjednoczył dużą część Europy, wspierał szkoły i klasztory, a jego czasy nazywa się renesansem karolińskim.",
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
    "Pierwszy historyczny władca Polski, który w 966 r. przyjął chrzest, co uważa się za początek chrześcijaństwa i państwowości polskiej. Do chrztu skłoniła go m.in. żona, czeska księżniczka Dobrawa.",
    ""
   ],
   [
    "Saladyn",
    "Sułtan",
    "Muzułmański sułtan Egiptu i Syrii, który w 1187 r. odbił Jerozolimę z rąk krzyżowców. Nawet przeciwnicy cenili go za rycerskość, a w pokoju zawartym w 1192 r. z Ryszardem Lwie Serce zgodził się, by chrześcijanie pielgrzymowali do Jerozolimy.",
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
    "Polski astronom i duchowny, kanonik warmiński, który w dziele „O obrotach sfer niebieskich” przedstawił model świata, w którym Ziemia krąży wokół Słońca. Swoje dzieło zadedykował papieżowi Pawłowi III.",
    ""
   ],
   [
    "Izaak Newton",
    "Uczony",
    "Angielski uczony, który w „Principiach” opisał prawa ruchu i powszechnego ciążenia, kładąc podstawy nowożytnej fizyki. Był człowiekiem głęboko wierzącym i wiele pisał o Biblii.",
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
    "Papież, który w encyklice „Rerum novarum” upomniał się o godność robotników, sprawiedliwą płacę i prawo do zrzeszania się, dając początek nowożytnej katolickiej nauce społecznej. Był też wielkim czcicielem różańca, któremu poświęcił wiele encyklik.",
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
   ],
   [
    "Uniwersytet Boloński",
    "Pierwszy uniwersytet",
    "Najstarszy nieprzerwanie działający uniwersytet świata, który według tradycji powstał w 1088 r. i zasłynął studiami prawa rzymskiego i kanonicznego. Za nim, często ze szkół katedralnych i z przywilejami papieży, powstają uniwersytety w Paryżu, Oksfordzie i Krakowie (1364), gdzie rozwijają się teologia, prawo, medycyna i nauki o przyrodzie.",
    ""
   ]
  ],
  "CH_EV": [
   [
    "Sobór Nicejski I",
    "",
    "Pierwszy sobór powszechny, zwołany przez cesarza Konstantyna, na którym biskupi wyznali przeciw nauce Ariusza, że Syn Boży jest „współistotny Ojcu”. Wyznanie wiary z Nicei, rozwinięte w Konstantynopolu, chrześcijanie odmawiają do dziś w Credo."
   ],
   [
    "Wielka schizma",
    "",
    "Rozłam między chrześcijaństwem zachodnim, łacińskim (katolickim), a wschodnim, greckim (prawosławnym), symbolicznie datowany na wzajemne ekskomuniki z 1054 r. Od 1965 r. papieże i patriarchowie Konstantynopola prowadzą dialog na drodze do pojednania."
   ],
   [
    "Sobór Trydencki",
    "",
    "Sobór, który był odpowiedzią Kościoła na reformację: wyjaśnił naukę o łasce, sakramentach i Piśmie Świętym oraz odnowił życie duchowieństwa. Dał początek seminariom duchownym, Katechizmowi Rzymskiemu i mszałowi, który służył Kościołowi przez cztery stulecia."
   ],
   [
    "Sobór Watykański II",
    "",
    "Sobór zwołany przez św. Jana XXIII, który odnowił liturgię, wprowadzając języki narodowe, i otworzył Kościół na dialog ze światem współczesnym, innymi chrześcijanami i religiami. Jego dokumenty, jak „Lumen gentium” i „Gaudium et spes”, kształtują życie Kościoła do dziś."
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
    "40 lat",
    "Pierwszy król Izraela, syn Kisza z pokolenia Beniamina, namaszczony przez proroka Samuela; według Dz 13,21 panował 40 lat. Odważny wojownik, który z czasem przestał słuchać Boga i zginął w bitwie z Filistynami na górach Gilboa."
   ],
   [
    "Dawid",
    "2 Sm 5,4",
    "40 lat",
    "Drugi król Izraela, syn Jessego z Betlejem, który objął tron w wieku 30 lat i panował 40 lat. Zdobył Jerozolimę i uczynił ją stolicą, a Bóg obiecał mu dynastię na wieki, z której pochodzi Jezus, „Syn Dawida”."
   ],
   [
    "Salomon",
    "1 Krl 11,42",
    "40 lat",
    "Trzeci król zjednoczonego królestwa Izraela, syn Dawida i Batszeby, który według Pisma panował 40 lat. Zasłynął mądrością i zbudował świątynię w Jerozolimie, a po jego śmierci królestwo podzieliło się na dwa."
   ],
   [
    "Roboam",
    "1 Krl 14,21",
    "17 lat",
    "Pierwszy król Judy po podziale królestwa, syn Salomona, który objął tron w wieku 41 lat i panował 17 lat. Odrzucił prośbę ludu o ulżenie ciężarom, przez co dziesięć pokoleń północnych oddzieliło się od Jerozolimy."
   ],
   [
    "Abiam",
    "1 Krl 15,2",
    "3 lata",
    "Król Judy, syn Roboama, który panował 3 lata. Prowadził wojnę z Jeroboamem, królem Izraela (2 Krn 13)."
   ],
   [
    "Asa",
    "1 Krl 15,10",
    "41 lat",
    "Król Judy, syn Abiama, który panował 41 lat. Usunął z kraju bożki, a Księga Królów mówi, że jego serce było szczere wobec Pana (1 Krl 15,14); Kroniki dodają, że pod koniec życia zaufał bardziej królowi Aramu niż Bogu (2 Krn 16)."
   ],
   [
    "Jozafat",
    "1 Krl 22,42",
    "25 lat",
    "Król Judy, syn Asy, który objął tron w wieku 35 lat i panował 25 lat. Kontynuował reformy ojca i posyłał nauczycieli Prawa do miast Judy (2 Krn 17,7-9); zawarł przymierze z Achabem i walczył u jego boku pod Ramot w Gileadzie."
   ],
   [
    "Joram",
    "2 Krl 8,17",
    "8 lat",
    "Król Judy, syn Jozafata, który objął tron w wieku 32 lat i panował 8 lat. Jego żoną była Atalia, córka Achaba (2 Krl 8,18), a on sam poszedł drogą królów Izraela, odchodząc od Boga."
   ],
   [
    "Ochozjasz",
    "2 Krl 8,26",
    "1 rok",
    "Król Judy, syn Jorama i Atalii, który objął tron w wieku 22 lat i panował tylko rok. Podczas odwiedzin u króla Izraela Jorama został śmiertelnie raniony przez ludzi Jehu i zmarł w Megiddo (2 Krl 9,27)."
   ],
   [
    "Atalia",
    "2 Krl 11,3",
    "6 lat",
    "Jedyna kobieta, która samodzielnie rządziła Judą, córka Achaba z rodu Omriego; po śmierci syna przejęła władzę na 6 lat. Obalił ją kapłan Jojada, osadzając na tronie małego Joasza."
   ],
   [
    "Joasz",
    "2 Krl 12,1-2",
    "40 lat",
    "Król Judy, syn Ochozjasza, ocalony jako niemowlę przed Atalią, który objął tron w wieku 7 lat i panował 40 lat. Za życia kapłana Jojady odnowił świątynię, później jednak odszedł od Boga."
   ],
   [
    "Amazjasz",
    "2 Krl 14,2",
    "29 lat",
    "Król Judy, syn Joasza, który objął tron w wieku 25 lat i panował 29 lat. Pokonał Edomitów, lecz potem wyzwał na wojnę Joasza, króla Izraela, i przegrał; zginął w spisku w Lakisz."
   ],
   [
    "Azariasz (Ozjasz)",
    "2 Krl 15,2",
    "52 lata",
    "Król Judy, syn Amazjasza, który objął tron w wieku 16 lat i panował 52 lata; za jego czasów Juda przeżyła rozkwit. Gdy w pysze chciał sam składać kadzidło w świątyni, dotknął go trąd (2 Krn 26), a w roku jego śmierci został powołany prorok Izajasz."
   ],
   [
    "Jotam",
    "2 Krl 15,33",
    "16 lat",
    "Król Judy, syn Azariasza, który objął tron w wieku 25 lat i panował 16 lat. Rządził w imieniu chorego ojca i umacniał miasta Judy, a Pismo mówi, że postępował słusznie w oczach Pana."
   ],
   [
    "Achaz",
    "2 Krl 16,2",
    "16 lat",
    "Król Judy, syn Jotama, który objął tron w wieku 20 lat i panował 16 lat. Gdy Aram i Izrael wyruszyli przeciw Judzie, prorok Izajasz wezwał go do wiary, a on wolał szukać pomocy u Asyrii; to jemu prorok zapowiedział znak Emmanuela (Iz 7)."
   ],
   [
    "Ezechiasz",
    "2 Krl 18,2",
    "29 lat",
    "Król Judy, syn Achaza, który objął tron w wieku 25 lat i panował 29 lat. Oczyścił świątynię i zaufał Bogu, gdy Asyryjczycy oblegli Jerozolimę; Pismo zalicza go do najwierniejszych królów."
   ],
   [
    "Manasses",
    "2 Krl 21,1",
    "55 lat",
    "Król Judy, syn Ezechiasza, który objął tron w wieku 12 lat i panował 55 lat, najdłużej ze wszystkich królów. Przywrócił bałwochwalstwo, lecz według Księgi Kronik w niewoli asyryjskiej upokorzył się przed Bogiem i nawrócił (2 Krn 33,12-13)."
   ],
   [
    "Amon",
    "2 Krl 21,19",
    "2 lata",
    "Król Judy, syn Manassesa, który objął tron w wieku 22 lat i panował 2 lata. Powrócił do bałwochwalstwa i zginął w spisku swoich dworzan."
   ],
   [
    "Jozjasz",
    "2 Krl 22,1",
    "31 lat",
    "Król Judy, syn Amona, który objął tron w wieku 8 lat i panował 31 lat. Gdy w świątyni odnaleziono księgę Prawa, przeprowadził wielką reformę religijną; zginął w bitwie z faraonem Neko pod Megiddo."
   ],
   [
    "Joachaz",
    "2 Krl 23,31",
    "3 miesiące",
    "Król Judy, syn Jozjasza, który objął tron w wieku 23 lat i panował tylko 3 miesiące. Faraon Neko uwięził go w Ribla i uprowadził do Egiptu, gdzie zmarł."
   ],
   [
    "Jojakim",
    "2 Krl 23,36",
    "11 lat",
    "Król Judy, syn Jozjasza, osadzony na tronie przez faraona, który objął go w wieku 25 lat i panował 11 lat. Spalił zwój z proroctwami Jeremiasza (Jr 36) i zbuntował się przeciw Babilonii."
   ],
   [
    "Jojakin",
    "2 Krl 24,8",
    "3 miesiące",
    "Król Judy, syn Jojakima, który objął tron w wieku 18 lat i panował 3 miesiące. Nabuchodonozor uprowadził go do Babilonu, gdzie po latach wypuszczono go z więzienia; jest wymieniony w rodowodzie Jezusa jako Jechoniasz (Mt 1,12)."
   ],
   [
    "Sedecjasz",
    "2 Krl 24,18",
    "11 lat",
    "Ostatni król Judy, stryj Jojakina, osadzony na tronie przez Nabuchodonozora, który objął go w wieku 21 lat i panował 11 lat. Zbuntował się przeciw Babilonii wbrew radom Jeremiasza; w 587 p.n.e. Jerozolima i świątynia zostały zburzone, a on sam oślepiony i uprowadzony do Babilonu."
   ],
   [
    "Jeroboam I",
    "1 Krl 14,20",
    "22 lata",
    "Pierwszy król północnego Królestwa Izraela, za Salomona nadzorca robót przymusowych, który panował 22 lata. Aby lud nie pielgrzymował do Jerozolimy, postawił złote cielce w Betel i Dan, co Pismo nazywa „grzechem Jeroboama”."
   ],
   [
    "Nadab",
    "1 Krl 15,25",
    "2 lata",
    "Król Izraela, syn Jeroboama, który panował 2 lata. Zginął z rąk Baszy, który wymordował cały ród Jeroboama."
   ],
   [
    "Baasza",
    "1 Krl 15,33",
    "24 lata",
    "Król Izraela, który zdobył tron, zabijając Nadaba, i panował 24 lata. Prowadził wojny z Judą, a prorok Jehu zapowiedział upadek jego rodu."
   ],
   [
    "Ela",
    "1 Krl 16,8",
    "2 lata",
    "Król Izraela, syn Baszy, który panował 2 lata. Został zamordowany podczas pijatyki przez swojego dowódcę Zimriego."
   ],
   [
    "Zimri",
    "1 Krl 16,15",
    "7 dni",
    "Dowódca połowy rydwanów, który zabił Elę i panował w Izraelu tylko 7 dni. Gdy wojsko, które obwołało królem Omriego, zdobyło Tirsę, Zimri podpalił pałac i zginął w płomieniach."
   ],
   [
    "Omri",
    "1 Krl 16,23",
    "12 lat",
    "Król Izraela, wcześniej dowódca wojska, który panował 12 lat. Zbudował nową stolicę, Samarię, a jego dynastię znają także źródła asyryjskie, które nazywały Izrael „domem Omriego”."
   ],
   [
    "Achab",
    "1 Krl 16,29",
    "22 lata",
    "Król Izraela, syn Omriego, który panował 22 lata. Pod wpływem żony Izebel szerzył kult Baala, któremu przeciwstawił się prorok Eliasz; zginął w bitwie pod Ramot w Gileadzie."
   ],
   [
    "Ochozjasz",
    "1 Krl 22,52",
    "2 lata",
    "Król Izraela, syn Achaba, który panował 2 lata. Po upadku z okna pałacu posłał pytać o zdrowie bożka Baal-Zebuba, za co prorok Eliasz zapowiedział mu śmierć."
   ],
   [
    "Joram",
    "2 Krl 3,1",
    "12 lat",
    "Król Izraela, syn Achaba, który panował 12 lat; za jego czasów działał prorok Elizeusz. Zginął z rąk Jehu, który zakończył dynastię Omriego."
   ],
   [
    "Jehu",
    "2 Krl 10,36",
    "28 lat",
    "Dowódca wojska namaszczony na króla Izraela przez ucznia proroka, wysłanego przez Elizeusza; panował 28 lat. Wytępił ród Achaba i kult Baala w Samarii, lecz nie usunął złotych cielców Jeroboama."
   ],
   [
    "Joachaz",
    "2 Krl 13,1",
    "17 lat",
    "Król Izraela, syn Jehu, który panował 17 lat. Gdy Aramejczycy uciskali Izrael, błagał Pana o pomoc, a Bóg dał ludowi wybawcę (2 Krl 13,4-5)."
   ],
   [
    "Joasz",
    "2 Krl 13,10",
    "16 lat",
    "Król Izraela, syn Joachaza, który panował 16 lat. Odwiedził umierającego proroka Elizeusza, odzyskał miasta zabrane przez Aram i pokonał króla Judy Amazjasza."
   ],
   [
    "Jeroboam II",
    "2 Krl 14,23",
    "41 lat",
    "Król Izraela, syn Joasza, który panował 41 lat i odzyskał dawne granice królestwa (2 Krl 14,25). W jego czasach działali prorocy Amos i Ozeasz, upominając bogatych za krzywdę ubogich (Am 1,1; Oz 1,1)."
   ],
   [
    "Zachariasz",
    "2 Krl 15,8",
    "6 miesięcy",
    "Król Izraela, syn Jeroboama II i ostatni z dynastii Jehu, który panował tylko 6 miesięcy. Zginął w spisku Szalluma."
   ],
   [
    "Szallum",
    "2 Krl 15,13",
    "1 miesiąc",
    "Król Izraela, który zabił Zachariasza i panował tylko miesiąc. Zginął z rąk Menachema."
   ],
   [
    "Menachem",
    "2 Krl 15,17",
    "10 lat",
    "Król Izraela, który panował 10 lat. Aby utrzymać się na tronie, zapłacił królowi Asyrii Pulowi tysiąc talentów srebra (2 Krl 15,19)."
   ],
   [
    "Pekachiasz",
    "2 Krl 15,23",
    "2 lata",
    "Król Izraela, syn Menachema, który panował 2 lata. Zginął w spisku swego adiutanta Pekacha."
   ],
   [
    "Pekach",
    "2 Krl 15,27",
    "20 lat",
    "Król Izraela, który zabił Pekachiasza; Pismo podaje 20 lat jego panowania. Sprzymierzony z Aramem napadł na Judę, a Asyria w odwecie zajęła Galileę i Gilead."
   ],
   [
    "Ozeasz",
    "2 Krl 17,1",
    "9 lat",
    "Ostatni król północnego Królestwa Izraela, który panował 9 lat. Za jego rządów Asyria zdobyła Samarię (722 p.n.e.), co zakończyło istnienie królestwa."
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
    "1 Sam 4:15",
    "A priest at the sanctuary of Shiloh, in whose care the prophet Samuel grew up. He taught the boy to answer God: “Speak, Lord, for your servant is listening” (1 Sam 3:9)."
   ],
   [
    "Jehoiada",
    "2 Chr 24:15",
    "A priest in Jerusalem who hid the young Joash from Queen Athaliah and set him on the throne. Because he had done good in Israel, he was buried among the kings (2 Chr 24:16)."
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
    "Gen 10:22; 2 Kgs 16:9",
    "The ancient kingdom of the Arameans with its capital at Damascus, a neighbour and frequent rival of Israel. Their language, Aramaic, spread across the Middle East; Jesus spoke it too."
   ],
   [
    "Arabs",
    "Gen 25:12-18",
    "The peoples of the Arabian Peninsula; tradition places there the land of Sheba, whose queen came to visit Solomon. At Pentecost, Arabs are among those who hear the apostles (Acts 2:11)."
   ],
   [
    "Israel",
    "Josh 1; 2 Kgs 25",
    "The people descended from the twelve sons of Jacob, who settled in Canaan after the Exodus and under David and Solomon formed a kingdom with Jerusalem as its capital. Jesus comes from this people, and St John Paul II called the Jews the “elder brothers” of Christians in faith."
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
    "1 Kgs 5",
    "A land of merchants and sailors on the coast of present-day Lebanon, with the cities of Tyre and Sidon; the king of Tyre sent Solomon cedar for the temple. The Phoenicians spread the alphabet from which our letters come."
   ],
   [
    "Indo-European peoples",
    "Gen 10:2-5",
    "The descendants of Japheth, son of Noah, live in the north and along the coasts; among them are the Medes and the Greeks. The Bible’s table of nations presents all humankind as one great family descended from Noah."
   ],
   [
    "Greece",
    "Dan 8:21",
    "A land of city-states such as Athens and Sparta, the cradle of philosophy, democracy, theatre and science. Through the conquests of Alexander the Great, Greek became the common language of the Mediterranean world, and the whole New Testament was written in it."
   ],
   [
    "Persia",
    "Dan 8:20",
    "The Achaemenid Empire, centred on Susa and Persepolis, one of the largest states of the ancient world, from India to Egypt. Its kings, above all Cyrus, allowed the Jews to return from exile and rebuild the temple."
   ],
   [
    "Rome",
    "Dan 7:7",
    "A city founded, by tradition, in 753 BC, which grew into an empire around the whole Mediterranean; Jesus was born in the reign of its first emperor, Augustus (Luke 2:1). Sts Peter and Paul were martyred in Rome, and the city became the seat of the popes and the centre of the Catholic Church."
   ],
   [
    "Catholic Church",
    "Matt 16:18; Acts 2",
    "“Catholic” means “universal” in Greek, because since Pentecost the Church has been open to every nation, language and culture. From twelve apostles it has grown over two thousand years into a community of more than 1.4 billion people, led by the Pope, the successor of St Peter."
   ],
   [
    "Orthodox Church",
    "",
    "Over the centuries the Christian East and West grew up in different cultures, Greek and Latin. Differences deepened in liturgy and custom, in understanding the unity of the Church around the successor of St Peter, and over the words \"and the Son\" (Filioque) in the Creed. In 1054 the papal legates and the Patriarch of Constantinople excommunicated each other; the rift hardened over the following centuries. In 1965 St Paul VI and Patriarch Athenagoras removed those excommunications from the memory of the Church, opening the way to reconciliation, though full communion is not yet restored."
   ],
   [
    "Protestantism",
    "",
    "Christian communities that grew out of the 16th-century Reformation, among them Lutherans, Calvinists and many evangelical churches, which stress the authority of Scripture and salvation by grace through faith. The Catholic Church regards baptised Protestants as brothers and sisters in Christ and is in ecumenical dialogue with them."
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
    "Undated"
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
    "The first temple in Jerusalem, built by Solomon as a house for the Lord, with the Ark of the Covenant in its holiest place. For centuries it was the heart of Israel’s prayer, until the Babylonians destroyed it in 587 BC.",
    null
   ],
   [
    "Kingdom divides",
    "1 Kgs 12",
    "After Solomon’s death the one kingdom splits in two: the northern Kingdom of Israel under Jeroboam and southern Judah with Jerusalem, which stays with the line of David. The two kingdoms exist side by side for two centuries.",
    null
   ],
   [
    "Fall of Samaria",
    "2 Kgs 17",
    "The end of the northern Kingdom of Israel: Assyria takes its capital, Samaria, and deports its people to distant lands. The Samaritans take their name from this region, known from Jesus’ parable of the Good Samaritan.",
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
    "The Persian king Cyrus allows the Jews exiled in Babylon to return home and rebuild the temple in Jerusalem. The returning exiles, led among others by Zerubbabel, rebuild it; the second temple is completed around 515 BC (Ezra 6:15).",
    null
   ],
   [
    "Birth of Christ",
    "Matt 2; Luke 2",
    "Jesus, the Son of God, is born of the Virgin Mary in Bethlehem, the city of David, and laid in a manger. Shepherds and the Magi from the East come to see him, and the Church celebrates this at Christmas.",
    "c. 6–4 BC"
   ],
   [
    "Crucifixion and Pentecost",
    "Acts 2",
    "Jesus dies on the cross in Jerusalem and rises on the third day, and fifty days later the Holy Spirit comes down on the apostles gathered with Mary. Peter preaches the first sermon, and about three thousand people are baptised that day: the birth of the Church.",
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
    "A prophetess and one of the judges, the leaders of Israel before the time of the kings. With the commander Barak she leads the people to victory over Sisera, and her song (Judg 5) is thought to be one of the oldest texts in the Bible.",
    "Judg 4-5"
   ],
   [
    "Samson",
    "Judge",
    "A judge of Israel given great strength by God, which he lost when his hair was cut. He fought the Philistines, and the Letter to the Hebrews counts him among the heroes of faith (Heb 11:32).",
    "Judg 13-16"
   ],
   [
    "Saul",
    "First king of Israel",
    "The first king of Israel, anointed by the prophet Samuel. A brave warrior who in time stops listening to God and dies in battle with the Philistines.",
    "1 Sam 10"
   ],
   [
    "David",
    "King of Israel",
    "A shepherd from Bethlehem who defeated Goliath, became king of Israel and made Jerusalem his capital; tradition credits him with many psalms. God promised that his dynasty would last for ever, which is why Jesus is called “Son of David”.",
    "2 Sam 5"
   ],
   [
    "Solomon",
    "Builder of the temple",
    "Son of David and king of Israel, who asked God not for riches but for wisdom. He was famous for his wise judgements and built the temple in Jerusalem.",
    "1 Kgs 6"
   ],
   [
    "Elijah",
    "Prophet",
    "One of Israel’s greatest prophets, who on Mount Carmel shows the power of the true God before the prophets of Baal. He is taken up to heaven in a whirlwind, and in the Gospel he appears beside Jesus at the Transfiguration.",
    "1 Kgs 18"
   ],
   [
    "Isaiah",
    "Prophet",
    "A prophet from Jerusalem who foretells Emmanuel, to be born of a Virgin, and the Servant of the Lord who suffers for the sins of others. The Church reads his words so often in Advent that St Jerome called him an evangelist rather than a prophet.",
    "Isa 6:1"
   ],
   [
    "Hezekiah",
    "King of Judah",
    "A devout king of Judah who cleansed the temple of idols and restored the Passover. When the Assyrians besieged Jerusalem, he trusted God on Isaiah’s advice, and the city was saved.",
    "2 Kgs 18-19"
   ],
   [
    "Daniel",
    "Prophet in Babylon",
    "A prophet, a young man of Judah taken to Babylon, who stayed faithful to God at the royal court and came out unharmed from the lions’ den. In his vision appears “one like a son of man” (Dan 7:13), the title Jesus often used of himself.",
    "Dan 1"
   ],
   [
    "Cyrus",
    "King of Persia",
    "King of Persia, who took Babylon in 539 BC and allowed the Jews to return to Jerusalem. The Book of Isaiah calls him the Lord’s “anointed”, a ruler chosen by God to carry out His plan (Isa 45:1).",
    "Ezra 1"
   ],
   [
    "Esther",
    "Queen of Persia",
    "A Jewish queen of Persia, wife of King Ahasuerus, who risked her life to plead for her people and saved them from the destruction Haman had planned. Jews celebrate the feast of Purim in memory of this rescue.",
    "Esth 4-8"
   ],
   [
    "Nehemiah",
    "Governor",
    "A Jewish cupbearer to the king of Persia who became governor of Judah and rebuilt the walls of Jerusalem in 52 days (Neh 6:15). He also led the people to renew their covenant with God (Neh 10).",
    "Neh 2-6"
   ],
   [
    "John the Baptist",
    "Forerunner",
    "Son of Zechariah and Elizabeth, a relative of Jesus, who called people to repentance at the Jordan and baptised them, Jesus too. He pointed to Him with the words “Behold the Lamb of God” (John 1:29), which the Church repeats at every Mass.",
    "Luke 1"
   ],
   [
    "Jesus",
    "Christ",
    "“For God so loved the world that he gave his only Son” (John 3:16): Jesus, Son of God and son of Mary, is born in Bethlehem as the sign of that love. Through his teaching, his miracles, his death on the cross and his resurrection he opens the way to God for every person.",
    "Matt 2; Luke 2"
   ],
   [
    "Paul",
    "Apostle",
    "A Jew from Tarsus, at first a persecutor of Christians, who after meeting the risen Jesus near Damascus became the Apostle of the Nations. He founded communities across the Roman world, his letters make up a large part of the New Testament, and he gave his life as a martyr in Rome.",
    "Acts 9-28"
   ],
   [
    "Constantine",
    "Roman emperor",
    "Roman emperor who, with Licinius, issued the Edict of Milan in 313, giving Christians freedom of worship. He called the Council of Nicaea, founded Constantinople and was himself baptised at the end of his life.",
    ""
   ],
   [
    "Martin Luther",
    "Reformer",
    "German Augustinian friar and professor of theology whose 95 theses of 1517 began the Protestant Reformation. He translated the Bible into German; today Catholics and Lutherans are in dialogue, and in 1999 they signed a joint declaration on justification.",
    ""
   ],
   [
    "St Thomas Aquinas",
    "Doctor of the Church",
    "Italian Dominican, one of the Church’s greatest theologians, called the Angelic Doctor. In the Summa Theologiae he brought faith and reason together, drawing on the philosophy of Aristotle; he is the patron of Catholic schools and universities.",
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
    "Primate of Poland who led the Church through more than 30 years of communism; imprisoned from 1953 to 1956, he did not give in to the regime. With the Great Novena he prepared Poles for the Millennium of Poland’s Baptism, and in 2021 he was declared blessed.",
    ""
   ],
   [
    "St John Paul II",
    "Pope",
    "Karol Wojtyła from Wadowice, the first Polish pope, elected in 1978, who in nearly 27 years as pope visited more than 120 countries. His words in 1979, “Let your Spirit descend and renew the face of the earth. This land!”, gave Poles courage on the road to freedom; he has been a saint since 2014.",
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
    "Pope and Doctor of the Church who cared for the poor, set the liturgy in order and sent missionaries to England. Gregorian chant takes its name from him, and he called himself “servant of the servants of God”.",
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
    "King of the Franks, crowned emperor in Rome by Pope Leo III on Christmas Day 800. He united much of Europe and supported schools and monasteries; his age is called the Carolingian Renaissance.",
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
    "The first historical ruler of Poland, who was baptised in 966, regarded as the beginning of Christianity and statehood in Poland. Among those who led him to baptism was his wife, the Czech princess Dobrawa.",
    ""
   ],
   [
    "Saladin",
    "Sultan",
    "Muslim sultan of Egypt and Syria, who retook Jerusalem from the crusaders in 1187. Even his enemies admired his chivalry, and in the peace he made with Richard the Lionheart in 1192 he allowed Christians to go on pilgrimage to Jerusalem.",
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
    "Polish astronomer and churchman, a canon of Warmia, who in On the Revolutions of the Heavenly Spheres set out a model of the world in which the Earth goes round the Sun. He dedicated the work to Pope Paul III.",
    ""
   ],
   [
    "Isaac Newton",
    "Scientist",
    "English scientist who in the Principia described the laws of motion and universal gravitation, laying the foundations of modern physics. He was a deeply religious man and wrote much about the Bible.",
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
    "Pope who in the encyclical Rerum novarum stood up for the dignity of workers, a just wage and the right to form unions, giving rise to modern Catholic social teaching. He was also a great lover of the Rosary, to which he devoted many encyclicals.",
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
   ],
   [
    "University of Bologna",
    "First university",
    "The oldest university in the world still in continuous operation, founded by tradition in 1088 and famous for the study of Roman and canon law. After it, often out of cathedral schools and with papal privileges, universities arise in Paris, Oxford and Kraków (1364), where theology, law, medicine and the study of nature flourish.",
    ""
   ]
  ],
  "CH_EV": [
   [
    "First Council of Nicaea",
    "",
    "The first ecumenical council, called by Emperor Constantine, at which the bishops professed against the teaching of Arius that the Son of God is “consubstantial with the Father”. The Nicene creed, completed at Constantinople, is still said by Christians today."
   ],
   [
    "Great Schism",
    "",
    "The split between Western, Latin (Catholic) and Eastern, Greek (Orthodox) Christianity, symbolically dated to the mutual excommunications of 1054. Since 1965 popes and patriarchs of Constantinople have been in dialogue on the way to reconciliation."
   ],
   [
    "Council of Trent",
    "",
    "The council that was the Church’s answer to the Reformation: it clarified teaching on grace, the sacraments and Scripture and renewed the life of the clergy. It gave rise to seminaries, the Roman Catechism and a missal that served the Church for four centuries."
   ],
   [
    "Second Vatican Council",
    "",
    "The council called by St John XXIII, which renewed the liturgy by bringing in national languages and opened the Church to dialogue with the modern world, other Christians and other religions. Its documents, such as Lumen gentium and Gaudium et spes, shape the life of the Church to this day."
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
    "40 years",
    "The first king of Israel, son of Kish of the tribe of Benjamin, anointed by the prophet Samuel; according to Acts 13:21 he reigned 40 years. A brave warrior who in time stopped listening to God and died in battle with the Philistines on Mount Gilboa."
   ],
   [
    "David",
    "2 Sam 5:4",
    "40 years",
    "The second king of Israel, son of Jesse of Bethlehem, who came to the throne at 30 and reigned 40 years. He took Jerusalem and made it his capital, and God promised him a dynasty for ever, from which Jesus, the “Son of David”, comes."
   ],
   [
    "Solomon",
    "1 Kgs 11:42",
    "40 years",
    "The third king of the united kingdom of Israel, son of David and Bathsheba, who according to Scripture reigned 40 years. He was famous for his wisdom and built the temple in Jerusalem, and after his death the kingdom split in two."
   ],
   [
    "Rehoboam",
    "1 Kgs 14:21",
    "17 years",
    "The first king of Judah after the kingdom divided, son of Solomon, who came to the throne at 41 and reigned 17 years. He refused the people’s plea to lighten their burdens, so the ten northern tribes broke away from Jerusalem."
   ],
   [
    "Abijam",
    "1 Kgs 15:2",
    "3 years",
    "King of Judah, son of Rehoboam, who reigned 3 years. He waged war against Jeroboam, king of Israel (2 Chr 13)."
   ],
   [
    "Asa",
    "1 Kgs 15:10",
    "41 years",
    "King of Judah, son of Abijam, who reigned 41 years. He removed the idols from the land, and the Book of Kings says his heart was wholly devoted to the Lord (1 Kgs 15:14); Chronicles adds that late in life he trusted the king of Aram more than God (2 Chr 16)."
   ],
   [
    "Jehoshaphat",
    "1 Kgs 22:42",
    "25 years",
    "King of Judah, son of Asa, who came to the throne at 35 and reigned 25 years. He continued his father’s reforms and sent teachers of the Law to the towns of Judah (2 Chr 17:7-9); he made an alliance with Ahab and fought beside him at Ramoth-gilead."
   ],
   [
    "Jehoram",
    "2 Kgs 8:17",
    "8 years",
    "King of Judah, son of Jehoshaphat, who came to the throne at 32 and reigned 8 years. His wife was Athaliah, daughter of Ahab (2 Kgs 8:18), and he followed the ways of the kings of Israel, turning away from God."
   ],
   [
    "Ahaziah",
    "2 Kgs 8:26",
    "1 year",
    "King of Judah, son of Jehoram and Athaliah, who came to the throne at 22 and reigned only one year. While visiting Joram, king of Israel, he was mortally wounded by Jehu’s men and died at Megiddo (2 Kgs 9:27)."
   ],
   [
    "Athaliah",
    "2 Kgs 11:3",
    "6 years",
    "The only woman to rule Judah in her own right, daughter of Ahab of the house of Omri; after her son’s death she seized power for 6 years. The priest Jehoiada overthrew her and set the young Joash on the throne."
   ],
   [
    "Joash",
    "2 Kgs 12:1-2",
    "40 years",
    "King of Judah, son of Ahaziah, saved as a baby from Athaliah, who came to the throne at 7 and reigned 40 years. While the priest Jehoiada lived he restored the temple, but later he turned away from God."
   ],
   [
    "Amaziah",
    "2 Kgs 14:2",
    "29 years",
    "King of Judah, son of Joash, who came to the throne at 25 and reigned 29 years. He defeated the Edomites, but then challenged Jehoash, king of Israel, to war and lost; he was killed in a conspiracy at Lachish."
   ],
   [
    "Azariah (Uzziah)",
    "2 Kgs 15:2",
    "52 years",
    "King of Judah, son of Amaziah, who came to the throne at 16 and reigned 52 years; under him Judah flourished. When in pride he tried to offer incense in the temple himself, he was struck with leprosy (2 Chr 26), and in the year of his death the prophet Isaiah was called."
   ],
   [
    "Jotham",
    "2 Kgs 15:33",
    "16 years",
    "King of Judah, son of Azariah, who came to the throne at 25 and reigned 16 years. He governed for his sick father and strengthened the towns of Judah, and Scripture says he did what was right in the eyes of the Lord."
   ],
   [
    "Ahaz",
    "2 Kgs 16:2",
    "16 years",
    "King of Judah, son of Jotham, who came to the throne at 20 and reigned 16 years. When Aram and Israel marched against Judah, the prophet Isaiah called him to faith, but he preferred to seek help from Assyria; it was to him that the prophet announced the sign of Emmanuel (Isa 7)."
   ],
   [
    "Hezekiah",
    "2 Kgs 18:2",
    "29 years",
    "King of Judah, son of Ahaz, who came to the throne at 25 and reigned 29 years. He cleansed the temple and trusted God when the Assyrians besieged Jerusalem; Scripture counts him among the most faithful kings."
   ],
   [
    "Manasseh",
    "2 Kgs 21:1",
    "55 years",
    "King of Judah, son of Hezekiah, who came to the throne at 12 and reigned 55 years, the longest of all the kings. He brought back idol worship, but according to Chronicles he humbled himself before God in Assyrian captivity and repented (2 Chr 33:12-13)."
   ],
   [
    "Amon",
    "2 Kgs 21:19",
    "2 years",
    "King of Judah, son of Manasseh, who came to the throne at 22 and reigned 2 years. He returned to idol worship and was killed in a plot by his courtiers."
   ],
   [
    "Josiah",
    "2 Kgs 22:1",
    "31 years",
    "King of Judah, son of Amon, who came to the throne at 8 and reigned 31 years. When the book of the Law was found in the temple, he carried out a great religious reform; he died in battle with Pharaoh Neco at Megiddo."
   ],
   [
    "Jehoahaz",
    "2 Kgs 23:31",
    "3 months",
    "King of Judah, son of Josiah, who came to the throne at 23 and reigned only 3 months. Pharaoh Neco imprisoned him at Riblah and took him to Egypt, where he died."
   ],
   [
    "Jehoiakim",
    "2 Kgs 23:36",
    "11 years",
    "King of Judah, son of Josiah, set on the throne by Pharaoh, who came to it at 25 and reigned 11 years. He burned the scroll of Jeremiah’s prophecies (Jer 36) and rebelled against Babylon."
   ],
   [
    "Jehoiachin",
    "2 Kgs 24:8",
    "3 months",
    "King of Judah, son of Jehoiakim, who came to the throne at 18 and reigned 3 months. Nebuchadnezzar took him to Babylon, where years later he was released from prison; he appears in the genealogy of Jesus as Jechoniah (Matt 1:12)."
   ],
   [
    "Zedekiah",
    "2 Kgs 24:18",
    "11 years",
    "The last king of Judah, uncle of Jehoiachin, set on the throne by Nebuchadnezzar, who came to it at 21 and reigned 11 years. He rebelled against Babylon against Jeremiah’s advice; in 587 BC Jerusalem and the temple were destroyed, and he was blinded and taken to Babylon."
   ],
   [
    "Jeroboam I",
    "1 Kgs 14:20",
    "22 years",
    "The first king of the northern Kingdom of Israel, under Solomon an overseer of forced labour, who reigned 22 years. To keep the people from going on pilgrimage to Jerusalem, he set up golden calves at Bethel and Dan, which Scripture calls “the sin of Jeroboam”."
   ],
   [
    "Nadab",
    "1 Kgs 15:25",
    "2 years",
    "King of Israel, son of Jeroboam, who reigned 2 years. He was killed by Baasha, who wiped out the whole house of Jeroboam."
   ],
   [
    "Baasha",
    "1 Kgs 15:33",
    "24 years",
    "King of Israel who seized the throne by killing Nadab and reigned 24 years. He fought wars with Judah, and the prophet Jehu foretold the fall of his house."
   ],
   [
    "Elah",
    "1 Kgs 16:8",
    "2 years",
    "King of Israel, son of Baasha, who reigned 2 years. He was murdered during a drinking feast by his commander Zimri."
   ],
   [
    "Zimri",
    "1 Kgs 16:15",
    "7 days",
    "Commander of half the chariots, who killed Elah and reigned in Israel for only 7 days. When the army that had proclaimed Omri king took Tirzah, Zimri set the palace on fire and died in the flames."
   ],
   [
    "Omri",
    "1 Kgs 16:23",
    "12 years",
    "King of Israel, formerly an army commander, who reigned 12 years. He built a new capital, Samaria, and Assyrian sources also knew his dynasty, calling Israel “the house of Omri”."
   ],
   [
    "Ahab",
    "1 Kgs 16:29",
    "22 years",
    "King of Israel, son of Omri, who reigned 22 years. Under the influence of his wife Jezebel he spread the worship of Baal, which the prophet Elijah opposed; he died in battle at Ramoth-gilead."
   ],
   [
    "Ahaziah",
    "1 Kgs 22:52",
    "2 years",
    "King of Israel, son of Ahab, who reigned 2 years. After falling from a window of his palace he sent to ask the idol Baal-zebub about his health, so the prophet Elijah foretold his death."
   ],
   [
    "Joram",
    "2 Kgs 3:1",
    "12 years",
    "King of Israel, son of Ahab, who reigned 12 years; the prophet Elisha was active in his time. He was killed by Jehu, who ended the dynasty of Omri."
   ],
   [
    "Jehu",
    "2 Kgs 10:36",
    "28 years",
    "An army commander anointed king of Israel by a disciple of the prophets sent by Elisha; he reigned 28 years. He wiped out the house of Ahab and the worship of Baal in Samaria, but did not remove Jeroboam’s golden calves."
   ],
   [
    "Jehoahaz",
    "2 Kgs 13:1",
    "17 years",
    "King of Israel, son of Jehu, who reigned 17 years. When the Arameans oppressed Israel he pleaded with the Lord, and God gave the people a deliverer (2 Kgs 13:4-5)."
   ],
   [
    "Jehoash",
    "2 Kgs 13:10",
    "16 years",
    "King of Israel, son of Jehoahaz, who reigned 16 years. He visited the dying prophet Elisha, won back the towns taken by Aram and defeated Amaziah, king of Judah."
   ],
   [
    "Jeroboam II",
    "2 Kgs 14:23",
    "41 years",
    "King of Israel, son of Jehoash, who reigned 41 years and restored the kingdom’s old borders (2 Kgs 14:25). In his time the prophets Amos and Hosea were active, rebuking the rich for wronging the poor (Amos 1:1; Hos 1:1)."
   ],
   [
    "Zechariah",
    "2 Kgs 15:8",
    "6 months",
    "King of Israel, son of Jeroboam II and the last of Jehu’s dynasty, who reigned only 6 months. He was killed in a plot by Shallum."
   ],
   [
    "Shallum",
    "2 Kgs 15:13",
    "1 month",
    "King of Israel who killed Zechariah and reigned only one month. He was killed by Menahem."
   ],
   [
    "Menahem",
    "2 Kgs 15:17",
    "10 years",
    "King of Israel who reigned 10 years. To keep his throne he paid Pul, king of Assyria, a thousand talents of silver (2 Kgs 15:19)."
   ],
   [
    "Pekahiah",
    "2 Kgs 15:23",
    "2 years",
    "King of Israel, son of Menahem, who reigned 2 years. He was killed in a plot by his officer Pekah."
   ],
   [
    "Pekah",
    "2 Kgs 15:27",
    "20 years",
    "King of Israel who killed Pekahiah; Scripture gives him 20 years of reign. Allied with Aram he attacked Judah, and in return Assyria took Galilee and Gilead."
   ],
   [
    "Hoshea",
    "2 Kgs 17:1",
    "9 years",
    "The last king of the northern Kingdom of Israel, who reigned 9 years. In his reign Assyria took Samaria (722 BC), which ended the kingdom."
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
    primeval: 'czasach Rdz 1–11',
    age: (name, n) => name + ', wiek ' + n,
    hub: ['Przed potopem', 'Po potopie', 'Patriarchowie', 'Izrael i Juda', 'Imperia', 'Czas Kościoła'],
    legend: { patLine: 'Długość życia podana w Piśmie' },
    science: 'Rozwój nauki',
    laneTips: { events: 'Najważniejsze wydarzenia, każde z obrazem lub filmem.', figures: 'Ważne osoby, w roku ich najważniejszego czynu.',
      patriarchs: 'Osoby, których długość życia podaje Biblia.', kings: 'Panowania królów: Judy (u góry) i Izraela (na dole).',
      alive: 'Ile osób i narodów z wykresu żyje naraz; kropki: same narody.', nations: 'Narody i Kościoły, od ich początku.' },
    realm: { un: 'Zjednoczone królestwo', ju: 'Królestwo Judy', is: 'Królestwo Izraela' }, realmShort: { un: 'Izrael', ju: 'Juda', is: 'Izrael' },
    kingBody: (realm, age, reign) => realm + '.' + (age ? ' Wiek przy objęciu tronu: ' + age + '.' : '') + ' Pismo podaje: ' + reign + ' panowania.',
    ask: {
      lang: 'Polish', you: 'Ty',
      about: list => 'Opowiedz mi więcej o: ' + (list.length > 1 ? list.slice(0, -1).join(', ') + ' i ' + list[list.length - 1] : list[0]) + ': tło historyczne, znaczenie i ciekawostki, których nie ma w krótkim opisie.', thinking: 'Myślę…', stopped: '(przerwano)',
      auto: (year, ev) => (year ? 'Co działo się w ' + year + '?' : 'Co opowiada ta część Księgi Rodzaju?') + ' Jestem przy wydarzeniu „' + ev + '”.',
      err: { rate_limited: 'Zbyt wiele pytań naraz. Spróbuj ponownie za chwilę.', session_expired: 'Zaloguj się ponownie do claude.ai, aby dalej pytać.',
        refused: 'Na to pytanie nie mogę odpowiedzieć. Spróbuj zapytać inaczej.', off: 'Czat jest niedostępny w tym widoku.', offline: 'Czat działa po otwarciu strony w claude.ai.',
        other: 'Nie udało się uzyskać odpowiedzi. Spróbuj ponownie.', cut: 'Odpowiedź została skrócona.' }
    },
    html: {
      docTitle: 'Wykres dziejów świata',
      eyebrow: 'Datowanie wg katolickich wydań Biblii · Od stworzenia do 2026 n.e.',
      title: 'Wykres dziejów świata',
      lede: 'Rozdziały 1–11 Księgi Rodzaju nie podają dat, dlatego oznaczamy je jako „bez daty”; podajemy tylko długość życia patriarchów, tak jak Biblia. Od Abrahama daty są zgodne z katolickimi wydaniami Biblii, a przed 722 p.n.e. są przybliżone. Naciśnij „Odtwórz” albo przeciągnij oś czasu.',
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
    primeval: 'the time of Genesis 1–11',
    age: (name, n) => name + ', age ' + n,
    hub: ['Before the flood', 'After the flood', 'Patriarchs', 'Israel and Judah', 'Empires', 'Church age'],
    legend: { patLine: 'Lifespans given in Scripture' },
    science: 'Growth of science',
    laneTips: { events: 'Key events, each with a picture or film.', figures: 'Key people, at the year of their main deed.',
      patriarchs: 'People whose lifespan the Bible gives.', kings: 'Reigns of the kings: Judah (top) and Israel (bottom).',
      alive: 'How many people and nations on the chart are alive at once; dotted: nations only.', nations: 'Nations and Churches, from their beginning.' },
    realm: { un: 'United kingdom', ju: 'Kingdom of Judah', is: 'Kingdom of Israel' }, realmShort: { un: 'Israel', ju: 'Judah', is: 'Israel' },
    kingBody: (realm, age, reign) => realm + '.' + (age ? ' Age at accession: ' + age + '.' : '') + ' Scripture gives ' + reign + ' of reign.',
    ask: {
      lang: 'English', you: 'You',
      about: list => 'Tell me more about ' + (list.length > 1 ? list.slice(0, -1).join(', ') + ' and ' + list[list.length - 1] : list[0]) + ': the background, its meaning and details that are not in the short description.', thinking: 'Thinking…', stopped: '(stopped)',
      auto: (year, ev) => (year ? 'What was happening in ' + year + '?' : 'What does this part of Genesis tell?') + ' I am at the event "' + ev + '".',
      err: { rate_limited: 'Too many questions at once. Try again in a moment.', session_expired: 'Sign in to claude.ai again to keep asking.',
        refused: 'I cannot answer that question. Try asking it another way.', off: 'Chat is not available in this view.', offline: 'Chat works when the page is opened in claude.ai.',
        other: 'Could not get an answer. Please try again.', cut: 'The answer was cut short.' }
    },
    html: {
      docTitle: 'World History Chart',
      eyebrow: 'Catholic study Bible dating · Creation to AD 2026',
      title: 'World history chart',
      lede: 'Genesis 1–11 gives no dates, so it is marked “undated”; only the patriarchs’ lifespans are shown, as the Bible gives them. From Abraham on, dates follow Catholic study Bibles and are approximate before 722 BC. Press Play or drag the timeline.',
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
  T.KINGS.forEach((x, i) => { KINGS[i][0] = x[0]; KINGS[i][4] = x[1]; KINGS[i][6] = x[2]; KINGS[i][7] = x[3] || ''; });
  T.NAT.forEach((x, i) => { NAT[i][0] = x[0]; NAT[i][4] = x[1]; NAT[i][5] = x[2] || ''; });
  T.EV.forEach((x, i) => { EV[i][0] = x[0]; EV[i][2] = x[1]; EV[i][3] = x[2]; if (x[3]) EV[i][4] = x[3]; else EV[i].length = 4; });
  T.ERAS.forEach((x, i) => { ERAS[i][0] = x; });
  T.CH_EV.forEach((x, i) => { CH_EV[i][0] = x[0]; CH_EV[i][2] = x[1]; CH_EV[i][3] = x[2]; });
  T.FIG.forEach((x, i) => { FIG[i][0] = x[0]; FIG[i][2] = x[1]; FIG[i][3] = x[2]; FIG[i][4] = x[3]; });
}
