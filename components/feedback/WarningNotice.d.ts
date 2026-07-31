import * as React from 'react';

/**
 * Inline notice for the four things the product must always say out loud:
 * consent, caution, red flag, moral cost.
 * @startingPoint section="Feedback" subtitle="Consent, caution, red-flag and moral notices" viewport="700x340"
 */
export interface WarningNoticeProps extends Omit<React.HTMLAttributes<HTMLElement>, 'style'> {
  tone?: 'consent' | 'caution' | 'danger' | 'moral';
  /** Serif headline inside the notice. */
  title?: string;
  /** Overrides the default uppercase kicker ("Consent", "Achtung", …). */
  label?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export declare function WarningNotice(props: WarningNoticeProps): React.ReactElement;
