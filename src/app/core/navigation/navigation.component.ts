import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  constructor(private authService: AuthService) {}

  isLogged() {
    return localStorage.getItem('user');
  }

  isToggled = false; // true
  isAdmin = true;
  isToggle() {
    this.isToggled = !this.isToggled;
  }
  logout() {
    this.authService.logout();
  }
}

//ToDo: make visible on laptop screen
