import * as React from 'react';

export interface RailStep { label: string; locked?: boolean; }

/** Chapter / step progress as coloured 3px rails. Done = volt, current = paper. */
export interface ProgressRailProps extends Omit<React.HTMLAttributes<HTMLElement>, 'style'> {
  steps: RailStep[];
  /** Index of the current step. Everything before it renders as done. */
  current?: number;
  onSelect?: (index: number) => void;
  orientation?: 'horizontal' | 'vertical';
  style?: React.CSSProperties;
}

export declare function ProgressRail(props: ProgressRailProps): React.ReactElement;
