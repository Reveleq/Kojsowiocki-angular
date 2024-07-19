import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavService } from '../../services/nav.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  constructor(private navService: NavService) {}
  activeMobileNav: boolean = false;
  slide = {};
  slideNav() {}
  hideNavBrand() {
    this.activeMobileNav = false;
    this.slide = {
      slide: false,
    };
    this.navService.hideNav();
  }
  hideNav() {
    this.activeMobileNav = !this.activeMobileNav;
    this.slide = {
      slide: false,
    };
    this.navService.hideNav();
  }
  activeNav() {
    this.activeMobileNav = !this.activeMobileNav;
    this.slide = {
      slide: true,
    };
    this.navService.activeNav();
  }
}
