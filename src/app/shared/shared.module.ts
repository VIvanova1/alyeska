import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoTableComponent } from './info-table/info-table.component';
import { PassMatchDirective } from './validators/pass-match.directive';
import { FormsModule } from '@angular/forms';
import { DialogContentComponent } from './info-table/dialog-content/dialog-content.component';
import { EmployeeContractComponent } from './documentsExport/employee-contract/employee-contract.component';
import { ImportComponent } from './documentsExport/import-documents/import.component';


@NgModule({
  declarations: [
    InfoTableComponent,
    PassMatchDirective,
    DialogContentComponent,
    EmployeeContractComponent,
    ImportComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports:[InfoTableComponent, PassMatchDirective, ImportComponent]
})
export class SharedModule {}
