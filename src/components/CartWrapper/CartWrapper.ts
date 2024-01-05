import { CartProduct, Input } from "..";
import { Component, render } from "../../core";
import { IComponent } from "../../interfaces";
import { ProductInCart } from "../../schemas";


export class CartWrapper implements IComponent {
  private component: Component;
  private products: CartProduct[];
  private totalprice: Component;
  private promocode:Input;

    constructor(product:ProductInCart){
        this.products = []
        this.component = new Component({
            tagName: "div",
            className: "cartwrapper",
            children: [
              this.getTotalPrice(),
              this.getPromocode()
            ]
        });
        this.totalprice = new Component({
          tagName: "div",
          className: "totalprice",
          textContent: `${product.getTotalPrice()}`,
      })
        this.promocode = new Input ({
          className: "promocode"
        })
    }

    setProducts(products: CartProduct[]) {
        this.products = products;
    
        const productsElements = this.products.map((product) =>
          product.getComponent()
        );
    
        render(this.getComponent(), productsElements);
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
}