import React from 'react';
import { IconButton } from '../core/IconButton.jsx';
import { Rule } from '../core/Rule.jsx';

export function Dialog({ open = true, kicker, title, onClose, footer, width = 560, children, style, ...rest }) {
  if (!open) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: 'absolute', inset: 0, zIndex: 60,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 'var(--space-3xl)',
        background: 'var(--bg-overlay)', backdropFilter: 'var(--blur-overlay)', ...style
      }}
      {...rest}
    >
      <div style={{
        width: '100%', maxWidth: width, position: 'relative',
        background: 'var(--bg-surface)', border: '1px solid var(--rule-default)',
        boxShadow: 'var(--shadow-modal)', padding: 'var(--space-3xl)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 'var(--space-lg)' }}>
          <div style={{ minWidth: 0 }}>
            {kicker ? (
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 'var(--text-nano-size)', fontWeight: 700,
                letterSpacing: 'var(--text-nano-ls)', textTransform: 'uppercase', color: 'var(--bordeaux-400)'
              }}>{kicker}</div>
            ) : null}
            {title ? (
              <h2 style={{
                fontFamily: 'var(--font-display)', fontSize: '30px', fontWeight: 700, lineHeight: 1.08,
                letterSpacing: '-0.015em', color: 'var(--text-primary)', marginTop: kicker ? '10px' : 0
              }}>{title}</h2>
            ) : null}
          </div>
          {onClose ? <IconButton icon="x" label="Schliessen" onClick={onClose} /> : null}
        </div>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body-size)', lineHeight: 1.62, color: 'var(--text-secondary)', marginTop: 'var(--space-xl)' }}>
          {children}
        </div>
        {footer ? (
          <>
            <Rule tone="subtle" style={{ margin: 'var(--space-2xl) 0 var(--space-xl)' }} />
            <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'flex-end', flexWrap: 'wrap' }}>{footer}</div>
          </>
        ) : null}
      </div>
    </div>
  );
}
