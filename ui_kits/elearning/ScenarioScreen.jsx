const { Card, Rule, ChoiceOption, Button, Stamp, Icon, Toast, WarningNotice, Badge } = window.FUCKBOYDesignSystem_007b99;

const SIGNAL_COLOR = { consent: 'var(--wire-500)', caution: 'var(--amber-500)', danger: 'var(--bordeaux-400)' };

function ScenarioScreen({ scenario, go, onCommit }) {
  const [picked, setPicked] = React.useState(null);
  const [revealed, setRevealed] = React.useState(false);
  const chosen = scenario.options.find(o => o.letter === picked);

  const commit = () => { setRevealed(true); if (onCommit && chosen) onCommit(chosen); };

  return (
    <div style={{ maxWidth: 'var(--width-content)', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 340px', gap: 'var(--space-4xl)', alignItems: 'start' }}>
      <div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--bordeaux-400)' }}>{scenario.kicker}</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '54px', fontWeight: 700, lineHeight: 0.94, letterSpacing: '-0.02em', color: 'var(--paper-100)', marginTop: 'var(--space-lg)' }}>{scenario.title}</h1>

        <Card surface="sunken" padding="md" style={{ marginTop: 'var(--space-2xl)' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: 'var(--space-md)' }}>Situation</div>
          {scenario.brief.map((b, i) => (
            <p key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', lineHeight: 1.7, color: i === scenario.brief.length - 1 ? 'var(--text-primary)' : 'var(--text-secondary)', marginTop: i ? '10px' : 0 }}>{b}</p>
          ))}
        </Card>

        <Rule tone="subtle" label={revealed ? 'Deine Entscheidung · Wirkung' : 'Was machst du?'} style={{ margin: 'var(--space-3xl) 0 var(--space-lg)' }} />

        <div style={{ display: 'grid', gap: 'var(--space-md)' }}>
          {scenario.options.map(o => (
            <ChoiceOption key={o.letter} letter={o.letter} label={o.label} quote={o.quote}
              outcome={o.outcome} feedback={o.feedback}
              selected={picked === o.letter} revealed={revealed} disabled={revealed}
              onClick={() => setPicked(o.letter)} />
          ))}
        </div>

        {revealed ? (
          <div style={{ marginTop: 'var(--space-2xl)' }}>
            <WarningNotice tone="consent" title="Egal welche Variante: das Nein beendet alles.">
              Wenn sie in diesem Moment ausweicht, das Thema wechselt oder „vielleicht“ sagt, ist Schluss. Nicht später nochmal probieren. Nicht charmant nachfassen. Thema vom Tisch — dauerhaft.
            </WarningNotice>
          </div>
        ) : null}

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 'var(--space-lg)', marginTop: 'var(--space-3xl)' }}>
          <Stamp tone={revealed ? 'moral' : 'classified'}>{revealed ? 'Keine Option ist kostenlos' : 'Antworten sind nicht richtig oder falsch'}</Stamp>
          {revealed
            ? <Button size="lg" iconRight="message-square" onClick={() => go('chat')}>Chat-Simulation</Button>
            : <Button size="lg" iconRight="arrow-right" disabled={!picked} onClick={commit}>{picked ? 'Entscheidung bestätigen' : 'Wähle eine Reaktion'}</Button>}
        </div>
      </div>

      <aside style={{ display: 'grid', gap: 'var(--space-lg)', position: 'sticky', top: 0 }}>
        <div>
          <Rule tone="subtle" label="Signal-Lesung" style={{ marginBottom: 'var(--space-md)' }} />
          <div style={{ display: 'grid', gap: 'var(--space-sm)' }}>
            {scenario.signals.map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'flex-start', padding: '11px 12px', background: 'var(--bg-surface)', border: '1px solid var(--rule-faint)' }}>
                <span style={{ color: SIGNAL_COLOR[s.tone], marginTop: '1px' }}><Icon name={s.icon} size={15} /></span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.45, color: 'var(--text-secondary)' }}>{s.text}</span>
              </div>
            ))}
          </div>
        </div>
        {revealed && chosen ? (
          <div>
            <Rule tone="accent" label="Score-Änderung" style={{ marginBottom: 'var(--space-md)' }} />
            <div style={{ display: 'grid', gap: 'var(--space-sm)' }}>
              {chosen.deltas.map(d => (
                <Toast key={d.label} tone={d.tone} title={d.label} delta={d.delta} />
              ))}
            </div>
            <div style={{ display: 'flex', gap: 'var(--space-sm)', marginTop: 'var(--space-lg)', flexWrap: 'wrap' }}>
              <Badge tone={chosen.outcome === 'good' ? 'consent' : chosen.outcome === 'bad' ? 'danger' : 'caution'} icon={chosen.outcome === 'good' ? 'shield-check' : chosen.outcome === 'bad' ? 'ban' : 'triangle-alert'}>
                {chosen.outcome === 'good' ? 'Souverän' : chosen.outcome === 'bad' ? 'Grenze übergangen' : 'Wirksam, aber teuer'}
              </Badge>
            </div>
          </div>
        ) : null}
      </aside>
    </div>
  );
}

Object.assign(window, { ScenarioScreen });
