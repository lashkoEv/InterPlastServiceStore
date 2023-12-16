export interface IProduct {
  getID(): string;
  getTitle(): string;
  getAvailability(): boolean;
  getDescription(): string;
  getPrice(): number;
  getQuantity(): number;
  getManufacturer(): string;
  getImageURL(): string;

  setTitle(title: string): void;
  setAvailability(isAvailable: boolean): void;
  setDescription(description: string): void;
  setPrice(price: number): void;
  setQuantity(quantity: number): void;
  setManufacturer(manufacturer: string): void;
  setImageURL(imageURL: string): void;
}
