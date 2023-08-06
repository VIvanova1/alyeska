import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/model/user-data';
import { TrainingsService } from 'src/app/services/trainings.service';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  trainings: any[] = [];

  constructor(
    private userService: UserDataService,
    private trainingService: TrainingsService
  ) {}

  ngOnInit() {
    const email = localStorage.getItem('user');
    if (email) {
      this.getUser(email);
    }
  }

  getUser(email: string) {
    this.userService.findEmployee(email).subscribe((res) => {
      res.forEach((user: any) => {
        this.currentUser = user;
        localStorage.setItem('token', user.id);
        return this.currentUser;
      });
    });
  }
}
