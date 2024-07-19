import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Achievement } from 'src/app/modules/core/models/docs.model';
import { ScrollService } from 'src/app/modules/core/services/scroll.service';
import { ApiService } from 'src/app/modules/main/services/api.service';

@Component({
  selector: 'app-all-trophy',
  templateUrl: './all-trophy.component.html',
  styleUrls: ['./all-trophy.component.scss'],
})
export class AllTrophyComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private router: Router,
    private scrollService: ScrollService
  ) {}
  trophies!: Achievement[];
  dataSource = this.trophies;

  ngOnInit(): void {
    setTimeout(() => {
      this.scrollService.scrollToSection();
    }, 200);

    this.apiService.getAchievements().subscribe({
      next: (value) => {
        this.trophies = value;
      },
      error: (err) => {
        window.alert('error spróbuj ponownie');
      },
    });
  }
}
