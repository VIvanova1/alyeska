import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import UserDataService from 'src/app/services/user-data.service';

@Component({
  selector: 'app-info-table',
  templateUrl: './info-table.component.html',
  styleUrls: ['./info-table.component.css'],
})
export class InfoTableComponent implements OnInit, OnChanges {
  @Input() infoData: any;
  userId!: string;
  type!:string;
  currentResult:any;


  constructor(private employeeService: UserDataService, private  toastr:ToastrService ) {}

  ngOnChanges ( changes: SimpleChanges ): void {
   this.type=this.infoData.type;
   console.log("this.type", this.type);
  }

  ngOnInit(): void {
    this.userId = this.infoData.id
    this.employeeService.getAditionalInfo(this.userId , this.type).valueChanges().subscribe((res)=>{
      this.currentResult=res;
     })
  }


  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const formData = form.value;

    this.employeeService.addAditionalInfo(this.userId , this.type, formData)
    .then((res) => {
      this.toastr.success('Successfully added')
    })
    .catch((err) => {
      this.toastr.error(err)
    });
  }




}
