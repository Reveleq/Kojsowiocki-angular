import { Component } from '@angular/core';
import { Achievement } from 'src/app/modules/core/models/docs.model';
import { ScrollService } from 'src/app/modules/core/services/scroll.service';
import { ApiService } from 'src/app/modules/main/services/api.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-add-trophy',
  templateUrl: './add-trophy.component.html',
  styleUrls: ['./add-trophy.component.scss'],
})
export class AddTrophyComponent {
  constructor(
    private apiService: ApiService,
    private scrollService: ScrollService,
    private location: Location
  ) {}
  method = '';
  trophy: Omit<Achievement, '_id'> = {
    title: '',
    src: '',
  };
  postTrophy(trophy: Omit<Achievement, '_id'>) {
    this.method = 'done';
    const src = trophy.src;
    const fullSrc = `assets/img/${src}.jpg`;
    trophy.src = fullSrc;
    this.apiService.postAchievement(trophy).subscribe({
      next: () => {
        window.alert('poprawnie dodano trofeum');
        this.location.back();
      },
      error: (err) => {
        window.alert('error spróbuj ponownie');
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
