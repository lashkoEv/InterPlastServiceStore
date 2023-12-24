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
                this.getChildren(products, 'Sort:', [new Selector(['ss', 'dd', 'aa'])]),
                this.getChildren(products, 'Is availible:',[new CheckBox('Available'), new CheckBox('Unavailable')]),
                this.getChildren(products, 'Manufactorer', [new CheckBox('manufactorer', products)])
            ]
        })
    }

    getChildren(products: object[], title: string, newComponent: Component[]){
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
            append(childrenWrapper, el.getComponent());
        })
        
        return childrenWrapper;
    }

    getComponent(): HTMLElement {
        return this.sideBar.getComponent();
      }
}