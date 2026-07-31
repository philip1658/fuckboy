import * as React from 'react';

/** Hairline divider, optionally with a stamped section label. */
export interface RuleProps extends Omit<React.HTMLAttributes<HTMLElement>, 'style'> {
  tone?: 'faint' | 'subtle' | 'default' | 'strong' | 'accent' | 'danger' | 'consent';
  /** Uppercase mono label set before the line. */
  label?: string;
  weight?: number;
  style?: React.CSSProperties;
}

export declare function Rule(props: RuleProps): React.ReactElement;
