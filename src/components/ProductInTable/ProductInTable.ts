import { Button } from "..";
import { Component } from "../../core";
import { IComponent } from "../../interfaces";
import { Product } from "../../schemas";

export class ProductInTable implements IComponent {
  private component: Component;

  private titleDiv: Component;
  private editBtn: Button;
  private deleteBtn: Button;

  constructor(product: Product, editEvents: {}, deleteEvents: {}) {
    this.titleDiv = new Component({
      className: "product-title",
      textContent: product.getTitle(),
    });

    this.editBtn = new Button({
      textContent: "Edit",
      events: editEvents,
    });

    this.deleteBtn = new Button({
      textContent: "Delete",
      events: deleteEvents,
    });

    this.component = new Component({
      className: "product-in-table",
      children: [this.getTitleDiv(), this.getEditBtn(), this.getDeleteBtn()],
    });
  }

  getTitleDiv() {
    return this.titleDiv.getComponent();
  }

  getEditBtn() {
    return this.editBtn.getComponent();
  }

  getDeleteBtn() {
    return this.deleteBtn.getComponent();
  }

  getComponent(): HTMLElement {
    return this.component.getComponent();
  }
}
