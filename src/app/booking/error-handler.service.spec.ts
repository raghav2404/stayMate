import { TestBed } from '@angular/core/testing';
import {GlobalErrorHandler} from './error-handler.service';



describe('ErrorHandlerService', () => {
  let service: GlobalErrorHandler;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalErrorHandler);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
