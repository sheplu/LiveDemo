import { TestBed, inject } from '@angular/core/testing';

import { CheckResolve } from './check.service';

describe('CheckResolve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckResolve]
    });
  });

  it('should be created', inject([CheckResolve], (service: CheckResolve) => {
    expect(service).toBeTruthy();
  }));
});
