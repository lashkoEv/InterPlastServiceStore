import { Button } from "..";
import { Component } from "../../core";
import { IComponent } from "../../interfaces";
import { Product } from "../../schemas";

import "./ProductCard.css";

export class ProductCard implements IComponent {
  private component: Component;

  private imageComponent: Component;
  private titleComponent: Component;
  private priceComponent: Component;
  private buyButton: Button;

  constructor(product: Product, buyEvents: {}) {
    this.imageComponent = new Component({
      tagName: "img",
      className: "image",
      attrs: {
        src: product.getImageURL(),
      },
    });

    this.titleComponent = new Component({
      className: "title",
      textContent: product.getTitle(),
    });

    this.priceComponent = new Component({
      className: "price",
      textContent: `${product.getPrice()} ₴`,
    });

    this.buyButton = new Button({
      textContent: "Buy",
      events: buyEvents,
    });

    this.component = new Component({
      className: "product",
      children: [
        this.getImageComponent(),
        this.getTitleComponent(),
        this.getPriceComponent(),
        this.getBuyButton(),
      ],
    });
  }

  getComponent(): HTMLElement {
    return this.component.getComponent();
  }

  getImageComponent() {
    return this.imageComponent.getComponent();
  }

  getTitleComponent() {
    return this.titleComponent.getComponent();
  }

  getPriceComponent() {
    return this.priceComponent.getComponent();
  }

  getBuyButton() {
    return this.buyButton.getComponent();
  }
}
