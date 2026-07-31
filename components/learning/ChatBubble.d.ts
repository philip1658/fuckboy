import * as React from 'react';

/** One message in a chat simulation. Paper bubble = the learner, ink bubble = her. */
export interface ChatBubbleProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  from?: 'me' | 'her';
  /** ISO-ish short time, e.g. "23:41". */
  time?: string;
  status?: 'sent' | 'read';
  /** Renders the three-dot typing indicator instead of children. */
  typing?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export declare function ChatBubble(props: ChatBubbleProps): React.ReactElement;
