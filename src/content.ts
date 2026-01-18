import { ErrorConfig } from "./types";

export const ALL_ERRORS: ErrorConfig[] = [
  {
    id: "viskas_arba_nieko",
    name: "Viskas Arba Nieko",
    desc: "Jei netobula - vadinasi, visiška nesėkmė.",
    longDesc:
      "Mąstai kraštutinumais. Pavyzdžiui, jei darbas nėra atliktas tobulai, laikai jį visišku fiasko. Pasaulį matai tik „juoda-balta“ spalvomis, be jokių atspalvių.",
    examples: [
      "Gavau 8/10. Vadinasi, man visai nesiseka mokytis.",
      "Jei nesportuoju kiekvieną dieną, tai visai nesu sportuojantis žmogus.",
      "Projektas nepavyko iš pirmo karto, taigi esu visiškas nevykėlis.",
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
      "Remiesi vienu faktu, darai globalias išvadas. Jei kartą nepasisekė, manai, kad taip bus „visada“, ir naudoji žodžius „niekada“, „visur“, „visi“.",
    examples: [
      "Pirmas pasimatymas nepavyko, vadinasi, man niekada nesiseks su santykiais.",
      "Pavėlavau vieną kartą - aš visada vėluoju.",
      "Padariau klaidą prezentacijoje, vadinasi, aš visur klystu.",
    ],
    gradient: "from-orange-400/50 to-amber-500/50",
    textParams: "text-orange-100",
    image: "/perdetas_apibendrinimas.webp",
  },
  {
    id: "proto_filtras",
    name: "Proto Filtras",
    desc: "Fokusuojatės į vieną negatyvią detalę, ignoruodami visumą.",
    longDesc:
      "Iš didelio paveikslo išsirenki vieną mažą neigiamą detalę ir susitelki tik į ją, taip apkartini visą patirtį. Lyg lašas deguto statinėje medaus.",
    examples: [
      "Visi gyrė pristatymą, bet vienas kolega pasakė pastabą - vadinasi, buvo blogai.",
      "Atostogos buvo puikios, bet paskutinę dieną lijo - viskas sugadinta.",
      "Draugai buvo patenkinti vakarėliu, bet aš girdėjau vieną kritiką ir ji sugadino nuotaiką.",
    ],
    gradient: "from-amber-300/50 to-yellow-500/50",
    textParams: "text-amber-100 gap-0",
    image: "/proto_filtras.webp",
  },
  {
    id: "pozityviu_nuvertinimas",
    name: "Pozityvumo Nuvertinimas",
    desc: "Teigiami dalykai „nesiskaito“ dėl vienokių ar kitokių priežasčių.",
    longDesc:
      "Atmeti teigiamas patirtis ir sakai, kad jos „nieko nereiškia“. Taip išlaikai negatyvų įsitikinimą, net kai faktai rodo priešingai.",
    examples: [
      "Pavyko projektas, bet tiesiog pasisekė - čia ne mano nuopelnas.",
      "Gavau komplimentą, bet žmonės tiesiog mandagūs.",
      "Vadovas pagyrė, bet tai tik todėl, kad jam reikėjo gero žodžio.",
    ],
    gradient: "from-rose-500/50 to-red-600/50",
    textParams: "text-rose-100",
    image: "/pozityvu_nuvertinimas.webp",
  },
  {
    id: "skubotos_isvados",
    name: "Skubotos Išvados",
    desc: "Padarote neigiamas išvadas be aiškių įrodymų.",
    longDesc:
      "Dvi formos: 1) Minčių skaitymas: manai, kad kiti tave vertina blogai, bet to nepatikrini. 2) Ateities būrimas: įsitikini, kad viskas baigsis liūdnai.",
    examples: [
      "Ji neatrašė valandą - tikrai supyko ant manęs.",
      "Jei bandysiu kalbėti susirinkime, tikrai apsijuoksiu.",
      "Vadovas nepasisveikino koridoriuje, vadinasi, kažkuo nusivylė.",
    ],
    gradient: "from-lime-400/50 to-green-500/50",
    textParams: "text-lime-100",
    image: "/skubotos_isvados.webp",
  },
  {
    id: "sureiksminimas_sumenkinimas",
    name: "Sureikšminimas / Sumenkinimas",
    desc: "Klaidas išpučiate, o pasiekimus traukiate iki nykštukų.",
    longDesc:
      "Perdedi savo klaidų ar kitų žmonių sėkmės svarbą (katastrofizavimas) arba neadekvačiai sumažini savo gerąsias savybes. Taip pat vadinama „žiūrono efektu“.",
    examples: [
      "Padariau klaidą laiške - tai katastrofa, mane atleis.",
      "Man pasisekė, bet tai nieko nereiškia, kiti vis tiek geresni.",
      "Jei neišėjau į treniruotę, tai esu tingus ir bevalis.",
    ],
    gradient: "from-emerald-400/50 to-teal-500/50",
    textParams: "text-emerald-100",
    image: "/sureiksminimas_sumenkinimas.webp",
  },
  {
    id: "emocinis_mastymas",
    name: "Emocinis Mąstymas",
    desc: "Jaučiuosi blogai, vadinasi, situacija yra bloga.",
    longDesc:
      "Savo emocijas laikai neginčijamu tiesos įrodymu. „Jaučiuosi kaltas, vadinasi, padariau kažką blogo“. „Jaučiuosi nevykėlis, vadinasi, toks ir esu“.",
    examples: [
      "Jaučiu nerimą, vadinasi, tikrai bus blogai.",
      "Jaučiuosi atstumtas, vadinasi, niekas manęs nemėgsta.",
      "Man nejauku susitikime, vadinasi, šie žmonės manęs nepriima.",
    ],
    gradient: "from-cyan-400/50 to-blue-500/50",
    textParams: "text-cyan-100",
    image: "/emocinis_mastymas.webp",
  },
  {
    id: "turiu_privalau",
    name: "„Turiu“ ir „Privalau“",
    desc: "Save motyvuojate bausmėmis ir griežtais reikalavimais.",
    longDesc:
      "Bandai save motyvuoti žodžiais „privalau“ ir „turiu“, lyg būtum nusikaltėlis. Tai sukelia kaltę ir nusivylimą. Kai taikai tai kitiems – jauti pyktį.",
    examples: [
      "Aš privalau visada visiems įtikti, kitaip esu blogas žmogus.",
      "Jis turi suprasti mane iš pirmo karto - kitaip jis manęs negerbia.",
      "Turiu atsakyti į žinutes iškart, kitaip esu nemandagus.",
    ],
    gradient: "from-blue-400/50 to-indigo-500/50",
    textParams: "text-blue-100",
    image: "/turiu_privalau.webp",
  },
  {
    id: "etiketes",
    name: "Etikečių Klijavimas",
    desc: "Vietoj „padariau klaidą“, sakote „aš esu nevykėlis“.",
    longDesc:
      "Tai kraštutinė apibendrinimo forma. Priklijuoji sau ar kitiems rigidinę, neigiamą etiketę ir visiškai ignoruoji sudėtingesnį kontekstą.",
    examples: [
      "Pamiršau žadintuvą - aš esu tinginys.",
      "Ji nesutiko - ji tiesiog šalta ir bloga.",
      "Nepasakiau nieko pokalbyje - esu nuobodus žmogus.",
    ],
    gradient: "from-indigo-400/50 to-violet-500/50",
    textParams: "text-indigo-100",
    image: "/etiketes.webp",
  },
  {
    id: "personalizavimas",
    name: "Personalizavimas",
    desc: "Prisiimate atsakomybę už įvykius, kurių negalite kontroliuoti.",
    longDesc:
      "Matai save kaip pagrindinę neigiamų išorinių įvykių priežastį, nors iš tikrųjų už tai ne tu (arba ne tu vienas) atsakai.",
    examples: [
      "Vaikas susirgo - vadinasi, aš kažką padariau ne taip.",
      "Komanda pralaimėjo - aš juos nuvyliau.",
      "Draugė liūdna, vadinasi, aš ją įskaudinau.",
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
    "Čia gali prisiminti ir žymėti dažniausiai pasitaikančias mąstymo klaidas.\n\Teisti savęs nėra ko, tik atpažinti, kas dedasi galvoje.\n\nKuo dažniau pastebi, tuo lengviau keisti įpročius.",
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
