import { AuthorizationWindow, Spinner } from "../../components";
import { render } from "../../core";
import { UserType } from "../../enums/UserType";
import { User, UserController } from "../../schemas";

export class Application {
  private userController: UserController;
  private currentUser: User | undefined;
  private app: HTMLElement;
  private spinner: Spinner;
  private authorizationWindow: AuthorizationWindow;

  constructor() {
    this.userController = new UserController();
    this.currentUser = undefined;
    this.app = document.getElementById("app");
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

          console.log("success authorization");
          console.log(this.currentUser);

          setTimeout(() => {
            this.launchApp();
          }, 2000);
        } else {
          this.authorizationWindow.error();
          console.error("wrong email or password");
        }
      },
    };
  }

  launchApp() {
    console.log("app!");
  }

  run() {
    render(this.app, this.spinner.getComponent());

    setTimeout(() => {
      this.authorizationWindow.reset();
      render(this.app, this.authorizationWindow.getComponent());
    }, 2000);
  }
}
