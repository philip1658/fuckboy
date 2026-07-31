Chapter-gate decision. Always shown as a pair, side by side, never three options.

```jsx
<PillChoice pill="red" title="Zeig mir die verbotenen Techniken."
  description="Profil, Algorithmus, Sprache, Timing. Alles, was auf Dating-Apps wirklich funktioniert." />
<PillChoice pill="blue" title="Ich suche eine Beziehung."
  description="Du willst eine Partnerin, keine Methode. Dann ist hier nichts für dich dabei." />
```

Red is the method, blue is the exit — choosing blue ends the course. `cost` is optional; omit it when the two options are qualitatively different rather than a trade-off.