import { Component } from '@angular/core';
import { ScrollService } from 'src/app/modules/core/services/scroll.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  constructor(private scrollService: ScrollService){}
  ngOnInit(): void {
    setTimeout(() => {
      this.scrollService.scrollToSection();
    }, 200);
  }
}
