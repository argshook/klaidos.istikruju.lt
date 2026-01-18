import { ErrorConfig } from "./types";

export const ALL_ERRORS: ErrorConfig[] = [
  {
    id: "viskas_arba_nieko",
    name: "Viskas Arba Nieko",
    desc: "Jei netobula - vadinasi, visiška nesėkmė.",
    longDesc:
      "Mąstote kraštutinumais. Pavyzdžiui, jei darbas nėra atliktas tobulai, laikote jį visišku fiasko. Pasaulis matomas tik „juoda-balta“ spalvomis, be jokių atspalvių.",
    examples: [
      "„Gavau 8/10. Vadinasi, man visai nesiseka mokytis.“",
      "„Jei nesportuoju kiekvieną dieną, tai visai nesu sportuojantis žmogus.“",
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
      "Remdamiesi vienu faktu, darote globalias išvadas. Jei kartą nepasisekė, manote, kad taip bus „visada“, ir naudojate žodžius „niekada“, „visur“, „visi“.",
    examples: [
      "„Pirmas pasimatymas nepavyko, vadinasi, man niekada nesiseks su santykiais.“",
      "„Pavėlavau vieną kartą - aš visada vėluoju.“",
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
      "Iš didelio paveikslo išsirenkate vieną mažą neigiamą detalę ir susitelkiate tik į ją, taip apkartindami visą patirtį. Lyg lašas deguto statinėje medaus.",
    examples: [
      "„Visi gyrė pristatymą, bet vienas kolega pasakė pastabą - vadinasi, buvo blogai.“",
      "„Atostogos buvo puikios, bet paskutinę dieną lijo - viskas sugadinta.“",
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
      "Atmetate teigiamas patirtis, sakydami, kad jos „nieko nereiškia“. Taip išlaikote negatyvų įsitikinimą, net kai faktai rodo priešingai.",
    examples: [
      "„Pavyko projektas, bet tiesiog pasisekė - čia ne mano nuopelnas.“",
      "„Gavau komplimentą, bet žmonės tiesiog mandagūs.“",
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
      "Dvi formos: 1) Minčių skaitymas: manote, kad kiti jus vertina blogai, bet to nepatikrinate. 2) Ateities būrimas: esate įsitikinę, kad viskas baigsis liūdnai.",
    examples: [
      "„Ji neatrašė valandą - tikrai supyko ant manęs.“",
      "„Jei bandysiu kalbėti susirinkime, tikrai apsijuoksiu.“",
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
      "Perdedate savo klaidų ar kitų žmonių sėkmės svarbą (katastrofizavimas) arba neadekvačiai sumažinate savo gerąsias savybes. Taip pat vadinama „žiūrono efektu“.",
    examples: [
      "„Padariau klaidą laiške - tai katastrofa, mane atleis.“",
      "„Man pasisekė, bet tai nieko nereiškia, kiti vis tiek geresni.“",
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
      "Savo emocijas laikote neginčijamu tiesos įrodymu. „Jaučiuosi kaltas, vadinasi, padariau kažką blogo“. „Jaučiuosi nevykėlis, vadinasi, toks ir esu“.",
    examples: [
      "„Jaučiu nerimą, vadinasi, tikrai bus blogai.“",
      "„Jaučiuosi atstumtas, vadinasi, niekas manęs nemėgsta.“",
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
      "Bandote save motyvuoti žodžiais „privalau“ ir „turiu“, lyg būtumėte nusikaltėlis. Tai sukelia kaltę ir nusivylimą. Kai taikote tai kitiems – jaučiate pyktį.",
    examples: [
      "„Aš privalau visada visiems įtikti, kitaip esu blogas žmogus.“",
      "„Jis turi suprasti mane iš pirmo karto - kitaip jis manęs negerbia.“",
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
      "Tai kraštutinė apibendrinimo forma. Priklijuojate sau ar kitiems rigidinę, neigiamą etiketę, visiškai ignoruodami sudėtingesnį kontekstą.",
    examples: [
      "„Pamiršau žadintuvą - aš esu tinginys.“",
      "„Ji nesutiko - ji tiesiog šalta ir bloga.“",
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
      "Matote save kaip pagrindinę neigiamų išorinių įvykių priežastį, nors iš tikrųjų už tai nesate (arba nesate vieninteliai) atsakingi.",
    examples: [
      "„Vaikas susirgo - vadinasi, aš kažką padariau ne taip.“",
      "„Komanda pralaimėjo - aš juos nuvyliau.“",
    ],
    gradient: "from-violet-400/50 to-fuchsia-500/50",
    textParams: "text-violet-100",
    image: "/personalizavimas.webp",
  },
];

export const APP_INFO_MODAL: ErrorConfig = {
  id: "app_info",
  name: "Trumpa Instrukcija",
  desc: "Kas tai ir kaip naudotis",
  longDesc:
    "Ši lenta padeda kasdien pastebėti mąstymo klaidas.\n\nTikslas nėra save teisti - tik atpažinti, kas vyksta mintyse.\n\nKuo dažniau pastebi, tuo lengviau keisti įpročius.",
  examplesTitle: "Kaip Tai Veikia",
  examples: [
    "Bakstelėk kortelę - atsivers aprašymas ir pavyzdžiai.",
    "Plius piktograma prideda vieną kartą, kai pagauni klaidą.",
    "Skaičius viršuje rodo, kiek kartų ją pastebėjai šiandien ar šią savaitę.",
  ],
  gradient: "from-slate-700/80 to-slate-900/80",
  textParams: "",
  image: "",
  showReset: true,
};
