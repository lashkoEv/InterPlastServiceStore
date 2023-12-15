import { Product, ProductRepository } from "./schemas";

import "./style.css";
import { getProducts } from "./utils";

const a = new Product();

a.setTitle('smartphone');
a.setPrice(100);
a.setAvailability(true);
a.setManufacturer('samsung')

const b = new Product();

b.setTitle('laptop');
b.setPrice(200);
b.setAvailability(false);
b.setManufacturer('samsung')

const c = new Product();

c.setTitle('comp');
c.setPrice(500);
c.setAvailability(true);
c.setManufacturer('hp')

const products = new ProductRepository();

products.addMany([a, b, c])

// console.log(products.filterByPrice(products.products, 100));
// console.log(products.filterByAvailability(products.products));
console.log(products.filterByManufactorer(products.products, 'samsung'));

