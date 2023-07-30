import { Component, Input, OnInit } from '@angular/core';
import { Training } from 'src/app/model/training';

@Component({
  selector: 'app-training-card',
  templateUrl: './training-card.component.html',
  styleUrls: ['./training-card.component.css'],
})
export class TrainingCardComponent  {
  @Input( 'training' )
  training!: Training;

}
