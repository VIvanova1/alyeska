import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  firestore: any;
  userData: any;
  constructor(private userService: UserDataService) {}

  async ngOnInit(): Promise<void> {
    const email = localStorage.getItem('user');
    if (email) {
      this.userData=await this.userService.findEmployee(email);
    }
  }

}
