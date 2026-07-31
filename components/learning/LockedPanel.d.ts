import * as React from 'react';

/** Gated content: children render blurred behind a scanline scrim with the unlock condition. */
export interface LockedPanelProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style' | 'title'> {
  title: string;
  /** Uppercase mono condition, e.g. "Kapitel 04 abschliessen". */
  requirement?: string;
  /** Usually a <Button variant="accent" icon="lock-open">. */
  action?: React.ReactNode;
  /** The real content — blurred, never removed, so the tease is honest. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function LockedPanel(props: LockedPanelProps): React.ReactElement;
