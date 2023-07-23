import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

@NgModule({
  declarations: [
    ProfileComponent,
    RegisterComponent,
    LoginComponent,
    AddEmployeeComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    ProfileComponent,
    RegisterComponent,
    LoginComponent,
    AddEmployeeComponent,
  ],
})
export class UserModule {}
