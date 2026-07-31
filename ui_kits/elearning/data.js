window.FBData = {
  chapters: [
    { number: '01', railLabel: 'Mindset', title: 'Das Mindset', duration: '12 Min', decisions: 4, state: 'done',
      summary: 'Warum Wirkung, Auftreten und Erwartungsmanagement mehr entscheiden als dein Gesicht.' },
    { number: '02', railLabel: 'Consent', title: 'Consent ist die Regel, nicht das Kleingedruckte', duration: '16 Min', decisions: 7, state: 'done',
      summary: 'Signale lesen, Grenzen früh erkennen, ein Nein annehmen — ohne zu verhandeln.' },
    { number: '03', railLabel: 'Der grösste Fehler', title: 'Der grösste Fehler', duration: '14 Min', decisions: 6, state: 'available',
      summary: 'Warum das Bedürfnis nach Sex der schnellste Weg ist, ihn nicht zu haben.' },
    { number: '04', railLabel: 'Ablehnung', title: 'Warum will sie dich nicht?', duration: '11 Min', decisions: 5, state: 'locked',
      summary: 'Ablehnung ohne Ego. Was mit dir zu tun hat — und was nicht.' },
    { number: '05', railLabel: 'Beziehung', title: 'Thema Beziehung', duration: '18 Min', decisions: 8, state: 'locked',
      summary: 'Der unbequemste Teil: was du sagst, wenn du etwas Unverbindliches willst.' },
    { number: '06', railLabel: 'Was übrig bleibt', title: 'Was übrig bleibt', duration: '9 Min', decisions: 3, state: 'locked', bonus: true,
      summary: 'Die Bonusakte. Was das Werkzeug mit dem macht, der es benutzt.' }
  ],
  scores: [
    { label: 'Charme', value: 84, tone: 'gain', icon: 'flame' },
    { label: 'Authentizität', value: 71, tone: 'gain', icon: 'quote' },
    { label: 'Selbstkontrolle', value: 66, tone: 'gain', icon: 'timer' },
    { label: 'Consent-Kompetenz', value: 92, tone: 'consent', icon: 'shield-check' },
    { label: 'Ehrlichkeit', value: 58, tone: 'neutral', icon: 'scale' },
    { label: 'Erwartungsdruck', value: 38, tone: 'loss', icon: 'gauge', note: 'Du wartest im Gespräch oft schon auf das Ergebnis.' },
    { label: 'Kollateralschaden', value: 31, tone: 'loss', icon: 'heart-crack', note: 'Zwei Personen rechnen mit mehr, als du geben willst.' },
    { label: 'Fuckboy-Level', value: 62, tone: 'neutral', icon: 'skull', note: 'Kein Ziel. Nur eine Messung.' }
  ],
  scenario: {
    kicker: 'Kapitel 03 · Boss-Level',
    title: 'Gutes Date, unklare Signale',
    brief: [
      'Zweites Getränk, 23:40. Sie lacht viel, sitzt nah, spielt mit dem Glas.',
      'Vor zehn Minuten hat sie deinen Arm berührt. Als du näher gerutscht bist, hat sie sich leicht zurückgelehnt.',
      'Du willst sie küssen.'
    ],
    signals: [
      { icon: 'check-check', tone: 'consent', text: 'Sie hält Blickkontakt und stellt Rückfragen.' },
      { icon: 'triangle-alert', tone: 'caution', text: 'Sie hat sich zurückgelehnt, als du näher kamst.' },
      { icon: 'circle-alert', tone: 'caution', text: 'Drittes Getränk — sie ist angetrunken, nicht betrunken.' }
    ],
    options: [
      { letter: 'A', label: 'Du sagst', outcome: 'good',
        quote: '„Ich sag dir mal was Direktes: ich würde dich gern küssen. Und ein Nein ist völlig okay.“',
        feedback: 'Klar, respektvoll, druckfrei. Sie kann echt entscheiden — und genau das macht die Situation sicher. Wenn sie nein sagt, ist das Thema vom Tisch.',
        deltas: [{ label: 'Authentizität', delta: '+6', tone: 'gain' }, { label: 'Erwartungsdruck', delta: '−4', tone: 'gain' }] },
      { letter: 'B', label: 'Du machst', outcome: 'bad',
        quote: 'Du rutschst nochmal näher und legst die Hand auf ihr Knie. Reden kann man später.',
        feedback: 'Sie hat sich vorher schon zurückgelehnt. Das war ein Signal, kein Zufall. Körperlich vorgehen, ohne die Ablehnung zu lesen, erzeugt Druck — und übergeht ihre Grenze.',
        deltas: [{ label: 'Consent-Kompetenz', delta: '−12', tone: 'loss' }, { label: 'Kollateralschaden', delta: '+8', tone: 'loss' }] },
      { letter: 'C', label: 'Du bleibst', outcome: 'costly',
        quote: 'Du bleibst maximal nett, machst Komplimente und hoffst, dass sie irgendwann anfängt.',
        feedback: 'Funktioniert manchmal. Aber du versteckst dein Interesse hinter Freundlichkeit und schiebst die Entscheidung ihr zu. Das ist kein Respekt, das ist Auslagern.',
        deltas: [{ label: 'Charme', delta: '+2', tone: 'gain' }, { label: 'Authentizität', delta: '−5', tone: 'loss' }] }
    ]
  },
  chat: {
    profile: { name: 'M.', age: 27, meta: '4 km entfernt', tags: ['Klettern', 'Sarkasmus', 'Kein Small Talk'] },
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
  },
  goals: {
    '01': ['Erkennen, dass Wirkung aus Kommunikation entsteht, nicht aus Aussehen.', 'Eigene Stärken benennen und als Gesprächsstil nutzen.', 'Absichten aussprechen statt hinter Freundlichkeit verstecken.'],
    '02': ['Verbale und nonverbale Grenzsignale zuverlässig lesen.', 'Ein Nein annehmen, ohne zu diskutieren oder zu verhandeln.', 'Consent von Technik unterscheiden — und nie als Umweg benutzen.'],
    '03': ['Verstehen, warum Bedürfnis Druck erzeugt.', 'Ein Angebot machen, ohne ein Ergebnis zu erwarten.', 'Eine Absage als Datenpunkt behandeln, nicht als Niederlage.'],
    '04': ['Ablehnung entkoppeln von Selbstwert.', 'Gründe akzeptieren, die nichts mit dir zu tun haben.', 'Ein Date respektvoll und ehrlich beenden.'],
    '05': ['Die eigene Absicht in einem Satz formulieren.', 'Fünf Grade von Ehrlichkeit unterscheiden — von offen bis Täuschung.', 'Den Preis von Mehrdeutigkeit benennen.'],
    '06': ['Langfristige Kosten des Werkzeugs erkennen.', 'Merkmale bemerken, die Nähe erschweren.', 'Eine bewusste Entscheidung über den weiteren Weg treffen.']
  },
  formats: [
    { icon: 'split', title: 'Interaktive Entscheidungen', text: 'Realistische Situationen, mehrere plausible Reaktionen. Nichts ist offensichtlich richtig — du siehst nur die wahrscheinliche Wirkung.', count: '33 Entscheidungen' },
    { icon: 'gauge', title: 'Konsequenz-Simulation', text: 'Jede Wahl verschiebt Vertrauen, Anziehung, Druck, Glaubwürdigkeit und das Risiko falscher Erwartungen.', count: '8 Dimensionen' },
    { icon: 'message-square', title: 'Chat- & Dating-Simulationen', text: 'Profilkarten, Threads, erste Nachrichten. Du formulierst, das Gegenüber reagiert plausibel.', count: '7 Simulationen' },
    { icon: 'flag', title: 'Red-Flag-Momente', text: 'Problematische Situationen erkennen, bevor sie eskalieren — bei ihr und bei dir selbst.', count: '7 Signale' },
    { icon: 'trophy', title: 'Boss-Level', text: 'Am Kapitelende eine komplexe Lage, in der mehrere Prinzipien gleichzeitig gelten.', count: '6 Level' },
    { icon: 'target', title: 'Real-Life-Übungen', text: 'Transferaufgaben für ausserhalb des Kurses. Niemand kontrolliert sie — deshalb funktionieren sie nur ehrlich.', count: '5 Übungen' }
  ],
  bosslevels: [
    'Ein gutes Date, aber unklare Signale',
    'Starke Anziehung bei unterschiedlichen Beziehungswünschen',
    'Sie möchte mit nach Hause, hat aber deutlich zu viel getrunken',
    'Nach dem Sex entstehen unterschiedliche Erwartungen',
    'Eine Absage verletzt das eigene Ego',
    'Der Erzähler empfiehlt eine wirksame, aber unehrliche Aussage'
  ],
  transfer: [
    { text: 'Formuliere deine aktuelle Datingabsicht in einem ehrlichen Satz.', done: true },
    { text: 'Führe ein Gespräch, ohne ein bestimmtes Ergebnis zu erwarten.', done: true },
    { text: 'Definiere drei nonverbale Signale, bei denen du sofort Abstand nimmst.', done: false },
    { text: 'Übe, eine Absage anzunehmen — ohne Nachfrage, ohne Erklärung.', done: false },
    { text: 'Erkenne eine Situation, in der du übertrieben freundlich warst, statt dein Interesse zu sagen.', done: false }
  ],
  flags: [
    'Sie antwortet nur noch sehr kurz.',
    'Sie weicht Berührungen aus.',
    'Sie lacht aus Unsicherheit.',
    'Sie sagt vielleicht, meint aber sichtbar nein.',
    'Sie hat viel Alkohol konsumiert.',
    'Du verschweigst bewusst deine Absichten.',
    'Du versuchst, ein Nein umzuinterpretieren.'
  ]
};
