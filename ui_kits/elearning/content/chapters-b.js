window.FBChaptersB = [

/* ═══════════ 03 ═══════════ */
{
  number: '03', slug: 'auftreten', rail: 'Auftreten',
  image: 'assets/chapters/03-auftreten.png',
  title: 'Auftreten',
  subtitle: 'Was du mit dem Äusseren doch tust',
  duration: '16 Min',
  lead: 'Ich habe gesagt, es liegt nicht am Gesicht. Das stimmt. Es liegt aber sehr wohl an dem, was du mit dem machst, was du hast — und das ist etwas völlig anderes.',
  goals: [
    'Den Unterschied zwischen Aussehen und Sorgfalt verstehen.',
    'Die wenigen Details identifizieren, die überproportional wirken.',
    'Körperhaltung, Stimme und Tempo als steuerbare Grössen nutzen.',
    'Dafür sorgen, dass das reale Auftreten zum Profil passt.'
  ],
  story: 'Ein Freund hat mir mal gesagt, ich rieche nach Wohnung. Nicht schlecht — nach Wohnung. Ich habe drei Wochen später mehr Rückmeldung bekommen als im halben Jahr davor. Es war nicht mein Gesicht.',
  sections: [
    { type: 'text', h: 'Das Ziel ist nicht Schönheit, sondern Sorgfalt',
      p: ['Niemand erwartet ein Model. Was Menschen in den ersten Sekunden lesen, ist etwas anderes: Kümmert der sich um sich selbst? Sorgfalt ist ein Signal für Selbstrespekt, und Selbstrespekt ist attraktiv, weil er andeutet, wie du mit anderen umgehst.',
          'Der gute Teil daran: Sorgfalt ist vollständig lernbar und kostet fast nichts.'] },
    { type: 'list', h: 'Die Reihenfolge, in der es sich lohnt', tone: 'accent',
      items: [
        'Geruch. Frisch geduscht, saubere Kleidung, Zähne. Alles andere ist zweitrangig, wenn das nicht sitzt.',
        'Passform. Ein günstiges T-Shirt, das passt, schlägt ein teures, das nicht passt.',
        'Schuhe. Werden bewusster wahrgenommen, als die meisten Männer glauben.',
        'Haare und Bart. Regelmässig, nicht spektakulär.',
        'Haut. Schlaf, Wasser, eine einfache Creme. Kein Programm.',
        'Duft. Zurückhaltend. Man soll ihn erst bemerken, wenn man dir nahe kommt.'
      ] },
    { type: 'compare', h: 'Authentizität und Nachlässigkeit sind nicht dasselbe',
      bad: { label: 'Nachlässig', text: '„Ich bin halt so. Wer mich mag, nimmt mich wie ich bin.“ — meistens der Satz von jemandem, der nie etwas ausprobiert hat.' },
      good: { label: 'Authentisch', text: 'Du wirkst wie du selbst, nur an einem guten Tag. Nichts Verkleidetes, nichts Kopiertes, aber sichtbar überlegt.' } },
    { type: 'principle', label: 'Psychologisches Prinzip', h: 'Bedeutung von Körpersprache',
      p: 'Nutze Körpersprache zuerst zur Steuerung deiner eigenen Wirkung: offene Haltung, angemessener Blickkontakt, ruhiges Tempo, respektvolle Distanz, sichtbare Aufmerksamkeit. Die Signale der anderen Person helfen dir bei der Einschätzung — sie sind aber nie eine automatische Zustimmung.' },
    { type: 'list', h: 'Drei Dinge, die sofort wirken', tone: 'neutral',
      items: [
        'Langsamer sprechen. Die meisten reden aus Nervosität zu schnell. Ein halber Gang runter wirkt sofort ruhiger.',
        'Nicht wegschauen, wenn sie antwortet. Blickkontakt beim Zuhören zählt mehr als beim Reden.',
        'Aufhören, mit Dingen zu spielen. Glas, Handy, Serviette — Hände ruhig auf dem Tisch.'
      ] },
    { type: 'note', tone: 'caution', title: 'Das Profil ist ein Versprechen',
      text: 'Wenn deine Fotos zwei Jahre alt sind oder du nur im besten Licht darauf zu sehen bist, zahlst du in der ersten Minute des Dates. Enttäuschung am Anfang holst du nicht mehr auf.' }
  ],
  scenario: {
    title: 'Eine Stunde vor dem ersten Treffen',
    brief: ['19:00, ihr seid um 20:00 auf ein Getränk verabredet.', 'Du kommst direkt vom Büro nach Hause und hast genau eine Stunde.'],
    signals: [
      { icon: 'clock', tone: 'caution', text: 'Eine Stunde für alles.' },
      { icon: 'circle-dot', tone: 'consent', text: 'Ihr trefft euch in einer ruhigen Bar, nicht sportlich.' }
    ],
    options: [
      { letter: 'A', label: 'Du machst', kind: 'klar', outcome: 'good',
        quote: 'Duschen, frisches Hemd, Zähne, zehn Minuten hinsetzen und nichts tun.',
        feedback: 'Das Wichtigste zuerst, plus der unterschätzte Teil: Du kommst nicht gehetzt an. Ruhe ist sichtbar.',
        deltas: [{ id: 'selbstsicherheit', delta: '+5' }, { id: 'verlaesslichkeit', delta: '+3' }] },
      { letter: 'B', label: 'Du machst', kind: 'initiative', outcome: 'costly',
        quote: 'Vierzig Minuten Training, danach schnell duschen und los.',
        feedback: 'Gut gemeint. Aber du kommst mit erhöhtem Puls, feuchten Haaren und knapp an. Das Training bringt in dieser Stunde nichts mehr — die Ruhe schon.',
        deltas: [{ id: 'selbstsicherheit', delta: '−2' }] },
      { letter: 'C', label: 'Du machst', kind: 'uneindeutig', outcome: 'costly',
        quote: 'Drei Outfits anprobieren, zwei Freunde um Fotos-Feedback fragen.',
        feedback: 'Der Aufwand fliesst in die Entscheidung, die am wenigsten bringt. Und die Unsicherheit, die du damit hochfährst, nimmst du mit an den Tisch.',
        deltas: [{ id: 'selbstsicherheit', delta: '−4' }] }
    ]
  },
  interaction: { type: 'checklist', title: 'Check vor dem nächsten Date', prompt: 'Sechs Punkte. Wenn drei davon sitzen, bist du über dem Durchschnitt.',
    items: ['Geduscht, frische Kleidung, Zähne', 'Kleidung passt — nicht zu weit, nicht zu eng', 'Schuhe sauber', 'Haare und Bart in Form', 'Duft zurückhaltend, maximal zwei Sprüher', 'Zehn Minuten Puffer eingeplant'] },
  challenge: { title: 'Ein Detail sichtbar verbessern', text: 'Wähle diese Woche genau eine Sache: neue Schuhe, ein Hemd, das passt, oder ein Termin beim Coiffeur. Nur eine. Und dann achte darauf, ob sich etwas an den Reaktionen ändert.' },
  reflection: { question: 'Was an deinem Auftreten würdest du selbst bei jemand anderem als nachlässig bezeichnen?', placeholder: 'Ehrlich …' },
  summary: [
    'Sorgfalt schlägt Aussehen — und ist lernbar.',
    'Geruch und Passform vor allem anderen.',
    'Langsamer sprechen, beim Zuhören hinschauen, Hände ruhig.',
    'Das Profil muss zum Original passen.'
  ],
  quiz: [
    { q: 'Was wirkt in den ersten Sekunden am stärksten?', options: [
      { text: 'Gesichtszüge', why: 'Die kannst du nicht ändern — und sie entscheiden weniger, als du denkst.' },
      { text: 'Sichtbare Sorgfalt', correct: true, why: 'Richtig. Sie wird als Selbstrespekt gelesen.' },
      { text: 'Teure Kleidung', why: 'Passform schlägt Preis deutlich.' }
    ] },
    { q: 'Wo zahlt sich Blickkontakt am meisten aus?', options: [
      { text: 'Beim Reden', why: 'Hilft, ist aber nicht der wirksamste Moment.' },
      { text: 'Beim Zuhören', correct: true, why: 'Genau. Aufmerksamkeit ist sichtbarer als Selbstdarstellung.' },
      { text: 'Beim Begrüssen', why: 'Wichtig, aber kurz.' }
    ] },
    { q: '„Ich bin halt so“ ist meistens …', options: [
      { text: 'Authentizität', why: 'Authentisch heisst nicht ungepflegt.' },
      { text: 'Nachlässigkeit mit besserem Namen', correct: true, why: 'Richtig — oft der Satz von jemandem, der nie etwas ausprobiert hat.' },
      { text: 'Selbstbewusstsein', why: 'Eher das Gegenteil.' }
    ] }
  ],
  transfer: 'Eine Sache verbessern, nicht zehn. Diese Woche.'
},

/* ═══════════ 04 ═══════════ */
{
  number: '04', slug: 'profil', rail: 'Profil & Fotos',
  image: 'assets/chapters/04-profil.png',
  title: 'Profil & Fotos',
  subtitle: 'Was die App zeigt und was Menschen sehen',
  duration: '18 Min',
  lead: 'Dein Profil trifft die Vorentscheidung, bevor du ein Wort geschrieben hast. Es ist der einzige Teil des Datings, den du in Ruhe, ohne Zeitdruck und beliebig oft überarbeiten kannst.',
  goals: [
    'Ein Hauptfoto wählen, das Nähe erzeugt statt Distanz.',
    'Die Fotoreihenfolge als Dramaturgie verstehen.',
    'Einen Profiltext schreiben, der Gesprächsanker liefert.',
    'Die eigene Absicht im Profil sichtbar machen.'
  ],
  special: 'playbook',
  story: 'Mein erstes Profil bestand aus vier Fotos, auf denen ich nicht lachte, weil ich dachte, das wirke interessant. Es wirkte, als hätte man mich zur Anmeldung gezwungen.',
  sections: [
    { type: 'text', h: 'Das Hauptfoto entscheidet in einer halben Sekunde',
      p: ['Gesicht klar erkennbar, kein Hut, keine Sonnenbrille, keine Gruppe. Sie muss sofort wissen, wen sie trifft. Und der stärkste Einzelfaktor über alle Fotos hinweg ist ein echtes Lachen — Augen mit, nicht nur Mund. Es beantwortet die Frage, die niemand ausspricht: Wird ein Abend mit dir angenehm?'] },
    { type: 'note', tone: 'caution', title: 'Zum Thema Algorithmus',
      text: 'Niemand ausserhalb der Unternehmen kennt die Rankinglogik dieser Apps im Detail, und sie ändert sich laufend. Was hier steht, sind Erfahrungswerte und Hypothesen aus vielen Monaten Beobachtung — keine belegten Mechanismen. Behandle sie als Arbeitsannahmen, nicht als Naturgesetze.' },
    { type: 'list', h: 'Die Reihenfolge der Fotos ist eine Dramaturgie', tone: 'neutral',
      items: [
        '1 — Gesicht, freundlich, klar. Der Türöffner.',
        '2 — Ganzkörper, unbearbeitet. Ehrlichkeit filtert im Voraus.',
        '3 — Eine Tätigkeit, die eine Frage provoziert.',
        '4 — Sozialer Kontext: du mit anderen, aber klar erkennbar.',
        '5 — Etwas Ruhiges. Ein Ort, ein Detail, keine Person.',
        '6 — Optional der Sonderfall (siehe unten).'
      ] },
    { type: 'text', h: 'Der Sonderfall: oben ohne',
      p: ['Am See, im Meer, beim Sprung vom Steg ist ein freier Oberkörper normal und wirkt beiläufig. Im Badezimmerspiegel oder im Wohnzimmer wirkt er wie eine Ansage — und Ansagen liest man als Unsicherheit, nicht als Selbstbewusstsein. Und beides gilt nur, wenn du oben ohne wirklich gut aussiehst. Sonst kostet dich das Foto mehr Matches, als es bringt.'] },
    { type: 'compare', h: 'Profiltext: austauschbar oder konkret',
      bad: { label: 'Austauschbar', text: '„Reisen, Sport, gutes Essen. Humor ist mir wichtig. Frag einfach.“ — steht so in zehntausend Profilen und liefert keinen einzigen Anknüpfungspunkt.' },
      good: { label: 'Konkret', text: '„Verkaufstrainer, rede beruflich den ganzen Tag. Privat: klettern, kochen, lange Wege zu Fuss. Suche gerade nichts Festes — sag einfach, wenn du das Gegenteil suchst.“' } },
    { type: 'note', tone: 'moral', title: 'Ein Profil ist ein Versprechen',
      text: 'Jedes Foto, das besser aussieht als du, kaufst du auf Kredit. Bezahlt wird in der ersten Minute des Dates, mit Zinsen. Optimiere so weit, dass es dich zeigt — nicht weiter.' }
  ],
  scenario: {
    title: 'Dein Profil steht seit drei Monaten unverändert',
    brief: ['Die Matches sind weniger geworden. Das Profil ist dasselbe wie im März.', 'Du überlegst, einen Boost zu kaufen.'],
    signals: [
      { icon: 'trending-down', tone: 'caution', text: 'Weniger Matches bei gleichem Profil.' },
      { icon: 'circle-dot', tone: 'consent', text: 'Zwei Fotos sind über zwei Jahre alt.' }
    ],
    options: [
      { letter: 'A', label: 'Du machst', kind: 'klar', outcome: 'good',
        quote: 'Erst zwei Fotos ersetzen und den Text neu schreiben. Boost frühestens danach.',
        feedback: 'Richtig. Ein Boost multipliziert nur die Sichtbarkeit des aktuellen Profils. Auf ein schwaches Profil kaufst du dir mehr Menschen, die vorbeiscrollen.',
        deltas: [{ id: 'beobachtung', delta: '+5' }, { id: 'verlaesslichkeit', delta: '+3' }] },
      { letter: 'B', label: 'Du machst', kind: 'voreilig', outcome: 'costly',
        quote: 'Boost kaufen und schauen, was passiert.',
        feedback: 'Verständlich, aber die Reihenfolge ist falsch herum. Du misst danach nicht dein Profil, sondern nur die gekaufte Reichweite.',
        deltas: [{ id: 'beobachtung', delta: '−3' }] },
      { letter: 'C', label: 'Du machst', kind: 'uneindeutig', outcome: 'costly',
        quote: 'Alle sechs Fotos auf einmal austauschen.',
        feedback: 'Dann weisst du hinterher nicht, was gewirkt hat. Ändere in Schritten, sonst lernst du nichts über dein eigenes Profil.',
        deltas: [{ id: 'beobachtung', delta: '−2' }] }
    ]
  },
  interaction: { type: 'checklist', title: 'Profil-Audit', prompt: 'Geh dein Profil jetzt durch. Jeder Punkt, der nicht sitzt, ist Arbeit für heute Abend.',
    items: ['Foto 1: Gesicht klar, kein Hut, keine Sonnenbrille, keine Gruppe', 'Mindestens zwei Fotos mit echtem Lachen', 'Ein ehrliches Ganzkörperfoto', 'Mindestens ein Foto, zu dem man etwas fragen kann', 'Kein Auto, keine Waffe, kein Spiegel-Selfie', 'Profiltext nennt zwei konkrete Dinge statt drei Kategorien', 'Deine Absicht steht drin'] },
  challenge: { title: 'Sieben-Tage-Plan', text: 'Tag 1–2: neue Fotos machen lassen, nicht selbst. Tag 3: Reihenfolge festlegen. Tag 4: Text neu schreiben, laut lesen. Tag 5–7: laufen lassen und nichts ändern. Erst dann bewerten.' },
  reflection: { question: 'Welches deiner Fotos ist drin, weil es dir gefällt — und nicht, weil es etwas über dich erzählt?', placeholder: '…' },
  summary: [
    'Lachen ist der stärkste Einzelfaktor.',
    'Foto 1 entscheidet: Gesicht, klar, allein.',
    'Oben ohne nur mit Wasser im Bild und nur, wenn es wirklich passt.',
    'Konkrete Angaben liefern Gesprächsanker, Kategorien nicht.',
    'Erst das Profil fertig bauen, dann boosten.'
  ],
  quiz: [
    { q: 'Was gehört auf Foto 1?', options: [
      { text: 'Ein Gruppenfoto, das dich sozial zeigt', why: 'Sie muss raten, wer du bist. Verlorener erster Eindruck.' },
      { text: 'Dein Gesicht, klar erkennbar, allein', correct: true, why: 'Richtig. Alles andere kommt später.' },
      { text: 'Ein Ganzkörperfoto beim Sport', why: 'Gehört ins Profil, aber nicht an Position 1.' }
    ] },
    { q: 'Wann ist ein Oben-ohne-Foto sinnvoll?', options: [
      { text: 'Wenn du trainiert bist', why: 'Zu wenig. Ohne Kontext wirkt es als Ansage.' },
      { text: 'Wenn Wasser im Bild ist und es dir wirklich steht', correct: true, why: 'Genau — Kontext plus ehrliche Selbsteinschätzung.' },
      { text: 'Nie', why: 'Zu pauschal. Am See ist es unauffällig.' }
    ] },
    { q: 'Du willst boosten. Was zuerst?', options: [
      { text: 'Boost kaufen, dann sehen', why: 'Du multiplizierst nur ein Profil, das du nicht geprüft hast.' },
      { text: 'Profil fertigstellen, dann boosten', correct: true, why: 'Richtig. Reichweite verstärkt, was da ist — im Guten wie im Schlechten.' },
      { text: 'Beides gleichzeitig', why: 'Dann weisst du nicht, was gewirkt hat.' }
    ] }
  ],
  transfer: 'Heute Abend: Foto 1 prüfen und den Profiltext laut vorlesen.'
}

];
