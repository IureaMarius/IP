import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailPageItemComponent } from './email-page-item.component';

describe('EmailPageItemComponent', () => {
  let component: EmailPageItemComponent;
  let fixture: ComponentFixture<EmailPageItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailPageItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailPageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
