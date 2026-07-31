import * as React from 'react';

/**
 * Square-cornered surface container. Radius is 0 — the dossier does not round.
 * @startingPoint section="Core" subtitle="Card surfaces: ink, raised, paper, danger" viewport="700x300"
 */
export interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  /** paper = leaked document insert (inverted) · danger = consequence panel */
  surface?: 'ink' | 'raised' | 'sunken' | 'paper' | 'danger';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Enables the 2px lift + rule brighten on hover. */
  interactive?: boolean;
  /** Volt 1px border — the system's only "chosen" affordance. */
  selected?: boolean;
  /** Overlay the film-grain texture (large surfaces only). */
  grain?: boolean;
  as?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export declare function Card(props: CardProps): React.ReactElement;
