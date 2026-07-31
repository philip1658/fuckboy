const { SwipeCard, ChatBubble, ChoiceOption, Card, Rule, Button, Stamp, Badge, Icon, Tag } = window.FUCKBOYDesignSystem_007b99;

function ChatSimScreen({ chat, go, onCommit }) {
  const [thread, setThread] = React.useState(chat.thread);
  const [picked, setPicked] = React.useState(null);
  const [sent, setSent] = React.useState(false);
  const chosen = chat.replies.find(r => r.letter === picked);

  const send = () => {
    if (!chosen) return;
    setThread(t => [...t, { from: 'me', time: '23:39', text: chosen.quote.replace(/[„“]/g, ''), status: 'read' }]);
    setSent(true);
    if (onCommit) onCommit(chosen);
  };

  return (
    <div style={{ maxWidth: 'var(--width-content)' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--bordeaux-400)' }}>Kapitel 05 · Simulation 02</div>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '54px', fontWeight: 700, lineHeight: 0.94, letterSpacing: '-0.02em', color: 'var(--paper-100)', marginTop: 'var(--space-lg)' }}>Sie fragt, was du suchst.</h1>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-lead-size)', lineHeight: 1.5, color: 'var(--text-secondary)', marginTop: 'var(--space-lg)', maxWidth: '52ch' }}>
        Die unbequemste Nachricht im ganzen Chat. Drei Antworten. Alle drei funktionieren — nur nicht für dieselbe Sache.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '280px minmax(0,1fr)', gap: 'var(--space-4xl)', marginTop: 'var(--space-3xl)', alignItems: 'start' }}>
        <div style={{ display: 'grid', gap: 'var(--space-lg)' }}>
          <SwipeCard {...chat.profile} />
          <div>
            <Rule tone="subtle" label="Kontext" style={{ marginBottom: 'var(--space-md)' }} />
            <div style={{ display: 'grid', gap: '7px', fontFamily: 'var(--font-sans)', fontSize: '13px', lineHeight: 1.45, color: 'var(--text-muted)' }}>
              <div style={{ display: 'flex', gap: '9px' }}><Icon name="clock" size={14} color="var(--text-faint)" /> 11 Tage geschrieben</div>
              <div style={{ display: 'flex', gap: '9px' }}><Icon name="message-square" size={14} color="var(--text-faint)" /> Noch kein Treffen</div>
              <div style={{ display: 'flex', gap: '9px' }}><Icon name="shield-check" size={14} color="var(--wire-500)" /> Keine Grenze signalisiert</div>
            </div>
          </div>
        </div>

        <div>
          <Card surface="sunken" padding="md">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 'var(--space-md)', borderBottom: '1px solid var(--rule-faint)' }}>
              <span style={{ display: 'flex', gap: '9px', alignItems: 'center' }}>
                <span style={{ width: 26, height: 26, borderRadius: '50%', background: 'var(--ink-500)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-data)', fontSize: '12px', fontWeight: 700, color: 'var(--paper-300)' }}>M</span>
                <span style={{ fontFamily: 'var(--font-condensed)', fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-primary)' }}>M., 27</span>
              </span>
              <Stamp tone="neutral">Simulation</Stamp>
            </div>
            <div style={{ display: 'grid', gap: 'var(--space-sm)', marginTop: 'var(--space-lg)' }}>
              {thread.map((m, i) => (
                <ChatBubble key={i} from={m.from} time={m.time} status={m.status}>{m.text}</ChatBubble>
              ))}
              {sent ? <ChatBubble from="her" typing /> : null}
            </div>
          </Card>

          <Rule tone="subtle" label={sent ? 'Wirkung deiner Antwort' : 'Deine Antwort'} style={{ margin: 'var(--space-2xl) 0 var(--space-lg)' }} />
          <div style={{ display: 'grid', gap: 'var(--space-md)' }}>
            {chat.replies.map(r => (
              <ChoiceOption key={r.letter} letter={r.letter} label={r.label} quote={r.quote}
                outcome={r.outcome} feedback={r.feedback}
                selected={picked === r.letter} revealed={sent} disabled={sent}
                onClick={() => setPicked(r.letter)} />
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 'var(--space-lg)', marginTop: 'var(--space-2xl)' }}>
            {sent
              ? <Badge tone="caution" icon="scale">Unklarheit ist eine Entscheidung, keine Neutralität</Badge>
              : <Stamp tone="classified">Antwort wird protokolliert</Stamp>}
            {sent
              ? <Button size="lg" iconRight="gauge" onClick={() => go('profile')}>Mein Profil</Button>
              : <Button size="lg" iconRight="send" disabled={!picked} onClick={send}>Senden</Button>}
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ChatSimScreen });
