import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private auth: AuthService) {}

  loginHandler(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const loginData: { email: string; password: string } = form.value;
    this.auth.login(loginData.email, loginData.password);
  }


}
