# UI Kit — FUCKBOY E-Learning

Interaktive Rekonstruktion des Produkts "FUCKBOY — Das verbotene Werkzeug": ein E-Learning, das wie eine geheime Akte inszeniert ist. Sechs Kapitel, Entscheidungsszenarien, Chat-Simulationen, ein Score, der auch die Kosten sichtbar macht.

## Screens

| Datei | Screen | Was es zeigt |
| --- | --- | --- |
| `CoverScreen.jsx` | Cover / Zugang | Masthead im 3px-Rahmen, Erzähler-Setup, Consent-Regel, Rote/Blaue-Pille-Gate. Ohne Shell, full-bleed. |
| `ChapterIndex.jsx` | Akten-Index | Kapitelliste mit Zuständen (offen / abgeschlossen / gesperrt), gesperrte Bonusakte, Red-Flag-Katalog. |
| `LessonScreen.jsx` | Kapitel-Reader | Editorial-Layout: Masthead-Titel, Lead, Feldnotiz mit Zensur, Gegenüberstellung druckfrei/Druck, Moral-Notice, Papier-Beilage mit Transferübungen. |
| `ScenarioScreen.jsx` | Boss-Level | Situation als Aktentext, Signal-Lesung in der Seitenspalte, drei Reaktionen, Konsequenz + Score-Änderung erst nach dem Bestätigen. |
| `ChatSimScreen.jsx` | Chat-Simulation | Profilkarte, Thread, drei Antwortvarianten (offen / mehrdeutig / ausweichend) mit Wirkung. |
| `ProfileScreen.jsx` | Fuckboy-Profil | Score-Dimensionen inkl. Kostenwerte, Red-Flag-Katalog, Transferplan, Abschlussprotokoll auf Papier. |
| `Shell.jsx` | Chrome | Linke Rail (Wordmark, Navigation, vertikaler Fortschritt, Level-Anzeige) + Topbar. |
| `App.jsx` | Router | Screen-State, Score-Deltas, Übungs-State. |
| `data.js` | Inhalte | Kapitel, Szenario, Chat, Scores, Red Flags, Transferübungen. |

## Interaktion

1. Cover → Pille wählen → **Akte öffnen**
2. Index → Kapitel 03 öffnen
3. Kapitel → Übungen abhaken → **Zum Boss-Level**
4. Boss-Level → Reaktion wählen → **bestätigen** (Konsequenz + Score-Deltas erscheinen) → **Chat-Simulation**
5. Chat → Antwort wählen → **Senden** → **Mein Profil**
6. Profil → Tabs Score / Red Flags / Transferplan / Akte

## Regeln, die dieses Kit durchsetzt

- Jede Entscheidung hat Kosten. Keine Option wird als "richtig" markiert; `ChoiceOption` zeigt nur die wahrscheinliche Wirkung.
- Consent ist nie ein Reward: `Toast tone="consent"` trägt niemals ein Delta, und Consent-Werte sind wire, nicht volt.
- Ein hoher Fuckboy-Level wird neutral gefärbt und im Text ausdrücklich nicht als Erfolg gerahmt.
- Keine Personenfotos im Design System — `SwipeCard` fällt auf einen Ink→Bordeaux-Verlauf zurück, bis der Host echte Bilder liefert.
