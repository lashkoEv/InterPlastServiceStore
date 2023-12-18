import { Button } from "..";
import { Component } from "../../core";
import { IComponent } from "../../interfaces";
import { Product } from "../../schemas";

export class Cart implements IComponent {
  private component: Component;

  constructor(product: Product, cardEvents: {}) {
    const img = new Component({
      tagName: "img",
      className: "image",
      attrs: {
        src: product.getImageURL(),
      },
    }).getComponent();

    const description = new Button({
      tagName: "button",
      className: "description",
      textContent: product.getDescription(),
    }).getComponent();

    const count = new Component({
      tagName: "p",
      className: "count",
      textContent: product.getDescription(),
    }).getComponent();

    const increase = new Button({
      tagName: "button",
      className: "increase",
    }).getComponent();

    const price = new Component({
      tagName: "p",
      className: "price",
    }).getComponent();

    const deletebtn = new Button({
      tagName: "button",
      className: "deletebtn",
    }).getComponent();

    this.component = new Component({
      className: "cart",
      children: [img, description, count, increase, price, deletebtn],
      events: cardEvents,
    });
  }

  getComponent(): HTMLElement {
    return this.component.getComponent();
  }
}
