import { TestBed, inject } from '@angular/core/testing';

import { UserGithubService } from './user-github.service';

describe('UserGithubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserGithubService]
    });
  });

  it('should be created', inject([UserGithubService], (service: UserGithubService) => {
    expect(service).toBeTruthy();
  }));
});
