import { Product } from "..";
import { IRepository } from "../../interfaces";

export class ProductRepository implements IRepository<Product> {
  private products: Product[];

  constructor() {
    this.products = [];
  }

  getAll(): Product[] {
    return this.products;
  }

  add(product: Product): void {
    this.products.push(product);
  }

  addMany(products: Product[]): void {
    this.products.push(...products);
  }

  update(
    product: Product,
    title: string,
    isAvailable: boolean,
    description: string,
    price: string,
    quantity: number,
    manufacturer: string,
    imageURL: string
  ): void {
    const toUpdate = this.products.find((p) => p.getID() === product.getID());

    if (toUpdate) {
      toUpdate.setTitle(title);
      toUpdate.setAvailability(isAvailable);
      toUpdate.setDescription(description);
      toUpdate.setPrice(price);
      toUpdate.setQuantity(quantity);
      toUpdate.setManufacturer(manufacturer);
      toUpdate.setImageURL(imageURL);
    }
  }

  delete(product: Product): void {
    const index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  save(products: Product[] | null): void {
    if (products) {
      products.forEach((product) => {
        localStorage.setItem(
          product.getID().toString(),
          JSON.stringify(product)
        );
      });
    }

    this.products.forEach((product) => {
      localStorage.setItem(product.getID().toString(), JSON.stringify(product));
    });
  }

  load(): void {
    for (const key in localStorage) {
      if (key.includes("product")) {
        const productData = localStorage.getItem(key);

        if (productData !== null) {
          const parsedProduct = JSON.parse(productData);

          this.add(
            new Product(
              parsedProduct.id,
              parsedProduct.title,
              parsedProduct.isAvailable,
              parsedProduct.description,
              parsedProduct.price,
              parsedProduct.quantity,
              parsedProduct.manufacturer,
              parsedProduct.imageURL
            )
          );
        }
      }
    }
  }
  getLast() {
    return this.products[this.products.length - 1];
  }
}
