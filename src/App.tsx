import { useState, useEffect, useCallback } from "react";
import { RotateCcw, HelpCircle, X } from "lucide-react";

// --- Configuration Data ---
interface ErrorConfig {
  id: string;
  name: string;
  desc: string;
  longDesc?: string;
  gradient: string;
  textParams: string;
}

const ALL_ERRORS: ErrorConfig[] = [
  {
    id: "viskas_arba_nieko",
    name: "Viskas Arba Nieko",
    desc: "Tik tobula arba tragiška.",
    longDesc: "Situacijos vertinamos tik dvejose kategorijose, be tarpinių variantų. Jei rezultatas nėra tobulas, jis laikomas visiška nesėkme.",
    gradient: "from-pink-500 to-rose-500",
    textParams: "text-pink-100",
  },
  {
    id: "perdetas_apibendrinimas",
    name: "Perdėtas Apibendrinimas",
    desc: "Vienas faktas = taisyklė.",
    longDesc: "Remiantis vienu neigiamu įvykiu, padaroma globali išvada, kuri taikoma visoms panašioms situacijoms ateityje.",
    gradient: "from-orange-400 to-amber-500",
    textParams: "text-orange-100",
  },
  {
    id: "proto_filtras",
    name: "Proto Filtras",
    desc: "Matai tik tamsą.",
    longDesc: "Susikoncentruojama į vieną neigiamą detalę, ignoruojant visą kontekstą. Taip visa realybės vizija nusidažo tamsiomis spalvomis.",
    gradient: "from-amber-300 to-yellow-500",
    textParams: "text-amber-100 gap-0",
  },
  {
    id: "skubotos_isvados",
    name: "Skubotos Išvados",
    desc: "Spėlioji ateitį.",
    longDesc: "Padaromos neigiamos išvados, neturint faktinių įrodymų. Tai dažnai pasireiškia kaip „minčių skaitymas“ arba „ateities būrimas“.",
    gradient: "from-lime-400 to-green-500",
    textParams: "text-lime-100",
  },
  {
    id: "sureiksminimas_sumenkinimas",
    name: "Iškraipymas",
    desc: "Musė → Dramblys.",
    longDesc: "Perdedamas savo klaidų ar trūkumų reikšmingumas, tuo pačiu sumenkinant savo teigiamas savybes ar pasiekimus.",
    gradient: "from-emerald-400 to-teal-500",
    textParams: "text-emerald-100",
  },
  {
    id: "emocinis_mastymas",
    name: "Emocinis Mąstymas",
    desc: "Jausmai = Faktai.",
    longDesc: "Tikima, kad tai, ką jaučiame, automatiškai yra tiesa. „Jaučiuosi kvailas, vadinasi, esu kvailas“.",
    gradient: "from-cyan-400 to-blue-500",
    textParams: "text-cyan-100",
  },
  {
    id: "turiu_privalau",
    name: "Turiu / Privalau",
    desc: "Kaltės plakimas.",
    longDesc: "Savo elgesiui taikomi griežti reikalavimai („privalau“, „turiu“). Jų neįvykdžius kyla kaltė, pyktis ar nusivylimas.",
    gradient: "from-blue-400 to-indigo-500",
    textParams: "text-blue-100",
  },
  {
    id: "etiketes",
    name: "Etiketės",
    desc: "„Aš nevykėlis“.",
    longDesc: "Užuot apibūdinus klaidą, sau ar kitiems priklijuojama neigiama, viską apibendrinanti etiketė.",
    gradient: "from-indigo-400 to-violet-500",
    textParams: "text-indigo-100",
  },
  {
    id: "personalizavimas",
    name: "Prisiėmimas",
    desc: "Viska dėl manęs.",
    longDesc: "Prisiimama atsakomybė už neigiamus įvykius, kurių iš tikrųjų negalėjote kontroliuoti.",
    gradient: "from-violet-400 to-fuchsia-500",
    textParams: "text-violet-100",
  },
  {
    id: "pozityviu_nuvertinimas",
    name: "Pozityvumo Nuvertinimas",
    desc: "Nurašai tai, kas gera.",
    longDesc: "Ignoruoji arba sumenkini teigiamas patirtis, teigdamas, kad jos „nesiskaito“ dėl vienokių ar kitokių priežasčių. Taip išlaikomas negatyvus įsitikinimas, net kai faktai rodo priešingai.",
    gradient: "from-rose-500 to-red-600",
    textParams: "text-rose-100",
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
    if (window.confirm("Nulinti statistiką?")) {
      setCounts(
        Object.fromEntries(ALL_ERRORS.map((e) => [e.id, 0])),
      );
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
        onClick={() => increment(error.id)}
        className={`
          relative group isolate overflow-hidden transition-all duration-300 ease-out active:scale-95 touch-manipulation
          w-full aspect-[4/5] rounded-[2rem] flex flex-col justify-between p-4 shadow-lg
          bg-[#1e293b] border border-white/5
        `}
      >
        {/* --- DYNAMIC BACKGROUND FILLS --- */}
        <div 
          className={`absolute inset-0 transition-opacity duration-500 ease-out bg-gradient-to-br ${error.gradient}`}
          style={{ opacity: isActive ? 0.2 + (intensity * 0.6) : 0 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay" />
        {isActive && (
           <div className={`absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t ${error.gradient} to-transparent opacity-40 blur-xl pointer-events-none`} />
        )}

        {/* --- FOREGROUND CONTENT --- */}
        <div className="flex justify-between items-start w-full z-10">
            <span className={`text-4xl font-black tracking-tighter transition-colors duration-300 drop-shadow-lg
              ${isActive ? "text-white scale-110 origin-left" : "text-slate-600"}
            `}>
              {count > 0 ? count : 0}
            </span>
            
            {/* Help Icon */}
            <div 
              onClick={(e) => { e.stopPropagation(); setInfoModal(error); }}
              className="text-white/30 hover:text-white transition-colors p-2 -m-2 z-20"
            >
              <HelpCircle size={18} />
            </div>
        </div>

        <div className="z-10 text-left space-y-1">
          <h3 className={`font-bold leading-none text-sm text-white drop-shadow-md pr-2`}>
            {error.name}
          </h3>
          <p className={`text-[10px] font-medium leading-tight text-slate-300/80`}>
            {error.desc}
          </p>
        </div>
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-sans selection:bg-rose-500/30 overflow-hidden relative">
      {/* Background Effect */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-rose-600/10 blur-[100px] pointer-events-none" />

      {/* Header */}
      <header className="relative z-50 px-4 pt-10 pb-2 flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-black text-white tracking-tight">
            Ištikrųjų
          </h1>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">
            Kognityvinis Stebėtojas
          </p>
        </div>
        <button
          onClick={resetAll}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white transition-all shadow-lg border border-white/5 active:scale-90"
        >
          <RotateCcw size={18} />
        </button>
      </header>

      {/* Main Grid */}
      <main className="relative z-10 px-2 pb-4 max-w-lg mx-auto w-full flex flex-col gap-2">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {ALL_ERRORS.map((error, index) => renderCard(error, index))}
        </div>
      </main>

      {/* Info Modal */}
      {infoModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setInfoModal(null)}
          />
          
          {/* Modal Content */}
          <div 
            className="relative w-full max-w-sm bg-[#1e293b] rounded-3xl p-6 shadow-2xl border border-white/10 overflow-hidden animate-in zoom-in-95 duration-200"
          >
             {/* Gradient Accent */}
            <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${infoModal.gradient} opacity-20 pointer-events-none`} />
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${infoModal.gradient} flex items-center justify-center shadow-lg`}>
                   <HelpCircle className="text-white" size={24} />
                </div>
                <button 
                  onClick={() => setInfoModal(null)}
                  className="p-2 bg-slate-800/50 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <h2 className="text-2xl font-black text-white mb-2 leading-tight">
                {infoModal.name}
              </h2>
              
              <p className="text-white/80 font-medium text-lg mb-4 leading-snug">
                {infoModal.desc}
              </p>

              <div className="bg-slate-900/50 rounded-2xl p-4 border border-white/5">
                <p className="text-slate-400 text-sm leading-relaxed">
                  {infoModal.longDesc || infoModal.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
