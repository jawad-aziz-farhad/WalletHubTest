import { ValidationErrors, AbstractControl, FormControl } from '@angular/forms';

export class CustomValidator {

    static patternValidator(regExp: RegExp, error: ValidationErrors){
        return (control: AbstractControl) : { [key : string] : any} => {

            if(!control.value) return null;

            const valid = regExp.test(control.value);

            return valid ? null : error;
        }
    }

    static passwordValidator(control: AbstractControl){
        const password: string = control.get('password').value; // get password from our password form control
        const confirmPassword: string = control.get('confirmPassword').value; // get password from our confirmPassword form control
        // compare is the password math
        if (password !== confirmPassword) {
            // if they don't match, set an error in our confirmPassword form control
            const required = confirmPassword ? false : true 
            control.get('confirmPassword').setErrors({
                 NoPassswordMatch: true ,
                 required : required
                });
        }
    }

}
