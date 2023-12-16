import { Product, ProductRepository } from "..";
import { getProducts } from "../../utils";

export class ProductController {
  private productRepository: ProductRepository;

  constructor() {
    this.productRepository = new ProductRepository();

    this.init();
  }
  private init() {
    // this.productRepository.save(getProducts());
    // this.productRepository.load();

    this.productRepository.addMany(getProducts());
  }
  getAll() {
    return this.productRepository.getAll();
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
  ) {
    this.productRepository.update(
      product,
      title,
      isAvailable,
      description,
      price,
      quantity,
      manufacturer,
      imageURL
    );
  }
  delete(product: Product) {
    this.productRepository.delete(product);
  }
  add(
    title: string,
    isAvailable: boolean,
    description: string,
    price: number,
    quantity: number,
    manufacturer: string,
    imageURL: string
  ) {
    this.productRepository.add(
      new Product(
        this.productRepository.getLast().getID() + 1,
        title,
        isAvailable,
        description,
        price,
        quantity,
        manufacturer,
        imageURL
      )
    );
  }

  search(search: string) {
    return this.productRepository.search(search);
  }

  sortByTitle(asc: boolean, products: Product[]) {
    return asc
      ? this.productRepository.sortByTitleAsc(products)
      : this.productRepository.sortByTitleDesc(products);
  }

  sortByPrice(asc: boolean, products: Product[]) {
    return asc
      ? this.productRepository.sortByPriceAsc(products)
      : this.productRepository.sortByPriceDesc(products);
  }

  sortByAvailability(asc: boolean, products: Product[]) {
    return asc
      ? this.productRepository.sortByAvailabilityAsc(products)
      : this.productRepository.sortByAvailabilityDesc(products);
  }

  getByPage(page: number, amount: number, products: Product[]) {
    return this.productRepository.getByPage(page, amount, products);
  }
}
