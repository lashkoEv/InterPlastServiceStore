import { CartProduct, Input } from "..";
import { Component, append, render } from "../../core";
import { IComponent } from "../../interfaces";
import "./CartWrapper.css";

export class CartWrapper implements IComponent {
  private component: Component;
  private products: CartProduct[];
  private totalprice: Component;
  private promocode: Input;

  constructor(totalprice: number, products: CartProduct[]) {
    this.products = products;

    const productsElements = this.products.map((product) =>
      product.getComponent()
    );

    this.totalprice = new Component({
      tagName: "div",
      className: "totalprice",
      textContent: `Total Price: ${totalprice} ₴`,
    });
    this.promocode = new Input({
      className: "promocode",
      attrs: {
        placeholder: "Enter promocode",
        disabled: true,
      },
    });

    this.component = new Component({
      tagName: "div",
      className: "cartwrapper",
      children: [
        ...productsElements,
        this.getTotalPrice(),
        this.getPromocode(),
      ],
    });
  }

  getComponent(): HTMLElement {
    return this.component.getComponent();
  }
  getTotalPrice(): HTMLElement {
    return this.totalprice.getComponent();
  }
  getPromocode(): HTMLElement {
    return this.promocode.getComponent();
  }
  getProducts(): CartProduct[] {
    return this.products;
  }
}
