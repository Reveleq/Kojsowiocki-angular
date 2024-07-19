import { Component } from '@angular/core';
import { ScrollService } from 'src/app/modules/core/services/scroll.service';
import { ApiService } from '../../services/api.service';
import { Timetable } from 'src/app/modules/core/models/docs.model';
@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss'],
})
export class TimetableComponent {
  timetable!: Timetable[];
  constructor(
    private scrollService: ScrollService,
    private apiService: ApiService
  ) {}
  headerHeight!: number;
  ngOnInit(): void {
    this.apiService.getTimetables().subscribe({
      next: (value) => {
        this.timetable = value;
      },
      error: (err) => {
        window.alert('Wystąpił błąd, spróbuj ponownie');
      },
    });
    setTimeout(() => {
      this.scrollService.scrollToSection();
    }, 200);
  }
}
