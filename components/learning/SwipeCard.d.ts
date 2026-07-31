import * as React from 'react';

/**
 * Dating-app style profile card used in the swipe/first-message simulations.
 * Photos come from the host — the system ships no people imagery.
 * @startingPoint section="Learning" subtitle="Dating profile card with verdict stamp" viewport="420x560"
 */
export interface SwipeCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  name: string;
  age?: number | string;
  /** Short line under the name, e.g. "12 km entfernt". */
  meta?: string;
  /** Stamped decision overlay. */
  verdict?: 'match' | 'nope';
  tags?: string[];
  /** Background photo URL. Falls back to an ink→bordeaux gradient. */
  image?: string;
  /** −1 / 0 / 1 — stack offset and tilt for the card deck. */
  offset?: number;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export declare function SwipeCard(props: SwipeCardProps): React.ReactElement;
