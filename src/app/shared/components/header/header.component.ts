import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { ProfileService } from '../../services/profile.service';
import { CartService } from '../../../home/services/cart.service';
import { User } from '../../../authentication/user.model';
import { AuthenticationService } from '../../../authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  constructor(
    public notiService: NotificationService,
    public profileService: ProfileService,
    public cartService: CartService,
    public authService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

}
