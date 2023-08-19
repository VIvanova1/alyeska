import { Component } from '@angular/core';

import { matchPasswordsValidator } from 'src/app/shared/validators/match-pass-validator';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

  form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    passwordsGroup: this.formBuilder.group(
      {
        password: ['', [Validators.required, Validators.minLength(6)]],
        rePassword: ['', [Validators.required]],
      },
      {
        validators: [matchPasswordsValidator('password', 'rePassword')],
      }
    ),
  });

  constructor(private auth: AuthService, private formBuilder: FormBuilder) {}

  registerHandler(): void {

    const regData = {
      email: this.form.value.email,
      passwordsGroup:{
        password:this.form.value.passwordsGroup?.password,
        rePassword: this.form.value.passwordsGroup?.rePassword
      }
    };

    if (this.form.invalid) {
      return;
    }

    this.auth.register(regData.email!, regData.passwordsGroup.password!)
  }
}
