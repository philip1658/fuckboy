window.FBChaptersA = [

/* ═══════════ 01 ═══════════ */
{
  number: '01', slug: 'mindset', rail: 'Mindset',
  title: 'Das Mindset',
  subtitle: 'Selbstsicherheit ohne Selbstüberschätzung',
  duration: '14 Min',
  lead: 'Der Unterschied zwischen souverän und bedürftig ist kein Gesicht und kein Satz. Es ist die Frage, ob du das Ergebnis schon brauchst, bevor der Abend angefangen hat.',
  goals: [
    'Selbstwert und Dating-Erfolg auseinanderhalten.',
    'Initiative zeigen, ohne eine Reaktion zu erzwingen.',
    'Ablehnung als Information behandeln statt als Urteil.',
    'Erkennen, was du an deiner Wirkung ändern kannst — und was nicht.'
  ],
  story: 'Ich habe zwei Jahre lang geglaubt, mein Problem sei mein Gesicht. Ich habe trainiert, mich besser angezogen, mir Sprüche zurechtgelegt. Geändert hat sich nichts. Geändert hat sich erst etwas, als ich aufgehört habe, jedes Gespräch als Prüfung zu behandeln, die ich bestehen muss.',
  sections: [
    { type: 'text', h: 'Bedürftigkeit ist sichtbarer als Nervosität',
      p: ['Nervös sein ist normal und wirkt oft sogar sympathisch. Bedürftig sein ist etwas anderes: Du brauchst von der anderen Person eine bestimmte Reaktion, damit der Abend für dich in Ordnung ist. Das merkt man. Nicht an einem einzelnen Satz, sondern daran, wie du auf Pausen reagierst, wie schnell du nachlegst, wie sehr du bei jedem Lachen erleichtert bist.',
          'Der Unterschied ist nicht Technik, sondern Ausgangslage. Wer den Abend auch dann in Ordnung findet, wenn nichts daraus wird, verhält sich automatisch anders — ruhiger, langsamer, ehrlicher.'] },
    { type: 'principle', label: 'Psychologisches Prinzip', h: 'Die Macht der Selbstsicherheit',
      p: 'Selbstsicherheit entsteht durch Handlungsfähigkeit, Erfahrung und das Aushalten unsicherer Ergebnisse — nicht durch die Überzeugung, anderen überlegen zu sein. Wer sich überlegen fühlt, braucht Bestätigung. Wer handlungsfähig ist, braucht sie nicht.' },
    { type: 'split', h: 'Kontrollierbar und nicht kontrollierbar',
      good: { title: 'Liegt bei dir', items: ['Pflege, Kleidung, Haltung', 'Wie du ein Gespräch eröffnest', 'Ob du deine Absicht aussprichst', 'Wie du auf ein Nein reagierst', 'Wie oft du überhaupt Kontakt aufnimmst'] },
      bad:  { title: 'Liegt nicht bei dir', items: ['Ob sie gerade Kapazität hat', 'Ob sie etwas anderes sucht', 'Ihr Ex, ihr Tag, ihre Laune', 'Ihr Typ', 'Ob sie antwortet'] } },
    { type: 'compare', h: 'Dieselbe Situation, zwei Haltungen',
      bad: { label: 'Bedürftig', text: '„Hey, alles ok bei dir? Hab lang nichts gehört 😅 falls ich was falsch gesagt hab, sag ruhig“' },
      good: { label: 'Souverän', text: '„Hey — falls es bei dir gerade passt, würde ich dich gern auf ein Getränk treffen. Wenn nicht, auch völlig okay.“' } },
    { type: 'text', h: 'Eine Absage ist ein Datenpunkt',
      p: ['Wer viele Menschen kennenlernt, sammelt zwangsläufig viele Absagen. Das ist Mathematik, nicht Kritik. Die Absage sagt etwas über die Passung aus, nicht über deinen Wert — und in den meisten Fällen weisst du gar nicht, woran es lag. Das auszuhalten, ohne nachzufragen, ist die eigentliche Übung.'] }
  ],
  scenario: {
    title: 'Sie antwortet seit zwei Tagen nicht',
    brief: ['Ihr habt vier Tage gut geschrieben. Dann hast du ein Treffen vorgeschlagen.', 'Seitdem: nichts. Zuletzt online war sie gestern Abend.'],
    signals: [
      { icon: 'clock', tone: 'caution', text: 'Zwei Tage Pause nach einer konkreten Frage.' },
      { icon: 'eye', tone: 'caution', text: 'Sie war online, hat aber nicht geantwortet.' },
      { icon: 'circle-dot', tone: 'consent', text: 'Vorher war das Gespräch beidseitig aktiv.' }
    ],
    options: [
      { letter: 'A', label: 'Du schreibst', kind: 'rueckzug', outcome: 'good',
        quote: 'Nichts. Du wartest ab und schreibst niemandem hinterher.',
        feedback: 'Angemessen. Du hast eine klare Frage gestellt; die Antwort darauf ist ihre Entscheidung. Kein Nachfassen bedeutet nicht Aufgeben, sondern die Frage stehenlassen.',
        deltas: [{ id: 'selbstsicherheit', delta: '+5' }, { id: 'respekt', delta: '+3' }] },
      { letter: 'B', label: 'Du schreibst', kind: 'initiative', outcome: 'good',
        quote: '„Kein Stress — falls diese Woche nichts geht, meld dich einfach, wenn es wieder passt.“',
        feedback: 'Auch gut. Einmal nachfassen ist legitim, wenn es die Tür offen lässt statt Druck zu machen. Danach ist Schluss mit Nachfassen.',
        deltas: [{ id: 'initiative', delta: '+4' }, { id: 'klarheit', delta: '+2' }] },
      { letter: 'C', label: 'Du schreibst', kind: 'druck', outcome: 'costly',
        quote: '„Hab ich was falsch gemacht? 😅“',
        feedback: 'Verständlich, aber es dreht die Situation um: Sie muss dich jetzt beruhigen. Das ist eine Aufgabe, die du ihr gibst, ohne dass sie darum gebeten hat.',
        deltas: [{ id: 'selbstsicherheit', delta: '−4' }, { id: 'klarheit', delta: '−2' }] },
      { letter: 'D', label: 'Du schreibst', kind: 'grenze', outcome: 'bad',
        quote: '„Schade, hätte dich für anders gehalten.“',
        feedback: 'Das ist eine Bestrafung für eine nicht erhaltene Antwort. Es sagt nichts über sie und alles über dich — und es ist das Verhalten, das Frauen später als Grund nennen, gar nicht erst zu antworten.',
        deltas: [{ id: 'resilienz', delta: '−8' }, { id: 'respekt', delta: '−6' }] }
    ]
  },
  interaction: { type: 'sort', title: 'Kontrollierbar oder nicht?', prompt: 'Ordne zu. Es geht nicht um richtig oder falsch, sondern darum, wo du deine Energie hinlegst.',
    left: 'Liegt bei dir', right: 'Liegt nicht bei dir',
    items: [
      { text: 'Wie schnell du antwortest', side: 'left' },
      { text: 'Ob sie deinen Humor mag', side: 'right' },
      { text: 'Wie du auf eine Absage reagierst', side: 'left' },
      { text: 'Ob sie gerade Lust auf Dating hat', side: 'right' },
      { text: 'Wie gepflegt du auftrittst', side: 'left' },
      { text: 'Ihre Erfahrung mit dem Letzten vor dir', side: 'right' }
    ] },
  challenge: { title: 'Eine soziale Initiative ohne Ziel', text: 'Sprich diese Woche eine fremde Person an, bei der du kein Interesse hast. Kassiererin, Sitznachbar, jemand im Aufzug. Ein Satz, freundlich, ohne Absicht. Es geht darum, den Reflex zu trainieren, ohne dass ein Ergebnis daran hängt.' },
  reflection: { question: 'Wie reagierst du im Moment auf eine Absage — ehrlich, nicht wie du es gern hättest?', placeholder: 'Ich werde still und schreibe drei Tage niemandem …' },
  personalLine: { question: 'Formuliere deinen eigenen Mindset-Satz. Einen Satz, den du dir vor einem Date sagst.', placeholder: 'Ich gehe hin, weil ich sie kennenlernen will — nicht, weil ich etwas beweisen muss.' },
  summary: [
    'Bedürftigkeit ist sichtbarer als Nervosität.',
    'Selbstsicherheit heisst, ein offenes Ergebnis auszuhalten.',
    'Eine Absage ist Information über Passung, kein Urteil über dich.',
    'Optimiere dein Verhalten, nicht ihre Reaktion.'
  ],
  quiz: [
    { q: 'Woran erkennt man Bedürftigkeit am ehesten?', options: [
      { text: 'An Nervosität im Gespräch', why: 'Nervosität ist normal und wirkt oft sympathisch. Sie ist nicht dasselbe.' },
      { text: 'Daran, dass jemand eine bestimmte Reaktion braucht, damit der Abend okay ist', correct: true, why: 'Genau. Es geht um die Ausgangslage, nicht um die Nerven.' },
      { text: 'An zu wenig Blickkontakt', why: 'Kann viele Gründe haben und ist kein verlässliches Zeichen.' }
    ] },
    { q: 'Was gehört in deinen Einflussbereich?', options: [
      { text: 'Ob sie antwortet', why: 'Das ist ihre Entscheidung, nicht deine Leistung.' },
      { text: 'Wie du auf ein Nein reagierst', correct: true, why: 'Richtig — das ist der Teil, den du vollständig steuerst.' },
      { text: 'Ob sie gerade Kapazität für Dating hat', why: 'Liegt vollständig ausserhalb deines Einflusses.' }
    ] },
    { q: 'Sie antwortet nach einer konkreten Frage zwei Tage nicht. Was ist angemessen?', options: [
      { text: 'Einmal locker nachfassen oder es stehen lassen', correct: true, why: 'Beides ist in Ordnung. Wiederholtes Nachfassen ist es nicht.' },
      { text: 'Fragen, ob du etwas falsch gemacht hast', why: 'Das macht sie für dein Befinden verantwortlich.' },
      { text: 'Eine enttäuschte Nachricht schicken', why: 'Das ist eine Bestrafung für eine ausgebliebene Antwort.' }
    ] }
  ],
  transfer: 'Diese Woche: eine Kontaktaufnahme, bei der dir das Ergebnis bewusst egal ist.'
},

/* ═══════════ 02 ═══════════ */
{
  number: '02', slug: 'consent', rail: 'Consent',
  title: 'Consent ist die Regel',
  subtitle: 'Nicht das Kleingedruckte, sondern die Bedingung',
  duration: '22 Min',
  lead: 'Dieses Kapitel steht über allen anderen. Alles, was danach kommt, gilt nur, solange das hier eingehalten wird. Wer es als Formalität liest, hat den Kurs missverstanden.',
  goals: [
    'Consent konkret definieren können — nicht nur als Schlagwort.',
    'Interesse, Flirt und Zustimmung sauber auseinanderhalten.',
    'Direkt fragen, ohne die Situation zu zerstören.',
    'Auf Zögern richtig reagieren und danach Sicherheit herstellen.',
    'Einwilligungsfähigkeit bei Alkohol realistisch einschätzen.'
  ],
  story: 'Ich habe einmal einen Abend lang übersehen, dass sie nur noch mitgemacht hat. Sie hat nicht nein gesagt. Sie hat auch nichts mehr selbst angefangen. Ich habe das damals als Zustimmung gelesen, weil ich es lesen wollte. Das ist der Fehler, über den ich am längsten nachgedacht habe.',
  sections: [
    { type: 'definition', h: 'Was Consent konkret bedeutet',
      items: [
        { k: 'Freiwillig', v: 'Ohne Druck, ohne Überredung, ohne Gegenleistung für Zeit, Geld oder Aufmerksamkeit.' },
        { k: 'Informiert', v: 'Sie weiss, worum es geht — auch, was du willst und was nicht.' },
        { k: 'Konkret', v: 'Zustimmung zu einem Kuss ist keine Zustimmung zu mehr.' },
        { k: 'Fortlaufend', v: 'Sie gilt jetzt, nicht für den ganzen Abend und nicht für das nächste Mal.' },
        { k: 'Widerrufbar', v: 'Jederzeit, ohne Begründung, auch mittendrin.' },
        { k: 'Nicht ableitbar', v: 'Nicht aus Schweigen, nicht aus Körpersprache, nicht daraus, dass sie mitgekommen ist.' }
      ] },
    { type: 'note', tone: 'consent', title: 'Der Unterschied zwischen Interesse und Zustimmung',
      text: 'Interesse ist eine Beobachtung: Sie lacht, sie sucht Nähe, sie bleibt. Zustimmung ist eine Antwort auf eine Frage. Interesse macht die Frage sinnvoll. Es beantwortet sie nicht.' },
    { type: 'phrases', h: 'So fragt man, ohne die Stimmung zu zerstören',
      note: 'Die Angst, mit einer Frage alles kaputtzumachen, ist der häufigste Einwand. In der Praxis passiert das Gegenteil: Wer fragt, wirkt sicher, nicht unsicher.',
      items: [
        '„Ist das für dich gerade gut?“',
        '„Möchtest du, dass ich weitermache?“',
        '„Wir müssen nichts machen.“',
        '„Sag mir jederzeit, wenn du etwas anders möchtest.“',
        '„Ich würde dich gern küssen.“'
      ] },
    { type: 'phrases', h: 'Und so reagiert man auf ein Nein', tone: 'good',
      note: 'Das Ziel nach einem Nein ist nicht, die Situation zu retten. Es ist, ihr die Peinlichkeit zu nehmen.',
      items: [
        '„Alles gut. Danke, dass du es sagst.“',
        '„Kein Thema — willst du noch was trinken?“',
        '„Passt. Ich fand den Abend trotzdem gut.“'
      ] },
    { type: 'note', tone: 'danger', title: 'Alkohol',
      text: 'Bei starkem Alkoholkonsum, erkennbarer Beeinträchtigung oder wenn du unsicher bist, ob sie klar entscheiden kann, findet kein sexueller Übergang statt. Nicht „lieber vorsichtig“ — gar nicht. Wenn die Situation nüchtern eine gute Idee ist, ist sie es morgen auch noch.' },
    { type: 'list', h: 'Auch das gehört zu Consent', tone: 'neutral',
      items: [
        'Machtgefälle: Chefin, Mitarbeiterin, Abhängigkeit — Zustimmung ist dort nie einfach.',
        'Digitale Grenzen: keine ungefragten Bilder, keine Weiterleitung privater Nachrichten.',
        'Intime Bilder gehören der Person, die darauf ist. Auch nach dem Kontakt.',
        'Keine heimlichen Aufnahmen. Nie.',
        'Innerhalb einer Beziehung gilt dasselbe wie draussen.'
      ] },
    { type: 'text', h: 'Wenn du selbst einen Fehler gemacht hast',
      p: ['Es kann passieren, dass du eine Grenze übersehen hast. Dann gilt: aufhören, benennen, nicht rechtfertigen, nicht um Absolution bitten. „Ich habe gerade nicht gemerkt, dass dir das zu viel war. Tut mir leid.“ Danach ist es ihre Entscheidung, wie es weitergeht — nicht deine.'] }
  ],
  scenario: {
    title: 'Sie zieht sich plötzlich zurück',
    brief: ['Ihr küsst euch seit ein paar Minuten auf ihrem Sofa. Es lief bis eben beidseitig.', 'Jetzt dreht sie den Kopf leicht weg und legt eine Hand auf deine Brust. Sie sagt nichts.'],
    signals: [
      { icon: 'hand', tone: 'danger', text: 'Hand auf der Brust — eine körperliche Distanzierung.' },
      { icon: 'circle-alert', tone: 'caution', text: 'Sie sagt nichts. Schweigen ist keine Zustimmung.' },
      { icon: 'eye', tone: 'caution', text: 'Der Blickkontakt ist weg.' }
    ],
    options: [
      { letter: 'A', label: 'Du machst', kind: 'klar', outcome: 'good',
        quote: 'Du lehnst dich zurück, gibst Abstand und sagst: „Alles gut. Wollen wir kurz was trinken?“',
        feedback: 'Richtig. Du hast das Signal gelesen, sofort Abstand gegeben und ihr einen Ausweg ohne Peinlichkeit angeboten. Genau darum geht es: die Situation entlasten, nicht klären.',
        deltas: [{ id: 'respekt', delta: '+8' }, { id: 'beobachtung', delta: '+6' }] },
      { letter: 'B', label: 'Du fragst', kind: 'klar', outcome: 'good',
        quote: '„Ist das gerade okay für dich?“',
        feedback: 'Auch richtig. Direkt nachfragen ist immer erlaubt. Achte danach nicht nur auf das Wort, sondern darauf, ob sie danach wieder von selbst näher kommt.',
        deltas: [{ id: 'respekt', delta: '+7' }, { id: 'klarheit', delta: '+5' }] },
      { letter: 'C', label: 'Du machst', kind: 'voreilig', outcome: 'costly',
        quote: 'Du machst langsamer weiter und wartest ab, ob sie wieder mitgeht.',
        feedback: 'Das ist die häufigste Reaktion — und sie schiebt die Verantwortung zu ihr. Sie müsste jetzt aktiv stoppen, statt dass du auf ihr Signal reagierst. Ein Rückzug ist bereits die Antwort.',
        deltas: [{ id: 'beobachtung', delta: '−5' }, { id: 'respekt', delta: '−4' }] },
      { letter: 'D', label: 'Du fragst', kind: 'druck', outcome: 'bad',
        quote: '„Was ist denn los? Eben war doch alles gut.“',
        feedback: 'Damit muss sie sich rechtfertigen für etwas, das keine Rechtfertigung braucht. Das erzeugt genau den Druck, unter dem viele dann doch weitermachen — und das ist keine Zustimmung mehr.',
        deltas: [{ id: 'respekt', delta: '−9' }, { id: 'beobachtung', delta: '−4' }] }
    ]
  },
  interaction: { type: 'traffic', title: 'Consent-Ampel', prompt: 'Bewerte jede Situation. Bei Unsicherheit gilt immer Rot.',
    items: [
      { text: 'Sie sagt „ja, gern“ und kommt näher.', answer: 'gruen', why: 'Verbal und körperlich eindeutig, aus eigener Initiative.' },
      { text: 'Sie sagt nichts, macht aber auch nichts dagegen.', answer: 'rot', why: 'Schweigen ist keine Zustimmung. Frag nach oder hör auf.' },
      { text: 'Sie lacht viel und berührt deinen Arm.', answer: 'gelb', why: 'Interesse — mehr nicht. Es macht die Frage sinnvoll, beantwortet sie aber nicht.' },
      { text: 'Sie sagt „ich weiss nicht“ und lacht dabei.', answer: 'rot', why: 'Unsicherheit ist ein Nein, bis sie von selbst ein klares Ja äussert. Das Lachen ändert daran nichts.' },
      { text: 'Sie hatte fünf Drinks und lallt leicht.', answer: 'rot', why: 'Eingeschränkte Einwilligungsfähigkeit. Kein sexueller Übergang, unabhängig davon, was sie sagt.' },
      { text: 'Letzte Woche wollte sie. Heute sagt sie nichts dazu.', answer: 'rot', why: 'Frühere Zustimmung gilt nicht weiter. Consent ist fortlaufend.' },
      { text: 'Sie fragt: „Kommst du noch mit hoch?“', answer: 'gelb', why: 'Eine Einladung in die Wohnung ist keine Zusage für Sex. Kläre es dort, nicht im Kopf.' }
    ] },
  challenge: { title: 'Drei Stopp-Signale definieren', text: 'Schreib dir drei konkrete nonverbale Signale auf, bei denen du künftig sofort Abstand nimmst — ohne nachzufragen, ohne zu prüfen. Wer sie vorher festlegt, muss sie im Moment nicht abwägen.' },
  reflection: { question: 'Gab es eine Situation, in der du im Nachhinein nicht sicher bist, ob sie wirklich wollte? Was würdest du heute anders machen?', placeholder: 'Ehrlich, nur für dich …' },
  summary: [
    'Consent ist freiwillig, informiert, konkret, fortlaufend und widerrufbar.',
    'Interesse macht die Frage sinnvoll. Es beantwortet sie nicht.',
    'Schweigen, Zögern und Erstarren sind keine Zustimmung.',
    'Bei Alkohol oder Unsicherheit: kein Übergang. Ohne Ausnahme.',
    'Nach einem Nein ist deine Aufgabe, die Situation zu entlasten.'
  ],
  quiz: [
    { q: 'Sie hat vorhin zugestimmt. Zwanzig Minuten später wirkt sie zurückhaltend. Was gilt?', options: [
      { text: 'Die Zustimmung von vorhin gilt weiter', why: 'Nein. Consent ist fortlaufend und jederzeit widerrufbar.' },
      { text: 'Du hörst auf und fragst nach', correct: true, why: 'Richtig. Eine Veränderung im Verhalten ist ein Signal, kein Rauschen.' },
      { text: 'Du machst langsamer weiter', why: 'Das verlagert die Verantwortung zu ihr, aktiv zu stoppen.' }
    ] },
    { q: 'Was ersetzt eine verbale Zustimmung?', options: [
      { text: 'Eindeutige Körpersprache', why: 'Körpersprache kann Interesse zeigen, ersetzt Zustimmung aber nie sicher.' },
      { text: 'Dass sie mit zu dir gekommen ist', why: 'Eine Einladung in die Wohnung ist keine Zusage.' },
      { text: 'Nichts', correct: true, why: 'Richtig. Es gibt keinen Ersatz — nur die Frage und ihre Antwort.' }
    ] },
    { q: 'Sie sagt nein. Was ist die richtige Reaktion?', options: [
      { text: 'Nachfragen, woran es liegt', why: 'Das verlangt eine Rechtfertigung, die sie nicht schuldet.' },
      { text: 'Abstand geben und die Situation entlasten', correct: true, why: 'Genau. Deine Aufgabe ist, ihr die Peinlichkeit zu nehmen.' },
      { text: 'Später am Abend nochmal versuchen', why: 'Ein Nein ist keine Zwischenstation. Das Thema ist beendet.' }
    ] },
    { q: 'Wann ist Einwilligungsfähigkeit eingeschränkt?', options: [
      { text: 'Nur bei Bewusstlosigkeit', why: 'Deutlich zu eng gefasst.' },
      { text: 'Bei starker Alkoholisierung, Angst, Druck oder Abhängigkeit', correct: true, why: 'Richtig — und im Zweifel gilt immer die vorsichtigere Einschätzung.' },
      { text: 'Wenn sie selbst sagt, sie sei betrunken', why: 'Das ist ein Hinweis, aber nicht die einzige Grenze.' }
    ] }
  ],
  transfer: 'Vor dem nächsten körperlichen Schritt: einmal fragen. Wörtlich.'
}

];
