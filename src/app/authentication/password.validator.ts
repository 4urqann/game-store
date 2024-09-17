// import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
// import { Observable } from "rxjs";

// export function passwordValidator(): ValidatorFn {

//     return (group: AbstractControl): Observable<ValidationErrors> | null {

        
//         const password1 = group.get(['password']);
//         const password2 = group.get(['confirmPassword']);
        
//         if( password1 === password2 ) {
//             password2?.setErrors(null);
//         } else {
//             password2?.setErrors({ 'alreadyExists': {value: password2!.value}});
//         }
        
//       return;  
//     } 
    

// }