import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamGraderQuestionsComponent } from './exam-grader-questions.component';

describe('ExamGraderQuestionsComponent', () => {
  let component: ExamGraderQuestionsComponent;
  let fixture: ComponentFixture<ExamGraderQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamGraderQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamGraderQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
