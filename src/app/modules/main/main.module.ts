import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HistoryComponent } from './components/history/history.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { NewsComponent } from './components/news/news.component';
import { ContactComponent } from './components/contact/contact.component';
import { TimetableComponent } from './components/timetable/timetable.component';
import { AchievementsPopupComponent } from './components/achievements-popup/achievements-popup.component';
import { HistoryDetailsComponent } from './components/history-details/history-details.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { NewsDetailsPopupComponent } from './components/news-details-popup/news-details-popup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from '../core/components/not-found/not-found.component';

@NgModule({
  declarations: [
    AboutUsComponent,
    HistoryComponent,
    AchievementsComponent,
    NewsComponent,
    ContactComponent,
    TimetableComponent,
    AchievementsPopupComponent,
    HistoryDetailsComponent,
    NewsDetailsComponent,
    NewsDetailsPopupComponent,
  ],
  imports: [CommonModule, MainRoutingModule, FormsModule, HttpClientModule],
})
export class MainModule {}
