import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private styleTag!: HTMLStyleElement;
  startScroll() {
    document.body.removeChild(this.styleTag);
  }
  constructor() {
    this.styleTag = this.buildStyleElement();
  }
  buildStyleElement(): HTMLStyleElement {
    const style = document.createElement('style');
    style.textContent = `
    body {
      overflow: hidden;
    }`;
    return style;
  }

  sectionHeight!: number;
  scrollToSection() {
    window.scrollTo(0, this.sectionHeight);
  }
  stopScroll() {
    document.body.appendChild(this.styleTag);
  }
}
