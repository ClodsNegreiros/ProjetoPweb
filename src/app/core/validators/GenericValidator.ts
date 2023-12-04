import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export interface IGenericValidatorIsEqualParam {
  errorName: string;
  firstFieldName: string;
  secondFieldName: string;
}

export class GenericValidator {
  static isEqual(param: IGenericValidatorIsEqualParam): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const firstField = control.get(param.firstFieldName);
      const secondField = control.get(param.secondFieldName);

      if (!firstField || !secondField) {
        return null;
      }

      const error: ValidationErrors = {};
      error[param.errorName] = true;

      return firstField.value === secondField.value ? null : error;
    };
  }
}