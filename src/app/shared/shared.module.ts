import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchPassValidatorsDirective } from './validators/match-pass-validators.directive';



@NgModule({
  declarations: [
    MatchPassValidatorsDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
