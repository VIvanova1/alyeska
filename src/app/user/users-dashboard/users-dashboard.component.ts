import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import UserDataService from 'src/app/services/user-data.service';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.css'],
})
export class UsersDashboardComponent implements OnInit {
  employees!: any;
  itemsPerPage: number = 10;
  currentPage: number = 1;
  maxPage: number = 0;


  constructor(private us: UserDataService, private authService: AuthService) {}


  ngOnInit(): void {
    this.getAllEmployees();
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

  getAllEmployees(){
    this.us.getAll().subscribe((res) => {
      this.employees = res;
      this.maxPage = Math.ceil(this.employees.length / this.itemsPerPage);
    },(err)=>{
      console.log(err);
    });
  }

  get paginatedItems(): any[] {
    if (!this.employees) {
      return [];
    }
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.employees.slice(
      startIndex,
      Math.min(endIndex, this.employees.length)
    );
  }

  onPageChange(page: number): void {
    this.currentPage = page;
  }
}
