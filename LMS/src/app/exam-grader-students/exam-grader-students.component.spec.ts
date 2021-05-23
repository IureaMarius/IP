import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamGraderStudentsComponent } from './exam-grader-students.component';

describe('ExamGraderStudentsComponent', () => {
  let component: ExamGraderStudentsComponent;
  let fixture: ComponentFixture<ExamGraderStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamGraderStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamGraderStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
