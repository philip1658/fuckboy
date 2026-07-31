import React from 'react';
import { Icon } from '../core/Icon.jsx';

const TONES = {
  gain:    'var(--score-gain)',
  loss:    'var(--score-loss)',
  neutral: 'var(--paper-300)',
  consent: 'var(--signal-consent)',
  caution: 'var(--signal-caution)'
};

export function ScoreMeter({ label, value = 0, max = 100, tone = 'neutral', delta, icon, note, style, ...rest }) {
  const color = TONES[tone] || TONES.neutral;
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', ...style }} {...rest}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 'var(--space-md)' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '7px', minWidth: 0 }}>
          {icon ? <span style={{ color: 'var(--text-faint)' }}><Icon name={icon} size={13} /></span> : null}
          <span style={{
            fontFamily: 'var(--font-condensed)', fontSize: 'var(--text-micro-size)', fontWeight: 600,
            letterSpacing: 'var(--text-micro-ls)', textTransform: 'uppercase', color: 'var(--text-secondary)',
            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'
          }}>{label}</span>
        </span>
        <span style={{ display: 'flex', alignItems: 'baseline', gap: '8px', flex: 'none' }}>
          {delta ? <span style={{ fontFamily: 'var(--font-data)', fontSize: '12px', fontWeight: 700, color }}>{delta}</span> : null}
          <span style={{ fontFamily: 'var(--font-data)', fontSize: '19px', fontWeight: 700, color: 'var(--text-primary)', fontVariantNumeric: 'tabular-nums' }}>{value}</span>
        </span>
      </div>
      <div style={{ height: 4, background: 'var(--score-track)', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: '0 auto 0 0', width: pct + '%', background: color,
          transition: 'width var(--dur-slow) var(--ease-out)'
        }} />
      </div>
      {note ? (
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-caption-size)', lineHeight: 1.4, color: 'var(--text-faint)' }}>{note}</span>
      ) : null}
    </div>
  );
}
