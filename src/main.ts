import { Product, ProductRepository } from "./schemas";

import "./style.css";

const a = new Product();

a.setTitle('smartphone');
a.setPrice('100');
a.setAvailability(true)

const b = new Product();

b.setTitle('laptop');
b.setPrice('200');
b.setAvailability(false)

const c = new Product();

c.setTitle('comp');
c.setPrice('500');
c.setAvailability(true)

const products = new ProductRepository();

products.addMany([a, b, c])

// console.log(products.filterByPrice(products.products, 100));
console.log(products.filterByAvailability(products.products));



