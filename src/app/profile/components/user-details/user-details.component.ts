import { Component } from '@angular/core';
import { ProfileService } from '../../../shared/services/profile.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
 
  constructor(public profileService: ProfileService) {}
  
}
