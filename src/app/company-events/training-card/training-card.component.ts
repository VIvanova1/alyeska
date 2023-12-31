import { Component, Input, OnInit } from '@angular/core';
import { Training } from 'src/app/model/training';
import { EmployeeData } from 'src/app/model/user-data';
import { TrainingsService } from 'src/app/services/trainings.service';
import UserDataService from 'src/app/services/user-data.service';

@Component({
  selector: 'app-training-card',
  templateUrl: './training-card.component.html',
  styleUrls: ['./training-card.component.css'],
})
export class TrainingCardComponent {
  constructor(
    private trainingService: TrainingsService,
    private userService: UserDataService
  ) {}

  @Input('training')
  training!: Training;


}
