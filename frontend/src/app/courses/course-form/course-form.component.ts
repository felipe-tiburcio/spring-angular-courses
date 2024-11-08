import { Component, OnInit } from '@angular/core';
import { FormControl, NonNullableFormBuilder } from '@angular/forms';
import { CoursesService } from '../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  form = this.formBuilder.group({
    name: new FormControl('', { nonNullable: true }),
    category: [''],
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: CoursesService,
    private _snackBar: MatSnackBar,
    private location: Location
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.service.save(this.form.value).subscribe(
      (data) => this.onSuccess(),
      (error) => this.onError(error)
    );

    this.goBack();
  }

  onCancel() {
    this.goBack();
  }

  goBack() {
    this.location.back();
  }

  private onError(error: any) {
    this._snackBar.open(error.message, 'Close', {
      duration: 5000,
    });
  }

  private onSuccess() {
    this._snackBar.open('Course saved!', 'Close', {
      duration: 5000,
    });


  }
}
