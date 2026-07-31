const { Card, Rule, Badge, Button, Icon, Textarea, Toast, WarningNotice, ChoiceOption } = window.FUCKBOYDesignSystem_007b99;

const KINDS = window.FBFeedbackKinds || {};

/* ── Quiz ── */
function QuizBlock({ id, quiz, saved, onAnswer }) {
  const answers = saved || {};
  return (
    <div style={{ display: 'grid', gap: 'var(--space-2xl)' }}>
      {quiz.map((q, qi) => {
        const picked = answers[qi];
        return (
          <div key={qi}>
            <div style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'baseline' }}>
              <span style={{ fontFamily: 'var(--font-data)', fontSize: '13px', fontWeight: 700, color: 'var(--text-faint)', flex: 'none' }}>{String(qi + 1).padStart(2, '0')}</span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '17px', fontWeight: 700, lineHeight: 1.35, color: 'var(--paper-100)' }}>{q.q}</span>
            </div>
            <div style={{ display: 'grid', gap: '6px', marginTop: 'var(--space-md)', paddingLeft: '30px' }}>
              {q.options.map((o, oi) => {
                const chosen = picked === oi;
                const reveal = picked !== undefined;
                const color = o.correct ? 'var(--volt-500)' : 'var(--bordeaux-400)';
                return (
                  <button key={oi} disabled={reveal} onClick={() => onAnswer(qi, oi)} style={{
                    display: 'block', width: '100%', textAlign: 'left', padding: '12px 14px',
                    background: chosen ? 'var(--bg-surface-raised)' : 'var(--bg-surface)',
                    border: '1px solid ' + (reveal && (chosen || o.correct) ? color : 'var(--rule-faint)'),
                    cursor: reveal ? 'default' : 'pointer',
                    opacity: reveal && !chosen && !o.correct ? 0.5 : 1,
                    transition: 'var(--transition-hover)'
                  }}>
                    <span style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      {reveal ? <span style={{ display: 'flex', flex: 'none', marginTop: '2px', color: o.correct ? 'var(--volt-500)' : chosen ? 'var(--bordeaux-400)' : 'transparent' }}><Icon name={o.correct ? 'check' : 'x'} size={14} stroke={2.5} /></span> : null}
                      <span style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', lineHeight: 1.5, color: 'var(--text-primary)' }}>{o.text}</span>
                    </span>
                    {reveal && (chosen || o.correct) ? (
                      <span style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '13px', lineHeight: 1.5, color: 'var(--text-muted)', marginTop: '7px', paddingLeft: reveal ? '24px' : 0 }}>{o.why}</span>
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ── Consent-Ampel ── */
const LIGHTS = {
  gruen: { label: 'Grün', color: 'var(--volt-500)', hint: 'Weiter' },
  gelb:  { label: 'Gelb', color: 'var(--amber-500)', hint: 'Nachfragen' },
  rot:   { label: 'Rot',  color: 'var(--bordeaux-500)', hint: 'Stoppen' }
};

function TrafficBlock({ items, saved, onAnswer }) {
  const answers = saved || {};
  return (
    <div style={{ display: 'grid', gap: '10px' }}>
      {items.map((it, i) => {
        const picked = answers[i];
        const right = picked === it.answer;
        return (
          <Card key={i} surface="ink" padding="sm">
            <div style={{ display: 'flex', gap: 'var(--space-lg)', alignItems: 'center', flexWrap: 'wrap' }}>
              <span style={{ flex: '1 1 260px', minWidth: 0, fontFamily: 'var(--font-sans)', fontSize: '15px', lineHeight: 1.5, color: 'var(--text-primary)' }}>{it.text}</span>
              <span style={{ display: 'flex', gap: '6px', flex: 'none' }}>
                {Object.keys(LIGHTS).map(k => {
                  const L = LIGHTS[k];
                  const on = picked === k;
                  const isAnswer = picked !== undefined && it.answer === k;
                  return (
                    <button key={k} disabled={picked !== undefined} onClick={() => onAnswer(i, k)} title={L.hint} style={{
                      width: 34, height: 34, borderRadius: '50%', cursor: picked !== undefined ? 'default' : 'pointer',
                      background: on || isAnswer ? L.color : 'transparent',
                      border: '1px solid ' + (on || isAnswer ? L.color : 'var(--rule-subtle)'),
                      opacity: picked !== undefined && !on && !isAnswer ? 0.3 : 1
                    }} />
                  );
                })}
              </span>
            </div>
            {picked !== undefined ? (
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginTop: 'var(--space-md)', paddingTop: 'var(--space-md)', borderTop: '1px solid var(--rule-faint)' }}>
                <span style={{ display: 'flex', flex: 'none', marginTop: '1px', color: right ? 'var(--volt-500)' : 'var(--amber-500)' }}><Icon name={right ? 'check-check' : 'circle-alert'} size={15} /></span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.5, color: 'var(--text-secondary)' }}>
                  <b style={{ color: LIGHTS[it.answer].color }}>{LIGHTS[it.answer].label}.</b> {it.why}
                </span>
              </div>
            ) : null}
          </Card>
        );
      })}
    </div>
  );
}

/* ── Sortieren ── */
function SortBlock({ block, saved, onAnswer }) {
  const answers = saved || {};
  return (
    <div style={{ display: 'grid', gap: '8px' }}>
      {block.items.map((it, i) => {
        const picked = answers[i];
        const right = picked === it.side;
        return (
          <div key={i} style={{ display: 'flex', gap: 'var(--space-lg)', alignItems: 'center', flexWrap: 'wrap', padding: '12px 14px', background: 'var(--bg-surface)', border: '1px solid ' + (picked ? (right ? 'rgba(198,247,14,.4)' : 'var(--bordeaux-700)') : 'var(--rule-faint)') }}>
            <span style={{ flex: '1 1 220px', fontFamily: 'var(--font-sans)', fontSize: '15px', color: 'var(--text-primary)' }}>{it.text}</span>
            <span style={{ display: 'flex', gap: '6px', flex: 'none' }}>
              {[['left', block.left], ['right', block.right]].map(([side, label]) => (
                <button key={side} disabled={Boolean(picked)} onClick={() => onAnswer(i, side)} style={{
                  padding: '7px 12px', cursor: picked ? 'default' : 'pointer',
                  background: picked === side ? 'var(--paper-100)' : 'transparent',
                  color: picked === side ? 'var(--ink-900)' : 'var(--text-secondary)',
                  border: '1px solid ' + (picked === side ? 'var(--paper-100)' : 'var(--rule-subtle)'),
                  fontFamily: 'var(--font-condensed)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
                  opacity: picked && picked !== side ? 0.4 : 1
                }}>{label}</button>
              ))}
            </span>
            {picked ? <span style={{ flex: 'none', display: 'flex', color: right ? 'var(--volt-500)' : 'var(--bordeaux-400)' }}><Icon name={right ? 'check' : 'x'} size={16} stroke={2.5} /></span> : null}
          </div>
        );
      })}
    </div>
  );
}

/* ── Fakt oder Interpretation ── */
function FactsBlock({ items, saved, onAnswer }) {
  const answers = saved || {};
  return (
    <div style={{ display: 'grid', gap: '8px' }}>
      {items.map((it, i) => {
        const picked = answers[i];
        const right = picked === it.answer;
        return (
          <div key={i} style={{ display: 'flex', gap: 'var(--space-lg)', alignItems: 'center', flexWrap: 'wrap', padding: '12px 14px', background: 'var(--bg-surface)', border: '1px solid ' + (picked ? (right ? 'rgba(198,247,14,.4)' : 'var(--bordeaux-700)') : 'var(--rule-faint)') }}>
            <span style={{ flex: '1 1 240px', fontFamily: 'var(--font-mono)', fontSize: '14px', lineHeight: 1.55, color: 'var(--text-primary)' }}>„{it.text}“</span>
            <span style={{ display: 'flex', gap: '6px', flex: 'none' }}>
              {[['fakt', 'Fakt'], ['interpretation', 'Interpretation']].map(([v, label]) => (
                <button key={v} disabled={Boolean(picked)} onClick={() => onAnswer(i, v)} style={{
                  padding: '7px 12px', cursor: picked ? 'default' : 'pointer',
                  background: picked === v ? 'var(--paper-100)' : 'transparent',
                  color: picked === v ? 'var(--ink-900)' : 'var(--text-secondary)',
                  border: '1px solid ' + (picked === v ? 'var(--paper-100)' : 'var(--rule-subtle)'),
                  fontFamily: 'var(--font-condensed)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
                  opacity: picked && picked !== v ? 0.4 : 1
                }}>{label}</button>
              ))}
            </span>
            {picked ? <span style={{ flex: 'none', display: 'flex', color: right ? 'var(--volt-500)' : 'var(--bordeaux-400)' }}><Icon name={right ? 'check' : 'x'} size={16} stroke={2.5} /></span> : null}
          </div>
        );
      })}
    </div>
  );
}

/* ── Vergleich verbessern ── */
function ImproveBlock({ rounds, saved, onAnswer }) {
  const answers = saved || {};
  return (
    <div style={{ display: 'grid', gap: 'var(--space-xl)' }}>
      {rounds.map((r, i) => {
        const picked = answers[i];
        const reveal = picked !== undefined;
        return (
          <div key={i}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '10px' }}>
              {[['bad', r.bad], ['good', r.good]].map(([k, text]) => {
                const isGood = k === 'good';
                const chosen = picked === k;
                return (
                  <button key={k} disabled={reveal} onClick={() => onAnswer(i, k)} style={{
                    textAlign: 'left', padding: 'var(--space-lg)', cursor: reveal ? 'default' : 'pointer',
                    background: chosen ? 'var(--bg-surface-raised)' : 'var(--bg-surface)',
                    border: '1px solid ' + (reveal ? (isGood ? 'var(--volt-500)' : 'var(--bordeaux-700)') : 'var(--rule-faint)'),
                    opacity: reveal && !isGood && !chosen ? 0.5 : 1
                  }}>
                    {reveal ? (
                      <span style={{ display: 'flex', gap: '7px', alignItems: 'center', marginBottom: '9px', color: isGood ? 'var(--volt-500)' : 'var(--bordeaux-400)' }}>
                        <Icon name={isGood ? 'check-check' : 'x'} size={14} />
                        <span style={{ fontFamily: 'var(--font-condensed)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' }}>{isGood ? 'Bringt eine Antwort' : 'Bringt meistens nichts'}</span>
                      </span>
                    ) : null}
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', lineHeight: 1.55, color: 'var(--text-primary)' }}>{text}</span>
                  </button>
                );
              })}
            </div>
            {reveal ? (
              <div style={{ display: 'flex', gap: '10px', marginTop: '10px', padding: '11px 13px', background: 'var(--bg-surface-sunken)', border: '1px solid var(--rule-faint)' }}>
                <span style={{ display: 'flex', flex: 'none', marginTop: '1px', color: 'var(--text-faint)' }}><Icon name="info" size={14} /></span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.5, color: 'var(--text-secondary)' }}>{r.why}</span>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

/* ── Checkliste ── */
function ChecklistBlock({ id, items, saved, onToggle }) {
  const done = saved || {};
  return (
    <div style={{ display: 'grid', gap: '2px' }}>
      {items.map((t, i) => (
        <label key={i} onClick={(e) => { e.preventDefault(); onToggle(i); }} style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'flex-start', cursor: 'pointer', padding: '9px 0', minHeight: 'var(--tap-min)' }}>
          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 19, height: 19, flex: 'none', marginTop: '2px', background: done[i] ? 'var(--volt-500)' : 'transparent', border: '1px solid ' + (done[i] ? 'var(--volt-500)' : 'var(--rule-default)') }}>
            {done[i] ? <Icon name="check" size={13} color="var(--ink-900)" stroke={3} /> : null}
          </span>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', lineHeight: 1.55, color: done[i] ? 'var(--text-muted)' : 'var(--text-secondary)' }}>{t}</span>
        </label>
      ))}
    </div>
  );
}

/* ── Werte / Kodex ── */
function ValuesBlock({ items, saved, onToggle, max = 5 }) {
  const chosen = saved || {};
  const count = Object.keys(chosen).filter(k => chosen[k]).length;
  return (
    <div>
      <div style={{ display: 'grid', gap: '6px' }}>
        {items.map((t, i) => {
          const on = Boolean(chosen[i]);
          const blocked = !on && count >= max;
          return (
            <button key={i} disabled={blocked} onClick={() => onToggle(i)} style={{
              display: 'flex', gap: 'var(--space-md)', alignItems: 'flex-start', textAlign: 'left', width: '100%',
              padding: '12px 14px', cursor: blocked ? 'not-allowed' : 'pointer',
              background: on ? 'var(--bg-surface-raised)' : 'var(--bg-surface)',
              border: '1px solid ' + (on ? 'var(--volt-500)' : 'var(--rule-faint)'),
              opacity: blocked ? 0.4 : 1, transition: 'var(--transition-hover)'
            }}>
              <span style={{ display: 'flex', flex: 'none', marginTop: '2px', color: on ? 'var(--volt-500)' : 'var(--text-faint)' }}><Icon name={on ? 'check-check' : 'circle-dot'} size={15} /></span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', lineHeight: 1.5, color: on ? 'var(--text-primary)' : 'var(--text-secondary)' }}>{t}</span>
            </button>
          );
        })}
      </div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-faint)', marginTop: '12px' }}>{count} von {max} gewählt</div>
    </div>
  );
}

Object.assign(window, { QuizBlock, TrafficBlock, SortBlock, FactsBlock, ImproveBlock, ChecklistBlock, ValuesBlock, LIGHTS });
