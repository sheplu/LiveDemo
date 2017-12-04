import { TestBed, async, inject } from '@angular/core/testing';

import { PornSecurityGuard } from './porn-security.guard';

describe('PornSecurityGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PornSecurityGuard]
    });
  });

  it('should ...', inject([PornSecurityGuard], (guard: PornSecurityGuard) => {
    expect(guard).toBeTruthy();
  }));
});
