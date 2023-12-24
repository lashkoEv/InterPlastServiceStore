import { Component } from '../../core'; 
import { IComponent} from '../../interfaces'; 
 
import './Selector.css'; 
 
export class Selector implements IComponent { 
  private selectorProduct: Component; 
 
  constructor(options: string[]) { 
    this.selectorProduct = new Component({ 
        tagName: 'select', 
        className: 'selector',
        children: this.getOptions(options)
    }); 
  }
 
  getOptions(options: string[]){
    const optionsProducts: [] = [];
    
    options.forEach((option: string)=>{
        const optionElement = new Component({
            tagName: 'option',
            textContent: option.charAt(0).toUpperCase() + option.slice(1),
            attrs: {
                value: option,
            }            
        }).getComponent()

        optionsProducts.push(optionElement);
    })

    return optionsProducts;    
  }

  getComponent(): HTMLElement { 
    return this.selectorProduct.getComponent();
  } 
}