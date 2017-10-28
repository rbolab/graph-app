import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseService} from './course.service';
import {Course} from './course';
import {ToastService} from '../blocks/toast/toast.service';
import {ModalService} from "../blocks/modal/modal.service";

@Component({
  selector: 'lyxor-course',
  templateUrl: 'course.component.html'
})
export class CourseComponent implements OnInit {

  course: Course;
  editCourse: Course;

  constructor(private _courseService: CourseService,
              private _route: ActivatedRoute,
              private _router: Router,
              private _toastService: ToastService,
              private _modalService: ModalService) {
  }

  private setEditCourse(course: Course) {
    if (course) {
      this.course = course;
      this.editCourse = Object.assign({}, course);
    } else {
      this.goToCourses();
    }
  }


  delete () {
    const msg = `Do you want to delete the course : ${this.course.name}?`;
    this._modalService.activate(msg).then(responseOK => {
      if (responseOK) {
        this._courseService.deleteCourse(this.course)
          .subscribe(() => {
            this._toastService.activate(`Deleted ${this.course.name}`);
            this.goToCourses();
          });
      }
    });
  }

  save = () => {
    this._courseService.updateCourse(this.editCourse)
      .subscribe(() => {
        this._toastService.activate(`Successfully saved ${this.editCourse.name}`);
        this.goToCourses();
      });

  }

  cancel = () => {
    this.editCourse = Object.assign({}, this.course);
    this.goToCourses();
  }

  goToCourses = () => {
    this._router.navigate(['courses']);
  }

  ngOnInit() {
    this._route.params.subscribe((params: { id: number }) => {
        this._courseService.getCourse(params.id).subscribe(
          course => this.setEditCourse(course)
        );
      }
    );
  }
}
