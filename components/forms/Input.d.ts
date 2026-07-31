import * as React from 'react';
import type { IconName } from '../core/Icon';

/** Single-line text field. Sunken well, 1px rule, volt focus border. */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'style'> {
  /** Uppercase condensed label above the field. */
  label?: string;
  /** Helper text below. Replaced by `error` when set. */
  hint?: string;
  error?: string;
  icon?: IconName;
  /** Set the value in Courier Prime — for dossier-style entry. */
  mono?: boolean;
  style?: React.CSSProperties;
  wrapperStyle?: React.CSSProperties;
}

export declare function Input(props: InputProps): React.ReactElement;
