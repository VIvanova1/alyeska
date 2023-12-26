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

  filteredResults: any;
  searchTerm: any;
  displayList: any;

  constructor(private us: UserDataService, private authService: AuthService) {}

  ngOnInit(): void {
    this.getAllEmployees();
  }

  // isAdmin() {
  //   return this.authService.isAdmin();
  // }

  onDelete(id: string) {
    const confirm = window.confirm('Do you want to delete this employee?');
    if (confirm) {
      this.us.delete(id);
    }
  }

  getAllEmployees() {
    this.us.getAll().subscribe(
      (res) => {
        this.employees = res;
        this.updateDisplayList();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.updateDisplayList();
  }

  searchEmployee(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.updateDisplayList();
  }

  paginateItems(itemsForPaginate: any): any {
    if (!itemsForPaginate) {
      return [];
    }
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.maxPage = Math.ceil(itemsForPaginate.length / this.itemsPerPage);
    return itemsForPaginate.slice(
      startIndex,
      Math.min(endIndex, itemsForPaginate.length)
    );
  }

  updateDisplayList(): void {
    if (this.searchTerm) {
      this.filteredResults = this.employees.filter(
        (res: any) =>
          res.data.name &&
          res.data.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
      this.displayList = this.paginateItems(this.filteredResults);
    } else {
      this.displayList = this.paginateItems(this.employees);
      return this.displayList;
    }
  }
}
