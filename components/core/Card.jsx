import React from 'react';

const SURFACES = {
  ink:    { background: 'var(--bg-surface)',        color: 'var(--text-primary)', border: 'var(--rule-faint)' },
  raised: { background: 'var(--bg-surface-raised)', color: 'var(--text-primary)', border: 'var(--rule-subtle)' },
  sunken: { background: 'var(--bg-surface-sunken)', color: 'var(--text-secondary)', border: 'var(--rule-faint)' },
  paper:  { background: 'var(--bg-paper)',          color: 'var(--text-inverse)', border: 'rgba(11,11,12,.18)' },
  danger: { background: 'var(--bordeaux-900)',      color: 'var(--paper-100)',    border: 'var(--bordeaux-700)' }
};
const PADS = { none: 0, sm: 'var(--space-lg)', md: 'var(--space-2xl)', lg: 'var(--space-3xl)' };

export function Card({
  surface = 'ink', padding = 'md', interactive = false, selected = false,
  grain = false, as = 'div', children, style, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const s = SURFACES[surface] || SURFACES.ink;
  const Tag = as;
  return (
    <Tag
      onMouseEnter={interactive ? () => setHover(true) : undefined}
      onMouseLeave={interactive ? () => setHover(false) : undefined}
      style={{
        position: 'relative',
        padding: PADS[padding] !== undefined ? PADS[padding] : PADS.md,
        background: s.background,
        color: s.color,
        border: '1px solid ' + (selected ? 'var(--volt-500)' : hover ? 'var(--rule-default)' : s.border),
        borderRadius: 'var(--radius-none)',
        boxShadow: surface === 'paper' ? 'var(--shadow-paper)' : hover ? 'var(--shadow-lift)' : 'var(--shadow-card)',
        transform: hover ? 'translateY(var(--travel-hover))' : 'none',
        cursor: interactive ? 'pointer' : 'default',
        transition: 'var(--transition-surface), border-color var(--dur-fast) var(--ease-out)',
        ...style
      }}
      {...rest}
    >
      {grain ? (
        <span aria-hidden="true" style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'var(--texture-grain)', opacity: 'var(--opacity-grain)', mixBlendMode: 'overlay'
        }} />
      ) : null}
      {children}
    </Tag>
  );
}
