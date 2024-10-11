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
  users: User[] = [
    
    {
      "id": "1",
      "username": "Furqan",
      "password": "furqan123",
      "pfp": "https://as1.ftcdn.net/v2/jpg/02/30/18/38/1000_F_230183813_qYgzfF0O03ucX1COQ7BVfGhnYKuQpOjV.jpg"
    },
    {
      "id": "2",
      "username": "Faraz",
      "password": "farazzz",
      "pfp": "https://pbs.twimg.com/profile_images/1712983847904874496/aQG_ujPY_400x400.jpg"
    },
    {
      "id": "9651",
      "username": "faiz",
      "password": "faizuuu",
      "pfp": "https://wallpapercave.com/wp/wp9549819.jpg"
    }
    
  ];

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
