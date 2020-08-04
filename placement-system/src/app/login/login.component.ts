import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // Keep track of username, password, and if login is valid
  username: string = '';
  password: string = '';
  isValidLogin: boolean = false;

  constructor(private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  // When submit username and password, use authentication service to authenticate
  checkLogin() {
    (this.authenticationService.authenticate(this.username, this.password).subscribe(
      data => {
        // Navigate to the right page based on the user type
        if (this.authenticationService.isAdminUser()) {
          this.router.navigate(['/view-applications'])
        }
        else {
          this.router.navigate(['/application'])
        }
        // Update if login is valid
        this.isValidLogin = true
      },
      error => {
        this.isValidLogin = false
      }
    ));
  }
}
