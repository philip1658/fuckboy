import * as React from 'react';
import type { IconName } from '../core/Icon';

/**
 * One dimension of the Fuckboy-Score. A high Fuckboy-Level is never styled as a win.
 * @startingPoint section="Learning" subtitle="Score dimensions with deltas" viewport="700x300"
 */
export interface ScoreMeterProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  /** Charme · Authentizität · Selbstkontrolle · Consent-Kompetenz · Erwartungsdruck · Ehrlichkeit · Kollateralschaden · Fuckboy-Level */
  label: string;
  value?: number;
  max?: number;
  /** loss for Erwartungsdruck / Kollateralschaden, consent for Consent-Kompetenz. */
  tone?: 'gain' | 'loss' | 'neutral' | 'consent' | 'caution';
  /** Signed change, e.g. "+6". */
  delta?: string;
  icon?: IconName;
  /** One faint line of interpretation below the bar. */
  note?: string;
  style?: React.CSSProperties;
}

export declare function ScoreMeter(props: ScoreMeterProps): React.ReactElement;
