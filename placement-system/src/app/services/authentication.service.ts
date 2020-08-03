import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userType ='';
  userId = -1;

  constructor(private httpClient:HttpClient) { 
  }

  authenticate(username, password) {
    return this.httpClient.post<any>(`${serviceUrl}${authentication}`,{username,password}).pipe(
     map(
       userData => {
        console.log("authenticate");
        sessionStorage.setItem('username', username);
        let tokenStr= 'Bearer ' + userData.token;
        sessionStorage.setItem('token', tokenStr);
        this.userType = userData.permissions;
        this.userId = userData.userId;
        return userData;
       }
     )

    );
  }

  isAdminUser() {
    if (this.userType === 'admin') {
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
