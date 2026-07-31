Base surface container — sharp corners, hairline border, deep soft drop shadow.

```jsx
<Card surface="ink" padding="md">…</Card>
<Card surface="paper" padding="lg">Beilage: Transferübung</Card>
<Card interactive selected onClick={pick}>…</Card>
```

`ink` is default; `paper` inverts for leaked-page inserts and printable exercises; `danger` for consequence panels. Add `grain` only on large fields (≥400px tall). Never set a radius on a Card.