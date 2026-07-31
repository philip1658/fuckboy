# UI Kit — FUCKBOY E-Learning

Interaktive Rekonstruktion des Produkts „FUCKBOY — Das verbotene Werkzeug": ein zwölfteiliger, deutschsprachiger Dating-Kurs für erwachsene Männer, der offen sagt, was funktioniert — und in derselben Zeile, was es kostet.

Zwei Oberflächen aus derselben Datenbasis:

- `ui_kits/elearning/index.html` — Desktop
- `ui_kits/elearning-mobile/index.html` — iPhone-Ansicht

---

## Aufbau

| Datei | Rolle |
| --- | --- |
| `store.js` | Versioniertes localStorage-Modell (v1). Kapitelstatus, Antworten, Reflexionen, Kompetenzwerte, Übungen, letzte Position. |
| `content/competences.js` | Die acht Kompetenzen und die Feedback-Kategorien. |
| `content/chapters-a…f.js` | Die zwölf Kapitel, je zwei pro Datei. Setzt am Ende `window.FBChapters` zusammen. |
| `content/safety.js` | Bereich „Schutz & Recht". |
| `data.js` | Inhalte der Spezialbausteine: Fotos, Ranking-Erfahrungswerte, Textbausteine, Chat-Simulation. |
| `blocks.jsx` | Interaktionsbausteine: Quiz, Consent-Ampel, Sortieren, Fakt/Interpretation, Vergleich, Checkliste, Werteauswahl. |
| `ChapterScreen.jsx` | Generischer Kapitel-Renderer — baut jedes Kapitel aus seinem Datenobjekt. |
| `SpecialBlocks.jsx` | Einschübe für Kapitel 04 (Fotos/Ranking), 05 (Baustein-Labor), 11 (Chat-Simulation). |
| `MetaScreens.jsx` | Kompetenzprofil, Schutz & Recht, Einstellungen, Zustandslogik. |
| `Shell.jsx` | Rail mit vier Orten und der Kapitelliste, Topbar, Fortschrittsbalken. |
| `CoverScreen.jsx` | Cover mit Pillen-Weiche. |
| `HeavenScreen.jsx` | Ausstieg über die blaue Pille. |
| `OverviewScreen.jsx` / `ChapterIndex.jsx` | Kursübersicht, Kapitelliste in drei Akten. |
| `App.jsx` | Routing, Fortschritt, Kompetenz-Deltas. |

---

## Kapitelstruktur

Jedes Kapitel liefert dieselben Felder; der Renderer setzt daraus die Seite zusammen:

`number · slug · rail · title · subtitle · duration · lead · goals[] · story · sections[] · scenario · interaction · challenge · reflection · summary[] · quiz[] · transfer`

Abschnittstypen: `text`, `principle`, `note`, `compare`, `split`, `list`, `definition`, `phrases`.

Interaktionstypen: `traffic` (Consent-Ampel), `sort`, `facts`, `improve`, `checklist`, `values`.

Drei Kapitel haben zusätzlich eine Spezialkomponente über `special`: `playbook` (04), `snippets` (05), `chatsim` (11).

---

## Die zwölf Kapitel

| Nr. | Titel | Interaktion | Ernstfall |
| --- | --- | --- | --- |
| 01 | Das Mindset | Kontrollierbar/nicht kontrollierbar | Sie antwortet seit zwei Tagen nicht |
| 02 | Consent ist die Regel | Consent-Ampel, 7 Situationen | Sie zieht sich plötzlich zurück |
| 03 | Auftreten | Check vor dem Date | Eine Stunde vor dem ersten Treffen |
| 04 | Profil & Fotos | Profil-Audit + Fotoranking, Boost-Protokoll | Profil seit drei Monaten unverändert |
| 05 | Schreiben | Nachricht verbessern + Baustein-Labor | Sie fragt, was du suchst |
| 06 | Vom Match zum Treffen | Einladung verbessern | Sie weicht zum zweiten Mal aus |
| 07 | Das Date | Date-Plan | Nach fünfzig Minuten |
| 08 | Der grösste Fehler | Transfer-Checkliste | — |
| 09 | Ablehnung, Ghosting, Nichterscheinen | Fakt oder Interpretation | Sie kommt nicht |
| 10 | Nähe | Übergangs-Ampel | Sie hat deutlich zu viel getrunken |
| 11 | Danach | Beenden ohne Verschwinden + Chat-Sim | Sie fragt, ob da noch jemand ist |
| 12 | Was übrig bleibt | Kodex-Auswahl | Der Abend, an dem du es merkst |

---

## Kapitelzustände

`nicht begonnen` → `begonnen` (beim Öffnen) → `abgeschlossen`.

Abgeschlossen wird ein Kapitel erst, wenn seine Pflichtteile erledigt sind: der Ernstfall ist bestätigt (sofern vorhanden) **und** alle Wissensfragen sind beantwortet. Ein leeres Kapitel kann nicht als abgeschlossen erscheinen — der Zustand wird bei jeder Änderung neu berechnet, nicht gesetzt.

Es gibt keine didaktische Sperre: Alle zwölf Kapitel sind von Anfang an zugänglich. Die Reihenfolge ist eine Empfehlung, kein Gate.

---

## Gamification

Acht Kompetenzen statt eines Erfolgsscores: **Klarheit · Respekt · Initiative · Selbstsicherheit · Beobachtung · Resilienz · Selbstreflexion · Verlässlichkeit.**

Es gibt bewusst keine Zahl für Matches, Dates oder Sexualkontakte und kein „Level". Punkte fliessen aus Entscheidungen im Ernstfall — für gute Entscheidungen, nicht für Ergebnisse. Eine respektvoll angenommene Absage erhöht Resilienz und Klarheit; ein respektiertes Nein wird nie bestraft.

---

## Feedback

Antworten sind nie „richtig" oder „falsch". Der Ernstfall zeigt nach dem Bestätigen die wahrscheinliche Wirkung in vier Abstufungen: **klar und respektvoll · gut gemeint, zu viel Druck · uneindeutig · Grenze übersehen** (dazu: voreilig interpretiert, gute Initiative, unnötige Rechtfertigung, angemessener Rückzug).

Bei problematischen Entscheidungen ist das Feedback bestimmt, aber nicht beschämend — es erklärt, wie die Situation für die andere Person aussieht, statt ein Urteil zu fällen.

---

## Speicherung

`localStorage`, Schlüssel `fuckboy.progress.v1`, versioniertes Modell. Bei abweichender Version wird sauber auf einen leeren Zustand zurückgefallen statt zu crashen. Die Struktur ist so gebaut, dass später ein Account oder Backend ergänzt werden kann.

Gespeichert werden: Kapitelstatus, letzte Position, Antworten, Reflexionstexte, Kompetenzwerte, erledigte Übungen, Kodex-Auswahl, Zeitstempel. Nichts verlässt das Gerät. Die Textfelder weisen darauf hin, keine echten Namen oder Nachrichten Dritter einzugeben.

Zurücksetzen unter **Einstellungen** (Rail unten links, mobil über das Menü oben rechts).

---

## Klickpfad

1. Cover → Pille wählen. Rot → Kurs. Blau → Ausstiegsseite, der Kurs endet dort.
2. Übersicht → drei Akte, Consent-Regel, Kompetenzstand.
3. Kapitel → Liste in drei Akten, jeder Eintrag mit Zustand.
4. Im Kapitel → lesen, Ernstfall entscheiden, Interaktion lösen, Übung vormerken, reflektieren, Wissenstest.
5. Auswertung → Kompetenzen, Kodex, Transferplan, gesammelte Notizen.
6. Schutz & Recht → jederzeit über Rail bzw. Tab-Bar.
