import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { first, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) {}

  list(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.API).pipe(first(), delay(500));
  }

  save(record: Partial<Course>) {
    return this.httpClient.post<Course>(this.API, record);
  }
}
