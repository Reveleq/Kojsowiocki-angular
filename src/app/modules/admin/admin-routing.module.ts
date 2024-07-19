import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./components/auth/auth.component";
import { AdminComponent } from "./components/admin/admin.component";
import { ConcertsComponent } from "./components/concerts/concerts.component";
import { TrophyComponent } from "./components/trophy/trophy.component";
import { AddTrophyComponent } from "./components/add-trophy/add-trophy.component";
import { AllTrophyComponent } from "./components/all-trophy/all-trophy.component";
import { EditTrophyComponent } from "./components/edit-trophy/edit-trophy.component";
import { NewsComponent } from "./components/news/news.component";
import { AddNewsComponent } from "./components/add-news/add-news.component";
import { AllNewsComponent } from "./components/all-news/all-news.component";
import { EditNewsComponent } from "./components/edit-news/edit-news.component";
import { addNewsDeactivateGuard } from "./guards/add-news-deactivate.guard";
import { editNewsDeactivateGuard } from "./guards/edit-news-deactive.guard";
import { concertsDeactivateGuard } from "./guards/concerts-deactive.guard";
import { addTrophyDeactivateGuard } from "./guards/add-trophy-deactive.guard";
import { editTrophyDeactivateGuard } from "./guards/edit-trophy-deactive.guard";
import { authGuard } from "./guards/auth.guard";
const routes: Routes = [
  {
    path: "admin",
    component: AuthComponent,
  },
  {
    path: "admin/panel",
    component: AdminComponent,
    canMatch: [authGuard],
  },
  {
    path: "admin/panel/koncerty",
    component: ConcertsComponent,
    canDeactivate: [concertsDeactivateGuard],
  },
  {
    path: "admin/panel/trofea",
    component: TrophyComponent,
  },

  {
    path: "admin/panel/aktualnosci",
    component: NewsComponent,
  },

  {
    path: "admin/panel/aktualnosci/edytuj/:id",
    component: EditNewsComponent,
    canDeactivate: [editNewsDeactivateGuard],
  },
  {
    path: "admin/panel/aktualnosci/zarzadzaj",
    component: AllNewsComponent,
  },
  {
    path: "admin/panel/aktualnosci/dodaj",
    component: AddNewsComponent,
    canDeactivate: [addNewsDeactivateGuard],
  },
  {
    path: "admin/panel/trofea/zarzadzaj",
    component: AllTrophyComponent,
  },
  {
    path: "admin/panel/trofea/dodaj",
    component: AddTrophyComponent,
    canDeactivate: [addTrophyDeactivateGuard],
  },
  {
    path: "admin/panel/trofea/edytuj/:id",
    component: EditTrophyComponent,
    canDeactivate: [editTrophyDeactivateGuard],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
