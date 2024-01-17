import { CartProduct, Input } from "..";
import { Component, } from "../../core";
import { IComponent } from "../../interfaces";
import "./CartWrapper.css";

export class CartWrapper implements IComponent {
  private component: Component;
  private products: CartProduct[];
  private totalprice: Component;
  private newPrice: Component;
  private promocode: Input;

  constructor(totalprice: number, newPrice: number, products: CartProduct[]) {
    this.products = products;

    const productsElements = this.products.map((product) =>
      product.getComponent()
    );

    this.totalprice = new Component({
      tagName: "div",
      className: "totalprice",
      textContent: totalprice !== -1 ? `${totalprice} $` : "",
      // textContent: `Total Price: ${totalprice} ₴`,
    });
    this.newPrice = new Component({
      tagName: 'div',
      className: 'newprice',
      textContent: `${newPrice} ₴`
    })
    const price = new Component({
      tagName: 'div',
      className: 'price',
      children: [this.getTotalPrice(), this.getNewPrice()],
    }).getComponent()
    
    this.promocode = new Input({
      className: "promocode",
      attrs: {
        placeholder: "Enter promocode",
        disabled: false,
      },
    });

    this.component = new Component({
      tagName: "div",
      className: "cartwrapper",
      children: [
        ...productsElements,
        price,
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
  getNewPrice(): HTMLElement {
    return this.newPrice.getComponent();
  }
  getPromocode(): HTMLElement {
    return this.promocode.getComponent();
  }
  getProducts(): CartProduct[] {
    return this.products;
  }
}
