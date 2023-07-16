import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  isLogged = true;
  isToggled = false; // true
  isToggle() {
    this.isToggled = !this.isToggled;
  }
}

//ToDo: make visible on laptop screen
