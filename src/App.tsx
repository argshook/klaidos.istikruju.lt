import { useState, useEffect, useCallback } from "react";
import { RotateCcw, X, Plus } from "lucide-react";

// --- Configuration Data ---
interface ErrorConfig {
  id: string;
  name: string;
  desc: string;
  longDesc?: string;
  gradient: string;
  textParams: string;
  image: string;
}

const ALL_ERRORS: ErrorConfig[] = [
  {
    id: "viskas_arba_nieko",
    name: "Viskas Arba Nieko",
    desc: "Jei netobula — vadinasi, visiška nesėkmė.",
    longDesc:
      "Mąstote kraštutinumais. Pavyzdžiui, jei darbas nėra atliktas tobulai, laikote jį visišku fiasko. Pasaulis matomas tik „juoda-balta“ spalvomis, be jokių atspalvių.",
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
    gradient: "from-violet-400/50 to-fuchsia-500/50",
    textParams: "text-violet-100",
    image: "/personalizavimas.webp",
  },
];

const STORAGE_KEY = "bingo_cognitive_v5";

const App = () => {
  const [counts, setCounts] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.counts) return parsed.counts;
      } catch (e) {
        console.error(e);
      }
    }
    return Object.fromEntries(ALL_ERRORS.map((e) => [e.id, 0]));
  });

  const [infoModal, setInfoModal] = useState<ErrorConfig | null>(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ counts }));
  }, [counts]);

  const increment = useCallback((id: string) => {
    // navigator.vibrate?.(15); // Stronger haptic feedback
    setCounts((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  }, []);

  const resetAll = () => {
    if (window.confirm("Ištrinti skaičiavimus?")) {
      setCounts(Object.fromEntries(ALL_ERRORS.map((e) => [e.id, 0])));
    }
  };

  const renderCard = (error: ErrorConfig, index: number) => {
    const count = counts[error.id] || 0;
    const isActive = count > 0;

    // Scale visuals based on count magnitude (logarithmic feel)
    const intensity = Math.min(count / 10, 1);

    return (
      <button
        key={index}
        onClick={() => setInfoModal(error)}
        className={`
          relative group isolate overflow-hidden transition-all duration-300 ease-out active:scale-95 touch-manipulation
          w-full aspect-[4/5] rounded-[2rem] flex flex-col justify-between p-4 shadow-lg
          bg-[#1e293b] border border-white/5
        `}
      >
        {/* --- DYNAMIC BACKGROUND FILLS --- */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ease-out bg-gradient-to-br ${error.gradient}`}
          style={{ opacity: isActive ? 0.2 + intensity * 0.8 : 0 }}
        />

        {/* Helper illustration background - Cover Art Style */}
        <div
          className="opacity-40 mix-blend-overlay transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${error.image})` }}
        />

        <div className="bg-gradient-to-b from-white/10 to-transparent group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay absolute inset-0 opacity-0 pointer-events-none" />
        {isActive && (
          <div
            className={`absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t ${error.gradient} to-transparent opacity-40 blur-xl pointer-events-none`}
          />
        )}

        {/* --- FOREGROUND CONTENT --- */}
        <div className="z-10 flex items-start justify-between w-full">
          <span
            className={`text-3xl font-black tracking-tighter transition-colors duration-300 drop-shadow-lg
              ${isActive ? "scale-110 origin-left text-white" : "text-slate-600"}
            `}
          >
            {count > 0 ? count : 0}
          </span>

          {/* Increment Button */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              increment(error.id);
            }}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white/70 hover:text-white transition-all active:scale-90 border-white/10 z-20 p-2 border rounded-full"
          >
            <Plus size={18} />
          </div>
        </div>

        <div className="space-y-1 relative z-10 text-left">
          <h3
            className={`drop-shadow-md pr-2 text-lg font-bold leading-tight text-white`}
          >
            {error.name}
          </h3>
          <p className={`text-slate-300/90 line-clamp-2 text-xs font-medium`}>
            {error.desc}
          </p>
        </div>
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-sans selection:bg-rose-500/30 overflow-hidden relative">
      {/* Background Effect */}
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-rose-600/10 blur-[100px] pointer-events-none" />

      {/* Header */}
      <header className="relative z-50 flex items-end justify-between px-4 pt-10 pb-8">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-white">
            Mąstymo Klaidos
          </h1>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">
            Kognityvinis Stebėtojas
          </p>
        </div>
        <button
          onClick={resetAll}
          className="bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white transition-all border-white/5 active:scale-90 flex items-center justify-center w-10 h-10 border rounded-full shadow-lg"
        >
          <RotateCcw size={18} />
        </button>
      </header>

      {/* Main Grid */}
      <main className="gap-2 relative z-10 flex flex-col w-full max-w-lg px-2 pb-4 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {ALL_ERRORS.map((error, index) => renderCard(error, index))}
        </div>
      </main>

      {/* Info Modal */}
      {infoModal && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 animate-in fade-in duration-200">
          {/* Backdrop */}
          <div
            className="bg-black/60 backdrop-blur-sm absolute inset-0"
            onClick={() => setInfoModal(null)}
          />

          {/* Modal Content */}
          <div className="relative w-full max-w-sm bg-[#1e293b] rounded-[2rem] shadow-2xl border border-white/10 overflow-hidden animate-in slide-in-from-bottom-10 sm:zoom-in-95 duration-300 flex flex-col">
            {/* Gradient Header Area */}
            <div
              className={`relative w-full p-6 bg-gradient-to-br ${infoModal.gradient} overflow-hidden`}
            >
              {/* Pattern overlay for texture */}
              <div
                className="opacity-20 mix-blend-overlay absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1h2v2H1V1zm4 0h2v2H5V1zm4 0h2v2H9V1zm4 0h2v2H13V1zm4 0h2v2H17V1zM1 5h2v2H1V5zm4 0h2v2H5V5zm4 0h2v2H9V5zm4 0h2v2H13V5zm4 0h2v2H17V5zM1 9h2v2H1V9zm4 0h2v2H5V9zm4 0h2v2H9V9zm4 0h2v2H13V9zm4 0h2v2H17V9zM1 13h2v2H1v-2zm4 0h2v2H5v-2zm4 0h2v2H9v-2zm4 0h2v2H13v-2zm4 0h2v2H17v-2zM1 17h2v2H1v-2zm4 0h2v2H5v-2zm4 0h2v2H9v-2zm4 0h2v2H13v-2zm4 0h2v2H17v-2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                }}
              />

              {/* Illustration in Header - Cover Art Style */}
              <div
                className="opacity-30 mix-blend-overlay absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: `url(${infoModal.image})` }}
              />

              <div className="gap-4 relative z-10 flex flex-col">
                <div className="flex items-start justify-end w-full">
                  <button
                    onClick={() => setInfoModal(null)}
                    className="bg-black/20 hover:bg-black/40 text-white/80 hover:text-white transition-colors backdrop-blur-sm p-2 rounded-full"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div>
                  <h2 className="drop-shadow-sm text-2xl font-black leading-tight tracking-tight text-white">
                    {infoModal.name}
                  </h2>
                  <p className="text-white/90 drop-shadow-sm opacity-90 mt-1 text-sm font-bold leading-snug">
                    {infoModal.desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 bg-[#1e293b]">
              <div className="bg-slate-900/50 rounded-2xl border-white/5 p-5 border shadow-inner">
                <p className="text-slate-300 text-sm font-medium leading-relaxed">
                  {infoModal.longDesc}
                </p>
              </div>

              <div className="flex justify-center mt-6">
                <button
                  onClick={() => setInfoModal(null)}
                  className="rounded-xl bg-slate-800 border-white/5 active:scale-95 transition-all hover:bg-slate-700 px-8 py-3 text-sm font-bold tracking-wide text-white border shadow-lg"
                >
                  Uždaryti
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
