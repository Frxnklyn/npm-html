import type {
  HTMLElementAttributeInterface,
  HTMLElementAttributesFor,
  HTMLElementDataTypeInterface,
  HTMLElementEditorDataTypeInterface,
  HTMLElementTagName,
} from "@frxnklyn/datatypes";
import {
  cloneAttributes,
  serializeAttributes,
  VOID_ELEMENTS,
} from "./utils.js";

export class HTMLElement<TTagName extends HTMLElementTagName = HTMLElementTagName>
  implements HTMLElementDataTypeInterface, HTMLElementEditorDataTypeInterface {
  protected content: string;
  protected readonly attributes: Record<string, unknown>;

  public constructor(
    protected readonly tagName: TTagName,
    content: string = "",
    attributes?: HTMLElementAttributesFor<TTagName>,
  ) {
    this.content = content;
    this.attributes = cloneAttributes(attributes);
  }

  public getTagName(): TTagName {
    return this.tagName;
  }

  public getContent(): string {
    return this.content;
  }

  public getCode(): string {
    const attributes = serializeAttributes(this.attributes);
    if (VOID_ELEMENTS.has(this.tagName)) {
      return `<${this.tagName}${attributes}>`;
    }
    return `<${this.tagName}${attributes}>${this.getContent()}</${this.tagName}>`;
  }

  public setContent(content: string): this {
    this.content = content;
    return this;
  }

  public clearContent(): this {
    this.content = "";
    return this;
  }

  public getAttribute(name: string): unknown {
    return this.attributes[name];
  }

  public hasAttribute(name: string): boolean {
    return Object.prototype.hasOwnProperty.call(this.attributes, name);
  }

  public setAttribute(name: string, value: unknown): this {
    this.attributes[name] = value;
    return this;
  }

  public removeAttribute(name: string): this {
    delete this.attributes[name];
    return this;
  }

  public getWidth(): HTMLElementAttributeInterface["width"] {
    return this.getAttribute("width") as HTMLElementAttributeInterface["width"];
  }

  public setWidth(value: NonNullable<HTMLElementAttributeInterface["width"]>): this {
    return this.setAttribute("width", value);
  }

  public getHeight(): HTMLElementAttributeInterface["height"] {
    return this.getAttribute("height") as HTMLElementAttributeInterface["height"];
  }

  public setHeight(value: NonNullable<HTMLElementAttributeInterface["height"]>): this {
    return this.setAttribute("height", value);
  }

  public getClass(): HTMLElementAttributeInterface["class"] {
    return this.getAttribute("class") as HTMLElementAttributeInterface["class"];
  }

  public setClass(value: NonNullable<HTMLElementAttributeInterface["class"]>): this {
    return this.setAttribute("class", value);
  }

  public getId(): HTMLElementAttributeInterface["id"] {
    return this.getAttribute("id") as HTMLElementAttributeInterface["id"];
  }

  public setId(value: NonNullable<HTMLElementAttributeInterface["id"]>): this {
    return this.setAttribute("id", value);
  }

  public getStyle(): HTMLElementAttributeInterface["style"] {
    return this.getAttribute("style") as HTMLElementAttributeInterface["style"];
  }

  public setStyle(value: NonNullable<HTMLElementAttributeInterface["style"]>): this {
    return this.setAttribute("style", value);
  }

  public getTitleAttribute(): HTMLElementAttributeInterface["title"] {
    return this.getAttribute("title") as HTMLElementAttributeInterface["title"];
  }

  public setTitleAttribute(value: NonNullable<HTMLElementAttributeInterface["title"]>): this {
    return this.setAttribute("title", value);
  }

  public getRole(): HTMLElementAttributeInterface["role"] {
    return this.getAttribute("role") as HTMLElementAttributeInterface["role"];
  }

  public setRole(value: NonNullable<HTMLElementAttributeInterface["role"]>): this {
    return this.setAttribute("role", value);
  }

  public getHidden(): HTMLElementAttributeInterface["hidden"] {
    return this.getAttribute("hidden") as HTMLElementAttributeInterface["hidden"];
  }

  public setHidden(value: NonNullable<HTMLElementAttributeInterface["hidden"]>): this {
    return this.setAttribute("hidden", value);
  }

  public getLanguage(): HTMLElementAttributeInterface["lang"] {
    return this.getAttribute("lang") as HTMLElementAttributeInterface["lang"];
  }

  public setLanguage(value: NonNullable<HTMLElementAttributeInterface["lang"]>): this {
    return this.setAttribute("lang", value);
  }

  public getAccessKey(): HTMLElementAttributeInterface["accesskey"] {
    return this.getAttribute("accesskey") as HTMLElementAttributeInterface["accesskey"];
  }

  public setAccessKey(value: NonNullable<HTMLElementAttributeInterface["accesskey"]>): this {
    return this.setAttribute("accesskey", value);
  }

  public getAutoCapitalize(): HTMLElementAttributeInterface["autocapitalize"] {
    return this.getAttribute("autocapitalize") as HTMLElementAttributeInterface["autocapitalize"];
  }

  public setAutoCapitalize(value: NonNullable<HTMLElementAttributeInterface["autocapitalize"]>): this {
    return this.setAttribute("autocapitalize", value);
  }

  public getAutoFocus(): HTMLElementAttributeInterface["autofocus"] {
    return this.getAttribute("autofocus") as HTMLElementAttributeInterface["autofocus"];
  }

  public setAutoFocus(value: NonNullable<HTMLElementAttributeInterface["autofocus"]>): this {
    return this.setAttribute("autofocus", value);
  }

  public getContentEditable(): HTMLElementAttributeInterface["contenteditable"] {
    return this.getAttribute("contenteditable") as HTMLElementAttributeInterface["contenteditable"];
  }

  public setContentEditable(value: NonNullable<HTMLElementAttributeInterface["contenteditable"]>): this {
    return this.setAttribute("contenteditable", value);
  }

  public getDirection(): HTMLElementAttributeInterface["dir"] {
    return this.getAttribute("dir") as HTMLElementAttributeInterface["dir"];
  }

  public setDirection(value: NonNullable<HTMLElementAttributeInterface["dir"]>): this {
    return this.setAttribute("dir", value);
  }

  public getDraggable(): HTMLElementAttributeInterface["draggable"] {
    return this.getAttribute("draggable") as HTMLElementAttributeInterface["draggable"];
  }

  public setDraggable(value: NonNullable<HTMLElementAttributeInterface["draggable"]>): this {
    return this.setAttribute("draggable", value);
  }

  public getInert(): HTMLElementAttributeInterface["inert"] {
    return this.getAttribute("inert") as HTMLElementAttributeInterface["inert"];
  }

  public setInert(value: NonNullable<HTMLElementAttributeInterface["inert"]>): this {
    return this.setAttribute("inert", value);
  }

  public getNonce(): HTMLElementAttributeInterface["nonce"] {
    return this.getAttribute("nonce") as HTMLElementAttributeInterface["nonce"];
  }

  public setNonce(value: NonNullable<HTMLElementAttributeInterface["nonce"]>): this {
    return this.setAttribute("nonce", value);
  }

  public getPart(): HTMLElementAttributeInterface["part"] {
    return this.getAttribute("part") as HTMLElementAttributeInterface["part"];
  }

  public setPart(value: NonNullable<HTMLElementAttributeInterface["part"]>): this {
    return this.setAttribute("part", value);
  }

  public getPopover(): HTMLElementAttributeInterface["popover"] {
    return this.getAttribute("popover") as HTMLElementAttributeInterface["popover"];
  }

  public setPopover(value: NonNullable<HTMLElementAttributeInterface["popover"]>): this {
    return this.setAttribute("popover", value);
  }

  public getSlot(): HTMLElementAttributeInterface["slot"] {
    return this.getAttribute("slot") as HTMLElementAttributeInterface["slot"];
  }

  public setSlot(value: NonNullable<HTMLElementAttributeInterface["slot"]>): this {
    return this.setAttribute("slot", value);
  }

  public getSpellCheck(): HTMLElementAttributeInterface["spellcheck"] {
    return this.getAttribute("spellcheck") as HTMLElementAttributeInterface["spellcheck"];
  }

  public setSpellCheck(value: NonNullable<HTMLElementAttributeInterface["spellcheck"]>): this {
    return this.setAttribute("spellcheck", value);
  }

  public getTabIndex(): HTMLElementAttributeInterface["tabindex"] {
    return this.getAttribute("tabindex") as HTMLElementAttributeInterface["tabindex"];
  }

  public setTabIndex(value: NonNullable<HTMLElementAttributeInterface["tabindex"]>): this {
    return this.setAttribute("tabindex", value);
  }

  public getTranslate(): HTMLElementAttributeInterface["translate"] {
    return this.getAttribute("translate") as HTMLElementAttributeInterface["translate"];
  }

  public setTranslate(value: NonNullable<HTMLElementAttributeInterface["translate"]>): this {
    return this.setAttribute("translate", value);
  }
}
