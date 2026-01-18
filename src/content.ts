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
      "Pirmas pasimatymas nepavyko, vadinasi, man niekada nesiseks su santykiais.",
      "Padariau klaidą, aš visur klystu, niekas nesiseka.",
      "Kolega nepasijuokė iš vieno mano juoko. Vadinasi, niekas niekada nesupranta mano humoro.",
      "Draugas neatėjo į vieną susitikimą. Vadinasi, žmonėms mano draugystė visada antraeilis dalykas.",
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
      "Draugė pasakė, kad mano nuotrauka graži. Ji tiesiog geri yra žmonės, kitaip nepasakytų.",
      "Klientas patenkintas, bet jis turbūt net nesupranta, kaip turėtų atrodyti geras darbas.",
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
      "Ji perskaitė žinutę ir tylu. Aišku, dabar galvoja, kaip mandagiai manęs atsisakyti.",
      "Jei paprašysiu pagalbos, visi matys, kad esu beviltiškas.",
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
      "Padariau klaidą laiške - tai katastrofa, mane atleis.",
      "Man pasisekė, bet tai nieko nereiškia, kiti vis tiek geresni.",
      "Jei neišėjau į treniruotę, tai esu bevalis tinginys.",
      "Pasakiau ne tą žodį per susitikimą - visi turbūt galvoja, kad esu visiškai neprofesionalus.",
      "Padėjau draugui, bet čia nieko tokio, bet kai kiti padeda - wow, superžmonės.",
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
      "Savo emocijas laikai neginčijamu tiesos įrodymu.\n\n„Jaučiuosi kaltas, vadinasi, padariau kažką blogo“.\n\n„Jaučiuosi nevykėlis, vadinasi, taip ir yra.",
    examples: [
      "Jaučiu nerimą, vadinasi, tikrai bus blogai.",
      "Jaučiuosi atstumtas, vadinasi, niekas manęs nemėgsta.",
      "Man nejauku su jais, vadinasi, jie žmonės manęs nepriima.",
      "Jaučiuosi keistai per gimtadienį, vadinasi, visi pastebi, kad aš nepritampu.",
      "Šiandien neturiu energijos, vadinasi, su manimi kažkas rimtai negerai.",
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
      "Aš privalau visada visiems įtikti, kitaip esu blogas žmogus.",
      "Jis turi suprasti mane iš pirmo karto - kitaip jis manęs negerbia.",
      "Turiu atsakyti į žinutes iškart, kitaip esu nemandagus.",
      "Jei draugas susierzino, aš privalau iškart pataisyti nuotaiką, kitaip esu blogas draugas.",
      "Turiu kasdien būti produktyvus, kitaip neturiu teisės ilsėtis.",
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
      "Nepasakiau nieko pokalbyje. Esu nuobodus žmogus.",
      "Jis pavėlavo į susitikimą. Aišku, jis yra neatsakingas žmogus.",
      "Pamiršau kažkieno vardą. Aš esu socialinis analfabetas.",
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
      "Matai save kaip pagrindinę neigiamų išorinių įvykių priežastį.\n\nNors iš tikrųjų atsakai ne tu (arba ne tu vienas).",
    examples: [
      "Šuo susirgo, tai čia per mane, kažką padariau ne taip.",
      "Mūsų komanda pralaimėjo. Aš juos nuvyliau.",
      "Jam liūdna, vadinasi, aš jį įskaudinau.",
      "Draugas tylus per vakarienę. Vadinasi, aš kažką pasakiau ne taip.",
      "Autobuso nebuvo laiku. Aišku, čia dėl to, kad išėjau per vėlai.",
    ],
    gradient: "from-violet-400/50 to-fuchsia-500/50",
    textParams: "text-violet-100",
    image: "/personalizavimas.webp",
  },
];

export const APP_INFO_MODAL: ErrorConfig = {
  id: "app_info",
  name: "Mąstymo klaidos",
  desc: "Kas tai ir kaip naudotis",
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
