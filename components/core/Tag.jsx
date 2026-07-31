import React from 'react';
import { Icon } from './Icon.jsx';

export function Tag({ selected = false, onRemove, onClick, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const interactive = Boolean(onClick);
  return (
    <span
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '7px',
        padding: '6px 12px',
        fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 500, lineHeight: 1.2,
        color: selected ? 'var(--ink-900)' : hover && interactive ? 'var(--text-primary)' : 'var(--text-secondary)',
        background: selected ? 'var(--paper-100)' : hover && interactive ? 'var(--action-secondary-bg-hover)' : 'transparent',
        border: '1px solid ' + (selected ? 'var(--paper-100)' : 'var(--rule-subtle)'),
        borderRadius: 'var(--radius-pill)',
        cursor: interactive ? 'pointer' : 'default',
        transition: 'var(--transition-hover)',
        ...style
      }}
      {...rest}
    >
      {children}
      {onRemove ? (
        <button
          aria-label="Entfernen"
          onClick={(e) => { e.stopPropagation(); onRemove(e); }}
          style={{ display: 'flex', padding: 0, border: 0, background: 'transparent', color: 'inherit', cursor: 'pointer', opacity: 0.7 }}
        >
          <Icon name="x" size={13} />
        </button>
      ) : null}
    </span>
  );
}
