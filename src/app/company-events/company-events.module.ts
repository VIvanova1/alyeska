import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingsComponent } from './trainings/trainings.component';
import { TrainingCardComponent } from './training-card/training-card.component';



@NgModule({
  declarations: [
    TrainingsComponent,
    TrainingCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[TrainingsComponent]
})
export class CompanyEventsModule { }
