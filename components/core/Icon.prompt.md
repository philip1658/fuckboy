Outline icon from the copied Lucide set — the only icon source in this system; never hand-draw an SVG or reach for an emoji.

```jsx
<Icon name="lock" size={18} />
<Icon name="shield-check" size={22} color="var(--signal-consent)" title="Consent geprüft" />
```

Sizes: 14 (inline with caption), 18 (default, buttons and rows), 22 (section headers). Stroke stays at 2. Icons inherit `currentColor` unless a signal colour is passed — pair `triangle-alert` with amber, `ban`/`heart-crack` with bordeaux, `shield-check` with wire, `zap`/`lock-open` with volt.