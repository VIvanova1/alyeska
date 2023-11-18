import { Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import UserDataService from 'src/app/services/user-data.service';

@Component({
  selector: 'app-info-table',
  templateUrl: './info-table.component.html',
  styleUrls: ['./info-table.component.css'],
})
export class InfoTableComponent {
  formInfo: any;
  @Input() infoData: any;

  constructor(
    private employeeService: UserDataService,
    private fB: FormBuilder,
    private route: ActivatedRoute
  ) {}


  onSubmit(form:NgForm) {
    const formToSubmit = form.value;

    if (formToSubmit.valid) {
      const formData = formToSubmit.value;
      console.log('Form Data:', formData);

      this.employeeService
        .addAditionalInfo('Experience', formData)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      this.markFormAsTouched(formToSubmit);
    }
  }

  private markFormAsTouched(formGroup: FormGroup | FormControl): void {
    if (formGroup instanceof FormGroup) {
      Object.values(formGroup.controls).forEach((control) => {
        if (control instanceof FormControl) {
          control.markAsTouched();
        } else if (control instanceof FormGroup) {
          this.markFormAsTouched(control);
        }
      });
    } else if (formGroup instanceof FormControl) {
      formGroup.markAsTouched();
    }
  }
}
