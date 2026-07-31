const { Button, Stamp, PillChoice, WarningNotice, Rule } = window.FUCKBOYDesignSystem_007b99;

function CoverScreen({ go }) {
  const [pill, setPill] = React.useState(null);
  return (
    <div style={{ position: 'relative', height: '100%', overflowY: 'auto', background: 'var(--bg-void)' }} data-grain>
      <div style={{ maxWidth: 'var(--width-content)', margin: '0 auto', padding: 'var(--space-6xl) var(--gutter-page-wide) var(--space-7xl)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 'var(--space-2xl)' }}>
          <Stamp tone="classified" rotate={-3}>Vertraulich · nicht weitergeben</Stamp>
          <Stamp tone="neutral">Akte FB-00</Stamp>
        </div>

        <div style={{ border: '3px solid var(--paper-100)', padding: 'var(--space-4xl) var(--space-4xl) var(--space-3xl)', marginTop: 'var(--space-2xl)' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '124px', lineHeight: 0.82, letterSpacing: '-0.04em', color: 'var(--paper-100)' }}>FUCKBOY</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 'var(--space-2xl)', borderTop: '1px solid var(--rule-strong)', marginTop: 'var(--space-xl)', paddingTop: 'var(--space-md)' }}>
            <span style={{ fontFamily: 'var(--font-condensed)', fontSize: '15px', fontWeight: 600, letterSpacing: '0.42em', textTransform: 'uppercase', color: 'var(--paper-300)' }}>Das verbotene Werkzeug</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>6 Kapitel · 33 Entscheidungen</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 'var(--space-6xl)', marginTop: 'var(--space-5xl)', alignItems: 'start' }}>
          <div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-lead-size)', lineHeight: 1.5, color: 'var(--text-primary)', maxWidth: '46ch' }}>
              Ich bin nicht besonders gut aussehend. Ich hatte trotzdem mit ungefähr 200 Frauen Sex. Nicht wegen meinem Gesicht — wegen Kommunikation, Auftreten und dem Umgang mit Erwartungen.
            </p>
            <div style={{ borderLeft: '2px solid var(--bordeaux-700)', paddingLeft: 'var(--space-lg)', marginTop: 'var(--space-2xl)' }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                Ich schreibe das auf, weil es funktioniert. Und weil ich weiss, was es kaputt macht. Beides steht in dieser Akte. Du entscheidest, was du mitnimmst.
              </p>
            </div>
            <Rule tone="faint" style={{ margin: 'var(--space-3xl) 0 var(--space-xl)' }} />
            <WarningNotice tone="consent" title="Eine Regel steht über allem.">
              Sobald sie zögert, ausweicht, unsicher wirkt oder nicht weiter will, endet jeder Versuch. Sofort. Ohne Diskussion, ohne Verhandlung, ohne zweiten Anlauf. Ein Nein ist keine Hürde — es ist das Ende des Themas.
            </WarningNotice>
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '38px', fontWeight: 700, lineHeight: 1, letterSpacing: '-0.02em', color: 'var(--paper-100)' }}>Welche Pille nimmst du?</div>
            <div style={{ display: 'grid', gap: 'var(--space-lg)', marginTop: 'var(--space-2xl)' }}>
              <PillChoice pill="red" title="Zeig mir das Werkzeug." cost="Nähe wird schwerer" selected={pill === 'red'} onClick={() => setPill('red')}
                description="Alle Techniken — inklusive dem, was sie langfristig mit dir machen." />
              <PillChoice pill="blue" title="Ich sag die Wahrheit." cost="Kleinerer Pool" selected={pill === 'blue'} onClick={() => setPill('blue')}
                description="Offen kommunizierte Unverbindlichkeit. Weniger Matches, keine falschen Hoffnungen." />
            </div>
            <Button fullWidth size="lg" iconRight="arrow-right" disabled={!pill} onClick={() => go('overview')} style={{ marginTop: 'var(--space-2xl)' }}>
              {pill ? 'Akte öffnen' : 'Wähle eine Pille'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { CoverScreen });
