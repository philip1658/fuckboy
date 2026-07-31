const { Card, Rule, Badge, Button, Icon, ScoreMeter, WarningNotice } = window.FUCKBOYDesignSystem_007b99;

function Stat({ value, label, tone }) {
  return (
    <div style={{ minWidth: 0 }}>
      <div style={{ fontFamily: 'var(--font-data)', fontSize: '40px', fontWeight: 700, lineHeight: 0.9, color: tone || 'var(--paper-100)' }}>{value}</div>
      <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-faint)', marginTop: '9px' }}>{label}</div>
    </div>
  );
}

function OverviewScreen({ chapters, store, go }) {
  const COMP = window.FBCompetences;
  const done = chapters.filter(c => window.chapterState(c, store) === 'abgeschlossen').length;
  const started = chapters.find(c => window.chapterState(c, store) === 'begonnen') || chapters.find(c => window.chapterState(c, store) === 'nicht begonnen') || chapters[0];
  const minutes = chapters.reduce((n, c) => n + parseInt(c.duration, 10), 0);
  const quizzes = chapters.reduce((n, c) => n + (c.quiz ? c.quiz.length : 0), 0);

  return (
    <div style={{ maxWidth: 'var(--width-content)' }}>
      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 'var(--space-2xl)', flexWrap: 'wrap' }}>
          <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--bordeaux-400)' }}>Kursübersicht</div>
          <Badge tone="neutral">12 Kapitel · ca. {Math.round(minutes / 5) * 5} Minuten</Badge>
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '72px', fontWeight: 700, lineHeight: 0.9, letterSpacing: '-0.025em', color: 'var(--paper-100)', marginTop: 'var(--space-xl)', maxWidth: '24ch', textWrap: 'balance' }}>
          Mehr Dates. Mehr Sex. Und die Rechnung dazu.
        </h1>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-lead-size)', lineHeight: 1.5, color: 'var(--text-secondary)', marginTop: 'var(--space-2xl)', maxWidth: '58ch' }}>
          Das ist der Zweck: mehr Matches, mehr Dates, mehr Sex über Dating-Apps. Der Kurs sagt dir, was dabei wirklich funktioniert — und in derselben Zeile, was es kostet. Beides gehört zusammen. Wer nur den ersten Teil liest, hat den Kurs nicht verstanden.
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-6xl)', flexWrap: 'wrap', marginTop: 'var(--space-3xl)', paddingTop: 'var(--space-2xl)', borderTop: '1px solid var(--rule-subtle)' }}>
          <Stat value="12" label="Kapitel" />
          <Stat value={String(done).padStart(2, '0')} label="Abgeschlossen" tone={done ? 'var(--volt-500)' : undefined} />
          <Stat value={quizzes} label="Wissensfragen" />
          <Stat value="08" label="Kompetenzen" />
          <Stat value="01" label="Regel über allem" tone="var(--wire-500)" />
        </div>
      </section>

      <section style={{ marginTop: 'var(--space-5xl)' }}>
        <WarningNotice tone="consent" label="Die eine Regel" title="Ein Nein ist keine Verhandlungsposition.">
          Sobald sie zögert, ausweicht, unsicher wirkt oder nicht weiter will, endet jeder Versuch. Sofort. Ohne Diskussion, ohne charmantes Nachfassen, ohne zweiten Anlauf später am Abend. Consent ist in diesem Kurs keine Technik, um doch noch ans Ziel zu kommen — es ist die Bedingung, unter der überhaupt etwas stattfindet.
        </WarningNotice>
        <div style={{ display: 'flex', gap: 'var(--space-md)', marginTop: 'var(--space-lg)', flexWrap: 'wrap' }}>
          <Button variant="secondary" icon="shield-check" onClick={() => go('safety')}>Schutz &amp; Recht öffnen</Button>
          <Button variant="ghost" icon="file-text" onClick={() => go('ch:02')}>Kapitel 02 lesen</Button>
        </div>
      </section>

      <section style={{ marginTop: 'var(--space-5xl)' }}>
        <Rule tone="subtle" label="Aufbau · drei Akte" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 'var(--space-lg)', marginTop: 'var(--space-xl)' }}>
          {[
            { k: 'Akt I · 01–03', t: 'Die Basis', s: 'Haltung, Consent, Auftreten. Warum Wirkung mehr bringt als Aussehen — und warum Consent die Bedingung ist, nicht die Bremse.' },
            { k: 'Akt II · 04–07', t: 'Der Weg zum Treffen', s: 'Profil, Schreiben, Einladung, Date. Das Handwerk, mit dem aus einem Match ein realer Abend wird.' },
            { k: 'Akt III · 08–12', t: 'Nähe und Rechnung', s: 'Erwartungsdruck, Ablehnung, körperliche Nähe, der Abgang — und was das Werkzeug mit dem macht, der es benutzt.' }
          ].map(a => (
            <Card key={a.t} surface="ink" padding="md">
              <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--bordeaux-400)' }}>{a.k}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.015em', color: 'var(--paper-100)', marginTop: 'var(--space-md)' }}>{a.t}</div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', lineHeight: 1.55, color: 'var(--text-secondary)', marginTop: 'var(--space-sm)' }}>{a.s}</div>
            </Card>
          ))}
        </div>
      </section>

      <section style={{ marginTop: 'var(--space-5xl)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'var(--space-6xl)', alignItems: 'start' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '40px', fontWeight: 700, lineHeight: 1.02, letterSpacing: '-0.015em', color: 'var(--paper-100)' }}>Gemessen wird dein Verhalten.</h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body-size)', lineHeight: 1.62, color: 'var(--text-secondary)', marginTop: 'var(--space-lg)' }}>
              Acht Kompetenzen, keine Zahl für Matches, Dates oder Sexualkontakte. Punkte gibt es für gute Entscheidungen, nicht für Ergebnisse — eine respektvoll angenommene Absage zählt genauso viel wie ein gelungenes Gespräch.
            </p>
            <Button variant="secondary" iconRight="chevron-right" style={{ marginTop: 'var(--space-xl)' }} onClick={() => go('profile')}>Zur Auswertung</Button>
          </div>
          <div style={{ display: 'grid', gap: 'var(--space-lg)' }}>
            {COMP.slice(0, 4).map(c => <ScoreMeter key={c.id} label={c.label} value={store.competences[c.id]} icon={c.icon} tone={c.id === 'respekt' ? 'consent' : 'gain'} />)}
          </div>
        </div>
      </section>

      <section style={{ marginTop: 'var(--space-5xl)', paddingTop: 'var(--space-3xl)', borderTop: '1px solid var(--rule-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 'var(--space-2xl)', flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '30px', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.01em', color: 'var(--paper-100)' }}>Kapitel {started.number}: {started.title}</div>
          <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: '8px' }}>{started.subtitle} · {started.duration}</div>
        </div>
        <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
          <Button variant="secondary" icon="file-text" onClick={() => go('index')}>Alle Kapitel</Button>
          <Button size="lg" iconRight="arrow-right" onClick={() => go('ch:' + started.number)}>Weiterlernen</Button>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { OverviewScreen });
