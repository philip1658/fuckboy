import * as React from 'react';
import type { IconName } from '../core/Icon';

/** Typewriter classification mark. Annotates; never clickable. */
export interface StampProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'style'> {
  tone?: 'classified' | 'unlocked' | 'locked' | 'consent' | 'moral' | 'neutral';
  icon?: IconName;
  /** Degrees of tilt. Keep within ±4. */
  rotate?: number;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export declare function Stamp(props: StampProps): React.ReactElement;
