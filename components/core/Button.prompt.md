Primary action control — uppercase Barlow Condensed, 2px radius, never rounded.

```jsx
<Button variant="primary" iconRight="arrow-right">Weiter</Button>
<Button variant="secondary" size="sm" icon="arrow-left">Zurück</Button>
<Button variant="accent" icon="lock-open">Kapitel freischalten</Button>
```

`primary` (paper on ink) is the forward action — one per screen. `secondary` for back/alternate, `ghost` for skip/dismiss, `danger` for destructive or "abort the run", `accent` **only** for unlocks and score rewards. Hover brightens; press scales to 0.985. Sizes sm/md/lg map to 32/40/48px min-height — never go below 44px on touch surfaces (use `lg`).