import { ErrorConfig } from "./types";

export const ALL_ERRORS: ErrorConfig[] = [
  {
    id: "viskas_arba_nieko",
    name: "Viskas arba nieko",
    desc: "Jei netobula, vadinasi, visiška nesėkmė.",
    longDesc:
      "Mąstai kraštutinumais. Pavyzdžiui, jei darbas atliktas netobulai, laikai jį visišku fiasko.\n\nPasaulį matai tik „juoda-balta“ spalvomis, be jokių penkiasdešimt pilkų atspalvių.",
    examples: [
      "Jei nesportuoju kasdien, tai nesiskaitau kad apskritai sportuoju.",
      "Gavau 8/10. Vadinasi, man visai nesiseka mokytis.",
      "Projektas nepavyko iš pirmo karto, taigi esu visiška nevykėlė.",
      "Suvalgiau vieną sausainį po dietos. Vadinasi, viskas sugriuvo ir dabar jau nebesvarbu, galiu valgyti nors visą dėžę.",
      "Susipykome dėl indų, vadinasi, mūsų santykiai visiškai blogi.",
    ],
    absurdExamples: [
      "Išėjau pasivaikščioti ir nepadariau 40'000 žingsnių. Visai nebepaeinu.",
      "Kartą pavėlavau į filmą. Daugiau niekada gyvenime nesuspėsiu į nieką net į savo laidotuves.",
      "Neišėjau į sporto salę. Viskas, dabar galiu nusišaut.",
    ],
    gradient: "from-pink-500/50 to-rose-500/50",
    textParams: "text-pink-100",
    image: "/viskas_arba_nieko.webp",
  },
  {
    id: "perdetas_apibendrinimas",
    name: "Perdėtas Apibendrinimas",
    desc: "Vienas neigiamas įvykis tampa begaline nesėkmių grandine.",
    longDesc:
      "Remiesi vienu faktu, o darai globalias išvadas.\n\nJei kartą nepasisekė, manai, kad taip bus visada.\n\nSituacijoms apibūdinti renkiesi žodžius „visada“, „niekada“, „pastoviai“, „visi“, „niekas“, „nuolatos“ ir pan.",
    examples: [
      "Kartą pavėlavau. Aš pastoviai vėluoju.",
      "Pirmas pasimatymas nepavyko. Man niekada nesiseks.",
      "Padariau klaidą, aš visur klystu, niekas nesiseka.",
      "Kolega nepasijuokė iš mano bajerio. Niekas niekada nesupranta mano humoro.",
      "Draugas neatėjo į susitikimą. Žmonėms mano draugystė visada antraeilis dalykas.",
    ],
    absurdExamples: [
      "Įbėriau per daug druskos. Visą gyvenimą gaminu tik kažkokias katastrofas.",
      "Pralaimėjau stalo futbolą. Sporto istorijoje esu amžinas pralaimėtojas.",
    ],
    gradient: "from-orange-400/50 to-amber-500/50",
    textParams: "text-orange-100",
    image: "/perdetas_apibendrinimas.webp",
  },
  {
    id: "proto_filtras",
    name: "Proto filtras",
    desc: "Fokusuojiesi į vieną negatyvią detalę, o visumą ignoruoji.",
    longDesc:
      "Iš didelio paveikslo išsirenki vieną neigiamą detalę ir susitelki tik į ją. Taip apkartini visą patirtį.\n\n Lyg lašas rašalo į stiklinę vandens.",
    examples: [
      "Visi gyrė, bet vienas kolega pasakė pastabą. Vadinasi, buvo blogai.",
      "Atostogos buvo puikios, bet paskutinę dieną lijo - viskas sugadinta.",
      "Mašinos remontas man realiai, seni, sugadino visą savaitę",
      "Visiems patiko vakarėlis tik Pauliui ne. Per jį visą nuotaiką sugadino.",
      "Patiekiau tortą, visi valgė, bet viena teta paklausė, ar be cukraus. Vadinasi, tortas šiaip sau.",
      "Susirašinėjome visą vakarą, bet paskutinė žinutė buvo su tašku. Tai jau tikrai piktas taškas.",
    ],
    absurdExamples: [
      "Šventė buvo tobula, bet vienas balionas buvo ne tos spalvos. Visas gimtadienis šūdinas.",
      "Gavau 99 pagyrimus ir vieną pastabą. Šiaip tai visi mane laiko myžnium.",
      "Kavinėje latytė buvo kiek vėsesnė nei mėgstu. Mano gyvenime tiesiog nėra šilumos.",
    ],
    gradient: "from-amber-300/50 to-yellow-500/50",
    textParams: "text-amber-100 gap-0",
    image: "/proto_filtras.webp",
  },
  {
    id: "pozityviu_nuvertinimas",
    name: "Pozityvumo nuvertinimas",
    desc: "Teigiami dalykai „nesiskaito“ dėl vienokių ar kitokių priežasčių.",
    longDesc:
      "Atmeti teigiamas patirtis ir sakai, kad jos „nieko nereiškia“.\n\nTaip išlaikai negatyvų įsitikinimą, net kai faktai rodo priešingai.",
    examples: [
      "Projektas pavyko, bet čia tiesiog pasisekė, tai ne mano nuopelnas.",
      "Gavau komplimentą, bet žmonės tiesiog mandagūs.",
      "Vadovas pagyrė, bet tik todėl, kad visus giria.",
      "Pastačiau namą, ai bet visi pastato, nieko ypatingo.",
      "Klientas patenkintas, bet jis turbūt net nesupranta, kaip turėtų atrodyti geras darbas.",
    ],
    absurdExamples: [
      "Draugai suorganizavo siurprizą, bet tik todėl, kad neturėjo ką veikti.",
      "Žmonės ploja salėje. Bet čia nes vėjas sutrigerino jų rankas.",
    ],
    gradient: "from-rose-500/50 to-red-600/50",
    textParams: "text-rose-100",
    image: "/pozityvu_nuvertinimas.webp",
  },
  {
    id: "skubotos_isvados",
    name: "Skubotos išvados",
    desc: "Darai neigiamas išvadas be aiškių įrodymų.",
    longDesc:
      "Dvi formos:\n\n 1. Minčių skaitymas: manai, kad kiti tave vertina blogai, bet to nepatikrini.\n\n2. Ateities būrimas: kaip orakulas iš anksto įsitikini, kad viskas baigsis liūdnai.",
    examples: [
      "Jis neatrašė visą valandą tai jau tikrai supyko ant manęs.",
      "Jei bandysiu kalbėti, tikrai apsijuoksiu.",
      "Tomas nepasisveikino, vadinasi, manęs nemėgsta.",
      "Ji perskaitė žinutę ir paliko ant seen, dabar galvoja, kaip mandagiai manim atsikratyti.",
      "Jei paprašysiu pagalbos, visi matys, kad esu durnelis.",
    ],
    absurdExamples: [
      "Kaimynas lifte nekalbėjo. Nu tai jau parašė feisbuke apie mano nuodėmes.",
      "Jei susirinkime paprašysiu mikrofono, ant smūgio kils gaisras ir visi žiūrės į mane.",
      "Girdžiu, kaip jie juokiasi už sienos. Aišku, žvengia iš mano šukuosenos.",
    ],
    gradient: "from-lime-400/50 to-green-500/50",
    textParams: "text-lime-100",
    image: "/skubotos_isvados.webp",
  },
  {
    id: "sureiksminimas_sumenkinimas",
    name: "Sureikšminimas ir Sumenkinimas",
    desc: "Klaidas išputi, o pasiekimus sumenkini",
    longDesc:
      "Perdedi savo klaidų ar kitų žmonių sėkmės svarbą (dar vadinama katastrofizavimu) arba neadekvačiai sumažini savo gerąsias savybes.\n\nTaip pat vadinama „žiūrono efektu“ - pro vieną pusę matai padidintą vaizdą, o jei žiūronus apsuki ir žiūri pro kitą pusę - kaip pro mikroskopą.",
    examples: [
      "Padariau klaidą laiške. Mane atleis.",
      "Pasisekė, bet tai nieko nereiškia, kiti vis tiek geresni.",
      "Neišėjau į treniruotę, esu tinginys ir vėpla.",
      "Padėjau draugui, bet čia nieko tokio. Kai kiti padeda - wow, superžmonės.",
    ],
    absurdExamples: [
      "Neatsakiau į vieną laišką per 3 minutes. Griaunu civilizaciją.",
      "Man pavyko, bet čia nieko. Kiti užlipa į Everestą be papildomo deguonies.",
      "Kreivai supjausčiau duoną. Reiškia, esu kulinarinis nusikaltėlis.",
    ],
    gradient: "from-emerald-400/50 to-teal-500/50",
    textParams: "text-emerald-100",
    image: "/sureiksminimas_sumenkinimas.webp",
  },
  {
    id: "emocinis_mastymas",
    name: "Emocinis mąstymas",
    desc: "Jautiesi blogai, vadinasi, ir situacija bloga.",
    longDesc:
      "Savo emocijas laikai tiesos įrodymu.\n\n„Jaučiuosi kaltas, vadinasi ir esu kaltas“.\n\n„Jaučiuosi nevykėlis, tai ir esu nevykėlis.",
    examples: [
      "Jaučiu nerimą, vadinasi, tikrai bus blogai.",
      "Jaučiuosi atstumtas, niekas manęs nemėgsta.",
      "Kažkaip nejauku čia, jie manęs nepriima.",
      "Šiandien neturiu energijos, tai su manimi kažkas rimtai negerai.",
    ],
    absurdExamples: [
      "Autobuse jaučiuosi vienišas, visas pasaulis mane ignoruoja.",
      "Mano nuotaika prasta, tai orų prognozė irgi prasta visam mėnesiui.",
    ],
    gradient: "from-cyan-400/50 to-blue-500/50",
    textParams: "text-cyan-100",
    image: "/emocinis_mastymas.webp",
  },
  {
    id: "turiu_privalau",
    name: "„Turiu“ ir „Privalau“",
    desc: "Save motyvuoji bausmėmis ir griežtais reikalavimais.",
    longDesc:
      "Bandai motyvuoti save žodžiais „privalau“ ir „turiu“, lyg būtum nusikaltėlis ar vergas.\n\nTai sukelia kaltę ir nusivylimą.\n\nO kai taikai tai kitiems - jauti pyktį.\n\nDar vadinama „musturbacija“.",
    examples: [
      "Aš privalau įtikti, kitaip esu blogas žmogus.",
      "Jis turi suprasti mane iš pirmo karto. Kitaip manęs negerbia.",
      "Turiu atsakyti iškart, kitaip esu nemandagus.",
      "Jei draugas susierzino, aš privalau iškart pataisyti nuotaiką, kitaip esu blogas draugas.",
      "Jei prie stalo tyla, būtinai reikia kažką pradėti sakyti.",
    ],
    absurdExamples: [
      "Turiu visada būti linksmas, kitaip esu blogas žmogus ir man atims licenciją juoktis.",
      "Privalau visiems atsakyti per 60 sekundžių, kitaip būsiu išmestas iš žmonių bendruomenės.",
      "Jei šiandien ilsėsiuosi, vakare per žinias rodys, kad esu tinginys.",
    ],
    gradient: "from-blue-400/50 to-indigo-500/50",
    textParams: "text-blue-100",
    image: "/turiu_privalau.webp",
  },
  {
    id: "etiketes",
    name: "Etikečių klijavimas",
    desc: "Vietoj „padariau klaidą“, sakai „aš nevykėlis“.",
    longDesc:
      "Tai kraštutinė apibendrinimo forma.\n\nPriklijuoji sau ar kitiems neigiamą etiketę, o kontekstą ignoruoji.",
    examples: [
      "Pamiršau žadintuvą. Aš tinginys.",
      "Ji nesutiko, ji tiesiog šalta ir bloga.",
      "Nepasakiau nieko pokalbyje. Esu nuobodyla.",
      "Jis pavėlavo į susitikimą. Jis visiškai neatsakingas žmogus.",
    ],
    absurdExamples: [
      "Kartą pasakiau „labas“ per tyliai. Esu Kasparas vaiduoklis.",
      "Neišploviau visų indų iškart. Sąvartyno valkata, tarakonų karalius.",
      "Šitas žmogus pamiršo mano vardą. Jis debilas ar pasikėlęs?",
    ],
    gradient: "from-indigo-400/50 to-violet-500/50",
    textParams: "text-indigo-100",
    image: "/etiketes.webp",
  },
  {
    id: "personalizavimas",
    name: "Personalizavimas",
    desc: "Prisiimi atsakomybę už įvykius, kurių negali kontroliuoti.",
    longDesc:
      "Matai save kaip pagrindinę neigiamų išorinių įvykių priežastį.\n\nNors atsakai ne tu vienas ar visai ne tu.",
    examples: [
      "Šuo susirgo, tai čia per mane, kažką padariau ne taip.",
      "Mūsų komanda pralaimėjo. Aš juos nuvyliau.",
      "Jis tylus per vakarienę. Vadinasi, aš kažką pasakiau ne taip.",
      "Autobuso nebuvo laiku. Čia dėl to, kad aš turėjau juo važiuoti.",
    ],
    absurdExamples: [
      "Lietus užklupo parke. Akivaizdu, čia dėl mano nuodėmių.",
      "Kažkas lifte nusikeikė. Aš provokuoju pyktį.",
      "Kavinėje nėra bandelių. Kad man neparduotų.",
    ],
    gradient: "from-violet-400/50 to-fuchsia-500/50",
    textParams: "text-violet-100",
    image: "/personalizavimas.webp",
  },
];

export const APP_INFO_MODAL: ErrorConfig = {
  id: "app_info",
  name: "Mąstymo klaidos",
  desc: "Kas tai ir kaip naudoti",
  longDesc:
    "Čia gali pasitikrinti ir žymėti dažniausiai pasitaikančias mąstymo klaidas.\n\nTeisti savęs nėra reikalo. Geriau mokytis atpažinti, kas dedasi galvoje.\n\nKuo dažniau pastebi, tuo lengviau keisti įpročius.",
  examplesTitle: "Kaip Tai Veikia",
  examples: [
    "Spausk ant kortelės. Atsivers aprašymas ir pavyzdžiai.",
    "Kai pastebi mąstymo klaidą, spausk + ",
    "Taip matysi, kurios pasitaiko dažniau.",
    "Skaičius kortelėje rodo, kiek kartų pastebėjai tą klaidą.",
  ],
  gradient: "from-slate-700/80 to-slate-900/80",
  textParams: "",
  image: "",
  showReset: true,
};
