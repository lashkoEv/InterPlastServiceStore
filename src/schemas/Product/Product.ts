import { IProduct } from "../../interfaces";

export class Product implements IProduct {
  constructor(
    private id: string,
    private title: string,
    private isAvailable: boolean,
    private description: string,
    private price: number,
    private quantity: number,
    private manufacturer: string,
    private imageURL: string
  ) {}
  // --- get
  getID(): string {
    return this.id;
  }
  getTitle(): string {
    return this.title;
  }
  getAvailability(): boolean {
    return this.isAvailable;
  }
  getDescription(): string {
    return this.description;
  }
  getPrice(): number {
    return this.price;
  }
  getQuantity(): number {
    return this.quantity;
  }
  getManufacturer(): string {
    return this.manufacturer;
  }
  getImageURL(): string {
    return this.imageURL;
  }
  // --- set
  setTitle(title: string): void {
    this.title = title;
  }
  setAvailability(isAvailable: boolean): void {
    this.isAvailable = isAvailable;
  }
  setDescription(description: string): void {
    this.description = description;
  }
  setPrice(price: number): void {
    this.price = price;
  }
  setQuantity(quantity: number): void {
    this.quantity = quantity;
  }
  setManufacturer(manufacturer: string): void {
    this.manufacturer = manufacturer;
  }
  setImageURL(imageURL: string): void {
    this.imageURL = imageURL;
  }
}
