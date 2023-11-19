import { Component, OnInit } from '@angular/core';
import { EmployeeData } from 'src/app/model/user-data';
import UserDataService from 'src/app/services/user-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  currentEmployee: EmployeeData | undefined;
  trainings: any[] = [];
  id!: string;
  moreInfo:any;
  experienceInput:any;
  schoolInput:any;

  constructor(private userService: UserDataService) {
    this.experienceInput = {
      type: 'Experience',
      institution: 'Company',
      activity: 'Position',
    };

    this.schoolInput ={
      type: 'Education',
      institution: 'School',
      activity: 'School major',
    }
   }

  ngOnInit (): void {
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
        this.experienceInput.id=user.id
        this.currentEmployee = user.data;
        this.currentEmployee;
      });
    });
  }




}
