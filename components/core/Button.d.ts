import * as React from 'react';
import type { IconName } from './Icon';

/**
 * Uppercase condensed action. Paper-on-ink is the default CTA.
 * @startingPoint section="Core" subtitle="Button variants, sizes and states" viewport="700x220"
 */
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  /** primary = paper on ink · secondary = hairline outline · ghost = bare · danger = bordeaux · accent = volt (unlock only) */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  /** Leading glyph. */
  icon?: IconName;
  /** Trailing glyph — use 'arrow-right' for forward navigation. */
  iconRight?: IconName;
  fullWidth?: boolean;
  disabled?: boolean;
  /** Render as another element, e.g. 'a' for links. */
  as?: 'button' | 'a';
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export declare function Button(props: ButtonProps): React.ReactElement;
