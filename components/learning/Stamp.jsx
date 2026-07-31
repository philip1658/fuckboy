import React from 'react';
import { Icon } from '../core/Icon.jsx';

const TONES = {
  classified: 'var(--bordeaux-400)',
  unlocked:   'var(--volt-500)',
  locked:     'var(--text-faint)',
  consent:    'var(--wire-500)',
  moral:      'var(--amber-500)',
  neutral:    'var(--paper-300)'
};

export function Stamp({ tone = 'classified', icon, rotate = 0, children, style, ...rest }) {
  const color = TONES[tone] || TONES.classified;
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '6px',
        padding: '6px 10px',
        fontFamily: 'var(--font-mono)', fontSize: 'var(--text-nano-size)', fontWeight: 700,
        lineHeight: 1, letterSpacing: 'var(--text-nano-ls)', textTransform: 'uppercase',
        color, border: '1px solid currentColor',
        transform: rotate ? 'rotate(' + rotate + 'deg)' : 'none',
        whiteSpace: 'nowrap', ...style
      }}
      {...rest}
    >
      {icon ? <Icon name={icon} size={11} /> : null}
      {children}
    </span>
  );
}
