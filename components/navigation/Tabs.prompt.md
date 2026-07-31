Section switcher inside a screen — dossier tabs, profile views.

```jsx
<Tabs value={tab} onChange={setTab} items={[
  {value:'akte',label:'Akte',icon:'file-text'},
  {value:'score',label:'Score',icon:'gauge'},
  {value:'flags',label:'Red Flags',icon:'flag',count:3}
]} />
```

Never more than five tabs. Counts render in tabular mono and turn volt when active.