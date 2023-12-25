import { Component } from "../../core";
import { Input, Button } from "..";
import { ProductRepository } from "../../schemas";

import { IComponent } from '../../interfaces';

import './MinPrice-MaxPrice.css'


export class MinPriceMaxPrice extends ProductRepository {
    private component: Component;

    constructor(products: object[]){
        super();

        this.component = new Component({
            tagName: 'div',
            attrs: {
                id: 'price-filter'
            },
            children: [
                new Input({
                    className: 'min-price',
                    attrs: {
                        value: this.getMinPrice(products)
                    }
                }).getComponent(),

                new Component({
                    tagName: 'div',
                    className: 'to',
                    textContent: '-'
                }).getComponent(),

                new Input({
                    className: 'max-price',
                    attrs: {
                        value: this.getMaxPrice(products)
                    }
                }).getComponent(),

                new Button({
                    className: 'price-filter-btn',
                    textContent: 'OK',
                    events: {
                        click: ()=>{
                            const filtredProducts = this.filterByPrice(products, this.getMinPrice(products),this.getMaxPrice(products));
                            console.log(filtredProducts);
                            
                        }
                    }
                }).getComponent()
            ]
        })
    }

    getMinPrice(products: object[]){
        const prices: number[] = [];

        products.forEach(product => prices.push(product.price));
        
        return Math.min(...prices)
    }

    getMaxPrice(products: object[]){
        const prices: number[] = [];

        products.forEach(product => prices.push(product.price));
        
        return Math.max(...prices)
    }

    getComponent(): HTMLElement {
        return this.component.getComponent();
    }
}