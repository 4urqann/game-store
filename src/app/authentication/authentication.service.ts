import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseURL: string = "http://localhost:3000/users"

  users!: User[];

  constructor(private http: HttpClient) { }

  set session(data: User) {
    localStorage.setItem('loginSession', JSON.stringify(data));
  }

  get session(): User {
    const data = localStorage.getItem('loginSession');
    return data ? JSON.parse(data) : null;
  }

  get isLoggedIn(): boolean {
    return this.session ? true : false;
  }

}
