import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Timeline } from 'src/app/modules/core/models/docs.model';
import { ScrollService } from 'src/app/modules/core/services/scroll.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-history-details',
  templateUrl: './history-details.component.html',
  styleUrls: ['./history-details.component.scss'],
})
export class HistoryDetailsComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private scrollService: ScrollService,
    private apiService: ApiService
  ) {}
  timeline: Timeline = {
    src: '',
    class: '',
    date: '',
    text: '',
    title: '',
    _id: '',
  };
  _id!: string | null;
  id!: string;
  back() {
    this.router.navigate(['/historia']);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this._id = params.get('id');
      if (typeof this._id === 'string') {
        this.id = this._id;
      } else if (this._id === null || undefined) {
        window.alert('Coś poszło nie tak. Spróbuj ponownie');
        return;
      }

      this.apiService.getOneTimeline(this.id).subscribe({
        next: (value) => {
          this.timeline = value;
          if (value === null || undefined) {
            window.alert('Coś poszło nie tak. Spróbuj ponownie');
            this.router.navigate(['/historia'])
          }
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
