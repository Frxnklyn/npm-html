import type {
  HTMLDivDataTypeInterface,
  HTMLDivEditorDataTypeInterface,
  HTMLElementAttributesFor,
  HTMLElementDataTypeInterface,
  HTMLElementTagName,
} from "@frxnklyn/datatypes";
import { createHTMLElement } from "./factory.js";
import { HTMLElement } from "./HTMLElement.js";

export class HTMLDiv
  extends HTMLElement<"div">
  implements HTMLDivDataTypeInterface, HTMLDivEditorDataTypeInterface {
  private readonly elements: HTMLElementDataTypeInterface[] = [];

  public constructor(
    content: string = "",
    attributes?: HTMLElementAttributesFor<"div">,
  ) {
    super("div", content, attributes);
  }

  public override getContent(): string {
    return `${this.content}${this.elements.map((element) => element.getCode()).join("")}`;
  }

  public addElement<TTagName extends HTMLElementTagName>(
    tagName: TTagName,
    content: string = "",
    attributes?: HTMLElementAttributesFor<TTagName>,
  ): this {
    this.elements.push(createHTMLElement(tagName, content, attributes));
    return this;
  }

  public getElements(): ReadonlyArray<HTMLElementDataTypeInterface> {
    return this.elements;
  }

  public getElement(index: number): HTMLElementDataTypeInterface | undefined {
    return this.elements[index];
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
}
