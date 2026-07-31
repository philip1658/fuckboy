/* Inhalte für die Spezialbausteine in Kapitel 04, 05 und 11.
   Die Kapiteltexte selbst liegen in content/chapters-*.js */
window.FBData = {
  flow: [
    { n: '01', t: 'Profil', s: 'Das Profil macht die Vorentscheidung. Wer hier verliert, kommt gar nicht erst ins Gespräch.', k: 'Kapitel 04' },
    { n: '02', t: 'Erste Nachricht', s: 'Konkrete Beobachtung aus ihrem Profil plus eine Frage, die eine Richtung vorgibt.', k: 'Kapitel 05' },
    { n: '03', t: 'Gespräch', s: 'Jede Nachricht hat eine Aufgabe: näher an das Treffen. Kein Chat um des Chats willen.', k: 'Kapitel 05' },
    { n: '04', t: 'Einladung', s: 'Tag, Zeit, Ort. Ein Getränk, eine Stunde, in deiner Nähe.', k: 'Kapitel 06' },
    { n: '05', t: 'Das Treffen', s: 'Kein Programm, kein Menü. Ein Ort, von dem aus der nächste Schritt kurz ist.', k: 'Kapitel 07' },
    { n: '06', t: 'Der Übergang', s: 'Die Einladung zu dir. Wenn sie nein sagt: Spaziergang. Wenn sie ja sagt: kochen.', k: 'Kapitel 07' },
    { n: '07', t: 'Nähe', s: 'Nur mit ihrem ausgesprochenen Ja, bei jedem Schritt neu. Zögern beendet den Ablauf.', k: 'Kapitel 10' },
    { n: '08', t: 'Der Abgang', s: 'Vorher sagen, ob du bleibst. Danach ist derselbe Satz eine Zurückweisung.', k: 'Kapitel 11' }
  ],
  gamechangers: [
    { icon: 'split', t: 'Ein Ablauf statt Tipps', s: 'Andere Ratgeber geben dir dreissig einzelne Tricks. Hier ist es eine Kette: acht Schritte, jeder mit einer Aufgabe, jeder mit einem Ausstieg. Du weisst an jedem Punkt, wo du bist und was als Nächstes kommt.' },
    { icon: 'zap', t: 'Textbausteine statt Talent', s: 'Du schreibst deine besten Antworten einmal und legst sie auf drei Buchstaben. Zwanzig Gespräche mit Tiefe in der Zeit, die andere für eines brauchen — in deiner Sprache, nicht in einer geliehenen.' },
    { icon: 'scale', t: 'Die Kosten stehen daneben', s: 'Jede Technik kommt mit dem, was sie anrichtet. Kein Kapitel verkauft dir einen Trick, ohne zu sagen, wen er trifft. Das findest du sonst nirgends.' },
    { icon: 'shield-check', t: 'Consent als Bedingung, nicht als Bremse', s: 'Der Ablauf hat an jedem Schritt eine Abbruchstelle. Nicht als Warnhinweis am Rand, sondern eingebaut: Wo sie nicht mitgeht, endet der Schritt — und du weisst vorher, wie du dann reagierst.' }
  ],
  photos: [
    { rank: '01', title: 'Lachen. Echt, nicht posiert.',
      text: 'Der mit Abstand stärkste Einzelfaktor. Ein echtes Lachen — Augen mit, Zähne sichtbar — schlägt jedes Fitnessstudio-Foto. Es signalisiert: mit dem Menschen wird es ein angenehmer Abend.',
      verdict: 'immer', note: 'Mindestens zwei deiner Fotos.' },
    { rank: '02', title: 'Ein Gesicht, klar erkennbar, ohne Sonnenbrille.',
      text: 'Das erste Foto entscheidet in einer halben Sekunde. Keine Gruppenbilder, keine Sonnenbrille, kein Hut, der das halbe Gesicht verdeckt. Sie muss wissen, wen sie trifft.',
      verdict: 'immer', note: 'Foto 1, ohne Ausnahme.' },
    { rank: '03', title: 'Oben ohne — nur wenn der Kontext es trägt.',
      text: 'Am See, im Meer, beim Springen vom Steg: dort ist Oberkörper frei normal und wirkt beiläufig. Im Badezimmerspiegel oder im Wohnzimmer wirkt es wie eine Ansage — und die liest sich als Unsicherheit, nicht als Selbstbewusstsein.',
      verdict: 'bedingt', note: 'Nur mit Wasser im Bild. Und nur, wenn du oben ohne wirklich gut aussiehst — sonst kostet es dich mehr Matches, als es bringt.' },
    { rank: '04', title: 'Eine Tätigkeit, die eine Frage provoziert.',
      text: 'Klettern, Kochen, Instrument, Hund, ein Ort mit Charakter. Nicht um zu beeindrucken, sondern um ihr eine Eröffnung zu schenken. Ein Foto, zu dem man nichts fragen kann, ist ein verlorener Slot.',
      verdict: 'empfohlen', note: 'Zwei bis drei Slots.' },
    { rank: '05', title: 'Ganzkörper, unbearbeitet.',
      text: 'Ehrlich zeigen, wie du aussiehst. Wer beim Date überrascht wird, ist enttäuscht — und Enttäuschung am Anfang holst du nicht mehr auf. Ein ehrliches Ganzkörperfoto filtert im Voraus und spart beiden den Abend.',
      verdict: 'immer', note: 'Ein Slot reicht.' },
    { rank: '06', title: 'Kein Auto, keine Waffe, kein Spiegel-Selfie.',
      text: 'Drei Klassiker, die zuverlässig Matches kosten. Sie erzählen nichts über dich, ausser dass du glaubst, sie würden etwas erzählen.',
      verdict: 'nie', note: 'Ersatzlos streichen.' }
  ],
  algorithm: [
    { icon: 'timer', title: 'Aktivität schlägt Aussehen',
      text: 'Die Apps ranken Profile, die regelmässig und kurz aktiv sind, höher als solche, die einmal pro Woche zwei Stunden durchwischen. Zwei kurze Sessions am Tag sind mehr wert als eine lange.' },
    { icon: 'target', title: 'Deine ersten Likes definieren dein Publikum',
      text: 'Wen du likst und wer dich zurück likt, formt die Zielgruppe, der du danach gezeigt wirst. Wahllos alles nach rechts zu wischen verwässert genau das.' },
    { icon: 'trending-down', title: 'Antwortquote ist eine Ranking-Grösse',
      text: 'Matches, die im Nichts enden, zählen negativ. Weniger Matches mit echten Gesprächen ranken besser als hundert tote Threads.' },
    { icon: 'zap', title: 'Boosts wirken nur mit fertigem Profil',
      text: 'Ein Boost multipliziert die Sichtbarkeit deines aktuellen Profils. Ist es schwach, kaufst du dir mehr Menschen, die vorbeiscrollen. Erst fertig bauen, dann boosten.' },
    { icon: 'clock', title: 'Timing: Sonntagabend, 20 bis 22 Uhr',
      text: 'Höchste Aktivität in der Woche. Ein Boost am Dienstagvormittag verbrennt dieselbe Menge Geld für ein Viertel der Augen.' },
    { icon: 'message-square', title: 'Nach dem Boost zählen 30 Minuten',
      text: 'Sei erreichbar, wenn er läuft. Die Matches, die währenddessen entstehen, antworten sofort — oder nie wieder.' }
  ],
  snippets: [
    { key: ';vor', label: 'Vorstellung', text: 'Ich bin Verkaufstrainer, arbeite viel mit Menschen und rede beruflich den ganzen Tag — privat bin ich deshalb gern draussen und still. Klettern, kochen, lange Wege zu Fuss. Ich mag Gespräche, die nach zwei Sätzen aufhören, höflich zu sein.' },
    { key: ';woh', label: 'Wohnort & Alltag', text: 'Ich wohne in Zürich, ursprünglich vom Land. Unter der Woche viel unterwegs, am Wochenende meistens irgendwo am Berg oder in der Küche.' },
    { key: ';suc', label: 'Was ich suche', text: 'Ehrlich: aktuell nichts Festes. Wenn du das Gegenteil suchst, sag es einfach — dann sparen wir uns beide Zeit. Ich finde das fairer, als es offen zu lassen.' },
    { key: ';wek', label: 'Wochenende', text: 'Freitag runterkommen, Samstag draussen, Sonntag kochen und niemanden sehen. Wobei die letzte Regel verhandelbar ist.' },
    { key: ';dat', label: 'Date-Vorschlag', text: 'Wollen wir das Schreiben abkürzen? Donnerstag oder Samstag, ein Getränk, eine Stunde. Wenn es gut ist, bleiben wir länger.' }
  ],
  chat: {
    profile: { name: 'M.', age: 27, meta: '4 km entfernt', image: '../../assets/sim/profile-01.png', tags: ['Klettern', 'Sarkasmus', 'Kein Small Talk'] },
    thread: [
      { from: 'her', time: '23:31', text: 'Dein Profil ist verdächtig gut geschrieben.' },
      { from: 'me', time: '23:33', text: 'Berufsrisiko. Ich verdiene Geld damit, Sätze zu bauen.', status: 'read' },
      { from: 'her', time: '23:36', text: 'Und was suchst du so? 🙂' }
    ],
    replies: [
      { letter: 'A', label: 'Offen', outcome: 'good',
        quote: '„Ehrlich: aktuell nichts Festes. Wenn du das Gegenteil suchst, sag es einfach — dann sparen wir uns beide Zeit.“',
        feedback: 'Ehrlich, früh, ohne Drama. Verkleinert den Pool und schützt beide vor falschen Erwartungen.' },
      { letter: 'B', label: 'Mehrdeutig', outcome: 'costly',
        quote: '„Ich lasse das offen. Man weiss ja nie, wer um die Ecke kommt.“',
        feedback: 'Taktisch wirksam — und genau die Aussage, die Hoffnung erzeugt, die du nicht einlösen willst.' },
      { letter: 'C', label: 'Ausweichen', outcome: 'bad',
        quote: '„Erstmal schauen, ob wir uns überhaupt riechen können 😏“',
        feedback: 'Du weichst der Frage aus, die sie gerade gestellt hat. Sie merkt es. Vertrauen sinkt, bevor ihr euch gesehen habt.' }
    ]
  }
};
