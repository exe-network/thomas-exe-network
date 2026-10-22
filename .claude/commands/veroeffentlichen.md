---
description: Änderungen online stellen (thomas.exe.network)
---
Stelle Thomas' Änderungen online. Gehe Schritt für Schritt vor und erkläre es in einfachen Worten.

1. Führe `node build.mjs` aus. Bei einem Fehler: nicht veröffentlichen, Fehler erklären und beheben.
2. Zeige mit `git status` und `git diff --stat`, was sich geändert hat, und fasse es in ein bis drei Sätzen zusammen ("Du hast das Intro geändert und ein neues Foto hinzugefügt").
3. Frage ausdrücklich: "Soll ich das jetzt veröffentlichen?" Ohne ein Ja von Thomas nicht weitermachen.
4. Nach dem Ja:
   - `git add -A`
   - `git commit -m "<kurze Beschreibung auf Deutsch, was geändert wurde>"`
   - `git push`
5. Wenn `git push` mit "rejected" oder "conflict" scheitert: nicht erzwingen. Meldung erklären, `git pull --rebase` anbieten, und bei einem Konflikt anhalten und Maxim fragen.
6. Sage Thomas: "Gespeichert. In ein bis zwei Minuten ist es auf https://thomas.exe.network zu sehen. Dann die Seite neu laden."
7. Wenn Thomas es wünscht, prüfe nach zwei Minuten, ob die Seite erreichbar ist und die Änderung enthält.

Nie einen Push erzwingen, nie den Verlauf umschreiben, nie Dateien löschen, die Thomas nicht genannt hat.
