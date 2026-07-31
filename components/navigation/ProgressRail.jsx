import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function ProgressRail({ steps = [], current = 0, onSelect, orientation = 'horizontal', style, ...rest }) {
  const horizontal = orientation === 'horizontal';
  return (
    <nav
      style={{
        display: 'flex', flexDirection: horizontal ? 'row' : 'column',
        gap: horizontal ? 'var(--space-sm)' : 'var(--space-3xs)',
        alignItems: horizontal ? 'stretch' : 'stretch', ...style
      }}
      {...rest}
    >
      {steps.map((s, i) => {
        const state = s.locked ? 'locked' : i < current ? 'done' : i === current ? 'current' : 'todo';
        const color = state === 'done' ? 'var(--volt-500)' : state === 'current' ? 'var(--paper-100)' : state === 'locked' ? 'var(--ink-500)' : 'var(--ink-400)';
        return (
          <button
            key={s.label + i}
            onClick={() => !s.locked && onSelect && onSelect(i)}
            title={s.label}
            style={{
              flex: horizontal ? 1 : 'none', display: 'flex', flexDirection: horizontal ? 'column' : 'row',
              alignItems: horizontal ? 'stretch' : 'center', gap: horizontal ? '8px' : 'var(--space-md)',
              padding: horizontal ? 0 : '9px 10px', background: 'transparent', border: 0,
              cursor: s.locked ? 'not-allowed' : 'pointer', textAlign: 'left',
              minWidth: 0
            }}
          >
            <span style={{
              height: horizontal ? 3 : 'auto', width: horizontal ? 'auto' : 3, flex: horizontal ? 'none' : 'none',
              alignSelf: horizontal ? 'auto' : 'stretch', minHeight: horizontal ? 0 : 18,
              background: color, transition: 'background-color var(--dur-base) var(--ease-out)'
            }} />
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', minWidth: 0 }}>
              {s.locked ? <Icon name="lock" size={11} color="var(--text-faint)" /> : null}
              <span style={{
                fontFamily: 'var(--font-condensed)', fontSize: 'var(--text-micro-size)', fontWeight: 600,
                letterSpacing: 'var(--text-micro-ls)', textTransform: 'uppercase',
                color: state === 'current' ? 'var(--text-primary)' : state === 'done' ? 'var(--text-secondary)' : 'var(--text-faint)',
                overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'
              }}>{s.label}</span>
            </span>
          </button>
        );
      })}
    </nav>
  );
}
