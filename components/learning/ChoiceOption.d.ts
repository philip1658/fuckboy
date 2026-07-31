import * as React from 'react';

/**
 * One answer in a decision scenario. Answers are never labelled right or wrong —
 * only their probable effect is shown, after the user commits.
 * @startingPoint section="Learning" subtitle="Scenario answers with revealed consequences" viewport="700x420"
 */
export interface ChoiceOptionProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  /** A / B / C — shown in the tabular marker. */
  letter: string;
  /** Optional uppercase framing, e.g. "Du sagst" or "Du schweigst". */
  label?: string;
  /** The answer itself, usually in the narrator's or user's voice. */
  quote: React.ReactNode;
  /** good = souverän · costly = works but has a price · bad = creates pressure */
  outcome?: 'neutral' | 'good' | 'costly' | 'bad';
  /** Consequence text, shown only once `revealed`. */
  feedback?: React.ReactNode;
  selected?: boolean;
  /** After the user commits: fades unpicked options, reveals feedback. */
  revealed?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export declare function ChoiceOption(props: ChoiceOptionProps): React.ReactElement;
