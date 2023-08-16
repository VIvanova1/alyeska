import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/model/user-data';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  currentUser: UserData | undefined;
  trainings: any[] = [];

  constructor(private userService: UserDataService) {}

  ngOnInit() {
    const email = localStorage.getItem('user');
    if (email) {
      this.getUser(email);
    }
  }

  getUser(email: string) {
    this.userService.findEmployee(email).subscribe((res) => {
      res.map((user: any) => {
        this.currentUser = user.data;
        return this.currentUser;
      });
    });
  }
}
