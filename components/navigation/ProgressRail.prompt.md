Chapter progress. Horizontal in a lesson header, vertical in a sidebar.

```jsx
<ProgressRail current={2} onSelect={go} steps={[
  {label:'Mindset'},{label:'Consent'},{label:'Ablehnung'},{label:'Beziehung',locked:true}
]} />
```

Locked steps show a lock glyph and refuse the click. Never render more than 8 steps horizontally.