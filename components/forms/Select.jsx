import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Select({ label, hint, error, options = [], style, wrapperStyle, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const borderColor = error ? 'var(--bordeaux-500)' : focus ? 'var(--volt-500)' : 'var(--rule-subtle)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', ...wrapperStyle }}>
      {label ? (
        <label style={{
          fontFamily: 'var(--font-condensed)', fontSize: 'var(--text-micro-size)', fontWeight: 600,
          letterSpacing: 'var(--text-micro-ls)', textTransform: 'uppercase', color: 'var(--text-muted)'
        }}>{label}</label>
      ) : null}
      <div style={{
        position: 'relative', display: 'flex', alignItems: 'center',
        background: 'var(--bg-surface-sunken)', border: '1px solid ' + borderColor,
        borderRadius: 'var(--radius-xs)', transition: 'var(--transition-hover)'
      }}>
        <select
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            appearance: 'none', WebkitAppearance: 'none',
            flex: 1, minWidth: 0, padding: '13px 44px 13px var(--space-lg)',
            background: 'transparent', border: 0, outline: 'none', cursor: 'pointer',
            color: 'var(--text-primary)', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body-size)',
            ...style
          }}
          {...rest}
        >
          {options.map((o) => (
            <option key={o.value} value={o.value} style={{ background: 'var(--ink-700)', color: 'var(--paper-100)' }}>{o.label}</option>
          ))}
        </select>
        <span style={{ position: 'absolute', right: 'var(--space-lg)', pointerEvents: 'none', color: 'var(--text-muted)' }}>
          <Icon name="chevron-down" size={16} />
        </span>
      </div>
      {error || hint ? (
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-caption-size)', color: error ? 'var(--text-danger)' : 'var(--text-muted)' }}>{error || hint}</span>
      ) : null}
    </div>
  );
}
