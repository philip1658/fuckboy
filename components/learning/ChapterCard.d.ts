import * as React from 'react';

/**
 * Row in the chapter index. Bordeaux number, serif title, state badge.
 * @startingPoint section="Learning" subtitle="Chapter index rows with locked and bonus states" viewport="700x400"
 */
export interface ChapterCardProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  /** Two-digit string, e.g. "03". */
  number: string;
  title: string;
  summary?: string;
  /** e.g. "14 Min". */
  duration?: string;
  decisions?: number;
  state?: 'available' | 'done' | 'locked';
  /** Hidden bonus file — renders on bordeaux. */
  bonus?: boolean;
  style?: React.CSSProperties;
}

export declare function ChapterCard(props: ChapterCardProps): React.ReactElement;
