import { FormGroup } from '@angular/forms';
 
export class ChangepasswordValidator {
    static validate(changepasswordFormGroup: FormGroup) {
        let password = changepasswordFormGroup.controls.newpassword.value;
        let confirmPassword = changepasswordFormGroup.controls.confirmnewpassword.value;
 
        if (confirmPassword.length <= 0) {
            return null;
        }
 
        if (confirmPassword !== password) {
            return {
                doesMatchPassword: true
            };
        }
 
        return null;
 
    }
}
