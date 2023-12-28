import { Component } from "../../core";
import { Input, Button } from "..";

<<<<<<< HEAD
import { IComponent } from "../../interfaces";

import "./MinMaxPrice.css";

export class MinMaxPrice implements IComponent {
  private component: Component;
  private inputMin: Input;
  private inputMax: Input;

  constructor(minValue: number, maxValue: number) {
    this.inputMin = new Input({
      className: "min-value",
      attrs: {
        value: minValue,
      },
    });

    this.inputMax = new Input({
      className: "max-value",
      attrs: {
        value: maxValue,
      },
    });

    this.component = new Component({
      className: "min-max-price-wrapper",
      children: [
        this.getMinInput(),

        new Component({
          className: "to",
          textContent: "-",
        }).getComponent(),

        this.getMaxInput(),
      ],
    });
  }

  getMinInput() {
    return this.inputMin.getComponent();
  }

  getMaxInput() {
    return this.inputMax.getComponent();
  }

  getMinValue() {
    return this.getMinInput().value;
  }

  getMaxValue() {
    return this.getMaxInput().value;
  }

  getComponent(): HTMLElement {
    return this.component.getComponent();
  }
}
=======
import { IComponent } from '../../interfaces';

import './MinMaxPrice.css'

export class MinMaxPrice implements IComponent{
    private component: Component;
    private inputMin: Input;
    private inputMax: Input;

    constructor(minValue: number, maxValue: number){
        this.inputMin = new Input({
            className: 'min-value',
            attrs: {
                value: minValue
            }
        })

        this.inputMax = new Input({
            className: 'max-value',
            attrs: {
                value: maxValue
            }
        })

        this.component = new Component({
            className: 'min-max-price-wrapper',
            children: [
                this.getMinInput(),

                new Component({
                    className: 'to',
                    textContent: '-'
                }).getComponent(),

                this.getMaxInput()
            ]
        })
    }

    getMinInput(){
        return this.inputMin.getComponent();
    }

    getMaxInput(){
        return this.inputMax.getComponent();
    }

    getMinValue(){
        return this.getMinInput().value;
    }

    getMaxValue(){
        return this.getMaxInput().value;
    }

    getComponent(): HTMLElement {
        return this.component.getComponent();
    }
}
>>>>>>> 5490f764b7d43a5e0a0d98205f209cc9020fa6d5
