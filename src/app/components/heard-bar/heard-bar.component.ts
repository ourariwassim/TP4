import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-heard-bar',
  templateUrl: './heard-bar.component.html',
  styleUrls: ['./heard-bar.component.css']
})
export class HeardBarComponent {
  constructor(private authService: AuthService, private router: Router) {}

  signOut(): void {
    this.authService.logout();

  }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}
