import React from 'react';
import { Icon } from '../core/Icon.jsx';

const OUTCOMES = {
  neutral: { color: 'var(--paper-300)',    icon: 'circle-dot',    label: 'Wahrscheinliche Wirkung' },
  good:    { color: 'var(--volt-500)',     icon: 'check-check',   label: 'Wirkt souverän' },
  costly:  { color: 'var(--amber-500)',    icon: 'triangle-alert', label: 'Funktioniert — mit Kosten' },
  bad:     { color: 'var(--bordeaux-400)', icon: 'ban',           label: 'Erzeugt Druck' }
};

export function ChoiceOption({
  letter, label, quote, outcome, feedback, selected = false, revealed = false,
  disabled = false, onClick, style, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const o = OUTCOMES[outcome] || OUTCOMES.neutral;
  const showOutcome = revealed && Boolean(feedback || outcome);
  const border = revealed && selected ? o.color : selected ? 'var(--volt-500)' : hover && !disabled ? 'var(--rule-default)' : 'var(--rule-faint)';
  return (
    <button
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-pressed={selected}
      style={{
        display: 'block', width: '100%', textAlign: 'left',
        padding: 'var(--space-xl)',
        background: selected ? 'var(--bg-surface-raised)' : 'var(--bg-surface)',
        border: '1px solid ' + border, borderRadius: 'var(--radius-none)',
        cursor: disabled ? 'default' : 'pointer',
        opacity: revealed && !selected ? 0.55 : 1,
        transform: hover && !disabled && !revealed ? 'translateY(var(--travel-hover))' : 'none',
        boxShadow: selected ? 'var(--shadow-lift)' : 'var(--shadow-card)',
        transition: 'var(--transition-surface), border-color var(--dur-fast) var(--ease-out), opacity var(--dur-base) var(--ease-out)',
        ...style
      }}
      {...rest}
    >
      <span style={{ display: 'flex', gap: 'var(--space-lg)', alignItems: 'flex-start' }}>
        <span style={{
          flex: 'none', width: 26, height: 26, display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-data)', fontSize: '13px', fontWeight: 700,
          color: selected ? 'var(--ink-900)' : 'var(--text-muted)',
          background: selected ? 'var(--paper-100)' : 'transparent',
          border: '1px solid ' + (selected ? 'var(--paper-100)' : 'var(--rule-subtle)')
        }}>{letter}</span>
        <span style={{ minWidth: 0, flex: 1 }}>
          {label ? (
            <span style={{ display: 'block', fontFamily: 'var(--font-condensed)', fontSize: 'var(--text-micro-size)', fontWeight: 600, letterSpacing: 'var(--text-micro-ls)', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: '8px' }}>{label}</span>
          ) : null}
          <span style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body-size)', lineHeight: 1.55, color: 'var(--text-primary)' }}>{quote}</span>
        </span>
      </span>
      {showOutcome ? (
        <span style={{
          display: 'flex', gap: 'var(--space-md)', alignItems: 'flex-start',
          marginTop: 'var(--space-lg)', paddingTop: 'var(--space-lg)',
          borderTop: '1px solid var(--rule-faint)'
        }}>
          <span style={{ color: o.color, marginTop: '1px', display: 'flex', flex: 'none' }}><Icon name={o.icon} size={16} /></span>
          <span style={{ minWidth: 0 }}>
            <span style={{ display: 'block', fontFamily: 'var(--font-condensed)', fontSize: 'var(--text-micro-size)', fontWeight: 600, letterSpacing: 'var(--text-micro-ls)', textTransform: 'uppercase', color: o.color }}>{o.label}</span>
            <span style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body-sm-size)', lineHeight: 1.55, color: 'var(--text-secondary)', marginTop: '5px' }}>{feedback}</span>
          </span>
        </span>
      ) : null}
    </button>
  );
}
