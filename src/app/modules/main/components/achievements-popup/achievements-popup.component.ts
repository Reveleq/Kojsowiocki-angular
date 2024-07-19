import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { Achievement } from "src/app/modules/core/models/docs.model";
import { ScrollService } from "src/app/modules/core/services/scroll.service";
import { ApiService } from "../../services/api.service";
@Component({
  selector: "app-achievements-popup",
  templateUrl: "./achievements-popup.component.html",
  styleUrls: ["./achievements-popup.component.scss"],
})
export class AchievementsPopupComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private scrollService: ScrollService,
    private apiService: ApiService
  ) {}
  allAchievements!: Achievement[];
  length!: number;
  achievement: Achievement = {
    src: "",
    title: "",
    _id: "",
  };
  id!: string;
  _id!: string | null;
  index!: number;
  src!: string;
  back() {
    this.router.navigate(["/trofea"]);
  }
  handleNextAchievement = () => {
    this.apiService.getAchievements().subscribe({
      next: (value) => {
        this.allAchievements = value;
        this.length = value.length;
        this.index = this.allAchievements
          .map(function (achievement) {
            return achievement._id.toString();
          })
          .indexOf(this.id);
      },
    });
  };
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this._id = params.get("id");
      if (typeof this._id === "string") {
        this.id = this._id;
      }

      this.apiService.getAchievement(this._id).subscribe({
        next: (value) => {
          if (value === null || undefined) {
            window.alert("Coś poszło nie tak. Spróbuj ponownie");
            this.router.navigate(["/trofea"]);
          }
          this.achievement = value;
          this.src = this.achievement.src;
          this.handleNextAchievement();
        },
        error: (err) => {
          window.alert("Coś poszło nie tak. Spróbuj ponownie");
        },
      });
      this.scrollService.stopScroll();
    });
  }

  ngOnDestroy(): void {
    this.scrollService.startScroll();
  }
  backPopup() {
    this.router.navigate([
      `/trofea/${this.allAchievements[this.index - 1]._id}`,
    ]);
  }
  nextPopup() {
    this.router.navigate([
      `/trofea/${this.allAchievements[this.index + 1]._id}`,
    ]);
  }
}
