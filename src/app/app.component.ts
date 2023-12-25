import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'alyeska-fashion';
  personalInfo: any;

  receivePersonalInfo(info: any) {
    this.personalInfo = info;
    console.log(this.personalInfo);
  }
}
