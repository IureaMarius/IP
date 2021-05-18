import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentExamSelectorComponent } from './student-exam-selector.component';

describe('StudentExamSelectorComponent', () => {
  let component: StudentExamSelectorComponent;
  let fixture: ComponentFixture<StudentExamSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentExamSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentExamSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
