import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Pipe({
  name: 'formEqualValidate',
})
export class FormEqualValidatePipe implements PipeTransform {

  transform(field_name: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      let input: string = control['value'];
      let isValid: boolean = control.root.value[field_name] == input;
      if (isValid) {
        return null
      } else {
        return { 'equalTo': 'a' }
      }
    }
  }
}
