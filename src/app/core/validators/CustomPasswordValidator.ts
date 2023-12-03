import { ValidatorFn } from "@angular/forms";
import { GenericValidator } from "./GenericValidator";

export class CustomPasswordValidator {
  static samePassword(): ValidatorFn {
    return GenericValidator.isEqual({
      errorName: 'samePassword',
      firstFieldName: 'password',
      secondFieldName: 'confirmPassword',
    })
  }
}
