import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamBuilderComponent } from './exam-builder.component';

describe('ExamBuilderComponent', () => {
  let component: ExamBuilderComponent;
  let fixture: ComponentFixture<ExamBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
