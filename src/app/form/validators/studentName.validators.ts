import { AbstractControl, ValidationErrors } from '@angular/forms';

export class StudentNameValidators {

    

    static checkFormat(control: AbstractControl): ValidationErrors | null {
        let regex = new RegExp(/^[a-zA-Z ]*$/)
        if (control.value !== null) {
            if (!regex.test(control.value as string))
                return { 'formatNotProper': true };
            return null;
        }
        return { 'formatNotProper': true };

    }

}