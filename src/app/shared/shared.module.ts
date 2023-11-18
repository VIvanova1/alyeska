import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoTableComponent } from './info-table/info-table.component';
import { PassMatchDirective } from './validators/pass-match.directive';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InfoTableComponent,
    PassMatchDirective
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports:[InfoTableComponent, PassMatchDirective]
})
export class SharedModule {}
