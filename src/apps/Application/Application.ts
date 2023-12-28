import {
  AuthorizationWindow,
  Button,
  Header,
  Main,
  ModalWindow,
  ProductCard,
  ProductsWrapper,
  SideBar,
  Spinner,
  Footer,
  AdminPanel,
  ProductInTable,
  ProductModalWindow,
  SideBar,
} from "../../components";
import { Pagination } from "../../components/Pagination/Pagination";
<<<<<<< HEAD
import { append, removeChildren, render } from "../../core";
import { UserType } from "../../enums";
=======
import { Component, render } from "../../core";
>>>>>>> 5490f764b7d43a5e0a0d98205f209cc9020fa6d5
import {
  Product,
  ProductController,
  User,
  UserController,
} from "../../schemas";
import { availabilityLabels, sortingLabels } from "../../utils";

export class Application {
  private toShow: Product[];

  private MAX_COUNT = 8;

  private app: HTMLElement;

  private userController: UserController;
  private currentUser: User | undefined;

  private productController: ProductController;

  private spinner: Spinner;
  private authorizationWindow: AuthorizationWindow;
  private products: ProductsWrapper;
  private pagination: Pagination;

<<<<<<< HEAD
  private header: Header;
  private sidebar: SideBar;
  private main: Main;
  private footer: Footer;

  private modalWindow: ModalWindow;

  private adminPanel: AdminPanel;
  private productModalWindow: ProductModalWindow;
  private currentProduct: Product | null;
=======
  private sideBar: SideBar;
>>>>>>> 5490f764b7d43a5e0a0d98205f209cc9020fa6d5

  constructor() {
    this.app = document.getElementById("app");

    this.toShow = [];

    this.modalWindow = null;

    this.userController = new UserController();
    this.currentUser = undefined;

    this.spinner = new Spinner();

    this.authorizationWindow = new AuthorizationWindow(this.getSendEvents());

    this.productController = new ProductController();

    this.products = new ProductsWrapper();

<<<<<<< HEAD
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

    this.sidebar = new SideBar(
      sortingLabels,
      this.productController.getMinPrice(),
      this.productController.getMaxPrice(),
      availabilityLabels,
      this.productController.getManufacturers(),
      this.getFilterEvents()
    );
  }

  getFilterEvents() {
    return {
      click: () => {
        if (this.toShow.length <= 0) {
          this.toShow = this.productController.getAll();
        }

        this.selectSorting(this.sidebar.getSelect().value);

        this.filterByPrice();

        this.filterByManufacturers();

        this.filterByAvailability();

        this.show();
      },
    };
  }

  selectSorting(criteria: string) {
    switch (criteria) {
      case sortingLabels[0]: {
        this.toShow = this.productController.sortByTitle(true, this.toShow);
        break;
      }
      case sortingLabels[1]: {
        this.toShow = this.productController.sortByTitle(false, this.toShow);
        break;
      }
      case sortingLabels[2]: {
        this.toShow = this.productController.sortByPrice(true, this.toShow);
        break;
      }
      case sortingLabels[3]: {
        this.toShow = this.productController.sortByPrice(false, this.toShow);
        break;
      }
      case sortingLabels[4]: {
        this.toShow = this.productController.sortByAvailability(
          true,
          this.toShow
        );
        break;
      }
      case sortingLabels[5]: {
        this.toShow = this.productController.sortByAvailability(
          false,
          this.toShow
        );
        break;
      }
    }
  }

  filterByPrice() {
    this.toShow = this.productController.filterByPrice(
      this.toShow,
      this.sidebar.getMinMaxPrice().getMinValue(),
      this.sidebar.getMinMaxPrice().getMaxValue()
    );
  }

  filterByManufacturers() {
    const checkBoxes = this.sidebar
      .getManufacturers()
      .filter((el) => el.children[0].checked);

    const manufacturers = checkBoxes.map((el) => el.children[1].textContent);

    if (manufacturers.length > 0) {
      this.toShow = this.productController.filterByManufacturer(
        this.toShow,
        manufacturers
      );
    }
  }

  filterByAvailability() {
    const checkBoxes = this.sidebar
      .getAvailability()
      .filter((el) => el.children[0].checked);

    const availability = checkBoxes.map((el) =>
      el.children[1].textContent === "Available" ? true : false
    );

    if (availability.length > 0) {
      this.toShow = this.productController.filterByAvailability(
        this.toShow,
        availability
      );
    }
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
        this.toShow = this.productController.search(
          this.header.getSearchInput().value
        );

        this.show();
      },
    };
  }

  show() {
    this.setPagination(this.toShow);
    this.setDisplayedProducts(this.toShow);
    this.header.reset();
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
=======
    this.pagination = new Pagination(8);
    
    this.sideBar = new SideBar(sortingLabels, this.productController.getMinPrice(), this.productController.getMaxPrice(), availabilityLabels, this.productController.getManufacturers(), this.getFilterEvents());
  }

  getFilterEvents(){
    return {};
  }

  getSelectLabels(){
    return ['ss', 'dd', 'ff'];
>>>>>>> 5490f764b7d43a5e0a0d98205f209cc9020fa6d5
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
    render(this.app, [
      this.header.getComponent(),
      this.sidebar.getComponent(),
      this.main.getComponent(),
      this.footer.getComponent(),
    ]);

<<<<<<< HEAD
    render(this.main.getComponent(), [
      this.products.getComponent(),
      this.pagination.getComponent(),
    ]);

    this.toShow = this.productController.getAll();
    this.show();
=======
    render(this.app, this.products.getComponent());
    this.app.append(this.sideBar.getComponent());
    this.app.append(this.pagination.getComponent());
    this.setPagination(this.productController.getAll());
    this.setDisplayedProducts(this.productController.getAll());
>>>>>>> 5490f764b7d43a5e0a0d98205f209cc9020fa6d5
  }

  run() {
    render(this.app, this.spinner.getComponent());

    setTimeout(() => {
      this.launchApp();
    }, 2000);
  }
}
