import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTrophyComponent } from './all-trophy.component';

describe('AllTrophyComponent', () => {
  let component: AllTrophyComponent;
  let fixture: ComponentFixture<AllTrophyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllTrophyComponent]
    });
    fixture = TestBed.createComponent(AllTrophyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
