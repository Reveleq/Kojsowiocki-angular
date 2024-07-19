import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiService } from 'src/app/modules/main/services/api.service';
import { Location } from '@angular/common';
import { News, NewsPopup } from 'src/app/modules/core/models/docs.model';
import { ScrollService } from 'src/app/modules/core/services/scroll.service';
@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.scss'],
})
export class EditNewsComponent {
  id!: string;
  _id!: string | null;
  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private scrollService: ScrollService
  ) {}
  method = '';
  news: News = {
    _id: '',
    title: '',
    src: '',
    srcDetails: [],
    content: '',
    link: '',
    contentDetails: '',
  };
  srcDetails!: NewsPopup[];
  ngOnInit(): void {
    this.method = '';
    setTimeout(() => {
      this.scrollService.scrollToSection();
    }, 200);

    this.route.paramMap.subscribe((params: ParamMap) => {
      this._id = params.get('id');
      if (typeof this._id === 'string') {
        this.id = this._id;
      }
    });

    this.apiService.getOneNews(this.id).subscribe({
      next: (value) => {
        this.method = 'done';
        this.news = value;
        // this.srcDetails = this.news.srcDetails;
      },
      error: (err) => {
        window.alert('ErROR spróbuj ponownie' + err);
      },
    });
  }
  pathNews(news: News) {
    // const src = news.src;
    // const fullSrc = `assets/img/${src}`;
    // .src = fullSrc;
    this.apiService.patchNews(this.id, this.news).subscribe({
      next: (value) => {
        window.alert('zadanie pomyślnie zaktualizowano');
        this.location.back();
      },
      error: (err) => {
        window.alert('ERROR, Spróbuj ponownie');
      },
    });
  }
  deleteNews(id: string) {
    this.apiService.deleteNews(id).subscribe({
      next: (value) => {
        window.alert('pomyślnie usunięto trofeum');
        this.location.back();
      },
      error: (err) => {
        window.alert('error spróbuj ponownie');
      },
    });
  }
}
