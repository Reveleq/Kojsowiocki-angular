import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-up',
  templateUrl: './scroll-up.component.html',
  styleUrls: ['./scroll-up.component.scss'],
})
export class ScrollUpComponent implements OnInit {
  document = document;
  active = false;
  scrollToTop(): void {
    return this.document.body.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }
  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 350 ||
        document.documentElement.scrollTop > 300
      ) {
        this.active = true;
      } else {
        this.active = false;
      }
    });
  }
}
