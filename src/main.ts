// import { Application } from "./apps";
// import "./style.css";

// const application = new Application();

// // application.run();

// const a = new ProductRepository();


import { CheckBox } from "./components/CheckBox/CheckBox";
import { Selector } from "./components/Selector/Selector";
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

// console.log('[products]', products.products);



// const asd = new CheckBox(products.products, 'manufacturer');

const app = document.querySelector('#app') as HTMLElement;
// const asd = new CheckBox('huy');
// append(app, asd.getComponents());

// let arr = ['ss','bb','dd'];

// const abv = new Selector(arr);

// append(app, abv.getComponent())