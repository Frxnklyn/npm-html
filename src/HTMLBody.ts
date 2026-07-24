import type {
  HTMLBodyDataTypeInterface,
  HTMLBodyEditorDataTypeInterface,
  HTMLElementAttributesFor,
  HTMLElementDataTypeInterface,
  HTMLElementTagName,
} from "@frxnklyn/datatypes";
import { createHTMLElement } from "./factory.js";
import { indent } from "./utils.js";

export class HTMLBody
  implements HTMLBodyDataTypeInterface, HTMLBodyEditorDataTypeInterface {
  private rawContent: string = "";
  private readonly elements: HTMLElementDataTypeInterface[] = [];

  public getCode(): string {
    const content = this.getContent();
    if (!content) {
      return "<body></body>";
    }
    return `<body>\n${indent(content)}\n</body>`;
  }

  public getContent(): string {
    return [this.rawContent, ...this.elements.map((element) => element.getCode())]
      .filter(Boolean)
      .join("\n");
  }

  public setContent(content: string): this {
    this.rawContent = content;
    this.elements.length = 0;
    return this;
  }

  public appendRawContent(content: string): this {
    this.rawContent += content;
    return this;
  }

  public addElement<TTagName extends HTMLElementTagName>(
    tagName: TTagName,
    content: string = "",
    attributes?: HTMLElementAttributesFor<TTagName>,
  ): this {
    this.elements.push(createHTMLElement(tagName, content, attributes));
    return this;
  }

  public insertElement<TTagName extends HTMLElementTagName>(
    index: number,
    tagName: TTagName,
    content: string = "",
    attributes?: HTMLElementAttributesFor<TTagName>,
  ): this {
    const safeIndex = Math.max(0, Math.min(index, this.elements.length));
    this.elements.splice(safeIndex, 0, createHTMLElement(tagName, content, attributes));
    return this;
  }

  public replaceElement<TTagName extends HTMLElementTagName>(
    index: number,
    tagName: TTagName,
    content: string = "",
    attributes?: HTMLElementAttributesFor<TTagName>,
  ): this {
    if (index >= 0 && index < this.elements.length) {
      this.elements[index] = createHTMLElement(tagName, content, attributes);
    }
    return this;
  }

  public moveElement(fromIndex: number, toIndex: number): this {
    if (fromIndex < 0 || fromIndex >= this.elements.length) {
      return this;
    }
    const [element] = this.elements.splice(fromIndex, 1);
    if (!element) {
      return this;
    }
    const safeIndex = Math.max(0, Math.min(toIndex, this.elements.length));
    this.elements.splice(safeIndex, 0, element);
    return this;
  }

  public removeElement(index: number): this {
    if (index >= 0 && index < this.elements.length) {
      this.elements.splice(index, 1);
    }
    return this;
  }

  public clearElements(): this {
    this.elements.length = 0;
    return this;
  }

  public getElements(): ReadonlyArray<HTMLElementDataTypeInterface> {
    return this.elements;
  }

  public getElement(index: number): HTMLElementDataTypeInterface | undefined {
    return this.elements[index];
  }

  public getElementCount(): number {
    return this.elements.length;
  }
}
