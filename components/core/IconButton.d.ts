import * as React from 'react';
import type { IconName } from './Icon';

/** Square glyph-only control for chrome: close, menu, next, more. */
export interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  icon: IconName;
  /** Required — becomes aria-label and the tooltip. */
  label: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'ghost' | 'outline';
  /** Selected/toggled — tints the glyph volt. */
  active?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export declare function IconButton(props: IconButtonProps): React.ReactElement;
