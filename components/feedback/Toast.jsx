import React from 'react';
import { Icon } from '../core/Icon.jsx';

const TONES = {
  neutral: { accent: 'var(--paper-100)',    icon: 'circle-dot' },
  gain:    { accent: 'var(--volt-500)',     icon: 'trending-up' },
  loss:    { accent: 'var(--bordeaux-400)', icon: 'trending-down' },
  unlock:  { accent: 'var(--volt-500)',     icon: 'lock-open' },
  consent: { accent: 'var(--wire-500)',     icon: 'shield-check' }
};

export function Toast({ tone = 'neutral', title, detail, delta, icon, style, ...rest }) {
  const t = TONES[tone] || TONES.neutral;
  return (
    <div
      role="status"
      style={{
        display: 'flex', alignItems: 'center', gap: 'var(--space-md)',
        padding: '12px var(--space-lg)', minWidth: 260,
        background: 'var(--bg-surface-raised)',
        border: '1px solid var(--rule-subtle)', borderLeft: '2px solid ' + t.accent,
        boxShadow: 'var(--shadow-lift)', ...style
      }}
      {...rest}
    >
      <span style={{ color: t.accent }}><Icon name={icon || t.icon} size={18} /></span>
      <span style={{ flex: 1, minWidth: 0 }}>
        <span style={{ display: 'block', fontFamily: 'var(--font-condensed)', fontSize: '13px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-primary)' }}>{title}</span>
        {detail ? <span style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-caption-size)', lineHeight: 1.4, color: 'var(--text-muted)', marginTop: '2px' }}>{detail}</span> : null}
      </span>
      {delta ? (
        <span style={{ fontFamily: 'var(--font-data)', fontSize: '17px', fontWeight: 700, color: t.accent, fontVariantNumeric: 'tabular-nums' }}>{delta}</span>
      ) : null}
    </div>
  );
}
