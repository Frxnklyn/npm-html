import type {
  HTMLBaseAttributeInterface,
  HTMLBaseDataTypeInterface,
  HTMLHeadDataTypeInterface,
  HTMLHeadEditorDataTypeInterface,
  HTMLIconAttributeInterface,
  HTMLLinkAttributeInterface,
  HTMLLinkDataTypeInterface,
  HTMLMetaAttributeInterface,
  HTMLMetaDataTypeInterface,
  HTMLNoScriptDataTypeInterface,
  HTMLScriptAttributeInterface,
  HTMLScriptDataTypeInterface,
  HTMLStyleAttributeInterface,
  HTMLStyleDataTypeInterface,
  HTMLTemplateAttributeInterface,
  HTMLTemplateDataTypeInterface,
  HTMLTitleDataTypeInterface,
} from "@frxnklyn/datatypes";
import { HTMLElement } from "./HTMLElement.js";
import { HTMLScript } from "./HTMLScript.js";
import { indent } from "./utils.js";

export class HTMLHead
  implements HTMLHeadDataTypeInterface, HTMLHeadEditorDataTypeInterface {
  private title?: HTMLElement<"title">;
  private base?: HTMLElement<"base">;
  private language?: string;
  private charset?: HTMLElement<"meta">;
  private description?: HTMLElement<"meta">;
  private viewport?: HTMLElement<"meta">;
  private readonly icons: HTMLElement<"link">[] = [];
  private readonly links: HTMLElement<"link">[] = [];
  private readonly meta: HTMLElement<"meta">[] = [];
  private readonly scripts: HTMLScript[] = [];
  private readonly styles: HTMLElement<"style">[] = [];
  private readonly templates: HTMLElement<"template">[] = [];
  private readonly noScripts: HTMLElement<"noscript">[] = [];

  public getCode(): string {
    const elements = [
      this.charset,
      this.base,
      this.title,
      this.description,
      this.viewport,
      ...this.icons,
      ...this.links,
      ...this.meta,
      ...this.styles,
      ...this.scripts,
      ...this.templates,
      ...this.noScripts,
    ].filter((element): element is NonNullable<typeof element> => Boolean(element));

    if (elements.length === 0) {
      return "<head></head>";
    }
    return `<head>\n${elements.map((element) => indent(element.getCode())).join("\n")}\n</head>`;
  }

  public getBase(): HTMLBaseDataTypeInterface | undefined { return this.base; }
  public getTitle(): HTMLTitleDataTypeInterface | undefined { return this.title; }
  public getLanguage(): string | undefined { return this.language; }
  public getCharset(): string | undefined { return this.charset?.getAttribute("charset") as string | undefined; }
  public getDescription(): string | undefined { return this.description?.getAttribute("content") as string | undefined; }
  public getViewport(): string | undefined { return this.viewport?.getAttribute("content") as string | undefined; }
  public getIcon(): HTMLLinkDataTypeInterface | undefined { return this.icons[0]; }
  public getIcons(): ReadonlyArray<HTMLLinkDataTypeInterface> { return this.icons; }
  public getLinks(): ReadonlyArray<HTMLLinkDataTypeInterface> { return this.links; }
  public getMetaElements(): ReadonlyArray<HTMLMetaDataTypeInterface> { return this.meta; }
  public getScripts(): ReadonlyArray<HTMLScriptDataTypeInterface> { return this.scripts; }
  public getStyles(): ReadonlyArray<HTMLStyleDataTypeInterface> { return this.styles; }
  public getTemplates(): ReadonlyArray<HTMLTemplateDataTypeInterface> { return this.templates; }
  public getNoScripts(): ReadonlyArray<HTMLNoScriptDataTypeInterface> { return this.noScripts; }

  public setDocumentTitle(title: string): this {
    this.title = new HTMLElement("title", title);
    return this;
  }

  public removeDocumentTitle(): this { this.title = undefined; return this; }
  public setLanguage(language: string): this { this.language = language; return this; }
  public setCharset(charset: string): this { this.charset = new HTMLElement("meta", "", { charset }); return this; }
  public removeCharset(): this { this.charset = undefined; return this; }
  public setDescription(description: string): this { this.description = new HTMLElement("meta", "", { name: "description", content: description }); return this; }
  public removeDescription(): this { this.description = undefined; return this; }
  public setViewport(viewport: string): this { this.viewport = new HTMLElement("meta", "", { name: "viewport", content: viewport }); return this; }
  public removeViewport(): this { this.viewport = undefined; return this; }
  public setBase(attributes: HTMLBaseAttributeInterface): this { this.base = new HTMLElement("base", "", attributes); return this; }
  public removeBase(): this { this.base = undefined; return this; }

  public setIcon(attributes: HTMLIconAttributeInterface): this {
    this.icons.length = 0;
    return this.addIcon(attributes);
  }

  public addIcon(attributes: HTMLIconAttributeInterface): this {
    this.icons.push(new HTMLElement("link", "", { ...attributes, rel: "icon" }));
    return this;
  }

  public removeIcon(index: number): this { this.icons.splice(index, 1); return this; }
  public clearIcons(): this { this.icons.length = 0; return this; }
  public addLink(attributes: HTMLLinkAttributeInterface): this { this.links.push(new HTMLElement("link", "", attributes)); return this; }
  public removeLink(index: number): this { this.links.splice(index, 1); return this; }
  public addMeta(attributes: HTMLMetaAttributeInterface): this { this.meta.push(new HTMLElement("meta", "", attributes)); return this; }
  public removeMeta(index: number): this { this.meta.splice(index, 1); return this; }
  public addScript(content: string = "", attributes?: HTMLScriptAttributeInterface): this { this.scripts.push(new HTMLScript(content, attributes)); return this; }
  public removeScript(index: number): this { this.scripts.splice(index, 1); return this; }
  public addStyle(content: string, attributes?: HTMLStyleAttributeInterface): this { this.styles.push(new HTMLElement("style", content, attributes)); return this; }
  public removeStyle(index: number): this { this.styles.splice(index, 1); return this; }
  public addTemplate(content: string, attributes?: HTMLTemplateAttributeInterface): this { this.templates.push(new HTMLElement("template", content, attributes)); return this; }
  public removeTemplate(index: number): this { this.templates.splice(index, 1); return this; }
  public addNoScript(content: string): this { this.noScripts.push(new HTMLElement("noscript", content)); return this; }
  public removeNoScript(index: number): this { this.noScripts.splice(index, 1); return this; }
}
