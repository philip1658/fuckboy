A single score dimension: condensed label, tabular value, 4px track.

```jsx
<ScoreMeter label="Consent-Kompetenz" value={92} tone="consent" icon="shield-check" delta="+4" />
<ScoreMeter label="Kollateralschaden" value={31} tone="loss" icon="heart-crack" note="Drei Personen rechnen mit mehr, als du geben willst." />
```

Cost dimensions (Erwartungsdruck, Kollateralschaden) must use `tone="loss"`; a rising bordeaux bar reads as damage, not progress. Never give Fuckboy-Level the volt tone.