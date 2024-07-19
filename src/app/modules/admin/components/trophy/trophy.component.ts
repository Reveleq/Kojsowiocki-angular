import { Component } from '@angular/core';
import { ScrollService } from 'src/app/modules/core/services/scroll.service';

@Component({
  selector: 'app-trophy',
  templateUrl: './trophy.component.html',
  styleUrls: ['./trophy.component.scss']
})
export class TrophyComponent {
  constructor(private scrollService: ScrollService){}
  ngOnInit(): void {
    setTimeout(() => {
      this.scrollService.scrollToSection();
    }, 200);
  }
}
