const { Badge, Button, Icon, Rule } = window.FUCKBOYDesignSystem_007b99;

const META = {
  overview: { crumb: 'Kursübersicht', title: 'Mehr Dates. Mehr Sex. Und die Rechnung dazu.' },
  index:    { crumb: 'Kapitel',       title: 'Alle zwölf Kapitel' },
  profile:  { crumb: 'Auswertung',    title: 'Dein Kompetenzprofil' },
  safety:   { crumb: 'Schutz & Recht', title: 'Immer erreichbar' },
  settings: { crumb: 'Einstellungen', title: 'Fortschritt & Daten' }
};

function App() {
  const CH = window.FBChapters;
  const [store, setStore] = React.useState(() => window.FBStore.load());
  const [screen, setScreen] = React.useState(() => {
    const s = window.FBStore.load();
    return s.lastScreen && s.lastScreen !== 'cover' ? s.lastScreen : 'cover';
  });

  React.useEffect(() => { window.FBStore.save(store); }, [store]);

  const go = (s) => {
    setScreen(s);
    setStore(prev => {
      const next = Object.assign({}, prev, { lastScreen: s });
      if (s.indexOf('ch:') === 0) {
        const n = s.slice(3);
        next.chapters = Object.assign({}, prev.chapters, { [n]: Object.assign({ started: true }, prev.chapters[n], { started: true }) });
      }
      return next;
    });
    const m = document.getElementById('fb-main');
    if (m) m.scrollTop = 0;
  };

  /* Kompetenzwerte aus einer Entscheidung fortschreiben */
  const applyDeltas = (deltas) => {
    if (!deltas) return;
    setStore(prev => {
      const c = Object.assign({}, prev.competences);
      deltas.forEach(d => {
        const n = parseInt(String(d.delta).replace('−', '-'), 10);
        if (!isNaN(n) && c[d.id] !== undefined) c[d.id] = Math.max(0, Math.min(100, c[d.id] + n));
      });
      return Object.assign({}, prev, { competences: c });
    });
  };

  /* Kapitel gilt als abgeschlossen, sobald Pflichtteile erledigt sind */
  React.useEffect(() => {
    let changed = false;
    const next = Object.assign({}, store.chapters);
    CH.forEach(ch => {
      const rec = next[ch.number] || {};
      const complete = window.chapterComplete(ch, store);
      if (complete && rec.started && !rec.done) { next[ch.number] = Object.assign({}, rec, { done: true }); changed = true; }
      if (!complete && rec.done) { next[ch.number] = Object.assign({}, rec, { done: false }); changed = true; }
    });
    if (changed) setStore(s => Object.assign({}, s, { chapters: next }));
  }, [store.answers, store.quiz]);

  const doneCount = CH.filter(c => window.chapterState(c, store) === 'abgeschlossen').length;

  if (screen === 'cover') return <CoverScreen go={go} />;
  if (screen === 'heaven') return <HeavenScreen go={go} />;

  const isCh = screen.indexOf('ch:') === 0;
  const ch = isCh ? CH.find(c => c.number === screen.slice(3)) : null;
  const m = ch ? { crumb: 'Kapitel ' + ch.number, title: ch.title } : (META[screen] || { crumb: '', title: '' });

  const idx = ch ? CH.indexOf(ch) : -1;
  const prev = idx > 0 ? CH[idx - 1] : null;
  const next = idx >= 0 && idx < CH.length - 1 ? CH[idx + 1] : null;

  /* Kapitel mit eigener Spezialkomponente */
  let extra = null;
  if (ch && ch.special === 'playbook') extra = <PlaybookExtra photos={window.FBData.photos} algorithm={window.FBData.algorithm} />;
  if (ch && ch.special === 'snippets') extra = <SnippetExtra snippets={window.FBData.snippets} />;
  if (ch && ch.special === 'chatsim') extra = <ChatSimExtra chat={window.FBData.chat} />;

  return (
    <Shell chapters={CH} screen={screen} go={go} store={store} done={doneCount} total={CH.length}
      crumb={m.crumb} title={m.title}
      right={<Badge tone="consent" icon="shield-check">Respekt {store.competences.respekt}</Badge>}>

      {screen === 'overview' ? <OverviewScreen chapters={CH} store={store} go={go} /> : null}
      {screen === 'index' ? <ChapterIndex chapters={CH} store={store} go={go} /> : null}
      {screen === 'profile' ? <CompetenceScreen store={store} setStore={setStore} chapters={CH} go={go} /> : null}
      {screen === 'safety' ? <SafetyScreen /> : null}
      {screen === 'settings' ? <SettingsScreen store={store} onReset={() => { const e = window.FBStore.reset(); setStore(e); }} /> : null}

      {ch ? (
        <>
          <ChapterScreen ch={ch} store={store} setStore={setStore} go={go} onDeltas={applyDeltas} extra={extra} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 'var(--space-lg)', marginTop: 'var(--space-5xl)', paddingTop: 'var(--space-2xl)', borderTop: '1px solid var(--rule-subtle)', maxWidth: 'var(--width-content)', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '9px', fontFamily: 'var(--font-condensed)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: window.chapterState(ch, store) === 'abgeschlossen' ? 'var(--volt-500)' : 'var(--text-faint)' }}>
              <Icon name={window.chapterState(ch, store) === 'abgeschlossen' ? 'check-check' : 'circle-dot'} size={14} />
              {window.chapterState(ch, store) === 'abgeschlossen'
                ? 'Kapitel abgeschlossen'
                : ch.scenario ? 'Ernstfall und Wissenstest fehlen noch' : 'Wissenstest fehlt noch'}
            </span>
            <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
              {prev ? <Button variant="secondary" icon="arrow-left" onClick={() => go('ch:' + prev.number)}>{prev.number}</Button> : null}
              {next
                ? <Button size="lg" iconRight="arrow-right" onClick={() => go('ch:' + next.number)}>Weiter: {next.rail}</Button>
                : <Button size="lg" iconRight="gauge" onClick={() => go('profile')}>Zur Auswertung</Button>}
            </div>
          </div>
        </>
      ) : null}
    </Shell>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
