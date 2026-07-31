Gated content. Real content sits behind a 7px blur and a scanline scrim.

```jsx
<LockedPanel title="Bonusakte: Was übrig bleibt" requirement="Kapitel 05 abschliessen"
  action={<Button variant="accent" icon="lock-open">Freischalten</Button>}>
  <p>…echter Text, absichtlich unscharf…</p>
</LockedPanel>
```

Always blur real content, never a lorem placeholder — the tease has to be truthful. One locked panel per screen.