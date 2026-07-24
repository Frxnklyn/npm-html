import type {
  HTMLElementAttributesFor,
  HTMLScriptDataTypeInterface,
  HTMLScriptEditorDataTypeInterface,
} from "@frxnklyn/datatypes";
import { HTMLElement } from "./HTMLElement.js";

export class HTMLScript
  extends HTMLElement<"script">
  implements HTMLScriptDataTypeInterface, HTMLScriptEditorDataTypeInterface {
  public constructor(
    content: string = "",
    attributes?: HTMLElementAttributesFor<"script">,
  ) {
    super("script", content, attributes);
  }

  public getSource() { return this.getAttribute("src") as HTMLElementAttributesFor<"script">["src"]; }
  public setSource(value: NonNullable<HTMLElementAttributesFor<"script">["src"]>) { return this.setAttribute("src", value); }
  public getType() { return this.getAttribute("type") as HTMLElementAttributesFor<"script">["type"]; }
  public setType(value: NonNullable<HTMLElementAttributesFor<"script">["type"]>) { return this.setAttribute("type", value); }
  public getNoModule() { return this.getAttribute("nomodule") as HTMLElementAttributesFor<"script">["nomodule"]; }
  public setNoModule(value: NonNullable<HTMLElementAttributesFor<"script">["nomodule"]>) { return this.setAttribute("nomodule", value); }
  public getAsync() { return this.getAttribute("async") as HTMLElementAttributesFor<"script">["async"]; }
  public setAsync(value: NonNullable<HTMLElementAttributesFor<"script">["async"]>) { return this.setAttribute("async", value); }
  public getDefer() { return this.getAttribute("defer") as HTMLElementAttributesFor<"script">["defer"]; }
  public setDefer(value: NonNullable<HTMLElementAttributesFor<"script">["defer"]>) { return this.setAttribute("defer", value); }
  public getCrossOrigin() { return this.getAttribute("crossorigin") as HTMLElementAttributesFor<"script">["crossorigin"]; }
  public setCrossOrigin(value: NonNullable<HTMLElementAttributesFor<"script">["crossorigin"]>) { return this.setAttribute("crossorigin", value); }
  public getIntegrity() { return this.getAttribute("integrity") as HTMLElementAttributesFor<"script">["integrity"]; }
  public setIntegrity(value: NonNullable<HTMLElementAttributesFor<"script">["integrity"]>) { return this.setAttribute("integrity", value); }
  public getReferrerPolicy() { return this.getAttribute("referrerpolicy") as HTMLElementAttributesFor<"script">["referrerpolicy"]; }
  public setReferrerPolicy(value: NonNullable<HTMLElementAttributesFor<"script">["referrerpolicy"]>) { return this.setAttribute("referrerpolicy", value); }
  public getBlocking() { return this.getAttribute("blocking") as HTMLElementAttributesFor<"script">["blocking"]; }
  public setBlocking(value: NonNullable<HTMLElementAttributesFor<"script">["blocking"]>) { return this.setAttribute("blocking", value); }
  public getFetchPriority() { return this.getAttribute("fetchpriority") as HTMLElementAttributesFor<"script">["fetchpriority"]; }
  public setFetchPriority(value: NonNullable<HTMLElementAttributesFor<"script">["fetchpriority"]>) { return this.setAttribute("fetchpriority", value); }
}
