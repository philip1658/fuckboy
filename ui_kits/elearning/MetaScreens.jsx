const { Card, Rule, Badge, Button, Icon, Tabs, WarningNotice, ScoreMeter, Textarea } = window.FUCKBOYDesignSystem_007b99;

/* ── Kompetenzprofil ── */
function CompetenceScreen({ store, setStore, chapters, go }) {
  const [tab, setTab] = React.useState('profil');
  const COMP = window.FBCompetences;
  const done = chapters.filter(c => chapterState(c, store) === 'abgeschlossen').length;

  const challenges = chapters.filter(c => c.challenge);
  const kodex = (() => {
    const ch = chapters.find(c => c.interaction && c.interaction.type === 'values');
    if (!ch) return [];
    const picked = ((store.answers[ch.number] || {}).values) || {};
    return ch.interaction.items.filter((_, i) => picked[i]);
  })();
  const reflections = chapters
    .map(c => ({ ch: c, text: store.reflections[c.number] }))
    .filter(x => x.text && x.text.trim());

  return (
    <div style={{ maxWidth: 'var(--width-content)' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'var(--space-2xl)', flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--bordeaux-400)' }}>Persönliche Auswertung</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '54px', fontWeight: 700, lineHeight: 0.94, letterSpacing: '-0.02em', color: 'var(--paper-100)', marginTop: 'var(--space-lg)' }}>Dein Kompetenzprofil</h1>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontFamily: 'var(--font-data)', fontSize: '56px', fontWeight: 700, lineHeight: 0.9, color: 'var(--paper-100)' }}>{done}<span style={{ color: 'var(--text-faint)', fontSize: '28px' }}>/{chapters.length}</span></div>
          <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-faint)', marginTop: '6px' }}>Kapitel abgeschlossen</div>
        </div>
      </div>

      <Tabs value={tab} onChange={setTab} style={{ marginTop: 'var(--space-3xl)' }} items={[
        { value: 'profil', label: 'Kompetenzen', icon: 'gauge' },
        { value: 'kodex', label: 'Dein Kodex', icon: 'scale', count: kodex.length || undefined },
        { value: 'transfer', label: 'Transferplan', icon: 'target' },
        { value: 'notizen', label: 'Notizen', icon: 'file-text', count: reflections.length || undefined }
      ]} />

      <div style={{ marginTop: 'var(--space-3xl)' }}>
        {tab === 'profil' ? (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', columnGap: 'var(--space-4xl)', rowGap: 'var(--space-2xl)' }}>
              {COMP.map(c => (
                <ScoreMeter key={c.id} label={c.label} value={store.competences[c.id]} icon={c.icon}
                  tone={c.id === 'respekt' ? 'consent' : 'gain'} note={c.desc} />
              ))}
            </div>
            <WarningNotice tone="moral" title="Der Score misst dein Verhalten, nicht deine Erfolge." style={{ marginTop: 'var(--space-3xl)' }}>
              Es gibt hier keine Zahl für Dates, Matches oder Sexualkontakte — und das ist Absicht. Eine respektvoll angenommene Absage zählt in diesem Profil genauso viel wie ein gelungenes Gespräch. Wenn du eine Zahl suchst, an der du dich messen kannst, ist Respekt die einzige, bei der ein Höchstwert wirklich etwas bedeutet.
            </WarningNotice>
          </div>
        ) : null}

        {tab === 'kodex' ? (
          <div>
            {kodex.length ? (
              <Card surface="paper" padding="lg" style={{ maxWidth: 'var(--width-reader)' }}>
                <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--bordeaux-600)', borderBottom: '1px solid var(--rule-ink)', paddingBottom: 'var(--space-md)' }}>Mein Dating-Kodex</div>
                <ul style={{ listStyle: 'none', margin: 'var(--space-lg) 0 0', padding: 0, display: 'grid', gap: 'var(--space-md)' }}>
                  {kodex.map(t => (
                    <li key={t} style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'flex-start' }}>
                      <span style={{ display: 'flex', flex: 'none', marginTop: '3px', color: 'var(--ink-500)' }}><Icon name="check" size={15} stroke={2.5} /></span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', lineHeight: 1.6, color: 'var(--ink-800)' }}>{t}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ) : (
              <Card surface="ink" padding="lg" style={{ maxWidth: 'var(--width-reader)' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '17px', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                  Dein Kodex entsteht in Kapitel 12. Dort wählst du bis zu fünf Sätze, die ab dann für dich gelten — sie erscheinen anschliessend hier.
                </div>
                <Button variant="secondary" iconRight="arrow-right" style={{ marginTop: 'var(--space-lg)' }} onClick={() => go('ch:12')}>Zu Kapitel 12</Button>
              </Card>
            )}
          </div>
        ) : null}

        {tab === 'transfer' ? (
          <div style={{ display: 'grid', gap: 'var(--space-md)', maxWidth: 'var(--width-reader)' }}>
            {challenges.map(c => {
              const on = Boolean(store.challenges[c.number]);
              return (
                <div key={c.number} style={{ display: 'flex', gap: 'var(--space-lg)', alignItems: 'flex-start', padding: 'var(--space-lg)', background: 'var(--bg-surface)', border: '1px solid var(--rule-faint)' }}>
                  <button onClick={() => setStore(s => Object.assign({}, s, { challenges: Object.assign({}, s.challenges, { [c.number]: !on }) }))} style={{
                    flex: 'none', marginTop: '2px', width: 20, height: 20, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: on ? 'var(--volt-500)' : 'transparent', border: '1px solid ' + (on ? 'var(--volt-500)' : 'var(--rule-default)')
                  }}>{on ? <Icon name="check" size={13} color="var(--ink-900)" stroke={3} /> : null}</button>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>Kapitel {c.number}</div>
                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 700, color: on ? 'var(--text-muted)' : 'var(--paper-100)', marginTop: '5px' }}>{c.challenge.title}</div>
                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.55, color: 'var(--text-secondary)', marginTop: '5px' }}>{c.challenge.text}</div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}

        {tab === 'notizen' ? (
          <div style={{ maxWidth: 'var(--width-reader)' }}>
            {reflections.length ? (
              <div style={{ display: 'grid', gap: 'var(--space-lg)' }}>
                {reflections.map(({ ch, text }) => (
                  <div key={ch.number}>
                    <Rule tone="subtle" label={'Kapitel ' + ch.number + ' · ' + ch.rail} style={{ marginBottom: 'var(--space-md)' }} />
                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.5, color: 'var(--text-faint)', marginBottom: '8px' }}>{ch.reflection.question}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', lineHeight: 1.7, color: 'var(--text-secondary)', borderLeft: '2px solid var(--rule-subtle)', paddingLeft: 'var(--space-lg)' }}>{text}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '17px', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                Noch keine Notizen. Jedes Kapitel endet mit einer Reflexionsfrage — was du dort schreibst, sammelt sich hier.
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}

/* ── Schutz & Recht ── */
const SAFE_TONE = { consent: 'var(--wire-500)', caution: 'var(--amber-500)', danger: 'var(--bordeaux-400)', neutral: 'var(--paper-300)' };

function SafetyScreen() {
  const S = window.FBSafety;
  return (
    <div style={{ maxWidth: 'var(--width-content)' }}>
      <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--wire-500)' }}>Immer erreichbar</div>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '54px', fontWeight: 700, lineHeight: 0.94, letterSpacing: '-0.02em', color: 'var(--paper-100)', marginTop: 'var(--space-lg)' }}>Schutz &amp; Recht</h1>

      <div style={{ marginTop: 'var(--space-2xl)', maxWidth: 'var(--width-reader)' }}>
        <WarningNotice tone="caution" label="Hinweis" title="Keine Rechtsberatung.">{S.disclaimer}</WarningNotice>
      </div>

      <div style={{ display: 'grid', gap: 'var(--space-4xl)', marginTop: 'var(--space-4xl)' }}>
        {S.groups.map(g => (
          <section key={g.id}>
            <div style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'center' }}>
              <span style={{ display: 'flex', flex: 'none', color: SAFE_TONE[g.tone] }}><Icon name={g.icon} size={20} /></span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '30px', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.01em', color: 'var(--paper-100)' }}>{g.title}</h2>
              {g.configurable ? <Badge tone="caution" icon="triangle-alert">Vor Veröffentlichung konfigurieren</Badge> : null}
            </div>
            <div style={{ display: 'grid', gap: '2px', marginTop: 'var(--space-lg)', borderTop: '1px solid var(--rule-subtle)' }}>
              {g.items.map(it => (
                <div key={it.k} style={{ display: 'grid', gridTemplateColumns: '220px minmax(0,1fr)', gap: 'var(--space-2xl)', padding: 'var(--space-lg) 0', borderBottom: '1px solid var(--rule-faint)' }}>
                  <span style={{ fontFamily: 'var(--font-condensed)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: SAFE_TONE[g.tone] }}>{it.k}</span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: 1.6, color: 'var(--text-secondary)' }}>{it.v}</span>
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
function SettingsScreen({ store, onReset }) {
  const [confirm, setConfirm] = React.useState(false);
  const when = store.updatedAt ? new Date(store.updatedAt).toLocaleString('de-CH') : '—';
  return (
    <div style={{ maxWidth: 'var(--width-reader)' }}>
      <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>Einstellungen</div>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '40px', fontWeight: 700, lineHeight: 1.02, letterSpacing: '-0.015em', color: 'var(--paper-100)', marginTop: 'var(--space-lg)' }}>Fortschritt &amp; Daten</h1>

      <Card surface="ink" padding="md" style={{ marginTop: 'var(--space-2xl)' }}>
        <div style={{ display: 'grid', gap: 'var(--space-md)' }}>
          {[['Speicherort', 'Lokal in diesem Browser (localStorage)'], ['Datenmodell', 'Version ' + (window.FBStore ? window.FBStore.VERSION : 1)], ['Letzter Fortschritt', when], ['Übertragung', 'Keine — nichts verlässt dieses Gerät']].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', gap: 'var(--space-lg)', paddingBottom: 'var(--space-md)', borderBottom: '1px solid var(--rule-faint)' }}>
              <span style={{ fontFamily: 'var(--font-condensed)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>{k}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text-secondary)', textAlign: 'right' }}>{v}</span>
            </div>
          ))}
        </div>
      </Card>

      <WarningNotice tone="consent" title="Was du hier eingibst, bleibt hier." style={{ marginTop: 'var(--space-2xl)' }}>
        Reflexionen und eigene Formulierungen werden nur lokal gespeichert. Gib trotzdem keine echten Namen, Telefonnummern oder Nachrichten anderer Personen ein — auch nicht in Notizfeldern.
      </WarningNotice>

      <section style={{ marginTop: 'var(--space-3xl)' }}>
        <Rule tone="danger" label="Zurücksetzen" style={{ marginBottom: 'var(--space-lg)' }} />
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
          Löscht Kapitelstatus, Antworten, Reflexionen, Kompetenzwerte und den Transferplan. Das lässt sich nicht rückgängig machen.
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-md)', marginTop: 'var(--space-lg)', flexWrap: 'wrap' }}>
          {confirm ? (
            <>
              <Button variant="danger" icon="ban" onClick={() => { onReset(); setConfirm(false); }}>Ja, alles löschen</Button>
              <Button variant="ghost" onClick={() => setConfirm(false)}>Abbrechen</Button>
            </>
          ) : (
            <Button variant="secondary" icon="ban" onClick={() => setConfirm(true)}>Fortschritt zurücksetzen</Button>
          )}
        </div>
      </section>
    </div>
  );
}

/* ── Kapitelzustand ── */
function chapterState(ch, store) {
  const rec = store.chapters[ch.number] || {};
  if (rec.done) return 'abgeschlossen';
  if (rec.started) return 'begonnen';
  return 'nicht begonnen';
}

/* Pflichtteile: Ernstfall bestätigt (falls vorhanden) + alle Quizfragen beantwortet. */
function chapterComplete(ch, store) {
  const a = store.answers[ch.number] || {};
  if (ch.scenario && !(a.scenario && a.scenario.revealed)) return false;
  if (ch.quiz) {
    const q = store.quiz[ch.number] || {};
    for (let i = 0; i < ch.quiz.length; i++) if (q[i] === undefined) return false;
  }
  return true;
}

Object.assign(window, { CompetenceScreen, SafetyScreen, SettingsScreen, chapterState, chapterComplete });
