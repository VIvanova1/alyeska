import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private auth: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  loginHandler(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const loginData: { email: string; password: string } = form.value;

    this.auth
      .login(loginData.email, loginData.password)
      .then((res) => {
        const token = res.user?.refreshToken;
        const uid = res.user?.uid;
        localStorage.setItem('uid', uid!);
        localStorage.setItem('user', loginData.email!);
        this.router.navigate(['/']);
      })
      .catch((err) => {
        this.toastr.error('The user or password is incorect!');
      });
  }
}
