import { Component, OnInit } from '@angular/core';
import { HttpApiService } from '../services/http-api.service';
import { Course } from '../models/course.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {
  name: String;
  email: String;
  idNumber: number;
  gpa: number;
  major: String;
  graduationDate: String;
  courseOptions: Course[];
  skillOptions: Skill[];
  otherSkills: String;

  constructor(private httpApiService: HttpApiService) { }

  ngOnInit() {
    this.httpApiService.getAllCourses().subscribe(courses => this.courseOptions = courses);
    this.httpApiService.getAllProgrammingLanguages().subscribe(skills => this.skillOptions = skills);
    console.log(this.courseOptions);
    console.log(this.skillOptions);
    console.log(sessionStorage.getItem('token'));
  }

}
