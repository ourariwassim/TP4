import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

// Create a functional route guard using CanActivateFn
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);  // Inject AuthService
  const router = inject(Router);  // Inject Router

  // Check if the user is authenticated by verifying the token in localStorage
  if (authService.isLoggedIn()) {
    return true;
  } else {
    // Redirect to the login page if the user is not authenticated
    router.navigate(['/signin']);
    return false;
  }
};
