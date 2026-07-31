const { Badge, IconButton, Rule, Icon } = window.FUCKBOYDesignSystem_007b99;

const PLACES = [
  { id: 'overview', label: 'Übersicht', icon: 'scale' },
  { id: 'index', label: 'Kapitel', icon: 'file-text' },
  { id: 'profile', label: 'Auswertung', icon: 'gauge' },
  { id: 'safety', label: 'Schutz & Recht', icon: 'shield-check', tone: 'consent' }
];

function Wordmark({ size = 21 }) {
  return (
    <div style={{ lineHeight: 1 }}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: size, letterSpacing: '-0.035em', color: 'var(--paper-100)' }}>FICK-TRAINER</div>
      <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '9px', fontWeight: 600, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--text-faint)', marginTop: '5px' }}>fick-trainer.de</div>
    </div>
  );
}

function StateDot({ state }) {
  if (state === 'abgeschlossen') return <Icon name="check" size={12} color="var(--volt-600)" />;
  if (state === 'begonnen') return <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--amber-500)', display: 'block' }} />;
  return null;
}

function Rail({ chapters, screen, go, store, done, total }) {
  const current = screen.indexOf('ch:') === 0 ? screen.slice(3) : null;
  const pct = total ? Math.round((done / total) * 100) : 0;
  return (
    <aside style={{
      width: 'var(--width-rail)', flex: 'none', display: 'flex', flexDirection: 'column',
      background: 'var(--bg-void)', borderRight: '1px solid var(--rule-faint)',
      padding: 'var(--space-2xl)', overflowY: 'auto'
    }}>
      <Wordmark />
      <Rule tone="faint" style={{ margin: 'var(--space-2xl) 0 var(--space-lg)' }} />

      <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {PLACES.map(n => {
          const active = screen === n.id;
          return (
            <button key={n.id} onClick={() => go(n.id)} style={{
              display: 'flex', alignItems: 'center', gap: 'var(--space-md)', padding: '11px 12px',
              background: active ? 'rgba(245,242,235,.06)' : 'transparent',
              border: 0, borderLeft: '2px solid ' + (active ? 'var(--paper-100)' : 'transparent'),
              cursor: 'pointer', textAlign: 'left',
              fontFamily: 'var(--font-condensed)', fontSize: '12px', fontWeight: 600,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: active ? 'var(--text-primary)' : n.tone === 'consent' ? 'var(--wire-600)' : 'var(--text-muted)'
            }}>
              <Icon name={n.icon} size={15} />{n.label}
            </button>
          );
        })}
      </nav>

      <Rule tone="faint" label={done + ' von ' + total} style={{ margin: 'var(--space-xl) 0 var(--space-md)' }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
        {chapters.map(c => {
          const st = window.chapterState(c, store);
          const here = current === c.number;
          return (
            <button key={c.number} onClick={() => go('ch:' + c.number)} title={c.title} style={{
              display: 'flex', alignItems: 'center', gap: '10px', padding: '7px 12px',
              background: here ? 'rgba(245,242,235,.06)' : 'transparent', border: 0,
              borderLeft: '2px solid ' + (here ? 'var(--paper-100)' : st === 'abgeschlossen' ? 'var(--volt-600)' : st === 'begonnen' ? 'var(--amber-500)' : 'var(--ink-400)'),
              cursor: 'pointer', textAlign: 'left', minWidth: 0
            }}>
              <span style={{ fontFamily: 'var(--font-data)', fontSize: '11px', fontWeight: 700, color: here ? 'var(--paper-100)' : 'var(--text-faint)', flex: 'none' }}>{c.number}</span>
              <span style={{ flex: 1, minWidth: 0, fontFamily: 'var(--font-sans)', fontSize: '13px', lineHeight: 1.3, color: here ? 'var(--text-primary)' : 'var(--text-muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.rail}</span>
              <StateDot state={st} />
            </button>
          );
        })}
      </div>

      <div style={{ marginTop: 'auto', paddingTop: 'var(--space-xl)' }}>
        <div style={{ height: 3, background: 'var(--score-track)' }}>
          <div style={{ height: '100%', width: pct + '%', background: 'var(--volt-600)', transition: 'width var(--dur-slow) var(--ease-out)' }} />
        </div>
        <button onClick={() => go('settings')} style={{
          display: 'flex', alignItems: 'center', gap: '9px', marginTop: 'var(--space-lg)', padding: 0,
          background: 'none', border: 0, cursor: 'pointer',
          fontFamily: 'var(--font-condensed)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em',
          textTransform: 'uppercase', color: screen === 'settings' ? 'var(--text-primary)' : 'var(--text-faint)'
        }}>
          <Icon name="ellipsis" size={14} />Einstellungen
        </button>
      </div>
    </aside>
  );
}

function TopBar({ screen, crumb, title, go, right }) {
  const inChapter = screen.indexOf('ch:') === 0;
  return (
    <header style={{
      height: 'var(--height-topbar)', flex: 'none', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', gap: 'var(--space-2xl)',
      padding: '0 var(--gutter-page) 0 ' + (inChapter ? '12px' : 'var(--gutter-page)'),
      borderBottom: '1px solid var(--rule-faint)', background: 'var(--bg-page)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', minWidth: 0 }}>
        {inChapter ? <IconButton icon="arrow-left" label="Zurück zu den Kapiteln" size="sm" onClick={() => go('index')} /> : null}
        <span style={{ fontFamily: 'var(--font-condensed)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--bordeaux-400)', flex: 'none' }}>{crumb}</span>
        <span style={{ fontFamily: 'var(--font-condensed)', fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-secondary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{title}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', flex: 'none' }}>{right}</div>
    </header>
  );
}

function Shell({ chapters, screen, go, store, done, total, crumb, title, right, children }) {
  return (
    <div style={{ display: 'flex', height: '100%', minHeight: 0, background: 'var(--bg-page)' }}>
      <Rail chapters={chapters} screen={screen} go={go} store={store} done={done} total={total} />
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        <TopBar screen={screen} crumb={crumb} title={title} go={go} right={right} />
        <main id="fb-main" style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: 'var(--space-4xl) var(--gutter-page-wide) var(--space-7xl)' }}>
          {children}
        </main>
      </div>
    </div>
  );
}

Object.assign(window, { Shell, Wordmark, TopBar, Rail });
