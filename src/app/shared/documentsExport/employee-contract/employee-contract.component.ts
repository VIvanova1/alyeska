import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import UserDataService from 'src/app/services/user-data.service';

@Component({
  selector: 'app-employee-contract',
  templateUrl: './employee-contract.component.html',
  styleUrls: ['./employee-contract.component.css'],
})
export class EmployeeContractComponent implements OnInit {
  @ViewChild('pdfContent') pdfContent!: ElementRef;
  id: any;
  data: any;
  employee: any;

  constructor(
    private router: ActivatedRoute,
    private userService: UserDataService
  ) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    this.userService.getOneEmployee(this.id).subscribe((user) => {
      this.employee = user;
      console.log(user);
    });
  }

  public async SavePDF(name: string) {
    console.log(name);
    const content = this.pdfContent.nativeElement;
    html2canvas(content).then(function (canvas) {
      const img = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(img, 20, 20, 170, 260);
      pdf.save(name + '.pdf');
    });
  }
}
