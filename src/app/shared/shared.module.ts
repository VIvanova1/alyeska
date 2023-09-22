import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoTableComponent } from './info-table/info-table.component';

@NgModule({
  declarations: [
    InfoTableComponent
  ],
  imports: [CommonModule],
  exports:[InfoTableComponent]
})
export class SharedModule {}
