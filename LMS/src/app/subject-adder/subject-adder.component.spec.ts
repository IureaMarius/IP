import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectAdderComponent } from './subject-adder.component';

describe('SubjectAdderComponent', () => {
  let component: SubjectAdderComponent;
  let fixture: ComponentFixture<SubjectAdderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectAdderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
