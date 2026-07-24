import type {
  HTMLBodyDataTypeInterface,
  HTMLHeadDataTypeInterface,
  HtmlDataTypeInterface,
  HtmlEditorDataTypeInterface,
  HTMLElementAttributesFor,
  HTMLElementTagName,
} from "@frxnklyn/datatypes";
import { HTMLBody } from "./HTMLBody.js";
import { HTMLHead } from "./HTMLHead.js";
import { indent, serializeAttributes } from "./utils.js";

export class HTMLDocument
  implements HtmlDataTypeInterface, HtmlEditorDataTypeInterface {
  private doctype: string = "<!DOCTYPE html>";
  private readonly head = new HTMLHead();
  private readonly body = new HTMLBody();

  public getDoctype(): string { return this.doctype; }
  public getHead(): HTMLHeadDataTypeInterface { return this.head; }
  public getBody(): HTMLBodyDataTypeInterface { return this.body; }
  public getHeadEditor(): HTMLHead { return this.head; }
  public getBodyEditor(): HTMLBody { return this.body; }
  public getContent(): string { return this.getCode(); }
  public getContentString(): string { return this.getCode(); }

  public getCode(): string {
    const language = this.head.getLanguage();
    const htmlAttributes = language ? serializeAttributes({ lang: language }) : "";
    return [
      this.doctype,
      `<html${htmlAttributes}>`,
      indent(this.head.getCode()),
      indent(this.body.getCode()),
      "</html>",
    ].join("\n");
  }

  public getTitle(): string {
    return this.head.getTitle()?.getContent() ?? "";
  }

  public setTitle(title: string): this {
    this.head.setDocumentTitle(title);
    return this;
  }

  public setLanguage(language: string): this {
    this.head.setLanguage(language);
    return this;
  }

  public setCharset(charset: string): this {
    this.head.setCharset(charset);
    return this;
  }

  public setDescription(description: string): this {
    this.head.setDescription(description);
    return this;
  }

  public setViewport(viewport: string): this {
    this.head.setViewport(viewport);
    return this;
  }

  public addStyle(content: string): this {
    this.head.addStyle(content);
    return this;
  }

  public addScript(content: string): this {
    this.head.addScript(content);
    return this;
  }

  public setBodyHtml(rawHtml: string): this {
    this.body.setContent(rawHtml);
    return this;
  }

  public appendBodyRawHtml(rawHtml: string): this {
    this.body.appendRawContent(rawHtml);
    return this;
  }

  public addElement<TTagName extends HTMLElementTagName>(
    tagName: TTagName,
    content: string = "",
    attributes?: HTMLElementAttributesFor<TTagName>,
  ): this {
    this.body.addElement(tagName, content, attributes);
    return this;
  }

  public changeContent(newContent: string): this {
    const doctype = newContent.match(/<!doctype\s+[^>]+>/i)?.[0];
    if (doctype) {
      this.doctype = doctype;
    }

    const title = newContent.match(/<title(?:\s[^>]*)?>([\s\S]*?)<\/title>/i)?.[1];
    if (title !== undefined) {
      this.setTitle(title);
    }

    const body = newContent.match(/<body(?:\s[^>]*)?>([\s\S]*?)<\/body>/i)?.[1];
    this.setBodyHtml(body?.trim() ?? newContent);
    return this;
  }
}
