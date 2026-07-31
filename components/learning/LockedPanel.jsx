import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function LockedPanel({ title, requirement, action, children, style, ...rest }) {
  return (
    <div
      style={{
        position: 'relative', overflow: 'hidden',
        border: '1px solid var(--rule-subtle)', background: 'var(--bg-surface)', ...style
      }}
      {...rest}
    >
      <div aria-hidden="true" style={{ filter: 'var(--blur-locked)', opacity: 0.5, padding: 'var(--space-2xl)', pointerEvents: 'none', userSelect: 'none' }}>
        {children}
      </div>
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        gap: 'var(--space-md)', textAlign: 'center', padding: 'var(--space-2xl)',
        background: 'rgba(8,8,10,.66)', backgroundImage: 'var(--scanline)'
      }}>
        <span style={{ color: 'var(--text-faint)' }}><Icon name="lock" size={22} /></span>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.01em', color: 'var(--text-primary)' }}>{title}</span>
        {requirement ? (
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 'var(--text-nano-size)', fontWeight: 700,
            letterSpacing: 'var(--text-nano-ls)', textTransform: 'uppercase', color: 'var(--text-muted)'
          }}>{requirement}</span>
        ) : null}
        {action}
      </div>
    </div>
  );
}
