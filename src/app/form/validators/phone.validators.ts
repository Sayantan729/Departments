import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PhoneValidators {

    

    static checkFormat(control: AbstractControl): ValidationErrors | null {
        let regex = new RegExp(/^[1-9][0-9]*$/)
        if (control.value !== null) {
            if (!regex.test(control.value as string)||(control.value as string).length!=10)
                return { 'formatNotProper': true };
            return null;
        }
        return { 'formatNotProper': true };

    }

}