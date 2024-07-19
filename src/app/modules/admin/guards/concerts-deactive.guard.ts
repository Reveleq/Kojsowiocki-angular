import {
  ActivatedRouteSnapshot,
  CanDeactivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { ConcertsComponent } from '../components/concerts/concerts.component';
export const concertsDeactivateGuard: CanDeactivateFn<ConcertsComponent> = (
  component: ConcertsComponent,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState: RouterStateSnapshot
) => {
  if (component.method) {
    return true;
  } else if (
    component.concerts[0].date ||
    component.concerts[0].content ||
    component.concerts[1].date ||
    component.concerts[1].content
  ) {
    return window.confirm('Czy napewno chcesz opuścić formularz');
  } else {
    return true;
  }
};
