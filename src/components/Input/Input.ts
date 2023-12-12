import { Component } from "../../core";
import { IComponent, IHtmlData } from "../../interfaces";

export class Input implements IComponent {
  private component: Component;

  constructor({ className, events, attrs }: IHtmlData) {
    className = className ? `input ${className}` : "input";

    this.component = new Component({
      tagName: "input",
      className,
      events,
      attrs
    });
  }

  getComponent(): HTMLElement {
    return this.component.getComponent();
  }
}
