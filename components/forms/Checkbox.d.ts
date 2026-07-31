import * as React from 'react';

/** Square checkbox with volt fill. Used for exercise checklists and multi-select. */
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'style' | 'type'> {
  label: React.ReactNode;
  /** Second line in faint caption type. */
  description?: string;
  checked?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export declare function Checkbox(props: CheckboxProps): React.ReactElement;
