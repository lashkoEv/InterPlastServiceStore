<<<<<<< HEAD
import { Button, Input } from '..';
import { Component } from '../../core';
import { IComponent, IWindow } from '../../interfaces';
=======
import { Button, Input } from "..";
import { Component } from "../../core";
import { IComponent, IWindow } from "../../interfaces";
>>>>>>> dev

export class ModalWindow implements IComponent, IWindow {
  private component: Component;

  private titleInput: Input;
  private descriptionInput: Input;
  private priceInput: Input;
  private urlInput: Input;
  private applyBtn: Button;
  private deleteBtn: Button;

  constructor(applyEvents: {}, deleteEvents: {}) {
    this.titleInput = new Input({
      attrs: {
<<<<<<< HEAD
        placeholder: 'Title',
=======
        placeholder: "Title",
>>>>>>> dev
      },
    });

    this.descriptionInput = new Input({
      attrs: {
<<<<<<< HEAD
        placeholder: 'Description',
=======
        placeholder: "Description",
>>>>>>> dev
      },
    });

    this.priceInput = new Input({
      attrs: {
<<<<<<< HEAD
        placeholder: 'Price',
=======
        placeholder: "Price",
>>>>>>> dev
      },
    });

    this.urlInput = new Input({
      attrs: {
<<<<<<< HEAD
        placeholder: 'Image URL',
=======
        placeholder: "Image URL",
>>>>>>> dev
      },
    });

    this.applyBtn = new Button({
<<<<<<< HEAD
      textContent: 'Apply',
=======
      textContent: "Apply",
>>>>>>> dev
      events: applyEvents,
    });

    this.deleteBtn = new Button({
<<<<<<< HEAD
      textContent: 'Delete',
=======
      textContent: "Delete",
>>>>>>> dev
      events: deleteEvents,
    });

    this.component = new Component({
<<<<<<< HEAD
      className: 'modal hide',
=======
      className: "modal hide",
>>>>>>> dev
      children: [
        this.getTitleInput(),
        this.getDescriptionInput(),
        this.getPriceInput(),
        this.getUrlInput(),
        this.getApplyBtn(),
        this.getDeleteBtn(),
      ],
    });
  }

  getComponent(): HTMLElement {
    return this.component.getComponent();
  }

  changeVisibility(): void {
<<<<<<< HEAD
    this.getComponent().classList.toggle('hide');
=======
    this.getComponent().classList.toggle("hide");
>>>>>>> dev
  }

  getTitleInput(): HTMLElement {
    return this.titleInput.getComponent();
  }

  getDescriptionInput(): HTMLElement {
    return this.descriptionInput.getComponent();
  }

  getPriceInput(): HTMLElement {
    return this.priceInput.getComponent();
  }

  getUrlInput(): HTMLElement {
    return this.urlInput.getComponent();
  }

  getApplyBtn(): HTMLElement {
    return this.applyBtn.getComponent();
  }

  getDeleteBtn(): HTMLElement {
    return this.deleteBtn.getComponent();
  }
}
