import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users = [
    { id: 1, login: 'wassim@gmail.com', password: 'wassim', token: 'aaaaaaaa' }
  ];
  private currentToken: string | null = null;

  constructor(private router: Router) {
    this.currentToken = localStorage.getItem('token');
  }

  login(login: string, password: string): boolean {
    const user = this.users.find((user) => user.login === login && user.password === password);
    if (user) {
      this.currentToken = user.token;
      localStorage.setItem('token', this.currentToken);
      return true;
    }
    return false;
  }

  logout(): void {
    this.currentToken = null;
    localStorage.removeItem('token');
    this.router.navigate(['/sign-in']);
  }

  isLoggedIn(): boolean {
    return !!this.currentToken;
  }

  getToken(): string | null {
    return this.currentToken;
  }
}
