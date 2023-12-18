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
    let found = this.cartRepository.getByProduct(product);
    if (found) {
      this.cartRepository.remove(found);
    }
  }
}
