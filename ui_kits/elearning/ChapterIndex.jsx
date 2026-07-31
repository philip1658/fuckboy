const { ChapterCard, Rule, Badge, Button, Icon, Card } = window.FUCKBOYDesignSystem_007b99;

const STATE_MAP = { 'abgeschlossen': 'done', 'begonnen': 'available', 'nicht begonnen': 'available' };

function ChapterIndex({ chapters, store, go }) {
  const done = chapters.filter(c => window.chapterState(c, store) === 'abgeschlossen').length;
  const acts = [
    { k: 'Akt I · 01–03', t: 'Die Basis', s: 'Haltung, Consent, Auftreten. Alles, was vor der ersten Nachricht zählt.', from: 0, to: 3 },
    { k: 'Akt II · 04–07', t: 'Der Weg zum Treffen', s: 'Profil, Schreiben, Einladung, Date. Das Handwerk.', from: 3, to: 7 },
    { k: 'Akt III · 08–12', t: 'Nähe und Rechnung', s: 'Der grösste Fehler, Ablehnung, Nähe, Danach — und was übrig bleibt.', from: 7, to: 12 }
  ];
  return (
    <div style={{ maxWidth: 'var(--width-content)' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'var(--space-2xl)', flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--bordeaux-400)' }}>Kapitelübersicht</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '54px', fontWeight: 700, lineHeight: 0.94, letterSpacing: '-0.02em', color: 'var(--paper-100)', marginTop: 'var(--space-lg)' }}>Vom ersten Match<br />bis zum Heimweg.</h1>
        </div>
        <Badge tone={done ? 'accent' : 'neutral'} icon={done ? 'check-check' : 'file-text'}>{done} von {chapters.length} abgeschlossen</Badge>
      </div>

      {acts.map(a => (
        <section key={a.t} style={{ marginTop: 'var(--space-4xl)' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-lg)', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-condensed)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--bordeaux-400)' }}>{a.k}</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 700, letterSpacing: '-0.015em', color: 'var(--paper-100)' }}>{a.t}</span>
          </div>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', lineHeight: 1.55, color: 'var(--text-muted)', marginTop: 'var(--space-sm)', maxWidth: '60ch' }}>{a.s}</p>
          <div style={{ display: 'grid', gap: 'var(--space-md)', marginTop: 'var(--space-lg)' }}>
            {chapters.slice(a.from, a.to).map(c => (
              <div key={c.number} style={{ display: 'flex', alignItems: 'stretch', gap: 0 }}>
                {c.image ? (
                  <button onClick={() => go('ch:' + c.number)} aria-label={'Kapitel ' + c.number} style={{
                    flex: 'none', width: 150, padding: 0, cursor: 'pointer', overflow: 'hidden',
                    background: 'var(--ink-800)', border: '1px solid var(--rule-faint)', borderRight: 0
                  }}>
                    <img src={'../../' + c.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </button>
                ) : null}
                <ChapterCard number={c.number} title={c.title} summary={c.subtitle}
                  duration={c.duration} decisions={c.quiz ? c.quiz.length : undefined}
                  state={STATE_MAP[window.chapterState(c, store)]}
                  onClick={() => go('ch:' + c.number)} style={{ flex: 1, minWidth: 0 }} />
              </div>
            ))}
          </div>
        </section>
      ))}

      <section style={{ marginTop: 'var(--space-4xl)' }}>
        <Rule tone="consent" label="Immer erreichbar" style={{ marginBottom: 'var(--space-lg)' }} />
        <Card surface="ink" padding="md" interactive onClick={() => go('safety')} style={{ maxWidth: 'var(--width-reader)', borderColor: 'rgba(19,229,255,.35)' }}>
          <div style={{ display: 'flex', gap: 'var(--space-lg)', alignItems: 'center' }}>
            <span style={{ display: 'flex', flex: 'none', color: 'var(--wire-500)' }}><Icon name="shield-check" size={24} /></span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 700, color: 'var(--paper-100)' }}>Schutz &amp; Recht</div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.5, color: 'var(--text-secondary)', marginTop: '5px' }}>Consent, sexuelle Gesundheit, digitale Grenzen, Sicherheit. Kein Kapitel — jederzeit offen.</div>
            </div>
            <span style={{ display: 'flex', flex: 'none', color: 'var(--text-faint)' }}><Icon name="chevron-right" size={20} /></span>
          </div>
        </Card>
      </section>
    </div>
  );
}

Object.assign(window, { ChapterIndex });
