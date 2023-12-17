import { append } from '.';
import { IComponent, IHtmlData } from '../interfaces';

export class Component implements IComponent {
  private component: HTMLElement;

  constructor({
    tagName = 'div',
    className,
    children,
    textContent,
    events,
    attrs,
  }: IHtmlData) {
    this.component = document.createElement(tagName);

    if (className) this.component.className = className;

    if (textContent) this.component.textContent = textContent;

    if (children) {
      children.forEach((child) => {
        append(this.component, child);
      });
    }

    if (events) {
      for (const event in events) {
        this.component.addEventListener(event, events[event]);
      }
    }

    if (attrs) {
      for (const attr in attrs) {
        this.component[attr] = attrs[attr];
      }
    }
  }

  public getComponent(): HTMLElement {
    return this.component;
  }
}
