window.FBChaptersD = [

/* ═══════════ 07 ═══════════ */
{
  number: '07', slug: 'date', rail: 'Das Date',
  title: 'Das Date',
  subtitle: 'Ort, Länge, Ausstieg',
  duration: '17 Min',
  lead: 'Ein erstes Treffen ist kein Bewerbungsgespräch und kein Abendprogramm. Es ist eine Stunde, in der ihr beide herausfindet, ob ihr eine zweite wollt.',
  goals: [
    'Einen Ort wählen, der ein kurzes Treffen erlaubt.',
    'Das Date bewusst kurz halten und bei Interesse verlängern.',
    'Gesprächsbalance halten statt zu unterhalten.',
    'Freundlich aussteigen, wenn es nicht passt.'
  ],
  story: 'Mein schlechtestes Date war ein Fünfgänger. Wir wussten beide nach zwanzig Minuten, dass nichts läuft, und haben dann noch zwei Stunden höflich zusammen gegessen. Seitdem: ein Getränk.',
  sections: [
    { type: 'list', h: 'Ein Getränk schlägt ein Abendessen', tone: 'accent',
      items: [
        'Kurz, günstig, ohne Verpflichtung. Beide können nach einer Stunde gehen, ohne dass es unhöflich wirkt.',
        'Kein Sitzenbleiben bis zur Rechnung, wenn es nicht passt.',
        'Öffentlich und gut erreichbar — auch für ihren Heimweg.',
        'Nicht zu laut. Wenn ihr euch anschreien müsst, entsteht kein Gespräch.',
        'Nebeneinander oder über Eck ist entspannter als frontal gegenüber.'
      ] },
    { type: 'text', h: 'Wer zahlt',
      p: ['Wenn du eingeladen hast, bietest du an zu zahlen. Ohne Aufhebens, ohne Erwartung und ohne es später zu erwähnen. Wenn sie teilen will, lässt du sie teilen — ein Insistieren macht daraus eine Schuld. Eine Einladung ist kein Vorschuss auf irgendetwas.'] },
    { type: 'note', tone: 'danger', title: 'Investition ist kein Anspruch',
      text: 'Zeit, Geld und Aufwand erzeugen keinen Anspruch auf Nähe. Wer so denkt, sagt es früher oder später auch — und in dem Moment ist der Abend vorbei. Zu Recht.' },
    { type: 'principle', label: 'Psychologisches Prinzip', h: 'Gesprächsbalance',
      p: 'Ein gutes Gespräch ist ungefähr hälftig. Wer permanent erzählt, hört auf zuzuhören; wer nur fragt, führt ein Interview. Die einfachste Korrektur: Wenn du drei Sätze am Stück geredet hast, stell eine Frage. Wenn du drei Fragen gestellt hast, erzähl etwas von dir.' },
    { type: 'compare', h: 'Beenden',
      bad: { label: 'Vertröstung', text: '„War schön, wir machen das bald wieder!“ — gesagt, obwohl du weisst, dass du dich nicht mehr meldest. Sie wartet dann drei Tage umsonst.' },
      good: { label: 'Ehrlich', text: '„Ich fand den Abend angenehm, aber ich glaube, es passt zwischen uns nicht. Danke, dass du da warst.“ — unangenehm für zehn Sekunden, fair für beide.' } },
    { type: 'list', h: 'Verlängern nur bei beidseitigem Interesse', tone: 'neutral',
      items: [
        'Sie schaut nicht aufs Handy, stellt eigene Fragen, bestellt nochmal — dann kannst du fragen, ob ihr weiterzieht.',
        'Sie wird einsilbig, checkt die Zeit, die Jacke bleibt an — dann beendest du es, bevor sie es tun muss.',
        'Im Zweifel früher beenden. Ein zu kurzes gutes Date ist besser als ein zu langes mittelmässiges.'
      ] }
  ],
  scenario: {
    title: 'Nach fünfzig Minuten',
    brief: ['Das Gespräch läuft solide, aber ohne Funken. Sie ist freundlich, aber stellt kaum eigene Fragen.', 'Die Gläser sind leer. Der Kellner schaut herüber.'],
    signals: [
      { icon: 'circle-alert', tone: 'caution', text: 'Wenig Gegenfragen von ihrer Seite.' },
      { icon: 'clock', tone: 'caution', text: 'Natürlicher Ausstiegspunkt erreicht.' },
      { icon: 'circle-dot', tone: 'consent', text: 'Freundlich, aber ohne erkennbaren Sog.' }
    ],
    options: [
      { letter: 'A', label: 'Du sagst', kind: 'klar', outcome: 'good',
        quote: '„Ich lass es für heute gut sein — hat mich gefreut, dich kennenzulernen.“',
        feedback: 'Souverän. Du beendest, bevor es zäh wird, und lässt ihr die Würde, nicht sitzengelassen worden zu sein. Wenn doch Interesse da war, meldet sie sich.',
        deltas: [{ id: 'klarheit', delta: '+6' }, { id: 'beobachtung', delta: '+4' }] },
      { letter: 'B', label: 'Du fragst', kind: 'initiative', outcome: 'good',
        quote: '„Ich hätte noch Zeit für ein zweites — oder wir lassen es hier gut sein. Beides passt mir.“',
        feedback: 'Ehrlich und ohne Druck. Du gibst ihr eine echte Wahl statt sie in eine Verlängerung zu manövrieren. Ihre Antwort ist dann auch eine echte Information.',
        deltas: [{ id: 'klarheit', delta: '+5' }, { id: 'respekt', delta: '+4' }] },
      { letter: 'C', label: 'Du machst', kind: 'druck', outcome: 'costly',
        quote: 'Du bestellst ungefragt zwei weitere Getränke.',
        feedback: 'Du triffst eine Entscheidung für sie. Jetzt müsste sie aktiv ablehnen, um zu gehen — das ist eine Hürde, die du gerade selbst aufgebaut hast.',
        deltas: [{ id: 'respekt', delta: '−5' }, { id: 'beobachtung', delta: '−3' }] },
      { letter: 'D', label: 'Du sagst', kind: 'rechtfertig', outcome: 'costly',
        quote: '„Sorry, war ich zu langweilig? Sonst können wir auch noch woanders hin.“',
        feedback: 'Du bittest um Bewertung und bietest gleichzeitig eine Rettung an. Beides schwächt — und macht sie für den Verlauf des Abends verantwortlich.',
        deltas: [{ id: 'selbstsicherheit', delta: '−5' }] }
    ]
  },
  interaction: { type: 'checklist', title: 'Date-Plan', prompt: 'Vor dem nächsten Treffen abhaken.',
    items: ['Öffentlicher, gut erreichbarer Ort', 'Ein Getränk, kein Menü', 'Nicht zu laut', 'Für sie ohne Umweg heimzukommen', 'Zehn Minuten Puffer für die Anreise', 'Kein Programm nach dem Date geplant, das dich unter Zeitdruck setzt'] },
  challenge: { title: 'Dein Standardort', text: 'Such dir einen Ort, den du für erste Treffen immer nimmst: ruhig, öffentlich, gut erreichbar, kein Menüzwang. Wenn der Ort feststeht, fällt eine Entscheidung weg — und du wirkst sicherer, weil du dich auskennst.' },
  reflection: { question: 'Wann hast du zuletzt ein Date länger laufen lassen, als beide wollten? Was hat dich davon abgehalten, es zu beenden?', placeholder: '…' },
  summary: [
    'Ein Getränk, eine Stunde, öffentlich.',
    'Eingeladen heisst angeboten zu zahlen — ohne Erwartung.',
    'Investition erzeugt keinen Anspruch.',
    'Verlängern nur bei sichtbarem beidseitigem Interesse.',
    'Ehrlich beenden schlägt freundliche Vertröstung.'
  ],
  quiz: [
    { q: 'Warum ein Getränk statt Abendessen?', options: [
      { text: 'Es ist günstiger', why: 'Stimmt, ist aber nicht der Hauptgrund.' },
      { text: 'Beide können nach einer Stunde gehen, ohne unhöflich zu sein', correct: true, why: 'Richtig. Der Ausstieg ist eingebaut.' },
      { text: 'Es wirkt lockerer', why: 'Nebeneffekt, nicht der Kern.' }
    ] },
    { q: 'Sie will die Rechnung teilen. Was tust du?', options: [
      { text: 'Darauf bestehen zu zahlen', why: 'Insistieren macht aus der Einladung eine Schuld.' },
      { text: 'Teilen lassen', correct: true, why: 'Richtig. Angeboten hast du, entschieden hat sie.' },
      { text: 'Sagen, sie könne beim nächsten Mal zahlen', why: 'Setzt ein nächstes Mal voraus, das noch nicht vereinbart ist.' }
    ] },
    { q: 'Das Date läuft solide, aber ohne Funken. Was ist die beste Option?', options: [
      { text: 'Verlängern und schauen, ob es noch kommt', why: 'Selten. Meistens wird es nur zäher.' },
      { text: 'Freundlich beenden', correct: true, why: 'Richtig. Kurz und gut schlägt lang und mittelmässig.' },
      { text: 'Fragen, ob du langweilig warst', why: 'Bittet um eine Bewertung und schwächt.' }
    ] }
  ],
  transfer: 'Nächstes erstes Treffen: ein Getränk, eine Stunde, fester Ort.'
},

/* ═══════════ 08 ═══════════ */
{
  number: '08', slug: 'fehler', rail: 'Der grösste Fehler',
  title: 'Der grösste Fehler',
  subtitle: 'Warum das Bedürfnis nach Sex der schnellste Weg ist, ihn nicht zu haben',
  duration: '14 Min',
  lead: 'Der grösste Fehler auf diesem Weg ist banal: unbedingt Sex haben zu wollen. Nichts riecht schneller nach Verzweiflung. Und nichts erzeugt mehr Druck.',
  goals: [
    'Verstehen, warum ein Bedürfnis nach aussen als Druck ankommt.',
    'Ein Angebot machen, ohne ein Ergebnis zu erwarten.',
    'Typische Rationalisierungen bei sich selbst erkennen.',
    'Eine Absage als Datenpunkt behandeln.'
  ],
  story: 'Ich erinnere mich an ein Date, bei dem ich den Abend im Kopf schon fertig hatte, bevor er angefangen hat. Sie hat es gemerkt. Ich dachte damals, es lag an meinem Hemd. Es lag an meiner Erwartung.',
  sections: [
    { type: 'text', h: 'Du hast es nicht nötig',
      p: ['Du kannst Interesse zeigen. Du kannst ein Angebot machen. Danach entscheidet sie — frei, ohne dass du nachschiebst. Wenn sie nicht will, ist das in Ordnung. Eine Absage ist kein persönliches Scheitern und keine Aufgabe, die es zu lösen gilt.',
          'Der Unterschied zwischen souverän und verzweifelt liegt nicht im Ergebnis, sondern darin, ob du vorher schon eines erwartet hast.'] },
    { type: 'compare', h: 'Dieselbe Absicht, zwei Wirkungen',
      good: { label: 'Druckfrei', text: '„Ich würde dich gern küssen. Sag einfach nein, wenn nicht.“' },
      bad: { label: 'Druck', text: '„Komm schon, jetzt sei nicht so. Ein Kuss ist doch nichts.“' } },
    { type: 'list', h: 'Rationalisierungen, die du bei dir erkennen solltest', tone: 'danger',
      items: [
        '„Sie meint es nicht so.“ — Doch. Sie meint genau das, was sie sagt.',
        '„Sie will nur, dass ich hartnäckig bin.“ — Nein. Das ist eine Filmszene, keine Realität.',
        '„Beim letzten Mal war sie auch erst unsicher.“ — Frühere Situationen sind keine Erlaubnis für diese.',
        '„Ich habe den ganzen Abend investiert.“ — Investition ist kein Anspruch.',
        '„Wenn ich jetzt aufhöre, war alles umsonst.“ — Der Abend war, was er war. Er wird durch Druck nicht besser.'
      ] },
    { type: 'note', tone: 'moral', title: 'Das sitzt bei mir inzwischen. Genau das ist das Unbequeme.',
      text: 'Ich arbeite als Verkaufstrainer. Ich erkenne die Muster, weil ich sie beruflich benutze — und ich muss nicht mehr darüber nachdenken. Aber dieselbe Technik, die ein Gespräch offen macht, kann es auch gezielt in eine Richtung schieben. Der Unterschied liegt allein in der Absicht. Und je automatischer das läuft, desto weniger merkst du selbst, auf welcher Seite du gerade stehst.' },
    { type: 'text', h: 'Kurzfristiger Gewinn, langfristige Rechnung',
      p: ['Druck funktioniert manchmal. Das ist der unangenehme Teil. Er funktioniert bei Menschen, die schlecht Nein sagen können — und das sind selten die, mit denen du danach noch reden willst. Was du kurzfristig gewinnst, zahlst du in Ruf, in Wiederholungen und darin, wie du am nächsten Morgen über dich selbst denkst.'] }
  ],
  scenario: {
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
      { letter: 'A', label: 'Du sagst', kind: 'klar', outcome: 'good',
        quote: '„Ich sag dir mal was Direktes: ich würde dich gern küssen. Und ein Nein ist völlig okay.“',
        feedback: 'Klar, respektvoll, druckfrei. Sie kann echt entscheiden — und genau das macht die Situation sicher. Wenn sie nein sagt, ist das Thema vom Tisch.',
        deltas: [{ id: 'klarheit', delta: '+7' }, { id: 'respekt', delta: '+5' }] },
      { letter: 'B', label: 'Du machst', kind: 'grenze', outcome: 'bad',
        quote: 'Du rutschst nochmal näher und legst die Hand auf ihr Knie. Reden kann man später.',
        feedback: 'Sie hat sich vorher schon zurückgelehnt. Das war ein Signal, kein Zufall. Körperlich vorgehen, ohne die Ablehnung zu lesen, erzeugt Druck — und übergeht ihre Grenze.',
        deltas: [{ id: 'respekt', delta: '−12' }, { id: 'beobachtung', delta: '−6' }] },
      { letter: 'C', label: 'Du bleibst', kind: 'uneindeutig', outcome: 'costly',
        quote: 'Du bleibst maximal nett, machst Komplimente und hoffst, dass sie irgendwann anfängt.',
        feedback: 'Funktioniert manchmal. Aber du versteckst dein Interesse hinter Freundlichkeit und schiebst die Entscheidung ihr zu. Das ist kein Respekt, das ist Auslagern.',
        deltas: [{ id: 'initiative', delta: '−5' }, { id: 'klarheit', delta: '−4' }] },
      { letter: 'D', label: 'Du sagst', kind: 'rueckzug', outcome: 'good',
        quote: '„Ich hol uns noch was zu trinken — magst du?“ und lässt das Thema für den Moment.',
        feedback: 'Auch richtig. Du hast das Zurücklehnen gelesen und nimmst Tempo raus, ohne die Situation zu beenden. Wenn sie von selbst wieder näher kommt, ist die Frage später sinnvoller als jetzt.',
        deltas: [{ id: 'beobachtung', delta: '+6' }, { id: 'selbstsicherheit', delta: '+3' }] }
    ]
  },
  interaction: { type: 'checklist', title: 'Transfer — ausserhalb des Kurses', prompt: 'Niemand kontrolliert das. Deshalb funktioniert es nur ehrlich.',
    items: ['Formuliere deine aktuelle Datingabsicht in einem ehrlichen Satz.', 'Führe ein Gespräch, ohne ein bestimmtes Ergebnis zu erwarten.', 'Definiere drei nonverbale Signale, bei denen du sofort Abstand nimmst.', 'Übe, eine Absage anzunehmen — ohne Nachfrage, ohne Erklärung.', 'Erkenne eine Situation, in der du übertrieben freundlich warst, statt dein Interesse zu sagen.'] },
  challenge: { title: 'Ein Gespräch ohne Ziel', text: 'Führe diese Woche ein Date oder ein längeres Gespräch, bei dem du dir vorher bewusst vornimmst: Ich will heute nichts erreichen. Achte darauf, wie sich dein eigenes Verhalten dadurch ändert.' },
  reflection: { question: 'Welche der fünf Rationalisierungen kennst du von dir selbst?', placeholder: '…' },
  summary: [
    'Das Bedürfnis ist sichtbarer als du denkst.',
    'Angebot machen, Entscheidung überlassen, nicht nachschieben.',
    'Rationalisierungen sind das Warnsignal, nicht die Erklärung.',
    'Druck funktioniert manchmal — bei Menschen, die schlecht Nein sagen können.'
  ],
  quiz: [
    { q: 'Was ist der eigentliche Fehler?', options: [
      { text: 'Zu früh Interesse zeigen', why: 'Interesse zeigen ist gut. Es geht um die Erwartung dahinter.' },
      { text: 'Das Ergebnis schon vor dem Abend zu brauchen', correct: true, why: 'Richtig. Das erzeugt den Druck, den sie spürt.' },
      { text: 'Nicht direkt genug sein', why: 'Direktheit ist Teil der Lösung, nicht das Problem.' }
    ] },
    { q: '„Ich habe den ganzen Abend investiert“ — was ist das?', options: [
      { text: 'Ein legitimer Gedanke', why: 'Gedacht wird viel. Als Begründung für Nachdruck ist es eine Rationalisierung.' },
      { text: 'Eine Rationalisierung', correct: true, why: 'Genau. Investition erzeugt keinen Anspruch.' },
      { text: 'Ein Zeichen von Interesse', why: 'Es ist ein Zeichen für eine Erwartungshaltung.' }
    ] },
    { q: 'Bei wem funktioniert Druck am ehesten?', options: [
      { text: 'Bei unentschlossenen Menschen', why: 'Zu harmlos formuliert.' },
      { text: 'Bei Menschen, die schlecht Nein sagen können', correct: true, why: 'Richtig — und genau deshalb ist es keine Erfolgsgeschichte.' },
      { text: 'Bei niemandem', why: 'Wäre bequem, ist aber nicht ehrlich. Er funktioniert manchmal.' }
    ] }
  ],
  transfer: 'Ein Gespräch führen, bei dem dir das Ergebnis vorher egal ist.'
}

];
