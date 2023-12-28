import { Input } from "..";
import { Component } from "../../core";
import { IComponent } from "../../interfaces";

import "./CheckBox.css";

export class CheckBox implements IComponent {
  private component: Component;
  private input: Input;
  private label: Component;

  constructor(label: string) {
    this.input = new Input({
      className: "checkbox",
      attrs: {
        type: "checkbox",
      },
    });

    this.label = new Component({
      tagName: "label",
      className: "checkbox-label",
      textContent: label,
    });

    this.component = new Component({
      className: "checkbox-wrapper",
      children: [this.getInput(), this.getLabel()],
    });
  }

  getInput() {
    return this.input.getComponent();
  }

  getLabel() {
    return this.label.getComponent();
  }

  getComponent(): HTMLElement {
    return this.component.getComponent();
  }
}