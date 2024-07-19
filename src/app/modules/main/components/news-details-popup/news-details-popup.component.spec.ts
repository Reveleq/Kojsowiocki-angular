import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDetailsPopupComponent } from './news-details-popup.component';

describe('NewsDetailsPopupComponent', () => {
  let component: NewsDetailsPopupComponent;
  let fixture: ComponentFixture<NewsDetailsPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsDetailsPopupComponent]
    });
    fixture = TestBed.createComponent(NewsDetailsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
