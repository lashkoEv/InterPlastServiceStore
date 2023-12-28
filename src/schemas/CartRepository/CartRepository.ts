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
    this.products.push(product);
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
}
