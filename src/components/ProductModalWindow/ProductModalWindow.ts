import { Button, Input } from "..";
import { Component } from "../../core";
import { IComponent } from "../../interfaces";
import { Product } from "../../schemas";

export class ProductModalWindow implements IComponent {
  private component: Component;

  private titleInput: Input;
  private descriptionInput: Input;
  private priceInput: Input;
  private quantityInput: Input;
  private manufacturerInput: Input;
  private sendBtn: Button;

  constructor(sendEvents: {}) {
    this.titleInput = new Input({
      attrs: {
        placeholder: "Title",
      },
    });

    this.descriptionInput = new Input({
      attrs: {
        placeholder: "Description",
      },
    });

    this.priceInput = new Input({
      attrs: {
        placeholder: "Price",
      },
    });

    this.quantityInput = new Input({
      attrs: {
        placeholder: "Quantity",
      },
    });

    this.manufacturerInput = new Input({
      attrs: {
        placeholder: "Manufacturer",
      },
    });

    this.sendBtn = new Button({
      textContent: "Send",
      events: sendEvents,
    });

    this.component = new Component({
      className: "modal",
      children: [
        this.titleInput.getComponent(),
        this.descriptionInput.getComponent(),
        this.priceInput.getComponent(),
        this.quantityInput.getComponent(),
        this.manufacturerInput.getComponent(),
        this.sendBtn.getComponent(),
      ],
    });
  }

  getComponent(): HTMLElement {
    return this.component.getComponent();
  }

  setFields(product: Product) {
    this.titleInput.getComponent().value = product.getTitle();
    this.descriptionInput.getComponent().value = product.getDescription();
    this.priceInput.getComponent().value = product.getPrice();
    this.quantityInput.getComponent().value = product.getQuantity();
    this.manufacturerInput.getComponent().value = product.getManufacturer();
  }

  getFields() {
    return {
      title: this.titleInput.getComponent().value,
      description: this.descriptionInput.getComponent().value,
      price: this.priceInput.getComponent().value,
      quantity: this.quantityInput.getComponent().value,
      manufacturer: this.manufacturerInput.getComponent().value,
    };
  }
}
