import React from 'react';
import { Icon } from '../core/Icon.jsx';

const TONES = {
  consent: { color: 'var(--wire-500)',     border: 'rgba(19,229,255,.45)', bg: 'var(--bg-consent-soft)', icon: 'shield-check', label: 'Consent' },
  caution: { color: 'var(--amber-500)',    border: 'rgba(242,168,30,.45)', bg: 'rgba(242,168,30,.09)',   icon: 'triangle-alert', label: 'Achtung' },
  danger:  { color: 'var(--bordeaux-400)', border: 'var(--bordeaux-700)',  bg: 'var(--bg-danger-soft)',  icon: 'ban',            label: 'Red Flag' },
  moral:   { color: 'var(--paper-300)',    border: 'var(--rule-default)',  bg: 'rgba(245,242,235,.04)',  icon: 'scale',          label: 'Moralisch unbequem' }
};

export function WarningNotice({ tone = 'consent', title, label, children, style, ...rest }) {
  const t = TONES[tone] || TONES.consent;
  return (
    <aside
      style={{
        display: 'flex', gap: 'var(--space-lg)',
        padding: 'var(--space-xl)',
        background: t.bg, borderLeft: '2px solid ' + t.color,
        border: '1px solid ' + t.border, borderLeftWidth: '2px', borderLeftColor: t.color,
        borderRadius: 'var(--radius-none)', ...style
      }}
      {...rest}
    >
      <span style={{ color: t.color, marginTop: '2px' }}><Icon name={t.icon} size={20} /></span>
      <div style={{ minWidth: 0 }}>
        <div style={{
          fontFamily: 'var(--font-condensed)', fontSize: 'var(--text-micro-size)', fontWeight: 600,
          letterSpacing: 'var(--text-micro-ls)', textTransform: 'uppercase', color: t.color
        }}>{label || t.label}</div>
        {title ? (
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 600, lineHeight: 1.2, letterSpacing: '-0.01em', color: 'var(--text-primary)', marginTop: '7px' }}>{title}</div>
        ) : null}
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body-sm-size)', lineHeight: 1.6, color: 'var(--text-secondary)', marginTop: title ? '7px' : '9px' }}>{children}</div>
      </div>
    </aside>
  );
}
