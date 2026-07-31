const { Card, Rule, Redacted, WarningNotice, Stamp, Checkbox, Button, Badge, Icon, Tooltip } = window.FUCKBOYDesignSystem_007b99;

function LessonScreen({ go, transfer, toggleTransfer }) {
  return (
    <article style={{ maxWidth: 'var(--width-reader)' }}>
      <div style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'center', flexWrap: 'wrap' }}>
        <Badge tone="solid">Kapitel 03</Badge>
        <span style={{ fontFamily: 'var(--font-condensed)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>14 Min · 6 Entscheidungen · 1 Boss-Level</span>
      </div>

      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '72px', fontWeight: 700, lineHeight: 0.9, letterSpacing: '-0.025em', color: 'var(--paper-100)', marginTop: 'var(--space-xl)' }}>Der grösste Fehler</h1>

      <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-lead-size)', lineHeight: 1.5, color: 'var(--text-primary)', marginTop: 'var(--space-2xl)', maxWidth: '46ch' }}>
        Der grösste Fehler auf diesem Weg ist banal: unbedingt Sex haben zu wollen. Nichts riecht schneller nach Verzweiflung. Und nichts erzeugt mehr Druck.
      </p>

      <div style={{ borderLeft: '2px solid var(--bordeaux-700)', paddingLeft: 'var(--space-lg)', margin: 'var(--space-3xl) 0' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--bordeaux-400)', marginBottom: 'var(--space-md)' }}>Feldnotiz · <Redacted width="5ch">2019</Redacted></div>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
          Ich erinnere mich an ein Date mit <Redacted>Marlene</Redacted>. Ich hatte den Abend im Kopf schon fertig, bevor er angefangen hat. Sie hat es gemerkt. Ich habe damals gedacht, es lag an meinem Hemd. Es lag an <Redacted>meiner Erwartung</Redacted>.
        </p>
      </div>

      <Rule tone="subtle" label="Prinzip" style={{ margin: 'var(--space-3xl) 0 var(--space-xl)' }} />

      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '30px', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.01em', color: 'var(--paper-100)' }}>Du hast es nicht nötig.</h2>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body-size)', lineHeight: 1.62, color: 'var(--text-secondary)', marginTop: 'var(--space-lg)', maxWidth: 'var(--measure-prose)' }}>
        Du kannst Interesse zeigen. Du kannst ein Angebot machen. Danach entscheidet sie — frei, ohne dass du nachschiebst. Wenn sie nicht will, ist das in Ordnung. Eine Absage ist kein persönliches Scheitern und keine Aufgabe, die es zu lösen gilt. Sie ist ein Datenpunkt: keine gegenseitige Passung. Beide investieren ihre Zeit ab jetzt sinnvoller.
      </p>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body-size)', lineHeight: 1.62, color: 'var(--text-secondary)', marginTop: 'var(--space-lg)', maxWidth: 'var(--measure-prose)' }}>
        Wer viele Menschen kennenlernt, sammelt zwangsläufig viele Absagen. Das ist Mathematik, nicht Kritik. Der Unterschied zwischen souverän und verzweifelt liegt nicht im Ergebnis, sondern darin, ob du vorher schon eines erwartet hast.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-lg)', margin: 'var(--space-3xl) 0' }}>
        <Card surface="raised" padding="sm">
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', color: 'var(--volt-500)' }}><Icon name="check-check" size={16} /><span style={{ fontFamily: 'var(--font-condensed)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' }}>Druckfrei</span></div>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', lineHeight: 1.55, color: 'var(--text-primary)', marginTop: '10px' }}>„Ich würde dich gern küssen. Sag einfach nein, wenn nicht.“</div>
        </Card>
        <Card surface="raised" padding="sm">
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', color: 'var(--bordeaux-400)' }}><Icon name="ban" size={16} /><span style={{ fontFamily: 'var(--font-condensed)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' }}>Druck</span></div>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', lineHeight: 1.55, color: 'var(--text-primary)', marginTop: '10px' }}>„Komm schon, jetzt sei nicht so. Ein Kuss ist doch nichts.“</div>
        </Card>
      </div>

      <WarningNotice tone="moral" title="Das sitzt bei mir inzwischen. Genau das ist das Unbequeme.">
        Ich arbeite als Verkaufstrainer. Ich erkenne die Muster, weil ich sie beruflich benutze — und ich muss nicht mehr darüber nachdenken. Aber dieselbe Technik, die ein Gespräch offen macht, kann es auch gezielt in eine Richtung schieben. Der Unterschied liegt allein in der Absicht. Und je automatischer das läuft, desto weniger merkst du selbst, auf welcher Seite du gerade stehst.
      </WarningNotice>

      <div style={{ marginTop: 'var(--space-4xl)' }}>
        <Rule tone="subtle" label="Transfer · ausserhalb dieses Kurses" style={{ marginBottom: 'var(--space-lg)' }} />
        <Card surface="paper" padding="md">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--rule-ink)', paddingBottom: 'var(--space-md)' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--bordeaux-600)' }}>Beilage 03 · Übungsblatt</span>
            <span style={{ fontFamily: 'var(--font-data)', fontSize: '12px', fontWeight: 700, color: 'var(--ink-400)' }}>{transfer.filter(t => t.done).length}/{transfer.length}</span>
          </div>
          <div style={{ display: 'grid', gap: '2px', marginTop: 'var(--space-md)' }}>
            {transfer.map((t, i) => (
              <label key={i} onClick={(e) => { e.preventDefault(); toggleTransfer(i); }} style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'flex-start', cursor: 'pointer', padding: '7px 0', minHeight: '44px' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 19, height: 19, flex: 'none', marginTop: '2px', background: t.done ? 'var(--ink-800)' : 'transparent', border: '1px solid var(--rule-ink-strong)' }}>
                  {t.done ? <Icon name="check" size={13} color="var(--paper-100)" stroke={3} /> : null}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', lineHeight: 1.55, color: t.done ? 'var(--ink-400)' : 'var(--ink-700)', textDecoration: t.done ? 'line-through' : 'none' }}>{t.text}</span>
              </label>
            ))}
          </div>
        </Card>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-lg)', marginTop: 'var(--space-4xl)', paddingTop: 'var(--space-2xl)', borderTop: '1px solid var(--rule-subtle)' }}>
        <Stamp tone="classified">Kapitel 03 · Seite 4 von 4</Stamp>
        <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
          <Button variant="secondary" icon="arrow-left" onClick={() => go('index')}>Index</Button>
          <Button size="lg" iconRight="split" onClick={() => go('scenario')}>Zum Boss-Level</Button>
        </div>
      </div>
    </article>
  );
}

Object.assign(window, { LessonScreen });
