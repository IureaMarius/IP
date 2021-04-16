import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumBoardPostsItemsComponent } from './forum-board-posts-items.component';

describe('ForumBoardPostsItemsComponent', () => {
  let component: ForumBoardPostsItemsComponent;
  let fixture: ComponentFixture<ForumBoardPostsItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumBoardPostsItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumBoardPostsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
