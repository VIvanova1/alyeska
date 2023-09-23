import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/model/user-data';
import UserDataService from 'src/app/services/user-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  currentUser: UserData | undefined;
  trainings: any[] = [];
  id!: string;
  moreInfo:any;

  constructor(private userService: UserDataService) {
    const email = localStorage.getItem('user');
    let user: any;
    if (email) {
      user = this.getUser(email);
    }
  }

  getUser(email: string) {
    this.userService.findEmployee(email).subscribe((res) => {
      res.map((user: any) => {
        this.id = user.id;
        this.id;
        this.currentUser = user.data;
        this.currentUser;
      });
    });
  }


}
