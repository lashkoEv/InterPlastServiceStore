import {
  AuthorizationWindow,
  ProductCard,
  ProductsWrapper,
  Spinner,
} from "../../components";
import { render } from "../../core";
import {
  Product,
  ProductController,
  User,
  UserController,
} from "../../schemas";

export class Application {
  private app: HTMLElement;

  private userController: UserController;
  private currentUser: User | undefined;

  private productController: ProductController;

  private spinner: Spinner;
  private authorizationWindow: AuthorizationWindow;
  private products: ProductsWrapper;

  constructor() {
    this.app = document.getElementById("app");

    this.userController = new UserController();
    this.currentUser = undefined;

    this.spinner = new Spinner();

    this.authorizationWindow = new AuthorizationWindow(this.getSendEvents());

    this.productController = new ProductController();

    this.products = new ProductsWrapper(
      this.productsToCards(this.productController.getAll())
    );
  }

  productsToCards(products: Product[]) {
    return products.map(
      (product) => new ProductCard(product, this.getBuyEvents())
    );
  }

  getBuyEvents() {
    // TODO: when the cart will be ready
    return {};
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
            // TODO: replace with showing the admin panel button in the header

            // this.launchApp();
          }, 2000);
        } else {
          this.authorizationWindow.error();
          console.error("wrong email or password");
        }
      },
    };
  }

  launchApp() {
    // TODO: replace with adding header, main and footer
    // TODO: main -> products

    render(this.app, this.products.getComponent());
  }

  run() {
    render(this.app, this.spinner.getComponent());

    setTimeout(() => {
      // TODO: onclick of auth button
      // this.authorizationWindow.reset();
      // render(this.app, this.authorizationWindow.getComponent());

      this.launchApp();
    }, 2000);
  }
}
