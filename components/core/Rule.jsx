import React from 'react';

const TONES = {
  faint: 'var(--rule-faint)', subtle: 'var(--rule-subtle)', default: 'var(--rule-default)',
  strong: 'var(--rule-strong)', accent: 'var(--volt-500)', danger: 'var(--bordeaux-600)',
  consent: 'var(--wire-500)'
};

export function Rule({ tone = 'subtle', label, weight = 1, style, ...rest }) {
  const color = TONES[tone] || TONES.subtle;
  if (!label) {
    return <hr style={{ border: 0, borderTop: weight + 'px solid ' + color, margin: 0, ...style }} {...rest} />;
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', ...style }} {...rest}>
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: 'var(--text-nano-size)', fontWeight: 700,
        letterSpacing: 'var(--text-nano-ls)', textTransform: 'uppercase',
        color: tone === 'faint' || tone === 'subtle' ? 'var(--text-faint)' : color, whiteSpace: 'nowrap'
      }}>{label}</span>
      <span style={{ flex: 1, borderTop: weight + 'px solid ' + color }} />
    </div>
  );
}
