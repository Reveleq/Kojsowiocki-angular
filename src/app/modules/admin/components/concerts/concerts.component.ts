import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Timetable } from 'src/app/modules/core/models/docs.model';
import { ScrollService } from 'src/app/modules/core/services/scroll.service';
import { ApiService } from 'src/app/modules/main/services/api.service';
@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.scss'],
})
export class ConcertsComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private router: Router,
    private scrollService: ScrollService
  ) {}

  method = '';
  concerts: Timetable[] = [
    {
      title: 'Najbliższy planowany koncert',
      date: '',
      content: '',
      _id: '',
    },
    {
      title: 'Ostatni grany koncert',
      date: '',
      content: '',
      _id: '',
    },
  ];
  pathConcerts(timetable: Timetable[]) {
    this.method = 'done';
    this.apiService.pathTimetables(timetable).subscribe({
      next: (value) => {
        if (value) {
          window.alert('pomyślnie zaktualizowano');
          this.router.navigate(['admin/panel']);
        } else {
          window.alert('coś poszło nie tak');
        }
      },
      error: (err) => {
        window.Error('error', err);
      },
    });
  }
  ngOnInit(): void {
    this.method = '';
    this.scrollService.scrollToSection();
    this.apiService.getTimetables().subscribe({
      next: (value) => {
        this.concerts = value;
      },
    });
  }
}
