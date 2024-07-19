import {
  ActivatedRouteSnapshot,
  CanDeactivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { EditNewsComponent } from '../components/edit-news/edit-news.component';
export const editNewsDeactivateGuard: CanDeactivateFn<EditNewsComponent> = (
  component: EditNewsComponent,
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
