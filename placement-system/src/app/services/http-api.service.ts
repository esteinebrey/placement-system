import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { Course } from '../models/course.model';
import { Skill } from '../models/skill.model';
import { serviceUrl, authentication, allCourses, allSkills, api } from '../endpoints.constants';

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

  constructor(private httpClient:HttpClient) { 
  }

  /*getUsers() {
    return this.httpClient.get<User>(`${serviceUrl}${authentication}`);
  }*/

  getAllCourses() {
    return this.httpClient.get<Course[]>(`${serviceUrl}${api}${allCourses}`);
  }

  getAllProgrammingLanguages() {
    return this.httpClient.get<Skill[]>(`${serviceUrl}${api}${allSkills}`);
  }
}
