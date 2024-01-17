import { Product, ProductInCart } from "..";
import { IRepository } from "../../interfaces";

export class CartRepository implements IRepository<ProductInCart> {
  private products: ProductInCart[];

  constructor() {
    this.products = [];
  }

  getAll(): ProductInCart[] {
    return this.products;
  }

  add(product: ProductInCart): void {
    const found = this.getByProduct(product.getProduct());

    if(found === undefined) {
      this.products.push(product);
    }else {
      found.increaseCount();
    }
  }

  addMany(products: ProductInCart[]): void {
    products.forEach((product) => this.products.push(product));
  }

  remove(product: ProductInCart) {
    const remove = this.products.findIndex((u) => u === product);
    if (remove !== -1) {
      this.products.splice(remove, 1);
    }
  }

  getByProduct(product: Product) {
    return this.products.find((element) => element.getProduct() === product);
  }

  getTotalPrice() {
    let sum = 0;
    this.products.forEach((product) => sum += product.getTotalPrice());
    return sum;
  }
}
