import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumBoardPostsItemComponent } from './forum-board-posts-item.component';

describe('ForumBoardPostsItemComponent', () => {
  let component: ForumBoardPostsItemComponent;
  let fixture: ComponentFixture<ForumBoardPostsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumBoardPostsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumBoardPostsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
