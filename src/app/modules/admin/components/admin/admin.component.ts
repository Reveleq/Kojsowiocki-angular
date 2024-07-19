import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { ScrollService } from "src/app/modules/core/services/scroll.service";
import { AdminBtnComponent } from "../admin-btn/admin-btn.component";
import { Location } from "@angular/common";
import { CookieService } from "ngx-cookie-service";
@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"],
})
export class AdminComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private scrollService: ScrollService,
    private cookieService: CookieService
  ) {}
  logout() {
    const postObj = {
      authCookie: this.cookieService.get("auth-cookie")
        ? this.cookieService.get("auth-cookie")
        : "",
      username: this.cookieService.get("username")
        ? this.cookieService.get("username")
        : "",
    };
    this.authService.logout(postObj);
    
   
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.scrollService.scrollToSection();
    }, 200);
  }
}
