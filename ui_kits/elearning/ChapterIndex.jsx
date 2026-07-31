const { ChapterCard, Stamp, Rule, Badge, Icon, LockedPanel, Button } = window.FUCKBOYDesignSystem_007b99;

function ChapterIndex({ chapters, go, flags }) {
  return (
    <div style={{ maxWidth: 'var(--width-content)' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'var(--space-2xl)' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--bordeaux-400)' }}>Akten-Index · FB-01 bis FB-06</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '54px', fontWeight: 700, lineHeight: 0.94, letterSpacing: '-0.02em', color: 'var(--paper-100)', marginTop: 'var(--space-lg)' }}>Sechs Kapitel.<br />Zwei davon willst du nicht lesen.</h1>
        </div>
        <Stamp tone="unlocked" icon="lock-open" rotate={2}>2 von 6 offen</Stamp>
      </div>

      <div style={{ display: 'grid', gap: 'var(--space-md)', marginTop: 'var(--space-4xl)' }}>
        {chapters.filter(c => !c.bonus).map(c => (
          <ChapterCard key={c.number} {...c} onClick={() => go(c.number === '03' ? 'lesson' : 'lesson')} />
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 'var(--space-3xl)', marginTop: 'var(--space-4xl)', alignItems: 'start' }}>
        <div>
          <Rule tone="danger" label="Bonusakte · gesperrt" style={{ marginBottom: 'var(--space-lg)' }} />
          <LockedPanel title="06 · Was übrig bleibt" requirement="Kapitel 05 abschliessen"
            action={<Button variant="accent" size="sm" icon="lock-open">Freischalten</Button>}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
              Der Teil, den ich am längsten nicht aufschreiben wollte. Irgendwann funktioniert das Werkzeug besser als du selbst. Du merkst, dass du bei jeder Frau schon nach zwei Sätzen weisst, wie es endet — und dass dich das nicht mehr freut.
            </div>
          </LockedPanel>
        </div>
        <div>
          <Rule tone="danger" label="Red-Flag-Katalog" style={{ marginBottom: 'var(--space-lg)' }} />
          <div style={{ display: 'grid', gap: 'var(--space-sm)' }}>
            {flags.slice(0, 5).map(t => (
              <div key={t} style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'flex-start', padding: '10px 12px', background: 'var(--bg-surface)', border: '1px solid var(--rule-faint)' }}>
                <span style={{ color: 'var(--bordeaux-400)', marginTop: '1px' }}><Icon name="flag" size={14} /></span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.45, color: 'var(--text-secondary)' }}>{t}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-sm)', marginTop: 'var(--space-lg)' }}>
            <Badge tone="danger" icon="flag">7 Signale</Badge>
            <Badge tone="consent" icon="shield-check">Consent zuerst</Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ChapterIndex });
