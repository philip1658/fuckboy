const { Tabs, ScoreMeter, Card, Rule, Stamp, Badge, Icon, Button, Redacted, LockedPanel, Checkbox, WarningNotice, Tooltip } = window.FUCKBOYDesignSystem_007b99;

function ProfileScreen({ scores, transfer, toggleTransfer, flags, go }) {
  const [tab, setTab] = React.useState('score');
  return (
    <div style={{ maxWidth: 'var(--width-content)' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'var(--space-2xl)' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--bordeaux-400)' }}>Persönliche Akte · <Redacted width="7ch">P. Bischof</Redacted></div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '54px', fontWeight: 700, lineHeight: 0.94, letterSpacing: '-0.02em', color: 'var(--paper-100)', marginTop: 'var(--space-lg)' }}>Dein Fuckboy-Profil</h1>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontFamily: 'var(--font-data)', fontSize: '64px', fontWeight: 700, lineHeight: 0.9, color: 'var(--paper-100)' }}>62</div>
          <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-faint)', marginTop: '6px' }}>Fuckboy-Level</div>
        </div>
      </div>

      <Tabs value={tab} onChange={setTab} style={{ marginTop: 'var(--space-3xl)' }} items={[
        { value: 'score', label: 'Score', icon: 'gauge' },
        { value: 'flags', label: 'Red Flags', icon: 'flag', count: flags.length },
        { value: 'transfer', label: 'Transferplan', icon: 'target', count: transfer.filter(t => !t.done).length },
        { value: 'akte', label: 'Akte', icon: 'file-text' }
      ]} />

      <div style={{ marginTop: 'var(--space-3xl)' }}>
        {tab === 'score' ? (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 'var(--space-4xl)', rowGap: 'var(--space-2xl)' }}>
              {scores.map(s => <ScoreMeter key={s.label} {...s} />)}
            </div>
            <WarningNotice tone="moral" title="Ein hoher Fuckboy-Level ist kein Ergebnis, auf das man stolz sein muss." style={{ marginTop: 'var(--space-3xl)' }}>
              Dein Charme ist hoch, deine Ehrlichkeit mittel, dein Kollateralschaden steigt. Das ist genau das Muster, das kurzfristig funktioniert und langfristig dazu führt, dass Nähe schwerer wird. Du entscheidest, welche Zahl du optimierst.
            </WarningNotice>
          </div>
        ) : null}

        {tab === 'flags' ? (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)' }}>
            {flags.map(t => (
              <div key={t} style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'flex-start', padding: 'var(--space-lg)', background: 'var(--bg-surface)', border: '1px solid var(--rule-faint)', borderLeft: '2px solid var(--bordeaux-600)' }}>
                <span style={{ color: 'var(--bordeaux-400)', marginTop: '1px' }}><Icon name="flag" size={15} /></span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', lineHeight: 1.5, color: 'var(--text-secondary)' }}>{t}</span>
              </div>
            ))}
          </div>
        ) : null}

        {tab === 'transfer' ? (
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 'var(--space-3xl)', alignItems: 'start' }}>
            <div style={{ display: 'grid', gap: '2px' }}>
              {transfer.map((t, i) => (
                <Checkbox key={i} label={t.text} checked={t.done} onChange={() => toggleTransfer(i)} />
              ))}
            </div>
            <LockedPanel title="Persönlicher Transferplan als PDF" requirement="Alle 5 Übungen abschliessen"
              action={<Button variant="accent" size="sm" icon="lock-open">Freischalten</Button>}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                Vier Wochen, ein Fokus pro Woche: Erwartung senken, Absicht sagen, Nein annehmen, zuhören statt warten.
              </div>
            </LockedPanel>
          </div>
        ) : null}

        {tab === 'akte' ? (
          <Card surface="paper" padding="lg" style={{ maxWidth: 'var(--width-reader)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--rule-ink)', paddingBottom: 'var(--space-md)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--bordeaux-600)' }}>Abschlussprotokoll · Akte FB-XX</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--ink-400)' }}>3 von 6 Kapiteln</span>
            </div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', lineHeight: 1.7, color: 'var(--ink-700)', marginTop: 'var(--space-lg)' }}>
              Der Teilnehmer kommuniziert direkt und wird als charmant wahrgenommen. Unter Druck weicht er auf <Redacted tone="paper">Mehrdeutigkeit</Redacted> aus, statt seine Absicht zu benennen. Grenzen erkennt er zuverlässig; er akzeptiert ein Nein ohne Nachverhandlung.
            </p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', lineHeight: 1.7, color: 'var(--ink-700)', marginTop: 'var(--space-md)' }}>
              Empfehlung: Ehrlichkeit vor Reichweite. Der kleinere Pool ist der billigere Preis.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-md)', marginTop: 'var(--space-xl)', paddingTop: 'var(--space-lg)', borderTop: '1px solid var(--rule-ink-faint)', alignItems: 'center', flexWrap: 'wrap' }}>
              <Stamp tone="classified" rotate={-2}>Vertraulich</Stamp>
              <Button variant="secondary" size="sm" icon="file-text" style={{ color: 'var(--ink-800)', boxShadow: 'inset 0 0 0 1px var(--rule-ink-strong)' }}>Exportieren</Button>
            </div>
          </Card>
        ) : null}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 'var(--space-lg)', marginTop: 'var(--space-4xl)', paddingTop: 'var(--space-2xl)', borderTop: '1px solid var(--rule-subtle)' }}>
        <Stamp tone="consent" icon="shield-check">Consent-Kompetenz 92 · dein bester Wert</Stamp>
        <Button variant="secondary" icon="arrow-left" onClick={() => go('index')}>Zurück zum Index</Button>
      </div>
    </div>
  );
}

Object.assign(window, { ProfileScreen });
