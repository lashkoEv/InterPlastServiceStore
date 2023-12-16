<<<<<<< HEAD
import { Button, Input } from '..';
import { Component } from '../../core';
import { IComponent, IWindow } from '../../interfaces';
=======
import { Button, Input } from "..";
import { Component } from "../../core";
import { IComponent, IWindow } from "../../interfaces";
>>>>>>> dev

export class AuthorizationWindow implements IComponent, IWindow {
  private component: Component;
  private emailInput: Input;
  private passwordInput: Input;
  private sendBtn: Button;

  constructor(sendEvents: {}) {
    this.emailInput = new Input({
      attrs: {
<<<<<<< HEAD
        placeholder: 'Login',
=======
        placeholder: "Login",
>>>>>>> dev
      },
    });

    this.passwordInput = new Input({
      attrs: {
<<<<<<< HEAD
        placeholder: 'Password',
        type: 'password',
      },
    });

    this.sendBtn = new Button({ textContent: 'Send', events: sendEvents });

    this.component = new Component({
      className: 'modal',
=======
        placeholder: "Password",
        type: "password",
      },
    });

    this.sendBtn = new Button({ textContent: "Send", events: sendEvents });

    this.component = new Component({
      className: "modal",
>>>>>>> dev
      children: [
        this.getEmailInput(),
        this.getPasswordInput(),
        this.getSendBtn(),
      ],
    });
  }

  changeVisibility(): void {
<<<<<<< HEAD
    this.getComponent().classList.toggle('hide');
=======
    this.getComponent().classList.toggle("hide");
>>>>>>> dev
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
<<<<<<< HEAD
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
=======
    this.getEmailInput().className = "input success";
    this.getPasswordInput().className = "input success";
  }

  error() {
    this.getEmailInput().classList.add("error");
    this.getPasswordInput().classList.add("error");
  }
  reset() {
    this.getEmailInput().value = "";
    this.getPasswordInput().value = "";

    this.getEmailInput().className = "input";
    this.getPasswordInput().className = "input";
>>>>>>> dev
  }
}
