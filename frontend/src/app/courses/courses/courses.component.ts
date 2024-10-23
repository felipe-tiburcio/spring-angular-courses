import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  displayedColumns = ['id', 'name', 'category'];

  courses: Course[] = [
    { _id: '1', name: 'Angular', category: 'Frontend' },
    { _id: '2', name: 'Java', category: 'Backend' },
    { _id: '3', name: 'SQL', category: 'Backend' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
