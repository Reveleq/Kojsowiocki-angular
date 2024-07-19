import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HistoryComponent } from './components/history/history.component';
import { NewsComponent } from './components/news/news.component';
import { ContactComponent } from './components/contact/contact.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { TimetableComponent } from './components/timetable/timetable.component';
import { AchievementsPopupComponent } from './components/achievements-popup/achievements-popup.component';
import { HistoryDetailsComponent } from './components/history-details/history-details.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { NewsDetailsPopupComponent } from './components/news-details-popup/news-details-popup.component';
import { NotFoundComponent } from '../core/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: TimetableComponent, pathMatch: 'full' },
  { path: 'o-nas', component: AboutUsComponent, title: 'O nas | Kojsowiocki' },
  {
    path: 'trofea',
    component: AchievementsComponent,
    title: 'Trofea | Kojsowiocki',
  },
  { path: 'trofea/:id', component: AchievementsPopupComponent },
  {
    path: 'historia',
    component: HistoryComponent,
    title: 'Historia | Kojsowiocki',
  },
  {
    path: 'historia/:id',
    component: HistoryDetailsComponent,
  },
  {
    path: 'aktualnosci',
    component: NewsComponent,
    title: 'Aktualności | Kojsowiocki',
  },
  {
    path: 'aktualnosci/:id',
    component: NewsDetailsComponent,
    title: 'Aktualności | Kojsowiocki',
  },
  {
    path: 'aktualnosci/:id/:id',
    component: NewsDetailsPopupComponent,
    title: 'Aktualności | Kojsowiocki',
  },
  
  {
    path: 'kontakt',
    component: ContactComponent,
    title: 'Kontakt | Kojsowiocki',
  },
 
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
