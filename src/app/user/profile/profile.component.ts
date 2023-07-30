import { Component, OnInit } from '@angular/core';
import { TrainingsService } from 'src/app/services/trainings.service';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userData: any;
  currentUser: any;
  usersTrainings: any;
  documentRef: any;
  trainingsArray: string[] = [];
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

  async getUser(email: string) {
    this.userData = await this.userService.findEmployee(email);
    this.currentUser = this.userData[0];

    this.documentRef = this.currentUser.trainingsGo;
    if (this.documentRef) {
      this.documentRef.forEach((element: any) =>
        this.trainingsArray?.push(element.path)
      );
    }

    this.trainingsArray.forEach((trainingPath) => {
      this.trainingService.getOneTraining(trainingPath).subscribe((data) => {
        if (!this.trainings.includes(data)) {
          this.trainings.push(data);
        }
      });
    });
  }
}
