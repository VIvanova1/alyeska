import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { UserData } from 'src/app/model/user-data';
import UserDataService from 'src/app/services/user-data.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent {
  formStatus: string = 'Add new';
  post: any;
  postId: string = '';

  constructor(
    private userService: UserDataService,
    private fB: FormBuilder,
    private route: ActivatedRoute
  ) {

    this.route.queryParams.subscribe((val) => {
      userService.getOneEmployee(val['id']).subscribe((post) => {
        this.post = post;
        this.postId = val['id'];

        if (this.postId) {
          this.form = this.fB.group({
            name: [
              this.post.name,
              [Validators.required, Validators.minLength(8)],
            ],
            email: [this.post.email, []],
            position: [
              this.post.position,
              [Validators.required, Validators.minLength(2)],
            ],
            companyId: [
              this.post.companyId,
              [Validators.required, Validators.minLength(6)],
            ],
            phone: [
              this.post.phone,
              [Validators.required, Validators.minLength(8)],
            ],
            location: [
              this.post.location,
              [Validators.required, Validators.minLength(3)],
            ],
            department: [
              this.post.department,
              [Validators.required, Validators.minLength(2)],
            ],
            employmentType: [
              this.post.employmentType,
              [Validators.required, Validators.minLength(4)],
            ],
            role: [
              this.post.role,
              [Validators.required, Validators.minLength(2)],
            ],
            manager: [
              this.post.manager,
              [Validators.required, Validators.minLength(8)],
            ],
            brd: [this.post.brd, Validators.required],
          });

        this.form.controls.email.disable();
        this.formStatus = 'Edit';
        }

      });
    });
  }

  form = this.fB.group({
    name: ['', [Validators.required, Validators.minLength(8)]],
    email: ['', [Validators.required, Validators.minLength(8)]],
    position: ['', [Validators.required, Validators.minLength(2)]],
    companyId: ['', [Validators.required, Validators.minLength(6)]],
    phone: ['', [Validators.required, Validators.minLength(8)]],
    location: ['', [Validators.required, Validators.minLength(3)]],
    department: ['', [Validators.required, Validators.minLength(2)]],
    employmentType: ['', [Validators.required, Validators.minLength(4)]],
    role: ['', [Validators.required, Validators.minLength(2)]],
    manager: ['', [Validators.required, Validators.minLength(8)]],
    brd: [new Date(), Validators.required],
  });

  createEmployee() {
    const userData: UserData = {
      name: this.form.value.name!,
      email: this.form.value.email!,
      position: this.form.value.position!,
      companyId: this.form.value.companyId!,
      phone: this.form.value.phone!,
      location: this.form.value.location!,
      department: this.form.value.department!,
      employmentType: this.form.value.employmentType!,
      role: this.form.value.role!,
      manager: this.form.value.manager!,
      brd: this.form.value.brd!,
    };

    if (this.formStatus == 'Add new') {
      this.userService.createEmployee(userData);
      this.form.reset();
    } else if (this.formStatus == 'Edit') {
      this.userService.updateEmployee(this.form.getRawValue(), this.postId);
      //Todo: rerender add new
    }
  }
}
