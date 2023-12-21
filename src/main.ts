// import { Application } from "./apps";
// import "./style.css";

// const application = new Application();

// // application.run();

// const a = new ProductRepository();


import { CheckBox } from "./components/CheckBox/CheckBox";
import { Component, append } from "./core";
import { Product, ProductRepository } from "./schemas";

import "./style.css";

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



const huy = new CheckBox(products.products, 'manufacturer');

console.log(huy);

const app = document.querySelector('#app') as HTMLElement;

append(app, huy.getComponent());

