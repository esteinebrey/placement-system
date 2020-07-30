import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

  constructor(private httpClient:HttpClient) { 
  }

  getUsers() {
    return this.httpClient.get<User>('http://localhost:8080/api/validateLogin');
  }
}
