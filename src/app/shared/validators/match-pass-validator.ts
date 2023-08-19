import { FormGroup, ValidatorFn } from '@angular/forms';

export function matchPasswordsValidator(
  controlName1: string,
  controlName2: string
): ValidatorFn {
  return (control) => {
    const group = control as FormGroup;
    const passCtrl1 = group.get(controlName1);
    const passCtrl2 = group.get(controlName2);
console.log(passCtrl1?.value === passCtrl2?.value);
    return passCtrl1?.value === passCtrl2?.value
      ? null
      : { matchPasswordsValidator: true };
  };
}
