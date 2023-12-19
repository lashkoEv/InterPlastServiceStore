import { Button } from "..";
import { Component } from "../../core";
import { IComponent, IWindow } from "../../interfaces";
import { Product } from "../../schemas";

import "./ModalWindow.css";

export class ModalWindow implements IComponent, IWindow {
  private component: Component;

  private titleComponent: Component;
  private isAvailableComponent: Component;
  private descriptionComponent: Component;
  private priceComponent: Component;
  private quantityComponent: Component;
  private manufacturerComponent: Component;
  private imageComponent: Component;
  private buyButton: Button;
  private closeButton: Button;

  constructor(product: Product, buyEvents: {}, closeEvents: {}) {
    this.titleComponent = new Component({
      className: "title",
      textContent: product.getTitle(),
    });
    this.isAvailableComponent = new Component({
      className: "isAvailable",
      textContent: product.getAvailability()
        ? "Product is available"
        : "Product is unavailable",
    });
    this.descriptionComponent = new Component({
      className: "description",
      textContent: product.getDescription(),
    });
    this.priceComponent = new Component({
      className: "modal-price",
      textContent: product.getPrice().toString(),
    });
    this.quantityComponent = new Component({
      className: "quantity",
      textContent: product.getQuantity().toString(),
    });
    this.manufacturerComponent = new Component({
      className: "manufacturer",
      textContent: product.getManufacturer(),
    });
    this.imageComponent = new Component({
      tagName: "img",
      className: "modal-image",
      attrs: {
        src: product.getImageURL(),
      },
    });
    this.buyButton = new Button({
      textContent: "Buy",
      events: buyEvents,
    });
    this.closeButton = new Button({
      textContent: "Close",
      events: closeEvents,
    });

    const table = new Component({
      className: "modal-table",
      children: [
        new Component({ textContent: "Title: " }).getComponent(),
        this.getTitleComponent(),
        new Component({ textContent: "In store: " }).getComponent(),
        this.getAvailabilityComponent(),
        new Component({ textContent: "Description: " }).getComponent(),
        this.getDescriptionComponent(),
        new Component({ textContent: "Price: " }).getComponent(),
        this.getPriceComponent(),
        new Component({ textContent: "Quantity: " }).getComponent(),
        this.getQuantityComponent(),
        new Component({ textContent: "Manufacturer: " }).getComponent(),
        this.getManufacturerComponent(),
      ],
    }).getComponent();

    const modalContent = new Component({
      className: "modal-content",
      children: [this.getImageURLComponent(), table],
    }).getComponent();

    const modalButtons = new Component({
      className: "modal-buttons",
      children: [this.getBuyButton(), this.getCloseButton()],
    }).getComponent();

    this.component = new Component({
      className: "modal hide",
      children: [modalContent, modalButtons],
    });
  }

  getComponent(): HTMLElement {
    return this.component.getComponent();
  }

  changeVisibility(): void {
    this.getComponent().classList.toggle("hide");
  }

  getTitleComponent(): HTMLElement {
    return this.titleComponent.getComponent();
  }

  getAvailabilityComponent(): HTMLElement {
    return this.isAvailableComponent.getComponent();
  }

  getDescriptionComponent(): HTMLElement {
    return this.descriptionComponent.getComponent();
  }

  getPriceComponent(): HTMLElement {
    return this.priceComponent.getComponent();
  }

  getQuantityComponent(): HTMLElement {
    return this.quantityComponent.getComponent();
  }

  getManufacturerComponent(): HTMLElement {
    return this.manufacturerComponent.getComponent();
  }

  getImageURLComponent(): HTMLElement {
    return this.imageComponent.getComponent();
  }

  getBuyButton() {
    return this.buyButton.getComponent();
  }

  getCloseButton() {
    return this.closeButton.getComponent();
  }
}
