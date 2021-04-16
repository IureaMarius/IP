import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumBoardPostsComponent } from './forum-board-posts.component';

describe('ForumBoardPostsComponent', () => {
  let component: ForumBoardPostsComponent;
  let fixture: ComponentFixture<ForumBoardPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumBoardPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumBoardPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
