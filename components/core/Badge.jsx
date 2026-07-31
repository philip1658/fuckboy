import React from 'react';
import { Icon } from './Icon.jsx';

const TONES = {
  neutral: { color: 'var(--text-secondary)', border: 'var(--rule-default)', bg: 'transparent' },
  accent:  { color: 'var(--volt-500)',       border: 'rgba(198,247,14,.5)',  bg: 'var(--bg-accent-soft)' },
  consent: { color: 'var(--wire-500)',       border: 'rgba(19,229,255,.5)',  bg: 'var(--bg-consent-soft)' },
  danger:  { color: 'var(--bordeaux-400)',   border: 'var(--bordeaux-600)',  bg: 'var(--bg-danger-soft)' },
  caution: { color: 'var(--amber-500)',      border: 'rgba(242,168,30,.5)',  bg: 'rgba(242,168,30,.1)' },
  locked:  { color: 'var(--signal-locked)',  border: 'var(--rule-subtle)',   bg: 'transparent' },
  solid:   { color: 'var(--ink-900)',        border: 'transparent',          bg: 'var(--paper-100)' }
};

export function Badge({ tone = 'neutral', icon, children, style, ...rest }) {
  const t = TONES[tone] || TONES.neutral;
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '5px',
        padding: '4px 8px 3px',
        fontFamily: 'var(--font-condensed)', fontSize: 'var(--text-micro-size)', fontWeight: 600,
        lineHeight: 1.1, letterSpacing: '0.14em', textTransform: 'uppercase',
        color: t.color, background: t.bg,
        border: '1px solid ' + t.border, borderRadius: 'var(--radius-xs)',
        whiteSpace: 'nowrap', ...style
      }}
      {...rest}
    >
      {icon ? <Icon name={icon} size={12} /> : null}
      {children}
    </span>
  );
}
