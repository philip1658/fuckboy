import * as React from 'react';

/**
 * The recurring red/blue pill fork. Bordeaux = take the method and its cost,
 * wire = tell the truth and accept the smaller pool.
 * @startingPoint section="Learning" subtitle="The red / blue pill decision fork" viewport="700x400"
 */
export interface PillChoiceProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  pill?: 'red' | 'blue';
  title: string;
  description: React.ReactNode;
  /** Uppercase mono footer stating what this choice costs. */
  cost?: string;
  selected?: boolean;
  style?: React.CSSProperties;
}

export declare function PillChoice(props: PillChoiceProps): React.ReactElement;
