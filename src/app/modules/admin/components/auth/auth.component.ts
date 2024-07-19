import { Component } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { ScrollService } from "src/app/modules/core/services/scroll.service";
import { HttpErrorResponse } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";
import { Cookie } from "src/app/modules/core/models/auth.models";
import { catchError, map } from "rxjs";
@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"],
})
export class AuthComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private scrollService: ScrollService,
    private cookieService: CookieService
  ) {}
  loginInputs = {
    username: "",
    password: "",
    role: "user",
  };
  cookieData: Cookie[] = [];
  // signIn() {
  //   this.authService.signIn(this.loginInputs).subscribe({
  //     next: (value) => {
  //       if (value === "") {
  //         window.alert("zła nawa uzytkonika lub hasło");
  //       } else {
  //         this.router.navigate(["admin/panel"]);
  //       }
  //     },
  //     error: (error: HttpErrorResponse) => {
  //       window.alert(error.message);
  //       console.error(error);
  //     },
  //   });
  // }
  login() {
    this.authService.login(this.loginInputs).subscribe({
      next: (value) => {
        if (value.length === 0) {
          window.alert("zła nawa uzytkonika lub hasło");
        } else {
          this.cookieData = value;
          this.cookieService.set("auth-cookie", this.cookieData[0].token, {
            expires: 1000 * 60 * 60 * 24 * 7,
            secure: true,
          });
          this.cookieService.set("username", this.cookieData[0].username, {
            expires: 1000 * 60 * 60 * 24 * 7,
            secure: true,
          });
          this.router.navigate(["/admin/panel"]);
          location.reload();
        }
      },
      error: (err) => {
        window.alert("wystąpił błąd");
        console.error(err);
      },
    });
  }
  isLogged = this.authService.isLoggedIn();

  ngOnInit(): void {
    setTimeout(() => {
      this.scrollService.scrollToSection();
    }, 200);
    const postObj = {
      authCookie: this.cookieService.get("auth-cookie")
        ? this.cookieService.get("auth-cookie")
        : "",
      username: this.cookieService.get("username")
        ? this.cookieService.get("username")
        : "",
    };
    this.authService.checkCookie(postObj).subscribe({
      next: (value) => {
        if (value.length > 0) {
          this.router.navigate(["/admin/panel"]);
        } else {
          return;
        }
      },
      error(err) {
        window.alert("coś jest nie tak, spróbuj ponownie!");
      },
    });
  }
}
