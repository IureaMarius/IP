import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailWritingPageComponent } from './email-writing-page.component';

describe('EmailWritingPageComponent', () => {
  let component: EmailWritingPageComponent;
  let fixture: ComponentFixture<EmailWritingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailWritingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailWritingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
