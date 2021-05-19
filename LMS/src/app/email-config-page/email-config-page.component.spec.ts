import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailConfigPageComponent } from './email-config-page.component';

describe('EmailConfigPageComponent', () => {
  let component: EmailConfigPageComponent;
  let fixture: ComponentFixture<EmailConfigPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailConfigPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailConfigPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
