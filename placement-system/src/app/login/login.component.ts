import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  validLogin = false;

  constructor(private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {
    (this.authenticationService.authenticate(this.username, this.password).subscribe(
      data => {
        console.log("valid");
        console.log(data);
        if (this.authenticationService.isAdminUser()) {
          this.router.navigate(['/view-applications'])
        }
        else {
          this.router.navigate(['/application'])
        }
        
        this.validLogin = true
      },
      error => {
        console.log("invalid");
        this.validLogin = false
      }
    ));

  }

}
