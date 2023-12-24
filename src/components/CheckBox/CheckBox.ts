import { Component } from '../../core'; 
import { IComponent} from '../../interfaces'; 
 
import './CheckBox.css'; 
 
export class CheckBox implements IComponent { 
  private checkboxProducts: Component[] = [];
  private checkBoxComponent: Component; 
 
  constructor(productDescription: string, products?: object[]) { 
    if(products){
      this.manyCheckBoxComponents(productDescription, products);
    } else {
      this.checkBoxComponent = new Component({
        tagName: 'div', 
        className: 'check-box-wrapper', 
        children: [ 
          new Component({ 
            tagName: 'input', 
            className: 'check-box', 
            attrs: {
                type: 'checkbox'
            }, 
          }).getComponent(), 
 
          new Component({ 
            tagName: 'div', 
            className: 'check-box-textContent', 
            textContent: productDescription, 
          }).getComponent(), 
        ], 
      }); 

      return this.checkBoxComponent
    }
  }

  manyCheckBoxComponents(products: object[], productDescription: string){
    products.forEach((product: object) => { 
      const checkbox = new Component({ 
        tagName: 'div', 
        className: 'check-box-wrapper', 
        children: [ 
          new Component({ 
            tagName: 'input', 
            className: 'check-box', 
            attrs: {
                type: 'checkbox'
            }, 
          }).getComponent(), 
 
          new Component({ 
            tagName: 'div', 
            className: 'check-box-textContent', 
            textContent: this.descriptionOfProduct(product, productDescription), 
          }).getComponent(), 
        ], 
      }); 
 
      this.checkboxProducts.push(checkbox); 
    }); 
  }
 
  descriptionOfProduct(product?: object, productDescription: string) { 
    if(product){
      for (const key in product) { 
        if (key === productDescription) { 
          return `${product[key]}`; 
        } 
      } 
    } else return productDescription;
  } 
 
  getComponents(): HTMLElement {
    const container = document.createElement('div');
    container.className = 'list-wrapper'; 
 
    for (let i = 0; i < this.checkboxProducts.length; i++) { 
      const checkboxElement = this.checkboxProducts[i].getComponent(); 
      container.appendChild(checkboxElement); 
    } 
 
    return container; 
  }
}