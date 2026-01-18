import { useState, useEffect, useCallback } from "react";
import { RotateCcw, X, Plus, HelpCircle } from "lucide-react";
import { Sheet } from "react-modal-sheet";
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
    navigator.vibrate?.(15); // Stronger haptic feedback
    setCounts((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  }, []);

  const decrement = useCallback((id: string) => {
    setCounts((prev) => {
      const nextValue = Math.max((prev[id] || 0) - 1, 0);
      return { ...prev, [id]: nextValue };
    });
  }, []);

  const resetAll = () => {
    if (
      window.confirm(
        "Ištrinti skaičiavimus? Visos mąstymo klaidos bus grąžintos į nulį.",
      )
    ) {
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
          relative group isolate overflow-hidden transition-transform duration-200 ease-out hover:-translate-y-1 active:scale-95 touch-manipulation
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
          {count > 0 && (
            <span className="drop-shadow-lg scale-110 origin-left text-3xl font-black tracking-tighter text-white">
              {count}
            </span>
          )}

          <div
            onClick={(e) => {
              e.stopPropagation();
              increment(error.id);
            }}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white/70 hover:text-white transition-all active:scale-90 border-white/10 z-20 p-2 ml-auto border rounded-full"
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

  const modalCount = infoModal ? counts[infoModal.id] || 0 : 0;
  const showModalCounter = infoModal?.id !== APP_INFO_MODAL.id;

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

      <header className="md:max-w-3xl relative z-50 w-full max-w-lg px-4 pt-10 pb-8 mx-auto select-none">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-slate-950/80 backdrop-blur-xl shadow-[0_20px_80px_-40px_rgba(59,130,246,0.6)]">
          <div className="-top-16 -left-10 bg-emerald-400/20 blur-3xl absolute w-40 h-40 rounded-full pointer-events-none" />
          <div className="-bottom-20 right-6 bg-rose-500/20 blur-3xl absolute w-48 h-48 rounded-full pointer-events-none" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_50%)]" />

          <div className="gap-4 sm:px-6 sm:py-6 relative z-10 flex items-center justify-between p-5">
            <div className="min-w-0">
              <h1 className="sm:text-4xl bg-clip-text bg-gradient-to-r from-white via-emerald-100 to-rose-100 text-3xl font-black tracking-tight text-transparent">
                Mąstymo Klaidos
              </h1>
              <p className="sm:text-sm text-slate-300/80 mt-1 text-xs font-bold uppercase">
                Atpažinti ir žymėk
              </p>
            </div>
            <button
              onClick={() => setInfoModal(APP_INFO_MODAL)}
              className="group border-white/10 bg-white/5 text-white/70 transition-all active:scale-90 w-11 h-11 relative flex items-center justify-center overflow-hidden border rounded-full shadow-lg"
            >
              <span className="bg-gradient-to-br from-emerald-400/30 to-rose-400/30 transition-opacity duration-300 group-hover:opacity-100 absolute inset-0 opacity-0" />
              <HelpCircle size={18} className="relative z-10" />
            </button>
          </div>
        </div>
      </header>

      <main className="gap-2 md:max-w-3xl md:px-4 relative z-10 flex flex-col w-full max-w-lg px-2 pb-6 mx-auto select-none">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {ALL_ERRORS.map((error, index) => renderCard(error, index))}
        </div>
      </main>

      <Sheet
        isOpen={Boolean(infoModal)}
        onClose={() => setInfoModal(null)}
        disableScrollLocking
        className="max-w-lg mx-auto"
      >
        <Sheet.Container
          className="!bg-[#1e293b] border border-white/10 shadow-2xl rounded-t-[2rem] sm:rounded-[2rem] w-full"
          style={{}}
        >
          <Sheet.Header className="pt-2 pb-1">
            <div className="h-1.5 w-14 rounded-full bg-white/80 shadow-[0_2px_10px_rgba(255,255,255,0.35)] mx-auto" />
          </Sheet.Header>
          <Sheet.Content className="flex flex-col min-h-0">
            {infoModal && (
              <>
                <div
                  className={`relative w-full p-6 min-h-[280px] bg-gradient-to-br ${infoModal.gradient} overflow-hidden shrink-0 flex flex-col`}
                >
                  <div
                    className="opacity-20 absolute inset-0"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1h2v2H1V1zm4 0h2v2H5V1zm4 0h2v2H9V1zm4 0h2v2H13V1zm4 0h2v2H17V1zM1 5h2v2H1V5zm4 0h2v2H5V5zm4 0h2v2H9V5zm4 0h2v2H13V5zm4 0h2v2H17V5zM1 9h2v2H1V9zm4 0h2v2H5V9zm4 0h2v2H9V9zm4 0h2v2H13V9zm4 0h2v2H17V9zM1 13h2v2H1v-2zm4 0h2v2H5v-2zm4 0h2v2H9v-2zm4 0h2v2H13v-2zm4 0h2v2H17v-2zM1 17h2v2H1v-2zm4 0h2v2H5v-2zm4 0h2v2H9v-2zm4 0h2v2H13v-2zm4 0h2v2H17v-2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                    }}
                  />

                  {infoModal.image && (
                    <div
                      className="opacity-20 absolute inset-0 bg-center bg-cover"
                      style={{ backgroundImage: `url(${infoModal.image})` }}
                    />
                  )}

                  <div className="relative z-10 flex flex-col flex-1">
                    <div className="flex items-start justify-between w-full">
                      {showModalCounter && (
                        <>
                          {modalCount === 0 ? (
                            <div className="gap-2 flex items-center">
                              <button
                                onClick={() => increment(infoModal.id)}
                                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white/70 hover:text-white transition-all active:scale-90 border-white/10 p-2 border rounded-full"
                                aria-label="Didinti"
                              >
                                <Plus size={18} />
                              </button>
                              <span className="text-[11px] font-bold tracking-wide text-white/80">
                                Pastebėjai? Pažymėk
                              </span>
                            </div>
                          ) : (
                            <div className="gap-1 bg-black/20 text-white/90 backdrop-blur-sm flex items-center px-2 py-1 rounded-full">
                              <button
                                onClick={() => decrement(infoModal.id)}
                                className="h-7 w-7 transition-colors hover:bg-white/10 active:scale-90 text-lg font-semibold rounded-full"
                                aria-label="Mažinti"
                              >
                                -
                              </button>
                              <span className="w-8 text-sm font-black text-center">
                                {modalCount}
                              </span>
                              <button
                                onClick={() => increment(infoModal.id)}
                                className="h-7 w-7 transition-colors hover:bg-white/10 active:scale-90 text-lg font-semibold rounded-full"
                                aria-label="Didinti"
                              >
                                +
                              </button>
                            </div>
                          )}
                        </>
                      )}
                      <button
                        onClick={() => setInfoModal(null)}
                        className="bg-black/20 hover:bg-black/40 text-white/80 hover:text-white transition-colors backdrop-blur-sm p-2 ml-auto rounded-full"
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

                <div className="space-y-5 p-4">
                  <p className="text-slate-100 text-base leading-relaxed tracking-[0.01em] font-medium whitespace-pre-line">
                    {infoModal.longDesc}
                  </p>

                  {infoModal.examples && infoModal.examples.length > 0 && (
                    <div className="space-y-3 pt-12">
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

                  {infoModal.absurdExamples &&
                    infoModal.absurdExamples.length > 0 && (
                      <div className="space-y-3 pt-10">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-[11px] font-black tracking-[0.3em] text-slate-400/90 uppercase">
                            <span className="bg-slate-500/40 w-6 h-px" />
                            <span>Absurdiški pavyzdžiai</span>
                            <span className="bg-slate-500/30 flex-1 h-px" />
                          </div>
                          <p className="text-[11px] font-semibold text-slate-400/80">
                            Neįtikėtini pavyzdžiai, kad būtų lengviau prisiminti
                            mąstymo klaidos esmę.
                          </p>

                          <p className="text-[11px] font-semibold text-slate-400/80">
                            Į tokius tikrai galima atsakyti "Ką tu čia
                            nusišneki".
                          </p>
                        </div>
                        <div className="grid gap-3">
                          {infoModal.absurdExamples.map(
                            (example, exampleIndex) => (
                              <div
                                key={`${infoModal.id}-absurd-example-${exampleIndex}`}
                                className="relative rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.25)]"
                              >
                                <div className="gap-3 flex items-start">
                                  <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-white/70 shadow-[0_0_10px_rgba(255,255,255,0.4)]" />
                                  <p className="text-slate-200 text-sm leading-relaxed">
                                    {example}
                                  </p>
                                </div>
                              </div>
                            ),
                          )}
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
                      Atstatyti visus skaičiavimus
                    </button>
                  )}

                  <button
                    onClick={() => setInfoModal(null)}
                    className="rounded-xl bg-slate-800 border-white/5 active:scale-95 transition-all hover:bg-slate-700 px-8 py-3 mb-8 text-sm font-bold tracking-wide text-white border shadow-lg"
                  >
                    Uždaryti
                  </button>
                </div>
              </>
            )}
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop
          onTap={() => setInfoModal(null)}
          className="bg-black/60 backdrop-blur-sm"
        />
      </Sheet>
    </div>
  );
};

export default App;
