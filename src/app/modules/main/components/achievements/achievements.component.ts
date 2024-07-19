import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/modules/core/services/scroll.service';
import { ApiService } from '../../services/api.service';
import { Achievement } from 'src/app/modules/core/models/docs.model';
@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss'],
})
export class AchievementsComponent implements OnInit {
  achievements!: Achievement[];
  constructor(
    private scrollService: ScrollService,
    private apiService: ApiService
  ) {}
  ngOnInit(): void {
    setTimeout(() => {
      this.scrollService.scrollToSection();
    }, 200);
    this.apiService.getAchievements().subscribe({
      next: (value) => {
        this.achievements = value;
      },
      error: (err) => {
        window.alert('Coś poszło nie tak. Spróbuj ponownie');
      },
    });
  }
}
