Setting toggle — label left, track right, 44×24px.

```jsx
<Switch label="Explizite Inhalte anzeigen" description="Kapitel 06 und 07." checked={on} onChange={…} />
<Switch tone="consent" label="Consent-Hinweise immer einblenden" checked />
```

Knob travels on `--ease-snap`. Use `tone="consent"` so consent settings never read as a reward.