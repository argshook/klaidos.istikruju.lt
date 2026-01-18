import { useState, useEffect, useCallback } from "react";
import { RotateCcw, X, Plus, HelpCircle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { ALL_ERRORS, APP_INFO_MODAL } from "./content";
import { ErrorConfig } from "./types";

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
      <motion.button
        key={index}
        onClick={() => setInfoModal(error)}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 500, damping: 32 }}
        className={`
          relative group isolate overflow-hidden transition-all duration-300 ease-out active:scale-95 touch-manipulation
          w-full aspect-[4/5] rounded-[2rem] flex flex-col justify-between p-4 shadow-lg
          bg-[#1e293b] border border-white/5
        `}
      >
        <div
          className={`absolute inset-0 transition-opacity duration-500 ease-out bg-gradient-to-br ${error.gradient}`}
          style={{ opacity: isActive ? 0.2 + intensity * 0.8 : 0 }}
        />

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

        <div className="z-10 flex items-start justify-between w-full">
          <span
            className={`text-3xl font-black tracking-tighter transition-colors duration-300 drop-shadow-lg
              ${isActive ? "scale-110 origin-left text-white" : "text-slate-600"}
            `}
          >
            {count > 0 ? count : 0}
          </span>

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
      </motion.button>
    );
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-sans selection:bg-rose-500/30 overflow-hidden relative">
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-rose-600/10 blur-[100px] pointer-events-none" />

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
          onClick={() => setInfoModal(APP_INFO_MODAL)}
          className="bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white transition-all border-white/5 active:scale-90 flex items-center justify-center w-10 h-10 border rounded-full shadow-lg"
        >
          <HelpCircle size={18} />
        </button>
      </header>

      <main className="gap-2 relative z-10 flex flex-col w-full max-w-lg px-2 pb-4 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {ALL_ERRORS.map((error, index) => renderCard(error, index))}
        </div>
      </main>

      <AnimatePresence>
        {infoModal && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center px-0 pt-0 pb-0 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-black/60 backdrop-blur-sm absolute inset-0"
              onClick={() => setInfoModal(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            />

            <motion.div
              className="relative w-full max-w-none sm:max-w-sm max-h-[90vh] bg-[#1e293b] rounded-t-[2rem] sm:rounded-[2rem] shadow-2xl border border-white/10 overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 420, damping: 32 }}
              drag="y"
              dragConstraints={{ top: 0 }}
              dragElastic={{ top: 0, bottom: 0.5 }}
              onDragEnd={(_, info) => {
                if (info.offset.y > 120) setInfoModal(null);
              }}
            >
              <div className="top-2 left-1/2 -translate-x-1/2 absolute z-20">
                <div className="h-1.5 w-14 rounded-full bg-white/80 shadow-[0_2px_10px_rgba(255,255,255,0.35)]" />
              </div>
              <div
                className={`relative w-full p-6 min-h-[220px] h-full bg-gradient-to-br ${infoModal.gradient} overflow-hidden shrink-0 flex flex-col`}
              >
                <div
                  className="opacity-20 absolute inset-0"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1h2v2H1V1zm4 0h2v2H5V1zm4 0h2v2H9V1zm4 0h2v2H13V1zm4 0h2v2H17V1zM1 5h2v2H1V5zm4 0h2v2H5V5zm4 0h2v2H9V5zm4 0h2v2H13V5zm4 0h2v2H17V5zM1 9h2v2H1V9zm4 0h2v2H5V9zm4 0h2v2H9V9zm4 0h2v2H13V9zm4 0h2v2H17V9zM1 13h2v2H1v-2zm4 0h2v2H5v-2zm4 0h2v2H9v-2zm4 0h2v2H13v-2zm4 0h2v2H17v-2zM1 17h2v2H1v-2zm4 0h2v2H5v-2zm4 0h2v2H9v-2zm4 0h2v2H13v-2zm4 0h2v2H17v-2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                  }}
                />

                {infoModal.image && (
                  <div
                    className="opacity-30 absolute inset-0 bg-center bg-cover"
                    style={{ backgroundImage: `url(${infoModal.image})` }}
                  />
                )}

                <div className="relative z-10 flex flex-col flex-1">
                  <div className="flex items-start justify-end w-full">
                    <button
                      onClick={() => setInfoModal(null)}
                      className="bg-black/20 hover:bg-black/40 text-white/80 hover:text-white transition-colors backdrop-blur-sm p-2 rounded-full"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  <div className="pt-6 mt-auto">
                    <h2 className="drop-shadow-sm text-2xl font-black leading-tight tracking-tight text-white">
                      {infoModal.name}
                    </h2>
                    <p className="text-white/90 drop-shadow-sm opacity-90 mt-1 text-sm font-bold leading-snug">
                      {infoModal.desc}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-[#1e293b] overflow-y-auto min-h-0 flex-1">
                <div className="space-y-5">
                  <p className="text-slate-100 text-base leading-relaxed tracking-[0.01em] font-medium whitespace-pre-line">
                    {infoModal.longDesc}
                  </p>
                  {infoModal.examples && infoModal.examples.length > 0 && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-[11px] font-black tracking-[0.3em] text-slate-400/90 uppercase">
                        <span className="bg-slate-500/40 w-6 h-px" />
                        <span>{infoModal.examplesTitle ?? "Pavyzdžiai"}</span>
                        <span className="bg-slate-500/30 flex-1 h-px" />
                      </div>
                      <div className="grid gap-3">
                        {infoModal.examples.map((example, exampleIndex) => (
                          <div
                            key={`${infoModal.id}-example-${exampleIndex}`}
                            className="relative rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.25)]"
                          >
                            <div className="gap-3 flex items-start">
                              <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-white/70 shadow-[0_0_10px_rgba(255,255,255,0.4)]" />
                              <p className="text-slate-200 text-sm leading-relaxed">
                                {example}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="gap-3 flex flex-wrap justify-center mt-6">
                  {infoModal.showReset && (
                    <button
                      onClick={resetAll}
                      className="rounded-xl bg-rose-500/10 border-rose-400/20 active:scale-95 transition-all hover:bg-rose-500/20 text-rose-100 gap-2 inline-flex items-center px-6 py-3 text-sm font-bold tracking-wide border shadow-lg"
                    >
                      <RotateCcw size={16} />
                      Atstatyti
                    </button>
                  )}
                  <button
                    onClick={() => setInfoModal(null)}
                    className="rounded-xl bg-slate-800 border-white/5 active:scale-95 transition-all hover:bg-slate-700 px-8 py-3 text-sm font-bold tracking-wide text-white border shadow-lg"
                  >
                    Uždaryti
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
