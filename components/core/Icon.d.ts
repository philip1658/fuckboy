import * as React from 'react';

/** Every glyph available in the copied Lucide set (assets/icons). */
export type IconName =
  | 'arrow-left' | 'arrow-right' | 'arrow-up-right' | 'ban' | 'brain' | 'check'
  | 'check-check' | 'chevron-down' | 'chevron-left' | 'chevron-right' | 'chevron-up'
  | 'circle-alert' | 'circle-dot' | 'clock' | 'ellipsis' | 'eye' | 'eye-off'
  | 'file-text' | 'flag' | 'flame' | 'gauge' | 'hand' | 'heart' | 'heart-crack'
  | 'info' | 'lock' | 'lock-open' | 'menu' | 'message-square' | 'pill' | 'play'
  | 'quote' | 'scale' | 'search' | 'send' | 'shield-check' | 'skull' | 'split'
  | 'star' | 'target' | 'thumbs-down' | 'timer' | 'trending-down' | 'trending-up'
  | 'triangle-alert' | 'trophy' | 'users' | 'x' | 'zap';

export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'ref'> {
  /** Glyph name from the copied Lucide set. */
  name: IconName;
  /** Rendered box in px. 14 / 18 / 22 are the sanctioned sizes. */
  size?: number;
  /** Stroke width. Keep at 2 — the brand's icons are uniform-weight outlines. */
  stroke?: number;
  color?: string;
  /** Accessible label. Omit for decorative icons (renders aria-hidden). */
  title?: string;
}

export declare const ICON_PATHS: Record<IconName, string>;
export declare const ICON_NAMES: IconName[];
export declare function Icon(props: IconProps): React.ReactElement | null;
