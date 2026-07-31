import React from 'react';

export function Radio({ label, description, checked = false, disabled = false, name, onChange, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <label
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', alignItems: 'flex-start', gap: 'var(--space-md)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 'var(--opacity-disabled)' : 1,
        minHeight: 'var(--tap-min)', paddingTop: '2px', ...style
      }}
    >
      <input type="radio" name={name} checked={checked} disabled={disabled} onChange={onChange}
        style={{ position: 'absolute', opacity: 0, width: 1, height: 1 }} {...rest} />
      <span style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: 20, height: 20, flex: 'none', marginTop: '1px',
        border: '1px solid ' + (checked ? 'var(--volt-500)' : hover ? 'var(--rule-strong)' : 'var(--rule-default)'),
        borderRadius: 'var(--radius-pill)', transition: 'var(--transition-hover)'
      }}>
        {checked ? <span style={{ width: 9, height: 9, borderRadius: 'var(--radius-pill)', background: 'var(--volt-500)' }} /> : null}
      </span>
      <span>
        <span style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body-sm-size)', lineHeight: 1.5, color: checked ? 'var(--text-primary)' : 'var(--text-secondary)' }}>{label}</span>
        {description ? (
          <span style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-caption-size)', lineHeight: 1.45, color: 'var(--text-faint)', marginTop: '3px' }}>{description}</span>
        ) : null}
      </span>
    </label>
  );
}
