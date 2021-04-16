import { TestBed } from '@angular/core/testing';

import { ForumManagerServiceService } from './forum-manager-service.service';

describe('ForumManagerServiceService', () => {
  let service: ForumManagerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForumManagerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
