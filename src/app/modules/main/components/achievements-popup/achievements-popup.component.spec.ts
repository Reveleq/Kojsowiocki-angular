import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementsPopupComponent } from './achievements-popup.component';

describe('AchievementsPopupComponent', () => {
  let component: AchievementsPopupComponent;
  let fixture: ComponentFixture<AchievementsPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AchievementsPopupComponent]
    });
    fixture = TestBed.createComponent(AchievementsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
