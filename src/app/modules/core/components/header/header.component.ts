import { Component, OnInit } from '@angular/core';
import { NavService } from '../../services/nav.service';
import { ScrollService } from '../../services/scroll.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  scroll() {
    window.scrollTo(0, window.innerHeight);
  }
  constructor(
    private navService: NavService,
    private scrollService: ScrollService
  ) {}

  opacityNav = this.navService.opacity;
  darkNav = this.navService.dark;

  ngOnInit(): void {
    window.addEventListener('click', () => {
      const pageHeight = window.innerHeight;
      this.scrollService.sectionHeight = pageHeight;
    });
  }
}
