import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Tabs({ items = [], value, onChange, style, ...rest }) {
  const [hover, setHover] = React.useState(null);
  return (
    <div
      role="tablist"
      style={{ display: 'flex', gap: 'var(--space-2xl)', borderBottom: '1px solid var(--rule-subtle)', ...style }}
      {...rest}
    >
      {items.map((it) => {
        const active = it.value === value;
        const lit = active || hover === it.value;
        return (
          <button
            key={it.value}
            role="tab"
            aria-selected={active}
            onClick={() => onChange && onChange(it.value)}
            onMouseEnter={() => setHover(it.value)}
            onMouseLeave={() => setHover(null)}
            style={{
              display: 'flex', alignItems: 'center', gap: 'var(--space-sm)',
              padding: '0 0 12px', background: 'transparent', border: 0, cursor: 'pointer',
              borderBottom: '2px solid ' + (active ? 'var(--paper-100)' : 'transparent'),
              marginBottom: '-1px',
              fontFamily: 'var(--font-condensed)', fontSize: '13px', fontWeight: 600,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: lit ? 'var(--text-primary)' : 'var(--text-muted)',
              transition: 'var(--transition-hover)'
            }}
          >
            {it.icon ? <Icon name={it.icon} size={15} /> : null}
            {it.label}
            {it.count !== undefined ? (
              <span style={{ fontFamily: 'var(--font-data)', fontSize: '11px', color: active ? 'var(--volt-500)' : 'var(--text-faint)' }}>{it.count}</span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
