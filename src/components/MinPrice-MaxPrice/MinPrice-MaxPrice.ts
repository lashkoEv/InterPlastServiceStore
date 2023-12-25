import { Component } from "../../core";
import { Input, Button } from "..";

import { IComponent } from '../../interfaces';


export class MinPriceMaxPrice implements IComponent {
    private component: Component;
    
    constructor(products: object[]){
        this.component = new Component({
            tagName: 'div',
            attrs: {
                id: 'price-filter'
            },
            children: [
                new Component({
                    tagName: 'div',
                    className: 'min-title',
                    textContent: 'Min Price:'
                }).getComponent(),

                new Input({
                    className: 'min-price'
                }).getComponent(),

                new Component({
                    tagName: 'div',
                    className: 'max-title',
                    textContent: 'Max Price:'
                }).getComponent(),

                new Input({
                    className: 'max-price'
                }).getComponent(),

                new Button({
                    className: 'price-filter-btn',
                    textContent: 'OK'
                }).getComponent()
            ]
        })
    }

    getComponent(): HTMLElement {
        
    }
}