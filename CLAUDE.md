# thomas.exe.network: Arbeitsanleitung

> Diese Datei liest Claude, bevor es hier arbeitet. Sie sagt, was dieses Projekt ist und welche Regeln gelten.

## Was das hier ist
Die digitale Visitenkarte von Thomas Krebser: eine Seite mit Karten, erreichbar unter https://thomas.exe.network. Sie sieht aus wie maxim.exe.network und denny.exe.network. Thomas ist Product Manager in Leipzig und arbeitet beratend mit exe.network. Er ist neu in VS Code und Claude Code und lernt hier mit. Erkläre in einfachen Worten, ohne Fachsprache, und immer nur einen Schritt auf einmal.

Das Hosting gehört exe. Thomas braucht dafür keine Zugänge und keine Passwörter. Veröffentlicht wird per Git (siehe `/veroeffentlichen`).

## Dateien
| Datei | Wofür | Anfassen? |
|---|---|---|
| `content.js` | Alle Texte, Kontakt, Karten. **Hier wird geändert.** | Ja |
| `assets/` | Fotos, Logos, QR-Code | Ja, neue Bilder hier ablegen |
| `index.html` | Das Design. Gleich bei allen exe-Karten. | Nein, nur wenn Thomas ausdrücklich das Design ändern will |
| `build.mjs`, `.github/workflows/pages.yml`, `package.json` | Baut die Seite beim Veröffentlichen | Nein |

## Befehle (Schrägstrich im Claude-Fenster)
- `/interview`: Claude fragt Thomas Schritt für Schritt und schreibt die Antworten in `content.js`.
- `/vorschau`: Seite bauen und im Browser ansehen, ohne etwas zu veröffentlichen.
- `/veroeffentlichen`: Änderungen online stellen. Nach 1 bis 2 Minuten ist es auf thomas.exe.network zu sehen.
- `/zurueck`: Einen früheren Stand wiederherstellen, wenn etwas schiefgegangen ist.

## Regeln
**Inhalt**
- Nichts erfinden. Fakten nur von Thomas oder aus dem Block "exe-Fakten" unten. Fehlt etwas, frage nach.
- Nur veröffentlichen, was Thomas veröffentlichen will. Telefon, Mail und Adresse sind seine Entscheidung. Namen oder Fotos anderer Menschen nur mit deren Zustimmung.
- Jeder Text gibt es auf Englisch **und** Deutsch (`{ en: "...", de: "..." }`).
- Keine Passwörter, Zugangsdaten oder Schlüssel in Dateien schreiben, nie.

**Schreibstil**
- "exe" immer klein: exe, exe.network, exe.ist. Nie "Exe" oder "EXE".
- Kein langer Gedankenstrich. Stattdessen Komma, Doppelpunkt, Klammern oder den Satz umbauen. Der kürzere Strich (–) ist sparsam erlaubt.
- Ton: direkt, nahbar, ohne Hype und Floskeln. Keine Schlagwörter wie "innovativ" oder "einzigartig".
- Keine Sätze nach dem Muster "Nicht X. Sondern Y.". Direkt sagen, was ist.
- Wer die Seite liest, soll nach drei Sätzen wissen, was Thomas macht und wie man ihn erreicht.

**Bilder**
- Fotos als JPG, längste Seite höchstens 1600 Pixel, Dateigröße unter 300 KB. Logos als PNG oder SVG.
- Das Foto von Thomas heißt `assets/portrait.jpg` (Hochformat, etwa 900 x 970 Pixel ist ideal).
- Farben für Karten nur aus der exe-Palette: `#fcc700` gelb, `#ff90e8` pink, `#23a094` petrol, `#af99f5` lavendel, `#99d9f5` hellblau, `#54f595` grün.

**Arbeitsweise**
- Nach jeder Änderung `node build.mjs` ausführen. Hinweise aus der Ausgabe in einfachen Worten weitergeben.
- Erst zeigen, was sich ändert, dann veröffentlichen. Nie ohne Thomas' Ja.
- Wenn etwas nicht klappt: Fehlermeldung zeigen und erklären. Nicht raten und nicht herumprobieren.
- Entwurf: `draft: true` in `content.js` hält die Seite aus Suchmaschinen heraus. Zeile erst entfernen, wenn Thomas sagt, dass die Seite fertig ist.
- Geht ein Git-Befehl schief (zum Beispiel "rejected" oder "conflict"): anhalten, Meldung erklären, bei Maxim nachfragen.

## exe-Fakten (die darf Thomas nutzen)
- exe.network ist eine Plattform für kreative Selbstständigkeit aus Leipzig, gegründet 2025 von Denny Thiele und Maxim M. Chubarov. Rechtlich eine UG (haftungsbeschränkt).
- Zwei Seiten: Merch-Produktion und Shop (Druck, Stick, On-Demand) und digitale Tools mit KI-Workflows. Dazu Workshops, Beratung und Vorträge.
- Netzwerk von über 80 Artists. Schwerpunkt Leipzig, Sachsen und Ostdeutschland.
- exe.cute.insights ist das KI-Dashboard für Artists, gefördert im Bundesmodellvorhaben "Unternehmen Revier" des BMWE.
- Namen: **exe** ist der Kurzname. **exe.network** ist die Firma nach außen. **exe.ist** ist die Plattform und der Instagram-Auftritt (`@exe.ist_`).
- Auszeichnung: Wettbewerb Popmusik Sachsen 2026, Kategorie "Innovative Music-Tech-Vorhaben", ausgezeichnet wurde exe.cute.insights.
- Thomas' Rolle (Stand Oktober 2026): Product Management, beratend, Mitte Oktober 2026 bis Mitte Januar 2027, danach wird gemeinsam entschieden.
- Alles andere über exe oder Thomas: nachfragen, nicht ableiten.

## Hilfe
Bei Fragen zu Git, Hosting oder dem Design: Maxim (maxim@exe.ist).
