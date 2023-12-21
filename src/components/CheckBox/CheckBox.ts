import { Component } from '../../core';
import { IComponent, IHtmlData } from '../../interfaces';

import './CheckBox.css';

export class CheckBox implements IComponent{
    private checkboxProducts: Component[] = [];

    constructor(products: [], productDescription: string){

        products.forEach((product: object)=>{
            const checkbox = new Component({
                tagName: 'div',
                className: 'check-box-wrapper',
                children: [
                    new Component({
                        tagName: 'input',
                        className: 'check-box',
                        type: 'checkbox'
                    }),

                    new Component({
                        tagName: 'div',
                        className: 'check-box-textContent',
                        textContent: this.descriptionOfProduct(product, productDescription)
                    })
                ]
            })

            this.checkboxProducts.push(checkbox)
        })
    }

    descriptionOfProduct(product: object, productDescription: string){
        for(const key in product){
            if(key === productDescription){                
                return `${product[key]}`
            }
        }
    }

    getComponent(): HTMLElement {
        for(let i = 0; i < this.checkboxProducts.length; i++){
            this.checkboxProducts[i].getComponent()
        }
      }
}