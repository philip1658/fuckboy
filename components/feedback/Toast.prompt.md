Score and unlock feedback. Enters bottom-right with a fade + 8px rise, holds 3.5s.

```jsx
<Toast tone="gain" title="Authentizität" detail="Du hast es direkt gesagt." delta="+6" />
<Toast tone="loss" title="Kollateralschaden" detail="Sie rechnet jetzt mit mehr." delta="−4" />
```

Never use `gain` for a consent-related event — consent is not a reward. Use `tone="consent"` with no `delta`.