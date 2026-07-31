import React from 'react';
import { Icon } from './Icon.jsx';

const SIZES = { sm: { box: 32, icon: 16 }, md: { box: 40, icon: 18 }, lg: { box: 48, icon: 22 } };

export function IconButton({
  icon, label, size = 'md', variant = 'ghost', active = false, disabled = false, style, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const outlined = variant === 'outline';
  return (
    <button
      aria-label={label}
      title={label}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: s.box, height: s.box, padding: 0,
        background: hover && !disabled ? 'var(--action-secondary-bg-hover)' : 'transparent',
        color: active ? 'var(--text-accent)' : hover && !disabled ? 'var(--text-primary)' : 'var(--text-secondary)',
        border: 0,
        boxShadow: outlined ? 'inset 0 0 0 1px var(--rule-subtle)' : 'none',
        borderRadius: 'var(--radius-xs)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 'var(--opacity-disabled)' : 1,
        transition: 'var(--transition-hover)',
        ...style
      }}
      {...rest}
    >
      <Icon name={icon} size={s.icon} />
    </button>
  );
}
