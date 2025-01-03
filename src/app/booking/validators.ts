import {AbstractControl, FormGroup, ValidationErrors} from '@angular/forms';
import {isCallOrNewExpression} from '@schematics/angular/third_party/github.com/Microsoft/TypeScript/lib/typescript';


export class VALIDATORS {
  static ValidateName(control: AbstractControl): ValidationErrors | null {
    const val = control.value as string;

    if (val && val.includes('test')) {
      return {
        validateName: {
          invalidName: true,
        },
      };
    }

    return null;
  }

  static ValidateSpecialChar(char: string) {

    return (control: AbstractControl) => {
      const val = control.value as string;

      if (val && val.includes(char)) {
        return {
          validateName: {
            invalidSpecialChar: true,
          },
        };
      }

      return null;
    }
  }

  static validedate(control: FormGroup) {
    const checkInDate:any = new Date(control.get('checkinDate')?.value);
    const checkOutDate :any= new Date(control.get('checkoutDate')?.value);
    const diffTime = checkInDate - checkOutDate;
    const diffDays = Math.ceil(diffTime / (1000*60*60*24));
    if (diffDays <=0) {
      return {
        invalidDate: true,
      };
    }
    return null;
  }


}

