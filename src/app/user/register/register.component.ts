import { Component } from '@angular/core';

import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import UserDataService from 'src/app/services/user-data.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private userService: UserDataService
  ) {}

  isEmployee?: boolean;

  registerHandler(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    const registerData: { email: string; password: string } = form.value;

    this.auth
      .register(registerData.email!, registerData.password!)
      .then((res) => {
        const uid = res.user?.uid;
        localStorage.setItem('uid', uid!);
        localStorage.setItem('user', registerData.email!);
        this.router.navigate(['/']);
      })
      .catch((err) => {
        this.toastr.error('The user or password is incorect!');
      });
  }
}
