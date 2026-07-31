const { Card, Rule, Stamp, Badge, Button, Icon, ScoreMeter, WarningNotice, ChapterCard, LockedPanel, ProgressRail, Tooltip } = window.FUCKBOYDesignSystem_007b99;

function StatBlock({ value, label, tone }) {
  return (
    <div style={{ minWidth: 0 }}>
      <div style={{ fontFamily: 'var(--font-data)', fontSize: '40px', fontWeight: 700, lineHeight: 0.9, color: tone || 'var(--paper-100)', fontVariantNumeric: 'tabular-nums' }}>{value}</div>
      <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-faint)', marginTop: '9px' }}>{label}</div>
    </div>
  );
}

function GoalList({ number, title, duration, goals, state }) {
  const locked = state === 'locked';
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '62px minmax(0,1fr)', gap: 'var(--space-2xl)', padding: 'var(--space-2xl) 0', borderBottom: '1px solid var(--rule-faint)' }}>
      <div style={{ fontFamily: 'var(--font-data)', fontSize: '30px', fontWeight: 700, lineHeight: 1, color: locked ? 'var(--text-faint)' : 'var(--bordeaux-400)', fontVariantNumeric: 'tabular-nums' }}>{number}</div>
      <div style={{ minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.015em', color: locked ? 'var(--text-muted)' : 'var(--paper-100)' }}>{title}</span>
          <span style={{ fontFamily: 'var(--font-condensed)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>{duration}</span>
          {locked ? <Badge tone="locked" icon="lock">Gesperrt</Badge> : null}
        </div>
        <ul style={{ listStyle: 'none', margin: 'var(--space-lg) 0 0', padding: 0, display: 'grid', gap: '9px' }}>
          {goals.map(g => (
            <li key={g} style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'flex-start' }}>
              <span style={{ flex: 'none', marginTop: '4px', color: locked ? 'var(--ink-400)' : 'var(--volt-600)' }}><Icon name="check" size={14} stroke={2.5} /></span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', lineHeight: 1.55, color: 'var(--text-secondary)' }}>{g}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function OverviewScreen({ chapters, goals, formats, bosslevels, scores, go }) {
  const gains = scores.filter(s => s.tone === 'gain' || s.tone === 'consent');
  const costs = scores.filter(s => s.tone === 'loss' || s.tone === 'neutral');
  return (
    <div style={{ maxWidth: 'var(--width-content)' }}>

      {/* ── Hero ── */}
      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 'var(--space-2xl)' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--bordeaux-400)' }}>Kursübersicht · Akte FB-00 bis FB-06</div>
          <Stamp tone="classified" rotate={-2}>Vertraulich</Stamp>
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '72px', fontWeight: 700, lineHeight: 0.9, letterSpacing: '-0.025em', color: 'var(--paper-100)', marginTop: 'var(--space-xl)', maxWidth: '24ch', textWrap: 'balance' }}>
          Ein Werkzeug — und die Rechnung dazu.
        </h1>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-lead-size)', lineHeight: 1.5, color: 'var(--text-secondary)', marginTop: 'var(--space-2xl)', maxWidth: '58ch' }}>
          Sechs Kapitel über Kommunikation, Wirkung und Erwartungen beim Dating — geschrieben von jemandem, der es gemacht hat und weiss, was es kostet. Du entscheidest an jeder Stelle selbst. Der Kurs bewertet dich nicht, er zeigt dir nur, was deine Entscheidung wahrscheinlich auslöst.
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-6xl)', flexWrap: 'wrap', marginTop: 'var(--space-3xl)', paddingTop: 'var(--space-2xl)', borderTop: '1px solid var(--rule-subtle)' }}>
          <StatBlock value="06" label="Kapitel" />
          <StatBlock value="33" label="Entscheidungen" />
          <StatBlock value="08" label="Score-Dimensionen" />
          <StatBlock value="80" label="Minuten total" />
          <StatBlock value="01" label="Regel über allem" tone="var(--wire-500)" />
        </div>
      </section>

      {/* ── Consent ── */}
      <section style={{ marginTop: 'var(--space-5xl)' }}>
        <WarningNotice tone="consent" label="Die eine Regel" title="Ein Nein ist keine Verhandlungsposition.">
          Sobald sie zögert, ausweicht, unsicher wirkt oder nicht weiter will, endet jeder Versuch. Sofort. Ohne Diskussion, ohne charmantes Nachfassen, ohne zweiten Anlauf später am Abend. Consent ist in diesem Kurs keine Technik, um doch noch ans Ziel zu kommen — es ist die Bedingung, unter der überhaupt etwas stattfindet. Wer das anders liest, hat den Kurs nicht verstanden.
        </WarningNotice>
      </section>

      {/* ── Spannungsbogen ── */}
      <section style={{ marginTop: 'var(--space-5xl)' }}>
        <Rule tone="subtle" label="Dramaturgie · vom Mindset zur Rechnung" />
        <div style={{ marginTop: 'var(--space-xl)' }}>
          <ProgressRail current={2} steps={chapters.map(c => ({ label: c.number + ' ' + (c.railLabel || c.title), locked: c.state === 'locked' }))} onSelect={() => go('index')} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 'var(--space-lg)', marginTop: 'var(--space-2xl)' }}>
          {[
            { k: 'Akt I · Kapitel 01–02', t: 'Haltung', s: 'Wirkung statt Aussehen. Absicht statt Andeutung. Consent als Fundament, nicht als Fussnote.' },
            { k: 'Akt II · Kapitel 03–04', t: 'Reibung', s: 'Druck, Erwartung, Ablehnung. Der Teil, in dem das Ego stört und der Kurs unbequem wird.' },
            { k: 'Akt III · Kapitel 05–06', t: 'Rechnung', s: 'Ehrlichkeit gegen Reichweite. Und die Bonusakte: was das Werkzeug mit dem macht, der es benutzt.' }
          ].map(a => (
            <Card key={a.t} surface="ink" padding="md">
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--bordeaux-400)' }}>{a.k}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.015em', color: 'var(--paper-100)', marginTop: 'var(--space-md)' }}>{a.t}</div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', lineHeight: 1.55, color: 'var(--text-secondary)', marginTop: 'var(--space-sm)' }}>{a.s}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* ── Lernziele ── */}
      <section style={{ marginTop: 'var(--space-5xl)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 'var(--space-2xl)' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '40px', fontWeight: 700, lineHeight: 1.02, letterSpacing: '-0.015em', color: 'var(--paper-100)' }}>Was du pro Kapitel mitnimmst</h2>
          <Button variant="secondary" iconRight="chevron-right" onClick={() => go('index')}>Zum Akten-Index</Button>
        </div>
        <div style={{ marginTop: 'var(--space-2xl)', borderTop: '1px solid var(--rule-subtle)' }}>
          {chapters.map(c => (
            <GoalList key={c.number} number={c.number} title={c.title} duration={c.duration} state={c.state} goals={goals[c.number] || []} />
          ))}
        </div>
      </section>

      {/* ── Lernformate ── */}
      <section style={{ marginTop: 'var(--space-5xl)' }}>
        <Rule tone="subtle" label="Lernformate · kein klassisches Schulungsmodul" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 'var(--space-lg)', marginTop: 'var(--space-xl)' }}>
          {formats.map(fm => (
            <Card key={fm.title} surface="raised" padding="md">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 'var(--space-md)' }}>
                <span style={{ color: 'var(--paper-300)' }}><Icon name={fm.icon} size={22} /></span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>{fm.count}</span>
              </div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '17px', fontWeight: 700, lineHeight: 1.25, color: 'var(--paper-100)', marginTop: 'var(--space-lg)' }}>{fm.title}</div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.55, color: 'var(--text-secondary)', marginTop: 'var(--space-sm)' }}>{fm.text}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* ── Score-Modell ── */}
      <section style={{ marginTop: 'var(--space-5xl)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 'var(--space-6xl)', alignItems: 'start' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '40px', fontWeight: 700, lineHeight: 1.02, letterSpacing: '-0.015em', color: 'var(--paper-100)' }}>Der Score misst beides.</h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body-size)', lineHeight: 1.62, color: 'var(--text-secondary)', marginTop: 'var(--space-lg)' }}>
              Vier Werte steigen, wenn du souverän handelst. Vier Werte zeigen, was dein Verhalten kostet — Erwartungsdruck, Kollateralschaden, und ein Fuckboy-Level, das ausdrücklich kein Ziel ist. Du kannst nicht alle acht gleichzeitig optimieren. Genau das ist die Lektion.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap', marginTop: 'var(--space-xl)' }}>
              <Badge tone="accent" icon="trending-up">4 Stärken</Badge>
              <Badge tone="danger" icon="trending-down">3 Kosten</Badge>
              <Badge tone="consent" icon="shield-check">Consent wird nie belohnt</Badge>
            </div>
          </div>
          <div style={{ display: 'grid', gap: 'var(--space-lg)' }}>
            {gains.map(s => <ScoreMeter key={s.label} label={s.label} value={s.value} tone={s.tone} icon={s.icon} />)}
            <Rule tone="danger" label="Kosten" style={{ margin: 'var(--space-sm) 0' }} />
            {costs.map(s => <ScoreMeter key={s.label} label={s.label} value={s.value} tone={s.tone} icon={s.icon} />)}
          </div>
        </div>
      </section>

      {/* ── Boss-Level + Bonus ── */}
      <section style={{ marginTop: 'var(--space-5xl)', display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: 'var(--space-3xl)', alignItems: 'start' }}>
        <div>
          <Rule tone="subtle" label="Boss-Level · eines pro Kapitel" style={{ marginBottom: 'var(--space-lg)' }} />
          <div style={{ display: 'grid', gap: '2px' }}>
            {bosslevels.map((b, i) => (
              <div key={b} style={{ display: 'grid', gridTemplateColumns: '34px minmax(0,1fr)', gap: 'var(--space-md)', alignItems: 'center', padding: '13px 0', borderBottom: '1px solid var(--rule-faint)' }}>
                <span style={{ fontFamily: 'var(--font-data)', fontSize: '14px', fontWeight: 700, color: 'var(--text-faint)' }}>{String(i + 1).padStart(2, '0')}</span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', lineHeight: 1.45, color: 'var(--text-secondary)' }}>{b}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Rule tone="danger" label="Bonusakte · gesperrt" style={{ marginBottom: 'var(--space-lg)' }} />
          <LockedPanel title="06 · Was übrig bleibt" requirement="Kapitel 05 abschliessen"
            action={<Button variant="accent" size="sm" icon="lock-open">Freischalten</Button>}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
              Irgendwann funktioniert das Werkzeug besser als du selbst. Du weisst nach zwei Sätzen, wie ein Abend endet — und merkst, dass dich das nicht mehr freut. Dieses Kapitel handelt nicht von Technik.
            </div>
          </LockedPanel>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ marginTop: 'var(--space-5xl)', paddingTop: 'var(--space-3xl)', borderTop: '1px solid var(--rule-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 'var(--space-2xl)', flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '30px', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.01em', color: 'var(--paper-100)' }}>Kapitel 03 wartet.</div>
          <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: '8px' }}>Der grösste Fehler · 14 Min · 6 Entscheidungen</div>
        </div>
        <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
          <Button variant="secondary" icon="gauge" onClick={() => go('profile')}>Mein Profil</Button>
          <Button size="lg" iconRight="arrow-right" onClick={() => go('lesson')}>Weiterlesen</Button>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { OverviewScreen });
