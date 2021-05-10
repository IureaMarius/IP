import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamTakingPageComponent } from './exam-taking-page.component';

describe('ExamTakingPageComponent', () => {
  let component: ExamTakingPageComponent;
  let fixture: ComponentFixture<ExamTakingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamTakingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamTakingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
