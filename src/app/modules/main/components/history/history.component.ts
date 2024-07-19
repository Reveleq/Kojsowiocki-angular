import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/modules/core/services/scroll.service';
import { ApiService } from '../../services/api.service';
import { Timeline } from 'src/app/modules/core/models/docs.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  constructor(
    private scrollService: ScrollService,
    private apiService: ApiService
  ) {}
  timeline!: Timeline[];
  ngOnInit(): void {
    this.apiService.getTimeline().subscribe({
      next: (value) => {
        this.timeline = value;
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
