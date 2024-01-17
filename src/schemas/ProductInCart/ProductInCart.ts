import { Product } from "..";

export class ProductInCart {
  private product: Product;
  private count: number;

  constructor(product: Product) {
    this.product = product;
    this.count = 1;
  }

  getProduct() {
    return this.product;
  }

  getCount() {
    return this.count;
  }

  increaseCount() {
    this.count++;
  }

  decreaseCount() {
    this.count--;
  }

  getTotalPrice() {
    return this.product.getPrice() * this.count;
  }
  getNewPrice() {
    const totalDiscount = 0.2; 
    const discountedPrice = this.getTotalPrice() * (1 - totalDiscount);

    return discountedPrice >= 0 ? discountedPrice : 0;
  }
}
