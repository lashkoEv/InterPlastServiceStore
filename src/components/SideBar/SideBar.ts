<<<<<<< HEAD
import { Component, append } from '../../core';
import { CheckBox, Select, MinMaxPrice, Button } from '..';
import { IComponent } from '../../interfaces';


import './SideBar.css';

export class SideBar implements IComponent{
    private component: Component; 
    private select: Select;
    private minMaxPrice: MinMaxPrice;
    private manufacturers: HTMLElement[];
    private availability: HTMLElement[];
    private button: Button;


    constructor(labels: string[], minValue: number, maxValue: number, availability: string[], manufacturers: string[], btnEvents: {}){
        this.select = new Select(labels);

        this.minMaxPrice = new MinMaxPrice(minValue, maxValue);

        this.manufacturers = [];
    
        this.setCheckboxArray(manufacturers, this.manufacturers);
    
        this.availability = [];

        this.setCheckboxArray(availability, this.availability);

        this.button = new Button({
            className: 'apply-btn',
            textContent: 'Apply',
            events: btnEvents
        })

        this.component = new Component({
            tagName: 'aside',
            className: 'sideBar',
            children: [
                this.createTitle('Sort:'),
                this.getSelect(),
                this.createTitle('Price:'),
                this.getMinMaxPrice(),
                this.createTitle('Manufactorers:'),
                ...this.getManufacturers(),
                this.createTitle('Availability:'),
                ...this.getAvailability(),
                this.getButton()
            ]
        })

    }

    private setCheckboxArray(labels: string[], array: HTMLElement[]){
        labels.forEach((label)=>{
            array.push(
                new CheckBox(label).getComponent()
            )
          });
    }

    private createTitle(title: string){
        return new Component({
            className: 'sub-title',
            textContent: title
        }).getComponent()
    }

    getMinMaxPrice(){
        return this.minMaxPrice.getComponent();
    }

    getSelect(){
        return this.select.getComponent();
    }

    getButton(){
        return this.button.getComponent();
    }

    getManufacturers(){
        return this.manufacturers;
    }

    getAvailability(){
        return this.availability;
    }

    getComponent(): HTMLElement {
<<<<<<< HEAD
        return this.sideBar.getComponent();
      }
}
=======
import { Component, append } from "../../core";
import { CheckBox, Select, MinMaxPrice, Button } from "..";
import { IComponent } from "../../interfaces";

import "./SideBar.css";

export class SideBar implements IComponent {
  private component: Component;
  private select: Select;
  private minMaxPrice: MinMaxPrice;
  private manufacturers: HTMLElement[];
  private availability: HTMLElement[];
  private button: Button;

  constructor(
    labels: string[],
    minValue: number,
    maxValue: number,
    availability: string[],
    manufacturers: string[],
    btnEvents: {}
  ) {
    this.select = new Select(labels);

    this.minMaxPrice = new MinMaxPrice(minValue, maxValue);

    this.manufacturers = [];

    this.setCheckboxArray(manufacturers, this.manufacturers);

    this.availability = [];

    this.setCheckboxArray(availability, this.availability);

    this.button = new Button({
      className: "apply-btn",
      textContent: "Apply",
      events: btnEvents,
    });

    this.component = new Component({
      tagName: "aside",
      className: "sideBar",
      children: [
        this.createTitle("Sort:"),
        this.getSelect(),
        this.createTitle("Price:"),
        this.getMinMaxPrice().getComponent(),
        this.createTitle("Manufacturers:"),
        ...this.getManufacturers(),
        this.createTitle("Availability:"),
        ...this.getAvailability(),
        this.getButton(),
      ],
    });
  }

  private setCheckboxArray(labels: string[], array: HTMLElement[]) {
    labels.forEach((label) => {
      array.push(new CheckBox(label).getComponent());
    });
  }

  private createTitle(title: string) {
    return new Component({
      className: "sub-title",
      textContent: title,
    }).getComponent();
  }

  getMinMaxPrice() {
    return this.minMaxPrice;
  }

  getSelect() {
    return this.select.getComponent();
  }

  getButton() {
    return this.button.getComponent();
  }

  getManufacturers() {
    return this.manufacturers;
  }

  getAvailability() {
    return this.availability;
  }

  getComponent(): HTMLElement {
    return this.component.getComponent();
  }
}
>>>>>>> dev
=======
        return this.component.getComponent();
    }

   
}
>>>>>>> 5490f764b7d43a5e0a0d98205f209cc9020fa6d5
