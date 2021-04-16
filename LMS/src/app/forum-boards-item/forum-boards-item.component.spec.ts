import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumBoardsItemComponent } from './forum-boards-item.component';

describe('ForumBoardsItemComponent', () => {
  let component: ForumBoardsItemComponent;
  let fixture: ComponentFixture<ForumBoardsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumBoardsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumBoardsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
