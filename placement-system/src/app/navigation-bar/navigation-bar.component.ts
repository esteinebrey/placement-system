import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  isLoggedInAdmin: boolean;
  isLoggedInStudent: boolean;
  isLoggedIn: boolean;

  constructor(private authenticationService: AuthenticationService) { }

  // Determine which parts of navigation bar should be visible
  ngOnInit() {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    this.isLoggedInAdmin = this.isLoggedIn && this.authenticationService.isAdminUser();
    this.isLoggedInStudent = this.isLoggedIn && !this.authenticationService.isAdminUser();
  }

}
