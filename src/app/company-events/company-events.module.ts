import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingsComponent } from './trainings/trainings.component';
import { TrainingCardComponent } from './training-card/training-card.component';
import { RouterModule } from '@angular/router';
import { Training } from '../model/training';

@NgModule({
  declarations: [TrainingsComponent, TrainingCardComponent],
  imports: [RouterModule, CommonModule],
  exports: [TrainingsComponent],
})
export class CompanyEventsModule {}
