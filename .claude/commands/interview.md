---
description: Claude fragt dich Schritt für Schritt und schreibt deine Visitenkarte in content.js
---
Führe Thomas durch ein kurzes Interview für seine Visitenkarte. Lies zuerst `CLAUDE.md` und `content.js`.

Regeln für das Interview:
- Immer nur **eine** Frage auf einmal, in einfachen Worten. Warte auf die Antwort.
- Nichts erfinden und nichts schönreden. Schreibe nur auf, was Thomas sagt.
- Bei jeder Antwort kurz zeigen, wie der Text in der Karte aussehen würde, und fragen, ob das passt.

Fragen in dieser Reihenfolge, überspringe, was schon passt:
1. Wie soll dein Name stehen?
2. Was machst du, in einem Satz? (wird die Rolle unter dem Namen)
3. Wie stellst du dich in zwei, drei Sätzen vor? (Intro, direkt und persönlich)
4. Was soll jemand über dich wissen, der dich gerade kennenlernt?
5. Kontakt: Welche davon sollen auf die Seite? E-Mail, Telefon, WhatsApp, LinkedIn, Instagram, eigene Website. Nur das, was er ausdrücklich veröffentlichen will.
6. Projekte oder Stationen: Welche drei bis fünf sollen als Karten erscheinen? Pro Karte: Name, ein Satz dazu, deine Rolle, ein Link, optional ein Bild.
7. Foto: Hat er schon eines? Wenn ja: in `assets/portrait.jpg` ablegen (Hochformat, unter 300 KB). Biete an, ein zu großes Foto zu verkleinern.

Danach:
- Schreibe alles in `content.js` (Deutsch und Englisch, `{ en, de }`), nach den Schreibregeln aus `CLAUDE.md`.
- Führe `node build.mjs` aus und erkläre die Hinweise in einfachen Worten.
- Sage Thomas, dass er jetzt `/vorschau` nutzen kann. Veröffentlichen erst nach seinem Ja mit `/veroeffentlichen`.
