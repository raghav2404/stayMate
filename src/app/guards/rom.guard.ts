import {CanActivateChildFn, CanActivateFn} from '@angular/router';

export const romGuard: CanActivateChildFn = (route, state) => {
  return true;
};
