import { Component } from "../../core";
import { IComponent } from "../../interfaces";

import "./Main.css";

export class Main implements IComponent {
  private component: Component;

  constructor() {
    this.component = new Component({
      tagName: "main",
      className: "main",
    });
  }

  getComponent(): HTMLElement {
    return this.component.getComponent();
  }
}
