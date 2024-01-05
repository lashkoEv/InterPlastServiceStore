import { ProductInTable } from "..";
import { Component, append, removeChildren } from "../../core";
import { IComponent } from "../../interfaces";

export class ProductTable implements IComponent {
  private component: Component;

  constructor() {
    this.component = new Component({
      className: "product-table",
    });
  }

  getComponent(): HTMLElement {
    return this.component.getComponent();
  }

  addProduct(product: ProductInTable) {
    append(this.getComponent(), product.getComponent());
  }

  refresh(products: ProductInTable[]) {
    removeChildren(this.component.getComponent());

    products.forEach((product) => {
      this.addProduct(product);
    });
  }
}
