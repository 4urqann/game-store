import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";

import { User } from "../../user.model";
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  genders = ['male', 'female']
  baseURL: string = "http://localhost:3000/users"

  constructor(private http: HttpClient, private router: Router) {
  }

  loginForm: FormGroup = new FormGroup({
    "profile": new FormGroup({
      "username": new FormControl(null, Validators.required),
      "password": new FormControl(null, Validators.required)
    })
  });

  submit() {
    console.log(this.loginForm);
    console.log(this.loginForm.value);

    this.http.post(this.baseURL, this.loginForm.value.profile).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/homepage']);
      })

    // const data = this.http.get(this.baseURL);
    // console.log(data);

    // this.http.post('${this.baseURL}',"profile");
  }
}
