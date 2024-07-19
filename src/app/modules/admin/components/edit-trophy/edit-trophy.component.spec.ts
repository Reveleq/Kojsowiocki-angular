import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTrophyComponent } from './edit-trophy.component';

describe('EditTrophyComponent', () => {
  let component: EditTrophyComponent;
  let fixture: ComponentFixture<EditTrophyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditTrophyComponent]
    });
    fixture = TestBed.createComponent(EditTrophyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
