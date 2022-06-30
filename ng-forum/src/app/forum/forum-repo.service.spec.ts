import { TestBed } from '@angular/core/testing';

import { ForumRepoService } from './forum-repo.service';

describe('ForumRepoService', () => {
  let service: ForumRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForumRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
