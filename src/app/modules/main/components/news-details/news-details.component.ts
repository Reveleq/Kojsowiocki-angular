import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { News } from 'src/app/modules/core/models/docs.model';
import { NewsService } from 'src/app/modules/core/services/news.service';
import { ScrollService } from 'src/app/modules/core/services/scroll.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss'],
})
export class NewsDetailsComponent implements OnInit, OnDestroy {
  openModal(id: string, imgId: number) {
    this.newsService.openModal(id, imgId);
  }
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private scrollService: ScrollService,
    private newsService: NewsService,
    private apiService: ApiService
  ) {}
  news: News = {
    title: '',
    id: undefined,
    src: '',
    content: '',
    contentDetails: '',
    _id: '',
    link: '',
    srcDetails: [],
  };
  id!: string;
  _id!: string | null;

  back() {
    this.router.navigate(['/aktualnosci']);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this._id = params.get('id');
      if (typeof this._id === 'string') {
        this.id = this._id;
      }
      this.apiService.getOneNews(this.id).subscribe({
        next: (value) => {
          if (value === null || undefined) {
            window.alert('Coś poszło nie tak. Spróbuj ponownie');
            this.router.navigate(['/aktualnosci'])
          }
          this.news = value;
        },
        error: (err) => {
          window.alert('Coś poszło nie tak. Spróbuj ponownie');
        },
      });
    });
    this.scrollService.stopScroll();
  }
  ngOnDestroy(): void {
    this.scrollService.startScroll();
  }
}
