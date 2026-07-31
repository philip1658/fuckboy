/* Versioniertes lokales Speichermodell. Kein Backend, kein Account —
   die Struktur ist aber so gebaut, dass beides später ergänzt werden kann. */
(function () {
  const KEY = 'fuckboy.progress.v1';
  const VERSION = 1;

  const empty = () => ({
    version: VERSION,
    updatedAt: null,
    lastScreen: null,
    chapters: {},              // '01': { started, completedParts:[], done }
    answers: {},               // 'ch:key' -> gewählte Option
    reflections: {},           // 'ch:key' -> Freitext
    challenges: {},            // 'ch:idx'  -> bool
    quiz: {},                  // 'ch'      -> { idx: optionIndex }
    competences: {             // Kompetenzprofil, 0–100
      klarheit: 40, respekt: 55, initiative: 35, selbstsicherheit: 38,
      beobachtung: 42, resilienz: 30, selbstreflexion: 45, verlaesslichkeit: 50
    },
    plan: {}
  });

  function load() {
    try {
      const raw = window.localStorage.getItem(KEY);
      if (!raw) return empty();
      const parsed = JSON.parse(raw);
      if (!parsed || parsed.version !== VERSION) return empty();
      return Object.assign(empty(), parsed);
    } catch (e) {
      return empty();
    }
  }

  function save(state) {
    try {
      state.updatedAt = new Date().toISOString();
      window.localStorage.setItem(KEY, JSON.stringify(state));
    } catch (e) { /* Speicher voll oder blockiert — App läuft trotzdem weiter */ }
    return state;
  }

  function reset() {
    try { window.localStorage.removeItem(KEY); } catch (e) {}
    return empty();
  }

  window.FBStore = { KEY, VERSION, load, save, reset, empty };
})();
