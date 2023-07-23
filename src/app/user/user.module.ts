import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [ProfileComponent, RegisterComponent, LoginComponent],
  imports: [CommonModule, FormsModule],
  exports: [ProfileComponent, RegisterComponent],
})
export class UserModule {}
