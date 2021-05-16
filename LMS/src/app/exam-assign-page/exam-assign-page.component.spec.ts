import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamAssignPageComponent } from './exam-assign-page.component';

describe('ExamAssignPageComponent', () => {
  let component: ExamAssignPageComponent;
  let fixture: ComponentFixture<ExamAssignPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamAssignPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamAssignPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
