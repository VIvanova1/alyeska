import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import EmployeeDataService from 'src/app/services/user-data.service';

@Component({
  selector: 'app-info-table',
  templateUrl: './info-table.component.html',
  styleUrls: ['./info-table.component.css']
})
export class InfoTableComponent {
  post: any;
  postId: string = '';
  formInfo: any;

  constructor(
    private userService: EmployeeDataService,
    private fB: FormBuilder,
    private route: ActivatedRoute
  ) {

    this.route.queryParams.subscribe((val) => {
      userService.getOneEmployee(val['id']).subscribe((post) => {
        this.post = post;
        this.postId = val['id'];

        if (this.postId) {
          this.formInfo = this.fB.group({
            name: [
              this.post.company,
              [Validators.required, Validators.minLength(8)],
            ],
            location: [
              this.post.location,
              [Validators.required, Validators.minLength(6)],
            ],
            position: [
              this.post.position,
              [Validators.required, Validators.minLength(2)],
            ],
            startDate: [
              this.post.startDate,
              [Validators.required, Validators.minLength(6)],
            ],
            endDate: [
              this.post.endDate,
              [Validators.required, Validators.minLength(8)],
            ],
            description: [
              this.post.description,
              [Validators.required, Validators.minLength(3)],
            ]
          });
        }
      });
    });
  }

  form = this.fB.group({
    company: ['', [Validators.required, Validators.minLength(8)]],
    position: ['', [Validators.required,Validators.email ,Validators.minLength(8)]],
    location: ['', [Validators.required, Validators.minLength(2)]],
    startDate: ['', [Validators.required, Validators.minLength(6)]],
    endDate: ['', [Validators.required, Validators.minLength(8)]],
    description: ['', [Validators.required, Validators.minLength(3)]],
  });

  // addInfo() {
  //   const EmployeeData: EmployeeData = {
  //     name: this.form.value.name!,
  //     email: this.form.value.email!,
  //     position: this.form.value.position!,
  //     companyId: this.form.value.companyId!,
  //     phone: this.form.value.phone!,
  //     location: this.form.value.location!,
  //     department: this.form.value.department!,
  //     employmentType: this.form.value.employmentType!,
  //     role: this.form.value.role!,
  //     manager: this.form.value.manager!,
  //     brd: this.form.value.brd!,
  //     experienceInfo:[],
  //   };

  //   if (this.formStatus == 'Add new') {
  //     this.userService.createEmployee(EmployeeData);
  //     this.form.reset();
  //   } else if (this.formStatus == 'Edit') {
  //     this.userService.updateEmployee(this.form.getRawValue(), this.postId);
  //     //Todo: rerender add new
  //   }
  // }
}
