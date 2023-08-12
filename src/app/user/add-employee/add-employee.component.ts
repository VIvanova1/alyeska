import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { UserData } from 'src/app/model/user-data';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent {
  constructor(private userService: UserDataService, private fB: FormBuilder) {}
  form = this.fB.group({
    name: ['', [Validators.required, Validators.minLength(8)]],
    email: ['', [Validators.required, Validators.minLength(8)]],
    position: ['', [Validators.required, Validators.minLength(4)]],
    companyId: ['', [Validators.required, Validators.minLength(6)]],
    phone: ['', [Validators.required, Validators.minLength(8)]],
    location: ['', [Validators.required, Validators.minLength(3)]],
    department: ['', [Validators.required, Validators.minLength(2)]],
    employmentType: ['', [Validators.required, Validators.minLength(4)]],
    role: ['', [Validators.required, Validators.minLength(2)]],
    manager: ['', [Validators.required, Validators.minLength(8)]],
  });

  createEmployee() {
    this.userService.createEmployee(this.form.value);
    alert('Successfully add new employee!')
    this.form.reset()
  }
}
