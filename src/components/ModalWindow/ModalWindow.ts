import { Button } from "..";
import { Component } from "../../core";
import { IComponent, IWindow } from "../../interfaces";
import { Product } from "../../schemas";

import "./ModalWindow.css";

export class ModalWindow implements IComponent, IWindow {
  private component: Component;

  private idComponent: Component;
  private titleComponent: Component;
  private isAvailableComponent: Component;
  private descriptionComponent: Component;
  private priceComponent: Component;
  private quantityComponent: Component;
  private manufacturerComponent: Component;
  private imageURLComponent: Component;
  private buyButton: Button;
  private closeButton: Button;

  constructor(product: Product, buyEvents: {}, closeEvents: {}) {
    this.idComponent = new Component({
      className: "id",
      textContent: product.getID(),
    });
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
      className: "price",
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
    this.imageURLComponent = new Component({
      className: "imageURL",
      textContent: product.getImageURL(),
    });
    this.buyButton = new Button({
      textContent: "Buy",
      events: buyEvents,
    });
    this.closeButton = new Button({
      textContent: "❌",
      events: closeEvents,
    });

    this.component = new Component({
      className: "modal hide",
      children: [
        this.getIDComponent(),
        this.getTitleComponent(),
        this.getAvailabilityComponent(),
        this.getDescriptionComponent(),
        this.getPriceComponent(),
        this.getQuantityComponent(),
        this.getManufacturerComponent(),
        this.getImageURLComponent(),
        this.getBuyButton(),
        this.getCloseButton(),
      ],
    });
  }

  getComponent(): HTMLElement {
    return this.component.getComponent();
  }

  changeVisibility(): void {
    this.getComponent().classList.toggle("hide");
  }

  getIDComponent(): HTMLElement {
    return this.idComponent.getComponent();
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
    return this.imageURLComponent.getComponent();
  }

  getBuyButton() {
    return this.buyButton.getComponent();
  }

  getCloseButton() {
    return this.closeButton.getComponent();
  }
}
