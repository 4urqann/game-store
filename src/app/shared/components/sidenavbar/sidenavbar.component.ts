import { Component } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { CartService } from '../../../home/services/cart.service';
import { AuthenticationService } from '../../../authentication/authentication.service';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrl: './sidenavbar.component.scss'
})
export class SidenavbarComponent {

  constructor(public cartService: CartService,
    public notiService: NotificationService,
    public authService: AuthenticationService
  ) { }
}
