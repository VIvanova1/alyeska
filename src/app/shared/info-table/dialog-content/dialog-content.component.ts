import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import UserDataService from 'src/app/services/user-data.service';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.css']
})
export class DialogContentComponent {
onCloseClick() {
  this.dialogRef.close();
}

  constructor(
  @Inject(MAT_DIALOG_DATA) public data: any,
  private employeeService:UserDataService,
  private toastr: ToastrService,
  public dialogRef: MatDialogRef<DialogContentComponent>){}

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const formData = form.value;
    this.employeeService
      .addAditionalInfo(this.data.id, this.data.infoData.type, formData)
      .then((res) => {
        this.toastr.success('Successfully added');
        this.onCloseClick()
      })
      .catch((err) => {
        this.toastr.error(err);
      });
  }
}
