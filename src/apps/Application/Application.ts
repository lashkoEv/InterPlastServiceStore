import {
  AuthorizationWindow,
  Button,
  ProductCard,
  ProductsWrapper,
  Spinner,
  Main,
  Header,
  Footer,
} from '../../components';
import { Pagination } from '../../components/Pagination/Pagination';
import { render } from '../../core';
import { UserType } from '../../enums';
import {
  Product,
  ProductController,
  User,
  UserController,
} from '../../schemas';

export class Application {
  private app: HTMLElement;

  private userController: UserController;
  private currentUser: User | undefined;
  private main: Main;
  private productController: ProductController;
  private header: Header;
  private spinner: Spinner;
  private authorizationWindow: AuthorizationWindow;
  private products: ProductsWrapper;
  private pagination: Pagination;
  private footer: Footer;

  constructor() {
    this.app = document.getElementById('app');

    this.userController = new UserController();
    this.currentUser = undefined;

    this.spinner = new Spinner();

    this.authorizationWindow = new AuthorizationWindow(this.getSendEvents());

    this.productController = new ProductController();

    this.products = new ProductsWrapper();

    this.pagination = new Pagination(8);
    this.header = new Header(
      this.getSearchBtnEvents(),
      this.getAdminPanelBtnEvents(),
      this.getLoginBtnEvents(),
      this.getCartBtnEvents()
    );
    this.main = new Main({
      children: [this.products.getComponent(), this.pagination.getComponent()],
    });
    this.footer = new Footer();
  }

  productsToCards(products: Product[]) {
    return products.map(
      (product) => new ProductCard(product, this.getBuyEvents())
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

            buttons.forEach((button) => button.classList.remove('active'));
            btn.classList.add('active');

            this.setDisplayedProducts(products);
          },
        },
      }).getComponent();

      buttons.push(btn);
    }

    buttons[0].classList.add('active');

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

          console.log(this.currentUser);
          if (this.currentUser.getUserType() === UserType.Admin) {
            console.log('admin');
            setTimeout(() => {
              this.header.changeVisibility();
              this.launchApp();
            }, 2000);
          } else if (this.currentUser.getUserType() !== UserType.Admin) {
            console.log('guest');
            setTimeout(() => {
              this.launchApp();
            }, 2000);
          }
        } else {
          this.authorizationWindow.error();
          console.error('wrong email or password');
        }
      },
    };
  }

  getSearchBtnEvents() {
    return {
      click: () => {
        this.setDisplayedProducts(
          this.productController.search(this.header.getSearchInput().value)
        );
      },
    };
  }
  getAdminPanelBtnEvents() {
    return {};
  }
  getCartBtnEvents() {
    return {};
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

  launchApp() {
    // TODO: replace with adding header, main and footer
    // TODO: main -> products + pagination + sort button

    render(this.app, [
      this.header.getComponent(),
      this.main.getComponent(),
      this.footer.getComponent(),
    ]);

    // this.app.append(this.pagination.getComponent());

    this.setPagination(this.productController.getAll());
    this.setDisplayedProducts(this.productController.getAll());
  }

  run() {
    render(this.app, this.spinner.getComponent());

    setTimeout(() => {
      // TODO: onclick of auth button

      this.launchApp();
    }, 2000);
  }
}
