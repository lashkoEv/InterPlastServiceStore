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

  increaseCount(product: Product) {
    let found = this.cartRepository.getByProduct(product);
    if (found) {
      found.increaseCount();
    }
  }

  decreaseCount(product: Product) {
    let found = this.cartRepository.getByProduct(product);
    if (found) {
      found.decreaseCount();
      if (found.getCount() <= 0) {
        this.remove(product);
      }
    }
  }

  getTotalPrice() {
    return this.cartRepository.getTotalPrice();
  }

  getNewPrice() {
    const totalDiscount = 0.2; 
    const totalOriginalPrice = this.getTotalPrice();
    const discountedPrice = totalOriginalPrice * (1 - totalDiscount);

    return discountedPrice >= 0 ? discountedPrice : 0;
  }

}
