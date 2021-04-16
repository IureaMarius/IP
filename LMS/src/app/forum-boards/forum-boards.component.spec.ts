import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumBoardsComponent } from './forum-boards.component';

describe('ForumBoardsComponent', () => {
  let component: ForumBoardsComponent;
  let fixture: ComponentFixture<ForumBoardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumBoardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
