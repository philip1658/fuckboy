import * as React from 'react';

/** Hover/focus explanation for score dimensions and dossier abbreviations. */
export interface TooltipProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'style' | 'content'> {
  content: React.ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export declare function Tooltip(props: TooltipProps): React.ReactElement;
