import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { News, NewsPopup } from 'src/app/modules/core/models/docs.model';
import { ScrollService } from 'src/app/modules/core/services/scroll.service';
import { NewsService } from 'src/app/modules/core/services/news.service';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-news-details-popup',
  templateUrl: './news-details-popup.component.html',
  styleUrls: ['./news-details-popup.component.scss'],
})
export class NewsDetailsPopupComponent {
  constructor(
    private newsService: NewsService,
    private router: Router,
    private route: ActivatedRoute,
    private scrollService: ScrollService,
    private apiService: ApiService
  ) {}
  allNews!: News[];
  news!: News;
  imgObj!: NewsPopup[];
  ArrayLength!: number;
  id!: number;
  idNews!: string;
  src: string | undefined;
  path!: string;
  img!: NewsPopup;
  back() {
    this.router.navigate([`aktualnosci/${this.idNews}`]);
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.idNews = this.newsService.id;
      if (this.idNews === undefined) {
        this.router.navigate(['aktualnosci/']);
        return;
      }
      this.id = Number(params.get('id'));
      this.apiService.getOneNews(this.idNews).subscribe({
        next: (value) => {
          if (value === null || undefined) {
            window.alert('Coś poszło nie tak. Spróbuj ponownie');
            this.router.navigate(['/aktualnosci'])
          }
          this.news = value;
          this.imgObj = this.news.srcDetails;
          this.img = this.imgObj[this.id - 1];
          this.src = this.img.src;
          this.ArrayLength = this.imgObj.length;
          this.scrollService.stopScroll();
        },
        error: (err) => {
          window.alert('Coś poszło nie tak. Spróbuj ponownie');
        },
      });
    });
  }
  ngOnDestroy(): void {
    if (this.idNews === undefined) {
      return;
    } else {
      this.scrollService.startScroll();
    }
  }
  backPopup() {
    this.router.navigate([`/aktualnosci/${this.idNews}/${this.id - 1}`]);
  }
  nextPopup() {
    this.router.navigate([`/aktualnosci/${this.idNews}/${this.id + 1}`]);
  }
}
