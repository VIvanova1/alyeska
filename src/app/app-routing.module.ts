import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './user/profile/profile.component';
import { TrainingsComponent } from './company-events/trainings/trainings.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { AddEmployeeComponent } from './user/add-employee/add-employee.component';
import { UsersDashboardComponent } from './user/users-dashboard/users-dashboard.component';
import { authGuard } from './shared/guards/auth.guard';
import { adminGuard } from './shared/guards/admin.guard';

const routes: Routes = [
  {path: '', pathMatch:'full', component: AboutComponent},
  {path: 'about', component: AboutComponent },
  {path: 'user/profile', component: ProfileComponent, canActivate: [authGuard] },
  {path: 'user/new', component: AddEmployeeComponent,canActivate: [adminGuard] },
  {path: 'user/personnel', component: UsersDashboardComponent, canActivate: [authGuard]},
  {path: 'trainings', component: TrainingsComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
