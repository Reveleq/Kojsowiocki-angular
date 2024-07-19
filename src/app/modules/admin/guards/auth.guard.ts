import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { inject } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { catchError, map, of } from "rxjs";

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router) as Router;
  const authService = inject(AuthService) as AuthService;
  const cookieService = inject(CookieService) as CookieService;
  // const authCookie = cookieService.get("auth-cookie")
  //   ? cookieService.get("auth-cookie")
  //   : "";
  // const userCookie = cookieService.get("username")
  //   ? cookieService.get("username")
  //   : "";
  const postObj = {
    authCookie: cookieService.get("auth-cookie")
      ? cookieService.get("auth-cookie")
      : "",
    username: cookieService.get("username")
      ? cookieService.get("username")
      : "",
  };
  // if (postObj) {
  //   return false;
  // } else {
  //   return true
  // postObj.authCookie = authCookie;
  // postObj.username = userCookie;
  return authService.checkCookie(postObj).pipe(
    map(
      (value) => {
        if (value.length > 0) {
          // router.navigate(["/admin/panel"]);
          return true;
        } else {
          router.navigate(["/admin"]);
          return false;
        }
      },
      catchError(() => {
        router.navigate(["admin"]);
        return of(false);
      })

      // error(err) {
      //   // router.navigate(["/admin"]);
      //   return false;
      // },
    )
  );

  // authService.checkCookie(postObj).subscribe({
  //   next: (value) => {
  //     if (value.length > 0) {
  //       // router.navigate(["/admin/panel"]);
  //       return true;
  //     } else {
  //       // router.navigate(["/admin"]);
  //       return false;
  //     }
  //   },
  //   error(err) {
  //     // router.navigate(["/admin"]);
  //     return false;
  //   },
  // });
  //   return true
  // }
  // } else {
  //   router.navigate(["/admin"]);
  //   return false;
  // }
  // if (route.routeConfig?.path === "admin/panel") {
  //   return authService.isAuthenticated().pipe(
  //     map(() => {
  //       router.navigate(["/admin/panel"]);
  //       return false;
  //     }),
  //     catchError(() => {
  //       return of(true);
  //     })
  //   );
  // }
  // return authService.isAuthenticated().pipe(
  //   map(() => {
  //     return true;
  //   }),
  //   catchError(() => {
  //     router.navigate(["admin"]);

  //     return of(false);
  //   })
  // );
};
