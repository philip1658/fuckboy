import React from 'react';

export function Redacted({ children, revealed, width, onReveal, tone = 'ink', style, ...rest }) {
  const [open, setOpen] = React.useState(false);
  const shown = revealed !== undefined ? revealed : open;
  const reveal = () => { if (revealed === undefined) setOpen(true); if (onReveal) onReveal(); };
  return (
    <span
      role="button"
      tabIndex={0}
      onClick={shown ? undefined : reveal}
      onKeyDown={(e) => { if (!shown && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); reveal(); } }}
      title={shown ? undefined : 'Zensur aufheben'}
      style={{
        position: 'relative', display: 'inline-block', verticalAlign: 'baseline',
        minWidth: width, padding: '0 4px',
        color: shown ? 'inherit' : 'transparent',
        borderBottom: '1px solid ' + (tone === 'paper' ? 'var(--bordeaux-600)' : 'var(--bordeaux-500)'),
        cursor: shown ? 'default' : 'pointer',
        userSelect: shown ? 'auto' : 'none',
        transition: 'color var(--dur-fast) var(--ease-out) ' + (shown ? '340ms' : '0ms'),
        ...style
      }}
      {...rest}
    >
      {children}
      <span aria-hidden="true" style={{
        position: 'absolute', top: 0, bottom: 0, left: 0,
        width: shown ? '0%' : '100%',
        background: 'var(--bg-redact)',
        transition: 'width var(--dur-redact) var(--ease-in-out)'
      }} />
    </span>
  );
}
