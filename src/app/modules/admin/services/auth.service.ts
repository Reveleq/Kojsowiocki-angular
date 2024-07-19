import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment.develop";
import { BehaviorSubject, Observable, map, tap } from "rxjs";
import { Admin, Cookie, User } from "../../core/models/auth.models";
import { Route, Router } from "@angular/router";
import { Location } from "@angular/common";
import { ApiService } from "../../main/services/api.service";
import { CookieService } from "ngx-cookie-service";
@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private location: Location,
    private apiService: ApiService,
    private cookieService: CookieService
  ) {}
  private tokenKey = "user";
  islogged = false;
  url = environment.apiUrl;
  user = new BehaviorSubject<Admin | null>(null);
  showBtn = this.isAuthenticated;

  signIn(body: User) {
    return this.apiService.signIn(body);
  }
  checkCookie(token: {}): Observable<[]> {
    return this.http.post<[]>(`${this.url}/cookies`, token);
  }
  login(loginInputs: User) {
    return this.http.post<Cookie[]>(`${this.url}/admin`, loginInputs);
    // .pipe(
    //   map((userArr) =>
    //     userArr.filter(
    //       (user) =>
    //         user.username === loginInputs.username &&
    //         user.password === loginInputs.password
    //     )
    //   ),
    //   map((userArr) => userArr.map((user) => new Admin(user.username))),
    //   tap((userArr) => this.handlaAuthentication(userArr))
    // );
  }
  isAuthenticated(token: string) {
    return this.apiService.isLoggedIn(token);
  }
  private handlaAuthentication(userArr: Admin[]) {
    console.log(userArr);
    if (userArr.length === 0) {
      return;
    }
    const user: Admin = userArr[0];
    this.user.next(user);
    localStorage.setItem("user", JSON.stringify(user));
    this.router.navigate(["/admin/panel"]);
    location.reload();
  }
  logout(data: {}) {
    // this.user.next(null);
    // localStorage.removeItem('user');
    // this.router.navigate(['/admin']);
    // location.reload();
    // return this.apiService.logout().subscribe({
    //   next: () => {
    //     this.router.navigate(["/admin"]);
    //     this.cookieService.deleteAll();
    //     sessionStorage.clear();
    //     localStorage.clear();
    //   },
    // });
    console.log(data);
    this.apiService.logout(data).subscribe({
      next: (value) => {
        if (value.length === 0) {
          window.alert("coś jest nie tak, spróbuj ponownie!");
        } else {
          this.cookieService.delete("username");
          this.cookieService.delete("auth-cookie");
          this.router.navigate(["/admin"]);
          window.location.reload();
        }
      },
      error(err) {
        window.alert("coś jest nie tak, spróbuj ponownie!");
      },
    });
  }
  autologin() {
    const userData: { email: string; username: string } = JSON.parse(
      localStorage.getItem("user") as string
    );
    if (!userData) {
      return;
    }
    const user = new Admin(userData.username);
    this.user.next(user);
  }
  public isLoggedIn(): boolean {
    let token = localStorage.getItem(this.tokenKey);
    return token != null && token.length > 0;
  }

  public getToken(): string | null {
    return this.isLoggedIn() ? localStorage.getItem(this.tokenKey) : null;
  }
}
