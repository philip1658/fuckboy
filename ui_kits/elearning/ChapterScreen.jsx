const { Card, Rule, Badge, Button, Icon, Textarea, WarningNotice, Toast, ChoiceOption, Stamp } = window.FUCKBOYDesignSystem_007b99;

/* ── Abschnitts-Renderer ── */
function Section({ s }) {
  const wrap = { marginTop: 'var(--space-3xl)' };

  if (s.type === 'text') return (
    <section style={wrap}>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '30px', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.01em', color: 'var(--paper-100)' }}>{s.h}</h2>
      {s.p.map((t, i) => (
        <p key={i} style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body-size)', lineHeight: 1.62, color: 'var(--text-secondary)', marginTop: 'var(--space-lg)', maxWidth: 'var(--measure-prose)' }}>{t}</p>
      ))}
    </section>
  );

  if (s.type === 'principle') return (
    <section style={wrap}>
      <Card surface="raised" padding="md">
        <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--wire-500)' }}>{s.label}</div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 700, lineHeight: 1.12, letterSpacing: '-0.015em', color: 'var(--paper-100)', marginTop: 'var(--space-md)' }}>{s.h}</div>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: 1.6, color: 'var(--text-secondary)', marginTop: 'var(--space-md)' }}>{s.p}</p>
      </Card>
    </section>
  );

  if (s.type === 'note') return (
    <section style={wrap}><WarningNotice tone={s.tone} title={s.title}>{s.text}</WarningNotice></section>
  );

  if (s.type === 'compare') return (
    <section style={wrap}>
      {s.h ? <Rule tone="subtle" label={s.h} style={{ marginBottom: 'var(--space-lg)' }} /> : null}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 'var(--space-lg)' }}>
        {[['bad', s.bad], ['good', s.good]].filter(x => x[1]).map(([k, v]) => {
          const good = k === 'good';
          return (
            <Card key={k} surface="raised" padding="sm">
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', color: good ? 'var(--volt-500)' : 'var(--bordeaux-400)' }}>
                <Icon name={good ? 'check-check' : 'ban'} size={16} />
                <span style={{ fontFamily: 'var(--font-condensed)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' }}>{v.label}</span>
              </div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', lineHeight: 1.55, color: 'var(--text-primary)', marginTop: '10px' }}>{v.text}</div>
            </Card>
          );
        })}
      </div>
    </section>
  );

  if (s.type === 'split') return (
    <section style={wrap}>
      {s.h ? <Rule tone="subtle" label={s.h} style={{ marginBottom: 'var(--space-lg)' }} /> : null}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 'var(--space-lg)' }}>
        {[['good', s.good], ['bad', s.bad]].map(([k, v]) => {
          const good = k === 'good';
          return (
            <Card key={k} surface="ink" padding="sm">
              <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: good ? 'var(--volt-500)' : 'var(--bordeaux-400)' }}>{v.title}</div>
              <ul style={{ listStyle: 'none', margin: 'var(--space-md) 0 0', padding: 0, display: 'grid', gap: '9px' }}>
                {v.items.map(t => (
                  <li key={t} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <span style={{ display: 'flex', flex: 'none', marginTop: '3px', color: good ? 'var(--volt-600)' : 'var(--bordeaux-500)' }}><Icon name={good ? 'check' : 'x'} size={13} stroke={2.5} /></span>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.5, color: 'var(--text-secondary)' }}>{t}</span>
                  </li>
                ))}
              </ul>
            </Card>
          );
        })}
      </div>
    </section>
  );

  if (s.type === 'list') {
    const color = s.tone === 'accent' ? 'var(--volt-600)' : s.tone === 'danger' ? 'var(--bordeaux-500)' : s.tone === 'consent' ? 'var(--wire-500)' : 'var(--text-faint)';
    return (
      <section style={wrap}>
        <Rule tone={s.tone === 'danger' ? 'danger' : 'subtle'} label={s.h} style={{ marginBottom: 'var(--space-lg)' }} />
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '11px', maxWidth: 'var(--measure-prose)' }}>
          {s.items.map(t => (
            <li key={t} style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'flex-start' }}>
              <span style={{ display: 'flex', flex: 'none', marginTop: '4px', color }}><Icon name={s.tone === 'danger' ? 'x' : 'check'} size={14} stroke={2.5} /></span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: 1.55, color: 'var(--text-secondary)' }}>{t}</span>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  if (s.type === 'definition') return (
    <section style={wrap}>
      <Rule tone="consent" label={s.h} style={{ marginBottom: 'var(--space-lg)' }} />
      <div style={{ display: 'grid', gap: '2px' }}>
        {s.items.map(it => (
          <div key={it.k} style={{ display: 'grid', gridTemplateColumns: '160px minmax(0,1fr)', gap: 'var(--space-lg)', padding: 'var(--space-md) 0', borderBottom: '1px solid var(--rule-faint)' }}>
            <span style={{ fontFamily: 'var(--font-condensed)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--wire-500)' }}>{it.k}</span>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', lineHeight: 1.55, color: 'var(--text-secondary)' }}>{it.v}</span>
          </div>
        ))}
      </div>
    </section>
  );

  if (s.type === 'phrases') return (
    <section style={wrap}>
      <Rule tone={s.tone === 'good' ? 'accent' : 'subtle'} label={s.h} style={{ marginBottom: 'var(--space-md)' }} />
      {s.note ? <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', lineHeight: 1.55, color: 'var(--text-muted)', marginBottom: 'var(--space-lg)', maxWidth: 'var(--measure-prose)' }}>{s.note}</p> : null}
      <div style={{ display: 'grid', gap: '8px' }}>
        {s.items.map(t => (
          <div key={t} style={{ padding: '13px 16px', background: 'var(--bg-surface)', borderLeft: '2px solid ' + (s.tone === 'good' ? 'var(--volt-600)' : 'var(--wire-600)'), fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: 1.5, color: 'var(--text-primary)' }}>{t}</div>
        ))}
      </div>
    </section>
  );

  return null;
}

/* ── Interaktion ── */
function Interaction({ ch, block, store, setStore }) {
  if (!block) return null;
  const key = ch.number;
  const saved = (store.answers[key] || {})[block.type];
  const put = (val) => setStore(s => {
    const a = Object.assign({}, s.answers);
    a[key] = Object.assign({}, a[key], { [block.type]: val });
    return Object.assign({}, s, { answers: a });
  });
  const setIdx = (i, v) => put(Object.assign({}, saved, { [i]: v }));
  const toggleIdx = (i) => put(Object.assign({}, saved, { [i]: !(saved || {})[i] }));

  let body = null;
  if (block.type === 'traffic')   body = <TrafficBlock items={block.items} saved={saved} onAnswer={setIdx} />;
  if (block.type === 'sort')      body = <SortBlock block={block} saved={saved} onAnswer={setIdx} />;
  if (block.type === 'facts')     body = <FactsBlock items={block.items} saved={saved} onAnswer={setIdx} />;
  if (block.type === 'improve')   body = <ImproveBlock rounds={block.rounds} saved={saved} onAnswer={setIdx} />;
  if (block.type === 'checklist') body = <ChecklistBlock items={block.items} saved={saved} onToggle={toggleIdx} />;
  if (block.type === 'values')    body = <ValuesBlock items={block.items} saved={saved} onToggle={toggleIdx} />;
  if (!body) return null;

  return (
    <section style={{ marginTop: 'var(--space-4xl)' }}>
      <Rule tone="accent" label={block.title} style={{ marginBottom: 'var(--space-md)' }} />
      {block.prompt ? <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', lineHeight: 1.55, color: 'var(--text-muted)', marginBottom: 'var(--space-lg)', maxWidth: 'var(--measure-prose)' }}>{block.prompt}</p> : null}
      {body}
    </section>
  );
}

/* ── Szenario ── */
const SIG = { consent: 'var(--wire-500)', caution: 'var(--amber-500)', danger: 'var(--bordeaux-400)' };
const COMP = window.FBCompetences || [];
const compLabel = (id) => (COMP.find(c => c.id === id) || {}).label || id;

function ScenarioBlock({ ch, sc, store, setStore, onDeltas }) {
  const key = ch.number;
  const state = (store.answers[key] || {}).scenario;
  const picked = state && state.picked;
  const revealed = state && state.revealed;
  const chosen = sc.options.find(o => o.letter === picked);

  const set = (val) => setStore(s => {
    const a = Object.assign({}, s.answers);
    a[key] = Object.assign({}, a[key], { scenario: val });
    return Object.assign({}, s, { answers: a });
  });

  const commit = () => { set({ picked, revealed: true }); if (chosen) onDeltas(chosen.deltas); };

  return (
    <section style={{ marginTop: 'var(--space-5xl)' }}>
      <Rule tone="danger" label="Ernstfall" style={{ marginBottom: 'var(--space-lg)' }} />
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '40px', fontWeight: 700, lineHeight: 1.02, letterSpacing: '-0.015em', color: 'var(--paper-100)' }}>{sc.title}</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 300px', gap: 'var(--space-3xl)', marginTop: 'var(--space-xl)', alignItems: 'start' }}>
        <div>
          <Card surface="sunken" padding="md">
            {sc.brief.map((b, i) => (
              <p key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', lineHeight: 1.7, color: i === sc.brief.length - 1 ? 'var(--text-primary)' : 'var(--text-secondary)', marginTop: i ? '10px' : 0 }}>{b}</p>
            ))}
          </Card>

          <Rule tone="subtle" label={revealed ? 'Wirkung deiner Entscheidung' : 'Was machst du?'} style={{ margin: 'var(--space-2xl) 0 var(--space-lg)' }} />
          <div style={{ display: 'grid', gap: 'var(--space-md)' }}>
            {sc.options.map(o => (
              <ChoiceOption key={o.letter} letter={o.letter} label={o.label} quote={o.quote}
                outcome={o.outcome} feedback={o.feedback}
                selected={picked === o.letter} revealed={Boolean(revealed)} disabled={Boolean(revealed)}
                onClick={() => set({ picked: o.letter, revealed: false })} />
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 'var(--space-lg)', marginTop: 'var(--space-2xl)', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-condensed)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: revealed ? 'var(--amber-500)' : 'var(--text-faint)' }}>
              {revealed ? 'Keine Option ist kostenlos' : 'Keine Antwort ist richtig oder falsch'}
            </span>
            {!revealed ? (
              <Button size="lg" iconRight="arrow-right" disabled={!picked} onClick={commit}>{picked ? 'Entscheidung bestätigen' : 'Wähle eine Reaktion'}</Button>
            ) : null}
          </div>
        </div>

        <aside style={{ display: 'grid', gap: 'var(--space-lg)' }}>
          <div>
            <Rule tone="subtle" label="Signale" style={{ marginBottom: 'var(--space-md)' }} />
            <div style={{ display: 'grid', gap: '8px' }}>
              {sc.signals.map((s, i) => (
                <div key={i} style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'flex-start', padding: '11px 12px', background: 'var(--bg-surface)', border: '1px solid var(--rule-faint)' }}>
                  <span style={{ display: 'flex', flex: 'none', marginTop: '1px', color: SIG[s.tone] }}><Icon name={s.icon} size={15} /></span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.45, color: 'var(--text-secondary)' }}>{s.text}</span>
                </div>
              ))}
            </div>
          </div>
          {revealed && chosen && chosen.deltas ? (
            <div>
              <Rule tone="accent" label="Kompetenzen" style={{ marginBottom: 'var(--space-md)' }} />
              <div style={{ display: 'grid', gap: '8px' }}>
                {chosen.deltas.map(d => (
                  <Toast key={d.id} tone={d.delta.indexOf('−') === 0 ? 'loss' : 'gain'} title={compLabel(d.id)} delta={d.delta} />
                ))}
              </div>
            </div>
          ) : null}
        </aside>
      </div>
    </section>
  );
}

/* ── Kapitelseite ── */
function ChapterScreen({ ch, store, setStore, go, onDeltas, extra }) {
  const key = ch.number;
  const setField = (bucket, val) => setStore(s => Object.assign({}, s, { [bucket]: Object.assign({}, s[bucket], { [key]: val }) }));
  const quizSaved = store.quiz[key] || {};
  const reflection = store.reflections[key] || '';
  const personal = store.reflections[key + ':line'] || '';
  const challengeDone = Boolean(store.challenges[key]);

  return (
    <article style={{ maxWidth: 'var(--width-content)' }}>
      <div style={{ maxWidth: 'var(--width-reader)' }}>
        <div style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'center', flexWrap: 'wrap' }}>
          <Badge tone="solid">Kapitel {ch.number}</Badge>
          <span style={{ fontFamily: 'var(--font-condensed)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
            {ch.duration}{ch.quiz ? ' · ' + ch.quiz.length + ' Fragen' : ''}{ch.scenario ? ' · 1 Ernstfall' : ''}
          </span>
        </div>

        {ch.image ? (
          <div style={{ marginTop: 'var(--space-xl)', aspectRatio: '4 / 3', maxHeight: 300, overflow: 'hidden', border: '1px solid var(--rule-subtle)', background: 'var(--ink-800)' }}>
            <img src={'../../' + ch.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        ) : null}
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '64px', fontWeight: 700, lineHeight: 0.92, letterSpacing: '-0.025em', color: 'var(--paper-100)', marginTop: 'var(--space-xl)', textWrap: 'balance' }}>{ch.title}</h1>
        <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '15px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--bordeaux-400)', marginTop: 'var(--space-md)' }}>{ch.subtitle}</div>

        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-lead-size)', lineHeight: 1.5, color: 'var(--text-primary)', marginTop: 'var(--space-2xl)', maxWidth: '48ch' }}>{ch.lead}</p>

        <div style={{ marginTop: 'var(--space-2xl)' }}>
          <Rule tone="subtle" label="Was du mitnimmst" style={{ marginBottom: 'var(--space-md)' }} />
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '8px' }}>
            {ch.goals.map(g => (
              <li key={g} style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'flex-start' }}>
                <span style={{ display: 'flex', flex: 'none', marginTop: '4px', color: 'var(--volt-600)' }}><Icon name="check" size={13} stroke={2.5} /></span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', lineHeight: 1.5, color: 'var(--text-secondary)' }}>{g}</span>
              </li>
            ))}
          </ul>
        </div>

        {ch.story ? (
          <div style={{ borderLeft: '2px solid var(--bordeaux-700)', paddingLeft: 'var(--space-lg)', marginTop: 'var(--space-3xl)' }}>
            <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--bordeaux-400)', marginBottom: 'var(--space-sm)' }}>Persönliche Notiz</div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', lineHeight: 1.7, color: 'var(--text-secondary)' }}>{ch.story}</p>
          </div>
        ) : null}

        {(ch.sections || []).map((s, i) => <Section key={i} s={s} />)}
      </div>

      {extra}

      {ch.scenario ? <ScenarioBlock ch={ch} sc={ch.scenario} store={store} setStore={setStore} onDeltas={onDeltas} /> : null}

      <div style={{ maxWidth: 'var(--width-reader)' }}>
        <Interaction ch={ch} block={ch.interaction} store={store} setStore={setStore} />

        {ch.challenge ? (
          <section style={{ marginTop: 'var(--space-4xl)' }}>
            <Rule tone="subtle" label="Real-Life-Übung" style={{ marginBottom: 'var(--space-lg)' }} />
            <Card surface="paper" padding="md">
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 'var(--space-lg)', alignItems: 'flex-start' }}>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '18px', fontWeight: 700, color: 'var(--ink-900)' }}>{ch.challenge.title}</div>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', lineHeight: 1.65, color: 'var(--ink-700)', marginTop: '10px' }}>{ch.challenge.text}</p>
                </div>
                <button onClick={() => setField('challenges', !challengeDone)} style={{
                  flex: 'none', display: 'flex', alignItems: 'center', gap: '8px', padding: '9px 13px', cursor: 'pointer',
                  background: challengeDone ? 'var(--ink-800)' : 'transparent', color: challengeDone ? 'var(--paper-100)' : 'var(--ink-700)',
                  border: '1px solid var(--rule-ink-strong)',
                  fontFamily: 'var(--font-condensed)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase'
                }}>
                  <Icon name={challengeDone ? 'check-check' : 'circle-dot'} size={14} />{challengeDone ? 'Erledigt' : 'Vorgemerkt'}
                </button>
              </div>
            </Card>
          </section>
        ) : null}

        {ch.reflection ? (
          <section style={{ marginTop: 'var(--space-4xl)' }}>
            <Rule tone="subtle" label="Reflexion" style={{ marginBottom: 'var(--space-lg)' }} />
            <Textarea label={ch.reflection.question} rows={4} value={reflection}
              placeholder={ch.reflection.placeholder}
              onChange={(e) => setField('reflections', e.target.value)}
              hint="Bleibt lokal auf deinem Gerät. Keine echten Namen oder Nachrichten anderer Personen eingeben." />
          </section>
        ) : null}

        {ch.personalLine ? (
          <section style={{ marginTop: 'var(--space-2xl)' }}>
            <Textarea label={ch.personalLine.question} rows={2} value={personal}
              placeholder={ch.personalLine.placeholder}
              onChange={(e) => setStore(s => Object.assign({}, s, { reflections: Object.assign({}, s.reflections, { [key + ':line']: e.target.value }) }))} />
          </section>
        ) : null}

        {ch.quiz ? (
          <section style={{ marginTop: 'var(--space-4xl)' }}>
            <Rule tone="subtle" label="Wissenstest" style={{ marginBottom: 'var(--space-lg)' }} />
            <QuizBlock id={key} quiz={ch.quiz} saved={quizSaved}
              onAnswer={(qi, oi) => setStore(s => Object.assign({}, s, { quiz: Object.assign({}, s.quiz, { [key]: Object.assign({}, s.quiz[key], { [qi]: oi }) }) }))} />
          </section>
        ) : null}

        {ch.summary ? (
          <section style={{ marginTop: 'var(--space-4xl)' }}>
            <Card surface="raised" padding="md">
              <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>Zusammenfassung</div>
              <ul style={{ listStyle: 'none', margin: 'var(--space-md) 0 0', padding: 0, display: 'grid', gap: '9px' }}>
                {ch.summary.map(t => (
                  <li key={t} style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'flex-start' }}>
                    <span style={{ display: 'flex', flex: 'none', marginTop: '4px', color: 'var(--paper-400)' }}><Icon name="chevron-right" size={13} stroke={2.5} /></span>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', lineHeight: 1.5, color: 'var(--text-secondary)' }}>{t}</span>
                  </li>
                ))}
              </ul>
              {ch.transfer ? (
                <div style={{ marginTop: 'var(--space-lg)', paddingTop: 'var(--space-md)', borderTop: '1px solid var(--rule-faint)', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <span style={{ display: 'flex', flex: 'none', marginTop: '2px', color: 'var(--volt-500)' }}><Icon name="target" size={15} /></span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', lineHeight: 1.5, color: 'var(--text-primary)' }}>{ch.transfer}</span>
                </div>
              ) : null}
            </Card>
          </section>
        ) : null}
      </div>
    </article>
  );
}

Object.assign(window, { ChapterScreen, Section, ScenarioBlock, Interaction });
