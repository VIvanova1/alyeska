import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './user/profile/profile.component';
import { TrainingsComponent } from './company-events/trainings/trainings.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { AddEmployeeComponent } from './user/add-employee/add-employee.component';

const routes: Routes = [
  {path: '', pathMatch:'full', component: AboutComponent },
  {path: 'about', component: AboutComponent },
  {path: 'user/profile', component: ProfileComponent},
  {path: 'user/new', component: AddEmployeeComponent},
  {path: 'trainings', component: TrainingsComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
