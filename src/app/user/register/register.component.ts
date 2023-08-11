import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { matchPasswordsValidator } from 'src/app/shared/validators/match-pass-validatos';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  form = this.formBuilder.group({
    email:[''],
    passwordsGroup: this.formBuilder.group(
      {
        password: ['', [Validators.required, Validators.minLength(6)]],
        rePassword: ['', [Validators.required, Validators.minLength(6)]],
      },
      {
        validators: [matchPasswordsValidator('password', 'rePassword')],
      }
    ),
  });

  constructor(private auth: AuthService, private formBuilder: FormBuilder) {}

  registerHandler(): void {
    if (this.form.invalid) {
      return;
    }

    const registerData:any= this.form.value;
    this.auth.register(registerData.email, registerData.password);
  }
}
