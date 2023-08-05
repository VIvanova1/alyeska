import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private auth: AuthService) {}

  registerHandler(form: NgForm): void {
    if (form.invalid){
      return;
    }

    const registerData: { email: string, password: string } = form.value;
    this.auth.register(registerData.email,registerData.password);
  }
}
