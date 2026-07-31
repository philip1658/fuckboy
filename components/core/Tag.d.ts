import * as React from 'react';

/** Pill-shaped selectable or removable token — filters, self-assessment traits. */
export interface TagProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'style'> {
  selected?: boolean;
  /** Renders an inline remove control. */
  onRemove?: (e: React.MouseEvent) => void;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export declare function Tag(props: TagProps): React.ReactElement;
