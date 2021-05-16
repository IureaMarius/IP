import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamBuilderItemComponent } from './exam-builder-item.component';

describe('ExamBuilderItemComponent', () => {
  let component: ExamBuilderItemComponent;
  let fixture: ComponentFixture<ExamBuilderItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamBuilderItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamBuilderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
