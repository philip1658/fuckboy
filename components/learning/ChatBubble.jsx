import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function ChatBubble({ from = 'her', children, time, status, typing = false, style, ...rest }) {
  const mine = from === 'me';
  return (
    <div style={{ display: 'flex', justifyContent: mine ? 'flex-end' : 'flex-start', ...style }} {...rest}>
      <div style={{ maxWidth: '76%', minWidth: typing ? 56 : 0 }}>
        <div style={{
          padding: '11px 15px',
          background: mine ? 'var(--paper-100)' : 'var(--bg-surface-raised)',
          color: mine ? 'var(--ink-900)' : 'var(--text-primary)',
          border: mine ? 'none' : '1px solid var(--rule-subtle)',
          borderRadius: mine ? '10px 10px 2px 10px' : '10px 10px 10px 2px',
          fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body-sm-size)', lineHeight: 1.5
        }}>
          {typing ? (
            <span style={{ display: 'flex', gap: 4, alignItems: 'center', height: 10 }}>
              {[0, 1, 2].map((i) => (
                <span key={i} style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--text-muted)', opacity: 0.4 + i * 0.2 }} />
              ))}
            </span>
          ) : children}
        </div>
        {time || status ? (
          <div style={{
            display: 'flex', gap: '7px', alignItems: 'center', marginTop: '5px',
            justifyContent: mine ? 'flex-end' : 'flex-start',
            fontFamily: 'var(--font-mono)', fontSize: 'var(--text-nano-size)', letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'var(--text-faint)'
          }}>
            {time}
            {status === 'read' ? <Icon name="check-check" size={11} color="var(--wire-500)" /> : null}
            {status === 'sent' ? <Icon name="check" size={11} /> : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
