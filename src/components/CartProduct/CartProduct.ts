import { Button } from "..";
import { Component } from "../../core";
import { IComponent } from "../../interfaces";
import { Product } from "../../schemas";

export class CartProduct implements IComponent {
  private component: Component;
  private img: Component;
  private decrease: Button;
  private count: Component;
  private increase: Button;
  private price: Component;
  private deletebtn: Button;
  private totalprice: Component;

  constructor(product: Product, deleteEvents: {}, decreaseEvents: {}, increaseEvents: {} ) {
    this.img = new Component({
      tagName: "img",
      className: "image",
      attrs: {
        src: product.getImageURL(),
      },
    });

    this.decrease = new Button({
      className: "decrease",
      textContent: " < ",
      events: decreaseEvents,
    });

    this.count = new Component({
      tagName: "div",
      className: "count",
      textContent: "1",
    });

    this.increase = new Button({
      className: "increase",
      textContent: " > ",
      events: increaseEvents,
    });

    this.price = new Component({
      tagName: "div",
      className: "price",
      textContent: `${product.getPrice()} ₴`,
    });

    this.deletebtn = new Button({
      tagName: "button",
      className: "deletebtn",
      textContent: "🗑️",
      events: deleteEvents,
    });

    this.totalprice = new Component({
        tagName: "div",
        className: "totalprice",
        textContent: ``,
    })

    this.component = new Component({
      className: "cartproduct",
      children: [
        this.getImg(),
        this.getDecrease(),
        this.getCount(),
        this.getIncrease(),
        this.getPrice(),
        this.getDeleteBtn(),
        this.getTotalPrice(),
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
  getTotalPrice(): HTMLElement {
    return this.totalprice.getComponent();
  }
//   getProdactCount(): HTMLElement {
//     return CartRepository.length
//   }
}