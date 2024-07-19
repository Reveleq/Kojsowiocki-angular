import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Achievement, News } from 'src/app/modules/core/models/docs.model';
import { ScrollService } from 'src/app/modules/core/services/scroll.service';
import { ApiService } from 'src/app/modules/main/services/api.service';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.scss'],
})
export class AllNewsComponent {
  constructor(
    private apiService: ApiService,
    private router: Router,
    private scrollService: ScrollService
  ) {}
  news!: News[];
  ngOnInit(): void {
    setTimeout(() => {
      this.scrollService.scrollToSection();
    }, 200);

    this.apiService.getNews().subscribe({
      next: (value) => {
        this.news = value;
      },
      error: (err) => {
        window.alert('error spróbuj ponownie');
      },
    });
  }
}
