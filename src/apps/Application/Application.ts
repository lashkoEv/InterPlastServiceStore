import {
  AuthorizationWindow,
  Button,
  Header,
  Main,
  ModalWindow,
  ProductCard,
  ProductsWrapper,
  Spinner,
  Footer,
  AdminPanel,
  ProductInTable,
  ProductModalWindow,
} from "../../components";
import { Pagination } from "../../components/Pagination/Pagination";
import { append, removeChildren, render } from "../../core";
import { UserType } from "../../enums";
import {
  Product,
  ProductController,
  User,
  UserController,
} from "../../schemas";

export class Application {
  private MAX_COUNT = 8;

  private app: HTMLElement;

  private userController: UserController;
  private currentUser: User | undefined;

  private productController: ProductController;

  private spinner: Spinner;
  private authorizationWindow: AuthorizationWindow;
  private products: ProductsWrapper;
  private pagination: Pagination;

  private header: Header;
  private main: Main;
  private footer: Footer;

  private modalWindow: ModalWindow;

  private adminPanel: AdminPanel;
  private productModalWindow: ProductModalWindow;
  private currentProduct: Product | null;

  constructor() {
    this.app = document.getElementById("app");

    this.modalWindow = null;

    this.userController = new UserController();
    this.currentUser = undefined;

    this.spinner = new Spinner();

    this.authorizationWindow = new AuthorizationWindow(this.getSendEvents());

    this.productController = new ProductController();

    this.products = new ProductsWrapper();

    this.pagination = new Pagination(this.MAX_COUNT);

    this.main = new Main();

    this.header = new Header(
      this.getSearchBtnEvents(),
      this.getAdminPanelBtnEvents(),
      this.getLoginBtnEvents(),
      this.getCartBtnEvents()
    );

    this.footer = new Footer();

    this.adminPanel = new AdminPanel(this.getAddEvents());

    this.productModalWindow = new ProductModalWindow(this.getModalSendEvents());

    this.currentProduct = null;
  }

  getModalSendEvents() {
    return {
      click: () => {
        const info = this.productModalWindow.getFields();

        if (this.currentProduct) {
          this.productController.update(
            this.currentProduct,
            info.title,
            this.currentProduct.getAvailability(),
            info.description,
            info.price,
            info.quantity,
            info.manufacturer,
            this.currentProduct.getImageURL()
          );
        } else {
          this.productController.add(
            info.title,
            true,
            info.description,
            info.price,
            info.quantity,
            info.manufacturer,
            "public/images/image.png"
          );
        }

        this.productModalWindow.getComponent().remove();
        this.setProductsToAdminPanel();
        this.currentProduct = null;
      },
    };
  }

  getAddEvents() {
    return {
      click: () => {
        append(this.app, this.productModalWindow.getComponent());
      },
    };
  }

  getSearchBtnEvents() {
    return {
      click: () => {
        const products = this.productController.search(
          this.header.getSearchInput().value
        );
        this.setPagination(products);
        this.setDisplayedProducts(products);
        this.header.reset();
      },
    };
  }

  getAdminPanelBtnEvents() {
    return {
      click: () => {
        render(this.main.getComponent(), this.adminPanel.getComponent());

        this.setProductsToAdminPanel();
      },
    };
  }

  setProductsToAdminPanel() {
    const products = this.productController.getAll();

    const productsInTable = products.map((product) => {
      return new ProductInTable(
        product,
        this.getEditEvents(product),
        this.getDeleteEvents(product)
      );
    });

    this.adminPanel.refresh(productsInTable);
  }

  getEditEvents(product: Product) {
    return {
      click: () => {
        this.currentProduct = product;
        append(this.app, this.productModalWindow.getComponent());
        this.productModalWindow.setFields(product);
      },
    };
  }

  getDeleteEvents(product: Product) {
    return {
      click: () => {
        this.productController.delete(product);

        this.setProductsToAdminPanel();
      },
    };
  }

  getLoginBtnEvents() {
    return {
      click: () => {
        render(this.app, this.spinner.getComponent());

        setTimeout(() => {
          this.authorizationWindow.reset();
          render(this.app, this.authorizationWindow.getComponent());
        }, 2000);
      },
    };
  }

  // TODO
  getCartBtnEvents() {
    return {};
  }

  productsToCards(products: Product[]) {
    return products.map(
      (product) =>
        new ProductCard(
          product,
          this.getBuyEvents(),
          this.getShowEvents(product)
        )
    );
  }

  setPagination(products: Product[]) {
    if (products.length < this.MAX_COUNT) {
      removeChildren(this.pagination.getComponent());
      return;
    }

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

  getShowEvents(product: Product) {
    return {
      dblclick: () => {
        if (this.modalWindow) {
          this.modalWindow.getComponent().remove();
        }

        this.modalWindow = new ModalWindow(
          product,
          this.getBuyEvents(),
          this.getCloseEvents()
        );
        this.modalWindow.changeVisibility();
        this.app.append(this.modalWindow.getComponent());
      },
    };
  }

  getCloseEvents() {
    return {
      click: () => {
        this.modalWindow.getComponent().remove();
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

          console.log(this.currentUser);
          if (this.currentUser.getUserType() === UserType.Admin) {
            console.log("admin");
            setTimeout(() => {
              this.header.changeVisibility();
              this.launchApp();
            }, 2000);
          } else if (this.currentUser.getUserType() !== UserType.Admin) {
            console.log("guest");
            setTimeout(() => {
              this.launchApp();
            }, 2000);
          }
        } else {
          this.authorizationWindow.error();
          console.error("wrong email or password");
        }
      },
    };
  }

  launchApp() {
    // TODO: sidebar to app

    render(this.app, [
      this.header.getComponent(),
      this.main.getComponent(),
      this.footer.getComponent(),
    ]);

    render(this.main.getComponent(), [
      this.products.getComponent(),
      this.pagination.getComponent(),
    ]);

    this.setPagination(this.productController.getAll());
    this.setDisplayedProducts(this.productController.getAll());
  }

  run() {
    render(this.app, this.spinner.getComponent());

    setTimeout(() => {
      this.launchApp();
    }, 2000);
  }
}
