import { Button, Input } from '..';
import { Component } from '../../core';
import { IComponent, IWindow } from '../../interfaces';

export class AuthorizationWindow implements IComponent, IWindow {
  private component: Component;
  private emailInput: Input;
  private passwordInput: Input;
  private sendBtn: Button;

  constructor(sendEvents: {}) {
    this.emailInput = new Input({
      attrs: {
        placeholder: 'Login',
      },
    });

    this.passwordInput = new Input({
      attrs: {
        placeholder: 'Password',
        type: 'password',
      },
    });

    this.sendBtn = new Button({ textContent: 'Send', events: sendEvents });

    this.component = new Component({
      className: 'modal',
      children: [
        this.getEmailInput(),
        this.getPasswordInput(),
        this.getSendBtn(),
      ],
    });
  }

  changeVisibility(): void {
    this.getComponent().classList.toggle('hide');
  }

  getComponent(): HTMLElement | HTMLInputElement {
    return this.component.getComponent();
  }

  getEmailInput() {
    return this.emailInput.getComponent();
  }

  getPasswordInput() {
    return this.passwordInput.getComponent();
  }

  getSendBtn() {
    return this.sendBtn.getComponent();
  }

  success() {
    this.getEmailInput().className = 'input success';
    this.getPasswordInput().className = 'input success';
  }

  error() {
    this.getEmailInput().classList.add('error');
    this.getPasswordInput().classList.add('error');
  }
  reset() {
    this.getEmailInput().value = '';
    this.getPasswordInput().value = '';

    this.getEmailInput().className = 'input';
    this.getPasswordInput().className = 'input';
  }
}
