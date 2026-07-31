const { Card, Rule, Badge, Button, Icon, Textarea, ChatBubble, SwipeCard, ChoiceOption, WarningNotice } = window.FUCKBOYDesignSystem_007b99;

const VERDICT = {
  immer:     { tone: 'accent',  icon: 'check-check', label: 'Immer' },
  empfohlen: { tone: 'neutral', icon: 'check',       label: 'Empfohlen' },
  bedingt:   { tone: 'caution', icon: 'triangle-alert', label: 'Nur mit Kontext' },
  nie:       { tone: 'danger',  icon: 'ban',         label: 'Nie' }
};

/* Kapitel 04 — Fotos & Ranking */
function PlaybookExtra({ photos, algorithm }) {
  return (
    <div style={{ marginTop: 'var(--space-5xl)', maxWidth: 'var(--width-content)' }}>
      <Rule tone="subtle" label="Fotos · nach Wirkung sortiert" style={{ marginBottom: 'var(--space-lg)' }} />
      <div style={{ borderTop: '1px solid var(--rule-subtle)' }}>
        {photos.map(p => {
          const v = VERDICT[p.verdict] || VERDICT.empfohlen;
          return (
            <div key={p.rank} style={{ display: 'grid', gridTemplateColumns: '44px minmax(0,1fr)', gap: 'var(--space-lg)', padding: 'var(--space-xl) 0', borderBottom: '1px solid var(--rule-faint)' }}>
              <span style={{ fontFamily: 'var(--font-data)', fontSize: '20px', fontWeight: 700, color: 'var(--text-faint)' }}>{p.rank}</span>
              <div style={{ minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '18px', fontWeight: 700, lineHeight: 1.3, color: 'var(--paper-100)' }}>{p.title}</span>
                  <Badge tone={v.tone} icon={v.icon}>{v.label}</Badge>
                </div>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', lineHeight: 1.6, color: 'var(--text-secondary)', marginTop: 'var(--space-sm)', maxWidth: '62ch' }}>{p.text}</p>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', lineHeight: 1.5, color: 'var(--text-faint)', marginTop: 'var(--space-sm)' }}>{p.note}</p>
              </div>
            </div>
          );
        })}
      </div>

      <Rule tone="subtle" label="Ranking · Erfahrungswerte, keine belegten Mechanismen" style={{ margin: 'var(--space-3xl) 0 var(--space-lg)' }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 'var(--space-lg)' }}>
        {algorithm.map(a => (
          <Card key={a.title} surface="ink" padding="md">
            <span style={{ display: 'flex', color: 'var(--paper-300)' }}><Icon name={a.icon} size={22} /></span>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '17px', fontWeight: 700, lineHeight: 1.25, color: 'var(--paper-100)', marginTop: 'var(--space-lg)' }}>{a.title}</div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.55, color: 'var(--text-secondary)', marginTop: 'var(--space-sm)' }}>{a.text}</p>
          </Card>
        ))}
      </div>

      <Rule tone="accent" label="Boost-Protokoll · in dieser Reihenfolge" style={{ margin: 'var(--space-3xl) 0 var(--space-lg)' }} />
      <div style={{ display: 'grid', gap: '2px' }}>
        {[
          ['01', 'Profil fertig bauen', 'Sechs Fotos, Text steht. Ein Boost auf ein halbes Profil ist verbranntes Geld.'],
          ['02', 'Sonntag, 20:00 Uhr', 'Höchste Aktivität der Woche. Freitagabend sind Menschen unterwegs, nicht in der App.'],
          ['03', 'Erreichbar bleiben', 'Die nächsten 30 Minuten. Wer während des Boosts matcht, antwortet sofort — oder nie.'],
          ['04', 'Erste Nachricht in unter 5 Minuten', 'Mit Baustein, aber personalisiert: ein Satz zu ihrem Profil, dann deine Frage.'],
          ['05', 'Nach 48 Stunden aufräumen', 'Tote Threads schliessen. Sie ziehen deine Antwortquote nach unten.']
        ].map(([n, t, s]) => (
          <div key={n} style={{ display: 'grid', gridTemplateColumns: '44px 220px minmax(0,1fr)', gap: 'var(--space-lg)', alignItems: 'baseline', padding: 'var(--space-lg) 0', borderBottom: '1px solid var(--rule-faint)' }}>
            <span style={{ fontFamily: 'var(--font-data)', fontSize: '16px', fontWeight: 700, color: 'var(--volt-600)' }}>{n}</span>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', fontWeight: 700, color: 'var(--paper-100)' }}>{t}</span>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.55, color: 'var(--text-secondary)' }}>{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Kapitel 05 — Textbaustein-Labor */
function SnippetExtra({ snippets }) {
  const [text, setText] = React.useState('');
  const [count, setCount] = React.useState(0);
  const expand = (value) => {
    const hit = snippets.find(s => value.endsWith(s.key));
    if (!hit) { setText(value); return; }
    setText(value.slice(0, -hit.key.length) + hit.text + ' ');
    setCount(c => c + 1);
  };
  return (
    <div style={{ marginTop: 'var(--space-5xl)', maxWidth: 'var(--width-content)' }}>
      <Rule tone="accent" label="Textbaustein-Labor" style={{ marginBottom: 'var(--space-lg)' }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 300px', gap: 'var(--space-3xl)', alignItems: 'start' }}>
        <div>
          <Textarea label="Probier es aus — tippe eine Abkürzung" rows={7} value={text}
            onChange={(e) => expand(e.target.value)}
            hint="Tippe ;vor · ;suc · ;dat · ;woh · ;wek — der Baustein ersetzt sich sofort." />
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text-faint)', marginTop: 'var(--space-md)' }}>
            {count} {count === 1 ? 'Baustein' : 'Bausteine'} eingesetzt · {text.trim().length} Zeichen
          </div>
        </div>
        <div>
          <Rule tone="subtle" label="Bausteine" style={{ marginBottom: 'var(--space-md)' }} />
          <div style={{ display: 'grid', gap: '2px' }}>
            {snippets.map(s => (
              <button key={s.key} onClick={() => expand(text + s.key)} style={{
                display: 'flex', alignItems: 'center', gap: 'var(--space-md)', width: '100%', textAlign: 'left',
                padding: '11px 12px', minHeight: 'var(--tap-min)', cursor: 'pointer',
                background: 'var(--bg-surface)', border: '1px solid var(--rule-faint)'
              }}>
                <span style={{ fontFamily: 'var(--font-data)', fontSize: '13px', fontWeight: 700, color: 'var(--volt-500)', flex: 'none' }}>{s.key}</span>
                <span style={{ fontFamily: 'var(--font-condensed)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>{s.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* Kapitel 11 — Chat-Simulation */
function ChatSimExtra({ chat }) {
  const [thread, setThread] = React.useState(chat.thread);
  const [picked, setPicked] = React.useState(null);
  const [sent, setSent] = React.useState(false);
  const chosen = chat.replies.find(r => r.letter === picked);
  return (
    <div style={{ marginTop: 'var(--space-5xl)', maxWidth: 'var(--width-content)' }}>
      <Rule tone="subtle" label="Simulation · sie fragt, was du suchst" style={{ marginBottom: 'var(--space-lg)' }} />
      <div style={{ display: 'grid', gridTemplateColumns: '260px minmax(0,1fr)', gap: 'var(--space-3xl)', alignItems: 'start' }}>
        <SwipeCard {...chat.profile} />
        <div>
          <Card surface="sunken" padding="md">
            <div style={{ display: 'grid', gap: 'var(--space-sm)' }}>
              {thread.map((m, i) => <ChatBubble key={i} from={m.from} time={m.time} status={m.status}>{m.text}</ChatBubble>)}
              {sent ? <ChatBubble from="her" typing /> : null}
            </div>
          </Card>
          <Rule tone="subtle" label={sent ? 'Wirkung' : 'Deine Antwort'} style={{ margin: 'var(--space-xl) 0 var(--space-lg)' }} />
          <div style={{ display: 'grid', gap: 'var(--space-md)' }}>
            {chat.replies.map(r => (
              <ChoiceOption key={r.letter} letter={r.letter} label={r.label} quote={r.quote}
                outcome={r.outcome} feedback={r.feedback}
                selected={picked === r.letter} revealed={sent} disabled={sent}
                onClick={() => setPicked(r.letter)} />
            ))}
          </div>
          {!sent ? (
            <Button size="lg" iconRight="send" disabled={!picked} style={{ marginTop: 'var(--space-lg)' }}
              onClick={() => { setThread(t => [...t, { from: 'me', time: '23:39', text: chosen.quote.replace(/[„“]/g, ''), status: 'read' }]); setSent(true); }}>Senden</Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { PlaybookExtra, SnippetExtra, ChatSimExtra });
