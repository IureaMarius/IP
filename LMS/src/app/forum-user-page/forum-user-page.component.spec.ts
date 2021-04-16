import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumUserPageComponent } from './forum-user-page.component';

describe('ForumUserPageComponent', () => {
  let component: ForumUserPageComponent;
  let fixture: ComponentFixture<ForumUserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumUserPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
