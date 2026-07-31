import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Badge } from '../core/Badge.jsx';

export function ChapterCard({
  number, title, summary, duration, decisions, state = 'available',
  bonus = false, railLabel, onClick, style, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const locked = state === 'locked';
  const done = state === 'done';
  const lit = hover && !locked;
  return (
    <button
      onClick={locked ? undefined : onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', gap: 'var(--space-2xl)', alignItems: 'flex-start', width: '100%', textAlign: 'left',
        padding: 'var(--space-2xl)',
        background: bonus ? 'var(--bordeaux-900)' : 'var(--bg-surface)',
        border: '1px solid ' + (lit ? 'var(--rule-default)' : bonus ? 'var(--bordeaux-700)' : 'var(--rule-faint)'),
        boxShadow: lit ? 'var(--shadow-lift)' : 'var(--shadow-card)',
        transform: lit ? 'translateY(var(--travel-hover))' : 'none',
        cursor: locked ? 'not-allowed' : 'pointer',
        opacity: locked ? 0.62 : 1,
        transition: 'var(--transition-surface), border-color var(--dur-fast) var(--ease-out)',
        ...style
      }}
      {...rest}
    >
      <span style={{
        flex: 'none', fontFamily: 'var(--font-data)', fontSize: '34px', fontWeight: 700, lineHeight: 0.9,
        color: done ? 'var(--volt-500)' : locked ? 'var(--text-faint)' : 'var(--bordeaux-400)',
        fontVariantNumeric: 'tabular-nums', width: 48
      }}>{number}</span>
      <span style={{ flex: 1, minWidth: 0 }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
          <span style={{
            fontFamily: 'var(--font-condensed)', fontSize: 'var(--text-micro-size)', fontWeight: 600,
            letterSpacing: 'var(--text-micro-ls)', textTransform: 'uppercase',
            color: locked ? 'var(--text-faint)' : 'var(--text-muted)'
          }}>
            {bonus ? 'Vertiefung' : 'Kapitel'}
            {duration ? ' · ' + duration : ''}
            {decisions !== undefined ? ' · ' + decisions + ' Entscheidungen' : ''}
          </span>
          {locked ? <Badge tone="locked" icon="lock">Gesperrt</Badge> : null}
          {done ? <Badge tone="accent" icon="check">Abgeschlossen</Badge> : null}
        </span>
        <span style={{
          display: 'block', fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 700, lineHeight: 1.14,
          letterSpacing: '-0.015em', color: locked ? 'var(--text-muted)' : 'var(--text-primary)', marginTop: '10px'
        }}>{title}</span>
        {summary ? (
          <span style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body-sm-size)', lineHeight: 1.55, color: 'var(--text-secondary)', marginTop: 'var(--space-sm)', maxWidth: '56ch' }}>{summary}</span>
        ) : null}
      </span>
      <span style={{ flex: 'none', alignSelf: 'center', display: 'flex', color: lit ? 'var(--text-primary)' : 'var(--text-faint)', transition: 'var(--transition-hover)' }}>
        <Icon name={locked ? 'lock' : 'chevron-right'} size={20} />
      </span>
    </button>
  );
}
