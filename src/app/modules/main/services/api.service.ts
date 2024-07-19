import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment.develop";
import {
  Achievement,
  Email,
  News,
  Timeline,
  Timetable,
} from "../../core/models/docs.model";
import { User } from "../../core/models/auth.models";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}
  apiUrl = environment.apiUrl;
  signIn(body: User) {
    return this.http.post(`${this.apiUrl}/sign-in`, body, {
      withCredentials: true,
    });
  }
  isLoggedIn(token: string) {
    return this.http.post(`${this.apiUrl}/is-authenticated`, token, {
      withCredentials: true,
    });
  }
  logout(data: {}): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`, data);
  }
  getTimeline() {
    return this.http.get<Timeline[]>(`${this.apiUrl}/timeline`);
  }
  getAchievements() {
    return this.http.get<Achievement[]>(`${this.apiUrl}/achievements`);
  }
  getAchievement(id: string | null) {
    return this.http.get<Achievement>(`${this.apiUrl}/achievements/${id}`);
  }
  getNews() {
    return this.http.get<News[]>(`${this.apiUrl}/news`);
  }
  getOneNews(id: string) {
    return this.http.get<News>(`${this.apiUrl}/news/${id}`);
  }
  getOneTimeline(id: string) {
    return this.http.get<Timeline>(`${this.apiUrl}/timeline/${id}`);
  }
  getTimetables() {
    return this.http.get<Timetable[]>(`${this.apiUrl}/timetable`);
  }
  pathTimetables(timetable: Timetable[]) {
    return this.http.patch<Timetable[]>(`${this.apiUrl}/timetable`, timetable);
  }
  postAchievement(trophy: Omit<Achievement, "_id">) {
    return this.http.post<Achievement>(`${this.apiUrl}/achievement`, trophy);
  }
  deleteAchievement(id: string) {
    return this.http.delete<Achievement>(`${this.apiUrl}/achievement/${id}`);
  }
  patchAchievement(id: string, body: Achievement) {
    return this.http.patch<Achievement>(
      `${this.apiUrl}/achievement/${id}`,
      body
    );
  }
  patchNews(id: string, body: News) {
    return this.http.patch<News>(`${this.apiUrl}/news/${id}`, body);
  }
  deleteNews(id: string) {
    return this.http.delete<News>(`${this.apiUrl}/news/${id}`);
  }
  postNews(news: Omit<News, "_id">) {
    return this.http.post<News>(`${this.apiUrl}/news`, news);
  }
  postEmail(email: Email) {
    return this.http.post<Email>(`${this.apiUrl}/email`, email);
  }
}
