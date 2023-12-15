import { Product, ProductRepository } from "./schemas";

import "./style.css";

const a = new Product();

a.setTitle('smartphone');
a.setPrice('100');

const b = new Product();

b.setTitle('laptop');
b.setPrice('200');

const c = new Product();

c.setTitle('comp');
c.setPrice('500');

const products = new ProductRepository();

products.addMany([a, b, c])

// console.log(products.filterByPrice(products.products, 100));



