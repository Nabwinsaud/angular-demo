import { ActivatedRoute, CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  console.log(route, state);
  const router = new ActivatedRoute();
  const name = 'Hello';
  if (name === 'Hello') {
  }
  return true;
};
