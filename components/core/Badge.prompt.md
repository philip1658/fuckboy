Status label — reads state, never accepts a click.

```jsx
<Badge tone="danger" icon="flag">Red Flag</Badge>
<Badge tone="consent" icon="shield-check">Consent</Badge>
<Badge tone="locked" icon="lock">Gesperrt</Badge>
```

One tone per meaning: `accent` unlocked/reward, `consent` the non-negotiable rail, `danger` red flag or damage, `caution` ambiguous signal, `locked` not yet available, `solid` inverted emphasis on dark imagery. For something clickable/removable use `Tag`.