window.FBChaptersE = [

/* ═══════════ 09 ═══════════ */
{
  number: '09', slug: 'ablehnung', rail: 'Ablehnung',
  image: 'assets/chapters/09-ablehnung.png',
  title: 'Ablehnung, Ghosting, Nichterscheinen',
  subtitle: 'Der häufigste Einzelfall überhaupt',
  duration: '15 Min',
  lead: 'Wenn du viel kennenlernst, wirst du viel abgelehnt. Das ist keine Nebenwirkung, das ist die Hauptmenge. Wie du damit umgehst, entscheidet mehr über deinen Alltag als jede Technik.',
  goals: [
    'Ablehnung von Bewertung trennen.',
    'Auf Ghosting reagieren, ohne bitter zu werden.',
    'Bei einem No-Show die eigene Grenze ziehen.',
    'Muster erkennen, ohne jede Absage zu pathologisieren.'
  ],
  story: 'Ich habe einmal auf ein Ghosting mit einer langen Nachricht reagiert, in der ich erklärt habe, wie unhöflich das sei. Ich hatte in jedem Punkt recht und war trotzdem der Idiot in dieser Geschichte.',
  sections: [
    { type: 'text', h: 'Du hast kein Recht auf eine Begründung',
      p: ['Das ist der Satz, an dem sich entscheidet, wie du mit Absagen umgehst. Sie schuldet dir keine Erklärung, kein Feedback und keine zweite Chance zur Verteidigung. Eine Begründung einzufordern verwandelt eine Absage in einen Konflikt — und macht aus einer neutralen Erinnerung eine schlechte.'] },
    { type: 'compare', h: 'Die letzte Nachricht',
      good: { label: 'Angemessen', text: '„Alles klar, danke fürs Sagen. Alles Gute dir.“' },
      bad: { label: 'Passiv-aggressiv', text: '„Kein Problem. Hätte nur nett gefunden, wenn du früher ehrlich gewesen wärst.“ — der Zusatz macht aus einem Abschied eine Rechnung.' } },
    { type: 'list', h: 'Ghosting realistisch einordnen', tone: 'neutral',
      items: [
        'Meistens hat es nichts mit dir zu tun. Parallele Kontakte, ein Ex, keine Kapazität, keine Lust auf ein Gespräch darüber.',
        'Nach einer konkreten Frage ohne Antwort: einmal nach vier bis fünf Tagen nachfassen. Dann Schluss.',
        'Nach dem ersten Date ohne Antwort: gar nicht nachfassen. Die Antwort ist die Stille.',
        'Nach Intimität zu verschwinden ist eine andere Kategorie. Wenn du das tust, siehe Kapitel 11.'
      ] },
    { type: 'note', tone: 'caution', title: 'No-Show',
      text: 'Sie kommt nicht und meldet sich nicht. Warte zwanzig Minuten, schreib eine kurze Nachricht, dann geh. Wenn sich später eine Erklärung findet, entscheidest du, ob du einen zweiten Versuch machst — einmal. Ein zweiter No-Show ist keine Pechsträhne, sondern eine Information über Verlässlichkeit.' },
    { type: 'principle', label: 'Psychologisches Prinzip', h: 'Fakten und Interpretation trennen',
      p: 'Fakt: Sie hat seit drei Tagen nicht geantwortet. Interpretation: Sie fand mich langweilig. Der Fakt ist überprüfbar, die Interpretation ist erfunden — und meistens die unfreundlichste von zehn möglichen. Trenne beides, bevor du reagierst.' },
    { type: 'text', h: 'Muster prüfen, ohne dich abzuwerten',
      p: ['Wenn zwanzig Gespräche an derselben Stelle abbrechen, ist das ein Muster und kein Pech. Dann schaust du dir diese Stelle an: die Einladung, das erste Treffen, der Moment nach dem Date. Das ist Analyse, nicht Selbstkritik. Der Unterschied: Analyse führt zu einer konkreten Änderung, Selbstkritik führt zu einer schlechten Woche.'] }
  ],
  scenario: {
    title: 'Sie kommt nicht',
    brief: ['20:00 verabredet, es ist 20:25. Keine Nachricht, keine Antwort auf deine Frage vor zehn Minuten.', 'Du sitzt allein an der Bar.'],
    signals: [
      { icon: 'clock', tone: 'danger', text: '25 Minuten ohne Nachricht.' },
      { icon: 'message-square', tone: 'caution', text: 'Deine Nachricht ist zugestellt, nicht gelesen.' }
    ],
    options: [
      { letter: 'A', label: 'Du machst', kind: 'klar', outcome: 'good',
        quote: '„Ich geh dann mal — falls was dazwischengekommen ist, kein Problem.“ Dann gehst du.',
        feedback: 'Genau richtig. Kurz, ohne Vorwurf, ohne Drama. Du hältst dir die Tür offen, ohne dich weiter hinhalten zu lassen.',
        deltas: [{ id: 'resilienz', delta: '+7' }, { id: 'klarheit', delta: '+4' }] },
      { letter: 'B', label: 'Du machst', kind: 'rueckzug', outcome: 'good',
        quote: 'Du gehst wortlos und blockierst.',
        feedback: 'Verständlich, aber etwas hart. Zwischen Wartenlassen und Blockieren gibt es die kurze Nachricht. Für deine Resilienz ist A die bessere Übung.',
        deltas: [{ id: 'resilienz', delta: '+3' }] },
      { letter: 'C', label: 'Du machst', kind: 'druck', outcome: 'costly',
        quote: 'Du wartest noch eine Stunde und schreibst dreimal.',
        feedback: 'Du bestrafst dich für ihr Verhalten. Nach einer Nachricht ist die Information vollständig — alles danach ist Warten auf eine Bestätigung, die nicht kommt.',
        deltas: [{ id: 'resilienz', delta: '−6' }, { id: 'selbstsicherheit', delta: '−4' }] },
      { letter: 'D', label: 'Du schreibst', kind: 'grenze', outcome: 'bad',
        quote: '„Danke für gar nichts. Viel Erfolg mit deinem Verhalten.“',
        feedback: 'Sie hat sich schlecht verhalten. Diese Nachricht ändert daran nichts und verschiebt nur, wer sich am Ende schlechter benommen hat.',
        deltas: [{ id: 'resilienz', delta: '−9' }, { id: 'respekt', delta: '−5' }] }
    ]
  },
  interaction: { type: 'facts', title: 'Fakt oder Interpretation?', prompt: 'Trenne, was du weisst, von dem, was du dir erzählst.',
    items: [
      { text: 'Sie hat seit drei Tagen nicht geantwortet.', answer: 'fakt' },
      { text: 'Sie fand mich langweilig.', answer: 'interpretation' },
      { text: 'Sie war gestern Abend online.', answer: 'fakt' },
      { text: 'Sie hat jemand Besseren gefunden.', answer: 'interpretation' },
      { text: 'Sie hat auf meine Einladung nicht reagiert.', answer: 'fakt' },
      { text: 'Ich habe mich beim Date blamiert.', answer: 'interpretation' }
    ] },
  challenge: { title: 'Eine Absage sauber annehmen', text: 'Beim nächsten Nein: eine Zeile, freundlich, ohne Zusatz. Kein „schade“, kein „hätte nur“, keine Frage nach dem Grund. Dann Handy weglegen.' },
  reflection: { question: 'Was erzählst du dir normalerweise, wenn jemand nicht antwortet — und wie viel davon weisst du wirklich?', placeholder: '…' },
  summary: [
    'Du hast kein Recht auf eine Begründung.',
    'Einmal nachfassen nach einer offenen Frage, nie nach einem Date.',
    'Beim No-Show: eine Nachricht, dann gehen.',
    'Fakten und Interpretationen trennen, bevor du reagierst.',
    'Muster analysieren heisst nicht, sich abzuwerten.'
  ],
  quiz: [
    { q: 'Sie sagt ab. Was ist die beste letzte Nachricht?', options: [
      { text: '„Alles klar, danke fürs Sagen.“', correct: true, why: 'Richtig. Kurz, freundlich, ohne Zusatz.' },
      { text: '„Kein Problem, hätte nur nett gefunden …“', why: 'Der Zusatz macht aus einem Abschied eine Rechnung.' },
      { text: 'Nach dem Grund fragen', why: 'Sie schuldet dir keine Begründung.' }
    ] },
    { q: 'Nach dem ersten Date meldet sie sich nicht. Was tust du?', options: [
      { text: 'Einmal nachfragen', why: 'Nach einem Date ist die Stille die Antwort.' },
      { text: 'Nichts', correct: true, why: 'Richtig. Hier ist Nachfassen nicht mehr angebracht.' },
      { text: 'Um ehrliches Feedback bitten', why: 'Klingt reif, ist aber eine Aufgabe, die du ihr gibst.' }
    ] },
    { q: '„Sie fand mich langweilig“ ist …', options: [
      { text: 'Ein Fakt', why: 'Nichts daran ist überprüfbar.' },
      { text: 'Eine Interpretation', correct: true, why: 'Genau — und meistens die unfreundlichste von zehn möglichen.' },
      { text: 'Eine realistische Einschätzung', why: 'Nur wenn sie es gesagt hat. Sonst erfunden.' }
    ] }
  ],
  transfer: 'Nächste Absage: eine Zeile, kein Zusatz, Handy weg.'
},

/* ═══════════ 10 ═══════════ */
{
  number: '10', slug: 'naehe', rail: 'Nähe',
  image: 'assets/chapters/10-naehe.png',
  title: 'Nähe',
  subtitle: 'Annäherung, Übergang und Alkohol',
  duration: '24 Min',
  lead: 'Das heikelste Kapitel des Kurses. Hier entscheidet sich, ob alles davor Kommunikationstraining war oder eine Anleitung zum Übergriff. Lies es zweimal.',
  goals: [
    'Nähe schrittweise und beidseitig entstehen lassen.',
    'Berührung nie als Test gegen Widerstand einsetzen.',
    'Verbale Check-ins natürlich einbauen.',
    'Bei Alkohol die harte Grenze einhalten.',
    'Vor sexueller Nähe über Schutz sprechen.'
  ],
  story: 'Der Moment, der mir am längsten nachgegangen ist, war kein Nein. Es war ein Ja, bei dem ich hinterher nicht sicher war, ob sie es wirklich gemeint hat. Seitdem frage ich lieber einmal zu viel.',
  sections: [
    { type: 'text', h: 'Nähe entsteht wechselseitig oder gar nicht',
      p: ['Die Frage ist nie „Wie komme ich näher?“, sondern „Kommt sie auch?“. Wenn du einen Schritt machst und sie macht keinen, ist der nächste Schritt nicht deiner. Distanz verringert sich abwechselnd — sonst ist es kein Annähern, sondern ein Vorrücken.'] },
    { type: 'note', tone: 'danger', title: 'Berührung ist kein Test',
      text: 'Eine Hand auflegen, um zu sehen, ob sie sie wegnimmt, ist keine Kommunikation, sondern ein Versuch am lebenden Objekt. Wer so vorgeht, erfährt nur, wie gut jemand darin ist, sich zu wehren — nicht, ob er willkommen ist.' },
    { type: 'phrases', h: 'Check-ins, die nichts kaputtmachen',
      note: 'Sie klingen im Kopf peinlicher, als sie im Moment sind. In der Situation wirken sie ruhig und sicher.',
      items: [
        '„Ist das gut so für dich?“',
        '„Ich würde dich gern küssen.“',
        '„Sag, wenn du etwas anders willst.“',
        '„Wir können auch einfach hier sitzen bleiben.“',
        '„Wie geht es dir gerade damit?“'
      ] },
    { type: 'text', h: 'Zögern ist keine Aufgabe',
      p: ['Wenn sie zögert, ist das die Antwort. Nicht ein Hindernis, das mit mehr Charme, mehr Geduld oder einem besseren Moment überwunden wird. Zögern heisst: nicht jetzt. Und „nicht jetzt“ ist bis auf Weiteres ein Nein.',
          'Der richtige nächste Schritt ist immer derselbe: Abstand geben und die Situation entlasten, damit sie sich nicht erklären muss.'] },
    { type: 'split', h: 'Der Übergang an einen privaten Ort',
      good: { title: 'So geht es', items: ['Offen einladen: „Willst du noch mit hoch?“', 'Ein Nein bedeutet, du bringst sie zum Taxi oder zur Bahn', 'Klarstellen, dass Mitkommen nichts festlegt', 'Sie soll wissen, wo sie ist und wie sie wegkommt'] },
      bad: { title: 'So nicht', items: ['„Ich zeig dir nur schnell …“ als Vorwand', 'Letzte Bahn verpassen lassen und dann einladen', 'Bei Alkohol weitermachen, weil sie zugestimmt hat', 'Mitkommen als Zusage für Sex behandeln'] } },
    { type: 'note', tone: 'danger', title: 'Alkohol — die harte Grenze',
      text: 'Bei erkennbarer Beeinträchtigung findet kein sexueller Übergang statt. Nicht vorsichtiger, nicht langsamer — gar nicht. Auch wenn sie zustimmt. Auch wenn sie es initiiert. Wenn du dich fragen musst, ob sie klar entscheiden kann, ist die Frage schon die Antwort. Bring sie sicher nach Hause oder lass sie schlafen. Wenn es morgen noch eine gute Idee ist, ist es morgen noch da.' },
    { type: 'list', h: 'Schutz ist Teil des Gesprächs, nicht der Störung', tone: 'consent',
      items: [
        'Kondom ist Standard, nicht Verhandlungssache. „Ich hab was dabei“ reicht als Satz.',
        'Wer nach Tests fragt, ist nicht misstrauisch, sondern erwachsen.',
        'Wenn kein Schutz da ist, findet kein Geschlechtsverkehr statt. Auch das ist eine Entscheidung, die vorher getroffen wird.',
        'Über Wünsche und Grenzen reden ist kein Stimmungskiller — Unsicherheit ist einer.'
      ] },
    { type: 'text', h: 'Stoppen ohne Diskussion',
      p: ['Wenn sie mittendrin aufhören will, hört ihr auf. Ohne Frage nach dem Warum, ohne „ist alles ok?“ in einem Ton, der eine Erklärung verlangt. Ein „alles gut, komm her“ und eine Decke sind die richtige Reaktion. Alles andere lernt sie als Erfahrung, dass Stoppen anstrengend ist — und das trägt sie zur nächsten Person weiter.'] },
    { type: 'note', tone: 'moral', title: 'Nähe ist kein Abschluss',
      text: 'Ein Date endet nicht mit Sex, sondern mit dem Ende des Abends. Wer Nähe als geschuldetes Ergebnis eines gelungenen Abends denkt, hat den ganzen Kurs falsch verstanden — und wird es früher oder später auch aussprechen.' }
  ],
  scenario: {
    title: 'Sie hat deutlich zu viel getrunken',
    brief: ['Der Abend war gut, ihr habt euch geküsst. Jetzt steht ihr vor deiner Tür.', 'Sie ist merklich betrunken, lacht viel, hat leichte Schwierigkeiten mit dem Schlüssel im Türschloss — und sagt, sie wolle mit hoch.'],
    signals: [
      { icon: 'triangle-alert', tone: 'danger', text: 'Erkennbar eingeschränkte Einwilligungsfähigkeit.' },
      { icon: 'circle-dot', tone: 'caution', text: 'Sie initiiert selbst — das ändert nichts an der Grenze.' },
      { icon: 'clock', tone: 'caution', text: 'Letzte Bahn ist weg.' }
    ],
    options: [
      { letter: 'A', label: 'Du machst', kind: 'klar', outcome: 'good',
        quote: '„Ich bring dich zum Taxi — und wenn du magst, treffen wir uns diese Woche nochmal.“',
        feedback: 'Richtig, und die sauberste Variante. Du nimmst ihr nichts weg: Die Einladung bleibt bestehen, nur nicht heute Nacht. Wenn es morgen noch eine gute Idee ist, ist sie morgen noch da.',
        deltas: [{ id: 'respekt', delta: '+10' }, { id: 'verlaesslichkeit', delta: '+6' }] },
      { letter: 'B', label: 'Du sagst', kind: 'klar', outcome: 'good',
        quote: '„Komm hoch, du kannst auf dem Sofa schlafen. Aber wir machen heute nichts, du hast zu viel getrunken.“',
        feedback: 'Auch richtig, wenn du es genau so sagst und dich daran hältst. Wichtig ist, dass die Grenze vorher ausgesprochen wird — nicht erst, wenn ihr oben seid.',
        deltas: [{ id: 'respekt', delta: '+9' }, { id: 'klarheit', delta: '+6' }] },
      { letter: 'C', label: 'Du machst', kind: 'grenze', outcome: 'bad',
        quote: 'Ihr geht hoch. Du schaust, wie sich das entwickelt.',
        feedback: 'Nein. „Schauen, wie es sich entwickelt“ heisst hier: Du triffst die Entscheidung nicht, sondern lässt die Situation sie treffen — bei einer Person, die gerade nicht klar entscheiden kann. Das ist genau die Konstellation, um die es geht.',
        deltas: [{ id: 'respekt', delta: '−14' }, { id: 'beobachtung', delta: '−6' }] },
      { letter: 'D', label: 'Du sagst', kind: 'rechtfertig', outcome: 'costly',
        quote: '„Bist du sicher? Du hast ganz schön was getrunken.“ — und wenn sie ja sagt, geht ihr hoch.',
        feedback: 'Du hast die richtige Beobachtung gemacht und dann die Verantwortung dafür an sie zurückgegeben. Genau in dieser Situation kann ihr Ja die Frage nicht beantworten. Die Einschätzung bleibt bei dir.',
        deltas: [{ id: 'respekt', delta: '−7' }, { id: 'beobachtung', delta: '−3' }] }
    ]
  },
  interaction: { type: 'traffic', title: 'Übergang: geht das?', prompt: 'Grün heisst weiter, Gelb heisst nachfragen, Rot heisst stoppen.',
    items: [
      { text: 'Sie zieht dich zu sich und sagt „komm her“.', answer: 'gruen', why: 'Eigene Initiative, klare Worte.' },
      { text: 'Sie lässt es geschehen, macht aber nichts von sich aus.', answer: 'gelb', why: 'Passivität ist kein Ja. Nachfragen oder Tempo rausnehmen.' },
      { text: 'Sie war sehr betrunken, sagt aber deutlich ja.', answer: 'rot', why: 'Einwilligungsfähigkeit geht vor Zustimmung. Kein Übergang.' },
      { text: 'Sie ist mitgekommen, sagt zum Thema aber nichts.', answer: 'gelb', why: 'Mitkommen ist keine Zusage. Kläre es dort, nicht im Kopf.' },
      { text: 'Sie sagt „warte kurz“.', answer: 'rot', why: 'Sofort anhalten. Ob es weitergeht, bestimmt sie.' },
      { text: 'Kein Kondom da, sie sagt, sei egal.', answer: 'rot', why: 'Kein Schutz, kein Geschlechtsverkehr. Diese Entscheidung triffst du vorher.' }
    ] },
  challenge: { title: 'Einen Satz üben', text: 'Sag den Satz „Ich würde dich gern küssen“ dreimal laut vor dem Spiegel, bis er sich normal anfühlt. Das klingt albern und ist trotzdem der Grund, warum die meisten Männer stattdessen einfach vorrücken: Sie haben den Satz nie gesagt.' },
  reflection: { question: 'Was hindert dich daran, in dieser Situation zu fragen — ehrlich?', placeholder: 'Ich habe Angst, dass …' },
  summary: [
    'Nähe entsteht wechselseitig. Wenn sie keinen Schritt macht, machst du auch keinen.',
    'Berührung ist nie ein Test.',
    'Zögern ist eine Antwort, keine Aufgabe.',
    'Bei Alkohol: kein Übergang. Auch bei Zustimmung.',
    'Schutz wird vorher geklärt, nicht im Moment verhandelt.',
    'Stoppen ohne Diskussion, ohne Frage nach dem Warum.'
  ],
  quiz: [
    { q: 'Sie ist stark betrunken und initiiert selbst. Was gilt?', options: [
      { text: 'Sie hat zugestimmt, also ist es in Ordnung', why: 'Zustimmung setzt Einwilligungsfähigkeit voraus. Die fehlt hier.' },
      { text: 'Kein sexueller Übergang, unabhängig von ihrer Zustimmung', correct: true, why: 'Richtig. Die Einschätzung bleibt bei dir und ist nicht delegierbar.' },
      { text: 'Nachfragen und dann entscheiden', why: 'Ihre Antwort kann die Frage in diesem Zustand nicht beantworten.' }
    ] },
    { q: 'Was bedeutet es, wenn sie zögert?', options: [
      { text: 'Sie ist unsicher, du kannst sie beruhigen', why: 'Beruhigen wird schnell zu Überreden.' },
      { text: 'Nicht jetzt — also nein', correct: true, why: 'Genau. Und der nächste Schritt ist Abstand, nicht Geduld.' },
      { text: 'Sie will, dass du die Führung übernimmst', why: 'Das ist eine Filmszene, keine verlässliche Lesart.' }
    ] },
    { q: 'Sie ist mit zu dir gekommen. Was heisst das?', options: [
      { text: 'Sie will Sex', why: 'Eine Einladung in die Wohnung ist keine Zusage.' },
      { text: 'Sie will nicht allein sein', why: 'Auch nur eine Vermutung.' },
      { text: 'Nichts Bestimmtes — das klärt sich vor Ort im Gespräch', correct: true, why: 'Richtig. Mitkommen legt nichts fest.' }
    ] },
    { q: 'Sie will mittendrin aufhören. Deine Reaktion?', options: [
      { text: 'Fragen, was los ist', why: 'Verlangt eine Erklärung, die sie nicht schuldet.' },
      { text: 'Aufhören, keine Frage, Situation entlasten', correct: true, why: 'Richtig. Stoppen darf nicht anstrengend sein.' },
      { text: 'Kurz Pause machen und dann weiterschauen', why: 'Das behandelt den Stopp als Unterbrechung statt als Ende.' }
    ] }
  ],
  transfer: 'Vor dem nächsten körperlichen Schritt: den Satz sagen, nicht den Schritt machen.'
}

];
