# Umsetzungsbericht — FUCKBOY E-Learning

Stand: 31. Juli 2026. Ersetzt `inhaltsplan.md`, der die Lückenanalyse vor dieser Ausbaustufe dokumentiert.

---

## 1. Ausgangszustand

**Technischer Rahmen.** Das Projekt ist ein Design-System, kein Node-Projekt. Es gibt kein `package.json`, keinen Bundler, kein TypeScript, keinen Test-Runner und keine Lockfile. Die App läuft als React-18-UMD mit In-Browser-Babel gegen das kompilierte Design-System-Bundle `_ds_bundle.js`. Der im Auftrag genannte Stack wurde beibehalten — es gab keinen zu migrieren.

**Vorgefundene Anwendung.** Sieben Kapitel, davon zwei real ausgearbeitet (03 „Der grösste Fehler", 06 „Profil & Algorithmus"). 01 und 02 waren als abgeschlossen markiert, enthielten aber nur Titel, Zusammenfassung und Lernziele. 04, 05 und 07 waren leer beziehungsweise gesperrt. Kein Speichermodell — jeder Reload setzte den Fortschritt zurück. Kein Kompetenzprofil, sondern ein „Fuckboy-Level" als Leitmetrik. Kein Bereich für Schutz und Recht.

**Bekannte Fehler beim Start.** Keine Konsolenfehler ausser der erwarteten Babel-Entwicklungswarnung.

---

## 2. Implementierte Kapitel

Zwölf Kapitel, alle vollständig ausgeschrieben: Titel, Untertitel, Lead, drei bis fünf Lernziele, Erzählerpassage, Lektionsabschnitte, mindestens eine Interaktion, Real-Life-Übung, Reflexionsfrage, Zusammenfassung, drei bis vier Wissensfragen mit begründeten Antworten und ein Transferpunkt. Elf der zwölf Kapitel haben zusätzlich einen Ernstfall mit vier differenziert bewerteten Optionen.

| Nr. | Titel | Status |
| --- | --- | --- |
| 01 | Das Mindset | neu geschrieben |
| 02 | Consent ist die Regel | neu geschrieben — umfangreichstes Kapitel |
| 03 | Auftreten | neu |
| 04 | Profil & Fotos | migriert + überarbeitet |
| 05 | Schreiben | migriert + überarbeitet |
| 06 | Vom Match zum Treffen | neu |
| 07 | Das Date | neu |
| 08 | Der grösste Fehler | migriert, These unverändert |
| 09 | Ablehnung, Ghosting, Nichterscheinen | neu geschrieben |
| 10 | Nähe: Annäherung, Übergang, Alkohol | neu |
| 11 | Danach | neu, Chat-Simulation migriert |
| 12 | Was übrig bleibt | neu geschrieben |

---

## 3. Migration bestehender Inhalte

Kein sinnvoller Bestand ging verloren.

- **„Der grösste Fehler"** → Kapitel 08. Die Kernthese („das Bedürfnis nach Sex ist der schnellste Weg, ihn nicht zu haben") wurde identifiziert und unverändert übernommen. Lektion, Gegenüberstellung druckfrei/Druck, die Moral-Notiz, das fünfteilige Übungsblatt **und der Ernstfall „Gutes Date, unklare Signale"** sind erhalten; die Deltas des Ernstfalls wurden auf die neuen Kompetenz-IDs umgeschrieben und um eine vierte Option (Tempo rausnehmen) ergänzt. Neu hinzugekommen sind fünf typische Rationalisierungen und der Abschnitt zur langfristigen Rechnung. Kapitel 02 hat einen eigenen, neu geschriebenen Ernstfall („Sie zieht sich plötzlich zurück") — er ersetzt den alten nicht, sondern ergänzt ihn an der Stelle, wo die Consent-Lehre steht.
- **„Profil & Algorithmus"** wurde wie verlangt geteilt: Fotos, Ranking-Erfahrungswerte und Boost-Protokoll → Kapitel 04; Textbausteine, „Wer fragt, der führt" und das Baustein-Labor → Kapitel 05.
- **Beziehungssimulation** („Sie fragt, was du suchst") → Kapitel 11, technisch unverändert, jetzt eingebettet statt eigener Screen.
- **Das Mindset / Consent** behielten Titel und Lernziele; die Inhalte sind neu.
- Fünf bespoke Screens wurden nach der Migration gelöscht, weil der generische Renderer sie ersetzt: `LessonScreen`, `ScenarioScreen`, `ChatSimScreen`, `ProfileScreen`, `PlaybookScreen`.

---

## 4. Neue Komponenten

**Interaktionsbausteine** (`blocks.jsx`): `QuizBlock`, `TrafficBlock` (Consent-Ampel), `SortBlock`, `FactsBlock`, `ImproveBlock`, `ChecklistBlock`, `ValuesBlock`.

**Renderer** (`ChapterScreen.jsx`): `ChapterScreen`, `Section` mit acht Abschnittstypen, `ScenarioBlock`, `Interaction`.

**Spezialbausteine** (`SpecialBlocks.jsx`): `PlaybookExtra`, `SnippetExtra`, `ChatSimExtra`.

**Meta-Screens** (`MetaScreens.jsx`): `CompetenceScreen`, `SafetyScreen`, `SettingsScreen` sowie `chapterState` und `chapterComplete`.

**Shell** neu gebaut: vier Orte, vollständige Kapitelliste mit Zustandsanzeige, Fortschrittsbalken, Einstellungen.

Am Design System selbst wurde nichts Neues erfunden — alle Screens komponieren die bestehenden Primitiven. Vier Komponenten bekamen einen Bugfix (`flex: none` auf Icon-Wrapper in Flex-Zeilen): `WarningNotice`, `ChoiceOption`, `Toast`, `ChapterCard`.

---

## 5. Datenmodell

Kapitelinhalte liegen als reine Datenobjekte in `content/chapters-a…f.js` und werden zu `window.FBChapters` zusammengesetzt. Content, Logik und Darstellung sind getrennt: Ein neues Kapitel braucht kein neues JSX, nur einen Eintrag.

Kompetenzmodell in `content/competences.js`, Schutz-und-Recht-Inhalte in `content/safety.js`, Spezialbaustein-Daten in `data.js`.

Der frühere `Fuckboy-Level` wurde entfernt und durch acht Kompetenzen ersetzt — Body-Count-artige Metriken sind laut Auftrag ausgeschlossen.

---

## 6. Speicherlogik

`store.js`, Schlüssel `fuckboy.progress.v1`, Feld `version`. Bei fehlender oder abweichender Version wird auf einen leeren, vollständig geformten Zustand zurückgefallen; `load`, `save` und `reset` sind gegen blockierten oder vollen Speicher abgesichert und werfen nie.

Gespeichert: Kapitelstatus (`started`/`done`), letzte Position, Antworten je Kapitel und Interaktionstyp, Quiz-Antworten, Reflexionstexte, Kompetenzwerte, erledigte Übungen, Kodex-Auswahl, ISO-Zeitstempel. Nach einem Reload zeigt die Desktop-App die zuletzt besuchte Seite wieder an.

Kapitelzustände werden bei jeder Änderung neu berechnet statt gespeichert — dadurch kann kein leeres Kapitel als abgeschlossen erscheinen, auch nicht nach einem Datenmodell-Wechsel.

---

## 7. Ausgeführte Prüfungen

Was das Projekt hergibt, wurde geprüft; was es nicht hergibt, konnte nicht geprüft werden.

| Prüfung | Ergebnis |
| --- | --- |
| Installation | Entfällt — keine Abhängigkeiten, kein Package Manager |
| Lint | Entfällt — keine Lint-Konfiguration im Projekt |
| Typecheck | Entfällt — kein TypeScript in der App (nur `.d.ts` für die Design-System-Komponenten) |
| Tests | Entfällt — kein Test-Runner vorhanden |
| Produktions-Build | Entfällt — die App läuft ohne Buildschritt |
| Design-System-Kompilierung | Läuft bei jeder Änderung automatisch; `check_design_system` meldet keine Fehler |
| Konsolenfehler | Keine ausser der erwarteten Babel-Entwicklungswarnung |
| Manuelle Wege | Cover → beide Pillen; Übersicht; Kapitelliste; mehrere Kapitel inklusive Ernstfall, Quiz und Interaktion; Kompetenzprofil mit allen vier Tabs; Schutz & Recht; Einstellungen inklusive Zurücksetzen; Desktop und Mobile |

Es wurde kein Build-Setup ergänzt: Der Auftrag verlangt, den vorhandenen Stack zu verwenden und nicht ohne zwingenden Grund zu migrieren.

---

## 8. Bekannte Einschränkungen

1. **In-Browser-Babel.** Für eine produktive Auslieferung müssten die `.jsx`-Dateien vorkompiliert werden. Für ein UI-Kit im Design System ist das der richtige Zustand, für eine echte App nicht.
2. **Keine Bildwelt.** Der Auftrag beschreibt abstrakte Kapitelbilder in 4:3, Schwarzweiss mit einem Farbelement. Es sind keine vorhanden, und es wurden keine erfunden oder generiert. Einzige Ausnahme ist das vom Kunden gelieferte Motiv auf der Ausstiegsseite. Die Kapitelkacheln laufen bis dahin rein typografisch.
3. **Fortschritt nur pro Browser.** Kein Account, kein Sync zwischen Geräten. Die Struktur ist dafür vorbereitet.
4. **Desktop stellt die letzte Position wieder her, Mobile startet am Cover.** Bewusst so, damit die Mobile-Demo im Design-System-Tab immer denselben ersten Eindruck zeigt.
5. **Keine Audio-Sequenzen.** Erzählerpassagen sind als Text umgesetzt; Sprechertexte müssten separat produziert werden.
6. **Barrierefreiheit teilweise.** Kontraste, Tap-Ziele ab 44px, semantische Überschriften, `aria-label` auf Icon-Buttons und ein sichtbarer Fokusring sind vorhanden. Nicht umgesetzt: vollständige Tastaturnavigation in der Consent-Ampel und den Sortier-Interaktionen, sowie `prefers-reduced-motion`.
7. **Kapitel 04 nennt Ranking-Faktoren.** Sie sind ausdrücklich als Erfahrungswerte und Hypothesen gekennzeichnet, nicht als bekannter Algorithmus.

---

## 9. Punkte für eine juristische oder fachliche Prüfung

1. **Der gesamte Bereich „Schutz & Recht"** ist als allgemeine Orientierung gekennzeichnet und muss vor einer Veröffentlichung von einer Fachperson für die jeweilige Rechtsordnung — insbesondere die Schweiz — geprüft werden.
2. **Beratungs- und Notfallstellen** sind bewusst leer und als konfigurierbar markiert. Vor dem Livegang müssen die zuständigen Stellen pro Land eingetragen werden.
3. **Aussagen zur Einwilligungsfähigkeit bei Alkohol** sind bewusst strenger formuliert als die Mindestanforderung. Die konkrete rechtliche Schwelle gehört fachlich geprüft.
4. **Aussagen zu heimlichen Aufnahmen und zur Weitergabe intimer Bilder** verweisen auf Strafbarkeit „in vielen Rechtsordnungen" — bewusst unbestimmt, weil eine konkrete Rechtsbehauptung ohne Prüfung nicht vertretbar ist.
5. **Psychologische Inhalte** sind als Prinzipien und Wahrscheinlichkeiten formuliert, nicht als belegte Wirkmechanismen. Eine fachpsychologische Durchsicht ist trotzdem zu empfehlen, insbesondere bei Kapitel 09 und 12.
6. **Der Hinweis auf professionelle Unterstützung** in Kapitel 12 sollte durch eine Fachperson auf Formulierung und Verweisstruktur geprüft werden.
7. **Altersverifikation** ist nicht implementiert. Der Kurs richtet sich ausschliesslich an Erwachsene; wie das durchgesetzt wird, ist eine Produkt- und Rechtsentscheidung.
