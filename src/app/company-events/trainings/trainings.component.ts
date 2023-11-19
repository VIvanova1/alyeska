import { Component, OnInit } from '@angular/core';
import { TrainingsService } from 'src/app/services/trainings.service';
import { Training } from 'src/app/model/training';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css'],
})
export class TrainingsComponent implements OnInit {
  trainingsList: Training[] = [];
  constructor(private trainingService: TrainingsService) {}

  ngOnInit(): void {
    this.showAllTrainings();
  }

  showAllTrainings() {
    this.trainingService.getAllTrainings().subscribe(
      (res) => {
        this.trainingsList = res.map((t: any) => {
          const data = t.payload.doc.data();
          data.id = t.payload.doc.id;
          return data;
        });
      },
      (err) => {}
    );
  }


}
