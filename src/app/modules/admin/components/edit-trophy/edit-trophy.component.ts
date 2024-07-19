import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Achievement } from 'src/app/modules/core/models/docs.model';
import { ApiService } from 'src/app/modules/main/services/api.service';
import { Location } from '@angular/common';
import { ScrollService } from 'src/app/modules/core/services/scroll.service';
@Component({
  selector: 'app-edit-trophy',
  templateUrl: './edit-trophy.component.html',
  styleUrls: ['./edit-trophy.component.scss'],
})
export class EditTrophyComponent implements OnInit {
  method = '';
  id!: string;
  _id!: string | null;
  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private scrollService: ScrollService
  ) {}

  trophy: Achievement = {
    title: '',
    _id: '',
    src: '',
  };
  pathTrophy(trophy: Achievement) {
    const src = trophy.src;
    const fullSrc = `assets/img/${src}`;
    trophy.src = fullSrc;
    this.apiService.patchAchievement(this.id, this.trophy).subscribe({
      next: (value) => {
        this.method = 'done';
        window.alert('zadanie pomyślnie zaktualizowano');
        this.router.navigate(['/admin/panel/trofea/zarzadzaj']);
      },
      error: (err) => {
        window.alert('ERROR, Spróbuj ponownie');
      },
    });
  }
  deleteTrophy(id: string) {
    this.apiService.deleteAchievement(id).subscribe({
      next: (value) => {
        this.method = 'done';
        window.alert('pomyślnie usunięto trofeum');
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

    this.route.paramMap.subscribe((params: ParamMap) => {
      this._id = params.get('id');
      if (typeof this._id === 'string') {
        this.id = this._id;
      }
    });
    this.apiService.getAchievement(this.id).subscribe({
      next: (value) => {
        this.trophy = value;
      },
      error: (err) => {
        window.alert('ErROR spróbuj ponownie' + err);
      },
    });
  }
}
