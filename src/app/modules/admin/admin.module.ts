import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AuthComponent } from './components/auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ConcertsComponent } from './components/concerts/concerts.component';
import { TrophyComponent } from './components/trophy/trophy.component';
import { AddTrophyComponent } from './components/add-trophy/add-trophy.component';
import { AllTrophyComponent } from './components/all-trophy/all-trophy.component';
import { EditTrophyComponent } from './components/edit-trophy/edit-trophy.component';
import { NewsComponent } from './components/news/news.component';
import { AddNewsComponent } from './components/add-news/add-news.component';
import { AllNewsComponent } from './components/all-news/all-news.component';
import { EditNewsComponent } from './components/edit-news/edit-news.component';
import { AdminBtnComponent } from './components/admin-btn/admin-btn.component';
@NgModule({
  declarations: [
    AuthComponent,
    AdminComponent,
    ConcertsComponent,
    TrophyComponent,
    AddTrophyComponent,
    AllTrophyComponent,
    EditTrophyComponent,
    NewsComponent,
    AddNewsComponent,
    AllNewsComponent,
    EditNewsComponent,
    AdminBtnComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, HttpClientModule, FormsModule],
  exports: [AdminBtnComponent],
})
export class AdminModule {}
