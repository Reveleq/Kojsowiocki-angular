import { Component } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {
  constructor(private scrollService: ScrollService) {}
  headerHeight!: number;
  ngOnInit(): void {
    this.scrollService.scrollToSection();
  }
}
