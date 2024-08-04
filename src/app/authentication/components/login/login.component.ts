import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../user.model';
import { Router } from '@angular/router';
import { CartService } from '../../../home/services/cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private http: HttpClient,
              private router: Router,
              private cartService: CartService) { }

  userProfile: string = '';

  baseURL: string = "http://localhost:3000/users"

  loginForm: FormGroup = new FormGroup({
    "username": new FormControl(null, Validators.required),
    "password": new FormControl(null, Validators.required)
  });

  submit() {
    let users!: User[];
    console.log(this.loginForm);
    console.log(this.loginForm.value);

    this.http.get<User[]>(this.baseURL).subscribe((data: User[]) => {
      users = data;
      console.log(users);

      users.forEach(user => {
        console.log(user);
        if (this.loginForm.value.username === user.username && this.loginForm.value.password === user.password) {
          console.log('success');
          this.router.navigate(['home']);

        } else { }

      });

    });

  }

  


}
