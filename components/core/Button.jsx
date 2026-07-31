import React from 'react';
import { Icon } from './Icon.jsx';

const SIZES = {
  sm: { padding: '7px 14px', fontSize: '11px', minHeight: '32px', gap: '6px', icon: 14 },
  md: { padding: '11px 20px', fontSize: '12px', minHeight: '40px', gap: '8px', icon: 16 },
  lg: { padding: '15px 28px', fontSize: '14px', minHeight: '48px', gap: '10px', icon: 18 }
};

const VARIANTS = {
  primary: {
    rest: { background: 'var(--action-primary-bg)', color: 'var(--action-primary-fg)', boxShadow: 'none' },
    hover: { background: 'var(--action-primary-bg-hover)' },
    active: { background: 'var(--action-primary-bg-active)' }
  },
  secondary: {
    rest: { background: 'transparent', color: 'var(--action-secondary-fg)', boxShadow: 'inset 0 0 0 1px var(--rule-default)' },
    hover: { background: 'var(--action-secondary-bg-hover)', boxShadow: 'inset 0 0 0 1px var(--rule-strong)' },
    active: { background: 'rgba(245,242,235,.14)' }
  },
  ghost: {
    rest: { background: 'transparent', color: 'var(--action-ghost-fg)', boxShadow: 'none' },
    hover: { background: 'var(--action-secondary-bg-hover)', color: 'var(--text-primary)' },
    active: { background: 'rgba(245,242,235,.12)' }
  },
  danger: {
    rest: { background: 'var(--action-danger-bg)', color: 'var(--paper-100)', boxShadow: 'none' },
    hover: { background: 'var(--action-danger-bg-hover)' },
    active: { background: 'var(--bordeaux-700)' }
  },
  accent: {
    rest: { background: 'var(--action-accent-bg)', color: 'var(--action-accent-fg)', boxShadow: 'none' },
    hover: { background: 'var(--action-accent-bg-hover)', boxShadow: 'var(--glow-volt)' },
    active: { background: 'var(--volt-600)' }
  }
};

export function Button({
  variant = 'primary', size = 'md', icon, iconRight, fullWidth = false,
  disabled = false, as = 'button', children, style, onMouseEnter, onMouseLeave,
  onMouseDown, onMouseUp, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const Tag = as;

  const composed = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    padding: s.padding,
    minHeight: s.minHeight,
    fontFamily: 'var(--font-condensed)',
    fontSize: s.fontSize,
    fontWeight: 600,
    lineHeight: 1,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    border: 0,
    borderRadius: 'var(--radius-xs)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    whiteSpace: 'nowrap',
    transition: 'var(--transition-hover), transform var(--dur-instant) var(--ease-out)',
    transform: press && !disabled ? 'scale(var(--press-scale))' : 'none',
    ...v.rest,
    ...(hover && !disabled ? v.hover : null),
    ...(press && !disabled ? v.active : null),
    ...(disabled ? { background: 'var(--action-disabled-bg)', color: 'var(--action-disabled-fg)', boxShadow: 'none' } : null),
    ...style
  };

  return (
    <Tag
      style={composed}
      disabled={Tag === 'button' ? disabled : undefined}
      aria-disabled={disabled || undefined}
      onMouseEnter={(e) => { setHover(true); onMouseEnter && onMouseEnter(e); }}
      onMouseLeave={(e) => { setHover(false); setPress(false); onMouseLeave && onMouseLeave(e); }}
      onMouseDown={(e) => { setPress(true); onMouseDown && onMouseDown(e); }}
      onMouseUp={(e) => { setPress(false); onMouseUp && onMouseUp(e); }}
      {...rest}
    >
      {icon ? <Icon name={icon} size={s.icon} /> : null}
      {children ? <span>{children}</span> : null}
      {iconRight ? <Icon name={iconRight} size={s.icon} /> : null}
    </Tag>
  );
}
