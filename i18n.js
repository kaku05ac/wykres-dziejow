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
    "Pierwszy człowiek, w którym Biblia widzi cały rodzaj ludzki: jego hebrajskie imię oznacza zarazem „człowieka” i „ludzkość”. Umieszczony przez Boga w ogrodzie Eden, przez nieposłuszeństwo traci raj, lecz nie traci nadziei, bo Bóg już wtedy zapowiada zwycięstwo nad złem (Rdz 3,15). Chrześcijanie nazywają Chrystusa „nowym Adamem”, który otwiera ludziom drogę powrotu do Boga."
   ],
   [
    "Set",
    "Rdz 5,6-8",
    "Syn Adama i Ewy, urodzony po śmierci Abla jako nowy początek: Ewa przyjmuje go jako dar od Boga, który dał jej potomka w miejsce utraconego syna (Rdz 4,25). Od niego wywodzi się ród, z którego przyjdą Noe i Abraham, a św. Łukasz wymienia go w rodowodzie Jezusa."
   ],
   [
    "Enosz",
    "Rdz 5,9-11",
    "Syn Seta, którego imię jest poetyckim hebrajskim słowem na „człowieka”, tym samym, które brzmi w Psalmie: „Czym jest człowiek, że o nim pamiętasz?” (Ps 8,5). Przy jego narodzinach Biblia zapisuje, że „wtedy zaczęto wzywać imienia Pana” (Rdz 4,26). To pierwsza wzmianka o ludziach, którzy zwracają się do Boga w modlitwie."
   ],
   [
    "Kenan",
    "Rdz 5,12-14",
    "W rodowodzie od Adama do Noego każde imię jest ogniwem nici, której Bóg nie pozwala zerwać: Kenan, syn Enosza, przekazuje życie i pamięć o Stwórcy kolejnemu pokoleniu. Biblia nie zapisuje jego czynów, lecz św. Łukasz umieszcza go w rodowodzie Jezusa (Łk 3,37)."
   ],
   [
    "Mahalalel",
    "Rdz 5,15-17",
    "Syn Kenana, którego imię brzmi jak modlitwa: „chwała Boga”. Należy do pokoleń, którym Biblia przypisuje bardzo długie życie; w starożytnych tekstach był to znak Bożego błogosławieństwa i czcigodnej dawności rodu."
   ],
   [
    "Jered",
    "Rdz 5,18-20",
    "Żyje 962 lata, dłużej niż ktokolwiek w Biblii poza swoim wnukiem Metuszelachem. Najpiękniejszym owocem jego długiego życia jest jednak syn Henoch, o którym Pismo mówi, że „żył w przyjaźni z Bogiem” (Rdz 5,22)."
   ],
   [
    "Henoch",
    "Rdz 5,21-24",
    "Siódmy patriarcha od Adama, o którym Pismo mówi najpiękniej, jak można powiedzieć o człowieku: „żył w przyjaźni z Bogiem, a następnie zniknął, bo zabrał go Bóg” (Rdz 5,24). Jako jedyny w tym rodowodzie nie umiera zwyczajnie, a List do Hebrajczyków stawia go wśród wzorów wiary, która podoba się Bogu (Hbr 11,5)."
   ],
   [
    "Metuszelach",
    "Rdz 5,25-27",
    "Syn Henocha i dziadek Noego, najdłużej żyjący człowiek w Biblii, bo żył 969 lat (Rdz 5,27); stąd powiedzenie o „wieku Matuzalema”. Według liczb tekstu hebrajskiego jego życie dobiega końca w roku potopu, jakby razem z nim odchodziło ostatnie pokolenie dawnego świata."
   ],
   [
    "Lamek",
    "Rdz 5,28-31",
    "Syn Metuszelacha i ojciec Noego, który nadaje synowi imię znaczące „odpoczynek, pociecha”. Wyraża w nim nadzieję całego zmęczonego pokolenia: „Ten nas pocieszy w naszej pracy i w trudzie rąk naszych” (Rdz 5,29)."
   ],
   [
    "Noe",
    "Rdz 5,32; 9,28-29",
    "Sprawiedliwy w zepsutym pokoleniu, który z posłuszeństwem i ufnością wznosi arkę i ocala w niej rodzinę oraz wszelkie stworzenia. Po potopie Bóg zawiera z nim przymierze obejmujące całą ludzkość, a jego znakiem staje się tęcza. Dla chrześcijan arka jest obrazem Kościoła, który bezpiecznie niesie ludzi przez fale dziejów."
   ],
   [
    "Sem",
    "Rdz 11,10-11",
    "Najstarszy syn Noego, któremu ojciec udziela szczególnego błogosławieństwa (Rdz 9,26). Od jego imienia pochodzi nazwa Semitów, a przez jego potomków prowadzi linia obietnicy: do Abrahama, do narodu Izraela i, jak podaje Ewangelia, do samego Jezusa."
   ],
   [
    "Arpachszad",
    "Rdz 11,12-13",
    "Syn Sema, urodzony dwa lata po potopie, pierwszy w rodowodzie, który przychodzi na świat na obmytej, odnowionej ziemi. Jego imię przetrwało w rodowodzie Jezusa (Łk 3,36)."
   ],
   [
    "Szelach",
    "Rdz 11,14-15",
    "Syn Arpachszada i ojciec Hebera, jedno z ogniw rodowodu prowadzącego do Abrahama. Grecki przekład Biblii, a za nim Ewangelia według św. Łukasza, umieszcza przed nim jeszcze jedno pokolenie, Kainama, którego nie zna tekst hebrajski (Łk 3,35-36)."
   ],
   [
    "Heber",
    "Rdz 11,16-17",
    "Syn Szelacha, od którego imienia tradycja wywodzi nazwę „Hebrajczycy”. Pierwszym, kogo Biblia tak nazywa, jest jego daleki potomek, „Abram Hebrajczyk” (Rdz 14,13)."
   ],
   [
    "Peleg",
    "Rdz 11,18-19",
    "Syn Hebera, którego imię znaczy „podział”, bo „za jego dni ziemia została podzielona” (Rdz 10,25), a ludzie rozeszli się po świecie. Od jego pokolenia długość życia patriarchów wyraźnie maleje, jakby dawny świat ustępował miejsca dziejom bliższym nam."
   ],
   [
    "Reu",
    "Rdz 11,20-21",
    "Przychodzi na świat w czasie, gdy ludzkość rozchodzi się po ziemi; jego ojciec, Peleg, nosi imię znaczące „podział”. Biblia nie opowiada o jego życiu, lecz przechowuje jego imię w rodowodzie, który przez Abrahama prowadzi do Jezusa (Łk 3,35)."
   ],
   [
    "Serug",
    "Rdz 11,22-23",
    "Pradziad Abrahama, którego imię brzmi jak nazwa starożytnego miasta Sarugi w północnej Mezopotamii, w krainie, z której wyszła rodzina Abrahama. Tak w samych imionach rodowodu przetrwała pamięć o ojczystych stronach patriarchów."
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
    "Żona Abrahama i matka ludu obietnicy, której Bóg zmienia imię z Saraj na Sara, „księżna – pani wszystkich”, zapowiadając, że stanie się matką ludów, a królowie będą jej potomkami (Rdz 17,16). Gdy po latach oczekiwania w starości rodzi Izaaka, jej niedowierzanie przemienia się w radość (Rdz 21,6). Jest jedyną kobietą w Biblii, której wiek przy śmierci zostaje podany: 127 lat (Rdz 23,1)."
   ],
   [
    "Izmael",
    "Rdz 25,17",
    "Pierworodny syn Abrahama i Hagar, egipskiej służącej Sary, którego imię znaczy „Bóg słyszy”. Gdy Hagar z chłopcem błąka się po pustyni, Bóg słyszy jego płacz, otwiera jej oczy na studnię i obiecuje, że z Izmaela wyprowadzi wielki naród. Razem z Izaakiem grzebie ojca, a tradycja arabska uważa go za swojego przodka."
   ],
   [
    "Izaak",
    "Rdz 35,28",
    "Syn obietnicy, którego Abraham i Sara doczekali się w podeszłym wieku; jego imię wyraża radość, jaką narodziny dziecka sprawiły długo czekającym rodzicom (Rdz 21,6). Ocalony na górze Moria, gdy Bóg powstrzymał rękę ojca, poślubia Rebekę i zostaje ojcem bliźniąt, Ezawa i Jakuba. Bóg przedstawia się odtąd jako „Bóg Abrahama, Izaaka i Jakuba”."
   ],
   [
    "Jakub",
    "Rdz 47,28",
    "Syn Izaaka i Rebeki, młodszy z bliźniąt, którego droga wiedzie od podstępu do błogosławieństwa. W Betel śni o drabinie łączącej ziemię z niebem, a po nocnej walce nad potokiem Jabbok otrzymuje od Boga nowe imię, Izrael, które przejmie cały naród. Jego dwunastu synów daje początek dwunastu pokoleniom Izraela."
   ],
   [
    "Lewi",
    "Wj 6,16",
    "Trzeci syn Jakuba i Lei, od którego pochodzi pokolenie powołane do służby w przybytku, a później w świątyni; z niego wywodzą się Mojżesz i Aaron. Lewici nie otrzymują własnej ziemi, bo, jak mówi Pismo, „Pan jest jego dziedzictwem” (Pwt 10,9)."
   ],
   [
    "Józef",
    "Rdz 50,26",
    "Ukochany syn Jakuba, sprzedany przez zazdrosnych braci do Egiptu, którego droga prowadzi z więzienia na dwór faraona. Dzięki mądrości i darowi tłumaczenia snów zostaje zarządcą kraju i ratuje przed głodem Egipt oraz własną rodzinę. Braciom, którzy go skrzywdzili, przebacza słowami: „Wy zamierzaliście wyrządzić mi zło, Bóg jednak zamierzył to jako dobro” (Rdz 50,20)."
   ],
   [
    "Kehat",
    "Wj 6,18",
    "Syn Lewiego, który wraz z ojcem i dziadkiem Jakubem przybywa do Egiptu (Rdz 46,11). Jego potomkom, Kehatytom, powierzono najświętsze zadanie: w czasie wędrówki przez pustynię nieśli sprzęty przybytku, z Arką Przymierza na czele (Lb 4). Jest dziadkiem Mojżesza i Aarona."
   ],
   [
    "Amram",
    "Wj 6,20",
    "Ojciec Aarona, Miriam i Mojżesza, mąż Jokebed, która z miłości i odwagi ukryła małego Mojżesza przed rozkazem faraona, a potem powierzyła go wodom Nilu w koszyku z sitowia (Wj 2). Genealogia Księgi Wyjścia jest skrócona, więc między Kehatem a Amramem mogło upłynąć więcej pokoleń (Wj 6,20)."
   ],
   [
    "Aaron",
    "Lb 33,38-39",
    "Starszy brat Mojżesza i jego głos przed faraonem, ustanowiony przez Boga pierwszym arcykapłanem Izraela; jego potomkowie przez wieki sprawują kapłaństwo w świątyni. Umiera na górze Hor, a List do Hebrajczyków ukazuje Chrystusa jako doskonałego Arcykapłana, którego zapowiadało kapłaństwo Aarona."
   ],
   [
    "Mojżesz",
    "Pwt 34,7",
    "Przywódca i prawodawca Izraela, który jako niemowlę ocalał z wód Nilu i wychował się na dworze faraona, a przy płonącym krzewie usłyszał od Boga Jego imię. Prowadzi lud z niewoli ku wolności, a na górze Synaj otrzymuje Dziesięć Przykazań, fundament przymierza. Umiera na górze Nebo, oglądając z daleka Ziemię Obiecaną, a w Ewangelii ukazuje się obok Jezusa na górze Przemienienia."
   ],
   [
    "Jozue",
    "Joz 24,29",
    "Sługa i następca Mojżesza, który przeprowadza Izraela przez Jordan do Ziemi Obiecanej i rozdziela ją między pokolenia. Jego hebrajskie imię, Jehoszua, znaczy „Pan zbawia”, a w greckiej formie brzmi tak samo jak imię Jezusa. U kresu życia stawia lud przed wyborem i sam daje przykład: „Ja i mój dom służyć będziemy Panu” (Joz 24,15)."
   ],
   [
    "Heli",
    "1 Sm 4,15",
    "Kapłan w sanktuarium w Szilo, u którego dorasta mały Samuel. Gdy chłopiec nocą słyszy wołanie, stary kapłan rozpoznaje głos Boga i uczy go odpowiedzi, która stała się modlitwą wielu pokoleń: „Mów, Panie, bo sługa Twój słucha” (1 Sm 3,9)."
   ],
   [
    "Jojada",
    "2 Krn 24,15",
    "Kapłan w Jerozolimie, który z odwagą ratuje dynastię Dawida: ukrywa w świątyni małego Joasza przed królową Atalią, a po sześciu latach osadza go na tronie. Za dobro, które czynił w Izraelu, pochowano go w grobach królewskich (2 Krn 24,16)."
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
    "Jedna z najstarszych cywilizacji świata, rozkwitająca u stóp gór Zagros, w dzisiejszym Iranie, ze stolicą w Suzie. Biblia wywodzi jej lud od Elama, syna Sema (Rdz 10,22). Echo tego dawnego narodu brzmi jeszcze w dniu Zesłania Ducha Świętego, gdy Elamici słyszą apostołów głoszących „wielkie dzieła Boże” we własnym języku (Dz 2,9-11)."
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
    "Ludy pustyń i oaz Półwyspu Arabskiego, kupcy prowadzący karawany z kadzidłem i wonnościami. Tradycja umieszcza tu krainę Saby, z której królowa przybyła, by przekonać się o mądrości Salomona. W dniu Zesłania Ducha Świętego także Arabowie słyszą apostołów głoszących we własnym języku wielkie dzieła Boże (Dz 2,11)."
   ],
   [
    "Izrael",
    "Joz 1; 2 Krl 25",
    "Naród wywodzący się od dwunastu synów Jakuba, który po wyjściu z Egiptu osiedlił się w Kanaanie, a za Dawida i Salomona stworzył królestwo ze stolicą w Jerozolimie. Z tego narodu pochodzi Jezus, a św. Jan Paweł II nazwał Żydów „starszymi braćmi” chrześcijan w wierze."
   ],
   [
    "Naród żydowski",
    "Ezd 1; Rz 11,1-2",
    "Wygnanie babilońskie nie kończy dziejów Izraela, lecz je odmienia: wokół Pism, modlitwy i synagogi kształtuje się wiara, która przetrwa wszystkie burze historii. Po zburzeniu drugiej świątyni przez Rzymian w 70 r. Żydzi rozpraszają się po świecie i przez blisko dwa tysiące lat diaspory pozostają wierni Torze mimo prześladowań, aż po Zagładę, a w 1948 r. powstaje współczesne państwo Izrael. Kościół, za św. Pawłem, pamięta, że „dary łaski i wezwanie Boże są nieodwołalne” (Rz 11,29)."
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
    "Medowie",
    "Rdz 10,2; Dn 6,9; Mt 2,1",
    "Lud z gór dzisiejszego Iranu, w którym tradycja widzi potomków Madaja, syna Jafeta (Rdz 10,2). To ich „nieodwołalne prawo Medów i Persów” (Dn 6,9) sprawiło, że prorok Daniel trafił do jaskini lwów. Herodot wymienia wśród Medów plemię magów, kapłanów i znawców gwiazd, a tym samym słowem Ewangelia nazywa Mędrców ze Wschodu, którzy przyszli pokłonić się Jezusowi (Mt 2,1)."
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
    "Zbudowany na Piotrze, „opoce” (Mt 16,18), od dnia Zesłania Ducha Świętego wychodzi do wszystkich narodów; dlatego nazywa się katolickim, czyli po grecku „powszechnym”. Z małej wspólnoty dwunastu apostołów wyrósł przez dwa tysiące lat w rodzinę ponad 1,4 miliarda wiernych wszystkich języków i kultur, którą prowadzi papież, następca św. Piotra."
   ],
   [
    "Prawosławie",
    "",
    "Kościoły chrześcijańskiego Wschodu, które po rozłamie z 1054 r. zachowały wiarę pierwszych soborów, sakramenty i sukcesję apostolską. Ich serce bije w uroczystej liturgii, w modlitwie przed ikonami i w tradycji mnichów, od pustyń Egiptu po górę Athos. Kościół katolicki uznaje ich sakramenty i kapłaństwo, a od 1965 r., gdy zdjęto wzajemne ekskomuniki, szuka z nimi pełnej jedności."
   ],
   [
    "Protestantyzm",
    "",
    "Wspólnoty wyrosłe z reformacji XVI wieku, luterańskie i kalwińskie, a później liczne Kościoły ewangelikalne, które na pierwszym miejscu stawiają Pismo Święte i zbawienie z łaski przez wiarę. Wniosły w chrześcijaństwo umiłowanie Biblii czytanej w ojczystym języku i bogactwo pieśni. Kościół katolicki uznaje ochrzczonych protestantów za braci w Chrystusie i prowadzi z nimi dialog ekumeniczny."
   ]
  ],
  "EV": [
   [
    "Stworzenie świata",
    "Rdz 1,1",
    "„Na początku Bóg stworzył niebo i ziemię” (Rdz 1,1): tak otwiera się Biblia, uroczystym hymnem, który wyznaje, że wszystko, co istnieje, pochodzi od Boga i jest dobre. W rytmie sześciu dni i siódmego dnia odpoczynku wyłania się ład świata, a jego ukoronowaniem jest człowiek, mężczyzna i niewiasta, stworzony na obraz Boga i powołany do troski o świat. Kościół czyta ten tekst nie jako opis przyrodniczy, lecz jako słowo o Stwórcy i godności człowieka (KKK 337–343).",
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
    "Zjednoczona jednym językiem ludzkość postanawia zbudować miasto i wieżę „sięgającą nieba”, by uczynić sobie imię bez Boga. Bóg miesza ich mowę i budowa się urywa: jedność zbudowana na pysze rozpada się, a ludzie rozchodzą się po świecie. Dopiero w dniu Zesłania Ducha Świętego ludzie wielu języków znów się rozumieją, słysząc apostołów, każdy we własnej mowie.",
    "Bez daty"
   ],
   [
    "Powołanie Abrahama",
    "Rdz 12,1-4",
    "„Wyjdź z twojej ziemi rodzinnej… do kraju, który ci ukażę” (Rdz 12,1): tymi słowami zaczyna się historia wiary jednego człowieka i całego ludu. Siedemdziesięciopięcioletni Abram opuszcza Charan i rusza do Kanaanu, ufając jedynie obietnicy, że przez niego będą błogosławione wszystkie narody. Wiara, która wyrusza w drogę, nie znając jej celu (Hbr 11,8), czyni go ojcem wszystkich wierzących.",
    null
   ],
   [
    "Ofiarowanie Izaaka",
    "Rdz 22",
    "Najtrudniejsza próba wiary Abrahama: Bóg każe mu złożyć w ofierze ukochanego syna Izaaka na górze Moria. Gdy ojciec podnosi rękę, anioł ją powstrzymuje, a w zaroślach pojawia się baran, który zajmuje miejsce chłopca; Abraham nazywa to miejsce „Pan widzi” (Rdz 22,14). Chrześcijanie widzą w Izaaku, niosącym drwa na ofiarę, zapowiedź Chrystusa niosącego krzyż, a Kościół czyta tę historię w Wigilię Paschalną.",
    null
   ],
   [
    "Wyjście z Egiptu",
    "Wj 12",
    "Noc, w której rodzi się naród: po latach niewoli w Egipcie Izraelici pod wodzą Mojżesza spożywają w pośpiechu baranka paschalnego, a krew na odrzwiach chroni ich domy. Potem przechodzą suchą stopą przez morze, ku wolności i ku górze Synaj, gdzie Bóg zawrze z nimi przymierze. Żydzi co roku wspominają tę noc w święto Paschy, a chrześcijanie widzą w niej zapowiedź Paschy Chrystusa, który przez śmierć i zmartwychwstanie wyprowadza człowieka z niewoli grzechu.",
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
    "„Nikt nie ma większej miłości od tej, gdy ktoś życie swoje oddaje za przyjaciół swoich” (J 15,13): w Jerozolimie Jezus umiera na krzyżu, a trzeciego dnia pusty grób ogłasza, że miłość jest mocniejsza od śmierci. Pięćdziesiąt dni później Duch Święty zstępuje na apostołów zgromadzonych z Maryją. Piotr, który niedawno trzykrotnie się zaparł, bez lęku głosi Zmartwychwstałego, a tego dnia chrzest przyjmuje około trzech tysięcy osób. Tak rodzi się Kościół.",
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
    "W 1517 r. w Wittenberdze augustianin Marcin Luter występuje z 95 tezami przeciw nadużyciom przy odpustach, a spór uczonych przeradza się w burzę, która na zawsze odmienia oblicze Zachodu. Dzięki prasie drukarskiej jego pisma w ciągu kilku tygodni obiegają Niemcy, a książęta stają po stronie reformatorów; pokój augsburski z 1555 r. przypieczętowuje podział, oddając władcom prawo wyboru wyznania dla swoich ziem. Kościół odpowiada odnową od wewnątrz: Sobór Trydencki porządkuje naukę i życie duchowieństwa.",
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
    "Pierwszy człowiek, w którym Biblia widzi cały rodzaj ludzki: jego hebrajskie imię oznacza zarazem „człowieka” i „ludzkość”. Umieszczony przez Boga w ogrodzie Eden, przez nieposłuszeństwo traci raj, lecz nie traci nadziei, bo Bóg już wtedy zapowiada zwycięstwo nad złem (Rdz 3,15). Chrześcijanie nazywają Chrystusa „nowym Adamem”, który otwiera ludziom drogę powrotu do Boga.",
    "Rdz 1-3"
   ],
   [
    "Henoch",
    "Chodził z Bogiem",
    "Siódmy patriarcha od Adama, o którym Pismo mówi najpiękniej, jak można powiedzieć o człowieku: „żył w przyjaźni z Bogiem, a następnie zniknął, bo zabrał go Bóg” (Rdz 5,24). Jako jedyny w tym rodowodzie nie umiera zwyczajnie, a List do Hebrajczyków stawia go wśród wzorów wiary, która podoba się Bogu (Hbr 11,5).",
    "Rdz 5,24"
   ],
   [
    "Noe",
    "Budowniczy arki",
    "Sprawiedliwy w zepsutym pokoleniu, który z posłuszeństwem i ufnością wznosi arkę i ocala w niej rodzinę oraz wszelkie stworzenia. Po potopie Bóg zawiera z nim przymierze obejmujące całą ludzkość, a jego znakiem staje się tęcza. Dla chrześcijan arka jest obrazem Kościoła, który bezpiecznie niesie ludzi przez fale dziejów.",
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
    "Syn Izaaka i Rebeki, młodszy z bliźniąt, którego droga wiedzie od podstępu do błogosławieństwa. W Betel śni o drabinie łączącej ziemię z niebem, a po nocnej walce nad potokiem Jabbok otrzymuje od Boga nowe imię, Izrael, które przejmie cały naród. Jego dwunastu synów daje początek dwunastu pokoleniom Izraela.",
    "Rdz 25-50"
   ],
   [
    "Józef",
    "Zarządca Egiptu",
    "Ukochany syn Jakuba, sprzedany przez zazdrosnych braci do Egiptu, którego droga prowadzi z więzienia na dwór faraona. Dzięki mądrości i darowi tłumaczenia snów zostaje zarządcą kraju i ratuje przed głodem Egipt oraz własną rodzinę. Braciom, którzy go skrzywdzili, przebacza słowami: „Wy zamierzaliście wyrządzić mi zło, Bóg jednak zamierzył to jako dobro” (Rdz 50,20).",
    "Rdz 37-50"
   ],
   [
    "Mojżesz",
    "Prawodawca",
    "Przywódca i prawodawca Izraela, który jako niemowlę ocalał z wód Nilu i wychował się na dworze faraona, a przy płonącym krzewie usłyszał od Boga Jego imię. Prowadzi lud z niewoli ku wolności, a na górze Synaj otrzymuje Dziesięć Przykazań, fundament przymierza. Umiera na górze Nebo, oglądając z daleka Ziemię Obiecaną, a w Ewangelii ukazuje się obok Jezusa na górze Przemienienia.",
    "Wj 3-20"
   ],
   [
    "Jozue",
    "Zdobywca Kanaanu",
    "Sługa i następca Mojżesza, który przeprowadza Izraela przez Jordan do Ziemi Obiecanej i rozdziela ją między pokolenia. Jego hebrajskie imię, Jehoszua, znaczy „Pan zbawia”, a w greckiej formie brzmi tak samo jak imię Jezusa. U kresu życia stawia lud przed wyborem i sam daje przykład: „Ja i mój dom służyć będziemy Panu” (Joz 24,15).",
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
    "Najmłodszy syn Jessego z Betlejem, pasterz wybrany przez Boga, który „patrzy na serce” (1 Sm 16,7). Pokonuje Goliata, zostaje królem Izraela i czyni Jerozolimę stolicą. Upada w grzechu, lecz umie żałować, a tradycja przypisuje mu wiele psalmów, w tym psalm skruchy, Miserere (Ps 51). Bóg obiecuje, że jego dynastia przetrwa na wieki, dlatego Jezus nazywany jest „Synem Dawida”.",
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
    "Ognisty prorok Izraela, który na górze Karmel ukazuje moc prawdziwego Boga wobec proroków Baala. Na Horebie odkrywa jednak, że Bóg nie przychodzi w wichrze, trzęsieniu ziemi ani w ogniu, lecz w „szmerze łagodnego powiewu” (1 Krl 19,12). Uniesiony do nieba w wichrze, w Ewangelii ukazuje się obok Jezusa na górze Przemienienia.",
    "1 Krl 18"
   ],
   [
    "Izajasz",
    "Prorok",
    "Prorok z Jerozolimy, który w świątyni ogląda chwałę Pana i słyszy wołanie serafinów: „Święty, Święty, Święty” (Iz 6,3), powtarzane dziś w każdej Mszy. Zapowiada Emmanuela, którego pocznie Panna, i Sługę Pańskiego cierpiącego za grzechy innych, tak że św. Hieronim nazwał go raczej ewangelistą niż prorokiem.",
    "Iz 6,1"
   ],
   [
    "Ezechiasz",
    "Król Judy",
    "Król Judy, który po latach bałwochwalstwa swego ojca oczyszcza świątynię i przywraca obchody Paschy. Gdy wojska asyryjskie oblegają Jerozolimę, idzie za radą proroka Izajasza i zawierza miasto Bogu, a Jerozolima ocala.",
    "2 Krl 18-19"
   ],
   [
    "Daniel",
    "Prorok w Babilonie",
    "Młody Judejczyk uprowadzony do Babilonu, który na obcym dworze pozostaje wierny Bogu, nawet gdy czeka go jaskinia lwów, i wychodzi z niej nietknięty. W jego wizji pojawia się „ktoś podobny do Syna Człowieczego” (Dn 7,13); tym właśnie imieniem najczęściej nazywał siebie Jezus.",
    "Dn 1"
   ],
   [
    "Cyrus",
    "Król Persji",
    "Twórca perskiego imperium, który w 539 p.n.e. zdobywa Babilon i otwiera wygnańcom drogę do domu, pozwalając Żydom wrócić do Jerozolimy i odbudować świątynię. Księga Izajasza nazywa tego pogańskiego władcę „pomazańcem” Pana, narzędziem w ręku Boga, który prowadzi dzieje (Iz 45,1).",
    "Ezd 1"
   ],
   [
    "Estera",
    "Królowa Persji",
    "Młoda Żydówka, królowa Persji u boku króla Aswerusa, która staje przed wyborem, gdy jej ludowi grozi zagłada zaplanowana przez Hamana. Wbrew dworskiemu prawu, gotowa oddać życie, wchodzi nieproszona do króla i ocala swój naród. Na pamiątkę tego ocalenia Żydzi obchodzą radosne święto Purim.",
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
    "Syn Zachariasza i Elżbiety, krewny Jezusa i ostatni z proroków, który nad Jordanem wzywa do nawrócenia i chrzci, także samego Jezusa. Wskazuje na Niego słowami „Oto Baranek Boży” (J 1,29), powtarzanymi w każdej Mszy Świętej, i oddaje życie za wierność prawdzie.",
    "Łk 1"
   ],
   [
    "Jezus",
    "Chrystus",
    "„Tak Bóg umiłował świat, że Syna swego Jednorodzonego dał” (J 3,16): w Jezusie, Synu Bożym i Synu Maryi, Bóg staje się jednym z nas. Uzdrawia, przebacza, zasiada do stołu z grzesznikami i uczy modlitwy „Ojcze nasz”, a przez śmierć na krzyżu i zmartwychwstanie otwiera każdemu człowiekowi drogę do Boga.",
    "Mt 2; Łk 2"
   ],
   [
    "Piotr",
    "Apostoł",
    "Rybak z Galilei, któremu Jezus nadaje imię Kefas, czyli Skała, i na nim buduje swój Kościół (Mt 16,18). Po zmartwychwstaniu trzykrotnie słyszy: „Paś owce moje” (J 21,15-17), a od dnia Zesłania Ducha Świętego staje się pasterzem pierwszej wspólnoty, który ją umacnia, jednoczy i prowadzi. Życie oddaje jako męczennik w Rzymie, a jego następcami są papieże.",
    "Mt 16,18; J 21,15-17"
   ],
   [
    "Paweł",
    "Apostoł",
    "Żyd z Tarsu i uczeń faryzeuszów, który z prześladowcy chrześcijan, po spotkaniu ze zmartwychwstałym Jezusem pod Damaszkiem, staje się Apostołem Narodów. Jako misjonarz przemierza świat rzymski i zakłada wspólnoty od Azji Mniejszej po Grecję, a jako pierwszy wielki teolog Kościoła wykłada w listach tajemnicę Chrystusa, łaski i miłości (1 Kor 13). Życie oddaje jako męczennik w Rzymie.",
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
    "Prymas Polski, który przez ponad trzydzieści lat prowadzi Kościół przez czasy komunizmu, a uwięziony w latach 1953–1956, nie ugina się przed władzą. Wielką Nowenną przygotowuje naród do Tysiąclecia Chrztu Polski, a za niezłomność Polacy nazywają go Prymasem Tysiąclecia. W 2021 r. zostaje ogłoszony błogosławionym.",
    ""
   ],
   [
    "Św. Jan Paweł II",
    "Papież",
    "Karol Wojtyła z Wadowic, pierwszy papież Polak, który przez prawie 27 lat pontyfikatu niesie Ewangelię do ponad 120 krajów. Jego słowa z 1979 r. „Niech zstąpi Duch Twój! I odnowi oblicze ziemi. Tej ziemi!” dodały Polakom odwagi w drodze do wolności; od 2014 r. Kościół czci go jako świętego.",
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
    "Rzymski patrycjusz, który porzuca wysokie urzędy dla klasztoru, a jako papież w czasach głodu i zarazy staje się ojcem ubogich i opiekunem Rzymu. Porządkuje liturgię, wysyła misjonarzy do Anglii i nazywa siebie „sługą sług Bożych”. Od jego imienia pochodzi nazwa chorału gregoriańskiego, a Kościół czci go jako Doktora.",
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
    "Sułtan Egiptu i Syrii, który w 1187 r. odbija Jerozolimę z rąk krzyżowców. Nawet przeciwnicy cenili jego rycerskość, a w pokoju zawartym w 1192 r. z Ryszardem Lwie Serce pozwala chrześcijanom pielgrzymować do Jerozolimy.",
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
    "Papież epoki przemysłowej, który w encyklice „Rerum novarum” (1891) staje po stronie robotników, upominając się o ich godność, sprawiedliwą płacę i prawo do zrzeszania się. Tym dokumentem daje początek nowożytnej katolickiej nauce społecznej, a wiele encyklik poświęca różańcowi, dlatego nazywany jest papieżem różańca.",
    ""
   ],
   [
    "Sokrates",
    "Filozof",
    "Ateński myśliciel, który niczego nie spisał, a jednak zmienił bieg filozofii: w rozmowie, przez cierpliwe pytania, prowadzi rozmówców do poznania samych siebie i szukania prawdy o dobru. Skazany przez Ateńczyków na śmierć, wybiera wierność sumieniu zamiast ucieczki. Jego nauczanie przekazuje uczeń, Platon.",
    ""
   ],
   [
    "Platon",
    "Filozof",
    "Uczeń Sokratesa i założyciel Akademii w Atenach, który uczy, że ponad zmiennym światem zjawisk istnieje wieczna prawda, dobro i piękno, a dusza człowieka jest nieśmiertelna. Jego myśl stanie się dla Ojców Kościoła, zwłaszcza dla św. Augustyna, językiem mówienia o Bogu.",
    ""
   ],
   [
    "Arystoteles",
    "Filozof",
    "Uczeń Platona i wychowawca Aleksandra Wielkiego, założyciel Liceum, który porządkuje całą ówczesną wiedzę: tworzy logikę, etykę cnót i badanie przyrody, a rozumem dochodzi do Pierwszego Poruszyciela. Dzięki św. Tomaszowi z Akwinu staje się jednym z filarów myśli chrześcijańskiej.",
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
    "Najstarszy nieprzerwanie działający uniwersytet świata, który według tradycji powstał w 1088 r. i zasłynął studiami prawa rzymskiego i kanonicznego. Jego śladem, często ze szkół katedralnych i pod opieką papieży, rodzą się uniwersytety w Paryżu, Oksfordzie i Krakowie (1364): wspólnoty mistrzów i uczniów, w których rozkwitają teologia, prawo, medycyna i nauki o przyrodzie.",
    ""
   ]
  ],
  "CH_EV": [
   [
    "Sobór Nicejski I",
    "",
    "Po raz pierwszy w dziejach biskupi Wschodu i Zachodu zasiadają razem: w 325 r. zbierają się w Nicei, by rozstrzygnąć spór, który podzielił chrześcijan, czy Syn Boży jest prawdziwym Bogiem. Wobec nauki Ariusza wyznają, że Syn Boży jest „współistotny Ojcu”, „Bóg z Boga, Światłość ze Światłości”. To wyznanie, rozwinięte w Konstantynopolu, chrześcijanie Wschodu i Zachodu wspólnie odmawiają w Credo do dziś."
   ],
   [
    "Wielka schizma",
    "",
    "Chrześcijański Wschód i Zachód, greckie i łacińskie dziedzictwo jednej wiary, przez wieki oddalają się od siebie, aż w 1054 r. legaci papiescy i patriarcha Konstantynopola obkładają się wzajemnie ekskomuniką. Rozłam nie został jeszcze przezwyciężony, lecz od 1965 r., gdy Paweł VI i patriarcha Atenagoras oddali te ekskomuniki w niepamięć, papieże i patriarchowie wspólnie modlą się o pojednanie."
   ],
   [
    "Sobór Trydencki",
    "",
    "Przez osiemnaście lat, z przerwami, biskupi obradują w alpejskim Trydencie nad odpowiedzią na reformację. Sobór jasno wykłada naukę o łasce, sakramentach i Piśmie Świętym, a zarazem podejmuje odnowę od wewnątrz: zakłada seminaria dla przyszłych kapłanów, przygotowuje Katechizm Rzymski i mszał, który przez cztery stulecia jednoczy modlitwę Kościoła. Z tej odnowy wyrastają święci, jak Karol Boromeusz, i nowa fala misji."
   ],
   [
    "Sobór Watykański II",
    "",
    "Według przekazu św. Jan XXIII, zwołując sobór, mówił, że trzeba otworzyć okna Kościoła, by wpuścić świeże powietrze. W latach 1962–1965 ponad dwa tysiące biskupów odnawia liturgię, wprowadzając języki narodowe, przypomina, że każdy ochrzczony jest powołany do świętości, i otwiera Kościół na dialog z innymi chrześcijanami, religiami i światem współczesnym. Jego dokumenty, jak „Lumen gentium” i „Gaudium et spes”, kształtują życie Kościoła do dziś."
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
    "The first human being, in whom the Bible sees the whole human race: his Hebrew name means both “man” and “humankind”. Placed by God in the garden of Eden, he loses paradise through disobedience but not hope, for God already promises victory over evil (Gen 3:15). Christians call Christ the “new Adam”, who opens for people the way back to God."
   ],
   [
    "Seth",
    "Gen 5:6-8",
    "Son of Adam and Eve, born after Abel’s death as a new beginning: Eve receives him as a gift from God, who has given her offspring in place of the son she lost (Gen 4:25). From him comes the line that will lead to Noah and Abraham, and St Luke names him in the genealogy of Jesus."
   ],
   [
    "Enosh",
    "Gen 5:9-11",
    "Son of Seth, whose name is a poetic Hebrew word for “man”, the same that sounds in the Psalm: “What is man that you are mindful of him?” (Ps 8:4). At his birth the Bible records that “at that time people began to call upon the name of the Lord” (Gen 4:26). It is the first mention of people turning to God in prayer."
   ],
   [
    "Kenan",
    "Gen 5:12-14",
    "In the line from Adam to Noah every name is a link in a thread that God does not let break: Kenan, son of Enosh, passes on life and the memory of the Creator to the next generation. The Bible records none of his deeds, yet St Luke places him in the genealogy of Jesus (Luke 3:37)."
   ],
   [
    "Mahalalel",
    "Gen 5:15-17",
    "Son of Kenan, whose name sounds like a prayer: “praise of God”. He belongs to the generations to whom the Bible ascribes very long lives; in ancient texts this was a sign of God’s blessing and of a family’s venerable antiquity."
   ],
   [
    "Jared",
    "Gen 5:18-20",
    "He lives 962 years, longer than anyone in the Bible except his grandson Methuselah. Yet the finest fruit of his long life is his son Enoch, of whom Scripture says that he “walked with God” (Gen 5:22)."
   ],
   [
    "Enoch",
    "Gen 5:21-24",
    "The seventh patriarch from Adam, of whom Scripture says the most beautiful thing that can be said of a person: “he walked with God, and he was not, for God took him” (Gen 5:24). He alone in this line does not die an ordinary death, and the Letter to the Hebrews counts him among the models of a faith that pleases God (Heb 11:5)."
   ],
   [
    "Methuselah",
    "Gen 5:25-27",
    "Son of Enoch and grandfather of Noah, the longest-lived man in the Bible at 969 years (Gen 5:27); hence the saying “as old as Methuselah”. By the numbers of the Hebrew text his life ends in the year of the flood, as if the last generation of the old world were passing away with him."
   ],
   [
    "Lamech",
    "Gen 5:28-31",
    "Son of Methuselah and father of Noah, who gives his son a name meaning “rest, comfort”. In it he voices the hope of a whole weary generation: “Out of the ground that the Lord has cursed this one shall bring us relief from our work and from the painful toil of our hands” (Gen 5:29)."
   ],
   [
    "Noah",
    "Gen 5:32; 9:28-29",
    "A righteous man in a corrupt generation, who with obedience and trust builds the ark and saves in it his family and every kind of creature. After the flood God makes with him a covenant embracing all humanity, and its sign is the rainbow. For Christians the ark is an image of the Church, carrying people safely through the waves of history."
   ],
   [
    "Shem",
    "Gen 11:10-11",
    "The eldest son of Noah, to whom his father gives a special blessing (Gen 9:26). The name Semites comes from his, and through his descendants runs the line of the promise: to Abraham, to the people of Israel and, as the Gospel records, to Jesus himself."
   ],
   [
    "Arpachshad",
    "Gen 11:12-13",
    "Son of Shem, born two years after the flood, the first in the line to come into the world on a washed and renewed earth. His name lives on in the genealogy of Jesus (Luke 3:36)."
   ],
   [
    "Shelah",
    "Gen 11:14-15",
    "Son of Arpachshad and father of Eber, one of the links in the line that leads to Abraham. The Greek translation of the Bible, and after it the Gospel of Luke, places one more generation before him, Cainan, unknown to the Hebrew text (Luke 3:35-36)."
   ],
   [
    "Eber",
    "Gen 11:16-17",
    "Son of Shelah, from whose name tradition derives the word “Hebrews”. The first person the Bible calls by that name is his distant descendant, “Abram the Hebrew” (Gen 14:13)."
   ],
   [
    "Peleg",
    "Gen 11:18-19",
    "Son of Eber, whose name means “division”, because “in his days the earth was divided” (Gen 10:25) and people spread across the world. From his generation the lifespans of the patriarchs clearly shorten, as if the ancient world were giving way to a history closer to our own."
   ],
   [
    "Reu",
    "Gen 11:20-21",
    "He is born at a time when humanity is spreading out across the earth; his father, Peleg, bears a name meaning “division”. The Bible tells nothing of his life, but keeps his name in the genealogy that leads through Abraham to Jesus (Luke 3:35)."
   ],
   [
    "Serug",
    "Gen 11:22-23",
    "Great-grandfather of Abraham, whose name echoes the ancient town of Sarugi in northern Mesopotamia, in the region from which Abraham’s family came. So the very names of the genealogy preserve the memory of the patriarchs’ homeland."
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
    "Wife of Abraham and mother of the people of the promise, whom God renames from Sarai to Sarah, “princess – lady of all”, promising that she will become a mother of nations and that kings will come from her (Gen 17:16). When after years of waiting she bears Isaac in her old age, her disbelief turns into joy (Gen 21:6). She is the only woman in the Bible whose age at death is recorded: 127 years (Gen 23:1)."
   ],
   [
    "Ishmael",
    "Gen 25:17",
    "Abraham’s firstborn son by Hagar, Sarah’s Egyptian servant, whose name means “God hears”. When Hagar wanders in the desert with the boy, God hears his cry, opens her eyes to a well and promises to make of Ishmael a great nation. Together with Isaac he buries their father, and Arab tradition regards him as its ancestor."
   ],
   [
    "Isaac",
    "Gen 35:28",
    "The son of the promise, born to Abraham and Sarah in their old age; his name expresses the joy that the child’s birth brought to parents who had waited so long (Gen 21:6). Spared on Mount Moriah when God stayed his father’s hand, he marries Rebekah and becomes the father of twins, Esau and Jacob. From then on God names himself “the God of Abraham, Isaac and Jacob”."
   ],
   [
    "Jacob",
    "Gen 47:28",
    "Son of Isaac and Rebekah, the younger twin, whose path leads from cunning to blessing. At Bethel he dreams of a ladder joining earth and heaven, and after a night of wrestling by the Jabbok he receives from God a new name, Israel, which the whole nation will bear. His twelve sons are the fathers of the twelve tribes of Israel."
   ],
   [
    "Levi",
    "Ex 6:16",
    "Third son of Jacob and Leah, from whom comes the tribe called to serve in the tabernacle and later in the Temple; Moses and Aaron descend from it. The Levites receive no land of their own because, as Scripture says, “the Lord is his inheritance” (Deut 10:9)."
   ],
   [
    "Joseph",
    "Gen 50:26",
    "Jacob’s beloved son, sold into Egypt by his jealous brothers, whose path leads from prison to Pharaoh’s court. Through wisdom and the gift of interpreting dreams he becomes governor of the land and saves Egypt and his own family from famine. He forgives the brothers who wronged him with the words: “You meant evil against me, but God meant it for good” (Gen 50:20)."
   ],
   [
    "Kohath",
    "Ex 6:18",
    "Son of Levi, who comes to Egypt with his father and his grandfather Jacob (Gen 46:11). His descendants, the Kohathites, are entrusted with the holiest task: during the journey through the desert they carry the furnishings of the tabernacle, with the Ark of the Covenant at their head (Num 4). He is the grandfather of Moses and Aaron."
   ],
   [
    "Amram",
    "Ex 6:20",
    "Father of Aaron, Miriam and Moses, husband of Jochebed, who out of love and courage hid the infant Moses from Pharaoh’s decree and then entrusted him to the waters of the Nile in a basket of reeds (Exod 2). The genealogy in Exodus is abbreviated, so more generations may have passed between Kohath and Amram (Exod 6:20)."
   ],
   [
    "Aaron",
    "Num 33:38-39",
    "Elder brother of Moses and his voice before Pharaoh, appointed by God the first high priest of Israel; his descendants serve as priests in the Temple for centuries. He dies on Mount Hor, and the Letter to the Hebrews presents Christ as the perfect High Priest, foreshadowed by the priesthood of Aaron."
   ],
   [
    "Moses",
    "Deut 34:7",
    "Leader and lawgiver of Israel, who as a baby was saved from the waters of the Nile and raised at Pharaoh’s court, and at the burning bush heard God reveal his name. He leads the people from slavery to freedom, and on Mount Sinai receives the Ten Commandments, the foundation of the covenant. He dies on Mount Nebo, seeing the Promised Land from afar, and in the Gospel appears beside Jesus on the mount of the Transfiguration."
   ],
   [
    "Joshua",
    "Josh 24:29",
    "Servant and successor of Moses, who leads Israel across the Jordan into the Promised Land and divides it among the tribes. His Hebrew name, Yehoshua, means “the Lord saves”, and in Greek it is the same as the name of Jesus. At the end of his life he sets a choice before the people and gives the example himself: “As for me and my house, we will serve the Lord” (Josh 24:15)."
   ],
   [
    "Eli",
    "1 Sam 4:15",
    "Priest at the sanctuary of Shiloh, with whom the young Samuel grows up. When the boy hears a voice calling in the night, the old priest recognises the voice of God and teaches him the answer that has become the prayer of many generations: “Speak, Lord, for your servant is listening” (1 Sam 3:9)."
   ],
   [
    "Jehoiada",
    "2 Chr 24:15",
    "Priest in Jerusalem who courageously saves the dynasty of David: he hides the young Joash in the Temple from Queen Athaliah and after six years sets him on the throne. For the good he had done in Israel he was buried among the kings (2 Chr 24:16)."
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
    "The Jewish people",
    "Ezra 1; Rom 11:1-2",
    "The Babylonian exile does not end Israel’s story but transforms it: around the Scriptures, prayer and the synagogue a faith takes shape that will survive every storm of history. After the Romans destroy the Second Temple in 70, the Jews are scattered across the world and through nearly two thousand years of diaspora remain faithful to the Torah despite persecution, up to the Holocaust; in 1948 the modern State of Israel is founded. The Church, with St Paul, remembers that “the gifts and the call of God are irrevocable” (Rom 11:29)."
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
    "Medes",
    "Gen 10:2; Dan 6:8; Matt 2:1",
    "A people from the mountains of today’s Iran, in whom tradition sees the descendants of Madai, son of Japheth (Gen 10:2). It was their “law of the Medes and Persians, which cannot be revoked” (Dan 6:8) that sent the prophet Daniel into the lions’ den. Herodotus names among the Medes a tribe of magi, priests and stargazers, and with the very same word the Gospel names the Wise Men from the East who came to worship Jesus (Matt 2:1)."
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
    "Built on Peter, the “rock” (Matt 16:18), it has gone out to all nations since Pentecost, which is why it is called catholic, Greek for “universal”. From a small community of twelve apostles it has grown over two thousand years into a family of more than 1.4 billion faithful of every language and culture, led by the pope, the successor of St Peter."
   ],
   [
    "Orthodox Church",
    "",
    "The Churches of the Christian East, which after the division of 1054 kept the faith of the first councils, the sacraments and apostolic succession. Their heart beats in solemn liturgy, in prayer before icons and in the tradition of monks, from the deserts of Egypt to Mount Athos. The Catholic Church recognises their sacraments and priesthood, and since 1965, when the mutual excommunications were lifted, has sought full unity with them."
   ],
   [
    "Protestantism",
    "",
    "Communities that grew out of the sixteenth-century Reformation, Lutheran and Reformed, and later many evangelical churches, which put Holy Scripture and salvation by grace through faith first. They brought to Christianity a love of the Bible read in one’s own language and a wealth of hymns. The Catholic Church recognises baptised Protestants as brothers and sisters in Christ and pursues ecumenical dialogue with them."
   ]
  ],
  "EV": [
   [
    "Creation",
    "Gen 1:1",
    "“In the beginning God created the heavens and the earth” (Gen 1:1): so the Bible opens, with a solemn hymn proclaiming that everything that exists comes from God and is good. In the rhythm of six days and a seventh day of rest the order of the world unfolds, crowned by the human being, man and woman, made in God’s image and called to care for the world. The Church reads this text not as a scientific account but as a word about the Creator and the dignity of the human person (CCC 337–343).",
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
    "United by one language, humanity sets out to build a city and a tower “with its top in the heavens”, to make a name for itself without God. God confuses their speech and the building stops: a unity built on pride falls apart, and people scatter across the world. Only at Pentecost do people of many languages understand one another again, each hearing the apostles in their own tongue.",
    "Undated"
   ],
   [
    "Call of Abraham",
    "Gen 12:1-4",
    "“Go from your country… to the land that I will show you” (Gen 12:1): with these words begins the story of the faith of one man and of a whole people. At seventy-five, Abram leaves Haran and sets out for Canaan, trusting only in the promise that through him all nations will be blessed. A faith that sets out without knowing where it is going (Heb 11:8) makes him the father of all who believe.",
    null
   ],
   [
    "Binding of Isaac",
    "Gen 22",
    "The hardest test of Abraham’s faith: God tells him to offer his beloved son Isaac in sacrifice on Mount Moriah. As the father raises his hand, an angel stays it, and a ram caught in a thicket takes the boy’s place; Abraham names the place “The Lord will provide” (Gen 22:14). Christians see in Isaac, carrying the wood for the sacrifice, a foreshadowing of Christ carrying the cross, and the Church reads this story at the Easter Vigil.",
    null
   ],
   [
    "The Exodus",
    "Ex 12",
    "The night a nation is born: after years of slavery in Egypt, the Israelites under Moses eat the Passover lamb in haste, and the blood on their doorposts protects their homes. Then they cross the sea on dry ground, towards freedom and towards Mount Sinai, where God will make a covenant with them. Jews remember this night every year at Passover, and Christians see in it a foreshadowing of the Passover of Christ, who through his death and resurrection leads humanity out of the slavery of sin.",
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
    "“Greater love has no one than this, that someone lay down his life for his friends” (John 15:13): in Jerusalem Jesus dies on the cross, and on the third day the empty tomb proclaims that love is stronger than death. Fifty days later the Holy Spirit descends on the apostles gathered with Mary. Peter, who not long before had denied him three times, fearlessly proclaims the Risen One, and that day about three thousand people are baptised. So the Church is born.",
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
    "In 1517, in Wittenberg, the Augustinian friar Martin Luther comes forward with 95 theses against abuses in the sale of indulgences, and a scholars’ dispute grows into a storm that changes the face of the West for ever. Thanks to the printing press his writings spread across Germany within weeks, and princes take the reformers’ side; the Peace of Augsburg of 1555 seals the division, giving rulers the right to choose the faith of their lands. The Church answers with renewal from within: the Council of Trent sets doctrine and the life of the clergy in order.",
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
    "The first human being, in whom the Bible sees the whole human race: his Hebrew name means both “man” and “humankind”. Placed by God in the garden of Eden, he loses paradise through disobedience but not hope, for God already promises victory over evil (Gen 3:15). Christians call Christ the “new Adam”, who opens for people the way back to God.",
    "Gen 1-3"
   ],
   [
    "Enoch",
    "Walked with God",
    "The seventh patriarch from Adam, of whom Scripture says the most beautiful thing that can be said of a person: “he walked with God, and he was not, for God took him” (Gen 5:24). He alone in this line does not die an ordinary death, and the Letter to the Hebrews counts him among the models of a faith that pleases God (Heb 11:5).",
    "Gen 5:24"
   ],
   [
    "Noah",
    "Builder of the ark",
    "A righteous man in a corrupt generation, who with obedience and trust builds the ark and saves in it his family and every kind of creature. After the flood God makes with him a covenant embracing all humanity, and its sign is the rainbow. For Christians the ark is an image of the Church, carrying people safely through the waves of history.",
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
    "Son of Isaac and Rebekah, the younger twin, whose path leads from cunning to blessing. At Bethel he dreams of a ladder joining earth and heaven, and after a night of wrestling by the Jabbok he receives from God a new name, Israel, which the whole nation will bear. His twelve sons are the fathers of the twelve tribes of Israel.",
    "Gen 25-50"
   ],
   [
    "Joseph",
    "Ruler in Egypt",
    "Jacob’s beloved son, sold into Egypt by his jealous brothers, whose path leads from prison to Pharaoh’s court. Through wisdom and the gift of interpreting dreams he becomes governor of the land and saves Egypt and his own family from famine. He forgives the brothers who wronged him with the words: “You meant evil against me, but God meant it for good” (Gen 50:20).",
    "Gen 37-50"
   ],
   [
    "Moses",
    "Lawgiver",
    "Leader and lawgiver of Israel, who as a baby was saved from the waters of the Nile and raised at Pharaoh’s court, and at the burning bush heard God reveal his name. He leads the people from slavery to freedom, and on Mount Sinai receives the Ten Commandments, the foundation of the covenant. He dies on Mount Nebo, seeing the Promised Land from afar, and in the Gospel appears beside Jesus on the mount of the Transfiguration.",
    "Ex 3-20"
   ],
   [
    "Joshua",
    "Conqueror of Canaan",
    "Servant and successor of Moses, who leads Israel across the Jordan into the Promised Land and divides it among the tribes. His Hebrew name, Yehoshua, means “the Lord saves”, and in Greek it is the same as the name of Jesus. At the end of his life he sets a choice before the people and gives the example himself: “As for me and my house, we will serve the Lord” (Josh 24:15).",
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
    "The youngest son of Jesse of Bethlehem, a shepherd chosen by God, who “looks on the heart” (1 Sam 16:7). He defeats Goliath, becomes king of Israel and makes Jerusalem his capital. He falls into sin but knows how to repent, and tradition ascribes many psalms to him, among them the psalm of contrition, the Miserere (Ps 51). God promises that his dynasty will endure for ever, which is why Jesus is called the “Son of David”.",
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
    "Israel’s fiery prophet, who on Mount Carmel shows the power of the true God before the prophets of Baal. Yet on Horeb he discovers that God comes not in the wind, the earthquake or the fire, but in “a still small voice” (1 Kgs 19:12). Taken up to heaven in a whirlwind, he appears in the Gospel beside Jesus on the mount of the Transfiguration.",
    "1 Kgs 18"
   ],
   [
    "Isaiah",
    "Prophet",
    "Prophet of Jerusalem, who in the Temple beholds the glory of the Lord and hears the seraphim crying “Holy, holy, holy” (Isa 6:3), words repeated today at every Mass. He foretells Immanuel, to be conceived by a virgin, and the Servant of the Lord suffering for the sins of others, so that St Jerome called him an evangelist rather than a prophet.",
    "Isa 6:1"
   ],
   [
    "Hezekiah",
    "King of Judah",
    "King of Judah, who after years of his father’s idolatry cleanses the Temple and restores the Passover. When the Assyrian army besieges Jerusalem, he follows the counsel of the prophet Isaiah and entrusts the city to God, and Jerusalem is saved.",
    "2 Kgs 18-19"
   ],
   [
    "Daniel",
    "Prophet in Babylon",
    "A young man of Judah carried off to Babylon, who at a foreign court stays faithful to God even when the lions’ den awaits him, and comes out unharmed. In his vision appears “one like a son of man” (Dan 7:13); this is the very name Jesus most often used for himself.",
    "Dan 1"
   ],
   [
    "Cyrus",
    "King of Persia",
    "Founder of the Persian empire, who in 539 BC takes Babylon and opens the way home for the exiles, allowing the Jews to return to Jerusalem and rebuild the Temple. The Book of Isaiah calls this pagan ruler the Lord’s “anointed”, an instrument in the hand of the God who guides history (Isa 45:1).",
    "Ezra 1"
   ],
   [
    "Esther",
    "Queen of Persia",
    "A young Jewish woman, queen of Persia beside King Ahasuerus, who faces a choice when her people are threatened with the destruction plotted by Haman. Against the law of the court, ready to give her life, she goes unbidden to the king and saves her nation. In memory of this deliverance Jews celebrate the joyful feast of Purim.",
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
    "Son of Zechariah and Elizabeth, kinsman of Jesus and the last of the prophets, who by the Jordan calls people to repentance and baptises, Jesus himself among them. He points to him with the words “Behold, the Lamb of God” (John 1:29), repeated at every Mass, and gives his life for his fidelity to the truth.",
    "Luke 1"
   ],
   [
    "Jesus",
    "Christ",
    "“For God so loved the world that he gave his only Son” (John 3:16): in Jesus, Son of God and son of Mary, God becomes one of us. He heals, forgives, sits at table with sinners and teaches the Our Father, and through his death on the cross and his resurrection opens the way to God for every person.",
    "Matt 2; Luke 2"
   ],
   [
    "Peter",
    "Apostle",
    "A fisherman from Galilee whom Jesus names Cephas, the Rock, and on whom he builds his Church (Matt 16:18). After the resurrection he hears three times, “Feed my sheep” (John 21:15-17), and from Pentecost on he is the shepherd of the first community, strengthening, uniting and leading it. He gives his life as a martyr in Rome, and the popes are his successors.",
    "Matt 16:18; John 21:15-17"
   ],
   [
    "Paul",
    "Apostle",
    "A Jew from Tarsus and a disciple of the Pharisees who, after meeting the risen Jesus near Damascus, turns from persecutor of Christians into the Apostle to the Nations. As a missionary he travels the Roman world, founding communities from Asia Minor to Greece, and as the Church’s first great theologian he sets out in his letters the mystery of Christ, of grace and of love (1 Cor 13). He gives his life as a martyr in Rome.",
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
    "Primate of Poland, who for more than thirty years leads the Church through the communist era and, imprisoned from 1953 to 1956, does not bow to the regime. Through the Great Novena he prepares the nation for the Millennium of Poland’s Baptism, and for his steadfastness Poles call him the Primate of the Millennium. In 2021 he is declared blessed.",
    ""
   ],
   [
    "St John Paul II",
    "Pope",
    "Karol Wojtyła of Wadowice, the first Polish pope, who over a pontificate of almost 27 years carries the Gospel to more than 120 countries. His words of 1979, “Let your Spirit descend and renew the face of the earth. This land!”, gave Poles courage on the road to freedom; since 2014 the Church has honoured him as a saint.",
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
    "A Roman patrician who gives up high office for the monastery and, as pope in a time of famine and plague, becomes a father to the poor and protector of Rome. He orders the liturgy, sends missionaries to England and calls himself “servant of the servants of God”. Gregorian chant takes its name from him, and the Church honours him as a Doctor.",
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
    "Sultan of Egypt and Syria, who in 1187 retakes Jerusalem from the crusaders. Even his enemies admired his chivalry, and in the peace made with Richard the Lionheart in 1192 he allows Christians to go on pilgrimage to Jerusalem.",
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
    "Pope of the industrial age, who in the encyclical Rerum Novarum (1891) takes the side of workers, defending their dignity, a just wage and the right to form associations. With this document he begins modern Catholic social teaching, and he devotes many encyclicals to the rosary, which is why he is called the pope of the rosary.",
    ""
   ],
   [
    "Socrates",
    "Philosopher",
    "An Athenian thinker who wrote nothing down yet changed the course of philosophy: in conversation, through patient questions, he leads others to know themselves and to seek the truth about the good. Sentenced to death by the Athenians, he chooses fidelity to conscience over escape. His teaching is handed down by his pupil, Plato.",
    ""
   ],
   [
    "Plato",
    "Philosopher",
    "Pupil of Socrates and founder of the Academy in Athens, who teaches that beyond the changing world of appearances there exist eternal truth, goodness and beauty, and that the human soul is immortal. His thought will become for the Church Fathers, above all St Augustine, a language for speaking about God.",
    ""
   ],
   [
    "Aristotle",
    "Philosopher",
    "Pupil of Plato, tutor of Alexander the Great and founder of the Lyceum, who sets in order all the knowledge of his time: he creates logic, the ethics of virtue and the study of nature, and by reason arrives at the Prime Mover. Through St Thomas Aquinas he becomes one of the pillars of Christian thought.",
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
    "The oldest university in continuous operation in the world, founded according to tradition in 1088 and famed for the study of Roman and canon law. Following its lead, often growing out of cathedral schools and under the protection of the popes, universities arise in Paris, Oxford and Kraków (1364): communities of masters and students in which theology, law, medicine and the natural sciences flourish.",
    ""
   ]
  ],
  "CH_EV": [
   [
    "First Council of Nicaea",
    "",
    "For the first time in history the bishops of East and West sit together: in 325 they gather at Nicaea to settle a dispute that had divided Christians, whether the Son of God is truly God. Against the teaching of Arius they confess that the Son of God is “consubstantial with the Father”, “God from God, Light from Light”. This confession, developed at Constantinople, is still prayed together in the Creed by Christians of East and West."
   ],
   [
    "Great Schism",
    "",
    "The Christian East and West, the Greek and Latin heritage of one faith, drift apart over the centuries, until in 1054 the papal legates and the Patriarch of Constantinople excommunicate each other. The division has not yet been overcome, but since 1965, when Paul VI and Patriarch Athenagoras consigned those excommunications to oblivion, popes and patriarchs pray together for reconciliation."
   ],
   [
    "Council of Trent",
    "",
    "For eighteen years, with interruptions, bishops meet in Alpine Trent to respond to the Reformation. The council sets out clearly the teaching on grace, the sacraments and Scripture, and at the same time undertakes renewal from within: it founds seminaries for future priests and prepares the Roman Catechism and a missal that unites the Church’s prayer for four centuries. From this renewal come saints such as Charles Borromeo and a new wave of missions."
   ],
   [
    "Second Vatican Council",
    "",
    "St John XXIII is said to have spoken, when calling the council, of opening the windows of the Church to let in fresh air. From 1962 to 1965 more than two thousand bishops renew the liturgy, introducing the vernacular languages, recall that every baptised person is called to holiness, and open the Church to dialogue with other Christians, other religions and the modern world. Its documents, such as Lumen Gentium and Gaudium et Spes, shape the life of the Church to this day."
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
    groups: {
      sem: { label: 'Sem', title: 'Sem i jego potomkowie', ref: 'Rdz 10,21-31',
        body: 'Od Sema, najstarszego syna Noego, Księga Rodzaju wywodzi ludy Elamu, Asyrii, Aramu i Arabii, a przez Abrahama naród wybrany (Rdz 10,21-31). Jego imię przetrwało w nazwie Semitów, a przez jego potomków biegnie nić obietnicy, która przez wieki prowadzi aż do Chrystusa.' },
      ham: { label: 'Cham', title: 'Cham i jego potomkowie', ref: 'Rdz 10,6-20',
        body: 'Ku południowi, w dolinę Nilu i ku wybrzeżom Kanaanu, rozchodzą się według Księgi Rodzaju potomkowie Chama, a wśród nich Nimrod, założyciel Babilonu (Rdz 10,6-20). Na ich ziemiach Izrael pozna niewolę i wolność wyjścia, wejdzie do Ziemi Obiecanej, a wieki później Egipt da schronienie Świętej Rodzinie.' },
      jap: { label: 'Jafet', title: 'Jafet i jego potomkowie', ref: 'Rdz 10,2-5',
        body: 'Ku północy i ku dalekim wybrzeżom mórz rozchodzą się, według Księgi Rodzaju, potomkowie Jafeta, a wśród nich Medowie i Grecy (Rdz 10,2-5). Z tego kręgu wyrosną wielkie cywilizacje Persji, Grecji i Rzymu, a w ich języku, na ich drogach i w ich miastach Ewangelia znajdzie szlaki, którymi rozejdzie się po całym świecie.' }
    },
    science: 'Rozwój nauki', scienceRef: 'KKK 159; Mdr 11,20',
    scienceBody: 'Nowożytna nauka dojrzewała w murach uniwersytetów chrześcijańskiej Europy, poczynając od Bolonii w 1088 r., i czerpała zarówno z mądrości Greków, jak i z dorobku uczonych świata islamu, Indii i Chin. U jej źródeł leży przekonanie wiary, że świat, jako dzieło stwórczego Logosu, nosi w sobie ład dostępny ludzkiemu rozumowi, a będąc owocem wolnego daru, nie wynika z żadnej konieczności. Jego praw nie sposób więc wywieść z samej spekulacji, trzeba je cierpliwie odczytywać w doświadczeniu. Toteż wśród badaczy natury nie brak ludzi Kościoła, od Alberta Wielkiego i Kopernika po Mendla i Lemaître’a, świadków przekonania, że prawda odkrywana w przyrodzie i prawda objawiona mają jedno Źródło.',
    laneTips: { events: 'Najważniejsze wydarzenia, zilustrowane obrazem lub filmem.',
      figures: 'Ważne postaci, umieszczone w roku, z którym najbardziej się kojarzą.',
      patriarchs: 'Patriarchowie i inne osoby, których długość życia podaje Pismo Święte.',
      kings: 'Okresy panowania królów Judy (górny pas) i Izraela (dolny pas).',
      alive: 'Ile osób i narodów z wykresu żyje w danym roku. Linia ciągła: osoby i narody razem; linia kropkowana: same narody.',
      nations: 'Narody i Kościoły od chwili ich powstania.' },
    realm: { un: 'Zjednoczone królestwo', ju: 'Królestwo Judy', is: 'Królestwo Izraela' }, realmShort: { un: 'Izrael', ju: 'Juda', is: 'Izrael' },
    kingBody: (realm, age, reign) => realm + '.' + (age ? ' Wiek przy objęciu tronu: ' + age + '.' : '') + ' Pismo podaje: ' + reign + ' panowania.',
    ask: {
      lang: 'Polish', you: 'Ty',
      q: {
        ev: [x => `Które fragmenty Pisma warto przeczytać, żeby lepiej zrozumieć wydarzenie „${x}”?`, x => `Co o wydarzeniu „${x}” mówią źródła historyczne i archeologia?`,
          x => `W jakich świętach i czytaniach Kościół wspomina wydarzenie „${x}”?`],
        later: [x => `Co o wydarzeniu „${x}” mówią źródła historyczne?`, x => `Jak Kościół ocenia wydarzenie „${x}” z perspektywy czasu?`],
        primeval: [x => `Jak Kościół rozumie „${x}”: co jest w tej historii przesłaniem, a co obrazem?`, x => `Gdzie w Piśmie i w Katechizmie szukać więcej o wydarzeniu „${x}”?`],
        pat: {
          name: x => `${x}: co znaczy to imię i co mówi o tej postaci?`,
          age: x => `${x}: dlaczego Biblia przypisuje tej postaci tak długie życie i jak to rozumieć?`,
          family: x => `${x}: kim byli rodzice, rodzeństwo i potomkowie tej postaci?`,
          trad: x => `${x}: co o tej postaci mówią tradycja żydowska i Ojcowie Kościoła?`,
          luke: x => `${x}: co oznacza obecność tej postaci w rodowodzie Jezusa?`,
          cov: x => `${x}: jaką rolę ta postać odgrywa w dziejach przymierza Boga z Izraelem?`
        },
        fig: [x => `${x}: jakie słowa tej postaci warto znać na pamięć?`],
        figBible: [x => `${x}: które fragmenty Pisma najpełniej pokazują tę postać?`],
        figLater: [x => `${x}: jakie dzieła lub świadectwa tej postaci warto poznać?`],
        king: [x => `${x}: co o tym panowaniu mówią źródła spoza Biblii i archeologia?`, x => `${x}: którzy prorocy działali w czasie tego panowania i co mówili?`,
          x => `${x}: jak Biblia ocenia to panowanie i dlaczego?`],
        nat: [x => `${x}: jak Biblia opisuje relacje tego narodu z Izraelem?`, x => `${x}: co mówią o tym narodzie archeologia i źródła z epoki?`],
        natHist: [x => `${x}: jaki wpływ na dalszy bieg historii miał ten naród?`],
        church: [x => `${x}: co łączy, a co dzieli tę wspólnotę i Kościół katolicki?`, x => `${x}: jak dziś wygląda dialog tej wspólnoty z Kościołem katolickim?`,
          x => `${x}: którzy święci są dla tej wspólnoty najważniejsi?`],
        knob: { nt: x => `Jak „${x}” łączy się z Nowym Testamentem?`, hist: x => `Jaki wpływ na dalszy bieg historii ma „${x}”?` }
      },
      sugg: 'Propozycje pytań',
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
      lede: 'Pierwsze rozdziały Księgi Rodzaju (1–11) nie podają dat, dlatego oznaczamy je jako „bez daty” i, wiernie za Biblią, pokazujemy jedynie długość życia patriarchów. Ich pierścień podąża jedną nicią pokoleń: od Adama przez Noego i Sema aż do Abrahama, tą samą, która wiedzie ku Izraelowi i ku Chrystusowi, podczas gdy Cham i Jafet stają u początku innych gałęzi ludzkiej rodziny. Od Abrahama daty odpowiadają katolickim wydaniom Pisma Świętego, choć sprzed 722 p.n.e. mają charakter przybliżony.',
      periods: 'Okresy', aliveIn: 'Współcześni w', events: 'Wydarzenia', fullChart: 'Cały wykres',
      zoomIn: 'Powiększ', zoomOut: 'Pomniejsz', chart: 'Kołowy wykres chronologii', reel: 'Wydarzenia w obrazach',
      dock: 'Oś czasu: przeciągnij, aby zmienić rok, albo użyj klawiszy strzałek', lang: 'Język',
      askBar: 'Zapytaj o historię', askHello: 'dzień dobry',
      askIntro: 'Zapytaj o postać, wydarzenie lub epokę albo wybierz jedno z proponowanych pytań. Odpowiedź uwzględni rok, w którym jesteś na osi czasu.',
      askPh: 'Np. dlaczego św. Augustyn pisał o niespokojnym sercu?', askSend: 'Wyślij', askStop: 'Stop', askKnob: 'Zapytaj', askMode: 'Czat',
      askNote: 'Odpowiada Claude (AI) i może się mylić.', askChips: 'Propozycje pytań', askLog: 'Rozmowa o historii'
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
    groups: {
      sem: { label: 'Shem', title: 'Shem and his descendants', ref: 'Gen 10:21-31',
        body: 'From Shem, Noah’s eldest son, Genesis traces the peoples of Elam, Assyria, Aram and Arabia, and through Abraham the chosen people (Gen 10:21-31). His name lives on in the word Semites, and through his descendants runs the thread of the promise that leads across the centuries to Christ.' },
      ham: { label: 'Ham', title: 'Ham and his descendants', ref: 'Gen 10:6-20',
        body: 'Southwards, into the valley of the Nile and towards the shores of Canaan, Genesis tells us, the descendants of Ham spread out, among them Nimrod, the founder of Babylon (Gen 10:6-20). In their lands Israel will know slavery and the freedom of the Exodus and will enter the Promised Land, and centuries later Egypt will shelter the Holy Family.' },
      jap: { label: 'Japheth', title: 'Japheth and his descendants', ref: 'Gen 10:2-5',
        body: 'Northwards and towards the distant shores of the sea, Genesis tells us, the descendants of Japheth spread out, among them the Medes and the Greeks (Gen 10:2-5). From this circle will grow the great civilisations of Persia, Greece and Rome, and in their language, along their roads and in their cities the Gospel will find the paths by which it spreads across the whole world.' }
    },
    science: 'Growth of science', scienceRef: 'CCC 159; Wis 11:20',
    scienceBody: 'Modern science matured within the universities of Christian Europe, beginning with Bologna in 1088, and drew both on the wisdom of the Greeks and on the achievements of scholars in the Islamic world, India and China. At its roots lies a conviction of faith: the world, as the work of the creative Logos, bears an order open to human reason, yet as the fruit of a free gift it follows from no necessity. Its laws therefore cannot be deduced by speculation alone but must be patiently read in experience. Thus among the students of nature there have been many men of the Church, from Albert the Great and Copernicus to Mendel and Lemaître, witnesses to the conviction that the truth found in nature and the truth revealed share a single Source.',
    laneTips: { events: 'Key events, each with a picture or film.', figures: 'Key people, placed at the year they are best remembered for.',
      patriarchs: 'Patriarchs and others whose lifespan Holy Scripture records.', kings: 'Reigns of the kings: Judah (top) and Israel (bottom).',
      alive: 'How many people and nations on the chart are alive in a given year. Solid line: people and nations together; dotted line: nations alone.', nations: 'Nations and Churches, from their beginning.' },
    realm: { un: 'United kingdom', ju: 'Kingdom of Judah', is: 'Kingdom of Israel' }, realmShort: { un: 'Israel', ju: 'Judah', is: 'Israel' },
    kingBody: (realm, age, reign) => realm + '.' + (age ? ' Age at accession: ' + age + '.' : '') + ' Scripture gives ' + reign + ' of reign.',
    ask: {
      lang: 'English', you: 'You',
      q: {
        ev: [x => `Which passages of Scripture are worth reading to understand “${x}” better?`, x => `What do historical sources and archaeology say about “${x}”?`,
          x => `In which feasts and readings does the Church remember “${x}”?`],
        later: [x => `What do historical sources say about “${x}”?`, x => `How does the Church judge “${x}” with hindsight?`],
        primeval: [x => `How does the Church understand “${x}”: what in this story is message and what is image?`, x => `Where in Scripture and the Catechism can I read more about “${x}”?`],
        pat: {
          name: x => `${x}: what does this name mean, and what does it say about the person?`,
          age: x => `${x}: why does the Bible give this person such a long life, and how should we understand it?`,
          family: x => `${x}: who were this person’s parents, siblings and descendants?`,
          trad: x => `${x}: what do Jewish tradition and the Church Fathers say about this person?`,
          luke: x => `${x}: what does this person’s place in the genealogy of Jesus mean?`,
          cov: x => `${x}: what part does this person play in the story of God’s covenant with Israel?`
        },
        fig: [x => `${x}: which words of this person are worth knowing by heart?`],
        figBible: [x => `${x}: which passages of Scripture show this person most fully?`],
        figLater: [x => `${x}: which works or testimonies of this person are worth knowing?`],
        king: [x => `${x}: what do sources outside the Bible and archaeology say about this reign?`, x => `${x}: which prophets were active during this reign, and what did they say?`,
          x => `${x}: how does the Bible judge this reign, and why?`],
        nat: [x => `${x}: how does the Bible describe this people’s relations with Israel?`, x => `${x}: what do archaeology and sources of the time say about this people?`],
        natHist: [x => `${x}: what influence did this people have on the later course of history?`],
        church: [x => `${x}: what unites and what divides this community and the Catholic Church?`, x => `${x}: what does this community’s dialogue with the Catholic Church look like today?`,
          x => `${x}: which saints matter most to this community?`],
        knob: { nt: x => `How is “${x}” connected with the New Testament?`, hist: x => `What influence does “${x}” have on the later course of history?` }
      },
      sugg: 'Suggested questions',
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
      lede: 'The first chapters of Genesis (1–11) give no dates, so we mark them “undated” and, faithful to the Bible, show only the patriarchs’ lifespans. Their ring follows a single thread of generations: from Adam through Noah and Shem to Abraham, the very thread that leads towards Israel and towards Christ, while Ham and Japheth stand at the head of other branches of the human family. From Abraham on, dates follow Catholic editions of Holy Scripture, though before 722 BC they are approximate.',
      periods: 'Periods', aliveIn: 'Contemporaries in', events: 'Events', fullChart: 'Full chart',
      zoomIn: 'Zoom in', zoomOut: 'Zoom out', chart: 'Radial chronology chart', reel: 'Events in pictures',
      dock: 'Timeline: drag to change the year, or use the arrow keys', lang: 'Language',
      askBar: 'Ask about history', askHello: 'hello',
      askIntro: 'Ask about a person, an event or an era, or choose one of the suggested questions. The answer will take into account the year you are at on the timeline.',
      askPh: 'E.g. why did St Augustine write of the restless heart?', askSend: 'Send', askStop: 'Stop', askKnob: 'Ask', askMode: 'Chat',
      askNote: 'Answered by Claude (AI), which can make mistakes.', askChips: 'Suggested questions', askLog: 'Conversation about history'
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
