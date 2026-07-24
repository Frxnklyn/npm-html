# @frxnklyn/html

Einfache, dateisystemunabhaengige HTML-Datentypen fuer TypeScript.

Das Package implementiert die HTML-Interfaces aus
[`@frxnklyn/datatypes`](https://github.com/Frxnklyn/npm-datatypes). Es erzeugt
HTML-Dokumente und Elemente, liest oder schreibt aber selbst keine Dateien.
Dateizugriff bleibt dadurch Aufgabe eines File-Managers.

## Installation

```bash
npm install github:Frxnklyn/npm-html
```

## Beispiel

```ts
import { HTMLDocument } from "@frxnklyn/html";

const page = new HTMLDocument()
  .setTitle("Beispiel")
  .setLanguage("de")
  .setDescription("Eine einfache HTML-Seite")
  .addStyle("body { font-family: system-ui; }")
  .addElement("h1", "Hallo Welt", { class: "headline" })
  .addElement("p", "Diese Seite wurde mit @frxnklyn/html erstellt.");

console.log(page.getCode());
```

Ausgabe:

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <title>Beispiel</title>
    <meta name="description" content="Eine einfache HTML-Seite">
    <style>body { font-family: system-ui; }</style>
  </head>
  <body>
    <h1 class="headline">Hallo Welt</h1>
    <p>Diese Seite wurde mit @frxnklyn/html erstellt.</p>
  </body>
</html>
```

## Klassen

- `HTMLDocument`: vollstaendiges Dokument mit Doctype, Head und Body
- `HTMLHead`: Titel, Meta-Tags, Links, Icons, Styles, Scripts und Templates
- `HTMLBody`: Body-Inhalt und eine Liste von HTML-Elementen
- `HTMLElement`: allgemeines HTML-Element mit typisierten Attributen
- `HTMLDiv`: `div` mit untergeordneten Elementen
- `HTMLScript`: Script-Element mit Script-spezifischen Zugriffsmethoden

Alle Klassen existieren nur im Speicher. Ein File-Manager kann
`getContentString()` beziehungsweise `getCode()` zum Speichern verwenden.

## Rohes HTML

Die Parameter `content`, `setBodyHtml()` und `appendBodyRawHtml()` werden als
bereits vorbereitetes HTML behandelt. Attributwerte werden beim Rendern
escaped. Ungepruefte Benutzereingaben sollten daher vor der Verwendung als
Inhalt bereinigt oder als Text escaped werden.

## Entwicklung

```bash
npm install
npm test
```

`npm test` baut das Package und fuehrt die Tests gegen das erzeugte ESM-Paket
aus.
