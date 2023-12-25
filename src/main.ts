import { Application } from "./apps";
import "./style.css";

const application = new Application();

application.run();

// const a = new ProductRepository();


<<<<<<< HEAD
// import { SideBar } from "./components";
// import { CheckBox } from "./components/CheckBox/CheckBox";
// import { Selector } from "./components/Selector/Selector";
// import { Component, append } from "./core";
// import { Product, ProductRepository } from "./schemas";
=======
import { SideBar } from "./components";
import { CheckBox } from "./components/CheckBox/CheckBox";
import { MinPriceMaxPrice } from "./components/MinPrice-MaxPrice/MinPrice-MaxPrice";
import { Selector } from "./components/Selector/Selector";
import { Component, append } from "./core";
import { Product, ProductRepository } from "./schemas";
>>>>>>> 9ddfeccb3e0c31a08423012c64e377aa6d673845

// import "./style.css";
// import { getProducts } from "./utils";

// const a = new Product();

// a.setTitle('smartphone');
// a.setPrice(100);
// a.setAvailability(true);
// a.setManufacturer('samsung')

// const b = new Product();

// b.setTitle('laptop');
// b.setPrice(200);
// b.setAvailability(false);
// b.setManufacturer('samsung')

// const c = new Product();

// c.setTitle('comp');
// c.setPrice(500);
// c.setAvailability(true);
// c.setManufacturer('hp')

// const products = new ProductRepository();

// products.addMany([a, b, c])

<<<<<<< HEAD
// // console.log('[products]', products.products);
=======
console.log(products);


// console.log('[products]', products.products);
>>>>>>> 9ddfeccb3e0c31a08423012c64e377aa6d673845



// const asd = new CheckBox(products.products, 'manufacturer');

// const app = document.querySelector('#app') as HTMLSElement;
// // const asd = new CheckBox('huy');
// // append(app, asd.getComponents());

// // let arr = ['ss','bb','dd'];

// // const abv = new Selector(arr);

// // append(app, abv.getComponent())

<<<<<<< HEAD
// const sideBar = new SideBar(getProducts()).getComponent();

// append(app, sideBar)
=======
// const sideBar = new SideBar().getComponent();

// append(app, sideBar)

const min = new MinPriceMaxPrice(products.products).getComponent()

append(app, min)
>>>>>>> 9ddfeccb3e0c31a08423012c64e377aa6d673845
