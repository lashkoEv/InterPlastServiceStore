import { Component } from '../../core';
import { IComponent, IHtmlData } from '../../interfaces';

export class Main implements IComponent {
  private component: Component;

  constructor({ children }: IHtmlData) {
    this.component = new Component({
      tagName: 'main',
      className: 'main',
      children,
    });
  }

  getComponent(): HTMLElement {
    return this.component.getComponent();
  }
}
