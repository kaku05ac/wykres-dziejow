// Chronology data (Polish).
//
// Dating follows the approach of Catholic study Bibles (NABRE, New Jerusalem Bible,
// Biblia Tysiąclecia). The Church sets no official chronology, so:
//  - Genesis 1–11 (Creation to Terah) is not given BC dates. It is counted in years
//    from Creation (AM, anno mundi) using the genealogies of Genesis 5 and 11 (Hebrew
//    text). The chart draws this stretch as its own segment.
//  - From Abraham on, years are scholarly approximations. Dates before 722 BC are
//    approximate and show with "ok.".
//
// All years share one internal scale: BC years are negative, AD years positive, and
// the primeval segment sits before 2000 BC so that AM 2083 (Terah's death) meets the
// dated axis. Use am(n) to place a year counted from Creation.
// Names and scripture references follow Polish Catholic usage (Biblia Tysiąclecia).

const START = -4083;   // AM 0, Creation
const SEAM = -2000;    // end of Genesis 1–11, start of dated history
const END = 2026;
const am = n => START + n;

// Lines (Gen 10 and after): tint, line colour, legend name.
// Palette taken from a vivid poured-paint image: red-orange #eb5628, orange #f09c3f, yellow #e6c363,
// green #3f8a3a, turquoise #2a9db0, petrol #24586b, crimson #a8344a, plum #6b2c43, dark brown #2c1f1c.
const COL = { cain: ['#f7ecc9', '#e6c363', 'Kain i jego potomkowie'], sem: ['#efc9d0', '#a8344a', 'Semici'], ham: ['#fbe0c1', '#f09c3f', 'Chamici'], jap: ['#d3e6cf', '#3f8a3a', 'Jafetyci'], chu: ['#cdebf0', '#2a9db0', 'Kościół katolicki'], orth: ['#e3cdd5', '#6b2c43', 'Prawosławie'], ref: ['#cbdce2', '#24586b', 'Protestantyzm'], pat: ['#fbd3c4', '#eb5628', 'Patriarchowie'], king: ['#dcd5d2', '#2c1f1c', 'Królowie Izraela i Judy'] };

// Patriarchs: name, birth (internal year), years lived (as Scripture gives them), reference.
// The first 19 are counted from Creation (Rdz 5; 11,10-32).
const PAT = [
  ['Adam', am(0), 930, 'Rdz 5,3-5'], ['Set', am(130), 912, 'Rdz 5,6-8'], ['Enosz', am(235), 905, 'Rdz 5,9-11'],
  ['Kenan', am(325), 910, 'Rdz 5,12-14'], ['Mahalalel', am(395), 895, 'Rdz 5,15-17'], ['Jered', am(460), 962, 'Rdz 5,18-20'],
  ['Henoch', am(622), 365, 'Rdz 5,21-24'], ['Metuszelach', am(687), 969, 'Rdz 5,25-27'], ['Lamek', am(874), 777, 'Rdz 5,28-31'],
  ['Noe', am(1056), 950, 'Rdz 5,32; 9,28-29'], ['Sem', am(1558), 600, 'Rdz 11,10-11'], ['Arpachszad', am(1658), 438, 'Rdz 11,12-13'],
  ['Szelach', am(1693), 433, 'Rdz 11,14-15'], ['Heber', am(1723), 464, 'Rdz 11,16-17'], ['Peleg', am(1757), 239, 'Rdz 11,18-19'],
  ['Reu', am(1787), 239, 'Rdz 11,20-21'], ['Serug', am(1819), 230, 'Rdz 11,22-23'], ['Nachor', am(1849), 148, 'Rdz 11,24-25'],
  ['Terach', am(1878), 205, 'Rdz 11,26-32'],
  // From Abraham on: everyone up to the monarchy whose lifespan Scripture gives. Dates are
  // approximate: Abraham to Joseph in the Middle Bronze Age, Moses in the 13th century BC.
  // Others are placed by the text's own links: Sarah is 10 years younger than Abraham (Rdz 17,17),
  // Ishmael born when Abraham was 86 (Rdz 16,16), Levi a few years before Joseph, Kehat before the
  // descent into Egypt (Rdz 46,11), Aaron 3 years older than Moses (Wj 7,7). Wj 6 gives a shortened
  // genealogy, so Amram is placed by Moses's birth. An optional 5th field is a note for the card.
  ['Abraham', -1900, 175, 'Rdz 25,7'], ['Sara', -1890, 127, 'Rdz 23,1'], ['Izmael', -1814, 137, 'Rdz 25,17'],
  ['Izaak', -1800, 180, 'Rdz 35,28'], ['Jakub', -1740, 147, 'Rdz 47,28'], ['Lewi', -1657, 137, 'Wj 6,16'],
  ['Józef', -1650, 110, 'Rdz 50,26'], ['Kehat', -1615, 133, 'Wj 6,18'],
  ['Amram', -1400, 137, 'Wj 6,20', 'Wj 6 podaje skróconą genealogię: między Kehatem a Amramem mogło upłynąć więcej pokoleń.'],
  ['Aaron', -1333, 123, 'Lb 33,38-39'], ['Mojżesz', -1330, 120, 'Pwt 34,7'], ['Jozue', -1290, 110, 'Joz 24,29'],
  ['Heli', -1168, 98, '1 Sm 4,15'], ['Jojada', -945, 130, '2 Krn 24,15']
];

// Kings of Israel and Judah: name, from, to, realm ('un' united kingdom, 'ju' Judah, 'is' Israel),
// reference, age at accession (only Judah's kings have one in Scripture), and in i18n.js the length of
// reign as the text gives it. Reign dates are an approximate reconstruction fitted to the dates
// used elsewhere on the chart (931, 722, 597 and 587 BC); Catholic Bibles give no single table.
const KINGS = [
  ['Saul', -1050, -1010, 'un', '1 Sm 13,1; Dz 13,21', null], ['Dawid', -1010, -970, 'un', '2 Sm 5,4', 30], ['Salomon', -970, -931, 'un', '1 Krl 11,42', null],
  ['Roboam', -931, -913, 'ju', '1 Krl 14,21', 41], ['Abiam', -913, -911, 'ju', '1 Krl 15,2', null], ['Asa', -911, -870, 'ju', '1 Krl 15,10', null],
  ['Jozafat', -870, -848, 'ju', '1 Krl 22,42', 35], ['Joram', -848, -841, 'ju', '2 Krl 8,17', 32], ['Ochozjasz', -841, -840.4, 'ju', '2 Krl 8,26', 22],
  ['Atalia', -840.4, -835, 'ju', '2 Krl 11,3', null], ['Joasz', -835, -796, 'ju', '2 Krl 12,1-2', 7], ['Amazjasz', -796, -767, 'ju', '2 Krl 14,2', 25],
  ['Azariasz (Ozjasz)', -767, -742, 'ju', '2 Krl 15,2', 16], ['Jotam', -742, -735, 'ju', '2 Krl 15,33', 25], ['Achaz', -735, -715, 'ju', '2 Krl 16,2', 20],
  ['Ezechiasz', -715, -687, 'ju', '2 Krl 18,2', 25], ['Manasses', -687, -642, 'ju', '2 Krl 21,1', 12], ['Amon', -642, -640, 'ju', '2 Krl 21,19', 22],
  ['Jozjasz', -640, -609, 'ju', '2 Krl 22,1', 8], ['Joachaz', -609, -608.4, 'ju', '2 Krl 23,31', 23], ['Jojakim', -608.4, -598, 'ju', '2 Krl 23,36', 25],
  ['Jojakin', -598, -597, 'ju', '2 Krl 24,8', 18], ['Sedecjasz', -597, -587, 'ju', '2 Krl 24,18', 21],
  ['Jeroboam I', -931, -910, 'is', '1 Krl 14,20', null], ['Nadab', -910, -909, 'is', '1 Krl 15,25', null], ['Baasza', -909, -886, 'is', '1 Krl 15,33', null],
  ['Ela', -886, -885.6, 'is', '1 Krl 16,8', null], ['Zimri', -885.6, -885, 'is', '1 Krl 16,15', null], ['Omri', -885, -874, 'is', '1 Krl 16,23', null],
  ['Achab', -874, -853, 'is', '1 Krl 16,29', null], ['Ochozjasz', -853, -852, 'is', '1 Krl 22,52', null], ['Joram', -852, -841, 'is', '2 Krl 3,1', null],
  ['Jehu', -841, -814, 'is', '2 Krl 10,36', null], ['Joachaz', -814, -798, 'is', '2 Krl 13,1', null], ['Joasz', -798, -782, 'is', '2 Krl 13,10', null],
  ['Jeroboam II', -782, -753, 'is', '2 Krl 14,23', null], ['Zachariasz', -753, -752.5, 'is', '2 Krl 15,8', null], ['Szallum', -752.5, -752, 'is', '2 Krl 15,13', null],
  ['Menachem', -752, -742, 'is', '2 Krl 15,17', null], ['Pekachiasz', -742, -740, 'is', '2 Krl 15,23', null], ['Pekach', -740, -732, 'is', '2 Krl 15,27', null],
  ['Ozeasz', -732, -722, 'is', '2 Krl 17,1', null]
];

// Nations: name, line, start, end, reference. Peoples older than 2000 BC start at the seam.
const NAT = [
  ['Ród Kaina', 'cain', am(1), am(1656), 'Rdz 4,17-22'],
  ['Elam', 'sem', SEAM, -539, 'Rdz 10,22'],
  ['Asyria', 'sem', SEAM, -609, 'Rdz 10,22; 2 Krl 17'],
  ['Aram / Syria', 'sem', -1100, -732, 'Rdz 10,22; 2 Krl 16,9'],
  ['Arabowie', 'sem', -900, END, 'Rdz 25,12-18'],
  ['Izrael', 'sem', -1200, -587, 'Joz 1; 2 Krl 25'],
  ['Babilon', 'ham', -1894, -539, 'Rdz 10,8-10'],
  ['Egipt', 'ham', SEAM, -30, 'Rdz 10,6'],
  ['Kanaan', 'ham', SEAM, -1000, 'Rdz 10,15-19'],
  ['Fenicja', 'ham', -1200, -332, '1 Krl 5'],
  ['Ludy indoeuropejskie', 'jap', SEAM, -300, 'Rdz 10,2-5'],
  ['Grecja', 'jap', -776, -146, 'Dn 8,21', 'Kolebka filozofii, demokracji i nauki; po grecku spisano Nowy Testament.'],
  ['Persja', 'jap', -550, -330, 'Dn 8,20'],
  ['Rzym', 'jap', -753, 476, 'Dn 7,7'],
  // The Church: separate from the Genesis 10 peoples above. An optional 6th field is a short
  // description shown on the card before the dates.
  ['Kościół katolicki', 'chu', 30, END, 'Mt 16,18; Dz 2'],
  ['Prawosławie', 'orth', 1054, END, '',
    'Przez wieki chrześcijański Wschód i Zachód rozwijały się w różnych kulturach, greckiej i łacińskiej. Narastały różnice w liturgii i zwyczajach, w rozumieniu jedności Kościoła wokół następcy św. Piotra oraz w sprawie słów „i Syna” (Filioque) w Credo. W 1054 r. legaci papiescy i patriarcha Konstantynopola obłożyli się wzajemnie ekskomuniką; rozłam utrwalał się w kolejnych wiekach. W 1965 r. św. Paweł VI i patriarcha Atenagoras usunęli te ekskomuniki z pamięci Kościoła, otwierając drogę do pojednania, choć pełnej jedności jeszcze nie ma.'],
  ['Protestantyzm', 'ref', 1517, END, '']
];

// Events: name, internal year, reference, description, optional date label.
const EV = [
  ['Stworzenie świata', am(0), 'Rdz 1,1', 'Na początku Bóg stworzył niebo i ziemię.', 'Bez daty'],
  ['Potop', am(1656), 'Rdz 7', 'Noe wraz z rodziną wchodzi do arki; potop trwa rok.', 'AM 1656'],
  ['Wieża Babel', am(1757), 'Rdz 11,1-9', 'Bóg pomieszał języki i rozproszył narody.', 'Bez daty'],
  ['Powołanie Abrahama', -1825, 'Rdz 12,1-4', 'Abraham w wieku 75 lat opuszcza Charan i wyrusza do Kanaanu.'],
  ['Ofiarowanie Izaaka', -1780, 'Rdz 22', 'Abraham zostaje wystawiony na próbę na górze Moria i ofiaruje swojego syna Izaaka.'],
  ['Wyjście z Egiptu', -1250, 'Wj 12', 'Izrael pod wodzą Mojżesza opuszcza Egipt.'],
  ['Świątynia Salomona', -960, '1 Krl 6-8', 'Świątynia w Jerozolimie zostaje poświęcona.'],
  ['Podział królestwa', -931, '1 Krl 12', 'Po śmierci Salomona Izrael i Juda się rozdzielają.'],
  ['Upadek Samarii', -722, '2 Krl 17', 'Asyria uprowadza mieszkańców królestwa północnego.'],
  ['Niewola babilońska', -597, '2 Krl 24', 'Nabuchodonozor po raz pierwszy zdobywa Jerozolimę i uprowadza do Babilonu króla Jojakina wraz z elitą kraju; w 587 p.n.e. niszczy miasto i świątynię.'],
  ['Powrót z wygnania', -538, 'Ezd 1', 'Cyrus pozwala Żydom wrócić do ojczyzny.'],
  ['Narodzenie Chrystusa', -5, 'Mt 2; Łk 2', 'Jezus rodzi się w Betlejem, przed śmiercią Heroda w 4 p.n.e.', 'ok. 6–4 p.n.e.'],
  ['Ukrzyżowanie i Pięćdziesiątnica', 30, 'Dz 2', 'W Jerozolimie rodzi się Kościół.', '30 lub 33 n.e.'],
  ['Upadek Rzymu', 476, '', 'Upada zachodnie cesarstwo rzymskie. Przez kolejne tysiąc lat Kościół jednoczy Europę: klasztory chronią wiedzę, misjonarze chrzczą nowe ludy, powstają katedry i uniwersytety. Kościół daje też zalążek rozwojowi nauki: w jego szkołach i na uniwersytetach przekonanie, że stworzony świat jest rozumny i poznawalny, prowadzi do badania przyrody.'],
  ['Reformacja', 1517, '', 'Luter ogłasza 95 tez. Spór o odpusty szybko przeradza się w szerszy ruch: Luter naucza o zbawieniu przez samą wiarę i o Piśmie Świętym jako jedynym autorytecie, odrzucając część nauczania i władzy Kościoła. Za nim idą inni reformatorzy, jak Zwingli i Kalwin, a w Anglii Henryk VIII zrywa z Rzymem. Dzięki drukowi i poparciu władców w ciągu kilku dekad zachodnie chrześcijaństwo dzieli się na katolików i protestantów. Kościół odpowiada odnową na Soborze Trydenckim (1545–1563).']
];
// Stable ids for EV, in the same order. Picture files are named after these
// (images/events/<id>.jpg), so translating an event's name never breaks its picture.
const EV_IDS = ['creation', 'the-flood', 'tower-of-babel', 'call-of-abraham', 'binding-of-isaac', 'the-exodus', 'solomon-s-temple',
  'kingdom-divides', 'fall-of-samaria', 'babylonian-captivity', 'return-from-exile', 'birth-of-christ', 'crucifixion-and-pentecost',
  'fall-of-rome', 'reformation'];

// Church events (and a few historic ones, with a 5th field): name, year, reference, description. Shown as markers on the chart and in the
// timeline's Church lane; they are not sections, so the event column and its films are unchanged.
const CH_EV = [
  ['Sobór Nicejski I', 325, '', 'Sobór wyznaje bóstwo Chrystusa i ogłasza Credo nicejskie przeciw arianizmowi.'],
  ['Wielka schizma', 1054, '', 'Rozłam między Kościołem na Zachodzie (katolickim) i na Wschodzie (prawosławnym).'],
  ['Sobór Trydencki', 1545, '', 'Odpowiedź Kościoła na reformację: odnowa nauczania, sakramentów i dyscypliny.'],
  ['Sobór Watykański II', 1962, '', 'Odnowa liturgii i otwarcie Kościoła na świat współczesny.'],
  // Historic (non-Church) events carry the line key of their people as a 5th field.
  ['Rewolucja francuska', 1789, '', 'Wybucha rewolucja we Francji, a w 1792 r. upada monarchia; hasła wolności, równości i braterstwa, a zarazem podporządkowanie Kościoła państwu (1790) i prześladowania duchownych i wiernych.', 'jap'],
  ['Septuaginta', -250, '', 'Żydzi w Aleksandrii zaczynają tłumaczyć Stary Testament na grekę (etapami, od III w. p.n.e.); Nowy Testament często cytuje ten przekład.', 'jap']
];

// Testaments: bands marked around the chart and along the timeline (from, to).
// Old Testament to the birth of Christ, New Testament to His death and resurrection (AD 30),
// then the Church. The chart also shades these three stretches as faint slices of the pie.
const TESTAMENTS = [[START, -5], [-5, 30], [30, END]];

// Periods: name, from, to. The last one is the whole chart.
const ERAS = [['Od stworzenia do potopu', am(0), am(1656)], ['Od potopu do Abrahama', am(1656), -1825], ['Od Abrahama do wyjścia z Egiptu', -1825, -1250], ['Królestwa Izraela', -1050, -587], ['Całość', START, END]];

// Figures: name, internal year, role, description, reference, line, optional circle letter.
const FIG = [
  ['Adam', am(0), 'Pierwszy człowiek', 'Stworzony przez Boga i umieszczony w Edenie.', 'Rdz 1-3', 'sem'],
  ['Henoch', am(987), 'Chodził z Bogiem', 'Zabrany przez Boga w wieku 365 lat.', 'Rdz 5,24', 'sem'],
  ['Noe', am(1656), 'Budowniczy arki', 'Ocalił rodzinę i zwierzęta podczas potopu.', 'Rdz 6-9', 'sem'],
  ['Nimrod', am(1720), 'Dzielny myśliwy', 'Założył królestwo w Babel, w krainie Szinear.', 'Rdz 10,8-10', 'ham'],
  ['Abraham', -1825, 'Ojciec narodów', 'Powołany z Charanu, otrzymał obietnicę ziemi i potomstwa.', 'Rdz 12', 'sem'],
  ['Izaak', -1800, 'Syn obietnicy', 'Syn Abrahama i Sary.', 'Rdz 21', 'sem'],
  ['Jakub', -1740, 'Izrael', 'Ojciec dwunastu pokoleń.', 'Rdz 25-50', 'sem'],
  ['Józef', -1620, 'Zarządca Egiptu', 'Sprzedany przez braci, później uratował rodzinę przed głodem.', 'Rdz 37-50', 'sem'],
  ['Mojżesz', -1250, 'Prawodawca', 'Wyprowadził Izraela z Egiptu i otrzymał Prawo na Synaju.', 'Wj 3-20', 'sem'],
  ['Jozue', -1210, 'Zdobywca Kanaanu', 'Przeprowadził Izraela przez Jordan.', 'Joz 3', 'sem'],
  ['Debora', -1125, 'Sędzia i prorokini', 'Razem z Barakiem poprowadziła Izraela przeciw Syserze.', 'Sdz 4-5', 'sem'],
  ['Samson', -1075, 'Sędzia', 'Wybawił Izraela z rąk Filistynów.', 'Sdz 13-16', 'sem'],
  ['Saul', -1050, 'Pierwszy król Izraela', 'Namaszczony przez Samuela.', '1 Sm 10', 'sem'],
  ['Dawid', -1000, 'Król Izraela', 'Uczynił Jerozolimę swoją stolicą.', '2 Sm 5', 'sem'],
  ['Salomon', -960, 'Budowniczy świątyni', 'Słynął z mądrości i zbudował świątynię w Jerozolimie.', '1 Krl 6', 'sem'],
  ['Eliasz', -860, 'Prorok', 'Stawił czoła prorokom Baala na górze Karmel.', '1 Krl 18', 'sem'],
  ['Izajasz', -742, 'Prorok', 'Powołany w roku śmierci króla Ozjasza.', 'Iz 6,1', 'sem'],
  ['Ezechiasz', -715, 'Król Judy', 'Odnowił kult i oparł się Asyrii.', '2 Krl 18-19', 'sem'],
  ['Daniel', -605, 'Prorok w Babilonie', 'Uprowadzony do Babilonu, służył na dworze królewskim.', 'Dn 1', 'sem'],
  ['Cyrus', -538, 'Król Persji', 'Pozwolił Żydom wrócić do Jerozolimy.', 'Ezd 1', 'jap'],
  ['Estera', -480, 'Królowa Persji', 'Ocaliła Żydów przed spiskiem Hamana.', 'Est 4-8', 'sem'],
  ['Nehemiasz', -445, 'Namiestnik', 'Odbudował mury Jerozolimy.', 'Ne 2-6', 'sem'],
  ['Jan Chrzciciel', -6, 'Poprzednik', 'Przygotował drogę Chrystusowi.', 'Łk 1', 'chu'],
  ['Jezus', -5, 'Chrystus', 'Urodził się w Betlejem.', 'Mt 2; Łk 2', 'chu'],
  ['Paweł', 35, 'Apostoł', 'Zaniósł Ewangelię do całego świata rzymskiego.', 'Dz 9-28', 'chu'],
  ['Konstantyn', 313, 'Cesarz rzymski', 'Wraz z Licyniuszem ogłasza edykt mediolański (313), który daje chrześcijanom wolność wyznania i kończy prześladowania.', '', 'jap'],
  ['Marcin Luter', 1517, 'Reformator', 'Zapoczątkował reformację w Niemczech.', '', 'ref'],
  // Later figures. An optional 7th field sets the letter shown in the circle.
  ['Św. Tomasz z Akwinu', 1265, 'Doktor Kościoła', 'Rozpoczyna Sumę teologiczną, wielką syntezę wiary i rozumu, opartą na filozofii Arystotelesa.', '', 'chu', 'T'],
  ['Jan Gutenberg', 1455, 'Drukarz', 'Drukuje Biblię ruchomą czcionką; do ok. 1500 r. w całej Europie działają setki drukarń, a Pismo Święte staje się dużo łatwiej dostępne.', '', 'chu', 'G'],
  ['Kard. Stefan Wyszyński', 1948, 'Prymas Tysiąclecia', 'Zostaje prymasem Polski; więziony w latach 1953–1956, prowadzi Kościół w Polsce przez czasy komunizmu.', '', 'chu', 'W'],
  ['Św. Jan Paweł II', 1978, 'Papież', 'Kard. Karol Wojtyła zostaje wybrany na papieża; jego pielgrzymki do Polski wspierają drogę do wolności.', '', 'chu', 'J'],
  // Konstantyn to Tomasz z Akwinu
  ['Justynian I', 527, 'Cesarz bizantyjski', 'Cesarz od 527 r.; spisuje prawo rzymskie (Kodeks Justyniana, 529–534) i buduje Hagię Sophię (537).', '', 'jap', 'J'],
  ['Św. Grzegorz Wielki', 590, 'Papież', 'Kształtuje średniowieczny Kościół, liturgię i misje; wysyła misjonarzy do Anglii.', '', 'chu', 'G'],
  ['Mahomet', 622, 'Założyciel islamu', 'Hidżra z Mekki do Medyny: powstaje wspólnota muzułmańska (umma), a od tej daty liczy się kalendarz islamski. Mahomet głosił od ok. 610 r.; islam zmienia Bliski Wschód i świat arabski.', '', 'sem', 'M'],
  ['Karol Wielki', 800, 'Cesarz', 'Koronowany w Rzymie na cesarza; fundament chrześcijańskiej Europy.', '', 'jap', 'K'],
  ['Św. Cyryl i Metody', 863, 'Apostołowie Słowian', 'Niosą Ewangelię Słowianom na Morawach; Cyryl tworzy dla nich pismo (głagolicę), a bracia przekładają na język słowiański Pismo i liturgię.', '', 'chu', 'C'],
  ['Mieszko I', 966, 'Książę Polan', 'Przyjmuje chrzest; początek chrześcijaństwa i państwa polskiego.', '', 'chu', 'M'],
  ['Saladyn', 1187, 'Sułtan', 'Odbija Jerozolimę z rąk krzyżowców.', '', 'sem', 'S'],
  // Marcin Luter to Wyszyński
  ['Krzysztof Kolumb', 1492, 'Żeglarz', 'Dopływa do Ameryki; zaczyna się epoka wielkich odkryć, a wraz z nią misje Kościoła w Nowym Świecie.', '', 'jap', 'K'],
  ['Mikołaj Kopernik', 1543, 'Astronom', 'Wydaje „O obrotach sfer niebieskich”: Ziemia krąży wokół Słońca.', '', 'jap', 'K'],
  ['Izaak Newton', 1687, 'Uczony', 'Wydaje „Principia”: prawa ruchu i powszechnego ciążenia.', '', 'jap', 'N'],
  ['Napoleon Bonaparte', 1804, 'Cesarz Francuzów', 'Po zamachu stanu w 1799 r. przejmuje władzę, a w 1804 r., w obecności Piusa VII, koronuje się na cesarza; jego wojny i kodeks niosą idee rewolucji przez Europę.', '', 'jap', 'N'],
  ['Leon XIII', 1891, 'Papież', 'Encyklika „Rerum novarum” o sprawie robotniczej; początek nowożytnej katolickiej nauki społecznej.', '', 'chu', 'L'],
  // Greek philosophy and its heir in the Church
  ['Sokrates', -399, 'Filozof', 'Twórca filozofii moralnej: w dialogu, metodą pytań, prowadzi rozmówców do samopoznania i szukania prawdy o dobru. Skazany przez Ateńczyków na śmierć, wybiera wierność sumieniu. Jego nauczanie przekazuje uczeń, Platon.', '', 'jap', 'S'],
  ['Platon', -387, 'Filozof', 'Uczeń Sokratesa i założyciel Akademii w Atenach. Uczy, że ponad zmiennym światem istnieje wieczna prawda, dobro i piękno, a dusza człowieka jest nieśmiertelna. Jego myśl stanie się dla Ojców Kościoła językiem do mówienia o Bogu.', '', 'jap', 'P'],
  ['Arystoteles', -335, 'Filozof', 'Uczeń Platona i wychowawca Aleksandra Wielkiego, założyciel Liceum. Porządkuje całą ówczesną wiedzę: tworzy logikę, etykę cnót i badanie przyrody, a rozumem dochodzi do Pierwszego Poruszyciela. Przez św. Tomasza z Akwinu staje się filarem myśli chrześcijańskiej.', '', 'jap', 'A'],
  ['Św. Augustyn', 397, 'Biskup Hippony, Doktor Kościoła', 'Pisze „Wyznania” (ok. 397–400); łączy wiarę chrześcijańską z myślą Platona i kształtuje teologię Zachodu.', '', 'chu', 'A']
];
