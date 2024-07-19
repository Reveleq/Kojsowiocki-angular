import { Component } from '@angular/core';
import { News } from 'src/app/modules/core/models/docs.model';
import { ApiService } from 'src/app/modules/main/services/api.service';
import { Location } from '@angular/common';
import { ScrollService } from 'src/app/modules/core/services/scroll.service';
@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss'],
})
export class AddNewsComponent {
  constructor(
    private apiService: ApiService,
    private location: Location,
    private scrollService: ScrollService
  ) {}
  method = '';
  srcDeatils = {
    id: 1,
    src: '',
  };
  news: Omit<News, '_id'> = {
    title: '',
    src: '',
    srcDetails: [],
    content: '',
    link: '',
    contentDetails: '',
  };
  addphoto() {
    const src = this.srcDeatils.src;
    const fullSrc = `assets/img/${src}.jpg`;
    this.srcDeatils.src = fullSrc;
    this.news.srcDetails.push(this.srcDeatils);
    this.srcDeatils = {
      id: this.news.srcDetails.length + 1,
      src: '',
    };
  }
  postNews(trophy: Omit<News, '_id'>) {
    this.method = 'done';
    const src = trophy.src;
    const fullSrc = `assets/img/${src}.jpg`;
    trophy.src = fullSrc;
    this.apiService.postNews(this.news).subscribe({
      next: () => {
        window.alert('poprawnie dodano aktualość');
        this.location.back();
      },
      error: (err) => {
        window.alert('error spróbuj ponownie' + err);
      },
    });
  }

  ngOnInit(): void {
    this.method = '';
    setTimeout(() => {
      this.scrollService.scrollToSection();
    }, 200);
  }
}
