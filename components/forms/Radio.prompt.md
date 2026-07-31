Single-choice control for short option sets inside settings and self-assessments.

```jsx
<Radio name="intent" label="Ich sage es offen" checked={v==='open'} onChange={…} />
```

For scenario answers that carry consequences, use `ChoiceOption` — it shows outcome feedback. Radio is for neutral settings only.