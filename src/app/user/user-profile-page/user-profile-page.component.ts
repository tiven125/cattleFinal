import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/shared/auth/auth.service';

@Component({
    selector: 'app-user-profile-page',
    templateUrl: './user-profile-page.component.html',
    styleUrls: ['./user-profile-page.component.scss']
})
export class UserProfilePageComponent implements OnInit {
  constructor(private authService: AuthService) { }

  ngOnInit() {
    
  }
}
