import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import {BookingGuard } from './booking.guard';

describe('bookingGuard', () => {
  //const executeGuard: CanDeactivateFn = (...guardParameters) =>
     // TestBed.runInInjectionContext(() => new BookingGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
   // expect(executeGuard).toBeTruthy();
  });
});
