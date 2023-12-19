import { Button } from "..";
import { Component } from "../../core";
import { IComponent } from "../../interfaces";
import { Product } from "../../schemas";

export class Cart implements IComponent {
  private component: Component;
  private img: Component;
  private decrease: Button;
  private count: Component;
  private increase: Button;
  private price: Component;
  private deletebtn: Button;
  private totalprice: Component;

  constructor(product: Product, deleteEvents: {}) {
    this.img = new Component({
      tagName: "img",
      className: "image",
      attrs: {
        src: product.getImageURL(),
      },
    });

    this.decrease = new Button({
      tagName: "button",
      className: "decrease",
      textContent: " < ",

    });

    this.count = new Component({
      tagName: "div",
      className: "count",
      textContent: "0",
    });

    this.increase = new Button({
      tagName: "button",
      className: "increase",
      textContent: " > ",
    });

    this.price = new Component({
      tagName: "div",
      className: "price",
      textContent: `${product.getPrice()}`,
    });

    this.deletebtn = new Button({
      tagName: "button",
      className: "deletebtn",
      textContent: "Delete",
      events: deleteEvents,
    });

    this.totalprice = new Component({
        tagName: "div",
        className: "totalprice",
        textContent: ``,
    })

    this.component = new Component({
      className: "cart",
      children: [
        this.getComponent(),
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