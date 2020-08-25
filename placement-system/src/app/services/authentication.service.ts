import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { serviceUrl, authentication } from '../endpoints.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // Type of the user - student, ta, or admin
  userType: string ='';
  // ID of user
  userId: number = -1;

  constructor(private httpClient:HttpClient) { 
  }

  // Authenticate user upon login
  authenticate(username: string, password: string) {
    return this.httpClient.post<any>(`${serviceUrl}${authentication}`,{username,password}).pipe(
     map(
       userData => {
        // Store username and tokens
        sessionStorage.setItem('username', username);
        let tokenStr= 'Bearer ' + userData.token;
        sessionStorage.setItem('token', tokenStr);
        // Keep track of user's ID and permissions
        this.userType = userData.permissions;
        this.userId = userData.userId;
        return userData;
       }
     )

    );
  }

  // Get JWT Token
  getToken() {
    return sessionStorage.getItem('token');
  }

  // Determine if user has type admin or not
  isAdminUser() {
    if (this.userType === 'admin') {
      return true;
    }
    return false;
  }

  // Determine if user is logged in
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    return !(user === null)
  }

  // Logs out the user
  logOut() {
    sessionStorage.removeItem('username')
  }
}
