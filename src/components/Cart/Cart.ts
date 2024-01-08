// TODO: FIX THIS

// import { Button } from "..";
// import { Component } from "../../core";
// import { IComponent } from "../../interfaces";
// import { Product } from "../../schemas";

// export class Cart implements IComponent {
//   private component: Component;
//   private description: Button;
//   private img: Component;
//   private count: Component;
//   private increase: Button;
//   private price: Component;
//   private deleteBtn: Button;

//   constructor(product: Product) {
//     this.img = new Component({
//       tagName: "img",
//       className: "image",
//       attrs: {
//         src: product.getImageURL(),
//       },
//     });

//     this.description = new Button({
//       tagName: "button",
//       className: "description",
//       textContent: " < ",
//     });

//     this.count = new Component({
//       tagName: "p",
//       className: "count",
//       textContent: "0",
//     });

//     this.increase = new Button({
//       tagName: "button",
//       className: "increase",
//       textContent: " > ",
//     });

//     this.price = new Component({
//       tagName: "p",
//       className: "price",
//       textContent: `${product.getPrice()} ₴`,
//     });

//     this.deleteBtn = new Button({
//       tagName: "button",
//       className: "deletebtn",
//       textContent: "Delete",
//     });

//     this.component = new Component({
//       className: "cart",
//       children: [
//         // this.getComponent(),
//         this.getImg(),
//         this.getDescription(),
//         this.getCount(),
//         this.getIncrease(),
//         this.getPrice(),
//         this.getDeleteBtn(),
//       ],
//     });
//   }

//   getComponent(): HTMLElement {
//     return this.component.getComponent();
//   }
//   getImg(): HTMLElement {
//     return this.img.getComponent();
//   }
//   getDescription(): HTMLElement {
//     return this.description.getComponent();
//   }
//   getCount(): HTMLElement {
//     return this.count.getComponent();
//   }
//   getIncrease(): HTMLElement {
//     return this.increase.getComponent();
//   }
//   getPrice(): HTMLElement {
//     return this.price.getComponent();
//   }
//   getDeleteBtn(): HTMLElement {
//     return this.deleteBtn.getComponent();
//   }
// }