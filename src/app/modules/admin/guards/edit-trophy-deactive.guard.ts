import {
  ActivatedRouteSnapshot,
  CanDeactivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { EditTrophyComponent } from '../components/edit-trophy/edit-trophy.component';
export const editTrophyDeactivateGuard: CanDeactivateFn<EditTrophyComponent> = (
  component: EditTrophyComponent,
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
