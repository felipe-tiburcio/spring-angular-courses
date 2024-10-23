import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  displayedColumns = ['id', 'name', 'category'];

  courses: Course[] = [];

  constructor(private coursesService: CoursesService) {
    this.courses = coursesService.list();
  }

  ngOnInit(): void {}
}
