import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../shared/auth.service';


// User interface
export class User {
    name: String;
    email: String;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor( public authService: AuthService ) {
    this.authService.profileUser().subscribe((data:any) => {
      this.UserProfile = data; })  }

    UserProfile: User;


  ngOnInit(): void {
  }

}