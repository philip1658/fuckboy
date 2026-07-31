import React from 'react';

export function Textarea({ label, hint, error, rows = 4, counter, value, mono = false, style, wrapperStyle, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const borderColor = error ? 'var(--bordeaux-500)' : focus ? 'var(--volt-500)' : 'var(--rule-subtle)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', ...wrapperStyle }}>
      {label ? (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 'var(--space-md)' }}>
          <label style={{
            fontFamily: 'var(--font-condensed)', fontSize: 'var(--text-micro-size)', fontWeight: 600,
            letterSpacing: 'var(--text-micro-ls)', textTransform: 'uppercase', color: 'var(--text-muted)'
          }}>{label}</label>
          {counter ? (
            <span style={{ fontFamily: 'var(--font-data)', fontSize: '11px', color: 'var(--text-faint)' }}>
              {String(value || '').length}/{counter}
            </span>
          ) : null}
        </div>
      ) : null}
      <textarea
        rows={rows}
        value={value}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          width: '100%', padding: 'var(--space-lg)', resize: 'vertical',
          background: 'var(--bg-surface-sunken)',
          border: '1px solid ' + borderColor, borderRadius: 'var(--radius-xs)',
          boxShadow: focus ? 'var(--shadow-inset-well)' : 'none',
          color: 'var(--text-primary)', outline: 'none',
          fontFamily: mono ? 'var(--font-mono)' : 'var(--font-sans)',
          fontSize: 'var(--text-body-size)', lineHeight: 1.6,
          transition: 'var(--transition-hover)',
          ...style
        }}
        {...rest}
      />
      {error || hint ? (
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-caption-size)', lineHeight: 1.45, color: error ? 'var(--text-danger)' : 'var(--text-muted)' }}>{error || hint}</span>
      ) : null}
    </div>
  );
}
