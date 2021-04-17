import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumCommentsItemComponent } from './forum-comments-item.component';

describe('ForumCommentsItemComponent', () => {
  let component: ForumCommentsItemComponent;
  let fixture: ComponentFixture<ForumCommentsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumCommentsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumCommentsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
