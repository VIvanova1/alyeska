import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  isToggled = false; // true
  isAdmin() {
    if (localStorage.getItem('user') == 'venetaivanova@alyeska.com') {
      return true;
    } else {
      return false;
    }
  }
  isToggle() {
    this.isToggled = !this.isToggled;
  }
  logout() {
    this.authService.logout();
  }

  isLogged(){
    return localStorage.getItem('user')
  }
}
