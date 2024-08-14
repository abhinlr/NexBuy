import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');

  const url = state.url;

  if (token && (url === '/login' || url === '/signup' || url === '/forgot-password')) {
    router.navigate(['/']);
    return false;
  }

  if (!token && (url !== '/login' && url !== '/signup' && url !== '/forgot-password')) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
