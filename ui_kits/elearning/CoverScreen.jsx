const { Button, Stamp, PillChoice, WarningNotice, Rule } = window.FUCKBOYDesignSystem_007b99;

function CoverScreen({ go }) {
  const [pill, setPill] = React.useState(null);
  return (
    <div style={{ position: 'relative', height: '100%', overflowY: 'auto', background: 'var(--bg-void)' }} data-grain>
      <div style={{ maxWidth: 'var(--width-content)', margin: '0 auto', padding: 'var(--space-6xl) var(--gutter-page-wide) var(--space-7xl)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 'var(--space-2xl)', fontFamily: 'var(--font-condensed)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
          <span style={{ color: 'var(--bordeaux-400)' }}>Mehr Sex über Dating-Apps — ehrlich erklärt</span>
          <span style={{ color: 'var(--text-faint)' }}>Ausgabe 2026</span>
        </div>

        <div style={{ border: '3px solid var(--paper-100)', padding: 'var(--space-4xl) var(--space-4xl) var(--space-3xl)', marginTop: 'var(--space-2xl)' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '124px', lineHeight: 0.82, letterSpacing: '-0.04em', color: 'var(--paper-100)' }}>FUCKBOY</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 'var(--space-2xl)', borderTop: '1px solid var(--rule-strong)', marginTop: 'var(--space-xl)', paddingTop: 'var(--space-md)' }}>
            <span style={{ fontFamily: 'var(--font-condensed)', fontSize: '15px', fontWeight: 600, letterSpacing: '0.42em', textTransform: 'uppercase', color: 'var(--paper-300)' }}>Der Ablauf ist immer gleich</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>12 Kapitel · ca. 210 Minuten · 1 Regel über allem</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 'var(--space-6xl)', marginTop: 'var(--space-5xl)', alignItems: 'start' }}>
          <div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-lead-size)', lineHeight: 1.5, color: 'var(--text-primary)', maxWidth: '46ch' }}>
              Ich bin nicht besonders gut aussehend. Ich hatte trotzdem mit ungefähr 200 Frauen Sex, fast alle über Dating-Apps. Nicht wegen meinem Gesicht — wegen Profil, Timing, Sprache, dem Umgang mit Erwartungen und einem System, das wie ein Laufband in einer Fabrik funktioniert. Wirkt warm, ist aber abgebrüht.
            </p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body-size)', lineHeight: 1.62, color: 'var(--text-secondary)', maxWidth: '52ch', marginTop: 'var(--space-lg)' }}>
              Deshalb die Frage nach der Pille. Willst du das wirklich? Wenn nein, ist der Lehrgang nichts für dich. Du wirst dann wahrscheinlich feststellen, dass deine Konkurrenz deine Regeln bricht. Das tut mir leid. Sie haben die rote Pille genommen.
            </p>
            <div style={{ borderLeft: '2px solid var(--bordeaux-700)', paddingLeft: 'var(--space-lg)', marginTop: 'var(--space-xl)' }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                Und ja — merkst du, was ich gerade gemacht habe? Ich habe dir Druck gemacht, damit du weitermachst. Das ist genau die Technik aus Kapitel 03. Sie funktioniert auch bei dir.
              </p>
            </div>
            <div style={{ borderLeft: '2px solid var(--rule-subtle)', paddingLeft: 'var(--space-lg)', marginTop: 'var(--space-2xl)' }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                Ich schreibe das auf, weil es funktioniert. Und weil ich weiss, was es kaputt macht. Beides steht hier drin, in derselben Reihenfolge, in der es dir passieren wird.
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
              <PillChoice pill="red" title="Zeig mir die verbotenen Techniken." selected={pill === 'red'} onClick={() => setPill('red')}
                description="Profil, Algorithmus, Sprache, Timing. Alles, was auf Dating-Apps wirklich funktioniert — auch das, was man normalerweise nicht laut sagt." />
              <PillChoice pill="blue" title="Ich suche eine Beziehung." selected={pill === 'blue'} onClick={() => setPill('blue')}
                description="Du willst eine Partnerin, keine Methode. Dann ist hier nichts für dich dabei — und das ist völlig in Ordnung." />
            </div>
            <Button fullWidth size="lg" iconRight="arrow-right" disabled={!pill} onClick={() => go(pill === 'blue' ? 'heaven' : 'overview')} style={{ marginTop: 'var(--space-2xl)' }}>
              {pill === 'blue' ? 'Bestätigen' : pill ? 'Kurs starten' : 'Wähle eine Pille'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { CoverScreen });
