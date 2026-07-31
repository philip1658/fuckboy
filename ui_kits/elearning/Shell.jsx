const { Badge, IconButton, Rule, Icon, ProgressRail, Stamp } = window.FUCKBOYDesignSystem_007b99;

function Wordmark({ size = 26 }) {
  return (
    <div style={{ lineHeight: 1 }}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: size, letterSpacing: '-0.035em', color: 'var(--paper-100)' }}>FUCKBOY</div>
      <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '9px', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--text-faint)', marginTop: '5px' }}>Das verbotene Werkzeug</div>
    </div>
  );
}

function Rail({ chapters, screen, go, level }) {
  const steps = chapters.map(c => ({ label: c.number + ' ' + (c.railLabel || c.title), locked: c.state === 'locked' }));
  const NAV = [
    { id: 'overview', label: 'Übersicht', icon: 'scale' },
    { id: 'index', label: 'Akten-Index', icon: 'file-text' },
    { id: 'lesson', label: 'Kapitel 03', icon: 'quote' },
    { id: 'scenario', label: 'Boss-Level', icon: 'split' },
    { id: 'chat', label: 'Chat-Simulation', icon: 'message-square' },
    { id: 'profile', label: 'Mein Profil', icon: 'gauge' }
  ];
  return (
    <aside style={{
      width: 'var(--width-rail)', flex: 'none', display: 'flex', flexDirection: 'column',
      background: 'var(--bg-void)', borderRight: '1px solid var(--rule-faint)', padding: 'var(--space-2xl)'
    }}>
      <button onClick={() => go('cover')} style={{ background: 'none', border: 0, padding: 0, cursor: 'pointer', textAlign: 'left' }}>
        <Wordmark />
      </button>
      <Rule tone="faint" style={{ margin: 'var(--space-2xl) 0 var(--space-xl)' }} />
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {NAV.map(n => {
          const active = screen === n.id;
          return (
            <button key={n.id} onClick={() => go(n.id)} style={{
              display: 'flex', alignItems: 'center', gap: 'var(--space-md)', padding: '10px 12px',
              background: active ? 'rgba(245,242,235,.06)' : 'transparent',
              borderLeft: '2px solid ' + (active ? 'var(--paper-100)' : 'transparent'), border: 0,
              borderLeftWidth: '2px', borderLeftStyle: 'solid',
              borderLeftColor: active ? 'var(--paper-100)' : 'transparent',
              cursor: 'pointer', textAlign: 'left',
              fontFamily: 'var(--font-condensed)', fontSize: '12px', fontWeight: 600,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: active ? 'var(--text-primary)' : 'var(--text-muted)'
            }}>
              <Icon name={n.icon} size={15} />{n.label}
            </button>
          );
        })}
      </nav>
      <Rule tone="faint" label="Fortschritt" style={{ margin: 'var(--space-2xl) 0 var(--space-lg)' }} />
      <ProgressRail orientation="vertical" steps={steps} current={2} onSelect={() => go('lesson')} />
      <div style={{ marginTop: 'auto', paddingTop: 'var(--space-2xl)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: 'var(--font-condensed)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>Fuckboy-Level</span>
          <span style={{ fontFamily: 'var(--font-data)', fontSize: '22px', fontWeight: 700, color: 'var(--paper-100)' }}>{level}</span>
        </div>
        <div style={{ height: 3, background: 'var(--score-track)', marginTop: '8px' }}>
          <div style={{ height: '100%', width: level + '%', background: 'var(--paper-300)' }} />
        </div>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', lineHeight: 1.4, color: 'var(--text-faint)', marginTop: '9px' }}>Hoch ist nicht gut. Hoch ist nur hoch.</div>
      </div>
    </aside>
  );
}

function TopBar({ crumb, title, right }) {
  return (
    <header style={{
      height: 'var(--height-topbar)', flex: 'none', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', gap: 'var(--space-2xl)',
      padding: '0 var(--gutter-page)', borderBottom: '1px solid var(--rule-faint)',
      background: 'var(--bg-page)'
    }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-md)', minWidth: 0 }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--bordeaux-400)', flex: 'none' }}>{crumb}</span>
        <span style={{ fontFamily: 'var(--font-condensed)', fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-secondary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{title}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', flex: 'none' }}>
        {right}
        <IconButton icon="search" label="Suchen" size="sm" />
        <IconButton icon="ellipsis" label="Mehr" size="sm" />
      </div>
    </header>
  );
}

function Shell({ chapters, screen, go, level, crumb, title, right, children }) {
  return (
    <div style={{ display: 'flex', height: '100%', minHeight: 0, background: 'var(--bg-page)' }}>
      <Rail chapters={chapters} screen={screen} go={go} level={level} />
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        <TopBar crumb={crumb} title={title} right={right} />
        <main style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: 'var(--space-4xl) var(--gutter-page-wide) var(--space-6xl)' }}>
          {children}
        </main>
      </div>
    </div>
  );
}

Object.assign(window, { Shell, Wordmark, TopBar, Rail });
