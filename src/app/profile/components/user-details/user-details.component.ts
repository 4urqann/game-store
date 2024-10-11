import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../shared/services/profile.service';
import { User } from '../../../authentication/user.model';
import { AuthenticationService } from '../../../authentication/authentication.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit {

  constructor(public profileService: ProfileService,
    private authService: AuthenticationService) { }

  activeUser!: User;

  userId = this.authService.session.id;

  ngOnInit(): void {

    const users = this.profileService.users;

    users.forEach(user => {

      if (user.id === this.userId) {
        this.activeUser = user;
      } else { }

    });

  }

}
