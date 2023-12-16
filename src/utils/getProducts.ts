import { Product } from "../schemas/Product/Product";

export const getProducts = () => {
  const products = [
    new Product(
      "0001",
      "product1",
      true,
      "description1",
      1000,
      10,
      "man1",
      "public/images/image.png"
    ),
    new Product(
      "0002",
      "product2",
      true,
      "description2",
      2000,
      20,
      "man2",
      "public/images/image.png"
    ),
    new Product(
      "0003",
      "product3",
      false,
      "description3",
      300,
      30,
      "man3",
      "public/images/image.png"
    ),
    new Product(
      "0004",
      "product4",
      true,
      "description4",
      4000,
      40,
      "man4",
      "public/images/image.png"
    ),
    new Product(
      "0005",
      "product5",
      true,
      "description5",
      5000,
      50,
      "man5",
      "public/images/image.png"
    ),
    new Product(
      "0006",
      "product6",
      true,
      "description6",
      6000,
      60,
      "man6",
      "public/images/image.png"
    ),
    new Product(
      "0007",
      "product7",
      true,
      "description7",
      7000,
      70,
      "man7",
      "public/images/image.png"
    ),
    new Product(
      "0008",
      "product8",
      true,
      "description8",
      8000,
      80,
      "man8",
      "public/images/image.png"
    ),
    new Product(
      "0009",
      "product9",
      true,
      "description9",
      9000,
      90,
      "man9",
      "public/images/image.png"
    ),
    new Product(
      "0010",
      "product10",
      true,
      "description10",
      10000,
      100,
      "man10",
      "public/images/image.png"
    ),
  ];
  
  return products;
};
