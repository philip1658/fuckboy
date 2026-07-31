import * as React from 'react';

export interface SelectOption { value: string; label: string; }

/** Native select with brand chrome and a chevron-down affordance. */
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'style' | 'children'> {
  label?: string;
  hint?: string;
  error?: string;
  options: SelectOption[];
  style?: React.CSSProperties;
  wrapperStyle?: React.CSSProperties;
}

export declare function Select(props: SelectProps): React.ReactElement;
