import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import UserDataService from 'src/app/services/user-data.service';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.css'],
})
export class UsersDashboardComponent implements OnInit {
  employees: any;
  constructor(private us: UserDataService){}

  ngOnInit(): void {
    this.us.getAll().subscribe((res) => {
      this.employees = res;

    });
  }

  onDelete(id:string){
    const confirm = window.confirm('Do you want to delete this employee?');
    if(confirm){
      this.us.delete(id)
    }
  }
}
