import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function SwipeCard({
  name, age, meta, verdict, tags = [], image, offset = 0, children, style, ...rest
}) {
  const tilt = offset * 1.6;
  return (
    <div
      style={{
        position: 'relative', overflow: 'hidden',
        aspectRatio: '3 / 4',
        background: image ? 'var(--ink-600) center/cover url(' + image + ')' : 'linear-gradient(160deg, var(--ink-500), var(--ink-700) 55%, var(--bordeaux-900))',
        border: '1px solid var(--rule-subtle)', borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-lift)',
        transform: 'translateX(' + offset * 8 + 'px) rotate(' + tilt + 'deg)',
        transition: 'transform var(--dur-slow) var(--ease-snap)',
        ...style
      }}
      {...rest}
    >
      <span aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'var(--texture-grain)', opacity: 'var(--opacity-grain)', mixBlendMode: 'overlay' }} />
      <span style={{ position: 'absolute', inset: 0, background: 'var(--protect-bottom)' }} />
      {verdict ? (
        <span style={{
          position: 'absolute', top: 16, left: 16, transform: 'rotate(-4deg)',
          padding: '6px 10px',
          fontFamily: 'var(--font-mono)', fontSize: 'var(--text-nano-size)', fontWeight: 700,
          letterSpacing: 'var(--text-nano-ls)', textTransform: 'uppercase',
          color: verdict === 'nope' ? 'var(--bordeaux-400)' : 'var(--volt-500)',
          border: '1px solid currentColor'
        }}>{verdict === 'nope' ? 'Kein Match' : 'Match'}</span>
      ) : null}
      <div style={{ position: 'absolute', left: 18, right: 18, bottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '9px' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 700, lineHeight: 1, letterSpacing: '-0.015em', color: 'var(--paper-100)' }}>{name}</span>
          {age ? <span style={{ fontFamily: 'var(--font-data)', fontSize: '18px', fontWeight: 700, color: 'var(--paper-300)' }}>{age}</span> : null}
        </div>
        {meta ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '7px', fontFamily: 'var(--font-condensed)', fontSize: 'var(--text-micro-size)', fontWeight: 600, letterSpacing: 'var(--text-micro-ls)', textTransform: 'uppercase', color: 'var(--paper-400)' }}>
            <Icon name="users" size={12} />{meta}
          </div>
        ) : null}
        {tags.length ? (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'var(--space-md)' }}>
            {tags.map((t) => (
              <span key={t} style={{
                padding: '3px 9px', borderRadius: 'var(--radius-pill)',
                background: 'rgba(8,8,10,.5)', border: '1px solid rgba(245,242,235,.22)',
                fontFamily: 'var(--font-sans)', fontSize: '11px', color: 'var(--paper-200)'
              }}>{t}</span>
            ))}
          </div>
        ) : null}
        {children}
      </div>
    </div>
  );
}
