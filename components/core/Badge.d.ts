import * as React from 'react';
import type { IconName } from './Icon';

/** Small non-interactive status label. Classification, state, chapter meta. */
export interface BadgeProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'style'> {
  tone?: 'neutral' | 'accent' | 'consent' | 'danger' | 'caution' | 'locked' | 'solid';
  icon?: IconName;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export declare function Badge(props: BadgeProps): React.ReactElement;
