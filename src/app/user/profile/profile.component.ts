import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserData } from 'src/app/model/user-data';
import { AuthService } from 'src/app/services/auth.service';
import UserDataService from 'src/app/services/user-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  currentUser: UserData | undefined;
  trainings: any[] = [];

  constructor(
    private userService: UserDataService,
    private toastr: ToastrService,
    private authS:AuthService
  ) {}

  ngOnInit() {
    const email = localStorage.getItem('user');
    let user: any = '';
    if (email) {
      user = this.getUser( email );
    }
    // if (!user) {
    //   this.toastr.error('You are not registered employee! Please contact HR department!');
    //   this.authS.logout();
    // }
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
