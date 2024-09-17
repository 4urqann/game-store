import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  AbstractControl
} from "@angular/forms";

// import { usernameValidator } from "../../username.validator";
import { User } from "../../user.model";
// import { passwordValidator } from '../../password.validator';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  genders = ['male', 'female']
  baseURL: string = "http://localhost:3000/users"

  constructor(private http: HttpClient, private router: Router) {
    console.log(this.loginForm);

    this.loginForm.valueChanges.subscribe(() => {
      console.log(this.loginForm.get(['profile', 'username']));
    });

  }

  loginForm: FormGroup = new FormGroup({
    profile: new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.minLength(6)]),

      "security": new FormGroup<any>({
      "password": new FormControl(null, [Validators.required]),
      "confirmPassword": new FormControl(null, [Validators.required]),
    }
    // , { validators: passwordValidator }
    )

    }),
    
  });

  // get password(): AbstractControl | null {
  //   return this.loginForm.get(['profile', 'password'])                                
  // }

  // get password2(): AbstractControl | null {
  //   return this.loginForm.get(['profile', 'confirmPassword'])
  // }

  get username(): AbstractControl | null {
    return this.loginForm.get(['profile', 'username']);
  }



  submit() {
    console.log(this.loginForm);
    console.log(this.loginForm.value);

    this.http.post(this.baseURL, this.loginForm.value.profile).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/home']);
      })

    // const data = this.http.get(this.baseURL);
    // console.log(data);

    // this.http.post('${this.baseURL}',"profile");
  }


}
