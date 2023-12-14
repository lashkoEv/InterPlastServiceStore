import { AuthorizationWindow, Spinner } from '../../components';
import { Component, render } from '../../core';
import { UserType } from '../../enums/UserType';
import { User, UserController } from '../../schemas';

export class Application {
  private userController: UserController;
  private currentUser: User | undefined;
  private app: HTMLElement;
  private spinner: Spinner;
  private authorizationWindow: AuthorizationWindow;

  constructor() {
    this.userController = new UserController();
    this.currentUser = undefined;
    this.app = document.getElementById('app');
    this.spinner = new Spinner();
    this.authorizationWindow = new AuthorizationWindow(this.getSendEvents());
  }

  getSendEvents() {
    return {
      click: () => {
        this.currentUser = this.userController.authorize(
          this.authorizationWindow.getEmailInput().value,
          this.authorizationWindow.getPasswordInput().value
        );

        if (this.currentUser) {
          this.authorizationWindow.success();
          this.authorizationWindow.reset();
          render(this.app, this.spinner.getComponent());

          setTimeout(() => {
            this.spinner.getComponent().remove();
            console.log('succes authorization');

            render(this.app, this.authorizationWindow.getComponent());
          }, 2000);
        } else {
          this.authorizationWindow.error();
          console.log('wrong email or password');
        }
      },
    };
  }

  run() {
    render(this.app, this.spinner.getComponent());

    setTimeout(() => {
      this.authorizationWindow.reset();
      render(this.app, this.authorizationWindow.getComponent());
    }, 2000);

    setTimeout(() => {
      if (this.currentUser?.getUserType() === UserType.Admin) {
        this.run();
      }
    }, 50000);
  }
}
