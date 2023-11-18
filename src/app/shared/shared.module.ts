import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoTableComponent } from './info-table/info-table.component';
import { PassMatchDirective } from './validators/pass-match.directive';

@NgModule({
  declarations: [
    InfoTableComponent,
    PassMatchDirective
  ],
  imports: [CommonModule],
  exports:[InfoTableComponent, PassMatchDirective]
})
export class SharedModule {}
