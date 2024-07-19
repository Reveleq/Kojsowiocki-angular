import { Component } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { authGuard } from "../../guards/auth.guard";
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";

@Component({
  selector: "app-admin-btn",
  templateUrl: "./admin-btn.component.html",
  styleUrls: ["./admin-btn.component.scss"],
})
export class AdminBtnComponent {
  constructor(
    private authService: AuthService,
    private cookieService: CookieService,
    private router: Router
  ) {}
  document = document;
  active = false;
  token = this.authService.isLoggedIn();
  show = "";
  // isAuthenticated() {
  //   this.authService.isAuthenticated().subscribe({
  //     next: (value) => {
  //       this.show = value.toString();
  //     },
  //   });
  // }
  scrollToTop(): void {
    return this.document.body.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  }
  ngOnInit(): void {
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
          this.show = "show";
        } else {
          this.show = "";
        }
      },
      error(err) {
        window.alert("coś jest nie tak, spróbuj ponownie!");
      },
    });
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 350 ||
        document.documentElement.scrollTop > 300
      ) {
        this.active = true;
      } else {
        this.active = false;
      }
    });
  }
}
