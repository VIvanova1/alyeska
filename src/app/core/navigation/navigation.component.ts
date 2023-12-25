import { Component, Input, OnInit } from '@angular/core';
import { EmployeeData } from 'src/app/model/user-data';
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

  isToggle() {
    this.isToggled = !this.isToggled;
  }
  logout() {
    this.authService.logout();
  }

  isLogged(){
    return localStorage.getItem('user')
  }

  isAuth(){
    return this.isLogged();
  }

  isAdmin(){
    return this.authService.isAdmin()
  }
}
