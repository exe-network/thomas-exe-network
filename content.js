/*
 * Inhalt für thomas.exe.network. Hier wird geändert, alles andere (Design, Build) bleibt, wie es ist.
 *
 * Regeln:
 *  - "exe" immer klein: exe, exe.network, exe.ist
 *  - kein langer Gedankenstrich. Stattdessen Komma, Doppelpunkt oder Bindestrich.
 *  - jeder Text gibt es zweimal: en (Standard) und de (Umschalter)
 *  - nichts erfinden: nur Angaben, die du selbst veröffentlichen willst
 *
 * Neue Karte? Ganz unten im Block "cards" steht eine auskommentierte Vorlage zum Kopieren.
 *
 * ENTWURF 22.10.2026: Die Texte sind ein Startpunkt. Ändere alles, was nicht nach dir klingt.
 */
window.CARD = {
  person: {
    name: "Thomas Krebser",
    domain: "thomas.exe.network",
    url: "https://thomas.exe.network",
    portrait: "assets/portrait.jpg",          // dein Foto, ersetze die Datei assets/portrait.jpg
    qr: "assets/qr_thomas.svg",
    draft: true,                              // Entwurf: für Suchmaschinen gesperrt. Zeile löschen, wenn die Seite fertig ist.
    /* Titel und Beschreibung für Link-Vorschauen (z. B. in WhatsApp, LinkedIn) */
    meta: {
      description: "Product manager in Leipzig. Works with exe.network on products, positioning and wording.",
      ogDescription: "Product management · exe.network. Flip the cards.",
      ogProjects: "exe.network"
    },
    role: {
      en: "Product management · exe.network",
      de: "Product Management · exe.network"
    },
    location: { en: "Leipzig, Germany", de: "Leipzig" },
    intro: {
      en: "I'm Thomas, a product manager in Leipzig. With exe.network I work on how products are framed, named and brought to people. Flip the cards.",
      de: "Ich bin Thomas, Product Manager in Leipzig. Mit exe.network arbeite ich daran, wie Produkte gerahmt, benannt und zu den Leuten gebracht werden. Dreh die Karten um."
    }
  },

  /*
   * Anlass-Banner, z. B. für eine Konferenz. Verschwindet nach dem Datum bei "until".
   * Zum Benutzen die Kommentarzeichen entfernen.
   *
  event: {
    name: "NAME DES EVENTS",
    place: "Ort",
    dates: "01.01.2027",
    until: "2027-01-02",
    note: {
      en: "We met at the event? Good. Here's what I'm working on.",
      de: "Wir haben uns beim Event getroffen? Gut. Hier ist, woran ich arbeite."
    }
  },
  */

  contact: {
    email: "",                                // Leer lassen, was nicht erscheinen soll
    phone: "",
    whatsapp: "",                             // nur Ziffern mit Ländervorwahl, z. B. 4915112345678
    instagram: "",                            // ohne @
    linkedin: "",                             // ganze Adresse
    website: "",
    org: "exe.network",
    title: { en: "Product management", de: "Product Management" },
    headline: { en: "Let's stay in touch.", de: "Lass uns in Kontakt bleiben." },
    sub: {
      en: "Save my contact. Or just write.",
      de: "Kontakt speichern. Oder einfach schreiben."
    }
  },

  cards: [
    {
      id: "exe",
      kind: "home",
      name: "exe.network",
      logo: "assets/exe_logo_256.png",
      logoAlt: "assets/exe_logo_pink.png",
      brand: { bg: "#ffffff", fg: "#2a2a2a", accent: "#ff90e8" },
      image: "assets/exe_crew.jpg",
      kicker: { en: "Home base · Leipzig", de: "Heimathafen · Leipzig" },
      tagline: { en: "exe makes artists visible.", de: "exe macht Künstler:innen sichtbar." },
      role: { en: "Product management, advisory", de: "Product Management, beratend" },
      text: {
        en: "A platform for creative independence from Leipzig. Merch made on demand, digital tools for artists and a network of artists who exchange ideas and work together. I help shape which products exe builds and how they are explained.",
        de: "Plattform für kreative Selbstständigkeit aus Leipzig. Merch auf Abruf, digitale Tools für Artists und ein Netzwerk aus Artists, die sich austauschen und zusammenarbeiten. Ich helfe mit, welche Produkte exe baut und wie sie erklärt werden."
      },
      links: [
        { label: { en: "Platform & shop", de: "Plattform & Shop" }, url: "https://www.exe.ist/", primary: true },
        { label: { en: "Instagram", de: "Instagram" }, url: "https://www.instagram.com/exe.ist_/" }
      ]
    }

    /*
     * VORLAGE für eine neue Karte. Kommentarzeichen entfernen, vorher ein Komma hinter die Karte darüber setzen.
     *
    ,{
      id: "mein-projekt",                      // kurzer Name ohne Leerzeichen, jede Karte anders
      kind: "product",                         // home | event | product | app | place | space | art | workshop
      name: "Name des Projekts",
      image: "assets/mein_projekt.jpg",        // Bild in assets/ ablegen, unter 300 KB
      imageFit: "cover",
      brand: { bg: "#fcc700", fg: "#0b0b0b", accent: "#fcc700" },   // nur exe-Farben: #fcc700 #ff90e8 #23a094 #af99f5 #99d9f5 #54f595
      kicker: { en: "Short line above", de: "Kurze Zeile oben" },
      tagline: { en: "One sentence.", de: "Ein Satz." },
      role: { en: "My role", de: "Meine Rolle" },
      text: {
        en: "Two or three sentences.",
        de: "Zwei, drei Sätze."
      },
      links: [
        { label: { en: "Visit", de: "Ansehen" }, url: "https://example.com", primary: true }
      ]
    }
    */
  ],

  ui: {
    flip: { en: "Flip", de: "Umdrehen" },
    back: { en: "Back", de: "Zurück" },
    myRole: { en: "My role", de: "Meine Rolle" },
    save: { en: "Save contact", de: "Kontakt speichern" },
    share: { en: "Share", de: "Teilen" },
    copied: { en: "Link copied", de: "Link kopiert" },
    showQr: { en: "Show QR", de: "QR zeigen" },
    scan: { en: "Scan to open thomas.exe.network", de: "Scannen und thomas.exe.network öffnen" },
    call: { en: "Call", de: "Anrufen" },
    whatsapp: { en: "WhatsApp", de: "WhatsApp" },
    mail: { en: "Mail", de: "Mail" },
    instagram: { en: "Instagram", de: "Instagram" },
    linkedin: { en: "LinkedIn", de: "LinkedIn" },
    website: { en: "Website", de: "Website" }
  }
};
