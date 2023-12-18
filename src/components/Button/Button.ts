import { Component } from '../../core';
import { IComponent, IHtmlData } from '../../interfaces';

export class Button implements IComponent {
  private component: Component;

  constructor({ className, textContent, events }: IHtmlData) {
    className = className ? `button ${className}` : 'button';

    this.component = new Component({
      tagName: 'button',
      className,
      textContent,
      events,
    });
  }

  getComponent(): HTMLElement {
    return this.component.getComponent();
  }
}
