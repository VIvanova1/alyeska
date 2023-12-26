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
import { EmployeeContractComponent } from './shared/documentsExport/employee-contract/employee-contract.component';

const routes: Routes = [
  {path: '', pathMatch:'full', component: AboutComponent},
  {path: 'about', component: AboutComponent },
  // {path: 'user/profile', component: ProfileComponent, canActivate: [authGuard] },
  {path: 'user/profile', component: ProfileComponent},
  {path: 'user/new', component: AddEmployeeComponent},
  {path: 'user/personnel', component: UsersDashboardComponent},
  {path: 'trainings', component: TrainingsComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'user/profile/:id/contract', component: EmployeeContractComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
