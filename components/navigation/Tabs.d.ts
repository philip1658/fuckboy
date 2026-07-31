import * as React from 'react';
import type { IconName } from '../core/Icon';

export interface TabItem { value: string; label: string; icon?: IconName; count?: number; }

/** Underlined condensed tab bar. Active tab gets a 2px paper underline. */
export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style' | 'onChange'> {
  items: TabItem[];
  value: string;
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}

export declare function Tabs(props: TabsProps): React.ReactElement;
