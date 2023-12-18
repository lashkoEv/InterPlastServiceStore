import { CartRepository, Product, ProductInCart } from "..";

export class CartController {
  private cartRepository: CartRepository;

  constructor() {
    this.cartRepository = new CartRepository();
  }
  getAll() {
    return this.cartRepository.getAll();
  }

  add(product: Product) {
    this.cartRepository.add(new ProductInCart(product));
  }

  remove(product: Product) {
    const remove = this.products.findIndex((u) => u === product);
    if (remove !== -1) {
      this.products.splice(remove, 1);
    }
  }
}
