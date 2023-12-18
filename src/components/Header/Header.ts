import { Button, Input } from '..';
import { Component } from '../../core';
import { IComponent } from '../../interfaces';
import './Header.css';

export class Header implements IComponent {
  private component: Component;
  private searchInput: Input;
  private searchBtn: Button;
  private adminPanelBtn: Button;
  private loginBtn: Button;
  private cartBtn: Button;

  constructor(
    searchBtnEvent: {},
    adminPanelBtnEvent: {},
    loginBtnEvent: {},
    cartBtnEvent: {}
  ) {
    this.searchInput = new Input({
      attrs: {
        placeholder: 'Search',
        className: 'search__input',
      },
    });
    this.searchBtn = new Button({
      textContent: 'Search',
      className: 'search__btn',
      events: searchBtnEvent,
    });
    this.adminPanelBtn = new Button({
      textContent: 'Admin Panel',
      className: 'admin__panel__btn hide',
      events: adminPanelBtnEvent,
    });
    this.loginBtn = new Button({
      textContent: 'Login',
      className: 'login__btn',
      events: loginBtnEvent,
    });
    this.cartBtn = new Button({
      textContent: 'Cart',
      className: 'cart__btn',
      events: cartBtnEvent,
    });

    this.component = new Component({
      tagName: 'header',
      className: 'header',
      children: [
        this.getSearchInput(),
        this.getSearchBtn(),
        this.getAdminPanelBtn(),
        this.getLoginBtn(),
        this.getCartBtn(),
      ],
    });
  }

  getComponent(): HTMLElement | HTMLInputElement {
    return this.component.getComponent();
  }
  changeVisibility(): void {
    this.getAdminPanelBtn().classList.toggle('hide');
  }

  getSearchInput() {
    return this.searchInput.getComponent();
  }

  getAdminPanelBtn() {
    return this.adminPanelBtn.getComponent();
  }

  getLoginBtn() {
    return this.loginBtn.getComponent();
  }

  getSearchBtn() {
    return this.searchBtn.getComponent();
  }

  getCartBtn() {
    return this.cartBtn.getComponent();
  }

  reset() {
    this.getSearchInput().value = '';
  }
}
