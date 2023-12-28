import {
  AuthorizationWindow,
  Button,
  ProductCard,
  ProductsWrapper,
  SideBar,
  Spinner,
} from "../../components";
import { Pagination } from "../../components/Pagination/Pagination";
import { Component, render } from "../../core";
import {
  Product,
  ProductController,
  User,
  UserController,
} from "../../schemas";
import { availabilityLabels, sortingLabels } from "../../utils";

export class Application {
  private app: HTMLElement;

  private userController: UserController;
  private currentUser: User | undefined;

  private productController: ProductController;

  private spinner: Spinner;
  private authorizationWindow: AuthorizationWindow;
  private products: ProductsWrapper;
  private pagination: Pagination;

  private sideBar: SideBar;

  constructor() {
    this.app = document.getElementById("app");

    this.userController = new UserController();
    this.currentUser = undefined;

    this.spinner = new Spinner();

    this.authorizationWindow = new AuthorizationWindow(this.getSendEvents());

    this.productController = new ProductController();

    this.products = new ProductsWrapper();

    this.pagination = new Pagination(8);
    
    this.sideBar = new SideBar(sortingLabels, this.productController.getMinPrice(), this.productController.getMaxPrice(), availabilityLabels, this.productController.getManufacturers(), this.getFilterEvents());
  }

  getFilterEvents(){}

  getSelectLabels(){
    return ['ss', 'dd', 'ff'];
  }

  productsToCards(products: Product[]) {
    return products.map(
      (product) =>
        new ProductCard(product, this.getBuyEvents(), this.getShowEvents())
    );
  }

  setPagination(products: Product[]) {
    const count = Math.ceil(products.length / this.pagination.getMaxCount());

    const buttons: HTMLElement[] = [];

    for (let i = 1; i <= count; i++) {
      const btn = new Button({
        textContent: i.toString(),
        events: {
          click: () => {
            this.pagination.setCurrentPage(i);

            buttons.forEach((button) => button.classList.remove("active"));
            btn.classList.add("active");

            this.setDisplayedProducts(products);
          },
        },
      }).getComponent();

      buttons.push(btn);
    }

    buttons[0].classList.add("active");

    render(this.pagination.getComponent(), buttons);
  }

  setDisplayedProducts(products: Product[]) {
    const cards = this.productsToCards(
      this.productController.getByPage(
        this.pagination.getCurrentPage(),
        this.pagination.getMaxCount(),
        products
      )
    );

    this.products.setProducts(cards);
  }

  getBuyEvents() {
    // TODO: when the cart will be ready
    return {
      click: () => {
        console.log("add product to the cart");
      },
    };
  }

  getShowEvents() {
    return {
      dblclick: (e) => {
        // TODO: create modal window of product
        if (e.target.tagName !== "BUTTON") {
          console.log("show modal window: all info about product");
        }
      },
    };
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
    // TODO: replace with adding header, main and footer
    // TODO: main -> products + pagination + sort button

    render(this.app, this.products.getComponent());
    this.app.append(this.sideBar.getComponent());
    this.app.append(this.pagination.getComponent());
    this.setPagination(this.productController.getAll());
    this.setDisplayedProducts(this.productController.getAll());
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
