import { Component } from '../../core'; 
import { IComponent} from '../../interfaces'; 

import './Select.css'; 
 
export class Select implements IComponent { 
  private component: Component; 
 
  constructor(labels: string[]) { 
    this.component = new Component({ 
        tagName: 'select', 
        className: 'selector',
        children: this.getOptions(labels)
    }); 
  }
 
  getOptions(labels: string[]){
    const options: HTMLElement[] = [];
    
    labels.forEach((label: string)=>{
        const optionElement = new Component({
            tagName: 'option',
            textContent: label,
            attrs: {
                value: label,
            }            
        }).getComponent()

        options.push(optionElement);
    })

    return options;
  }

  getComponent(): HTMLElement { 
    return this.component.getComponent();
  } 
}
