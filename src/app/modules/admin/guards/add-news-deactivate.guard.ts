import {
  ActivatedRouteSnapshot,
  CanDeactivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { AddNewsComponent } from '../components/add-news/add-news.component';
export const addNewsDeactivateGuard: CanDeactivateFn<AddNewsComponent> = (
  component: AddNewsComponent,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState: RouterStateSnapshot
) => {
  if (component.method) {
    return true;
  } else if (
    component.news.content ||
    component.news.src ||
    component.news.title ||
    component.news.contentDetails
  ) {
    return window.confirm('Czy napewno chcesz opuścić formularz');
  } else {
    return true;
  }
};
