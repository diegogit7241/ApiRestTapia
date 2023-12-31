import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const dashboardGuard: CanActivateFn = (route, state) => {

const router = inject(Router);
const validUser = false;

  return validUser ? router.createUrlTree(['/auth']): true;
};
