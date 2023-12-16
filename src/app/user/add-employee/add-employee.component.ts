import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeData } from 'src/app/model/user-data';
import UserDataService from 'src/app/services/user-data.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  formStatus: string = 'Add new';
  post!: EmployeeData;
  postId: string = '';
  employeeData!: EmployeeData;
  employee: any;

  constructor(
    private userService: UserDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe((val) => {
      this.userService.getOneEmployee(val['id']).subscribe((post) => {
        if(post){
          this.post={...(post as EmployeeData)}
          this.postId = val['id'];
        }


        if (this.postId) {
          this.employeeData = { ...this.post };
          this.formStatus = 'Edit';
        }
      });
    });
  }

  ngOnInit(): void {}

  createEmployee(newEmployeeForm:NgForm) {
    this.employeeData  = newEmployeeForm.value;

    if (this.formStatus == 'Add new') {
      this.userService.createEmployee(this.employeeData);

    } else if (this.formStatus == 'Edit') {
      this.userService.updateEmployee(this.employeeData, this.postId);
    }

    this.router.navigate(['user/personnel']);
  }
}
