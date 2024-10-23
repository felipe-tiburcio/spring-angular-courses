import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private httpClient: HttpClient) {
    httpClient.get('/');
  }

  list(): Course[] {
    return [
      { _id: '1', name: 'Angular', category: 'Frontend' },
      { _id: '2', name: 'Java', category: 'Backend' },
      { _id: '3', name: 'SQL', category: 'Backend' },
    ];
  }
}
