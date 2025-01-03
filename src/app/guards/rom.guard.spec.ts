import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { romGuard } from './rom.guard';

describe('romGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => romGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
