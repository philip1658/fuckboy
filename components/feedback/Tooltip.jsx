import React from 'react';

export function Tooltip({ content, placement = 'top', children, style, ...rest }) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top:    { bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: '8px' },
    bottom: { top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: '8px' },
    left:   { right: '100%', top: '50%', transform: 'translateY(-50%)', marginRight: '8px' },
    right:  { left: '100%', top: '50%', transform: 'translateY(-50%)', marginLeft: '8px' }
  }[placement];
  return (
    <span
      style={{ position: 'relative', display: 'inline-flex', ...style }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      {...rest}
    >
      {children}
      <span role="tooltip" style={{
        position: 'absolute', zIndex: 40, ...pos,
        padding: '7px 10px', maxWidth: 240, width: 'max-content',
        background: 'var(--ink-900)', border: '1px solid var(--rule-default)',
        boxShadow: 'var(--shadow-lift)',
        fontFamily: 'var(--font-sans)', fontSize: 'var(--text-caption-size)', lineHeight: 1.4,
        color: 'var(--text-secondary)',
        opacity: open ? 1 : 0, pointerEvents: 'none',
        transition: 'opacity var(--dur-fast) var(--ease-out)'
      }}>{content}</span>
    </span>
  );
}
