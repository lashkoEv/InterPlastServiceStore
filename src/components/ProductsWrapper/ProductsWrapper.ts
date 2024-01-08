import { Component, render } from "../../core";
import { IComponent } from "../../interfaces";
import { ProductCard } from "../ProductCard/ProductCard";

import "./ProductsWrapper.css";

export class ProductsWrapper implements IComponent {
  private component: Component;

  private products: ProductCard[];

  constructor() {
    this.products = [];

    this.component = new Component({
      className: "products",
    });
  }

  setProducts(products: ProductCard[]) {
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
