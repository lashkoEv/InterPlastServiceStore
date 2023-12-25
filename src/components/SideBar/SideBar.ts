import { Component, append } from '../../core';
import { CheckBox, Selector } from '..';
import { IComponent } from '../../interfaces';


import './SideBar.css';

export class SideBar implements IComponent{
    private sideBar: Component; 
    
    constructor(products: object[]){
        this.sideBar = new Component({
            tagName: 'div',
            attrs: {
                id: 'sideBar'
            },
            children: [
                this.getChildren('Sort:', [new Selector(['ss', 'dd', 'aa'])]),
                this.getChildren('Is availible:',[new CheckBox('Available'), new CheckBox('Unavailable')]),
                this.getChildren('Manufactorer', [new CheckBox(products, 'manufacturer').getComponents()], products)
            ]
        })
    }

    getChildren(title: string, newComponent: Component[], products?: object[]){
        const childrenWrapper = new Component({
            tagName: 'div',
            className: `${title}-wrapper`,
            children: [
                new Component({
                    tagName: 'div',
                    className: `${title}-title`,
                    textContent: title.charAt(0).toUpperCase() + title.slice(1)
                }).getComponent()
            ]
        }).getComponent()

        newComponent.forEach((el)=>{
            if(products){
                append(childrenWrapper, el);
            } else append(childrenWrapper, el.getComponent())
        })
        
        return childrenWrapper;
    }

    getComponent(): HTMLElement {
        return this.sideBar.getComponent();
      }
}