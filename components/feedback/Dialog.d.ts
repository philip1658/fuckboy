import * as React from 'react';

/** Modal over a blurred ink scrim. Used for gate-keeping, consequences and unlocks. */
export interface DialogProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style' | 'title'> {
  open?: boolean;
  /** Mono uppercase stamp above the title. */
  kicker?: string;
  title?: string;
  onClose?: () => void;
  /** Action row, right-aligned below a hairline. */
  footer?: React.ReactNode;
  width?: number;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export declare function Dialog(props: DialogProps): React.ReactElement | null;
