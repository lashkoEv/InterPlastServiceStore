import { Button, ProductInTable, ProductTable } from "..";
import { Component } from "../../core";
import { IComponent } from "../../interfaces";

import "./AdminPanel.css";

export class AdminPanel implements IComponent {
  private component: Component;

  private addBtn: Button;
  private productTable: ProductTable;

  constructor(addEvents: {}) {
    this.addBtn = new Button({
      textContent: "Add new product",
      events: addEvents,
    });

    this.productTable = new ProductTable();

    this.component = new Component({
      className: "admin-panel",
      children: [this.addBtn.getComponent(), this.productTable.getComponent()],
    });
  }

  add(product: ProductInTable) {
    this.productTable.addProduct(product);
  }

  refresh(products: ProductInTable[]) {
    this.productTable.refresh(products);
  }

  getComponent(): HTMLElement {
    return this.component.getComponent();
  }
}
