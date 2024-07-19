import {
  ActivatedRouteSnapshot,
  CanDeactivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { AddTrophyComponent } from '../components/add-trophy/add-trophy.component';
export const addTrophyDeactivateGuard: CanDeactivateFn<AddTrophyComponent> = (
  component: AddTrophyComponent,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState: RouterStateSnapshot
) => {
  if (component.method) {
    return true;
  } else if (component.trophy.src || component.trophy.title) {
    return window.confirm('Czy napewno chcesz opuścić formularz');
  } else {
    return true;
  }
};
