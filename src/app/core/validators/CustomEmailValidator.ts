import { ValidatorFn } from "@angular/forms";
import { GenericValidator } from "./GenericValidator";

export class CustomEmailValidator {
  static sameEmail(): ValidatorFn {
    return GenericValidator.isEqual({
      errorName: 'sameEmail',
      firstFieldName: 'email',
      secondFieldName: 'confirmEmail'
    })
  }
}
