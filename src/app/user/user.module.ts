import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { SharedModule } from '../shared/shared.module';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ProfileComponent,
    RegisterComponent,
    LoginComponent,
    AddEmployeeComponent,
    UsersDashboardComponent,

  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SharedModule, RouterModule],
  exports: [
    ProfileComponent,
    RegisterComponent,
    LoginComponent,
    AddEmployeeComponent,
  ],
})
export class UserModule {}
