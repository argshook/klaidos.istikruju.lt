import { useState, useEffect, useCallback } from "react";
import {
  RotateCcw,
  Download,
  Upload,
  Plus,
  X,
  Copy,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

// --- Configuration Data ---
// --- Configuration Data ---
interface ErrorConfig {
  id: string;
  name: string;
  desc: string;
}

const BONUS: ErrorConfig = {
  id: "pozityviu_nuvertinimas",
  name: "Pozityvių dalykų nuvertinimas",
  desc: "Teigiamą patyrimą atmeti („nesiskaites“), taip palaikydamas negatyvų pasaulio vaizdą.",
};

const ERRORS: ErrorConfig[] = [
  {
    id: "viskas_arba_nieko",
    name: "Viskas arba nieko",
    desc: "„Juoda–balta“ mąstymas: jei netobula — vadinasi blogai.",
  },
  {
    id: "perdetas_apibendrinimas",
    name: "Perdėtas apibendrinimas",
    desc: "Vienas įvykis tampa „visada / niekada“ dėsniu.",
  },
  {
    id: "proto_filtras",
    name: "Proto filtras",
    desc: "Išsirenki vieną negatyvią detalę ir per ją matai visumą.",
  },
  {
    id: "skubotos_isvados",
    name: "Skubotos išvados",
    desc: "Neigiama išvada be faktų (minčių skaitymas / ateities numatymas).",
  },
  {
    id: "sureiksminimas_sumenkinimas",
    name: "Sureikšminimas ir sumenkinimas",
    desc: "Klaidos „per didelės“, geri dalykai „per maži“ (katastrofizavimas).",
  },
  {
    id: "emocinis_mastymas",
    name: "Emocinis mąstymas",
    desc: "„Jaučiu — vadinasi tiesa“.",
  },
  {
    id: "turiu_privalau",
    name: "„Turiu / privalau“",
    desc: "Spaudimas sau ar kitiems kuria kaltę ar pyktį.",
  },
  {
    id: "etiketes",
    name: "Etikečių klijavimas",
    desc: "Viena klaida tampa tapatybe („esu nevykėlis“).",
  },
  {
    id: "personalizavimas",
    name: "Personalizavimas",
    desc: "Prisiskiri atsakomybę už tai, ko nekontroliuoji.",
  },
];

const STORAGE_KEY = "bingo_cognitive_v2";

const App = () => {
  // --- State ---
  const [counts, setCounts] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved).counts;
      } catch (e) {
        console.error(e);
      }
    }
    return Object.fromEntries([...ERRORS.map((e) => [e.id, 0]), [BONUS.id, 0]]);
  });

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [boardIds, setBoardIds] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"export" | "import">("export");
  const [ioText, setIoText] = useState("");
  const [copied, setCopied] = useState(false);

  // --- Board Generation ---
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.boardIds) {
          setBoardIds(parsed.boardIds);
          return;
        }
      } catch (e) {}
    }
    // Generate new shuffled board
    const ids: string[] = [];
    for (let i = 0; i < 9; i++) ERRORS.forEach((e) => ids.push(e.id));
    const shuffled = [...ids].sort(() => Math.random() - 0.5);
    setBoardIds(shuffled);
  }, []);

  // --- Persistence ---
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ counts, boardIds }));
  }, [counts, boardIds]);

  // --- Actions ---
  const increment = useCallback((id: string) => {
    setCounts((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    setSelectedId(id);
  }, []);

  const resetAll = () => {
    if (window.confirm("Ar tikrai norite nulinti visus rezultatus?")) {
      setCounts(
        Object.fromEntries([...ERRORS.map((e) => [e.id, 0]), [BONUS.id, 0]]),
      );
      setSelectedId(null);
    }
  };

  const handleExport = () => {
    setIoText(JSON.stringify({ counts, boardIds }, null, 2));
    setModalMode("export");
    setIsModalOpen(true);
  };

  const handleImport = () => {
    setIoText("");
    setModalMode("import");
    setIsModalOpen(true);
  };

  const applyImport = () => {
    try {
      const data = JSON.parse(ioText);
      if (data.counts) setCounts(data.counts);
      if (data.boardIds) setBoardIds(data.boardIds);
      setIsModalOpen(false);
    } catch (e) {
      alert("Klaida: Neteisingas JSON formatas");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(ioText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0b1220] text-[#e7eefc] p-4 md:p-8 selection:bg-blue-500/30">
      <div className="max-w-7xl space-y-8 mx-auto">
        {/* Header */}
        <header className="md:flex-row md:items-end gap-6 flex flex-col justify-between">
          <div className="space-y-2">
            <h1 className="bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-3xl font-bold tracking-tight text-transparent">
              Mąstymo klaidų bingo
            </h1>
            <p className="text-slate-400 max-w-2xl text-sm">
              Fiksuokite savo kognityvinius iškraipymus realiuoju laiku.
              Bakstelėkite langelį radę klaidą savo mąstyme.
            </p>
          </div>

          <div className="gap-3 flex flex-wrap">
            <button
              onClick={handleExport}
              className="gap-2 bg-slate-800/50 hover:bg-slate-800 border-slate-700 rounded-xl transition-all flex items-center px-4 py-2 text-sm font-medium border"
            >
              <Download size={16} /> Eksportuoti
            </button>
            <button
              onClick={handleImport}
              className="gap-2 bg-slate-800/50 hover:bg-slate-800 border-slate-700 rounded-xl transition-all flex items-center px-4 py-2 text-sm font-medium border"
            >
              <Upload size={16} /> Importuoti
            </button>
            <button
              onClick={resetAll}
              className="gap-2 bg-red-500/10 hover:bg-red-500/20 border-red-500/30 rounded-xl transition-all flex items-center px-4 py-2 text-sm font-medium text-red-400 border"
            >
              <RotateCcw size={16} /> Nulinti
            </button>
          </div>
        </header>

        {/* Bonus Section */}
        <section className="rounded-2xl border-red-500/20 bg-gradient-to-br from-red-500/10 to-transparent relative p-6 overflow-hidden border">
          <div className="md:flex-row gap-6 flex flex-col items-center justify-between">
            <div className="space-y-3">
              <span className="gap-2 bg-red-500/20 inline-flex items-center px-3 py-1 text-xs font-bold tracking-wider text-red-300 uppercase rounded-full">
                <AlertTriangle size={14} /> Didžiausias XP Nuostolis
              </span>
              <h2 className="text-xl font-semibold">{BONUS.name}</h2>
              <p className="text-slate-400 max-w-xl text-sm">{BONUS.desc}</p>
            </div>
            <div className="gap-4 flex items-center">
              <div className="text-4xl font-black bg-black/40 px-6 py-4 rounded-2xl border border-white/5 min-w-[100px] text-center">
                {counts[BONUS.id]}
              </div>
              <button
                onClick={() => increment(BONUS.id)}
                className="hover:bg-red-400 rounded-2xl shadow-red-500/20 transition-transform active:scale-95 p-4 text-white bg-red-500 shadow-lg"
              >
                <Plus size={32} />
              </button>
            </div>
          </div>
        </section>

        {/* Main Grid */}
        <section className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-slate-300 gap-2 flex items-center text-lg font-medium">
              9×9 Lenta
              <span className="text-slate-500 text-xs font-normal">
                (81 langelis)
              </span>
            </h2>
            {selectedId && (
              <div className="animate-pulse text-xs text-blue-400">
                Paskutinis žymėjimas:{" "}
                {ERRORS.find((e) => e.id === selectedId)?.name}
              </div>
            )}
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-2">
            {boardIds.map((id, index) => {
              const error = ERRORS.find((e) => e.id === id);
              const isHot = selectedId === id;
              return (
                <button
                  key={index}
                  onClick={() => increment(id)}
                  className={`relative flex flex-col justify-between p-3 h-28 rounded-xl border text-left transition-all group overflow-hidden
                    ${
                      isHot
                        ? "bg-blue-500/20 border-blue-400/50 ring-2 ring-blue-500/20"
                        : "bg-slate-900/50 border-white/5 hover:border-white/10 hover:bg-slate-800/50"
                    }`}
                >
                  <span
                    className={`text-[10px] leading-tight font-medium break-words ${isHot ? "text-blue-100" : "text-slate-300"}`}
                  >
                    {error?.name}
                  </span>
                  <div className="flex items-end justify-between mt-auto">
                    <span className="text-[10px] text-slate-500 opacity-50 font-mono">
                      #{index + 1}
                    </span>
                    <span
                      className={`text-lg font-bold ${isHot ? "text-blue-300" : "text-slate-500"}`}
                    >
                      {counts[id]}
                    </span>
                  </div>
                  {/* Subtle active state decoration */}
                  {isHot && (
                    <div className="absolute top-0 right-0 w-1 h-1 bg-blue-400 rounded-full m-2 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
                  )}
                </button>
              );
            })}
          </div>
        </section>

        {/* Legend / Stats */}
        <section className="bg-slate-900/40 rounded-2xl border-white/5 p-6 border">
          <h3 className="text-slate-400 mb-6 text-sm font-semibold tracking-widest uppercase">
            Suvestinė ir aprašymai
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ERRORS.map((error) => (
              <div
                key={error.id}
                onClick={() => setSelectedId(error.id)}
                className={`flex gap-4 p-4 rounded-xl border transition-all cursor-pointer ${selectedId === error.id ? "bg-blue-500/10 border-blue-500/30" : "bg-black/20 border-transparent hover:border-white/10"}`}
              >
                <div className="space-y-1 flex-1">
                  <h4 className="text-sm font-bold text-white">{error.name}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {error.desc}
                  </p>
                </div>
                <div className="text-slate-600 self-center px-2 text-xl font-black">
                  {counts[error.id]}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Modal - Export/Import */}
      {isModalOpen && (
        <div className="bg-black/80 backdrop-blur-sm fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-2xl bg-[#0f1b33] border border-white/10 rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="border-white/5 flex items-center justify-between p-6 border-b">
              <h3 className="text-lg font-semibold capitalize">
                {modalMode} duomenis
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="hover:bg-white/5 p-2 rounded-full"
              >
                <X size={20} />
              </button>
            </div>
            <div className="space-y-4 p-6">
              <p className="text-slate-400 text-sm">
                {modalMode === "export"
                  ? "Nukopijuokite šį tekstą ir išsisaugokite kitur kaip atsarginę kopiją."
                  : "Įklijuokite anksčiau eksportuotą JSON tekstą."}
              </p>
              <textarea
                value={ioText}
                onChange={(e) => setIoText(e.target.value)}
                spellCheck={false}
                className="bg-black/40 border-white/10 rounded-xl focus:outline-none focus:ring-2 ring-blue-500/50 w-full h-64 p-4 font-mono text-xs text-blue-200 border"
              />
              <div className="gap-3 flex justify-end">
                {modalMode === "export" ? (
                  <button
                    onClick={copyToClipboard}
                    className="gap-2 hover:bg-blue-500 rounded-xl transition-all flex items-center px-6 py-2 text-sm font-bold bg-blue-600"
                  >
                    {copied ? <CheckCircle2 size={16} /> : <Copy size={16} />}
                    {copied ? "Nukopijuota!" : "Kopijuoti"}
                  </button>
                ) : (
                  <button
                    onClick={applyImport}
                    className="gap-2 hover:bg-green-500 rounded-xl transition-all flex items-center px-6 py-2 text-sm font-bold bg-green-600"
                  >
                    Pritaikyti importą
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
