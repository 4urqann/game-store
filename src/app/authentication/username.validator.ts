// import { AbstractControl, ValidationErrors } from "@angular/forms";
// import { AuthenticationService } from "./authentication.service";
// import { inject, Injector } from "@angular/core";
// import { HttpClient } from "@angular/common/http";
// import { ProfileService } from "../shared/services/profile.service";
// import { User } from "./user.model";

// export function usernameValidator(control: AbstractControl): { [key: string]: any } | null {


//     // const usernames = inject(ProfileService).users;
//     // console.log(usernames);

//     let injector = Injector.create([{ provide: ProfileService, useClass: ProfileService, deps: [] }])
//     let profileService = injector.get(ProfileService);
//     const usernames = profileService.users;

//     if( (usernames || []).find((user) => user.username === control.value ) ) {
//         return {'usernameExist': {value: control.value}}
//     } else {
//         return null
//     }

//     // if (usernames.forEach(user => { user.username === control.value }); ) {
//     //     return { 'usernameExist': { value: control.value } }
//     // } else {
//     //     return null;
//     // }

//     // const alreadyExists = (usernames || []).find((user: User) => user.username === control.value);

//     // return alreadyExists === undefined ? { 'usernameExist': {value: control.value}} : null;

// }

// // return forbidden ? {'forbiddenName': {value: control.value}} : null;