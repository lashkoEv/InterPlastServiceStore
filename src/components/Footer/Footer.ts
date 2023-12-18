import { Component } from '../../core';
import { IComponent } from '../../interfaces';
import './Footer.css';

export class Footer implements IComponent {
  private component: Component;
  private copyRights: Component;

  constructor() {
    this.copyRights = new Component({
      tagName: 'div',
      className: 'footer__rights',
      textContent: 'All rights reserved FrontEnd 31',
    });

    this.component = new Component({
      tagName: 'footer',
      className: 'footer',
      children: [this.copyRights.getComponent()],
    });
  }

  getComponent(): HTMLElement | HTMLInputElement {
    return this.component.getComponent();
  }
  getCopyRights() {
    return this.copyRights.getComponent();
  }
}
