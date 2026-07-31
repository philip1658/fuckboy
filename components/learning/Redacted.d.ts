import * as React from 'react';

/** Blacked-out span that wipes open on click. Names, outcomes, the narrator's worst lines. */
export interface RedactedProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'style'> {
  /** Controlled reveal. Omit to let the component manage its own state. */
  revealed?: boolean;
  /** Minimum bar width, e.g. "8ch", when the hidden text is shorter than the redaction should look. */
  width?: string;
  onReveal?: () => void;
  /** 'paper' when sitting inside an inverted paper insert. */
  tone?: 'ink' | 'paper';
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export declare function Redacted(props: RedactedProps): React.ReactElement;
