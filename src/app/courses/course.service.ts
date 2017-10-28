import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import '../rxjs-operators';
import { Course } from './course';
import { SpinnerService } from '../blocks/spinner';
import { ExceptionService } from '../blocks/exception.service';
import {CONFIG} from '../api/config';
import {HttpClient} from '@angular/common/http';

const coursesUrl = CONFIG.baseUrls.courses;

@Injectable()
export class CourseService {
  constructor(
    private _http: HttpClient,
    private _spinnerService: SpinnerService,
    private _exceptionService: ExceptionService
  ) { }

  addCourse(course: Course) {
    this._spinnerService.show();
    return this._http
      .post(`${coursesUrl}`, course)
      .catch(this._exceptionService.catchBadResponse)
      .finally(() => this._spinnerService.hide());
  }

  deleteCourse(course: Course) {
    this._spinnerService.show();
    return this._http
      .delete(`${coursesUrl}/${course.id}`)
      .catch(this._exceptionService.catchBadResponse)
      .finally(() => this._spinnerService.hide());
  }

  getCourses() {
    this._spinnerService.show();

    return this._http.get('/api/courses')
      .catch(this._exceptionService.catchBadResponse)
      .finally(() => this._spinnerService.hide());
  }

  getCourse(id: number): Observable<Course> {
    this._spinnerService.show();
    return this._http.get(`${coursesUrl}/${id}`)
      .map((response: any) => response.data as Course)
      .catch(this._exceptionService.catchBadResponse)
      .finally(() => this._spinnerService.hide());
  }


  updateCourse(course: Course) {
    this._spinnerService.show();

    return this._http
      .put(`${coursesUrl}/${course.id}`, course)
      .catch(this._exceptionService.catchBadResponse)
      .finally(() => this._spinnerService.hide());
  }
}
