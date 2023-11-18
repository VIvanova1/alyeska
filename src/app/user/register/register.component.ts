import { Component } from '@angular/core';

import { matchPasswordsValidator } from 'src/app/shared/validators/match-pass-validator';
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
    private router:Router,
    private toastr: ToastrService
  ) {}

  registerHandler(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const registerData: { email: string; password: string } = form.value;

     this.auth.register(registerData.email!, registerData.password!)
      .then((res) => {
        console.log(res);
        const token = res.user?.refreshToken;
        const uid = res.user?.uid;
        localStorage.setItem('uid', uid!);
        this.router.navigate(['user/profile'])

      })
      .catch((err) => {
        this.toastr.error('The user or password is incorect!');
      });
  }
}
