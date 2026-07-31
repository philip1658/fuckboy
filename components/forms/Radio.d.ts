import * as React from 'react';

/** Single-choice control. The only round-cornered form element. */
export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'style' | 'type'> {
  label: React.ReactNode;
  description?: string;
  checked?: boolean;
  disabled?: boolean;
  name?: string;
  style?: React.CSSProperties;
}

export declare function Radio(props: RadioProps): React.ReactElement;
