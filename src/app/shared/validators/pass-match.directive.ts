import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appPassMatch]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PassMatchDirective,
      multi: true
    }
  ]
})
export class PassMatchDirective {

  validate(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const rePassword = control.get('rePassword');

    if (password && rePassword && password.value !== rePassword.value) {

      return { passwordMatch: true };
    }

    return null;
  }

}
