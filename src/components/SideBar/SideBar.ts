import { Component } from '../../core';
import { IComponent } from '../../interfaces';


import './SideBar.css';

export class SideBar implements IComponent{
    private sideBar: Component; 
    
    constructor(){
        this.sideBar = new Component({
            tagName: 'div',
            
            attrs: {
                id: 'sideBar'
            },

            
        })
    }

    getComponent(): HTMLElement {
        return this.sideBar.getComponent();
      }
}