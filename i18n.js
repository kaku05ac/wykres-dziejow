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
    "W rodowodzie od Adama do Noego każde imię jest ogniwem nici, której Bóg nie pozwala zerwać: Kenan, syn Enosza, przekazuje życie i pamięć o Stwórcy kolejnemu pokoleniu. Biblia nie zapisuje jego czynów, lecz św. Łukasz umieszcza go w rodowodzie Jezusa (Łk 3,37)."
   ],
   [
    "Mahalalel",
    "Rdz 5,15-17",
    "Syn Kenana, którego imię znaczy „chwała Boga”. Należy do pokoleń, którym Biblia przypisuje bardzo długie życie, co w starożytnych tekstach było znakiem błogosławieństwa i dawności rodu."
   ],
   [
    "Jered",
    "Rdz 5,18-20",
    "Żyje 962 lata, dłużej niż ktokolwiek w Biblii poza swoim wnukiem Metuszelachem. Najpiękniejszym owocem jego długiego życia jest jednak syn Henoch, o którym Pismo mówi, że „żył w przyjaźni z Bogiem” (Rdz 5,22)."
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
    "Przychodzi na świat w czasie, gdy ludzkość rozchodzi się po ziemi; jego ojciec, Peleg, nosi imię znaczące „podział”. Biblia nie opowiada o jego życiu, lecz przechowuje jego imię w rodowodzie, który przez Abrahama prowadzi do Jezusa (Łk 3,35)."
   ],
   [
    "Serug",
    "Rdz 11,22-23",
    "Pradziad Abrahama. Jego imię brzmi jak nazwa starożytnej miejscowości Sarugi w północnej Mezopotamii, w okolicy, z której wyszła rodzina Abrahama."
   ],
   [
    "Nachor",
    "Rdz 11,24-25",
    "Od niego wychodzą dwie gałęzie jednej historii: wnuk Abraham, ojciec wierzących, i wnuk Nachor, którego wnuczka Rebeka zostanie żoną Izaaka. Imię dziadka, nadane wnukowi, pokazuje, jak w tych rodzinach pamięć przechodziła z pokolenia na pokolenie."
   ],
   [
    "Terach",
    "Rdz 11,26-32",
    "Wyrusza z Ur chaldejskiego w stronę Kanaanu, prowadząc rodzinę w drogę, której sam nie ukończy: zatrzymuje się w Charanie i tam umiera. To, co ojciec zaczął, dopełni jego syn Abram, gdy usłyszy Boże wezwanie: „Wyjdź z twojej ziemi rodzinnej” (Rdz 12,1)."
   ],
   [
    "Abraham",
    "Rdz 25,7",
    "Patriarcha, który na Boże wezwanie opuszcza Charan i wyrusza w nieznane, a Bóg zmienia mu imię z Abram na Abraham, „ojciec mnóstwa narodów”. Wbrew nadziei ufa obietnicy i w starości otrzymuje syna Izaaka, dlatego św. Paweł nazywa go ojcem wszystkich wierzących (Rz 4,11). Czczą go żydzi, chrześcijanie i muzułmanie, a Kanon Rzymski wspomina go jako „naszego patriarchę”."
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
    "Syn obietnicy, którego Abraham i Sara doczekali się w podeszłym wieku; jego imię wyraża radość, jaką narodziny dziecka sprawiły długo czekającym rodzicom (Rdz 21,6). Ocalony na górze Moria, gdy Bóg powstrzymał rękę ojca, poślubia Rebekę i zostaje ojcem bliźniąt, Ezawa i Jakuba. Bóg przedstawia się odtąd jako „Bóg Abrahama, Izaaka i Jakuba”."
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
    "Jedna z najstarszych cywilizacji świata, rozkwitająca u stóp gór Zagros, w dzisiejszym Iranie, ze stolicą w Suzie. Biblia wywodzi jej lud od Elama, syna Sema (Rdz 10,22). Echo tego dawnego narodu brzmi jeszcze w dniu Pięćdziesiątnicy, gdy Elamici słyszą apostołów głoszących „wielkie dzieła Boże” we własnym języku (Dz 2,9-11)."
   ],
   [
    "Asyria",
    "Rdz 10,22; 2 Krl 17",
    "Imperium znad Tygrysu ze stolicą w Niniwie, przez stulecia budzące lęk całego Bliskiego Wschodu; w 722 p.n.e. jego wojska kładą kres północnemu Królestwu Izraela. A jednak właśnie do Niniwy Bóg posyła proroka Jonasza, a gdy jej mieszkańcy pokutują, okazuje im miłosierdzie. Uczy w ten sposób, że Jego troska obejmuje także wrogów Izraela."
   ],
   [
    "Aram / Syria",
    "Rdz 10,22; 2 Krl 16,9",
    "Królestwo Aramejczyków ze stolicą w Damaszku, przez wieki sąsiad i rywal Izraela, z którego pochodził wódz Naaman, uzdrowiony przez proroka Elizeusza. Ich język, aramejski, stał się mową całego Bliskiego Wschodu. W nim Jezus nauczał i modlił się, a Ewangelie zachowały Jego słowa: „Talitha kum” i „Abba” (Mk 5,41; 14,36)."
   ],
   [
    "Arabowie",
    "Rdz 25,12-18",
    "Ludy pustyń i oaz Półwyspu Arabskiego, kupcy prowadzący karawany z kadzidłem i wonnościami. Tradycja umieszcza tu krainę Saby, z której królowa przybyła, by przekonać się o mądrości Salomona. W dniu Pięćdziesiątnicy także Arabowie słyszą apostołów głoszących we własnym języku wielkie dzieła Boże (Dz 2,11)."
   ],
   [
    "Izrael",
    "Joz 1; 2 Krl 25",
    "Naród wywodzący się od dwunastu synów Jakuba, który po wyjściu z Egiptu osiedlił się w Kanaanie, a za Dawida i Salomona stworzył królestwo ze stolicą w Jerozolimie. Z tego narodu pochodzi Jezus, a św. Jan Paweł II nazwał Żydów „starszymi braćmi” chrześcijan w wierze."
   ],
   [
    "Babilon",
    "Rdz 10,8-10",
    "Miasto nad Eufratem, w krainie Szinear, którego nazwę Księga Rodzaju łączy z wieżą Babel i pomieszaniem języków. Za Nabuchodonozora staje się stolicą imperium i miejscem wygnania Judejczyków. W Apokalipsie jego imię oznacza każdą potęgę, która staje przeciw Bogu."
   ],
   [
    "Egipt",
    "Rdz 10,6",
    "Kraina Nilu i piramid, jedna z najstarszych cywilizacji świata, którą Biblia wywodzi od Misraima, syna Chama; tak Egipt nazywa się po hebrajsku do dziś. Tu Józef ratuje rodzinę przed głodem, tu Izrael doświadcza niewoli i wielkiego wyjścia, a wieki później schronienie znajduje Święta Rodzina. Na jego pustyniach rodzi się chrześcijańskie życie pustelnicze i zakonne."
   ],
   [
    "Kanaan",
    "Rdz 10,15-19",
    "Ziemia opływająca mlekiem i miodem (Wj 3,8), obiecana przez Boga Abrahamowi i jego potomkom, zamieszkana przez wiele ludów, m.in. Hetytów i Jebusytów; Biblia wywodzi jej nazwę od Kanaana, wnuka Noego. W Ewangelii Jezus chwali kobietę kananejską: „O niewiasto, wielka jest twoja wiara” (Mt 15,28), i uzdrawia jej córkę."
   ],
   [
    "Fenicja",
    "1 Krl 5",
    "Kraina kupców i żeglarzy na wybrzeżu dzisiejszego Libanu, z miastami Tyr i Sydon; król Tyru dostarczył Salomonowi cedrów na budowę świątyni. Fenicjanie rozpowszechnili alfabet, od którego pochodzą nasze litery."
   ],
   [
    "Ludy indoeuropejskie",
    "Rdz 10,2-5",
    "Biblijna tablica narodów wywodzi od Jafeta, syna Noego, ludy północy i dalekich wybrzeży, wśród nich Medów i Greków. Ukazuje w ten sposób całą ludzkość jako jedną rodzinę, a błogosławieństwo Noego dla Jafeta, by Bóg dał mu szeroką przestrzeń (Rdz 9,27), Ojcowie Kościoła odczytywali jako zapowiedź Ewangelii docierającej do pogan."
   ],
   [
    "Grecja",
    "Dn 8,21",
    "Kraina miast-państw, takich jak Ateny i Sparta, kolebka filozofii, demokracji, teatru i nauki. Dzięki podbojom Aleksandra Wielkiego greka stała się wspólnym językiem świata śródziemnomorskiego, i w tym języku spisano cały Nowy Testament."
   ],
   [
    "Persja",
    "Dn 8,20",
    "Imperium Achemenidów, rozciągające się od Indii po Egipt, z pałacami w Suzie i Persepolis, słynące z królewskich dróg, sprawnej poczty i szacunku dla zwyczajów podbitych ludów. Jego władca Cyrus pozwala Żydom wrócić z wygnania i odbudować świątynię, a w Suzie rozgrywa się historia królowej Estery."
   ],
   [
    "Rzym",
    "Dn 7,7",
    "Miasto założone według tradycji w 753 p.n.e., które stało się imperium obejmującym cały basen Morza Śródziemnego; za panowania jego pierwszego cesarza, Augusta, urodził się Jezus (Łk 2,1). W Rzymie ponieśli męczeństwo święci Piotr i Paweł, a miasto stało się siedzibą papieży i centrum Kościoła katolickiego. W 476 r. upada zachodnia część cesarstwa; wschodnia, ze stolicą w Konstantynopolu, przetrwa jako Bizancjum do 1453 r."
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
   ],
   [
    "Naród żydowski",
    "Ezd 1; Rz 11,1-2",
    "Wygnanie babilońskie nie kończy dziejów Izraela, lecz je odmienia: wokół Pism, modlitwy i synagogi kształtuje się wiara, która przetrwa wszystkie burze historii. Po zburzeniu drugiej świątyni przez Rzymian w 70 r. Żydzi rozpraszają się po świecie i przez blisko dwa tysiące lat diaspory pozostają wierni Torze mimo prześladowań, aż po Zagładę, a w 1948 r. powstaje współczesne państwo Izrael. Kościół, za św. Pawłem, pamięta, że „dary łaski i wezwanie Boże są nieodwołalne” (Rz 11,29)."
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
    "Rdz 6–9; 1 P 3,20-21",
    "Gdy zło rozlewa się po ziemi, Bóg nie porzuca świata: wśród wód potopu ocala w arce Noego, jego bliskich i wszelkie stworzenia, by od nich zacząć na nowo. Kiedy wody opadają, nad obmytą ziemią staje tęcza, znak przymierza i obietnicy, że życie nie zostanie już zgładzone. W tych wodach, które kończą stary świat i otwierają nowy, Kościół od początku dostrzega zapowiedź chrztu, przez który człowiek przechodzi ku nowemu życiu.",
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
    "Na górze Moria, związanej z ofiarą Abrahama (2 Krn 3,1), Salomon wznosi Bogu dom z kamienia i cedru, a w jego najświętszym miejscu staje Arka Przymierza. Przy poświęceniu król prosi, by Bóg wysłuchał każdego, kto tu się pomodli, także przybysza z dalekiego kraju (1 Krl 8,41-43). Przez blisko cztery stulecia świątynia jest sercem wiary Izraela, aż do zburzenia przez Babilończyków w 587 p.n.e.",
    null
   ],
   [
    "Podział królestwa",
    "1 Krl 12",
    "Jedność zbudowana przez Dawida i Salomona nie przetrwa nawet jednego pokolenia: gdy Roboam odrzuca prośbę ludu o ulżenie ciężarom, dziesięć pokoleń północy odchodzi i obiera królem Jeroboama. Odtąd obok siebie trwają dwa królestwa: Izrael na północy i Juda z Jerozolimą na południu, gdzie przy tronie pozostaje ród Dawida, z którego według obietnicy wyjdzie Mesjasz.",
    null
   ],
   [
    "Upadek Samarii",
    "2 Krl 17",
    "Po dwóch stuleciach północne Królestwo Izraela znika z mapy: Asyryjczycy zdobywają Samarię, przesiedlają jej mieszkańców w odległe krainy, a na ich miejsce sprowadzają obce ludy (2 Krl 17,24). Z tego splotu narodów wyrosną Samarytanie, przez Żydów traktowani z dystansem, a przez Jezusa postawieni za wzór w przypowieści o miłosiernym Samarytaninie.",
    null
   ],
   [
    "Niewola babilońska",
    "2 Krl 24",
    "Nabuchodonozor zdobywa Jerozolimę i uprowadza do Babilonu króla Jojakina wraz z elitą kraju, a dziesięć lat później burzy miasto i świątynię. Na obczyźnie, z dala od świątyni, Izrael na nowo uczy się wierności: „Nad rzekami Babilonu – tam myśmy siedzieli i płakali, gdyśmy wspominali Syjon” (Ps 137,1). Prorocy, jak Ezechiel, podtrzymują w nim nadzieję na powrót.",
    null
   ],
   [
    "Powrót z wygnania",
    "Ezd 1",
    "„Gdy Pan odmienił los Syjonu, wydawało się nam, że śnimy” (Ps 126,1): edykt perskiego króla Cyrusa pozwala wygnańcom wrócić do ojczyzny. Pod wodzą Zorobabela wracają do zrujnowanej Jerozolimy i wśród trudów wznoszą na nowo świątynię, ukończoną ok. 515 p.n.e. (Ezd 6,15).",
    null
   ],
   [
    "Narodzenie Chrystusa",
    "Mt 2; Łk 2",
    "„A Słowo stało się ciałem i zamieszkało wśród nas” (J 1,14): w Betlejem, mieście Dawida, Syn Boży przychodzi na świat z Maryi Dziewicy, a pierwszą kołyską staje się dla Niego skromny żłóbek w betlejemskiej stajence. Ten, przez którego wszystko się stało, przychodzi w ubóstwie i ciszy. Pierwsi rozpoznają Go pasterze z okolicznych pól, po nich zaś Mędrcy przybyli z dalekiego Wschodu, jakby bliscy i dalecy, prości i uczeni, zbiegali się do jednego Dziecka. Od tej nocy ludzkość liczy swoje dzieje na lata przed Chrystusem i po Nim.",
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
    "W 476 r. germański wódz Odoaker pozbawia władzy ostatniego cesarza Zachodu, Romulusa Augustulusa, a dawne imperium rozpada się na królestwa barbarzyńców. W tym zmierzchu Kościół przechowuje światło: klasztory przepisują księgi, misjonarze niosą wiarę nowym ludom, a z czasem wyrastają katedry i uniwersytety. Z połączenia dziedzictwa Rzymu z Ewangelią rodzi się chrześcijańska Europa.",
    null
   ],
   [
    "Reformacja",
    "",
    "Spór, który miał być akademicką dysputą o odpustach, wstrząsa całym Zachodem: w 1517 r. augustianin Marcin Luter ogłasza 95 tez, a za nim idą Zwingli, Kalwin i angielski król Henryk VIII. Dzięki drukowi i poparciu władców w ciągu kilku dekad zachodnie chrześcijaństwo dzieli się na katolików i protestantów. Kościół odpowiada głęboką odnową na Soborze Trydenckim (1545–1563).",
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
    "Biblia nazywa go „pierwszym mocarzem na ziemi” i „dzielnym myśliwym przed Panem”. Zakłada królestwo w krainie Szinear, z miastami Babel, Erek i Akkad. Józef Flawiusz widział w nim inicjatora budowy wieży Babel, obrazu ludzkiej pychy, a jego imię przetrwało w przysłowiu o wielkich łowcach.",
    "Rdz 10,8-10"
   ],
   [
    "Abraham",
    "Ojciec narodów",
    "Patriarcha, który na Boże wezwanie opuszcza Charan i wyrusza w nieznane, a Bóg zmienia mu imię z Abram na Abraham, „ojciec mnóstwa narodów”. Wbrew nadziei ufa obietnicy i w starości otrzymuje syna Izaaka, dlatego św. Paweł nazywa go ojcem wszystkich wierzących (Rz 4,11). Czczą go żydzi, chrześcijanie i muzułmanie, a Kanon Rzymski wspomina go jako „naszego patriarchę”.",
    "Rdz 12"
   ],
   [
    "Izaak",
    "Syn obietnicy",
    "Syn obietnicy, którego Abraham i Sara doczekali się w podeszłym wieku; jego imię wyraża radość, jaką narodziny dziecka sprawiły długo czekającym rodzicom (Rdz 21,6). Ocalony na górze Moria, gdy Bóg powstrzymał rękę ojca, poślubia Rebekę i zostaje ojcem bliźniąt, Ezawa i Jakuba. Bóg przedstawia się odtąd jako „Bóg Abrahama, Izaaka i Jakuba”.",
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
    "Prorokini i sędzia Izraela, która pod palmą między Ramą a Betel rozsądza spory ludu (Sdz 4,5). Gdy Kananejczycy uciskają kraj, wzywa wodza Baraka do walki i idzie razem z nim. Po zwycięstwie nad Syserą śpiewa pieśń (Sdz 5), uznawaną za jeden z najstarszych utworów Biblii.",
    "Sdz 4-5"
   ],
   [
    "Samson",
    "Sędzia",
    "Sędzia Izraela i nazirejczyk poświęcony Bogu od łona matki, którego niezwykła siła była związana ze ślubem nieobcinania włosów. Zdradzony przez Dalilę, oślepiony i upokorzony przez Filistynów, w ostatniej modlitwie odzyskuje siłę. List do Hebrajczyków wymienia go wśród bohaterów wiary (Hbr 11,32).",
    "Sdz 13-16"
   ],
   [
    "Saul",
    "Pierwszy król Izraela",
    "Izrael prosi o króla, „tak jak to jest u innych narodów” (1 Sm 8,5), a prorok Samuel namaszcza Saula z pokolenia Beniamina, który „o głowę przewyższał cały lud”. Odważny wojownik z czasem przestaje słuchać Boga, a jego dramat kończy się śmiercią na górze Gilboa. Dawid opłakuje go i Jonatana pieśnią: „Jakże padli bohaterowie!” (2 Sm 1,19).",
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
    "Gdy Bóg pozwala mu prosić, o co zechce, młody król prosi nie o bogactwo ani długie życie, lecz o „serce pełne rozsądku do sądzenia ludu” (1 Krl 3,9). Jego mądrość staje się przysłowiowa, jak świadczy sąd nad dwiema matkami i wizyta królowej Saby, a w Jerozolimie wznosi Bogu świątynię. Tradycja przypisuje mu Księgę Przysłów, Koheleta i Pieśń nad Pieśniami.",
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
    "Podczaszy perskiego króla Artakserksesa, który na wieść o zrujnowanej Jerozolimie płacze i modli się, a potem prosi władcę o pozwolenie na odbudowę miasta. Jako namiestnik Judy odbudowuje z ludem mury w 52 dni, gdy budowniczowie jedną ręką pracują, a w drugiej trzymają broń (Ne 6,15). Prowadzi lud do uroczystego odnowienia przymierza z Bogiem.",
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
    "Żyd z Tarsu i uczeń faryzeuszów, najpierw gorliwy prześladowca chrześcijan, którego pod Damaszkiem zatrzymuje światło i głos zmartwychwstałego Jezusa. Jako Apostoł Narodów przemierza świat rzymski, zakłada wspólnoty i pisze listy, które stanowią dużą część Nowego Testamentu, w tym hymn o miłości (1 Kor 13). Życie oddaje jako męczennik w Rzymie.",
    "Dz 9-28"
   ],
   [
    "Konstantyn",
    "Cesarz rzymski",
    "Po trzech stuleciach prześladowań chrześcijanie mogą wreszcie wyznawać wiarę jawnie: w 313 r. Konstantyn wraz z Licyniuszem ogłasza edykt mediolański. Cesarz zwołuje Sobór Nicejski i zakłada nad Bosforem Konstantynopol, a chrzest przyjmuje dopiero u kresu życia. Kościoły Wschodu czczą go jako świętego „równego apostołom”.",
    ""
   ],
   [
    "Marcin Luter",
    "Reformator",
    "Augustianin i profesor teologii w Wittenberdze, który, dręczony pytaniem o łaskawego Boga, odkrywa w Liście do Rzymian zbawienie z łaski przez wiarę. Jego 95 tez z 1517 r. daje początek reformacji, a przekład Biblii na niemiecki kształtuje język całego narodu.",
    ""
   ],
   [
    "Św. Tomasz z Akwinu",
    "Doktor Kościoła",
    "Dominikanin i jeden z największych myślicieli w dziejach Kościoła, który w „Sumie teologicznej” pokazał, że wiara i rozum nie są rywalami, lecz prowadzą do tej samej prawdy. Gdy pisma Arystotelesa, przez wieki znane na Zachodzie tylko we fragmentach, powracają w przekładach z arabskiego i greckiego, Tomasz nie odrzuca ich z lękiem, lecz włącza w myśl chrześcijańską, tworząc syntezę, która do dziś kształtuje filozofię, etykę i prawo. Leon XIII polecił go jako mistrza dla szkół katolickich, a św. Jan Paweł II w encyklice „Fides et ratio” nazwał go wzorem dla wszystkich, którzy szukają prawdy.",
    ""
   ],
   [
    "Jan Gutenberg",
    "Drukarz",
    "Pierwszą wielką księgą drukowaną ruchomą czcionką jest Biblia: Jan Gutenberg wydaje ją w Moguncji ok. 1455 r., a piękno jej liter zachwyca do dziś. Słowo, przez wieki mozolnie przepisywane w klasztorach, zaczyna trafiać do tysięcy rąk, a do 1500 r. drukarnie działają już w setkach europejskich miast.",
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
    "Dwa dzieła przetrwały jego panowanie o półtora tysiąca lat: uporządkowane prawo rzymskie, na którym wspiera się prawo Europy, i Hagia Sophia w Konstantynopolu, przez stulecia największa świątynia chrześcijaństwa. Według legendy cesarz Justynian, wchodząc do ukończonej świątyni, zawołał: „Salomonie, prześcignąłem cię!”.",
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
    "Od roku 622 muzułmanie liczą swój kalendarz. Wtedy Mahomet, który od ok. 610 r. głosił w Mekce wiarę w jednego Boga, przenosi się ze zwolennikami do Medyny i tworzy tam pierwszą wspólnotę islamu. To wydarzenie nazywa się hidżrą.",
    ""
   ],
   [
    "Karol Wielki",
    "Cesarz",
    "Król Franków, koronowany przez papieża Leona III na cesarza w Boże Narodzenie 800 r., który zjednoczył dużą część zachodniej Europy. Sprowadza na dwór uczonych, zakłada szkoły przy klasztorach i katedrach i każe przepisywać dawne księgi, ratując dla potomnych dziedzictwo starożytności. Ten rozkwit nazwano renesansem karolińskim.",
    ""
   ],
   [
    "Św. Cyryl i Metody",
    "Apostołowie Słowian",
    "Bracia z Tesaloniki, którzy na prośbę księcia Rościsława przybywają na Morawy, by głosić Słowianom Ewangelię w ich własnym języku. Cyrylowi przypisuje się stworzenie pierwszego słowiańskiego pisma, głagolicy, a obaj bracia przekładają Pismo Święte i liturgię. Św. Jan Paweł II ogłosił ich w 1980 r. współpatronami Europy.",
    ""
   ],
   [
    "Mieszko I",
    "Książę Polan",
    "Pierwszy historyczny władca Polski, który w 966 r. przyjmuje chrzest i wprowadza swój kraj do wspólnoty chrześcijańskiej Europy; od tej chwili liczy się dzieje państwa polskiego. Drogę do chrztu otworzyło mu małżeństwo z czeską księżniczką Dobrawą. Pod koniec życia oddał swoje państwo pod opiekę Stolicy Apostolskiej w dokumencie „Dagome iudex”.",
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
    "Wyprawa, która miała odnaleźć zachodnią drogę do Azji, łączy dwa światy: w 1492 r. Krzysztof Kolumb, żeglujący pod banderą Hiszpanii, dociera do wysp Nowego Świata. Za odkrywcami idą misjonarze i Ewangelia dociera do obu Ameryk. Gdy zdobywcy krzywdzą rdzennych mieszkańców, w ich obronie staje dominikanin Bartłomiej de Las Casas.",
    ""
   ],
   [
    "Mikołaj Kopernik",
    "Astronom",
    "Kanonik warmiński, lekarz i astronom, który po latach obserwacji ukazuje w dziele „O obrotach sfer niebieskich” (1543) Ziemię krążącą wokół Słońca. Jak mówi znane powiedzenie, „wstrzymał Słońce, ruszył Ziemię”. Dzieło zadedykował papieżowi Pawłowi III, a jego model otworzył drogę nowożytnej astronomii.",
    ""
   ],
   [
    "Izaak Newton",
    "Uczony",
    "Angielski fizyk i matematyk, który w „Principiach” (1687) połączył niebo i ziemię jednym prawem powszechnego ciążenia: tym samym, które sprawia, że jabłko spada, a Księżyc krąży po swojej orbicie. Wpatrzony w ład kosmosu, w zakończeniu dzieła zapisał, że tak piękny układ Słońca, planet i komet mógł zrodzić się jedynie z zamysłu „istoty rozumnej i potężnej”.",
    ""
   ],
   [
    "Napoleon Bonaparte",
    "Cesarz Francuzów",
    "Z chaosu rewolucji wyłania się nie dawna monarchia, lecz władza jednego człowieka. W 1799 r. Napoleon ogłasza, że rewolucja „jest skończona”, a zarazem wpisuje jej ideały w prawo: Kodeks cywilny, zbudowany na zasadzie równości wobec prawa, wędruje wraz z jego armiami przez całą Europę i kształtuje ją po dziś dzień. W 1804 r., w katedrze Notre-Dame, sam wkłada sobie na głowę koronę cesarską. Ten, który konkordatem z 1801 r. przywrócił Francji publiczny kult, wkrótce przez pięć lat więzi papieża Piusa VII.",
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
    "Po latach niespokojnych poszukiwań, wspierany wytrwałą modlitwą matki, św. Moniki, nawraca się i zostaje biskupem Hippony w Afryce. W „Wyznaniach” opowiada Bogu historię swojego serca słowami, które poruszają do dziś: „Stworzyłeś nas bowiem dla siebie i niespokojne jest serce nasze, dopóki nie spocznie w Tobie”. Jako Doktor Kościoła łączy wiarę z myślą Platona i kształtuje teologię całego Zachodu.",
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
    "Chrześcijański Wschód i Zachód, greckie i łacińskie dziedzictwo jednej wiary, przez wieki oddalają się od siebie, aż w 1054 r. legaci papiescy i patriarcha Konstantynopola obkładają się wzajemnie ekskomuniką. Rozłam nie został jeszcze przezwyciężony, lecz od 1965 r., gdy Paweł VI i patriarcha Atenagoras oddali te ekskomuniki w niepamięć, papieże i patriarchowie wspólnie modlą się o pojednanie."
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
    "Pod hasłami wolności, równości i braterstwa Francja obala dawny porządek, a w 1792 r. upada monarchia. Rewolucja podporządkowuje jednak Kościół państwu i rozpętuje prześladowania, w których giną tysiące duchownych i wiernych. Wielu z nich Kościół czci dziś jako męczenników."
   ],
   [
    "Septuaginta",
    "",
    "W Aleksandrii, wielkim ośrodku nauki, Żydzi zaczynają przekładać swoje święte Księgi na grekę, wspólny język ówczesnego świata, a dzieło to trwa przez kilka pokoleń. Tradycja mówi o siedemdziesięciu dwóch tłumaczach, stąd nazwa Septuaginta. W tym przekładzie Biblię czytali pierwsi chrześcijanie i często cytują go autorzy Nowego Testamentu."
   ]
  ],
  "KINGS": [
   [
    "Saul",
    "1 Sm 13,1; Dz 13,21",
    "40 lat",
    "Pierwszy król Izraela, syn Kisza z pokolenia Beniamina: z jego namaszczenia przez Samuela rodzi się monarchia, a rosły młodzieniec, wyższy od całego ludu, prowadzi naród do pierwszych zwycięstw. Z czasem jednak przestaje słuchać Boga i ginie wraz z synami w bitwie z Filistynami na górach Gilboa."
   ],
   [
    "Dawid",
    "2 Sm 5,4",
    "40 lat",
    "Drugi król Izraela, pasterz z Betlejem, syn Jessego: za jego panowania pokolenia Izraela stają się jednym królestwem, a zdobyta Jerozolima staje się stolicą i miastem Arki Przymierza. Bóg obiecuje mu dom, który przetrwa na wieki (2 Sm 7,16), dlatego Jezus nazywany jest „Synem Dawida”, a tradycja przypisuje Dawidowi wiele psalmów."
   ],
   [
    "Salomon",
    "1 Krl 11,42",
    "40 lat",
    "Syn Dawida i Batszeby, trzeci król zjednoczonego Izraela, którego czterdzieści lat panowania to złoty wiek królestwa: pokój, handel sięgający dalekich krain i świątynia wzniesiona w Jerozolimie. Ciężary nałożone na lud i ustępstwa wobec bogów cudzoziemskich żon przygotowują jednak rozpad królestwa po jego śmierci."
   ],
   [
    "Roboam",
    "1 Krl 14,21",
    "17 lat",
    "Syn Salomona, który obejmuje tron po ojcu i w jednej chwili traci większą część jego dziedzictwa: odrzuca radę starszych, by ulżyć ludowi, i za podszeptem rówieśników zapowiada jarzmo jeszcze cięższe, a dziesięć pokoleń północy odwraca się od domu Dawida (1 Krl 12). Odtąd panuje już tylko nad Judą, a w piątym roku jego rządów faraon Szeszonk wkracza do Jerozolimy i wywozi skarby świątyni."
   ],
   [
    "Abiam",
    "1 Krl 15,2",
    "3 lata",
    "Król Judy, syn Roboama, którego krótkie, trzyletnie panowanie wypełnia wojna z Jeroboamem. Według Księgi Kronik przed bitwą przypomina Izraelowi, że Bóg dał królestwo na zawsze Dawidowi, i odnosi zwycięstwo (2 Krn 13)."
   ],
   [
    "Asa",
    "1 Krl 15,10",
    "41 lat",
    "Król Judy, syn Abiama, który przez 41 lat oczyszcza kraj z bożków, nie oszczędzając nawet własnej babki Maaki, którą pozbawia godności królowej matki (1 Krl 15,13). Pismo mówi, że jego serce było szczere wobec Pana, choć pod koniec życia szukał pomocy raczej u króla Aramu niż u Boga (2 Krn 16)."
   ],
   [
    "Jozafat",
    "1 Krl 22,42",
    "25 lat",
    "Król Judy, syn Asy, którego panowanie to czas pokoju i nauki: posyła do miast lewitów i kapłanów, by uczyli lud Prawa Pańskiego (2 Krn 17,7-9), i ustanawia sędziów. Sprzymierzony z Achabem, walczy u jego boku pod Ramot w Gileadzie."
   ],
   [
    "Joram",
    "2 Krl 8,17",
    "8 lat",
    "Król Judy, syn Jozafata, którego małżeństwo z Atalią, córką Achaba, wprowadza na dwór jerozolimski obyczaje i bogów Północy (2 Krl 8,18). W ciągu ośmiu lat panowania traci władzę nad Edomem, a Pismo ocenia go surowo jako króla, który odszedł od Boga."
   ],
   [
    "Ochozjasz",
    "2 Krl 8,26",
    "1 rok",
    "Król Judy, syn Jorama i Atalii, a więc wnuk Achaba, który panuje zaledwie rok. Odwiedzając rannego krewnego, Jorama izraelskiego, trafia w sam środek przewrotu Jehu i umiera od ran w Megiddo (2 Krl 9,27)."
   ],
   [
    "Atalia",
    "2 Krl 11,3",
    "6 lat",
    "Córka Achaba, wdowa po królu Joramie i jedyna kobieta, która samodzielnie rządziła Judą: po śmierci syna wymordowuje królewskie potomstwo, by przejąć tron. Ocalał jednak mały Joasz, ukryty w świątyni, i po sześciu latach kapłan Jojada osadza go na tronie, kończąc jej rządy."
   ],
   [
    "Joasz",
    "2 Krl 12,1-2",
    "40 lat",
    "Król Judy, syn Ochozjasza, ocalony jako niemowlę i wychowany w ukryciu przy świątyni, który obejmuje tron w wieku siedmiu lat. Dopóki żyje jego opiekun, kapłan Jojada, odnawia świątynię ze zbiórki do skrzyni przy ołtarzu, lecz po jego śmierci odchodzi od Boga."
   ],
   [
    "Amazjasz",
    "2 Krl 14,2",
    "29 lat",
    "Król Judy, syn Joasza, któremu zwycięstwo nad Edomitami w Dolinie Soli dodaje pewności siebie, więc wyzywa na wojnę Joasza, króla Izraela; ten odpowiada mu przypowieścią o oście i cedrze (2 Krl 14,9). Przegrana kończy się splądrowaniem Jerozolimy, a sam król ginie w spisku w Lakisz."
   ],
   [
    "Azariasz (Ozjasz)",
    "2 Krl 15,2",
    "52 lata",
    "Król Judy, syn Amazjasza, którego ponad półwieczne panowanie to dla kraju czas rozkwitu: buduje wieże, kopie studnie, wzmacnia wojsko i rolnictwo (2 Krn 26). Gdy jednak w pysze sam wchodzi do świątyni, by złożyć kadzidło, dotyka go trąd, a w roku jego śmierci Izajasz ogląda w świątyni chwałę Pana (Iz 6,1)."
   ],
   [
    "Jotam",
    "2 Krl 15,33",
    "16 lat",
    "Król Judy, syn Azariasza, który przez lata choroby ojca rządzi w jego imieniu, a potem sam panuje 16 lat, budując Górną Bramę świątyni i umacniając miasta Judy. Pismo wystawia mu dobre świadectwo: postępował słusznie w oczach Pana."
   ],
   [
    "Achaz",
    "2 Krl 16,2",
    "16 lat",
    "Król Judy, syn Jotama: gdy Aram i Izrael ruszają na Jerozolimę, prorok Izajasz wzywa go do zaufania Bogu i daje znak: „Oto Panna pocznie i porodzi Syna, i nazwie Go imieniem Emmanuel” (Iz 7,14). Achaz woli jednak szukać ratunku u Asyrii, płacąc jej daninę ze skarbów świątyni."
   ],
   [
    "Ezechiasz",
    "2 Krl 18,2",
    "29 lat",
    "Król Judy, syn Achaza, który oczyszcza świątynię i przywraca obchody Paschy, a w godzinie próby, gdy wojska asyryjskie oblegają Jerozolimę, rozkłada list wroga przed Panem i modli się (2 Krl 19,14). Miasto ocalało, a Pismo mówi, że wśród królów Judy nie było mu równego w ufności wobec Boga (2 Krl 18,5)."
   ],
   [
    "Manasses",
    "2 Krl 21,1",
    "55 lat",
    "Król Judy, syn Ezechiasza, który przez 55 lat, dłużej niż jakikolwiek król na tronie Dawida, przywraca kult obcych bogów, usunięty przez ojca. Księga Kronik ukazuje jednak jego nawrócenie: w niewoli asyryjskiej upokarza się przed Bogiem, a Bóg wysłuchuje jego modlitwy i przywraca go do Jerozolimy (2 Krn 33,12-13)."
   ],
   [
    "Amon",
    "2 Krl 21,19",
    "2 lata",
    "Król Judy, syn Manassesa, który idzie drogą ojca z czasów jego bałwochwalstwa, lecz nie z czasów jego nawrócenia. Po dwóch latach panowania ginie w spisku własnych dworzan, a lud osadza na tronie jego ośmioletniego syna Jozjasza."
   ],
   [
    "Jozjasz",
    "2 Krl 22,1",
    "31 lat",
    "Król Judy, syn Amona: w osiemnastym roku jego panowania kapłani odnajdują w świątyni księgę Prawa, a król, słysząc jej słowa, rozdziera szaty i prowadzi lud do odnowienia przymierza (2 Krl 22–23). Ten najgorliwszy z reformatorów ginie młodo, w bitwie z faraonem Neko pod Megiddo."
   ],
   [
    "Joachaz",
    "2 Krl 23,31",
    "3 miesiące",
    "Król Judy, syn Jozjasza, obwołany przez lud po śmierci ojca, który panuje zaledwie trzy miesiące: faraon Neko więzi go w Ribla i uprowadza do Egiptu, skąd już nie wraca. Jeremiasz woła: „Płaczcie gorzko nad tym, który odchodzi, bo nie wróci już” (Jr 22,10)."
   ],
   [
    "Jojakim",
    "2 Krl 23,36",
    "11 lat",
    "Król Judy, syn Jozjasza, osadzony na tronie przez faraona, który przez 11 lat lawiruje między Egiptem a Babilonem. Gdy słucha czytanych proroctw Jeremiasza, odcina zwój kawałek po kawałku i wrzuca do ognia (Jr 36), lecz słowo Boże zostaje spisane na nowo."
   ],
   [
    "Jojakin",
    "2 Krl 24,8",
    "3 miesiące",
    "Król Judy, syn Jojakima, który po zaledwie trzech miesiącach panowania zostaje uprowadzony do Babilonu wraz z dworem i elitą kraju. Po 37 latach niewoli król babiloński uwalnia go i sadza przy swoim stole (2 Krl 25,27-30), a Ewangelia wymienia go w rodowodzie Jezusa jako Jechoniasza (Mt 1,12)."
   ],
   [
    "Sedecjasz",
    "2 Krl 24,18",
    "11 lat",
    "Ostatni król Judy, stryj Jojakina, rozdarty między słowem Jeremiasza a naciskiem dworzan: potajemnie radzi się proroka, lecz nie ma odwagi go posłuchać. Bunt przeciw Babilonowi kończy się zburzeniem Jerozolimy i świątyni w 587 p.n.e., a oślepiony król zostaje uprowadzony w kajdanach do Babilonu."
   ],
   [
    "Jeroboam I",
    "1 Krl 14,20",
    "22 lata",
    "Pierwszy król północnego Królestwa Izraela, za Salomona nadzorca robót przymusowych, któremu prorok Achiasz zapowiada panowanie, rozdzierając swój płaszcz na dwanaście części (1 Krl 11,29-31). Aby lud nie pielgrzymował do Jerozolimy, stawia złote cielce w Betel i Dan, co Pismo odtąd wspomina jako „grzech Jeroboama”."
   ],
   [
    "Nadab",
    "1 Krl 15,25",
    "2 lata",
    "Król Izraela, syn Jeroboama, który panuje zaledwie dwa lata i ginie podczas oblężenia filistyńskiego Gibbeton z ręki Baszy (1 Krl 15,27). Wraz z nim kończy się ród Jeroboama, a Północ wchodzi w epokę przewrotów."
   ],
   [
    "Baasza",
    "1 Krl 15,33",
    "24 lata",
    "Król Izraela z pokolenia Issachara, który zdobywa tron mieczem i panuje 24 lata, prowadząc nieustanne wojny z Judą, między innymi o graniczną Ramę. Prorok Jehu, syn Chananiego, zapowiada mu, że jego dom podzieli los domu Jeroboama (1 Krl 16,1-4)."
   ],
   [
    "Ela",
    "1 Krl 16,8",
    "2 lata",
    "Król Izraela, syn Baszy, który po dwóch latach panowania ginie w Tirsie, pijany w domu zarządcy pałacu, z ręki własnego dowódcy Zimriego (1 Krl 16,9-10). Jego śmierć dopełnia proroctwa o końcu rodu Baszy."
   ],
   [
    "Zimri",
    "1 Krl 16,15",
    "7 dni",
    "Dowódca połowy królewskich rydwanów, który zabija Elę i zasiada na tronie Izraela zaledwie na siedem dni: wojsko obwołuje królem Omriego i oblega Tirsę. Widząc, że miasto upada, Zimri podpala nad sobą pałac królewski i ginie w płomieniach (1 Krl 16,18)."
   ],
   [
    "Omri",
    "1 Krl 16,23",
    "12 lat",
    "Król Izraela, wcześniej dowódca wojska, założyciel jednej z najsilniejszych dynastii Północy: kupuje od Szemera wzgórze i buduje na nim nową stolicę, Samarię (1 Krl 16,24). Jego imię przetrwało w źródłach asyryjskich, które jeszcze długo po nim nazywały Izrael „domem Omriego”."
   ],
   [
    "Achab",
    "1 Krl 16,29",
    "22 lata",
    "Król Izraela, syn Omriego, który pod wpływem żony, fenickiej księżniczki Izebel, wprowadza do Samarii kult Baala; przeciw niemu staje prorok Eliasz na górze Karmel. Gdy dla winnicy Nabota dopuszcza do zabicia niewinnego, Eliasz zapowiada mu sąd, a król ginie od przypadkowej strzały pod Ramot w Gileadzie."
   ],
   [
    "Ochozjasz",
    "1 Krl 22,52",
    "2 lata",
    "Król Izraela, syn Achaba, który po upadku przez kratę w górnej komnacie posyła pytać o zdrowie bożka Baal-Zebuba z Ekronu. Eliasz zatrzymuje posłańców, pytając, czy nie ma Boga w Izraelu (2 Krl 1,3), i zapowiada królowi śmierć."
   ],
   [
    "Joram",
    "2 Krl 3,1",
    "12 lat",
    "Król Izraela, syn Achaba, w którego czasach działa prorok Elizeusz, uzdrawiający z trądu Naamana, wodza króla Aramu (2 Krl 5). Joram ginie od strzały Jehu na polu Nabota, a wraz z nim kończy się dynastia Omriego."
   ],
   [
    "Jehu",
    "2 Krl 10,36",
    "28 lat",
    "Dowódca wojska, namaszczony na króla Izraela w tajemnicy przez ucznia Elizeusza, który pędzi rydwanem do Jizreel i jednym przewrotem kończy dynastię Omriego oraz kult Baala w Samarii. Nie usuwa jednak złotych cielców Jeroboama."
   ],
   [
    "Joachaz",
    "2 Krl 13,1",
    "17 lat",
    "Król Izraela, syn Jehu, za którego panowania Aramejczycy tak uciskają kraj, że z wojska zostaje garstka, starta jak proch przy młóceniu. Wtedy król błaga Pana o pomoc, a Bóg daje ludowi wybawcę (2 Krl 13,4-7)."
   ],
   [
    "Joasz",
    "2 Krl 13,10",
    "16 lat",
    "Król Izraela, syn Joachaza, który płacze nad umierającym Elizeuszem, wołając: „Ojcze mój! Ojcze mój! Rydwanie Izraela i jego jeźdźcze!” (2 Krl 13,14); prorok zapowiada mu trzy zwycięstwa nad Aramem. Odzyskuje utracone miasta i pokonuje króla Judy Amazjasza."
   ],
   [
    "Jeroboam II",
    "2 Krl 14,23",
    "41 lat",
    "Król Izraela, syn Joasza, za którego 41-letniego panowania kraj przeżywa ostatni rozkwit: król przywraca dawne granice (2 Krl 14,25), a bogactwo elit rośnie. Właśnie wtedy prorocy Amos i Ozeasz upominają możnych za krzywdę ubogich i wzywają do wierności."
   ],
   [
    "Zachariasz",
    "2 Krl 15,8",
    "6 miesięcy",
    "Król Izraela, syn Jeroboama II i ostatni z dynastii Jehu, który po sześciu miesiącach panowania ginie publicznie w spisku Szalluma. Wypełnia się zapowiedź, że ród Jehu będzie panował do czwartego pokolenia (2 Krl 15,12)."
   ],
   [
    "Szallum",
    "2 Krl 15,13",
    "1 miesiąc",
    "Król Izraela, syn Jabesza, który zdobywa tron mordem i traci go po miesiącu, zabity w Samarii przez Menachema. Jego krótkie rządy pokazują, jak chwiejne stało się królestwo w ostatnich latach przed upadkiem."
   ],
   [
    "Menachem",
    "2 Krl 15,17",
    "10 lat",
    "Król Izraela, syn Gadiego, który przez 10 lat panowania kupuje sobie spokój od Asyrii: płaci królowi Pulowi tysiąc talentów srebra, ściągając je od zamożnych Izraelitów (2 Krl 15,19-20). Cień asyryjskiej potęgi kładzie się odtąd na całym królestwie."
   ],
   [
    "Pekachiasz",
    "2 Krl 15,23",
    "2 lata",
    "Król Izraela, syn Menachema, który po dwóch latach panowania ginie w swoim pałacu w Samarii, zabity przez własnego adiutanta Pekacha i pięćdziesięciu ludzi z Gileadu. Kolejny przewrót przybliża koniec Północy."
   ],
   [
    "Pekach",
    "2 Krl 15,27",
    "20 lat",
    "Król Izraela, syn Remaliasza, który w sojuszu z Aramem wyrusza na Jerozolimę, by wciągnąć Judę do wspólnej walki z Asyrią; wtedy Izajasz wypowiada proroctwo o Emmanuelu. Asyria odpowiada zajęciem Galilei i Gileadu (2 Krl 15,29), a Pekach ginie w spisku Ozeasza."
   ],
   [
    "Ozeasz",
    "2 Krl 17,1",
    "9 lat",
    "Ostatni król Izraela, syn Eli, który płaci daninę Asyrii, a potem szuka pomocy w Egipcie i odmawia trybutu. W odwecie Asyryjczycy oblegają Samarię przez trzy lata i w 722 p.n.e. ją zdobywają, kończąc dzieje północnego królestwa (2 Krl 17,4-6)."
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
    "In the line from Adam to Noah every name is a link in a thread that God does not let break: Kenan, son of Enosh, passes on life and the memory of the Creator to the next generation. The Bible records none of his deeds, yet St Luke places him in the genealogy of Jesus (Luke 3:37)."
   ],
   [
    "Mahalalel",
    "Gen 5:15-17",
    "Son of Kenan, whose name means “praise of God”. He belongs to the generations to whom the Bible gives very long lives, which in ancient texts was a sign of blessing and of a family’s great age."
   ],
   [
    "Jared",
    "Gen 5:18-20",
    "He lives 962 years, longer than anyone in the Bible except his grandson Methuselah. Yet the finest fruit of his long life is his son Enoch, of whom Scripture says that he “walked with God” (Gen 5:22)."
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
    "He is born at a time when humanity is spreading out across the earth; his father, Peleg, bears a name meaning “division”. The Bible tells nothing of his life, but keeps his name in the genealogy that leads through Abraham to Jesus (Luke 3:35)."
   ],
   [
    "Serug",
    "Gen 11:22-23",
    "Great-grandfather of Abraham. His name sounds like the ancient town of Sarugi in northern Mesopotamia, in the region Abraham’s family came from."
   ],
   [
    "Nahor",
    "Gen 11:24-25",
    "From him spring two branches of one story: his grandson Abraham, father of believers, and his grandson Nahor, whose granddaughter Rebekah will become Isaac’s wife. The grandfather’s name, given to a grandson, shows how memory passed from generation to generation in these families."
   ],
   [
    "Terah",
    "Gen 11:26-32",
    "He sets out from Ur of the Chaldeans towards Canaan, leading his family on a journey he will not finish himself: he stops in Haran and dies there. What the father began, his son Abram will complete when he hears God’s call: “Go from your country” (Gen 12:1)."
   ],
   [
    "Abraham",
    "Gen 25:7",
    "The patriarch who at God’s call leaves Haran and sets out into the unknown, and whom God renames from Abram to Abraham, “father of a multitude of nations”. Hoping against hope, he trusts the promise and in old age receives a son, Isaac, which is why St Paul calls him the father of all who believe (Rom 4:11). He is honoured by Jews, Christians and Muslims, and the Roman Canon remembers him as “our father in faith”."
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
    "The son of the promise, born to Abraham and Sarah in their old age; his name expresses the joy that the child’s birth brought to parents who had waited so long (Gen 21:6). Spared on Mount Moriah when God stayed his father’s hand, he marries Rebekah and becomes the father of twins, Esau and Jacob. From then on God names himself “the God of Abraham, Isaac and Jacob”."
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
    "One of the oldest civilisations in the world, flourishing at the foot of the Zagros Mountains, in today’s Iran, with Susa as its capital. The Bible traces its people to Elam, son of Shem (Gen 10:22). An echo of this ancient nation still sounds at Pentecost, when Elamites hear the apostles proclaiming “the mighty works of God” in their own tongue (Acts 2:9-11)."
   ],
   [
    "Assyria",
    "Gen 10:22; 2 Kgs 17",
    "An empire on the Tigris with its capital at Nineveh, for centuries the terror of the whole Near East; in 722 BC its armies put an end to the northern Kingdom of Israel. And yet it is to Nineveh that God sends the prophet Jonah, and when its people repent he shows them mercy, teaching that his care reaches even Israel’s enemies."
   ],
   [
    "Aram / Syria",
    "Gen 10:22; 2 Kgs 16:9",
    "The kingdom of the Arameans with its capital at Damascus, for centuries Israel’s neighbour and rival, and home of the commander Naaman, healed by the prophet Elisha. Their language, Aramaic, became the common speech of the whole Near East. In it Jesus taught and prayed, and the Gospels preserve his words: “Talitha cum” and “Abba” (Mark 5:41; 14:36)."
   ],
   [
    "Arabs",
    "Gen 25:12-18",
    "Peoples of the deserts and oases of the Arabian Peninsula, merchants leading caravans laden with incense and spices. Tradition places here the land of Sheba, whose queen came to see Solomon’s wisdom for herself. At Pentecost, Arabs too hear the apostles proclaiming the mighty works of God in their own tongue (Acts 2:11)."
   ],
   [
    "Israel",
    "Josh 1; 2 Kgs 25",
    "The people descended from the twelve sons of Jacob, who settled in Canaan after the Exodus and under David and Solomon formed a kingdom with Jerusalem as its capital. Jesus comes from this people, and St John Paul II called the Jews the “elder brothers” of Christians in faith."
   ],
   [
    "Babylon",
    "Gen 10:8-10",
    "A city on the Euphrates, in the land of Shinar, whose name Genesis links with the Tower of Babel and the confusion of tongues. Under Nebuchadnezzar it becomes the capital of an empire and the place of Judah’s exile. In Revelation its name stands for every power that sets itself against God."
   ],
   [
    "Egypt",
    "Gen 10:6",
    "Land of the Nile and the pyramids, one of the world’s oldest civilisations, which the Bible traces to Mizraim, son of Ham; Egypt is still called by that name in Hebrew. Here Joseph saves his family from famine, here Israel knows slavery and the great Exodus, and centuries later the Holy Family finds refuge. In its deserts Christian hermit and monastic life is born."
   ],
   [
    "Canaan",
    "Gen 10:15-19",
    "A land flowing with milk and honey (Exod 3:8), promised by God to Abraham and his descendants and home to many peoples, among them the Hittites and Jebusites; the Bible derives its name from Canaan, grandson of Noah. In the Gospel Jesus praises a Canaanite woman: “O woman, great is your faith” (Matt 15:28), and heals her daughter."
   ],
   [
    "Phoenicia",
    "1 Kgs 5",
    "A land of merchants and sailors on the coast of present-day Lebanon, with the cities of Tyre and Sidon; the king of Tyre sent Solomon cedar for the temple. The Phoenicians spread the alphabet from which our letters come."
   ],
   [
    "Indo-European peoples",
    "Gen 10:2-5",
    "The Bible’s table of nations traces to Japheth, son of Noah, the peoples of the north and of the distant coasts, among them the Medes and the Greeks. In this way it presents all humanity as one family, and Noah’s blessing that God would enlarge Japheth (Gen 9:27) was read by the Church Fathers as a foreshadowing of the Gospel reaching the Gentiles."
   ],
   [
    "Greece",
    "Dan 8:21",
    "A land of city-states such as Athens and Sparta, the cradle of philosophy, democracy, theatre and science. Through the conquests of Alexander the Great, Greek became the common language of the Mediterranean world, and the whole New Testament was written in it."
   ],
   [
    "Persia",
    "Dan 8:20",
    "The Achaemenid Empire, stretching from India to Egypt, with palaces at Susa and Persepolis, famed for its royal roads, efficient post and respect for the customs of conquered peoples. Its ruler Cyrus allows the Jews to return from exile and rebuild the Temple, and the story of Queen Esther unfolds at Susa."
   ],
   [
    "Rome",
    "Dan 7:7",
    "A city founded, by tradition, in 753 BC, which grew into an empire around the whole Mediterranean; Jesus was born in the reign of its first emperor, Augustus (Luke 2:1). Sts Peter and Paul were martyred in Rome, and the city became the seat of the popes and the centre of the Catholic Church. In 476 the western half of the empire falls; the eastern half, with its capital at Constantinople, lives on as Byzantium until 1453."
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
   ],
   [
    "The Jewish people",
    "Ezra 1; Rom 11:1-2",
    "The Babylonian exile does not end Israel’s story but transforms it: around the Scriptures, prayer and the synagogue a faith takes shape that will survive every storm of history. After the Romans destroy the Second Temple in 70, the Jews are scattered across the world and through nearly two thousand years of diaspora remain faithful to the Torah despite persecution, up to the Holocaust; in 1948 the modern State of Israel is founded. The Church, with St Paul, remembers that “the gifts and the call of God are irrevocable” (Rom 11:29)."
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
    "Gen 6–9; 1 Pet 3:20-21",
    "When evil spreads across the earth, God does not abandon the world: amid the waters of the flood he saves Noah, his family and every kind of creature in the ark, so that life may begin anew from them. When the waters recede, a rainbow rises over the washed earth, a sign of covenant and a promise that life will never again be destroyed. In these waters, which close an old world and open a new one, the Church has from the beginning seen a foreshadowing of baptism, through which a person passes into new life.",
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
    "On Mount Moriah, linked with Abraham’s sacrifice (2 Chr 3:1), Solomon raises a house of stone and cedar for God, and the Ark of the Covenant is placed in its holiest room. At its dedication the king asks God to hear everyone who prays here, even the foreigner from a distant land (1 Kgs 8:41-43). For nearly four centuries the Temple is the heart of Israel’s faith, until the Babylonians destroy it in 587 BC.",
    null
   ],
   [
    "Kingdom divides",
    "1 Kgs 12",
    "The unity built by David and Solomon does not outlast a single generation: when Rehoboam rejects the people’s plea to lighten their burdens, the ten northern tribes break away and make Jeroboam their king. From then on two kingdoms stand side by side: Israel in the north and Judah with Jerusalem in the south, where the house of David keeps the throne, the line from which, as promised, the Messiah will come.",
    null
   ],
   [
    "Fall of Samaria",
    "2 Kgs 17",
    "After two centuries the northern Kingdom of Israel vanishes from the map: the Assyrians take Samaria, deport its people to distant lands and settle foreign peoples in their place (2 Kgs 17:24). From this mingling of nations come the Samaritans, kept at a distance by the Jews, yet held up by Jesus as an example in the parable of the Good Samaritan.",
    null
   ],
   [
    "Babylonian captivity",
    "2 Kgs 24",
    "Nebuchadnezzar captures Jerusalem and carries King Jehoiachin and the country’s elite off to Babylon; ten years later he destroys the city and the Temple. In exile, far from the Temple, Israel learns faithfulness anew: “By the rivers of Babylon there we sat and wept, remembering Zion” (Ps 137:1). Prophets such as Ezekiel keep alive its hope of return.",
    null
   ],
   [
    "Return from exile",
    "Ezra 1",
    "“When the Lord restored the fortunes of Zion, we were like those who dream” (Ps 126:1): a decree of the Persian king Cyrus allows the exiles to return home. Led by Zerubbabel, they come back to ruined Jerusalem and, amid hardship, raise the Temple again, completed around 515 BC (Ezra 6:15).",
    null
   ],
   [
    "Birth of Christ",
    "Matt 2; Luke 2",
    "“And the Word became flesh and dwelt among us” (John 1:14): in Bethlehem, the city of David, the Son of God is born of the Virgin Mary, and his first cradle is a humble manger in a Bethlehem stable. He through whom all things were made comes in poverty and silence. The first to recognise him are shepherds from the nearby fields, and after them Magi come from the distant East, as if those near and far, the simple and the learned, were all hastening to one Child. From that night humanity counts its history in years before Christ and after him.",
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
    "In 476 the Germanic chieftain Odoacer deposes the last emperor of the West, Romulus Augustulus, and the old empire breaks up into barbarian kingdoms. In this twilight the Church keeps the light: monasteries copy books, missionaries carry the faith to new peoples, and in time cathedrals and universities rise. From the union of Rome’s heritage with the Gospel, Christian Europe is born.",
    null
   ],
   [
    "Reformation",
    "",
    "A dispute meant to be an academic debate about indulgences shakes the whole West: in 1517 the Augustinian friar Martin Luther publishes his 95 theses, and Zwingli, Calvin and King Henry VIII of England follow. Helped by printing and by the support of rulers, within a few decades Western Christianity divides into Catholics and Protestants. The Church responds with deep renewal at the Council of Trent (1545–1563).",
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
    "The Bible calls him “the first mighty man on earth” and “a mighty hunter before the Lord”. He founds a kingdom in the land of Shinar, with the cities of Babel, Erech and Akkad. Josephus saw in him the instigator of the Tower of Babel, an image of human pride, and his name lives on in the proverb about great hunters.",
    "Gen 10:8-10"
   ],
   [
    "Abraham",
    "Father of the nations",
    "The patriarch who at God’s call leaves Haran and sets out into the unknown, and whom God renames from Abram to Abraham, “father of a multitude of nations”. Hoping against hope, he trusts the promise and in old age receives a son, Isaac, which is why St Paul calls him the father of all who believe (Rom 4:11). He is honoured by Jews, Christians and Muslims, and the Roman Canon remembers him as “our father in faith”.",
    "Gen 12"
   ],
   [
    "Isaac",
    "Son of promise",
    "The son of the promise, born to Abraham and Sarah in their old age; his name expresses the joy that the child’s birth brought to parents who had waited so long (Gen 21:6). Spared on Mount Moriah when God stayed his father’s hand, he marries Rebekah and becomes the father of twins, Esau and Jacob. From then on God names himself “the God of Abraham, Isaac and Jacob”.",
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
    "Prophetess and judge of Israel, who settles the people’s disputes beneath a palm tree between Ramah and Bethel (Judg 4:5). When the Canaanites oppress the land, she calls the commander Barak to battle and goes with him. After the victory over Sisera she sings a song (Judg 5) regarded as one of the oldest pieces in the Bible.",
    "Judg 4-5"
   ],
   [
    "Samson",
    "Judge",
    "Judge of Israel and a Nazirite consecrated to God from his mother’s womb, whose extraordinary strength was bound to his vow never to cut his hair. Betrayed by Delilah, blinded and humiliated by the Philistines, he regains his strength in a final prayer. The Letter to the Hebrews names him among the heroes of faith (Heb 11:32).",
    "Judg 13-16"
   ],
   [
    "Saul",
    "First king of Israel",
    "Israel asks for a king “like all the nations” (1 Sam 8:5), and the prophet Samuel anoints Saul of the tribe of Benjamin, who “stood head and shoulders above all the people”. A brave warrior, he gradually stops listening to God, and his drama ends in death on Mount Gilboa. David mourns him and Jonathan in a lament: “How are the mighty fallen!” (2 Sam 1:19).",
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
    "When God lets him ask for whatever he wishes, the young king asks not for riches or a long life but for “an understanding mind to govern your people” (1 Kgs 3:9). His wisdom becomes proverbial, as the judgement between two mothers and the visit of the Queen of Sheba bear witness, and in Jerusalem he builds a temple for God. Tradition ascribes to him Proverbs, Ecclesiastes and the Song of Songs.",
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
    "Cupbearer to the Persian king Artaxerxes, who weeps and prays at the news of ruined Jerusalem and then asks the king for leave to rebuild the city. As governor of Judah he rebuilds the walls with the people in 52 days, while the builders work with one hand and hold a weapon in the other (Neh 6:15). He leads the people in a solemn renewal of the covenant with God.",
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
    "A Jew from Tarsus and a disciple of the Pharisees, at first a zealous persecutor of Christians, who is stopped near Damascus by the light and voice of the risen Jesus. As Apostle to the Nations he travels the Roman world, founds communities and writes letters that make up a large part of the New Testament, among them the hymn to love (1 Cor 13). He gives his life as a martyr in Rome.",
    "Acts 9-28"
   ],
   [
    "Constantine",
    "Roman emperor",
    "After three centuries of persecution Christians can at last profess their faith openly: in 313 Constantine, together with Licinius, issues the Edict of Milan. The emperor convenes the Council of Nicaea and founds Constantinople on the Bosporus, and receives baptism only at the end of his life. The Eastern Churches venerate him as a saint “equal to the apostles”.",
    ""
   ],
   [
    "Martin Luther",
    "Reformer",
    "Augustinian friar and professor of theology at Wittenberg who, troubled by the question of a gracious God, discovers in the Letter to the Romans salvation by grace through faith. His 95 theses of 1517 begin the Reformation, and his translation of the Bible into German shapes the language of a whole nation.",
    ""
   ],
   [
    "St Thomas Aquinas",
    "Doctor of the Church",
    "Dominican friar and one of the greatest thinkers in the history of the Church, who in his Summa Theologiae showed that faith and reason are not rivals but lead to the same truth. When the works of Aristotle, known in the West for centuries only in fragments, return in translations from Arabic and Greek, Thomas does not reject them in fear but weaves them into Christian thought, creating a synthesis that still shapes philosophy, ethics and law. Leo XIII commended him as the master for Catholic schools, and St John Paul II, in the encyclical Fides et Ratio, called him a model for all who seek the truth.",
    ""
   ],
   [
    "Johannes Gutenberg",
    "Printer",
    "The first great book printed with movable type is the Bible: Johannes Gutenberg publishes it in Mainz around 1455, and the beauty of its lettering is still admired today. The Word, for centuries painstakingly copied in monasteries, begins to reach thousands of hands, and by 1500 printing presses are at work in hundreds of European cities.",
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
    "Two works have outlived his reign by fifteen hundred years: Roman law set in order, on which the law of Europe still rests, and Hagia Sophia in Constantinople, for centuries the greatest church in Christendom. According to legend, Emperor Justinian, entering the finished church, exclaimed: “Solomon, I have surpassed you!”",
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
    "Muslims count their calendar from the year 622. That year Muhammad, who from about 610 had preached faith in one God in Mecca, moves with his followers to Medina and forms there the first community of Islam. This event is called the Hijra.",
    ""
   ],
   [
    "Charlemagne",
    "Emperor",
    "King of the Franks, crowned emperor by Pope Leo III on Christmas Day 800, who united much of western Europe. He brings scholars to his court, founds schools at monasteries and cathedrals and has ancient books copied, saving the heritage of antiquity for later generations. This flowering is known as the Carolingian Renaissance.",
    ""
   ],
   [
    "Sts Cyril and Methodius",
    "Apostles to the Slavs",
    "Brothers from Thessalonica who, at the request of Prince Rastislav, come to Moravia to preach the Gospel to the Slavs in their own language. Cyril is credited with creating the first Slavic script, Glagolitic, and the two brothers translate Scripture and the liturgy. In 1980 St John Paul II proclaimed them co-patrons of Europe.",
    ""
   ],
   [
    "Mieszko I",
    "Duke of the Polans",
    "The first historical ruler of Poland, who in 966 receives baptism and brings his land into the community of Christian Europe; the history of the Polish state is counted from that moment. The way to baptism was opened by his marriage to the Czech princess Dobrava. Late in life he placed his realm under the protection of the Holy See in the document known as “Dagome iudex”.",
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
    "A voyage meant to find a western route to Asia joins two worlds: in 1492 Christopher Columbus, sailing under the flag of Spain, reaches the islands of the New World. Missionaries follow the explorers and the Gospel reaches both Americas. When the conquerors wrong the native peoples, the Dominican Bartolomé de las Casas rises in their defence.",
    ""
   ],
   [
    "Nicolaus Copernicus",
    "Astronomer",
    "Canon of Warmia, physician and astronomer, who after years of observation shows in On the Revolutions of the Heavenly Spheres (1543) the Earth moving around the Sun. As a well-known Polish saying puts it, he “stopped the Sun and moved the Earth”. He dedicated the work to Pope Paul III, and his model opened the way for modern astronomy.",
    ""
   ],
   [
    "Isaac Newton",
    "Scientist",
    "English physicist and mathematician who in the Principia (1687) joined heaven and earth under one law of universal gravitation: the same law that makes an apple fall and keeps the Moon in its orbit. Contemplating the order of the cosmos, he wrote at the close of the work that so beautiful a system of the Sun, planets and comets could only proceed from the counsel of “an intelligent and powerful Being”.",
    ""
   ],
   [
    "Napoleon Bonaparte",
    "Emperor of the French",
    "Out of the chaos of the Revolution emerges not the old monarchy but the rule of one man. In 1799 Napoleon declares that the Revolution “is over”, and at the same time writes its ideals into law: the Civil Code, built on equality before the law, travels with his armies across Europe and shapes it to this day. In 1804, in the cathedral of Notre-Dame, he places the imperial crown on his own head. The man who restored public worship to France through the Concordat of 1801 soon holds Pope Pius VII captive for five years.",
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
    "After years of restless searching, sustained by the persevering prayer of his mother, St Monica, he is converted and becomes bishop of Hippo in Africa. In his Confessions he tells God the story of his heart in words that still move readers today: “You have made us for yourself, and our heart is restless until it rests in you.” As a Doctor of the Church he unites faith with the thought of Plato and shapes the theology of the whole West.",
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
    "The Christian East and West, the Greek and Latin heritage of one faith, drift apart over the centuries, until in 1054 the papal legates and the Patriarch of Constantinople excommunicate each other. The division has not yet been overcome, but since 1965, when Paul VI and Patriarch Athenagoras consigned those excommunications to oblivion, popes and patriarchs pray together for reconciliation."
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
    "Under the banner of liberty, equality and fraternity, France overthrows the old order, and in 1792 the monarchy falls. Yet the Revolution subjects the Church to the state and unleashes persecutions in which thousands of clergy and faithful lose their lives. The Church honours many of them as martyrs."
   ],
   [
    "Septuagint",
    "",
    "In Alexandria, a great centre of learning, Jews begin translating their sacred books into Greek, the common language of the age, a work that continues over several generations. Tradition speaks of seventy-two translators, hence the name Septuagint. The first Christians read the Bible in this translation, and the writers of the New Testament often quote it."
   ]
  ],
  "KINGS": [
   [
    "Saul",
    "1 Sam 13:1; Acts 13:21",
    "40 years",
    "The first king of Israel, son of Kish of the tribe of Benjamin: with his anointing by Samuel the monarchy is born, and the tall young man, taller than all the people, leads the nation to its first victories. In time, however, he stops listening to God and dies with his sons in battle against the Philistines on Mount Gilboa."
   ],
   [
    "David",
    "2 Sam 5:4",
    "40 years",
    "The second king of Israel, a shepherd from Bethlehem, son of Jesse: under his rule the tribes of Israel become one kingdom, and conquered Jerusalem becomes its capital and the city of the Ark of the Covenant. God promises him a house that will endure for ever (2 Sam 7:16), which is why Jesus is called the “Son of David”, and tradition ascribes many psalms to David."
   ],
   [
    "Solomon",
    "1 Kgs 11:42",
    "40 years",
    "Son of David and Bathsheba, the third king of united Israel, whose forty years on the throne are the kingdom’s golden age: peace, trade reaching distant lands and a temple raised in Jerusalem. Yet the burdens laid on the people and concessions to the gods of his foreign wives prepare the kingdom’s break-up after his death."
   ],
   [
    "Rehoboam",
    "1 Kgs 14:21",
    "17 years",
    "Son of Solomon, who inherits his father’s throne and in a single moment loses most of his legacy: he rejects the elders’ advice to lighten the people’s load and, urged on by his young companions, promises an even heavier yoke, so the ten northern tribes turn away from the house of David (1 Kgs 12). From then on he rules over Judah alone, and in the fifth year of his reign Pharaoh Shishak enters Jerusalem and carries off the treasures of the Temple."
   ],
   [
    "Abijam",
    "1 Kgs 15:2",
    "3 years",
    "King of Judah, son of Rehoboam, whose short three-year reign is filled with war against Jeroboam. According to Chronicles, before the battle he reminds Israel that God gave the kingship to David for ever, and he wins the day (2 Chr 13)."
   ],
   [
    "Asa",
    "1 Kgs 15:10",
    "41 years",
    "King of Judah, son of Abijam, who for 41 years cleanses the land of idols, sparing not even his own grandmother Maacah, whom he removes as queen mother (1 Kgs 15:13). Scripture says his heart was true to the Lord, though late in life he sought help from the king of Aram rather than from God (2 Chr 16)."
   ],
   [
    "Jehoshaphat",
    "1 Kgs 22:42",
    "25 years",
    "King of Judah, son of Asa, whose reign is a time of peace and teaching: he sends Levites and priests to the towns to teach the people the Law of the Lord (2 Chr 17:7-9) and appoints judges. Allied with Ahab, he fights at his side at Ramoth-gilead."
   ],
   [
    "Jehoram",
    "2 Kgs 8:17",
    "8 years",
    "King of Judah, son of Jehoshaphat, whose marriage to Athaliah, daughter of Ahab, brings the customs and gods of the North into the court of Jerusalem (2 Kgs 8:18). In eight years on the throne he loses control of Edom, and Scripture judges him severely as a king who turned away from God."
   ],
   [
    "Ahaziah",
    "2 Kgs 8:26",
    "1 year",
    "King of Judah, son of Jehoram and Athaliah and so a grandson of Ahab, who reigns for only a year. Visiting his wounded kinsman, Joram of Israel, he is caught in the middle of Jehu’s coup and dies of his wounds at Megiddo (2 Kgs 9:27)."
   ],
   [
    "Athaliah",
    "2 Kgs 11:3",
    "6 years",
    "Daughter of Ahab, widow of King Jehoram and the only woman to rule Judah in her own right: after her son’s death she has the royal offspring killed to seize the throne. Little Joash, however, survives, hidden in the Temple, and after six years the priest Jehoiada sets him on the throne, ending her rule."
   ],
   [
    "Joash",
    "2 Kgs 12:1-2",
    "40 years",
    "King of Judah, son of Ahaziah, saved as a baby and raised in hiding at the Temple, who takes the throne at the age of seven. While his guardian, the priest Jehoiada, lives, he restores the Temple with gifts collected in a chest by the altar, but after Jehoiada’s death he turns away from God."
   ],
   [
    "Amaziah",
    "2 Kgs 14:2",
    "29 years",
    "King of Judah, son of Joash, whose victory over the Edomites in the Valley of Salt makes him bold enough to challenge Joash, king of Israel, who answers him with the parable of the thistle and the cedar (2 Kgs 14:9). Defeat ends in the plundering of Jerusalem, and the king himself dies in a conspiracy at Lachish."
   ],
   [
    "Azariah (Uzziah)",
    "2 Kgs 15:2",
    "52 years",
    "King of Judah, son of Amaziah, whose reign of more than half a century is a time of prosperity: he builds towers, digs wells and strengthens the army and farming (2 Chr 26). But when in his pride he enters the Temple himself to burn incense, he is struck with leprosy, and in the year of his death Isaiah sees the glory of the Lord in the Temple (Isa 6:1)."
   ],
   [
    "Jotham",
    "2 Kgs 15:33",
    "16 years",
    "King of Judah, son of Azariah, who governs on behalf of his sick father and then reigns 16 years in his own right, building the Upper Gate of the Temple and fortifying the towns of Judah. Scripture gives him a good testimony: he did what was right in the eyes of the Lord."
   ],
   [
    "Ahaz",
    "2 Kgs 16:2",
    "16 years",
    "King of Judah, son of Jotham: when Aram and Israel march on Jerusalem, the prophet Isaiah calls him to trust in God and gives a sign: “Behold, a virgin shall conceive and bear a son, and shall call his name Immanuel” (Isa 7:14). Ahaz, however, prefers to seek rescue from Assyria, paying it tribute from the Temple treasures."
   ],
   [
    "Hezekiah",
    "2 Kgs 18:2",
    "29 years",
    "King of Judah, son of Ahaz, who cleanses the Temple and restores the Passover, and in the hour of trial, when the Assyrian army besieges Jerusalem, spreads the enemy’s letter before the Lord and prays (2 Kgs 19:14). The city is saved, and Scripture says that among the kings of Judah there was none like him in trusting God (2 Kgs 18:5)."
   ],
   [
    "Manasseh",
    "2 Kgs 21:1",
    "55 years",
    "King of Judah, son of Hezekiah, who for 55 years, longer than any other king on David’s throne, restores the worship of foreign gods that his father had removed. Yet Chronicles tells of his conversion: in Assyrian captivity he humbles himself before God, and God hears his prayer and brings him back to Jerusalem (2 Chr 33:12-13)."
   ],
   [
    "Amon",
    "2 Kgs 21:19",
    "2 years",
    "King of Judah, son of Manasseh, who follows his father’s path from the years of idolatry, not from the years of conversion. After two years on the throne he dies in a plot by his own courtiers, and the people set his eight-year-old son Josiah on the throne."
   ],
   [
    "Josiah",
    "2 Kgs 22:1",
    "31 years",
    "King of Judah, son of Amon: in the eighteenth year of his reign the priests find the book of the Law in the Temple, and the king, hearing its words, tears his clothes and leads the people in renewing the covenant (2 Kgs 22–23). This most zealous of reformers dies young, in battle against Pharaoh Neco at Megiddo."
   ],
   [
    "Jehoahaz",
    "2 Kgs 23:31",
    "3 months",
    "King of Judah, son of Josiah, proclaimed by the people after his father’s death, who reigns only three months: Pharaoh Neco imprisons him at Riblah and takes him to Egypt, from which he never returns. Jeremiah cries out: “Weep bitterly for him who goes away, for he shall return no more” (Jer 22:10)."
   ],
   [
    "Jehoiakim",
    "2 Kgs 23:36",
    "11 years",
    "King of Judah, son of Josiah, set on the throne by Pharaoh, who for 11 years manoeuvres between Egypt and Babylon. As Jeremiah’s prophecies are read to him, he cuts the scroll piece by piece and throws it into the fire (Jer 36), but the word of God is written down anew."
   ],
   [
    "Jehoiachin",
    "2 Kgs 24:8",
    "3 months",
    "King of Judah, son of Jehoiakim, who after only three months on the throne is carried off to Babylon with the court and the country’s elite. After 37 years of captivity the king of Babylon releases him and seats him at his own table (2 Kgs 25:27-30), and the Gospel names him in the genealogy of Jesus as Jechoniah (Matt 1:12)."
   ],
   [
    "Zedekiah",
    "2 Kgs 24:18",
    "11 years",
    "The last king of Judah, uncle of Jehoiachin, torn between the word of Jeremiah and the pressure of his courtiers: he consults the prophet in secret but lacks the courage to heed him. Revolt against Babylon ends with the destruction of Jerusalem and the Temple in 587 BC, and the blinded king is taken in chains to Babylon."
   ],
   [
    "Jeroboam I",
    "1 Kgs 14:20",
    "22 years",
    "The first king of the northern Kingdom of Israel, once Solomon’s overseer of forced labour, to whom the prophet Ahijah foretells his rule by tearing his cloak into twelve pieces (1 Kgs 11:29-31). To keep the people from going on pilgrimage to Jerusalem, he sets up golden calves at Bethel and Dan, which Scripture ever after recalls as “the sin of Jeroboam”."
   ],
   [
    "Nadab",
    "1 Kgs 15:25",
    "2 years",
    "King of Israel, son of Jeroboam, who reigns only two years and is killed by Baasha during the siege of the Philistine town of Gibbethon (1 Kgs 15:27). With him the house of Jeroboam ends, and the North enters an age of coups."
   ],
   [
    "Baasha",
    "1 Kgs 15:33",
    "24 years",
    "King of Israel from the tribe of Issachar, who seizes the throne by the sword and reigns 24 years, waging constant war with Judah, among other things over the border town of Ramah. The prophet Jehu son of Hanani tells him that his house will share the fate of the house of Jeroboam (1 Kgs 16:1-4)."
   ],
   [
    "Elah",
    "1 Kgs 16:8",
    "2 years",
    "King of Israel, son of Baasha, who after two years on the throne is killed at Tirzah, drunk in the house of his palace steward, by his own commander Zimri (1 Kgs 16:9-10). His death fulfils the prophecy of the end of Baasha’s house."
   ],
   [
    "Zimri",
    "1 Kgs 16:15",
    "7 days",
    "Commander of half the royal chariots, who kills Elah and sits on the throne of Israel for only seven days: the army proclaims Omri king and besieges Tirzah. Seeing the city fall, Zimri sets the royal palace on fire over himself and dies in the flames (1 Kgs 16:18)."
   ],
   [
    "Omri",
    "1 Kgs 16:23",
    "12 years",
    "King of Israel, formerly commander of the army, founder of one of the strongest dynasties of the North: he buys a hill from Shemer and builds on it a new capital, Samaria (1 Kgs 16:24). His name lives on in Assyrian records, which long after him still called Israel “the house of Omri”."
   ],
   [
    "Ahab",
    "1 Kgs 16:29",
    "22 years",
    "King of Israel, son of Omri, who under the influence of his wife, the Phoenician princess Jezebel, brings the worship of Baal to Samaria; the prophet Elijah stands against it on Mount Carmel. When he allows an innocent man to be killed for Naboth’s vineyard, Elijah announces judgement, and the king dies from a stray arrow at Ramoth-gilead."
   ],
   [
    "Ahaziah",
    "1 Kgs 22:52",
    "2 years",
    "King of Israel, son of Ahab, who after falling through the lattice of his upper room sends to ask the idol Baal-zebub of Ekron whether he will recover. Elijah stops the messengers, asking whether there is no God in Israel (2 Kgs 1:3), and announces the king’s death."
   ],
   [
    "Joram",
    "2 Kgs 3:1",
    "12 years",
    "King of Israel, son of Ahab, in whose time the prophet Elisha is at work, healing Naaman, commander of the king of Aram, of leprosy (2 Kgs 5). Joram dies by Jehu’s arrow on Naboth’s field, and with him the dynasty of Omri ends."
   ],
   [
    "Jehu",
    "2 Kgs 10:36",
    "28 years",
    "An army commander, secretly anointed king of Israel by a disciple of Elisha, who races his chariot to Jezreel and in a single coup ends the dynasty of Omri and the worship of Baal in Samaria. He does not, however, remove Jeroboam’s golden calves."
   ],
   [
    "Jehoahaz",
    "2 Kgs 13:1",
    "17 years",
    "King of Israel, son of Jehu, under whose rule the Arameans oppress the land so harshly that only a handful of the army is left, crushed like dust at threshing. Then the king begs the Lord for help, and God gives the people a deliverer (2 Kgs 13:4-7)."
   ],
   [
    "Jehoash",
    "2 Kgs 13:10",
    "16 years",
    "King of Israel, son of Jehoahaz, who weeps over the dying Elisha, crying: “My father, my father! The chariots of Israel and its horsemen!” (2 Kgs 13:14); the prophet promises him three victories over Aram. He wins back the lost towns and defeats Amaziah, king of Judah."
   ],
   [
    "Jeroboam II",
    "2 Kgs 14:23",
    "41 years",
    "King of Israel, son of Joash, under whose 41-year reign the land enjoys its last flowering: the king restores the old borders (2 Kgs 14:25), and the wealth of the elite grows. It is then that the prophets Amos and Hosea rebuke the powerful for wronging the poor and call them to faithfulness."
   ],
   [
    "Zechariah",
    "2 Kgs 15:8",
    "6 months",
    "King of Israel, son of Jeroboam II and the last of the dynasty of Jehu, who after six months on the throne is killed in public in Shallum’s conspiracy. So the promise is fulfilled that Jehu’s line would reign to the fourth generation (2 Kgs 15:12)."
   ],
   [
    "Shallum",
    "2 Kgs 15:13",
    "1 month",
    "King of Israel, son of Jabesh, who takes the throne by murder and loses it after a month, killed in Samaria by Menahem. His brief rule shows how unstable the kingdom had become in its last years before the fall."
   ],
   [
    "Menahem",
    "2 Kgs 15:17",
    "10 years",
    "King of Israel, son of Gadi, who during his 10-year reign buys peace from Assyria: he pays King Pul a thousand talents of silver, exacted from the wealthy men of Israel (2 Kgs 15:19-20). From then on the shadow of Assyrian power lies over the whole kingdom."
   ],
   [
    "Pekahiah",
    "2 Kgs 15:23",
    "2 years",
    "King of Israel, son of Menahem, who after two years on the throne is killed in his palace in Samaria by his own officer Pekah and fifty men of Gilead. Yet another coup brings the end of the North closer."
   ],
   [
    "Pekah",
    "2 Kgs 15:27",
    "20 years",
    "King of Israel, son of Remaliah, who in alliance with Aram marches on Jerusalem to force Judah into a joint struggle against Assyria; it is then that Isaiah speaks the prophecy of Immanuel. Assyria responds by seizing Galilee and Gilead (2 Kgs 15:29), and Pekah dies in Hoshea’s conspiracy."
   ],
   [
    "Hoshea",
    "2 Kgs 17:1",
    "9 years",
    "The last king of Israel, son of Elah, who pays tribute to Assyria, then seeks help from Egypt and withholds the tribute. In reprisal the Assyrians besiege Samaria for three years and take it in 722 BC, ending the story of the northern kingdom (2 Kgs 17:4-6)."
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
    kkk: 'KKK – Katechizm Kościoła Katolickiego',
    alivePat: 'Żyjący patriarchowie', aliveNat: 'Istniejące narody',
    natCain: 'Od Kaina do potopu.', beforeSeam: 'Przed 2000 p.n.e.', range: (a, b) => a + ' – ' + b, present: 'dziś',
    primeval: 'czasach Rdz 1–11',
    age: (name, n) => name + ', wiek ' + n,
    hub: ['Od stworzenia do potopu', 'Od potopu do Abrahama', 'Patriarchowie', 'Wyjście i sędziowie', 'Królestwo Izraela', 'Izrael i Juda', 'Oczekiwanie na Mesjasza', 'Życie Jezusa', 'Czas Kościoła'],
    legend: { patLine: 'Długość życia podana w Piśmie' },
    science: 'Rozwój nauki', scienceRef: 'KKK 159; Mdr 11,20',
    scienceBody: 'Nowożytna nauka dojrzewała w murach uniwersytetów chrześcijańskiej Europy, poczynając od Bolonii w 1088 r., i czerpała zarówno z mądrości Greków, jak i z dorobku uczonych świata islamu, Indii i Chin. U jej źródeł leży przekonanie wiary, że świat, jako dzieło stwórczego Logosu, nosi w sobie ład dostępny ludzkiemu rozumowi, a będąc owocem wolnego daru, nie wynika z żadnej konieczności. Jego praw nie sposób więc wywieść z samej spekulacji, trzeba je cierpliwie odczytywać w doświadczeniu. Toteż wśród badaczy natury nie brak ludzi Kościoła, od Alberta Wielkiego i Kopernika po Mendla i Lemaître’a, świadków przekonania, że prawda odkrywana w przyrodzie i prawda objawiona mają jedno Źródło.',
    laneTips: { events: 'Najważniejsze wydarzenia, zilustrowane obrazem lub filmem.',
      figures: 'Ważne postaci, umieszczone w roku, z którego są najbardziej znane.',
      patriarchs: 'Patriarchowie i inne osoby, których lata życia podaje Pismo Święte.',
      kings: 'Okresy panowania królów Judy (górny pas) i Izraela (dolny pas).',
      alive: 'Ile osób i narodów z wykresu istnieje w danym roku. Linia ciągła: osoby i narody razem; linia kropkowana: tylko narody.',
      nations: 'Narody i Kościoły od chwili ich powstania.' },
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
      periods: 'Okresy', aliveIn: 'Współcześni w', events: 'Wydarzenia', fullChart: 'Cały wykres',
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
    kkk: 'CCC – Catechism of the Catholic Church',
    alivePat: 'Patriarchs alive', aliveNat: 'Nations alive',
    natCain: 'From Cain to the Flood.', beforeSeam: 'Before 2000 BC', range: (a, b) => a + ' to ' + b, present: 'present',
    primeval: 'the time of Genesis 1–11',
    age: (name, n) => name + ', age ' + n,
    hub: ['From creation to the flood', 'From the flood to Abraham', 'Patriarchs', 'Exodus and judges', 'Kingdom of Israel', 'Israel and Judah', 'Awaiting the Messiah', 'Life of Jesus', 'Church age'],
    legend: { patLine: 'Lifespans given in Scripture' },
    science: 'Growth of science', scienceRef: 'CCC 159; Wis 11:20',
    scienceBody: 'Modern science matured within the universities of Christian Europe, beginning with Bologna in 1088, and drew both on the wisdom of the Greeks and on the achievements of scholars in the Islamic world, India and China. At its roots lies a conviction of faith: the world, as the work of the creative Logos, bears an order open to human reason, yet as the fruit of a free gift it follows from no necessity. Its laws therefore cannot be deduced by speculation alone but must be patiently read in experience. Thus among the students of nature there have been many men of the Church, from Albert the Great and Copernicus to Mendel and Lemaître, witnesses to the conviction that the truth found in nature and the truth revealed share a single Source.',
    laneTips: { events: 'Key events, each with a picture or film.', figures: 'Key people, at the year of their main deed.',
      patriarchs: 'People whose lifespan the Bible gives.', kings: 'Reigns of the kings: Judah (top) and Israel (bottom).',
      alive: 'How many people and nations on the chart exist in a given year. Solid line: people and nations together; dotted line: nations only.', nations: 'Nations and Churches, from their beginning.' },
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
      periods: 'Periods', aliveIn: 'Contemporaries in', events: 'Events', fullChart: 'Full chart',
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
