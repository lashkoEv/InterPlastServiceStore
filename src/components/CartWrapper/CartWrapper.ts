import { CartProduct } from "..";
import { Component, render } from "../../core";
import { IComponent } from "../../interfaces";


export class CartWrapper implements IComponent {
  private component: Component;
  private products: CartProduct[];
    constructor(){
        this.products = []
        this.component = new Component({
            tagName: "div",
            className: "cartwrapper"
        });
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
}