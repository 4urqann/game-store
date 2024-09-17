import { Injectable, OnInit } from '@angular/core';
import { User } from '../../authentication/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  baseURL = "http://localhost:3000/users";
  user!: User;
  users!: User[];

  getUser(user: User) {
    this.user = user;
  }

  // ngOnInit(): void {
  //   this.http.get<User[]>(this.baseURL)
  //   .subscribe((users) => {
  //     this.users = users;
  //   })
  // }

  get usernames(): User[] {
    let users!: User[];
    this.http.get<User[]>(this.baseURL)
      .subscribe((usersGot) => {
        users = usersGot;
      });
    return users;
  }


}
