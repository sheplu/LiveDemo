import { TestBed, async, inject } from '@angular/core/testing';

import { TataGuard } from './tata.guard';

describe('TataGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TataGuard]
    });
  });

  it('should ...', inject([TataGuard], (guard: TataGuard) => {
    expect(guard).toBeTruthy();
  }));
});
