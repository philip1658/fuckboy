Modal panel on a blurred ink scrim (`--blur-overlay`).

```jsx
<Dialog kicker="Akte FB-01 · Zugangskontrolle" title="Welche Pille nimmst du?"
        footer={<><Button variant="ghost">Zurück</Button><Button>Weiter</Button></>}>
  …
</Dialog>
```

Positioned `absolute` inside the nearest positioned ancestor, so kit screens can host it without a portal. Keep to one dialog at a time.