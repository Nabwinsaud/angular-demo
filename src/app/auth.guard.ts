import { ActivatedRoute, CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  console.log(route, state);
  const router = new ActivatedRoute();
  if (1 > 0) {
  }
  return true;
};
