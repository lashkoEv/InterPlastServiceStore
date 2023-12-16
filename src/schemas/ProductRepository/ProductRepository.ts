import { Product } from "..";
import { IRepository } from "../../interfaces";

export class ProductRepository implements IRepository<Product> {
  private products: Product[];

  constructor() {
    this.products = [];
  }

  //   * --- basic logic (Misha)

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

  //   * --- search (Yevheniia)

  search(search: string) {
    return this.products.filter((product) =>
      product.getTitle().toLowerCase().includes(search.toLowerCase())
    );
  }

  //   * --- sorting (Yevheniia)

  sortByTitleAsc(products: Product[]) {
    return products.sort((a, b) => {
      if (a.getTitle().toLowerCase() === b.getTitle().toLowerCase()) return 0;

      if (a.getTitle().toLowerCase() < b.getTitle().toLowerCase()) {
        return -1;
      } else {
        return 1;
      }
    });
  }

  sortByTitleDesc(products: Product[]) {
    return products.sort((a, b) => {
      if (a.getTitle().toLowerCase() === b.getTitle().toLowerCase()) return 0;

      if (a.getTitle().toLowerCase() > b.getTitle().toLowerCase()) {
        return -1;
      } else {
        return 1;
      }
    });
  }

  sortByPriceAsc(products: Product[]) {
    return products.sort((a, b) => {
      if (a.getPrice() === b.getPrice()) return 0;

      if (a.getPrice() < b.getPrice()) {
        return -1;
      } else {
        return 1;
      }
    });
  }

  sortByPriceDesc(products: Product[]) {
    return products.sort((a, b) => {
      if (a.getPrice() === b.getPrice()) return 0;

      if (a.getPrice() > b.getPrice()) {
        return -1;
      } else {
        return 1;
      }
    });
  }

  sortByAvailabilityAsc(products: Product[]) {
    return products.sort((a, b) => {
      if (a.getAvailability() === b.getAvailability()) return 0;

      if (a.getAvailability() > b.getAvailability()) {
        return -1;
      } else {
        return 1;
      }
    });
  }

  sortByAvailabilityDesc(products: Product[]) {
    return products.sort((a, b) => {
      if (a.getAvailability() < b.getAvailability()) {
        return -1;
      } else {
        return 1;
      }
    });
  }

  //   * --- pagination (Yevheniia)

  getByPage(page: number, amount: number, products: Product[]): Product[] {
    const start = (page - 1) * amount;
    let end = page * amount;

    if (end > products.length - 1) end = products.length;

    const byPage = products.slice(start, end);

    if (byPage.length === 0) {
      return this.getByPage(page - 1, amount, products);
    }

    return byPage;
  }

  //   * --- filters (Ruslan)

  filterByPrice(products: Product[], HighestPrice: number) {
    return products.filter((el) => {
      const productPrice = el.getPrice();

      if (productPrice <= HighestPrice) {
        return true;
      }
    });
  }

  filterByAvailability(products: Product[]) {
    return products.filter((el) => {
      const productAvailability = el.getAvailability();

      if (productAvailability) {
        return true;
      }
    });
  }

  filterByManufactorer(products: Product[], manufacturer: string) {
    return products.filter((el) => {
      const productManufactorer = el.getManufacturer();

      if (productManufactorer === manufacturer) {
        return true;
      }
    });
  }
}
