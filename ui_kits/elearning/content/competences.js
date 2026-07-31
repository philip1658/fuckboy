window.FBCompetences = [
  { id: 'klarheit',         label: 'Klarheit',         icon: 'target',       desc: 'Du sagst, was du willst — verständlich und ohne Hintertür.' },
  { id: 'respekt',          label: 'Respekt',          icon: 'shield-check', desc: 'Du erkennst Grenzen früh und hältst dich daran, ohne zu diskutieren.' },
  { id: 'initiative',       label: 'Initiative',       icon: 'zap',          desc: 'Du machst den ersten Schritt, ohne eine Reaktion zu erzwingen.' },
  { id: 'selbstsicherheit', label: 'Selbstsicherheit', icon: 'flame',        desc: 'Du hältst ein offenes Ergebnis aus, ohne dich zu verbiegen.' },
  { id: 'beobachtung',      label: 'Beobachtung',      icon: 'eye',          desc: 'Du liest Signale im Gesamtbild statt einzelne Gesten zu überdeuten.' },
  { id: 'resilienz',        label: 'Resilienz',        icon: 'timer',        desc: 'Eine Absage wirft dich nicht aus der Bahn und ändert dein Verhalten nicht ins Bittere.' },
  { id: 'selbstreflexion',  label: 'Selbstreflexion',  icon: 'brain',        desc: 'Du erkennst dein eigenes Muster, auch wenn es unangenehm ist.' },
  { id: 'verlaesslichkeit', label: 'Verlässlichkeit',  icon: 'check-check',  desc: 'Was du ankündigst, tust du. Auch wenn niemand kontrolliert.' }
];

/* Punkte gibt es für gute Entscheidungen, nie für ein bestimmtes Ergebnis.
   Eine respektvoll akzeptierte Absage ist ein Erfolg. */
window.FBFeedbackKinds = {
  klar:        { label: 'Klar und respektvoll',        tone: 'good',    icon: 'check-check' },
  druck:       { label: 'Gut gemeint, zu viel Druck',  tone: 'costly',  icon: 'triangle-alert' },
  uneindeutig: { label: 'Uneindeutig',                 tone: 'costly',  icon: 'scale' },
  voreilig:    { label: 'Voreilig interpretiert',      tone: 'costly',  icon: 'circle-alert' },
  grenze:      { label: 'Grenze übersehen',            tone: 'bad',     icon: 'ban' },
  initiative:  { label: 'Gute Initiative',             tone: 'good',    icon: 'zap' },
  rechtfertig: { label: 'Unnötige Rechtfertigung',     tone: 'costly',  icon: 'quote' },
  rueckzug:    { label: 'Angemessener Rückzug',        tone: 'good',    icon: 'hand' }
};
