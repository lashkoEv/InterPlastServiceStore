import { Button } from "..";
import { Component } from "../../core";
import { IComponent } from "../../interfaces";
import { ProductInCart } from "../../schemas";

export class CartProduct implements IComponent {
  private component: Component;
  private img: Component;
  private decrease: Button;
  private count: Component;
  private increase: Button;
  private price: Component;
  private deletebtn: Button;

  constructor(product: ProductInCart, deleteEvents: {} ) {
    this.img = new Component({
      tagName: "img",
      className: "cart-product-image",
      attrs: {
        src: product.getProduct().getImageURL(),
      },
    });

    this.decrease = new Button({
      className: "cart-product-decrease",
      textContent: " < ",
    });

    this.count = new Component({
      tagName: "div",
      className: "cart-product-count",
      textContent: `${product.getCount()}`,
    });

    this.increase = new Button({
      className: "cart-product-increase",
      textContent: " > ",
      events: this.getIncrease(),
    });

    this.price = new Component({
      tagName: "div",
      className: "cart-product-price",
      textContent: `${product.getProduct().getPrice()} ₴`,
    });

    this.deletebtn = new Button({
      className: "cart-product-deletebtn",
      textContent: "🗑️",
      events: deleteEvents,
    });

    this.component = new Component({
      className: "cartproduct",
      children: [
        this.getImg(),
        this.getDecrease(),
        this.getCount(),
        this.getIncrease(),
        this.getPrice(),
        this.getDeleteBtn()
      ],
    });
  }

  getComponent(): HTMLElement {
    return this.component.getComponent();
  }
  getImg(): HTMLElement {
    return this.img.getComponent();
  }
  getDecrease(): HTMLElement {
    return this.decrease.getComponent();
  }
  getCount(): HTMLElement {
    return this.count.getComponent();
  }
  getIncrease(): HTMLElement {
    return this.increase.getComponent();
  }
  getPrice(): HTMLElement {
    return this.price.getComponent();
  }
  getDeleteBtn(): HTMLElement {
    return this.deletebtn.getComponent();
  }
}