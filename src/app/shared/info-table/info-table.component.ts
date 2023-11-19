import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import UserDataService from 'src/app/services/user-data.service';

@Component({
  selector: 'app-info-table',
  templateUrl: './info-table.component.html',
  styleUrls: ['./info-table.component.css'],
})
export class InfoTableComponent implements OnInit, OnChanges {
  @Input() infoData: any;
  @Input() id: any;
  @ViewChild('myDialog') myDialog!: ElementRef<HTMLDialogElement>;

  userId!: string;
  type!: string;
  currentResult: any;

  constructor(
    private employeeService: UserDataService,
    private toastr: ToastrService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.type = this.infoData.type;
  }

  ngOnInit(): void {
    this.showInfo();
  }

  showInfo() {
    this.employeeService
      .getAditionalInfo(this.id, this.type)
      .valueChanges()
      .subscribe((res) => {
        this.currentResult = res;
      });
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const formData = form.value;

    this.employeeService
      .addAditionalInfo(this.id, this.type, formData)
      .then((res) => {
        this.toastr.success('Successfully added');
        this.myDialog.nativeElement.close();
        this.showInfo();
        form.resetForm();
      })
      .catch((err) => {
        this.toastr.error(err);
      });
  }


  //ToDo: prevent top scroll page
}
