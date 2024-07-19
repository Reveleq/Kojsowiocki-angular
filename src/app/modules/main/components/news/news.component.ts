import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/modules/core/services/scroll.service';
import { ApiService } from '../../services/api.service';
import { News } from 'src/app/modules/core/models/docs.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  constructor(
    private scrollService: ScrollService,
    private apiService: ApiService
  ) {}
  news!: News[];
  ngOnInit(): void {
    this.apiService.getNews().subscribe({
      next: (value) => {
        this.news = value.slice().reverse();
      },
      error: (err) => {
        window.alert('Coś poszło nie tak. Spróbuj ponownie');
      },
    });
    setTimeout(() => {
      this.scrollService.scrollToSection();
    }, 200);
  }
}
