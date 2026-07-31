Glyph-only square control for UI chrome. Always pass `label`.

```jsx
<IconButton icon="x" label="Schliessen" />
<IconButton icon="eye" label="Zensur aufheben" variant="outline" active />
```

Ghost by default; `outline` when it sits on a busy surface. 32/40/48px boxes. Never use for the primary forward action — that is a `Button`.