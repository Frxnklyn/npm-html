import type {
  HTMLElementAttributesFor,
  HTMLElementTagName,
} from "@frxnklyn/datatypes";
import { HTMLDiv } from "./HTMLDiv.js";
import { HTMLElement } from "./HTMLElement.js";
import { HTMLScript } from "./HTMLScript.js";

export function createHTMLElement<TTagName extends HTMLElementTagName>(
  tagName: TTagName,
  content: string = "",
  attributes?: HTMLElementAttributesFor<TTagName>,
): HTMLElement<TTagName> {
  if (tagName === "div") {
    return new HTMLDiv(
      content,
      attributes as HTMLElementAttributesFor<"div">,
    ) as unknown as HTMLElement<TTagName>;
  }
  if (tagName === "script") {
    return new HTMLScript(
      content,
      attributes as HTMLElementAttributesFor<"script">,
    ) as unknown as HTMLElement<TTagName>;
  }
  return new HTMLElement(tagName, content, attributes);
}
