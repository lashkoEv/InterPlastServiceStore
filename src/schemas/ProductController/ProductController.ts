import { Product, ProductRepository } from "..";
import { getProducts } from "../../utils";

export class ProductController {
  private productRepository: ProductRepository;

  constructor() {
    this.productRepository = new ProductRepository();

    this.init();
  }
  private init() {
    this.productRepository.save(getProducts());
    this.productRepository.load();
  }
  getAll() {
    return this.productRepository.getAll();
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
}
