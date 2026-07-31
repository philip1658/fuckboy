import React from 'react';

export function Switch({ label, description, checked = false, disabled = false, onChange, tone = 'accent', style, ...rest }) {
  const on = tone === 'consent' ? 'var(--wire-500)' : 'var(--volt-500)';
  return (
    <label style={{
      display: 'flex', alignItems: 'center', gap: 'var(--space-lg)', justifyContent: 'space-between',
      cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 'var(--opacity-disabled)' : 1,
      minHeight: 'var(--tap-min)', ...style
    }}>
      <span>
        <span style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body-sm-size)', lineHeight: 1.5, color: 'var(--text-primary)' }}>{label}</span>
        {description ? (
          <span style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-caption-size)', lineHeight: 1.45, color: 'var(--text-muted)', marginTop: '2px' }}>{description}</span>
        ) : null}
      </span>
      <input type="checkbox" role="switch" checked={checked} disabled={disabled} onChange={onChange}
        style={{ position: 'absolute', opacity: 0, width: 1, height: 1 }} {...rest} />
      <span style={{
        position: 'relative', flex: 'none', width: 44, height: 24,
        background: checked ? on : 'var(--ink-500)',
        border: '1px solid ' + (checked ? on : 'var(--rule-subtle)'),
        borderRadius: 'var(--radius-pill)',
        transition: 'background-color var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)'
      }}>
        <span style={{
          position: 'absolute', top: 2, left: checked ? 22 : 2, width: 18, height: 18,
          background: checked ? 'var(--ink-900)' : 'var(--paper-300)',
          borderRadius: 'var(--radius-pill)',
          transition: 'left var(--dur-base) var(--ease-snap), background-color var(--dur-base) var(--ease-out)'
        }} />
      </span>
    </label>
  );
}
