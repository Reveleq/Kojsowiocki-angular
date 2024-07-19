import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavService {
  opacity = {
    opacity: false
  }
  dark = {
    dark: false
  }
  activeNav() {
   this.opacity.opacity = true
   this.dark.dark = true
  }
  hideNav() {
    this.opacity.opacity = false
    this.dark.dark = false
  }
}

