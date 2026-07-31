window.FBChaptersF = [

/* ═══════════ 11 ═══════════ */
{
  number: '11', slug: 'danach', rail: 'Danach',
  title: 'Danach',
  subtitle: 'Erwartungen, Wiederholung und sauber beenden',
  duration: '19 Min',
  special: 'chatsim',
  lead: 'Der Teil, den fast niemand vorbereitet. Der Sex ist vorbei, und jetzt entscheidet sich, ob du ein anständiger Mensch warst oder nur bis zu dem Punkt.',
  goals: [
    'Nach dem Treffen ehrlich kommunizieren, ohne falsche Versprechen.',
    'Unterschiedliche Erwartungen früh benennen.',
    'Auf eine direkte Frage nach anderen Kontakten ehrlich antworten.',
    'Etwas beenden, ohne zu verschwinden.'
  ],
  story: 'Ich habe zweimal jemanden warmgehalten, weil ich mich nicht entscheiden wollte. Beide Male hat es länger gedauert und mehr kaputtgemacht, als wenn ich am zweiten Tag ehrlich gewesen wäre.',
  sections: [
    { type: 'text', h: 'Der Abgang ist wichtiger als der Morgen danach',
      p: ['Für viele ist Übernachten gar nicht das Ziel. Genau das ist der unangenehmste Moment im ganzen Ablauf: Du willst nach Hause, sie hat mit Bleiben gerechnet.',
          'Die Lösung ist banal und trotzdem selten: Sag es vorher. „Ich bleibe nicht über Nacht“ ist eine Information, keine Kränkung — solange sie vor dem Sex kommt und nicht danach. Danach ist derselbe Satz eine Zurückweisung im ungünstigsten Moment.'] },
    { type: 'compare', h: 'Dieselbe Absicht, zwei Zeitpunkte',
      good: { label: 'Vorher', text: '„Ich sag dir gleich: Ich schlafe meistens lieber zu Hause. Das hat nichts mit dir zu tun.“' },
      bad: { label: 'Danach', text: '„Ich fahr dann mal.“ — dieselbe Handlung, aber jetzt liest sie sich als Bewertung dessen, was gerade war.' } },
    { type: 'principle', label: 'Psychologisches Prinzip', h: 'Die Macht der Erwartungen',
      p: 'Erwartungen dürfen Orientierung schaffen, aber nicht durch falsche Versprechen entstehen. Die Regel ist einfach: Dein Verhalten muss zu dem passen, was du angekündigt hast. Wer Unklarheit absichtlich stehen lässt, damit jemand dranbleibt, benutzt sie als Bindungsmittel — und das ist die Technik, die dieser Kurs kritisiert.' },
    { type: 'list', h: 'Die Nachricht danach', tone: 'neutral',
      items: [
        'Kurz, ehrlich, ohne Versprechen, das du nicht halten willst.',
        '„War schön mit dir“ ist gut. „Wir machen das bald wieder“ nur, wenn du es meinst.',
        'Wenn du kein Wiedersehen willst, sag es innerhalb von zwei Tagen — nicht nach zwei Wochen Funkstille.',
        'Kein Ghosting nach Intimität. Das ist die eine Regel, an der man Charakter erkennt.'
      ] },
    { type: 'phrases', h: 'Sätze für unangenehme Momente',
      note: 'Alle vier sind unbequem in dem Moment und einfacher als jede Alternative danach.',
      items: [
        '„Ich hab es gern gemacht, aber ich suche nichts Festes. Ich wollte, dass du das weisst.“',
        '„Du fragst, ob da noch jemand ist — ja, ich treffe im Moment auch andere.“',
        '„Ich merke, dass wir Unterschiedliches suchen. Ich glaube, es ist fairer, wenn wir es lassen.“',
        '„Ich hab mich gerade dabei erwischt, dass ich mehr will als abgemacht. Wollte ich sagen, bevor es komisch wird.“'
      ] },
    { type: 'note', tone: 'moral', title: 'Warmhalten ist die feige Variante',
      text: 'Jemanden nicht abzusagen, weil man sich die Option offenhalten will, ist keine Freundlichkeit. Es ist eine Entscheidung zulasten von jemandem, der die Lage nicht kennt. Wenn du merkst, dass du eine Antwort seit Tagen vor dir herschiebst, ist die Antwort meistens schon klar.' },
    { type: 'text', h: 'Wenn du selbst Gefühle entwickelst',
      p: ['Der Fall kommt garantiert, und die meisten sind darauf schlechter vorbereitet als auf den umgekehrten. Die Regel ist dieselbe wie in die andere Richtung: früh sagen, einmal, ohne Druck. Wenn sie etwas anderes will, gilt für dich, was du von ihr erwartet hättest — es annehmen und nicht verhandeln.'] },
    { type: 'list', h: 'Wiederkehrende Kontakte', tone: 'consent',
      items: [
        'Auch bei einem lockeren Arrangement gilt Consent bei jedem einzelnen Mal neu.',
        'Exklusivität ist nie stillschweigend vereinbart. Wenn du es annimmst, sprich es aus.',
        'Tests gehören dazu, wenn du mehrere Kontakte hast. Ohne Ausrede.',
        'Wenn es endet: einmal sagen, dass es endet. Nicht auslaufen lassen.'
      ] }
  ],
  scenario: {
    title: 'Sie fragt, ob da noch jemand ist',
    brief: ['Ihr habt euch dreimal getroffen, zweimal miteinander geschlafen. Nichts war je definiert.', 'Sie schreibt: „Kurze Frage, weil ichs wissen will: Triffst du gerade noch andere?“ Du triffst noch zwei andere.'],
    signals: [
      { icon: 'message-square', tone: 'consent', text: 'Direkte Frage, ruhig formuliert.' },
      { icon: 'scale', tone: 'caution', text: 'Nichts war definiert — sie fragt, weil sie es klären will.' }
    ],
    options: [
      { letter: 'A', label: 'Du antwortest', kind: 'klar', outcome: 'good',
        quote: '„Ja, ich treffe im Moment auch andere. Ich hab nichts anderes gesagt, aber du sollst es von mir wissen und nicht raten müssen.“',
        feedback: 'Die einzige Antwort, die du in einem Monat noch vertreten kannst. Unangenehm für zehn Sekunden. Alles andere kostet später mehr — dich und sie.',
        deltas: [{ id: 'klarheit', delta: '+10' }, { id: 'verlaesslichkeit', delta: '+8' }] },
      { letter: 'B', label: 'Du antwortest', kind: 'uneindeutig', outcome: 'costly',
        quote: '„Nichts Ernstes. Warum fragst du?“',
        feedback: 'Zwei Ausweichmanöver in einem Satz: eine Relativierung und eine Gegenfrage, die sie in die Rechtfertigung schiebt. Sie hat eine klare Frage gestellt und verdient eine klare Antwort.',
        deltas: [{ id: 'klarheit', delta: '−7' }, { id: 'respekt', delta: '−3' }] },
      { letter: 'C', label: 'Du antwortest', kind: 'grenze', outcome: 'bad',
        quote: '„Nein, nur dich.“',
        feedback: 'Das ist die Lüge, die am teuersten wird. Sie richtet ihr Verhalten danach aus — auch beim Thema Schutz. Und sie wird es irgendwann erfahren.',
        deltas: [{ id: 'verlaesslichkeit', delta: '−12' }, { id: 'respekt', delta: '−8' }] },
      { letter: 'D', label: 'Du antwortest', kind: 'klar', outcome: 'good',
        quote: '„Ja. Und wenn du das nicht willst, verstehe ich das — dann sollten wir kurz reden, was das für uns heisst.“',
        feedback: 'Ehrlich plus Verantwortung für die Konsequenz. Du überlässt ihr die Entscheidung, statt sie mit der Information allein zu lassen.',
        deltas: [{ id: 'klarheit', delta: '+9' }, { id: 'respekt', delta: '+6' }] }
    ]
  },
  interaction: { type: 'improve', title: 'Beenden ohne Verschwinden', prompt: 'Zwei Wege, dasselbe zu sagen.',
    rounds: [
      { bad: 'Gar nicht mehr antworten.', good: '„Ich hab es gern gemacht, glaube aber nicht, dass es weitergehen sollte. Wollte es dir sagen statt einfach still zu werden.“', why: 'Nach Intimität zu verschwinden ist die eine Sache, die man nicht mehr geraderücken kann.' },
      { bad: '„Melde mich, wenn ich mehr Zeit hab.“', good: '„Ich suche gerade nichts, was regelmässig wird. Das wird sich auch nicht ändern.“', why: 'Vertröstung hält jemanden in einer Warteschleife, die du nie auflösen wirst.' },
      { bad: '„Du warst super, es liegt an mir.“', good: '„Es passt für mich nicht — das hat nichts damit zu tun, dass mit dir etwas nicht stimmt.“', why: 'Die Floskel ist erkennbar. Der zweite Satz sagt dasselbe, ohne zu behandeln, als wäre sie dumm.' }
    ] },
  challenge: { title: 'Einen Satz vorbereiten', text: 'Formuliere jetzt den Satz, den du sagst, wenn du kein Wiedersehen willst. Ein Satz, ehrlich, ohne Floskel. Wer ihn vorbereitet hat, verschwindet nicht — weil Verschwinden meistens nur Sprachlosigkeit ist.' },
  reflection: { question: 'Hast du schon einmal jemanden warmgehalten? Was hätte dich davon abgehalten, es früher zu klären?', placeholder: '…' },
  summary: [
    'Sag vorher, wenn du nicht bleibst. Danach ist derselbe Satz eine Zurückweisung.',
    'Dein Verhalten muss zu dem passen, was du angekündigt hast.',
    'Auf die direkte Frage nach anderen Kontakten: ehrlich, immer.',
    'Kein Ghosting nach Intimität.',
    'Warmhalten ist eine Entscheidung zulasten von jemandem, der die Lage nicht kennt.'
  ],
  quiz: [
    { q: 'Wann sagst du, dass du nicht über Nacht bleibst?', options: [
      { text: 'Vorher', correct: true, why: 'Richtig. Dann ist es eine Information statt einer Bewertung.' },
      { text: 'Danach, beim Anziehen', why: 'Derselbe Satz, aber im ungünstigsten Moment — er liest sich als Zurückweisung.' },
      { text: 'Gar nicht, einfach gehen', why: 'Die schlechteste Variante von allen.' }
    ] },
    { q: 'Sie fragt direkt, ob du andere triffst. Du triffst andere.', options: [
      { text: 'Verneinen, um nichts kaputtzumachen', why: 'Die teuerste Lüge — sie richtet auch ihr Schutzverhalten danach aus.' },
      { text: 'Ehrlich antworten', correct: true, why: 'Richtig. Auf eine direkte Frage gehört eine direkte Antwort.' },
      { text: 'Relativieren und zurückfragen', why: 'Schiebt sie in die Rechtfertigung.' }
    ] },
    { q: 'Du willst kein Wiedersehen. Was tust du?', options: [
      { text: 'Nicht mehr antworten', why: 'Ghosting nach Intimität. Nicht mehr korrigierbar.' },
      { text: 'Innerhalb von zwei Tagen einmal ehrlich sagen', correct: true, why: 'Richtig. Kurz unangenehm, danach für beide erledigt.' },
      { text: '„Melde mich, wenn ich Zeit habe“', why: 'Vertröstung — eine Warteschleife ohne Auflösung.' }
    ] },
    { q: 'Bei einem lockeren, wiederkehrenden Arrangement gilt Consent …', options: [
      { text: 'Als grundsätzlich geklärt', why: 'Nein. Frühere Zustimmung gilt nicht weiter.' },
      { text: 'Bei jedem Mal neu', correct: true, why: 'Richtig — auch in einer Beziehung oder einem festen Arrangement.' },
      { text: 'Nur beim ersten Mal', why: 'Genau die Annahme, vor der Kapitel 02 warnt.' }
    ] }
  ],
  transfer: 'Den Abschiedssatz formulieren, bevor du ihn brauchst.'
},

/* ═══════════ 12 ═══════════ */
{
  number: '12', slug: 'uebrig', rail: 'Was übrig bleibt',
  title: 'Was übrig bleibt',
  subtitle: 'Der Teil, den ich am längsten nicht aufschreiben wollte',
  duration: '16 Min',
  lead: 'Irgendwann funktioniert das Werkzeug besser als du selbst. Du weisst nach zwei Sätzen, wie ein Abend endet. Und du merkst, dass dich das nicht mehr freut.',
  goals: [
    'Unterscheiden, welche Fähigkeiten du wirklich gelernt hast.',
    'Erfolg und Verbindung auseinanderhalten.',
    'Das eigene Muster benennen.',
    'Entscheiden, welche Version deines Verhaltens bleiben soll.'
  ],
  story: 'Der Punkt, an dem es gekippt ist, war kein Drama. Ich sass an einem guten Abend mit einer interessanten Frau und habe mich dabei erwischt, wie ich innerlich abgehakt habe, an welcher Stelle wir waren. Nicht zugehört — abgehakt.',
  sections: [
    { type: 'text', h: 'Was der Kurs dir tatsächlich beigebracht hat',
      p: ['Nicht, Frauen zu bekommen. Sondern: klar zu sagen, was du willst. Ein Nein anzunehmen. Ein Gespräch zu führen, ohne es zu steuern. Dich zu pflegen. Initiative zu zeigen, ohne eine Reaktion zu erzwingen.',
          'Das sind Fähigkeiten, die in jedem Teil deines Lebens funktionieren. Dass sie hier am Dating gelernt wurden, ist fast ein Zufall.'] },
    { type: 'split', h: 'Erfolg und Verbindung',
      good: { title: 'Erfolg', items: ['Messbar', 'Wiederholbar', 'Gibt kurzfristig Bestätigung', 'Gewöhnt sich schnell ab', 'Funktioniert auch ohne Interesse an der Person'] },
      bad: { title: 'Verbindung', items: ['Nicht messbar', 'Nicht planbar', 'Braucht Zeit ohne Ergebnis', 'Verträgt keine Technik', 'Setzt voraus, dass du gesehen wirst'] } },
    { type: 'text', h: 'Die Gewöhnung',
      p: ['Aufmerksamkeit wirkt wie alles, woran man sich gewöhnt: Die erste Bestätigung ist gross, die zwanzigste ist normal, die fünfzigste fehlt nur noch, wenn sie ausbleibt. Das ist der Punkt, an dem manche anfangen, mehr zu brauchen — nicht weil sie mehr wollen, sondern weil dieselbe Menge nicht mehr reicht.'] },
    { type: 'note', tone: 'moral', title: 'Die Menschen, die dabei verletzt wurden',
      text: 'Es gibt sie. Bei mir mindestens vier, von denen ich weiss. Nicht durch Übergriffe — durch Unklarheit, durch Warmhalten, durch Sätze, die ich stehen liess, weil sie nützlich waren. Man kann das nicht rückwirkend reparieren. Man kann nur aufhören, es weiter zu tun.' },
    { type: 'text', h: 'Einsamkeit trotz vieler Kontakte',
      p: ['Das ist die Rechnung, die am spätesten kommt. Viele Kontakte fühlen sich lange wie ein volles Leben an. Bis zu einem Abend, an dem du merkst, dass es niemanden gibt, den du anrufen würdest, wenn etwas Ernstes passiert. Reichweite ersetzt keine Tiefe, und man merkt es erst, wenn man Tiefe bräuchte.'] },
    { type: 'note', tone: 'consent', title: 'Wann Unterstützung sinnvoll ist',
      text: 'Wenn Ablehnung dich über Wochen aus der Bahn wirft, wenn du ohne Bestätigung nicht klarkommst, wenn du Muster wiederholst, die dir selbst schaden — dann ist das kein Dating-Thema mehr. Eine Therapeutin oder ein Berater ist an dieser Stelle nützlicher als jedes Kapitel hier.' },
    { type: 'text', h: 'Die Frage, um die es geht',
      p: ['Was möchtest du mit diesen Fähigkeiten tun, wenn du niemandem mehr etwas beweisen musst?',
          'Das ist keine rhetorische Frage. Die Antwort entscheidet, ob das hier ein Werkzeug war oder eine Persönlichkeit.'] }
  ],
  scenario: {
    title: 'Der Abend, an dem du es merkst',
    brief: ['Drittes Date mit jemandem, den du wirklich interessant findest. Es läuft gut.', 'Und du erwischst dich dabei, dass du innerlich den Ablauf abhakst statt zuzuhören.'],
    signals: [
      { icon: 'brain', tone: 'caution', text: 'Du bist im Ablauf, nicht im Gespräch.' },
      { icon: 'circle-dot', tone: 'consent', text: 'Sie ist interessant. Das ist nicht das Problem.' }
    ],
    options: [
      { letter: 'A', label: 'Du machst', kind: 'klar', outcome: 'good',
        quote: 'Du legst das Muster bewusst weg und stellst eine Frage, deren Antwort du nicht schon kennst.',
        feedback: 'Der einzige Weg zurück. Das Werkzeug abzuschalten ist eine Entscheidung, die man einzeln trifft — jedes Mal neu.',
        deltas: [{ id: 'selbstreflexion', delta: '+10' }, { id: 'beobachtung', delta: '+5' }] },
      { letter: 'B', label: 'Du sagst', kind: 'klar', outcome: 'good',
        quote: '„Ich muss dir was sagen: Ich hab mich gerade dabei erwischt, wie ich im Kopf abgehakt habe statt zuzuhören. Das war unfair. Nochmal von vorn?“',
        feedback: 'Riskant und ehrlich. Es ist die Variante, die am meisten kostet und am meisten verändert — an ihr und an dir.',
        deltas: [{ id: 'selbstreflexion', delta: '+12' }, { id: 'klarheit', delta: '+7' }] },
      { letter: 'C', label: 'Du machst', kind: 'uneindeutig', outcome: 'costly',
        quote: 'Du machst weiter wie bisher. Läuft ja.',
        feedback: 'Es läuft tatsächlich. Und das ist der Grund, warum die meisten an diesem Punkt nichts ändern — bis der Punkt kommt, an dem es auch nicht mehr läuft.',
        deltas: [{ id: 'selbstreflexion', delta: '−6' }] }
    ]
  },
  interaction: { type: 'values', title: 'Dein Kodex', prompt: 'Wähle bis zu fünf Sätze, die für dich ab jetzt gelten. Sie erscheinen in deiner Auswertung.',
    items: [
      'Ich sage, was ich suche — auch wenn es den Pool verkleinert.',
      'Ein Nein beendet das Thema, nicht die Freundlichkeit.',
      'Ich halte niemanden warm, weil ich mich nicht entscheiden will.',
      'Ich verschwinde nicht nach Intimität.',
      'Bei Alkohol passiert nichts. Ohne Ausnahme.',
      'Ich frage, statt zu vermuten.',
      'Ich beende ein Date lieber früh als unehrlich.',
      'Ich beantworte direkte Fragen direkt.',
      'Ich messe mich nicht an Zahlen.',
      'Ich lege das Werkzeug weg, wenn jemand mir wichtig wird.'
    ] },
  challenge: { title: 'Brief an dein zukünftiges Ich', text: 'Schreib zehn Zeilen an dich selbst in einem Jahr. Was soll bis dahin anders sein — nicht in Zahlen, sondern im Verhalten? Leg den Text weg und lies ihn in zwölf Monaten.' },
  reflection: { question: 'Was möchtest du mit diesen Fähigkeiten tun, wenn du niemandem mehr etwas beweisen musst?', placeholder: 'Nimm dir Zeit für die Antwort …' },
  summary: [
    'Gelernt hast du Klarheit, Annahme, Initiative und Selbstpflege — nicht Eroberung.',
    'Erfolg ist messbar, Verbindung nicht. Verwechsle die beiden nicht.',
    'Aufmerksamkeit gewöhnt sich ab. Das ist der Kipppunkt.',
    'Reichweite ersetzt keine Tiefe.',
    'Der Kurs endet nicht damit, dass du Dating beherrschst. Er endet mit der Frage, was du damit tust.'
  ],
  quiz: [
    { q: 'Was hast du in diesem Kurs tatsächlich gelernt?', options: [
      { text: 'Wie man mehr Frauen bekommt', why: 'Das ist ein Nebeneffekt, keine Fähigkeit.' },
      { text: 'Klar zu kommunizieren, ein Nein anzunehmen und Initiative zu zeigen', correct: true, why: 'Richtig — und das funktioniert weit über Dating hinaus.' },
      { text: 'Techniken zur Gesprächssteuerung', why: 'Vorhanden, aber nicht der Kern.' }
    ] },
    { q: 'Was ist der Kipppunkt bei Bestätigung?', options: [
      { text: 'Wenn man zu viel davon bekommt', why: 'Die Menge allein ist nicht das Problem.' },
      { text: 'Wenn dieselbe Menge nicht mehr reicht', correct: true, why: 'Genau. Gewöhnung, nicht Sättigung.' },
      { text: 'Wenn sie ausbleibt', why: 'Das ist die Folge, nicht der Kipppunkt.' }
    ] },
    { q: 'Wann ist professionelle Unterstützung sinnvoll?', options: [
      { text: 'Wenn man länger keinen Erfolg hat', why: 'Das ist normal und kein Anlass.' },
      { text: 'Wenn Ablehnung dich über Wochen aus der Bahn wirft oder du ohne Bestätigung nicht klarkommst', correct: true, why: 'Richtig. Dann ist es kein Dating-Thema mehr.' },
      { text: 'Nie, das schafft man allein', why: 'Genau die Haltung, die es länger dauern lässt.' }
    ] }
  ],
  transfer: 'Deinen Kodex festlegen und den Brief schreiben.'
}

];

window.FBChapters = [].concat(
  window.FBChaptersA, window.FBChaptersB, window.FBChaptersC,
  window.FBChaptersD, window.FBChaptersE, window.FBChaptersF
);
