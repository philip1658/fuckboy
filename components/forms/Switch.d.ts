import * as React from 'react';

/** On/off setting. Volt when on; wire for consent-related settings. */
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'style' | 'type'> {
  label: React.ReactNode;
  description?: string;
  checked?: boolean;
  disabled?: boolean;
  /** 'consent' tints the on-state wire instead of volt. */
  tone?: 'accent' | 'consent';
  style?: React.CSSProperties;
}

export declare function Switch(props: SwitchProps): React.ReactElement;
