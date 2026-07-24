import assert from "node:assert/strict";
import test from "node:test";
import {
  createHTMLElement,
  HTMLDiv,
  HTMLDocument,
  HTMLScript,
} from "../dist/index.js";

test("creates a complete HTML document", () => {
  const page = new HTMLDocument()
    .setLanguage("de")
    .setCharset("UTF-8")
    .setTitle("Test & Demo")
    .setDescription("Eine Testseite")
    .addStyle("body { color: #222; }")
    .addElement("h1", "Hallo", { class: "headline" })
    .addElement("input", "", { disabled: true, value: "test" });

  assert.equal(page.getTitle(), "Test & Demo");
  assert.match(page.getCode(), /^<!DOCTYPE html>/);
  assert.match(page.getCode(), /<html lang="de">/);
  assert.match(page.getCode(), /<meta charset="UTF-8">/);
  assert.match(page.getCode(), /<title>Test & Demo<\/title>/);
  assert.match(page.getCode(), /<h1 class="headline">Hallo<\/h1>/);
  assert.match(page.getCode(), /<input disabled value="test">/);
});

test("escapes attribute values", () => {
  const element = createHTMLElement("div", "Inhalt", {
    title: '"quoted" & <unsafe>',
  });

  assert.equal(
    element.getCode(),
    '<div title="&quot;quoted&quot; &amp; &lt;unsafe&gt;">Inhalt</div>',
  );
});

test("supports div children", () => {
  const div = new HTMLDiv("", { id: "container" })
    .addElement("span", "Eins")
    .addElement("strong", "Zwei");

  assert.equal(
    div.getCode(),
    '<div id="container"><span>Eins</span><strong>Zwei</strong></div>',
  );
  assert.equal(div.getElements().length, 2);
});

test("supports script-specific attributes", () => {
  const script = new HTMLScript()
    .setSource("/app.js")
    .setType("module")
    .setDefer(true);

  assert.equal(script.getSource(), "/app.js");
  assert.equal(
    script.getCode(),
    '<script src="/app.js" type="module" defer></script>',
  );
});
