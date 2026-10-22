---
description: Einen früheren Stand der Seite wiederherstellen
---
Hilf Thomas, wenn etwas kaputt ist oder ihm eine Änderung nicht gefällt.

1. Zeige die letzten zehn Stände mit `git log --oneline -10` und erkläre sie in einfachen Worten ("vor 20 Minuten: Intro geändert").
2. Frage, zu welchem Stand er zurück will, oder was genau er rückgängig machen möchte.
3. Wenn nur eine Änderung zurück soll: `git revert <Stand>`. Das legt einen neuen Stand an und löscht nichts aus dem Verlauf. Zeige das Ergebnis.
4. Führe `node build.mjs` aus und biete `/vorschau` an.
5. Veröffentlichen nur nach Thomas' Ja, wie bei `/veroeffentlichen`.

Den Verlauf nie umschreiben und nie einen Push erzwingen. Der Verlauf bleibt vollständig erhalten, damit sich immer alles wiederherstellen lässt.
