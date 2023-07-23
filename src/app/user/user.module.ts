import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProfileComponent, RegisterComponent],
  imports: [CommonModule, FormsModule],
  exports: [ProfileComponent, RegisterComponent],
})
export class UserModule {}
