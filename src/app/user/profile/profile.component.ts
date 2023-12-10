import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { EmployeeData } from 'src/app/model/user-data';
import UserDataService from 'src/app/services/user-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit, OnChanges, OnDestroy {
  currentEmployee!: any;
  trainings: any[] = [];
  id: any;
  moreInfo: any;
  experienceInput: any;
  schoolInput: any;
  adressInput: any;
  editId: any;

  constructor(
    private userService: UserDataService,
    private router: ActivatedRoute,
    private Router: Router
  ) {
    this.adressInput = {
      type: 'Address',
      institution: 'Address type',
      activity: 'Address',
    };

    this.experienceInput = {
      type: 'Experience',
      institution: 'Company name',
      activity: 'Position',
    };

    this.schoolInput = {
      type: 'Education',
      institution: 'School name',
      activity: 'School major',
    };
  }

  ngOnInit(): void {
    this.router.queryParamMap.subscribe((params) => {
      this.id = params.get('id');
    });
    this.fintUserForEdit(this.id);
  }

  fintUserForEdit(id: string) {
    this.userService.getOneEmployee(id).subscribe((res) => {
      this.currentEmployee = res;
    });
  }

  ngOnDestroy(): void {
    console.log('destroy');
    this.currentEmployee = '';
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('change', changes);
  }

  exportContract() {
    this.Router.navigate(['user/profile', this.id, 'contract']);
  }

  // getUser(email: string) {
  //   this.userService.findEmployee(email).subscribe((res) => {
  //     res.map((user: any) => {
  //       this.id = user.id;
  //       this.id;
  //       this.experienceInput.id = user.id;
  //       this.currentEmployee = user.data;
  //       this.currentEmployee;
  //     });
  //   });
  // }

  //in OnInit
  // let user: any;
  // const email = localStorage.getItem('user');
  // if (email) {
  //   user = this.getUser(email);
  //   console.log('This is profile page');
  // }
}
