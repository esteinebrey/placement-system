import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) {

  }

  // When logout, show the login page and remove info from session
  ngOnInit() {
    this.authenticationService.logOut();
    this.router.navigate(['login']);
  }

}
