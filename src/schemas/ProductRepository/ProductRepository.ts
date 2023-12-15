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
    price: number,
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

  getLast() {
    return this.products[this.products.length - 1];
  }

  search(search: string) {
    return this.products.filter((product) =>
      product.getTitle().toLowerCase().includes(search.toLowerCase())
    );
  }

  sortByTitle(asc: boolean, products: Product[]) {
    return products.sort((a, b) => {
      if (asc) {
        if (a.getTitle().toLowerCase() < b.getTitle().toLowerCase()) {
          return -1;
        } else {
          return 1;
        }
      } else {
        if (a.getTitle().toLowerCase() > b.getTitle().toLowerCase()) {
          return -1;
        } else {
          return 1;
        }
      }
    });
  }

  sortByPrice(asc: boolean, products: Product[]) {
    return products.sort((a, b) => {
      if (asc) {
        if (a.getPrice() < b.getPrice()) {
          return -1;
        } else {
          return 1;
        }
      } else {
        if (a.getPrice() > b.getPrice()) {
          return -1;
        } else {
          return 1;
        }
      }
    });
  }

  sortByAvailability(asc: boolean, products: Product[]) {
    return products.sort((a, b) => {
      if (asc) {
        if (a.getAvailability() < b.getAvailability()) {
          return -1;
        } else {
          return 1;
        }
      } else {
        if (a.getAvailability() > b.getAvailability()) {
          return -1;
        } else {
          return 1;
        }
      }
    });
  }
  //   save(products: Product[] | null): void {
  //     if (products) {
  //       products.forEach((product) => {
  //         localStorage.setItem(
  //           product.getID().toString(),
  //           JSON.stringify(product)
  //         );
  //       });
  //     }

  //     this.products.forEach((product) => {
  //       localStorage.setItem(product.getID().toString(), JSON.stringify(product));
  //     });
  //   }

  //   load(): void {
  //     for (const key in localStorage) {
  //       if (key.includes("product")) {
  //         const productData = localStorage.getItem(key);

  //         if (productData !== null) {
  //           const parsedProduct = JSON.parse(productData);

  //           this.add(
  //             new Product(
  //               parsedProduct.id,
  //               parsedProduct.title,
  //               parsedProduct.isAvailable,
  //               parsedProduct.description,
  //               parsedProduct.price,
  //               parsedProduct.quantity,
  //               parsedProduct.manufacturer,
  //               parsedProduct.imageURL
  //             )
  //           );
  //         }
  //       }
  //     }
  //   }
}
