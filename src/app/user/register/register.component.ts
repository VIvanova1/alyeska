import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerHandler(form: NgForm): void {
    if (form.invalid){
      return;
    }

    const registerData: { email: string; password: string } = form.value;
    console.log({registerData});
  }
}
