import { Button } from "..";
import { Component } from "../../core";
import { IComponent } from "../../interfaces";
import { Product } from "../../schemas";

export class Cart implements IComponent {
  private component: Component;

  constructor(product: Product) {
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
      textContent: " < ",
    }).getComponent();

    const count = new Component({
      tagName: "p",
      className: "count",
      textContent: "0",
    }).getComponent();

    const increase = new Button({
      tagName: "button",
      className: "increase",
      textContent: " > ",
    }).getComponent();

    const price = new Component({
      tagName: "p",
      className: "price",
      textContent: product.getPrice(),
    }).getComponent();

    const deletebtn = new Button({
      tagName: "button",
      className: "deletebtn",
      textContent: "Delete",
    }).getComponent();

    this.component = new Component({
      className: "cart",
      children: [img, description, count, increase, price, deletebtn],
    });
  }

  getComponent(): HTMLElement {
    return this.component.getComponent();
  }
}
