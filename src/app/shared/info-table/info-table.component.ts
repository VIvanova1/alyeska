import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import UserDataService from 'src/app/services/user-data.service';


@Component({
  selector: 'app-info-table',
  templateUrl: './info-table.component.html',
  styleUrls: ['./info-table.component.css'],
})
export class InfoTableComponent {
  post: any;
  postId: string = '';
  formInfo: any;

  constructor(
    private employeeService: UserDataService,
    private fB: FormBuilder,
    private route: ActivatedRoute
  ) {

    this.route.queryParams.subscribe((val) => {
      employeeService.getOneEmployee(val['id']).subscribe((post) => {
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
    position: ['', [Validators.required,Validators.minLength(2)]],
    location: ['', [Validators.required, Validators.minLength(2)]],
    startDate: ['', [Validators.required, Validators.minLength(6)]],
    endDate: ['', [Validators.required, Validators.minLength(8)]],
    description: ['', [Validators.required, Validators.minLength(3)]],
  });




  onSubmit() {
    const formToSubmit = this.formInfo ? this.formInfo : this.form;

    if (formToSubmit.valid) {
      const formData = formToSubmit.value;
      console.log('Form Data:', formData);
      // Process or submit the form data as needed.
    } else {
      this.markFormAsTouched(formToSubmit);
    }
  }


    // Helper method to mark all form controls as touched
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
