import * as React from 'react';

/** Multi-line field for reflection and transfer exercises. */
export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'style'> {
  label?: string;
  hint?: string;
  error?: string;
  rows?: number;
  /** Character budget — shows a tabular counter next to the label. */
  counter?: number;
  mono?: boolean;
  style?: React.CSSProperties;
  wrapperStyle?: React.CSSProperties;
}

export declare function Textarea(props: TextareaProps): React.ReactElement;
