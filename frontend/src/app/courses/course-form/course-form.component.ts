import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CoursesService } from '../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: CoursesService,
    private _snackBar: MatSnackBar,
    private location: Location
  ) {
    this.form = this.formBuilder.group({
      name: [],
      category: [],
    });
  }

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
