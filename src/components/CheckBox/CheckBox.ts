import { Component } from '../../core'; 
import { IComponent, IHtmlData } from '../../interfaces'; 
 
import './CheckBox.css'; 
 
export class CheckBox implements IComponent { 
  private checkboxProducts: Component[] = []; 
 
  constructor(products: object[], productDescription: string) { 
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
 
  descriptionOfProduct(product: object, productDescription: string) { 
    for (const key in product) { 
      if (key === productDescription) { 
        return `${product[key]}`; 
      } 
    } 
  } 
 
  getComponent(): HTMLElement { 
    const container = document.createElement('div');
    container.className = 'list-wrapper'; 
 
    for (let i = 0; i < this.checkboxProducts.length; i++) { 
      const checkboxElement = this.checkboxProducts[i].getComponent(); 
      container.appendChild(checkboxElement); 
    } 
 
    return container; 
  } 
}