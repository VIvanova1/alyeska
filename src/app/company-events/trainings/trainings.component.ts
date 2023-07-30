import { Component, OnInit } from '@angular/core';
import { TrainingsService } from 'src/app/services/trainings.service';
import { Training } from 'src/app/model/training';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css'],
})
export class TrainingsComponent implements OnInit {
  trainings!: Training[];
  constructor(private trainingService: TrainingsService) {}

  async ngOnInit(): Promise<void> {
    this.trainings = await this.trainingService.getAllTrainings()
    console.log(this.trainings);
  }
}
