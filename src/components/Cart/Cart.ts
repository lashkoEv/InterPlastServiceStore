import { Button } from "..";
import { Component } from "../../core";
import { IComponent } from "../../interfaces";
import { Product } from "../../schemas";

export class Cart implements IComponent {
  private component: Component;

  constructor(product: Cart, cardEvents: {}) {
    const img = new Component({
      tagName: "img",
      className: "image",
      attrs: {
        src: product.getImageUrl(),
      },
    }).getComponent();

    const description = new Button({
      tagName: "p",
      className: "description",
      textContent: product.getDescription(),
    }).getComponent();

    const count = new Component({
      tagName: "p",
      className: "count",
      textContent: product.getDescription(),
    }).getComponent();

    const increase = new Component({
      tagName: "p",
      className: "price",
      textContent: product.getPrice(),
    }).getComponent();

    const price = new Component({
      tagName: "img",
      className: "image",
      attrs: {
        src: product.getImageUrl(),
      },
    }).getComponent();

    const deletebtn = new Component({
      tagName: "img",
      className: "image",
      attrs: {
        src: product.getImageUrl(),
      },
    }).getComponent();

    this.component = new Component({
      className: "product",
      children: [img, description, count, increase, price, deletebtn],
      events: cardEvents,
    });
  }

  getComponent(): HTMLElement {
    return this.component.getComponent();
  }
}
