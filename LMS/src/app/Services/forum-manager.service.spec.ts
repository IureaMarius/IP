import { TestBed } from '@angular/core/testing';

import { ForumManagerService } from './forum-manager.service';

describe('ForumManagerService', () => {
  let service: ForumManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForumManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
