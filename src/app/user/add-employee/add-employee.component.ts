import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserDataService } from 'src/app/shared/user-data.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent {
  constructor(private userService: UserDataService) {}

  createEmployee(form: NgForm) {
    const data = form.value;
    this.userService.createEmployee(data);
  }
}
