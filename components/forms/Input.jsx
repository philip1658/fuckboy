import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Input({
  label, hint, error, icon, id, mono = false, style, wrapperStyle, ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useMemo(() => 'in-' + Math.random().toString(36).slice(2, 8), []);
  const borderColor = error ? 'var(--bordeaux-500)' : focus ? 'var(--volt-500)' : 'var(--rule-subtle)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', ...wrapperStyle }}>
      {label ? (
        <label htmlFor={inputId} style={{
          fontFamily: 'var(--font-condensed)', fontSize: 'var(--text-micro-size)', fontWeight: 600,
          letterSpacing: 'var(--text-micro-ls)', textTransform: 'uppercase', color: 'var(--text-muted)'
        }}>{label}</label>
      ) : null}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 'var(--space-md)',
        padding: '0 var(--space-lg)', minHeight: '46px',
        background: 'var(--bg-surface-sunken)',
        border: '1px solid ' + borderColor,
        borderRadius: 'var(--radius-xs)',
        boxShadow: focus ? 'var(--shadow-inset-well)' : 'none',
        transition: 'var(--transition-hover)'
      }}>
        {icon ? <Icon name={icon} size={16} color="var(--text-faint)" /> : null}
        <input
          id={inputId}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            flex: 1, minWidth: 0, padding: '12px 0', background: 'transparent', border: 0, outline: 'none',
            color: 'var(--text-primary)',
            fontFamily: mono ? 'var(--font-mono)' : 'var(--font-sans)',
            fontSize: 'var(--text-body-size)', lineHeight: 1.4,
            ...style
          }}
          {...rest}
        />
      </div>
      {error || hint ? (
        <span style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--text-caption-size)', lineHeight: 1.45,
          color: error ? 'var(--text-danger)' : 'var(--text-muted)'
        }}>{error || hint}</span>
      ) : null}
    </div>
  );
}
