const { Icon, IconButton } = window.FUCKBOYDesignSystem_007b99;

const TABS = [
  { id: 'overview', label: 'Übersicht', icon: 'scale' },
  { id: 'chapters', label: 'Kapitel', icon: 'file-text' },
  { id: 'profile', label: 'Auswertung', icon: 'gauge' },
  { id: 'safety', label: 'Schutz', icon: 'shield-check' }
];

const TITLES = { overview: 'Übersicht', chapters: 'Kapitel', profile: 'Auswertung', safety: 'Schutz & Recht', settings: 'Einstellungen' };

function TabBar({ screen, go }) {
  const active = screen.indexOf('ch:') === 0 ? 'chapters' : screen;
  return (
    <nav style={{ flex: 'none', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderTop: '1px solid var(--rule-subtle)', background: 'var(--bg-void)', paddingBottom: '6px' }}>
      {TABS.map(t => {
        const on = active === t.id;
        return (
          <button key={t.id} onClick={() => go(t.id)} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px',
            padding: '11px 4px 7px', minHeight: '52px', background: 'transparent', border: 0, cursor: 'pointer',
            color: on ? 'var(--paper-100)' : t.id === 'safety' ? 'var(--wire-600)' : 'var(--text-faint)'
          }}>
            <Icon name={t.icon} size={19} />
            <span style={{ fontFamily: 'var(--font-condensed)', fontSize: '9px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{t.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

function TopBar({ screen, go, chapters }) {
  const inCh = screen.indexOf('ch:') === 0;
  const ch = inCh ? chapters.find(c => c.number === screen.slice(3)) : null;
  return (
    <header style={{
      flex: 'none', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 8px 0 ' + (inCh ? '4px' : '20px'), borderBottom: '1px solid var(--rule-faint)', background: 'var(--bg-page)'
    }}>
      <span style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
        {inCh ? <IconButton icon="chevron-left" label="Zurück zu den Kapiteln" size="sm" onClick={() => go('chapters')} /> : null}
        {inCh ? <span style={{ fontFamily: 'var(--font-condensed)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--bordeaux-400)', flex: 'none' }}>Kap. {ch ? ch.number : ''}</span> : null}
        <span style={{ fontFamily: 'var(--font-condensed)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-secondary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {ch ? ch.rail : TITLES[screen]}
        </span>
      </span>
      <IconButton icon="ellipsis" label="Einstellungen" size="sm" onClick={() => go('settings')} />
    </header>
  );
}

function MobileApp() {
  const CH = window.FBChapters;
  const [store, setStore] = React.useState(() => window.FBStore.load());
  const [screen, setScreen] = React.useState('cover');
  const scrollRef = React.useRef(null);

  React.useEffect(() => { window.FBStore.save(store); }, [store]);

  const go = (s) => {
    setScreen(s);
    setStore(prev => {
      const next = Object.assign({}, prev, { lastScreen: s });
      if (s.indexOf('ch:') === 0) {
        const n = s.slice(3);
        next.chapters = Object.assign({}, prev.chapters, { [n]: Object.assign({}, prev.chapters[n], { started: true }) });
      }
      return next;
    });
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  };

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

  const bare = screen === 'cover' || screen === 'heaven';
  const ch = screen.indexOf('ch:') === 0 ? CH.find(c => c.number === screen.slice(3)) : null;

  const body = (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'var(--bg-page)', paddingTop: '54px' }}>
      {!bare ? <TopBar screen={screen} go={go} chapters={CH} /> : null}
      <div ref={scrollRef} style={{ flex: 1, minHeight: 0, overflowY: 'auto' }}>
        {screen === 'cover' ? <MCover go={go} /> : null}
        {screen === 'heaven' ? <HeavenScreen go={go} compact /> : null}
        {screen === 'overview' ? <MOverview chapters={CH} store={store} go={go} /> : null}
        {screen === 'chapters' ? <MChapters chapters={CH} store={store} go={go} /> : null}
        {screen === 'profile' ? <MProfile chapters={CH} store={store} setStore={setStore} go={go} /> : null}
        {screen === 'safety' ? <MSafety /> : null}
        {screen === 'settings' ? <MSettings store={store} onReset={() => setStore(window.FBStore.reset())} /> : null}
        {ch ? <MChapter ch={ch} store={store} setStore={setStore} go={go} onDeltas={applyDeltas} /> : null}
      </div>
      {!bare ? <TabBar screen={screen} go={go} /> : null}
    </div>
  );

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '24px' }}>
      <IOSDevice dark>{body}</IOSDevice>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<MobileApp />);
