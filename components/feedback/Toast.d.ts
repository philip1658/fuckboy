import * as React from 'react';
import type { IconName } from '../core/Icon';

/** Transient score / unlock notification. Left accent rule carries the meaning. */
export interface ToastProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style' | 'title'> {
  tone?: 'neutral' | 'gain' | 'loss' | 'unlock' | 'consent';
  title: string;
  detail?: string;
  /** Tabular score change, e.g. "+6" or "−3". */
  delta?: string;
  icon?: IconName;
  style?: React.CSSProperties;
}

export declare function Toast(props: ToastProps): React.ReactElement;
