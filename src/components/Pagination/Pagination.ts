import { Component } from "../../core";
import { IComponent } from "../../interfaces";

import "./Pagination.css";

export class Pagination implements IComponent {
  private component: Component;

  private maxCount;
  private currentPage: number;

  constructor(maxCount: number) {
    this.currentPage = 1;

    this.maxCount = maxCount;

    this.component = new Component({
      className: "pagination",
    });
  }

  setCurrentPage(page: number) {
    this.currentPage = page;
  }

  getMaxCount() {
    return this.maxCount;
  }

  getCurrentPage() {
    return this.currentPage;
  }

  getComponent(): HTMLElement {
    return this.component.getComponent();
  }
}
