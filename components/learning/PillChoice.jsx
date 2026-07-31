import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function PillChoice({ pill = 'red', title, description, cost, selected = false, onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const red = pill === 'red';
  const color = red ? 'var(--bordeaux-500)' : 'var(--wire-500)';
  const lit = hover || selected;
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-pressed={selected}
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
        gap: 'var(--space-md)', padding: 'var(--space-3xl) var(--space-2xl)',
        background: 'var(--bg-surface)',
        border: '1px solid ' + (selected ? color : lit ? 'var(--rule-default)' : 'var(--rule-faint)'),
        boxShadow: lit ? (red ? 'var(--glow-bordeaux)' : 'var(--glow-wire)') : 'var(--shadow-card)',
        cursor: 'pointer', transform: lit ? 'translateY(var(--travel-hover))' : 'none',
        transition: 'var(--transition-surface), border-color var(--dur-fast) var(--ease-out)',
        ...style
      }}
      {...rest}
    >
      <span style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: 52, height: 52, borderRadius: 'var(--radius-pill)',
        background: color, color: red ? 'var(--paper-100)' : 'var(--ink-900)'
      }}>
        <Icon name="pill" size={24} />
      </span>
      <span style={{ display: 'block', fontFamily: 'var(--font-condensed)', fontSize: 'var(--text-micro-size)', fontWeight: 600, letterSpacing: 'var(--text-micro-ls)', textTransform: 'uppercase', color }}>
        {red ? 'Rote Pille' : 'Blaue Pille'}
      </span>
      <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 700, lineHeight: 1.12, letterSpacing: '-0.01em', color: 'var(--text-primary)' }}>{title}</span>
      <span style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body-sm-size)', lineHeight: 1.55, color: 'var(--text-secondary)', maxWidth: '34ch' }}>{description}</span>
      {cost ? (
        <span style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-nano-size)', fontWeight: 700, letterSpacing: 'var(--text-nano-ls)', textTransform: 'uppercase', color: 'var(--text-faint)', marginTop: 'var(--space-sm)', paddingTop: 'var(--space-md)', borderTop: '1px solid var(--rule-faint)', width: '100%' }}>
          Preis: {cost}
        </span>
      ) : null}
    </button>
  );
}
