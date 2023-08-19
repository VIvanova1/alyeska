import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import UserDataService from 'src/app/services/user-data.service';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.css'],
})
export class UsersDashboardComponent implements OnInit {
  employees: any;
  constructor(private us: UserDataService, private authService: AuthService) {}

  ngOnInit(): void {
    this.us.getAll().subscribe((res) => {
      this.employees = res;
    });
  }

  isAdmin() {
    return this.authService.isAdmin();
  }

  onDelete(id: string) {
    const confirm = window.confirm('Do you want to delete this employee?');
    if (confirm) {
      this.us.delete(id);
    }
  }
}
