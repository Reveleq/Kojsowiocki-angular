import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ScrollUpComponent } from './components/scroll-up/scroll-up.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
@NgModule({
  declarations: [
    NavComponent,
    HeaderComponent,
    FooterComponent,
    ScrollUpComponent,
    NotFoundComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, NavComponent, FooterComponent, ScrollUpComponent, NotFoundComponent],
})
export class CoreModule {}
