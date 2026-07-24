import type {
  HTMLElementAttributeInterface,
  HTMLElementAttributesFor,
  HTMLElementTagName,
} from "@frxnklyn/datatypes";

export const VOID_ELEMENTS = new Set<HTMLElementTagName>([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "source",
  "track",
  "wbr",
]);

export function escapeHTMLAttribute(value: unknown): string {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function serializeAttributes(
  attributes: HTMLElementAttributeInterface | Record<string, unknown>,
): string {
  return Object.entries(attributes)
    .flatMap(([name, value]) => {
      if (value === undefined || value === null || value === false) {
        return [];
      }
      if (value === true) {
        return [` ${name}`];
      }
      return [` ${name}="${escapeHTMLAttribute(value)}"`];
    })
    .join("");
}

export function cloneAttributes<TTagName extends HTMLElementTagName>(
  attributes?: HTMLElementAttributesFor<TTagName>,
): Record<string, unknown> {
  return attributes ? { ...attributes } : {};
}

export function indent(code: string, spaces: number = 2): string {
  const prefix = " ".repeat(spaces);
  return code
    .split("\n")
    .map((line) => `${prefix}${line}`)
    .join("\n");
}
