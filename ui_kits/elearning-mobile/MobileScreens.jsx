const { Card, Rule, Badge, Button, Icon, Textarea, ChapterCard, ChoiceOption, PillChoice, ScoreMeter, ChatBubble, SwipeCard, WarningNotice, Toast } = window.FUCKBOYDesignSystem_007b99;

const PAD = { padding: '0 20px' };

function MKicker({ children, tone }) {
  return <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: tone || 'var(--bordeaux-400)' }}>{children}</div>;
}

/* ── Cover ── */
function MCover({ go }) {
  const [pill, setPill] = React.useState(null);
  return (
    <div style={{ padding: '24px 20px 32px' }}>
      <MKicker>Mehr Sex über Dating-Apps</MKicker>
      <div style={{ border: '2px solid var(--paper-100)', padding: '22px 16px 14px', marginTop: '16px' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '46px', lineHeight: 0.84, letterSpacing: '-0.04em', color: 'var(--paper-100)' }}>FUCKBOY</div>
        <div style={{ borderTop: '1px solid var(--rule-strong)', marginTop: '14px', paddingTop: '9px', fontFamily: 'var(--font-condensed)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--paper-300)' }}>Der Ablauf ist immer gleich. Ich zeige ihn dir.</div>
      </div>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '17px', lineHeight: 1.5, color: 'var(--text-primary)', marginTop: '22px' }}>
        Fast alles davon lief über Dating-Apps. Nicht wegen meinem Gesicht — wegen Profil, Timing, Sprache, dem Umgang mit Erwartungen und einem System, das wie ein Laufband in einer Fabrik funktioniert. Wirkt warm, ist aber abgebrüht. Deshalb die Frage nach der Pille. Willst du das wirklich?
      </p>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', lineHeight: 1.55, color: 'var(--text-muted)', marginTop: '14px', borderLeft: '2px solid var(--bordeaux-700)', paddingLeft: '14px' }}>
        Und ja — merkst du, was ich gerade gemacht habe? Ich habe dir Druck gemacht, damit du weitermachst. Das ist genau die Technik aus Kapitel 08. Sie funktioniert auch bei dir.
      </p>
      <div style={{ marginTop: '22px' }}>
        <WarningNotice tone="consent" title="Eine Regel steht über allem.">
          Sobald sie zögert, ausweicht oder nicht weiter will, endet jeder Versuch. Sofort. Ein Nein ist keine Verhandlungsposition.
        </WarningNotice>
      </div>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.015em', color: 'var(--paper-100)', marginTop: '28px' }}>Welche Pille nimmst du?</div>
      <div style={{ display: 'grid', gap: '12px', marginTop: '14px' }}>
        <PillChoice pill="red" title="Zeig mir die verbotenen Techniken." selected={pill === 'red'} onClick={() => setPill('red')}
          description="Profil, Algorithmus, Sprache, Timing. Alles, was auf Dating-Apps wirklich funktioniert." style={{ padding: '22px 16px' }} />
        <PillChoice pill="blue" title="Ich suche eine Beziehung." selected={pill === 'blue'} onClick={() => setPill('blue')}
          description="Du willst eine Partnerin, keine Methode. Dann ist hier nichts für dich dabei." style={{ padding: '22px 16px' }} />
      </div>
      <Button fullWidth size="lg" iconRight="arrow-right" disabled={!pill} onClick={() => go(pill === 'blue' ? 'heaven' : 'overview')} style={{ marginTop: '18px' }}>
        {pill === 'blue' ? 'Bestätigen' : pill ? 'Kurs starten' : 'Wähle eine Pille'}
      </Button>
    </div>
  );
}

/* ── Übersicht ── */
function MOverview({ chapters, store, go }) {
  const COMP = window.FBCompetences;
  const done = chapters.filter(c => window.chapterState(c, store) === 'abgeschlossen').length;
  const next = chapters.find(c => window.chapterState(c, store) !== 'abgeschlossen') || chapters[0];
  return (
    <div style={{ paddingBottom: '28px' }}>
      <div style={{ ...PAD, paddingTop: '18px' }}>
        <MKicker>Kursübersicht</MKicker>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '34px', fontWeight: 700, lineHeight: 0.98, letterSpacing: '-0.02em', color: 'var(--paper-100)', marginTop: '11px' }}>Mehr Dates. Mehr Sex. Und die Rechnung dazu.</h1>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', lineHeight: 1.55, color: 'var(--text-secondary)', marginTop: '12px' }}>
          Der Kurs sagt dir, was funktioniert — und in derselben Zeile, was es kostet. Beides gehört zusammen.
        </p>
      </div>

      <div style={{ ...PAD, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '14px', marginTop: '22px', paddingTop: '18px', borderTop: '1px solid var(--rule-subtle)' }}>
        {[['12', 'Kapitel'], [String(done).padStart(2, '0'), 'Fertig'], ['08', 'Kompetenzen']].map(([v, l]) => (
          <div key={l}>
            <div style={{ fontFamily: 'var(--font-data)', fontSize: '28px', fontWeight: 700, lineHeight: 0.9, color: 'var(--paper-100)' }}>{v}</div>
            <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-faint)', marginTop: '7px' }}>{l}</div>
          </div>
        ))}
      </div>

      <div style={{ ...PAD, marginTop: '24px' }}>
        <WarningNotice tone="consent" label="Die eine Regel" title="Ein Nein ist keine Verhandlungsposition.">
          Consent ist keine Technik, um doch noch ans Ziel zu kommen — es ist die Bedingung, unter der überhaupt etwas stattfindet.
        </WarningNotice>
        <Button fullWidth variant="secondary" icon="shield-check" style={{ marginTop: '12px' }} onClick={() => go('safety')}>Schutz &amp; Recht</Button>
      </div>

      <div style={{ ...PAD, marginTop: '28px' }}>
        <Rule tone="subtle" label="Kompetenzen" />
        <div style={{ display: 'grid', gap: '14px', marginTop: '16px' }}>
          {COMP.slice(0, 4).map(c => <ScoreMeter key={c.id} label={c.label} value={store.competences[c.id]} icon={c.icon} tone={c.id === 'respekt' ? 'consent' : 'gain'} />)}
        </div>
      </div>

      <div style={{ ...PAD, marginTop: '28px' }}>
        <Button fullWidth size="lg" iconRight="arrow-right" onClick={() => go('ch:' + next.number)}>Kapitel {next.number}: {next.rail}</Button>
      </div>
    </div>
  );
}

/* ── Kapitelliste ── */
const STATE_MAP = { 'abgeschlossen': 'done', 'begonnen': 'available', 'nicht begonnen': 'available' };

function MChapters({ chapters, store, go }) {
  const done = chapters.filter(c => window.chapterState(c, store) === 'abgeschlossen').length;
  return (
    <div style={{ paddingBottom: '28px' }}>
      <div style={{ ...PAD, paddingTop: '18px' }}>
        <MKicker>Kapitelübersicht</MKicker>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '34px', fontWeight: 700, lineHeight: 0.98, letterSpacing: '-0.02em', color: 'var(--paper-100)', marginTop: '11px' }}>Vom ersten Match bis zum Heimweg.</h1>
        <div style={{ marginTop: '14px' }}><Badge tone={done ? 'accent' : 'neutral'} icon={done ? 'check-check' : 'file-text'}>{done} von {chapters.length} abgeschlossen</Badge></div>
      </div>
      <div style={{ ...PAD, marginTop: '20px', display: 'grid', gap: '10px' }}>
        {chapters.map(c => (
          <ChapterCard key={c.number} number={c.number} title={c.title} duration={c.duration}
            state={STATE_MAP[window.chapterState(c, store)]}
            onClick={() => go('ch:' + c.number)} style={{ padding: '16px', gap: '14px' }} />
        ))}
      </div>
      <div style={{ ...PAD, marginTop: '22px' }}>
        <Button fullWidth variant="secondary" icon="shield-check" onClick={() => go('safety')}>Schutz &amp; Recht</Button>
      </div>
    </div>
  );
}

/* ── Kapitel (kompakt) ── */
function MSection({ s }) {
  const wrap = { marginTop: '24px' };
  if (s.type === 'text') return (
    <section style={wrap}>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.01em', color: 'var(--paper-100)' }}>{s.h}</h2>
      {s.p.map((t, i) => <p key={i} style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: 1.6, color: 'var(--text-secondary)', marginTop: '12px' }}>{t}</p>)}
    </section>
  );
  if (s.type === 'principle') return (
    <section style={wrap}><Card surface="raised" padding="sm">
      <MKicker tone="var(--wire-500)">{s.label}</MKicker>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 700, lineHeight: 1.12, color: 'var(--paper-100)', marginTop: '10px' }}>{s.h}</div>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.6, color: 'var(--text-secondary)', marginTop: '10px' }}>{s.p}</p>
    </Card></section>
  );
  if (s.type === 'note') return <section style={wrap}><WarningNotice tone={s.tone} title={s.title}>{s.text}</WarningNotice></section>;
  if (s.type === 'compare' || s.type === 'split') {
    const pairs = s.type === 'compare' ? [['bad', s.bad], ['good', s.good]] : [['good', s.good], ['bad', s.bad]];
    return (
      <section style={wrap}>
        {s.h ? <Rule tone="subtle" label={s.h} style={{ marginBottom: '14px' }} /> : null}
        <div style={{ display: 'grid', gap: '10px' }}>
          {pairs.filter(x => x[1]).map(([k, v]) => {
            const good = k === 'good';
            return (
              <Card key={k} surface="raised" padding="sm">
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', color: good ? 'var(--volt-500)' : 'var(--bordeaux-400)' }}>
                  <Icon name={good ? 'check-check' : 'ban'} size={15} />
                  <span style={{ fontFamily: 'var(--font-condensed)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' }}>{v.label || v.title}</span>
                </div>
                {v.text ? <div style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', lineHeight: 1.55, color: 'var(--text-primary)', marginTop: '9px' }}>{v.text}</div> : null}
                {v.items ? (
                  <ul style={{ listStyle: 'none', margin: '10px 0 0', padding: 0, display: 'grid', gap: '7px' }}>
                    {v.items.map(t => <li key={t} style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.5, color: 'var(--text-secondary)' }}>{t}</li>)}
                  </ul>
                ) : null}
              </Card>
            );
          })}
        </div>
      </section>
    );
  }
  if (s.type === 'list') return (
    <section style={wrap}>
      <Rule tone={s.tone === 'danger' ? 'danger' : 'subtle'} label={s.h} style={{ marginBottom: '14px' }} />
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '10px' }}>
        {s.items.map(t => (
          <li key={t} style={{ display: 'flex', gap: '11px', alignItems: 'flex-start' }}>
            <span style={{ display: 'flex', flex: 'none', marginTop: '4px', color: s.tone === 'danger' ? 'var(--bordeaux-500)' : 'var(--volt-600)' }}><Icon name={s.tone === 'danger' ? 'x' : 'check'} size={13} stroke={2.5} /></span>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', lineHeight: 1.55, color: 'var(--text-secondary)' }}>{t}</span>
          </li>
        ))}
      </ul>
    </section>
  );
  if (s.type === 'definition') return (
    <section style={wrap}>
      <Rule tone="consent" label={s.h} style={{ marginBottom: '14px' }} />
      <div style={{ display: 'grid', gap: '2px' }}>
        {s.items.map(it => (
          <div key={it.k} style={{ padding: '11px 0', borderBottom: '1px solid var(--rule-faint)' }}>
            <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--wire-500)' }}>{it.k}</div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.55, color: 'var(--text-secondary)', marginTop: '5px' }}>{it.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
  if (s.type === 'phrases') return (
    <section style={wrap}>
      <Rule tone={s.tone === 'good' ? 'accent' : 'subtle'} label={s.h} style={{ marginBottom: '12px' }} />
      {s.note ? <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.55, color: 'var(--text-muted)', marginBottom: '14px' }}>{s.note}</p> : null}
      <div style={{ display: 'grid', gap: '8px' }}>
        {s.items.map(t => <div key={t} style={{ padding: '12px 14px', background: 'var(--bg-surface)', borderLeft: '2px solid ' + (s.tone === 'good' ? 'var(--volt-600)' : 'var(--wire-600)'), fontFamily: 'var(--font-sans)', fontSize: '15px', lineHeight: 1.5, color: 'var(--text-primary)' }}>{t}</div>)}
      </div>
    </section>
  );
  return null;
}

function MChapter({ ch, store, setStore, go, onDeltas }) {
  const key = ch.number;
  const sc = ch.scenario;
  const scState = (store.answers[key] || {}).scenario || {};
  const setScenario = (val) => setStore(s => {
    const a = Object.assign({}, s.answers);
    a[key] = Object.assign({}, a[key], { scenario: val });
    return Object.assign({}, s, { answers: a });
  });
  const chosen = sc && sc.options.find(o => o.letter === scState.picked);

  const iaSaved = ch.interaction ? ((store.answers[key] || {})[ch.interaction.type]) : null;
  const putIa = (val) => setStore(s => {
    const a = Object.assign({}, s.answers);
    a[key] = Object.assign({}, a[key], { [ch.interaction.type]: val });
    return Object.assign({}, s, { answers: a });
  });

  const CH = window.FBChapters;
  const idx = CH.indexOf(ch);
  const next = idx < CH.length - 1 ? CH[idx + 1] : null;

  return (
    <div style={{ paddingBottom: '28px' }}>
      <div style={{ ...PAD, paddingTop: '18px' }}>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Badge tone="solid">Kapitel {ch.number}</Badge>
          <span style={{ fontFamily: 'var(--font-condensed)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{ch.duration}{ch.quiz ? ' · ' + ch.quiz.length + ' Fragen' : ''}</span>
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '38px', fontWeight: 700, lineHeight: 0.96, letterSpacing: '-0.025em', color: 'var(--paper-100)', marginTop: '14px' }}>{ch.title}</h1>
        <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--bordeaux-400)', marginTop: '10px' }}>{ch.subtitle}</div>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '17px', lineHeight: 1.5, color: 'var(--text-primary)', marginTop: '16px' }}>{ch.lead}</p>

        <div style={{ marginTop: '20px' }}>
          <Rule tone="subtle" label="Was du mitnimmst" style={{ marginBottom: '12px' }} />
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '8px' }}>
            {ch.goals.map(g => (
              <li key={g} style={{ display: 'flex', gap: '11px', alignItems: 'flex-start' }}>
                <span style={{ display: 'flex', flex: 'none', marginTop: '4px', color: 'var(--volt-600)' }}><Icon name="check" size={13} stroke={2.5} /></span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.5, color: 'var(--text-secondary)' }}>{g}</span>
              </li>
            ))}
          </ul>
        </div>

        {ch.story ? (
          <div style={{ borderLeft: '2px solid var(--bordeaux-700)', paddingLeft: '14px', marginTop: '24px' }}>
            <MKicker>Persönliche Notiz</MKicker>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', lineHeight: 1.7, color: 'var(--text-secondary)', marginTop: '9px' }}>{ch.story}</p>
          </div>
        ) : null}

        {(ch.sections || []).map((s, i) => <MSection key={i} s={s} />)}

        {sc ? (
          <section style={{ marginTop: '30px' }}>
            <Rule tone="danger" label="Ernstfall" style={{ marginBottom: '14px' }} />
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 700, lineHeight: 1.06, letterSpacing: '-0.015em', color: 'var(--paper-100)' }}>{sc.title}</h2>
            <Card surface="sunken" padding="sm" style={{ marginTop: '14px' }}>
              {sc.brief.map((b, i) => <p key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', lineHeight: 1.7, color: i === sc.brief.length - 1 ? 'var(--text-primary)' : 'var(--text-secondary)', marginTop: i ? '9px' : 0 }}>{b}</p>)}
            </Card>
            <div style={{ display: 'grid', gap: '8px', marginTop: '14px' }}>
              {sc.signals.map((s, i) => (
                <div key={i} style={{ display: 'flex', gap: '11px', alignItems: 'flex-start', padding: '10px 12px', background: 'var(--bg-surface)', border: '1px solid var(--rule-faint)' }}>
                  <span style={{ display: 'flex', flex: 'none', marginTop: '1px', color: { consent: 'var(--wire-500)', caution: 'var(--amber-500)', danger: 'var(--bordeaux-400)' }[s.tone] }}><Icon name={s.icon} size={14} /></span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', lineHeight: 1.45, color: 'var(--text-secondary)' }}>{s.text}</span>
                </div>
              ))}
            </div>
            <Rule tone="subtle" label={scState.revealed ? 'Wirkung' : 'Was machst du?'} style={{ margin: '20px 0 14px' }} />
            <div style={{ display: 'grid', gap: '10px' }}>
              {sc.options.map(o => (
                <ChoiceOption key={o.letter} letter={o.letter} label={o.label} quote={o.quote} outcome={o.outcome} feedback={o.feedback}
                  selected={scState.picked === o.letter} revealed={Boolean(scState.revealed)} disabled={Boolean(scState.revealed)}
                  onClick={() => setScenario({ picked: o.letter, revealed: false })} style={{ padding: '16px' }} />
              ))}
            </div>
            {scState.revealed && chosen && chosen.deltas ? (
              <div style={{ display: 'grid', gap: '8px', marginTop: '14px' }}>
                {chosen.deltas.map(d => {
                  const c = (window.FBCompetences.find(x => x.id === d.id) || {}).label || d.id;
                  return <Toast key={d.id} tone={String(d.delta).indexOf('−') === 0 ? 'loss' : 'gain'} title={c} delta={d.delta} />;
                })}
              </div>
            ) : null}
            {!scState.revealed ? (
              <Button fullWidth size="lg" iconRight="arrow-right" disabled={!scState.picked} style={{ marginTop: '16px' }}
                onClick={() => { setScenario({ picked: scState.picked, revealed: true }); if (chosen) onDeltas(chosen.deltas); }}>
                {scState.picked ? 'Entscheidung bestätigen' : 'Wähle eine Reaktion'}
              </Button>
            ) : null}
          </section>
        ) : null}

        {ch.interaction ? (
          <section style={{ marginTop: '30px' }}>
            <Rule tone="accent" label={ch.interaction.title} style={{ marginBottom: '12px' }} />
            {ch.interaction.prompt ? <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.55, color: 'var(--text-muted)', marginBottom: '14px' }}>{ch.interaction.prompt}</p> : null}
            {ch.interaction.type === 'traffic' ? <TrafficBlock items={ch.interaction.items} saved={iaSaved} onAnswer={(i, v) => putIa(Object.assign({}, iaSaved, { [i]: v }))} /> : null}
            {ch.interaction.type === 'sort' ? <SortBlock block={ch.interaction} saved={iaSaved} onAnswer={(i, v) => putIa(Object.assign({}, iaSaved, { [i]: v }))} /> : null}
            {ch.interaction.type === 'facts' ? <FactsBlock items={ch.interaction.items} saved={iaSaved} onAnswer={(i, v) => putIa(Object.assign({}, iaSaved, { [i]: v }))} /> : null}
            {ch.interaction.type === 'improve' ? <ImproveBlock rounds={ch.interaction.rounds} saved={iaSaved} onAnswer={(i, v) => putIa(Object.assign({}, iaSaved, { [i]: v }))} /> : null}
            {ch.interaction.type === 'checklist' ? <ChecklistBlock items={ch.interaction.items} saved={iaSaved} onToggle={(i) => putIa(Object.assign({}, iaSaved, { [i]: !(iaSaved || {})[i] }))} /> : null}
            {ch.interaction.type === 'values' ? <ValuesBlock items={ch.interaction.items} saved={iaSaved} onToggle={(i) => putIa(Object.assign({}, iaSaved, { [i]: !(iaSaved || {})[i] }))} /> : null}
          </section>
        ) : null}

        {ch.challenge ? (
          <section style={{ marginTop: '30px' }}>
            <Rule tone="subtle" label="Real-Life-Übung" style={{ marginBottom: '14px' }} />
            <Card surface="paper" padding="sm">
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 700, color: 'var(--ink-900)' }}>{ch.challenge.title}</div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', lineHeight: 1.65, color: 'var(--ink-700)', marginTop: '9px' }}>{ch.challenge.text}</p>
              <button onClick={() => setStore(s => Object.assign({}, s, { challenges: Object.assign({}, s.challenges, { [key]: !s.challenges[key] }) }))} style={{
                display: 'flex', alignItems: 'center', gap: '8px', marginTop: '14px', padding: '10px 14px', minHeight: '44px', cursor: 'pointer', width: '100%', justifyContent: 'center',
                background: store.challenges[key] ? 'var(--ink-800)' : 'transparent', color: store.challenges[key] ? 'var(--paper-100)' : 'var(--ink-700)',
                border: '1px solid var(--rule-ink-strong)', fontFamily: 'var(--font-condensed)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase'
              }}><Icon name={store.challenges[key] ? 'check-check' : 'circle-dot'} size={14} />{store.challenges[key] ? 'Erledigt' : 'Vorgemerkt'}</button>
            </Card>
          </section>
        ) : null}

        {ch.reflection ? (
          <section style={{ marginTop: '30px' }}>
            <Rule tone="subtle" label="Reflexion" style={{ marginBottom: '14px' }} />
            <Textarea label={ch.reflection.question} rows={4} value={store.reflections[key] || ''}
              placeholder={ch.reflection.placeholder}
              onChange={(e) => setStore(s => Object.assign({}, s, { reflections: Object.assign({}, s.reflections, { [key]: e.target.value }) }))}
              hint="Bleibt lokal auf deinem Gerät." />
          </section>
        ) : null}

        {ch.quiz ? (
          <section style={{ marginTop: '30px' }}>
            <Rule tone="subtle" label="Wissenstest" style={{ marginBottom: '14px' }} />
            <QuizBlock id={key} quiz={ch.quiz} saved={store.quiz[key] || {}}
              onAnswer={(qi, oi) => setStore(s => Object.assign({}, s, { quiz: Object.assign({}, s.quiz, { [key]: Object.assign({}, s.quiz[key], { [qi]: oi }) }) }))} />
          </section>
        ) : null}

        {ch.summary ? (
          <section style={{ marginTop: '30px' }}>
            <Card surface="raised" padding="sm">
              <MKicker tone="var(--text-faint)">Zusammenfassung</MKicker>
              <ul style={{ listStyle: 'none', margin: '12px 0 0', padding: 0, display: 'grid', gap: '9px' }}>
                {ch.summary.map(t => (
                  <li key={t} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <span style={{ display: 'flex', flex: 'none', marginTop: '4px', color: 'var(--paper-400)' }}><Icon name="chevron-right" size={12} stroke={2.5} /></span>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.5, color: 'var(--text-secondary)' }}>{t}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </section>
        ) : null}

        <div style={{ marginTop: '26px' }}>
          {next
            ? <Button fullWidth size="lg" iconRight="arrow-right" onClick={() => go('ch:' + next.number)}>Weiter: {next.rail}</Button>
            : <Button fullWidth size="lg" iconRight="gauge" onClick={() => go('profile')}>Zur Auswertung</Button>}
        </div>
      </div>
    </div>
  );
}

/* ── Auswertung ── */
function MProfile({ chapters, store, setStore, go }) {
  const COMP = window.FBCompetences;
  const done = chapters.filter(c => window.chapterState(c, store) === 'abgeschlossen').length;
  return (
    <div style={{ paddingBottom: '28px' }}>
      <div style={{ ...PAD, paddingTop: '18px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '16px' }}>
        <div>
          <MKicker>Persönliche Auswertung</MKicker>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: 700, lineHeight: 1, letterSpacing: '-0.02em', color: 'var(--paper-100)', marginTop: '10px' }}>Kompetenzprofil</h1>
        </div>
        <div style={{ textAlign: 'right', flex: 'none' }}>
          <div style={{ fontFamily: 'var(--font-data)', fontSize: '34px', fontWeight: 700, lineHeight: 0.9, color: 'var(--paper-100)' }}>{done}<span style={{ color: 'var(--text-faint)', fontSize: '18px' }}>/12</span></div>
        </div>
      </div>
      <div style={{ ...PAD, marginTop: '22px', display: 'grid', gap: '16px' }}>
        {COMP.map(c => <ScoreMeter key={c.id} label={c.label} value={store.competences[c.id]} icon={c.icon} tone={c.id === 'respekt' ? 'consent' : 'gain'} note={c.desc} />)}
      </div>
      <div style={{ ...PAD, marginTop: '24px' }}>
        <WarningNotice tone="moral" title="Gemessen wird dein Verhalten, nicht dein Erfolg.">
          Keine Zahl für Matches oder Sexualkontakte. Eine respektvoll angenommene Absage zählt genauso viel wie ein gelungenes Gespräch.
        </WarningNotice>
      </div>
      <div style={{ ...PAD, marginTop: '20px' }}>
        <Button fullWidth variant="secondary" icon="ellipsis" onClick={() => go('settings')}>Einstellungen</Button>
      </div>
    </div>
  );
}

/* ── Schutz & Recht ── */
function MSafety() {
  const S = window.FBSafety;
  const TONE = { consent: 'var(--wire-500)', caution: 'var(--amber-500)', danger: 'var(--bordeaux-400)', neutral: 'var(--paper-300)' };
  return (
    <div style={{ paddingBottom: '28px' }}>
      <div style={{ ...PAD, paddingTop: '18px' }}>
        <MKicker tone="var(--wire-500)">Immer erreichbar</MKicker>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '34px', fontWeight: 700, lineHeight: 0.98, letterSpacing: '-0.02em', color: 'var(--paper-100)', marginTop: '11px' }}>Schutz &amp; Recht</h1>
        <div style={{ marginTop: '18px' }}>
          <WarningNotice tone="caution" label="Hinweis" title="Keine Rechtsberatung.">{S.disclaimer}</WarningNotice>
        </div>
        {S.groups.map(g => (
          <section key={g.id} style={{ marginTop: '28px' }}>
            <div style={{ display: 'flex', gap: '11px', alignItems: 'center' }}>
              <span style={{ display: 'flex', flex: 'none', color: TONE[g.tone] }}><Icon name={g.icon} size={18} /></span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 600, color: 'var(--paper-100)' }}>{g.title}</h2>
            </div>
            <div style={{ display: 'grid', gap: '2px', marginTop: '14px', borderTop: '1px solid var(--rule-subtle)' }}>
              {g.items.map(it => (
                <div key={it.k} style={{ padding: '12px 0', borderBottom: '1px solid var(--rule-faint)' }}>
                  <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: TONE[g.tone] }}>{it.k}</div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', lineHeight: 1.6, color: 'var(--text-secondary)', marginTop: '6px' }}>{it.v}</div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

/* ── Einstellungen ── */
function MSettings({ store, onReset }) {
  const [confirm, setConfirm] = React.useState(false);
  return (
    <div style={{ ...PAD, paddingTop: '18px', paddingBottom: '28px' }}>
      <MKicker tone="var(--text-faint)">Einstellungen</MKicker>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '30px', fontWeight: 700, lineHeight: 1.02, color: 'var(--paper-100)', marginTop: '10px' }}>Fortschritt &amp; Daten</h1>
      <Card surface="ink" padding="sm" style={{ marginTop: '18px' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
          Lokal gespeichert · Modell v{window.FBStore.VERSION}<br />
          Zuletzt: {store.updatedAt ? new Date(store.updatedAt).toLocaleString('de-CH') : '—'}
        </div>
      </Card>
      <div style={{ marginTop: '18px' }}>
        <WarningNotice tone="consent" title="Was du hier eingibst, bleibt hier.">
          Nichts verlässt dieses Gerät. Gib trotzdem keine echten Namen oder Nachrichten anderer Personen ein.
        </WarningNotice>
      </div>
      <Rule tone="danger" label="Zurücksetzen" style={{ margin: '24px 0 14px' }} />
      {confirm ? (
        <div style={{ display: 'grid', gap: '10px' }}>
          <Button fullWidth variant="danger" icon="ban" onClick={() => { onReset(); setConfirm(false); }}>Ja, alles löschen</Button>
          <Button fullWidth variant="ghost" onClick={() => setConfirm(false)}>Abbrechen</Button>
        </div>
      ) : (
        <Button fullWidth variant="secondary" icon="ban" onClick={() => setConfirm(true)}>Fortschritt zurücksetzen</Button>
      )}
    </div>
  );
}

Object.assign(window, { MCover, MOverview, MChapters, MChapter, MProfile, MSafety, MSettings, MSection, MKicker });
